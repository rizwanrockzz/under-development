// main.js

var sliderimg = document.querySelector('.slider-img');
var images = ['img-1.jpg', 'img-2.jpg', 'img-3.jpg', 'img-4.jpg'];
var i = 0;

function prev() {
    if (i <= 0) i = images.length;
    i--;
    return setImg();
}

function nxt() {
    if (i >= images.length - 1) i = -1;
    i++;
    return setImg();
}

function setImg() {
    return sliderimg.setAttribute('src', 'images/' + images[i]);
}


//top.js
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    }
    else {
        toTop.classList.remove("active");
    }
})