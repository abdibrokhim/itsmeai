/*----------------------------- Site Loader & Popup --------------------*/
$(window).on("load", function () {
    $("#bx-overlay").fadeOut("slow");
});

$(document).ready(function () {

    /*----------------------------- Scroll Up Button --------------------- */
    var btn = $('#scrollup');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });

    /*--------------------- Aos animation on scroll --------------------*/
    AOS.init({
        once: true
    });

    $("#dropdown-toggle").click(function () {
        $("#mobile-menu").slideToggle("fast");
    });

    /*--------------------- Scroll to fixed navigation bar -------------------------------- */
    $(function () {
        var header = $(".bx-static");
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 10) {
                header.removeClass('bx-static').addClass("bx-fixed");
            } else {
                header.removeClass("bx-fixed").addClass('bx-static');
            }
        });
    });

    /*--------------------- On click menu scroll section to section -------------------------------- */
    var lastId,
        topMenu = $("#top-menu"),
        topMenuHeight = topMenu.outerHeight() + 15,
        menuItems = topMenu.find("a"),
        scrollItems = menuItems.map(function () {
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
        });

    menuItems.click(function (e) {
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 600);
        e.preventDefault();
    });

    $(window).scroll(function () {
        var fromTop = $(this).scrollTop() + topMenuHeight;

        var cur = scrollItems.map(function () {
            if ($(this).offset().top < fromTop)
                return this;
        });
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            menuItems
                .parent().removeClass("active")
                .end().filter("[href='#" + id + "']").parent().addClass("active");
        }
    });

    /*-------------------- Potfolio --------------------*/
    $('.portfolio-tabs ul li').click(function () {
        $('ul li').removeClass("active");
        $(this).addClass("active");
    });

    /*-------------------- Potfolio for Mixit up --------------------*/
    var portfolioContent = $('.portfolio-content');
    portfolioContent.mixItUp();

    /*--------------------- News carousel -------------------------------- */
    $('.news-carousel').owlCarousel({
        margin: 24,
        loop: true,
        dots: false,
        nav: false,
        smartSpeed: 1000,
        autoplay: true,
        items: 2,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            400: {
                items: 1,
                nav: false
            },
            576: {
                items: 2,
                nav: false
            },
            768: {
                items: 2,
                nav: false
            },
        }
    });

    /*--------------------- parallaxmouse JS -------------------------------- */
    $(window).parallaxmouse({
        invert: true,
        range: 400,
        elms: [
            { el: $('.shape1'), rate: 0.2 },
            { el: $('.shape2'), rate: 0.2 },
            { el: $('.shape3'), rate: 0.2 },
            { el: $('.shape4'), rate: 0.3 },
            { el: $('.shape5'), rate: 0.2 },
        ]
    });

});
