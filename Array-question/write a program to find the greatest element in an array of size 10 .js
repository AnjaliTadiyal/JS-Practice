let arry = [2, 10, 12, 5, 25, 40, 8, 20, 16, 9]
greater = arry[0];
for (i = 1; i < arry.length; i++) {
    if (greater < arry[i]) {
        greater = arry[i]
    }
}
console.log("The Greatest Element in an array is:-"+ greater)