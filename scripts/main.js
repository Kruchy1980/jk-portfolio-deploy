// The main navigation mobile button functionality
// I. Variables
// Hamburger menu button
const hamburgerMenuBtn = document.querySelector('.js-main-navigation__mobile-button');

// Mobile menu list
const mobileMenuList = document.querySelector('.js-main-navigation__menu');

// II. Function
const showMobMenu = () => {
    mobileMenuList.classList.toggle('main-navigation__menu--open');
};

// III. Event Listeners
hamburgerMenuBtn.addEventListener('click', showMobMenu);
mobileMenuList.addEventListener('click', showMobMenu);