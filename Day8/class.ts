//class is a instance of object
class Employee{
    name:string="kavi";
    age:number=26;
}
const employee=new Employee();
console.log(employee.name,employee.age);

//using constructor
class Play{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
}
const player=new Play("kavi",11);
console.log(player.name,player.age);

class Employe{
    name:string="kavi";
    age:number=26;
    display(){
    console.log(this.name,this.age);
}}
const em=new Employe();
em.display();

class Person{
    no:any;
    name:string;
    name1:string;
    constructor(no:any,name:string,name1:string){
        this.no=no;
        this.name=name;
        this.name1=name1;
    }
}
let person = new Person('171-28-0926','John','Doe');
console.log(person.no);