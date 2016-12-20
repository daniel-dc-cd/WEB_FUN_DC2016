var hour = 7;
var min = 10;
var period = "PM"
var msg = "";
var msg1 = "";
if(min>30 ){
  hour = hour+1;
  msg = "almost";
if(period == "AM"){
  msg1 = "morning";
}
else msg1 = "evening";
}
else{
  msg ="just after";
if(period == "AM"){
  msg1 = "morning";
}
else msg1 = "evening";
}

console.log("It's " +msg+ " " +hour+ " in the " +msg1);
########################

var hour = 12;
var min = 10;
var period = "PM"
var msg = "";
var msg1 = "";
          if(min>30 ){
          hour = hour+1;
            msg = "almost";
          if(period == "AM" ){
            msg1 = "morning";
          }
          else if(period = "PM" && hour ==12){
            msg1 = "noon";
             }
            if(period = "PM" && hour<7){
              msg1 = "afternoon";
            }
            if(period ="PM" && hour>6){
              msg1 = "night";
            }
            else{
              msg1 = "midnight"
            }

            }

          else{
            msg ="just after";
            if(period == "AM" ){
              msg1 = "morning";
            }
            else if(period = "PM" && hour ==12){
              msg1 = "noon";
               }
              if(period = "PM" && hour<7){
                msg1 = "afternoon";
              }
              if(period ="PM" && hour>6){
                msg1 = "night";
              }
              else{
                msg1 = "midnight"
              }
          }

          console.log("It's " +msg+ " " +hour+ " in the " +msg1);
