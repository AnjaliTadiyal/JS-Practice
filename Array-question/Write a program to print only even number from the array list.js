// let num = parseInt(prompt("Enter the number"));
// let value = [];

// for (i = 0; i < num; i++) {
//     value[i] = parseInt(prompt("Enter the" + (i + 1) + "no"));
//     if (value[i] % 2 == 0) {
//         console.log(value[i] + "is a even number")
//     } else if (value[i] == 0) {
//         console.log(value[i] + "is a even number")
//     }
// }


let num = parseInt(prompt("Enter the number"));
let value = [];
let sum=[]
let index=0;
for (let i = 0; i < num; i++) {
    value[i] = parseInt(prompt("Enter the" + (i + 1) + "no"));
}

for (let j = 0; j < value.length; j++) {
    if (value[j] % 2 == 0 || value[j] == 0){
        sum[index]=value[j]
        index++
    }
} 
document.write("all even no are:-")
for(let k=0; k<sum.length;k++){
   document.write(sum[k]+",")
}
