$(document).ready(function () {
    $(" .user__rate").each(function () {
        var rateVal = $(this).find('.user__rate-num').html(),
            rateLine = $(this).find('.user__rate-progress .value');
        $(rateLine).width(rateVal + '%');
    });
    /*slider*/
    //        $('.slider__prev').click(function(){
    //            $('.slider__wrap .user:first-child').appendTo('.slider__wrap').fadeIn();
    //        })
    function showMessage() {
        alert('Transition закончил свое выполнение');
    }
    $('.slider__prev').click(function () {
        $('.slider__wrap .user:first-child').appendTo('.slider__wrap');
    })
    $('.slider__next').click(function () {
            $('.slider__wrap .user:last-child').prependTo('.slider__wrap').fadeIn();
        })
        //    $('.slider__prev').click(function () {
        //        $('.slides').animate({
        //            'left': step
        //        }, 'slow', function () {
        //            $('.slides li:last-child').prependTo('.slides');
        //            $('.slides').css('left', 0);
        //        });
        //    });
});