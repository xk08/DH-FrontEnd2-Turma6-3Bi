/* Principais tipos de eventos que temos:
- Eventos de tela/pagina
- Eventos de formulários
- Eventos de mouse
- Eventos de teclado */

//@@@@Eventos de tela/pagina

//Se você deseja um comportamento automático (sem a interação do usuário)
// window.onload = function(){ //Pode omitir a palavra window
onload = function () {
  alert("A tela foi carregada totalmente!");
};

function exibeAlert() {
  alert("A tela foi carregada totalmente!");
}

//@@@@Eventos de formulários


////@@@ onClick (no elemento HTML)
//-> Não consigo passar mais de 1 chamada pra ele

////@@onChnage no input de idade
function exibeIdadesInformadas() {
  let idadeCapturada = document.getElementById("textIdade");

  console.log(idadeCapturada); //retorna todo o nó
  console.log(idadeCapturada.value);
}

function exibeMensagem1() {
  alert("Mensagem 1: O botão de enviar foi clicado!");
}

function exibeMensagem2() {
  alert("Mensagem 2: O botão de enviar foi clicado!");
}

let btnEnviar = document.getElementById("botaoEnviar");

//Evento de click (único) -> possível também com 'dblclick'
btnEnviar.addEventListener("click", (evento) => {


  ///@@@ preventDefault()
  //Impedindo de atualizar a página
  evento.preventDefault();
  console.log("O botão 'Enviar' foi clicado");
  //Posso fazer varias ações nesta função

  //Fazendo mais de uma ação, ao clicar
  exibeMensagem1();
  exibeMensagem2();
});

///@@@ Eventos do mouse, além do click

///onMouseOver
btnEnviar.onmouseover = function () {
  console.log("Cursor em cima do botão de enviar");
  btnEnviar.style.width = "50%";
  //Posso fazer qualquer ação, aqui dentro da função
};

//onMouseOut
btnEnviar.onmouseout = function () {
    console.log("Cursor saiu de cima do botão de enviar");
    btnEnviar.style.width = "10%";
    //Posso fazer qualquer ação, aqui dentro da função
};

///@@@@@ Eventos de teclado

function exibeAoPressionarUmaTecla() {
  alert("Uma tecla foi pressionada no seu teclado");
}

//keyDown (tecla pressionada)
onkeydown = function () {
  exibeAoPressionarUmaTecla();
};

//Forma simplificada
//onkeydown = exibeAoPressionarUmaTecla;

//Quando a tecla é liberada (Muito similar ao outro, mas valida na saída)
onkeyup = function () {
  alert("A tecla foi liberada");
};

