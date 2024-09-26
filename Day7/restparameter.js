function getTotal() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    numbers.forEach(function (num) { return total += num; });
    return total;
}
console.log(getTotal()); // 0
console.log(getTotal(10, 20)); // 30
console.log(getTotal(10, 20, 30)); // 60
function combine() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var total = 0;
    var str = '';
    args.forEach(function (arg) {
        if (typeof arg === 'number') {
            total += arg;
        }
        else if (typeof arg === 'string') {
            str += arg;
        }
    });
    return [total, str];
}
var _a = combine(3, 'Happy', 2, 1, ' New Year'), total = _a[0], str = _a[1];
console.log({ total: total });
console.log({ str: str });
