// let num = prompt("Enter a number:");

// num = Number(num);

// let sum = 0;

// while (num > 0) {
//   let digit = num % 10;   
//   sum = sum + digit;
//   num = Math.floor(num / 10); 
// }

// alert("Sum of digits is: " + sum);



// let a = prompt("enter your name ");


// console.log("to upper case :", a.toUpperCase());
// console.log("to upper case :", a.toLowerCase());

// console.log(a.charAt(2));

// let b ="abc";
// let c ="def";
// console.log("the concat sstring:" + (a.concat(" " ,b)));


//let n1 = prompt("enter your n1");

// let result = name
//   .split(" ")
//   .map(word => word[0].toUpperCase() + ".")
//   .join(" ");

// console.log(result); // P. K.



// let n2 = prompt("enter your n2");

// let c = parseInt(n1-(-n2));


// alert(c);


// let num = prompt("enter no");

// if(num >= 80){
//     console.log("A+");
// }
// else if(num < 80 && num >= 70){
//     console.log("B+");
// }
// else if(num < 70 && num >= 60){
//     console.log("C+");
// }
// else{
//     console.log("failed");
// }


    // Day - 2

// let fruits = ["apple", "bananas", "mango"];
// console.log("Intial array :" , fruits) ;

// fruits.push("orange");
// console.log("new fruits", fruits);

// fruits.pop();
// console.log("after pop ", fruits);

// let fruitString = fruits.toString();
// console.log("after tostring" , fruitString);

// let morefruit  = ["pineapple", "grapes"];
// let allfruits = fruits.concat(morefruit);

// console.log("after concat ", allfruits);

// fruits.unshift("Strawberry");
// console.log("after unshift ", fruits);

// let rmfruit = fruits.shift;
// console.log("removed by shift ", rmfruit);
// console.log("after shift ", fruits);

// let sliceFruits = fruits.slice(0,2);
// console.log("After slice ", sliceFruits);
// console.log("original array ", fruits);

// fruits.splice(1,1,"kiwi");
// console.log("after splice", fruits);



let numbers = [1,2,3,4,5];

numbers.forEach((num )=>{

    console.log(num*2);
});

// map() -> tranform array
// applies aoperation to each element 
// return a new string

let sqnumber = numbers.map((num) =>{
    return num*2;
});
console.log("square nu", sqnumber);

// filter() - select elements based on condition 
// - keeps elements that satfies the condotion 
//- return new filtered aray

let evenNumber=numbers.filter((num)=>{
    return num % 2===0;
});
console.log(evenNumber);

// reduce() - reduce aray to a single value
//- total a->  accumlator
// num - curent value
// 0 - initial value
// return single vallue
let sum = numbers.reduce((total, num)=>{
    return total * num;
}, 0);
console.log(sum);

// one-line version
numbers.forEach(n => console.log(n));

let double = numbers.map(n => n*2);
console.log("double", double);
let odds = numbers.filter(n => n% 2!==0);
console.log("odds", odds);
let total = numbers.reduce((a,b)=>a+b, 0);

console,log("total", total);
