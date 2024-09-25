/*Write a function that takes two numbers (a and b) as argument. Sum a and b. Return the result

var num:(a:number,b:number)=>number;
num=function(a1:number,b1:number){
return(a1+b1);
}
console.log(num(1,2));
*/
/*To get Input from user*/
var num1 = parseFloat(prompt("Enter the first number:") || "0");
var num2 = parseFloat(prompt("Enter the second number:") || "0");
var sum = num1 + num2;
console.log("The sum is: ".concat(sum));
