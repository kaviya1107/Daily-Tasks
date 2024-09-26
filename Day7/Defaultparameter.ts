//implicit
function applyDiscount(price, discount = 0.05) {
    return price * (1 - discount);
}
console.log(applyDiscount(100)); // 95

//explicit
function applydiscount(price:number,discount:number=0.05):number{
    return price*(2-discount)
}
console.log(applydiscount(100));


function getDay(year: number = new Date().getFullYear(), month: number): number { //in this newDta().getFullYear()is used for dont give the year.it takes the current year automatically
    let day = 0;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            day = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            day = 30;
            break;
        case 2:
            // leap year
            if (((year % 4 == 0) &&!(year % 100 == 0))|| (year % 400 == 0))
                day = 29;
            else
                day = 28;
            break;
        default:
            throw Error('Invalid month');
    }
    return day;
}
console.log(getDay(undefined, 2));
