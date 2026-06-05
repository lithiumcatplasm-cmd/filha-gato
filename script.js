document.addEventListener("DOMContentLoaded", function() {
    // 1. O JavaScript localiza as duas fotos no seu HTML usando os IDs
    let botaoFotoGatilho = document.getElementById("foto-gatilho");
    let fotoParaMostrar = document.getElementById("foto-escondida");
    if (!fotoParaMostrar) {
        console.warn('Elemento com ID "foto-escondida" não encontrado.');
        return; // Retorna cedo para evitar anexar listeners desnecessários
    }

    // 2. Cria a regra: QUANDO houver um clique (ou toque) na primeira foto, execute a função
    if (botaoFotoGatilho) {
        // Função debounce para limitar a frequência de execução do handler
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
            if (!fotoParaMostrar) return; // Evita erro se o elemento não existir
            
            // Adiciona a classe "show" para exibir a segunda foto
            fotoParaMostrar.classList.add("show");
            
            // Usa requestAnimationFrame para garantir que o navegador registre a mudança de display antes de adicionar a classe de transição,
            // o que é necessário para que as transições CSS sejam acionadas corretamente
            requestAnimationFrame(function() {
                fotoParaMostrar.classList.add("aparecer");
            });
            
        }, 300)); // 300ms de debounce, ajuste conforme necessário
    }
});