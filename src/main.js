import './log2';
import store from 'store';
import langRedirect from './redirect.js';
import { highlightElement } from './highlight.js';
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'

const DEFAULT_BROWSERS = ["last 4 version"];
const getDefaultCss = (lang) => 
`${lang === 'ru' ? '/* Вставьте ваш CSS сюда вместо этого примера */' : '/* Paste your CSS here instead of this example */'}

.example {
    display: grid;
    transition: all .5s;
    user-select: none;
    background: linear-gradient(to bottom, white, black);
}
`

class App {
    constructor() {
        this.vars();
        this.init();
    }

    vars() {
        this.browserList = store.get('autoprefixer:browsers') || DEFAULT_BROWSERS;

        const query = new URLSearchParams(location.search);
        this.defaultCss = query.get('code') || getDefaultCss(document.documentElement.lang)
        
        this.$leftPane = document.querySelector(".js-input");
        this.$rightPane = document.querySelector(".js-output");
        this.$filterForm = document.querySelector(".js-filter");
        this.$textFilter = document.querySelector(".js-browsers-filter")
        this.$browserListLink = document.querySelector(".js-link-browserlist")
        this.$selectButton = document.querySelector(".js-select");
    }

    init() {
        this.$textFilter.value = this.browserList.join(', ');
        this.$leftPane.focus();

        this.$leftPane.innerHTML = decodeURI(this.defaultCss);

        store.remove('browsers');
        this.listeners();
        this.updateBrowserListLink();
        this.runPrefixer();
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

        const query = new URLSearchParams()
        query.set('code', inputCSS)
        history.pushState('', '', `?${query.toString()}`)

        postcss([
            autoprefixer(params),
        ])
            .process(inputCSS)
            .then(compiled => {
                this.$rightPane.innerHTML = this.textPrepare(compiled.css);
                highlightElement(this.$rightPane)
            })
            .catch(error => {
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
        this.$browserListLink.href = encodeURI('http://browserl.ist/?q=' + this.$textFilter.value);
    }
}

if (!langRedirect()) new App();
