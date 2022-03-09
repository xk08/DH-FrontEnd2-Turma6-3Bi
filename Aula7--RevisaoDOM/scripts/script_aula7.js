//////@@@@@@ Trabalhando com elementos dinâmicos

//@@@Chamado essa função no script da aula 6
function atributosDinamicos() {

    //Capturando a lista de imagens da página
    let listaImagensFelinos = document.querySelectorAll('img');
    //console.log(listaImagensFelinos);

    //Percorre a lista
    for (let img of listaImagensFelinos) {

        console.log(img);

        //@@hasAttribute -> Verifica se o atributo existe
        console.log(img.hasAttribute("src")); // true
        console.log(img.hasAttribute("teste")); // false

        //@@getAttribute -> Captura o atributo
        //let atributoPego = img.getAttribute("teste"); //Retorna nullo
        let atributoPego = img.getAttribute("src");
        console.log(atributoPego);

        //outra forma de capturar e alterar
        console.log(img.src);

        //@@setAttributte -> Define um atributo (Local ou da internet)
        img.setAttribute("src", "./imagens/leopardo.jpg");
        img.setAttribute("src", "https://s2.glbimg.com/xYzPF9deXowzD_lQBdcpecfnk64=/e.glbimg.com/og/ed/f/original/2021/01/30/jadeeyedleopard-02.jpg");

        //Criando um novo atributo
        img.setAttribute("novoAtributo", "Novo valor")

        console.log(atributoPego);

        //@@removeAttribute -> Remove um atrivuto especifico
        img.removeAttribute("src");
    }

    //Quero adicionar um Link de mais informações ao Card do leão (APENAS)

    // 1) Capturo o card do leão
    console.log(listaImagensFelinos);
    console.log(listaImagensFelinos[1]); //captura a img
    console.log(listaImagensFelinos[1].parentElement); //captura a div

    //Atribui o elemento pai -  a uma variável
    let cardLeao = listaImagensFelinos[1].parentElement;

    // 2) Criar o novo elemento
    let a = document.createElement('a')
    a.innerText = "Clique para conhecer mais"

    // 3) Setando os atributos
    a.setAttribute('href', "https://www.google.com");
    a.setAttribute('href', "https://www.ikoporan.org/pt-br/voluntariado/conservacao-de-leoes/");

    //Abrir na mesma página (Usando mais um atributo)
    a.setAttribute('target', "_blank");
    cardLeao.appendChild(a)
}

/* ////@@@@@ INSTRUÇÕES PRA MESA DE TRABALHO
    1 - Criar a opção de seleção do felino (1 tigre, 2 leão, etc)
    2 - Verificar/testar qual foi a opção escolhida
    3 - Definir uma nova URL da internet (Foto pública da net) 
    4 - Acessar o atributo "src" das imagens e fazer a nova atribuição
*/
