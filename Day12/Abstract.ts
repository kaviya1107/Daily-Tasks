abstract class abstract_class{
    name:string;
    age:number;
}
class derived_class extends abstract_class{
    name="kavi";
    arr=[1,2,3]; //in abstract class also use extra properties
}
const h=new derived_class();
console.log(h.name);
console.log(h.arr);

// create a abstract class "animal" and extend that class in the classes named "cat","dog"
abstract class animal{
    name: string
    age: number;
    getsound() {
        return `${this.name}makes the sound, ${this.age} hi`
    }
}
class dog extends animal {
    name = "mani"
    age = 90;
    getsounds() {
        return `${this.name}makes the sounds`
    }
    //the name is the abstract property thus the name must be defined  inside the derived class 
}
class cat extends animal {
    name = "Sugar"
    age = 34;4
    //the name is the abstract property thus the name must be defined  inside the derived class
}
const c = new cat
const d = new dog
console.log(c.getsound());
console.log(d.getsounds());
console.log(d.getsound());

