const generateError = (message:string,code:number):never=>{
    throw {
        message:message,
        errorCode:code
    };
};
generateError(`An Error Occured!`,240);


//example 2
const generateError1 = (message:string,code:number):never=>{
    throw {
        message:message,
        errorCode:code
    };
};
const result=generateError1(`An Error Occured!`,240);
console.log(result);


//example3
const error=(message:string):never=>{
    throw new Error(message);
};
const fail=()=>{
    return error(`Something went wrong`);
}
fail();


//Infinite Loop
const InfinteLoop=():never=>{
    while(true){
        console.log(`I'm Infinite Loop`);
    }
};
InfinteLoop();


//example
type Shape = "circle" | "square" | "triangle";
function getArea(shape: Shape): number {
    switch (shape) {
        case "circle":
            return Math.PI * 1 * 1;
        case "square":
            return 1 * 1; 
        case "triangle":
            return 0.5 * 1 * 1; 
        default:
            const _exhaustiveCheck: never = shape; 
            throw new Error(`Unhandled case: ${shape}`); 
    }
}
console.log(getArea("circle"));

