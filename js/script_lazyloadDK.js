(function() {
    var list_element_lazyload = document.querySelectorAll('.ladi-section-background, .ladi-image-background, .ladi-button-background, .ladi-headline, .ladi-video-background, .ladi-countdown-background, .ladi-box, .ladi-frame-background, .ladi-banner, .ladi-form-item-background, .ladi-gallery-view-item, .ladi-gallery-control-item, .ladi-spin-lucky-screen, .ladi-spin-lucky-start, .ladi-list-paragraph ul li');
    var style_lazyload = document.getElementById('style_lazyload');
    for (var i = 0; i < list_element_lazyload.length; i++) {
        var rect = list_element_lazyload[i].getBoundingClientRect();
        if (rect.x == "undefined" || rect.x == undefined || rect.y == "undefined" || rect.y == undefined) {
            rect.x = rect.left;
            rect.y = rect.top;
        }
        var offset_top = rect.y + window.scrollY;
        if (offset_top >= window.scrollY + window.innerHeight || window.scrollY >= offset_top + list_element_lazyload[i].offsetHeight) {
            list_element_lazyload[i].classList.add('ladi-lazyload');
        }
    }
    style_lazyload.parentElement.removeChild(style_lazyload);
    var currentScrollY = window.scrollY;
    var stopLazyload = function(event) {
        if (event.type == "scroll" && window.scrollY == currentScrollY) {
            currentScrollY = -1;
            return;
        }
        window.removeEventListener('scroll', stopLazyload);
        list_element_lazyload = document.getElementsByClassName('ladi-lazyload');
        while (list_element_lazyload.length > 0) {
            list_element_lazyload[0].classList.remove('ladi-lazyload');
        }
    };
    window.addEventListener('scroll', stopLazyload);
})();