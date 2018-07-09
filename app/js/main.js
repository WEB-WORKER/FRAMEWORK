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
        //accordion
        $('.accordion__desc-minhead.active').next().show();
		$('.accordion__desc-minhead').click(function () {
		var
			minhead = $('.accordion__desc-minhead'),
			desc = $('.accordion__desc-minhead').next();
		
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$(this).parent().removeClass('parent_active');
			desc.slideUp();
		} 
		else { 
			minhead.removeClass('active');
			minhead.parent().removeClass('parent_active');
			desc.slideUp();
			$(this).addClass('active').next().slideDown();
			$(this).parent().addClass('parent_active');
		}
		});

		//tabs
		$('.tabs__control-link').on('click', function(e){
			e.preventDefault();

			var item = $(this).closest('.tabs__controls-item'),
			    contentItem = $('.tabs__item'),
				itemPosition = item.index();
			
			contentItem.eq(itemPosition)
				 .add(item)				 
				 .addClass('active')
				 .siblings()
				 .removeClass('active');
		    
		    

			// item.addClass('active')
			// 	.siblings()
			// 	.removeClass('active');


            // Метод № 2
			// item.addClass('active')
			// 	.siblings()
			// 	.removeClass('active');
			// 	var tab = $(this).attr('href');
			// 	console.log(tab);
			// 	var nottab = $('.tabs__item').siblings();
			// 	nottab.css({'display': 'none'});
			// 	$(tab).fadeIn(400);
		});



	
});//end jQuery







    
