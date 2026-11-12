const { test } = require('node:test');
const assert = require('node:assert/strict');
const load = () => import('../lib/hero-video-readiness.mjs');
function media() {
  const video = new EventTarget(); video.readyState = 0; video.duration = 100;
  video.ranges = [];
  video.buffered = { get length() { return video.ranges.length; }, start(i) { return video.ranges[i][0]; }, end(i) { return video.ranges[i][1]; } };
  return video;
}
test('opening releases on the first decoded frame without a percentage download gate', async () => {
  const { watchHeroVideo } = await load(); const video = media(); let result; let frames = 0;
  const stop = watchHeroVideo(video, { onReady: value => { result = value; }, onFirstFrame: () => frames++, onError: () => assert.fail('error'), onTimeout: () => assert.fail('timeout') });
  video.readyState = 1; video.dispatchEvent(new Event('loadedmetadata')); assert.equal(result, undefined);
  video.readyState = 2; video.ranges = [[0, .1]]; video.dispatchEvent(new Event('loadeddata'));
  assert.equal(result.reason, 'first-frame'); assert.equal(result.bufferedFraction, .001); assert.equal(frames, 1);
  video.dispatchEvent(new Event('canplay')); assert.equal(frames, 1); stop();
});
test('buffer percentage ignores disconnected seek ranges and unavailable metadata', async () => {
  const { bufferedFraction } = await load(); const video = media();
  video.ranges = [[0, 20], [60, 100]]; assert.equal(bufferedFraction(video), .2);
  video.ranges = [[0, 20], [20.1, 50]]; assert.equal(bufferedFraction(video), .5);
  video.ranges = [[60, 100]]; assert.equal(bufferedFraction(video), 0);
  video.duration = NaN; assert.equal(bufferedFraction(video), 0);
});
test('slow startup timeout releases the page; a late first frame still becomes ready', async () => {
  const { watchHeroVideo } = await load(); const video = media(); let timedOut = 0; let ready = 0;
  const stop = watchHeroVideo(video, { onReady: () => ready++, onError: () => assert.fail('error'), onTimeout: () => timedOut++, timeoutMs: 5 });
  await new Promise(resolve => setTimeout(resolve, 20)); assert.equal(timedOut, 1);
  video.readyState = 2; video.dispatchEvent(new Event('loadeddata')); assert.equal(ready, 1); stop();
});
test('cached first frame resolves immediately; errors are handled once', async () => {
  const { watchHeroVideo } = await load(); const video = media(); video.readyState = 2; let ready = 0; let errors = 0;
  const stop = watchHeroVideo(video, { onReady: () => ready++, onError: () => errors++, onTimeout: () => assert.fail('timeout') });
  assert.equal(ready, 1); video.dispatchEvent(new Event('error')); video.dispatchEvent(new Event('error')); assert.equal(errors, 1); stop();
});
test('unmount cancels timeout and native media listeners', async () => {
  const { watchHeroVideo } = await load(); const video = media(); let calls = 0;
  const stop = watchHeroVideo(video, { onReady: () => calls++, onError: () => calls++, onTimeout: () => calls++, timeoutMs: 5 });
  stop(); video.readyState = 2; video.dispatchEvent(new Event('loadeddata'));
  await new Promise(resolve => setTimeout(resolve, 20)); assert.equal(calls, 0);
});
