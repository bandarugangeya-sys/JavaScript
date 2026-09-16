// the term shallowcopy means the new parent level object cant modify original if we change copy also 
//coming to new nested object can modify the copy  in shallow copy can we use 2 ways one is slice(val) method and
//spread operator[...val]


/* 1st way parent level object
let a=[10,20,30,40]
console.log(a)
let b=a.slice()
console.log(b)
let c=[...a]
console.log(c)

c[3]=4;
console.log(c)
console.log(a)
*/

/* 2nd way*/
let a=[ [10,20],[30,40]];
let b=a.slice();
b[0][1]=50;
console.log(a);//it changes original also
console.log(b);