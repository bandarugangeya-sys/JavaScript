let day="friday";

switch(day){
    case "saturday":
    case "sunday":
        console.log("happy weekend")
        break;
    case "monday":
        console.log("happy monday");
        break;
    case "tuesday" :
    case "wednesday":
    case"thursday":
        console.log("mid week days");
        break;
    case "friday":
        console.log("stress day out of life");
        break;
    default:
        console.log("invalid day")
}