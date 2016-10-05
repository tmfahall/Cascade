var commentHeight = -1;

$('.comment-box').each(function () {
    commentHeight = commentHeight > $(this).height() ? commentHeight : $(this).height() + 180;
});

$('.comment-box').each(function () {
    $(this).height(commentHeight);
});

console.log(commentHeight);
$('#section-8').height(commentHeight + 230);
