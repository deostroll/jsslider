function onPageLoadDone() {
	var slider = new ui.Slider({
		id: 'slider',
		change: function() {
			console.log('value changed');
		},
		max: 300,
		step: 10
	});
}
