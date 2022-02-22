////@@ Capturando e exibindo informações com JS
let usuario = "Marcos";
alert("Usuário "+usuario+" logado com sucesso!");

let respostaConfirm;
respostaConfirm = confirm("Você realmente deseja encerrar a sessão?");

//Verifica resultado boleano do confirm
console.log(respostaConfirm);

if(respostaConfirm) { //Caso seja true//verdadeiro
    // clicou no ok
    alert("A Sessão foi encerrada!");
} else { //Caso seja false//falso
    // clicou no cancel
    alert("A Sessão não foi encerrada!");
}

////@@ Formas de converter dados em JS
let valor1 = 10;

let valor;
valor = prompt("Insira um número inteiro");

//Convertendo o valor recebido
let valorConvertido = parseFloat(valor);

//Somando os valores
let resultado = valor1 + valorConvertido;

//Exibindo o resultado
alert(resultado)

////@@ Trabalhando com números aleatorios
let numeroAleatorio;
numeroAleatorio = Math.random() * 3 + 1; //3-> valor máximo -- 1-> valor minimo

alert(numeroAleatorio)

////@@* Sugestão: Passo a passo para realizar a atividade */

//1 -  Capturar a escolha do jogador (1, 2, 3)
//2 -  Capturar a escolha da maquina
    // Math.random()
//3 - Testar/verificar, quem foi o ganhador da rodada
//4 - Identificar o ganhador da partida.