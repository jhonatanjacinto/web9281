// Guardar as referências necessárias
const formulario = document.querySelector('#formCadastro');
const tabela = document.querySelector('#tabelaContatos');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    const inputNome = formulario.querySelector('#inputNome');
    const inputTelefone = formulario.querySelector('#inputTelefone');

    if (inputNome.value.trim() === '')
    {
        alert('Nome é obrigatório!');
    }
    else if (inputTelefone.value.trim() === '')
    {
        alert('Telefone é obrigatório!')
    }
    else 
    {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${inputNome.value}</td>
            <td>${inputTelefone.value}</td>
            <td>
                <button class="btn btn-danger">
                    Excluir
                </button>
            </td>
        `;
        tabela.append(tr);
        salvarContatos();
        formulario.reset();
    }
});

tabela.addEventListener('click', event => {
    if (event.target.classList.contains('btn-danger')) {
        event.target.parentElement.parentElement.remove();
        salvarContatos();
    }
});

// busca os dados de contatos via GET do servidor
exibirContatos();
async function exibirContatos()
{
    const resposta = await fetch('https://jhonatanjacinto.dev/minha-agenda/?usuario=jhonatanjacinto');
    const listaDeContatos = await resposta.json();
    console.log(listaDeContatos);

    listaDeContatos.forEach(contato => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${contato.nome}</td>
            <td>${contato.telefone}</td>
            <td>
                <button class="btn btn-danger">
                    Excluir
                </button>
            </td>
        `;
        tabela.append(tr);
    })
}

// envia os dados via POST para o servidor
async function salvarContatos()
{
    const linhas = tabela.querySelectorAll('tr');
    const listaDeContatos = Array.from(linhas).map(linha => {
        return {
            nome: linha.querySelector('td:first-child').textContent,
            telefone: linha.querySelector('td:nth-child(2)').textContent
        }
    });
    
    const parametros = new URLSearchParams();
    parametros.append('usuario', 'jhonatanjacinto');
    parametros.append('contatos', JSON.stringify(listaDeContatos));

    const resposta = await fetch('https://jhonatanjacinto.dev/minha-agenda/', {
        method: 'POST',
        body: parametros
    });

    const statusServidor = await resposta.json();
    console.log('Dados salvos com sucesso!', statusServidor);
}