function first(){
console.log("first execution starts")
console.log("first execution executing.....")
let time=Date.now()
let delay=3000
let end=time+delay

while(Date.now()<=end){
console.log("yeAh")
}
console.log("first execution completed")
}
function second(){
console.log("second execution starts")
console.log("second execution executing.....")
let time=Date.now()
let delay=3000
let end=time+delay

while(Date.now()<=end){

}
console.log("second execution completed")
}
first();
second();