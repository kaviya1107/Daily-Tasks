let arr1:number[]=[10,40,3];
let arr2:number[]=[20,75,9];
let res=arr1.concat(arr2);
console.log(res);
let sorted = res.sort((a, b) => a - b).join(" ");
console.log(sorted);

