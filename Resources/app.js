var _ = require('lib/underscore');
var Admob = require('ti.admob');
var OSNAME = Ti.Platform.osname;
DebugMode = false;
AdEnabled = false;

var GA = require('analytics.google');
// GA.setDryRun(true);
GA.dispatchInterval = 10;
GA.trackUncaughtExceptions = true;


Tracker = GA.getTracker((OSNAME === 'android')?'UA-56040292-2':'UA-56040292-3');

// tracker.trackEvent({
	// category: "category",
	// action: "test",
	// label: "label",
	// value: 1
// });
// 
// tracker.trackSocial({
	// network: "facebook",
	// action: "action",
	// target: "target"
// });
// 
// tracker.trackTiming({
	// category: "",
	// time: 10,
	// name: "",
	// label: ""
// });
// 
// tracker.trackScreen({ path: "Home", customDimension: { 1: "free" }});






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

if(OSNAME === 'android') {
	MainWindow = Ti.UI.createWindow({
		height: Ti.UI.FILL,
		width: Ti.UI.FILL,
		backgroundColor: 'black',
		orientationModes: [Titanium.UI.LANDSCAPE_LEFT,  Titanium.UI.LANDSCAPE_RIGHT],
		navBarHidden: true,
		fullscreen: true
		//backgroundImage: '/appFiles/backgrounds/background-noise.png'
	});
	
	MainWindow.open();
}
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

menu.open();

var rateMeTitle = 'Da o nota povestii!';
var rateMeText = 'Dacă povestea noastră iti place, te rugăm să ne dai o notă și să ne scrii un review. Acest lucru ne va ajuta sa continuam!';
var remindMeIn = 1000 * 60 * 60 * 24 * 5;
function rateMeIOS() {
		var now = new Date().getTime();
		var remindToRate = Ti.App.Properties.getString('RemindToRate');
		if (!remindToRate) {
			Ti.App.Properties.setString('RemindToRate', now + remindMeIn);
			// setam reminder pentru 5 zile de la prima deschidere
		} else if (remindToRate < now) {
			var alertDialog = Titanium.UI.createAlertDialog({
				title : rateMeTitle,
				message : rateMeText,
				buttonNames : ['Votează', 'Mai târziu', 'Niciodată'],
				cancel : 2
			});
			alertDialog.addEventListener('click', function(evt) {
				switch (evt.index) {
				case 0:
					Ti.App.Properties.setString('RemindToRate', Number.MAX_VALUE);

					Ti.Platform.openURL('http://itunes.apple.com/WebObjects/MZStore.woa/wa/viewContentsUserReviews?pageNumber=0&sortOrdering=1&type=Purple+Software&mt=8&id=833535888');

					break;
				case 1:
					Ti.App.Properties.setString('RemindToRate', now + remindMeIn);
					// amanam pana peste 5 zile
					break;
				case 2:
					Ti.App.Properties.setString('RemindToRate', Number.MAX_VALUE);
					break;
				}
			});
			alertDialog.show();
		}
	}
	
function rateMeAndroid() {
	var now = new Date().getTime();
	var remindToRate = Ti.App.Properties.getString('RemindToRate');
	if (!remindToRate) {
		Ti.App.Properties.setString('RemindToRate', now + remindMeIn);
		// setam reminder pentru 5 zile de la prima deschidere
	} else if (remindToRate < now) {
		var alertDialog = Titanium.UI.createAlertDialog({
			title : rateMeTitle,
			message : rateMeText,
			buttonNames : ['Votează', 'Mai târziu', 'Niciodată'],
			cancel : 2
		});
		alertDialog.addEventListener('click', function(evt) {
			switch (evt.index) {
			case 0:
				Ti.App.Properties.setString('RemindToRate', Number.MAX_VALUE);
				try {
					var intent= Ti.Android.createIntent({
						action:Ti.Android.ACTION_VIEW,
						data:'market://details?id=ro.softeh.ReginaMaria'
					});
					Ti.Android.currentActivity.startActivity(intent);
				} catch (e) {
					
				}
				break;
			case 1:
				Ti.App.Properties.setString('RemindToRate', now + remindMeIn);
				// amanam pana peste 5 zile
				break;
			case 2:
				Ti.App.Properties.setString('RemindToRate', Number.MAX_VALUE);
				break;
			}
		});
		alertDialog.show();
	}
}
	
(OSNAME === 'android')?rateMeAndroid():rateMeIOS();







