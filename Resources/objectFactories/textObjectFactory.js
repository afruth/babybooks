

var TextObjectFactory = function (text) {
	
	if (!text) {
		text = 'Default text';
		console.warn('Text not set for the TextObjectFactory');
	}
	var textLabelBackground = Ti.UI.createView({
		readmeMode: 'off',
		name: 'textLabel',
		width: screenSize.platformWidth - 100, height: Ti.UI.SIZE,
		bottom: 10,
		backgroundColor: 'white',
		opacity: 0.8
	});
	var textLabel = Ti.UI.createLabel({
		text: text,
		width: screenSize.platformWidth - 150,
		height: Ti.UI.SIZE,
		top:10,
		bottom:10,
		color: 'black',
		opacity: 1
	});
	
	textLabelBackground.add(textLabel);
	
	return textLabelBackground;
};

module.exports = TextObjectFactory;
