(() => {
  const menuBtnRef = document.querySelector(".about-me__btn");
  const mobileMenuRef = document.querySelector(".mobile-menu");

  menuBtnRef.addEventListener("click", () => {
    menuBtnRef.classList.toggle("is-open");
    mobileMenuRef.classList.toggle("is-hidden");
  });
})();