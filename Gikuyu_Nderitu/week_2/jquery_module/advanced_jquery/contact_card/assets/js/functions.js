"use strict";

const addCard = function (arr) {
	let fName = arr[0].value
	let lName = arr[1].value
	let description = arr[2].value
	let url = "https://randomuser.me/api/?gender="+arr[3].value

	console.log(arr);



	$.ajax({
		url: url,
		dataType: 'json',
		success: function(data) {
			let src = data.results[0].picture.large

			console.log(data);


			$('#output').prepend(()=>{
				let content = '<li class="contact-card"><h3>'+fName+'</h3><h3>'+lName+'</h3><img class="contact-img" src="'+src+'"><p class="hidden-description">'+description+'</p></li>';

				return content;
			})
		}
	})
}

$(document).ready(function(){
	$(document).on("click","img",function(){
		console.log("hi");
		$(this).siblings('p').toggleClass('active');
	})

	$(document).on("click",".hidden-description",function () {
		$(this).removeClass('active');
	})

	$("#form-input").submit(function(){
		addCard($(this).serializeArray());

		return false
	})
})
