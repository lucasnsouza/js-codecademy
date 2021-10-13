//Promises
//Asynchronous programming means that time-consuming operations don’t have to bring everything else in our programs to a halt.

//We’re going to create a promise representing ordering sunglasses from an online store.
const inventory = {
    sunglasses: 50,
    pants: 1088,
    bags: 1340
};
  
// resolve e reject são nomes padrão para os resulatdos esperados de uma promise
const myExecutor = (resolve, reject) => {
    if (inventory.sunglasses > 0) {
      resolve('Sunglasses order processed.');
    } else {
      reject('That item is sold out.')
    }
}
  
const orderSunglasses = () => {
    return new Promise(myExecutor); //new Promise() é o construtor para as Promises
}
  
const orderPromise = orderSunglasses();
  
console.log(orderPromise);

//usando a função setTimeout() que define um tempo até que a função seja executada
//we’ll be simulating this by providing you with functions that return promises which settle after some time. To accomplish this, we’ll be using setTimeout().
const delayedHello = () => {
    console.log('Hi! This is an asynchronous greeting!');
};
   
setTimeout(delayedHello, 10000);

//setTimeout() simula uma função assíncrona. Perceba no código abaixo que embora a função esteja logo após o primeiro log, ela só será executada ao final do código. O terceiro log será impresso antes dela.
console.log("This is the first line of code in app.js.");
// Keep the line above as the first line of code
// Write your code here:
const usingSTO = () => {
  console.log('Hello there!')
}

setTimeout(usingSTO, 1000);

// Keep the line below as the last line of code:
console.log("This is the last line of code in app.js.");

//Após a promise finalizar, usamos .then() para definir o que acontecerá em seguida
//.then() tem dois parâmetros, onFulfilled que diz o que fazaer se a promise finalizou com sucesso, e OnRejected para o caso da promise finalizar com erro.
let prom = new Promise((resolve, reject) => {
    let num = Math.random();
    if (num < .5 ){
      resolve('Yay!');
    } else {
      reject('Ohhh noooo!');
    }
});
   
const handleSuccess = (resolvedValue) => {//saída se a promise finalizar com sucesso
    console.log(resolvedValue);
};
   
const handleFailure = (rejectionReason) => {//saída se a promise finalizar false ou com erro
    console.log(rejectionReason);
};
   
prom
.then(handleSuccess)
.catch(handleFailure); 
//método .then(), define o então
//usando .catch() com o handler para falha
//If the promise rejects, .then() will return a promise with the same rejection reason as the original promise and .catch()‘s failure handler will be invoked with that rejection reason.