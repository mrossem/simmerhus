// Previous/next buttons for the scroll-snap carousels. Without JavaScript the tracks still scroll by swipe.
for (const [root, trackSel, prevSel, nextSel] of [
  [".carousel", ".carousel__track", ".carousel__btn--prev", ".carousel__btn--next"],
  [".partners", ".partners__track", ".partners__btn--prev", ".partners__btn--next"],
]) {
  document.querySelectorAll(root).forEach((el) => {
    const track = el.querySelector(trackSel);
    const prev = el.querySelector(prevSel);
    const next = el.querySelector(nextSel);
    if (!track || !prev || !next) return;
    if (track.children.length < 2) { prev.hidden = next.hidden = true; return; }
    const step = (dir) => {
      const width = track.clientWidth;
      const atEnd = track.scrollLeft + width >= track.scrollWidth - 2;
      const atStart = track.scrollLeft <= 2;
      if (dir > 0 && atEnd) track.scrollTo({ left: 0 });
      else if (dir < 0 && atStart) track.scrollTo({ left: track.scrollWidth });
      else track.scrollBy({ left: dir * width });
    };
    prev.addEventListener("click", () => step(-1));
    next.addEventListener("click", () => step(1));
  });
}
