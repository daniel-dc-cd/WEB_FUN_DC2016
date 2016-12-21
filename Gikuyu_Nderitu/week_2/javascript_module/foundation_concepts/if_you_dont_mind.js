'use strict';

let HOUR = 8;
let MINUTE = 50;
let PERIOD = 'AM';

const whats_the_time = function(h,m,p){
	//Normalize parameters for evaluations
	const _period = p.toUpperCase();
	const _hour = Math.floor(h);
	const _minute = Math.floor(m);

	//Validate normalized parameters
	if(!(_period === 'PM' || _period ==='AM')){
		return 'You did not supply a correct period. Please use "PM" or "AM". Supplied: '+ _period+'.\n';
	}

	if(!(_hour >= 1 && _hour <= 12)){
		return 'You did not supply a valid hour. Please use an integer 1-12. Supplied: '+ _hour+'.\n';
	}

	if(!(_minute >= 0 && _minute <= 59)){
		return 'You did not supply a valid minute. Please use an integer 0-59. Supplied: '+ _minute+'.\n';
	}

	//Declare variables that define the time of day
	let spec_hour = "";
	let day_time = "";

	//Evaluate the specific part of the hour that it is
	//Generalized times
	if(_minute> 0 && _minute < 30) spec_hour = _minute + ' minute(s) after ' + _hour;
	else if (_minute > 30) spec_hour = (60-_minute) + ' minute(s) till ' + (1+_hour);

	//Special cases
	switch (_minute) {
		case 15:
			spec_hour = 'quarter after ' + _hour;
			break;
		case 30:
			spec_hour = 'half past ' + _hour;
			break;
		case 45:
			spec_hour = 'quarter till ' + (1+_hour);
			break;
	}

	//Evaluate the time of day (ie. afternoon, morning, evening, noon etc.)
	if(_period === 'AM'){
		day_time = 'in the morning.';
	}else{
		switch(h){
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
				day_time = 'in the afternoon.';
				break;
			case 6:
			case 7:
			case 8:
				day_time = 'in the evening.';
				break;
			case 9:
			case 10:
			case 11:
				day_time = 'at night.';
				break;
		}
	}

	//The Specialist of cases
	if(_hour === 12 && _minute === 0 && _period === 'AM'){
		spec_hour = 12;
		day_time = 'at midnight!';
	}else if (_hour === 12 && _minute === 0 && _period === 'PM') {
		spec_hour = 12;
		day_time = 'at noon day!';
	}

	//Return the time!
	return "The time is " + spec_hour+" "+ day_time+"\n";
}


//Test function
	//These should be successful cases
			//Midnight through morning tessts
console.log(whats_the_time(12, 0,'am'));
console.log(whats_the_time(12, 1,'am'));
console.log(whats_the_time(8, 15, 'am'));
console.log(whats_the_time(10, 30, 'am'));
console.log(whats_the_time(9, 45, 'am'));
console.log(whats_the_time(11, 59, 'am'));
console.log(whats_the_time(5, 11, 'am'));
console.log(whats_the_time(3, 33, 'am'));
			//Noon through night Tests
console.log(whats_the_time(12, 0, 'pm'));
console.log(whats_the_time(12, 1, 'pm'));
console.log(whats_the_time(8, 15, 'pm'));
console.log(whats_the_time(10, 46, 'pm'));
	//These should produce failures
			//Period Test
console.log(whats_the_time(8,15,'zm'));
			//Hour Test
console.log(whats_the_time(-5,15,'am'));
console.log(whats_the_time(18,15,'am'));
			//Minute Test
console.log(whats_the_time(8,-5,'am'));
console.log(whats_the_time(8,60,'am'));
