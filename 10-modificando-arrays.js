const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
//.forEach() is used to execute the same code on every element in an array but does not change the array and returns undefined.
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {//pega o valor atual na posição 0 (currVal[0]) e soma com o próximo elemento do array com mesmo índice, formando uma string que se incia com C
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);
console.log(smallerNums);

// Choose a method that will return a boolean value
console.log(nums.every(num => num < 0)); //procura se todos os elemnetos são menor que zero, no caso retorna falso
console.log(smallerNums.some(num => num < 0)); //procura se algum elemento é menor que zero, no caso retorna true