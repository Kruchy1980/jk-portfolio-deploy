// I. VARIABLES
// Dropdown menu button
const dropdownBtn = document.querySelector('.main-navigation__menu-item__submenu--dropdown-btn');

// Submenu list
const submenuProj = document.querySelector('.main-navigation__menu-item__submenu--list');

// II. Function.js
const showSubmenu = () => {
    submenuProj.classList.toggle('hidden__submenu');
};

// Event check listener
dropdownBtn.addEventListener('click', showSubmenu);