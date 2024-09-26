function multiply(a: number, b: number, c?: number): number {
    if (c !== undefined) {
        return a * b * c;
    }
    return a * b;
}
console.log(multiply(4,5));
console.log(multiply(4,5,10));

/*function multiply(a: number, b?: number, c: number): number {
    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}*/ 
 //Because if you make the b parameter optional, and c parameter required the TypeScript compiler will issue an error

interface User{
    id:number,
    name:string,
    address?:{
        city?:string,
        country:string
    };
}
const users:User={id:1,name:"kavi",address:{country:"USA"}}
const cityy=users.address?.city;
console.log(cityy);
const val=users.address?.country;
console.log(val);

console.log("---------------------");


interface Review {
    reviewer: string;
    rating: number;
    comment?: string;  
    date?: Date;       
}
interface Product {
    id: number;
    name: string;
    price: number;
    reviews?: Review[]; 
}
const product: Product = {
    id: 1,
    name: "Smartphone",
    price: 699,
    reviews: [
        { reviewer: "Alice", rating: 5, comment: "Great phone!" },
        { reviewer: "Bob", rating: 4,date: new Date(2024, 6, 26)} // Comment is optional
    ]
};
const firstReviewComment = product.reviews?.[0].rating;
console.log(firstReviewComment); // Output: "Great phone!"

const secondReviewComment = product.reviews?.[1]?.date; 
console.log(secondReviewComment);
