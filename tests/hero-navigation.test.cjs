const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const vm = require('node:vm');
const source = readFileSync('public/app.js', 'utf8');
const start = source.indexOf('  function updateScroll()');
const end = source.indexOf("  window.addEventListener('scroll', updateScroll", start);
const code = source.slice(start, end);

function state(scrollY, heroBottom, focused = false) {
  const classes = new Set(); const attributes = {}; let menuClosed = 0; let focusMoved = false;
  const active = {};
  const header = { offsetHeight: 80, contains: e => focused && e === active,
    classList: { toggle(name, on) { if (on) classes.add(name); else classes.delete(name); } },
    setAttribute(name, value) { attributes[name] = value; } };
  const logo = { getAttribute: () => './assets/hmt/logo-hmt.png' };
  const ctx = { scrollY, innerHeight: 720, header, progress: { style: {} },
    document: { activeElement: active, documentElement: { scrollHeight: 20000 } },
    closeMenu() { menuClosed++; }, $$: () => [],
    $(selector) {
      if (selector === '#hero') return { getBoundingClientRect: () => ({ bottom: heroBottom }) };
      if (selector === 'img') return logo;
      if (selector === '#main') return { focus(options) { assert.equal(options.preventScroll, true); focusMoved = true; } };
    } };
  vm.runInNewContext(`${code}\nupdateScroll();`, ctx);
  return { hidden: classes.has('hero-nav-hidden'), inert: header.inert, attributes, menuClosed, focusMoved, scrolled: classes.has('scrolled') };
}

test('navigation stays visible at the start of the film', () => {
  const s = state(0, 7120); assert.equal(s.hidden, false); assert.equal(s.inert, false);
});
test('scrolling within the film hides navigation and moves keyboard focus out of it', () => {
  const s = state(250, 6870, true); assert.equal(s.hidden, true); assert.equal(s.inert, true);
  assert.equal(s.attributes['aria-hidden'], 'true'); assert.equal(s.menuClosed, 1); assert.equal(s.focusMoved, true);
});
test('navigation returns after the film and when scrolling back to the top', () => {
  assert.equal(state(7200, -80).hidden, false); assert.equal(state(7200, -80).scrolled, true);
  assert.equal(state(20, 7100).hidden, false);
});
