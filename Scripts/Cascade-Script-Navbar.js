var num = 200; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.menu').addClass('fixed');
        $(".header").show();
    } else {
        $('.menu').removeClass('fixed');
        $(".header").hide();
    }
});

$(window).ready(function () {
    $('.header').height($('div .navbar-collapse').height());

    //var first = $('.first-li').offset();
    //var last = $('.last-li').offset();

    //$('.header').width(last.left - first.left);
    //$('.header').css('right', first.left);

})

$(function () {
    html2canvas($("body"), {
        onrendered: function (canvas) {
            $(".blurheader").append(canvas);
            $("canvas").attr("id", "canvas");
            stackBlurCanvasRGB(
                'canvas',
            0,
            0,
            $("canvas").width(),
            $("canvas").height(),
            20);
        }
    });
    //vv = setTimeout(function () {
    //    $(".header").show();
    //    clearTimeout(vv);
    //}, 200);
});

$(window).scroll(function () {
    $("canvas").css(
        "-webkit-transform",
        "translatey(-" + $(window).scrollTop() + "px)");
});

window.onresize = function () {
    $("canvas").width($(window).width());
};

$(document).bind('touchmove', function () {
    $("canvas").css(
        "-webkit-transform",
        "translatey(-" + $(window).scrollTop() + "px)");
});

$(document).bind('touchend', function () {
    $("canvas").css(
        "-webkit-transform",
        "translatey(-" + $(window).scrollTop() + "px)");
});