let num = parseInt(prompt("Enter The No"));
while (num > 0) {
    rem = num % 10;
    num = parseInt(num / 10);
    document.write(rem);
} 