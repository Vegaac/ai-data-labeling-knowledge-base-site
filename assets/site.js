(() => {
  const button = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-site-nav]");
  if (button && nav) {
    button.addEventListener("click", () => {
      const open = nav.getAttribute("data-open") !== "true";
      nav.setAttribute("data-open", String(open));
      button.setAttribute("aria-expanded", String(open));
    });
  }
  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });
})();
