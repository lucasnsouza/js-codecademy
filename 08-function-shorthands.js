//se uma função importante do código tem um nome muito grande, podemos atribuir um novo nome em uma nova variável, sem perder a função original
//uma função com um nome gigante e esquecível
/*
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  }
  
  // Write your code below
  const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes; //atribuir novo nome, sem parentêses, estamos apenas mudando o nome
  
  is2p2(); //chamando a função pelo novo nome
  
  console.log(is2p2.name); //vai exibir o nome da função original 
*/
//other example

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  };
  
  const addTwo = num => num + 2;
  
  const timeFuncRuntime = funcParameter => {
    let t1 = Date.now();
    funcParameter();
    let t2 = Date.now();
    return t2 - t1;
  };
  
  // Write your code below
  
  let time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);
  
  const checkConsistentOutput = (func, val) => {
      let firstTry = func(val);
      let secondTry = func(val);
      if (firstTry === secondTry) {
          return firstTry;
      } else {
          return 'This function returned inconsistent results';
      }
  };
  
console.log(checkConsistentOutput(addTwo, 10));

  