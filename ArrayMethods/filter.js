// filter is an array method it returns new array it returns the filtered data array

let num=[10,15,18,20,22]

/* 1st way 
function eligibility(x){
if(x>=18){
    return true;
}
else{
    return false;
}
}


let res=num.filter(eligibility)
console.log(res)
*/


/* 2nd way 
let res=num.filter(function (x){
    if(x>=18){
return true;
    }
    else{
        return false;
    }
    }
)
console.log(res)
*/

/* 3rd way */

let res=num.filter(x=> x>=18?true:false)
console.log(res)