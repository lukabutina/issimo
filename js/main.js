$(function() {
    $('.close-menu').on('click', function() {
        $('.button-wrapper').addClass('hidden');
    });

    $('.open-menu').on('click', function() {
        $('.button-wrapper').removeClass('hidden');
    });
});