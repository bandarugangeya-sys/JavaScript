let a=[10,20,30,40,30,60]
console.log(a.indexOf(20))// indexOf is an array method it checks the index at begining to end if not there element in an array it returns -1
console.log(a.lastIndexOf(30)) // lastIndexOf is an array method it checks index at end to start if not there element in an array it returns -1
console.log(a.indexOf(100))// element not found returns----->>(-1)
console.log(a.includes(30))// includes is an array method it checks particular element present or not if present returns true or else false
console.log(a.includes(100))