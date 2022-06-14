/* --------------------------------------------------- */
/***** OBJECTS *****/ 
/* --------------------------------------------------- */

let person = {
    firstName: 'Prerna',
    lastName: 'Jain',
    age: 26,
    isAdult: function() {return person.age >= 18;}
};

console.log('Person object: ', person);
console.log(person.isAdult());
console.log('Keys of person object:', Object.keys(person));

for(propertyName in person) {
    console.log(propertyName + ":" + person[propertyName]);
}

console.log(Object.getOwnPropertyDescriptor(person, "firstName"));

//writable attribute - disable writable attributa does not allow to chnage that property
Object.defineProperty(person, 'firstName', {writable:false});
console.log(Object.getOwnPropertyDescriptor(person, "firstName"));
console.log('Person object: ', person);


//enumerable atrribute - does not display this as a person property
Object.defineProperty(person, 'firstName', {enumerable:false});
console.log(Object.getOwnPropertyDescriptor(person, "firstName"));
console.log('Person object: ', JSON.stringify(person));

//configurable atrribute - disable configurable does not allow to change configurable and enumerable property again and does not allow to delete the property 
//Object.defineProperty(person, 'firstName', {configurable:false});
Object.defineProperty(person, 'firstName', {enumerable:true});
Object.defineProperty(person, 'firstName', {writable:true});
console.log(Object.getOwnPropertyDescriptor(person, "firstName"));
console.log('Person object: ', JSON.stringify(person));

//getters and setters
Object.defineProperty(person, 'fullName', {
    get: function() {
        return this.firstName + ' ' + this.lastName;
    },
    set: function(value) {
        var nameParts = value.split(' ');
        this.firstName = nameParts[0];
        this.lastName = nameParts[1];
    }
});
console.log('Fullname: ', person.fullName);
person.fullName = 'Jim Cooper';
console.log('Fullname: ', person.fullName);
console.log('Person object: ', JSON.stringify(person));

/* --------------------------------------------------- */
/***** Creating objects using construction function *****/ 
/* --------------------------------------------------- */
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isAdult = function() { return this.age > 21 }
}

let jim = new Person('Jim','Cooper',28);
console.log('Jim Person: ', JSON.stringify(jim));

console.log("");

/* --------------------------------------------------- */
/***** PROTOTYPE *****/ 
/* --------------------------------------------------- */

let sofia = new Person('Sofia','Cooper',20);
Person.prototype.gender = undefined;
console.log("Jim's Gender: ", jim.gender);
console.log("Sofia's Gender: ", sofia.gender);

sofia.gender = 'F';
console.log("Jim's Gender: ", jim.gender);
console.log("Sofia's Gender: ", sofia.gender);
console.log("Sofia has Gender Property: ", sofia.hasOwnProperty('gender'));
console.log("Jim has Gender Property: ", jim.hasOwnProperty('gender'));

console.log("");