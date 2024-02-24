// // GLOBAL and local scope VARIABLE

// let i;
// for (i = 6; i < 5; i ++) {
//     let p = 10
//     console.log(i + p)
// }
// console.log(p)

// ARITHMETIC OPERATION

// let cost = 15
// let profit;
// let salesPrice = 20

// profit = salesPrice - cost;
// console.log(profit);

// plus (+) : number

// let cost = 15, profit = 5, salesPrice = cost + profit 
// console.log(salesPrice)

// // plus (+) : for strings

// let firstName = " tunde" ,surname = "zara", fullName = surname + firstName;

// console.log(fullName  + " is a big boy")
 

// INCREMENT AND DECREMENT

//LOGICAL OPERATORS
//AND OPERATOR &&
let result;
let age = 30;
if(age > 20 && age < 30){
    result = age + 50;

}
else{ 
    result = age;
}
console.log(result);

// OR OPERATOR

let cost = 40;
let sellprice;
let profit = 10
if(cost >= 50 || cost === 55){
    sellprice = cost + profit
}
else{
    sellprice = cost
}
console.log(sellprice)

let name = "Hayzed"

if (name !== "Hayzed"){
    console.log("why are you lying?");
}
else{
    console.log("That is good");
}


// LOOP //

let num = 5;
let i = 0;
while (i < num){
    i++;
    console.log(i);
}

// FOR LOOP //
for (let i = 0; i < num; i++){
    console.log(i)
}
// CHECKING FOR A LEAP YEAR //
// CONDITION //
 // the year divided by 4 should have a reminder of 0 //
 // the year 


 const year = prompt('Enter year');

const checkLeap = (year)=> {
    let result;
    if((year % 4  === 0 && year % 100 !== 0) || (year % 4  === 0 && year % 100 === 0 && year % 400 === 0)){
        result = "Yes! it is a leap year"

    }else {
        result = "No! it is not a leap year"
    };

    return result;
};

const answer = checkLeap(year);
alert(answer)
// console.log(answer);










