let validacao = true;

let usuarioObjeto = {
    nome: "Usuario",
    endereco: {
        cidade: {
            nome: "São Paulo",
            cep: "9670543"
        }
    }
}

let usuarioObjetoJson = JSON.stringify(usuarioObjeto);

//Criando a promisse
let minhaPromisse = new Promise(function (resolve, reject) {

    setTimeout(() => {
        if (validacao) {
            resolve(usuarioObjetoJson);
        } else {
            reject(validacao);
        }
    }, 4000);


});

//Executando a promisse
minhaPromisse.then(
    //Quando a promisse é resolvida...
    function (resultado) {
        console.log("Primeiro then");
        let resultadoJs = JSON.parse(resultado)
        return resultadoJs;
    }
).then(function (resultado) {
    //Quando a promisse é resolvida...
    console.log("Segundo then");
    console.log(resultado);
})
    .catch(
        //Quando a promisse é rejeitada...
        function (erro) {
            console.log(erro);
        }
    );