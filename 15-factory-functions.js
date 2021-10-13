//Factory Functions
//uma função que permite criar múltiplos objetos através dela

const monsterFactory = (name, age, energySource, coolPower) => {
    return { 
      name: name,
      age: age, 
      energySource: energySource,
      power() {
        console.log(coolPower);
      } 
    }
};

const kaiju = monsterFactory('Godzilla', 800, 'radiation', 'radioactve beam');
console.log(kaiju);
console.log(kaiju.name);

const king = monsterFactory('Kong', 600, 'muscles', 'punching')
console.log(king);
king.power();

//another factory function
const robotFactory = (model, mobile, _beep) => {
    return {
      model,
      mobile,
      beep () {
        console.log(_beep)
      }
    }
  }
  
const tinCan = robotFactory('P-500', true, 'Beep Boop');
tinCan.beep();
console.log(tinCan.mobile);

const r2d2 = robotFactory('R2-D2', true, 'Wee')
console.log(r2d2);

//com o ES6 não precisamos colocar os parâmetros nas prorpiedades

//in destructured assignment we create a variable with the name of an object’s key that is wrapped in curly braces { } and assign to it the object. 

const robot = {
    model: 'TARS',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('sarcastic comments');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
};

//talvez você queria atribuir uma das propriedades para uma variável
/*
const robotName = robot.model;
console.log(robotName);
*/
const {model} = robot;
console.log(model);

//também podemos fazer o mesmo usando métodos 
const {functionality} = robot;
functionality.beep();

//usando métodos nativos de objetos

const roboto = {
    model: 'SAL-1000',
    mobile: true,
    sentient: false,
    armor: 'Steel-plated',
    energyLevel: 75
};

// Object.keys() returns the keys or properties 
const robotoKeys = Object.keys(roboto);

console.log(robotoKeys);

// Object.entries() will return an array that  contains more arrays containing both the key and value of the properties in an object.
const robotoEntries = Object.entries(roboto);

console.log(robotoEntries);

// Now what if we want another object that has the properties of robot but with a few additional properties. Object.assign() sounds like a great method to use
const newRoboto = {
  laserBlaster: true,
  voiceRecognition: true,
}

Object.assign(newRoboto, roboto);

console.log(newRoboto);