///////Como eu posso criar um novo elemento do zero?

/////CREATE ELEMENT
let h4 = document.createElement('h4');
console.log(h4);

h4.innerText = "Novo título";
console.log(h4);

//Outra forma, nó textual apenass
let h4elementoTextual = document.createTextNode("Esse é o novo titulo");
h4.appendChild(h4elementoTextual)
h4.appendChild("Novo título"); // Assim da erro, pois ele espera um objeto do tipo nó e recebe uma string
console.log(h4);

//Capturando o elemento pai
let container1 = document.getElementById('container1');
console.log(container1);

//adicionando o novo elemento, ao elemento pai
container1.appendChild("Texto de teste"); //Isso da erro
container1.appendChild(h4);

//Verificando que o elemento foi adicionado ao elementoPai
console.log(container1);


//capturando o elemento pai, que no caso é o container1
let containerPai = h4.parentElement; 
console.log(containerPai);

//REMOÇÃO do h4
containerPai.removeChild(h4);

//Verificando que o elemento foi removido do elemento pai
console.log(containerPai);

//Interagindo com os elementos dos "felinos"

//Capturando todos os elementos com a classe .item
let listaFelinos = document.querySelectorAll('.item');
console.log(listaFelinos);

//Capturando o elemento pai
let container2 = document.querySelector('.container');
console.log(container2);

// Possíveis Formas de remover
container2.firstElementChild.remove(); //Remove o primeiro elemento filho
container2.lastElementChild.remove();  //Remove o ultimo elemento filho

container2.removeChild(listaFelinos[0]); //Tigre
container2.removeChild(listaFelinos[1]); //Leão
container2.removeChild(listaFelinos[2]); //Leopardo

//Quero adicionar o Leão novamente

//Adicionando um novo card
let novaDiv = document.createElement('div');

//Mostrar sem essa opção primeiramente
let titulo = "Leão, o rei da selva!"

//Usando a interpolação
novaDiv.innerHTML = ` 
    <div class="item">
        <img src="./imagens/leon.jpg">
        <h2>${titulo}</h2>
        <p>
        O leão (Panthera leo) é um mamífero carnívoro da família dos felinos é uma das cinco espécies do gênero
        gênero Panthera. Os leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na África
        subsahariana
        (com exceção das regiões florestais e das regiões de selva da Bacia do Congo) e uma pequena área do noroeste da
        Índia.
        </p>
    </div>`;

//Adiciona no final da lista
container2.appendChild(novaDiv);

//Inserindo no inicio
container2.insertBefore(novaDiv, container2.firstChild );

//Insere em um posição específica
container2.insertBefore(novaDiv, container2.children[2] );