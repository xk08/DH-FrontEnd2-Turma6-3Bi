let nomeSobrenome = document.getElementById("nome");
let idade = document.getElementById("idade");
let biografia = document.getElementById("biografia");
let altura = document.getElementById("altura");
let email = document.getElementById("email");
/* let listaItens = document.getElementById("listaItens");
  let checkbox = document.getElementById("checkbox");
  let radioGrupo = document.getElementsByName("radioGrupo");
 */
let botaoSalvar = document.getElementById("salvar");

/* Desabilita o botão de salvar ao iniciar a página */
botaoSalvar.setAttribute('disabled', true)

let objetoUsuario = {
  nome: "",
  sobrenome: "",
  idade: "",
  biografia: "",
  altura: "",
  email: "",
};

/* Variável de verificação e controle */
let nomeESobrenomeValidos = false;

/* Ao clicar no botão de salvar, executa as eguintes ações */
botaoSalvar.addEventListener("click", function (event) {
  
  //Impede que a página seja atualizada
  event.preventDefault();

  /* Atualiza o objeto, com as informações capturadas no formulário */
  objetoUsuario.nome = nomeSobrenome.value;
  objetoUsuario.idade = idade.value;
  objetoUsuario.biografia = biografia.value;
  objetoUsuario.altura = altura.value;
  objetoUsuario.email = email.value;

  /* Chama a função trim() que retira os espaços da String informada */
  objetoUsuario.nome = retiraEspacosNomeUsuario(nomeSobrenome.value);

  /* Separa o nome e sobrenome do usuário */
  let nomeSeparado = separaNomeUsuario(objetoUsuario.nome);

  /* 
  Atribui o nome e sobrenome ao objeto do usuário */
  objetoUsuario.nome = nomeSeparado[0];
  objetoUsuario.sobrenome = nomeSeparado[1];

  if (nomeESobrenomeValidos) {
    /* Chama a função que exibe as informações em tela */
    carregaInformacoesEmTela(objetoUsuario);
  }

});

/* Interação com o input de "nome e sobrenome" */
nomeSobrenome.addEventListener('blur', function(){

  let nomeVerificacao = document.getElementById('nomeVerificacao');

  if (nomeSobrenome.value != "" && nomeSobrenome.value != null ) {
    console.log("Não é vazio");
    nomeESobrenomeValidos = true;
    nomeVerificacao.innerText = ""
    botaoSalvar.removeAttribute('disabled');
  } else {
    console.log("é vazio");
    nomeVerificacao.style.color = "#E41414"
    nomeVerificacao.innerText = "Campo obrigatorio"
    botaoSalvar.setAttribute('disabled', true)
    nomeESobrenomeValidos = false;
  }
})

/* Interação com o input de "nome e sobrenome" */
email.addEventListener('blur', function(){
  let emailVerificacao = document.getElementById('emailVerificacao');

  //Expressão regular utilizando RegEx
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
  emailVerificacao.innerText = ""
  botaoSalvar.removeAttribute('disabled');
  nomeESobrenomeValidos = true;

 } else {
  emailVerificacao.style.color = "#E41414"
  emailVerificacao.innerText = "E-mail inválido"
  botaoSalvar.setAttribute('disabled', true)
  nomeESobrenomeValidos = false;
 }

})

function retiraEspacosNomeUsuario (nomeUsuarioRecebido) {
  return nomeUsuarioRecebido.trim();
}

function separaNomeUsuario (nomeUsuarioRecebido) {
  return nomeUsuarioRecebido.split(";");
}

function carregaInformacoesEmTela(objetoUsuarioRecebido) {
  //Captura as variáveis, para exibir as novas informações em tela
  let nomeDom = document.getElementById("nomeUsuario");
  let sobrenomeDom = document.getElementById("sobrenomeUsuario");
  let biografiaDom = document.getElementById("biografiaUsuario");
  let alturaDom = document.getElementById("alturaUsuario");
  let idadeDom = document.getElementById("idadeUsuario");
  let emailDom = document.getElementById("emailUsuario");

  console.log(objetoUsuarioRecebido.nome);
  nomeDom.innerText = objetoUsuarioRecebido.nome;
  sobrenomeDom.innerText = objetoUsuarioRecebido.sobrenome;
  nomeDom.innerText = objetoUsuarioRecebido.nome;
  biografiaDom.innerText = objetoUsuarioRecebido.biografia;
  alturaDom.innerText = objetoUsuarioRecebido.altura;
  idadeDom.innerText = objetoUsuarioRecebido.idade;
  emailDom.innerText = objetoUsuarioRecebido.email;
}