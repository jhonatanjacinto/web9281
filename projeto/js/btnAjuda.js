// IIFE = Immediately Invoked Function Expression 
(function() {

    const btn = document.querySelector('#btnAjuda');
    btn.addEventListener('click', () => {
        const listaMensagens = [
            'Bem-vindo(a) ao CEEP!',
            'Clique no botão "Linhas" para mudar o Layout!'
        ];

        listaMensagens.forEach(mensagem => alert(mensagem));
    });

})();