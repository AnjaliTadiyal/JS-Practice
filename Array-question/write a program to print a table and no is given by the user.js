let num = parseInt(prompt("How Many Table you Want"));
Value = [];
let sum;
for (let i = 0; i < num; i++) {
    Value[i] = parseInt(prompt("Enter the" + (i + 1) + "table no"))
}
for (let j = 0; j < Value.length; j++) {
    console.log("Table of " + Value[j] + " are :-")
    for (k = 1; k <= 10; k++) {
        sum = k*Value[j];
       console.log(sum) 
    }
}