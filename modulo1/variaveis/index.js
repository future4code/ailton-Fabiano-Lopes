let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

/* primeiro console b será impresso com valor de 10, já no segundo como "let" é uma variável que pode ser mudada o valor de b passa a ser 5 e o valor de a continua 10*/

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)

/* 10 10 10, ao informar que todas variáveis são iguais logo b que era 20 também terá o mesmo valor das outras*/


let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

/* no p poderia colocar horasDia, e no t poderia pagDia, ele faz uma divisão entre a horas trabalhadas e valor do pagamento no dia e mostra o resultado de quanto ganha por hora*/

let nome;
let num;
console.log (typeof nome,typeof num)
/* undefinied por que não foi declarado nenhum tipo de variável sendo impossivel detectar qual seria*/


let nome = prompt("Qual é o seu nome")
let idade = +prompt ("Qual é a sua idade")

console.log (typeof nome, typeof idade)


let per1= ("Está chovendo hoje?");
let per2= ("Está fazendo calor?");
let per3= ("Está fazendo frio?");

let res1= false;
let res2=  true;
let res3= false;


console.log (`${per1} ${res1 || "Não"}, ${per2} ${ "Sim"|| res2}, ${per3} ${res3 || "Não"}`)
console.log (typeof res1, typeof res2, typeof res3)

let a = 10;
let b = 25;
let c;

c = a;
a = b;
b=c;
console.log (a)

console.log (b)
