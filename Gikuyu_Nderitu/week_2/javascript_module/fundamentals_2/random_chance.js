'use strict';

const randomChance = function(coins, leave){
	//Create values used by randomChance
	let _won = false; //Evaluate if player has won or not
	const _msg = ' coins won.'
	const _WINNING_NUM = Math.trunc(Math.random()*100+1); //Randomly Generate Lucky number for this machine
	/*
	* If the user hits the lucky number, function will return the number of coins won, else, it will return false
	*/
	const _play_a_game = function(){
		if (Math.trunc(Math.random()*100+1) === _WINNING_NUM) {
			return Math.trunc(Math.random()*51+50);;
		}
		return false;
	}

	while(coins > 0){
		_won = _play_a_game();
		coins--;
		if(_won){
			coins += _won;
		}

		if(leave && coins >= leave){
			return coins + _msg;
		}else if (!leave && _won) {
			return coins + _msg;
		}
	}
	return 0 + _msg;
}


console.log(randomChance(50));
