function verificarCampos() {
  const nome = document.getElementsByName("nome")[0].value;
  const cpf = document.getElementsByName("cpf")[0].value;
  const email = document.getElementsByName("e-mail")[0].value;
  const telefone = document.getElementsByName("Telefone")[0].value;
  const senha = document.getElementsByName("senha")[0].value;
  const confirmarSenha = document.getElementsByName("confirmar-senha")[0].value;
  
  if (nome === "" || cpf === "" || email === "" || telefone === "" || senha === "" || confirmarSenha === "") {
    alert("Por favor, preencha todos os campos.");
    return false;
  }
  
  if (senha !== confirmarSenha) {
    alert("As senhas não coincidem.");
    return false;
  }
  
  return true;
}

let button = document.querySelector("button");
button.addEventListener("click", function(event) {
  event.preventDefault();
  if (verificarCampos()) {
    alert("Formulário enviado com sucesso!");
  }
});
