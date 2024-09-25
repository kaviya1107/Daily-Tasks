var i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);
function checkOddOrEven(numbers) {
    var i = 0;
    do {
        var number = numbers[i];
        if (number % 2 === 0) {
            console.log("".concat(number, " is even."));
        }
        else {
            console.log("".concat(number, " is odd."));
        }
        i++;
    } while (i < numbers.length);
}
var numbers = [10, 3, 4, 7, 0, 18, 21];
checkOddOrEven(numbers);
