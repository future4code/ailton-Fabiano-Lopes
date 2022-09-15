// a)Crie uma variável minhaString do tipo string e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?

// const minhaString:string = "Minha String"
// minhaString = 10

// console.log(minhaString)
// R: não atribui por ser uma string

// b)Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como fazer para que essa variável também aceite strings? Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?
// let meuNumero: number | string = 10
// meuNumero = "dsfdsf"
// console.log(meuNumero)

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

// const person :{name:string, age:number, favoriteColor:string}= {
//     name: "Fabiano",
//     age:37,
//     favoriteColor: "blue"
// }

// console.table(person)


// enum favoriteColor{
//     RED="red",
//     ORANGE = "orange",
//     YELLOW = "yellow",
//     GREEN = "green",
//     BLUE="blue",

// }

// type person = {
//     name: string,
//     age:number,
//     favoriteColor : string
// }

// const person1: person = {
//     name: "Darwin",
//     age:6,
//     favoriteColor: favoriteColor.BLUE
// }
// const person2: person = {
//     name: "Félix",
//     age: 1,
//     favoriteColor: favoriteColor.GREEN
// }
// const person3: person = {
//     name: "Raj",
//     age:1,
//     favoriteColor: favoriteColor.ORANGE
// }

// console.table(person1)
// console.table(person2)
// console.table(person3)
// d) Modifique a propriedade corFavorita para que apenas seja possível escolher entre as cores do arco-íris. Utilize um enum para isso.