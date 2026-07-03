document.addEventListener('DOMContentLoaded', function () {

    // Smooth scroll for in-page hash links
    document.querySelectorAll('a[href^="/#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            if (
                location.pathname.replace(/^\//, '') === anchor.pathname.replace(/^\//, '') &&
                location.hostname === anchor.hostname
            ) {
                e.preventDefault();
                var target = document.querySelector(anchor.hash);
                if (target) {
                    var hamburger = document.querySelector('#menuToggle input[type="checkbox"]');
                    if (hamburger) hamburger.checked = !hamburger.checked;
                    window.scrollTo({
                        top: target.getBoundingClientRect().top + window.scrollY - 150,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Mobile nav: expand/collapse sub-levels
    document.querySelectorAll('.nav-expand').forEach(function (item) {
        var expandLink = item.querySelector('.nav-expand-link');
        var backLink   = item.querySelector('.nav-back-link');
        if (expandLink) expandLink.addEventListener('click', function () { item.classList.add('active'); });
        if (backLink)   backLink.addEventListener('click',   function () { item.classList.remove('active'); });
    });

    // Create and append overlay
    var overlay = document.createElement('div');
    overlay.id = 'body-overlay';
    overlay.classList.add('d-none');
    document.body.appendChild(overlay);

    var bodyOverlay   = document.getElementById('body-overlay');
    var hamburgerMenu = document.querySelector('#menuToggle input[type="checkbox"]');

    // Toggle menu on hamburger / nav-link click
    document.querySelectorAll(
        '#nav-mobile input[type="checkbox"], #nav-mobile .nav-link:not(.nav-expand-link):not(.nav-back-link)'
    ).forEach(function (link) {
        link.addEventListener('click', function () {
            document.body.classList.toggle('nav-is-toggled');
            if (bodyOverlay) bodyOverlay.classList.toggle('d-none');
        });
    });

    // Close menu when overlay is clicked
    if (bodyOverlay && hamburgerMenu) {
        bodyOverlay.addEventListener('click', function () {
            document.body.classList.toggle('nav-is-toggled');
            hamburgerMenu.checked = !hamburgerMenu.checked;
            bodyOverlay.classList.toggle('d-none');
        });
    }
});

// Reset hamburger state on Firefox back/forward cache restore
window.addEventListener('pageshow', function () {
    var hamburger = document.querySelector('#menuToggle input[type="checkbox"]');
    if (hamburger) hamburger.checked = false;
});
