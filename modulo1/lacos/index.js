// 1- O que o código abaixo está fazendo? Qual o resultado impresso no console?
// let valor = 0

// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)
// Resposta= adicionando cada bloco de for a ele mesmo e ao numero do bloco

// 2- Leia o código abaixo:
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

// Resposta = imprimi números maiores que 18

// 3- Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// R= ??? Dúvida





// 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
    
//     a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"x
    
//     b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
        
//     c) Por fim, imprima o array com os nomes dos bichinhos no console

// let quantAnimal = Number(prompt("Quantos animais você tem?"))

// let animais=[]


// if (quantAnimal ===0 ){
//     console.log (`Que pena! você pode adotar um pet!`)
// }else{
//     let nomePets = 0
//     while ( nomePets < quantAnimal){
       
//         animais.push(prompt("digite o nome de seus animais"))
//         nomePets += 1
        
//     }
    

// }


// console.log (animais)



// 2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
    
//     a) Escreva um programa que **imprime** cada um dos valores do array original.x
    
//     b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10x
    
//     c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo arrayx
    
//     d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.
    
//     e) Escreva um programa que imprima no console o maior e o menor números contidos no array original


// let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// let i= 0
//A-
// for (i of arrayOriginal){
// console.log (i)
// i++
// }

//B-
// for (i of arrayOriginal){

//     i= i /10
//     console.log(i)
//     i++
// }

//C-
// let par = arrayOriginal.splice()
// for (par of arrayOriginal){
//     if (par % 2 ===0){
        
//         console.log (par)
//     par++ 
   
// }
//  }

//D-

// const maiorNum = (arr) => {
//   let maior = Math.max (...arrayOriginal)
    
//   for (i of arr){
      
//        arr = maior
           
//   }
//   return arr
// }
// const menorNum = (arr) => {
//   let menor = Math.min (...arrayOriginal)
    
//   for (i of arr){
      
//        arr = menor
           
//   }
//   return arr
// }


//  console.log ("O maior número é " + maiorNum(arrayOriginal) +" " +"O menor número é " + menorNum(arrayOriginal))
    
        
    
//  - Desafios
//  1. Neste exercício vocês vão implementar uma brincadeira muito simples: "Adivinhe o número que estou pensando". Ele deve ser jogado entre duas pessoas. 
     
//      Inicialmente, uma das pessoas insere qual o número em que ela pensou. A outra pessoa tem que ficar chutando até acertar em cheio o número. Esta é uma tarefa difícil, então quem escolheu o número fica dando umas dicas para a outra pessoa, indicando se o número que ela pensou é maior ou menor do que o chute em si. Veja, abaixo, um exemplo de partida:
     
//      ```
//      Vamos jogar!
//      O número chutado foi: 3
//      Errrrrrrrou, é maior
//      O número chutado foi: 18
//      Errrrrrrrou, é menor
//      O número chutado foi: 15
//      Errrrrrrrou, é menor
//      O número chutado foi: 11
//      Acertou!!
//      O número de tentativas foi: 4 
     
//      ```
     
//      Um resumo das funcionalidades são:
     
//      a) Solicitar que o primeiro jogador escolha um número, através do `prompt`. Neste momento, deve-se imprimir no console a mensagem `Vamos jogar!`
     
//      b) A partir daí, será solicitado, ao segundo jogador, que ele chute os números até acertar, através do `prompt`. A cada chute, deve ser informado no console:
     
//      - O número chutado, com a mensagem: `O número chutado foi: <número>`
//      - Uma mensagem dizendo se o número escolhido é maior ou menor do que o número chutado: `Errou. O número escolhido é maior/menor`
     
//      c) Quando o segundo jogador acertar o número escolhido pelo primeiro jogador, deve ser impressa a mensagem: `Acertou` ; e, embaixo, `O número de tentativas foi : <quantos chutes o usuário deu>`


// let escolhaJogador = Number(prompt("Escolha um Número:"))
// console.log("vamos jogar")
// let i = 0
// let chute= Number(prompt("tente acertar"))

// const jogar= () => {
// for (i of escolhaJogador){
//   chute= Number(prompt("tente acertar"))
// if (escolhaJogador > chute ){
//     console.log ("Número menor")
// }else if ( escolhaJogador < chute){
//   console.log ("Número é maior")
// }
// }
// }