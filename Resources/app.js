var _ = require('lib/underscore');
var Admob = require('ti.admob');
var rate = require('lib/rate');

rate.title = 'Da o nota povestii!';
rate.message = 'Dacă povestea noastră iti place, te rugăm să ne dai o notă și să ne scrii un review. Acest lucru ne va ajuta sa continuam!';
rate.yes = 'OK';
rate.later = 'Mai tarziu';
rate.never = 'Nu doresc';
rate.daysBetween = 3;
rate.appleId = 123456;

var OSNAME = Ti.Platform.osname;
DebugMode = false;
AdEnabled = false;

var GA = require('analytics.google');
// GA.setDryRun(true);
GA.dispatchInterval = 10;
GA.trackUncaughtExceptions = true;


Tracker = GA.getTracker((OSNAME === 'android')?'UA-56040292-2':'UA-56040292-3');

Ti.Media.audioSessionMode = Ti.Media.AUDIO_SESSION_MODE_PLAYBACK;
screenSize = Ti.Platform.displayCaps;

if (screenSize.platformHeight < screenSize.platformWidth) {
	F = screenSize.platformHeight/768;
} else {
	F = screenSize.platformWidth/768;
}

var textFont = 'Janda Closer To Free'; // use the friendly-name on iOS
if(OSNAME === 'android') {
   // on Android, use the "base name" of the file (name without extension)
   textFont = 'JandaCloserToFree';
} 


MainWindow = Ti.UI.createWindow({
	height: screenSize.platformHeight,
	width: screenSize.platformWidth,
	backgroundColor: 'black',
	orientationModes: [Titanium.UI.LANDSCAPE_LEFT,  Titanium.UI.LANDSCAPE_RIGHT],
	navBarHidden: true,
	fullscreen: true
	//backgroundImage: '/appFiles/backgrounds/background-noise.png'
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

//console.log(options);


pageController = new PageController(options);
menu = new menuFactory();

var label = Ti.UI.createLabel({
    text:"A2",
    width:screenSize.platformWidth,
    left: -screenSize.platformWidth,
    color: 'white',
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    font: {
			fontFamily: textFont,
			fontSize: 72*F
		}
});

var label2 = Ti.UI.createLabel({
    text:"împreună cu",
    width:screenSize.platformWidth,
    left: -screenSize.platformWidth,
    color: 'white',
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    font: {
			fontFamily: textFont,
			fontSize: 72*F
		}
});

var label3 = Ti.UI.createLabel({
    text:"Taine Multimedia",
    width:screenSize.platformWidth,
    left: -screenSize.platformWidth,
    color: 'white',
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    font: {
			fontFamily: textFont,
			fontSize: 72*F
		}
});

var label4 = Ti.UI.createLabel({
    text:"prezintă",
    width:screenSize.platformWidth,
    left: -screenSize.platformWidth,
    color: 'white',
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    font: {
			fontFamily: textFont,
			fontSize: 72*F
		}
});

var label5 = Ti.UI.createLabel({
    text:"Ursul păcălit de vulpe",
    width:screenSize.platformWidth,
    left: -screenSize.platformWidth,
    color: 'white',
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    font: {
			fontFamily: textFont,
			fontSize: 72*F
		}
});

var label6 = Ti.UI.createLabel({
    text:"povestit de",
    width:screenSize.platformWidth,
    left: -screenSize.platformWidth,
    color: 'white',
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    font: {
			fontFamily: textFont,
			fontSize: 72*F
		}
});

var label7 = Ti.UI.createLabel({
    text:"Răzvan",
    width:screenSize.platformWidth,
    left: -screenSize.platformWidth,
    color: 'white',
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    font: {
			fontFamily: textFont,
			fontSize: 72*F
		}
});
 
MainWindow.add(label);
MainWindow.add(label2);
MainWindow.add(label3);
MainWindow.add(label4);
MainWindow.add(label5);
MainWindow.add(label6);
MainWindow.add(label7);
 
label.animate({left:0, duration:300}, function() {
	setTimeout(function(){
			label.hide();
			label2.animate({left:0, duration:300}, function() {
				setTimeout(function(){
					label2.hide();
					label3.animate({left:0, duration:300}, function() {
						setTimeout(function(){
							label3.hide();
							label4.animate({left:0, duration:300}, function() {
								setTimeout(function(){
									label4.hide();
									label5.animate({left:0, duration:300}, function() {
										setTimeout(function(){
											label5.hide();
											label6.animate({left:0, duration:300}, function() {
												setTimeout(function(){
													label6.hide();
													label7.animate({left:0, duration:300}, function() {
														setTimeout(function(){
															label7.hide();
															menu.open();
															},2000);
														
													});
													},1000);
												
											});
											},2000);
										
									});
									},1000);
								
							});
							},2000);
						
					});
					},1000);
				
			});
		},2000);
	
});

//menu.open();







