var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//access modifiers in TypeScript including private, protected, and public.
//public and private
var Student = /** @class */ (function () {
    function Student() {
        this.name = "kavs";
        this.age = 20;
        this.isstudent = true;
    }
    Object.defineProperty(Student.prototype, "retrieve", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var student = new Student;
console.log(student.retrieve);
//console.log(student.age);
//protected
var subclass = /** @class */ (function (_super) {
    __extends(subclass, _super);
    function subclass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(subclass.prototype, "retrieve1", {
        get: function () {
            return this.isstudent;
        },
        enumerable: false,
        configurable: true
    });
    return subclass;
}(Student));
var sub = new subclass;
console.log(sub.retrieve1);
