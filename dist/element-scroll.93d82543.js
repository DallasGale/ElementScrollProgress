parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"guaG":[function(require,module,exports) {
"use strict";function e(e,r){return e/r}function r(e){return 100*e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.ConvertNumberToPercentage=e,exports.FormatToPercent=r;
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./functions"),n=document.getElementById("reference-element"),t=document.getElementById("percentage-scrolled"),o=document.getElementById("scroller"),i=document.documentElement.clientHeight;console.log("windowHeight",i),console.log("referenceElement",n.getBoundingClientRect()),window&&(window.addEventListener("resize",function(){i=document.documentElement.clientHeight,console.log("windowHeight",i)}),window.removeEventListener("resize",function(){console.log("resize listener removed")}),window.addEventListener("scroll",function(i){n.getBoundingClientRect().y<0&&window.addEventListener("scroll",function(){var i=n.getBoundingClientRect().y,r=Math.abs(i).toFixed(2);console.log("formattedCurrentValue",r);var l=(0,e.FormatToPercent)((0,e.ConvertNumberToPercentage)(r,5e3)),c=Math.abs(l).toFixed(4);o.style.top=c+"%",t.innerText=c})}),window.removeEventListener("scroll",function(){console.log("scroll listener removed")}));
},{"./functions":"guaG"}]},{},["Focm"], null)
//# sourceMappingURL=/element-scroll.93d82543.js.map