/* --------------------------------------------------- */
/***** ARROW FUNCTION *****/ 
/* --------------------------------------------------- */

let sum = (a,b) => a+b;
console.log('Sum of 2 numbers: ', sum(5,10));

console.log("");

/* --------------------------------------------------- */
/***** REST PARAMETERS ****
 * parameters passed as arrays are rest parameters */ 
/* --------------------------------------------------- */

function greet(messgae, ...names) {
    console.log(messgae, 'everyone!');
    names.forEach(name => console.log('Hi',name));
} 
greet('Welcome', 'John', 'Marry', 'James');

console.log("");

/* --------------------------------------------------- */
/***** SPREAD OPERATOR ****
 * pass function arguments as array */ 
/* --------------------------------------------------- */
function greet(name1, name2) {
    console.log('Hi',name1,'and',name2);
}
let names = ['John','Marry'];
greet(...names);

let letters = 'ABCD';
greet(...letters);

console.log("");
