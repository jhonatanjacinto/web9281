const moduloMural = (function() {

    // guardar a referência do mural
    const mural = document.querySelector('.mural');

    // exclusão de cartões
    mural.addEventListener('click', event => {
        // se tem a classe, então é o botão de remoção do cartão
        if (event.target.classList.contains('opcoesDoCartao-remove')) {
            const cartao = event.target.parentElement.parentElement;
            cartao.remove(); // remove o cartão
        }
    });

    // altera o layout do mural
    function mudarLayout()
    {
        mural.classList.toggle('mural--linha');
    }

    // retorna um objeto que representará o módulo
    // com os recursos que deverão ser públicos (acessíveis)
    return {
        mudarLayout
    }

})();