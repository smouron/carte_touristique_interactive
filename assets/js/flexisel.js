/*
* File: flexisel.js
* Author: 9bit Studios
* Copyright 2016, 9bit Studios
* http://www.9bitstudios.com
* Free to use and abuse under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
*/

$(window).load(function() {
	/* Flexisel will adapt responsively as the screen width gets smaller... */
    $("#flexisel1").flexisel();

	/* You can also change the number of items shown depending on the screen width. */
    $("#flexisel2").flexisel({
        visibleItems: 4,
        itemsToScroll: 1,
        animationSpeed: 200,
        infinite: true,
        navigationTargetSelector: null,
        autoPlay: {
            enable: false,
            interval: 5000,
            pauseOnHover: true
        },
        responsiveBreakpoints: { 
            portrait: { 
                changePoint:480,
                visibleItems: 1,
                itemsToScroll: 1
            }, 
            landscape: { 
                changePoint:640,
                visibleItems: 2,
                itemsToScroll: 2
            },
            tablet: { 
                changePoint:768,
                visibleItems: 3,
                itemsToScroll: 3
            }
        },
        loaded: function(object) {
            console.log('Slider loaded...');
        },
        before: function(object){
            console.log('Before transition...');
        },
        after: function(object) {
            console.log('After transition...');
        },
        resize: function(object){
            console.log('After resize...');
        }
    });

	/* Other options include autoplay, number of items to scroll, animation speed when scrolling right and left, initial number of visible items, and more! */    
    $("#flexisel2").flexisel({
        visibleItems: 4,
        itemsToScroll: 1,         
        autoPlay: {
            enable: true,
            interval: 3000,
            pauseOnHover: true
        }        
    });
	
	$("#flexisel3").flexisel({
        visibleItems: 4,
        itemsToScroll: 1,         
        autoPlay: {
            enable: true,
            interval: 3000,
            pauseOnHover: true
        }        
    });

	/* And you can set whether you want the slider to be infinite or not. */    
    $("#flexisel4").flexisel({
        infinite: false     
    });    
    
});