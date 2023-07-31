import { conectaBancoAPI } from "./conectaBancoAPI.js";

const lista = document.querySelector("[data-produtos-starwars]");

function produtoNaTela(imagem, alt, titulo, valor) {
  const produto = document.createElement("div");
  produto.className = "Oproduto";
  produto.innerHTML = `
    <img src="${imagem}" alt="${alt}" class="imagem__produto">
    <h2 class="nome__produto">
      <a href="./pages/produto.html">${titulo}</a>
    </h2>
    <p class="preco__produto">R$ ${valor.toFixed(2)}</p>
    <a href="/" class="carrinho__produto">Comprar</a>
  `
    return produto;
}

async function categoriaStarwars() {
  const listaApi = await conectaBancoAPI.categoriaStarwars();
  listaApi.forEach(elemento => lista.appendChild(
    produtoNaTela(elemento.imagem, elemento.alt, elemento.titulo, elemento.valor)
  ))
}

categoriaStarwars();