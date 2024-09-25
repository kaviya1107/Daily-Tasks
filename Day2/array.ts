let array:string[]=[];
array[0]="kavi";
array[1]="kaviya";
array[2]="keer";
array.splice(2,0,"kavin");//0 is representing previous and in this not use push use splice for that
console.log(array);

let skill=array.splice(3,0,"kkk");
console.log(typeof(array[3]));

//properties
console.log(array[1].length);

//methods(map)
let series=[1,2,3];
series=series.map(a=>a*2);
console.log(series);

//(foreach)
let each=[1,2,3];
each.forEach(function(a){
    console.log(a);
});

//mixed types
let scores : (number | string)[];
scores = ['Programming', 5, 'Software Design', 4]; 
console.log(scores);









