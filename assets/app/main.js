let produtos = [];
const bancoDadosDaAPI = 'http://localhost:3000/produtos';

async function getBuscarProdutosDaAPI (titulo){
  const resposta = await fetch(bancoDadosDaAPI)
  produtos = await resposta.json()
  console.table(produtos)
  exibirOsProdutosNaTela(produtos)
}
getBuscarProdutosDaAPI();
const elementoParaInserirProdutos = document.getElementById('starwars')


function exibirOsProdutosNaTela(listaDeProdutos) {
    listaDeProdutos.forEach(produto => {
      elementoParaInserirProdutos.innerHTML += `
        <div class="Oproduto">
        <img src="${produto.imagem}" alt="${produto.alt}" class="imagem__produto">
        <h2 class="nome__produto">
          <a href="./pages/produto.html">${produto.titulo}</a>
        </h2>
        <p class="preco__produto">R$ ${produto.valor.toFixed(2)}</p>
        <a href="/" class="carrinho__produto">Comprar</a>
        </div>
        `
    });
}
