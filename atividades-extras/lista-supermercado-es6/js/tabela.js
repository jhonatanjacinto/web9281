import { sincronizar } from "./sync.js";

const alertTabela = document.querySelector('#alertaTabela');
const tabela = document.querySelector('#tabela');

tabela.addEventListener('click', function(event) {
    if (event.target.classList.contains('btn-remover')) {
        event.target.parentElement.parentElement.remove();
        mostrarOuEsconder();
        sincronizar();
    }
});

export function getLinhas()
{
    const trs = tabela.querySelectorAll('tr');
    const linhas = Array.from(trs).map( elemento => {
        return { 
            conteudo: elemento.querySelector('td:first-child').textContent 
        }
    });

    return linhas;
}

export function mostrarOuEsconder()
{
    const linhas = getLinhas();

    if (linhas.length === 0) {
        alertTabela.classList.remove('d-none');
        tabela.parentElement.classList.add('d-none');
    }
    else {
        alertTabela.classList.add('d-none');
        tabela.parentElement.classList.remove('d-none');
    }
}

export function adicionarLinha(conteudo)
{
    const linha = document.createElement('tr');
    linha.innerHTML = `
        <td>${conteudo}</td>
        <td>
            <button class="btn btn-danger btn-remover">
                <i class="fas fa-trash"></i>
            </button>
        </td>
    `;
    tabela.append(linha);
    mostrarOuEsconder();
    sincronizar();
}