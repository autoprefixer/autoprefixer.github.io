require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var a=e[n]=new t.Module;r[n][0].call(a.exports,i,a,a.exports)}return e[n].exports}function o(){this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({16:[function(require,module,exports) {
"use strict";exports.__esModule=!0,exports.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};
},{}],27:[function(require,module,exports) {

var e=module.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e);
},{}],22:[function(require,module,exports) {
var e=module.exports={version:"2.5.3"};"number"==typeof __e&&(__e=e);
},{}],35:[function(require,module,exports) {
module.exports=function(o){if("function"!=typeof o)throw TypeError(o+" is not a function!");return o};
},{}],28:[function(require,module,exports) {
var r=require("./_a-function");module.exports=function(n,t,u){if(r(n),void 0===t)return n;switch(u){case 1:return function(r){return n.call(t,r)};case 2:return function(r,u){return n.call(t,r,u)};case 3:return function(r,u,e){return n.call(t,r,u,e)}}return function(){return n.apply(t,arguments)}};
},{"./_a-function":35}],36:[function(require,module,exports) {
module.exports=function(o){return"object"==typeof o?null!==o:"function"==typeof o};
},{}],31:[function(require,module,exports) {
var r=require("./_is-object");module.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e};
},{"./_is-object":36}],30:[function(require,module,exports) {
module.exports=function(r){try{return!!r()}catch(r){return!0}};
},{}],25:[function(require,module,exports) {
module.exports=!require("./_fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a});
},{"./_fails":30}],37:[function(require,module,exports) {
var e=require("./_is-object"),r=require("./_global").document,t=e(r)&&e(r.createElement);module.exports=function(e){return t?r.createElement(e):{}};
},{"./_is-object":36,"./_global":27}],32:[function(require,module,exports) {
module.exports=!require("./_descriptors")&&!require("./_fails")(function(){return 7!=Object.defineProperty(require("./_dom-create")("div"),"a",{get:function(){return 7}}).a});
},{"./_descriptors":25,"./_fails":30,"./_dom-create":37}],33:[function(require,module,exports) {
var t=require("./_is-object");module.exports=function(r,e){if(!t(r))return r;var o,n;if(e&&"function"==typeof(o=r.toString)&&!t(n=o.call(r)))return n;if("function"==typeof(o=r.valueOf)&&!t(n=o.call(r)))return n;if(!e&&"function"==typeof(o=r.toString)&&!t(n=o.call(r)))return n;throw TypeError("Can't convert object to primitive value")};
},{"./_is-object":36}],26:[function(require,module,exports) {
var e=require("./_an-object"),r=require("./_ie8-dom-define"),t=require("./_to-primitive"),i=Object.defineProperty;exports.f=require("./_descriptors")?Object.defineProperty:function(o,n,u){if(e(o),n=t(n,!0),e(u),r)try{return i(o,n,u)}catch(e){}if("get"in u||"set"in u)throw TypeError("Accessors not supported!");return"value"in u&&(o[n]=u.value),o};
},{"./_an-object":31,"./_ie8-dom-define":32,"./_to-primitive":33,"./_descriptors":25}],34:[function(require,module,exports) {
module.exports=function(e,r){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:r}};
},{}],29:[function(require,module,exports) {
var r=require("./_object-dp"),e=require("./_property-desc");module.exports=require("./_descriptors")?function(t,u,o){return r.f(t,u,e(1,o))}:function(r,e,t){return r[e]=t,r};
},{"./_object-dp":26,"./_property-desc":34,"./_descriptors":25}],24:[function(require,module,exports) {

var e=require("./_global"),r=require("./_core"),n=require("./_ctx"),t=require("./_hide"),i="prototype",u=function(o,c,a){var f,l,s,p=o&u.F,v=o&u.G,h=o&u.S,w=o&u.P,q=o&u.B,y=o&u.W,_=v?r:r[c]||(r[c]={}),d=_[i],F=v?e:h?e[c]:(e[c]||{})[i];v&&(a=c);for(f in a)(l=!p&&F&&void 0!==F[f])&&f in _||(s=l?F[f]:a[f],_[f]=v&&"function"!=typeof F[f]?a[f]:q&&l?n(s,e):y&&F[f]==s?function(e){var r=function(r,n,t){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(r);case 2:return new e(r,n)}return new e(r,n,t)}return e.apply(this,arguments)};return r[i]=e[i],r}(s):w&&"function"==typeof s?n(Function.call,s):s,w&&((_.virtual||(_.virtual={}))[f]=s,o&u.R&&d&&!d[f]&&t(d,f,s)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,module.exports=u;
},{"./_global":27,"./_core":22,"./_ctx":28,"./_hide":29}],21:[function(require,module,exports) {
var e=require("./_export");e(e.S+e.F*!require("./_descriptors"),"Object",{defineProperty:require("./_object-dp").f});
},{"./_export":24,"./_descriptors":25,"./_object-dp":26}],20:[function(require,module,exports) {
require("../../modules/es6.object.define-property");var e=require("../../modules/_core").Object;module.exports=function(r,o,t){return e.defineProperty(r,o,t)};
},{"../../modules/es6.object.define-property":21,"../../modules/_core":22}],18:[function(require,module,exports) {
module.exports={default:require("core-js/library/fn/object/define-property"),__esModule:!0};
},{"core-js/library/fn/object/define-property":20}],17:[function(require,module,exports) {
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}exports.__esModule=!0;var r=require("../core-js/object/define-property"),t=e(r);exports.default=function(){function e(e,r){for(var u=0;u<r.length;u++){var n=r[u];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,t.default)(e,n.key,n)}}return function(r,t,u){return t&&e(r.prototype,t),u&&e(r,u),r}}();
},{"../core-js/object/define-property":18}],14:[function(require,module,exports) {
var global = (1,eval)("this");
function n(){return Object.assign?Object.assign:function(n,t,r,e){for(var i=1;i<arguments.length;i++)o(Object(arguments[i]),function(t,r){n[r]=t});return n}}function t(){if(Object.create)return function(n,t,r,e){var o=i(arguments,1);return s.apply(this,[Object.create(n)].concat(o))};{function n(){}return function(t,r,e,o){var c=i(arguments,1);return n.prototype=t,s.apply(this,[new n].concat(c))}}}function r(){return String.prototype.trim?function(n){return String.prototype.trim.call(n)}:function(n){return n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}}function e(n,t){return function(){return t.apply(n,Array.prototype.slice.call(arguments,0))}}function i(n,t){return Array.prototype.slice.call(n,t||0)}function o(n,t){u(n,function(n,r){return t(n,r),!1})}function c(n,t){var r=f(n)?[]:{};return u(n,function(n,e){return r[e]=t(n,e),!1}),r}function u(n,t){if(f(n)){for(var r=0;r<n.length;r++)if(t(n[r],r))return n[r]}else for(var e in n)if(n.hasOwnProperty(e)&&t(n[e],e))return n[e]}function f(n){return null!=n&&"function"!=typeof n&&"number"==typeof n.length}function a(n){return n&&"[object Function]"==={}.toString.call(n)}function l(n){return n&&"[object Object]"==={}.toString.call(n)}var p=(0,eval)("this"),s=n(),y=t(),b=r(),g="undefined"!=typeof window?window:p;module.exports={assign:s,create:y,trim:b,bind:e,slice:i,each:o,map:c,pluck:u,isList:f,isFunction:a,isObject:l,Global:g};
},{}],5:[function(require,module,exports) {
function e(){var e="undefined"==typeof console?null:console;if(e){(e.warn?e.warn:e.log).apply(e,arguments)}}function t(t,n,h){h||(h=""),t&&!u(t)&&(t=[t]),n&&!u(n)&&(n=[n]);var d=h?"__storejs_"+h+"_":"",p=h?new RegExp("^"+d):null;if(!/^[a-zA-Z0-9_\-]*$/.test(h))throw new Error("store.js namespaces can only have alphanumerics + underscores and dashes");var g=o({_namespacePrefix:d,_namespaceRegexp:p,_testStorage:function(e){try{var t="__storejs__test__";e.write(t,t);var n=e.read(t)===t;return e.remove(t),n}catch(e){return!1}},_assignPluginFnProp:function(e,t){var n=this[t];this[t]=function(){var t=r(arguments,0),i=this,s=[function(){if(n)return a(arguments,function(e,n){t[n]=e}),n.apply(i,t)}].concat(t);return e.apply(i,s)}},_serialize:function(e){return JSON.stringify(e)},_deserialize:function(e,t){if(!e)return t;var n="";try{n=JSON.parse(e)}catch(t){n=e}return void 0!==n?n:t},_addStorage:function(e){this.enabled||this._testStorage(e)&&(this.storage=e,this.enabled=!0)},_addPlugin:function(e){var t=this;if(u(e))a(e,function(e){t._addPlugin(e)});else{if(!i(this.plugins,function(t){return e===t})){if(this.plugins.push(e),!c(e))throw new Error("Plugins must be function values that return objects");var n=e.call(this);if(!l(n))throw new Error("Plugins must return an object of function properties");a(n,function(n,r){if(!c(n))throw new Error("Bad plugin property: "+r+" from plugin "+e.name+". Plugins should only return functions.");t._assignPluginFnProp(n,r)})}}},addStorage:function(t){e("store.addStorage(storage) is deprecated. Use createStore([storages])"),this._addStorage(t)}},f,{plugins:[]});return g.raw={},a(g,function(e,t){c(e)&&(g.raw[t]=s(g,e))}),a(t,function(e){g._addStorage(e)}),a(n,function(e){g._addPlugin(e)}),g}var n=require("./util"),r=n.slice,i=n.pluck,a=n.each,s=n.bind,o=n.create,u=n.isList,c=n.isFunction,l=n.isObject;module.exports={createStore:t};var f={version:"2.0.12",enabled:!1,get:function(e,t){var n=this.storage.read(this._namespacePrefix+e);return this._deserialize(n,t)},set:function(e,t){return void 0===t?this.remove(e):(this.storage.write(this._namespacePrefix+e,this._serialize(t)),t)},remove:function(e){this.storage.remove(this._namespacePrefix+e)},each:function(e){var t=this;this.storage.each(function(n,r){e.call(t,t._deserialize(n),(r||"").replace(t._namespaceRegexp,""))})},clearAll:function(){this.storage.clearAll()},hasNamespace:function(e){return this._namespacePrefix=="__storejs_"+e+"_"},createStore:function(){return t.apply(this,arguments)},addPlugin:function(e){this._addPlugin(e)},namespace:function(e){return t(this.storage,this.plugins,e)}};
},{"./util":14}],8:[function(require,module,exports) {
function e(){return l.localStorage}function r(r){return e().getItem(r)}function t(r,t){return e().setItem(r,t)}function n(t){for(var n=e().length-1;n>=0;n--){var o=e().key(n);t(r(o),o)}}function o(r){return e().removeItem(r)}function u(){return e().clear()}var a=require("../src/util"),l=a.Global;module.exports={name:"localStorage",read:r,write:t,each:n,remove:o,clearAll:u};
},{"../src/util":14}],9:[function(require,module,exports) {
function e(e){return u[e]}function r(e,r){u[e]=r}function o(e){for(var r=u.length-1;r>=0;r--){var o=u.key(r);e(u[o],o)}}function n(e){return u.removeItem(e)}function t(){o(function(e,r){delete u[e]})}var l=require("../src/util"),a=l.Global;module.exports={name:"oldFF-globalStorage",read:e,write:r,each:o,remove:n,clearAll:t};var u=a.globalStorage;
},{"../src/util":14}],12:[function(require,module,exports) {
function e(e,t){if(!d){var n=i(e);v(function(e){e.setAttribute(n,t),e.save(l)})}}function t(e){if(!d){var t=i(e),n=null;return v(function(e){n=e.getAttribute(t)}),n}}function n(e){v(function(t){for(var n=t.XMLDocument.documentElement.attributes,r=n.length-1;r>=0;r--){var a=n[r];e(t.getAttribute(a.name),a.name)}})}function r(e){var t=i(e);v(function(e){e.removeAttribute(t),e.save(l)})}function a(){v(function(e){var t=e.XMLDocument.documentElement.attributes;e.load(l);for(var n=t.length-1;n>=0;n--)e.removeAttribute(t[n].name);e.save(l)})}function i(e){return e.replace(/^\d/,"___$&").replace(f,"___")}function o(){if(!m||!m.documentElement||!m.documentElement.addBehavior)return null;var e,t,n;try{(t=new ActiveXObject("htmlfile")).open(),t.write('<script>document.w=window<\/script><iframe src="/favicon.ico"></iframe>'),t.close(),e=t.w.frames[0].document,n=e.createElement("div")}catch(t){n=m.createElement("div"),e=m.body}return function(t){var r=[].slice.call(arguments,0);r.unshift(n),e.appendChild(n),n.addBehavior("#default#userData"),n.load(l),t.apply(this,r),e.removeChild(n)}}var u=require("../src/util"),c=u.Global;module.exports={name:"oldIE-userDataStorage",write:e,read:t,each:n,remove:r,clearAll:a};var l="storejs",m=c.document,v=o(),d=(c.navigator?c.navigator.userAgent:"").match(/ (MSIE 8|MSIE 9|MSIE 10)\./),f=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g");
},{"../src/util":14}],10:[function(require,module,exports) {
function e(e){if(!e||!o(e))return null;var c="(?:^|.*;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*";return unescape(s.cookie.replace(new RegExp(c),"$1"))}function c(e){for(var c=s.cookie.split(/; ?/g),n=c.length-1;n>=0;n--)if(p(c[n])){var r=c[n].split("="),a=unescape(r[0]);e(unescape(r[1]),a)}}function n(e,c){e&&(s.cookie=escape(e)+"="+escape(c)+"; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/")}function r(e){e&&o(e)&&(s.cookie=escape(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/")}function a(){c(function(e,c){r(c)})}function o(e){return new RegExp("(?:^|;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(s.cookie)}var i=require("../src/util"),t=i.Global,p=i.trim;module.exports={name:"cookieStorage",read:e,write:n,each:c,remove:r,clearAll:a};var s=t.document;
},{"../src/util":14}],11:[function(require,module,exports) {
function e(){return i.sessionStorage}function r(r){return e().getItem(r)}function t(r,t){return e().setItem(r,t)}function n(t){for(var n=e().length-1;n>=0;n--){var o=e().key(n);t(r(o),o)}}function o(r){return e().removeItem(r)}function u(){return e().clear()}var a=require("../src/util"),i=a.Global;module.exports={name:"sessionStorage",read:r,write:t,each:n,remove:o,clearAll:u};
},{"../src/util":14}],13:[function(require,module,exports) {
function e(e){return a[e]}function n(e,n){a[e]=n}function r(e){for(var n in a)a.hasOwnProperty(n)&&e(a[n],n)}function o(e){delete a[e]}function t(e){a={}}module.exports={name:"memoryStorage",read:e,write:n,each:r,remove:o,clearAll:t};var a={};
},{}],6:[function(require,module,exports) {
module.exports=[require("./localStorage"),require("./oldFF-globalStorage"),require("./oldIE-userDataStorage"),require("./cookieStorage"),require("./sessionStorage"),require("./memoryStorage")];
},{"./localStorage":8,"./oldFF-globalStorage":9,"./oldIE-userDataStorage":12,"./cookieStorage":10,"./sessionStorage":11,"./memoryStorage":13}],15:[function(require,module,exports) {
"object"!=typeof JSON&&(JSON={}),function(){"use strict";function f(t){return t<10?"0"+t:t}function this_value(){return this.valueOf()}function quote(t){return rx_escapable.lastIndex=0,rx_escapable.test(t)?'"'+t.replace(rx_escapable,function(t){var e=meta[t];return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}function str(t,e){var r,n,o,u,f,a=gap,i=e[t];switch(i&&"object"==typeof i&&"function"==typeof i.toJSON&&(i=i.toJSON(t)),"function"==typeof rep&&(i=rep.call(e,t,i)),typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";if(gap+=indent,f=[],"[object Array]"===Object.prototype.toString.apply(i)){for(u=i.length,r=0;r<u;r+=1)f[r]=str(r,i)||"null";return o=0===f.length?"[]":gap?"[\n"+gap+f.join(",\n"+gap)+"\n"+a+"]":"["+f.join(",")+"]",gap=a,o}if(rep&&"object"==typeof rep)for(u=rep.length,r=0;r<u;r+=1)"string"==typeof rep[r]&&(o=str(n=rep[r],i))&&f.push(quote(n)+(gap?": ":":")+o);else for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(o=str(n,i))&&f.push(quote(n)+(gap?": ":":")+o);return o=0===f.length?"{}":gap?"{\n"+gap+f.join(",\n"+gap)+"\n"+a+"}":"{"+f.join(",")+"}",gap=a,o}}var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value);var gap,indent,meta,rep;"function"!=typeof JSON.stringify&&(meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(t,e,r){var n;if(gap="",indent="","number"==typeof r)for(n=0;n<r;n+=1)indent+=" ";else"string"==typeof r&&(indent=r);if(rep=e,e&&"function"!=typeof e&&("object"!=typeof e||"number"!=typeof e.length))throw new Error("JSON.stringify");return str("",{"":t})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(t,e){var r,n,o=t[e];if(o&&"object"==typeof o)for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(void 0!==(n=walk(o,r))?o[r]=n:delete o[r]);return reviver.call(t,e,o)}var j;if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text)&&(text=text.replace(rx_dangerous,function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})),rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}();
},{}],7:[function(require,module,exports) {
function e(){return require("./lib/json2"),{}}module.exports=e;
},{"./lib/json2":15}],4:[function(require,module,exports) {
var e=require("../src/store-engine"),r=require("../storages/all"),s=[require("../plugins/json2")];module.exports=e.createStore(r,s);
},{"../src/store-engine":5,"../storages/all":6,"../plugins/json2":7}],2:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e="en",r={ru:"/ru/",en:"/"},t=navigator.language||navigator.userLanguage,a=t.split("-")[0].toLowerCase()||e,n=location.pathname.replace(/\//g,"")||e;exports.default=function(){if(a===n)return!1;if(!sessionStorage)return!1;if(sessionStorage.redirected)return!1;if(r[a])return sessionStorage.redirected=!0,location.pathname=r[a],!0};
},{}],23:[function(require,module,exports) {
var r=require("../../modules/_core"),i=r.JSON||(r.JSON={stringify:JSON.stringify});module.exports=function(r){return i.stringify.apply(i,arguments)};
},{"../../modules/_core":22}],19:[function(require,module,exports) {
module.exports={default:require("core-js/library/fn/json/stringify"),__esModule:!0};
},{"core-js/library/fn/json/stringify":23}],3:[function(require,module,exports) {
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}var t=require("babel-runtime/core-js/json/stringify"),n=e(t);self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{};var a=function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=self.Prism={util:{encode:function(e){return e instanceof a?new a(e.type,t.util.encode(e.content),e.alias):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){switch(t.util.type(e)){case"Object":var n={};for(var a in e)e.hasOwnProperty(a)&&(n[a]=t.util.clone(e[a]));return n;case"Array":return e.slice()}return e}},languages:{extend:function(e,n){var a=t.util.clone(t.languages[e]);for(var r in n)a[r]=n[r];return a},insertBefore:function(e,n,a,r){var i=(r=r||t.languages)[e],s={};for(var l in i)if(i.hasOwnProperty(l)){if(l==n)for(var o in a)a.hasOwnProperty(o)&&(s[o]=a[o]);s[l]=i[l]}return r[e]=s},DFS:function(e,n,a){for(var r in e)e.hasOwnProperty(r)&&(n.call(e,r,e[r],a||r),"Object"===t.util.type(e[r])?t.languages.DFS(e[r],n):"Array"===t.util.type(e[r])&&t.languages.DFS(e[r],n,r))}},highlightAll:function(e,n){for(var a,r=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),i=0;a=r[i++];)t.highlightElement(a,!0===e,n)},highlightElement:function(r,i,s){for(var l,o,g=r;g&&!e.test(g.className);)g=g.parentNode;if(g&&(l=(g.className.match(e)||[,""])[1],o=t.languages[l]),o){r.className=r.className.replace(e,"").replace(/\s+/g," ")+" language-"+l,g=r.parentNode,/pre/i.test(g.nodeName)&&(g.className=g.className.replace(e,"").replace(/\s+/g," ")+" language-"+l);var u=r.textContent;if(u){var c={element:r,language:l,grammar:o,code:u};if(t.hooks.run("before-highlight",c),i&&self.Worker){var p=new Worker(t.filename);p.onmessage=function(e){c.highlightedCode=a.stringify(JSON.parse(e.data),l),t.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,s&&s.call(c.element),t.hooks.run("after-highlight",c)},p.postMessage((0,n.default)({language:c.language,code:c.code}))}else c.highlightedCode=t.highlight(c.code,c.grammar,c.language),t.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,s&&s.call(r),t.hooks.run("after-highlight",c)}}},highlight:function(e,n,r){var i=t.tokenize(e,n);return a.stringify(t.util.encode(i),r)},tokenize:function(e,n){var a=t.Token,r=[e],i=n.rest;if(i){for(var s in i)n[s]=i[s];delete n.rest}e:for(var s in n)if(n.hasOwnProperty(s)&&n[s]){var l=n[s];l="Array"===t.util.type(l)?l:[l];for(var o=0;o<l.length;++o){var g=l[o],u=g.inside,c=!!g.lookbehind,p=0,d=g.alias;g=g.pattern||g;for(var f=0;f<r.length;f++){var h=r[f];if(r.length>e.length)break e;if(!(h instanceof a)){g.lastIndex=0;if(m=g.exec(h)){c&&(p=m[1].length);var m,y=m.index-1+p,b=y+(m=m[0].slice(p)).length,v=h.slice(0,y+1),w=h.slice(b+1),k=[f,1];v&&k.push(v);var A=new a(s,u?t.tokenize(m,u):m,d);k.push(A),w&&k.push(w),Array.prototype.splice.apply(r,k)}}}}}return r},hooks:{all:{},add:function(e,n){var a=t.hooks.all;a[e]=a[e]||[],a[e].push(n)},run:function(e,n){var a=t.hooks.all[e];if(a&&a.length)for(var r,i=0;r=a[i++];)r(n)}}},a=t.Token=function(e,t,n){this.type=e,this.content=t,this.alias=n};if(a.stringify=function(e,n,r){if("string"==typeof e)return e;if("[object Array]"==Object.prototype.toString.call(e))return e.map(function(t){return a.stringify(t,n,e)}).join("");var i={type:e.type,content:a.stringify(e.content,n,r),tag:"span",classes:["token",e.type],attributes:{},language:n,parent:r};if("comment"==i.type&&(i.attributes.spellcheck="true"),e.alias){var s="Array"===t.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,s)}t.hooks.run("wrap",i);var l="";for(var o in i.attributes)l+=o+'="'+(i.attributes[o]||"")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'" '+l+">"+i.content+"</"+i.tag+">"},!self.document)return self.addEventListener?(self.addEventListener("message",function(e){var a=JSON.parse(e.data),r=a.language,i=a.code;self.postMessage((0,n.default)(t.util.encode(t.tokenize(i,t.languages[r])))),self.close()},!1),self.Prism):self.Prism;var r=document.getElementsByTagName("script");return(r=r[r.length-1])&&(t.filename=r.src,document.addEventListener&&!r.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll)),self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=a),a.languages.markup={comment:/<!--[\w\W]*?-->/g,prolog:/<\?.+?\?>/,doctype:/<!DOCTYPE.+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+))?\s*)*\/?>/gi,inside:{tag:{pattern:/^<\/?[\w:-]+/i,inside:{punctuation:/^<\/?/,namespace:/^[\w-]+?:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi,inside:{punctuation:/=|>|"/g}},punctuation:/\/?>/g,"attr-name":{pattern:/[\w:-]+/g,inside:{namespace:/^[\w-]+?:/}}}},entity:/\&#?[\da-z]{1,8};/gi},a.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),a.languages.css={comment:/\/\*[\w\W]*?\*\//g,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*{))/gi,inside:{punctuation:/[;:]/g}},url:/url\((["']?).*?\1\)/gi,selector:/[^\{\}\s][^\{\};]*(?=\s*\{)/g,property:/(\b|\B)[\w-]+(?=\s*:)/gi,string:/("|')(\\?.)*?\1/g,important:/\B!important\b/gi,punctuation:/[\{\};:]/g,function:/[-a-z0-9]+(?=\()/gi},a.languages.markup&&a.languages.insertBefore("markup","tag",{style:{pattern:/<style[\w\W]*?>[\w\W]*?<\/style>/gi,inside:{tag:{pattern:/<style[\w\W]*?>|<\/style>/gi,inside:a.languages.markup.tag.inside},rest:a.languages.css}}}),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//g,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*?(\r?\n|$)/g,lookbehind:!0}],string:/("|')(\\?.)*?\1/g,"class-name":{pattern:/((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/gi,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/g,boolean:/\b(true|false)\b/g,function:{pattern:/[a-z0-9_]+\(/gi,inside:{punctuation:/\(/}},number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,operator:/[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|\~|\^|\%/g,ignore:/&(lt|gt|amp);/gi,punctuation:/[{}[\];(),.:]/g},a.languages.javascript=a.languages.extend("clike",{keyword:/\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/g,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?|NaN|-?Infinity)\b/g}),a.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,lookbehind:!0}}),a.languages.markup&&a.languages.insertBefore("markup","tag",{script:{pattern:/<script[\w\W]*?>[\w\W]*?<\/script>/gi,inside:{tag:{pattern:/<script[\w\W]*?>|<\/script>/gi,inside:a.languages.markup.tag.inside},rest:a.languages.javascript}}}),a.hooks.add("after-highlight",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&-1!==t.className.indexOf("line-numbers")){var n,a=1+e.code.split("\n").length;lines=new Array(a),lines=lines.join("<span></span>"),(n=document.createElement("span")).className="line-numbers-rows",n.innerHTML=lines,t.hasAttribute("data-start")&&(t.style.counterReset="linenumber "+(parseInt(t.getAttribute("data-start"),10)-1)),e.element.appendChild(n)}}),function(){if(self.Prism){var e={csharp:"C#",cpp:"C++"};a.hooks.add("before-highlight",function(t){var n=e[t.language]||t.language;t.element.setAttribute("data-language",n)})}}();
},{"babel-runtime/core-js/json/stringify":19}],1:[function(require,module,exports) {
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}var t=require("babel-runtime/helpers/classCallCheck"),r=e(t),i=require("babel-runtime/helpers/createClass"),s=e(i),n=require("store"),u=e(n),l=require("./redirect.js"),a=e(l),o=require("./highlight.js"),h=["last 4 version"],c=function(){function e(){(0,r.default)(this,e),this.vars(),this.init()}return(0,s.default)(e,[{key:"vars",value:function(){this.browserList=u.default.get("autoprefixer:browsers")||h,this.$leftPane=document.querySelector(".js-input"),this.$rightPane=document.querySelector(".js-output"),this.$filterForm=document.querySelector(".js-filter"),this.$textFilter=document.querySelector(".js-browsers-filter"),this.$browserListLink=document.querySelector(".js-link-browserlist"),this.$selectButton=document.querySelector(".js-select")}},{key:"init",value:function(){this.$textFilter.value=this.browserList.join(", "),this.$leftPane.focus(),u.default.remove("browsers"),this.listeners(),this.updateBrowserListLink(),this.runPrefixer()}},{key:"listeners",value:function(){this.$leftPane.addEventListener("keyup",this.runPrefixer.bind(this),!1),this.$filterForm.addEventListener("submit",this.filterUpdate.bind(this),!1),this.$selectButton.addEventListener("click",this.selectResult.bind(this),!1),this.$textFilter.addEventListener("keyup",this.updateBrowserListLink.bind(this),!1)}},{key:"runPrefixer",value:function(){var e=this.$leftPane.value,t={browsers:this.browserList,grid:!0};try{var r=window.autoprefixer.process(e,{},t);this.$rightPane.innerHTML=this.textPrepare(r.css),(0,o.highlightElement)(this.$rightPane)}catch(e){this.$rightPane.innerHTML=this.textPrepare(e.toString())}}},{key:"textPrepare",value:function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").replace(/\</g,"&lt;").replace(/\>/g,"&gt;")}},{key:"filterUpdate",value:function(e){e.preventDefault();var t=this.$textFilter.value.split(",").map(function(e){return e.trim()}),r=t.length?t:DEFAULT_SETTINGS;this.browserList=r,u.default.set("autoprefixer:browsers",r),this.runPrefixer()}},{key:"selectResult",value:function(){if(document.createRange){var e;(t=document.createRange()).selectNode&&t.selectNode(this.$rightPane),(e=window.getSelection()).removeAllRanges(),e.addRange(t)}else if(document.body&&document.body.createTextRange){var t;(t=document.body.createTextRange()).moveToElementText(this.$rightPane),t.select()}}},{key:"updateBrowserListLink",value:function(){this.$browserListLink.href=encodeURI("http://browserl.ist/?q="+this.$textFilter.value)}}]),e}();(0,a.default)()||new c;
},{"babel-runtime/helpers/classCallCheck":16,"babel-runtime/helpers/createClass":17,"store":4,"./redirect.js":2,"./highlight.js":3}]},{},[1])