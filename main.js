"use strict";

$(document).ready(function() {

	$('.searchBar').click(function() {
		$(this).children('.nav-icon3').toggleClass('open');
		$(this).siblings('.dropDown').slideToggle(150);
	});

   $('.buyNowLink').click(function(e) {
	    e.preventDefault();
	    $('body').animate({
	     	scrollTop: $('#resultsInsert').offset().top - 20
	    }, 1000);
    });

	$('#dropMenu2 > li:first-child').hover(function() {
			if ($('.searchBar').css('display') == 'none') {
					$('.dropDownPermitInfo').addClass('active');
					$(this).css('height', '100px');
			}
		}, function(){
			$('.dropDownPermitInfo').removeClass('active');
			$(this).css('height', 'auto');
	});
});


function dates(time) {
	if(time === 0) return 'now';
	var units =[ {name: 'year', amount: 0}, {name: 'day', amount: 0}, {name: 'hour', amount: 0}, {name: 'minute', amount: 0}, {name: 'second', amount: 0}];
	var timeStr = '';

	while (time > 0) {
		while(time >= 31536000) {
			time -= 31536000;
			units[0].amount++;
		}

		while(time >= 86400) {
			time -= 86400;
			units[1].amount++;
		}

		while(time >= 3600) {
			time -= 3600;
			units[2].amount++;
		}

		while(time >= 60) {
			time -= 60;
			units[3].amount++;
		}

		if(time > 0) {
			time -= 1;
			units[4].amount++;
		}
		
	}
 
   units.forEach(function(e,i) {
	   	var localStr = "";
	   	if(e.amount > 1) e.name += 's';
	    if(e.amount > 0) {
	    	localStr += e.amount + " " + e.name + ", ";
	    }
	    

	    timeStr += localStr;
   });

   	return timeStr.split(",");
}
