let year = parseInt(prompt("Enter the year"));
if (year <=1000){
    console.log("please enter proper year")
}else if( year % 4==0){
    console.log(year+"is a leap year")
}else{
    console.log(year+"is not a leap year")
}