
let paciente;

class Paciente {

    constructor(nhc, name, surname, birth, sex, history) {
        this.nhc = nhc;
        this.userName = name;
        this.surname = surname;
        this.birth = birth;
        this.sex = sex;
        this.history = history;
    }

    setNHC(nhc) {
        if (this.confirmSet) this.nhc = prompt('Ingrese NHC');
        this.showData();
    }
    setUserName(name) {
        if (this.confirmSet) this.userName = prompt('Ingrese Nombre');
        this.showData();
    }
    setSurname(surname) {
        if (this.confirmSet) this.surname = prompt('Ingrese Apellido');
        this.showData();
    }
    setBirth(birth) {
        if (this.confirmSet) this.birth = prompt('Ingrese Fecha de Nacimiento (YYYY-MM-dd)');
        this.showData();
    }
    setSex(sex) {
        if (this.confirmSet) this.sex = prompt('Ingrese Sexo');
        this.showData();
    }

    setHistory(data) {
        this.history.push(data);
    }

    showHistory(){
        let textArea = document.getElementById('historial');
        this.history === '' ? textArea.innerHTML = 'No hay historial': textArea.innerHTML = '';
        this.history.forEach(element => {
            textArea.innerHTML += `
                --------------------
                Episodio: ${element.id},
                --------------------
                Fecha: ${element.date},
                diagnostico: ${element.diagnost},
                tratamiento: ${element.trat},
                doctor: ${element.doctor}.
            `;
        });
    }

    askEpisody() {
        let id = prompt('Ingrese id');
        let date = prompt('Ingrese Fecha (YYYY-MM-dd)');
        let diagnost = prompt('Ingrese diagnostico');
        let trat = prompt('Ingrese tratamiento');
        let doctor = prompt('Ingrese doctor');

        this.setHistory(new Episody(id, date, diagnost, trat, doctor));
    }

    modifyHistory() {
        let id = prompt('Ingrese id');
        let flag = false;
        this.history.forEach(element => {
            if (element.id === id) {
                flag = true;
                element.date = prompt('Ingrese Fecha (01/01/1900)');
                element.diagnost = prompt('Ingrese diagnostico');
                element.trat = prompt('Ingrese tratamiento');
                element.doctor = prompt('Ingrese doctor');
            }
        });
        flag ? '' : alert(`No se encontro el Episodio ${id}`);
        this.showHistory();
    }
    
    confirmSet(){
        return confirm('Confirma que quiere cambiar el dato?');
    }

    showData(){
        let textArea = document.getElementById('datospaciente');

        textArea.innerHTML = `
        NHC: ${paciente.nhc},
        Nombre: ${paciente.userName},
        Apellido: ${paciente.surname},
        Fecha de Nacimiento: ${paciente.birth},
        Sexo: ${paciente.sex}.
        `;
    }

    reloadScreen(){
        self.location.reload();
    }

}

class Episody {
    constructor(id, date, diagnost, trat, doctor) {
        this.id = id;
        this.date = date;
        this.diagnost = diagnost;
        this.trat = trat;
        this.doctor = doctor;
    }
}

function init(event){
    event.preventDefault();

    let nhc = document.getElementById('nhc').value;
    let userName = document.getElementById('nombre').value;
    let surname = document.getElementById('apellidos').value;
    let sex = document.getElementById('sexo').value;
    let birth = document.getElementById('fechaNacimiento').value.toString();

    paciente = new Paciente(nhc, userName, surname, birth, sex, [episody01, episody02]);

    paciente.showData();
    paciente.showHistory();
}

// example of history
let episody01 = new Episody('0001','2000-01-27','Dolor de cabeza','Paracetamol','Dr. Laureano');
let episody02 = new Episody('0002','2001-02-02','Menisco','Tramadol','Dra. Linsey');

document.getElementById('modificarNHC').addEventListener('click', () => paciente.setNHC());
document.getElementById('modificarNombre').addEventListener('click', () => paciente.setUserName());
document.getElementById('modificarApellidos').addEventListener('click', () => paciente.setUserName());
document.getElementById('modificarSexo').addEventListener('click', () => paciente.setSex());
document.getElementById('modificarFecha').addEventListener('click', () => paciente.setBirth());

document.getElementById('agregarDxyTto').addEventListener('click', () => paciente.askEpisody());
document.getElementById('modificarEpisodio').addEventListener('click', () => paciente.modifyHistory());

document.getElementById('limpiar').addEventListener('click',() => paciente.reloadScreen());

document.getElementById('crearnuevo').addEventListener('click', (event) => init(event));