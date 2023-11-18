//Write a JavaScript program that displays the largest integer among two integers.

let num1 = prompt(`input first number`)
let num2 = prompt(`input second number`)
alert(`Comparison is completed, please take a look in console`)

function compareNums(num1, num2) { 
    if (num1 > num2) {
        console.log(`number : ${num1} is greater than ${num2}`);
    } else
        if (num1 < num2) {
            console.log(`number : ${num2} is greater than ${num1}`);
        } else {
            console.log(`number : ${num} and ${num2} is equal!`);
        }
}

compareNums(num1, num2)