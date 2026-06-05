setTimeout(function() {
    // 1. Faz o "Miau." aparecer na tela
    let mensagem = document.getElementById("mensagem-secreta");
    if (mensagem) {
        mensagem.innerHTML = "Miau.";
        mensagem.classList.add("mostrar");
    }

    // 2. Faz o fundo da tela (body) ficar completamente preto
    document.body.classList.add("tela-preta");

}, 3000); // Tempo de espera (3 segundos)