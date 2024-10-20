// Mobile menu
const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.links.mobile');
menuBtn.addEventListener('click', menuToggle);

function menuToggle() {
    navbar.classList.toggle('display');
}