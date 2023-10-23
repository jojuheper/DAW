/*

Actividad 8. Crea una web sencilla que permita al usuario introducir un número de entrada y obtener todos los divisores del mismo. 
Para ello, algunas funciones a tener en cuenta además de las vistas anteriormente son:

parseInt()

%: devuelve el módulo o resto de una división.

*/

let id = {
  inputNumber : document.getElementById("numberClient"),
  resultDivide : document.getElementById("resultDivide"),
};

function calculateDivide() {
  // get number
  let number = parseInt(id.inputNumber.value);
  let result = "";

  if (number > 0) {
    for (let index = 1; index <= number; index++) {
      result += number % index == 0 ? index : "";
      result += " ";
    }

    id.resultDivide.innerHTML = result;
  }else{
    id.resultDivide.innerHTML = "No se puede realizar el calculo";
  }
}
