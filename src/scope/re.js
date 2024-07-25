// var permite redeclaracion y reasgnacion

var lastName = 'Battaglia';
lastName = 'Lopez'; // Rasignacion
console.log(lastName);

var secondName = 'David';
var secondName = 'Ernesto'; //Redeclaracion - reasinacion
console.log(secondName);

// let permite  reasgnacion mas no redeclaracion
let fruit = 'Apple'; 
fruit = 'Kiwi'; // Reasgnacion
console.log(fruit);
// let fruit = 'Banana';

// const no permite ni reasgnacion no redeclaracion
const animal = 'Dog';
// const animal = 'Cat';
console.log(animal);

const vehicles = [];
vehicles.push('Toyota');
console.log(vehicles);

vehicles.pop();
console.log(vehicles);