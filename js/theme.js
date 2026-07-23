(function () {
  var storageKey = "the-all-theme";
  var root = document.documentElement;

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    sessionStorage.setItem(storageKey, theme);
    var btn = document.querySelector(".theme-toggle");
    if (btn) {
      btn.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      );
    }
  }

  function flipTheme() {
    var current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
    applyTheme(current === "dark" ? "light" : "dark");
  }

  var current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  applyTheme(current);

  document.querySelector(".theme-toggle")?.addEventListener("click", flipTheme);
})();
