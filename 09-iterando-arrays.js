//Métodos de iteração

const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

//forEach() executa uma função para cada elemento do array
artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruit => {
  console.log(`I want to eat a ${fruit}`);
})

// .map() retorna um novo array com base numa iteração de cada elemento do array original
const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => {
  return animal[0];
})

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallestNumbers = bigNumbers.map(divided => {
  return divided / 100;
})

console.log(smallestNumbers);


//.filter() retorna um novo array com elemntos do array antigo, filtrados por um argumento
const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(smaller => {
  return smaller < 250;
})

console.log(smallNumbers);

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'operator', 'serene'];

// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(cuttingOf => {
  return cuttingOf.length > 7;
})

console.log(longFavoriteWords);

// .findIndex() retorna o índice do primeiro elemento que evaluates true
//abaixo usamos .findIndex() para encontrar elementos menores que 10, o método retorna [3], o índice do primeiro elemnto da array que é menor que 10

const jumbledNums = [123, 25, 78, 5, 9]; 
 
const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});

console.log(lessThanTen);

 //se não houver um elemento que atenda a requisição, a função retorna -1
 //a função abaixo quer encontrar um elemento maior que 1000 no array anterior, como não há, retorna -1
const greaterThan1000 = jumbledNums.findIndex(num => {
  return num > 1000;
});
 
console.log(greaterThan1000);

//Invoke .findIndex() on the bichos array to find the index of the element that has the value 'elephant' 
const bichos = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = bichos.findIndex(animal => {
  return animal == "elephant";
});
console.log(foundAnimal);

//Let’s see if we can find the index of the first animal that starts with the letter 's'.
const startsWithS = bichos.findIndex(strings => {
  return strings[0] == "s";
});
console.log(startsWithS);

// .reduce() itera sobre um array e retorna apenas um valor

//The callback function has two parameters, accumulator and currentValue. The value of accumulator starts off as the value of the first element in the array and the currentValue starts as the second element.
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10); //// Second argument of reduce, sets accumulator to start at 10.);

console.log(newSum);


// OUTRO MÉTODO PARA EXECUTAR O .reduce()
const plus = (s, x) => s + x;
array =  [2, 3, 5, 7, 11, 13, 17, 19]
const output = array.reduce(plus);
console.log(output);

//another array methods
//.some()
//.every()

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// The first thing we want to do is check if there are words that are fewer than 6 characters long.

console.log(words.some((word) => {
  return word.length < 6;
}));

// Use the .filter() method to save any words longer than 5 characters to a new variable called interestingWords
const interestingWords = words.filter(selectWord => {
  return selectWord.length > 5;
});

//Complete the code between the parentheses to check if every element has more than 5 characters.

console.log(interestingWords.every((word) => {
  return word.length > 5;
 } ));