import store from 'store';
import langRedirect from './redirect.js';
import { highlightElement } from './highlight.js';
import { version as postcssVersion } from 'postcss/package.json'
import { version as autoprefixerVersion } from 'autoprefixer/package.json'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'
import { CSS_EXAMPLE, DEFAULT_BROWSERS } from './config';

class App {
    constructor() {
        this.vars();
        this.init();
    }

    vars() {
        this.browserList = store.get('autoprefixer:browsers') || DEFAULT_BROWSERS;
        this.$leftPane = document.querySelector(".js-input");
        this.$rightPane = document.querySelector(".js-output");
        this.$filterForm = document.querySelector(".js-filter");
        this.$textFilter = document.querySelector(".js-browsers-filter")
        this.$browserListLink = document.querySelector(".js-link-browserlist")
        this.$selectButton = document.querySelector(".js-select");
        this.$version = document.querySelector('.js-version')
    }

    init() {
        this.$textFilter.value = this.browserList.join(', ');
        this.$leftPane.innerHTML = CSS_EXAMPLE;
        this.$leftPane.focus();

        store.remove('browsers');
        this.listeners();
        this.updateBrowserListLink();
        this.runPrefixer();
        this.addVersion();
    }

    addVersion() {
        this.$version.innerHTML = `Postcss: <b>v${postcssVersion}</b>, autoprefixer: <b>v${autoprefixerVersion}</b>`;
    }

    listeners() {
        this.$leftPane.addEventListener("keyup", this.runPrefixer.bind(this), false);
        this.$filterForm.addEventListener("submit", this.filterUpdate.bind(this), false);

        this.$selectButton.addEventListener("click", this.selectResult.bind(this), false);
        this.$textFilter.addEventListener("keyup", this.updateBrowserListLink.bind(this), false);
    }

    runPrefixer() {
        const inputCSS = this.$leftPane.value;
        const params = { browsers: this.browserList, grid: true };

        postcss([
            autoprefixer(params),
        ])
            .process(inputCSS)
            .then(compiled => {
                this.$rightPane.innerHTML = this.textPrepare(compiled.css);
                highlightElement(this.$rightPane)
            })
            .catch(error => {
                console.log(error);
                this.$rightPane.innerHTML = this.textPrepare(error.toString());
            });
    }

    textPrepare(text = '') {
        return text.replace(/\</g, "&lt;").replace(/\>/g, "&gt;");
    }

    filterUpdate(event) {
        event.preventDefault();

        const browsers = this.$textFilter.value.split(",");
        const trimmedBrowsers = browsers.map(browser => browser.trim());
        const newValue = trimmedBrowsers.length ? trimmedBrowsers : DEFAULT_SETTINGS;

        this.browserList = newValue;
        store.set('autoprefixer:browsers', newValue)
        this.runPrefixer();
    }

    selectResult() {
        if (document.createRange) {
            var rng, sel;
            rng = document.createRange();
            if (rng.selectNode) rng.selectNode(this.$rightPane);
            sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(rng);
        } else if (document.body && document.body.createTextRange) {
            var rng;
            rng = document.body.createTextRange();
            rng.moveToElementText(this.$rightPane);
            rng.select();
        }
    }

    updateBrowserListLink() {
        this.$browserListLink.href = `http://browserl.ist/?q=${encodeURI(this.$textFilter.value)}`;
    }
}

const redirectResult = langRedirect();
if (!redirectResult) new App();
