let vehicle;

class Vehicle {

    constructor(mark, model, color, year, licencePlate) {
        this.mark = mark;
        this.model = model;
        this.color = color;
        this.year = year;
        this.licencePlate = licencePlate;
        this.observation = [];

        this.showData();
    }

    setGlobal(obj, property){
        if (!this.confirmSet()) {
            this.alertData();
        }
        let result = prompt('Ingrese ',property);
        if (!String(result).trim().length > 0){
            this.alertData();
            return;
        }
        obj[property] = result;
        console.log(obj[property]);
        this.showData();
    }

    addObservation(observation) {
        if (this.confirmSet()) this.observation.push(prompt('Ingrese Observación'));
        this.showObservation();
    }

    showData() {
        let textArea = document.getElementById('datosvehiculo');
        textArea.innerHTML = `
            Marca: ${this.mark},
            Modelo: ${this.model},
            Color: ${this.color},
            Year: ${this.year},
            Matrícula: ${this.licencePlate},
        `;
    }

    showObservation() {
        let textArea = document.getElementById('observaciones');
        textArea.innerHTML = 'Observaciones: \n\n';
        if (this.observation.length > 0) {
            this.observation.forEach(element => {
                textArea.innerHTML += (element + '\n');
            });
        }
    }

    confirmSet() {
        return confirm('Confirma que quiere cambiar el dato?');
    }

    alertData(){
        alert('Datos ingresados erroneamente...');
    }

    getMark(){
        console.log(this.mark);
        return this.mark;
    }

}

function reloadPage() {
    self.location.reload();
}

function init(event) {
    event.preventDefault();

    let regex = /[0-9]{4}\s[a-zA-Z]{1,4}/;

    let mark = document.getElementById('marca').value;
    let model = document.getElementById('modelo').value;
    let color = document.getElementById('color').value;
    let year = document.getElementById('anho').value;;
    let licencePlate = document.getElementById('matricula').value;

    if (!regex.test(licencePlate)) {
        alert('No ha ingresado bien la matrícula');
        licencePlate.focus();
    }

    vehicle = new Vehicle(mark, model, color, year, licencePlate);

    vehicle.showData();
    vehicle.showObservation();
}

document.getElementById('modificarMarca').addEventListener('click', () => vehicle.setGlobal(vehicle,'mark'));
document.getElementById('modificarModelo').addEventListener('click', () => vehicle.setGlobal(vehicle,'model'));
document.getElementById('modificarColor').addEventListener('click', () => vehicle.setGlobal(vehicle,'color'));
document.getElementById('modificarAnho').addEventListener('click', () => vehicle.setGlobal(vehicle,'year'));
document.getElementById('modificarMatricula').addEventListener('click', () => vehicle.setGlobal(vehicle,'licencePlate'));

document.getElementById('agregarObs').addEventListener('click', () => vehicle.addObservation());

document.getElementById('crearnuevo').addEventListener('click', (event) => init(event));
document.getElementById('limpiar').addEventListener('click', () => reloadPage());
