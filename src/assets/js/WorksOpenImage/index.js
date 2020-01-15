'use strict';

let images = document.getElementsByClassName("image");
let imagesOpen = document.getElementsByClassName("imageOpen")[0];
let currentImage = document.getElementById("currentImageWorks");
let backgroundDark = document.getElementsByClassName("backgroundDark")[0];
let closeButton = document.getElementsByClassName("closeIcon")[0];

for (let image of images) {
    image.onclick = function (event) {
        imagesOpen.classList.add("openImage");
        currentImage.src = event.target.src;
    };
}

backgroundDark.onclick = function () {
    imagesOpen.classList.remove("openImage");
};

closeButton.onclick = function () {
    imagesOpen.classList.remove("openImage");
};

