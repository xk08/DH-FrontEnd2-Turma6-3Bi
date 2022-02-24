//// -> FOR IN

//Criando um objeto js e definindo suas caracteristicas/propriedades
let usuarioNovo = {
    nome: "Marcos",
    idade: 24,
    eProfessor: true,
    endereco: {
        cidade: "São Borja",
        estado: "RS"
    }
};

console.log(usuarioNovo);

//Iterando/Percorrendo o objeto
for (let objeto in usuarioNovo) {
    console.log(objeto); //Apresenta apenas a propriedade...sem o valor
    console.log(usuarioNovo[objeto]); //Apresenta o valor
}

///// -> FOR OF

//Criando um array com elementos textuais
let arrayFrutas = ["Maça", "Abacaxi", "Manga"];

//Forma convencional de percorrer o array
for (let i = 0; i < arrayFrutas.length; i++) {
    console.log(arrayFrutas[i]);
}

//Percorrendo/Iterando, utilizando o For..of
for (let item of arrayFrutas) {
    console.log(item);
}

/* Iterando sobre um array de objetos js */

//Criando um array vazio (sem tipo)
let arrayUsuarios = [];

//Criando os objetos que representam os usuários
let usuario1 = {
    nome: "Marcos",
    idade: 24,
    eProfessor: true,
    endereco: {
        cidade: "São Borja",
        estado: "RS"
    }
};

let usuario2 = {
    nome: "Pedro",
    idade: 30,
    eProfessor: false,
    endereco: {
        cidade: "Alegrete",
        estado: "RS"
    }
};
let usuario3 = {
    nome: "Paula",
    idade: 42,
    eProfessor: false,
    endereco: {
        cidade: "Tubarão",
        estado: "SC"
    }
};

//Adicionando os objetos (usuários) ao Array
arrayUsuarios.push(usuario1);
arrayUsuarios.push(usuario2);
arrayUsuarios.push(usuario3);

console.log(arrayUsuarios);

//Exemplo com for-aninhado

//Iterando sobre o array de usuários
for (let usuario of arrayUsuarios) {

    //Iterando sobre as propriedades do objeto js
    for (let objt in usuario) {
        console.log(usuario[objt]);
        console.log("\n");
    }
    //console.log(usuario);
}