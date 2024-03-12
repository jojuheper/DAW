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
        if (this.confirmSet()) this.nhc = prompt('Ingrese NHC');
        this.showData();
    }
    setUserName(name) {
        if (this.confirmSet()) this.userName = prompt('Ingrese Nombre');
        this.showData();
    }
    setSurname(surname) {
        if (this.confirmSet()) this.surname = prompt('Ingrese Apellido');
        this.showData();
    }
    setBirth(birth) {
        if (this.confirmSet()) this.birth = prompt('Ingrese Fecha de Nacimiento (YYYY-MM-dd)');
        this.showData();
    }
    setSex(sex) {
        if (this.confirmSet()) this.sex = prompt('Ingrese Sexo');
        this.showData();
    }

    setHistory(data) {
        this.history.push(data);
    }

    showHistory() {
        let textArea = $('#historial');
        textArea.empty();

        if (this.history.length === 0) {
            textArea.html('No hay historial');
        } else {
            this.history.forEach(element => {
                textArea.append(`
                    --------------------
                    Episodio: ${element.id},
                    --------------------
                    Fecha: ${element.date},
                    diagnostico: ${element.diagnost},
                    tratamiento: ${element.trat},
                    doctor: ${element.doctor}.
                `);
            });
        }
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

    confirmSet() {
        return confirm('Confirma que quiere cambiar el dato?');
    }

    showData() {
        let textArea = $('#datospaciente');

        textArea.html(`
            NHC: ${this.nhc},
            Nombre: ${this.userName},
            Apellido: ${this.surname},
            Fecha de Nacimiento: ${this.birth},
            Sexo: ${this.sex}.
        `);
    }

    reloadScreen() {
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

function init(event) {
    event.preventDefault();

    let nhc = $('#nhc').val();
    let userName = $('#nombre').val();
    let surname = $('#apellidos').val();
    let sex = $('#sexo').val();
    let birth = $('#fechaNacimiento').val().toString();

    paciente = new Paciente(nhc, userName, surname, birth, sex, [episody01, episody02]);

    paciente.showData();
    paciente.showHistory();
}

// example of history
let episody01 = new Episody('0001', '2000-01-27', 'Dolor de cabeza', 'Paracetamol', 'Dr. Laureano');
let episody02 = new Episody('0002', '2001-02-02', 'Menisco', 'Tramadol', 'Dra. Linsey');

$(document).ready(function () {
    $('#modificarNHC').on('click', () => paciente.setNHC());
    $('#modificarNombre').on('click', () => paciente.setUserName());
    $('#modificarApellidos').on('click', () => paciente.setUserName());
    $('#modificarSexo').on('click', () => paciente.setSex());
    $('#modificarFecha').on('click', () => paciente.setBirth());

    $('#agregarDxyTto').on('click', () => paciente.askEpisody());
    $('#modificarEpisodio').on('click', () => paciente.modifyHistory());

    $('#limpiar').on('click', () => paciente.reloadScreen());

    $('#crearnuevo').on('click', (event) => init(event));
});