function t(t,e,o,i){var s,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var n=t.length-1;n>=0;n--)(s=t[n])&&(a=(r<3?s(a):r>3?s(e,o,a):s(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,o=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;let r=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(o&&void 0===t){const o=void 0!==e&&1===e.length;o&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&s.set(e,t))}return t}toString(){return this.cssText}};const a=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,o,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[i+1],t[0]);return new r(o,t,i)},n=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:p,getOwnPropertySymbols:h,getPrototypeOf:u}=Object,g=globalThis,b=g.trustedTypes,f=b?b.emptyScript:"",v=g.reactiveElementPolyfillSupport,_=(t,e)=>t,m={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},x=(t,e)=>!l(t,e),y={attribute:!0,type:String,converter:m,reflect:!1,useDefault:!1,hasChanged:x};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(t,o,e);void 0!==i&&c(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){const{get:i,set:s}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const r=i?.call(this);s?.call(this,e),this.requestUpdate(t,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const t=this.properties,e=[...p(t),...h(t)];for(const o of e)this.createProperty(o,t[o])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,o]of e)this.elementProperties.set(t,o)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const o=this._$Eu(t,e);void 0!==o&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eu(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(o)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const o of i){const i=document.createElement("style"),s=e.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=o.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$ET(t,e){const o=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,o);if(void 0!==i&&!0===o.reflect){const s=(void 0!==o.converter?.toAttribute?o.converter:m).toAttribute(e,o.type);this._$Em=t,null==s?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,e){const o=this.constructor,i=o._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=o.getPropertyOptions(i),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:m;this._$Em=i;const r=s.fromAttribute(e,t.type);this[i]=r??this._$Ej?.get(i)??r,this._$Em=null}}requestUpdate(t,e,o,i=!1,s){if(void 0!==t){const r=this.constructor;if(!1===i&&(s=this[t]),o??=r.getPropertyOptions(t),!((o.hasChanged??x)(s,e)||o.useDefault&&o.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,o))))return;this.C(t,e,o)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:o,reflect:i,wrapped:s},r){o&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==s||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||o||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,o]of t){const{wrapped:t}=o,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,o,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[_("elementProperties")]=new Map,$[_("finalized")]=new Map,v?.({ReactiveElement:$}),(g.reactiveElementVersions??=[]).push("2.1.2");const w=globalThis,A=t=>t,S=w.trustedTypes,E=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,k="?"+T,N=`<${k}>`,P=document,O=()=>P.createComment(""),z=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,R="[ \t\n\f\r]",M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,F=/>/g,L=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,D=/"/g,B=/^(?:script|style|textarea|title)$/i,I=(t=>(e,...o)=>({_$litType$:t,strings:e,values:o}))(1),W=Symbol.for("lit-noChange"),J=Symbol.for("lit-nothing"),q=new WeakMap,V=P.createTreeWalker(P,129);function K(t,e){if(!U(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const G=(t,e)=>{const o=t.length-1,i=[];let s,r=2===e?"<svg>":3===e?"<math>":"",a=M;for(let e=0;e<o;e++){const o=t[e];let n,l,c=-1,d=0;for(;d<o.length&&(a.lastIndex=d,l=a.exec(o),null!==l);)d=a.lastIndex,a===M?"!--"===l[1]?a=H:void 0!==l[1]?a=F:void 0!==l[2]?(B.test(l[2])&&(s=RegExp("</"+l[2],"g")),a=L):void 0!==l[3]&&(a=L):a===L?">"===l[0]?(a=s??M,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,n=l[1],a=void 0===l[3]?L:'"'===l[3]?D:j):a===D||a===j?a=L:a===H||a===F?a=M:(a=L,s=void 0);const p=a===L&&t[e+1].startsWith("/>")?" ":"";r+=a===M?o+N:c>=0?(i.push(n),o.slice(0,c)+C+o.slice(c)+T+p):o+T+(-2===c?e:p)}return[K(t,r+(t[o]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class Z{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let s=0,r=0;const a=t.length-1,n=this.parts,[l,c]=G(t,e);if(this.el=Z.createElement(l,o),V.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=V.nextNode())&&n.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(C)){const e=c[r++],o=i.getAttribute(t).split(T),a=/([.?@])?(.*)/.exec(e);n.push({type:1,index:s,name:a[2],strings:o,ctor:"."===a[1]?et:"?"===a[1]?ot:"@"===a[1]?it:tt}),i.removeAttribute(t)}else t.startsWith(T)&&(n.push({type:6,index:s}),i.removeAttribute(t));if(B.test(i.tagName)){const t=i.textContent.split(T),e=t.length-1;if(e>0){i.textContent=S?S.emptyScript:"";for(let o=0;o<e;o++)i.append(t[o],O()),V.nextNode(),n.push({type:2,index:++s});i.append(t[e],O())}}}else if(8===i.nodeType)if(i.data===k)n.push({type:2,index:s});else{let t=-1;for(;-1!==(t=i.data.indexOf(T,t+1));)n.push({type:7,index:s}),t+=T.length-1}s++}}static createElement(t,e){const o=P.createElement("template");return o.innerHTML=t,o}}function Y(t,e,o=t,i){if(e===W)return e;let s=void 0!==i?o._$Co?.[i]:o._$Cl;const r=z(e)?void 0:e._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),void 0===r?s=void 0:(s=new r(t),s._$AT(t,o,i)),void 0!==i?(o._$Co??=[])[i]=s:o._$Cl=s),void 0!==s&&(e=Y(t,s._$AS(t,e.values),s,i)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,i=(t?.creationScope??P).importNode(e,!0);V.currentNode=i;let s=V.nextNode(),r=0,a=0,n=o[0];for(;void 0!==n;){if(r===n.index){let e;2===n.type?e=new X(s,s.nextSibling,this,t):1===n.type?e=new n.ctor(s,n.name,n.strings,this,t):6===n.type&&(e=new st(s,this,t)),this._$AV.push(e),n=o[++a]}r!==n?.index&&(s=V.nextNode(),r++)}return V.currentNode=P,i}p(t){let e=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,o,i){this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),z(t)?t===J||null==t||""===t?(this._$AH!==J&&this._$AR(),this._$AH=J):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>U(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==J&&z(this._$AH)?this._$AA.nextSibling.data=t:this.T(P.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:o}=t,i="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=Z.createElement(K(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Q(i,this),o=t.u(this.options);t.p(e),this.T(o),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new Z(t)),e}k(t){U(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,i=0;for(const s of t)i===e.length?e.push(o=new X(this.O(O()),this.O(O()),this,this.options)):o=e[i],o._$AI(s),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=A(t).nextSibling;A(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,i,s){this.type=1,this._$AH=J,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=J}_$AI(t,e=this,o,i){const s=this.strings;let r=!1;if(void 0===s)t=Y(this,t,e,0),r=!z(t)||t!==this._$AH&&t!==W,r&&(this._$AH=t);else{const i=t;let a,n;for(t=s[0],a=0;a<s.length-1;a++)n=Y(this,i[o+a],e,a),n===W&&(n=this._$AH[a]),r||=!z(n)||n!==this._$AH[a],n===J?t=J:t!==J&&(t+=(n??"")+s[a+1]),this._$AH[a]=n}r&&!i&&this.j(t)}j(t){t===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===J?void 0:t}}class ot extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==J)}}class it extends tt{constructor(t,e,o,i,s){super(t,e,o,i,s),this.type=5}_$AI(t,e=this){if((t=Y(this,t,e,0)??J)===W)return;const o=this._$AH,i=t===J&&o!==J||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==J&&(o===J||i);i&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const rt=w.litHtmlPolyfillSupport;rt?.(Z,X),(w.litHtmlVersions??=[]).push("3.3.3");const at=globalThis;class nt extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,o)=>{const i=o?.renderBefore??e;let s=i._$litPart$;if(void 0===s){const t=o?.renderBefore??null;i._$litPart$=s=new X(e.insertBefore(O(),t),t,void 0,o??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}nt._$litElement$=!0,nt.finalized=!0,at.litElementHydrateSupport?.({LitElement:nt});const lt=at.litElementPolyfillSupport;lt?.({LitElement:nt}),(at.litElementVersions??=[]).push("4.2.2");const ct=t=>(e,o)=>{void 0!==o?o.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},dt={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:x},pt=(t=dt,e,o)=>{const{kind:i,metadata:s}=o;let r=globalThis.litPropertyMetadata.get(s);if(void 0===r&&globalThis.litPropertyMetadata.set(s,r=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),r.set(o.name,t),"accessor"===i){const{name:i}=o;return{set(o){const s=e.get.call(this);e.set.call(this,o),this.requestUpdate(i,s,t,!0,o)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=o;return function(o){const s=this[i];e.call(this,o),this.requestUpdate(i,s,t,!0,o)}}throw Error("Unsupported decorator location: "+i)};function ht(t){return(e,o)=>"object"==typeof o?pt(t,e,o):((t,e,o)=>{const i=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),i?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}function ut(t){return ht({...t,state:!0,attribute:!1})}const gt="0.0.10",bt="navbar-card",ft="default",vt="navbar/get_config",_t={"top-left":{top:"5px",left:"6px",bottom:"auto",right:"auto"},"top-right":{top:"5px",right:"6px",bottom:"auto",left:"auto"},"bottom-left":{bottom:"5px",left:"6px",top:"auto",right:"auto"},"bottom-right":{bottom:"5px",right:"6px",top:"auto",left:"auto"}};function mt(t){if(!t)return"none";if("string"==typeof t)return t.trim()||"none";const e=[];return void 0!==t.brightness&&1!==t.brightness&&e.push(`brightness(${+t.brightness.toFixed(3)})`),void 0!==t.sepia&&0!==t.sepia&&e.push(`sepia(${+t.sepia.toFixed(3)})`),void 0!==t.saturate&&1!==t.saturate&&e.push(`saturate(${+t.saturate.toFixed(3)})`),void 0!==t.hue_rotate&&0!==t.hue_rotate&&e.push(`hue-rotate(${Math.round(t.hue_rotate)}deg)`),void 0!==t.contrast&&1!==t.contrast&&e.push(`contrast(${+t.contrast.toFixed(3)})`),void 0!==t.blur&&t.blur>0&&e.push(`blur(${+t.blur.toFixed(1)}px)`),e.join(" ")||"none"}function xt(t){const e=(e,o="")=>{const i=new RegExp(`${e}\\(([\\d.]+)${o}\\)`),s=t.match(i);return s?parseFloat(s[1]):void 0};return{brightness:e("brightness")??1,sepia:e("sepia")??0,saturate:e("saturate")??1,hue_rotate:e("hue-rotate","deg")??0,contrast:e("contrast")??1,blur:e("blur","px")??0}}const yt={"warm-bedroom":{label:"Warm Bedroom",description:"Warm orange incandescent light, darker when off.",on:{brightness:2.6,sepia:.35,saturate:.9,hue_rotate:0,contrast:1,blur:0},off:{brightness:.6,sepia:0,saturate:1,hue_rotate:0,contrast:1,blur:0}},"warm-living":{label:"Warm Living Room",description:"Warm ambient light with slight orange overlay.",on:{brightness:2,sepia:.3,saturate:1,hue_rotate:0,contrast:1,blur:0},off:{brightness:.5,sepia:0,saturate:.85,hue_rotate:0,contrast:1,blur:0}},"teal-kitchen":{label:"Teal Kitchen",description:"Cool teal LED tone, typical for under-cabinet lighting.",on:{brightness:1.6,sepia:.47,saturate:3,hue_rotate:175,contrast:1,blur:0},off:{brightness:.5,sepia:.3,saturate:1.8,hue_rotate:-10,contrast:1,blur:0}},"teal-hall":{label:"Teal Hall",description:"Cool teal panel light.",on:{brightness:1.7,sepia:.57,saturate:2.5,hue_rotate:175,contrast:1,blur:0},off:{brightness:.6,sepia:0,saturate:.9,hue_rotate:0,contrast:1,blur:0}},"white-bathroom":{label:"White Bathroom",description:"Bright white/blue bathroom light.",on:{brightness:2,sepia:.35,saturate:1.5,hue_rotate:185,contrast:1,blur:0},off:{brightness:.75,sepia:.1,saturate:.9,hue_rotate:0,contrast:1,blur:0}},"natural-day":{label:"Natural Day",description:"Neutral daylight through blinds.",on:{brightness:1.7,sepia:.12,saturate:1.05,hue_rotate:0,contrast:1,blur:0},off:{brightness:.6,sepia:0,saturate:1,hue_rotate:0,contrast:1,blur:0}},dim:{label:"Dim",description:"Subtle dimming effect, light slightly brightens when on.",on:{brightness:1.4,sepia:0,saturate:1,hue_rotate:0,contrast:1,blur:0},off:{brightness:.5,sepia:0,saturate:.8,hue_rotate:0,contrast:1,blur:0}},night:{label:"Night",description:"Strong darkening at night, soft glow when on.",on:{brightness:1.2,sepia:.2,saturate:.8,hue_rotate:0,contrast:1,blur:0},off:{brightness:.3,sepia:.1,saturate:.6,hue_rotate:0,contrast:1,blur:0}}},$t={brightness:{min:0,max:3,step:.05,label:"Brightness"},sepia:{min:0,max:1,step:.05,label:"Sepia"},saturate:{min:0,max:3,step:.05,label:"Saturate"},hue_rotate:{min:0,max:360,step:1,label:"Hue rotate"},contrast:{min:0,max:2,step:.05,label:"Contrast"},blur:{min:0,max:20,step:.5,label:"Blur"}};const wt={temperature:[{above:27,color:"#ff4d4f"},{above:23,color:"#faad14"},{above:17,color:"#52c41a"},{above:0,color:"#40a9ff"},{above:-99,color:"#1890ff"}],humidity:[{above:70,color:"#ff4d4f"},{above:60,color:"#faad14"},{above:40,color:"#52c41a"},{above:30,color:"#faad14"},{above:0,color:"#40a9ff"}],carbon_dioxide:[{above:2e3,color:"#ff4d4f"},{above:1e3,color:"#faad14"},{above:700,color:"#52c41a"},{above:0,color:"#52c41a"}],pm25:[{above:55,color:"#ff4d4f"},{above:35,color:"#faad14"},{above:12,color:"#52c41a"},{above:0,color:"#52c41a"}],pm10:[{above:255,color:"#ff4d4f"},{above:155,color:"#faad14"},{above:55,color:"#52c41a"},{above:0,color:"#52c41a"}],volatile_organic_compounds:[{above:300,color:"#ff4d4f"},{above:150,color:"#faad14"},{above:0,color:"#52c41a"}],battery:[{above:60,color:"#52c41a"},{above:30,color:"#faad14"},{above:0,color:"#ff4d4f"}],illuminance:[{above:1e3,color:"#faad14"},{above:200,color:"#52c41a"},{above:0,color:"#40a9ff"}],power:[{above:2e3,color:"#ff4d4f"},{above:500,color:"#faad14"},{above:0,color:"#52c41a"}]},At={temperature:"°",humidity:"%",carbon_dioxide:" ppm",pm25:" μg",pm10:" μg",volatile_organic_compounds:"",battery:"%",illuminance:" lx",power:" W"};function St(t){return{large:"wide"===t||"fullscreen"===t,wide:"wide"===t,fullscreen:"fullscreen"===t}}function Et(t){switch(t){case"small":return"380px";case"wide":return"860px";case"fullscreen":return"100vw";default:return"560px"}}function Ct(t,e){const o=e.type??"";let i;const s=o.startsWith("custom:")?o.slice(7):o;if(!s||!customElements.get(s)){i=document.createElement("ha-card");const t=document.createElement("div");return t.style.cssText="padding:12px;font-size:11px;white-space:pre-wrap;word-break:break-all;color:var(--secondary-text-color);",t.textContent=JSON.stringify(e,null,2),i.appendChild(t),i}i=document.createElement(s);try{"function"==typeof i.setConfig&&i.setConfig(e),i.hass=t}catch(t){console.warn("[navbar-card] popup: setConfig failed for",s,t)}return i}function Tt(t,e,o,i){const s=window.browser_mod;if(!s)return!1;const r=1===i.length?i[0]:{type:"vertical-stack",cards:i};try{return s.service("popup",{title:e??"",content:r,...St(o)}),!0}catch(t){return console.warn("[navbar-card] browser_mod popup failed:",t),!1}}function kt(t,e,o,i,s){const r=i??"normal",a=s??[];"undefined"!=typeof window&&window.browser_mod&&Tt(0,o,r,a)||function(t,e,o,i){if(!customElements.get("ha-dialog"))return!1;const s=document.createElement("ha-dialog");if(e){const t=document.createElement("span");t.setAttribute("slot","heading"),t.textContent=e,s.appendChild(t)}const r=document.createElement("div");r.style.cssText=`min-width:${Et(o)};max-width:${Et(o)};padding:0 0 16px;`;for(const e of i){const o=Ct(t,e);o.style.cssText="display:block;margin-bottom:8px;",r.appendChild(o)}const a=document.createElement("mwc-button");return a.setAttribute("slot","primaryAction"),a.setAttribute("dialogAction","close"),a.textContent="Close",s.appendChild(a),s.appendChild(r),document.body.appendChild(s),s.open=!0,s.addEventListener("closed",()=>s.remove(),{once:!0}),!0}(t,o,r,a)||function(t,e,o,i){const s=Et(o),r="fullscreen"===o,a=document.createElement("div");a.style.cssText="position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,0.6);backdrop-filter:blur(3px);display:flex;align-items:center;justify-content:center;";const n=document.createElement("div");if(n.style.cssText=`background:var(--card-background-color,#1c1c1c);border-radius:${r?"0":"16px"};max-width:${s};width:calc(100% - ${r?"0":"32px"});max-height:${r?"100vh":"90vh"};overflow:auto;box-shadow:0 24px 48px rgba(0,0,0,0.5);`,e){const t=document.createElement("div");t.style.cssText="display:flex;align-items:center;justify-content:space-between;padding:20px 20px 12px;font-size:18px;font-weight:600;color:var(--primary-text-color);border-bottom:1px solid rgba(var(--rgb-primary-text-color,255,255,255),0.1);";const o=document.createElement("span");o.textContent=e;const i=document.createElement("button");i.textContent="✕",i.style.cssText="background:none;border:none;cursor:pointer;font-size:16px;padding:4px 8px;color:var(--secondary-text-color);border-radius:6px;line-height:1;",i.addEventListener("click",()=>a.remove()),t.appendChild(o),t.appendChild(i),n.appendChild(t)}const l=document.createElement("div");l.style.cssText="padding:16px;display:flex;flex-direction:column;gap:8px;";for(const e of i){const o=Ct(t,e);l.appendChild(o)}n.appendChild(l),a.appendChild(n),a.addEventListener("click",t=>{t.target===a&&a.remove()});const c=t=>{"Escape"===t.key&&(a.remove(),window.removeEventListener("keydown",c))};window.addEventListener("keydown",c),document.body.appendChild(a)}(t,o,r,a)}function Nt(t="none"){return{action:t}}let Pt=class extends nt{constructor(){super(...arguments),this._stored=null,this._availableConfigs=[],this._tab="config",this._expandedTile=null,this._filterTab={},this._loading=!0,this._saving=!1,this._error=null}setConfig(t){this.config=t}updated(t){super.updated(t),t.has("hass")&&this.hass&&this._loading&&this._initialLoad(),t.has("config")&&this.hass&&!this._loading&&this._loadStoredConfig()}async _initialLoad(){await Promise.all([this._loadAvailableConfigs(),this._loadStoredConfig()]),this._loading=!1}async _loadAvailableConfigs(){try{const t=await this.hass.callWS({type:"navbar/list_configs"});this._availableConfigs=t.configs??[]}catch{this._availableConfigs=[]}}async _loadStoredConfig(){const t=this.config?.config_id??ft;try{const e=await this.hass.callWS({type:vt,config_id:t});this._stored=e,this._error=null}catch(t){const e=t,o=t instanceof Error?t.message:String(e?.message?e.message:e?.code?e.code:t),i=String(e?.code??"");o.includes("not_found")||i.includes("not_found")?this._stored={tiles:[],layout:{columns:0,gap:6}}:this._error=o}}_schedSave(){this._saveTimer&&clearTimeout(this._saveTimer),this._saveTimer=setTimeout(()=>{this._saveNow()},500)}async _saveNow(){if(this._stored){this._saving=!0;try{await this.hass.callWS({type:"navbar/save_config",config_id:this.config?.config_id??ft,config:this._stored})}catch(t){console.error("[navbar-editor] save failed:",t)}finally{this._saving=!1}}}_fireConfigChanged(t){const e={...this.config,...t};this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0}))}_patchStored(t){this._stored={...this._stored,...t},this._schedSave()}_patchTile(t,e){const o=[...this._stored?.tiles??[]];o[t]={...o[t],...e},this._patchStored({tiles:o})}_patchAction(t,e,o){const i=this._stored.tiles[t][e]??Nt();this._patchTile(t,{[e]:{...i,...o}})}_patchSensor(t,e,o){const i=[...this._stored.tiles[t].sensors??[]];i[e]={...i[e],...o},this._patchTile(t,{sensors:i})}_addTile(){const t=[...this._stored?.tiles??[],{name:"New Tile",entity:"",background_image:"",tap_action:{action:"navigate",navigation_path:""}}];this._patchStored({tiles:t}),this._expandedTile=t.length-1}_deleteTile(t){const e=(this._stored?.tiles??[]).filter((e,o)=>o!==t);this._patchStored({tiles:e}),this._expandedTile===t&&(this._expandedTile=null)}_moveTile(t,e){const o=[...this._stored?.tiles??[]],i=t+e;i<0||i>=o.length||([o[t],o[i]]=[o[i],o[t]],this._patchStored({tiles:o}),this._expandedTile=i)}_addSensor(t){const e=[...this._stored.tiles[t].sensors??[],{entity:"",position:"top-right"}];this._patchTile(t,{sensors:e})}_deleteSensor(t,e){const o=(this._stored.tiles[t].sensors??[]).filter((t,o)=>o!==e);this._patchTile(t,{sensors:o})}render(){return this._loading?I`<div class="loading">Loading...</div>`:this._error?I`<div class="error">${this._error}</div>`:I`
      <div class="editor">
        ${this._renderTabs()}
        ${"config"===this._tab?this._renderConfigTab():"tiles"===this._tab?this._renderTilesTab():this._renderSlotsTab()}
        ${this._saving?I`<div class="saving-badge">Saving...</div>`:J}
      </div>
    `}_renderTabs(){return I`
      <div class="tabs">
        <button
          class="tab ${"config"===this._tab?"active":""}"
          @click=${()=>{this._tab="config"}}
        >Config</button>
        <button
          class="tab ${"tiles"===this._tab?"active":""}"
          @click=${()=>{this._tab="tiles"}}
        >Tiles (${this._stored?.tiles?.length??0})</button>
        <button
          class="tab ${"slots"===this._tab?"active":""}"
          @click=${()=>{this._tab="slots"}}
        >Slots (${this._stored?.slots?.bottom?.length??0})</button>
      </div>
    `}_renderConfigTab(){const t=this._stored?.layout??{},e=this.config?.config_id??ft;return I`
      <div class="section">
        <div class="section-title">Configuration ID</div>
        <div class="row">
          <div class="field">
            <label>Config ID</label>
            <input
              type="text"
              .value=${e}
              @change=${t=>this._fireConfigChanged({config_id:t.target.value.trim()||ft})}
            />
            <span class="hint">Shared across all dashboards using this ID</span>
          </div>
        </div>
        ${this._availableConfigs.length>1?I`
          <div class="row">
            <div class="field">
              <label>Available configs</label>
              <div class="chip-row">
                ${this._availableConfigs.map(t=>I`
                  <button
                    class="chip ${t===e?"chip-active":""}"
                    @click=${()=>this._fireConfigChanged({config_id:t})}
                  >${t}</button>
                `)}
              </div>
            </div>
          </div>
        `:J}
      </div>

      <div class="section">
        <div class="section-title">Layout</div>
        <div class="row two-col">
          <div class="field">
            <label>Columns <span class="hint-inline">(0 = auto flex row)</span></label>
            <input
              type="number" min="0" max="12"
              .value=${String(t.columns??0)}
              @change=${e=>{const o=parseInt(e.target.value);this._patchStored({layout:{...t,columns:isNaN(o)?0:o}})}}
            />
          </div>
          <div class="field">
            <label>Gap (px)</label>
            <input
              type="number" min="0" max="32"
              .value=${String(t.gap??6)}
              @change=${e=>{const o=parseInt(e.target.value);this._patchStored({layout:{...t,gap:isNaN(o)?6:o}})}}
            />
          </div>
        </div>
      </div>
    `}_renderTilesTab(){const t=this._stored?.tiles??[];return I`
      <div class="section">
        ${t.map((e,o)=>this._renderTileRow(e,o,t.length))}
        <button class="btn-add" @click=${this._addTile}>+ Add tile</button>
      </div>
    `}_renderTileRow(t,e,o){const i=this._expandedTile===e;return I`
      <div class="tile-row">
        <div class="tile-header" @click=${()=>{this._expandedTile=i?null:e}}>
          <span class="tile-arrow">${i?"▾":"▸"}</span>
          <span class="tile-name">${t.name||"(unnamed)"}</span>
          <span class="tile-entity">${t.entity??""}</span>
          <span class="tile-actions-row">
            <button class="icon-btn" title="Move up"
              ?disabled=${0===e}
              @click=${t=>{t.stopPropagation(),this._moveTile(e,-1)}}>↑</button>
            <button class="icon-btn" title="Move down"
              ?disabled=${e===o-1}
              @click=${t=>{t.stopPropagation(),this._moveTile(e,1)}}>↓</button>
            <button class="icon-btn danger" title="Delete"
              @click=${t=>{t.stopPropagation(),this._deleteTile(e)}}>✕</button>
          </span>
        </div>
        ${i?this._renderTileEditor(t,e):J}
      </div>
    `}_renderTileEditor(t,e){const o=this._filterTab[e]??"on",i="on"===o?"object"==typeof t.filter_on?t.filter_on:t.filter_on?xt(t.filter_on):void 0:"object"==typeof t.filter_off?t.filter_off:t.filter_off?xt(t.filter_off):void 0;return I`
      <div class="tile-editor">

        <!-- Basic info -->
        <div class="sub-section-title">Basic</div>
        <div class="row two-col">
          <div class="field">
            <label>Name</label>
            <input type="text" .value=${t.name}
              @input=${t=>this._patchTile(e,{name:t.target.value})} />
          </div>
          <div class="field">
            <label>Entity</label>
            <input type="text" .value=${t.entity??""}
              placeholder="light.living_room"
              @input=${t=>this._patchTile(e,{entity:t.target.value})} />
          </div>
        </div>

        <!-- Images -->
        <div class="sub-section-title">Images</div>
        <div class="row">
          <div class="field">
            <label>Background image</label>
            <input type="text" .value=${t.background_image??""}
              placeholder="/local/Dashboards/Rooms/Living.webp"
              @input=${t=>this._patchTile(e,{background_image:t.target.value})} />
          </div>
        </div>
        <div class="row">
          <div class="field">
            <label>Overlay image <span class="hint-inline">(shown when entity is ON)</span></label>
            <input type="text" .value=${t.overlay_image??""}
              placeholder="/local/Dashboards/Rooms/LivingOn.webp"
              @input=${t=>this._patchTile(e,{overlay_image:t.target.value})} />
          </div>
        </div>

        <!-- Appearance -->
        <div class="sub-section-title">Appearance</div>
        <div class="row two-col">
          <div class="field">
            <label>Min height (px)</label>
            <input type="number" min="40" max="300" .value=${String(t.min_height??83)}
              @change=${t=>{const o=parseInt(t.target.value);this._patchTile(e,{min_height:isNaN(o)?83:o})}} />
          </div>
          <div class="field">
            <label>Filter transition (s)</label>
            <input type="number" min="0" max="5" step="0.1" .value=${String(t.transition??1.5)}
              @change=${t=>{const o=parseFloat(t.target.value);this._patchTile(e,{transition:isNaN(o)?1.5:o})}} />
          </div>
        </div>
        <div class="row two-col">
          <div class="field">
            <label>Border color ON</label>
            <input type="text" .value=${t.border_color_on??""}
              placeholder="rgba(255,165,0,0.45)"
              @input=${t=>this._patchTile(e,{border_color_on:t.target.value})} />
          </div>
          <div class="field">
            <label>Border color OFF</label>
            <input type="text" .value=${t.border_color_off??""}
              placeholder="rgba(255,255,255,0.1)"
              @input=${t=>this._patchTile(e,{border_color_off:t.target.value})} />
          </div>
        </div>

        <!-- Filters -->
        <div class="sub-section-title">CSS Filters</div>
        <div class="row">
          <div class="field">
            <label>Filter preset</label>
            <select
              .value=${t.filter_preset??""}
              @change=${t=>{const o=t.target.value;this._patchTile(e,{filter_preset:o||void 0})}}
            >
              <option value="">— None / custom —</option>
              ${Object.entries(yt).map(([e,o])=>I`
                <option value="${e}" ?selected=${t.filter_preset===e}>${o.label}</option>
              `)}
            </select>
          </div>
        </div>
        ${t.filter_preset?I`
          <div class="preset-preview">
            <span class="hint">${yt[t.filter_preset]?.description??""}</span>
            <span class="hint">ON: <code>${mt(yt[t.filter_preset]?.on)}</code></span>
            <span class="hint">OFF: <code>${mt(yt[t.filter_preset]?.off)}</code></span>
          </div>
        `:I`
          <div class="filter-tabs">
            <button class="filter-tab ${"on"===o?"active":""}"
              @click=${()=>{this._filterTab={...this._filterTab,[e]:"on"}}}>ON state</button>
            <button class="filter-tab ${"off"===o?"active":""}"
              @click=${()=>{this._filterTab={...this._filterTab,[e]:"off"}}}>OFF state</button>
          </div>
          ${this._renderFilterSliders(e,o,i)}
        `}

        <!-- Actions -->
        <div class="sub-section-title">Actions</div>
        ${this._renderActionEditor(t,e,"tap_action","Tap")}
        ${this._renderActionEditor(t,e,"hold_action","Hold (700 ms)")}
        ${this._renderActionEditor(t,e,"double_tap_action","Double tap")}

        <!-- Sensors -->
        <div class="sub-section-title">
          Sensors
          <button class="btn-small" @click=${()=>this._addSensor(e)}>+ Add</button>
        </div>
        ${(t.sensors??[]).map((t,o)=>this._renderSensorRow(t,e,o))}
      </div>
    `}_renderFilterSliders(t,e,o){const i="on"===e?"filter_on":"filter_off",s=o??{};return I`
      <div class="filter-sliders">
        ${Object.entries($t).map(([e,o])=>{const r=s[e]??{brightness:1,sepia:0,saturate:1,hue_rotate:0,contrast:1,blur:0}[e]??0;return I`
              <div class="slider-row">
                <span class="slider-label">${o.label}</span>
                <input
                  type="range"
                  min="${o.min}" max="${o.max}" step="${o.step}"
                  .value=${String(r)}
                  @input=${o=>{const s=parseFloat(o.target.value),r="object"==typeof this._stored.tiles[t][i]?this._stored.tiles[t][i]:{brightness:1,sepia:0,saturate:1,hue_rotate:0,contrast:1,blur:0};this._patchTile(t,{[i]:{...r,[e]:s}})}}
                />
                <span class="slider-value">${r.toFixed("hue_rotate"===e?0:2)}</span>
              </div>
            `})}
      </div>
    `}_renderActionEditor(t,e,o,i){const s=t[o]??Nt("none");return I`
      <div class="action-row">
        <span class="action-label">${i}</span>
        <select
          .value=${s.action}
          @change=${t=>{const i=t.target.value;this._patchTile(e,{[o]:Nt(i)})}}
        >
          ${["none","navigate","more-info","call-service","popup"].map(t=>I`
            <option value="${t}" ?selected=${s.action===t}>${t}</option>
          `)}
        </select>
        ${"navigate"===s.action?I`
          <input
            type="text" class="action-extra"
            placeholder="/dashboard/room"
            .value=${s.navigation_path??""}
            @input=${t=>this._patchAction(e,o,{navigation_path:t.target.value})}
          />
        `:J}
        ${"more-info"===s.action?I`
          <input
            type="text" class="action-extra"
            placeholder="entity (leave blank to use tile entity)"
            .value=${s.entity??""}
            @input=${t=>this._patchAction(e,o,{entity:t.target.value})}
          />
        `:J}
        ${"call-service"===s.action?I`
          <input
            type="text" class="action-extra"
            placeholder="domain.service"
            .value=${s.service??""}
            @input=${t=>this._patchAction(e,o,{service:t.target.value})}
          />
        `:J}
        ${"popup"===s.action?I`
          <input
            type="text" class="action-extra"
            placeholder="Popup title"
            .value=${s.popup?.title??""}
            @input=${t=>this._patchAction(e,o,{popup:{...s.popup,title:t.target.value}})}
          />
        `:J}
      </div>
    `}_renderSensorRow(t,e,o){return I`
      <div class="sensor-row">
        <input
          type="text" class="sensor-entity"
          placeholder="sensor.temperature"
          .value=${t.entity}
          @input=${t=>this._patchSensor(e,o,{entity:t.target.value})}
        />
        <select
          .value=${t.position}
          @change=${t=>this._patchSensor(e,o,{position:t.target.value})}
        >
          ${["top-left","top-right","bottom-left","bottom-right"].map(e=>I`
            <option value="${e}" ?selected=${t.position===e}>${e}</option>
          `)}
        </select>
        <input
          type="text" class="sensor-unit"
          placeholder="unit"
          .value=${t.unit??""}
          @input=${t=>this._patchSensor(e,o,{unit:t.target.value||void 0})}
        />
        <button class="icon-btn danger"
          @click=${()=>this._deleteSensor(e,o)}>✕</button>
      </div>
    `}_renderSlotsTab(){const t=this._stored?.slots?.bottom??[];return I`
      <div class="section">
        <div class="section-title">Bottom slots</div>
        <span class="hint" style="display:block;margin-bottom:8px;">
          Slot cards are rendered below the tiles. Use any Lovelace card type,
          e.g. <code>custom:alert-ticker-card</code>.
        </span>

        ${t.map((t,e)=>I`
          <div class="slot-row">
            <div class="slot-header">
              <span class="tile-name">${t.type||"(no type)"}</span>
              <button class="icon-btn danger" title="Remove"
                @click=${()=>this._deleteSlot(e)}>✕</button>
            </div>
            <div class="field" style="margin-top:6px;">
              <label>Card type</label>
              <input type="text"
                .value=${t.type}
                placeholder="custom:alert-ticker-card"
                @input=${t=>this._patchSlot(e,"type",t.target.value)}
              />
            </div>
            <div class="field" style="margin-top:4px;">
              <label>Raw config (YAML-style properties as JSON)</label>
              <textarea rows="4" style="
                width:100%;padding:6px 8px;box-sizing:border-box;
                background:rgba(var(--rgb-primary-text-color,255,255,255),0.05);
                border:1px solid rgba(var(--rgb-primary-text-color,255,255,255),0.12);
                border-radius:6px;color:var(--primary-text-color);font-size:11px;
                font-family:monospace;resize:vertical;outline:none;
              "
                .value=${this._slotToJson(t)}
                @change=${t=>this._patchSlotJson(e,t.target.value)}
              ></textarea>
            </div>
          </div>
        `)}

        <button class="btn-add" @click=${this._addSlot}>+ Add slot card</button>
      </div>
    `}_slotToJson(t){const{type:e,...o}=t;return Object.keys(o).length?JSON.stringify(o,null,2):""}_patchSlot(t,e,o){const i=[...this._stored?.slots?.bottom??[]];i[t]={...i[t],[e]:o},this._patchStored({slots:{bottom:i}})}_patchSlotJson(t,e){const o=[...this._stored?.slots?.bottom??[]];try{const i=e.trim()?JSON.parse(e):{};o[t]={type:o[t].type,...i},this._patchStored({slots:{bottom:o}})}catch{}}_addSlot(){const t=[...this._stored?.slots?.bottom??[],{type:"custom:alert-ticker-card"}];this._patchStored({slots:{bottom:t}})}_deleteSlot(t){const e=(this._stored?.slots?.bottom??[]).filter((e,o)=>o!==t);this._patchStored({slots:{bottom:e}})}static get styles(){return a`
      :host { display: block; }

      .loading, .error {
        padding: 16px;
        font-size: 13px;
        color: var(--secondary-text-color);
      }
      .error { color: var(--error-color, #ef4444); }

      .editor {
        padding: 0;
        position: relative;
      }

      /* Tabs */
      .tabs {
        display: flex;
        border-bottom: 1px solid rgba(var(--rgb-primary-text-color,255,255,255),0.1);
        margin-bottom: 4px;
      }
      .tab {
        flex: 1;
        padding: 10px 8px;
        background: none;
        border: none;
        border-bottom: 2px solid transparent;
        cursor: pointer;
        font-size: 13px;
        font-weight: 500;
        color: var(--secondary-text-color);
        transition: color 0.15s, border-color 0.15s;
      }
      .tab.active {
        color: var(--primary-color, #3b82f6);
        border-bottom-color: var(--primary-color, #3b82f6);
      }

      /* Sections */
      .section {
        padding: 12px 16px;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .section-title {
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.6px;
        text-transform: uppercase;
        color: var(--secondary-text-color);
        margin-bottom: 2px;
      }
      .sub-section-title {
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        color: var(--secondary-text-color);
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 10px 0 4px;
      }

      /* Fields */
      .row {
        display: flex;
        gap: 8px;
      }
      .two-col .field { flex: 1; }

      .field {
        display: flex;
        flex-direction: column;
        gap: 4px;
        flex: 1;
      }
      label {
        font-size: 11px;
        color: var(--secondary-text-color);
        font-weight: 500;
      }
      input[type="text"],
      input[type="number"],
      select {
        width: 100%;
        padding: 6px 8px;
        background: rgba(var(--rgb-primary-text-color,255,255,255),0.05);
        border: 1px solid rgba(var(--rgb-primary-text-color,255,255,255),0.12);
        border-radius: 6px;
        color: var(--primary-text-color);
        font-size: 13px;
        box-sizing: border-box;
        outline: none;
        transition: border-color 0.15s;
      }
      input:focus, select:focus {
        border-color: var(--primary-color, #3b82f6);
      }
      select option {
        background: var(--card-background-color, #1c1c1c);
        color: var(--primary-text-color);
      }
      .hint {
        font-size: 10px;
        color: var(--secondary-text-color);
        opacity: 0.7;
        display: block;
        margin-top: 1px;
      }
      .hint-inline {
        font-size: 10px;
        font-weight: 400;
        opacity: 0.7;
      }

      /* Chips */
      .chip-row { display: flex; flex-wrap: wrap; gap: 6px; }
      .chip {
        padding: 3px 10px;
        border-radius: 12px;
        font-size: 12px;
        cursor: pointer;
        border: 1px solid rgba(var(--rgb-primary-text-color,255,255,255),0.15);
        background: none;
        color: var(--primary-text-color);
      }
      .chip-active {
        background: var(--primary-color, #3b82f6);
        border-color: var(--primary-color, #3b82f6);
        color: #fff;
      }

      /* Tile list */
      .tile-row {
        border: 1px solid rgba(var(--rgb-primary-text-color,255,255,255),0.08);
        border-radius: 8px;
        overflow: hidden;
      }
      .tile-header {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
        cursor: pointer;
        background: rgba(var(--rgb-primary-text-color,255,255,255),0.03);
        user-select: none;
      }
      .tile-header:hover {
        background: rgba(var(--rgb-primary-text-color,255,255,255),0.06);
      }
      .tile-arrow { font-size: 10px; opacity: 0.5; }
      .tile-name  { font-size: 13px; font-weight: 600; flex: 1; }
      .tile-entity { font-size: 11px; color: var(--secondary-text-color); flex: 1; opacity: 0.8; }
      .tile-actions-row { display: flex; gap: 4px; }

      .tile-editor {
        padding: 4px 12px 12px;
        border-top: 1px solid rgba(var(--rgb-primary-text-color,255,255,255),0.06);
        display: flex;
        flex-direction: column;
        gap: 2px;
      }

      /* Buttons */
      .icon-btn {
        width: 24px; height: 24px;
        padding: 0;
        background: none;
        border: 1px solid rgba(var(--rgb-primary-text-color,255,255,255),0.12);
        border-radius: 4px;
        cursor: pointer;
        color: var(--primary-text-color);
        font-size: 12px;
        display: flex; align-items: center; justify-content: center;
      }
      .icon-btn:hover { background: rgba(var(--rgb-primary-text-color,255,255,255),0.08); }
      .icon-btn:disabled { opacity: 0.3; cursor: default; }
      .icon-btn.danger:hover { background: rgba(239,68,68,0.15); border-color: rgba(239,68,68,0.4); color: #ef4444; }

      .btn-add {
        width: 100%;
        padding: 8px;
        background: none;
        border: 1px dashed rgba(var(--rgb-primary-text-color,255,255,255),0.18);
        border-radius: 8px;
        cursor: pointer;
        color: var(--secondary-text-color);
        font-size: 13px;
        margin-top: 4px;
      }
      .btn-add:hover { background: rgba(var(--rgb-primary-text-color,255,255,255),0.04); }

      .btn-small {
        padding: 2px 8px;
        background: none;
        border: 1px solid rgba(var(--rgb-primary-text-color,255,255,255),0.15);
        border-radius: 4px;
        cursor: pointer;
        color: var(--secondary-text-color);
        font-size: 11px;
      }

      /* Filters */
      .filter-tabs {
        display: flex;
        gap: 4px;
        margin-bottom: 4px;
      }
      .filter-tab {
        padding: 3px 12px;
        border-radius: 4px;
        border: 1px solid rgba(var(--rgb-primary-text-color,255,255,255),0.12);
        background: none;
        cursor: pointer;
        font-size: 12px;
        color: var(--secondary-text-color);
      }
      .filter-tab.active {
        background: var(--primary-color, #3b82f6);
        border-color: var(--primary-color, #3b82f6);
        color: #fff;
      }

      .filter-sliders {
        display: flex;
        flex-direction: column;
        gap: 6px;
        padding: 8px;
        background: rgba(var(--rgb-primary-text-color,255,255,255),0.03);
        border-radius: 6px;
        border: 1px solid rgba(var(--rgb-primary-text-color,255,255,255),0.06);
      }
      .slider-row {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .slider-label {
        width: 72px;
        font-size: 11px;
        color: var(--secondary-text-color);
        flex-shrink: 0;
      }
      .slider-row input[type="range"] {
        flex: 1;
        padding: 0;
        border: none;
        background: none;
        height: 20px;
      }
      .slider-value {
        width: 36px;
        font-size: 11px;
        text-align: right;
        color: var(--primary-text-color);
        flex-shrink: 0;
      }

      .preset-preview {
        display: flex;
        flex-direction: column;
        gap: 2px;
        padding: 6px 8px;
        background: rgba(var(--rgb-primary-text-color,255,255,255),0.03);
        border-radius: 6px;
        font-size: 11px;
      }
      .preset-preview code {
        font-size: 10px;
        opacity: 0.7;
      }

      /* Actions */
      .action-row {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-bottom: 4px;
      }
      .action-label {
        width: 80px;
        font-size: 11px;
        color: var(--secondary-text-color);
        flex-shrink: 0;
      }
      .action-row select { width: auto; flex-shrink: 0; }
      .action-extra { flex: 1; }

      /* Sensors */
      .sensor-row {
        display: flex;
        gap: 4px;
        align-items: center;
        margin-bottom: 4px;
      }
      .sensor-entity { flex: 2; }
      .sensor-unit { width: 56px; flex-shrink: 0; }

      /* Slots */
      .slot-row {
        border: 1px solid rgba(var(--rgb-primary-text-color,255,255,255),0.08);
        border-radius: 8px;
        padding: 10px 12px;
        margin-bottom: 8px;
      }
      .slot-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 4px;
      }

      /* Saving badge */
      .saving-badge {
        position: absolute;
        top: 8px;
        right: 8px;
        font-size: 10px;
        padding: 2px 8px;
        background: rgba(var(--rgb-primary-text-color,255,255,255),0.1);
        border-radius: 4px;
        color: var(--secondary-text-color);
        letter-spacing: 0.3px;
      }
    `}};t([ht({attribute:!1})],Pt.prototype,"hass",void 0),t([ht({attribute:!1})],Pt.prototype,"config",void 0),t([ut()],Pt.prototype,"_stored",void 0),t([ut()],Pt.prototype,"_availableConfigs",void 0),t([ut()],Pt.prototype,"_tab",void 0),t([ut()],Pt.prototype,"_expandedTile",void 0),t([ut()],Pt.prototype,"_filterTab",void 0),t([ut()],Pt.prototype,"_loading",void 0),t([ut()],Pt.prototype,"_saving",void 0),t([ut()],Pt.prototype,"_error",void 0),Pt=t([ct("navbar-card-editor")],Pt),console.info(`%c NAVBAR-CARD %c v${gt} `,"color:#fff;background:#3b82f6;font-weight:700;padding:2px 6px;border-radius:4px 0 0 4px;","color:#3b82f6;background:#1e293b;font-weight:700;padding:2px 6px;border-radius:0 4px 4px 0;");let Ot=class extends nt{constructor(){super(...arguments),this._stored=null,this._loading=!0,this._error=null,this._standalone=!1,this._holdTimers=new Map,this._lastTap=new Map,this._holdFired=new Set,this._slotElements=new Map}setConfig(t){if(!t)throw new Error("navbar-card: missing configuration");this.config=t,this._stored=null,this._loading=!0,this._error=null}updated(t){if(super.updated(t),t.has("hass")&&this.hass){this._loading&&this._loadConfig();for(const t of this._slotElements.values())t.hass=this.hass}}async _loadConfig(){if(!this.config.config_id&&this.config.tiles?.length)return this._stored={tiles:this.config.tiles,slots:this.config.slots},this._standalone=!0,void(this._loading=!1);const t=this.config.config_id??ft;try{const e=await this.hass.callWS({type:vt,config_id:t});this._stored=e,this._loading=!1}catch(t){const e=t,o=t instanceof Error?t.message:String(e?.message?e.message:e?.code?e.code:t);this.config.tiles?.length?(this._stored={tiles:this.config.tiles,slots:this.config.slots},this._standalone=!0,this._loading=!1,console.warn(`[navbar-card] Backend unavailable (${o}). Running in standalone mode.`)):o.includes("not_found")?(this._stored={tiles:[]},this._loading=!1):(this._error=`Backend unavailable (${o}). Go to Settings → Integrations → Add → "Navbar Card" to enable the backend, or use standalone mode with inline tiles: in the card config.`,this._loading=!1)}}_handlePointerDown(t,e,o){if(0===o.button&&(this._holdFired.delete(t),e.hold_action&&"none"!==e.hold_action.action)){const o=setTimeout(()=>{this._holdFired.add(t),this._executeAction(e.hold_action,e)},700);this._holdTimers.set(t,o)}}_handlePointerUp(t){const e=this._holdTimers.get(t);void 0!==e&&(clearTimeout(e),this._holdTimers.delete(t))}_handleClick(t,e){if(this._holdFired.has(t))return void this._holdFired.delete(t);const o=Date.now(),i=this._lastTap.get(t)??0;o-i<300&&e.double_tap_action?(this._lastTap.delete(t),this._executeAction(e.double_tap_action,e)):(this._lastTap.set(t,o),e.double_tap_action?setTimeout(()=>{this._lastTap.get(t)===o&&(this._lastTap.delete(t),this._executeAction(e.tap_action,e))},350):(this._lastTap.delete(t),this._executeAction(e.tap_action,e)))}_executeAction(t,e){if(t&&"none"!==t.action)switch(t.action){case"navigate":t.navigation_path&&(window.history.pushState(null,"",t.navigation_path),window.dispatchEvent(new Event("location-changed")));break;case"more-info":{const o=t.entity??e.entity;o&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:o},bubbles:!0,composed:!0}));break}case"call-service":if(t.service){const[e,o]=t.service.split(".");this.hass.callService(e,o,t.service_data)}break;case"popup":t.popup&&kt(this.hass,0,t.popup.title,t.popup.size,t.popup.content)}}_resolveFilter(t,e){const o=e?t.filter_on:t.filter_off;if(void 0!==o)return mt(o);if(t.filter_preset){const o=yt[t.filter_preset];if(o)return mt(e?o.on:o.off)}return"none"}_sensorColor(t,e){const o=parseFloat(e);if(isNaN(o))return"rgba(255,255,255,0.55)";const i=(this.hass?.states[t.entity]?.attributes??{}).device_class,s=t.thresholds?.length?t.thresholds:function(t){if(t)return wt[t.toLowerCase()]}(i);if(!s?.length)return"rgba(255,255,255,0.85)";const r=[...s].sort((t,e)=>e.above-t.above);for(const t of r)if(o>=t.above)return t.color;return"rgba(255,255,255,0.55)"}_renderSensor(t,e){if("on"===t.show_when&&"on"!==e)return J;if("off"===t.show_when&&"off"!==e)return J;const o=this.hass?.states[t.entity],i=o?.state??"--",s=o?.attributes?.device_class;let r=i;if("--"!==i&&"unavailable"!==i&&"unknown"!==i){const e=parseFloat(i);if(!isNaN(e)){const o=t.precision??1;r=e.toFixed(o)}}const a=void 0!==t.unit?t.unit:function(t){return t?At[t.toLowerCase()]??"":""}(s),n=this._sensorColor(t,i),l=_t[t.position]??_t["top-left"],c=t.font_size??11,d="unavailable"===i||"unknown"===i;return I`
      <div style="
        position:absolute;
        top:${l.top};right:${l.right};
        bottom:${l.bottom};left:${l.left};
        z-index:2;
        color:${d?"rgba(255,255,255,0.25)":n};
        font-size:${c}px;font-weight:700;line-height:1;
        text-shadow:0 1px 3px rgba(0,0,0,0.9);pointer-events:none;
      ">${r}${d?"":a}</div>
    `}_renderTile(t,e){const o=t.entity?this.hass?.states[t.entity]?.state??"off":"off",i="on"===o,s=t.min_height??83,r=t.transition??1.5,a=i?t.border_color_on??"rgba(255,165,0,0.45)":t.border_color_off??"rgba(255,255,255,0.1)",n=this._resolveFilter(t,i),l=i?"1":"0";return I`
      <div
        style="
          flex:1;position:relative;overflow:hidden;
          border-radius:${"12px"};
          min-height:${s}px;
          border:1px solid ${a};
          transition:border-color ${r}s ease;
          cursor:pointer;-webkit-tap-highlight-color:transparent;user-select:none;
        "
        @pointerdown=${o=>this._handlePointerDown(e,t,o)}
        @pointerup=${()=>this._handlePointerUp(e)}
        @pointercancel=${()=>this._handlePointerUp(e)}
        @click=${()=>this._handleClick(e,t)}
      >
        ${t.background_image?I`
          <div style="
            position:absolute;inset:0;z-index:0;
            background-image:url('${t.background_image}');
            background-size:cover;background-position:center;
            filter:${n};
            transition:filter ${r}s ease;
            pointer-events:none;
          "></div>
        `:I`
          <div style="
            position:absolute;inset:0;z-index:0;
            background:rgba(var(--rgb-primary-text-color,255,255,255),0.05);
          "></div>
        `}
        ${t.overlay_image?I`
          <div style="
            position:absolute;inset:0;z-index:1;
            background-image:url('${t.overlay_image}');
            background-size:cover;background-position:center;
            opacity:${l};
            transition:opacity ${r}s ease;
            pointer-events:none;
          "></div>
        `:J}
        ${(t.sensors??[]).map(t=>this._renderSensor(t,o))}
      </div>
    `}_renderSlots(){const t=this._stored?.slots?.bottom;return t?.length?I`
      <div class="slots-bottom">
        ${t.map((t,e)=>{const o=`bottom-${e}-${t.type}`;let i=this._slotElements.get(o);if(!i){const e=t.type.startsWith("custom:")?t.type.slice(7):t.type;if(i=document.createElement(e),"function"==typeof i.setConfig)try{i.setConfig(t)}catch(t){console.warn("[navbar-card] slot setConfig failed:",t)}i.hass=this.hass,this._slotElements.set(o,i)}return I`<div class="slot-item" .slotEl=${i}>${i}</div>`})}
      </div>
    `:J}render(){if(this._loading)return I`<div class="state-box loading">Loading...</div>`;if(this._error)return I`<div class="state-box error">Warning: ${this._error}</div>`;if(!this._stored?.tiles?.length)return I`
        <div class="state-box empty">
          Navbar Card v${gt} - No tiles configured yet.
        </div>
      `;const t=this._stored.layout??{},e=t.columns??0,o=t.gap??6;return I`
      <div class="navbar">
        <div style="${e>0?`display:grid;grid-template-columns:repeat(${e},1fr);gap:${o}px;`:`display:flex;gap:${o}px;align-items:stretch;`}">
          ${this._stored.tiles.map((t,e)=>this._renderTile(t,e))}
        </div>
        ${this._standalone?I`<div class="mode-badge">standalone</div>`:J}
        ${this._renderSlots()}
      </div>
    `}static get styles(){return a`
      :host { display: block; }
      .navbar { display: flex; flex-direction: column; gap: 6px; }
      .tiles-row { display: flex; gap: 6px; align-items: stretch; }
      .tile:active { opacity: 0.88; transform: scale(0.985); }
      .state-box {
        border-radius: 10px; padding: 16px;
        font-size: 12px; text-align: center;
      }
      .loading {
        background: rgba(var(--rgb-primary-text-color,255,255,255),0.04);
        color: var(--secondary-text-color);
        border: 1px dashed rgba(var(--rgb-primary-text-color,255,255,255),0.1);
      }
      .error {
        background: rgba(239,68,68,0.08);
        border: 1px solid rgba(239,68,68,0.3);
        color: #ef4444; text-align: left; line-height: 1.5;
      }
      .empty {
        background: rgba(59,130,246,0.07);
        border: 1px dashed rgba(59,130,246,0.3);
        color: var(--secondary-text-color);
      }
      .mode-badge {
        font-size: 9px; text-align: right; opacity: 0.2;
        color: var(--primary-text-color);
        letter-spacing: 0.5px; text-transform: uppercase;
      }
      .slots-bottom {
        display: flex;
        flex-direction: column;
        gap: 6px;
        margin-top: 2px;
      }
      .slot-item {
        display: block;
      }
    `}static getConfigElement(){return document.createElement("navbar-card-editor")}static getStubConfig(){return{config_id:ft}}};t([ht({attribute:!1})],Ot.prototype,"hass",void 0),t([ht({attribute:!1})],Ot.prototype,"config",void 0),t([ut()],Ot.prototype,"_stored",void 0),t([ut()],Ot.prototype,"_loading",void 0),t([ut()],Ot.prototype,"_error",void 0),t([ut()],Ot.prototype,"_standalone",void 0),Ot=t([ct(bt)],Ot),window.customCards=window.customCards??[],window.customCards.push({type:bt,name:"Navbar Card",description:"Configurable room navigation card with sensor overlays and popup support.",preview:!0,documentationURL:"https://github.com/Michailjovic/Navbar"});export{Ot as NavbarCard};
