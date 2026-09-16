// reduce is an array method  which creates new array and  process the elements and reduces array size into one element

let num=[]
/*1st way 
function sum(x,y){
    x+=y;
    return x;
}


console.log(num.reduce(sum))
*/

/* 2nd way 

let res=num.reduce(function (x,y){
    x+=y;
    return x;
} )
console.log(res)
*/

/*3rd way */

let res=num.reduce((acc,y)=>{ acc+=y ;return acc; },0)
console.log(res)
console.log(num)