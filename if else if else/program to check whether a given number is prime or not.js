
//prime number 1 se start hota hai
//prime number khud se or 1 se devide hota hai




let num = parseInt(prompt("Enter the number"));
if (num == 0) {
    alert("please enter the valid number!")
} else if (num == 1) {
    console.log(num + "not a prime number");
} else if (num == 2) {
    console.log(num + "is a prime number!");
} else if (num % 2 == 0) {
    console.log(num + " not a prime number");
} else {
    console.log(num + " prime number");
}