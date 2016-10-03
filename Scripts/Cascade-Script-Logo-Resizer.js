(function ($) {
    $(window).ready(function () {
        var logoWid = +$('#site-logo').width();
        var logoHt = +$('#site-logo').height();

        //ENTER WHOLE NUMBER OF % CHANGE TO LOGO SIZE (ie 50% = 50)
        var change = 95;

        var newWid = change / 100 * logoWid;
        $('#site-logo').width(newWid);

        var newHt = change / 100 * logoHt;
        $('#site-logo').height(newHt);

    })
})(jQuery)