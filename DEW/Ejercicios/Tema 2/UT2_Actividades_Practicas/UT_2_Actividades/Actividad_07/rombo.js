/*

Actividad 7. Observa y analiza la función del siguiente código. A continuación modifica el código para que sea el usuario el que escoja el número de filas del rombo.

<!DOCTYPE html>
<html>
<head>
    <title>Rombo de emoticonos</title>
</head>
<body>

    <div id="rombo" style="text-align: center"></div>
    
    <script>
            function dibujarRombo(filas) {
                
                let output = '';
                
                //Parte creciente del rombo:
                for (let i = 1; i <= filas; i++){
                    let linea = '';
                    for (let j = 1; j <= 2 * i - 1; j++) {
                        linea += '*';
                    }
                    output += linea + '<br>';
                }
                
                //Parte decreciente del rombo:
                for (let i = filas - 1; i >= 1; i--) {
                    let linea = '';
                    for (let j = 1; j <= 2 * i - 1; j++) {
                        linea += '*';
                    }
                    output += linea + '<br>';
                }
                document.getElementById('rombo').innerHTML = output;
            }
            dibujarRombo(15); //Ejecutamos la función.    
    </script>
</body>
</html>

*/

let id = {
  inputRhombus: document.getElementById("inputRhombus"),
  drawRhombus: document.getElementById("rhombusClient"),
};

id.inputRhombus.addEventListener("keyup", function (event) {
  if (event.code === "Enter") {
    drawRhombus();
  }
});

function drawRhombus() {
  // variables
  let output = "";
  let row = parseInt(inputRhombus.value);

  if(row <= 0){
    id.drawRhombus.innerHTML = "</br>";
    id.drawRhombus.innerHTML = "Not posible to draw Rhombus";
    return;
  }

  //Parte creciente del rombo:
  for (let i = 1; i <= row; i++) {
    let line = "";
    for (let j = 1; j <= 2 * i - 1; j++) {
      line += "*";
    }
    output += line + "<br>";
  }

  //Parte decreciente del rombo:
  for (let i = row - 1; i >= 1; i--) {
    let line = "";
    for (let j = 1; j <= 2 * i - 1; j++) {
      line += "*";
    }
    output += line + "<br>";
  }
  id.drawRhombus.innerHTML = output;
}
