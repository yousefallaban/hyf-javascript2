// for loop
function repeatStringNumTimes(str, num) {
    // repeat after me
    let repeatString = "";
    for (let i = 0; i < num; i++) {
        repeatString += str;
    }
    return repeatString;
}
console.log(repeatStringNumTimes("abc", 3));
// while loop
function repeatStringNumTimes(str, num) {
    let repeatString = "";
    while (num > 0) {
        repeatString += str;
        num--;
    }
    return repeatString;
}
console.log(repeatStringNumTimes("*", 2));
// do loop
function repeatStringNumTimes(str, num) {
    let repeatString = "";
    do {
        repeatString += str;
        num--;
    } while (num > 0);
    return repeatString;
}
console.log(repeatStringNumTimes("5", 2));