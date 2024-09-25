let prod = [
    { name: 'phone', price: 700 },
    { name: 'tablet', price: 900 },
    { name: 'laptop', price: 1200 }
];
for (var i = 0; i < prod.length; i++) {
    if (prod[i].price == 900)
        break;
}
console.log(prod[i]);

function OddOrEven(numbers: number[]): void {
    let i = 0;
    do {
        const number = numbers[i];
        if (number === 0) {
            console.log("Encountered 0.Exiting the loop.");
            break;
        }
        if (number % 2 === 0) {
            console.log(`${number} is even.`);
        } else {
            console.log(`${number} is odd.`);
        }

        i++;
    } while (i < numbers.length);
}
const numbers = [10, 3, 4, 7, 0, 18, 21]; 
