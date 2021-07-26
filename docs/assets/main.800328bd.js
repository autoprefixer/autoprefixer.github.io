import{s as e,v as t,a as s,p as r}from"./vendor.249f704f.js";let i;const n={},o=function(e,t){if(!t||0===t.length)return e();if(void 0===i){const e=document.createElement("link").relList;i=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if((e=`/${e}`)in n)return;n[e]=!0;const t=e.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${s}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":i,t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((e,t)=>{r.addEventListener("load",e),r.addEventListener("error",t)})):void 0}))).then((()=>e()))},a=(navigator.language||navigator.userLanguage).split("-")[0].toLowerCase()||"en",l=location.pathname.replace(/\//g,"")||"en";const h=["last 4 version"];new class{constructor(){(()=>{if(!sessionStorage)return;if(sessionStorage.redirected)return;const e="ru"===a||"rus"===a||"by"===a||"uk"===a;return sessionStorage.redirected=!0,"ru"!==l&&e?(location.pathname="/ru/",!0):"en"===l||e?void 0:(location.pathname="/",!0)})()||this.loadChunks()}async loadChunks(){const e=[o((()=>import("./postcss.d73b4a3e.js")),["assets/postcss.d73b4a3e.js","assets/postcss.ab3f6520.js","assets/vendor.249f704f.js"]),o((()=>import("./autoprefixer.8f70f861.js").then((function(e){return e.a}))),["assets/autoprefixer.8f70f861.js","assets/postcss.ab3f6520.js","assets/vendor.249f704f.js"])],[t,s]=await Promise.all(e);this.postcss=t.default,this.autoprefixer=s.default,this.vars(),this.init()}vars(){this.browserList=e.get("autoprefixer:browsers",h),this.withComments=e.get("autoprefixer:withComments",!0),this.$leftPane=document.querySelector(".js-input"),this.$rightPane=document.querySelector(".js-output"),this.$filterForm=document.querySelector(".js-filter"),this.$textFilter=document.querySelector(".js-browsers-filter"),this.$browserListLink=document.querySelector(".js-link-browserlist"),this.$selectButton=document.querySelector(".js-select"),this.$version=document.querySelector(".js-version"),this.$comment=document.querySelector(".js-comment")}init(){this.$textFilter.value=this.browserList.join(", "),this.$leftPane.innerHTML=".example {\n    display: grid;\n    transition: all .5s;\n    user-select: none;\n    background: linear-gradient(to bottom, white, black);\n}\n",this.$leftPane.focus(),this.$comment.checked=this.withComments,this.listeners(),this.updateBrowserListLink(),this.runPrefixer(),this.addVersion()}addVersion(){this.$version.innerHTML=`Postcss: <b>v${t}</b>, autoprefixer: <b>v${s}</b>`}generateOutputComment(){return`/*\n* Prefixed by https://autoprefixer.github.io\n* PostCSS: v${t},\n* Autoprefixer: v${s}\n* Browsers: ${this.browserList}\n*/\n\n`}listeners(){this.$leftPane.addEventListener("keyup",this.runPrefixer.bind(this),!1),this.$filterForm.addEventListener("submit",this.filterUpdate.bind(this),!1),this.$selectButton.addEventListener("click",this.selectResult.bind(this),!1),this.$textFilter.addEventListener("keyup",this.updateBrowserListLink.bind(this),!1),this.$comment.addEventListener("change",this.toggleComment.bind(this),!1)}runPrefixer(){const e=this.$leftPane.value,t={overrideBrowserslist:this.browserList,grid:"autoplace"};this.postcss([this.autoprefixer(t)]).process(e).then((e=>{let t="";this.withComments&&(t+=this.generateOutputComment()),t+=this.textPrepare(e.css),this.$rightPane.innerHTML=t,r.exports.highlightElement(this.$rightPane)})).catch((e=>{console.log(e),this.$rightPane.innerHTML=this.textPrepare(e.toString())}))}textPrepare(e=""){return e.replace(/\</g,"&lt;").replace(/\>/g,"&gt;")}filterUpdate(t){t.preventDefault();const s=this.$textFilter.value.split(",").map((e=>e.trim())),r=s.length?s:DEFAULT_SETTINGS;this.browserList=r,e.set("autoprefixer:browsers",r),this.runPrefixer()}toggleComment(t){const{checked:s}=t.target;this.runPrefixer(),this.withComments=s,e.set("autoprefixer:withComments",s)}selectResult(){var e;if(document.createRange)(t=document.createRange()).selectNode&&t.selectNode(this.$rightPane),(e=window.getSelection()).removeAllRanges(),e.addRange(t);else if(document.body&&document.body.createTextRange){var t;(t=document.body.createTextRange()).moveToElementText(this.$rightPane),t.select()}}updateBrowserListLink(){this.$browserListLink.href=`https://browserl.ist/?q=${encodeURI(this.$textFilter.value)}`}};