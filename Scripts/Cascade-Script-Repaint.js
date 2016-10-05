var commentHeight = -1;
var counter = 1;

$('.comment-box').each(function () {
    console.log("first run - box " + counter + " comment length = " + $(this).height() + " current box size " + commentHeight);
    counter++;
    commentHeight = commentHeight > $(this).height() ? commentHeight : $(this).height() + 180;
});

$('.comment-box').each(function () {
    console.log("second run - box " + counter + " comment length = " + $(this).height() + " current box size " + commentHeight);
    counter++;
    $(this).height(commentHeight);
});

console.log(commentHeight);
$('#section-8').height(commentHeight + 230);
