$(document).ready(function () {
    function ComprobarDNI () {
        if (/^([0-9]{8})*[a-zA-Z]+$/.test($("#NumeroValido").val())) {
            var numero = $("#NumeroValido").val().substring(0, 8);
            var rightLetra = $("#NumeroValido").val().substring(8, 9).toUpperCase();
            numero = numero % 23;
            var LetraDNI = 'TRWAGMYFPDXBNJZSQVHLCKET';
            LetraDNI = LetraDNI.substring(numero, numero + 1);
            if (LetraDNI == rightLetra) {
                return true;
            } else {
                return false;
            }
        }
    }
    $("#BotonDNI").click(function () {
        var numeroValor = ComprobarDNI();
        if (numeroValor == true) {
            document.getElementById("Valido").innerHTML = "<p class='Valido'> DNI válido </p>";
        } else {
            document.getElementById("Valido").innerHTML = "<p class='NoValido'> DNI no válido </p>";
        }

    });

});




