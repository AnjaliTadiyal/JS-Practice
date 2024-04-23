let a = parseInt(prompt("Enter the First Number"));
let b = parseInt(prompt("Enter the Second Number"));
let c = (prompt("Enter the operator"));
switch(c){
    case("+"):
    console.log("The Value is:"+ (a+b));
    break;
    
    case("-"):
    console.log("The Value is:"+ (a-b));
    break;

    case("/"):
    console.log("The Value is:"+(a/b));
    break;

    case("*"):
    console.log("The Value is:"+(a*b));
    break;

    case("%"):
    console.log("The Value is:"+(a%b));
    break;

    default:
        console.log("Error! \n Plese Enter Valid Operator");
}