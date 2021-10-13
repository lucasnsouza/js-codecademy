//Arrays e funções
//se modificarmos um array dentro de uma função, o novo valor é mantido mesmo fora do bloco da função
let racers = ['Ferrari', 'Williams', 'Renault', 'RBR', 'Mercedes'];

console.log(racers);

let disqualifiedRacers = (removedRacers) => {
    return removedRacers.splice(1,2);
}

console.log(disqualifiedRacers(racers)); //vai mostrar os elementos removidos
console.log(racers); //vai mostrar o novo valor do array

//Nested Array ou Array Aninhada
//Um array pode conter arrays dentro de si

let numOfCLasses = ['Primeiro Ano',['Segundo Ano A','Segundo Ano B'], ['Terceiro Ano A', 'Terceiro Ano B']]

console.log(numOfCLasses[1][1]);

console.log(numOfCLasses[0]);
console.log(numOfCLasses[numOfCLasses.length -1]);//acessa o último índice do array

