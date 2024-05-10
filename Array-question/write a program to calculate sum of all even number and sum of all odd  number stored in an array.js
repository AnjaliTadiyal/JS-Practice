let arry = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
let even = [];
let evenindex = 0;
let addeven = 0;
let odd = [];
let oddindex = 0;
let addodd = 0;

for (let i = 0; i < arry.length; i++) {
    if (arry[i] % 2 == 0 || arry[i] == 0) {
        even[evenindex] = addeven + arry[i];
        evenindex++
    }
    else if (arry[i] % 2 !== 0) {
        odd[oddindex] = addodd + arry[i];
        oddindex++
    }
}

for (let m = 0; m < even.length; m++) {
    addeven = addeven + even[m];
}
console.log("sum of all even number are :-" + addeven)

for (n = 0; n < odd.length; n++) {
    addodd = addodd + odd[n];
}
console.log("sum of all odd number are:-" + addodd)