import { conectaBancoAPI } from "./conectaBancoAPI.js";

const todos = document.querySelector("[data-todos-produtos]");

function produtoNaTela(id, imagem, alt, titulo, valor) {
  const produtoT = document.createElement("div");
  produtoT.className = "base__produto";
  produtoT.innerHTML = `
  <img src="${imagem}" alt="${alt}" class="imagem__produto">
  <h2 class="nome__tProduto">
    <a href="./produto.html">${titulo}</a>
  </h2>
  <p class="preco__tProduto">R$ ${valor.toFixed(2)}</p>
  <span>#${id}</span>
  <button class="delete__produto" title="Excluir o produto"></button>
  <a href="/pages/edit-produto.html">
    <button class="editar__produto" title="Editar o produto"></button>
  </a>
  `
    return produtoT;
}

async function listaProduto() {
  const listaApi = await conectaBancoAPI.listaProdutos();
  listaApi.forEach(elemento => todos.appendChild(
    produtoNaTela(elemento.id, elemento.imagem, elemento.alt, elemento.titulo, elemento.valor)
  ))
}

listaProduto();



