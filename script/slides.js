'use strict'

const nextBtn = document.getElementById('next');
const previousBtn = document.getElementById('previous');
const container = document.querySelector('.container');
const slides = document.querySelectorAll('.slide');


//--> Manage the place of the slides
let current = 0;
let next = 1;
let previous = 4;


const slide = (number) => {
    current = number;
    next = current + 1;
    previous = current - 1;

    slides.forEach((slide) => slide.classList.remove('active', 'before', 'after'));


    if (next == 5) {
        next = 0;
    }

    if (previous == -1) {
        previous = 4;
    }

    slides[current].classList.add('active');
    slides[previous].classList.add('before');
    slides[next].classList.add('after');
}


//-->Management of the next slide
const goNext = () => {
    if (current > 0) {
        slide(current - 1);
    } else {
        slide(slides.length - 1);
    }
}
//-->Management of the previous slide

const goPrevious = () => {
    if (current < 4) {
        slide(current + 1);
    } else {
        slide(0);
    }
}


//--> events management

nextBtn.addEventListener('click', function() {
    goNext();
});

previousBtn.addEventListener('click', function () {
    goPrevious()
});
