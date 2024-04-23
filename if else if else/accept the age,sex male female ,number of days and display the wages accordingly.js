let a = parseInt(prompt("Enter The age"));
let b = prompt("Enter The Gender:\n Male \n Female");
if(b==="Male" && a>=18 && a<30){
    console.log("The Wages is:"+700);
}else if (b==="Female" && a>=18 && a<30 ){
    console.log("The wages is:"+750);
}else if (b==="Male" && a>=30 && a<=40){
    console.log("The wages is:"+800);
}else if(b==="Female" && a>=30 && a<=40){
    console.log("The Wages is:"+850);
}else{
    console.log("Enter appropriate age");
}