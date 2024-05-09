// let num = parseInt(prompt("enter the no"));
// // let result = 0;

// // for (let i = 0; i < num; i++) {
// //     let value = parseInt(prompt("enter the" + (i + 1) + " no"));

// //     result = result + value;  
// // }

// // document.write(result);



let num = parseInt(prompt("Enter The Number"));
let value = [];
let result = 0;

for (i = 0; i < num; i++) {
    value[i] = parseInt(prompt("Enter The" + (i + 1) + "No"))
}


for (j = 0; j < value.length; j++) {
  result+=value[j]
}
document.write("The value given by the user"+ value[j]+ "="+result  )
