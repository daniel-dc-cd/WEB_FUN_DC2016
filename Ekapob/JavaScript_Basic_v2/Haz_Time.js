// Ekapob Ukritnukun
// ThaiGQ@gmail.com

var hour = 7;
var minute = 39;
var period = "pm"
var tempHour = hour;
var divHour;
var divDay;
function askTime()
{
    if(minute === 0 || minute === 30)
    {
        if(minute === 0)
        {
            divHour = "exactly";
        }
        else
        {
            divHour = "half past";
        }
    }
    else if(minute < 30)
        {
            if(minute === 5)
                {
                    divHour = "5 after";
                }
                else if(minute === 15)
                    {
                        divHour = "quarter past";
                    }
                    else
                    {
                        divHour = "just after";
                    }
        }
        else if(minute > 30)
        {
            if(minute === 55)
            {
                divHour = "5 til";
                if(hour < 12)
                {
                    tempHour = ++hour;
                }
                else
                {
                    tempHour = 1;
                }
            }
            else if(minute === 45)
                {
                divHour = "quarter til";
                if(hour < 12)
                {
                    tempHour = ++hour;
                }
                else
                {
                    tempHour = 1;
                }
                }
                else
                {
                    divHour = "almost";
                    if(hour < 12)
                    {
                        tempHour = ++hour;
                    }
                    else
                    {
                        tempHour = 1;
                    }
                }
        }
    if(hour === 12 && minute === 0)
    {
        if(period === "am")
        {
            console.log("It's midgnight! Go to bed, you weirdo!");
        }
        else
        {
            console.log("It's noon. Can't you see I'm eating lunch?!");
        }
    }
    else
        {
            if(period === "am")
            {
                divDay = "in the morning.";
            }
            else if(hour < 5)
                {
                    divDay = "in the afternoon.";
                }
                else if (hour < 9)
                    {
                        divDay = "in the evening.";
                    }
                    else
                    {
                        divDay = "at night.";
                    }
        console.log("Certainly! It's", divHour, tempHour, divDay);
    }
}

askTime(hour, minute, period);
