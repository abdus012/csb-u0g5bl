parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"D9Nj":[function(require,module,exports) {

},{}],"H99C":[function(require,module,exports) {
"use strict";require("./styles.css");var e,t=document.getElementsByTagName("LI");for(e=0;e<t.length;e++){var n=document.createElement("SPAN"),l=document.createTextNode("×");n.className="close",n.appendChild(l),t[e].appendChild(n)}var a=document.getElementsByClassName("close");for(e=0;e<a.length;e++)a[e].onclick=function(){this.parentElement.style.display="none"};var c=document.querySelector("ul");function d(){var t=document.createElement("li"),n=document.getElementById("myInput").value,l=document.createTextNode(n);t.appendChild(l),""===n?alert("You must write something!"):document.getElementById("myUL").appendChild(t),document.getElementById("myInput").value="";var c=document.createElement("SPAN"),d=document.createTextNode("×");for(c.className="close",c.appendChild(d),t.appendChild(c),e=0;e<a.length;e++)a[e].onclick=function(){this.parentElement.style.display="none"}}c.addEventListener("click",function(e){"LI"===e.target.tagName&&e.target.classList.toggle("checked")},!1);
},{"./styles.css":"D9Nj"}]},{},["H99C"], null)
//# sourceMappingURL=/csb-u0g5bl/src.14d5cf37.js.map