const moduloMural = (function() {

    // guardar a referência do mural
    const mural = document.querySelector('.mural');
    const templateCartao = document.querySelector('#templateCartao').textContent;

    // exclusão de cartões
    mural.addEventListener('click', event => {
        // se tem a classe, então é o botão de remoção do cartão
        if (event.target.classList.contains('opcoesDoCartao-remove')) {
            const cartao = event.target.parentElement.parentElement;
            cartao.classList.add('cartao--some');
            cartao.addEventListener('transitionend', () => {
                cartao.remove(); // remove o cartão
            });
        }
    });

    // mudança de cor do cartão
    mural.addEventListener('change', event => {
        if (event.target.type === 'radio') {
            const inputRadio = event.target;
            const cartao = inputRadio.parentElement.parentElement;
            cartao.style.backgroundColor = inputRadio.value;
        }
    });

    // mudança de cor via teclado
    mural.addEventListener('keypress', event => {
        let isLabel = event.target.classList.contains('opcoesDoCartao-tipo');
        if (isLabel && (event.key === 'Enter' || event.key === ' ')) {
            // forçamos o click no label atual para que o evento 'change'
            // do radio correspondente seja disparado e troque a cor do cartão
            event.target.click();
        }
    });

    // altera o layout do mural
    function mudarLayout()
    {
        mural.classList.toggle('mural--linha');
    }

    // adiciona cartões no mural
    let numeroCartao = 0;
    function adicionarCartao(conteudo, cor = '')
    {
        numeroCartao++;
        const cartao = document.createElement('article');
        cartao.classList.add('cartao');
        cartao.style.backgroundColor = cor;
        cartao.tabIndex = 0;
        cartao.innerHTML = templateCartao.replace(/{{NUMERO_DO_CARTAO}}/g, numeroCartao).replace(/{{CONTEUDO_DO_CARTAO}}/g, conteudo);
        mural.append(cartao);
    }

    function getCartoes()
    {
        const cartoes = mural.querySelectorAll('.cartao');
        const listaDeCartoes = Array.from(cartoes).map(cartao => {
            return {
                conteudo: cartao.querySelector('.cartao-conteudo').textContent,
                cor: cartao.style.backgroundColor
            }
        });

        return listaDeCartoes;
    }

    // JSONP = JSON with Padding
    $.get('https://ceep.herokuapp.com/cartoes/carregar', { usuario: 'jhonatan.jacinto@caelum.com.br' }, function(dados) {
        console.log(dados);
        const listaCartoes = dados.cartoes;
        listaCartoes.forEach(cartao => {
            adicionarCartao(cartao.conteudo, cartao.cor);
        });
    }, 'jsonp');

    // retorna um objeto que representará o módulo
    // com os recursos que deverão ser públicos (acessíveis)
    return {
        mudarLayout,
        adicionarCartao,
        getCartoes
    }

})();