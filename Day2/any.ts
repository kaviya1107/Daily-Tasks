var result:any;
result='hello';
console.log(result);
result=1;
console.log(result);
result=[1,2,3,4];
let k=result.reduce((a:number,b:number)=>a+b,0);
console.log(k);

const numm=`{"latti":11.11,"longi":23.33}`;
const kk=JSON.parse(numm);//string is converted into object&array
console.log(kk);

let res:any;
res=11.11;
console.log(res.toFixed());//round()

let obj:object;
res=11.11;
console.log(res.toFixed());//object is not accept no's ans fixed()







