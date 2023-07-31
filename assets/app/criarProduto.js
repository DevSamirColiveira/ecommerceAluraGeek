import { conectaBancoAPI } from "./conectaBancoAPI.js";

const addProduto = document.querySelector("[data-pagformadd]");

async function criarProduto(evento) {
  evento.preventDefault();

  const imagem = document.querySelector("[data-url]").value;
  const alt = document.querySelector("[data-desimagem]").value;
  const categoria = document.querySelector("[data-categoria]").value;
  const titulo = document.querySelector("[data-nomeproduto]").value;
  // O "parseFloat" converte de texto para numero
  const valor = parseFloat(document.querySelector("[data-preco]").value);
  const descricao = document.querySelector("[data-desproduto]").value;

  await conectaBancoAPI.criarProdutos(imagem, alt, categoria, titulo, valor, descricao);
}

addProduto.addEventListener("submit", evento => criarProduto(evento));