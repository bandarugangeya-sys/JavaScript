/*  user requirement----- if any customer came to atm we need to check the withdraw amount is eligible to original 
balance or not if eligible means provide them withdraw or not provide withdrawal  */

let amount=20000;
let withdraw=20000;
if(amount>=withdraw){
    console.log("your amount withdrawed successfully::"+withdraw)
}
else{
    console.log("insufficient balance")
}