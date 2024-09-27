//class is a instance of object
var Employee = /** @class */ (function () {
    function Employee() {
        this.name = "kavi";
        this.age = 26;
    }
    return Employee;
}());
var employee = new Employee();
console.log(employee.name, employee.age);
//using constructor
var Play = /** @class */ (function () {
    function Play(name, age) {
        this.name = name;
        this.age = age;
    }
    return Play;
}());
var player = new Play("kavi", 11);
console.log(player.name, player.age);
var Employe = /** @class */ (function () {
    function Employe() {
        this.name = "kavi";
        this.age = 26;
    }
    Employe.prototype.display = function () {
        console.log(this.name, this.age);
    };
    return Employe;
}());
var em = new Employe();
em.display();
var Person = /** @class */ (function () {
    function Person(no, name, name1) {
        this.no = no;
        this.name = name;
        this.name1 = name1;
    }
    return Person;
}());
var person = new Person('171-28-0926', 'John', 'Doe');
console.log(person.no);
