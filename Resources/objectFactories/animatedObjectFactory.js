var AnimObjectFactory = function (options) {
	
	if (!options) {
		options = {
			name: 'Object name',
			sprite: '/appFiles/objects/sprite.png',
			dim: {
				x: pHeight / 2,
				y: pHeight / 2,
				w: 200,
				h: 100
			},
			sound: '/appFiles/narration/clap.mp3',
			text: 'Object'
		};
		console.warn("Animated object options not set. Setting defaults");
	}
	
	var LEFT_GAP = (pWidth - (pHeight / 3 * 4) != 0)?( pWidth - (pHeight / 3 * 4) ) / 2:0;
	
	var object = Ti.UI.createView({
		width: options.dim.w * F,
		height: options.dim.h * F,
		top: options.dim.y * F,
		left: options.dim.x * F + LEFT_GAP,
		name: options.name
	});
	
	if (DebugMode === true) {
		object.borderWidth = 2;
		object.borderColor = 'green';
		
	}
		
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
		
			console.log('Obj.x',object.left,'Obj.y',object.top,'Event.x',e.x,'Event.y',e.y)
			object.label = Ti.UI.createLabel({
				top: object.top + e.y/density,
				left: object.left + e.x/density,
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
