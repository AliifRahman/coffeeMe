/*
Author: Dot Themes
*/
(function($) {
    "use strict";

	
	// page scroll//
  
	smoothScroll.init();

    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
	
	
    $(window).scroll(function(event) {
        Scroll();
    });

   	$("a[data-gal^='prettyPhoto']").prettyPhoto({
		social_tools: false
	}); 	

    $(document).ready(function() {
		
	/* ==========  START GOOGLE MAP ========== */
	google.maps.event.addDomListener(window, 'load', init);

	function init() {
		var myLatLng = new google.maps.LatLng(37.902602, -122.063546);

		var mapOptions = {
			zoom: 15,
			center: myLatLng,
			disableDefaultUI: true,
			scrollwheel: false,
			navigationControl: true,
			mapTypeControl: false,
			scaleControl: false,
			draggable: true,

			styles: [{
				featureType: 'water',
				stylers: [{
					color: '#3A2313'
				}, {
					visibility: 'on'
				}]
			}, {
				featureType: 'landscape',
				stylers: [{
					color: '#f2f2f2'
				}]
			}, {
				featureType: 'road',
				stylers: [{
					saturation: -100
				}, {
					lightness: 45
				}]
			}, {
				featureType: 'road.highway',
				stylers: [{
					visibility: 'simplified'
				}]
			}, {
				featureType: 'road.arterial',
				elementType: 'labels.icon',
				stylers: [{
					visibility: 'off'
				}]
			}, {
				featureType: 'administrative',
				elementType: 'labels.text.fill',
				stylers: [{
					color: '#444444'
				}]
			}, {
				featureType: 'transit',
				stylers: [{
					visibility: 'off'
				}]
			}, {
				featureType: 'poi',
				stylers: [{
					visibility: 'off'
				}]
			}]
		};
		var mapElement = document.getElementById('map-canvas');
		var map = new google.maps.Map(mapElement, mapOptions);
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(37.902602, -122.063546),
			map: map,
			icon: 'images/map-marker.png',
		});
	}
        // ========== END GOOGLE MAP ========== //
    });
})(jQuery);