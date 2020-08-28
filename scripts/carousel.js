// Variables
// The array with needed data to our slider
const slideList = [{
        img: './images/proj-images/1.other-portfolio.jpg',
        title: `Portfolio z większymi projektami`,
        shortDescription: 'Jest to strona portfolio zbierająca kilka aplikacji włącznie z dwuosobowym projektem - w rozwoju',
        source: 'https://kruchy1980.github.io/wsb-landing-portfolio/',
    },
    {
        img: './images/proj-images/2.todo-app.jpg',
        title: 'Todo Apka',
        shortDescription: 'Prosta todo Apka w JS, HTML i CSS',
        source: 'https://kruchy1980.github.io/todo-app/',
    },
    {
        img: './images/proj-images/3.countdown-timer.jpg',
        title: 'Odliczator czasu',
        shortDescription: 'Prosty Czaso odliczator z możliwością ustawiania obrazka wydarzenia',
        source: 'https://kruchy1980.github.io/countdown-timer/',
    },
    {
        img: './images/proj-images/4.bill-splitter.jpg',
        title: 'Obliczacz napiwków',
        shortDescription: 'Prosty Kalkulator obliczania należności włącznie z napiwkiem na jednego członka grupy',
        source: 'https://kruchy1980.github.io/bill-splitter/',
    },
    {
        img: './images/proj-images/5.stopper.jpg',
        title: 'Stoper',
        shortDescription: 'Prosty stoper z możliwością dostosowywania kolorystyki',
        source: 'https://kruchy1980.github.io/stopper/',
    },
    {
        img: './images/proj-images/6.register-form.jpg',
        title: 'Formularz rejestracyjny',
        shortDescription: 'Dynamicznie walidowany formularz rejestracyjny',
        source: 'https://kruchy1980.github.io/register-form/',
    },
    {
        img: './images/proj-images/7.my-notes.jpg',
        title: 'Notatnik',
        shortDescription: 'Notatnik umożliwiający dodawanie notatek do określonych kilku kategorii - bez użycia zewnętrznej bazy danych',
        source: 'https://kruchy1980.github.io/notes/',
    },
    {
        img: './images/proj-images/8.magic-8-ball.jpg',
        title: 'Magiczna bila 8',
        shortDescription: 'Zapytaj a odpowiem',
        source: 'https://kruchy1980.github.io/magic-8-ball/',
    },
    {
        img: './images/proj-images/9.budget.jpg',
        title: 'Twój Portfel',
        shortDescription: `Aplikacja obliczająca Twój budżet na podstawie podanych danych - bez użycia zewnętrznej bazy danych`,
        source: 'https://kruchy1980.github.io/finance-manager/',
    },
    {
        img: './images/proj-images/10.currency-rate.jpg',
        title: 'Przelicznik wymiany walut',
        shortDescription: `Aplikacja korzystająca z api przeliczników walut i obliczająca ilość otrzymanych pieniędzy po wymianie.
        Technologie użyte:
        <ul>       
        <1i>1. HTML</li>
        <1i>2. CSS</li>
        <1i>3. Javascript</li>
        </ul>`,
        source: 'https://kruchy1980.github.io/exchange-rate-app/',
    },
    {
        img: './images/proj-images/11.drink-searcher.jpg',
        title: 'Wyszukiwarka drinków',
        shortDescription: `Projekt, w którym z przygotowanej w HTML\'u listy możemy wyszukać dany produkt(drink) wpisując jego nazwę w wyszukiwarkę.<br>Użyte technologie użyte:<ul><1i>1. HTML</li><1i>2. CSS</li><1i>3.Javascript</li></ul>`,
        source: 'https://kruchy1980.github.io/drink-searcher/',
    }
];

// Sliding time - defaulted value
let timer = 8000;
// Active slide- defaulted value
let activeSlide = 0;
// Single image
const singleImage = document.querySelector('.projects__box__item--image');
// Title of slide
const slideTitle = document.querySelector('.projects__box__item--title');
// Description
const slideDescription = document.querySelector('.projects__box__item--description');
// Indicator dots
const indicators = [...document.querySelectorAll('.indicators-dots span')];


// II. Functions
const changeOnArrows = (e) => {
    // Statement Of arrow change
    if (e.keyCode === 37 || e.keyCode === 39) {
        clearInterval(slideInterval);
        e.keyCode === 37 ? activeSlide-- : activeSlide++;
    }
    // Statement of cycling slides
    if (activeSlide === slideList.length) {
        activeSlide = 0;
    } else if (activeSlide < 0) {
        activeSlide = slideList.length - 1;
    }
    // What to do everytime the function is called
    // Image set
    singleImage.src = slideList[activeSlide].img;
    slideTitle.href = slideList[activeSlide].source;
    slideTitle.alt = slideList[activeSlide].title;
    slideTitle.innerHTML = `<i class="far fa-hand-point-right"></i> ${slideList[activeSlide].title}`;
    slideDescription.innerHTML = slideList[activeSlide].shortDescription;
    // Change the indicator
    indicatorActiveSet();
    // Set the interval once more
    slideInterval = setInterval(slideChange, timer);
};

// Indicator set function
const indicatorActiveSet = () => {
    const activeIndicator = indicators.findIndex(el => el.classList.contains('active'));
    indicators[activeIndicator].classList.remove('active');
    indicators[activeSlide].classList.add('active');
};

// Changing slides method
const slideChange = () => {
    // Statement if the list is on the end or other side
    if (activeSlide >= slideList.length - 1) activeSlide = -1;
    activeSlide++;
    singleImage.src = slideList[activeSlide].img;
    slideTitle.href = slideList[activeSlide].source;
    slideTitle.alt = slideList[activeSlide].title;
    slideTitle.innerHTML = `<i class="far fa-hand-point-right"></i> ${slideList[activeSlide].title}`;
    slideDescription.innerHTML = slideList[activeSlide].shortDescription;
    indicatorActiveSet();
};

// Change on click
const switchSlideOnClick = e => {
    if (e) {
        // console.log(e, e.target);
        clearInterval(slideInterval);
        activeSlide = Number(e.target.id) - 1;
        // console.log(activeSlide);
        singleImage.src = slideList[activeSlide].img;
        slideTitle.href = slideList[activeSlide].source;
        slideTitle.alt = slideList[activeSlide].title;
        slideTitle.innerHTML = `<i class="far fa-hand-point-right"></i> ${slideList[activeSlide].title}`;
        slideDescription.innerHTML = slideList[activeSlide].shortDescription;
        indicatorActiveSet();
        slideInterval = setInterval(slideChange, timer);
    }
};


// Declare interval method
let = slideInterval = setInterval(slideChange, timer);

// III. Event listeners
//  Changing on arrows
window.addEventListener('keydown', changeOnArrows);

// Changing on click
if (indicators) {
    indicators.forEach(el => {
        if (el.tagName === 'SPAN') {
            el.addEventListener('click', switchSlideOnClick);
        }
    });
};