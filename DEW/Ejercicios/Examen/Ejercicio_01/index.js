class Vehicle{

    constructor(mark, model, color, year, licencePlate){
        this.mark = mark;
        this.model = model;
        this.color = color;
        this.year = year;
        this.licencePlate = licencePlate;
        this.observation = [];

        this.showData();
    }

    addObservation(observation){
        this.observation.push(observation);
    }

    showData(){
        console.log(`
            Marca: ${this.mark},
            Modelo: ${this.model},
            Color: ${this.color},
            Year: ${this.year},
            Matrícula: ${this.licencePlate},
        `)
    }

    showObservation(){
        console.log('Observaciones: ');
        this.observation.forEach(element => {
            console.log(element);
        });
    }
}

let vehicle = new Vehicle('toyota','prius','blanco','2004','MFG0022');
vehicle.addObservation('primera observación.');
vehicle.addObservation('segunda observación.');
vehicle.addObservation('tercera observación.');
vehicle.showObservation();
