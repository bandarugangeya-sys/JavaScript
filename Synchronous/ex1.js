// synchronous in javascript means it means executes line by line suppose we are trying toperform 3 independent
//tasks at a time it will not execute because javascript is a synchronous but can we overcome this problem by using async
//in this program there are 2 independent tasks we are performing 1 task is under execution and another task is in 
//block or frozen state once fullly completed one task it will go into another task
function sender(){
console.log("sender started")
console.log("sender sending.....")
let start=Date.now();
let delay=5000;
let end=start+delay;

while(Date.now()<=end){

}
console.log("sender sended")
}
function receiver(){
console.log("receiver started")
console.log("receiver sending.....")
let start=Date.now();
let delay=5000;
let end=start+delay;

while(Date.now()<=end){

}
console.log("receiver sended")


}
sender()
receiver()
receiver()
sender()