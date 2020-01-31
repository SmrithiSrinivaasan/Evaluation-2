function deleteNth(arr, n) 
{
    for (var i = 0 ; i < arr.length ; i++)
    {
        var count = 1;
        for (var j = i+1 ; j < arr.length ; j++)
        {
            if (arr[i] === arr[j])
            {
                ++count;
                if (count > n)
                {
                    arr.splice(j ,1);
                } 
            }
        }
    }   
    return arr;
}

console.log(deleteNth([1,2,2,1,4,7,2,4,7,3,1],2));

