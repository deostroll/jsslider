function onPageLoadDone() {
	var slider = new utils.Slider({
		id: 'slider',
		change: function() {
			console.log('value changed');
		},
		max: 300,
		step: 10
	});
}
window.addEventListener('load', onPageLoadDone, false);