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

