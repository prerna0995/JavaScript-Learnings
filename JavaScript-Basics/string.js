/* --------------------------------------------------- */
/***** STRING METHODS  ****/
/* --------------------------------------------------- */

let x = "Apple, Banana, Kiwi, Apple";
console.log('String:', x);

//length
console.log('\nString length:', x.length);

//slice(start, end) - extracts a part of a string and returns the extracted part in a new string
console.log('\nString slice(7,13):', x.slice(7,13));
console.log('String slice(-12,-6):',x.slice(-12, -6));

//substring(start, end) - 
console.log('\nString substring(15):',x.substring(15));
console.log('String substring(-12,1):',x.substring(-12, 1));

//substr(start, length)
console.log('\nString substr(7,6):',x.substr(7,6));
console.log('String substr(-4):',x.substr(-4));

//replace() - it returns a new string and replaces only the first match
console.log('\nReplace Apple with Orange:',x.replace('Apple','Orange'));
console.log('Replace APPLE with Orange:',x.replace(/APPLE/i,'Orange'));
console.log('Replace Apple with Orange:',x.replace(/Apple/g,'Orange'));

//toUpperCase()
//toLowerCase()
//concat()
//trim()
//padStart() - padding at the beginning of the string
let text = 'a';
console.log('\nPadding at the start: ',text.padStart(3 ,"A"));

//padEnd()() - padding at the end of the string
console.log('\nPadding at the end: ',text.padEnd(3 ,"A"));

console.log("");

/* --------------------------------------------------- */
/***** STRING COMAPRISION  ****/
/* --------------------------------------------------- */

x = 'John';             
let y = new String('John');
console.log('Type of x: ' + typeof(x) + '\nType of y: ' + typeof(y));
console.log('x == y: ',x==y);
console.log('x === y: ',x===y);
console.log('x != y: ',x!=y);
console.log('x !== y: ',x!==y);

x = new String('John');
console.log('Type of x: ' + typeof(x) + '\nType of y: ' + typeof(y));
//Comparing two JavaScript objects always returns false.
console.log('x == y: ',x==y);
console.log('x === y: ',x===y);
console.log('x != y: ',x!=y);
console.log('x !== y: ',x!==y);

console.log("////////////////////");


const found = [9, 10, 140, 68].findIndex(element => element > 140);
console.log(found);