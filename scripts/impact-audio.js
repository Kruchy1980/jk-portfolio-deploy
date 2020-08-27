// The audio for hammer impact logic
// I. VARIABLES
const hammerEl = document.querySelector('.hamm-impact');
// II. Functions
const hammerImpact = () => {
        const song = new Audio('./audio/hammer.mp3');
        song.play();
    }
    // III. Evennt Listener
hammerEl.addEventListener('mouseover', hammerImpact);