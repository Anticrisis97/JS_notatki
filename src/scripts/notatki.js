// Tworzenie zmiennych
// var, let, const

// Redeklaracja (var)
// var x = 42;
// var x = 2137;
// console.log(x);

// let i const się nie da
// let x = 42;
// let x = 2137;
// console.log(x);

// Reinicjalizacja (var)
// var x = 42;
// x = 2137;
// console.log(x);

// let y = 42;
// y = 2137;
// console.log(y);

// const się nie da (const to constant)
// const z = 42;
// z - 2137;
// console.log(z);

//Hoisting - przenoszenie deklaracji zmiennych, funkcji i klas na górę, aktualnie
// przetwarzanego zasięgu (var, let (TDZ), const (TDZ))
// TDZ - Temporary dead zone
//
// console.log(x);
// var x = 42;
//
//
// var y;
// console.log(x);
// x = 42;
//
//console.log(add(1,2));

//function add(a, b) {
//    return a + b;
//}

//"use strict"

// x = 10
// console.log(x);
// let x = 42;

// Zasięg (Scope) - widoczność, dostępność identyfikatorów (nazwy zmiennych, funkcji i klas),
// tzn. gdzie to można używać

// funkcyjny - ograniczony przez ciało funkcji (var)
// blokowy - ograniczony przez parę klamerek (curly braces) (let, const)

//const x = 10;

// if (x){
//    var y = 42;
//    let y1 = 42;
//    const y2 = 42;
// }

// console.log(y);
// console.log(y1);
// console.log(y2);

// function magic(){
//    var y = 42;
//    let y1 = 42;
//    const y2 = 42;
// }

// magic();
// console.log(y, y1, y2);

// Functions

// named function
function addDigits(digit1, digit2){
    return digit1 + digit2;
}

addDigits(1, 2);

//anonymous function
//classic
//function expression (wyrażenie funkcyjne) - przypisanie deklracji funkcji do zmiennej

const addDigits2 = function (digit1, digit2){
    return digit1 + digit2;
}

addDigits(1, 2);

//arrow function - funkcja strzałkowa, fat arrow function (nie ma this, ani arguments)

const addDigits3 = (digit1, digit2) => {
    return digit1 + digit2;
}

addDigits3(1, 2);

//wariacje arrown function

const add = () => {return 42;}

const add1 = a { return a + 42; } // nie pisać tak, zawsze pisać okrągłe nawiasy

const add2 = (a, b) => { return a + b; }

const add3 = (a, b) => a + b; // implicit return, jak nie ma klamerek,\
// to automatycznie zwraca wynik z wyrażenia

const magic = a => a <= 0; // (a) => (a <= 0), (a) => {return a<= 0 }

const magic2 = () => {
    return {a: 42}
}
//to samo co wyżej

const magic3 = () => ({a: 42})