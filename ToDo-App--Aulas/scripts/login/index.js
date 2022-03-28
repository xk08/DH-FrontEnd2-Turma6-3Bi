//Capturando as informações
let campoEmailLogin = document.getElementById('inputEmail');
let campoSenhaLogin = document.getElementById('inputPassword');
let botaoAcessar = document.getElementById('botaoAcessar');

let campoEmailLoginNormalizado;
let campoSenhaLoginNormalizado

//variável de controle da validação
let emailEValido = false;

//Definindo objeto
const usuarioObjeto = {
    email: "",
    senha: "",
}

botaoAcessar.addEventListener('click', function(evento){

    if (validacaoTelaDeLogin()) {
        
        //Normalizando as informações
        campoEmailLoginNormalizado = retiraEspacosDeUmValor(campoEmailLogin.value);
        campoSenhaLoginNormalizado = retiraEspacosDeUmValor(campoSenhaLogin.value);
        campoEmailLoginNormalizado = converteValorRecebidoParaMinusculo(campoEmailLoginNormalizado);

        //Populando o objeto com as informações normalizadas
        usuarioObjeto.email = campoEmailLoginNormalizado;
        usuarioObjeto.senha = campoSenhaLoginNormalizado;

        console.log(usuarioObjeto);
    } else {
        alert("Ambos os campos devem ser informados")
        evento.preventDefault(); //Não permite que o formulário seja executado / realizado o 'submit'
    }

});

//Validando o campo de Email
campoEmailLogin.addEventListener('blur', function() {
    //Captura o elemento "small"
    let inputEmailValidacao = document.getElementById('inputEmailValidacao');

    //Se o campo estiver com algum valor...
    if (campoEmailLogin.value != "") {
        inputEmailValidacao.innerText = ""
        campoEmailLogin.style.border = ``
        emailEValido = true;

    //Se o campo estiver sem nenhum valor...
    } else {
        inputEmailValidacao.innerText = "Campo obrigatório";
        inputEmailValidacao.style.color = "#EE1729EC"
        inputEmailValidacao.style.fontSize = "8pt"
        inputEmailValidacao.style.fontWeight = "bold"
        campoEmailLogin.style.border = `1px solid #EE1729EC`
        emailEValido = false;
    }

    //Chama a função de validar, para "atualizar" o status da validação principal da tela de login
    validacaoTelaDeLogin();
});

function validacaoTelaDeLogin () {
    if (emailEValido) {
        botaoAcessar.removeAttribute('disabled')
        botaoAcessar.innerText = "Acessar";
        return true;
    } else {
        botaoAcessar.setAttribute('disabled', true);
        botaoAcessar.innerText = "Bloqueado";
        return false;
    }
}

