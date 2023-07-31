function logar (){
  var oSeuEmail = document.getElementById('loginemail').value
  console.log(oSeuEmail)
  var aSuaSenha = document.getElementById('loginsenha').value
  console.log(aSuaSenha)

  const email = 'admin@admin.com.br'
  const senha = 'admin'

  if(oSeuEmail == '' && aSuaSenha == ''){
    alert('Em brancos')

  }else if(oSeuEmail != email || aSuaSenha != senha ){
    alert('Diferente')

  }else if(oSeuEmail == email || aSuaSenha == senha){
      alert('Susseco')
      location.href = "/pages/produtos.html" 
  }
}






// const botaoLogin = document.querySelector('[data-entar]')


// botaoLogin.addEventListener('click',(sumit) => {
//   const seuLogin = document.querySelector('[data-loginnome]').value
//   const suaSenha = document.querySelector('[data-loginsenha]').value

//   const email = 'admin@admin.com.br'
//   const senha = 'admin'

//   if(seuLogin == '' && suaSenha == ''){
//       alert('Todos os campos abaixo não podem serem nulos.')
//   }else if(seuLogin == '' || suaSenha ==''){
//       alert('Alguns campos estão em branco, por favor preencha-os corretamente.')
//   }else if(seuLogin != email || suaSenha != senha){
//       alert('Ops! Os dados informados estão incorretos por favor tente novamente.')
//   }else{
//       location.href = "/produtos.html" 
//   }

// })