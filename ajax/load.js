$(document).ready(function () {
    $('#sigla').keyup(function () { 
        if ($('#sigla').val().length == 2) {
            $('#resultado').load("Config.php", {"sigla":$("#sigla").val()});
        } else {
            $('#resultado').html("");
        }
    });
});