// IIFE = Immediately Invoked Function Expression 
(function() {

    const btn = document.querySelector('#btnAjuda');
    btn.addEventListener('click', async () => {
        const resposta = await fetch('https://ceep.herokuapp.com/cartoes/instrucoes');
        const dadosAjuda = await resposta.json();
        const listaMensagens = dadosAjuda.instrucoes;

        listaMensagens.forEach(instrucao => {
            moduloMural.adicionarCartao(instrucao.conteudo, instrucao.cor);   
        });
    });

})();