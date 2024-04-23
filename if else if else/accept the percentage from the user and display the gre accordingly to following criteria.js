let a = parseInt(prompt("Enter The Percentage"));
if(a<25){
    console.log("The Overall Grade is:"+ "D");
}else if (a>=25 && a<45){
    console.log("The Overall Grade is:"+ "C")
}else if (a>=45 && a<50){
    console .log("The Overall Grade is:"+"B");
}else if (a>=50 && a<60){
    console.log("The Overall Grade is:"+ "B+")
}else if (a>=60 && a<80){
    console.log("The Overall Grade is:"+ "A")
}else if(a<=80){
    console.log("The Overall Grade is:"+"A+")
}