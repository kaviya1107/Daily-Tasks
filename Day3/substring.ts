/*Input a string which contains some palindrome substrings. 
Find out the position of palindrome substrings if exist and replace it by *. 
(For example if input string is “bob has a radar plane” then it should convert in “*** has a ***** plane”.*/


function isPalindrome(wor: string): any {
    if (wor.length <= 1) {
        return false;
    }
    let rev = ""; 
    for (let i = wor.length - 1; i >= 0; i--) {
        rev=rev+wor[i];
    }
    return rev === wor; 
}
function replacePalindromes(sentence: string): string {
    const words = sentence.split(" ");
    const result:any= []; 
    for (const word of words) {
        if (isPalindrome(word)) {
            let asterisks = ""; 
            for (let i = 0; i < word.length; i++) {
                asterisks= asterisks+"*"; 
            }
            result.push(asterisks);
        } else {
            result.push(word); 
        }
    }
    return result.join(" "); 
}
console.log(replacePalindromes("bob has a radar plane"));
