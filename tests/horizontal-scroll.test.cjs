const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const vm = require('node:vm');

function gallery(width = 2000) {
  const handlers = {};
  const clearedTimers = [];
  const row = {
    scrollWidth: width, clientWidth: 500, scrollLeft: 250, interactions: 0,
    addEventListener(name, handler, options) { handlers[name] = handler; if (name === 'wheel') assert.equal(options.passive, false); },
    dispatchEvent() { this.interactions++; },
    scrollBy({ left, behavior }) { assert.equal(behavior, 'instant'); this.scrollLeft = Math.max(0, Math.min(width - 500, this.scrollLeft + left)); },
  };
  vm.runInNewContext(readFileSync('public/horizontal-scroll.js', 'utf8'), {
    document: { querySelectorAll: () => [row] }, performance: { now: () => 100 }, Event: class {},
    clearTimeout: (timer) => clearedTimers.push(timer),
  });
  function swipe(values) {
    let prevented = false;
    handlers.wheel({ deltaX: 0, deltaY: 0, deltaMode: 0, preventDefault() { prevented = true; }, ...values });
    return prevented;
  }
  return { row, swipe, handlers, clearedTimers };
}

test('horizontal gestures slide directly in both directions and pause gallery motion', () => {
  const { row, swipe } = gallery();
  assert.equal(swipe({ deltaX: 140, deltaY: 9 }), true);
  assert.equal(row.scrollLeft, 390);
  assert.equal(swipe({ deltaX: -85, deltaY: -3 }), true);
  assert.equal(row.scrollLeft, 305);
  assert.equal(row.autoResumeAt, 12100);
  assert.equal(row.interactions, 2);
});

test('down/up wheel over a gallery moves sideways and keeps the page still', () => {
  const { row, swipe } = gallery();
  assert.equal(swipe({ deltaX: 5, deltaY: 120 }), true);
  assert.equal(row.scrollLeft, 370);
  assert.equal(swipe({ deltaY: -90 }), true);
  assert.equal(row.scrollLeft, 280);
  assert.equal(swipe({ deltaX: 0, deltaY: 0 }), false);
});

test('pinch zoom and galleries without horizontal overflow retain browser behavior', () => {
  const { row, swipe } = gallery();
  assert.equal(swipe({ deltaX: 120, ctrlKey: true }), false);
  assert.equal(row.scrollLeft, 250);
  assert.equal(gallery(500).swipe({ deltaX: 120 }), false);
  assert.equal(gallery(500).swipe({ deltaY: 120 }), false);
});

test('normalizes line/page input, Shift-wheel, and horizontal edge gestures', () => {
  const { row, swipe } = gallery();
  swipe({ deltaX: 2, deltaMode: 1 });
  assert.equal(row.scrollLeft, 282);
  swipe({ deltaY: 1, deltaMode: 2, shiftKey: true });
  assert.equal(row.scrollLeft, 782);
  assert.equal(swipe({ deltaX: -5000 }), true);
  assert.equal(row.scrollLeft, 0);
  assert.equal(swipe({ deltaX: -100 }), true);
  assert.equal(swipe({ deltaY: -100 }), true);
  assert.equal(row.scrollLeft, 0);
});

test('a new gesture cancels delayed mobile story centering', () => {
  const { row, swipe, clearedTimers } = gallery();
  row.storyTimer = 42;
  swipe({ deltaX: 100 });
  assert.deepEqual(clearedTimers, [42]);
  assert.equal(row.scrollLeft, 350);
});
