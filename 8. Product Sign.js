// var num1 = -3;
// var num2 = 2;
// var num3 = -2;
// //var product = num1 * num2 * num3;
// //console.log(product);

// if ( ((num1 > 0) && (num2 > 0) && (num3 < 0)) || ((num1 > 0) && (num2 < 0) && (num3 > 0)) || ((num1 < 0) && (num2 > 0) && (num3 > 0)) )
// {
//     console.log("The sign is -");  
// }
// else if ( (num1<0) && (num2<0) && (num3<0) )
// {
//     console.log("The sign is -");
    
// }
// else 
// {
//     console.log("The sign is +"); 
// }

// var array = [-1,2,-3,4,-5];
// var count = 0;
// for (let index = 0; index < array.length; index++) {
//     if (array[index] < 0)
//     {
//         ++count ;
//     }    
// }
// (count % 2 === 0) ? console.log("The sign is +") : console.log("The sign is -"); 

//Sign of the array not product! 
var array = [-1,-2,3,4,5];
var result = array.some(a => a<0);
result ? console.log("The sign is -") : console.log("The sign is +");