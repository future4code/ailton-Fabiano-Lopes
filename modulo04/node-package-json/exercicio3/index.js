// Exercicio 3

const listaTarefas = ["Varrer", "Cozinhar", "Limpar"];
const novaTarefa = () => {
  const date = process.argv[2];
  listaTarefas.push(date);
  return listaTarefas;
};
console.table(novaTarefa());
