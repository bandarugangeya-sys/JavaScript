// map is an array method it creates new array by appling fn to each element

let nums=[1,4,9,16]
/* 1st way 
function squareRoot(x){
return Math.sqrt(x)
}

let res=nums.map(squareRoot);
console.log(nums)
console.log(res)
*/

/* 2nd way
let res=nums.map(function (x){
    return Math.sqrt(x)
} );
console.log(res)
*/

/*3rd way */

let res=nums.map( x => Math.sqrt(x));
console.log(res)