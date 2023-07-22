let valor = document.getElementsByName('valor')[0].value;
let nome = document.getElementsByName('nome')[0].value;
let cpf = document.getElementsByName('cpf')[0].value;

let select = document.getElementByName("selected");
let opcaoCartao = select.options[select.options.cartao].value;
let opcaoTransferencia = select.options[transferencia].value;
console.log(opcaoCartao); 
console.log(opcaoTransferencia); 
