(function() {

    const form = document.querySelector('#formAdicionarItem');
    const alertaForm = document.querySelector('#alertaFormulario');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const campoTexto = document.querySelector('#nomeItem');

        if (campoTexto.value.trim() == '') {
            alertaForm.classList.remove('d-none');
            campoTexto.focus();
        }
        else {
            alertaForm.classList.add('d-none');
            let conteudo = campoTexto.value;
            form.reset();
            moduloTabela.adicionarLinha(conteudo);
        }
    });

})();