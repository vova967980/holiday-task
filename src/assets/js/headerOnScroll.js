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