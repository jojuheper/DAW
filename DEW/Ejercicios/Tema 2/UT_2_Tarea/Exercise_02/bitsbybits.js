/*
Ejercicio 2. Sabiendo que cuando desplazamos 1 bit a la derecha dividimos un entero por 2 y cuando lo desplazamos a la izquierda estamos multiplicando por 2; 
configurar tu web para que también imprima el resultado de las siguientes operaciones empleando desplazamiento de bits:

125 / 8 =
40 x 4=
25 / 2=
10 x 16=
*/

let id = {
    showResult : document.getElementById("bitToBit")
}

// realizamos los desplazamientos pertinentes
let result1 = 125 >> 3;
let result2 = 40 << 2;
let result3 = 25 >> 1;
let result4 = 10 << 4;

// Imprime los resultados
id.showResult.innerHTML += (`125 / 8 = ${result1}`);
id.showResult.innerHTML += (`</br>`);
id.showResult.innerHTML += (`40 x 4 = ${result2}`);
id.showResult.innerHTML += (`</br>`);
id.showResult.innerHTML += (`25 / 2 = ${result3}`);
id.showResult.innerHTML += (`</br>`);
id.showResult.innerHTML += (`10 x 16 = ${result4}`);
