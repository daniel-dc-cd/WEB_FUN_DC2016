// Ekapob Ukritnukun
// ThaiGQ@gmail.com

// Finds total reward after x days
var days = 30;
var desiredAmount;
function fewBillion()
{
    var dailyAmount = 0.01;
    var total = 0;
    var temp = dailyAmount;
    for(var i = 1; i <= days || total <= desiredAmount; i++)
    {
        dailyAmount = temp;
        total = total + dailyAmount;
        temp = dailyAmount * 2;
    }
    console.log(total);
}
fewBillion(days);


// Finds how many days it would take for servant to make "x" amount of dollars
var days;
var desiredAmount = 1.797693134862315E+308;
function fewBillion()
{
    var dailyAmount = 0.01;
    var total = 0;
    var temp = dailyAmount;
    for(var i = 1; i <= days || total <= desiredAmount; i++)
    {
        dailyAmount = temp;
        total = total + dailyAmount;
        temp = dailyAmount * 2;
        days = i;
    }
    console.log(days);
}
fewBillion(desiredAmount);
