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
		
		var page = new PageFactory(options.rooms[this.currentPage - 1]);
		
		this.switchRooms(menu, page);
		this.bookmarkedPage = this.currentPage;
		
		this.loadedPages.push(page);
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
			
		roomIn.opacity = 0;
		roomIn.open();
			
		roomOut.close(ANIM.fadeOut, function() {
			roomIn.animate(ANIM.fadeIn);
		});
	};
	
	
	return this;
};

module.exports = roomController;