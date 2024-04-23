// 1
// 2 1
// 3 2 1
// 4 3 2 1

for(let i=1;i<=4;i++){
    let count=i;
    for(let j=1;j<=i;j++){
        document.write(count);
        count--;
    }
    document.write("<br>");
}

