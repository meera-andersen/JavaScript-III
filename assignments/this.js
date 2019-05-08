/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding: When in the global scope, the value of “this” will be the window/console Object.
* 2. Implicit Binding - 'this' refers to whatever is left of the dot at call time. For example, if you have an Object called myObject, and you were wanting to call a function on it (myObject.function), 'this' applies to whatever proceeds the dot, which would be myObject.
* 3. New Binding - Whenever an new object is created and returned through a constructor function, ‘this’ refers to that specific object.
* 4. Explicit Binding - is used with functions, where you can use .call, .apply, or .bind to specifically point to where 'this' refers to.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function hello (name){
    return name;
    console.log (this);
};



// Principle 2
// code example for Implicit Binding
var greetMe = {
    greeting: 'Hello ',
    speak: function(name) {
        console.log(`${this.greeting} ${name}`);
        console.log(this);
    }
}

greetMe.speak('Meera');


// Principle 3
// code example for New Binding

function Dog (breed, hairLength) {
    this.breed = breed,
    this.hairLength = hairLength
};

const doge = new Dog ('australian shepherd', 'long');

console.log(doge);






// Principle 4
// code example for Explicit Binding

let yellNameLoudly = function(){
    console.log (`MY NAME IS ${this.name.toUpperCase()}`)
};

let meera = {
    name: 'meera',
    age: 26
};

yellNameLoudly.call(meera);