var result;
result = 'hello';
console.log(result);
result = 1;
console.log(result);
result = [1, 2, 3];
var k = result.reduce(function (a, b) { return a + b; }, 0);
console.log(k);
var numm = "{\"latti\":11.11,\"longi\":23.33}";
var kk = JSON.parse(numm); //string is converted into object&array
console.log(kk);
var res;
res = 11.11;
console.log(res.toFixed());
