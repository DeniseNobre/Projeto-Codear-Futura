function preencherTabela() {

  const dadosAnimaisString = localStorage.getItem('dadosAnimais');
  if (dadosAnimaisString !== null) {
    const dadosAnimais = JSON.parse(dadosAnimaisString);
    const tabelaAnimais = document.getElementById('tabela');
    tabelaAnimais.innerHTML = '';

    dadosAnimais.forEach((animal) => {
      const row = tabelaAnimais.insertRow();
      const tipo = row.insertCell(0);
      const nome = row.insertCell(1);
      const sexo = row.insertCell(2);

      tipo.textContent = animal.tipo;
      nome.textContent = animal.nome;
      sexo.textContent = animal.sexo;
    });
  } else {
    console.log('Nenhum dado encontrado no localStorage.');
  }
}

window.addEventListener('load', preencherTabela);
