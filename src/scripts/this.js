// const user = {
//     name: Jarosław,
//     score: 0,
//     updateScore: function (newScore) {
//         user.score += newScore
//     }
// }


//Problem, jak stworzyc wielu uzytkownikow, nie dupilkujac kodu (factory design pattern)
// DRY - dont repeat yourself
// function user1 (name){
//     return{
//         name: name,
//         score: 0,
//         updateScore(newScore) {
//             this.score += newScore
//         }
//     }
// }
//
//
//
// const u1 = user1('Lech');
// const u2 = user1('Mateusz');

//this wskazuje na obiekt przed kropką, tzn., że obiekt jest konteksten metody (funkcji)

//u1.updateScore(42)

//Problem 2., funkcja updateScore, dla każdego użytkownika jest taka sama,
//nie ma sensu jej deklarować dla każdego osobno
//
// function User(name){
//     this.name = name;
//     this.score = 0;
// }
//
// User.prototype.updateScore = function(newScore){
//     this.score += newScore;
// }
//
// const u3 = new User('Antoni');
// const u4 = new User('Jacek');
//
// String.prototype.capitalize = function () {
//     return this[0].toUpperCase() + this.slice(1);
// }

//dupa debugging - piszę we wielu miejscach console.log('dupa') i patrze gdzie się pojawi
//
// Array.prototype.map = function(cb){
//     const temp = [];
//
//     for (let i = 0; i < this.length, i++;){
//         temp.push(cb(this[i], i, this));
//     }
//     return temp;
// }
//
// Array.prototype.myFilter = function (cb) {
//     const temp = [];
//
//     for (let i = 0; i < this.length; i++){
//         if (cb(this[i], i, this)){
//             temp.push(this[i]);
//         }
//     }
// }

//acc - accumulator, ce - current element, idx, arr -> agregacja tablicy,
// reduce => cb, ?initialValue

// Array.prototype.myReduce = function (fn, initialValue = undefined) {


// Stwórz zmienna to akumulacji wartości
//
//    let accumulator = initialValue !== undefined ? initialValue : this[0];
//
//     for (let i = initialValue!== undefined ? 0 : 1; i < this.length; i++) {
//         accumulator = fn(accumulator, this[i], i, this);
//     }
//
//     return accumulator;


// Program do tworzenia samochodów
// samochód ma brand, prędkość, silnik, max. prędkość
// samochód może przyspieszyć, zwalniać, odpalać silnik i go gasić

function Auto(brand, maxSpeed){
    this.brand = brand;
    this.speed = 0;
    this.maxSpeed = maxSpeed;
    this.engine = false;
}

const bmw = new Auto('bmw', 140);
const mercedes = new Auto ('mercedes', 190);
Auto.prototype.startEngine = function(){
    if(!this.engine){
        this.engine = true;
        console.log('silnik odpalony')
    } else {
        console.log('silnik już był odpalony')
    }
}

Auto.prototype.stopEngine = function(){
    if(this.speed === 0){
        this.engine = false;
        console.log('silnik zgaszony')
    } else {
        console.log('zatrzymaj się, zanim zgasisz silnik');
    }
}

Auto.prototype.speedUp = function(amount){
    if(this.engine) {
        this.speed = Math.min(this.speed + amount, this.maxSpeed);
        console.log(`Twoja prędkość to: ${this.speed}`);
    } else {
        console.log('Odpal najpierw silnik');
    }
}

Auto.prototype.slowDown = function (amount) {
    this.speed = Math.max(this.speed - amount, 0);
    console.log(`Twoja prędkość to: ${this.speed}`)
}

bmw.speedUp(200);
bmw.startEngine();
bmw.speedUp(40);
bmw.speedUp(40);
bmw.speedUp(240);
bmw.stopEngine();
bmw.slowDown(50);
bmw.slowDown(90);
bmw.stopEngine();