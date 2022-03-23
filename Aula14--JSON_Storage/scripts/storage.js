console.log(window.sessionStorage);
console.log(window.localStorage);
console.log(localStorage); //pode-se omitir a palavra window

localStorage.setItem(1, 60);
localStorage.setItem(2, true);
localStorage.setItem(3, "Teste 3");

//Atualiza o item no storage, pois usa a mesma chave = 1;
localStorage.setItem(1, 7800);

console.log(localStorage.length); //Obtem o tamanho do storage

//Capturando um item do storage por sua chave
let itemCapturado = localStorage.getItem(1);
console.log(itemCapturado);

//Removendo um item do storage
localStorage.removeItem("2");

//Percorrendo todos os itens do storage
for (let item = 1; item <= localStorage.length; item++) {
    console.log(localStorage.getItem(item));
}

//Limpando todos os itens do storage
localStorage.clear();

//Cria um novo objeto JS
let usuario = {
    nome: "Pablo",
    idade: 45
}

//Converte o obj JS para JSON
let objetoUsuarioConvertidoJson = JSON.stringify(usuario);
console.log(objetoUsuarioConvertidoJson);

//Salva o objeto no Storage
localStorage.setItem(1, objetoUsuarioConvertidoJson );
console.log(localStorage);

//Captura o objeto
let objetoUsuarioJsonCapturado = localStorage.getItem(1);

//Converte o objeto JSON para objeto JS
let objetoUsuarioEmJs = JSON.parse(objetoUsuarioJsonCapturado);
console.log(objetoUsuarioEmJs.nome);