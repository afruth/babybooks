var _ = require('lib/underscore');

screenSize = Ti.Platform.displayCaps;

if (screenSize.platformHeight < screenSize.platformWidth) {
	F = screenSize.platformHeight/768;
} else {
	F = screenSize.platformWidth/768;
}


console.log('Height:',screenSize.platformHeight,' Width:',screenSize.platformWidth);

var menuFactory = require('roomFactories/menuFactory');
var PageController = require('/controllers/roomController');

pageController = new PageController();
menu = new menuFactory();

menu.open();







