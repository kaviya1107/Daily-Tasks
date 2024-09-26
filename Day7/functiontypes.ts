//A function type has two parts: parameters and return type

let myfunc:(a:number,b:number)=>number;
// Assign a function to the variable with matching parameter types and return type
myfunc=function(a:number,b:number):number{
    return a+b;
}
console.log(myfunc(26,22));

let operation:(x:number,y:number,operationName?:string)=>number;
operation=function(x:number,y:number,operationName?:string):number{
    if (operationName === "subtract") {
        return x - y;
    }
    return x + y; 
};
console.log(operation(10, 5));                // Output: 15 (addition)
console.log(operation(10, 5, "subtract"));    // Output: 5  (subtraction)

