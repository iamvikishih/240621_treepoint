$('.aaa-01').magnificPopup({
	items: {
		src: '#aaa-01',
		type: 'inline'
	},
	mainClass: 'mfp-fade',
	removalDelay: 300,
	midClick: true
});

	

// scroll Animation	
$(window).scroll(function (event) {
	var scrollTop = $(window).scrollTop() ;
	if(scrollTop > $(".main_description").offset().top - 800){
		$(".main_description").addClass('fade_in')
	}else{
		$(".main_description").removeClass('fade_in')
	}
		
});