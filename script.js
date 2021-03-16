function showImg(path) {
    document.querySelector('.bigImg').src = path;
}

function changeCircleColor(color) {
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

function toggleMenu() {
    var menuBurger = document.querySelector('.toggle');
    var nav = document.querySelector('.nav');

    menuBurger.classList.toggle('active');
    nav.classList.toggle('active');
}