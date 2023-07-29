const novoProtudo = (name, id, imageUrl, alt, price) => {
  const card = document.createElement("div")
  const conteudo = `
  <div class="Oproduto">
    <img class="imagem__produto" src="${imageUrl}" alt="${alt}">
    <h2 class="nome__produto">
      <a href="./pages/produtos.html?id=${id}">${name}</a>
    </h2>
    <p class="preco__produto">R$ ${price.toFixed(2)}</p>
    <a href="/" class="carrinho__produto">Comprar</a>
  </div>
  `
  card.innerHTML = conteudo
  return card
}

const produtos = document.querySelector('[data-produtos-home]')
