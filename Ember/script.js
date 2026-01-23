const navBar = document.getElementById("site-header");
const openSidebarButton = document.querySelector(".open-sidebar-button");
const closeSidebarButton = document.querySelector(".close-sidebar-button");
const navLinks = document.querySelectorAll("nav a");
const overlay = document.querySelector("#overlay");
const media = window.matchMedia("(max-width: 768px)");
media.addEventListener("change", (e) => updateNavBar(e));

function updateNavBar(e) {
  const isMobile = e.matches;
  if (isMobile) {
    navBar.setAttribute("inert", "");
  } else {
    navBar.removeAttribute("inert");
    navBar.classList.remove("show");
    openSidebarButton.setAttribute("aria-expanded", "false");
  }
}

function openSidebar() {
  if (!media.matches) return;
  navBar.classList.add("show");
  openSidebarButton.setAttribute("aria-expanded", "true");
  navBar.removeAttribute("inert");
}

function closeSidebar() {
  if (!media.matches) return;
  navBar.classList.remove("show");
  openSidebarButton.setAttribute("aria-expanded", "false");
  navBar.setAttribute("inert", "");
}

navLinks.forEach((link) => {
  link.addEventListener("click", closeSidebar);
});

document.addEventListener("keydown", (e) => {
  if (e === "Escape" && navBar.classList.contains("show")) closeSidebar();
});

openSidebarButton.addEventListener("click", openSidebar);
closeSidebarButton.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);

updateNavBar(media);
