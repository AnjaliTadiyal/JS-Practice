
let num = parseInt(prompt("Enter the number"));
let value = [];
let even = [];
let odd = [];
let evenindex=0;
let oddindex=0;
for (let i = 0; i < num; i++) {
    value[i] = parseInt(prompt("Enter the" + (i + 1) + "no"));
}

for (let j = 0; j < value.length; j++) {
    if (value[j] % 2 == 0 || value[j] == 0) {
        even[evenindex] = value[j]
        evenindex++
    }
    else if (value[j] % 2 !== 0) {
        odd[oddindex] = value[j]
        oddindex++
    }
}

console.log("all even no are:-")
for (let m = 0; m < even.length; m++) {
    console.log(even[m])
}
console.log("all odd no are:-")
for (let n = 0; n < odd.length; n++) {
    console.log(odd[n])
}