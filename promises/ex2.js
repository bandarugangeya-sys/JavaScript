/*let prm=new Promise((resolve,reject)=>{
    let data;// not work .//let data="prasad"
    if(data){
        resolve("data retrieved successfully")
    }
    else{
        reject("data rejected")
    }
})
console.log(prm) 

*/


let prm=new Promise((resolve,reject)=>{
    let data;
    if(data){
        resolve("data retrieved successfully")
    }
    else{
        reject("data rejected")
    }
})
prm.catch((error)=>{
    console.log("error::::",error)
})


let prm1=new Promise((resolve)=>{
    setTimeout(() => {
        resolve("data retrived successfully")
    }, 2000);
})
prm1.then((result)=>{
console.log("result",result)
})
