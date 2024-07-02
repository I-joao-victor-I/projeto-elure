document.addEventListener("DOMContentLoaded", function() {
    var botaoEnviar = document.querySelector('.enviar-resposta button');
    botaoEnviar.addEventListener('click', verificarResposta);


    var botoesResposta = document.querySelectorAll('.respostas button');
    botoesResposta.forEach(function(botao) {
        botao.addEventListener('click', function() {
            selecionarResposta(botao);
        });
    });
});

function selecionarResposta(botao) {
    var botoesResposta = document.querySelectorAll('.respostas button');
    botoesResposta.forEach(function(botao) {
        botao.parentNode.classList.remove('selecionado');
    });

    botao.parentNode.classList.add('selecionado');
}

function verificarResposta() {
    var botaoSelecionado = document.querySelector('.respostas .selecionado button');

    if (botaoSelecionado) {
        var respostaSelecionada = botaoSelecionado.getAttribute('data-resposta');
        var respostaCorreta = botaoSelecionado.closest('.respostas').querySelector('.correta button').getAttribute('data-resposta');
        
        if (respostaSelecionada === respostaCorreta) {
            mostrarResultado('Acertou!');
        } else {
            mostrarResultado('Errou!');
        }
        desabilitarBotoes();
    } else {
        alert('Por favor, selecione uma resposta antes de enviar.');
    }
}

function mostrarResultado(resultado) {
    var resultadoDiv = document.createElement('div');
    resultadoDiv.textContent = resultado;
    document.querySelector('main').appendChild(resultadoDiv);
}

function desabilitarBotoes() {
    var botoesResposta = document.querySelectorAll('.respostas button');
    botoesResposta.forEach(function(botao) {
        botao.disabled = true;
    });
}
