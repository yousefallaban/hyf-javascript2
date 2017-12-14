/*
we declare a variable in the global scope 
but we don't call it inside the function scope
so if we say :
let x = 9;
function f1(val) {
    x++
    return x;
}
f1(x);
console.log(x);
it,s will work..
*/
let x = 9;
function f1(val) {
    val = val + 1;
    return val;
}
f1(x);
console.log(x);
// 
let y = { x: 9 };
function f2(val) {
    val.x = val.x + 1;
    return val;
}
f2(y);
console.log(y);