let arr=new Array(3)
console.log(arr.length)
var count=1;
for(let i=0;i<arr.length;i++){
(arr[i]=count)
count+=2;
}
console.log(arr) // in java script there is  address but it will give all data present in arr
console.log(arr[1000000])

let arr1=["prasad",21,5.8,true,4n]
console.log(arr1)
for(let i=0;i<arr1.length;i++){
    console.log(arr1[i])
}
console.log(typeof arr1)
let arr2=arr1; // it is possible in javascript because array is object it have reference by using reference can we store data 
console.log(arr2)