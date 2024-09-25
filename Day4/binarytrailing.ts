/*Given a number n, find the number of trailing zeros in its binary representation.
Examples:
4  ->  2, because 4 is represented as 100
5  ->  0, because 5 is represented as 101*/

function countTrailingZeros(num:number):number{
    let count=0;
    if(num!=0){
        while(num%2===0){
            count=count+1;
            num=num/2;
        }
        return count;
    }
    else{
        return 0;
    }
}
console.log(countTrailingZeros(4));
console.log(countTrailingZeros(12));//In binary trailing zeros calculate even numbers alone

