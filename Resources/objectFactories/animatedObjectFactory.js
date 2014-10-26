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
		if (object.animated === false) {
			object.animated = true;
			var label = Ti.UI.createLabel({
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
			
			
			pageController.loadedPages[0].add(label);
			
			if (object.sound) {
				object.sound.play();
			}
				
			
			label.animate(ANIM.floatUp, function() {
				pageController.loadedPages[0].remove(label);
				object.animated = false;
			});
		}
	});
	
	return object;
};

module.exports = AnimObjectFactory;
