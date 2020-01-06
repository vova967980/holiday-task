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
let backgroundDark = document.getElementsByClassName("backgroundDark");
let closeButton = document.getElementsByClassName("closeIcon");


for (let i=0;i<images.length;i++){
    images[i].onclick=function () {
        imagesOpen[i].classList.add("openImage");
    };
    backgroundDark[i].onclick=function () {
        imagesOpen[i].classList.remove("openImage");
    };
    closeButton[i].onclick=function () {
        imagesOpen[i].classList.remove("openImage")
    }
}

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

//=========================