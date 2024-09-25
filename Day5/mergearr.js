var arr1 = [10, 40, 3];
var arr2 = [20, 75, 9];
// Concatenating the two arrays
var res = arr1.concat(arr2);
console.log(res); // Output: [10, 40, 3, 20, 75, 9]
// Sorting the array numerically using a comparison function
var sorted = res.sort(function (a, b) { return a - b; }).join(" ");
console.log(sorted); // Output: 3 9 10 20 40 75
// let arr1:number[]=[3,0,1];
