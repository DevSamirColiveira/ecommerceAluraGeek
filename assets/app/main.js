let produtos = [];
const endpointDaAPI = 'https://raw.githubusercontent.com/DevSamirColiveira/ecommerceAluraGeek/main/db.json';

getBuscarProdutosDaAPI();
// funções assíncronas "async"
async function getBuscarProdutosDaAPI (){
    const resposta = await fetch(endpointDaAPI)
    livros = await resposta.json()
    console.table(livros) //ver em tabela
    let livrosComDesconto = aplicarDesconto(livros)

    exibirOsLivrosNaTela(livrosComDesconto)
}