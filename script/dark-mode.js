'use strict'


const body = document.querySelector('body');
//--> Buttons dark & light
const darkBtn = document.getElementById('dark-mode');
const lightBtn = document.getElementById('light-mode');




const darkMode = () => {
    body.classList.add('toggle-dark');
    darkBtn.classList.add('mode-active');
    lightBtn.classList.remove('mode-active');
    body.classList.remove('toggle-light');
};

const lightMode = () => {
    body.classList.remove('toggle-dark');
    lightBtn.classList.add('mode-active');
    darkBtn.classList.remove('mode-active')
    body.classList.add('toggle-light');
};


darkBtn.addEventListener('click', function() {
    darkMode();
});

lightBtn.addEventListener('click', function() {
    lightMode();
});