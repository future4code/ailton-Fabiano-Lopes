// Exercício 2
const numberOne = Number(process.argv[3]);
const numberTwo = Number(process.argv[4]);
const operacao = process.argv[2];

const result = () => {
  if (numberOne && numberTwo && operacao) {
    switch (operacao) {
      case "soma":
        return numberOne + numberTwo;
        break;
      case "subt":
        return numberOne - numberTwo;

        break;
      case "mult":
        return numberOne * numberTwo;

        break;
      case "div":
        return numberOne / numberTwo;

        break;
    }
  } else {
    console.log("Erro, falta paramêtros");
  }
};
console.log(result());
