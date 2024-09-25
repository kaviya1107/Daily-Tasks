let score:[string,number];
console.log('kavi',5);
//console.log(5,'kavi');error because tuples have a fixed element

let bgcolor,headercolor:[number,number,number,number?];//? for not neccessary to put fixed element
bgcolor=[1,1,1,1];
headercolor=[1,1,1];
console.log(bgcolor,headercolor);


let person: [string, number];
person = ["Alice", 25];
console.log(person[0]); 
console.log(person[1]); 

// Tuple with more than two values
let book: [string, string, number];
book = ["The Great Gatsby", "F. Scott Fitzgerald", 1925];

console.log(book); // Output: ['The Great Gatsby', 'F. Scott Fitzgerald', 1925]
