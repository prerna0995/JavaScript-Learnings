/* --------------------------------------------------- */
/***** COMAPRISION OPERATORS  ****/
/* --------------------------------------------------- */
let price = 200;
let result = 0;

console.log("price = " + price.toString());

// Equal to
console.log("price == price: " + (price == price));

// Equal to
result = price.toString();
console.log("price(number) == result(string): " + (price == result));

// Equal to/Equal type
result = price;
console.log("price(number) === result(number): " + (price === result).toString());

// Equal to/Equal type
result = price.toString();
console.log("price(number) === result(string): " + (price === result).toString());

// Not Equal to
result = 100;
console.log("result = " + result.toString());
console.log("price(number) != result(number): " + (price != result).toString());

// Not Equal to/Not equal type
result = price.toString();
console.log("price(number) !== result(string): " + (price !== result).toString());

console.log("");