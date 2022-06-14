'use strict';
/* --------------------------------------------------- */
/***** INITIALIZATION OF ARRAY *****/
/* --------------------------------------------------- */

//Method 1
let arr = [1,2,3,4,5];
console.log('arr: ',arr);
console.log('arr[0] = ', arr[0]);
console.log('arr[3] = ',arr[3]);
console.log('arr[5] = ',arr[5]);

//Method 2
let arr1 = Array.of(1,2,3);
console.log('\narr1: ',arr);
console.log('arr1[0] = ',arr1[0]);
console.log('arr1[2] = ',arr1[2]);
console.log('arr1[5] = ',arr1[5]);

//Add values to last of array
arr.push(10);
console.log('\narr after push(10): ',arr);
arr.push(11,12,13);
console.log('arr after push(11,12,13): ',arr);

//delete last element from array
let last = arr.pop();
console.log('\nLast element of array: ',last);
console.log('arr after pop(): ',arr);

//add element at the beginning of the array
arr.unshift(9);
console.log('\narr after unshift(9): ',arr);
arr.unshift(0,5,6);
console.log('arr after unshift(0,5,6): ',arr);

//remove from the beginning of the array
let first = arr.shift();
console.log('\narr after shift(): ',arr);

//slice - creates a new array with older one
let newArr = arr.slice(2,5);
console.log('\nnew Arr with slice(2,5) of arr: ',newArr);

//splice - used for adding or deleting elements from arr
/* deleting - first number determines the starting index of array, 
 second number determines the number of elements need to remove */
 arr.splice(0,2);
 console.log('\narr after splice(0,2): ',arr);

//adding
arr.splice(0,0,10);
console.log('arr after spilce(0,0,10): ',arr);

arr.splice(0,2,0);
console.log('arr after splice(0,2,0): ',arr);

/* --------------------------------------------------- */
/***** ARRAY FUNCTIONS *****/
/* --------------------------------------------------- */

console.log("\n***** ARRAY FUNCTIONS *****");

//indexOf()
console.log('\nIndex of 5: ',arr.indexOf(5));
console.log('Index of 15: ',arr.indexOf(15));

//filter() - filter the elements as per given condition
let a = arr.filter(function(item){
    return item > 10;
});
console.log('Elements greater than 10: ',a);

//find() -  find the first occurance of element as per given condition
let b = arr.find(function(item){
    return item > 10;
});
console.log('First element greater than 10: ',b);
//console.log('First element greater than 10: ',arr.find(e => e >10));

//findIndex() -  find the index of first occurance of element as per given condition
console.log('Index of first element greater than 10: ',arr.findIndex(e => e > 10));

//forEach()
arr.forEach(function(item){
    console.log('Element: ', item);
});

//Array.of() - create array from a list of arguments
let days = Array.of('Mon','Tues','Wed','Thur','Fri','Sat','Sun');
console.log('Array created with Array.of()-> ',days);

//fill() - fill the array with specific number
console.log('Array filled with 0: ',arr.fill(0));
console.log('Array filled with 5: ',arr.fill(5));