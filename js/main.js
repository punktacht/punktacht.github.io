$().ready(function () {
    $(".circle").each(function () {
        $(this).find("ul").addClass("hidden");
    });

    $(".circle").on("mouseenter", function () {
        $(this).find("ul").toggleClass("hidden");
    });
    $(".circle").on("mouseleave", function () {
        $(this).find("ul").toggleClass("hidden");
    });
});