$(document).ready(function(){
	$('img').click(function(){
		var ele = $(this);
		var currentSrc = ele.attr("src");
		var currentAlt = ele.attr("alt");
		ele.attr({
			src: ele.data("altsrc"),
			alt: ele.data("alttxt")
		});
		ele.data({
			altsrc: currentSrc,
			alttxt: currentAlt
		})
	})
})
