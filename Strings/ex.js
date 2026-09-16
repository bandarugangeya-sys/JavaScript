let a="prasad"
let b=new String("prasad")
console.log(typeof b)
console.log(a==b)//true
console.log(a===b)//false

console.log(a[1]) // r

// string is immutable in nature
a[2]='A' // if we are tring to change 2 index a value to A
console.log(a[2])// but ramains same but in javascript doesnot throw any error