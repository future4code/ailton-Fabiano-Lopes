// Exercício 1
// A)
console.log("Olá,", process.argv[2], "! Você tem", process.argv[3], "anos.");
// B)
const age = Number(process.argv[4]);
console.log(
  "Olá,",
  process.argv[2],
  "! Você tem",
  process.argv[3],
  "anos.",
  "Em sete anos você terá",
  Number(process.argv[3]) + age
);
