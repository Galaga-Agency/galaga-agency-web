// /utils/animations/navbar-animation.ts
export function initNavbarAnimations({ isMenuOpen }: { isMenuOpen: boolean }) {
  const tokens = ["overflow-hidden", "touch-none", "overscroll-none"];
  const add = (el: Element) => tokens.forEach((t) => el.classList.add(t));
  const rem = (el: Element) => tokens.forEach((t) => el.classList.remove(t));
  const root = document.documentElement,
    body = document.body;
  if (isMenuOpen) {
    add(root);
    add(body);
  } else {
    rem(root);
    rem(body);
  }
  return () => {
    rem(root);
    rem(body);
  };
}
