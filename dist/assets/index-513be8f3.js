import{bh as e,aQ as t,bi as n,bj as r}from"./index-97d55404.js";function o(e,t){return function(){return e.apply(t,arguments)}}const{toString:s}=Object.prototype,{getPrototypeOf:i}=Object,a=(c=Object.create(null),e=>{const t=s.call(e);return c[t]||(c[t]=t.slice(8,-1).toLowerCase())});var c;const u=e=>(e=e.toLowerCase(),t=>a(t)===e),l=e=>t=>typeof t===e,{isArray:f}=Array,d=l("undefined");const p=u("ArrayBuffer");const h=l("string"),m=l("function"),y=l("number"),g=e=>null!==e&&"object"==typeof e,b=e=>{if("object"!==a(e))return!1;const t=i(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},w=u("Date"),E=u("File"),O=u("Blob"),R=u("FileList"),S=u("URLSearchParams");function A(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),f(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let i;for(r=0;r<s;r++)i=o[r],t.call(null,e[i],i,e)}}function T(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const j="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,C=e=>!d(e)&&e!==j;const v=(N="undefined"!=typeof Uint8Array&&i(Uint8Array),e=>N&&e instanceof N);var N;const x=u("HTMLFormElement"),P=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),U=u("RegExp"),_=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};A(n,((n,o)=>{let s;!1!==(s=t(n,o,e))&&(r[o]=s||n)})),Object.defineProperties(e,r)},F="abcdefghijklmnopqrstuvwxyz",L="0123456789",B={DIGIT:L,ALPHA:F,ALPHA_DIGIT:F+F.toUpperCase()+L};const D=u("AsyncFunction"),k={isArray:f,isArrayBuffer:p,isBuffer:function(e){return null!==e&&!d(e)&&null!==e.constructor&&!d(e.constructor)&&m(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||m(e.append)&&("formdata"===(t=a(e))||"object"===t&&m(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&p(e.buffer),t},isString:h,isNumber:y,isBoolean:e=>!0===e||!1===e,isObject:g,isPlainObject:b,isUndefined:d,isDate:w,isFile:E,isBlob:O,isRegExp:U,isFunction:m,isStream:e=>g(e)&&m(e.pipe),isURLSearchParams:S,isTypedArray:v,isFileList:R,forEach:A,merge:function e(){const{caseless:t}=C(this)&&this||{},n={},r=(r,o)=>{const s=t&&T(n,o)||o;b(n[s])&&b(r)?n[s]=e(n[s],r):b(r)?n[s]=e({},r):f(r)?n[s]=r.slice():n[s]=r};for(let o=0,s=arguments.length;o<s;o++)arguments[o]&&A(arguments[o],r);return n},extend:(e,t,n,{allOwnKeys:r}={})=>(A(t,((t,r)=>{n&&m(t)?e[r]=o(t,n):e[r]=t}),{allOwnKeys:r}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let o,s,a;const c={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)a=o[s],r&&!r(a,e,t)||c[a]||(t[a]=e[a],c[a]=!0);e=!1!==n&&i(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:a,kindOfTest:u,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(f(e))return e;let t=e.length;if(!y(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:x,hasOwnProperty:P,hasOwnProp:P,reduceDescriptors:_,freezeMethods:e=>{_(e,((t,n)=>{if(m(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];m(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return f(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:T,global:j,isContextDefined:C,ALPHABET:B,generateString:(e=16,t=B.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&m(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(g(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=f(e)?[]:{};return A(e,((e,t)=>{const s=n(e,r+1);!d(s)&&(o[t]=s)})),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:D,isThenable:e=>e&&(g(e)||m(e))&&m(e.then)&&m(e.catch)};function q(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}k.inherits(q,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:k.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const I=q.prototype,M={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{M[e]={value:e}})),Object.defineProperties(q,M),Object.defineProperty(I,"isAxiosError",{value:!0}),q.from=(e,t,n,r,o,s)=>{const i=Object.create(I);return k.toFlatObject(e,i,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),q.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};function z(e){return k.isPlainObject(e)||k.isArray(e)}function H(e){return k.endsWith(e,"[]")?e.slice(0,-2):e}function J(e,t,n){return e?e.concat(t).map((function(e,t){return e=H(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const W=k.toFlatObject(k,{},null,(function(e){return/^is[A-Z]/.test(e)}));function K(e,t,n){if(!k.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=k.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!k.isUndefined(t[e])}))).metaTokens,o=n.visitor||u,s=n.dots,i=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&k.isSpecCompliantForm(t);if(!k.isFunction(o))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(k.isDate(e))return e.toISOString();if(!a&&k.isBlob(e))throw new q("Blob is not supported. Use a Buffer instead.");return k.isArrayBuffer(e)||k.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function u(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if(k.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(k.isArray(e)&&function(e){return k.isArray(e)&&!e.some(z)}(e)||(k.isFileList(e)||k.endsWith(n,"[]"))&&(a=k.toArray(e)))return n=H(n),a.forEach((function(e,r){!k.isUndefined(e)&&null!==e&&t.append(!0===i?J([n],r,s):null===i?n:n+"[]",c(e))})),!1;return!!z(e)||(t.append(J(o,n,s),c(e)),!1)}const l=[],f=Object.assign(W,{defaultVisitor:u,convertValue:c,isVisitable:z});if(!k.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!k.isUndefined(n)){if(-1!==l.indexOf(n))throw Error("Circular reference detected in "+r.join("."));l.push(n),k.forEach(n,(function(n,s){!0===(!(k.isUndefined(n)||null===n)&&o.call(t,n,k.isString(s)?s.trim():s,r,f))&&e(n,r?r.concat(s):[s])})),l.pop()}}(e),t}function V(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function $(e,t){this._pairs=[],e&&K(e,this,t)}const G=$.prototype;function X(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Q(e,t,n){if(!t)return e;const r=n&&n.encode||X,o=n&&n.serialize;let s;if(s=o?o(t,n):k.isURLSearchParams(t)?t.toString():new $(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}G.append=function(e,t){this._pairs.push([e,t])},G.toString=function(e){const t=e?function(t){return e.call(this,t,V)}:V;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const Z=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){k.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},Y={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ee={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:$,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]};function te(e){function t(e,n,r,o){let s=e[o++];const i=Number.isFinite(+s),a=o>=e.length;if(s=!s&&k.isArray(r)?r.length:s,a)return k.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!i;r[s]&&k.isObject(r[s])||(r[s]=[]);return t(e,n,r[s],o)&&k.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}(r[s])),!i}if(k.isFormData(e)&&k.isFunction(e.entries)){const n={};return k.forEachEntry(e,((e,r)=>{t(function(e){return k.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null}const ne={transitional:Y,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=k.isObject(e);o&&k.isHTMLForm(e)&&(e=new FormData(e));if(k.isFormData(e))return r&&r?JSON.stringify(te(e)):e;if(k.isArrayBuffer(e)||k.isBuffer(e)||k.isStream(e)||k.isFile(e)||k.isBlob(e))return e;if(k.isArrayBufferView(e))return e.buffer;if(k.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return K(e,new ee.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return ee.isNode&&k.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((s=k.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return K(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(k.isString(e))try{return(t||JSON.parse)(e),k.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||ne.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&k.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(o){if(n){if("SyntaxError"===o.name)throw q.from(o,q.ERR_BAD_RESPONSE,this,null,this.response);throw o}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ee.classes.FormData,Blob:ee.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};k.forEach(["delete","get","head","post","put","patch"],(e=>{ne.headers[e]={}}));const re=ne,oe=k.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),se=Symbol("internals");function ie(e){return e&&String(e).trim().toLowerCase()}function ae(e){return!1===e||null==e?e:k.isArray(e)?e.map(ae):String(e)}function ce(e,t,n,r,o){return k.isFunction(r)?r.call(this,t,n):(o&&(t=n),k.isString(t)?k.isString(r)?-1!==t.indexOf(r):k.isRegExp(r)?r.test(t):void 0:void 0)}class ue{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=ie(t);if(!o)throw new Error("header name must be a non-empty string");const s=k.findKey(r,o);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=ae(e))}const s=(e,t)=>k.forEach(e,((e,n)=>o(e,n,t)));return k.isPlainObject(e)||e instanceof this.constructor?s(e,t):k.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?s((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&oe[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t):null!=e&&o(t,e,n),this}get(e,t){if(e=ie(e)){const n=k.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(k.isFunction(t))return t.call(this,e,n);if(k.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=ie(e)){const n=k.findKey(this,e);return!(!n||void 0===this[n]||t&&!ce(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=ie(e)){const o=k.findKey(n,e);!o||t&&!ce(0,n[o],o,t)||(delete n[o],r=!0)}}return k.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!ce(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return k.forEach(this,((r,o)=>{const s=k.findKey(n,o);if(s)return t[s]=ae(r),void delete t[o];const i=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();i!==o&&delete t[o],t[i]=ae(r),n[i]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return k.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&k.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[se]=this[se]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=ie(e);t[r]||(!function(e,t){const n=k.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return k.isArray(e)?e.forEach(r):r(e),this}}ue.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),k.reduceDescriptors(ue.prototype,(({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}})),k.freezeMethods(ue);const le=ue;function fe(e,t){const n=this||re,r=t||n,o=le.from(r.headers);let s=r.data;return k.forEach(e,(function(e){s=e.call(n,s,o.normalize(),t?t.status:void 0)})),o.normalize(),s}function de(e){return!(!e||!e.__CANCEL__)}function pe(e,t,n){q.call(this,null==e?"canceled":e,q.ERR_CANCELED,t,n),this.name="CanceledError"}k.inherits(pe,q,{__CANCEL__:!0});const he=ee.isStandardBrowserEnv?{write:function(e,t,n,r,o,s){const i=[];i.push(e+"="+encodeURIComponent(t)),k.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),k.isString(r)&&i.push("path="+r),k.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function me(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const ye=ee.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=k.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function ge(e,t){let n=0;const r=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,s=0,i=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=r[i];o||(o=c),n[s]=a,r[s]=c;let l=i,f=0;for(;l!==s;)f+=n[l++],l%=e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const d=u&&c-u;return d?Math.round(1e3*f/d):void 0}}(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,a=s-n,c=r(a);n=s;const u={loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&s<=i?(i-s)/c:void 0,event:o};u[t?"download":"upload"]=!0,e(u)}}const be={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let r=e.data;const o=le.from(e.headers).normalize(),s=e.responseType;let i,a;function c(){e.cancelToken&&e.cancelToken.unsubscribe(i),e.signal&&e.signal.removeEventListener("abort",i)}k.isFormData(r)&&(ee.isStandardBrowserEnv||ee.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.getContentType(/^\s*multipart\/form-data/)?k.isString(a=o.getContentType())&&o.setContentType(a.replace(/^\s*(multipart\/form-data);+/,"$1")):o.setContentType("multipart/form-data"));let u=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+n))}const l=me(e.baseURL,e.url);function f(){if(!u)return;const r=le.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders());!function(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new q("Request failed with status code "+n.status,[q.ERR_BAD_REQUEST,q.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),c()}),(function(e){n(e),c()}),{data:s&&"text"!==s&&"json"!==s?u.response:u.responseText,status:u.status,statusText:u.statusText,headers:r,config:e,request:u}),u=null}if(u.open(e.method.toUpperCase(),Q(l,e.params,e.paramsSerializer),!0),u.timeout=e.timeout,"onloadend"in u?u.onloadend=f:u.onreadystatechange=function(){u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))&&setTimeout(f)},u.onabort=function(){u&&(n(new q("Request aborted",q.ECONNABORTED,e,u)),u=null)},u.onerror=function(){n(new q("Network Error",q.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||Y;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new q(t,r.clarifyTimeoutError?q.ETIMEDOUT:q.ECONNABORTED,e,u)),u=null},ee.isStandardBrowserEnv){const t=(e.withCredentials||ye(l))&&e.xsrfCookieName&&he.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}void 0===r&&o.setContentType(null),"setRequestHeader"in u&&k.forEach(o.toJSON(),(function(e,t){u.setRequestHeader(t,e)})),k.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),s&&"json"!==s&&(u.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&u.addEventListener("progress",ge(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",ge(e.onUploadProgress)),(e.cancelToken||e.signal)&&(i=t=>{u&&(n(!t||t.type?new pe(null,e,u):t),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(i),e.signal&&(e.signal.aborted?i():e.signal.addEventListener("abort",i)));const d=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(l);d&&-1===ee.protocols.indexOf(d)?n(new q("Unsupported protocol "+d+":",q.ERR_BAD_REQUEST,e)):u.send(r||null)}))}};k.forEach(be,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(n){}Object.defineProperty(e,"adapterName",{value:t})}}));const we=e=>`- ${e}`,Ee=e=>k.isFunction(e)||null===e||!1===e,Oe=e=>{e=k.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let s=0;s<t;s++){let t;if(n=e[s],r=n,!Ee(n)&&(r=be[(t=String(n)).toLowerCase()],void 0===r))throw new q(`Unknown adapter '${t}'`);if(r)break;o[t||"#"+s]=r}if(!r){const e=Object.entries(o).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));throw new q("There is no suitable adapter to dispatch the request "+(t?e.length>1?"since :\n"+e.map(we).join("\n"):" "+we(e[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return r};function Re(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new pe(null,e)}function Se(e){Re(e),e.headers=le.from(e.headers),e.data=fe.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return Oe(e.adapter||re.adapter)(e).then((function(t){return Re(e),t.data=fe.call(e,e.transformResponse,t),t.headers=le.from(t.headers),t}),(function(t){return de(t)||(Re(e),t&&t.response&&(t.response.data=fe.call(e,e.transformResponse,t.response),t.response.headers=le.from(t.response.headers))),Promise.reject(t)}))}const Ae=e=>e instanceof le?e.toJSON():e;function Te(e,t){t=t||{};const n={};function r(e,t,n){return k.isPlainObject(e)&&k.isPlainObject(t)?k.merge.call({caseless:n},e,t):k.isPlainObject(t)?k.merge({},t):k.isArray(t)?t.slice():t}function o(e,t,n){return k.isUndefined(t)?k.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function s(e,t){if(!k.isUndefined(t))return r(void 0,t)}function i(e,t){return k.isUndefined(t)?k.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,s){return s in t?r(n,o):s in e?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(e,t)=>o(Ae(e),Ae(t),!0)};return k.forEach(Object.keys(Object.assign({},e,t)),(function(r){const s=c[r]||o,i=s(e[r],t[r],r);k.isUndefined(i)&&s!==a||(n[r]=i)})),n}const je="1.5.1",Ce={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Ce[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const ve={};Ce.transitional=function(e,t,n){return(r,o,s)=>{if(!1===e)throw new q(function(e,t){return"[Axios v1.5.1] Transitional option '"+e+"'"+t+(n?". "+n:"")}(o," has been removed"+(t?" in "+t:"")),q.ERR_DEPRECATED);return t&&!ve[o]&&(ve[o]=!0),!e||e(r,o,s)}};const Ne={assertOptions:function(e,t,n){if("object"!=typeof e)throw new q("options must be an object",q.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const t=e[s],n=void 0===t||i(t,s,e);if(!0!==n)throw new q("option "+s+" must be "+n,q.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new q("Unknown option "+s,q.ERR_BAD_OPTION)}},validators:Ce},xe=Ne.validators;class Pe{constructor(e){this.defaults=e,this.interceptors={request:new Z,response:new Z}}request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Te(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;void 0!==n&&Ne.assertOptions(n,{silentJSONParsing:xe.transitional(xe.boolean),forcedJSONParsing:xe.transitional(xe.boolean),clarifyTimeoutError:xe.transitional(xe.boolean)},!1),null!=r&&(k.isFunction(r)?t.paramsSerializer={serialize:r}:Ne.assertOptions(r,{encode:xe.function,serialize:xe.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s=o&&k.merge(o.common,o[t.method]);o&&k.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=le.concat(s,o);const i=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let l,f=0;if(!a){const e=[Se.bind(this),void 0];for(e.unshift.apply(e,i),e.push.apply(e,c),l=e.length,u=Promise.resolve(t);f<l;)u=u.then(e[f++],e[f++]);return u}l=i.length;let d=t;for(f=0;f<l;){const e=i[f++],t=i[f++];try{d=e(d)}catch(p){t.call(this,p);break}}try{u=Se.call(this,d)}catch(p){return Promise.reject(p)}for(f=0,l=c.length;f<l;)u=u.then(c[f++],c[f++]);return u}getUri(e){return Q(me((e=Te(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}k.forEach(["delete","get","head","options"],(function(e){Pe.prototype[e]=function(t,n){return this.request(Te(n||{},{method:e,url:t,data:(n||{}).data}))}})),k.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(Te(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Pe.prototype[e]=t(),Pe.prototype[e+"Form"]=t(!0)}));const Ue=Pe;class _e{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new pe(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new _e((function(t){e=t})),cancel:e}}}const Fe=_e;const Le={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Le).forEach((([e,t])=>{Le[t]=e}));const Be=Le;const De=function e(t){const n=new Ue(t),r=o(Ue.prototype.request,n);return k.extend(r,Ue.prototype,n,{allOwnKeys:!0}),k.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(Te(t,n))},r}(re);De.Axios=Ue,De.CanceledError=pe,De.CancelToken=Fe,De.isCancel=de,De.VERSION=je,De.toFormData=K,De.AxiosError=q,De.Cancel=De.CanceledError,De.all=function(e){return Promise.all(e)},De.spread=function(e){return function(t){return e.apply(null,t)}},De.isAxiosError=function(e){return k.isObject(e)&&!0===e.isAxiosError},De.mergeConfig=Te,De.AxiosHeaders=le,De.formToJSON=e=>te(k.isHTMLForm(e)?new FormData(e):e),De.getAdapter=Oe,De.HttpStatusCode=Be,De.default=De;const ke=De,{interceptors:qe,baseUrl:Ie}=e,Me=Ie.pro,{requestInterceptors:ze,responseInterceptors:He}=qe,Je=new Map,We=ke.create({...e,baseURL:Me});We.interceptors.request.use((e=>{const t=new AbortController,n=e.url||"";return e.signal=t.signal,Je.set(n,t),e})),We.interceptors.response.use((e=>{const t=e.config.url||"";return Je.delete(t),e.data}),(e=>(t.error(e.message),Promise.reject(e)))),We.interceptors.request.use(ze||n),We.interceptors.response.use(He||r);const Ke={request:e=>new Promise(((t,n)=>{var r;(null==(r=e.interceptors)?void 0:r.requestInterceptors)&&(e=e.interceptors.requestInterceptors(e)),We.request(e).then((e=>{t(e)})).catch((e=>{n(e)}))})),cancelRequest:e=>{var t;const n=Array.isArray(e)?e:[e];for(const r of n)null==(t=Je.get(r))||t.abort(),Je.delete(r)},cancelAllRequest(){for(const[e,t]of Je)t.abort();Je.clear()}},{defaultHeaders:Ve}=e,$e=e=>{const{url:t,method:n,params:r,data:o,headersType:s,responseType:i}=e;return Ke.request({url:t,method:n,params:r,data:o,responseType:i,headers:{"Content-Type":s||Ve}})},Ge={get:e=>$e({method:"get",...e}),post:e=>$e({method:"post",...e}),delete:e=>$e({method:"delete",...e}),put:e=>$e({method:"put",...e}),cancelRequest:e=>Ke.cancelRequest(e),cancelAllRequest:()=>Ke.cancelAllRequest()};export{Ge as r};
