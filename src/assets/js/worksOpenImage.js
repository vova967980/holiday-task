'use strict';

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