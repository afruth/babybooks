/*
 * 
 */

var menuFactory = function (options) {
	
	if (!options) {
		console.warn("Please define options for the menu.");
		options = {
			'buttonArray': [
				{
					text: 'Porneste aventura',
					name: 'startStory',
					action: function(e) {
						if (pageController) {
							pageController.clickFeedback();
							pageController.startStory();
						} else {
							Ti.Api.error("Page controller not initialized.");
						}						
					},
					backgroundImage: '/appFiles/button/pornestePovestea.png'
				},
				{
					text: 'Citeste-mi',
					name: 'readToMe',
					action: function(e) {
						if (pageController) {
							pageController.clickFeedback();
							pageController.startStoryRead();
						} else {
							Ti.Api.error("Page controller not initialized.");
						}
					},
					backgroundImage: '/appFiles/button/citestemiPovestea.png'
				},
				{
					text: 'Continua aventura',
					name: 'continueStory',
					action: function(e) {
						if (pageController) {
							pageController.clickFeedback();
							pageController.continueStory();
						} else {
							Ti.Api.error("Page controller not initialized.");
						}
					},
					backgroundImage: '/appFiles/button/continuaPovestea.png'
				}
			],
			'background': '/appFiles/backgrounds/main_menu.png',
			'animatedObjectsArray': [],
			'title': '/appFiles/button/titlu.png'
		};
	};
	
	var window = Ti.UI.createWindow({
		height: Ti.UI.FILL,
		width: Ti.UI.FILL,
		backgroundColor: 'black',
		orientationModes: [Titanium.UI.LANDSCAPE_LEFT,  Titanium.UI.LANDSCAPE_RIGHT],
		navBarHidden: true,
		fullscreen: true
		//backgroundImage: '/appFiles/backgrounds/background-noise.png'
	});
	
	
	if (options.background) {
		
		var imageView = Ti.UI.createImageView({
			image: options.background,
			height: screenSize.platformHeight,
			width: screenSize.platformHeight / 3 * 4
		});	
		
		var scrollView = Ti.UI.createView({
			height: screenSize.platformHeight,
			width: screenSize.platformHeight / 3 * 4
		});
		
		scrollView.add(imageView);
		window.add(scrollView);
	}
	
	if (options.title) {
		var titleLabel = Ti.UI.createImageView({
			image: options.title,
			top: 30*F,
			width: screenSize.platformHeight / 1.5
		});
		window.add(titleLabel);
	}
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
			width: 350*F,
			height:130*F,
			color: 'red',
			font: {
				fontSize: 24*F
			},
			backgroundImage: button.backgroundImage
		});	
		
		but.addEventListener('click', button.action);
		
		buttonHolderView.add(but);
					
	});
	window.add(buttonHolderView);
	
	
	window.addEventListener('open', function(e) {
		Tracker.trackScreen({ path: "Menu"});
	});
	
	return window;
};

module.exports = menuFactory;