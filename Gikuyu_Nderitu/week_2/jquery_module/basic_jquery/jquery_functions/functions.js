$(document).ready(function(){
	var sectionList = ['#mouse-mods','#surface-mods','#data-mods','#visibility-mods','#slider-mods','#reveals'];
	var listIndex = 0;
	var currentContext = sectionList[listIndex];
	var currentSection = $('section.active');

	//Initialize html data
	$('#data-mods').data('later-store','You never decided to store datat before, so I stored some for you!')

	//Set initial toggle anchors
	$('#toggle-right').attr("href", sectionList[listIndex+1]);
	$('#toggle-left').css("display", "none");

	$('.page-toggle').click(function(){
		// console.log($(this).attr("id"));
		var hitToggle = $(this);
		if(hitToggle.attr("id") === 'toggle-right'){
			currentContext = sectionList[++listIndex];
			hitToggle.attr("href", sectionList[listIndex+1]);
		}else{
			currentContext = sectionList[--listIndex];
			hitToggle.attr("href", sectionList[listIndex-1]);
		}

		if(listIndex === 0){
			$('#toggle-left').css("display", "none");
		}else if(listIndex === sectionList.length-1){
			$('#toggle-right').css("display", "none");
		}else{
			$('.page-toggle').css("display", "flex");
		}
``
		currentSection.toggleClass('active');
		currentSection = $(currentContext);
		currentSection.toggleClass('active');
	});

	//Mouse functions
	$('.focus').focus(function(){
		$(this).parent().toggleClass('green');
	});

	$('.click').click(function(){
		$(this).parent().toggleClass('yellow');
	});

	$('.add-class').hover(function(){
		$(this).parent().toggleClass('red');
	});

	//Surface Level Functions
	$('.html-override').click(function(){
		console.log("clicked");
		$(this).siblings('div').html("<h1>WABAAM! IT'S ALL GONE SUCKAAAS!</h1>")
	})

	$('.before').click(function(){
		console.log("clicked");
		$(this).siblings('div').children('p').before("<p>Added some killer text before paragraph!</p>");
	})

	$('.after').click(function(){
		console.log("after clicked");
		$(this).siblings('div').children('p').after("<p>Added some killer text after paragraph!</p>");
	})

	$('.append').click(function(){
		console.log("append clicked");
		$(this).siblings('div').children('p').append("<p>Added some killer text TO paragraph!</p>");
	})

	//Data functions
	$('.data-store').click(function(){
		var data = $('textarea').val();
		$(this).parents('section').data("later-store", data);
		console.log($(this).parents('section').data("later-store"));
	})

	$('.val').click(function(){
		var value = $('textarea').val();
		console.log(value);
		$(this).siblings('div').children('div p').append("<p>"+value+"</p>");
	})

	$('.attr').click(function(){
		var id = $('#container').attr("id")
		$(this).siblings('div').children('p').html("<p>"+id+"</p>");
	})


	//Visivility Functions
	$('.hide').click(function(){
		$(this).parent().hide();
	})

	$('.show').click(function(){
		$(this).parent().siblings('article').show();
	})

	$('.fadeout').click(function(){
		$(this).parent().fadeOut();
	})

	$('.fadein').click(function(){
		$(this).parent().siblings('article').fadeIn(2000);
	})

	//Slider Functions
	$('.slideup').click(function(){
		$(this).parent().slideUp();
	})

	$('.slidedown').click(function(){
		$(this).parent().siblings('article').slideDown();
	})

	$('.slidetoggle').click(function(){
		$(this).siblings('div').slideToggle();
	})

	//Reveals
	$('.later').click(function(){
		var display = $('#data-mods').data('later-store');
		$(this).siblings('div').children('p').append("<p>"+display+"</p>");
	})
})
