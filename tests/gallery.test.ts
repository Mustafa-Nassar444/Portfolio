import assert from 'node:assert/strict';
import { test } from 'node:test';
import { initializeGalleries } from '../src/utils/gallery.ts';

class Control {
  hidden = false;
  alt = '';
  src = '';
  href = '';
  textContent = '';
  dataset: Record<string, string> = {};
  focused = false;
  events = new Map<string, (event: Event) => void>();
  focus() { this.focused = true; }
  addEventListener(name: string, listener: (event: Event) => void) { this.events.set(name, listener); }
  emit(name: string, data = {}) { this.events.get(name)?.(data as Event); }
}

class Dialog extends Control {
  open = false;
  showModal() { this.open = true; }
  close() { this.open = false; this.emit('close'); }
}

test('gallery wraps navigation, preserves modified clicks, and restores focus and scrolling', () => {
  const links = [new Control(), new Control()];
  links.forEach((link, index) => { link.href = `/image-${index}.svg`; link.dataset = { alt: `Image ${index}`, caption: `Caption ${index}` }; });
  const selectors = ['[data-lightbox-image]', '[data-lightbox-caption]', '[data-lightbox-counter]', '[data-lightbox-status]', '[data-lightbox-original]', '[data-lightbox-close]', '[data-lightbox-prev]', '[data-lightbox-next]'];
  const controls = new Map(selectors.map((selector) => [selector, new Control()]));
  const dialog = new Dialog();
  const root = { style: { overflow: 'auto' } };
  const gallery = { querySelectorAll: () => links, querySelector: (selector: string) => selector === 'dialog' ? dialog : controls.get(selector) };
  const previousDocument = Object.getOwnPropertyDescriptor(globalThis, 'document');
  Object.defineProperty(globalThis, 'document', { configurable: true, value: { documentElement: root, querySelectorAll: () => [gallery] } });
  try {
    initializeGalleries();
    const first = links[0]!;
    let prevented = false;
    first.emit('click', { button: 0, ctrlKey: true, preventDefault() { prevented = true; } });
    assert.equal(dialog.open, false);
    assert.equal(prevented, false);
    first.emit('click', { button: 0, preventDefault() { prevented = true; } });
    assert.equal(dialog.open, true);
    assert.equal(prevented, true);
    assert.equal(root.style.overflow, 'hidden');
    assert.equal(controls.get('[data-lightbox-close]')!.focused, true);
    assert.equal(controls.get('[data-lightbox-image]')!.src, '/image-0.svg');
    controls.get('[data-lightbox-prev]')!.emit('click');
    assert.equal(controls.get('[data-lightbox-image]')!.src, '/image-1.svg');
    dialog.emit('keydown', { key: 'ArrowRight', preventDefault() {} });
    assert.equal(controls.get('[data-lightbox-counter]')!.textContent, '1 / 2');
    assert.equal(controls.get('[data-lightbox-caption]')!.textContent, 'Caption 0');
    controls.get('[data-lightbox-image]')!.emit('error');
    assert.equal(controls.get('[data-lightbox-image]')!.hidden, true);
    assert.equal(controls.get('[data-lightbox-caption]')!.textContent, 'Image unavailable.');
    controls.get('[data-lightbox-close]')!.emit('click');
    assert.equal(dialog.open, false);
    assert.equal(root.style.overflow, 'auto');
    assert.equal(first.focused, true);
  } finally {
    if (previousDocument) Object.defineProperty(globalThis, 'document', previousDocument);
    else Reflect.deleteProperty(globalThis, 'document');
  }
});
