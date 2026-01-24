const openSidebarButton = document.querySelector(".open-sidebar");
const closeSidebarButton = document.querySelector(".close-sidebar");
const overlay = document.querySelector(".overlay");
const sidebar = document.querySelector("#primary-navigation");
const sidebarLinks = sidebar.querySelectorAll("a");
const media = window.matchMedia("(max-width: 768px)");

media.addEventListener("change", updateSidebar);

function updateSidebar(e) {
  if (e.matches) {
    sidebar.setAttribute("inert", "");
    overlay.setAttribute("inert", "");
  } else {
    sidebar.removeAttribute("inert");
    sidebar.classList.remove("show");
    openSidebarButton.setAttribute("aria-expanded", "false");
    overlay.setAttribute("inert", "");
  }
}

function openSidebar() {
  if (!media.matches) return;

  sidebar.classList.add("show");
  sidebar.removeAttribute("inert");
  openSidebarButton.setAttribute("aria-expanded", "true");
  overlay.removeAttribute("inert");
}

function closeSidebar() {
  if (!media.matches) return;

  sidebar.classList.remove("show");
  sidebar.setAttribute("inert", "");
  openSidebarButton.setAttribute("aria-expanded", "false");
  overlay.setAttribute("inert", "");
}

sidebarLinks.forEach((link) => {
  link.addEventListener("click", closeSidebar);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && sidebar.classList.contains("show")) {
    closeSidebar();
  }
});

openSidebarButton.addEventListener("click", openSidebar);
closeSidebarButton.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);

updateSidebar(media);
