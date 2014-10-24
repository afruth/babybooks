var _ = require('lib/underscore');
Ti.Media.audioSessionMode = Ti.Media.AUDIO_SESSION_MODE_PLAYBACK;
screenSize = Ti.Platform.displayCaps;

if (screenSize.platformHeight < screenSize.platformWidth) {
	F = screenSize.platformHeight/768;
} else {
	F = screenSize.platformWidth/768;
}


console.log('Height:',screenSize.platformHeight,' Width:',screenSize.platformWidth);

var menuFactory = require('roomFactories/menuFactory');
var PageController = require('/controllers/roomController');


var options = require('/appFiles/story')();

console.log(options)


pageController = new PageController(options);
menu = new menuFactory();

menu.open();








