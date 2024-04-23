let num = parseInt(prompt("Enter The number"));
let count = 0;
while(num>0){
    num=parseInt(num/10);
   count++
}
console.log("The Total number of digit is:"+count);