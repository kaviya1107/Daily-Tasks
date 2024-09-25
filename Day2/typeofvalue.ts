/* Write a function that takes a value as argument. Return the type of the value.*/

let type:(a:any)=>any;
type=function(a:any){
    return typeof(a);
}
console.log(type("kavi"));
console.log(type(1));
console.log(type(false));
console.log(type({}));
console.log(type(null));
