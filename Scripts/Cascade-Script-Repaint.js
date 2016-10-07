var commentHeight = -1;

function commentBox() {

    $('.comment-box').each(function () {
        commentHeight = commentHeight > $(this).height() ? commentHeight : ($(this).height() + (13 * ($(window).height() / 100)));
    });

    $('.comment-box').each(function () {
        $(this).height(commentHeight);
    });

    $('#section-8').height($('.comment-box').height() + (16 * ($(window).height() / 100)));

};

commentBox();
$(window).resize(function () {
    commentBox();
})
