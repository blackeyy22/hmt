const { test } = require('node:test');
const assert = require('node:assert/strict');
async function setup() {
  const { createHeroScrubber } = await import('../lib/hero-video-scrubber.mjs');
  const video = new EventTarget(); video.duration = 10; video.readyState = 1; video.seeking = false;
  const seeks = []; let time = 0; let clock = 0; let id = 0;
  const frames = new Map(); const timers = new Map();
  Object.defineProperty(video, 'currentTime', { get: () => time, set(value) { time = value; seeks.push(value); video.seeking = true; } });
  const scrubber = createHeroScrubber(video, { retryMs: 250, requestFrame: fn => { frames.set(++id, fn); return id; }, cancelFrame: key => frames.delete(key), now: () => clock, setTimer: fn => { timers.set(++id, fn); return id; }, clearTimer: key => timers.delete(key) });
  const tick = () => { const pending = [...frames.values()]; frames.clear(); pending.forEach(fn => fn()); };
  const settle = () => { video.seeking = false; video.readyState = 2; video.dispatchEvent(new Event('seeked')); tick(); };
  return { video, scrubber, seeks, tick, settle, timers, frames, advance: value => { clock += value; const pending = [...timers.values()]; timers.clear(); pending.forEach(fn => fn()); tick(); } };
}
test('metadata-only state can seek and burst scroll targets coalesce to the latest frame', async () => {
  const c = await setup(); c.scrubber.setActive(true);
  c.scrubber.setProgress(.1); c.scrubber.setProgress(.5); c.tick();
  assert.equal(c.seeks.length, 1); assert.ok(Math.abs(c.seeks[0] - 5.0166667) < .001); c.scrubber.dispose();
});
test('in-flight seek finishes before applying the newest scroll target; settled frame does not loop', async () => {
  const c = await setup(); c.scrubber.setActive(true); c.scrubber.setProgress(.2); c.tick();
  c.scrubber.setProgress(.8); c.tick(); assert.equal(c.seeks.length, 1);
  c.settle(); assert.equal(c.seeks.length, 2); assert.ok(c.seeks[1] > 7.9);
  c.settle(); assert.equal(c.seeks.length, 2); c.scrubber.dispose();
});
test('a newer target can interrupt a stalled obsolete range after the recovery deadline', async () => {
  const c = await setup(); c.scrubber.setActive(true); c.scrubber.setProgress(.1); c.tick();
  c.scrubber.setProgress(.9); c.tick(); assert.equal(c.seeks.length, 1);
  c.advance(251); assert.equal(c.seeks.length, 2); assert.ok(c.seeks[1] > 8.9); c.scrubber.dispose();
});
test('late metadata retries the target and cleanup prevents future seeks', async () => {
  const c = await setup(); c.video.readyState = 0; c.scrubber.setActive(true); c.scrubber.setProgress(1); c.tick(); assert.equal(c.seeks.length, 0);
  c.video.readyState = 1; c.video.dispatchEvent(new Event('loadedmetadata')); c.tick(); assert.ok(c.seeks[0] < 10);
  c.scrubber.dispose(); c.video.dispatchEvent(new Event('progress')); c.tick(); assert.equal(c.seeks.length, 1); assert.equal(c.timers.size, 0);
});
test('metadata-only progress never restarts the same seek before its frame is decoded', async () => {
  const c = await setup(); c.scrubber.setActive(true); c.scrubber.setProgress(.5); c.tick();
  c.video.seeking = false; c.video.readyState = 1;
  for (const event of ['seeked', 'progress', 'progress', 'loadeddata']) { c.video.dispatchEvent(new Event(event)); c.tick(); }
  assert.equal(c.seeks.length, 1); assert.equal(c.timers.size, 0); c.scrubber.dispose();
});
