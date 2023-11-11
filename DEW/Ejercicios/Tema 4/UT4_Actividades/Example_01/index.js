/*

Actividad 1. Crear una función que genere un array aleatorio, usando 3 parámetros: 
número de elementos (por defecto 10), 
valor mínimo del elemento (por defecto 100), 
valor máximo (por defecto 200).

*/

let result = document.getElementById('result');

function randomArray(elements=10, min=100, max=200){
    let arrayNumber = new Array(elements);
    for(let i=0;i<arrayNumber.length;i++){
        arrayNumber[i]= randonNumber(min,max);
    }
    result.innerHTML = arrayNumber;
}

let randonNumber = (min=100, max=200) => Math.floor(Math.random() * (max - min + 1)) + min;