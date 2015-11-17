$(document).ready(function(){

	// -- menu conversion
	var Menu = {
	  
	  el: {
	    ham: $('.burger-menu'),
	    menuTop: $('.menu-top'),
	    menuMiddle: $('.menu-middle'),
	    menuBottom: $('.menu-bottom')
	  },
	  
	  init: function() {
	    Menu.bindUIactions();
	  },
	  
	  bindUIactions: function() {
	    Menu.el.ham
	        .on(
	          'click',
	        function(event) {
	        Menu.activateMenu(event);
	        event.preventDefault();
	      }
	    );
	  },
	  
	  activateMenu: function() {
	    Menu.el.menuTop.toggleClass('menu-top-click');
	    Menu.el.menuMiddle.toggleClass('menu-middle-click');
	    Menu.el.menuBottom.toggleClass('menu-bottom-click'); 
	  }
	};

	Menu.init();

	// toggle mobile menu 
	$('.burger-menu').on('click', function(){
		$('.navigation-mobile').toggleClass('mobile-toggle');
		$('.nav-items').toggleClass('mobile-nav-iems');
		$('body').toggleClass('overflow');
	});


	// -- Header carousel -- 
	$(".full-container").owlCarousel({

		navigation : true, 
		slideSpeed : 500,
		paginationSpeed : 600,
		singleItem: true,

		autoPlay : true,
		loop: true,
		navText: ""
	});



	// -- header container resize chenges -- 
	(function () {
		if ($(window).width() <= 1100){	
			$('.header-container, .services-background').remove(); 
			// $('.navigation').addClass('nav-hidden');

			$('.nav').toggleClass('navigation');
			$('.nav').toggleClass('navigation-mobile');
		}	
	}());


	// -- parallax 1 -- 
	$(window).scroll(function(e){
	  parallax();
	});

	function parallax(){
	  var scrolled = $(window).scrollTop();
	  $('.parallax-1').css('top',-(scrolled*0.2)+'px');
	}



	// -- tabs --
	jQuery(document).ready(function($){
		var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;

		//open team-member bio
		$('.inject').on('click', function(event){
			event.preventDefault();

			$(this).addClass('tab-color').siblings().removeClass('tab-color');
			var selected_member = $(this).data('type');
			$('.tab-el.'+selected_member+'').addClass('appear').siblings().removeClass('appear');
			$('.tab-el.'+selected_member+'').find('.project').addClass('appear');
			$('.tab-el.'+selected_member+'').siblings().find('.appear').removeClass('appear')

			// if($('.tab-el.'+selected_member+'').hasClass('appear'))
			// 	$('.tab-el.'+selected_member+'').find('.project').addClass('appear').siblings().removeClass('appear');
			// 	// $('.tab-el.').find('.project').removeClass('appear');

			
		
			


	});


});	


});