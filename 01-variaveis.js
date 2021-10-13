//revisando uso de variáveis
var comidaFavorita = 'pizza'; //var era o padrão até o ES5
console.log(comidaFavorita);

//com o ES6 agora temos let e const
//let é uma variável de escopo, se declarada dentro de um bloco, ela vai se limitar a ele
let numDePedaços = 8; //let sinaliza que variável tem um valor incial mas pode ser modificada
console.log(numDePedaços); //console.log return 8;
numDePedaços = 16; // let permite adiconar um novo valor para a variável;
console.log(numDePedaços);

let orderedPizzas; //let também permite declara uma varável sem o valor definido;
console.log(orderedPizzas); // nesse caso vai vai retornar um valor undefined;
orderedPizzas = 4;
console.log(orderedPizzas)

const pizzaria = 'Pizza place'; //define uma constante, não poderá atribuir outro valor para uma const
console.log(pizzaria);

//verificar tipos de variáveis
let myName = 'Lucas';
let myAge = 22;

console.log(typeof myName); //operador vai indicar o data type da variável
console.log(typeof myAge);