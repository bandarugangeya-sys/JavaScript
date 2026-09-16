/* The Easy Fns are the ---> function declaration,function expression,arrow function,
immediate invoke function expression(IIFE) */

//Function Declaration
function add(a,b){
let c=a+b
return c;
}
let res=add(10,20)
console.log(res)

//Function Expression
let c=function (a,b){
    let res=a*b
    console.log(res)
}
c(10,20)

//arrow function
let res1=(a,b)=>{
    return a-b;
}
console.log(res1(10,20));

//IIFE

(function message(){
 console.log("its a immediate invoke function expression ")
})();