// if our req is a company has 2 branches each branch has 2 flours each flour has 2 cabins in each cabins set of employees their print each cabin count

let a=[
[
[40,30],[30,50]
],
[
    [40,40],[60,30]
]
];
for(let i=0;i<a.length;i++){
    for(let j=0;j<a[i].length;j++){
        for(let k=0;k<a[i][j].length;k++){
console.log(a[i][j][k])
        }
    }
}