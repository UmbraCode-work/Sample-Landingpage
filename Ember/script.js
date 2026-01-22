const navBar = document.getElementById("site-header");
const openButton = document.querySelector(".open-sidebar-button");
const navLinks = navBar.querySelectorAll("a");
const media = window.matchMedia("max-width:768px)");

media.addEventListener("change", (e) => updateNavBar(e));

function updateNavBar(e) {
  const isMobile = e.matches;
  if (isMobile) {
    navBar.setAttribute("inert", "");
  } else {
    navBar.removeAttribute("inert");
  }
}

function openSidebar() {
  navBar.classList.add("show");
  openButton.setAttribute("aria-expanded", "true");
  navBar.removeAttribute("inert");
}

function closeSidebar() {
  navBar.classList.remove("show");
  openButton.setAttribute("aria-expanded", "false");
  navBar.setAttribute("inert", "");
}

navLinks.forEach((link) => {
  link.addEventListener("click", closeSidebar);
});

updateNavBar(media);
