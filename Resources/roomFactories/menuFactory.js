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
						console.log(e);
						if (pageController) {
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
						console.log(e);
						if (pageController) {
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
						console.log(e);
						if (pageController) {
							pageController.continueStory();
						} else {
							Ti.Api.error("Page controller not initialized.");
						}
					},
					backgroundImage: '/appFiles/button/continuaPovestea.png'
				}
			],
			'background': '/appFiles/backgrounds/main_background.png',
			'animatedObjectsArray': [],
			'title': '/appFiles/button/bambi.png'
		};
	};
	
	var window = Ti.UI.createWindow({
		height: Ti.UI.FILL,
		width: Ti.UI.FILL,
		backgroundColor: 'black',
		orientationModes: [Titanium.UI.LANDSCAPE_LEFT,  Titanium.UI.LANDSCAPE_RIGHT],
		navBarHidden: true,
		fullscreen: true,
		backgroundImage: '/appFiles/backgrounds/background-noise.png'
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
			top: 60*F,
			width: screenSize.platformHeight / 3 * 4 - 30
		});
		window.add(titleLabel);
	}
	var buttonHolderView = Ti.UI.createView({
		name: 'buttonHolderView',
		width: Ti.UI.FILL,
		top: 160*F,
		layout: 'vertical'
	});
	_.each(options.buttonArray, function(button) {
		var butHolder = Ti.UI.createView({
			
			top:10*F				
		});
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
		
		if (butHolder.name === 'continueStory' && !this.bookmarkedPage) {
			console.log("Not adding continue button. No page bookmarked");
			butHolder.visible = false;
		} else {
			butHolder.visible = true;
		}
		butHolder.add(but);
		buttonHolderView.add(but);
					
	});
	window.add(buttonHolderView);
	
	
	return window;
};

module.exports = menuFactory;