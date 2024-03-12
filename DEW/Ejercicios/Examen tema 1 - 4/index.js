

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
        if (this.confirmSet) this.nhc = prompt('Ingrese id');
    }
    setUserName(name) {
        if (this.confirmSet) this.userName = prompt('Ingrese Nombre');
    }
    setSurname(surname) {
        if (this.confirmSet) this.surname = prompt('Ingrese Apellido');
    }
    setBirth(birth) {
        if (this.confirmSet) this.birth = prompt('Ingrese Fecha de Nacimiento');
    }
    setSex(sex) {
        if (this.confirmSet) this.sex = prompt('Ingrese Sexo');
    }

    setHistory(data) {
        this.history.push(data);
    }

    showHistory(){
        this.history.forEach(element => {
            // console.log(`
            // ---------------------
            //     Episodio ${element.id}
            // ----------------------
            // Fecha: ${element.date}
            // Diagnostico: ${element.diagnost}
            // Tratamiento: ${element.trat}
            // Doctor: ${element.doctor}
            // `);
            console.table(element);
        });
    }

    askEpisody() {
        let id = prompt('Ingrese id');
        let date = prompt('Ingrese Fecha (01/01/1900)');
        let diagnost = prompt('Ingrese diagnostico');
        let trat = prompt('Ingrese tratamiento');
        let doctor = prompt('Ingrese doctor');

        this.setHistory(new Episody(id, date, diagnost, trat, doctor));
    }

    modifyHistory(id) {
        this.history.forEach(element => {
            if (element.id === id) {
                element.date = prompt('Ingrese Fecha (01/01/1900)');
                element.diagnost = prompt('Ingrese diagnostico');
                element.trat = prompt('Ingrese tratamiento');
                element.doctor = prompt('Ingrese doctor');
            }
        });
    }

    confirmSet(){
        return confirm('Confirma que quiere cambiar el dato?');
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

// example of history
let episody01 = new Episody('0001','2000-01-27','Dolor de cabeza','Paracetamol','Dr. Laureano');
let episody02 = new Episody('0002','2001-02-02','Menisco','Tramadol','Dra. Linsey');

let paciente_01 = new Paciente('000001', 'Peter', 'Prada', '28/07/1900', 'Varon', [episody01, episody02]);
paciente_01.askEpisody();
console.log(paciente_01);
console.log(paciente_01.showHistory());