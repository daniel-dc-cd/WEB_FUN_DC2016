function sumToOne(num)
{
    var numString = num.toString();
    while(numString.length > 1)
    {
        var sum = 0;
        for(var i = 0; i < numString.length; i++)
        {
            sum = sum + parseInt(numString[i]);
        }
        numString = sum.toString();
    }
  return(parseInt(numString));
}
console.log(sumToOne(182));
