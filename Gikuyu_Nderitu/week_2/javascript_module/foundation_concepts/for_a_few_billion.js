'use strict';
let days = 30;
const PENNY = .01;
let cash = PENNY;

console.log('Accrual after 30 days.');
for(let i = 1;i<=days;i++){
	console.log(i, cash);
	cash *= 2;
}

console.log(cash+'\n\n\n\n\n');

console.log('Time to accrue $10,000');
cash = PENNY;
days = 0
while(cash < 10000){
	days++;
	cash*=2;
}
console.log(days+'\n\n\n\n\n');


console.log('Time to accrue $1,000,000,000');
cash = PENNY;
days = 1
while(cash < 1000000000){
	days++;
	cash*=2;
}
console.log(days+'\n\n\n\n\n');



console.log('Time to accrue Infinity monies');
cash = PENNY;
days = 0
while(cash < Infinity){
	days++;
	cash*=2;
}
console.log(days+'\n'+cash+'\n\n\n\n');
