"use strict";function hasNativeFlag(e){var t=!0;try{new RegExp("",e)}catch(n){t=!1}return t}function augment(e,t,n,a,r){var i;if(e[REGEX_DATA]={captureNames:t},r)return e;if(e.__proto__)e.__proto__=XRegExp.prototype;else for(i in XRegExp.prototype)e[i]=XRegExp.prototype[i];return e[REGEX_DATA].source=n,e[REGEX_DATA].flags=a?a.split("").sort().join(""):a,e}function clipDuplicates(e){return nativ.replace.call(e,/([\s\S])(?=[\s\S]*\1)/g,"")}function copyRegex(e,t){if(!XRegExp.isRegExp(e))throw new TypeError("Type RegExp expected");var n=e[REGEX_DATA]||{},a=getNativeFlags(e),r="",i="",l=null,o=null;return t=t||{},t.removeG&&(i+="g"),t.removeY&&(i+="y"),i&&(a=nativ.replace.call(a,new RegExp("["+i+"]+","g"),"")),t.addG&&(r+="g"),t.addY&&(r+="y"),r&&(a=clipDuplicates(a+r)),t.isInternalOnly||(void 0!==n.source&&(l=n.source),null!=n.flags&&(o=r?clipDuplicates(n.flags+r):n.flags)),e=augment(new RegExp(e.source,a),hasNamedCapture(e)?n.captureNames.slice(0):null,l,o,t.isInternalOnly)}function dec(e){return parseInt(e,16)}function getNativeFlags(e){return hasFlagsProp?e.flags:nativ.exec.call(/\/([a-z]*)$/i,RegExp.prototype.toString.call(e))[1]}function hasNamedCapture(e){return!(!e[REGEX_DATA]||!e[REGEX_DATA].captureNames)}function hex(e){return parseInt(e,10).toString(16)}function indexOf(e,t){var n,a=e.length;for(n=0;a>n;++n)if(e[n]===t)return n;return-1}function isType(e,t){return toString.call(e)==="[object "+t+"]"}function isQuantifierNext(e,t,n){return nativ.test.call(n.indexOf("x")>-1?/^(?:\s+|#.*|\(\?#[^)]*\))*(?:[?*+]|{\d+(?:,\d*)?})/:/^(?:\(\?#[^)]*\))*(?:[?*+]|{\d+(?:,\d*)?})/,e.slice(t))}function pad4(e){for(;e.length<4;)e="0"+e;return e}function prepareFlags(e,t){var n;if(clipDuplicates(t)!==t)throw new SyntaxError("Invalid duplicate regex flag "+t);for(e=nativ.replace.call(e,/^\(\?([\w$]+)\)/,function(e,n){if(nativ.test.call(/[gy]/,n))throw new SyntaxError("Cannot use flag g or y in mode modifier "+e);return t=clipDuplicates(t+n),""}),n=0;n<t.length;++n)if(!registeredFlags[t.charAt(n)])throw new SyntaxError("Unknown regex flag "+t.charAt(n));return{pattern:e,flags:t}}function prepareOptions(e){var t={};return isType(e,"String")?(XRegExp.forEach(e,/[^\s,]+/,function(e){t[e]=!0}),t):e}function registerFlag(e){if(!/^[\w$]$/.test(e))throw new Error("Flag must be a single character A-Za-z0-9_$");registeredFlags[e]=!0}function runTokens(e,t,n,a,r){for(var i,l,o=tokens.length,s=e.charAt(n),p=null;o--;)if(l=tokens[o],!(l.leadChar&&l.leadChar!==s||l.scope!==a&&"all"!==l.scope||l.flag&&-1===t.indexOf(l.flag))&&(i=XRegExp.exec(e,l.regex,n,"sticky"))){p={matchLength:i[0].length,output:l.handler.call(r,i,a,t),reparse:l.reparse};break}return p}function setAstral(e){features.astral=e}function setNatives(e){RegExp.prototype.exec=(e?fixed:nativ).exec,RegExp.prototype.test=(e?fixed:nativ).test,String.prototype.match=(e?fixed:nativ).match,String.prototype.replace=(e?fixed:nativ).replace,String.prototype.split=(e?fixed:nativ).split,features.natives=e}function toObject(e){if(null==e)throw new TypeError("Cannot convert null or undefined to object");return e}function XRegExp(e,t){var n,a,r,i,l,o={hasNamedCapture:!1,captureNames:[]},s=defaultScope,p="",c=0;if(XRegExp.isRegExp(e)){if(void 0!==t)throw new TypeError("Cannot supply flags when copying a RegExp");return copyRegex(e)}if(e=void 0===e?"":String(e),t=void 0===t?"":String(t),XRegExp.isInstalled("astral")&&-1===t.indexOf("A")&&(t+="A"),patternCache[e]||(patternCache[e]={}),!patternCache[e][t]){for(n=prepareFlags(e,t),i=n.pattern,l=n.flags;c<i.length;){do n=runTokens(i,l,c,s,o),n&&n.reparse&&(i=i.slice(0,c)+n.output+i.slice(c+n.matchLength));while(n&&n.reparse);n?(p+=n.output,c+=n.matchLength||1):(a=XRegExp.exec(i,nativeTokens[s],c,"sticky")[0],p+=a,c+=a.length,"["===a&&s===defaultScope?s=classScope:"]"===a&&s===classScope&&(s=defaultScope))}patternCache[e][t]={pattern:p,flags:nativ.replace.call(l,/[^gimuy]+/g,""),captures:o.hasNamedCapture?o.captureNames:null}}return r=patternCache[e][t],augment(new RegExp(r.pattern,r.flags),r.captures,e,t)}var REGEX_DATA="xregexp",features={astral:!1,natives:!1},nativ={exec:RegExp.prototype.exec,test:RegExp.prototype.test,match:String.prototype.match,replace:String.prototype.replace,split:String.prototype.split},fixed={},regexCache={},patternCache={},tokens=[],defaultScope="default",classScope="class",nativeTokens={"default":/\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|\(\?[:=!]|[?*+]\?|{\d+(?:,\d*)?}\??|[\s\S]/,"class":/\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|[\s\S]/},replacementToken=/\$(?:{([\w$]+)}|(\d\d?|[\s\S]))/g,correctExecNpcg=void 0===nativ.exec.call(/()??/,"")[1],hasFlagsProp=void 0!==/x/.flags,toString={}.toString,hasNativeU=hasNativeFlag("u"),hasNativeY=hasNativeFlag("y"),registeredFlags={g:!0,i:!0,m:!0,u:hasNativeU,y:hasNativeY};XRegExp.prototype=new RegExp,XRegExp.version="3.1.0",XRegExp._hasNativeFlag=hasNativeFlag,XRegExp.addToken=function(e,t,n){n=n||{};var a,r=n.optionalFlags;if(n.flag&&registerFlag(n.flag),r)for(r=nativ.split.call(r,""),a=0;a<r.length;++a)registerFlag(r[a]);tokens.push({regex:copyRegex(e,{addG:!0,addY:hasNativeY,isInternalOnly:!0}),handler:t,scope:n.scope||defaultScope,flag:n.flag,reparse:n.reparse,leadChar:n.leadChar}),XRegExp.cache.flush("patterns")},XRegExp.cache=function(e,t){return regexCache[e]||(regexCache[e]={}),regexCache[e][t]||(regexCache[e][t]=XRegExp(e,t))},XRegExp.cache.flush=function(e){"patterns"===e?patternCache={}:regexCache={}},XRegExp.escape=function(e){return nativ.replace.call(toObject(e),/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},XRegExp.exec=function(e,t,n,a){var r,i,l="g",o=!1;return o=hasNativeY&&!!(a||t.sticky&&a!==!1),o&&(l+="y"),t[REGEX_DATA]=t[REGEX_DATA]||{},i=t[REGEX_DATA][l]||(t[REGEX_DATA][l]=copyRegex(t,{addG:!0,addY:o,removeY:a===!1,isInternalOnly:!0})),i.lastIndex=n=n||0,r=fixed.exec.call(i,e),a&&r&&r.index!==n&&(r=null),t.global&&(t.lastIndex=r?i.lastIndex:0),r},XRegExp.forEach=function(e,t,n){for(var a,r=0,i=-1;a=XRegExp.exec(e,t,r);)n(a,++i,e,t),r=a.index+(a[0].length||1)},XRegExp.globalize=function(e){return copyRegex(e,{addG:!0})},XRegExp.install=function(e){e=prepareOptions(e),!features.astral&&e.astral&&setAstral(!0),!features.natives&&e.natives&&setNatives(!0)},XRegExp.isInstalled=function(e){return!!features[e]},XRegExp.isRegExp=function(e){return"[object RegExp]"===toString.call(e)},XRegExp.match=function(e,t,n){var a,r,i=t.global&&"one"!==n||"all"===n,l=(i?"g":"")+(t.sticky?"y":"")||"noGY";return t[REGEX_DATA]=t[REGEX_DATA]||{},r=t[REGEX_DATA][l]||(t[REGEX_DATA][l]=copyRegex(t,{addG:!!i,removeG:"one"===n,isInternalOnly:!0})),a=nativ.match.call(toObject(e),r),t.global&&(t.lastIndex="one"===n&&a?a.index+a[0].length:0),i?a||[]:a&&a[0]},XRegExp.matchChain=function(e,t){return function n(e,a){var r,i=t[a].regex?t[a]:{regex:t[a]},l=[],o=function(e){if(i.backref){if(!(e.hasOwnProperty(i.backref)||+i.backref<e.length))throw new ReferenceError("Backreference to undefined group: "+i.backref);l.push(e[i.backref]||"")}else l.push(e[0])};for(r=0;r<e.length;++r)XRegExp.forEach(e[r],i.regex,o);return a!==t.length-1&&l.length?n(l,a+1):l}([e],0)},XRegExp.replace=function(e,t,n,a){var r,i=XRegExp.isRegExp(t),l=t.global&&"one"!==a||"all"===a,o=(l?"g":"")+(t.sticky?"y":"")||"noGY",s=t;return i?(t[REGEX_DATA]=t[REGEX_DATA]||{},s=t[REGEX_DATA][o]||(t[REGEX_DATA][o]=copyRegex(t,{addG:!!l,removeG:"one"===a,isInternalOnly:!0}))):l&&(s=new RegExp(XRegExp.escape(String(t)),"g")),r=fixed.replace.call(toObject(e),s,n),i&&t.global&&(t.lastIndex=0),r},XRegExp.replaceEach=function(e,t){var n,a;for(n=0;n<t.length;++n)a=t[n],e=XRegExp.replace(e,a[0],a[1],a[2]);return e},XRegExp.split=function(e,t,n){return fixed.split.call(toObject(e),t,n)},XRegExp.test=function(e,t,n,a){return!!XRegExp.exec(e,t,n,a)},XRegExp.uninstall=function(e){e=prepareOptions(e),features.astral&&e.astral&&setAstral(!1),features.natives&&e.natives&&setNatives(!1)},XRegExp.union=function(e,t){var n,a,r,i,l=/(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*]/g,o=[],s=0,p=function(e,t,r){var i=a[s-n];if(t){if(++s,i)return"(?<"+i+">"}else if(r)return"\\"+(+r+n);return e};if(!isType(e,"Array")||!e.length)throw new TypeError("Must provide a nonempty array of patterns to merge");for(i=0;i<e.length;++i)r=e[i],XRegExp.isRegExp(r)?(n=s,a=r[REGEX_DATA]&&r[REGEX_DATA].captureNames||[],o.push(nativ.replace.call(XRegExp(r.source).source,l,p))):o.push(XRegExp.escape(r));return XRegExp(o.join("|"),t)},fixed.exec=function(e){var t,n,a,r=this.lastIndex,i=nativ.exec.apply(this,arguments);if(i){if(!correctExecNpcg&&i.length>1&&indexOf(i,"")>-1&&(n=copyRegex(this,{removeG:!0,isInternalOnly:!0}),nativ.replace.call(String(e).slice(i.index),n,function(){var e,t=arguments.length;for(e=1;t-2>e;++e)void 0===arguments[e]&&(i[e]=void 0)})),this[REGEX_DATA]&&this[REGEX_DATA].captureNames)for(a=1;a<i.length;++a)t=this[REGEX_DATA].captureNames[a-1],t&&(i[t]=i[a]);this.global&&!i[0].length&&this.lastIndex>i.index&&(this.lastIndex=i.index)}return this.global||(this.lastIndex=r),i},fixed.test=function(e){return!!fixed.exec.call(this,e)},fixed.match=function(e){var t;if(XRegExp.isRegExp(e)){if(e.global)return t=nativ.match.apply(this,arguments),e.lastIndex=0,t}else e=new RegExp(e);return fixed.exec.call(e,toObject(this))},fixed.replace=function(e,t){var n,a,r,i=XRegExp.isRegExp(e);return i?(e[REGEX_DATA]&&(a=e[REGEX_DATA].captureNames),n=e.lastIndex):e+="",r=isType(t,"Function")?nativ.replace.call(String(this),e,function(){var n,r=arguments;if(a)for(r[0]=new String(r[0]),n=0;n<a.length;++n)a[n]&&(r[0][a[n]]=r[n+1]);return i&&e.global&&(e.lastIndex=r[r.length-2]+r[0].length),t.apply(void 0,r)}):nativ.replace.call(null==this?this:String(this),e,function(){var e=arguments;return nativ.replace.call(String(t),replacementToken,function(t,n,r){var i;if(n){if(i=+n,i<=e.length-3)return e[i]||"";if(i=a?indexOf(a,n):-1,0>i)throw new SyntaxError("Backreference to undefined group "+t);return e[i+1]||""}if("$"===r)return"$";if("&"===r||0===+r)return e[0];if("`"===r)return e[e.length-1].slice(0,e[e.length-2]);if("'"===r)return e[e.length-1].slice(e[e.length-2]+e[0].length);if(r=+r,!isNaN(r)){if(r>e.length-3)throw new SyntaxError("Backreference to undefined group "+t);return e[r]||""}throw new SyntaxError("Invalid token "+t)})}),i&&(e.global?e.lastIndex=0:e.lastIndex=n),r},fixed.split=function(e,t){if(!XRegExp.isRegExp(e))return nativ.split.apply(this,arguments);var n,a=String(this),r=[],i=e.lastIndex,l=0;return t=(void 0===t?-1:t)>>>0,XRegExp.forEach(a,e,function(e){e.index+e[0].length>l&&(r.push(a.slice(l,e.index)),e.length>1&&e.index<a.length&&Array.prototype.push.apply(r,e.slice(1)),n=e[0].length,l=e.index+n)}),l===a.length?(!nativ.test.call(e,"")||n)&&r.push(""):r.push(a.slice(l)),e.lastIndex=i,r.length>t?r.slice(0,t):r},XRegExp.addToken(/\\([ABCE-RTUVXYZaeg-mopqyz]|c(?![A-Za-z])|u(?![\dA-Fa-f]{4}|{[\dA-Fa-f]+})|x(?![\dA-Fa-f]{2}))/,function(e,t){if("B"===e[1]&&t===defaultScope)return e[0];throw new SyntaxError("Invalid escape "+e[0])},{scope:"all",leadChar:"\\"}),XRegExp.addToken(/\\u{([\dA-Fa-f]+)}/,function(e,t,n){var a=dec(e[1]);if(a>1114111)throw new SyntaxError("Invalid Unicode code point "+e[0]);if(65535>=a)return"\\u"+pad4(hex(a));if(hasNativeU&&n.indexOf("u")>-1)return e[0];throw new SyntaxError("Cannot use Unicode code point above \\u{FFFF} without flag u")},{scope:"all",leadChar:"\\"}),XRegExp.addToken(/\[(\^?)]/,function(e){return e[1]?"[\\s\\S]":"\\b\\B"},{leadChar:"["}),XRegExp.addToken(/\(\?#[^)]*\)/,function(e,t,n){return isQuantifierNext(e.input,e.index+e[0].length,n)?"":"(?:)"},{leadChar:"("}),XRegExp.addToken(/\s+|#.*/,function(e,t,n){return isQuantifierNext(e.input,e.index+e[0].length,n)?"":"(?:)"},{flag:"x"}),XRegExp.addToken(/\./,function(){return"[\\s\\S]"},{flag:"s",leadChar:"."}),XRegExp.addToken(/\\k<([\w$]+)>/,function(e){var t=isNaN(e[1])?indexOf(this.captureNames,e[1])+1:+e[1],n=e.index+e[0].length;if(!t||t>this.captureNames.length)throw new SyntaxError("Backreference to undefined group "+e[0]);return"\\"+t+(n===e.input.length||isNaN(e.input.charAt(n))?"":"(?:)")},{leadChar:"\\"}),XRegExp.addToken(/\\(\d+)/,function(e,t){if(!(t===defaultScope&&/^[1-9]/.test(e[1])&&+e[1]<=this.captureNames.length)&&"0"!==e[1])throw new SyntaxError("Cannot use octal escape or backreference to undefined group "+e[0]);return e[0]},{scope:"all",leadChar:"\\"}),XRegExp.addToken(/\(\?P?<([\w$]+)>/,function(e){if(!isNaN(e[1]))throw new SyntaxError("Cannot use integer as capture name "+e[0]);if("length"===e[1]||"__proto__"===e[1])throw new SyntaxError("Cannot use reserved word as capture name "+e[0]);if(indexOf(this.captureNames,e[1])>-1)throw new SyntaxError("Cannot use same name for multiple groups "+e[0]);return this.captureNames.push(e[1]),this.hasNamedCapture=!0,"("},{leadChar:"("}),XRegExp.addToken(/\((?!\?)/,function(e,t,n){return n.indexOf("n")>-1?"(?:":(this.captureNames.push(null),"(")},{optionalFlags:"n",leadChar:"("});