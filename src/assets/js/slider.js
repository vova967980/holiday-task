'use strict';



let inputsContainer = document.querySelector('.inputsContainer');
let containerSlides = document.getElementById('containerSlides');
let currentIndex = 0;
let interval;
let timeout;
const slides = [
    {
        image: "./assets/images/testimonial-1.jpg",
        comment: "\"Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui. Aenean eu leo quam...\"",
        author: "Susan Sims, Interaction Designer at XYZ"
    },
    {
        image: "./assets/images/testimonial-2.jpg",
        comment: "\"Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur....\"",
        author: "Susan Sims, Interaction Designer at XYZ"
    },
];



for (let i = 0; i<slides.length; i++){
    let slide = document.createElement('li');
    slide.classList.add('slide');
    let avatar = document.createElement('div');
    avatar.classList.add('avatar');
    let img = document.createElement('img');
    img.src = slides[i].image;
    let textContainer = document.createElement('div');
    textContainer.classList.add('textContainer');
    let p = document.createElement('p');
    p.id = "comment";
    p.innerText = slides[i].comment;
    let h4 = document.createElement('h4');
    h4.id = "author";
    h4.innerText = slides[i].author;

    textContainer.appendChild(p);
    textContainer.appendChild(h4);
    avatar.appendChild(img);
    slide.appendChild(avatar);
    slide.appendChild(textContainer);
    containerSlides.appendChild(slide);

    let input = document.createElement("input");
    input.type = "radio";
    input.name = "slide";
    input.classList.add("input");
    inputsContainer.appendChild(input);
}

let inputs = document.getElementsByClassName('input');
inputs[0].checked=true;
let allSlides = document.getElementsByClassName('slide');

for(let i = 0; i < slides.length; i++){
    inputs[i].onchange = function () {
        disableAllSlides();
        currentIndex = i;
        updateSlide();
        clearInterval(interval);
        clearInterval(timeout);
        restartInterval();
    }
}

function disableAllSlides() {
    for(let i = 0; i < slides.length; i++){
        allSlides[i].classList.remove('activeSlide');
    }
}

function updateSlide() {
    allSlides[currentIndex].classList.add('activeSlide');
}

const nextSlide = function(){
    disableAllSlides();
    currentIndex = (currentIndex + 1) % slides.length;
    inputs[currentIndex].checked = true;
    updateSlide();
};

const restartInterval = function () {
    timeout = setTimeout(startInterval,5000);
};
const startInterval = function(){
    interval = setInterval(nextSlide,5000);
};
startInterval();

window.onload = function () {
    updateSlide();
};