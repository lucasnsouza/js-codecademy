//Our business is doing so well that we’re running low on inventory. We want to reach out to some distributors to see if they have the items we need. We only want to make one restocking order, so we’ll only want to place the order if all of the items are available.

const {checkAvailability} = require('./library.js');


//We also provided two functions which will serve as success and failure handlers.

const onFulfill = (itemsArray) => {
  console.log(`Items checked: ${itemsArray}`);
  console.log(`Every item was available from the distributor. Placing order now.`);
};

const onReject = (rejectionReason) => {
	console.log(rejectionReason);
};

//Create three variables each assigned to a separate promise:
//essas funções vão servir para passar os argumentos corretos do que queremos checar no estoque 
const checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.');

const checkPants = checkAvailability('pants', 'Favorite Supply Co.');

const checkBags = checkAvailability('bags', 'Favorite Supply Co.');


//Invoke Promise.all() with an array containing checkSunglasses, checkPants, and checkBags.
//Promise.all() roda várias promises ao mesmo tempo e retorna uma única promise com um array contendo os resulatdos de cada promise ou um erro caso uma das promises falhe
Promise.all([checkSunglasses, checkPants, checkBags])
.then(onFulfill)
.catch(onReject);