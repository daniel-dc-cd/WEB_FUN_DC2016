/*
  embed codes for weather backgrounds
  Rain - <iframe width="1147" height="645" src="https://www.youtube.com/embed/6eZcEwRBBfo?autoplay=0&controls=0&loop=0&showinfo=0&rel=0" frameborder="0" allowfullscreen></iframe>
  Snow - <iframe width="1147" height="645" src="https://www.youtube.com/embed/hFjOiAkN8ew?autoplay=0&controls=0&loop=0&showinfo=0&rel=0" frameborder="0" allowfullscreen></iframe>
  Sunny - <iframe width="1147" height="645" src="https://www.youtube.com/embed/gua-KLb4ZxI?autoplay=0&controls=0&loop=0&showinfo=0&rel=0" frameborder="0" allowfullscreen></iframe> 13 - 17 seconds
  Cloudy - <iframe width="1147" height="645" src="https://www.youtube.com/embed/6dr1v80z3bo?autoplay=0&controls=0&loop=0&showinfo=0&rel=0" frameborder="0" allowfullscreen></iframe>
*/

$(".slide-container").click(function(){
	$(".slide-button").toggleClass("celsius");
	$(".slide-button").toggleClass("faren");
	convertTemp($("#value").data("temperature"));
});


function success(position){
	var lati = position.coords.latitude,
		long = position.coords.longitude;

  var apikey = "aee920b7c6584f6d90294cda5c08ec2f";
  var url = "http://api.openweathermap.org/data/2.5/weather";
  getData(getRequest(url, lati, long, apikey));
}

function getRequest(url, lat, long, apikey){
  return url+"?lat="+lat+"&lon="+long+"&APPID="+apikey;
}

function getData(request){
  $.getJSON(request,appendData);
}

function appendData(data){
	console.log(data.weather[0]);
	var weathDesc = data.weather[0].description;
	var weathId = data.weather[0].id;
	var apiTemp = data.main.temp;
	var valField = $("#value");

	var convertAPITemp = function(){
		var slider = $("#slide-button");

		var val = apiTemp;

		if(slider.hasClass("celsius")){
		  apiTemp = val - 273.15;

		}else{
		  apiTemp = val * (9/5) - 459.67;
		}
	};

	convertAPITemp();

	setMedia(weathId);
	valField.html(Math.round(apiTemp*100)/100+"ºF")
	valField.data("temperature",apiTemp);

	$("#descrip").fadeTo(700,.2,$("#descrip").text(weathDesc)).fadeIn(400);
	$("#value").text(apiTemp+"º F");
	$("#p-icon").fadeTo(700,.2,setIcon(data.weather[0])).fadeIn(400);
}

function convertTemp(val){
	var slider = $(".slide-button");

	if(slider.hasClass("celsius")){
		val = (val-32)*(5/9);
		$("#value").text(Math.round(val*100)/100+"º C");
		$("#value").data("temperature",val);
	}else if(slider.hasClass("faren")){
		val = val*(9/5)+32;

		$("#value").text(Math.round(val*100)/100+"º F");
		$("#value").data("temperature",val);
	}
}

function setMedia(data){
	//Array containing the Video src urls
	var vidArr = ["https://www.youtube.com/embed/6eZcEwRBBfo?autoplay=1&controls=0&loop=0&showinfo=0&rel=0",
	"https://www.youtube.com/embed/hFjOiAkN8ew?autoplay=1&controls=0&loop=0&showinfo=0&rel=0",
	"https://www.youtube.com/embed/gua-KLb4ZxI?autoplay=1&controls=0&loop=0&showinfo=0&rel=0",
	"https://www.youtube.com/embed/6dr1v80z3bo?autoplay=1&controls=0&loop=0&showinfo=0&rel=0"];
	var iconString = "wi wi-";
	var curTime = new Date();
	//Elments
	var videoElement = $(".splash-video");
	var iconElement = $("#p-icon");

	//Function that will evaluate what the final portion of the class suffix will be.
	var evalID=function(value){
	value = value.toString();
	var arr = value.split('');
	var evaluate = arr[0];

	switch(evaluate){
		case "2":
		case "3":
		case "5":
			videoElement.attr("src",vidArr[0]);
			return "rain";
		case "6":
			videoElement.attr("src",vidArr[1]);
			return "snow";
		case "8":
			if(value === "800"){
			  videoElement.attr("src",vidArr[2]);
			  return "sunny";
			}else{
			  videoElement.attr("src",vidArr[3]);
			  return "cloudy";
			}
	}
  };



  //Determine to set second weather icon value
  if(curTime.getHours()>19 || curTime.getHours()<6){
	iconString += "night-";
	if(data!==800){
		iconString+="alt-";
	}
	}else{
		iconString +="day-";
	}


	//Complete class string
	iconString +=evalID(data);
	iconElement.removeClass();
	iconElement.addClass(iconString);
}

//Load Page
$(document).ready(function(){
	setMedia(800);
	$("#value").text($("#value").data("temperature"));
});
