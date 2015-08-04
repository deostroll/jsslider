(function(window){
	var utils = window.utils;
	if(!utils) {
		window.utils = utils = {};
	}	
	
	var noop = function() {};

	var slider = function Slider(options) {
		var comp = this;
		var cfg = {
			change: noop,
			max: 100,
			step: 1,
			height: 10,
			offset: 3,
			knobColor: '#a5a5a5'
		};

		var $create = document.createElement.bind(document);
		var px = function(val) { return val + 'px'; };

		for(var x in options) { cfg[x] = options[x]; }

		var slider = $create('a');
		var box = $create('div');
		slider.appendChild(box);

		var bar = document.getElementById(cfg.id);
		if(bar && bar.tagName === 'DIV') {
			setupComponent();
		}
		else {
			//error
		}

		function setupComponent() {
			bar.style.height = px(cfg.height);
			var ht = cfg.height + cfg.offset * 2;
			box.style.height = px(ht);
			box.style.width = px(ht);
			bar.appendChild(slider);
			bar.className = 'slider';
			box.className = 'box';
			slider.style.top = px(-cfg.offset);
			bar.style.borderRadius = px( Math.ceil(cfg.height/2) );
			box.style.borderRadius = px( Math.ceil(ht/2) );
		}
	};

	utils.Slider = slider;
})(window);
