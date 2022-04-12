$(document).ready(function () {
    // Seleciona o elemento com id "botaoVermelho" e adiciona o corpotamento de click nele
    $('#botaoVermelho').click(function () {
        // Se o elemento "p" tiver a classe "vermelho"
        if ($('p').hasClass('vermelho')) {
            // Remova a classe "vermelho" ao elemento "p"
            $('p').removeClass('vermelho');
        } else {
            // Adicione a classe "vermelho" ao elemento "p"
            $('p').addClass('vermelho');
        }
    });
    
    $('#botaoAzul').click(function () {
        if ($('div:contains("Azul")').hasClass('azul') && $('div:not(:contains("Azul"))').hasClass('vermelho')) {
            $('div:contains("Azul")').removeClass('azul')
            // Adiciona a classe "vermelho" a todas as "div" que "não contenha Azul"
            $('div:not(:contains("Azul"))').removeClass('vermelho')
        } else {
            $('div:contains("Azul")').addClass('azul')
            // Adiciona a classe "vermelho" a todas as "div" que "não contenha Azul"
            $('div:not(:contains("Azul"))').addClass('vermelho')
        }
    });

    $('#quadrado').hide();
    $('#alvo').mouseover(function () { 
        $('#quadrado').slideToggle('fast');
    });
    $('#alvo').mouseout(function () { 
        $('#quadrado').slideToggle('fast');
    });

    $('#area').mouseover(function () { 
        $('#area').animate({
            width: '200px',
            height: '200px'
        })
    });
    $('#area').mouseout(function () { 
        $('#area').animate({
            width: '100px',
            height: '100px'
        })
    });
})