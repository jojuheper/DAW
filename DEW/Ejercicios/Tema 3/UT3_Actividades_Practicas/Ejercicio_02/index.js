/*

Actividad 2. Realiza una página web que redirija al usuario a la página de google (conservando el historial) 
si sacando un número de forma aleatoria entre 0 y 10 el mismo es menor o igual a 5. En caso contrario, que la 
página genere una alerta saludando con buenos días o buenas tardes en función de si es antes de las 12 am o después.

*/

let morning = 'Buenos días';
let evening = 'Buenas tardes';

function forwardGoogle(){
    // can open in new tab with new web
    self.open("https://www.google.com",'_blank');
    // self.location.assign("https://www.google.com");
}

function alertHour(){
    let hour = new Date().getHours();
    hour < 12 ? alert(morning) : alert(evening);
}

function randomNumber(){
    let number = Math.floor(Math.random() * (10 - 0) + 0);
    // show number and watch if random works
    // console.log(`Number: ${number}`);
    number <= 5 ? forwardGoogle() : alertHour();
}