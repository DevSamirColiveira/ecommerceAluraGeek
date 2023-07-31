const botaoLogin = document.querySelector('[data-entar]')


botaoLogin.addEventListener('click',() => {
  const seuLogin = document.querySelector('[data-loginnome]').value
  const suaSenha = document.querySelector('[data-loginsenha]').value

  const email = 'admin@admin.com.br'
  const senha = 'admin'

  if(seuLogin == '' && suaSenha == ''){
      alert('Todos os campos abaixo não podem serem nulos.')
  }else if(seuLogin == '' || suaSenha ==''){
      alert('Alguns campos estão em branco, por favor preencha-os corretamente.')
  }else if(seuLogin != email || suaSenha != senha){
      alert('Ops! Os dados informados estão incorretos por favor tente novamente.')
  }else{
      window.location.href = "/produtos.html" 
  }

})