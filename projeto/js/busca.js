(function() {

    // Vanilla JS
    // const inputBusca = document.querySelector('#busca');
    // inputBusca.addEventListener('input', function() {
    //     let termo = inputBusca.value.trim();
    //     const buscaTermo = new RegExp(termo, 'i');
    //     const cartoes = document.querySelectorAll('.cartao');
    //     cartoes.forEach(cartao => cartao.style.display = '');

    //     if (termo.length > 0) 
    //     {
    //         for (let cartao of cartoes)
    //         {
    //             let textoCartao = cartao.querySelector('.cartao-conteudo').textContent;
    //             if (!buscaTermo.test(textoCartao)) {
    //                 cartao.style.display = 'none';
    //             }
    //         }
    //     }
    // });

    // jQuery
    $('#busca').on('input', function() {
        let termo = $(this).val().trim();
        if (termo.length > 0) {
            // filtra os cartões
            $('.cartao').hide().filter(function() {
                return $(this).find('.cartao-conteudo').text().match(new RegExp(termo, 'i'));
            }).show();
        }
        else {
            // exibe todos os cartões
            $('.cartao').show();
        }
    });

})();