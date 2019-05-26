$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200){
                $(this).addClass('scrollin');
            }
        });
    });

    $('.col-md-3').mouseover(function(){
        $(this).removeClass('col-md-3');
        $(this).addClass('col-md-5');
    }).mouseleave(function(){
        $(this).removeClass('col-md-5');
        $(this).addClass('col-md-3');
    });

});

