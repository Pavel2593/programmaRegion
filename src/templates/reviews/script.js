const reviewsList = () => {
    console.log('reviewsList');

    function startSlider() {
        var owl = $(".reviews__list");
        owl.addClass('owl-carousel');
        owl.addClass('owl-theme');
        owl.owlCarousel({
            loop: true,
            center: true,
            autoWidth: false,
            dots: true,
            nav: false,
            autoHeight: false,
            responsive: {
                320: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
            }
        });
    }

    function stopSlider() {
        var owl = $(".reviews__list");
        owl.owlCarousel('destroy');
        owl.removeClass('owl-carousel');
        owl.removeClass('owl-theme');
    }

    if (window.innerWidth <= 1200) {
        startSlider();
    } else {
        stopSlider();
    }

    $(window).resize(function () {
        if (window.innerWidth <= 1200) {
            startSlider();
        } else {
            stopSlider();
        }
    });
}

export default reviewsList;