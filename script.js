document.addEventListener("DOMContentLoaded", function() {
    // 1. Usando 'const' em vez de 'let' (Ponto 5 da revisão)
    const botaoFotoGatilho = document.getElementById("foto-gatilho");
    const fotoParaMostrar = document.getElementById("foto-escondida");
    
    // 2. Retorno antecipado se algum dos elementos não existir (Pontos 1 e 3)
    if (!botaoFotoGatilho) {
        console.warn('Elemento "foto-gatilho" não encontrado.');
        return;
    }
    if (!fotoParaMostrar) {
        console.warn('Elemento "foto-escondida" não encontrado.');
        return; 
    }

    // 3. Função debounce definida de forma segura no escopo (Ponto 2)
    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                func.apply(this, args);
            }, wait);
        };
    }

    botaoFotoGatilho.addEventListener("click", debounce(function() {
        // 4. Usando uma classe CSS em vez de style direto (Ponto 4 da revisão)
        botaoFotoGatilho.classList.add("esconder-gatilho");
        
        // Revela a segunda foto
        fotoParaMostrar.classList.add("show");
        
        requestAnimationFrame(function() {
            fotoParaMostrar.classList.add("aparecer");
        });
        
    }, 300)); 
});