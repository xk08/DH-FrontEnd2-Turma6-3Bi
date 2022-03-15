let nomeUsuario = "Pablo";

//função do tipo declaradas
function exibeNomeUsuario(nome, idade, cidade) {
  return console.log(nome+idade+cidade);
}

//Invocando a função declarada
exibeNomeUsuario("Pablo", 34, "SP");

//Função auto-invocável (executavel)
(function () {
  console.log("Função automática");
})();

//Funções do tipo expressas
let valores = function somaValores(valorA, ValorB) {
  return valorA + ValorB;
};
valores(); //invocando a função

//Funções de Callback
function executaCalculo(funcaoRecebida) {
  let valor1 = 4;
  let valor2 = 6;

  let resultadoSoma = valor1 + valor2;
  funcaoRecebida(resultadoSoma);
}

function exibeResultadoSoma(resultadoRecebido) {
  console.log(`O resultado foi ${resultadoRecebido}`);
}

/* 
    Invocando a função e passando a função desejada por parametro
 */
executaCalculo(exibeResultadoSoma);

//@@@ ArrowFunctions

//Modo comum de função JS
let soma = function (valorA, valorB) {
  //bloco de execução
  return valorA + valorB;
};
soma(4, 6);

//Utilizando ArrowFunction
let somaArrow = (valor1, valor2) => {
  //bloco de código
  return console.log(valor1 + valor2);
};
somaArrow(6, 4);

//Modelo simplificado de ArrowFunction
let somaArrow2 = (valor1, valor2) => console.log(valor1 + valor2);
somaArrow2(4, 5);