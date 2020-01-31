var num1 = -3;
var num2 = 2;
var num3 = -2;
//var product = num1 * num2 * num3;
//console.log(product);

if ( ((num1 > 0) && (num2 > 0) && (num3 < 0)) || ((num1 > 0) && (num2 < 0) && (num3 > 0)) || ((num1 < 0) && (num2 > 0) && (num3 > 0)) )
{
    alert("The sign is -");  
}
else if ( (num1<0) && (num2<0) && (num3<0) )
{
    alert("The sign is -");
    
}
else 
{
    alert("The sign is +"); 
}

