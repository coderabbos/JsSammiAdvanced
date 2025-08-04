//                                                      Variables
// let, const, var
//let o'zgaruvchan const o'zgarmas(lekin o'zgartirsa bo'ladi)
// local bo'lib {} ichida ishlatsa bo'ladi va juda muhim
// farqi var global o'zgaruvchi hisoblanadi va {} ichida ishlatib bo'lmaydi


//                                                   Ma'lumot turlari 
//     #1 number
//     #2 string
//     #3 boolean (true,false)
//     #4 null
//     #5 undefined

//          Object - Kompleks ma'lumot turlari
//          #1 Array - Massiv
//          #2 Function
//          #3 Object
//          #4 Muntazam iboralar
//          #5 Error


//                                                      Object
// const person={
//     // xususiyat(property)(name) : qiymat(value)- number,string(Abbos),boolean,undefined, array, function, object
//     name: 'Abbos',
//     age: 22,
//     hobby: {
//         sport: 'Football',
//         game: 'Ufc',
//         }
// }
// console.log(person);

// // Array
//              //   0      1       2       3   xossasi
// const colors = ['red','black','green','white',];
// console.log(colors[2]);

//                                               Window, Interpolation, Operators

// alert ('Hello');

// const isAccess = confirm ('Are you above 18?')

// const age = +prompt('How old are you?','12')// 12ni joyiga default(' ') bo'sh qiymat qoldirgan yaxshi
//  + bu prompt typeni number qilib beradi

//                                                      Interpolation

// const firstName='Abbos'
// const sureName='Eshmatov'
// const age2='26'

// console.log('My name is '+ firstName + ' ' +sureName +' I am '+age2 +' years old.')
// // xuddi shuni interpolaton usulida qilgan yaxshi
// console.log(`My name is ${firstName} ${sureName} I am ${age2} years old.`)
// ${} ning ichiga property hohlagan function yozxsak ham bo'ladi va bu (``) backtick bilan o'raladi.

//                                                          Operators

// const x = 3
// const y = 6

// console.log(x + y)
// console.log(x - y)
// console.log(x * y)
// console.log(x / y)
// console.log(x % y)

// const birthday= '1999'
// const currentYear= '2025'

// Stringga har qanday malumot turini qo'shsak usha narsa string bo'lib qolaveradi

// console.log(birthday+currentYear)// 19992025

//                                                      Increment vs Decrement

// let a=5
// let b=10

// Increment(++) har doim sonni bittaga oshiradi 
// Decrement(--) esa har doim sonni bittaga kamaytiradi
    // postfix
//     a++
//     b--
//     // prefix
//     ++a
//     --b
// console.log(a)// 6
// console.log(b)// 9

// && va operatori hamma malumot togri bolsa true qaytaradi yokida false
// || yoki qachonki bitta malumot true bolsa true qaytaradi yokida false

// const isMarried = false
// const isHaveChild = false
// const isFamily = isMarried && isHaveChild
// const isFamily = isMarried || isHaveChild
// console.log(isFamily) // && false || false

// const age3 = +prompt('How old are you?', '')
// console.log(`I am ${age3} years old.`)


//                                                  Amaliyot 

// const numberOfSeries = +prompt('Nechta serial ko\'rdingiz?' , '')
// // console.log(numberOfSeries)

// const seriesDB = {
//     count: numberOfSeries,
//     series:{},
//     actors:{},
//     genres: [],
//     private: false, 
// }
// console.log(seriesDB)

// const firstQuestion = prompt('Oxirgi ko\'rgan serialingiz?', '')
// const secondQuestion = prompt('Nechi baho berasiz?','')

// const firstQuestion1 = prompt('Keyingi oxirgi ko\'rgan serialingiz?','')
// const secondQuestion1 = prompt('Nechi baho berasiz?','')

// seriesDB.series[firstQuestion]=secondQuestion //seriesDB.series[a]=b (a)xossaning qiymati (b) degani series={
//                                               //                                                               a: b,    }

// seriesDB.series[firstQuestion1]=secondQuestion1

// console.log(seriesDB)

//                                                  Shartli operator if, else if

// const trafficLight='green'

// if (trafficLight=='red'){
//     console.log('Stop!');
// }
// else if (trafficLight=='yellow'){
//     console.log('Prepare!');
// }
// else if (trafficLight=='green'){
//     console.log('Goo!');
// }

// switch(trafficLight) {
//     case 'green':
//         console.log('Goo!');
//         break
//     case 'red':
//         console.log('Stop!');
//         break
//     case 'yellow':
//         console.log('Prepare!');
//         break
//     default: 
//     console.log('not working!');
// }


// const age = +prompt('How old are you?','')
// if ( age < 18){
//     console.log("Not Allowed!");
// } else {
//     console.log("Allowed");
// }


//                                    Shartli operator "tsikl" ---- "While" , "Do while" and "For"

// let number = parseInt(prompt('Musbat son kiriting!', ''));
// let i=1
// while(i < number){
//     console.log(i);
//     i++
// }
// console.log(i)

// let number1 = 1
// while(number1 <= 5){
//     console.log(number1);
//     number1++;
// }
//                                                          YOKI
// do{
//     console.log(number1);
//     number1++;
// }
// while(number1 <= 5)


//                                                  FOR tsikl operatori

// let number = 1;
// for (number; number <= 10; number++){
//     if (number === 4){
//         break
//     }
//     console.log(number);
// }
//                                                      Ternary operator 

// const age = 18

// age < 18 ? console.log('not Allowed'): console.log('Allowed')


//                                                           Amaliyot


// const numberOfSeries = +prompt('Nechta serial ko\'rdingiz?' , '')

// const seriesDB = {
//     count: numberOfSeries,
//     series:{},
//     actors:{},
//     genres: [],
//     private: false, 
// }

// for (let i=0; i < 2; i++){
//     const firstQuestion = prompt('Oxirgi ko\'rgan serialingiz?', '')
//     const secondQuestion = prompt('Nechi baho berasiz?','')
//         if (firstQuestion !== null && secondQuestion !== null && firstQuestion !=='' && secondQuestion !==''){
//             seriesDB.series[firstQuestion]=secondQuestion;
//             console.log("Done");
//         }else{
//             i--;
//         }
// }
// if ( seriesDB.count < 5){
//     console.log("Kam serial ko'rar ekansiz");
// }else if (seriesDB.count > 10){
//     console.log("Super serial ko\'rar odam ekansiz")
// }else if (seriesDB.count >= 5 && seriesDB.count <= 10){
//     console.log("Klassik serial ko\'rar odam ekansiz")
// }
                                                        
// console.log(seriesDB);


//                                                       Functionlar

//                                                   Function decloration

// function showHelloToUser(name){
//     age = 26
//     console.log( `Hello, Mr.${name}! You are now ${age} years old.`)
// }

// showHelloToUser('Abbos');
// // console.log(age);   



// function calculate (a, b){
//     return (a+b);// return.dan kein code.lar blocklanadi code.lar ungacha yozilishi kerak!
// }
// const firstCal=calculate(1,8)
// console.log(firstCal);

//                                                     Function expression

const showHelloWorld = function(text){
    console.log(text);
}
showHelloWorld('Hello world');

const calculate = function(a, b){
    return (a+b);
}
console.log(calculate(5, 10));//15

//                                                      Arrow function

const calculate1 = (a,b) =>{
    console.log(a+b)
}
calculate1(2,5);// 7


//                                      Methods - Object ichidagi functionlar

//                                                  String methods

const text='Hello world';
const password='      Abbos99     '

// Length is property

console.log('Uzunligi', text.length)

// Methods 

console.log('1-usul Aniq pozitsiya indexdagi harf:', text.charAt(6))
console.log('2-usul Aniq pozitsiya indexdagi harf:', text[6])
console.log('Harflarni har birini kattalashtirish:', text.toUpperCase())
console.log('Harflarni har birini kattalashtirish:', text.toLowerCase())
console.log('1-usul Matinni kesish: oxiridan kesish uchun manfiy raqamdan foydalanamiz', text.slice(0,-4))// kesilganni qaytardi
console.log('2-usul Matinni kesish:', text.substring(0, 4))
console.log('Bo\'sh spacelarni olib tashlash ikki tarafdan', password.trim())
console.log('Bo\'sh spacelarni olib tashlash old tarafdan', password.trimStart())
console.log('Bo\'sh spacelarni olib tashlash orqa tarafdan', password.trimEnd())
console.log(text)

//                              Number methods

const number=12.6
const width='240.42px'

console.log('Sonni butunlab beradi', Math.round(number))
console.log('Qattiy butunlaydi nuqtadan keingi sonni hisobga olmaydi', Math.floor(number))
console.log('String malumot turidan butun sonni qaytarib beradi', parseInt(width))
console.log('String malumot turidan son qilib beradi', parseFloat(width))


console.log(number)