






// 1- Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:
// a) Crie um novo array que contenha apenas o nome dos doguinhos

// b) Crie um novo array apenas com os [cachorros salsicha](https://www.youtube.com/watch?v=YQ404vwjzus)

// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"

//a) Resposta
// let resultado = []
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

//  const retornaPets = pets.map((pets, index, array)=> {
//      console.log (pets.nome)
//  })


// b) Resposta
// const retornaPets = pets.filter((pets, index)=> {

//     return pets.raca === 'Salsicha'
// })
// console.log (retornaPets)

// c) Resposta

// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

// const petsPoodle = pets.filter((pets1)=> {

//         return pets1.raca === 'Poodle'
//     }).map((pets2)=> {
//         resultado.push('Você ganhou um cupom de desconto de 10% para tosar o/a '+ pets2.nome )
             
//          })
    
//         console.log (resultado)
        
       
    // 2- Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:
    //     let compras= []
    // const produtos = [
    //     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    //     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    //     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    //     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    //     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    //     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    //     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    //     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    //     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    //     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
    //  ]

//      a) Crie um novo array que contenha apenas o nome de cada item

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

// a) Resposta
// const nomeProdutos = produtos.map((prod)=> {
//     compras.push(prod.nome)

// })
// console.log (compras)

// b) Resposta

// const prodDesc = produtos.map((prod1,preco1)=>{
    

//     return [ prod1.nome, prod1.preco * 0.95]
// } )

// console.log (prodDesc)

// c)
// const prodCat = produtos.filter((prod)=> {
//     return prod.categoria === 'Bebidas'
// })

// console.log (prodCat)


// d)
// const prodPesq = produtos.filter((prod)=>{
//     return prod.nome.includes('Ypê')
// })
// console.log (prodPesq)

// e) 

// const prodYpe = produtos.filter((prod)=>{
//     return prod.nome.includes('Ypê')

// }).map((prod1)=>{
//     return ["Compre " + prod1.nome+ " por " + prod1.preco]
// })
// console.log (prodYpe)


// Desafio


// Dado o seguinte array de pokémons, realize as operações pedidas nos itens abaixo:

let pok = []
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]



//  a) Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética
//  b) Crie um novo array apenas com os tipos dos pokémons, sem repetição


// a) Resposta
// const pokAlfabetico = pokemons.map((pok2)=>{
//     return pok2.nome
// }).sort()
// console.log(pokAlfabetico)

// b) Resposta

const pokTipo = pokemons.map((pok1)=>{
    return pok1.tipo
}).filter((elem,index,self)=> {
    return index == self.indexOf(elem)
})
console.log(pokTipo)