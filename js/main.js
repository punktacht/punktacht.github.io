var formerText;
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
    $("#label").on("mouseenter", function () {
        formerText = $("#label p").text();
        $("#label p").text("Zurück");
    });
    $("#label").on("mouseleave", function () {
        $("#label p").text(formerText);
    });
});