(() => {
  'use strict';

  document
    .querySelectorAll('#greenfield-wheel, #brownfield-row, #industry-row, #why-hmt .story-accordion')
    .forEach((row) => {
      const interact = () => {
        // A pending mobile story-card recenter must yield to the new gesture.
        clearTimeout(row.storyTimer);
        row.autoResumeAt = performance.now() + 12000;
        row.dispatchEvent(new Event('hmt:gallery-interact'));
      };

      row.addEventListener('wheel', (event) => {
        // Wheel events are scoped to this strip: down/up moves right/left while
        // the pointer is over it. Horizontal trackpad gestures remain direct.
        if (event.ctrlKey || row.scrollWidth <= row.clientWidth + 1) return;
        const horizontal = Math.abs(event.deltaX) > Math.abs(event.deltaY);
        const delta = horizontal ? event.deltaX : event.deltaY;
        if (!delta) return;
        const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? row.clientWidth : 1;
        event.preventDefault();
        interact();
        row.scrollBy({ left: delta * unit, behavior: 'instant' });
      }, { passive: false });

      // Touch uses the browser's native two-axis panning.
      row.addEventListener('pointerdown', interact, { passive: true });
      row.addEventListener('touchstart', interact, { passive: true });
    });
})();
