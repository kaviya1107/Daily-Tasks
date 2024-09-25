for (let index = 0; index < 9; index++) {
    if (index % 2)
        continue;
    console.log(index);
}

let index1 = -1;
while (index1 < 9) {
    index1 = index1 + 1;
    if (index1 % 2)
        continue;
    console.log(index1);
}

let index = 9;
let count = 0;
do {
    index += 1;
    if (index % 2)
        continue;
    count += 1;
} while (index < 99);
console.log(count); // 45
