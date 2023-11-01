/*

Actividad 3. Crea una web que permita al usuario establecer una fecha y hora para una cuenta atrás.

*/
let interval;

function endTimer(putTimer) {
  putTimer.innerHTML = "Cuenta Atras finalizada";
  clearInterval(interval);
}

function alertTimer() {
  alert("No es posible realizar la cuenta atras");
}

function updateTimer(inputDate, putTimer) {
  let time = new Date(inputDate - new Date().getTime());

  if (time <= 0) {
    endTimer(putTimer);
  } else {
    putTimer.innerHTML = `${time.getDate()} d ${time.getHours()} h ${time.getMinutes()} m ${time.getSeconds()} s`;
  }
}

function checkInputDate(inputDate) {
  return inputDate < new Date().getTime() ? false : true;
}

function getPutTimer() {
  return document.getElementById("putTimer");
}

function getInputDate() {
  return document.getElementById("inputDate").value;
}

function calculateTime() {
  let inputDate = new Date(getInputDate()).getTime();
  let putTimer = getPutTimer();
  let okDate = checkInputDate(inputDate);

  if (okDate) {
    interval = setInterval(() => updateTimer(inputDate, putTimer), 1000);
  } else {
    alertTimer();
  }
}
