

var AudioObjectFactory = function (soundPath) {
		
	if (!soundPath) {
		console.warn('Audio file not set for the AudioObjectFactory');
	}
	
	var sound = Ti.Media.createSound({
		url: soundPath
		});
	
	
	sound.addEventListener('complete', function(e){
		if (pageController.readmeMode) {
			if (pageController.hasNextPage()) {
				pageController.nextPage();
			} else {
				setTimeout(function() {
					pageController.backToMenu();
				},5000);	
			}
		}
	});
	
	sound.addEventListener('change', function (e){
		Ti.API.info(e.description, e.state, e.source);
	});
		
	return sound;
};

module.exports = AudioObjectFactory;
