//deep copy means in new parent level object  if we change copy it cant modify original viceversa original to copy
//in new nested object  if we change copy it cant modify original viceversa original to copy
//the method for deep copy is structuredClonr()

//1st way
let a=[10,20,30,40]
console.log(a)
let b=structuredClone(a)
console.log(b)
a[2]=100;
console.log(a)
console.log(b)

//2nd way
let d=[ [10,20],[30,40]];
let c=structuredClone(d)
d[0][1]=50;
console.log(d);
console.log(c);//original remains same