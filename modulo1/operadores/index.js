// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado)
// Vai ser false pois && só aceita 2 verdadeiros

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) 
// False pois existe 1 false

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado)
// True por que o resultado está negando o false do resultado e outra expressão é verdadeira

// console.log("d. ", typeof resultado)
// False, False, True


// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

// o prompt sempre é uma string tem que transformar em number

// let primeiroNumero = Number (prompt("Digite um numero!"))
// let segundoNumero = Number (prompt("Digite outro numero!"))

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

//Exercicio escrita código 

// Exercicio 1
// let nomeUsuario = prompt("Qual é o seu nome?")
// let nomeAmigo = prompt ("Qual é o nome do seu amigo?")

// let idadeUsuario = Number (prompt("Qual é a sua idade?"))
// let idadeAmigo = Number (prompt("Qual a idade do seu amigo"))

// let idadeComp = idadeUsuario > idadeAmigo 

// let difIdade = idadeUsuario - idadeAmigo

// console.log (`Seu nome é ${nomeUsuario} sua idade é ${idadeUsuario} anos, e o nome do seu amigo é ${nomeAmigo} a idade do seu amigo é ${idadeAmigo}anos,  você é mais velho que seu amigo? ${idadeComp}, a diferença de idade de vocês dois é ${difIdade} anos`)

// Exercicio 2

// let num = Number(prompt("Insira o número"))

// let resultado = num % 2

// console.log (`O Número ${num} se o resultado for 0 o resultado ${resultado}, é par, se não for é impar`)

//Quando o resultado for 0 sempre o número sempre será par
//Ao inserir um numéro impar sempre terá um resultado diferente de 0


// 3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
    
//     a) A idade do usuário em meses
    
//     b) A idade do usuário em dias
    
//     c) A idade do usuário em horas


// let idade = Number(prompt("Qual é a sua idade"))

// let idadeMes = idade * 12;

// let idadeDias = idade * 365;

// let idadeHoras = idade * 8760;

// console.log (`A sua idade é ${idade} anos, em meses ${idadeMes} meses, em dias ${idadeDias} dias, em horas ${idadeHoras} horas`)





// 4- Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:
// O primeiro numero é maior que segundo? true
// O primeiro numero é igual ao segundo? false
// O primeiro numero é divisível pelo segundo? true
// O segundo numero é divisível pelo primeiro? true

// obs: O true ou false vai depender dos números inseridos e do resultado das operações.

let num1 = Number(prompt("Digite o primeiro número"))

let num2 = Number(prompt("Digite o segundo número"))

let res1 = num1 > num2;

let res2 = num1 === num2;

let res3 = num1 % num2 === 0;

let res4 = num2 % num1 === 0;


console.log (`Se ${num1} é maior que ${num2} ${res1}, Se ${num1} é igual que ${num2} ${res2}, Se ${num1} é divisível por ${num2} ${res3}, Se ${num2} é divisível por ${num1} ${res4} `)