var counter = 0;
while (counter < 10) {
    console.log(counter);
    counter++;
}
console.log("--------");
function sumOfNumbers(n) {
    var sum = 0;
    var i = 1;
    while (i <= n) {
        sum += i;
        i++;
    }
    return sum;
}
console.log(sumOfNumbers(5));
