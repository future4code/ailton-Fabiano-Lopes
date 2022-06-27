// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   
   
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a,b) => a-b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  const numPar = array.filter(numPar=> numPar % 2 === 0)
  return numPar

}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {

const num = array.map((numElev) => {
   return numElev ** 2
}).filter(numPar=> numPar % 2 === 0)
return num
}
 
 


// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  const max = Math.max(...array)
  return max 
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  const numPar = n.filter(numPar=> numPar % 2 === 0)
  return numPar
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
if (ladoA === ladoB && ladoA === ladoC){
  return "Equilátero"
}else if (ladoA === ladoB &&  ladoA !== ladoC || ladoA === ladoC && ladoA !== ladoB || ladoB === ladoC && ladoB !== ladoA) {
  return "Isósceles"
}else if (ladoA !== ladoB && ladoA !==ladoC){
  return "Escaleno"
}
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
 let primMaior = -Infinity
 let segMaior = -Infinity
 let primMenor = +Infinity
 let segMenor = Infinity
 
 for (let number of array) {
   if (number > primMaior){
     primMaior = number
   } if (number < primMenor ){
     primMenor = number
   }

 }
 for (let number of array) {
  if (number > segMaior && number !== primMaior){
    segMaior = number
  } if (number < segMenor && number !== primMenor ){
    segMenor = number
  }

}
 const resultado =[segMaior, segMenor]
 return resultado
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
  
}