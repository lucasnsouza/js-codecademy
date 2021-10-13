//Loops
//think on 'iterate' the same as 'repeat'

// loops usando for, por padrão 'for' tem uma variável de iteração

for (let soma = 4; soma <= 8; soma++) { //soma é uma variável de iteração
    console.log(soma);
}

for (let sub = 3; sub >= 0; sub--) {
    console.log(sub);
}

//loops em arrays
//To loop through each element in an array, a for loop should use the array’s .length property in its condition.

let shopClients = ['Luke', 'Han', 'Leia'];
// i vai vai iniciar no índice 1 e vai parar no último indíce
for (let i=1; i < shopClients.length; i++) {
    console.log(`Welcome back ${shopClients[i]}`);
};

//nested loops

const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log(`Both loops have the number: ${yourArray[j]}`)
    }
  }
};

//No exemplo abaixo imagine que queremos exibir os amigos em comum de dois usários de uma rede social

let bobsFollowers = ['Luke','Leia','Han','Chewie'];

let tinasFollowers = ['Chewie','Leia','Ben'];

let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) { //i percorre a lista de amigos de Bob
  for (let j = 0; j < tinasFollowers.length; j++) {// j percorre a lista de amigos de Tina
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};

console.table(mutualFollowers);

//loop 'while'

// A while loop that prints 1, 2, and 3
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
}
 //do...while

 // Note that the while and do...while loop are different! Unlike the while loop, do...while will run at least once whether or not the condition evaluates to true.

let cupsOfSugarNeeded = 0;

let cupsAdded = 0;

do {
  cupsAdded++
  console.log(cupsAdded);
} while (cupsAdded < cupsOfSugarNeeded);



// break a loop

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below

for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
  console.log("And if you don't know, now you know.")
  if (rapperArray[i] === 'Notorious B.I.G.') {
    break
  }
} 



let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

for (let i = 0; i < groceryList.length; i++) {
  if (groceryList[i] === 'pasta') {
    break
  }
  console.log("Can you confirm you order?")
  console.log(groceryList[i])
}