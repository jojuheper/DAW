// global variable of new window
let newPage;
// variable to send to new window
let url = window.location.href;
let protocol = window.location.protocol;
let browserName = window.navigator.userAgent;
let javaEnable = window.navigator.javaEnabled();

const daysOfWeek = [
    'domingo',
    'lunes',
    'martes',
    'miércoles',
    'jueves',
    'viernes',
    'sábado',
];

// variable of actual window
let day, month, year, userName;
let aFirstPosition = 0,
    aLastPosition = 0,
    age = 0;

// paint all the result and required information to show in new tab
function drawParameterNewWindow() {
    newPage.document.write("<h3>Ejemplo de Ventana Nueva</h3>");
    newPage.document.write("<hr/>");
    newPage.document.write("<br/>");
    newPage.document.write(`<strong>URL:</strong> ${url}`);
    newPage.document.write("<br/>");
    newPage.document.write(`<strong>Protocolo:</strong> ${protocol}`);
    newPage.document.write("<br/>");
    newPage.document.write(`<strong>Navegador:</strong> ${browserName}`);
    newPage.document.write("<br/>");
    newPage.document.write(`<strong>Java Activo:</strong> ${javaEnable}`);
    newPage.document.write("<br/>");
    newPage.document.write(
        `<div style="display: flex;justify-content: center;"><iframe src="https://www.bing.com/?setlang=es" frameborder="0" width="800" height="600"></iframe></div>`
    );
}

// when user do clic in our primary window or tab exceute the whole code
function changeVisibility() {
    const calculateAge = (day, month, year) => {
        // set userDate as a Date (like a parse String to Date)
        const inputDate = `${year}-${month}-${day}`;
        const userDate = new Date(inputDate);
        const currentDate = new Date();
        let age = currentDate.getFullYear() - userDate.getFullYear();

        // calculate exactly the birthday
        if (
            currentDate.getMonth() < userDate.getMonth() ||
            (currentDate.getMonth() === userDate.getMonth() && currentDate.getDate() < userDate.getDate())
        ) {
            age--;
        }

        return age;
    }
    // take title 
    const drawTitle = () => {
        document.write(`<h1>TAREA DWEC03</h1>`);
        document.write(`<hr/>`);
    };
    // user Data
    const askData = () => {
        userName = prompt("Introduzca su nombre y apellidos");
        day = prompt("Introduzca DIA de nacimiento");
        month = prompt("Introduzca MES de nacimiento");
        year = prompt("Introduzca AÑO de nacimiento");
    };
    // put in Body data of user
    const paintBody = () => {
        // different checking of user variables
        // userName
        if (userName != null) {
            document.write(`Buenos dias ${userName}`);
            document.write("<br/>");
            document.write(
                `Tu nombre tiene ${userName.length} caracteres, incluidos espacios`
            );
            document.write("<br/>");
            aPositionInName();
            document.write("<br/>");
            document.write(
                `Tu nombre menos las 3 primeras letras es: ${userName.substring(3)}`
            );
            document.write("<br/>");
            document.write(
                `Tu nombre todo en mayúsculas es: ${userName.toUpperCase()}`
            );
        }
        // date of birth
        if (day != null && month != null && year != null) {
            let age = calculateAge(day, month, year);
            document.write("<br/>");
            document.write(`Tu edad es: ${age} años`);
            document.write("<br/>");
            document.write(`Naciste un feliz ${daysOfWeek[new Date(year, month - 1, day).getDay()]} del año ${year}`);
            document.write("<br/>");
            document.write(`El coseno de 180 es: ${Math.cos(180)}`);
            document.write("<br/>");
            document.write(`El número mayor de (34,67,23,75,35,19) es: ${Math.max(34, 67, 23, 75, 35, 19)}`);
            document.write("<br/>");
            document.write(`Ejemplo de número al azar: ${Math.floor(Math.random() * 100) + 1}`);
        }
    };
    // this function is activate when the user
    // activate the tab
    if (!document.hidden) {
        askData();
        drawTitle();
        paintBody();
    }
}

// check if the name have "A" vocal and show different options
function aPositionInName() {
    if (userName.includes("a")) {
        document.write(
            `La primera letra A de tu nombre está en la posición: ${userName.indexOf("a")}`
        );
        document.write("<br/>");
        document.write(
            `La última letra A de tu nombre está en la posición: ${userName.lastIndexOf("a")}`
        );
    } else {
        document.write(`Tu Nombre no contiene la letra A`);
    }
}

// about actual tab or window
function actualWindow() {
    // when user clic primary tab call the function
    window.addEventListener("visibilitychange", changeVisibility);
}

// this anonimous function call itself
(() => {
    const initPage = () => {
        // call new windows, in this case new tab
        const newWindow = () => drawParameterNewWindow();
        const init = () => {
            newPage = window.open("", "_blank");
            newWindow();
            actualWindow();
        };
        // start the process
        init();
    };
    // add listener when document is loaded and start all the process
    document.addEventListener("DOMContentLoaded", initPage);
})();
