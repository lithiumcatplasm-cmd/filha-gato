setTimeout(function() {
    // 1. Makes "Miau." appear on the screen
    let mensagem = document.getElementById("mensagem-secreta");
    if (mensagem) {
        mensagem.textContent = "Miau.";
        mensagem.classList.add("mostrar");

        // 2. Makes the background (body) completely black
    // 2. Faz o fundo da tela (body) ficar completamente preto
    document.body.classList.add("tela-preta");

}, 1000); // Tempo de espera (1 segundo)}, 1000); // Wait time (1 second)