(function() {

    const formulario = document.querySelector('form');
    formulario.addEventListener('submit', event => {
        event.preventDefault();
        const campo = formulario.querySelector('textarea');
        if (campo.value.trim() == '') {
            moduloNotificacao.notificar('Por favor, preencha o formulário corretamente!');
        }
        else {
            moduloMural.adicionarCartao(campo.value);
            formulario.reset();
        }
    });

})();
