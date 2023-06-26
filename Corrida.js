let raceNumber = Math.floor(Math.random() * 1000); // PARA GERAR UM NÚMERO ALEATÓRIO ATÉ 1000
let early = true;
let age = 19;
if(early && age > 18){raceNumber += 1000}; // SE CHEGOU CEDO E A IDADE FOR MAIOR QUE 18
// SE CHEGOU CEDO E A IDADE FOR MAIOR QUE 18
if(early && age > 18){console.log(`Sua corrida irá começar às 9:30, seu número é ${raceNumber}.`)}
// SE NÃO CHEGOU CEDO E A IDADE FOR MAIOR QUE 18
else if(!early && age > 18){console.log(`Sua corrida irá começar às 11:00, seu número é ${raceNumber}.`)}
// SE A IDADE FOR MENOR QUE 18
else if(age < 18){console.log(`Sua corrida irá começar às 12:30, seu número é ${raceNumber}.`)}
// SE NÃO FOR MENOR OU MAIOR QUE 18, OU SEJA, =18
else{console.log('Por favor, comparecer à mesa de registro.')};