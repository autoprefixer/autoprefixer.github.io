import { version as autoprefixerVersion } from "autoprefixer/package.json";
import { version as postcssVersion } from "postcss/package.json";
import { highlightElement } from "prismjs";
import store from "store";

import { CSS_EXAMPLE, DEFAULT_BROWSERS } from "./config";
import langRedirect from "./redirect.js";

import "./main.scss";

class App {
  constructor() {
    if (langRedirect()) return;
    this.loadChunks();
  }

  async loadChunks() {
    const modules = [import("postcss"), import("autoprefixer")];
    const [postcss, autoprefixer] = await Promise.all(modules);
    this.postcss = postcss.default;
    this.autoprefixer = autoprefixer.default;
    this.vars();
    this.init();
  }

  vars() {
    this.browserList = store.get("autoprefixer:browsers", DEFAULT_BROWSERS);
    this.withComments = store.get("autoprefixer:withComments", true);
    this.$leftPane = document.querySelector(".js-input");
    this.$rightPane = document.querySelector(".js-output");
    this.$filterForm = document.querySelector(".js-filter");
    this.$textFilter = document.querySelector(".js-browsers-filter");
    this.$browserListLink = document.querySelector(".js-link-browserlist");
    this.$selectButton = document.querySelector(".js-select");
    this.$version = document.querySelector(".js-version");
    this.$comment = document.querySelector(".js-comment");
  }

  init() {
    this.$textFilter.value = this.browserList.join(", ");
    this.$leftPane.innerHTML = CSS_EXAMPLE;
    this.$leftPane.focus();
    this.$comment.checked = this.withComments;

    this.listeners();
    this.updateBrowserListLink();
    this.runPrefixer();
    this.addVersion();
  }

  addVersion() {
    this.$version.innerHTML = `Postcss: <b>v${postcssVersion}</b>, autoprefixer: <b>v${autoprefixerVersion}</b>`;
  }

  generateOutputComment() {
    return `/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v${postcssVersion},
* Autoprefixer: v${autoprefixerVersion}
* Browsers: ${this.browserList}
*/

`;
  }

  listeners() {
    this.$leftPane.addEventListener(
      "keyup",
      this.runPrefixer.bind(this),
      false,
    );
    this.$filterForm.addEventListener(
      "submit",
      this.filterUpdate.bind(this),
      false,
    );

    this.$selectButton.addEventListener(
      "click",
      this.selectResult.bind(this),
      false,
    );
    this.$textFilter.addEventListener(
      "keyup",
      this.updateBrowserListLink.bind(this),
      false,
    );
    this.$comment.addEventListener(
      "change",
      this.toggleComment.bind(this),
      false,
    );
  }

  async runPrefixer() {
    const inputCSS = this.$leftPane.value;
    const params = {
      overrideBrowserslist: this.browserList,
      grid: "autoplace",
    };

    try {
      const autoprefixer = this.autoprefixer(params);
      const compiled = await this.postcss([autoprefixer]).process(inputCSS);
      let html = "";
      if (this.withComments) html += this.generateOutputComment();
      html += this.textPrepare(compiled.css);
      this.$rightPane.innerHTML = html;
      highlightElement(this.$rightPane);
    } catch (error) {
      this.$rightPane.innerHTML = this.textPrepare(error.toString());
    }
  }

  textPrepare(text = "") {
    return text.replace(/\</g, "&lt;").replace(/\>/g, "&gt;");
  }

  filterUpdate(event) {
    event.preventDefault();

    const browsers = this.$textFilter.value.split(",");
    const trimmedBrowsers = browsers.map((browser) => browser.trim());
    const newValue = trimmedBrowsers.length
      ? trimmedBrowsers
      : DEFAULT_SETTINGS;

    console.info(`🔥 newValue`, newValue);
    this.browserList = newValue;
    store.set("autoprefixer:browsers", newValue);
    this.runPrefixer();
  }

  toggleComment(event) {
    const { checked } = event.target;
    this.runPrefixer();
    this.withComments = checked;
    store.set("autoprefixer:withComments", checked);
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
    this.$browserListLink.href = `https://browsersl.ist/?q=${encodeURI(
      this.$textFilter.value,
    )}`;
  }
}

new App();
