//Exercise 1

let baseline = 7;
let height = 4;

let areal = baseline * 0.5 * height;

console.log(areal);


//Exercise 2


//Exercise 3

let intro = "Hello, I'm Benjamin and I'm 24 years old. I study Web Development at Copenhagen Business Academy in Lyngby."

console.log(intro.length);
console.log(intro.indexOf('Benjamin'));

//Exercise 4



//Exercise 5

let account = 30000;
//Exercise 6 (?)

let classMates = ['Benjamin', 'Sara', 'Jeppe', 'Josephine', 'Amanda'];

console.log(classMates);
console.log(classMates.push('Ole')); //pushing items into an array
console.log(classMates.pop()); //popping items out of an array
console.log(classMates.length); //number of indexes
console.log(classMates.includes('Benjamin'));//if array includes a certain value

//Exercise 6.1

let danishActors = ['Mads Mikkelsen', 'Nikolaj Lie Kaas', 'Pilou Asbæk'];
let americanActors = ['Leonardo DiCaprio', 'Al Pacino', 'Tom Hanks'];

let allActors = danishActors.concat(americanActors); //concat joins two or more strings

console.log(danishActors);
console.log(americanActors);
console.log(allActors);

//Exercise 6.2 (?)

console.log(allActors.indexOf('Leonardo DiCaprio')); //indexOf() searches an array for a specified item or value
console.log(allActors.join(',' + ' '));

//Exercise 7

let benjamin = 24;
let sara = 25;

if(benjamin == sara){ //equal to
    console.log('Benjamin and Sara is the same age'); //false
}
if(benjamin > sara){//greater than
    console.log('Benjamin is not older than Sara'); // false
}
if(benjamin < sara){ //less than
    console.log('Sara is older than Benjamin'); //true
}
if(benjamin >= sara){//greater than or equal to
    console.log('Benjamin is younger or has the same age as Sara'); //false
}
if(benjamin <= sara){//less than or equal to
    console.log('Sara is older or has the same age as Benjamin'); //true
}
if(benjamin != sara){//not equal value or not equal type
    console.log('Benjamin and Sara are not the same age'); //true
}

//Exercise 8

let age = '24';
console.log(typeof age);
age = Number(age); //type conversion
console.log(typeof age);

//Exercise 9

let firstName = 'Benjamin';
let lastName = 'Juul Jensen';
let myAge = 24;
let favoriteFood = 'Pizza';
let favoriteSerie = 'Prison Break';

console.log(`Hello, my name is ${firstName} ${lastName} and I am ${myAge} years old. My favorite food is ${favoriteFood} and my favorite serie is ${favoriteSerie}.`); //template string