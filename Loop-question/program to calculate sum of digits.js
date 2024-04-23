let num = parseInt(prompt("Enter The number"));
let add = 0;
while (num > 0) {
    rem = num % 10;
    num = parseInt(num / 10);
    add = add + rem;

} console.log("The Total sum is:" + add)