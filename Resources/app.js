var _ = require('lib/underscore');
Ti.Media.audioSessionMode = Ti.Media.AUDIO_SESSION_MODE_PLAYBACK;
screenSize = Ti.Platform.displayCaps;

if (screenSize.platformHeight < screenSize.platformWidth) {
	F = screenSize.platformHeight/768;
} else {
	F = screenSize.platformWidth/768;
}

var textFont = 'Janda Closer To Free'; // use the friendly-name on iOS
if(Ti.Platform.osname=='android') {
   // on Android, use the "base name" of the file (name without extension)
   textFont = 'JandaCloserToFree';
} 

MainWindow = Ti.UI.createWindow({
	height: Ti.UI.FILL,
		width: Ti.UI.FILL,
		backgroundColor: 'black',
		orientationModes: [Titanium.UI.LANDSCAPE_LEFT,  Titanium.UI.LANDSCAPE_RIGHT],
		navBarHidden: true,
		fullscreen: true,
		backgroundImage: '/appFiles/backgrounds/background-noise.png'
});

MainWindow.open();

ANIM = {};

ANIM.fadeIn = Ti.UI.createAnimation({
	duration:100,
	opacity:1
});

ANIM.fadeOut = Ti.UI.createAnimation({
	duration:100,
	opacity:0
});


console.log('Height:',screenSize.platformHeight,' Width:',screenSize.platformWidth);

var menuFactory = require('roomFactories/menuFactory');
var PageController = require('/controllers/roomController');


var options = require('/appFiles/story')();

console.log(options);


pageController = new PageController(options);
menu = new menuFactory();

menu.open();








