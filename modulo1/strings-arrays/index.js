// 1. Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.
    
//     ```jsx
    // let array
    // console.log('a. ', array)
// RESPOSTA = Undefined    
    // array = null
    // console.log('b. ', array)
//RESPOSTA = null
    
    // array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    // console.log('c. ', array.length)
//RESPOSTA = 11 elementos    
   
    // let i = 0
    // console.log('d. ', array[i])

// RESPOSTA= 3

    // array[i+1] = 19
    // console.log('e. ', array)
//RESPOSTA = 19
    
    // const valor = array[i+6]
    // console.log**('f. ', valor)**
    // ```
// RESPOSTA= 9
// 2. Leia o código abaixo com atenção 
    
//     ```jsx
//     const frase = prompt("Digite uma frase")
    
//     console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
//     ```
    
//     Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?

// RESPOSTA= SUBI NUM ÔNIBUS EM MIRROCOS, 28 




//Exercício
// 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
//     const nomeUser = prompt("Digite o seu nome:")
//     const emailUser = prompt("Digite seu e-mail:")
// //     O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

// console.log (`O e-mail ${emailUser} foi foi cadastrado com sucesso. Seja Bem-vindo(a), ${nomeUser}`)





// 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

// const comidaFav = ["Feijoada", "Lazanha", "Chinesa", "Churrasco", "Mariscada"]
    
//     a) Imprima no console o array completo
// console.log (comidaFav)
    
//     b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.

// console.log (`Essas são minhas comidas preferidas 
// ${comidaFav[0]}
// ${comidaFav[1]}
// ${comidaFav[2]}
// ${comidaFav[3]}
// ${comidaFav[4]}`)
    
//     c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista
//     const comidaUser = prompt("Qual é a sua comida favorita?")

//     comidaFav[1]= comidaUser;


// console.log (`Essas são minhas comidas preferidas 
// ${comidaFav[0]}
// ${comidaFav[1]}
// ${comidaFav[2]}
// ${comidaFav[3]}
// ${comidaFav[4]}`)



// 3. Faça um programa, seguindo os passos:
    
//     a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

// const listaDeTarefas = [];
    
//     b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

// const listUser1 = prompt("Qual é sua tarefa 1?");
// const listUser2 = prompt("Qual é sua tarefa 2?");
// const listUser3 = prompt("Qual é sua tarefa 3?");

// listaDeTarefas[0] = listUser1;
// listaDeTarefas[1] = listUser2;
// listaDeTarefas[2] = listUser3;


    
//     c) Imprima o array no console
// console.log (listaDeTarefas)
    
// //     d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
 
// const listaInd = prompt("Digite um índice de suas tarefas ")
// console.log (listaDeTarefas[listaInd])
// //     e) Remova da lista o item de índice que o usuário escolheu.

// const removeitem = listaDeTarefas.splice(listaInd)
    
// //     f) Imprima o array no console

// console.log (listaDeTarefas)