window.addEventListener("DOMContentLoaded", () => {
    jQuery(".testimonials_slider").slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        variableWidth: true,
        infinite: false,
        dots: false,
        arrows: true,
    });

    jQuery(".could-be-you .image-slider").slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        variableWidth: true,
        infinite: false,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 660,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                },
            },
        ],
    });

    if (window.location.pathname == "/") {
        jQuery(".navbar_list a").on("click", function (e) {
            const el = jQuery(jQuery(this).attr("href"));

            jQuery([document.documentElement, document.body]).animate(
                {
                    scrollTop: el.offset().top - 90,
                },
                800
            );
        });
    }

    jQuery(".mobile-menu-button").on("click", function () {
        if (jQuery(".mobile-nav").css("display") == "none") {
            jQuery(".mobile-nav").fadeIn();
        } else {
            jQuery(".mobile-nav").fadeOut();
        }
    });
});
