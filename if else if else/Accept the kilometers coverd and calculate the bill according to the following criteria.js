let a = parseInt(prompt("Enter the kilometers you covered"));
if (a<=10){
    console.log("The Total bill is:"+ a*11);
}else if (a>10 && a<=90){
    console.log("The Total bill is:"+ a*10);
}else{
    console.log("The Total bill is:"+ a*9);
}