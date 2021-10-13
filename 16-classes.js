//JavaScript Classes
//Classes are a tool that developers use to quickly produce similar objects.
//Uma classe serve com um template que permite criar novos objetos similares ao modelo da classe
//By convention, we capitalize and CamelCase class names.
//O que identifica uma classe como diferente dos objetos comuns é o constuctor method, constructor()

//imagine um petshop que deseja registrar todos os cães que passam por ali, podemos usar uma classe
class Dog {
    constructor(name) {
      this._name = name;
      this._behavior = 0;
    }
}

const bolacha = new Dog('Bolacha');
console.log(bolacha);

const gigi = new Dog('Gigi');
console.log(gigi);

//outro exemplo
class BolaDeOuro {
    constructor (nome, time) {
        this._nome = nome;
        this._time = time;
    }
}

const messi = new BolaDeOuro('Messi', 'Barcelona');
console.log(messi);

//nos exemplos acima e no de debaixo, a keyword new nos permite criar uma instanciação, ou seja, um novo objeto modelado a partir do objeto que a classe representa

class Surgeon {
    constructor(name, department) {
      this._name = name;
      this._department = department;
      this._remainingVacationDays = 20;
    }
    get name() {
      return this._name;
    }
    get department() {
      return this._department;
    }
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    set remainingVacationDays (newDays) {
        if (newDays > 0 && typeof newDays == 'number') {
            return this._remainingVacationDays = (this._remainingVacationDays + newDays);
        }
    }
    takeVacationDays(daysOff) {
     return this._remainingVacationDays = (this._remainingVacationDays - daysOff);
    }
}
  
const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');

const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');

console.log(surgeonJackson);

//usando métodos dentro de classes
//usando getter
console.log(surgeonRomero.department);
console.log(surgeonJackson.remainingVacationDays);

console.log(surgeonRomero.takeVacationDays(12));

surgeonJackson.remainingVacationDays = 10; //usando setter
console.log(surgeonJackson.remainingVacationDays); //usando getter

let mobile = {
  brands: {
    Samsung: {
      flagship : 'Galaxy S 21',
      tablet: 'Galaxy Tab 7'
    },
    Apple: {
      flagship: 'Iphone 12',
      tablet : 'Ipad 8',
    }
  }
  
  };
  for (let model in mobile.brands) {
  console.log(`${model}: ${mobile.brands[model].flagship}`);
  }

  
let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

for (let key in spaceship) {
  console.log(`A nave é da ${key} e tem ${spaceship.numCrew} tripulantes.`)
}