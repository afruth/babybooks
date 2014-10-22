//This is the main controller object that loads the objects, backgrounds, audio and text for a room
//Also this will have the main actions: play sound, pause sound, restart sound, next room, previous room, menu

var PageFactory = require('/roomFactories/pageFactory');

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
					text: "Lorem ipsum dolor sit amet. Equalidiscia nepitomia adeum tedeum buf. 
							Lorem ipsum dolor sit amet. Equalidiscia nepitomia adeum tedeum buf. 
							Lorem ipsum dolor sit amet. Equalidiscia nepitomia adeum tedeum buf.",
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
	
	this.sound = null;
	
	this.loadedPages = [];
	
	
	
	this.proceedWithStory = function() {
		//loading first page
		this.currentPage = 1;
		
		var page = new PageFactory(options.rooms[this.currentPage - 1]);
		
		page.open();
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
		
		page.open();		
		this.loadedPages.push(page);
	};
	
	this.switchReadmeMode = function() {
		currentPage = this.loadedPages[0];
		
		//going in readme mode
		if (this.readmeMode === true) {
			switchMode = false;
		} else {
			switchMode = true;
		};
		
		//hiding text
		var text = _.find(currentPage.children, function(child) {
			return child.name === 'textLabel'; 
		});
		text.visible = switchMode;
		//hiding buttons
		var butHolder = _.find(currentPage.children, function(child) {
			return child.name === 'pageButtonHolder';
		});
		var toHide = _.filter(butHolder.children, function(but) {
			return but.readmeMode === 'off';
		});
		_.each(toHide, function(but){
			but.visible = switchMode;
		});
		
		if (this.readmeMode === true && this.sound) {
			this.sound.stop();
			this.sound.play();
		}
		
		
		console.log(this.readmeMode);
		
	};
	
	this.buttonReadmeModeSwitch = function(){
		if (this.readmeMode === true) {
			this.readmeMode = false;
		} else {
			this.readmeMode = true;
		};
		
		this.switchReadmeMode();
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
			page.open();
			this.bookmarkedPage = this.currentPage;
			prevPage.close();
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
			page.open();
			this.bookmarkedPage = this.currentPage;
			nextPage.close();
		}
		
	};
	
	this.showHideText = function() {
		if (this.textHidden === false) {
			this.textHidden = true;
			var textBox = _.find(this.loadedPages[0].children, function (item) {
				return item.name === 'textLabel';
			});
			textBox.visible = false;
		} else {
			this.textHidden = false;
			var textBox = _.find(this.loadedPages[0].children, function (item) {
				return item.name === 'textLabel';
			});
			textBox.visible = true;
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
		
		if (this.sound.playing) {
			this.sound.pause();
		} else {
			this.sound.play();
		}
	};
	
	this.restartAudio = function() {
		if (!this.sound) {
			console.warn('Audio called without audio loaded!');
			return;
		}
		
		this.sound.reset();
	};
	
	this.backToMenu = function() {
		this.resetPages();
		
	};
	
	
	this.resetPages = function () {
		this.readmeMode = false;
		this.currentPage = 0;
		//load menu unload everything else
		
		
		if (this.sound) {
			this.sound.release();
			this.sound = null;
		}
		
		if (this.bookmarkedPage) {
			buttonHolder = _.find(menu.children, function(item) {
				return item.name === 'buttonHolderView';
			});
			continueButton = _.find(buttonHolder.children, function(item){
				return item.name === 'continueStory';
			});
			continueButton.visible = true;
		}
		
		menu.open();
		_.each(this.loadedPages, function(page) {
			page.close();
		});
		
		this.loadedPages = [];
	};
	
	
	return this;
};

module.exports = roomController;