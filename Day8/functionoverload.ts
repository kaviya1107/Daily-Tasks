//Multiple Functions
//with the same name
//but different parameter types and return type
//no of parameter should be the same

function add(a:number,b:number):number;
function add(a:string,b:string):string;
function add(a:boolean,b:boolean):boolean;
//function body
function add(a:any,b:any):any{
    return a+b;
}
console.log(add(12,12));
console.log(add("kavi","jemi"));
console.log(add(true,false));
console.log("-----------");

//provide the implementation for the add function
function add1(a:number,b:number):number;
function add1(a:string,b:string):string;
function add1(a:any,b:any):any{
    if(typeof a==='number'&& typeof b==='number'){
        return a+b;
    }else if(typeof a==='string'&& typeof b==='string'){
        return a+b;
    }
}
console.log(add1(12,12));
console.log(add1("kavi","priyu"));
console.log("-----------");

//Function overloading with optional parameters
function sum(a:number,b:number):number;
function sum(a:number,b:number,c:number):number;
function sum(a:number,b:number,c?:number):number{
    if(c) return a+b+c;
    return a+b;
}
console.log(sum(12,26));
console.log(sum(1,2,3));
console.log("-----------");

//Length Calculation
function getLength(item: string): number;
function getLength(item: any[]): number;
function getLength(item: { length: number }): number;
// Single implementation
function getLength(item: any): number {
    // Check if the item has a 'length' property and return it
    return item.length;
}
console.log(getLength("Hello, World!")); 
console.log(getLength([1, 2, 3, 4, 5])); 
console.log(getLength({ length: 10 }));// Output: 10 (length property of an object)


