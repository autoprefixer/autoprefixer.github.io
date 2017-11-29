(function() {
    const DEFAULT_SETTINGS = ["last 4 version"];
    var timer = null;

    var App = function() {
        this.settings = { browsers: localStorage.browsers || DEFAULT_SETTINGS };
        this.elems = {
            left: document.querySelector(".js-input"),
            right: document.querySelector(".js-output"),
            filterForm: document.querySelector(".js-filter"),
            textFilter: document.querySelector(".js-browsers-filter"),
            linkViewBrowsers: document.querySelector(".js-link-browserlist"),
            selectBtn: document.querySelector(".js-select")
        };

        this.elems.left.innerHTML =
            "/* Put your CSS code in the left column, instead of example, to put or remove unnecessary prefixes. */\n\n.example {\n    display: flex;\n    transition: all .5s;\n    user-select: none;\n    background: linear-gradient(to bottom, white, black);\n}";
        this.init();
    };
    App.prototype = {
        init: function() {
            this.elems.textFilter.value = localStorage.browsers || DEFAULT_SETTINGS.join(", ");

            this.autoprefixer();
            this.listeners();
            this.focusInArea();
            this.updateLink();
        },
        listeners: function() {
            this.elems.left.addEventListener("keyup", this.autoprefixer.bind(this), false);
            this.elems.filterForm.addEventListener("submit", this.filter.bind(this), false);
            this.elems.selectBtn.addEventListener("click", this.selectRez.bind(this), false);

            this.elems.left.addEventListener("scroll", this.scroller.bind(this), false);
            this.elems.right.addEventListener("scroll", this.scroller.bind(this), false);

            this.elems.textFilter.addEventListener("change", this.updateLink.bind(this), false);
        },
        updateLink: function(){
            this.elems.linkViewBrowsers.href = encodeURI('http://browserl.ist/?q='+this.elems.textFilter.value);
        },
        textPrepare: function(text) {
            return text.replace(/\</g, "&lt;").replace(/\>/g, "&gt;");
        },
        autoprefixer: function() {
            clearTimeout(timer);
            timer = setTimeout(this.prefixProcess.bind(this), 250);
        },
        prefixProcess() {
            var text = this.elems.left.value;
            var params = { browsers: this.settings.browsers };
            try {
                var compiled = autoprefixer.process(text, {}, params);
                this.elems.right.innerHTML = this.textPrepare(compiled.css);
            } catch (error) {
                this.elems.right.innerHTML = this.textPrepare(error.toString());
            }
            this.highlighter(this.elems.right);
        },
        highlighter: function(elem) {
            try {
                Prism.highlightElement(elem);
            } catch (e) {}
        },
        scroller: function(e) {
            if (~e.target.className.indexOf("js-input")) {
                this.elems.right.scrollTop = this.elems.left.scrollTop;
            } else {
                this.elems.left.scrollTop = this.elems.right.scrollTop;
            }
        },
        focusInArea: function() {
            if (document.querySelector("*:focus")) return null;

            this.elems.left.focus();
            this.elems.left.select();
        },
        filter: function(e) {
            e.preventDefault();

            var str = this.elems.textFilter.value.split(",");

            str = str.map(function(x) {
                return x.trim();
            });
            this.settings.browsers = str;

            localStorage.browsers = str;

            if (!str.length || str[0] === "") this.settings.browsers = DEFAULT_SETTINGS;

            this.autoprefixer();
        },
        selectRez: function() {
            if (document.createRange) {
                var rng, sel;
                rng = document.createRange();
                rng.selectNode(this.elems.right);
                sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(rng);
            } else {
                var rng;
                rng = document.body.createTextRange();
                rng.moveToElementText(this.elems.right);
                rng.select();
            }
        }
    };

    new App();
})();
