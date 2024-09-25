/*Input a string of alphabets.
Find out the number of occurrence of all alphabets in that string.
Find out the alphabet with maximum occurrence.*/
function occurrences(input) {
    var count = {};
    var maxCount = 0;
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var char = input_1[_i];
        count[char] = (count[char] || 0) + 1;
        maxCount = Math.max(maxCount, count[char]);
    }
    return { count: count, maxCount: maxCount };
}
console.log(occurrences("hello"));
