$(document).ready(function(){
	// init scroll magic
	var controller = new ScrollMagic.Controller();
        
        // pin the into
        var pinIntoScene = new ScrollMagic.Scene({
            triggerElement: '#intro',
            triggerHook: 0,
            duration: '30%'      
        })
        .setPin('#intro', {pushFollowers: false})
        .addTo(controller);
        
        // parallax scene

        var parallaxTL = new TimelineMax();
       	parallaxTL
       		.from('.content-wrapper', 0.4, {autoAlpha: 0, ease:Power0.easeNone}, 0.4)
       		.from('.bcg', 2, {y: '-50%', ease:Power0.easeNone}, 0)
       		;

        var slideParallaxScene = new ScrollMagic.Scene({
            triggerElement: '.bcg-parallax',
            triggerHook: 1,
            duration: '100%'  
        })
        .setTween(parallaxTL)
        .addTo(controller);


	// loop throught each project
	$('.project').each(function(){
        
	 // build a scene
        var ourScene = new ScrollMagic.Scene({
	    triggerElement: this.children[0],
	    duration: '90%',
	    triggerHook: 0.9
	    // reverse: false
	    // 0 - 1 page hight trigger fade scene
	})
	.setClassToggle(this, 'fade-in')
	.addIndicators({
		name: 'fade scene',
		colorTrigger: 'black',
		colorStart: '#75C695',
		colorEnd: 'pink'
		// indent: 200,
	})
	.addTo(controller);
    });
});







// create a scene 
// new ScrollMagic.Scene({
//         duration: 100,	// the scene should last for a scroll distance of 100px 
//         offset: 50		// start this scene after scrolling for 50px 
//     })
//     .setPin("#my-sticky-element") // pins the element for the the scene's duration 
//     .addTo(controller); // assign the scene to the controller 
