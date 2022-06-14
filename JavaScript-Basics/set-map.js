/* --------------------------------------------------- */
/***** SET *****/ 
/* --------------------------------------------------- */

let set = new Set([1,2,3]);

//add elements in set
set.add(4).add(5);
console.log('Set: ',set);

//delete elements from set
set.delete(5);
console.log('Set: ',set);

//iterate set
for(let s of set) {
    console.log(s);
}
set.forEach(s => console.log(s));

console.log("");

/* --------------------------------------------------- */
/***** MAP *****/ 
/* --------------------------------------------------- */

let map = new Map();

//add elements in map
map.set('Jan',100);
map.set('Feb',500);
map.set('March',1200);
map.set('April',1450);
console.log('Map: ',map);
console.log('Map Keys: ', map.keys());
console.log('Map Values: ', map.values());

//delete elements from set
map.delete('Feb');
console.log('Map: ',map);

//check if key exists
console.log('Map contains Jan: ', map.has('Jan'));
console.log('Map contains Feb: ', map.has('Feb'));

//iterate map
map.forEach(s => console.log(s));

console.log("");