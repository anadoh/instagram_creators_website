function handleNav() {
    const nav = document.getElementById('main-nav');
    const hamburger = document.getElementById('hamburger');

    if (!nav.classList.contains('main-nav--active')) {
        nav.classList.add('main-nav--active');
        hamburger.classList.add('hamburger--active');
    } else {
        nav.classList.remove('main-nav--active');
        hamburger.classList.remove('hamburger--active');
    }
}

function init() {
    const nav = document.getElementById('main-nav');
    const hamburger = document.getElementById('hamburger');

    hamburger.addEventListener('click', handleNav);
    
    nav.childNodes.forEach(function(element) {
        element.addEventListener('click', handleNav);
    });
}

init();