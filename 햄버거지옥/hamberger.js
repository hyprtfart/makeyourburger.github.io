var ran_img;

$(document).ready(function () {

    for (var i = 0; i < 100; i = i + 1) {
        ran_img = parseInt(Math.random() * 20 + 1);
    }

    var img =
        "<img src='img/" +
        ran_img +
        ".png' class='bun'>";

    $("body").append(img)

    for (var i = 0; i < 100; i = i + 1) {
        ran_img = parseInt(Math.random() * 20 + 1);
    }

    var img =
        "<img src='img/" +
        ran_img +
        ".png' class='bun'>";

    $("body").append(img)

    for (var i = 0; i < 100; i = i + 1) {
        ran_img = parseInt(Math.random() * 20 + 1);
    }

    var img =
        "<img src='img/" +
        ran_img +
        ".png' class='bun'>";

    $("body").append(img)

    for (var i = 0; i < 100; i = i + 1) {
        ran_img = parseInt(Math.random() * 20 + 1);
    }

    var img =
        "<img src='img/" +
        ran_img +
        ".png' class='bun'>";

    $("body").append(img)

    for (var i = 0; i < 100; i = i + 1) {
        ran_img = parseInt(Math.random() * 20 + 1);
    }

    var img =
        "<img src='img/" +
        ran_img +
        ".png' class='bun'>";

    $("body").append(img)

    for (var i = 0; i < 100; i = i + 1) {
        ran_img = parseInt(Math.random() * 20 + 1);
    }

    var img =
        "<img src='img/" +
        ran_img +
        ".png' class='bun'>";

    $("body").append(img)

    $("body").on("click", ".bun", function () {
        $(this).remove();

        for (var i = 0; i < 100; i = i + 1) {
            ran_img = parseInt(Math.random() * 20 + 1);
        }

        var img =
            "<img src='img/" +
            ran_img +
            ".png' class='bun'>";

        $("body").append(img)

    });


    $(".btn").on("click", function () {
        $(".bun").css("margin-bottom", "-120px");
        $($(".bun")[0]).css("z-index", 6);
        $($(".bun")[1]).css("z-index", 5);
        $($(".bun")[2]).css("z-index", 4);
        $($(".bun")[3]).css("z-index", 3);
        $($(".bun")[4]).css("z-index", 2);
        $($(".bun")[5]).css("z-index", 1);
    });

    $('#re').on("click", function () {
        location.reload();
    });
});