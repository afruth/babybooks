/*
 * 
 */
var TextObject = require('/objectFactories/textObjectFactory');
var SoundObject = require('/objectFactories/audioObjectFactory');
var AnimatedObject = require('/objectFactories/animatedObjectFactory');

var roomFactory = function (options) {
	
	if (!options) {
		console.warn("Please define options for the page.");
		options = {
					title: 'Default room',
					background: '/appFiles/backgrounds/room0.jpg',
					text: 'Lorem ipsum dolor sit amet. Equalidiscia nepitomia adeum tedeum buf. Lorem ipsum dolor sit amet. Equalidiscia nepitomia adeum tedeum buf. Lorem ipsum dolor sit amet. Equalidiscia nepitomia adeum tedeum buf.',
					audio: '/appFiles/audio/room1.mp3'
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
	
	window.openRight = function (animation) {
		
	};
	
	window.openLeft = function (animation) {
		
	};
	
	window.closeRight = function (animation) {
		
	};
	
	window.closeLeft = function (animation) {
		
	};
	
	
	
	if (options.background) {
		
		var imageView = Ti.UI.createImageView({
			image: options.background,
			height: screenSize.platformHeight,
			width: screenSize.platformHeight / 3 * 4,
			touchEnabled: false
		});	
		
		var scrollView = Ti.UI.createView({
			height: screenSize.platformHeight,
			width: screenSize.platformHeight / 3 * 4,
			touchEnabled: false
		});
		
		scrollView.add(imageView);
		window.add(scrollView);
	}
	
	//building the next and previous buttons
	var buttonHolder = Ti.UI.createView({
		name: 'pageButtonHolder',
		width: Ti.UI.FILL,
		height: 130*F,
		top:5*F
	});
	
	var buttonLeftHolder = Ti.UI.createView({
		name: 'pageButtonLeftHolder',
		top: 15*F,
		right:5*F,
		left: 133*F + 120*F + 10*F,
		height:Ti.UI.SIZE,
		width: Ti.UI.SIZE,
		layout: 'horizontal'
	});
	
	var buttonBack = Ti.UI.createButton({
		readmeMode: 'off',
		left:10*F,
		backgroundImage: '/appFiles/button/buttonLeftSlice.png',
		backgroundSelectedImage: '/appFiles/button/buttonLeftDownSlice.png',
		height: 120*F,
		width:123*F,
		top:10*F
	});
	
	var buttonForward = Ti.UI.createButton({
		readmeMode: 'off',
		right:10*F,
		backgroundImage: '/appFiles/button/buttonRightSlice.png',
		backgroundSelectedImage: '/appFiles/button/buttonRightDownSlice.png',
		height: 120*F,
		width:123*F,
		top:10*F
	});
	
	var buttonShowHideMenu = Ti.UI.createButton({
		width: 120*F,
		height: 120*F,
		left:135*F,
		top: 15*F,
		backgroundImage: '/appFiles/button/showHideOnSlice.png' 
	});
	
	var buttonShowHideText = Ti.UI.createButton({
		readmeMode: 'off',
		backgroundImage: '/appFiles/button/textButtonSlice.png',
		width: 120*F,
		height: 120*F
	});
	
	window.getTextButton = function() {
		return buttonShowHideText;
	};
	buttonShowHideText.addEventListener('click', function (e) {
		pageController.clickFeedback();
		pageController.showHideText();
	});
	
	var buttonStartPauseAudio = Ti.UI.createButton({
		readmeMode: 'off',
		backgroundImage: '/appFiles/button/playButtonSlice.png',
		width: 120*F,
		height: 120*F
	});
	
	window.getPlayPauseButton = function() {
		return buttonStartPauseAudio;
	};
	
	buttonStartPauseAudio.addEventListener('click', function (e) {
		pageController.clickFeedback();
		pageController.startPauseAudio();
	});
	
	var buttonRestartAudio = Ti.UI.createButton({
		readmeMode: 'off',
		backgroundImage: '/appFiles/button/restartButtonSlice.png',
		width: 120*F,
		height: 120*F
	});
	
	
	buttonRestartAudio.addEventListener('click', function (e) {
		pageController.clickFeedback();
		pageController.restartAudio();
	});
	
	var buttonBackToMenu = Ti.UI.createButton({
		backgroundImage: '/appFiles/button/backToMenuSlice.png',
		width: 120*F,
		height: 120*F
	});
	
	buttonBackToMenu.addEventListener('click', function (e) {
		pageController.clickFeedback();
		pageController.backToMenu();
	});
	
	var buttonReadmeMode = Ti.UI.createButton({
		backgroundImage: '/appFiles/button/readToMeSlice.png',
		width: 120*F,
		height: 120*F
	});
	
	window.getReadmeButton = function() {
		return buttonReadmeMode;
	};
	
	
	buttonBack.addEventListener('click', function(e) {
		pageController.clickFeedback();
		pageController.prevPage();
	});
	
	
	buttonForward.addEventListener('click', function(e) {
		pageController.clickFeedback();
		pageController.nextPage();
	});
	
	if (pageController.hasPrevPage()) {
		buttonHolder.add(buttonBack);
	}
	
	if (pageController.hasNextPage()) {
		buttonHolder.add(buttonForward);
	}
	
	window.addEventListener('swipe', function(e){
		if (e.direction === 'left' && pageController.hasNextPage()) {
			buttonForward.fireEvent('click');
		} else if (e.direction === 'right' && pageController.hasPrevPage())
			buttonBack.fireEvent('click');
		});
	
	
	//building the text
	if (options.text) {
		var text = new TextObject(options.text);
		window.add(text);
		if (pageController.isTextHidden()) {
			text.visible = false;
			buttonShowHideText.backgroundImage = '/appFiles/button/textButtonDisabledSlice.png';
		}
		buttonLeftHolder.add(buttonShowHideText);
	}
	
	
	//loading the sound
	if (options.audio) {
		pageController.sound = new SoundObject(options.audio);
		
		buttonLeftHolder.add(buttonStartPauseAudio);
		buttonLeftHolder.add(buttonRestartAudio);
	}
	buttonLeftHolder.add(buttonReadmeMode);
	buttonLeftHolder.add(buttonBackToMenu);
	
	if (options.objects) {
		_.each(options.objects, function(obj) {
			var object = new AnimatedObject(obj);
			window.add(object);
		});
	}
	
	
	
	window.add(buttonHolder);
	window.add(buttonLeftHolder);
	
	
	window.addEventListener('open', function(e) {
		
	});
	
	

	window.showHideMenu = function() {
		if (pageController.menuHidden === true) {
			buttonLeftHolder.show();
			buttonShowHideMenu.backgroundImage = '/appFiles/button/showHideOffSlice.png';
			pageController.menuHidden = false;
			buttonShowHideMenu.opacity = 1;
		} else {
			buttonLeftHolder.hide();
			buttonShowHideMenu.backgroundImage = '/appFiles/button/showHideOnSlice.png';
			pageController.menuHidden = true;
			buttonShowHideMenu.opacity = 0.3;
		}
	};
	
	window.setShowHideMenu = function() {
		if (pageController.menuHidden === true) {
			buttonLeftHolder.hide();
			buttonShowHideMenu.backgroundImage = '/appFiles/button/showHideOnSlice.png';
			buttonShowHideMenu.opacity = 0.3;
		} else {
			buttonLeftHolder.show();
			buttonShowHideMenu.backgroundImage = '/appFiles/button/showHideOffSlice.png';
			buttonShowHideMenu.opacity = 1;
		}
	};
	

	window.setReadmeMode = function() {
		
		var button = window.getPlayPauseButton();
		
		//going in readme mode
		if (pageController.readmeMode === true) {
			switchMode = false;
		} else {
			switchMode = true;
		};
		
		//hiding text
		
		if (pageController.isTextHidden()) {
			text.visible = false;
		} else {
			text.visible = switchMode;
		}
		

		buttonBack.visible = switchMode;
		buttonForward.visible = switchMode;
		buttonShowHideText.visible = switchMode;
		buttonStartPauseAudio.visible = switchMode;
		buttonRestartAudio.visible = switchMode;
		
		if (pageController.readmeMode === true && pageController.sound) {
			pageController.sound.stop();
			pageController.sound.play();
			buttonStartPauseAudio.backgroundImage = '/appFiles/button/pauseButtonSlice.png';
			buttonShowHideText.backgroundImage = '/appFiles/button/textButtonSlice.png';
			buttonReadmeMode.backgroundImage = '/appFiles/button/readToMeOnSlice.png';
		} else {
			buttonReadmeMode.backgroundImage = '/appFiles/button/readToMeSlice.png';
		}

	};
	
	buttonShowHideMenu.addEventListener('click', function(e){
		pageController.clickFeedback();
		window.showHideMenu();
	});
	
	buttonReadmeMode.addEventListener('click', function(e){
		pageController.clickFeedback();
		if (pageController.readmeMode === true) {
			pageController.readmeMode = false;
		} else {
			pageController.readmeMode = true;
		};
		
		window.setReadmeMode();
	});
	window.add(buttonShowHideMenu);
	window.setShowHideMenu();
	window.setReadmeMode();
	
	return window;
};

module.exports = roomFactory;