function appendText(titleText, bodyText, buttonText) {
    $('#section4title').text(titleText);
    $('#section4body').text(bodyText);
    $('#section4button').text(buttonText);
}

$('.aboutMedicine').on('mouseenter', function () {
    $('#section-4').toggle(true)
    $('.dropdown-image').removeClass().addClass('col-xs-3 col-xs-offset-1 dropdown-image image-holder aboutMedicineExp');

    var title = "MEDICINE ON TIME";
    var body = "Medicine on time Laoreet ac, aliquam sit amet justo nunc tempor, metus vel placerat suscipit, orci nisl iaculis eros, a tincidunt nisi odio eget lorem nulla condimentum tempor mattis ut vitae feugiat augue cras ut metus a risus iaculis scelerisque eu ac ante fusce non varius purus aenean nec magna felis fusce vestibulum.";
    var buttonText = "Medicine On Time";

    appendText(title, body, buttonText);
})

$('.aboutSynchronization').on('mouseenter', function () {
    $('#section-4').toggle(true)
    $('.dropdown-image').removeClass().addClass('col-xs-3 col-xs-offset-1 dropdown-image aboutSynchronizationExp');

    var title = "SYNCHRONIZATION";
    var body = "Synchronization Laoreet ac, aliquam sit amet justo nunc tempor, metus vel placerat suscipit, orci nisl iaculis eros, a tincidunt nisi odio eget lorem nulla condimentum tempor mattis ut vitae feugiat augue cras ut metus a risus iaculis scelerisque eu ac ante fusce non varius purus aenean nec magna felis fusce vestibulum.";
    var buttonText = "Synchronization";

    appendText(title, body, buttonText);
})

$('.aboutCompounding').on('mouseenter', function () {
    $('#section-4').toggle(true)
    $('.dropdown-image').removeClass().addClass('col-xs-3 col-xs-offset-1 dropdown-image aboutCompoundingExp');

    var title = "COMPOUNDING";
    var body = "Compounding Laoreet ac, aliquam sit amet justo nunc tempor, metus vel placerat suscipit, orci nisl iaculis eros, a tincidunt nisi odio eget lorem nulla condimentum tempor mattis ut vitae feugiat augue cras ut metus a risus iaculis scelerisque eu ac ante fusce non varius purus aenean nec magna felis fusce vestibulum.";
    var buttonText = "Compounding";

    appendText(title, body, buttonText);
})

$('.aboutDelivery').on('mouseenter', function () {
    $('#section-4').toggle(true)
    $('.dropdown-image').removeClass().addClass('col-xs-3 col-xs-offset-1 dropdown-image aboutDeliveryExp');

    var title = "HOME DELIVERY";
    var body = "HOME DELIVERY Laoreet ac, aliquam sit amet justo nunc tempor, metus vel placerat suscipit, orci nisl iaculis eros, a tincidunt nisi odio eget lorem nulla condimentum tempor mattis ut vitae feugiat augue cras ut metus a risus iaculis scelerisque eu ac ante fusce non varius purus aenean nec magna felis fusce vestibulum.";
    var buttonText = "Home Delivery";

    appendText(title, body, buttonText);
})