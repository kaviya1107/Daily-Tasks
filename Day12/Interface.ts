function getFullName(person: {
    firstName: string;
    lastName: string
})
{
    return `${person.firstName} ${person.lastName}`;
}
let person = {
    firstName: 'John',
    lastName: 'Doe'
};
console.log(getFullName(person));

interface jane{
    firstName:string;
    middleName:string;
    lastName:string;
    age:number
}
let Jan:jane= {
    firstName: 'Jane',
    middleName: 'K.',
    lastName: 'Doe',
    age: 22,
};
console.log(Jan);

//Extending Interface
interface emp extends jane{
    domain:string;
}
let em:emp={
    firstName: 'Jane',
    middleName: 'K.',
    lastName: 'Doe',
    age: 22,
    domain:"fullstack"
}
console.log(em);
