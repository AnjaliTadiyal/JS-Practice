// 1
// 2 3
// 4 5 6
// 7 8 9 10


let count=1;
for(i=1;i<=4;i++){
    for(j=1;j<=i;j++){
        document.write(count+"&nbsp");
        count++;
    }document.write("<br>")
}