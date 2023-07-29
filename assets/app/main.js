let produtos = [];
const endpointDaAPI = 'https://raw.githubusercontent.com/DevSamirColiveira/ecommerceAluraGeek/main/db.json';
// const endpointDaAPI = 'http://localhost:3000/produtos';

getBuscarProdutosDaAPI();
// funções assíncronas "async"
async function getBuscarProdutosDaAPI (){
    const resposta = await fetch(endpointDaAPI)
    produtos = await resposta.json()
    console.table(produtos) //ver em tabela
    // let livrosComDesconto = aplicarDesconto(livros)

    // exibirOsLivrosNaTela(livrosComDesconto)
}