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

function adicionarAnimal(event) {
                event.preventDefault();

                let tipo = document.getElementById('tipo').value;
                let nome = document.getElementById('nome').value;
                let sexo = document.getElementById('sexo').value;

                let novoAnimal = {
                    "tipo": tipo,
                    "nome": nome,
                    "sexo": sexo
                };

                let bancoDeDados = animais.dados || [];

                bancoDeDados.push(novoAnimal);

                localStorage.setItem('bancoDeDados', JSON.stringify(bancoDeDados));

                document.getElementById('formulario').reset();

                mostra();
            }

            function mostra() {
                let novoAnimal = document.getElementById('novoAnimal');
                novoAnimal.innerHTML = '';

                let bancoDeDados = animais.dados || [];

                bancoDeDados.forEach(function(item) {
                    let li = document.createElement('li');
                    li.textContent = item.tipo + ' ' + item.nome + ' ' + item.sexo;
                    novoAnimal.appendChild(li);
                });
            }

            document.getElementById('formulario').addEventListener('submit', adicionarAnimal);

            mostra();