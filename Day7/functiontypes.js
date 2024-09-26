//A function type has two parts: parameters and return type
var myfunc;
// Assign a function to the variable with matching parameter types and return type
myfunc = function (a, b) {
    return a + b;
};
console.log(myfunc(26, 22));
var operation;
operation = function (x, y, operationName) {
    if (operationName === "subtract") {
        return x - y;
    }
    return x + y;
};
console.log(operation(10, 5)); // Output: 15 (addition)
console.log(operation(10, 5, "subtract")); // Output: 5  (subtraction)
