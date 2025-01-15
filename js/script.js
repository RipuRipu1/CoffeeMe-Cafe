// Toggle class active
const navbarAnchor = document.querySelector('.navbar-anchor');

// Hamburger Menu active
document.querySelector('#hamburger-menu').onclick = () => {
    navbarAnchor.classList.toggle('active');
}

// click outside hamburger menu