$(document).ready(function () {
    var commentHeight = -1;

    $('.comment-box').each(function () {
        commentHeight = commentHeight > $(this).height() ? commentHeight : $(this).height() + 20;
    });

    $('.comment-box').each(function () {
        $(this).height(commentHeight);
    });

    $('#section-8').height(commentHeight + (commentHeight/2));


    
});

$(document).ready(function () {
    $('#section-4').height()
})

windowWidth = $(window).width();
windowHeight = $(window).height();
$('iframe').width(windowWidth).height(windowHeight);
