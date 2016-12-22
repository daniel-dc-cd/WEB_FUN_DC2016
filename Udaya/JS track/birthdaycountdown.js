function birthdaycountdown(num){
for(var i = num ; i>=0; i--){
  if(i>30){
    console.log(+i+ "days until my birthday. Such a long time... :(");
  }
  else if(i<30 && i>5){
    console.log(+i+ "days until my birthday. less than a month..:)");
  }
 else if(i<=5 && i>0){
   console.log(+i+ "DAYS UNTIL MY BIRTHDAY!!!");
 }
  else{
    console.log("!!!@@**##!!:::):))))))))))Finally the day came!!!it's ur birthday dude, Have a Blast!!!@@**##!!:::):))))))))))");
  }
}
}
birthdaycountdown(40)
