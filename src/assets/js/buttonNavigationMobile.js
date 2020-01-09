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