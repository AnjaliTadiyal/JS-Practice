//      *
//     **
//    ***
//   ****
// ******


for (let a = 1; a <= 5; a++) {
    for (b = 1; b <= 5 - a; b++) {
        document.write("&nbsp&nbsp")
    }
    for (let c = 1; c <= a; c++) {
        document.write("*")
    } document.write("<br>")
}