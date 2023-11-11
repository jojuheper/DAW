/*

Queremos hacer una aplicación en JavaScript para gestionar edificios con la información de la situación del edificio 
y de los propietarios de cada piso. Para ello queremos almacenar la siguiente información de cada edificio:

calle.
número.
código postal.
plantas del edificio (dentro de cada planta tendremos un número de puertas y para cada puerta almacenaremos el 
nombre del propietario).

*/

// add floors
let addFloorsDoors = function (floors, doors) {
    let f = Number(floors);
    let d = Number(doors);
    if (f > 0 && d > 0) {
        for (let iFloor = 0; iFloor < f; iFloor++) {
            let floor = [];
            for (let iDoor = 0; iDoor < d; iDoor++) {
                floor.push({
                    ownerDoor: null,
                });
            }
            this.floors.push(floor);
        }
    }
}

// add owner of door in some floor
let addOwner = function (ownerName, floor, door) {
    let f = Number(floor);
    let d = Number(door);
    let message = '';
    if (f > 0 && d > 0) {
        if (this.floors[floor - 1][door - 1].ownerDoor == null) {
            let answerByOwner = confirm('Desea cambiar el propietario?');
            answerByOwner
                ? message = `${ownerName} es ahora el propietario en la planta ${floor} de la puerta ${door}.`
                : message = `La puerta ${door} en la planta ${floor} esta ocupada`;

            this.floors[floor - 1][door - 1].ownerDoor = ownerName;
        }

        console.log(message);
        return message;
    }
}

// change number of building
let changeNumber = function (num) {
    let n = Number(num);
    if (isNaN(n)) {
        return `${num} no es un Numero valido`;
    }
    this.num = num;
}

// change name of street
let changeStreet = (street) => this.street = street;

// change post code
let changePostCode = (postCode) => this.postCode = postCode;

// show all owners of buillding
let printFloors = function printFloors() {
    this.floors.forEach((floor, iFloor) => {
        floor.forEach((door, iDoor) => {
            console.log(`Planta ${iFloor + 1}, Puerta ${iDoor + 1}: ${door.ownerDoor || " "}`);
        });
    });
}

// main code
function Building(street, num, postalCode) {
    this.street = street;
    this.num = num;
    this.postalCode = postalCode;
    this.floors = [];

    // building's structure
    this.addFloorsAndDoors = addFloorsDoors;
    this.addOwners = addOwner;
    // address structure
    this.changeNumber = changeNumber;
    this.changeStreet = changeStreet;
    this.changePostCode = changePostCode;
    // show stuff
    this.printStreet = () => this.street;
    this.printNumber = () => this.num;
    this.printPostalCode = () => this.postalCode;
    this.printFloors = printFloors;

    // show build new building
    console.log(`Construido nuevo edificio en calle: ${street}, nº: ${num}, CP: ${postalCode}.`);
}

// test with homework preview
let buildingA = new Building('Garcia Priento', '58', 15706);
let buildingB = new Building('Camino Caneiro', '29', 32004);
let buildingC = new Building('San Clemente', 's/n', 15705);

console.log(`El codigo postal del edificio A es: ${buildingA.printPostalCode()}`);
console.log(`La calle del edificio C es: ${buildingC.printStreet()}`);
console.log(`El dificio B esta situado en la calle ${buildingB.printStreet()} numero ${buildingB.printNumber()}`);

console.log(`Agregamos 2 plantas y 3 puertas por planta al edificio A...`);
buildingA.addFloorsAndDoors(2, 3);

console.log(`Agregamos 4 propietarios al edificio A...`);
buildingA.addOwners('Jose Antonio Lopez', 1, 1);
buildingA.addOwners('Luisa Martinez', 1, 2);
buildingA.addOwners('Marta Castellón', 1, 3);
buildingA.addOwners('Antonio Pereira', 2, 2);

console.log(`
Lista de pripietarios del edificio ${buildingA.printStreet()} numero ${buildingA.printNumber()}
`);
buildingA.printFloors();

console.log(`Agregamos 1 planta al edificio A...`);
buildingA.addFloorsAndDoors(1, 2);

console.log(`Agregamos 1 propietario al edificio A...`);
buildingA.addOwners('Pedro Meijide', 3, 2);

console.log(`
Lista de pripietarios del edificio ${buildingA.printStreet()} numero ${buildingA.printNumber()}
`);
buildingA.printFloors();
