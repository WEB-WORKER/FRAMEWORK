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
        //tabs
		$('.tabs__control-link').on('click', function(e){
			e.preventDefault();

			var tabControls = $(this).closest('.tabs__controls-item'),
			    contentItem = $('.tabs__item'),
			    list = $('.tabs__list'),
				itemPosition = tabControls.index(),				
				thisContentItemHeight;
			
			contentItem.eq(itemPosition)			     
				 .add(tabControls)				 
				 .addClass('active')
				 .siblings()
				 .removeClass('active');
		});

		//accordeon
		$('.accordeon__trigger').on('click', function(e){
			e.preventDefault();

			var link = $(this),				
				item = link.closest('.accordeon__item'),
				list = link.closest('.accordeon__list'),
				links = list.find('.accordeon__trigger'),
				items = list.find('.accordeon__item'),
				content = item.find('.accordeon__inner'),
				otherContent = list.find('.accordeon__inner'),
				duration = 300;

			if (link.hasClass('active')){
				link.removeClass('active');
			}
			
			if(!item.hasClass('active')){
				links.removeClass('active');
				link.addClass('active');
				items.removeClass('active');
				item.addClass('active');

				otherContent.stop(true, true).slideUp(duration);
				content.stop(true, true).slideDown(duration);
			} else {
				content.stop(true, true).slideUp(duration);
				item.removeClass('active');
			}
		});

		$('.accordeon__inner-link').on('click', function(e){
			e.preventDefault();

			var $this = $(this),			    
			    innerContent = $this.siblings(),
			    innerLink = $this;
			    list = $this.closest('.accordeon__list'),
			    innerContents = list.find('.accordeon__inner-content'),
			    otherLinks = list.find('.accordeon__inner-link'),
			    duration = 300;

			    if (innerLink.hasClass('active')){
					innerLink.removeClass('active');
					innerContents.stop(true, true).slideUp(duration).removeClass('active');
				} else {
					otherLinks.removeClass('active');
			    	innerLink.addClass('active');
			    	innerContents.stop(true, true).slideUp(duration).removeClass('active');
			    	innerContent.stop(true, true).slideDown(duration).addClass('active');
				}		    

		});
	
});//end jQuery







    
