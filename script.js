const navBar = document.getElementById('navBar');
const openButton = document.querySelector('.open-sidebar-button');
const navLinks = document.querySelectorAll('nav a');
const media = window.matchMedia("(width < 700px)");

media.addEventListener('change', (e) => updateNavBar(e))

function updateNavBar(e) {
    const isMoblie = e.matches;
    if(isMoblie){
        navBar.setAttribute('inert', '');
    }
    else{
        navBar.removeAttribute('inert');
    }
}   

function openSidebar(){
    navBar.classList.add('show');
    openButton.setAttribute('aria-expanded', 'true');
    navBar.removeAttribute('inert');
}

function closeSidebar(){
    navBar.classList.remove('show');
    openButton.setAttribute('aria-expanded', 'false');
    navBar.setAttribute('inert', '');
}

navLinks.forEach(link => {
    link.addEventListener('click', () =>{
        closeSidebar();
})})

updateNavBar(media);