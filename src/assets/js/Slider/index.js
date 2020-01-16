'use strict';
import createSlide from './Slide';
import createInput from './RadioButton';
import sliderLogic from './SliderLogic';


export default function (slides) {

    const inputsContainer = document.querySelector('.inputsContainer');
    const containerSlides = document.getElementById('containerSlides');
    let iterator = 0;
    for( let slideData of slides ){
        containerSlides.appendChild(createSlide(slideData));
        inputsContainer.appendChild(createInput());
        iterator++;
        if(iterator >= 6) break;
    }
    sliderLogic();
}