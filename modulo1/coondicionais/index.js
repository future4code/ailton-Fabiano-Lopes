// 1. Leia o código abaixo:
    

//     const respostaDoUsuario = prompt("Digite o número que você quer testar")
//     const numero = Number(respostaDoUsuario)
    
//     if (numero % 2 === 0) {
//       console.log("Passou no teste.")
//     } else {
//       console.log("Não passou no teste.")
//     }
    
    
//     a) Explique o que o código faz. Qual o teste que ele realiza? 
//     Resposta Verificar se é pa ou impar
    
//     b) Para que tipos de números ele imprime no console "Passou no teste"?
//     Resposta = Par 
    
//     c) Para que tipos de números a mensagem é "Não passou no teste"?
//     Resposta = Impar

// 2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:
    

    // let fruta = prompt("Escolha uma fruta")
    // let preco
    // switch (fruta) {
    //   case "Laranja":
    //     preco = 3.5
    //     break;
    //   case "Maçã":
    //     preco = 2.25
    //     break;
    //   case "Uva":
    //     preco = 0.30
    //     break;
    //   case "Pêra":
    //     preco = 5.5
    //   break; // BREAK PARA O ITEM c.
    //   default:
    //     preco = 5
    //     break;
    // }
    // console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
    
    // a) Para que serve o código acima?
    // Resposta = Saber o preço das frutas
    
    // b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
    // Resposta = O preço da fruta, maçã é R$ 2.25
    
    // c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
    // Resposta = O preço da fruta, Pêra é R$ 5


    // 3. Leia o código abaixo:
    
    
    // const numero = Number(prompt("Digite o primeiro número."))
    
    // if(numero > 0) {
    //   console.log("Esse número passou no teste")
    // 	let mensagem = "Essa mensagem é secreta!!!"
    // }
    
    // console.log(mensagem)

    
    // a) O que a primeira linha está fazendo?
    // Resposta= Pedindo usuário para inserir um número
    
    // b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

    // Resposta= Esse número passou no teste. Erro
    
    // c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
    // Resposta = Sim. Não houve um termo para informar qualquer outro parametro que finalizasse a operação.Number




    // 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
    
    // a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    
    // b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
    
    // c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

    // let idade = Number(prompt("Digite a sua idade"));

    // if (idade >= 18){
    //     console.log ("Você pode dirigir")
    // }else{
    //     console.log ("Você não pode dirigir")
    // }
    

//    2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

// let turno = prompt("Qual turno você estuda? M, V, N").toUpperCase()

// if (turno === 'M') {
//     console.log ("Bom Dia!")
// } else if (turno === 'V') {
//     console.log ("Boa Tarde!")
// } else if (turno === 'N') {
//     console.log ("Boa Noite!")
// }else {
//     console.log ("valor informado errado")
// }


// 3. Repita o exercício anterior, mas utilizando a estrutura de `switch case` agora.

// let turno = prompt("Qual turno você estuda? M, V, N")

// switch (turno.toUpperCase()) {
//     case "M":
//         console.log ("Bom Dia!")
//     break
//     case "V":
//         console.log ("Boa Tarde!")
//     break
//     case "N":
//         console.log ("Boa Noite!")
//     break
//     default:
//         console.log ("valor informado errado")

// }


// 4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia **e** se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: `"Bom filme!"`, caso contrário, imprima `"Escolha outro filme :("`

// let generoFilme = prompt("Qual é o gênero do filme?").toLowerCase()
// let preco = Number(prompt("Qual o valor do filme"))


// if (generoFilme === 'fantasia'  && preco <= 15){

//     console.log ("Bom filme!")
// }else{
//     console.log ("Escolha outro filme")
// }


//DESAFIO
// 1- 

// let generoFilme = prompt("Qual é o gênero do filme?").toLowerCase()
// let preco = Number(prompt("Qual o valor do filme"))


 

// if (generoFilme === 'fantasia'  && preco <= 15){
//     let lanchinho = prompt("Escolha um Lanche: Pipoca, Chocolate, doces, etc")
//     console.log ("Bom filme!")
//     console.log(`Aproveite seu(sua) ${lanchinho}`)
// }else{
//     console.log ("Escolha outro filme")
// }



//2-

// 2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve fornecer algumas informações:
//     - Nome completo;
//     - Tipo de jogo: IN indica internacional; e DO indica doméstico;
//     - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
//     - Categoria: pode ser as opções 1, 2, 3 ou 4;
//     - Quantidade de ingressos
    
//     O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)

let nome = prompt("Qual é o seu nome")
let tipoJogo = prompt("Qual o tipo do jogo? IN = Internacional ou DO = Doméstico").toUpperCase()
let etapaJogo = prompt("Qual a etapa do jogo? SF = SemiFinais, DT = Decisão Terceiro Lugar, FI = Final").toUpperCase()
let categoria = Number (prompt("informe a categoria da seção da poltrona: 1,2,3,4"))
let quantidadeIngresso = prompt("Informe quantos ingressos")


if (tipoJogo === 'DO' ){

    switch (etapaJogo){
        case 'SF':
            switch (categoria){
                case 1 :
                    let valorIngresso = 1320.00 
                    console.log(`---Dados da compra---
 Nome do Cliente: ${nome}
 Etapa do Jogo: ${etapaJogo} Semi Finais
 Categoria: ${categoria}
 Quantidade de ingresso: ${quantidadeIngresso}
       ---Valores---
 Valor do Ingresso R$${valorIngresso}
 Valor total = R$${quantidadeIngresso * valorIngresso}
                        `)
                    break
                    case 2 :
                    let valorIngresso1 = 880.00
                    console.log(`---Dados da compra---
 Nome do Cliente: ${nome}
 Etapa do Jogo: ${etapaJogo} Semi Finais
 Categoria: ${categoria}
 Quantidade de ingresso: ${quantidadeIngresso}
       ---Valores---
 Valor do Ingresso R$${valorIngresso1}
 Valor total = R$${quantidadeIngresso * valorIngresso1}
                        `)
                    break
                    case 3 :
                    let valorIngresso2 = 550.00 
                    console.log(`---Dados da compra---
 Nome do Cliente: ${nome}
 Etapa do Jogo: ${etapaJogo} Semi Finais
 Categoria: ${categoria}
 Quantidade de ingresso: ${quantidadeIngresso}
       ---Valores---
 Valor do Ingresso R$${valorIngresso2}
 Valor total = R$${quantidadeIngresso * valorIngresso2}
                        `)
                    break
                    case 4 :
                    let valorIngresso3 = 220.00 
                    console.log(`---Dados da compra---
 Nome do Cliente: ${nome}
 Etapa do Jogo: ${etapaJogo} Semi Finais
 Categoria: ${categoria}
 Quantidade de ingresso: ${quantidadeIngresso}
       ---Valores---
 Valor do Ingresso R$${valorIngresso3}
 Valor total = R$${quantidadeIngresso * valorIngresso3}
                        `)
                    break
                     
            }

        case 'DT':
            switch (categoria){
                case 1 :
                    let valorIngressoDt = 660.00 
                    console.log(`---Dados da compra---
 Nome do Cliente: ${nome}
 Etapa do Jogo: ${etapaJogo} Decisão terceiro lugar
 Categoria: ${categoria}
 Quantidade de ingresso: ${quantidadeIngresso}
       ---Valores---
 Valor do Ingresso R$${valorIngressoDt}
 Valor total = R$${quantidadeIngresso * valorIngressoDt}
                        `)
                    break
                    case 2 :
                    let valorIngressoDt1 = 440.00 
                    console.log(`---Dados da compra---
 Nome do Cliente: ${nome}
 Etapa do Jogo: ${etapaJogo} Semi Finais
 Categoria: ${categoria}
 Quantidade de ingresso: ${quantidadeIngresso}
       ---Valores---
 Valor do Ingresso R$${valorIngressoDt1}
 Valor total = R$${quantidadeIngresso * valorIngressoDt1}
                        `)
                    break

                    case 3 :
                        let valorIngressoDt2 = 330.00 
                        console.log(`---Dados da compra---
     Nome do Cliente: ${nome}
     Etapa do Jogo: ${etapaJogo} Semi Finais
     Categoria: ${categoria}
     Quantidade de ingresso: ${quantidadeIngresso}
           ---Valores---
     Valor do Ingresso R$${valorIngressoDt2}
     Valor total = R$${quantidadeIngresso * valorIngressoDt2}
                            `)
                        break
                }
            }

    }




