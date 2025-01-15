// Toggle class active
const navbarAnchor = document.querySelector('.navbar-anchor');

// Hamburger Menu active
document.querySelector('#hamburger-menu').onclick = () => {
    navbarAnchor.classList.toggle('active');
}

// click outside hamburger menu
const hamburgerMenu = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if (!hamburgerMenu.contains(e.target) && !navbarAnchor.contains(e.target)) {
        navbarAnchor.classList.remove('active');
    }
})