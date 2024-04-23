let a = parseInt(prompt("Enter The salary"));
let b = parseInt(prompt("Enter The Year of Service"));
if (b >= 10) {
    console.log("Total Bonus is:" + (10*a)/100);
} else if (b >= 6 & b <= 10) {
    console.log(" Total Bonus is:" + (8*a)/100);

} else if (b<6){
    console.log("Total Bonus is:" + (5*a)/100);
}