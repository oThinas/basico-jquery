$(document).ready(function() {
    function rodarEfeito(nomeEfeito) {
        var options = {};
        switch(nomeEfeito){
            // Os efeitos 'scale' e 'size' possuem argumentos adicionais, que estamos tratando agora
            case 'scale':
                options = { 
                    percent: 0 
                };
                break;
            // Os efeitos 'scale' e 'size' possuem argumentos adicionais, que estamos tratando agora
            case 'size':
                options = {
                    to: {
                        width: 150,
                        height: 30
                    }
                };
                break;
            case 'transfer':
                options = {
                    to: '#transfer', className: 'ui-effects-transfer'
                };
                break;
        }
        // Método de efeito do jQueryUI
        $('#efeito').effect(nomeEfeito, options, 500, callback);
    }
    // Ao clicar em qualquer 'radio', envia a escolha para o efeito
    $('input[type="radio"]').click(function() { 
        rodarEfeito($(this).val());
    });
    // Função de callback para trazer de volta a caixa
    function callback() {
        setTimeout(function() {
            $('#efeito').removeAttr('style').hide().fadeIn();
        }, 500);
    }
});