// accessing the parent class property in the derived class
// the derived class can also have extra methods and properties
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
var animal = /** @class */ (function () {
    function animal(name) {
        console.log("".concat(name, " make the sound"));
        this.sum = name;
    }
    animal.prototype.display = function () {
        return this.sum;
    };
    return animal;
}());
var dog = /** @class */ (function (_super) {
    __extends(dog, _super);
    function dog(name) {
        var _this = _super.call(this, name) || this;
        console.log("".concat(name, " barks"));
        return _this;
    }
    return dog;
}(animal));
var cat = /** @class */ (function (_super) {
    __extends(cat, _super);
    function cat(name) {
        var _this = _super.call(this, name) || this;
        console.log("".concat(name, " barks"));
        return _this;
    }
    return cat;
}(animal));
//access those classes through the child class
var Animal = new animal("all animals");
var Dog = new dog("mani");
console.log(Dog.display());
var Cat = new cat("leela");
console.log(Cat.display());
