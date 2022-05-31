ˋˋˋ
function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]

const nomeAnimais = animais.map((anim)=>
{return anim.nome}).filter((elem,index,self)=>
{return index == self.indexOf(elem)})
return nomeAnimais
}
ˋˋˋ