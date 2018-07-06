$(document).ready(function(){
     	//menu
		$(".header__nav_ul").before("<a id='pull' class='pull'></a>");

		$(function() {
			var pull 		= $('#pull');
				menu 		= $('.header__nav_ul');
				menuHeight	= menu.height();

			$(pull).on('click', function(e) {				
				e.preventDefault();
				menu.slideToggle();
				pull.toggleClass("pull-active");

			});
			
			$(window).resize(function(){
        		var w = $(window).width();
        		if(w > 320 && menu.is(':hidden')) {
        			menu.removeAttr('style');
        		}
    		});
		});


		

	
});

// 
//end jQuery







    
