//getter
var stud = /** @class */ (function () {
    function stud() {
        this._name = "kavi";
        this._course = "Physics";
    }
    Object.defineProperty(stud.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(stud.prototype, "course", {
        get: function () {
            return this._course;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(stud.prototype, "semester", {
        get: function () {
            return this._semester;
        },
        set: function (sem) {
            this._semester = sem;
        },
        enumerable: false,
        configurable: true
    });
    return stud;
}());
var student = new stud();
student.semester = 5;
console.log(student.semester);
console.log(student.name);
console.log(student.course);
