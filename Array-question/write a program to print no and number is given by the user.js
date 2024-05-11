let repeat = true;
let num1 = []
for (let i = 0; repeat; i++) {
    num1[i]=parseInt(prompt("Enter The Number"));
    let num2 = prompt("Would you like to enter more number! \n If YES Enter 'y'  \n If NO Enter 'n'");

    if (num2 === "y") {
        repeat = true;
    }
    else if (num2 === "n") {
        repeat = false;
    }
    else {
        alert("Please Enter Valid Input")
    }
}
console.log(num1)