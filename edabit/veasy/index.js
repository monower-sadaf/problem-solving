//Area of a Triangle
//Write a function that takes the base and height of a triangle and return its area.


/* const triArea = (base,height) => {
    return (base*height)*.5;
}
console.log(triArea(3,4)); */

//Is the Number Less than or Equal to Zero?
//Write a function that determines if a number is less than or equal to zero.

/* const lessThanOrEqualToZero = (num) =>{
    return (num <= 0 ? true : false); 
}
console.log(lessThanOrEqualToZero(2)); */

//Less Than 100?
//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

/* const lessThan100 = (num1,num2) => {
    return (num1+num2 < 100 ? true : false);
}

console.log(lessThan100(1,99)); */

//Basic Variable Assignment
//A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.

const nameString = (name) => {
    let result ='';
    result = `${name}Edabit`;
    return result;
}

console.log(nameString('sadaf'));