//if
var max=100;
var count=100;
if(count<max){
    count++;
}
console.log(count);

//if-else
var max=100;
var count=100;
if(count<max){
    count++;
}
else{
    count=1;
}
console.log(count);

//ternary
var max=100;
var count=100;
count<max?count++:count=5; 
console.log(count);

//if else if else
var count:number;
var max=11;
if(max>5 && max<=8){
    count=5;
}
else if(max>10 && max<=11){
    count=10;
}
else{
    count=26;
}
console.log(`you got ${count}%`);

//Maximum of three no's
function maximum(a:number,b:number,c:number):number{
    if(a>b && a>c){
        return a;
    }
    else if(b>c && b>a){
        return b;
    }
    else{
        return c;
    }
}
console.log(maximum(2,3,4));
console.log(maximum(10,33,44));

//vowel or consonent
function vowel(char:string):string{
    if(char=='a'||char=='e'||char=='i'||char=='o'||char=='u'){
        return `${char} is a vowel`;
    }
    else{
        return `${char} is a consonent`;
    }
}
console.log(vowel('a'));
console.log(vowel('z'));

