let a = parseInt(prompt("Entr The first number"));
let b = parseInt(prompt("Enter the second number"));
let c = parseInt(prompt("Options : \n 1 to add \n 2 for subtraction \n 3 for multiplication \n 4 for Divide "));
switch (c) {
    case 1:
        console.log("The addition of 2 no is:" + (a + b));
        break;
    case 2:
        console.log("The Subtraction of 2 no is:" + (a - b));
        break;
    case 3:
        console.log("The Multiplication of 2 no is:" + (a * b));
        break;
    case 4:
        console.log("The Division of 2 no is:" + (a / b));
        break;
    default:
        console.log("Enter tHE Valid number");
}
