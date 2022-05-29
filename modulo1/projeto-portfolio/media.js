let fnota = document.getElementById ('inNota');
let fLista = document.getElementById ('selNota');
let valores = [];
let res = document.querySelector ('div#res');

function isNota (n) {
    if ( Number (n)>=0 && Number(n)<=10){
        return true;
    } else{
        return false;
    }

}

/*function inLista (n, l) {
    if (l.indexOf (Number (n)) != -1){
        return true;

    }else{
        return false;
    }
}*/



function adicionar(){
    if (isNota (fnota.value) /*&& !inLista (fnota.value, valores)*/){
        valores.push (Number (fnota.value));
        let item = document.createElement ('option');
        item.text  = `Nota ${fnota.value}`;
        fLista.appendChild (item);
        res.innerHTML = '';
    
    } else{
        alert ('Número digitado incorreto')

    }
    fnota.value = '';
    fnota.focus();
}

function calcular(){
    if ( valores.length == 0) {
        alert ('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            soma += valores[pos]
            

        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p> A soma de todos os valores foi ${soma}.</p>`
        res.innerHTML += `<p> A média dos valores foi ${media}.</p>`
    }


}