document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        fullWidth: true,
        indicators: true
    });

    var scrollElems = document.querySelectorAll('.scrollspy');
    var scrollInstances = M.ScrollSpy.init(scrollElems, {
        scrollOffset: 50
    });
});
