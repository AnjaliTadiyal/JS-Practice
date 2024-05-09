let num = parseInt(prompt("Enter The Number"));
let value = [];
let sum = 1;
for (i = 0; i < num; i++) {
    value[i] = parseInt(prompt("Enter The" + (i + 1) +"number"));
    sum = sum * value[i];
}
document.write(sum)