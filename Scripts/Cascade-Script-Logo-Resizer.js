(function ($) {
    $(window).ready(function () {
        var logoWid = +$('#site-logo').width();
        var logoHt = +$('#site-logo').height();

        var winWid = $(window).width();

        //MANUAL OVERRIDE ENTER WHOLE NUMBER OF % CHANGE TO LOGO SIZE (ie 50% = 50)
        //var change = 95;
        var change = (winWid*1) / 18

        var newWid = change / 100 * logoWid;
        $('#site-logo').width(newWid);

        var newHt = change / 100 * logoHt;
        $('#site-logo').height(newHt);
    })


})(jQuery)