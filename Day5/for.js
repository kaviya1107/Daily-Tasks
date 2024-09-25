for (var i = 0; i < 10; i++) {
    console.log(i);
}
//for..in loop
var num = [1, 2, 3, 4, 5];
for (var i in num) {
    console.log(i);
}
//for..of loop
var num1 = [100, 200, 300, 400];
for (var _i = 0, num1_1 = num1; _i < num1_1.length; _i++) {
    var i = num1_1[_i];
    console.log(i);
    if (i === 300) {
        console.log("kavi");
        break;
    }
}
function printMessage() {
    return "Hello, World!";
}
var result = printMessage(); // if use void result will be `undefined`
console.log(result);
// //factorial
function fact(n) {
    var result = 1;
    for (var i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}
console.log(fact(5));
