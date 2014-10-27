var AnimObjectFactory = function (options) {
	
	if (!options) {
		options = {
			name: 'Object name',
			sprite: '/appFiles/objects/sprite.png',
			dim: {
				x: screenSize.platformHeight / 2,
				y: screenSize.platformHeight / 2,
				w: 200,
				h: 100
			},
			sound: '/appFiles/narration/clap.mp3',
			text: 'Object'
		};
		console.warn("Animated object options not set. Setting defaults");
	}
	
	var object = Ti.UI.createView({
		width: options.dim.w * F,
		height: options.dim.h * F,
		top: options.dim.y * F,
		left: options.dim.x * F,
		name: options.name
	});
	object.label = null;
	if (options.sprite) {
		object.backgroundImage = options.sprite;
	};
	
	object.animated = false;
	if (options.sound) {
		object.sound = Ti.Media.createSound({
			url: options.sound
		});
	}
	
	object.addEventListener('click', function(e) {
		
		if (object.label === null) {
		
			object.label = Ti.UI.createLabel({
				top: (object.top + e.y) * F,
				left: (object.left + e.x) * F,
				text: options.text,
				width: Ti.UI.SIZE, height: Ti.UI.SIZE,
				font: {
					fontFamily: textFont
				},
				color: 'black',
				opacity: 1
			});
			
			
			pageController.loadedPages[0].add(object.label);
			
			if (e.source.sound) {
				e.source.sound.play();
			}
	
	
			var floatUp = Ti.UI.createAnimation({
				duration: 2000,
				top: 0,
				opacity: 0
			});
			
			object.label.animate(floatUp, function() {
				console.log(object.label);
				pageController.loadedPages[0].remove(object.label);
				object.label = null;
			});
		}
	});
	
	return object;
};

module.exports = AnimObjectFactory;
