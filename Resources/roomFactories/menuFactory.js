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
					}
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
					}
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
					}
				}
			],
			'background': '/appFiles/backgrounds/main_background.png',
			'animatedObjectsArray': [],
			'title': 'Bambi, printul padurilor!'
		};
	};
	
	var window = Ti.UI.createWindow({
		height: Ti.UI.FILL,
		width: Ti.UI.FILL,
		backgroundColor: 'black',
		orientationModes: [Titanium.UI.LANDSCAPE_LEFT,  Titanium.UI.LANDSCAPE_RIGHT],
		navBarHidden: true,
		fullscreen: true
	});
	
	if (options.background) {
		
		var imageView = Ti.UI.createImageView({
			image: options.background,
			width: Ti.UI.FILL,
			height: Ti.UI.FILL
		});	
		
		var scrollView = Ti.UI.createView({
			width: Ti.UI.FILL,
			height: Ti.UI.FILL
		});
		
		scrollView.add(imageView);
		window.add(scrollView);
	}
	
	if (options.title) {
		var titleLabel = Ti.UI.createLabel({
			text: options.title,
			textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
			color: 'white',
			font: {
				fontSize: 64
			},
			top: 60,
			width: Ti.UI.FILL
		});
		window.add(titleLabel);
	}
	var buttonHolderView = Ti.UI.createView({
		name: 'buttonHolderView',
		width: Ti.UI.FILL,
		height: screenSize.platformHeight / 2,
		top: 160,
		layout: 'vertical'
	});
	_.each(options.buttonArray, function(button) {
		var butHolder = Ti.UI.createView({
			name: button.name,
			width: 354,
			top:10,
			height:116,			
			backgroundImage: '/appFiles/button/buton.png'
		});
		var but = Ti.UI.createButton({
			
			left: 120,
			width: 234,
			title: button.text,
			color: 'red',
			font: {
				fontSize: 24
			}
		});	
		
		but.addEventListener('click', button.action);
		
		if (butHolder.name === 'continueStory' && !this.bookmarkedPage) {
			console.log("Not adding continue button. No page bookmarked");
			butHolder.visible = false;
		} else {
			butHolder.visible = true;
		}
		butHolder.add(but);
		buttonHolderView.add(butHolder);
					
	});
	window.add(buttonHolderView);
	
	
	return window;
};

module.exports = menuFactory;