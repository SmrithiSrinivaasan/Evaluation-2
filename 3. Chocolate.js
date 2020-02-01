// function choco_break(m,n)
// {
//     if(m>0 && n>0)
//     {
//         return (m*n)-1;
//     }
//     else
//     {
//         return 0; 
//     }
// }
// console.log(choco_break(1,1));

// function choco_break(m,n)
// {
//     var temp = m*n;
//     if(temp>1)
//     {
//         return temp-1;
//     }
//     else
//     {
//         return 0; 
//     }
// }
// console.log(choco_break(5,6));

function choco_break(m,n)
{
    var breaks = m*n;
    return (breaks > 1) ? breaks-1 : 0;
}
console.log(choco_break(5,6));
console.log(choco_break(1,10));
console.log(choco_break('10',20));
console.log(choco_break(5.5,6.5));