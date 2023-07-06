function verificarCampos() {
  const nome = document.getElementsByName("nome")[0].value;
  const email = document.getElementsByName("e-mail")[0].value;
  const telefone = document.getElementsByName("Telefone")[0].value;

   if (nome === "" || email === "" || telefone === "") {
    alert("Por favor, preencha todos os campos.");
    return false;
  }

   return true;
}

let button = document.querySelector("#button-lar-temporario");
button.addEventListener("click", function(event) {
  event.preventDefault();
  if (verificarCampos()) {
    alert("Formulário enviado com sucesso!");
  }
});