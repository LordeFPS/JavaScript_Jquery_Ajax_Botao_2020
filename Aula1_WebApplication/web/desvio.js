/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

document.write("<br /> <br />DESVIOO");

/*
 * > maior
 * < menor
 * >= maior ou igual
 * <= menor ou igual
 * == igualdade de valores
 * === igualdade de valores e tipo
 * != ou !== diferente
 */


var valor1 = 10;
var valor2 = 5;

document.write("<br /> <br />Valor 1: " + valor1);
document.write("<br />Valor 2: " + valor2);

document.write("<br />");
document.write("<br />Menor < : ");
document.write(valor1 < valor2);

document.write("<br />Maior > : ");
document.write(valor1 > valor2);

document.write("<br />Menor ou igual <= : ");
document.write(valor1 <= valor2);

document.write("<br />Maior ou igual >= : ");
document.write(valor1 >= valor2);

document.write("<br />Igualdade == : ");
document.write(valor1 == valor2);

document.write("<br />Igualdade e valores === : ");
document.write(valor1 === valor2);

document.write("<br />Diferente !== : ");
document.write(valor1 !== valor2);

document.write("<hr />");
document.write("<br /> Usando IF <br />");

if(valor1 > valor2){
    
    document.write("<br /> Valor1: " + valor1 + " é maior que Valor2: " + valor2);
}else{
    document.write("<br /> Valor1: " + valor1 + " é menor que Valor2: " + valor2);
}