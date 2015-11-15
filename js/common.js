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



});