!function(t,e){"use strict";"object"==typeof module&&module.exports?module.exports=e(require("moment")):"function"==typeof define&&define.amd?define(["moment"],e):e(t.moment)}(this,function(s){"use strict";var e,i={},f={},u={},c={};s&&"string"==typeof s.version||A("Moment Timezone requires Moment.js. See https://momentjs.com/timezone/docs/#/use-it/browser/");var t=s.version.split("."),n=+t[0],o=+t[1];function a(t){return 96<t?t-87:64<t?t-29:t-48}function r(t){var e=0,n=t.split("."),o=n[0],r=n[1]||"",s=1,i=0,f=1;for(45===t.charCodeAt(0)&&(f=-(e=1));e<o.length;e++)i=60*i+a(o.charCodeAt(e));for(e=0;e<r.length;e++)s/=60,i+=a(r.charCodeAt(e))*s;return i*f}function h(t){for(var e=0;e<t.length;e++)t[e]=r(t[e])}function l(t,e){var n,o=[];for(n=0;n<e.length;n++)o[n]=t[e[n]];return o}function m(t){var e=t.split("|"),n=e[2].split(" "),o=e[3].split(""),r=e[4].split(" ");return h(n),h(o),h(r),function(t,e){for(var n=0;n<e;n++)t[n]=Math.round((t[n-1]||0)+6e4*t[n]);t[e-1]=1/0}(r,o.length),{name:e[0],abbrs:l(e[1].split(" "),o),offsets:l(n,o),untils:r,population:0|e[5]}}function p(t){t&&this._set(m(t))}function d(t){var e=t.toTimeString(),n=e.match(/\([a-z ]+\)/i);"GMT"===(n=n&&n[0]?(n=n[0].match(/[A-Z]/g))?n.join(""):void 0:(n=e.match(/[A-Z]{3,5}/g))?n[0]:void 0)&&(n=void 0),this.at=+t,this.abbr=n,this.offset=t.getTimezoneOffset()}function v(t){this.zone=t,this.offsetScore=0,this.abbrScore=0}function z(t,e){for(var n,o;o=6e4*((e.at-t.at)/12e4|0);)(n=new d(new Date(t.at+o))).offset===t.offset?t=n:e=n;return t}function b(t,e){return t.offsetScore!==e.offsetScore?t.offsetScore-e.offsetScore:t.abbrScore!==e.abbrScore?t.abbrScore-e.abbrScore:e.zone.population-t.zone.population}function g(t,e){var n,o;for(h(e),n=0;n<e.length;n++)o=e[n],c[o]=c[o]||{},c[o][t]=!0}function _(){try{var t=Intl.DateTimeFormat().resolvedOptions().timeZone;if(t&&3<t.length){var e=u[w(t)];if(e)return e;A("Moment Timezone found "+t+" from the Intl api, but did not have that data loaded.")}}catch(t){}var n,o,r,s=function(){var t,e,n,o=(new Date).getFullYear()-2,r=new d(new Date(o,0,1)),s=[r];for(n=1;n<48;n++)(e=new d(new Date(o,n,1))).offset!==r.offset&&(t=z(r,e),s.push(t),s.push(new d(new Date(t.at+6e4)))),r=e;for(n=0;n<4;n++)s.push(new d(new Date(o+n,0,1))),s.push(new d(new Date(o+n,6,1)));return s}(),i=s.length,f=function(t){var e,n,o,r=t.length,s={},i=[];for(e=0;e<r;e++)for(n in o=c[t[e].offset]||{})o.hasOwnProperty(n)&&(s[n]=!0);for(e in s)s.hasOwnProperty(e)&&i.push(u[e]);return i}(s),a=[];for(o=0;o<f.length;o++){for(n=new v(S(f[o]),i),r=0;r<i;r++)n.scoreOffsetAt(s[r]);a.push(n)}return a.sort(b),0<a.length?a[0].zone.name:void 0}function w(t){return(t||"").toLowerCase().replace(/\//g,"_")}function y(t){var e,n,o,r;for("string"==typeof t&&(t=[t]),e=0;e<t.length;e++)r=w(n=(o=t[e].split("|"))[0]),i[r]=t[e],u[r]=n,g(r,o[2].split(" "))}function S(t,e){t=w(t);var n,o=i[t];return o instanceof p?o:"string"==typeof o?(o=new p(o),i[t]=o):f[t]&&e!==S&&(n=S(f[t],S))?((o=i[t]=new p)._set(n),o.name=u[t],o):null}function O(t){var e,n,o,r;for("string"==typeof t&&(t=[t]),e=0;e<t.length;e++)o=w((n=t[e].split("|"))[0]),r=w(n[1]),f[o]=r,u[o]=n[0],f[r]=o,u[r]=n[1]}function M(t){var e="X"===t._f||"x"===t._f;return!(!t._a||void 0!==t._tzm||e)}function A(t){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(t)}function j(t){var e=Array.prototype.slice.call(arguments,0,-1),n=arguments[arguments.length-1],o=S(n),r=s.utc.apply(null,e);return o&&!s.isMoment(t)&&M(r)&&r.add(o.parse(r),"minutes"),r.tz(n),r}(n<2||2===n&&o<6)&&A("Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js "+s.version+". See momentjs.com"),p.prototype={_set:function(t){this.name=t.name,this.abbrs=t.abbrs,this.untils=t.untils,this.offsets=t.offsets,this.population=t.population},_index:function(t){var e,n=+t,o=this.untils;for(e=0;e<o.length;e++)if(n<o[e])return e},parse:function(t){var e,n,o,r,s=+t,i=this.offsets,f=this.untils,a=f.length-1;for(r=0;r<a;r++)if(e=i[r],n=i[r+1],o=i[r?r-1:r],e<n&&j.moveAmbiguousForward?e=n:o<e&&j.moveInvalidForward&&(e=o),s<f[r]-6e4*e)return i[r];return i[a]},abbr:function(t){return this.abbrs[this._index(t)]},offset:function(t){return A("zone.offset has been deprecated in favor of zone.utcOffset"),this.offsets[this._index(t)]},utcOffset:function(t){return this.offsets[this._index(t)]}},v.prototype.scoreOffsetAt=function(t){this.offsetScore+=Math.abs(this.zone.utcOffset(t.at)-t.offset),this.zone.abbr(t.at).replace(/[^A-Z]/g,"")!==t.abbr&&this.abbrScore++},j.version="0.5.23",j.dataVersion="",j._zones=i,j._links=f,j._names=u,j.add=y,j.link=O,j.load=function(t){y(t.zones),O(t.links),j.dataVersion=t.version},j.zone=S,j.zoneExists=function t(e){return t.didShowError||(t.didShowError=!0,A("moment.tz.zoneExists('"+e+"') has been deprecated in favor of !moment.tz.zone('"+e+"')")),!!S(e)},j.guess=function(t){return e&&!t||(e=_()),e},j.names=function(){var t,e=[];for(t in u)u.hasOwnProperty(t)&&(i[t]||i[f[t]])&&u[t]&&e.push(u[t]);return e.sort()},j.Zone=p,j.unpack=m,j.unpackBase60=r,j.needsOffset=M,j.moveInvalidForward=!0,j.moveAmbiguousForward=!1;var T,D=s.fn;function x(t){return function(){return this._z?this._z.abbr(this):t.call(this)}}s.tz=j,s.defaultZone=null,s.updateOffset=function(t,e){var n,o=s.defaultZone;void 0===t._z&&(o&&M(t)&&!t._isUTC&&(t._d=s.utc(t._a)._d,t.utc().add(o.parse(t),"minutes")),t._z=o),t._z&&(n=t._z.utcOffset(t),Math.abs(n)<16&&(n/=60),void 0!==t.utcOffset?t.utcOffset(-n,e):t.zone(n,e))},D.tz=function(t,e){if(t){if("string"!=typeof t)throw new Error("Time zone name must be a string, got "+t+" ["+typeof t+"]");return this._z=S(t),this._z?s.updateOffset(this,e):A("Moment Timezone has no data for "+t+". See http://momentjs.com/timezone/docs/#/data-loading/."),this}if(this._z)return this._z.name},D.zoneName=x(D.zoneName),D.zoneAbbr=x(D.zoneAbbr),D.utc=(T=D.utc,function(){return this._z=null,T.apply(this,arguments)}),s.tz.setDefault=function(t){return(n<2||2===n&&o<9)&&A("Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js "+s.version+"."),s.defaultZone=t?S(t):null,s};var Z=s.momentProperties;return"[object Array]"===Object.prototype.toString.call(Z)?(Z.push("_z"),Z.push("_a")):Z&&(Z._z=null),s});