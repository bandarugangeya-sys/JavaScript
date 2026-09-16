var a=[10,20,30,40,50,60]
a.splice(2,0,80) // splice is an array method which is used to remove or add element at particular index
console.log(a)
a.splice(2,1,70)
console.log(a)
a.splice(2,0,80)
console.log(a)
// a.splice(2,2)
// console.log(a)
console.log(a) // splice modifies the original array where as slice will not modify original array
var a=[10,30,50,70,90]
console.log(a.slice(1,4)) //will not modify original array it supports negative index
console.log(a)
console.log(a.slice(-3))



