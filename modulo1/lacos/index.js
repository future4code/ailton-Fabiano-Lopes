













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


let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

let i= 0
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

const maiorMenor = (arr) => {
  for (i of arr){
      
       arr = arrayOriginal(Math.max())
      
        
  }
return arr
}
 


 console.log (maiorMenor(arrayOriginal))
    
        
    

