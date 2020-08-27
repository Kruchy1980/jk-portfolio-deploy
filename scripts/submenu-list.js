// I.VARIABLES
// Sub-menu list
const submenuListDisplay = document.querySelector('.main-navigation__menu-item__submenu--list');
// main-navigation__menu-item__submenu--list
// Array with the links and names and paths to the projects of projects
const projectsDataList = [{
        projTitle: '1. Wyszukiwarka drinków',
        projSource: 'https://kruchy1980.github.io/drink-searcher/',
    },
    {
        projTitle: '2. Todo Apka',
        projSource: 'https://kruchy1980.github.io/todo-app/',
    },
    {
        projTitle: '3. Odliczator czasu',
        projSource: 'https://kruchy1980.github.io/countdown-timer/',
    },
    {
        projTitle: '4. Obliczacz napiwków',
        projSource: 'https://kruchy1980.github.io/bill-splitter/',
    },
    {
        projTitle: '5. Stoper',
        projSource: 'https://kruchy1980.github.io/stopper/',
    },
    {
        projTitle: '6. Formularz rejestracyjny',
        projSource: 'https://kruchy1980.github.io/register-form/',
    },
    {
        projTitle: '7. Notatnik',
        projSource: 'https://kruchy1980.github.io/notes/',
    },
    {
        projTitle: '8. Magiczna bila 8',
        projSource: 'https://kruchy1980.github.io/magic-8-ball/',
    },
    {
        projTitle: '9. Twój Portfel',
        projSource: 'https://kruchy1980.github.io/finance-manager/',
    },
    {
        projTitle: '10. Przelicznik wymiany walut',
        projSource: 'https://kruchy1980.github.io/exchange-rate-app/',
    },
    {
        projTitle: '11. Portfolio z większymi projektami',
        projSource: 'https://kruchy1980.github.io/wsb-landing-portfolio/ ',
    }
];

// For template html
// <li class="main-navigation__menu-item__submenu--list-item">
//     <a class="main-navigation__menu-item__submenu--list-item__link" href="#">Github Searcher</a>

// </li>
// II. FUNCTIONS
// Add an item to ul
const addProject = () => {
    console.log('projects added');
    projectsDataList.forEach(el => {
        // console.log(el);
        let listElement = document.createElement('li');
        // listElement.classList.add('.main-navigation__menu-item__submenu--list-item');
        // console.log(listElement);
        listElement.innerHTML = `<a
        class="main-navigation__menu-item__submenu--list-item__link" href="${el.projSource}" target="_blank">${el.projTitle}</a>
        `
            // console.log(listElement);
        submenuListDisplay.appendChild(listElement);
    });

};

// Event listener on load
window.addEventListener('load', addProject);