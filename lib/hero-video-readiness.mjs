// Measure the continuous buffered opening, not a timer-based or byte-count estimate.
export function bufferedFraction(video) {
  if (!Number.isFinite(video.duration) || video.duration <= 0) return 0;
  let end = 0;
  for (let i = 0; i < video.buffered.length; i++) {
    if (video.buffered.start(i) > end + 0.25) break;
    end = Math.max(end, video.buffered.end(i));
  }
  return Math.min(1, end / video.duration);
}

// Match the reference site's first-frame gate. Buffering continues through the
// native media request; the opening screen never waits for a file percentage.
export function watchHeroVideo(video, {
  onReady, onError, onTimeout, onProgress = () => {}, onFirstFrame = () => {},
  timeoutMs = 8000,
}) {
  let ready = false;
  let failed = false;
  let firstFrame = false;
  const timer = setTimeout(() => {
    if (!ready && !failed) onTimeout();
  }, timeoutMs);
  const release = reason => {
    if (ready || failed) return;
    ready = true;
    clearTimeout(timer);
    onReady({ reason, bufferedFraction: bufferedFraction(video) });
  };
  const loaded = () => {
    if (ready || failed) return;
    const fraction = bufferedFraction(video);
    onProgress(fraction);
    if (!firstFrame && video.readyState >= 2) {
      firstFrame = true;
      onFirstFrame();
    }
    if (video.readyState >= 2) release('first-frame');
  };
  const error = () => {
    if (failed) return;
    failed = true;
    clearTimeout(timer);
    onError();
  };
  const events = ['loadedmetadata', 'loadeddata', 'canplay', 'progress', 'suspend', 'timeupdate'];
  events.forEach(event => video.addEventListener(event, loaded));
  video.addEventListener('error', error);
  if (video.error) error();
  else loaded();
  return () => {
    clearTimeout(timer);
    events.forEach(event => video.removeEventListener(event, loaded));
    video.removeEventListener('error', error);
  };
}
