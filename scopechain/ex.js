let a="global scope";
let b="i am accessiable everywhere";
function outerscope(){
    let c="i am outer scope";
    console.log(`i am accesiable in outerscope - ${a}`)
    function innerscope(){
    let d="i am inner scope";
    console.log(d)
    console.log(`outer scope accesable here ${c}`)
    console.log(`global scope aceesable here ${b}`)
    };
    innerscope();
    //console.log(d) -- reference error(parent to child not possible)
};
outerscope();
// console.log(d) -- reference error
