$(document).ready(function () {
    /*retina img*/
    if (window.devicePixelRatio > 1) {
        var lowresImages = $('img');

        images.each(function (i) {
            var lowres = $(this).attr('src');
            var highres = lowres.replace(".", "@2x.");
            $(this).attr('src', highres);
        });
    }

    $(" .user__rate").each(function () {
        var rateVal = $(this).find('.user__rate-num').html(),
            rateLine = $(this).find('.user__rate-progress .value');
        $(rateLine).width(rateVal + '%');
    });

    /*slider*/
    $('.slider__prev').click(function () {
        $('.slider__wrap .user:first-child').appendTo('.slider__wrap');
    })
    $('.slider__next').click(function () {
        $('.slider__wrap .user:last-child').prependTo('.slider__wrap').fadeIn();
    })

});
