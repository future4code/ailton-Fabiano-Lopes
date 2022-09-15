// Exercício 1
// A)
const ageSoma = Number(process.argv[4]);
const nameUser = process.argv[2];
const age = Number(process.argv[3]);

if (nameUser && age && ageSoma) {
  console.log(
    "%c Olá,",
    nameUser,
    "! Você tem",
    age,
    "anos.",
    `Em ${ageSoma} anos você terá`,
    age + ageSoma,
    " background: green; color: white"
  );
} else {
  console.log(
    "%c Erro, dados inexistentes",
    " background: green; color: white"
  );
}
