/*
 * 
 */

var menuFactory = function (options) {
	
	if (!options) {
		console.warn("Please define options for the menu.");
		options = {
			'buttonArray': [
				{
					text: 'Pornește aventura',
					name: 'startStory',
					action: function(e) {
						if (pageController) {
							pageController.clickFeedback();
							pageController.startStory();
						} else {
							Ti.Api.error("Page controller not initialized.");
						}						
					},
					//backgroundImage: '/appFiles/button/pornestePovestea.png'
				},
				{
					text: 'Citește-mi',
					name: 'readToMe',
					action: function(e) {
						if (pageController) {
							pageController.clickFeedback();
							pageController.startStoryRead();
						} else {
							Ti.Api.error("Page controller not initialized.");
						}
					},
					//backgroundImage: '/appFiles/button/citestemiPovestea.png'
				},
				{
					text: 'Continuă aventura',
					name: 'continueStory',
					action: function(e) {
						if (pageController) {
							pageController.clickFeedback();
							pageController.continueStory();
						} else {
							Ti.Api.error("Page controller not initialized.");
						}
					},
					//backgroundImage: '/appFiles/button/continuaPovestea.png'
				}
			],
			'background': '/appFiles/backgrounds/main_menu.png',
			'animatedObjectsArray': [],
			//'title': '/appFiles/button/titlu.png'
		};
	};
	
	var window = Ti.UI.createWindow({
		backgroundColor: 'black',
		navBarHidden: true,
		fullscreen: true,
		exitOnClose : true,
		backgroundImage: '/appFiles/backgrounds/bckg.jpg',
		backgroundRepeat: true
	});
	
	if(OSNAME != 'android') {
		window.height = pHeight;
		window.width = pWidth;
	}
	
	
	
	if (options.background) {
		
		var imageView = Ti.UI.createImageView({
			image: options.background,
			height: pHeight,
			width: pHeight / 3 * 4,
		});	
		
		var scrollView = Ti.UI.createView({
			height: pHeight,
			width: pHeight / 3 * 4
		});
		
		scrollView.add(imageView);
		window.add(scrollView);
	}
	
	if (options.title) {
		var titleLabel = Ti.UI.createImageView({
			image: options.title,
			top: 30*F,
			width: pHeight / 1.5
		});
		
	} else {
		var titleLabel = Ti.UI.createLabel({
			text: 'Ursul păcălit de vulpe',
			top: 50*F,
			width: pHeight / 3 * 4 * 0.85,
			color: '#900',
		    font: {
				fontFamily: textFont,
				fontSize: 72*F
			},
		    shadowColor: '#fff',
		    shadowOffset: {x:2, y:2},
		    shadowRadius: 3,		  
		    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
		});
	}
	window.add(titleLabel);
	var buttonHolderView = Ti.UI.createView({
		name: 'buttonHolderView',
		width: Ti.UI.FILL,
		top: 330*F,
		layout: 'vertical'
	});
	_.each(options.buttonArray, function(button) {
		if (button.name === 'continueStory' && pageController.bookmarkedPage === null) {
			return;
		}
		var but = Ti.UI.createButton({
			name: button.name,
			title: button.text,
			width: pHeight / 3 * 4 * 0.85,
			height:130*F,
			color: '#900',
		    font: {
				fontFamily: textFont,
				fontSize: 43*F
			},
		    shadowColor: '#fff',
		    shadowOffset: {x:2, y:2},
		    shadowRadius: 3,	
		    backgroundColor: 'transparent',	  
		    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
			//backgroundImage: button.backgroundImage
		});	
		
		but.addEventListener('click', button.action);
		
		buttonHolderView.add(but);
					
	});
	window.add(buttonHolderView);

	window.addEventListener('open', function(e) {
		rate.plus(5);
		Tracker.trackScreen({ path: "Menu"});
	});
	return window;
};

module.exports = menuFactory;