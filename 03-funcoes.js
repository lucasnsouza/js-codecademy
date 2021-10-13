//A function is a reusable block of code that groups together a sequence of statements to perform a specific task.

function addReminder() {
    console.log('Check your email!');
};

addReminder();

//Parameters allow functions to accept input(s) and perform a task using the input(s). We use parameters as placeholders for information that will be passed to the function when it is called.

//A parameter is a named variable inside a function’s block which will be assigned the value of the argument passed in when the function is invoked:  

const height = 10;
const width = 15;

//os valores entre parênteses são argumentos e podem ser números ou variáveis
function calculateArea(height, width) {
    console.log(`A área do retângulo é ${height*width}.`);
}

calculateArea(10, 15);

const clientsName = 'Lucas';
const daysForSending = 10;

function sayThanks(clientsName, daysForSending) {
    console.log(`Obrigado pela sua compra ${clientsName}. O seu produto chegará em ${daysForSending} dias.`)
};

sayThanks('Lucas', 10);

//No ES6 podemos usar defaul parameters, no caso de a função não tem argumento escífico.

const users = undefined;

function siteArea(users = 'usuário convidado') {
    console.log(`Seja bem vindo ${users}. Você pode acessar as áreas públicas do site.`)
}
siteArea(); //usando default parameter
siteArea('Lucas'); //o parâmetro tem um argumento definido

//To pass back information from the function call, we use a return statement.

let retHeight = 7;
let retWidth = 8;

function retArea(retHeight, retWidth) {
    const area = retHeight*retWidth;
    return area;
};

console.log(retArea(7,8));

//também é possível usar funções dentro de funções
//vamos exemplificar que você queira converter celsius para fahrenheit. (0 °C × 9/5) + 32 = 32 °F

let celsius = undefined; //pode ser atribuido qualquer valor

function formFahr(number) {
    return number * (9/5);//(3) formFahr recebe o argumento 25 e (4) retorna um novo valor para getfahrenheit
};

function getFahrenheit(celsius = 0) {
    return formFahr(celsius) + 32;//(2) a função getFahrenheit atribui um argumento para função formFahr
};

console.log(getFahrenheit(25));// (1) o argumento é 25 graus celsius

//calcular uma compra de envelopes levando em conta a saída semanal

function numDeEnvelopes(uso, semanas) {
    return uso * semanas;
};

function custoEnvelopes(uso, semanas) {
    return numDeEnvelopes(uso, semanas) * 0,08;
};

const valorTotal = custoEnvelopes(19, 4);

console.log(valorTotal);

//No ES6 também podemos usar function expression. Nesse caso a função é declarada dentro d euma variável, mas com o detalhe de que é uma função anônima.

const diasDeCurso = function(dias){
    if (dias ==='Segunda' || dias ==='Terça' || dias ==='Sexta') {
        return console.log('Hoje é dia de estudar. Lembre-se de tomar um tempo para isso!')
    } else {
        return console.log('Nenhuma atividade de estudo marcada para hoje.')
    }
    
};

diasDeCurso('Segunda');
diasDeCurso('Quarta');

//Arrow functions () =>
//Dessa maneira não precisamos usar a keyword 'function' para chamar uma função. Vamos dar exemplo com a função abaixo.

const takeMedicines = (day) => {// => substitui 'function'
    if (day === 'Wednesday') {
        return console.log('Você precisa tomar seu remédio.')
    } else {
        return console.log('Seus medicamentos são ministrados somente na quarta-feira.')
    }
};

takeMedicines('Wednesday');

//Além disso podemos escrever arrow functions de forma mais simples

/* Forma convencional
const plantNeedsWater = function(day) {
    return day === 'Wednesday' ? true : false;
};
*/

/* Arrow function
const plantNeedsWater = (day) => {
    return day === 'Wednesday' ? true : false;
}
*/

//Concise Body Arrow Functions
const plantNeedsWater = day => day === 'Wednesday' ? true : false;

console.log(plantNeedsWater('Sunday'));