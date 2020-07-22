const moduloSync = (function() {

    const btnSync = document.querySelector('#btnSync');
    btnSync.addEventListener('click', async function() {
        btnSync.classList.replace('botaoSync--sincronizado', 'botaoSync--esperando');
        btnSync.disabled = true;

        const infoUsuario = {
            usuario: 'jhonatan.jacinto@caelum.com.br',
            cartoes: moduloMural.getCartoes() // Array com o conteúdo dos cartões
        }

        let url = 'https://ceep.herokuapp.com/cartoes/salvar';
        const configuracao = {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(infoUsuario)
        }

        try {
            const resposta = await fetch(url, configuracao);
            const dados = await resposta.json();
            moduloNotificacao.notificar(`${dados.quantidade} cartões salvos com sucesso no servidor!`);
        }
        catch(erro) {
            moduloNotificacao.notificar('Não foi possível salvar seus cartões!');
            console.error(erro);
        }

        btnSync.disabled = false;
        btnSync.classList.replace('botaoSync--esperando', 'botaoSync--sincronizado');
    });

    return {
        sincronizar() {
            btnSync.click();
        }
    }

})();