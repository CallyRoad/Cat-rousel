'use strict'
const imgPathsLight = [
    '../img/light-side/beautifulcat.png',
    '../img/light-side/playingcat.png',
    '../img/light-side/powercat.png',
    '../img/light-side/sleepingcat.png',
    '../img/light-side/suncat.png'
];

const imgPathsDark = [
    '../img/dark-side/catdomination.png',
    '../img/dark-side/catoasting.png',
    '../img/dark-side/catstronaut.png',
    '../img/dark-side/royalcat.png',
    '../img/dark-side/worlddomination.png',
]


const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2')
//--> Buttons dark & light
const darkBtn = document.getElementById('dark-mode');
const lightBtn = document.getElementById('light-mode');
const imgSlides = document.querySelectorAll('.img-slide');

console.log(imgSlides)

let currentImg = 0;

const changeImageSrc = (images) => {
    for (let i = 0; i < slides.length; i++) {
        slides[i].querySelector('.img-slide').setAttribute('src', images[i]);
    }
};


const darkMode = () => {
    body.classList.add('toggle-dark');
    darkBtn.classList.add('mode-active');
    lightBtn.classList.remove('mode-active');
    body.classList.remove('toggle-light');
    const h1 = document.querySelector('h1');

    h1.innerHTML = `Cat's domination`;
    h2.innerHTML = `How they really are :`;

    changeImageSrc(imgPathsDark)
};

const lightMode = () => {
    body.classList.remove('toggle-dark');
    lightBtn.classList.add('mode-active');
    darkBtn.classList.remove('mode-active')
    body.classList.add('toggle-light');
    
    h1.innerHTML = `Cat's adoration`;
    h2.innerHTML = `How we think they are :`;

    changeImageSrc(imgPathsLight);
};

//--> Events
darkBtn.addEventListener('click', function() {
    darkMode();

});

lightBtn.addEventListener('click', function() {
    lightMode();
});


//--> new slide

