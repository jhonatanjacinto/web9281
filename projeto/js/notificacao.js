const moduloNotificacao = (function() {

    const div = document.createElement('div');
    div.classList.add('formNovoCartao-msg');

    function notificar(mensagem)
    {
        div.textContent = mensagem;
        document.body.append(div);
    }

    return {
        notificar
    }

})();