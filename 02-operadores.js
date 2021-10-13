let numOf = 12;
let writeOf = '12';

if (numOf == writeOf) {
    console.log('No ex. == compara apenas o valor de cada variável.');
}


//Vamos aprender sobre shor-circuit evaluation
//imagine um site que retorna o nome do usuário que fez login. E se um usuário não cadastrado acessa?

/*
let username = 'Lucas';
let defaultName;

if (username) {
    defaultName = username;
} else {
    defaultName = 'Hello stranger!'
}

console.log(defaultName)
*/

let username = 'Lucas';
let defaultName = username || 'Stranger';

if (defaultName) {
    console.log(`Bem vindo ${defaultName}.`)
}

//operadores ternários
let workMaterials = 'pen';

(workMaterials === 'hammer') ?  console.log("Let's do some work!") : console.log("You'll need to get some tools.")
let data = new Date();
let hora = data.getHours();
let minute = data.getMinutes();
console.log(`${hora}:${minute}`);

let quitanda = 'mamão';

switch (quitanda) {
    case 'tomates':
        console.log('O kg do tomate é R$10,00')
        break;
    case 'laranjas':
        console.log('O kg da laranja é R$4,00')
        break;
    case 'mamão':
        console.log('O kg do mamão é R$8,00')
        break;       
    default:
        console.log('System error! Chame um funconário.')
        break;
}