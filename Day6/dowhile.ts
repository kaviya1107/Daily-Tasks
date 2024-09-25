let ik = 0;
do {
    console.log(ik);
    i++;
} while (ik < 10);


function checkOddOrEven(numbers: number[]): void {
    let i = 0;
    do {
        const number = numbers[i];
        if (number % 2 === 0) {
            console.log(`${number} is even.`);
        } else {
            console.log(`${number} is odd.`);
        }
        i++;
    } while (i < numbers.length);  
}
const number = [10, 3, 4, 7, 0, 18, 21];
checkOddOrEven(number);
