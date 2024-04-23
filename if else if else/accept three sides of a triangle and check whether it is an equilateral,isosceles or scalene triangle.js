let a = parseInt(prompt("Enter The first side of Triangle"));
let b = parseInt(prompt("Enter The Second side of Triangle"));
let c = parseInt(prompt("Enter the Third side Of Triangle"));
if (a==b && b==c && c==a){
    console.log("It is an Equilateral triangle");
}else if (a!==b && b!==c && c!==a){
    console.log("It is an Scalene Triangle");
}else if(a==b || b!==c ){
    console.log("It is an Isosceles Triangle")
}else{
    console.log("Enter valid input!")
}