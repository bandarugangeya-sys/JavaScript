let username="prasad";
let userRole='premimumuser';
let user='premimumuser'
function hasAccess(){
let access=false;
if(userRole=='premimumuser'){
    access=true;
    let welcomemsg=`welcome ${username} you are a ${userRole}`
    console.log(welcomemsg)
    console.log("thanks for subscription");
}
// console.log(welcomemsg);//reference error(if we are trying to access parent to child )
};
hasAccess();