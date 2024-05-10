let num = parseInt(prompt("How Many Subject You Have"));
let average;
value = [];
add = 0;

for (i = 0; i < num; i++) {
    value[i] = parseInt(prompt("Enter The " + (i + 1) + "Subject Marks"))
}
for (j = 0; j < value.length; j++) {
    add = add + value[j];
    average = add / value.length;
}
    if (average >= 80) {
        console.log("Average Marks :-" + average + " " + "1st DIV")
    }
    else if (average >= 60) {
        console.log("Average Marks :-" + average + " " + "2st DIV")
    }
    else if (average >= 33) {
        console.log("Average Marks :-" + average + " " + "3st DIV")
    }
    else{
        console.log("Average Marks :-"+average+" "+"Fail")
     }

