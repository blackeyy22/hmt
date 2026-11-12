// One native seek at a time, with the latest scroll target replacing stale work.
// Quantizing to 30 display samples/second avoids repeatedly decoding subframes.
export function createHeroScrubber(video, {
  fps = 30,
  requestFrame = requestAnimationFrame,
  cancelFrame = cancelAnimationFrame,
  now = () => performance.now(),
  retryMs = 2500,
  setTimer = setTimeout,
  clearTimer = clearTimeout,
} = {}) {
  let progress = 0;
  let active = false;
  let disposed = false;
  let frame = 0;
  let retry;
  let issuedAt = -Infinity;
  let issuedTime = null;
  const targetTime = () => {
    const count = Math.max(1, Math.floor(video.duration * fps));
    return Math.min(video.duration - 0.001, (Math.round(progress * (count - 1)) + 0.5) / fps);
  };
  const schedule = () => {
    if (!disposed && !frame) frame = requestFrame(flush);
  };
  const flush = () => {
    frame = 0;
    // Metadata is sufficient to request a seek, even when a previous seek has
    // temporarily emptied the decoded-frame buffer (readyState === 1).
    if (disposed || !active || video.readyState < 1 || !Number.isFinite(video.duration) || video.duration <= 0) return;
    const target = targetTime();
    // currentTime updates before a frame is decoded. Reissuing that same seek
    // on progress/seeked can repeatedly interrupt decoding on a slow stream.
    if (issuedTime === target && Math.abs(video.currentTime - target) < 0.5 / fps) return;
    if (video.seeking) {
      // Usually seeked wakes us. If an obsolete range is stuck downloading,
      // allow a newer scroll position to replace it after a short deadline.
      if (now() - issuedAt < retryMs) {
        if (retry === undefined) retry = setTimer(() => { retry = undefined; schedule(); }, retryMs);
        return;
      }
    } else if (video.readyState >= 2 && Math.floor(video.currentTime * fps + 1e-5) === Math.floor(target * fps)) return;
    clearTimer(retry);
    retry = undefined;
    issuedAt = now();
    issuedTime = target;
    video.currentTime = target;
  };
  const settled = () => {
    clearTimer(retry);
    retry = undefined;
    schedule();
  };
  const events = ['loadedmetadata', 'loadeddata', 'canplay', 'progress', 'seeked'];
  events.forEach(event => video.addEventListener(event, settled));
  return {
    setProgress(value) { progress = Math.max(0, Math.min(1, value)); schedule(); },
    setActive(value) { active = value; if (active) schedule(); },
    dispose() {
      disposed = true;
      cancelFrame(frame);
      clearTimer(retry);
      events.forEach(event => video.removeEventListener(event, settled));
    },
  };
}
