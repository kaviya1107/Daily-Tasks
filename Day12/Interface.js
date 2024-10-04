function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var person = {
    firstName: 'John',
    lastName: 'Doe'
};
console.log(getFullName(person));
var Jan = {
    firstName: 'Jane',
    middleName: 'K.',
    lastName: 'Doe',
    age: 22,
};
console.log(Jan);
var em = {
    firstName: 'Jane',
    middleName: 'K.',
    lastName: 'Doe',
    age: 22,
    domain: "fullstack"
};
console.log(em);
