'use strict';

let currentIndex = 0;
let interval;
let timeout;

export default function () {
    let inputs = document.getElementsByClassName('input');
    inputs[0].checked=true;
    const allSlides = document.getElementsByClassName('slide');

    for(let i=0;i<allSlides.length;i++){
        inputs[i].onchange = function () {
            disableAllSlides();
            currentIndex = i;
            updateSlide();
            clearInterval(interval);
            clearInterval(timeout);
            restartInterval();
        };
    }

    function disableAllSlides() {
        for(let slide of allSlides){
            slide.classList.remove('activeSlide');
        }
    }

   function updateSlide() {
        allSlides[currentIndex].classList.add('activeSlide');
    }

    function nextSlide(){
        disableAllSlides();
        currentIndex = (currentIndex + 1) % allSlides.length;
        inputs[currentIndex].checked = true;
        updateSlide();
    }

    function restartInterval() {
        timeout =  setTimeout(startInterval,5000);
    }

    function startInterval(){
        interval = setInterval(nextSlide,5000);
    }

    startInterval();
    updateSlide();
}