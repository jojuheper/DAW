/*

Actividad 6. Realiza un programa en JavaScript que calcule el área y el perímetro de una circunferencia de radio 5 m. A continuación, modifica dicho código para que el usuario pueda introducir el radio. Recuerda que para seleccionar un elemento desde HTML debes usar la instancia document.getElementById(""). Algunas funciones predefinidas necesarias/útiles para esta tarea son:

document.getElementById('').value: devuelve el valor de un elemento HTML.
parseFloat()
Math.PI: devuelve el número real pi.
El modificador .innerHTML que permite seleccionar un elemento HTML y modificar su contenido.
toFixed(): permite redondear a un determinado número de decimales.

*/

const id = {
    areaFixed : document.getElementById("areaFixed"),
    perimeterFixed : document.getElementById("perimeterFixed"),
    areaClient : document.getElementById("areaClient"),
    perimeterClient : document.getElementById("perimeterClient"),
    radio : document.getElementById("radioInput")
}

function calculateByClient(){
    // get radio value
    let radio = parseFloat(id.radio.value);
    // calculate variables
    let area = (Math.PI * Math.pow(radio,2)).toFixed(2);
    let perimeter = (2 * Math.PI * radio).toFixed(2);
    // put in html
    id.areaClient.innerHTML = area;
    id.perimeterClient.innerHTML = perimeter
}

function calculateFixed(){
    // calculate variable
    let area = (Math.PI * Math.pow(5,2)).toFixed(2);
    let perimeter = (2 * Math.PI * 5).toFixed(2);
    // put in html
    id.areaFixed.innerHTML = area;
    id.perimeterFixed.innerHTML = perimeter
}