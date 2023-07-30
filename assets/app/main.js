let produtos = [];
const endpointDaAPI = 'https://raw.githubusercontent.com/DevSamirColiveira/ecommerceAluraGeek/main/db.json';
// const endpointDaAPI = 'http://localhost:3000/produtos';

getBuscarProdutosDaAPI();
const elementoParaInserirProdutos = document.getElementById('starwars')


async function getBuscarProdutosDaAPI (){
    const resposta = await fetch(endpointDaAPI)
    produtos = await resposta.json()
    console.table(produtos)
    exibirOsProdutosNaTela(produtos)
}

function exibirOsProdutosNaTela(listaDeProdutos) {
    listaDeProdutos.forEach(produto => {
        elementoParaInserirProdutos.innerHTML += `
        <div class="Oproduto">
          <img src="${produto.imageUrl}" alt="" class="imagem__produto">
          <h2 class="nome__produto">
            <a href="./pages/produto.html">Stormtrooper</a>
          </h2>
          <p class="preco__produto">R$ 100,00</p>
          <a href="/" class="carrinho__produto">Comprar</a>
        </div>
        `
    });
}