let num = parseInt(prompt("Enter The number"));
let value = []
let add = 0;
let average;
for (let i = 0; i < num; i++) {
    value[i] = parseInt(prompt("Enter The" + (i + 1) + " Number"))
}
for (let j = 0; j < value.length; j++) {
    add = add + value[j];
    average = add / value.length
}
console.log("average of total no are:-"+average)