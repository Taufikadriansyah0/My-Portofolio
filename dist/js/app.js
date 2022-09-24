// navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixednav =header.offsetTop;

    if(window.pageYOffset > fixednav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed')
    }
}

// bagian navbar

const navbar = document.querySelector('#navbar');
const navmenu = document.querySelector('#navmenu');

navbar.addEventListener('click', function () {
    navbar.classList.toggle('navbar-active')
    navmenu.classList.toggle('hidden');
});