// Arrays ou vetores
//uma variável que pode conter uma lista

const alunosMatriculados = ['José','Carlos','Maria']; //todos os elementos da array são strings
alunosMatriculados[2] = 'Helena'; //podemos aletar o valor de um único elemto no array
console.log(alunosMatriculados);

let costumerInformation = ['Lucas', 22, true]; //array contém string, number e boolean
//array elements starts at [0]
console.log(costumerInformation);
console.log(costumerInformation.length); // mostra o número de elemtos da array
console.log(costumerInformation[0]); //exibe o elemento [0]
console.log(typeof costumerInformation[2]); //mostra qual o datatype do elemento [2]
console.log(costumerInformation.indexOf(22)); //mostra o índice do elemento

//Se uma array for definida com LET, podemos substituir elementos, e até mesmo adiconar ou remover elementos

let lastUclChampions = ['Real Madrid', 'Liverpool', 'Bayern'];
lastUclChampions[2] = 'Bayern Munich'; //podemos substituir um elemento
lastUclChampions[3] = 'Borussia Dortmund'; // podemos adicionar um novo elemento

console.log(lastUclChampions)

//Já uma array CONST podemos até substiuir elemntos, mas não é possível adicionar ou  remover elemntos

const seasons = ['Summer', 'Autumn', 'Winter', 'Spring'];
seasons[1] = 'Fall'; //podemos susbstituir um elemento
/*não é possível adicionar um novo elemto no array const
season[4] = 'NewSeason';
*/
console.log(seasons);
console.log(seasons.length);

//usando .push()

let dailyTasks = ['make the bed', 'brush teeths', 'iron clothes'];

console.log(dailyTasks);

dailyTasks.push('breakfast', 'wash dishes');

console.log(dailyTasks);

//usando .pop()
//.pop() remove o último elemto do array

let bestPlayers = ['Messi', 'Cristiano Ronaldo', 'Ronaldo'];

console.log(bestPlayers);

let retiredPlayers = bestPlayers.pop();

console.log(bestPlayers);
console.log(retiredPlayers); //guarda o último elemento removido do array

//.shift() remove o primeiro elemento

let campBrasil = ['Corinthians_2017', 'Palmeiras_2018', 'Flamengo_2019']

campBrasil.shift();

console.log(campBrasil);

//.unshift() adiciona um elemento no índice[0]

const estaçoes = ['Outono', 'Inverno', 'Primavera'];

estaçoes.unshift('Verão');
console.log(estaçoes);

//copiar elementos de um array
//.slice()
let competidores = ['Canada', 'Brazil', 'Spain', 'Argentina', 'EUA'];

let winners = competidores.slice(1,4); //1 é indíce do primeiro elemento a ser copiado, 4 é o índice do elemento onde a cópia para
console.log(winners);

competidores[2] = 'England'
console.log(competidores);
console.log(winners);

//remover item pela posição do índice
//.splice(pos, n) 

let groceryList = ['Milky', 'Eggs', 'Cheese', 'Bread', 'Cofee']
console.log(groceryList);

//vamos remover o elemento 3, no index[2]

let itensRemovidos = groceryList.splice(2,1); //removeu apenas um elemento na posição 2

console.log(groceryList);
console.log(itensRemovidos);
