function calcular(){

    let nAlt = document.getElementById ('txtAlt');
    let nPeso = document.getElementById ('txtPeso');

  
    let res = document.getElementById ('res')

if (nAlt.value.length == 0 || nPeso.value.length == 0){
    alert ('Favor verificar os dados')
}else {
    let a = Number (nAlt.value);
    let p = Number (nPeso.value);
   let cal = (p / (a**2/10000)).toFixed(2);

   if (cal <= 18.5){
        res.innerHTML = (`Seu imc é ${cal} e você está abaixo do peso ideal`)
   }else 
   if ( cal > 18 && cal < 25){
    res.innerHTML = (`Seu imc é ${cal} e você está com peso saudável`)
   }
   else if ( cal >= 25 && cal <= 30) {
    res.innerHTML = (`Seu imc é ${cal} e você está com Sobrepeso`)

   }

   else if ( cal > 30 && cal < 40) {


    res.innerHTML = (`Seu imc é ${cal} e você está Obeso`)
   }

   else {

    res.innerHTML = (`Seu imc é ${cal} e você está com Obesidade Morbida`)
   }
}




}