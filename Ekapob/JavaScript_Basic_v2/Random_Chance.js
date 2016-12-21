<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
        <script>
            "use strict";
            var quarters = 10;
            var satisfied = 200;
            function randomChance(coins, leave)
            {
                while(coins > 0 && coins < leave)
                {
                    coins = --coins;
                    if(((Math.floor(Math.random() * 100)) + 1) === 1)
                    {
                        coins = coins + (Math.floor((Math.random() * 50) + 1) + 50);
                    }
                    console.log(coins);
                }
                return(coins);
            }
            randomChance(quarters, satisfied);
        </script>
    </head>
    <body>

    </body>
</html>
