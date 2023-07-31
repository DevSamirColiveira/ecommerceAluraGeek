async function listaProdutos() {
  const conexao = await fetch("http://localhost:3000/produtos");
  const conexaoConvertida = await conexao.json();
  // console.table(conexaoConvertida);
  return conexaoConvertida;
}

async function criarProdutos(imagem, alt, categoria, titulo, valor, descricao) {
  const conexao = await fetch("http://localhost:3000/produtos", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      imagem: imagem,
      alt: alt,
      categoria: categoria,
      titulo: titulo,
      valor: valor,
      descricao: descricao
    })
  });

  const conexaoConvertida = await conexao.json();
  
  return conexaoConvertida;
}

// listaProdutos();
export const conectaBancoAPI = {
  listaProdutos,
  criarProdutos
}
