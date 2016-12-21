var begin = 1;
var end = 100;
var skip = 3;
function printRange()
{
    for(var i = begin; i < end; i = i + skip)
    {
        console.log(i);
    }
}
printRange(begin, end, skip);
