// Ekapob Ukritnukun
// ThaiGQ@gmail.com

var arr = ["James", "Jill", "Jane", "Jack"];
var symbol = "->";
var reverse = true; // boolean value denoting whether to reverse array or not
function fancyArray()
{
    if(reverse != true)
    {
        for(var i = 0; i < arr.length; i++)
        {
            console.log(i, symbol, arr[i]);
        }
    }
    else
    {
        for(i = 0; i < arr.length / 2; i++)
        {
            var temp = arr[i];
            arr[i] = arr[arr.length - i - 1];
            arr[arr.length - i - 1] = temp;
        }
        for(i = 0; i < arr.length; i++)
        {
            console.log(i, symbol, arr[i]);
        }
    }
}
fancyArray(arr, symbol, reverse);
