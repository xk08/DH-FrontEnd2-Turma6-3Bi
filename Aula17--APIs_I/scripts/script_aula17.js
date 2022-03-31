let quantidadeFormulario = document.getElementById('quantidadeFormulario');
let botaoPesquisar = document.getElementById('botaoPesquisar');
let exibeResultado = document.getElementById('exibeResultado');

botaoPesquisar.addEventListener('click', function (evento) {
    evento.preventDefault();

    if (quantidadeFormulario.value != "") {

        //GET
        fetch(`https://dog.ceo/api/breeds/image/random/${quantidadeFormulario.value}`) //endpoint da Api
            .then(function (resultado) {

                //Se a requisição tiver obtido sucesso e tiver o código como 200
                if (resultado.status == 200) {
                    //Resolve a promisse do Body.json() e retorna as informações e um objeto JS
                    return resultado.json();
                } else {
                    throw `A requisição não obteve sucesso, retornou o código ${resultado.status}`
                }
            })
            .then(function (resultado) {
                //Recebe as informações da API e faz a manipulação desejada
                console.log(resultado.message);
                
                // Percorrendo os objetos no array de cachorros
                for (let img of resultado.message) {
                    //Exibe as fotos dos cachorros em tela
                    let imgelemento = document.createElement('img');
                    imgelemento.src = img;
                    exibeResultado.appendChild(imgelemento);
                }
            })
            .catch(
                function (erro) {
                    console.log(erro);
                }
            );
    } else {
        alert("Você deve informar o número de imagens que deseja buscar")
    }
});

function atualizaPagina() {
    window.location.reload();
}