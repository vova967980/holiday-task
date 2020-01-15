'use strict';

export default function () {
    let input = document.createElement("input");
    input.type = "radio";
    input.name = "slide";
    input.classList.add("input");
    return input;
}