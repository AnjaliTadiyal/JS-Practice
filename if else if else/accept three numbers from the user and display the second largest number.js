let num1 = parseInt(prompt("Enter The First Number"));
let num2 = parseInt(prompt("Enter The Second Number"));
let num3 = parseInt(prompt("Enter The Third Number"));

if(num1>num2 && num1<num3 || num1<num2 && num1>num3){
    console.log("The second largest no is:"+ 'num1',num1);
}else if(num2>num1 && num2<num3|| num2<num1 && num2>num3){
    console.log("The Second largest no is:"+'num2',num2);
}else{
    console.log("The second largest number is:"+ 'num3',num3);
}