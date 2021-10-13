// The this keyword references the calling object which provides access to the calling object’s properties. 


const goat = {
    dietType: 'herbivore',
    makeSound() {
      console.log('baaa');
    },
    diet() {
      console.log(this.dietType);
    }
  };

goat.makeSound();
goat.diet(); 

//usando this no objeto

const robot = {
    model: 'C3PO',
    ableToSpeak: 'six million',
    provideInfo() {
      return (`I am ${this.model} and I was programmed to communicate in ${this.ableToSpeak} types of languages and dialets.`)
    }
  };
  
console.log(robot.provideInfo());

//The key takeaway from the example above is to avoid using arrow functions when using this in a method!
//If so, be conscious that the value returned will be undefined

//The usage of an underscore before a property name means that the original developer did not intend for that property to be directly changed.


// Getters are methods that get and return the internal properties of an object. 
const person = {
    _firstName: 'Luke',
    _lastName: 'Skywalker',
    get fullName() {
      if (this._firstName && this._lastName){
        return `${this._firstName} ${this._lastName}`;
      } else {
        return 'Missing a first name or a last name.';
      }
    }
  }
   
// In general, getter methods do not need to be called with a set of parentheses. Syntactically, it looks like we’re accessing a property.
console.log(person.fullName);

const newRobot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel () {
      if (typeof this._energyLevel == "number") {
          return `My current energy level is ${this._energyLevel}`
      } else {
          return 'System malfunction: cannot retrieve energy level'
      }
    }
  };

console.log(newRobot.energyLevel);

//Along with getter methods, we can also create setter methods which reassign values of existing properties within an object.

const lucas = {
    _age: 22,
    _height: '1,76m',
    _weight: 66,
    set weight (newWeight) {
        if (typeof newWeight == 'number') {
            this._weight = newWeight;
        } else {
            console.log('Set a acceptable value.') 
        }
    }
}
lucas._weight = 65;
console.log(lucas._weight)

//usando getter e setter
const anotherRobot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    },
    set numOfSensors(num) {
      if (typeof num == 'number' && num >= 0) {
        this._numOfSensors = num;
      } else {
        console.log('Pass in a number that is greater than or equal to 0')
      }
    } 
  };
  
anotherRobot.numOfSensors = 100; //método setter
console.log(anotherRobot.numOfSensors); //usando método getter