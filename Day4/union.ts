let empId:string|number|boolean;
empId=42;
empId='21ucso42'
empId=true;


//example
const Add_or_Concate=(a:string|number,b:string|number):string|number=>{
if(typeof a==='string'&&typeof b==="string"){
    return`${a}${b}`;
}else if(typeof a==='number'&&typeof b==="number"){
    return a+b;
}else{
    return 0;
}
};
console.log(`String Concatenation=${Add_or_Concate('abc','pqr')}`);
console.log(`Addition of 2 No's=${Add_or_Concate(10,10)}`);
console.log(`String Concatenation=${Add_or_Concate('a',10)}`);

//function
function padLeft(value:string,padding:any){
    if(typeof padding==="number"){
        return Array(padding+1).join(" ")+value;
    }else if(typeof padding==="string"){
        return padding+value;
    }else{
        throw new Error(`Expected string or number,get'${typeof padding}'.`);
    }
}
console.log(padLeft("world","global"));

