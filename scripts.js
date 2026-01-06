document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("mobile-menu-button");
  const menu = document.getElementById("mobile-menu");
  const iconMenu = document.getElementById("icon-menu");
  const iconClose = document.getElementById("icon-close");

  if (!btn || !menu || !iconMenu || !iconClose) return;

  function closeMenu() {
    if (menu.classList.contains("hidden")) return;
    menu.classList.add("hidden");
    iconMenu.classList.remove("hidden");
    iconClose.classList.add("hidden");
    btn.setAttribute("aria-expanded", "false");
  }

  function openMenu() {
    menu.classList.remove("hidden");
    iconMenu.classList.add("hidden");
    iconClose.classList.remove("hidden");
    btn.setAttribute("aria-expanded", "true");
  }

  btn.addEventListener("click", function () {
    const isOpen = !menu.classList.contains("hidden");
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // fecha ao clicar em qualquer link dentro do menu mobile
  const links = menu.querySelectorAll("a[href^='#']");
  links.forEach((link) => {
    link.addEventListener("click", function () {
      closeMenu();
    });
  });
});
