/* user req---- if day is (sunday or saturday) -- show message is happy sunday like day is(tuesday,wednesday,thursday)
--- show message like mid days if day is (monday)-- show message is happy monday if day is (friday)
-- show message is stress out of day*/

let day="sunday";
// switch is best compare to if-else-if because code-concise
//switch case checks strict type comparision(===) means (type and values)
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
