class Pet{

    constructor(petName, specie, age, owner, phone){
        this.petName = petName;
        this.specie = specie;
        this.age = age;
        this.owner = owner;
        this.phone = phone;
        this.history = [];

        this.showData();
    }

    addHistory(history){
        this.history.push(history);
    }

    showData(){
        console.log(`
            Nombre: ${this.petName},
            Especie: ${this.specie},
            Edad: ${this.age},
            Dueño: ${this.owner},
            Teléfono: ${this.phone},
        `)
    }

    showHistory(){
        console.log('Historial: ');
        this.history.forEach(element => {
            console.log(element);
        });
    }
}

let pet = new Pet('pepe','conejo','10','jc','922002211');
pet.addHistory('primera Historia.');
pet.addHistory('segunda Historia.');
pet.addHistory('tercera Historia.');
pet.showHistory();
