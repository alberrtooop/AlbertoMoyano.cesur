$(document).ready(function(){
    $("#oscuro").click(function(){
        $("body").toggleClass("oscuro");
    });

    $("#Disminuir").click(function(){
        $("#fuente1").css("font-size","-=2");
    });

    $("#Aumentar").click(function(){
        $("#fuente1").css("font-size","+=2");
    });
});