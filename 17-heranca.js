//Herança em JavaScript
//Você pode ter uma classe pai (parent or superclass) que vai ter classes filho (child class)
//As classes filho podem ter prorpiedades individuais, mas vão compartilhar as proprieades principais da classe pai
//as classes filho e novas instaciações vão ter acesso a quase todos os métodos da classe pai
//dentro da classe pai nós podemos criar métodos estáticos, que só poderão ser acessados pela superclasse

//superclass or parent class
class HospitalEmployee {
    constructor (name) {
      this._name = name;
      this._remainingVacationDays = 20;
    }
    get name () {
      return this._name;
    }
    get remainingVacationDays () {
      return this._remainingVacationDays;
    }
    takeVacationDays (daysOff) {
      return this._remainingVacationDays -= daysOff;
    }
    //o método abaixo só vai ser acessado pela classe pai
    static generatePassword () {
        const randomNumber = Math.floor(Math.random() * 10000);
        return randomNumber;
    }
}

//static método só pode ser acessado pela superclasse
console.log(HospitalEmployee.generatePassword());

//criando a child class Doctor 
class Doctor extends HospitalEmployee {
  constructor (name, insurance) {
    super(name);
    this._remainingVacationDays = 20;
    this._insurance = insurance;
  }
}

const doctorHouse = new Doctor ('House', 'General')
console.log(doctorHouse);
console.log(doctorHouse.remainingVacationDays);

//criando a child class 
class Nurse extends HospitalEmployee {
    constructor (name, certifications) {
      super(name);
      this._remainingVacationDays = 20;
      this._certifications = certifications;
    }
    get certifications () {
        return this._certifications;
    }
    addCertification(newCertification) {
        this._certifications.push(newCertification);
    }
}
  
const nurseOlynyk = new Nurse ("Olynyk", ['Trauma', 'Pediatrics']);
console.log(nurseOlynyk)

console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.takeVacationDays(10);
console.log(nurseOlynyk.remainingVacationDays);

nurseOlynyk.addCertification('Surgery Assitant');
console.log(nurseOlynyk.certifications);

//static método retorna um erro quando uma subclasse tenta acessar
//static método só pode ser acessado pela superclasse
//veja as linhas de 22 até 30
// console.log(nurseOlynyk.generatePassword());




//Criando uma superclasse
//imagine um petshop de cães e gatos, mas os dois compartilham algumas prorpiedades 
//as classes filho e novas instaciações vão ter acesso a quase todos os métodos da classe pai
//dentro da classe pai nós podemos criar métodos estáticos, que só poderão ser acessados pela superclasse
class Animal {
    constructor(name) {
      this._name = name;
      this._behavior = 0;
    }
   
    get name() {
      return this._name;
    }
   
    get behavior() {
      return this._behavior;
    }
   
    incrementBehavior() {
      this._behavior++;
    }
    //o método abaixo só vai ser acessado pela classe pai
    static generateName() {
        const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
        const randomNumber = Math.floor(Math.random()*5);
        return names[randomNumber];
    }
} 
//método static e só pode ser acessado pela classe Animal
console.log(Animal.generateName());


//agora vamos criar a classe filho (child class)
//essa classe vai ter duas importantes keywords, "extend" e "super()"
//The extends keyword makes the methods of the animal class available inside the cat class.
//The super keyword calls the constructor of the parent class. In this case, super(name) passes the name argument of the Cat class to the constructor of the Animal class.

class Cat extends Animal {
    constructor (name, usesLitter) {
        super(name);
        this._usesLitter = usesLitter;
    }
}

const garfieldCat = new Cat ('Garfield', true);
console.log(garfieldCat);
console.log(garfieldCat.name);

console.log(garfieldCat.behavior);
garfieldCat.incrementBehavior();
console.log(garfieldCat.behavior);

//criando outra child class
//criar subclasses a partir de uma classe pai ganha tempo e economiza linhas de cógigo
class Dog extends Animal {
    constructor(name) {
      super(name);
    }
}

const costelinhaDog = new Dog ('Costelinha');
console.log(costelinhaDog);
costelinhaDog.incrementBehavior();
console.log(costelinhaDog.behavior);

//veja as linhas 71 até 79
//o método static não funciona com subclasse e vai retornar um erro
// console.log(costelinhaDog.generateName());