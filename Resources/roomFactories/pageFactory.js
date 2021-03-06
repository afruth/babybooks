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
		backgroundColor: 'black',
		orientationModes: [Titanium.UI.LANDSCAPE_LEFT,  Titanium.UI.LANDSCAPE_RIGHT],
		navBarHidden: true,
		fullscreen: true,
		backgroundImage: '/appFiles/backgrounds/bckg.jpg',
		backgroundRepeat: true,
		keepScreenOn: true
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
			touchEnabled: false
		});	
		
		var scrollView = Ti.UI.createView({
			height: pHeight,
			width: pHeight / 3 * 4,
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
		layout: 'horizontal',
		visible: false
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
		state: 'on',
		width: 120*F,
		height: 120*F,
		left:135*F,
		top: 15*F,
		backgroundImage: (pageController.readmeMode === true)?'/appFiles/button/readToMeOnSlice.png':'/appFiles/button/showHideOnSlice.png'
	});
	pageController.menuHidden === true;
	
	buttonShowHideMenu.turnOn = function() {
		if (buttonShowHideMenu.state === 'on')
			return;
		buttonShowHideMenu.state = 'on';
		buttonShowHideMenu.backgroundImage = '/appFiles/button/showHideOnSlice.png';
	};
	
	buttonShowHideMenu.turnOff = function() {
		if (buttonShowHideMenu.state === 'off')
			return;
		buttonShowHideMenu.state = 'off';
		buttonShowHideMenu.backgroundImage = '/appFiles/button/showHideOffSlice.png';
	};
	
	buttonShowHideMenu.readMeMode = function() {
		if(buttonShowHideMenu.state === 'readMeMode')
			return;
		buttonShowHideMenu.state = 'readMeMode';
		buttonShowHideMenu.backgroundImage = '/appFiles/button/readToMeOnSlice.png';
	};
	
	var buttonShowHideText = Ti.UI.createButton({
		state: 'on',
		backgroundImage: (pageController.readmeMode === true)?'/appFiles/button/textButtonDisabledSlice.png':'/appFiles/button/textButtonSlice.png',
		width: 120*F,
		height: 120*F
	});
	
	buttonShowHideText.turnOn = function() {
		if (buttonShowHideText.state === 'on')
			return;
		buttonShowHideText.state = 'on';
		text.visible = true;
		buttonShowHideText.backgroundImage = '/appFiles/button/textButtonSlice.png';
	};
	
	buttonShowHideText.turnOff = function() {
		if (buttonShowHideText.state === 'off')
			return;
		buttonShowHideText.state = 'off';
		text.visible = false;
		buttonShowHideText.backgroundImage = '/appFiles/button/textButtonDisabledSlice.png';
	};
	
	window.getTextButton = function() {
		return buttonShowHideText;
	};
	buttonShowHideText.addEventListener('click', function (e) {
		pageController.clickFeedback();
		pageController.showHideText();
	});
	
	var buttonStartPauseAudio = Ti.UI.createButton({
		state: 'pause',
		backgroundImage: (pageController.readmeMode === true)?'/appFiles/button/pauseButtonSlice.png':'/appFiles/button/playButtonSlice.png',
		width: 120*F,
		height: 120*F
	});
	
	buttonStartPauseAudio.play = function() {
		if(buttonStartPauseAudio.state === 'play')
			return;
		buttonStartPauseAudio.state = 'play';
		buttonStartPauseAudio.backgroundImage = '/appFiles/button/playButtonSlice.png';
	};
	
	buttonStartPauseAudio.pause = function() {
		if(buttonStartPauseAudio.state === 'pause')
			return;
		buttonStartPauseAudio.state = 'pause';
		buttonStartPauseAudio.backgroundImage = '/appFiles/button/pauseButtonSlice.png';
	};
	
	window.getPlayPauseButton = function() {
		return buttonStartPauseAudio;
	};
	
	buttonStartPauseAudio.addEventListener('click', function (e) {
		pageController.clickFeedback();
		pageController.startPauseAudio();
		pageController.readmeMode = false;
		buttonReadmeMode.backgroundImage = '/appFiles/button/readToMeSlice.png';
		
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
		state: 'off',
		backgroundImage: (pageController.readmeMode === true)?'/appFiles/button/readToMeOnSlice.png':'/appFiles/button/readToMeSlice.png',
		width: 120*F,
		height: 120*F
	});
	
	buttonReadmeMode.turnOff = function() {
		if (buttonReadmeMode.state === 'off')
			return;
		buttonReadmeMode.state = 'off';
		buttonReadmeMode.backgroundImage = '/appFiles/button/readToMeSlice.png';
	};
	
	buttonReadmeMode.turnOn = function() {
		if (buttonReadmeMode.state === 'on')
			return;
		buttonReadmeMode.state = 'on';
		buttonReadmeMode.backgroundImage = '/appFiles/button/readToMeOnSlice.png';
	};
	
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
	
	
	
	
	//building the text
	if (options.text) {
		var text = new TextObject(options.text);
		window.add(text);
		if (pageController.readmeMode === true || pageController.isTextHidden()) {
			text.hide();
			buttonShowHideText.turnOff();
		}
		buttonLeftHolder.add(buttonShowHideText);
	}
	
	
	//loading the sound
	if (options.audio) {
		pageController.sound = new SoundObject(options.audio);
		
		buttonLeftHolder.add(buttonStartPauseAudio);
		buttonLeftHolder.add(buttonRestartAudio);
		if (pageController.readmeMode === true) {
			setTimeout(function(){
				pageController.sound.play();
			},2000);
			
		}
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
		Tracker.trackScreen({ screenName: "Pagina "+pageController.currentPage });
	});
	
	//code to handle going into the background / foreground for the app
	if (OSNAME === 'android') {
		
		window.addEventListener('blur', function(e) {
			console.log('PAUSED')
			if (pageController.sound) 
		  		pageController.sound.pause();
		});
		
		 
		// incidentally, you could also do
		window.addEventListener('focus', function(e) {
			console.log('RESUMED')
		  // do whatever to start your music playing again
		  if (pageController.readmeMode === true) {
		  	pageController.sound.play();
		  }
		});
	}


	window.showHideMenu = function() {
		if (pageController.menuHidden === true) {
			buttonLeftHolder.show();
			buttonShowHideMenu.turnOff();
			pageController.menuHidden = false;
		} else {
			buttonLeftHolder.hide();
			buttonShowHideMenu.turnOn();
			pageController.menuHidden = true;
		}
	};
	
	window.setShowHideMenu = function() {
		if (pageController.menuHidden === true) {
			buttonLeftHolder.hide();
			buttonShowHideMenu.turnOn();
		} else {
			buttonLeftHolder.show();
			buttonShowHideMenu.turnOff();
		}
	};
	

	window.setReadmeMode = function() {
		
		//going in readme mode
		if (pageController.readmeMode === true) {
			switchMode = false;
		} else {
			switchMode = true;
		};
		
		
		
		if (pageController.readmeMode === true && pageController.sound) {
			pageController.sound.play();
			window.showHideMenu();
			buttonStartPauseAudio.pause();
			buttonShowHideText.turnOff();
			buttonReadmeMode.turnOn();
			buttonShowHideMenu.readMeMode();
			
		} else {
			buttonStartPauseAudio.play();
			pageController.sound.pause();
			buttonReadmeMode.turnOff();
			buttonShowHideText.turnOn();
			
		}

	};
	
	window.switchReadmeMode = function() {		
		//going in readme mode
		if (pageController.readmeMode === true) {
			switchMode = false;
		} else {
			switchMode = true;
		};
		
		
		if (pageController.readmeMode === true && pageController.sound) {
			pageController.sound.play();
			window.showHideMenu();
			buttonStartPauseAudio.pause();
			buttonShowHideText.turnOff();
			buttonReadmeMode.turnOn();
			buttonShowHideMenu.readMeMode();
			
			
		} else {
			buttonStartPauseAudio.play();
			pageController.sound.pause();
			buttonReadmeMode.turnOff();
			buttonShowHideText.turnOn();
			
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
		
		window.switchReadmeMode();
	});
	window.add(buttonShowHideMenu);

	
	
	
	if (DebugMode === true) {
		DEBUG_OBJ = {};
		var square = null;
		window.addEventListener('touchstart', function(e) {
			DEBUG_OBJ.x = e.x;
			DEBUG_OBJ.y = e.y;
			square = Ti.UI.createView({
				top: e.y,
				left: e.x,
				width: 1,
				height:1,
				borderWidth: 2,
				borderColor: 'red'
			});
			window.add(square);
		});
		
		window.addEventListener('touchmove', function(e) {
			square.width = e.x - DEBUG_OBJ.x;
			square.height= e.y - DEBUG_OBJ.y;
		});
		
		window.addEventListener('touchend', function(e) {
			console.log(JSON.stringify({x:DEBUG_OBJ.x, y:DEBUG_OBJ.y, w:e.x - DEBUG_OBJ.x, h: e.y - DEBUG_OBJ.y}));
			window.remove(square);
		});
		
	} else {
		window.addEventListener('swipe', function(e){
		if (e.direction === 'left' && pageController.hasNextPage()) {
			buttonForward.fireEvent('click');
		} else if (e.direction === 'right' && pageController.hasPrevPage())
			buttonBack.fireEvent('click');
		});
	}
	
	if (OSNAME != 'android') {
			//window.setReadmeMode();
			//window.setShowHideMenu();
		}
	
	
	return window;
};

module.exports = roomFactory;