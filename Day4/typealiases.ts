//primitive
type Name=string;
let firstname:Name;
let secondname:Name;

//object
type Person={
    name:string;
    age:number;
};
let person:Person={
    name:'kavi',
    age:20
};
console.log(person.age);

//union types
type alphanumeric = string | number;
let input: alphanumeric;
input = 100; 
input = 'Hi'; 
console.log(input);

//Intersection types
type person={
    name1:string;
    age:number;
};
type person1={
    email:string;
    phone:number;
};
type candidates=person & person1;
let cand:candidates={
    name1:"kavi",
    age:20,
    email:"kavi26@gmail.com",
    phone:7708130173
};
console.log(cand);
