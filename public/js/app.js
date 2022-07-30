/*! For license information please see app.js.LICENSE.txt */
(()=>{var e,t={80:(e,t,n)=>{"use strict";n(863)},695:function(e,t,n){e.exports=function(e,t,n,r){"use strict";const o=e=>e&&"object"==typeof e&&"default"in e?e:{default:e},i=o(e),s=o(n),l=o(r),a="5.2.0";class c extends l.default{constructor(e,n){super(),(e=t.getElement(e))&&(this._element=e,this._config=this._getConfig(n),i.default.set(this._element,this.constructor.DATA_KEY,this))}dispose(){i.default.remove(this._element,this.constructor.DATA_KEY),s.default.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,n,r=!0){t.executeAfterTransition(e,n,r)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return i.default.get(t.getElement(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"==typeof t?t:null)}static get VERSION(){return a}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}return c}(n(493),n(72),n(286),n(705))},863:function(e,t,n){e.exports=function(e,t,n,r){"use strict";const o=e=>e&&"object"==typeof e&&"default"in e?e:{default:e},i=o(t),s=o(n),l=o(r),a="collapse",c=".bs.collapse",u=`show${c}`,f=`shown${c}`,d=`hide${c}`,g=`hidden${c}`,h=`click${c}.data-api`,p="show",m="collapse",b="collapsing",_="collapsed",y=`:scope .${m} .${m}`,v="collapse-horizontal",E="width",A="height",w=".collapse.show, .collapse.collapsing",C='[data-bs-toggle="collapse"]',O={parent:null,toggle:!0},S={parent:"(null|element)",toggle:"boolean"};class T extends l.default{constructor(t,n){super(t,n),this._isTransitioning=!1,this._triggerArray=[];const r=s.default.find(C);for(const t of r){const n=e.getSelectorFromElement(t),r=s.default.find(n).filter((e=>e===this._element));null!==n&&r.length&&this._triggerArray.push(t)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return O}static get DefaultType(){return S}static get NAME(){return a}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(w).filter((e=>e!==this._element)).map((e=>T.getOrCreateInstance(e,{toggle:!1})))),e.length&&e[0]._isTransitioning)return;if(i.default.trigger(this._element,u).defaultPrevented)return;for(const t of e)t.hide();const t=this._getDimension();this._element.classList.remove(m),this._element.classList.add(b),this._element.style[t]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const n=()=>{this._isTransitioning=!1,this._element.classList.remove(b),this._element.classList.add(m,p),this._element.style[t]="",i.default.trigger(this._element,f)},r=`scroll${t[0].toUpperCase()+t.slice(1)}`;this._queueCallback(n,this._element,!0),this._element.style[t]=`${this._element[r]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(i.default.trigger(this._element,d).defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,e.reflow(this._element),this._element.classList.add(b),this._element.classList.remove(m,p);for(const t of this._triggerArray){const n=e.getElementFromSelector(t);n&&!this._isShown(n)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0;const n=()=>{this._isTransitioning=!1,this._element.classList.remove(b),this._element.classList.add(m),i.default.trigger(this._element,g)};this._element.style[t]="",this._queueCallback(n,this._element,!0)}_isShown(e=this._element){return e.classList.contains(p)}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=e.getElement(t.parent),t}_getDimension(){return this._element.classList.contains(v)?E:A}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(C);for(const n of t){const t=e.getElementFromSelector(n);t&&this._addAriaAndCollapsedClass([n],this._isShown(t))}}_getFirstLevelChildren(e){const t=s.default.find(y,this._config.parent);return s.default.find(e,this._config.parent).filter((e=>!t.includes(e)))}_addAriaAndCollapsedClass(e,t){if(e.length)for(const n of e)n.classList.toggle(_,!t),n.setAttribute("aria-expanded",t)}static jQueryInterface(e){const t={};return"string"==typeof e&&/show|hide/.test(e)&&(t.toggle=!1),this.each((function(){const n=T.getOrCreateInstance(this,t);if("string"==typeof e){if(void 0===n[e])throw new TypeError(`No method named "${e}"`);n[e]()}}))}}return i.default.on(document,h,C,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();const n=e.getSelectorFromElement(this),r=s.default.find(n);for(const e of r)T.getOrCreateInstance(e,{toggle:!1}).toggle()})),e.defineJQueryPlugin(T),T}(n(72),n(286),n(737),n(695))},493:function(e){e.exports=function(){"use strict";const e=new Map;return{set(t,n,r){e.has(t)||e.set(t,new Map);const o=e.get(t);o.has(n)||0===o.size?o.set(n,r):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(o.keys())[0]}.`)},get:(t,n)=>e.has(t)&&e.get(t).get(n)||null,remove(t,n){if(!e.has(t))return;const r=e.get(t);r.delete(n),0===r.size&&e.delete(t)}}}()},286:function(e,t,n){e.exports=function(e){"use strict";const t=/[^.]*(?=\..*)\.|.*/,n=/\..*/,r=/::\d+$/,o={};let i=1;const s={mouseenter:"mouseover",mouseleave:"mouseout"},l=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function a(e,t){return t&&`${t}::${i++}`||e.uidEvent||i++}function c(e){const t=a(e);return e.uidEvent=t,o[t]=o[t]||{},o[t]}function u(e,t){return function n(r){return y(r,{delegateTarget:e}),n.oneOff&&_.off(e,r.type,t),t.apply(e,[r])}}function f(e,t,n){return function r(o){const i=e.querySelectorAll(t);for(let{target:s}=o;s&&s!==this;s=s.parentNode)for(const l of i)if(l===s)return y(o,{delegateTarget:s}),r.oneOff&&_.off(e,o.type,t,n),n.apply(s,[o])}}function d(e,t,n=null){return Object.values(e).find((e=>e.callable===t&&e.delegationSelector===n))}function g(e,t,n){const r="string"==typeof t,o=r?n:t||n;let i=b(e);return l.has(i)||(i=e),[r,o,i]}function h(e,n,r,o,i){if("string"!=typeof n||!e)return;let[l,h,p]=g(n,r,o);if(n in s){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};h=e(h)}const m=c(e),b=m[p]||(m[p]={}),_=d(b,h,l?r:null);if(_)return void(_.oneOff=_.oneOff&&i);const y=a(h,n.replace(t,"")),v=l?f(e,r,h):u(e,h);v.delegationSelector=l?r:null,v.callable=h,v.oneOff=i,v.uidEvent=y,b[y]=v,e.addEventListener(p,v,l)}function p(e,t,n,r,o){const i=d(t[n],r,o);i&&(e.removeEventListener(n,i,Boolean(o)),delete t[n][i.uidEvent])}function m(e,t,n,r){const o=t[n]||{};for(const i of Object.keys(o))if(i.includes(r)){const r=o[i];p(e,t,n,r.callable,r.delegationSelector)}}function b(e){return e=e.replace(n,""),s[e]||e}const _={on(e,t,n,r){h(e,t,n,r,!1)},one(e,t,n,r){h(e,t,n,r,!0)},off(e,t,n,o){if("string"!=typeof t||!e)return;const[i,s,l]=g(t,n,o),a=l!==t,u=c(e),f=u[l]||{},d=t.startsWith(".");if(void 0===s){if(d)for(const n of Object.keys(u))m(e,u,n,t.slice(1));for(const n of Object.keys(f)){const o=n.replace(r,"");if(!a||t.includes(o)){const t=f[n];p(e,u,l,t.callable,t.delegationSelector)}}}else{if(!Object.keys(f).length)return;p(e,u,l,s,i?n:null)}},trigger(t,n,r){if("string"!=typeof n||!t)return null;const o=e.getjQuery();let i=null,s=!0,l=!0,a=!1;n!==b(n)&&o&&(i=o.Event(n,r),o(t).trigger(i),s=!i.isPropagationStopped(),l=!i.isImmediatePropagationStopped(),a=i.isDefaultPrevented());let c=new Event(n,{bubbles:s,cancelable:!0});return c=y(c,r),a&&c.preventDefault(),l&&t.dispatchEvent(c),c.defaultPrevented&&i&&i.preventDefault(),c}};function y(e,t){for(const[n,r]of Object.entries(t||{}))try{e[n]=r}catch(t){Object.defineProperty(e,n,{configurable:!0,get:()=>r})}return e}return _}(n(72))},175:function(e){e.exports=function(){"use strict";function e(e){if("true"===e)return!0;if("false"===e)return!1;if(e===Number(e).toString())return Number(e);if(""===e||"null"===e)return null;if("string"!=typeof e)return e;try{return JSON.parse(decodeURIComponent(e))}catch(t){return e}}function t(e){return e.replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`))}return{setDataAttribute(e,n,r){e.setAttribute(`data-bs-${t(n)}`,r)},removeDataAttribute(e,n){e.removeAttribute(`data-bs-${t(n)}`)},getDataAttributes(t){if(!t)return{};const n={},r=Object.keys(t.dataset).filter((e=>e.startsWith("bs")&&!e.startsWith("bsConfig")));for(const o of r){let r=o.replace(/^bs/,"");r=r.charAt(0).toLowerCase()+r.slice(1,r.length),n[r]=e(t.dataset[o])}return n},getDataAttribute:(n,r)=>e(n.getAttribute(`data-bs-${t(r)}`))}}()},737:function(e,t,n){e.exports=function(e){"use strict";return{find:(e,t=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(t,e)),findOne:(e,t=document.documentElement)=>Element.prototype.querySelector.call(t,e),children:(e,t)=>[].concat(...e.children).filter((e=>e.matches(t))),parents(e,t){const n=[];let r=e.parentNode.closest(t);for(;r;)n.push(r),r=r.parentNode.closest(t);return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(t){const n=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((e=>`${e}:not([tabindex^="-"])`)).join(",");return this.find(n,t).filter((t=>!e.isDisabled(t)&&e.isVisible(t)))}}}(n(72))},705:function(e,t,n){e.exports=function(e,t){"use strict";const n=(e=>e&&"object"==typeof e&&"default"in e?e:{default:e})(t);class r{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(t,r){const o=e.isElement(r)?n.default.getDataAttribute(r,"config"):{};return{...this.constructor.Default,..."object"==typeof o?o:{},...e.isElement(r)?n.default.getDataAttributes(r):{},..."object"==typeof t?t:{}}}_typeCheckConfig(t,n=this.constructor.DefaultType){for(const r of Object.keys(n)){const o=n[r],i=t[r],s=e.isElement(i)?"element":e.toType(i);if(!new RegExp(o).test(s))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${s}" but expected type "${o}".`)}}}return r}(n(72),n(175))},72:function(e,t){!function(e){"use strict";const t=1e6,n=1e3,r="transitionend",o=e=>null==e?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),i=e=>{do{e+=Math.floor(Math.random()*t)}while(document.getElementById(e));return e},s=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&"#"!==n?n.trim():null}return t},l=e=>{const t=s(e);return t&&document.querySelector(t)?t:null},a=e=>{const t=s(e);return t?document.querySelector(t):null},c=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:r}=window.getComputedStyle(e);const o=Number.parseFloat(t),i=Number.parseFloat(r);return o||i?(t=t.split(",")[0],r=r.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(r))*n):0},u=e=>{e.dispatchEvent(new Event(r))},f=e=>!(!e||"object"!=typeof e)&&(void 0!==e.jquery&&(e=e[0]),void 0!==e.nodeType),d=e=>f(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?document.querySelector(e):null,g=e=>{if(!f(e)||0===e.getClientRects().length)return!1;const t="visible"===getComputedStyle(e).getPropertyValue("visibility"),n=e.closest("details:not([open])");if(!n)return t;if(n!==e){const t=e.closest("summary");if(t&&t.parentNode!==n)return!1;if(null===t)return!1}return t},h=e=>!e||e.nodeType!==Node.ELEMENT_NODE||!!e.classList.contains("disabled")||(void 0!==e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled")),p=e=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof e.getRootNode){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?p(e.parentNode):null},m=()=>{},b=e=>{e.offsetHeight},_=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,y=[],v=e=>{"loading"===document.readyState?(y.length||document.addEventListener("DOMContentLoaded",(()=>{for(const e of y)e()})),y.push(e)):e()},E=()=>"rtl"===document.documentElement.dir,A=e=>{v((()=>{const t=_();if(t){const n=e.NAME,r=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=r,e.jQueryInterface)}}))},w=e=>{"function"==typeof e&&e()},C=(e,t,n=!0)=>{if(!n)return void w(e);const o=5,i=c(t)+o;let s=!1;const l=({target:n})=>{n===t&&(s=!0,t.removeEventListener(r,l),w(e))};t.addEventListener(r,l),setTimeout((()=>{s||u(t)}),i)},O=(e,t,n,r)=>{const o=e.length;let i=e.indexOf(t);return-1===i?!n&&r?e[o-1]:e[0]:(i+=n?1:-1,r&&(i=(i+o)%o),e[Math.max(0,Math.min(i,o-1))])};e.defineJQueryPlugin=A,e.execute=w,e.executeAfterTransition=C,e.findShadowRoot=p,e.getElement=d,e.getElementFromSelector=a,e.getNextActiveElement=O,e.getSelectorFromElement=l,e.getTransitionDurationFromElement=c,e.getUID=i,e.getjQuery=_,e.isDisabled=h,e.isElement=f,e.isRTL=E,e.isVisible=g,e.noop=m,e.onDOMContentLoaded=v,e.reflow=b,e.toType=o,e.triggerTransitionEnd=u,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}(t)},425:()=>{}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,r),i.exports}r.m=t,e=[],r.O=(t,n,o,i)=>{if(!n){var s=1/0;for(u=0;u<e.length;u++){for(var[n,o,i]=e[u],l=!0,a=0;a<n.length;a++)(!1&i||s>=i)&&Object.keys(r.O).every((e=>r.O[e](n[a])))?n.splice(a--,1):(l=!1,i<s&&(s=i));if(l){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,o,i]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={773:0,170:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,i,[s,l,a]=n,c=0;if(s.some((t=>0!==e[t]))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(a)var u=a(r)}for(t&&t(n);c<s.length;c++)i=s[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(u)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),r.O(void 0,[170],(()=>r(80)));var o=r.O(void 0,[170],(()=>r(425)));o=r.O(o)})();
//# sourceMappingURL=app.js.map