let animais = {
  "dados": [
    {
      "tipo": "gato",
      "nome": "paçoca",
      "sexo": "macho"
    },
    {
      "tipo": "cachorro",
      "nome": "chico",
      "sexo": "macho"
    },
    {
      "tipo": "gato",
      "nome": "lua",
      "sexo": "fêmea"
    },
    {
      "tipo": "cachorro",
      "nome": "nina",
      "sexo": "fêmea"
    },
    {
      "tipo": "gato",
      "nome": "café",
      "sexo": "masculino"
    }
  ]
};

function salvarDadosNoLocalStorage() {
    const tipo = document.getElementById("tipo").value;
    const nome = document.getElementById("nome").value;
    const sexo = document.getElementById("sexo").value;

    let novoAnimal = {
        "tipo": tipo,
        "nome": nome,
        "sexo": sexo
    };

    let dadosAnimaisExistentes = JSON.parse(localStorage.getItem("dadosAnimais")) || [];
    dadosAnimaisExistentes.push(novoAnimal);
    localStorage.setItem("dadosAnimais", JSON.stringify(dadosAnimaisExistentes));
    alert("Animal cadastrado com sucesso!");

    document.getElementById("tipo").value = "";
    document.getElementById("nome").value = "";
    document.getElementById("sexo").value = "";
}

document.getElementById("formulario-animais").addEventListener("submit", function(event) {
    event.preventDefault(); 
    salvarDadosNoLocalStorage();
});