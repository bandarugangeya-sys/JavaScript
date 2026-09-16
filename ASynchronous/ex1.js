function fun1(){
console.log("fun1 exection started.....")
console.log("fun1 exection completed")
}

function fun2(){
    console.log("fun2 exection started.....")
    let start=Date.now();
    let delay=5000;
    let end=start+delay;
    while(Date.now()<=end){
        
    }
    console.log("fun2 exection completed")
}
function fun3(){
    console.log("fun3 exection started......")
    let start=Date.now();
    let delay=5000;
    let end=start+delay;
    while(Date.now()<=end){
        
    }
    console.log("fun3 exection completed")
}
function fun4(){
    console.log("fun4 exection started......")
    console.log("fun4 exection started")
}
fun1();
setTimeout(fun2,3000);
setTimeout(fun3,2000);
fun4();