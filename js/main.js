$(".circle-big").click(function () {
    $(".circle-cell").each(function () {
        $(this).find('.sub-circles').addClass('hidden');
    });
    $(this).parent().find('.sub-circles').toggleClass('hidden');

});