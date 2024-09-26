const heros=["kavi","mp","keer"]//also give[1,2,3,4]
heros.map(hero=>{
    return 'hero is ${hero}'
})
console.log(heros);

function getvalue(myval:number):boolean|any{
    if(myval>5){
        return true
    }
    return "ok"
}
console.log(getvalue(10));

//1.named function
// function- zero parameter
function info(){
    console.log("helloooo");
}
info();

//function- parameter and argument passing 
function add(a:number,b:number){
    console.log(a+b);
}
add(1,2);

function calculatee(a:number,b:number,c:number):number{
    return a-b+c
}
console.log(calculatee(22,44,55));


//A function type has two parts: parameters and return type

function user(username:string):boolean{
    if(username==="kavi"){
        return true
    }
    else{
        return false;
    }
}
console.log(user("kavi"));


//2.Anonymous function- without function name- storing function in a variable

let k=function(){
    console.log("Heshna");
}
k();

function echo(message: string): void {
    console.log(message.toUpperCase());//also use lowercase
}
// let r= echo("nithu");//correct
(echo("kavi"));
// console.log(echo("kavu"));undefined..because dont return anything

//implicit
var sum=function(x,y){
    return x*y
}
console.log(sum(2,3));

//explicit
var sum1=function(a:number){
    return a;
}
console.log(sum1(5));
