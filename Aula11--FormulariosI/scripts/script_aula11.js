/* 1- Capturar as informações e obter os valores */
let nomeESobrenome = document.getElementById("nome");
let idade = document.getElementById("idade");
let altura = document.getElementById("altura");
let biografia = document.getElementById("biografia");

let botaoSalvar = document.getElementById("salvar");

let listaItens = document.getElementById("listaItens");

let checkbox = document.getElementById("checkbox");

let radioGrupo = document.getElementsByName("radioGrupo");

botaoSalvar.addEventListener("click", function (evento) {
  evento.preventDefault();

  //Exibindo os valores capturados no formulário
  console.log(nomeESobrenome.value);
  console.log(idade.value);
  console.log(altura.value);
  console.log(biografia.value);

  //Exibindo o valor do checkbox
  console.log(checkbox.value);
  console.log(checkbox.checked);

  console.log(radioGrupo);

  let radioSelecionado;

  //Percorre os elementos do grupo radio, para identificar qual o elemento selecionado
  radioGrupo.forEach(function (radioItem) {
    //console.log(radioItem.value)
    if (radioItem.checked) {
      radioSelecionado = radioItem;
    }
  });
  console.log(radioSelecionado.value);
});
