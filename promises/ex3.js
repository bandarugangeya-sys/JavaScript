let prm=new Promise((resolve,reject)=>{
    console.log("water is start to boil");
    setTimeout(() => {
        console.log("water is boiled")
        resolve("fullfilled")
    }, 5000);
})
prm.catch((rejected)=>{
console.log('never',rejected)
})
prm.then((fullfilled)=>{
    console.log("later",fullfilled)
})