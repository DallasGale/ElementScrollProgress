parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"c4+d":[function(require,module,exports) {
"use strict";function e(e,t){return e/t}function t(e){return 100*e}function r(e){var t=Math.abs(e).toFixed(3);return parseFloat(t)}function n(e){return e.getBoundingClientRect().height}Object.defineProperty(exports,"__esModule",{value:!0}),exports.ConvertNumberToPercentage=e,exports.FormatToPercent=t,exports.FormattedCurrentValue=r,exports.ScrollerSize=n;
},{}],"tBKC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("./functions");exports.handleScrollEvent=function(e,n,s,r){var a={start:0,snapToStart:2,snapToEnd:98,end:100},o=n.getBoundingClientRect().y,i=t.FormatToPercent(t.ConvertNumberToPercentage(t.FormattedCurrentValue(o),e)),d=t.FormattedCurrentValue(i);return d>a.snapToStart&&d<a.snapToEnd?(s.style.top=d+"%",r.innerText=d.toString(),void(s.classList.contains("snap")&&s.classList.remove("snap"))):d>a.start&&d<a.snapToStart?(s.style.top="0%",r.innerText="0%",void s.classList.add("snap")):d>a.snapToEnd&&d<a.end?(s.style.top="100%",r.innerText="100%",void s.classList.add("snap")):void 0};
},{"./functions":"c4+d"}],"KqmS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./handlers"),t=require("./functions"),n=document.getElementById("reference-element"),r=document.getElementById("percentage-scrolled"),i=document.getElementById("scroller"),l=document.documentElement,o=l.clientHeight,c=t.ScrollerSize(i);if(console.log("scrollerHeight",c),window){if(ResizeObserver){var d=new ResizeObserver(function(e){for(var t=0,n=e;t<n.length;t++){var r=n[t];o=r.target.clientHeight}});d.observe(document.documentElement)}else window.addEventListener("resize",function(){o=document.documentElement.clientHeight});var s=n.clientHeight-o,u=Math.sign(n.getBoundingClientRect().y);window.addEventListener("scroll",function(t){-1===(u=Math.sign(n.getBoundingClientRect().y))&&e.handleScrollEvent(s,n,i,r)},{passive:!0})}
},{"./handlers":"tBKC","./functions":"c4+d"}]},{},["KqmS"], null)
//# sourceMappingURL=/scripts.fd47278d.js.map