/*Input a string which contains some palindrome substrings.
Find out the position of palindrome substrings if exist and replace it by *.
(For example if input string is “bob has a radar plane” then it should convert in “*** has a ***** plane”.*/
function isPalindrome(wor) {
    if (wor.length <= 1) {
        return false;
    }
    var rev = "";
    for (var i = wor.length - 1; i >= 0; i--) {
        rev = rev + wor[i];
    }
    return rev === wor;
}
function replacePalindromes(sentence) {
    var words = sentence.split(" ");
    var result = [];
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        if (isPalindrome(word)) {
            var asterisks = "";
            for (var i = 0; i < word.length; i++) {
                asterisks = asterisks + "*";
            }
            result.push(asterisks);
        }
        else {
            result.push(word);
        }
    }
    return result.join(" ");
}
console.log(replacePalindromes("bob has a radar plane"));
