// Ekapob Ukritnukun
// ThaiGQ@gmail.com

var daysLeft = 2;
function myBirthday()
{
    for(var i = daysLeft; i >= 0; i--)
    {
        if(i >= 30)
        {
            console.log(daysLeft, "until my birthday. So loooooonnnnnnggggggg... T_T");
        }
        else if (i != 0)
        {
            console.log(daysLeft, "until my birthday. Less than month left, baby! ^^");
        }
            else
            {
                console.log("Go me! It's my birthday! We're going to party like it's my birthday!");
            }
    }
}
myBirthday(daysLeft);
