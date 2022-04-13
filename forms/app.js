$(document).ready(function () {
    // Os "spans" começam desaparecidos
    $('span:contains("Preenchimento de email é obrigatório!")').hide();
    $('span:contains("Preenchimento de senha é obrigatório!")').hide();

    // Aplica o evento de blur (perda de foco) em todos os "inputs" do tipo "type = "text""
    $('input[type="text"]').blur(function () { 
        // "this" representa o objeto que disparou o evento, no caso, a caixa de texto que o usuário acabou de sair (seja qual das duas for)
        if ($(this).val().length == 0) {
            // Exibe o elemento seguinte, no caso, o "span" logo após "input" (em abos os casos)
            $(this).next().show();
        }
    });

    // Depois do foco em todas os elementos "input" com "type = "text"", o elemento que vem logo depois ao "input", no caso, "span" desaparece
    $('input[type="text"').focus(function () { 
        $(this).next().hide();
    });

    // Depois de clicar no checkbox "todos"
    $('#todos').click(function () {
        // Se, após o click, o checkbox "todos" estiver marcado:
        if ($('#todos').is(':checked')) {
            /* Click em todos os "inputs" com o "name = "interesses""
            $('input[name="interesses"]').trigger('click'); */
            $('input[name="interesses"]').prop('checked', true); // É a mesma coisa
            // Se, após o click, o checkbox "todos" não estiver marcado
        } else {
            // Desmarque todos "inputs" com "name = "interesses""
            $('input[name="interesses"]').prop('checked', false);
        }
    });

    // Click individual em cada "checkbox" com "name="interesses""
    $('input[name="interesses"]').click(function () { 
        // Se todos os "checkbox" com "value" estiverem marcados:
        if ($('input[value="Música"]').is(':checked') &&
            $('input[value="Cinema"]').is(':checked') &&
            $('input[value="Teatro"]').is(':checked')) {
                // Marcar o "checkbox" "todos"
                $('#todos').prop('checked', true);
                // Se pelo menos um "checkbox" com "value" não estiver marcado:
            } else {
                // Desmarcar o "checkbox" "todos"
                $('#todos').prop('checked', false);
            }

        /* "this" = objeto DOM que acionou o evento. Ou seja: 
        console.log($('input[name="interesses"]').val()); */
        console.log($(this).val());
    });
});