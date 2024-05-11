let arry = [5, 12, 15, 8, 25, 6, 3, 17, 2, 20]
let smaller = arry[0];
for(i=1;i<arry.length;i++){
    if(smaller>arry[i]){
        smaller=arry[i]
    }
}
console.log("The Smallest element in an array is:- "+ smaller)