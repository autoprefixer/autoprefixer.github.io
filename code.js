(function() {
	var App = function () {
		this.settings = {
			_browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1'],
			browsers: localStorage.browsers || this._browsers,
		};
		this.elems = {
			left: document.querySelector('.js-input'),
			right: document.querySelector('.js-output'),
			filterForm: document.querySelector('.js-filter'),
			textFilter: document.querySelector('.js-browsers-filter'),
			selectBtn: document.querySelector('.js-select')
		};

		this.elems.left.innerHTML = '.example {\n    display: flex;\n    transition: all .5s;\n    user-select: none;\n    background: linear-gradient(to bottom, white, black);\n}';
		this.init();
	};
	App.prototype = {
		init: function () {
			this.elems.textFilter.value = localStorage.browsers || '';

			this.autoprefixer();
			this.listeners();
			this.focusInArea();
		},
		listeners: function () {
			this.elems.left.addEventListener('keyup', this.autoprefixer.bind(this), false);
			this.elems.filterForm.addEventListener('submit', this.filter.bind(this), false);
			this.elems.selectBtn.addEventListener('click', this.selectRez.bind(this) , false);

			this.elems.left.addEventListener('scroll', this.scroller.bind(this), false);
			this.elems.right.addEventListener('scroll', this.scroller.bind(this), false);
		},
		autoprefixer: (function () {
			var timer = '';

			return function () {
				var text = this.elems.left.value;

				clearTimeout(timer);
				timer = setTimeout(inTimeout.bind(this), 250);
				function inTimeout () {
					var compiled;
					try {
						compiled = autoprefixer({
							browsers: this.settings.browsers
						}).process(text, { safe: true });
					} catch (e) {
						compiled = {
							css: e
						};
					}

					this.elems.right.innerHTML = compiled.css;
					this.highlighter(this.elems.right);
					this.highlighter(this.elems.left);
				}
			};
		})(),
		highlighter: function (elem) {
			try {
				Prism.highlightElement(elem);
			} catch (e) {}
		},
		scroller: function (e) {
			if (~e.target.className.indexOf('js-input')) {
				this.elems.right.scrollTop = this.elems.left.scrollTop;
			} else {
				this.elems.left.scrollTop = this.elems.right.scrollTop;
			}
		},
		focusInArea: function () {
			if (document.querySelector('*:focus'))
				return null

			this.elems.left.focus();
			this.elems.left.select();
		},
		filter: function (e) {
			e.preventDefault();

			var str = this.elems.textFilter.value.split(',');

			str = str.map(function (x) { return x.trim() });
			this.settings.browsers = str;

			localStorage.browsers = str;

			if (!str.length || str[0] === '')
				this.settings.browsers = this.settings._browsers;

			this.autoprefixer();
		},
		selectRez: function () {
			if (document.createRange) {
				App.selectRez = function () {
					var rng, sel;
					rng = document.createRange();
					rng.selectNode(this.elems.right);
					sel = window.getSelection();
					sel.removeAllRanges();
					sel.addRange(rng);
				};
			} else {
				App.selectRez = function () {
					var rng;
					rng = document.body.createTextRange();
					rng.moveToElementText(this.elems.right);
					rng.select();
				};
			}
			App.selectRez.bind(this)();
		}
	};

	new App();

})();
