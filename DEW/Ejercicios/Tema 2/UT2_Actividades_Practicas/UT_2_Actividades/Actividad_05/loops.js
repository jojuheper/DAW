/*

Actividad 5. Observa el siguiente código:

  var arr=[1,2,3,4];
  for (i of arr) {
  console.log(i)};

  for (i in arr) {
  console.log(i)};

a) ¿Muestran la misma información el primer y el segundo bucle?
b) ¿Cuál es la diferencia entre los mismos?
c) ¿Qué muestra el siguiente código: "arr.forEach(function(i){console.log(i)});"?

*/

var arr = [1, 2, 3, 4];

document.write("Mirar Console Logs");
document.write("</br></br>");
for (i of arr) {
    console.log(i);
}

for (i in arr) {
    console.log(i);
}

document.write("¿Muestran la misma información el primer y el segundo bucle? => ");
document.write("No muestran la misma informacion");
document.write("</br>");

document.write("¿Cuál es la diferencia entre los mismos? => ");
document.write("Uno muestra el valor y el otro el indice");
document.write("</br>");

document.write("¿Qué muestra el siguiente código: \"arr.forEach(function(i){console.log(i)});\"? => ");
document.write("Muestra el valor del array");
document.write("</br>");