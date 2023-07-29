import { produtosSevircos } from "../services/produtos-services"

const addProduto = document.querySelector('[data-pagformadd]')

addProduto.addEventListener("submit", (evento) => {
  evento.preventDefault()

  const urlImg = document.querySelector('[data-url]').value
  const desImg = document.querySelector('[data-desimagem]').value
  const categoria = document.querySelector('[data-categoria]').value
  const nProduto = document.querySelector('[data-nproduto]').value
  const preco = document.querySelector('[data-preco]').value
  const desProduto = document.querySelector('[data-desproduto]').value

  produtosSevircos.criaProdutos(imageUrl, alt, category, name, price, description)
  .then(resposta => {
    window.location.href = "../pages/produtos.html"
    console.log(resposta)
  }).catch(erro => {
    console.log(erro)
  })
})