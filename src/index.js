'use strict';
import './assets/css/reset.css';
import './assets/scss/layout.scss';
import './assets/scss/styles.scss';


let header=document.getElementById("header");
window.onscroll = function() {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 50) {
            header.classList.add("fixed");
    }
    else {
        header.classList.remove("fixed");
    }
};

//=====================================================================

function closeMenu(){
    navigation[0].classList.remove("open");
    middleLine[0].classList.remove("visibilityHidden");
    topLine[0].classList.remove("rotateTopLine");
    bottomLine[0].classList.remove("rotateBottomLine");
    state=false;
}

let  navigation = document.getElementsByClassName("navigation");
let  menuLink = document.getElementsByClassName("menuLink");
let middleLine = document.getElementsByClassName("middleLine");
let topLine = document.getElementsByClassName("topLine");
let bottomLine = document.getElementsByClassName("bottomLine");
let state = false;
menuLink[0].onclick = function () {
    if(state === false) {
        middleLine[0].classList.add("visibilityHidden");
        navigation[0].classList.add("open");
        topLine[0].classList.add("rotateTopLine");
        bottomLine[0].classList.add("rotateBottomLine");
        state = true;
    }
    else{
        closeMenu();
    }
};

let elementOfLi = document.getElementsByClassName("elementOfLi");
elementOfLi[0].onclick=closeMenu;
elementOfLi[1].onclick=closeMenu;
elementOfLi[2].onclick=closeMenu;
elementOfLi[3].onclick=closeMenu;
elementOfLi[4].onclick=closeMenu;

//======================================================================

let images = document.getElementsByClassName("workContainer");
let imagesOpen = document.getElementsByClassName("imageOpen");
let currentImage = document.getElementById("currentImageWorks");
let backgroundDark = document.getElementsByClassName("backgroundDark");
let closeButton = document.getElementsByClassName("closeIcon");
let imagesSrc = [
  "./assets/images/work-1.jpg",
  "./assets/images/work-2.jpg",
  "./assets/images/work-3.jpg",
  "./assets/images/work-4.jpg",
  "./assets/images/work-5.jpg",
  "./assets/images/work-6.jpg",
  "./assets/images/work-7.jpg",
  "./assets/images/work-8.jpg"
];

for (let i=0;i<images.length;i++) {
    images[i].onclick = function () {
        imagesOpen[0].classList.add("openImage");
        currentImage.src = imagesSrc[i];
    };
}
backgroundDark[0].onclick = function () {
    imagesOpen[0].classList.remove("openImage");
};
closeButton[0].onclick = function () {
    imagesOpen[0].classList.remove("openImage");
};

//=====================================================================

const loadData = async function(){
    try {
        const response = await fetch("data/employees.json");
        const data = await response.json();
        for (let i = 0; i < data.length; i++){
            appendEmployeeItem(data[i]);
        }
    }
    catch (e) {
        console.log(e);
    }
};

loadData();

const iconsContacts =['fa-facebook','fa-twitter','fa-linkedin','fa-google-plus','fa-dribbble'];

function createEmployeeItem(employee) {
    const personItemContainer = document.createElement('div');
    personItemContainer.classList.add('person');

    const personImage = document.createElement('img');
    personImage.src = employee.profilePicture;

    const personContentContainer = document.createElement('div');
    personContentContainer.classList.add('personContent');

    const personFullName = document.createElement('h4');
    personFullName.innerText = employee.fullName;

    const personRole = document.createElement('h5');
    personRole.innerText = employee.role;

    const personText = document.createElement('p');
    personText.innerText = "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo.";

    const personContactsContainer = document.createElement('ul');

    for(let i=0;i<employee.contacts.length;i++){
        const contactContainer = document.createElement('li');
        const contactLink = document.createElement('a');
        contactLink.classList.add('socialIcons');
        contactLink.href = employee.contacts[i];
        const icon = document.createElement('i');
        icon.classList.add('fab',iconsContacts[i]);

        personContactsContainer.appendChild(contactContainer);
        contactContainer.appendChild(contactLink);
        contactLink.appendChild(icon);
    }

    personItemContainer.appendChild(personImage);
    personItemContainer.appendChild(personContentContainer);
    personItemContainer.appendChild(personContactsContainer);

    personContentContainer.appendChild(personFullName);
    personContentContainer.appendChild(personRole);
    personContentContainer.appendChild(personText);
    return personItemContainer;
}

function appendEmployeeItem(employee) {
    document.getElementById('employees').appendChild(createEmployeeItem(employee));
}

//===============================================================

/*let avatar = document.querySelector('.avatar');
let inputsContainer = document.querySelector('.inputsContainer');
let comment = document.getElementById('comment');
let imageAuthor = document.getElementById('imageAuthor');
let author = document.getElementById('author');
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
    let input = document.createElement("input");
    input.type = "radio";
    input.name = "slide";
    input.classList.add("input");
    inputsContainer.appendChild(input);
}

let inputs = document.getElementsByClassName('input');
inputs[0].checked=true;

for(let i = 0; i < slides.length; i++){
    inputs[i].onchange = function () {
        currentIndex = i;
        updateSlide();
        clearInterval(interval);
        clearInterval(timeout);
        restartInterval();
        avatar.classList.add('useOpen');
    }
}

function updateSlide() {
    imageAuthor.src = slides[currentIndex].image;
    comment.innerText = slides[currentIndex].comment;
    author.innerText = slides[currentIndex].author;
    avatar.appendChild(imageAuthor);
}

const nextSlide = function(){
  currentIndex = (currentIndex + 1) % slides.length;
    inputs[currentIndex].checked = true;
    updateSlide();
};


const restartInterval = function () {
    timeout = setTimeout(startInterval,10000);
};
const startInterval = function(){
    interval = setInterval(nextSlide,5000);
};
startInterval();

window.onload = function () {
    updateSlide();
};*/

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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
    timeout = setTimeout(startInterval,10000);
};
const startInterval = function(){
    interval = setInterval(nextSlide,5000);
};
startInterval();

window.onload = function () {
    updateSlide();
};