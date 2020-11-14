/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
document.write("<hr />");


var x = 10;
    
document.write("Laço FOR. <br />");
for (i = 0; i < 10; i++){
    document.write("<br /> Valor " + (i+1) + ": " + x);
    x++;
}
document.write("<br />");
document.write("<br />Laço WHILE. <br />");

var z = 0;

while (z < 10){
    z++;
    
    if (z === 5){
        continue;
    }
    document.write("<br /> Valor de z: " + z);
    
}

