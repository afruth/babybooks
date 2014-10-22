/*
 * 
 */
var TextObject = require('/objectFactories/textObjectFactory');
var SoundObject = require('/objectFactories/audioObjectFactory');

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
	
	//building the next and previous buttons
	var buttonHolder = Ti.UI.createView({
		name: 'pageButtonHolder',
		width: Ti.UI.FILL,
		height: 100,
		top:5
	});
	
	var buttonBack = Ti.UI.createButton({
		readmeMode: 'off',
		left:10,
		backgroundImage: '/appFiles/button/arrow_left.png',
		height: 80,
		width:124,
		top:10
	});
	
	var buttonForward = Ti.UI.createButton({
		readmeMode: 'off',
		right:10,
		backgroundImage: '/appFiles/button/arrow_right.png',
		height: 80,
		width:124,
		top:10
	});
	
	var buttonShowHideText = Ti.UI.createButton({
		readmeMode: 'off',
		backgroundImage: '/appFiles/button/textButtonSlice.png',
		width: 80,
		height: 80,
		left:140
	});
	
	window.getTextButton = function() {
		return buttonShowHideText;
	};
	buttonShowHideText.addEventListener('click', function (e) {
		pageController.showHideText();
	});
	
	var buttonStartPauseAudio = Ti.UI.createButton({
		readmeMode: 'off',
		backgroundImage: '/appFiles/button/playButtonSlice.png',
		width: 80,
		height: 80,
		left: 225
	});
	
	window.getPlayPauseButton = function() {
		return buttonStartPauseAudio;
	};
	
	buttonStartPauseAudio.addEventListener('click', function (e) {
		pageController.startPauseAudio();
	});
	
	var buttonRestartAudio = Ti.UI.createButton({
		readmeMode: 'off',
		backgroundImage: '/appFiles/button/restartButtonSlice.png',
		width: 80,
		height: 80,
		left: 310
	});
	
	
	buttonRestartAudio.addEventListener('click', function (e) {
		pageController.restartAudio();
	});
	
	var buttonBackToMenu = Ti.UI.createButton({
		backgroundImage: '/appFiles/button/backToMenuSlice.png',
		width: 80,
		height: 80,
		left: 395
	});
	
	buttonBackToMenu.addEventListener('click', function (e) {
		pageController.backToMenu();
	});
	
	var buttonReadmeMode = Ti.UI.createButton({
		backgroundImage: '/appFiles/button/readToMeSlice.png',
		width: 80,
		height: 80,
		left: 480
	});
	
	window.getReadmeButton = function() {
		return buttonReadmeMode;
	};
	
	buttonReadmeMode.addEventListener('click', function (e) {
		pageController.buttonReadmeModeSwitch();
	});
	
	buttonBack.addEventListener('click', function(e) {
		pageController.prevPage();
	});
	
	buttonForward.addEventListener('click', function(e) {
		pageController.nextPage();
	});
	
	if (pageController.hasPrevPage()) {
		buttonHolder.add(buttonBack);
	}
	
	if (pageController.hasNextPage()) {
		buttonHolder.add(buttonForward);
	}
	
	
	//building the text
	if (options.text) {
		var text = new TextObject(options.text);
		window.add(text);
		if (pageController.isTextHidden()) {
			text.visible = false;
			buttonShowHideText.backgroundImage = '/appFiles/button/textButtonDisabledSlice.png';
		}
		buttonHolder.add(buttonShowHideText);
	}
	
	
	//loading the sound
	if (options.audio) {
		pageController.sound = new SoundObject(options.audio);
		
		buttonHolder.add(buttonStartPauseAudio);
		buttonHolder.add(buttonRestartAudio);
	}
	
	buttonHolder.add(buttonBackToMenu);
	buttonHolder.add(buttonReadmeMode);
	
	
	
	
	window.add(buttonHolder);
	
	window.addEventListener('open', function(e) {
		pageController.switchReadmeMode();
	});
	
	
	
	return window;
};

module.exports = roomFactory;