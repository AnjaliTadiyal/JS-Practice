
// 111
// 222
// 333



// first-way
// for (let a = 3; a <= 3; a++) {
//     for (let b = 3; b >= 1; b--) {
//         document.write("1");
//     }
//      document.write("<br>");
// } for (let c = 3; c >= 1; c--) {
//     document.write("2");
// }
// document.write("<br>");
// for(d=3; d>=1;d--){
//     document.write("3")
// }


//second-way
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        document.write(i);
    }
    document.write("<br>")
}