

var TextObjectFactory = function (text) {
	
	if (!text) {
		text = 'Default text';
		console.warn('Text not set for the TextObjectFactory');
	}
	var textLabelBackground = Ti.UI.createView({
		readmeMode: 'off',
		name: 'textLabel',
		width: screenSize.platformWidth - 100*F, height: Ti.UI.SIZE,
		bottom: 10*F,
		backgroundColor: 'white',
		opacity: 0.8,
		borderRadius: 10
	});
	var textLabel = Ti.UI.createLabel({
		text: text,
		width: screenSize.platformWidth - 150*F,
		height: Ti.UI.SIZE,
		top:10*F,
		bottom:10*F,
		font: {
			fontFamily: textFont
		},
		color: 'black',
		opacity: 1
	});
	
	textLabelBackground.add(textLabel);
	
	return textLabelBackground;
};

module.exports = TextObjectFactory;
