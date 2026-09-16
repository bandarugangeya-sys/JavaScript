function add(a,b,c){
return a+b+c;
};
console.log(add.length)//heap area
console.log(add.name)//heap area
console.log(add(10,20,30));

function add(a,b,c){
return a+b+c;
};
console.log(add(10,20,30));
let add2=add; // fn is an object can we able to store data
console.log(add2(10,20,10))
let c=add(1,20,30);
console.log(c)