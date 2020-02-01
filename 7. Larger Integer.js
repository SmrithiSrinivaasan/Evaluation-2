// function large (a , b)
// {
//     if (a>b)
//     {
//         return a;
//     }
//     else
//     {
//         return b;
//     }
// }

function large(a,b)
{
    return (a>b) ? a : b ;
}

console.log(large(3,4));
console.log(large(0,-1));
console.log(large(1.2,1.25));
console.log(large(100,0500));
console.log(large(100,'500'));
