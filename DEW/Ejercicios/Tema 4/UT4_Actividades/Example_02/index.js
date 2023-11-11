/*

Actividad 2. Vamos a crear un programa en JavaScript para gestionar una base de datos de coches 
en un concesionario. Cada coche estará representado por su modelo, color, matrícula y año. Deberás 
crear una serie de funciones para agregar coches, eliminar coches y mostrar información sobre los 
coches en la base de datos.

*/

// Objeto concesionario
let concesionario = {
    coches: [],
  
    // Función para agregar un coche
    agregarCoche: function (modelo, color, matricula, año) {
      let nuevoCoche = {
        modelo: modelo,
        color: color,
        matricula: matricula,
        año: año,
      };
  
      this.coches.push(nuevoCoche);
      console.log(`Coche ${modelo} agregado correctamente.`);
    },
  
    // Función para eliminar un coche por matrícula
    eliminarCoche: function (matricula) {
      this.coches = this.coches.filter((coche) => coche.matricula !== matricula);
      console.log(`Coche con matrícula ${matricula} eliminado.`);
    },
  
    // Función para mostrar información de todos los coches
    mostrarCoches: function () {
      console.log("Información de todos los coches en el concesionario:");
      this.coches.forEach((coche) => {
        console.log(`
          Modelo: ${coche.modelo}
          Color: ${coche.color}
          Matrícula: ${coche.matricula}
          Año: ${coche.año}
        `);
      });
    },
  };
  
  // Pruebas
  concesionario.agregarCoche("Sedan", "Rojo", "ABC123", 2022);
  concesionario.agregarCoche("SUV", "Azul", "XYZ789", 2021);
  concesionario.mostrarCoches();
  concesionario.eliminarCoche("ABC123");
  concesionario.mostrarCoches();
