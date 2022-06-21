// 1- leia o código
// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

// a) O que vai ser impresso no console?

// Resposta= log1 "Matheus Nachtergaele"
//           log2 "Virginia Cavendish"
//           log3 "Globo, 14h"


// 2- Leia o código abaixo


// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}



// a) O que vai ser impresso no console?  
// console.log(cachorro)
// nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// console.log(gato)
// nome: "Juba", 
// 	idade: 3, 
// 	raca: "SRD"
// console.log(tartaruga)
// nome: "Jubo", 
// 	idade: 3, 
// 	raca: "SRD"



// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

// Resposta = Copia todo o objeto


// 3 - Leia o código abaixo

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

// // a) O que vai ser impresso no console?

// console.log(minhaFuncao(pessoa, "backender"))
// Resposta = False
// console.log(minhaFuncao(pessoa, "altura"))

// Resposta = undefined ou null

// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?

// Resposta= O primeiro por que ele chamou o objeto e sua String
//           o segundo por que ele não existe.




// 1 - Resolva os passos a seguir

// a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos).
//  Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 

// // Exemplo de entrada
// const pessoa = {
//     nome: "Amanda", 
//     apelidos: ["Amandinha", "Mandinha", "Mandi"]
//  }
 
//  // Exemplo de saída
//  "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"

//  b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos.
//   Depois, chame a função feita no item anterior passando como argumento o novo objeto

// const nomeApelido = {
//     nome: "Eduardo",
//     apelidos: ["Du", "Dudu", "Edu"]

// }

// console.log (`Eu sou ${nomeApelido.nome}, mas pode me chamar de ${nomeApelido.apelidos}`)

// const novosApelidos = { ...nomeApelido.apelidos,
//     apelidos: ["fulano", "siclano", "deltrano"] 
// }

// console.log (`Eu sou ${nomeApelido.nome}, mas pode me chamar de ${novosApelidos.apelidos}`)



// 2- 
// a- Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

// const pessoa = {
//     nome: "Fabiano",
//     idade: 37,
//     profissao: "Agricultor"

// }

// const pessoa2 = {
//     nome: "Mateus",
//     idade: 3,
//     profissao: "Estudante"

// }




// B -Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
// 1-O valor de nome
// 2-O numero de caracteres do valor nome
// 3-O valor de idade
// 4-O valor de profissão  
// 5 -O numero de caracteres do valor profissão

// const nome = pessoa.nome
// const idade = pessoa.idade
// const profissao = pessoa.profissao

// function pessoaFuncao(array1) {

//    array1 = [(nome), (nome.length),(idade), (profissao), (profissao.length) ]
    
//     return array1


// }


// console.log (pessoaFuncao())




// 3- Resolva os passos a seguir: 

// a) Crie uma variável de escopo global que guarde um array vazio chamada carrinho

const carrinho = []


// b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (string) e disponibilidade (boolean - devem começar como true)

// const fruta1 = {
//     nome: "Banana",
//     disponivel: true
// }

// const fruta2 = {
//     nome: "Limão",
//     disponivel: true
// }


// const fruta3 = {
//     nome: "Laranja",
//     disponivel: true
// }


// // c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho. Invoque essa função passando os três objetos criados.
// const adiconarFruta1 = [fruta1.nome, fruta1.disponivel]
// const adiconarFruta2 = [fruta2.nome, fruta2.disponivel]
// const adiconarFruta3 = [fruta3.nome, fruta3.disponivel] 
// // const disponibilidade = [fruta1.disponivel, fruta2.disponivel, fruta3.disponivel]


// function adicionar(array1){

// array1 = [adiconarFruta1, adiconarFruta2, adiconarFruta3]
// return array1

// }
// carrinho.push(adicionar())
// // d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos. 


// console.log (carrinho)