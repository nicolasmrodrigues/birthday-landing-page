AOS.init({
    offset: 50
});

let arrow = document.getElementsByClassName('hero__arrow-down')[0]
document.addEventListener('DOMContentLoaded', function() {
    window.onscroll = function() {
        if (scrollY > 100) {
            arrow.style.opacity = '0';
        } else {
            arrow.style.opacity = '1';
        }
    }
})