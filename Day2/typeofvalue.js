/* Write a function that takes a value as argument. Return the type of the value.*/
var type;
type = function (a) {
    return typeof (a);
};
console.log(type("kavi"));
console.log(type(1));
console.log(type(false));
console.log(type({}));
console.log(type(null));
