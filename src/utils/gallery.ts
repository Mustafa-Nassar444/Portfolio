/** Native dialog provides focus containment, Escape dismissal, and modal semantics. */
export function initializeGalleries() {
  document.querySelectorAll<HTMLElement>('[data-gallery]').forEach((gallery) => {
    const links = Array.from(gallery.querySelectorAll<HTMLAnchorElement>('[data-gallery-image]'));
    const dialog = gallery.querySelector<HTMLDialogElement>('dialog');
    const image = gallery.querySelector<HTMLImageElement>('[data-lightbox-image]');
    const caption = gallery.querySelector<HTMLElement>('[data-lightbox-caption]');
    const counter = gallery.querySelector<HTMLElement>('[data-lightbox-counter]');
    const status = gallery.querySelector<HTMLElement>('[data-lightbox-status]');
    const original = gallery.querySelector<HTMLAnchorElement>('[data-lightbox-original]');
    const close = gallery.querySelector<HTMLButtonElement>('[data-lightbox-close]');
    const previous = gallery.querySelector<HTMLButtonElement>('[data-lightbox-prev]');
    const next = gallery.querySelector<HTMLButtonElement>('[data-lightbox-next]');
    if (!links.length || !dialog || typeof dialog.showModal !== 'function' || !image || !caption || !counter || !status || !original || !close || !previous || !next) return;
    let current = 0;
    let trigger: HTMLAnchorElement | undefined;
    let previousOverflow = '';
    const display = (index: number) => {
      current = (index + links.length) % links.length;
      const link = links[current];
      if (!link) return;
      image.alt = link.dataset.alt ?? '';
      image.src = link.href;
      image.hidden = false;
      caption.textContent = link.dataset.caption ?? '';
      counter.textContent = `${current + 1} / ${links.length}`;
      status.textContent = `Image ${current + 1} of ${links.length}`;
      original.href = link.href;
      previous.hidden = next.hidden = links.length < 2;
    };
    links.forEach((link, index) => link.addEventListener('click', (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
      trigger = link;
      display(index);
      dialog.showModal();
      event.preventDefault();
      previousOverflow = document.documentElement.style.overflow;
      document.documentElement.style.overflow = 'hidden';
      close.focus();
    }));
    previous.addEventListener('click', () => display(current - 1));
    next.addEventListener('click', () => display(current + 1));
    close.addEventListener('click', () => dialog.close());
    dialog.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault(); display(current + (event.key === 'ArrowLeft' ? -1 : 1));
      }
    });
    dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
    dialog.addEventListener('close', () => {
      document.documentElement.style.overflow = previousOverflow;
      trigger?.focus();
    });
    image.addEventListener('error', () => { image.hidden = true; status.textContent = 'This image could not be loaded. Use the original image link to try again.'; caption.textContent = 'Image unavailable.'; });
  });
}
