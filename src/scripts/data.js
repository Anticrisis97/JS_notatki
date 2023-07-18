const data = [
    {
        name: 'pawel',
        city: 'krakow',
        age: 38,
        hobbies: ['js', 'python', 'drugs']
    },
    {
        name: 'jacek',
        city: 'jelenia_gora',
        age: 30,
        hobbies: ['trekking', 'cars', 'martial arts'],
    },
    {
        name: 'marcin',
        city: 'lublin',
        age: 43,
        hobbies: ['css', 'speedway', 'history']
    },
    {
        name: 'dawid',
        city: 'bielskobiala',
        age: 30,
        hobbies: ['football', 'snowboard', 'boxing']
    },
    {
        name: 'sebastian',
        city: 'golkowice',
        age: 20,
        hobbies: ['drugs', 'hookers', 'Js']
    },
    {
        name: "karolina",
        city: "dubaj",
        age: 32,
        hobbies: ["książki", "gotowanie", "filmy"]
    },
    {
        name: 'patryk',
        city: 'tarnow',
        age: 26,
        hobbies: ['anime', 'rts', 'lol']
    },
    {
        name: 'aleksander',
        city: 'warszawa',
        age: 23,
        hobbies: ['philosophy', 'art', 'music']
    },
    {
        name: 'Kamil',
        city: 'walcz',
        age: 34,
        hobbies: ['js', 'html', 'Mac']
    },
    {
        name: 'Alex',
        city: 'warszawa',
        age: 37,
        hobbies: ['js', 'python', 'drugs']
    },
    {
        name: 'franek',
        city: 'warszawa',
        age: 18,
        hobbies: ['js', 'bastkeball', 'cars']
    },
    {
        name: 'marcin',
        city: 'warszawa',
        age: 37,
        hobbies: ['js', 'bike', 'jogging']
    }
]

// policz średnią wieku

// function calculateAvgAge(elements){
//     let sum = 0;
//     for (let i = 0; i < elements.length; i++){
//         sum += elements[i].age;
//     }
//     return sum /elements.length
// }
//
// const result = calculateAvgAge(data);
// console.log(result);

// function calculateAvgAge(elements) {
//     const ages = elements.map((el) => element.age);
//     return ages;
// }
// const result

// Policz średnią wieku ludzi spoza Warszawy

// function calculateAvgAge(items) {
//     let sum = 0;
// // zmienna, gdzie będziemy zliczać wiek ^
//     let counter = 0;
// // zmienną, licznik, będziemy zliczać, ile jest osób ^
//     for (const item of items) {
// // zrobić iteracje po wszystkich elementach
//         if (item.city !== 'warszawa') {
// // musimy wybrać osoby spoza Warszawy za pomocą if ^
//             sum += item.age;
// // dodajemy ich wiek ^
//             counter++;
// // zwiększamy licznik ilość osób ^
//         }
//     }
// return sum / counter;
// // dzielimy przez sumę przez ilość osób ^
// }

// function calculateAvgAge(items) {
//     const result = items.filter((item) => item.city !== 'warszawa');
//     return result.reduce((acc, ce) => acc + ce.age, 0) / result.length;
// }
// const result = calculateAvgAge(data);
// console.log(result);

// Sprawdź, czy wszyscy są młodsi niż 30 lat

// function isAllYoungerThan30(data) {
//     for (const item of data){
//         if (item.age > 30){
//             return false;
//         }
//     }
//     return true;
// }

// Czy ktokolwiek pochodzi z Krakowa

// function isAnyoneFromKrakow(data) {
//     for (const item of data) {
//         if (item.city === 'krakow' ){
//             return true;
//         }
//     }
//     return false;
// }
// //////////////////////////////////////////////////////////
// const result = isAnyoneFromKrakow(data);
// console.log(result)
//
// const isAnyoneFromKrakow = (data) => data.some((item) => item.city === 'krakow');
//
// const result = isAnyoneFromKrakow(data);
// console.log(result);

// Zwróć tablicę imion osób, które kochają js

// function thoseWhoLoveJS(elements) {
//     let JSsuckers = [];
//     // Stwórz pustą tablicę, aby przechowywać imiona osób, które
//     // lubią js
//     for (const element of elements) {
//         // przeiteruj po wszystkich elementach ^
//         if (element.hobbies.includes('js')) {
//             // ^ wybierz osoby, które lubią js za pomocą if i includes
//             JSsuckers.push(element.name);
//             // dodaj te osoby do wcześniejszej tablicy
//         }
//     }
//     return JSsuckers;
//     // zwróć tablicę z imionami
// }

// Policz ile jest unikalnych hobby

function countUniqueHobbies(items) {
    let UniqueHobbies = [];
    for (const item of items) {
        for (const hobby of item.hobbies){
            if (!UniqueHobbies.includes(hobby)) {
                UniqueHobbies.push(hobby);
            }
        }
    }
    return UniqueHobbies.length
}
    // zrób tablicę do dodawania pojedynczych hobby
    // przeiteruj po wszystkich elementach
    // wewnątrz iteracji po items przeiteruj po hobbies poszczególnych elementów
    // sprawdź, czy dane hobby jeszcze nie jest w tablicy do dodawania hobby i go dodaj
    // zwróć długość tablicy z hobby

const countUniqueHobbies = (data)