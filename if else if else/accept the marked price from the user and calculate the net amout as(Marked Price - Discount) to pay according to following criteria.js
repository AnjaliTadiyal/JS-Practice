let a = parseInt(prompt("Enter The Marked Price"));
if (a>10000){
    console.log(a*20/100);
}else if( a>7000 && a<10000){
    console.log( a*15/100);
}else if (a<=7000){
    console.log(a*10/100)
}