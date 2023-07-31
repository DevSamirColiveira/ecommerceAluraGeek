const novoProtudo = (id, imagem, alt, categoria, titulo, valor, descricao) => {
  const card = document.createElement("")
  const conteudo = `
  <div class="Oproduto">
    <img src="${imagem}" alt="${alt}" class="imagem__produto">
    <h2 class="nome__produto">
      <a href="./pages/produto.html">${titulo}</a>
    </h2>
    <p class="preco__produto">R$ ${valor.toFixed(2)}</p>
    <a href="/" class="carrinho__produto">Comprar</a>
  </div>
  `
  card.innerHTML = conteudo
  return card
}

const produtos = document.querySelector('[data-produtos-starwars]')

/*
id, imagem, alt, categoria, titulo, valor, descricao
*/