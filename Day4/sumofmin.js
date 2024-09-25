/*Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.*/
function positive(sum) {
    if (sum.length > 4) {
        var sort = sum.slice().sort(function (a, b) { return a - b; });
        var acc = sum[0] + sum[1];
        return acc;
    }
    else {
        return 0;
    }
}
console.log(positive([19, 11, 22, 33, 33]));
