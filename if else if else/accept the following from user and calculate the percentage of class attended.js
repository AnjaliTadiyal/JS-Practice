let a = parseInt(prompt("Enter the Total number of working Days"));
let b = parseInt(prompt("Enter the Total number of days for Absent"));
let c = a/b*100;
if (c<=75){
    console.log("THe percentage is:"+ c + "You are eligible to sit in exam");
}else{
    console.log("The percentage is:"+ c + "You are eligile to sit in exam");
}