document.addEventListener("DOMContentLoaded", function() {
    let iframe = document.querySelector('iframe');
    let container = document.getElementById('contenedor-loader');
    let preloader = document.getElementById('preloader_hojas');
    let preloaderImg = document.getElementById('logo_ucn');

    preloader.style.opacity = '1';
    preloaderImg.style.opacity = '1';
    

    iframe.onload = function() {
        setTimeout(() => {
            preloader.style.opacity = '0';
            preloader.style.transition = 'opacity 1s ease-in-out';
            
            preloaderImg.style.opacity = '0';
            preloaderImg.style.transition = 'opacity 1s ease-in-out';
        }, 2500);
    };

    // Listen for the transition to end before setting display to 'none'
    preloader.addEventListener('transitionend', function(e) {
        if (e.propertyName === 'opacity' && preloader.style.opacity === '0') {
            preloader.style.display = 'none';
            preloaderImg.style.display = 'none';
            container.style.display = 'none';
        }
    });
});