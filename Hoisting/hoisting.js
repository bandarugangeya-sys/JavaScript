//console.log(a);//error-called as reference error(terminal dead zone)
let a=10;
console.log(a);

console.log(b);// the var have after hoisting undefined value coming to let there is no undefined value
var b=100;
console.log(b);

//console.log(c);//error-called as reference error(terminal dead zone)
const c=10;
console.log(c)
