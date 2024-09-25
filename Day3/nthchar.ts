// function a(k:string,m:number):string | undefined{
//     if(n<0 && n>=s.length){
//         return undefined;
//     }
//     return s[n];
// }
// let s='helloo';
// let n=5;
// let result=a(s,n);
// console.log(result);

let b:(a:string,n:number)=>string | undefined; //another method
b=function(a:string,n:number){
    if(n<0 && n>=s.length){
        return undefined;
    }
    return s[n];
}
let s='helloo';
let n=5;
let result=b(s,n);
console.log(result);



