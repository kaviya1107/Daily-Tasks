let counter=0;
while(counter<10){
    console.log(counter);
    counter++;
}

console.log("--------");

function sumOfNumbers(n: number): number {
    let sum = 0;
    let i = 1;
    while (i <= n) {
        sum += i;
        i++;
    }
    return sum;
}
console.log(sumOfNumbers(5));


