let user_input="  bandaruprasad  | BANdarugangeya@gmail.COM   |  i am familiar with JavaScript i love JavaScript "
user_input=user_input.split("|")
console.log(user_input)
let username=user_input[0]
username=user_input[0].trim();
//console.log(username)
let email=user_input[1]
email=user_input[1].trim();
//console.log(email)
let bio=user_input[2];
bio=user_input[2].trim()
// console.log(bio)
let username1=username=username.toUpperCase()
// console.log(username1)
let email2=email.toLowerCase();
// console.log(email2)
// console.log(bio)
let Love=bio.replace("JavaScript","JS")
// console.log(Love)
bio=bio.replaceAll("i","I")
// console.log(bio)
bio=bio.includes("JavaScript")
// console.log(bio);

// check valid email or not 
let email1=email2.includes("@")&&email2.endsWith('.com')
// console.log(email1)

// console.log(email.length)


//by using backticks we can give final output for form
let repeateddata='-'.repeat(50)
let final_result=` The User Data :
${repeateddata}
UserName :${username1}
Email :${email2}
Bio :${Love}
Check_valid_Email:${email1}
${repeateddata}
`
console.log(final_result)

