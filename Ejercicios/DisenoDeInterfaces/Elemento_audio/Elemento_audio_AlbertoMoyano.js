$(document).ready(function () {
    var Audio = document.getElementById("AudioID");

    $("#IDplay").click(function () {
        Audio.play();
    });
    $("#IDpause").click(function () {
        Audio.pause();
    });
});


