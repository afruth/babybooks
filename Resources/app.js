var _ = require('lib/underscore');

screenSize = Ti.Platform.displayCaps;

console.log('Height:',screenSize.platformHeight,' Width:',screenSize.platformWidth);

var menuFactory = require('roomFactories/menuFactory');
var PageController = require('/controllers/roomController');

pageController = new PageController();
menu = new menuFactory();

menu.open();





