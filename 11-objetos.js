//OBJECTS
//At their core, JavaScript objects are containers storing related data and functionality, but that deceptively simple task is extremely powerful in practice.

let spaceship = {
      homePlanet: 'Earth',
      color: 'silver',
      'Fuel Type': 'Turbo Fuel',
      numCrew: 5,
      flightPath: ['Venus', 'Mars', 'Saturn']
};
  
// Write your code below
let crewCount = spaceship.numCrew;
let planetArray = spaceship['flightPath'];
  
console.log(crewCount);
console.log(planetArray);

const crewPlanet = (objectSelected, objectProperty) => {
   return objectSelected[objectProperty]
}

console.log(crewPlanet(spaceship, 'homePlanet'));
console.log(crewPlanet(spaceship, 'color'));

// Nós também podemos mudar ou criar novas propriedades de um objeto, se o objeto for declarado como const, poderemos alterar sua propriedades, mas não atribuir um novo valor

/*  One of two things can happen with property assignment:

If the property already exists on the object, whatever value it held before will be replaced with the newly assigned value.
If there was no property with that name, a new property will be added to the object.
You can delete a property from an object with the delete operator.
*/

let newSpaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  
  // Write your code below
  newSpaceship.color = 'glorious gold';
  
  newSpaceship['numEngines'] = 6;
  console.log(newSpaceship);
  
  delete newSpaceship['Secret Mission'];
  console.log(newSpaceship);

//When the data stored on an object is a function we call that a method. A property is what an object has, while a method is what an object does.
//Nossos objetos podem ter métodos (funções)
//With the new method syntax introduced in ES6 we can omit the colon and the function keyword.
  const alienShip = {
    invade () { 
      console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
    }
  };

  alienShip.invade();

//usando mais de um método em um objeto

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

let newAlienShip = {
  retreat() {
    console.log(retreatMessage);
  },
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
}

newAlienShip.retreat();
newAlienShip.takeOff();