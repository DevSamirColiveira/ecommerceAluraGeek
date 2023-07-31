//GET
const listaProdutos = () => {
  fetch("http://localhost:3000/produtos")
  .then(resposta => resposta.json())
  .catch(error => console.log(error));
}

//POST
const criaProdutos = (id, imagem, alt, categoria, titulo, valor, descricao) => {
  fetch('', {
    method:"POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      id,
      imagem,
      alt,
      categoria,
      titulo,
      valor,
      descricao
    }).then(resposta => {
      if (resposta.ok){
        return resposta.body
      }
    })
  })
  throw new Error("Não foi possivel criar o produto")
}

export const produtosSevircos = {
  listaProdutos,
  criaProdutos
};