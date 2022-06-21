function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 let totalRecebido = (valorTotalVendas / qtdeCarrosVendidos)
 let comissao = (totalRecebido * 0.05) * qtdeCarrosVendidos
 let salario
 if (qtdeCarrosVendidos >=1 ){
    salario = comissao+ 2000 + (qtdeCarrosVendidos* 100)
 
 return salario
   
 }else{
 
    salario = 2000
return salario
}
}
