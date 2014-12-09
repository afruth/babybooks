//This is the main controller object that loads the objects, backgrounds, audio and text for a room
//Also this will have the main actions: play sound, pause sound, restart sound, next room, previous room, menu

var PageFactory = require('/roomFactories/pageFactory');
var menuFactory = require('roomFactories/menuFactory');

var roomController = function(options) {
	
	//checking if options is set. If not build a default options object
	
	if (!options) {
		console.warn("Options not set. Building controller with default options.");
		
		options = {
			rooms: [
				{
					title: 'Default room',
					background: '/appFiles/backgrounds/room2.jpg',
					text: 'Lorem ipsum dolor sit amet. Equalidiscia nepitomia adeum tedeum buf. Lorem ipsum dolor sit amet. Equalidiscia nepitomia adeum tedeum buf. Lorem ipsum dolor sit amet. Equalidiscia nepitomia adeum tedeum buf.',
					audio: '/appFiles/narration/room4.mp3'
				},
				{
					title: 'Default room2',
					background: '/appFiles/backgrounds/room1.jpg',
					text: "Lorem ipsum dolor sit amet. Equalidiscia nepitomia adeum tedeum buf.	Lorem ipsum dolor sit amet. Equalidiscia nepitomia adeum tedeum buf. Lorem ipsum dolor sit amet. Equalidiscia nepitomia adeum tedeum buf.",
					audio: '/appFiles/narration/room5.mp3'
				},
				{
					title: 'Default room3',
					background: '/appFiles/backgrounds/main_bck.jpg',
					text: 'Lorem ipsum dolor sit amet. Equalidiscia nepitomia adeum tedeum buf. Lorem ipsum dolor sit amet. Equalidiscia nepitomia adeum tedeum buf. Lorem ipsum dolor sit amet. Equalidiscia nepitomia adeum tedeum buf.',
					audio: '/appFiles/narration/room6.mp3'
				}
			],
			globals: {}
		};
	}
	
	this.currentPage = 0;
	this.textHidden = false;
	this.bookmarkedPage = null;
	this.readmeMode = false;
	this.menuHidden = true;
	
	this.sound = null;
	
	this.loadedPages = [];
	
	
	
	this.proceedWithStory = function() {
		//loading first page
		this.currentPage = 1;
		
		this.menuHidden = true;
		var page = new PageFactory(options.rooms[this.currentPage - 1]);
		
		
		
		this.switchRooms(menu, page);
		this.bookmarkedPage = this.currentPage;
		
		this.loadedPages.push(page);
		//console.log(this);
	};
	
	this.startStory = function () {
		this.readmeMode = false;
		this.proceedWithStory();
	};
	
	this.startStoryRead = function() {
		this.readmeMode = true;
		this.proceedWithStory();
	};
	
	this.continueStory = function() {
		if (!this.bookmarkedPage) {
			console.warn('No page bookmarked');
			return;
		}
		
		this.currentPage = this.bookmarkedPage;
		
		var page = new PageFactory(options.rooms[this.currentPage - 1]);
		
		this.switchRooms(menu, page);		
		this.loadedPages.push(page);
	};
		
	this.hasNextPage = function() {
		return this.currentPage < options.rooms.length;
	};
	
	this.hasPrevPage = function() {
		return this.currentPage > 1;
		
	};
	
	this.nextPage = function() {
		if (this.currentPage === options.rooms.length)
			return;
		
		this.currentPage += 1;
		if (this.sound) {
			this.sound.release();
			this.sound = null;
		}
		
		var page = new PageFactory(options.rooms[this.currentPage - 1]);
		
		this.loadedPages.push(page);
		
		if (this.loadedPages.length > 1) {
			var prevPage = this.loadedPages.shift();
			this.bookmarkedPage = this.currentPage;
			this.switchRooms(prevPage, page);
		}
		
		
		
	};
	
	this.prevPage = function() {
		if (this.currentPage === 1)
			return;
			
		this.currentPage -= 1;
		if (this.sound) {
			this.sound.release();
			this.sound = null;
		}
		var page = new PageFactory(options.rooms[this.currentPage - 1]);
		
		this.loadedPages.push(page);
		
		if (this.loadedPages.length > 1) {
			var nextPage = this.loadedPages.shift();
			this.bookmarkedPage = this.currentPage;
			this.switchRooms(nextPage, page);
		}
		
	};
	
	this.showHideText = function() {
		var button = this.loadedPages[0].getTextButton();
		if (this.textHidden === false) {
			this.textHidden = true;
			var textBox = _.find(this.loadedPages[0].children, function (item) {
				return item.name === 'textLabel';
			});
			textBox.visible = false;
			button.backgroundImage = '/appFiles/button/textButtonDisabledSlice.png';
		} else {
			this.textHidden = false;
			var textBox = _.find(this.loadedPages[0].children, function (item) {
				return item.name === 'textLabel';
			});
			textBox.visible = true;
			button.backgroundImage = '/appFiles/button/textButtonSlice.png';
		}
	};
	
	this.isTextHidden = function() {
		return this.textHidden;
	};
	
	
	this.startPauseAudio = function() {
		if (!this.sound) {
			console.warn('Audio called without audio loaded!');
			return;
		}
		
		var button = pageController.loadedPages[0].getPlayPauseButton();
		if (this.sound.playing) {
			this.sound.pause();		
			button.backgroundImage = '/appFiles/button/playButtonSlice.png';	
		} else {
			this.sound.play();
			button.backgroundImage = '/appFiles/button/pauseButtonSlice.png';
		}
		
	};
	
	this.restartAudio = function() {
		if (!this.sound) {
			console.warn('Audio called without audio loaded!');
			return;
		}
		
		this.sound.reset();
		this.sound.play();
		var button = pageController.loadedPages[0].getPlayPauseButton();
		button.backgroundImage = '/appFiles/button/pauseButtonSlice.png';
	};
	
	this.backToMenu = function() {
		this.resetPages();
		
	};
	
	
	this.resetPages = function () {
		this.readmeMode = false;
		this.currentPage = 0;
		//load menu unload everything else
		menu = new menuFactory();
		
		if (this.sound) {
			this.sound.release();
			this.sound = null;
		}
		
		this.switchRooms(this.loadedPages[0], menu);
		
		this.loadedPages = [];
	};
	var click = Ti.Media.createSound({
			url: '/appFiles/narration/clap.mp3'
		});
	this.clickFeedback = function(e) {
		//Ti.Media.vibrate();
		click.play();
	};
	
	this.switchRooms = function (roomOut, roomIn) {
		if (!roomOut || !roomIn)
			return false;
			
			
		if (Ti.Platform.osname === 'android') {
			
			roomIn.open({
			    activityEnterAnimation: Ti.Android.R.anim.fade_in,
			    activityExitAnimation: Ti.Android.R.anim.fade_out
			});
			
			
			roomOut.close();
				
			} else {
				roomIn.opacity = 0;
				roomOut.close(ANIM.fadeOut, function() {
					roomIn.open(ANIM.fadeIn);
					});
			}		
			
			if (AdEnabled === true) {
				//loading ads
				var ad = Admob.createView({
				    bottom: 0,
				    width: 320, height: 50,
				    publisherId: 'ca-app-pub-7007572546061837/1075309657',
				    adUnitId: (Ti.Platform.osname === 'android')?'ca-app-pub-7007572546061837/1075309657':'ca-app-pub-7007572546061837/4028776056', // You can get your own at http: //www.admob.com/
				    adBackgroundColor: 'black',
				    // You can get your device's id for testDevices by looking in the console log after the app launched
				    testDevices: [Admob.SIMULATOR_ID],
				    keywords: 'children, story, child, parent'
				});
				
				roomIn.add(ad);
				}
	};
	
	
	return this;
};

module.exports = roomController;