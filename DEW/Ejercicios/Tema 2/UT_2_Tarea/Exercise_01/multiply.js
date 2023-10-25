/*
Ejercicio 1. Realizar una pequeña aplicación en JavaScript que muestre lo siguiente:

Tabla de multiplicar del 7.
Tabla de sumar del 8.
Tabla de dividir del 9.

Utilizar tres tipos distintos de bucles que hay en JavaScript (para cada número un tipo de bucle diferente).
*/

let num = {
    seven : 7,
    eight : 8,
    nine : 9
}

// get ids from div to print results
let id = {
    multiplyTable : document.getElementById("multiply"),
    sumTable : document.getElementById("sum"),
    divideTable : document.getElementById("divide")
}

function multiply(){
    // clean result
    id.multiplyTable.innerHTML = "";
    // variable
    let result = 0;
    // use for loop
    for (let index = 1; index <= 10; index++) {
        result = index * num.seven;
        id.multiplyTable.innerHTML += (`${num.seven} x ${index} = ${result} </br>`);
    }
}

function sum(){
    // clean result
    id.sumTable.innerHTML = "";
    // variable
    let result = 0;
    let index = 1;
    // use while loop
    while(index <= 10){
        result = index + num.eight;
        id.sumTable.innerHTML += `${num.eight} + ${index} = ${result} </br>`;
        index++;
    }
}

function divide(){
    // clean result
    id.divideTable.innerHTML = "";
    // variable
    let result = 0;
    let index = 0;
    // use do while loop
    do{
        index++;
        result = num.nine / index;
        id.divideTable.innerHTML += `${num.nine} / ${index} = ${result.toFixed(2)} </br>`;
    }while(index < 10)
}

// call all the functions
multiply();
sum();
divide();