//access modifiers in TypeScript including private, protected, and public.
//public and private
class Student{
    public name:string="kavs";
    private age:number=20;
    protected isstudent:boolean=true;

    get retrieve(){
        return this.name;
    }
}
const student=new Student;
console.log(student.retrieve);
//console.log(student.age);

//protected
class subclass extends Student{
    get retrieve1(){
        return this.isstudent;
    }
}
const sub=new subclass;
console.log(sub.retrieve1);
