var generateError = function (message, code) {
    throw {
        message: message,
        errorCode: code
    };
};
generateError("An Error Occured!", 240);
//example 2
var generateError1 = function (message, code) {
    throw {
        message: message,
        errorCode: code
    };
};
var result = generateError1("An Error Occured!", 240);
console.log(result);
//example3
var error = function (message) {
    throw new Error(message);
};
var fail = function () {
    return error("Something went wrong");
};
fail();
//Infinite Loop
var InfinteLoop = function () {
    while (true) {
        console.log("I'm Infinite Loop");
    }
};
InfinteLoop();
function getArea(shape) {
    switch (shape) {
        case "circle":
            return Math.PI * 1 * 1;
        case "square":
            return 1 * 1;
        case "triangle":
            return 0.5 * 1 * 1;
        default:
            var _exhaustiveCheck = shape;
            throw new Error("Unhandled case: ".concat(shape));
    }
}
console.log(getArea("circle"));
