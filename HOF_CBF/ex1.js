function add(a,b){
console.log(a+b)
}
function mul(a,b){
    console.log(a*b)
}
function div(a,b){
    console.log(a/b)
}
function sub(a,b){
    console.log(a-b)
} 
function calci(a,b,callback){ // its an higher order function 
callback(a,b); // its an call back function 
}
calci(10,20,add);
calci(1,5,mul);