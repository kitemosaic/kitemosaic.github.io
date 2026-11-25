(() => {
  const root = document.documentElement;
  const key = "redbluetap-appearance";
  const modes = ["system", "light", "dark"];
  const system = window.matchMedia("(prefers-color-scheme: dark)");
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const lightColor = themeColor.content;
  let mode = "system";
  let selector;

  try {
    const saved = localStorage.getItem(key);
    if (modes.includes(saved)) mode = saved;
  } catch {}

  function apply() {
    root.dataset.appearance = mode;
    themeColor.content = mode === "dark" || (mode === "system" && system.matches) ? "#1b253f" : lightColor;
    if (selector) selector.value = mode;
  }

  apply();
  system.addEventListener("change", apply);
  window.addEventListener("storage", event => {
    if (event.key !== key && event.key !== null) return;
    mode = modes.includes(event.newValue) ? event.newValue : "system";
    apply();
  });

  document.addEventListener("DOMContentLoaded", () => {
    selector = document.getElementById("appearance");
    selector.value = mode;
    selector.closest(".appearance-control").hidden = false;
    selector.addEventListener("change", () => {
      mode = selector.value;
      apply();
      try {
        if (mode === "system") localStorage.removeItem(key);
        else localStorage.setItem(key, mode);
      } catch {}
    });
  });
})();
