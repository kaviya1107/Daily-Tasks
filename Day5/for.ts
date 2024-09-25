for(let i=0;i<10;i++){
    console.log(i);
    
}

//for..in loop
let num=[1,2,3,4,5];
for(let i in num){
    console.log(i);
    
}
//for..of loop
let num1=[100,200,300,400];
for(let i of num1){
    console.log(i);
    if(i===300){
        console.log("kavi");
        break;
    } 
}

function printMessage(): any {
    return "Hello, World!";
}
let result = printMessage();  // if use void result will be `undefined`
console.log(result);

// //factorial
function fact(n:number):number{
    let result=1;
    for(let i=1;i<=n;i++){
        result=result*i;
    }
    return result;
}
console.log(fact(5));

