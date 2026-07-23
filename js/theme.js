(function () {
  var overrideKey = "the-all-theme-override";
  var root = document.documentElement;

  function getTimeBasedTheme() {
    var hour = new Date().getHours();
    return hour >= 18 || hour < 6 ? "dark" : "light";
  }

  function getActiveTheme() {
    var override = sessionStorage.getItem(overrideKey);
    if (override === "dark" || override === "light") {
      return override;
    }
    return getTimeBasedTheme();
  }

  function applyTheme(theme, isOverride) {
    root.setAttribute("data-theme", theme);
    if (isOverride) {
      sessionStorage.setItem(overrideKey, theme);
    } else {
      sessionStorage.removeItem(overrideKey);
    }
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
    applyTheme(current === "dark" ? "light" : "dark", true);
  }

  function syncTheme() {
    applyTheme(getActiveTheme(), false);
  }

  applyTheme(getActiveTheme(), !!sessionStorage.getItem(overrideKey));

  document.querySelector(".theme-toggle")?.addEventListener("click", flipTheme);

  setInterval(function () {
    if (!sessionStorage.getItem(overrideKey)) {
      var theme = getTimeBasedTheme();
      if (root.getAttribute("data-theme") !== theme) {
        applyTheme(theme, false);
      }
    }
  }, 60000);
})();
