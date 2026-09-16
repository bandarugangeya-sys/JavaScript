
//syntax for promise--pending
let prm=new Promise(()=>{

});
console.log(prm)//pending



let prm1=new Promise((resolve)=>{
console.log("executor function")
resolve("fulfilled");
});
console.log(prm1)//fulfilled


let prm4=new Promise((resolve,reject)=>{
    resolve("fulfilled");
})
prm4.then((result)=>{
console.log(result)
})



let prm3=new Promise((resolve,reject)=>{
    reject("unfulfilled");
})
prm3.catch((result)=>{
console.log(result)
})



let prm2=new Promise((reject)=>{
console.log("executor function")
reject("unfulfilled");//unfulfilled
});

console.log(prm2)

