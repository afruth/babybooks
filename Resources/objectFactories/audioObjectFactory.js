

var AudioObjectFactory = function (soundPath) {
		
	if (!soundPath) {
		console.warn('Audio file not set for the AudioObjectFactory');
	}
	Ti.Media.audioSessionMode = Ti.Media.AUDIO_SESSION_MODE_AMBIENT;
	var sound = Ti.Media.createSound({
		url: soundPath
		});
	
	
	sound.addEventListener('complete', function(e){
		if (pageController.readmeMode) {
			if (pageController.hasNextPage) {
				pageController.nextPage();
			} else {
				pageController.backToMenu();
			}
		}
	});
		
	return sound;
};

module.exports = AudioObjectFactory;
