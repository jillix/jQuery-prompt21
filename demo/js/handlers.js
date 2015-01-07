$(document).ready(function () {
    var p = $(".popup").prompt21();
    $(".show-popup").on("click", function () {
        p.getData(function (err, data) {
            $(".result").text(JSON.stringify(data, null, 2));
        });
    });
    $(".version").text($.fn.prompt21.version);
});
