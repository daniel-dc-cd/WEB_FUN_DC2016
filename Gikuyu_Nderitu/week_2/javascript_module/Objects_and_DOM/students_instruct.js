"use strict";

const print_students = function (arr) {
	for(var i = 0; i < arr.length; i++){
		console.log(arr[i].first_name, arr[i].last_name);
	}
}

var students = [
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
];

var users = {
 'Students': [
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
  ],
 'Instructors': [
     {first_name : 'Michael', last_name : 'Choi'},
     {first_name : 'Martin', last_name : 'Puryear'}
  ]
 }

const print_users = function (obj, separator = '-' ) {
	console.log(obj);

	for(var prop in obj){
		console.log(prop);
		for (var j = 0; j < obj[prop].length; j++) {
			console.log((j+1)+ ' - '+obj[prop][j].first_name + ' ' + obj[prop][j].last_name + ' - ',obj[prop][j].first_name.length+obj[prop][j].last_name.length);
		}
	}

}

// print_students(students);
print_users(users);
