var Employee_details1 = /** @class */ (function () {
    function Employee_details1() {
        this._name = "kavin"; //readonly is used in the _name
    }
    Object.defineProperty(Employee_details1.prototype, "emp_name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return Employee_details1;
}());
var employee_details1 = new Employee_details1;
console.log(employee_details1.emp_name);
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.displayInfo = function () {
        console.log("Name: ".concat(this.name, ", Age: ").concat(this.age));
    };
    return Person;
}());
var person = new Person("Alice", 30);
person.displayInfo();
