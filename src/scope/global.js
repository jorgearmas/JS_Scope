// variables

var a; //declaracion
var b = 'b'; //asignacion
b = 'bb'; //reasignacion
var a = 'aa'; //redeclaracion

// global scope

var fruit = 'Apple'; // global

function bestFruit() {
    console.log(fruit); // Variable invocada desde funcion
}

bestFruit();

function countries(){
    country = 'Colombia';
}

countries();
console.log(country);
