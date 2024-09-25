/*Input a string of alphabets.
Find out the number of occurrence of all alphabets in that string. 
Find out the alphabet with maximum occurrence.*/

function occurrences(input: string) {
    const count = {};
    let maxCount = 0;
    for (const char of input) {
        count[char] = (count[char] || 0) + 1;
        maxCount = Math.max(maxCount, count[char]); 
    }
    return { count, maxCount };
}
console.log(occurrences("hello"));




