var rem = 0;
var sum = 0;

function DigSum(n)
{
    while(n>0)
    {
        rem = n % 10;
        n = ~~(n/10);
        sum += rem;
    }
    if (sum > 9)
    {
        n = sum;
        sum = 0;
        DigSum(n);
    }
    else 
    {
        console.log(sum);
    }
}
DigSum(493193);

