document.addEventListener("DOMContentLoaded", function() {
    let botaoFotoGatilho = document.getElementById("foto-gatilho");
    let fotoParaMostrar = document.getElementById("foto-escondida");
    
    if (!fotoParaMostrar) {
        console.warn('Elemento com ID "foto-escondida" não encontrado.');
        return; 
    }

    if (botaoFotoGatilho) {
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
            if (!fotoParaMostrar) return; 
            
            // Ativa o display: block via CSS
            fotoParaMostrar.classList.add("show");
            
            // Dispara a opacidade suave logo em seguida
            requestAnimationFrame(function() {
                fotoParaMostrar.classList.add("aparecer");
            });
            
        }, 300)); 
    }
});