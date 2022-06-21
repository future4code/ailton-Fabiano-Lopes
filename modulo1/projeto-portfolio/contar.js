function contar() {
    let numInicio = document.getElementById ('txtInicio');
    let numFim = document.getElementById ('txtFim');
    let numPasso = document.getElementById ('txtPasso');
    let res = document.getElementById ('res');
    if (numInicio.value.length == 0 || numFim.value.length == 0 || numPasso.value.length == 0){

        alert ('Dados Incorretos tente novamente');
        res.innerHTML = 'Impossivel contar'
    }else{
        res.innerHTML = `Contando: <br>` 
        let i = Number (numInicio.value);
        let f = Number (numFim.value);
        let p = Number (numPasso.value);
        
        if (p <= 0){
            alert ('Passo passará a ser 1')
            p = 1;
        }
        
        
        if (i < f){

            for (let c = i ; c <= f; c+= p){

                res.innerHTML += ` ${c}  \u{1F449}`
            }
               res.innerHTML += `\u{1F3C1}`

        } else{

            for (let c = i ; c >= f; c-= p){

                res.innerHTML += ` ${c}  \u{1F449}`
            }
               res.innerHTML += `\u{1F3C1}`

        }
    
    }

}