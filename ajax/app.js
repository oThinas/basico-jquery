$(document).ready(function () {
    // Evento keyup ao digitar na caixa de texto
    $('#sigla').keyup(function () { 
        // Se a "sigla" tiver mais do que 2 caracteres:
        if ($('#sigla').val().length == 2) {
            $.ajax({
                method: "POST",
                url: "Config.php",
                // Envia a sigla
                data: "sigla="+$('#sigla').val(),
                // Requisição efetuada com sucesso
                success: function (result) {
                    $('#resultado').html(result);
                },
                // Erro na requisição
                error: function() {
                    $('#resultado').html('Houve falha na requisição!');
                }
            });
        // Se a sigla não tiver 2 caracteres
        } else {
            $('#resultado').html('');
        }
    });
});