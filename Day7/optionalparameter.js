var _a, _b, _c, _d, _e, _f;
function multiply(a, b, c) {
    if (c !== undefined) {
        return a * b * c;
    }
    return a * b;
}
console.log(multiply(4, 5));
console.log(multiply(4, 5, 10));
var users = { id: 1, name: "kavi", address: { country: "USA" } };
var cityy = (_a = users.address) === null || _a === void 0 ? void 0 : _a.city;
console.log(cityy);
var val = (_b = users.address) === null || _b === void 0 ? void 0 : _b.country;
console.log(val);
console.log("---------------------");
var product = {
    id: 1,
    name: "Smartphone",
    price: 699,
    reviews: [
        { reviewer: "Alice", rating: 5, comment: "Great phone!" },
        { reviewer: "Bob", rating: 4, date: new Date(2024, 6, 26) } // Comment is optional
    ]
};
var firstReviewComment = (_d = (_c = product.reviews) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.rating;
console.log(firstReviewComment); // Output: "Great phone!"
var secondReviewComment = (_f = (_e = product.reviews) === null || _e === void 0 ? void 0 : _e[1]) === null || _f === void 0 ? void 0 : _f.date;
console.log(secondReviewComment);
