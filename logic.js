const menu = document.querySelector('.menu');
const navlist = document.querySelector('.navbar');
menu.addEventListener('click', function () {
    navlist.classList.toggle('active');
})
const fixnav = function () {
    if (screen.width() > 600) {
        navlist.classList('navbar');
    }
}