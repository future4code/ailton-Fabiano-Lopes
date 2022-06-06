// 1. Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços
    // const text = "Prazer em te conhecer"

    // const array= text.split (" ")

    // console.log (`${array}`)




// 2. Dado o array `["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]`, faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array

const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];

const frutAba =  frutas.indexOf("Abacaxi")

const comp = frutas.length



console.log (`Frutas: ${frutas}, Tamanho da array:${comp} 
Existe Abacaxi? ${frutas.includes("Abacaxi")}
Indice do abacaxi: ${frutAba} 
`)