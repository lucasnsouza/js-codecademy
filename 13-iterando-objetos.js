//iterando sobre objetos com for...in

let spaceship = {
    crew: {
      captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') }
      },
      'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
      },
      medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
      translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
      }
    }
  }; 
   
// for...in para mostrar a posição e o nome 
for (let crewMember in spaceship.crew) {
    console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
  }

// for...in para mostrar o nome e a formação
for (let crewMember in spaceship.crew) {
    console.log(`${spaceship.crew[crewMember].name} : ${spaceship.crew[crewMember].degree}`)
  }

//adicionando membros no crew
let newMember = {
    'defense officer' : {
        name: 'Lena',
        degree: 'Chemestry',
        underAttack() {console.log ('Shields up, weapons are ready!')}
    }
}

let addNewMembers = Object.assign(spaceship.crew, newMember);
console.log(spaceship);