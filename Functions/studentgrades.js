/*user req--grades of students according to percentage below program good for 1 student not n students 
on that time we need to go for function  

let marks=41;
let totalmarks=100;
let percentaile=(marks/totalmarks)*100;
if(percentaile>=90){
    console.log("grade A")
}
else if(percentaile>=80){
    console.log("grade B")
}
else if(percentaile>=70){
    console.log("grade C")
}
else if(percentaile>=60){
    console.log("grade D")
}
else if(percentaile>=50){
    console.log("grade E")
}
else{
    console.log("fail")
} */

function stuGrade(marks,totalmarks){
let percentaile=(marks/totalmarks)*100;
if(percentaile>=90){
    return 'A';
}
else if(percentaile>=80){
    console.log("grade B")
}
else if(percentaile>=70){
    console.log("grade C")
}
else if(percentaile>=60){
    console.log("grade D")
}
else if(percentaile>=50){
    console.log("grade E")
}
else{
    console.log("fail")
} 
}
let res=stuGrade(91,100)
console.log(res)
stuGrade(21,100) 
