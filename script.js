const siteHeader = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");
const flowTabs = document.querySelector("[data-flow-tabs]");

if (siteHeader && menuToggle && primaryNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteHeader.classList.toggle("menu-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  primaryNav.addEventListener("click", (event) => {
    if (!event.target.closest("a")) {
      return;
    }

    siteHeader.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
}

if (flowTabs) {
  const tabs = [...flowTabs.querySelectorAll("[data-flow-tab]")];
  const panels = [...flowTabs.querySelectorAll(".flow-panel")];

  flowTabs.addEventListener("click", (event) => {
    const tab = event.target.closest("[data-flow-tab]");

    if (!tab) {
      return;
    }

    const targetId = tab.dataset.flowTab;

    tabs.forEach((entry) => {
      const isActive = entry === tab;
      entry.classList.toggle("active", isActive);
      entry.setAttribute("aria-selected", String(isActive));
    });

    panels.forEach((panel) => {
      const isActive = panel.id === targetId;
      panel.classList.toggle("active", isActive);
      panel.hidden = !isActive;
    });
  });
}
