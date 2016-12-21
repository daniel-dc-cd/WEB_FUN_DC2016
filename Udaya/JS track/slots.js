function slots(quarters){

    if(quarters>=100){
      var machine = Math.floor(quarters/100);

    var money = Math.floor(((Math.random()*50) +50));
      console.log("you won " +money+ " coins")
      quarters = (quarters-100)+money
  console.log("total coins are " +quarters);
  }
    else if (quarters<100){
      console.log("sorry your quarters are wasted");

    }
  }
slots(150);
