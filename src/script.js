$(document).ready(function(){
	// init scroll magic
	var controller = new ScrollMagic.Controller();

	// build a scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: '#project01',
		duration: 400
	})
	.setClassToggle('#project01', 'fade-in')
	.addIndicators({
		name: 'fade scene',
		colorTrigger: 'black',
		indent: 200,
		colorStart: '#75C695'
	})
	.addTo(controller);
});

 
// create a scene 
// new ScrollMagic.Scene({
//         duration: 100,	// the scene should last for a scroll distance of 100px 
//         offset: 50		// start this scene after scrolling for 50px 
//     })
//     .setPin("#my-sticky-element") // pins the element for the the scene's duration 
//     .addTo(controller); // assign the scene to the controller 