'use strict';
import {createImage} from '../../../../utils';
import {createComment} from './SlideTextElements';
import {createAuthor} from './SlideTextElements';

function createSlideImage(slideData) {
    let avatar = document.createElement('div');
    avatar.classList.add('avatar');
    avatar.appendChild(createImage(slideData.image,'https://media.istockphoto.com/videos/abstract-glowing-crystal-motion-background-video-id840157978?s=640x640'));
    return avatar;
}

function createSlideText(slideData) {
    let textContainer = document.createElement('div');
    textContainer.classList.add('textContainer');
    textContainer.appendChild(createComment(slideData));
    textContainer.appendChild(createAuthor(slideData));
    return textContainer;
}

export default function (slideData) {
    let slide = document.createElement('li');
    slide.classList.add('slide');
    slide.appendChild(createSlideImage(slideData));
    slide.appendChild(createSlideText(slideData));
    return slide;
}