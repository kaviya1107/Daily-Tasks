//Multiple Functions
//with the same name
//but different parameter types and return type
//no of parameter should be the same
//function body
function add(a, b) {
    return a + b;
}
console.log(add(12, 12));
console.log(add("kavi", "jemi"));
console.log(add(true, false));
console.log("-----------");
function add1(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
}
console.log(add1(12, 12));
console.log(add1("kavi", "priyu"));
console.log("-----------");
function sum(a, b, c) {
    if (c)
        return a + b + c;
    return a + b;
}
console.log(sum(12, 26));
console.log(sum(1, 2, 3));
console.log("-----------");
// Single implementation
function getLength(item) {
    // Check if the item has a 'length' property and return it
    return item.length;
}
console.log(getLength("Hello, World!"));
console.log(getLength([1, 2, 3, 4, 5]));
console.log(getLength({ length: 10 })); // Output: 10 (length property of an object)
