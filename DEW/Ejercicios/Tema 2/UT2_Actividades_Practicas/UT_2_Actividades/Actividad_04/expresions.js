/*

Actividad 4. ¿Qué valor se obtendrá al ejecutar estas expresiones?

a. 16 << 2
b. 8 > 10 ? v1 = 'sí' : v1 = 'no'
c. var n=7; alert(“n vale “ + (++n));
d. var m=17; alert("m vale " + (m++)); alert(m);
e. var y=17; y%=5;

*/
var n=7;
var m=17;
var y=17;

document.write("16 << 2 => " + (16 << 2));
document.write("</br>");
document.write("8 > 10 ? v1 = 'sí' : v1 = 'no' => " + (8 > 10 ? v1 = 'sí' : v1 = 'no'));
document.write("</br>");
document.write("var n=7; alert(\"n vale \" + (++n)); => " + ("n vale " + (++n)));
document.write("</br>");
document.write("var m=17; alert(\"m vale \" + (m++)); alert(m); => " + ("m vale " + (m++)) + " => " + (m));
document.write("</br>");
document.write("var y=17; y%=5; => " + (y%=5));