const accordion = document.querySelector("[data-accordion]");
const siteHeader = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");

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

if (accordion) {
  accordion.addEventListener("click", (event) => {
    const trigger = event.target.closest(".accordion-trigger");

    if (!trigger) {
      return;
    }

    const item = trigger.closest(".accordion-item");
    const isOpen = item.classList.contains("open");

    accordion.querySelectorAll(".accordion-item").forEach((entry) => {
      entry.classList.remove("open");
      entry.querySelector(".accordion-trigger").setAttribute("aria-expanded", "false");
    });

    if (!isOpen) {
      item.classList.add("open");
      trigger.setAttribute("aria-expanded", "true");
    }
  });
}
