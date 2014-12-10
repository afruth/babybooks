

var IntroLabelFactory = function (options) {
	if (!options) {
		options = {};
		console.warn('Options object empty at IntroLabelFactory');
	}
	
	
	if (!options.introLabels) {
		options.introLabels = ['Test intro'];
		console.warn('Text array not set for the IntroLabelFactory');
	}
	
	labelsArray = [];
	
	textLabelHolder = Ti.UI.createView({
		width:Ti.UI.FILL,
		height:Ti.UI.FILL
	});
	
	_.each(options.introLabels, function(item) {
		var label = Ti.UI.createLabel({
		    text:item,
		    width:100,
		    left: -100,
		    color: 'white'
		});
		
		labelsArray.push(label);
		textLabelHolder.add(label);
	});
	
	textLabelHolder.next = function() {
		
	};
	
	
	return textLabelHolder;
};

module.exports = IntroLabelFactory;
