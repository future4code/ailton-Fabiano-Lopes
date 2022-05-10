// 1. Para este exercício, será necessário o conhecimento das fórmulas para mudar a unidade de temperatura entre Graus Celsius(°C),  Graus Fahrenheit(°F) e Kelvin(K). Abaixo estão duas delas:
//     - Graus Fahrenheit(°F) para Kelvin(K)
        
//         ```
//         (KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
//         ```
        
//     - Graus Celsius(°C) para Graus Fahrenheit (°C)
        
//         ```
//         (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32
//         ```
        
    
//     a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
    
//     b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também
    
//     c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também
    
//     d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter

// let fah = Number(prompt("Digite o valor em Fahrenheit"))
// let cel = Number(prompt("Digite o valor em Kelvin"))
// let kel = Number(prompt("Digite o valor em Celsius"))

// let fahTokel = (fah - 32) * (5/9) + 273.15;
// let celToFah = (cel) * (9/5) +32;
// let celToKel = cel + 273.15;
// let kelToCel = kel - 273.15
// let kelToFah = (kel - 273.15) * (9/5) +32
// let fahTocel = (fah -32) * (9/5)
// console.log (`De Fahrenheit ${fah} °F para Kelvin ${fahTokel} °K, de Celsius ${cel} °C para Fahrenheit ${celToFah} °F, de Celsius ${cel} °C para Kelvin ${celToKel} °K, de Kelvin ${kel} °K para Celsius ${kelToCel} °C, de Kelvin ${kel} °K para Fahrenheit ${kelToFah} °F, de Fahrenheit ${fah} °F para Celsius ${fahTocel} °C `)

// 2. Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de energia elétrica em residências. Sabe-se que o quilowatt-hora de energia custa R$0.05. Faça um programa que receba a quantidade de quilowatts consumida por uma residência.
    
//     a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora
    
//     b) Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto

// let quil = Number (prompt("Digite a quantidade de Quillowats de consumo:"))

// let quilHora = ( quil * 0.05)

// let quilDesc = (quilHora) - (quilHora*0.15)

// console.log (`Na sua residência teve um consumo de ${quil}kWh, valor total para pagamento é de R$${quilHora}, pagando antes do prazo tem desconto de 15% ficando no total R$${quilDesc}`)

// 3. Um grande problema que o mundo tem atualmente é a quantidade de unidades que existem para representar a mesma coisa. Por exemplo, para representar a Massa de um corpo, podemos usar quilograma (kg), onça (oz) e até libra (lb). Para representar Distâncias, existem metro (m), pés (ft), milha (mi). Até para volumes, há várias opções: litro (l), galão (gal),  xícaras (xic). Dada essa introdução, faça o que se pede:
    
//     a) Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg. Imprima  a resposta no console da seguinte forma: 
//     `20lb equivalem a X kg`

//Resposta
// let lib = 20
// let kilo = lib / 2.205

// console.log (`${lib} libras equivalem a ${kilo}Kg`)





    
//     b) Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg. Imprima  a resposta no console da seguinte forma: 
//     `10.5oz equivalem a X kg`

//Resposta
// let oz = 10.5

// let kilo = oz / 35.274
// console.log (`${oz} oz equivalem a ${kilo}Kg`)


    
//     c) Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m. Imprima  a resposta no console da seguinte forma: 
//     `100mi equivalem a X m`


//Resposta
// let milha = 100

// let metro = milha * 1609

// console.log (`${milha} mi equivalem a ${metro} m`)
    
//     d) Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m. Imprima  a resposta no console da seguinte forma: 
//     `50ft equivalem a X m`

//Resposta

// let pes = 50

// let metro = pes / 3.281

// console.log (`${pes} pes equivalem a ${metro} m`)



    
//     e) Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro. Imprima  a resposta no console da seguinte forma: 
//     `103.56gal equivalem a X l`


//Resposta

// let gal = 103.56

// let litro = gal *3.800

// console.log (`${gal} gal equivalem a ${litro} L`)




    
//     f) Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro. Imprima  a resposta no console da seguinte forma: 
//     `450 xic equivalem a X l`

//Resposta

// let xic = 450

// let litro = xic / 3.52

// console.log (`${xic} gal equivalem a ${litro} L`)

    
//     g) Escolha ao menos **um** dos itens anteriores e modifique o programa para que ele peça ao usuário o valor da unidade original antes de converter

