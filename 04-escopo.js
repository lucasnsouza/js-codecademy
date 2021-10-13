//Escopo de variáveis

//Variáveis de escopo global

let age = 18; //variável global pode ser usada dentro ou fora de qualquer bloco

const checkAge = (age) => {
    if (age >= 18) {
        return console.log('Ok, you\'re by yourself.')
    } else {
        return console.log('We\'ll need your parents autorization.')
    }
}

checkAge(age);

//Variáveis de block scope (escopo de bloco)

const matchDay = () => {
    let SeasonMatchDays = ['Wednesday','Sunday'];
    console.log(`Liverpool will play ${SeasonMatchDays[1]}`)
};

matchDay();
//console.log(SeasonMatchDays[1]); a variável não vai funcionar fora do bloco ao qual pertence

//A melhor prática é usar variáveis de block scope para não poluir o código nem torná-lo lento

const airQuality = ()=> {
    let yearsSeason = 'Summer';
    let airHumidity = 80;
    if (yearsSeason = 'Summer') {
        let airHumidity = 50;
        console.log(`A umidade do ar é de ${airHumidity}%. A qualidade daa respiração é baixa.`);
    };
    console.log(`A umidade do ar é de ${airHumidity}%. Boa para praticar esportes.`);
};

airQuality();