//GET
const listaProdutos = () => {
  fetch("http://localhost:3000/produtos")
  // fetch("https://raw.githubusercontent.com/DevSamirColiveira/ecommerceAluraGeek/main/db.json")
  .then(resposta => resposta.json())
  .catch(error => console.log(error));
}

//POST
const criaProdutos = (imageUrl, alt, category, name, price, description) => {
  fetch('', {
    method:"POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      imageUrl,
      alt,
      category,
      name,
      price,
      description
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