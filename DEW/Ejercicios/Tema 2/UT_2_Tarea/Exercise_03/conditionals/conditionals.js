/*
Ejercicio 3

Para la calculadora, al reescribir el código puedes definir una única función para todos los 
cálculos modificando únicamente el parámetro de entrada de la función según la operación 
empleada por el usuario.

*/

let data = {
  result_if: document.getElementById("resultado-if"),
  result_switch: document.getElementById("resultado-switch"),
};

// creamos las funciones de las operaciones
function plusNumbers(num1, num2){
  return num1 + num2;
}

function minusNumbers(num1, num2){
  return num1 - num2;
}
function multiplyNumbers(num1, num2){
  return num1 * num2;
}
function divideNumbers(num1, num2){
  return num2 > 0 ? num1 / num2 : 0;
}

/*

Modificar el código proporcionado para agregar condicionales if que manejen las operaciones 
matemáticas según el botón que se presione.

*/

function ifElseConditional(symbol) {
  // obtenemos los numeros
  let num1 = parseFloat(document.getElementById("numero1-if").value);
  let num2 = parseFloat(document.getElementById("numero2-if").value);
  let result = 0.0;

  // se ejecuta la accion segun el simbolo
  if (symbol === "+") {
    result = plusNumbers(num1, num2);
  } else if (symbol === "-") {
    result = minusNumbers(num1, num2);
  } else if (symbol === "*") {
    result = multiplyNumbers(num1, num2);
  } else if (symbol === "/") {
    result = divideNumbers(num1, num2);
  }
  data.result_if.value = result.toFixed(2);
}

/*

También, modificar el código para usar un condicional switch en lugar de múltiples if para 
manejar las operaciones matemáticas.

*/

function switchConditional(symbol) {
  // obtenemos los numeros
  let num1 = parseFloat(document.getElementById("numero1-switch").value);
  let num2 = parseFloat(document.getElementById("numero2-switch").value);
  let result = 0.0;
  
  // se ejecuta la accion segun el simbolo
  switch (symbol) {
    case "+":
      result = plusNumbers(num1, num2);
      break;
    case "-":
      result = minusNumbers(num1, num2);
      break;
    case "*":
      result = multiplyNumbers(num1, num2);
      break;
    case "/":
      result = divideNumbers(num1, num2);
      break;
  }
  data.result_switch.value = result.toFixed(2);
}
