//Objetos aninhados 

let spaceship = {
    passengers: null,
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 


  //para váriavel abaixo foi atribuido como valor o elemento 0 de 'favorite foods'  da capitã
  let capFave = spaceship.crew.captain['favorite foods'][0];

  spaceship.passengers = ['Ben Kenobi']
  spaceship.passengers['Ben Kenobi'] = {
      class: "Jedi Master",
      autorization: "Republic Emissary",
    };
    console.log(spaceship);

  spaceship.passengers.push('R2-D2');
  spaceship.passengers['R2-D2'] = {
    class: "Astromechanical droid",
    autorization: "Republic Droid", 
  }


//reatribuindo valores de um objeto 

let newSpaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below
const greenEnergy = (obj) => {
  obj['Fuel Type'] = 'avocado oil';
}

greenEnergy(newSpaceship);

//setando novos valores a um objeto 

const remotelyDisable = obj => {
  obj.disabled = true;
}

remotelyDisable(newSpaceship);
console.log(newSpaceship);