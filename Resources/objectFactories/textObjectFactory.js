

var TextObjectFactory = function (text) {
	
	if (!text) {
		text = 'Default text';
		console.warn('Text not set for the TextObjectFactory');
	}
	var textLabelBackground = Ti.UI.createView({
		readmeMode: 'off',
		name: 'textLabel',
		width: pWidth - 100*F, height: Ti.UI.SIZE,
		bottom: (AdEnabled === true)?55:10*F,
		backgroundColor: 'white',
		opacity: 0.8,
		borderRadius: 10,
		visible: (pageController.readmeMode === true)?false:true
	});
	var textLabel = Ti.UI.createLabel({
		text: text,
		width: pWidth - 150*F,
		height: Ti.UI.SIZE,
		top:10*F,
		bottom:10*F,
		font: {
			fontFamily: textFont,
			fontSize: 20*F
		},
		color: 'black',
		opacity: 1
	});
	
	textLabelBackground.add(textLabel);
	
	return textLabelBackground;
};

module.exports = TextObjectFactory;
