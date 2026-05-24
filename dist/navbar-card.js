function t(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),o=new WeakMap;let r=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}};const s=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new r(i,t,n)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,n))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:p,getOwnPropertyNames:d,getOwnPropertySymbols:u,getPrototypeOf:h}=Object,f=globalThis,g=f.trustedTypes,b=g?g.emptyScript:"",m=f.reactiveElementPolyfillSupport,v=(t,e)=>t,_={toAttribute(t,e){switch(e){case Boolean:t=t?b:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!l(t,e),x={attribute:!0,type:String,converter:_,reflect:!1,useDefault:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=x){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);void 0!==n&&c(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:o}=p(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:n,set(e){const r=n?.call(this);o?.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??x}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=h(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...d(t),...u(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,n)=>{if(i)t.adoptedStyleSheets=n.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of n){const n=document.createElement("style"),o=e.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=i.cssText,t.appendChild(n)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:_).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,n=i._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=i.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:_;this._$Em=n;const r=o.fromAttribute(e,t.type);this[n]=r??this._$Ej?.get(n)??r,this._$Em=null}}requestUpdate(t,e,i,n=!1,o){if(void 0!==t){const r=this.constructor;if(!1===n&&(o=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??y)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:n,wrapped:o},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==o||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===n&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,n=this[e];!0!==t||this._$AL.has(e)||void 0===n||this.C(e,void 0,i,n)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[v("elementProperties")]=new Map,$[v("finalized")]=new Map,m?.({ReactiveElement:$}),(f.reactiveElementVersions??=[]).push("2.1.2");const w=globalThis,A=t=>t,C=w.trustedTypes,k=C?C.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,E="?"+T,O=`<${E}>`,N=document,I=()=>N.createComment(""),j=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,F="[ \t\n\f\r]",L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,U=/>/g,z=RegExp(`>|${F}(?:([^\\s"'>=/]+)(${F}*=${F}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,D=/"/g,H=/^(?:script|style|textarea|title)$/i,B=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),W=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),Y=new WeakMap,G=N.createTreeWalker(N,129);function V(t,e){if(!M(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(e):e}const K=(t,e)=>{const i=t.length-1,n=[];let o,r=2===e?"<svg>":3===e?"<math>":"",s=L;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,p=0;for(;p<i.length&&(s.lastIndex=p,l=s.exec(i),null!==l);)p=s.lastIndex,s===L?"!--"===l[1]?s=P:void 0!==l[1]?s=U:void 0!==l[2]?(H.test(l[2])&&(o=RegExp("</"+l[2],"g")),s=z):void 0!==l[3]&&(s=z):s===z?">"===l[0]?(s=o??L,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?z:'"'===l[3]?D:R):s===D||s===R?s=z:s===P||s===U?s=L:(s=z,o=void 0);const d=s===z&&t[e+1].startsWith("/>")?" ":"";r+=s===L?i+O:c>=0?(n.push(a),i.slice(0,c)+S+i.slice(c)+T+d):i+T+(-2===c?e:d)}return[V(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),n]};class Z{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let o=0,r=0;const s=t.length-1,a=this.parts,[l,c]=K(t,e);if(this.el=Z.createElement(l,i),G.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=G.nextNode())&&a.length<s;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(S)){const e=c[r++],i=n.getAttribute(t).split(T),s=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:s[2],strings:i,ctor:"."===s[1]?et:"?"===s[1]?it:"@"===s[1]?nt:tt}),n.removeAttribute(t)}else t.startsWith(T)&&(a.push({type:6,index:o}),n.removeAttribute(t));if(H.test(n.tagName)){const t=n.textContent.split(T),e=t.length-1;if(e>0){n.textContent=C?C.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],I()),G.nextNode(),a.push({type:2,index:++o});n.append(t[e],I())}}}else if(8===n.nodeType)if(n.data===E)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=n.data.indexOf(T,t+1));)a.push({type:7,index:o}),t+=T.length-1}o++}}static createElement(t,e){const i=N.createElement("template");return i.innerHTML=t,i}}function J(t,e,i=t,n){if(e===W)return e;let o=void 0!==n?i._$Co?.[n]:i._$Cl;const r=j(e)?void 0:e._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),void 0===r?o=void 0:(o=new r(t),o._$AT(t,i,n)),void 0!==n?(i._$Co??=[])[n]=o:i._$Cl=o),void 0!==o&&(e=J(t,o._$AS(t,e.values),o,n)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??N).importNode(e,!0);G.currentNode=n;let o=G.nextNode(),r=0,s=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new X(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new ot(o,this,t)),this._$AV.push(e),a=i[++s]}r!==a?.index&&(o=G.nextNode(),r++)}return G.currentNode=N,n}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),j(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>M(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&j(this._$AH)?this._$AA.nextSibling.data=t:this.T(N.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Z.createElement(V(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new Q(n,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=Y.get(t.strings);return void 0===e&&Y.set(t.strings,e=new Z(t)),e}k(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const o of t)n===e.length?e.push(i=new X(this.O(I()),this.O(I()),this,this.options)):i=e[n],i._$AI(o),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=A(t).nextSibling;A(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,o){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}_$AI(t,e=this,i,n){const o=this.strings;let r=!1;if(void 0===o)t=J(this,t,e,0),r=!j(t)||t!==this._$AH&&t!==W,r&&(this._$AH=t);else{const n=t;let s,a;for(t=o[0],s=0;s<o.length-1;s++)a=J(this,n[i+s],e,s),a===W&&(a=this._$AH[s]),r||=!j(a)||a!==this._$AH[s],a===q?t=q:t!==q&&(t+=(a??"")+o[s+1]),this._$AH[s]=a}r&&!n&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class nt extends tt{constructor(t,e,i,n,o){super(t,e,i,n,o),this.type=5}_$AI(t,e=this){if((t=J(this,t,e,0)??q)===W)return;const i=this._$AH,n=t===q&&i!==q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==q&&(i===q||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const rt=w.litHtmlPolyfillSupport;rt?.(Z,X),(w.litHtmlVersions??=[]).push("3.3.3");const st=globalThis;let at=class extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const n=i?.renderBefore??e;let o=n._$litPart$;if(void 0===o){const t=i?.renderBefore??null;n._$litPart$=o=new X(e.insertBefore(I(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}};at._$litElement$=!0,at.finalized=!0,st.litElementHydrateSupport?.({LitElement:at});const lt=st.litElementPolyfillSupport;lt?.({LitElement:at}),(st.litElementVersions??=[]).push("4.2.2");const ct=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},pt={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:y},dt=(t=pt,e,i)=>{const{kind:n,metadata:o}=i;let r=globalThis.litPropertyMetadata.get(o);if(void 0===r&&globalThis.litPropertyMetadata.set(o,r=new Map),"setter"===n&&((t=Object.create(t)).wrapped=!0),r.set(i.name,t),"accessor"===n){const{name:n}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(n,o,t,!0,i)},init(e){return void 0!==e&&this.C(n,void 0,t,e),e}}}if("setter"===n){const{name:n}=i;return function(i){const o=this[n];e.call(this,i),this.requestUpdate(n,o,t,!0,i)}}throw Error("Unsupported decorator location: "+n)};function ut(t){return(e,i)=>"object"==typeof i?dt(t,e,i):((t,e,i)=>{const n=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),n?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function ht(t){return ut({...t,state:!0,attribute:!1})}const ft="0.0.16",gt="navbar-card",bt="default",mt="navbar/get_config",vt={"top-left":{top:"5px",left:"6px",bottom:"auto",right:"auto"},"top-right":{top:"5px",right:"6px",bottom:"auto",left:"auto"},"bottom-left":{bottom:"5px",left:"6px",top:"auto",right:"auto"},"bottom-right":{bottom:"5px",right:"6px",top:"auto",left:"auto"}};function _t(t){if(!t)return"none";if("string"==typeof t)return t.trim()||"none";const e=[];return void 0!==t.brightness&&1!==t.brightness&&e.push(`brightness(${+t.brightness.toFixed(3)})`),void 0!==t.sepia&&0!==t.sepia&&e.push(`sepia(${+t.sepia.toFixed(3)})`),void 0!==t.saturate&&1!==t.saturate&&e.push(`saturate(${+t.saturate.toFixed(3)})`),void 0!==t.hue_rotate&&0!==t.hue_rotate&&e.push(`hue-rotate(${Math.round(t.hue_rotate)}deg)`),void 0!==t.contrast&&1!==t.contrast&&e.push(`contrast(${+t.contrast.toFixed(3)})`),void 0!==t.blur&&t.blur>0&&e.push(`blur(${+t.blur.toFixed(1)}px)`),e.join(" ")||"none"}function yt(t){const e=(e,i="")=>{const n=new RegExp(`${e}\\(([\\d.]+)${i}\\)`),o=t.match(n);return o?parseFloat(o[1]):void 0};return{brightness:e("brightness")??1,sepia:e("sepia")??0,saturate:e("saturate")??1,hue_rotate:e("hue-rotate","deg")??0,contrast:e("contrast")??1,blur:e("blur","px")??0}}const xt={"warm-bedroom":{label:"Warm Bedroom",description:"Warm orange incandescent light, darker when off.",on:{brightness:2.6,sepia:.35,saturate:.9,hue_rotate:0,contrast:1,blur:0},off:{brightness:.6,sepia:0,saturate:1,hue_rotate:0,contrast:1,blur:0}},"warm-living":{label:"Warm Living Room",description:"Warm ambient light with slight orange overlay.",on:{brightness:2,sepia:.3,saturate:1,hue_rotate:0,contrast:1,blur:0},off:{brightness:.5,sepia:0,saturate:.85,hue_rotate:0,contrast:1,blur:0}},"teal-kitchen":{label:"Teal Kitchen",description:"Cool teal LED tone, typical for under-cabinet lighting.",on:{brightness:1.6,sepia:.47,saturate:3,hue_rotate:175,contrast:1,blur:0},off:{brightness:.5,sepia:.3,saturate:1.8,hue_rotate:-10,contrast:1,blur:0}},"teal-hall":{label:"Teal Hall",description:"Cool teal panel light.",on:{brightness:1.7,sepia:.57,saturate:2.5,hue_rotate:175,contrast:1,blur:0},off:{brightness:.6,sepia:0,saturate:.9,hue_rotate:0,contrast:1,blur:0}},"white-bathroom":{label:"White Bathroom",description:"Bright white/blue bathroom light.",on:{brightness:2,sepia:.35,saturate:1.5,hue_rotate:185,contrast:1,blur:0},off:{brightness:.75,sepia:.1,saturate:.9,hue_rotate:0,contrast:1,blur:0}},"natural-day":{label:"Natural Day",description:"Neutral daylight through blinds.",on:{brightness:1.7,sepia:.12,saturate:1.05,hue_rotate:0,contrast:1,blur:0},off:{brightness:.6,sepia:0,saturate:1,hue_rotate:0,contrast:1,blur:0}},dim:{label:"Dim",description:"Subtle dimming effect, light slightly brightens when on.",on:{brightness:1.4,sepia:0,saturate:1,hue_rotate:0,contrast:1,blur:0},off:{brightness:.5,sepia:0,saturate:.8,hue_rotate:0,contrast:1,blur:0}},night:{label:"Night",description:"Strong darkening at night, soft glow when on.",on:{brightness:1.2,sepia:.2,saturate:.8,hue_rotate:0,contrast:1,blur:0},off:{brightness:.3,sepia:.1,saturate:.6,hue_rotate:0,contrast:1,blur:0}}},$t={brightness:{min:0,max:3,step:.05,label:"Brightness"},sepia:{min:0,max:1,step:.05,label:"Sepia"},saturate:{min:0,max:3,step:.05,label:"Saturate"},hue_rotate:{min:0,max:360,step:1,label:"Hue rotate"},contrast:{min:0,max:2,step:.05,label:"Contrast"},blur:{min:0,max:20,step:.5,label:"Blur"}};const wt={temperature:[{above:27,color:"#ff4d4f"},{above:23,color:"#faad14"},{above:17,color:"#52c41a"},{above:0,color:"#40a9ff"},{above:-99,color:"#1890ff"}],humidity:[{above:70,color:"#ff4d4f"},{above:60,color:"#faad14"},{above:40,color:"#52c41a"},{above:30,color:"#faad14"},{above:0,color:"#40a9ff"}],carbon_dioxide:[{above:2e3,color:"#ff4d4f"},{above:1e3,color:"#faad14"},{above:700,color:"#52c41a"},{above:0,color:"#52c41a"}],pm25:[{above:55,color:"#ff4d4f"},{above:35,color:"#faad14"},{above:12,color:"#52c41a"},{above:0,color:"#52c41a"}],pm10:[{above:255,color:"#ff4d4f"},{above:155,color:"#faad14"},{above:55,color:"#52c41a"},{above:0,color:"#52c41a"}],volatile_organic_compounds:[{above:300,color:"#ff4d4f"},{above:150,color:"#faad14"},{above:0,color:"#52c41a"}],battery:[{above:60,color:"#52c41a"},{above:30,color:"#faad14"},{above:0,color:"#ff4d4f"}],illuminance:[{above:1e3,color:"#faad14"},{above:200,color:"#52c41a"},{above:0,color:"#40a9ff"}],power:[{above:2e3,color:"#ff4d4f"},{above:500,color:"#faad14"},{above:0,color:"#52c41a"}]},At={temperature:"°",humidity:"%",carbon_dioxide:" ppm",pm25:" μg",pm10:" μg",volatile_organic_compounds:"",battery:"%",illuminance:" lx",power:" W"};function Ct(t){return{large:"wide"===t||"fullscreen"===t,wide:"wide"===t,fullscreen:"fullscreen"===t}}function kt(t){switch(t){case"small":return"380px";case"wide":return"860px";case"fullscreen":return"100vw";default:return"560px"}}function St(t,e){const i=e.type??"";let n;const o=i.startsWith("custom:")?i.slice(7):i;if(!o||!customElements.get(o)){n=document.createElement("ha-card");const t=document.createElement("div");return t.style.cssText="padding:12px;font-size:11px;white-space:pre-wrap;word-break:break-all;color:var(--secondary-text-color);",t.textContent=JSON.stringify(e,null,2),n.appendChild(t),n}n=document.createElement(o);try{"function"==typeof n.setConfig&&n.setConfig(e),n.hass=t}catch(t){console.warn("[navbar-card] popup: setConfig failed for",o,t)}return n}function Tt(t,e,i,n){const o=window.browser_mod;if(!o)return!1;const r=1===n.length?n[0]:{type:"vertical-stack",cards:n};try{return o.service("popup",{title:e??"",content:r,...Ct(i)}),!0}catch(t){return console.warn("[navbar-card] browser_mod popup failed:",t),!1}}function Et(t,e,i,n,o){const r=n??"normal",s=o??[];"undefined"!=typeof window&&window.browser_mod&&Tt(0,i,r,s)||function(t,e,i,n){if(!customElements.get("ha-dialog"))return!1;const o=document.createElement("ha-dialog");if(e){const t=document.createElement("span");t.setAttribute("slot","heading"),t.textContent=e,o.appendChild(t)}const r=document.createElement("div");r.style.cssText=`min-width:${kt(i)};max-width:${kt(i)};padding:0 0 16px;`;for(const e of n){const i=St(t,e);i.style.cssText="display:block;margin-bottom:8px;",r.appendChild(i)}const s=document.createElement("mwc-button");return s.setAttribute("slot","primaryAction"),s.setAttribute("dialogAction","close"),s.textContent="Close",o.appendChild(s),o.appendChild(r),document.body.appendChild(o),o.open=!0,o.addEventListener("closed",()=>o.remove(),{once:!0}),!0}(t,i,r,s)||function(t,e,i,n){const o=kt(i),r="fullscreen"===i,s=document.createElement("div");s.style.cssText="position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,0.6);backdrop-filter:blur(3px);display:flex;align-items:center;justify-content:center;";const a=document.createElement("div");if(a.style.cssText=`background:var(--card-background-color,#1c1c1c);border-radius:${r?"0":"16px"};max-width:${o};width:calc(100% - ${r?"0":"32px"});max-height:${r?"100vh":"90vh"};overflow:auto;box-shadow:0 24px 48px rgba(0,0,0,0.5);`,e){const t=document.createElement("div");t.style.cssText="display:flex;align-items:center;justify-content:space-between;padding:20px 20px 12px;font-size:18px;font-weight:600;color:var(--primary-text-color);border-bottom:1px solid rgba(var(--rgb-primary-text-color,255,255,255),0.1);";const i=document.createElement("span");i.textContent=e;const n=document.createElement("button");n.textContent="✕",n.style.cssText="background:none;border:none;cursor:pointer;font-size:16px;padding:4px 8px;color:var(--secondary-text-color);border-radius:6px;line-height:1;",n.addEventListener("click",()=>s.remove()),t.appendChild(i),t.appendChild(n),a.appendChild(t)}const l=document.createElement("div");l.style.cssText="padding:16px;display:flex;flex-direction:column;gap:8px;";for(const e of n){const i=St(t,e);l.appendChild(i)}a.appendChild(l),s.appendChild(a),s.addEventListener("click",t=>{t.target===s&&s.remove()});const c=t=>{"Escape"===t.key&&(s.remove(),window.removeEventListener("keydown",c))};window.addEventListener("keydown",c),document.body.appendChild(s)}(t,i,r,s)}const Ot=2;let Nt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};const It=(t,e)=>{const i=t._$AN;if(void 0===i)return!1;for(const t of i)t._$AO?.(e,!1),It(t,e);return!0},jt=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===i?.size)},Mt=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),Pt(e)}};function Ft(t){void 0!==this._$AN?(jt(this),this._$AM=t,Mt(this)):this._$AM=t}function Lt(t,e=!1,i=0){const n=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size)if(e)if(Array.isArray(n))for(let t=i;t<n.length;t++)It(n[t],!1),jt(n[t]);else null!=n&&(It(n,!1),jt(n));else It(this,t)}const Pt=t=>{t.type==Ot&&(t._$AP??=Lt,t._$AQ??=Ft)};class Ut extends Nt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),Mt(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(It(this,t),jt(this))}setValue(t){if((t=>void 0===t.strings)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}class zt{}const Rt=new WeakMap,Dt=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends Ut{render(t){return q}update(t,[e]){const i=e!==this.G;return i&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),q}rt(t){if(void 0!==this.G)if(this.isConnected||(t=void 0),"function"==typeof this.G){const e=this.ht??globalThis;let i=Rt.get(e);void 0===i&&(i=new WeakMap,Rt.set(e,i)),void 0!==i.get(this.G)&&this.G.call(this.ht,void 0),i.set(this.G,t),void 0!==t&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return"function"==typeof this.G?Rt.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});
/*! js-yaml 4.1.1 https://github.com/nodeca/js-yaml @license MIT */function Ht(t){return null==t}var Bt={isNothing:Ht,isObject:function(t){return"object"==typeof t&&null!==t},toArray:function(t){return Array.isArray(t)?t:Ht(t)?[]:[t]},repeat:function(t,e){var i,n="";for(i=0;i<e;i+=1)n+=t;return n},isNegativeZero:function(t){return 0===t&&Number.NEGATIVE_INFINITY===1/t},extend:function(t,e){var i,n,o,r;if(e)for(i=0,n=(r=Object.keys(e)).length;i<n;i+=1)t[o=r[i]]=e[o];return t}};function Wt(t,e){var i="",n=t.reason||"(unknown reason)";return t.mark?(t.mark.name&&(i+='in "'+t.mark.name+'" '),i+="("+(t.mark.line+1)+":"+(t.mark.column+1)+")",!e&&t.mark.snippet&&(i+="\n\n"+t.mark.snippet),n+" "+i):n}function qt(t,e){Error.call(this),this.name="YAMLException",this.reason=t,this.mark=e,this.message=Wt(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack||""}qt.prototype=Object.create(Error.prototype),qt.prototype.constructor=qt,qt.prototype.toString=function(t){return this.name+": "+Wt(this,t)};var Yt=qt;function Gt(t,e,i,n,o){var r="",s="",a=Math.floor(o/2)-1;return n-e>a&&(e=n-a+(r=" ... ").length),i-n>a&&(i=n+a-(s=" ...").length),{str:r+t.slice(e,i).replace(/\t/g,"→")+s,pos:n-e+r.length}}function Vt(t,e){return Bt.repeat(" ",e-t.length)+t}var Kt=function(t,e){if(e=Object.create(e||null),!t.buffer)return null;e.maxLength||(e.maxLength=79),"number"!=typeof e.indent&&(e.indent=1),"number"!=typeof e.linesBefore&&(e.linesBefore=3),"number"!=typeof e.linesAfter&&(e.linesAfter=2);for(var i,n=/\r?\n|\r|\0/g,o=[0],r=[],s=-1;i=n.exec(t.buffer);)r.push(i.index),o.push(i.index+i[0].length),t.position<=i.index&&s<0&&(s=o.length-2);s<0&&(s=o.length-1);var a,l,c="",p=Math.min(t.line+e.linesAfter,r.length).toString().length,d=e.maxLength-(e.indent+p+3);for(a=1;a<=e.linesBefore&&!(s-a<0);a++)l=Gt(t.buffer,o[s-a],r[s-a],t.position-(o[s]-o[s-a]),d),c=Bt.repeat(" ",e.indent)+Vt((t.line-a+1).toString(),p)+" | "+l.str+"\n"+c;for(l=Gt(t.buffer,o[s],r[s],t.position,d),c+=Bt.repeat(" ",e.indent)+Vt((t.line+1).toString(),p)+" | "+l.str+"\n",c+=Bt.repeat("-",e.indent+p+3+l.pos)+"^\n",a=1;a<=e.linesAfter&&!(s+a>=r.length);a++)l=Gt(t.buffer,o[s+a],r[s+a],t.position-(o[s]-o[s+a]),d),c+=Bt.repeat(" ",e.indent)+Vt((t.line+a+1).toString(),p)+" | "+l.str+"\n";return c.replace(/\n$/,"")},Zt=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],Jt=["scalar","sequence","mapping"];var Qt=function(t,e){if(e=e||{},Object.keys(e).forEach(function(e){if(-1===Zt.indexOf(e))throw new Yt('Unknown option "'+e+'" is met in definition of "'+t+'" YAML type.')}),this.options=e,this.tag=t,this.kind=e.kind||null,this.resolve=e.resolve||function(){return!0},this.construct=e.construct||function(t){return t},this.instanceOf=e.instanceOf||null,this.predicate=e.predicate||null,this.represent=e.represent||null,this.representName=e.representName||null,this.defaultStyle=e.defaultStyle||null,this.multi=e.multi||!1,this.styleAliases=function(t){var e={};return null!==t&&Object.keys(t).forEach(function(i){t[i].forEach(function(t){e[String(t)]=i})}),e}(e.styleAliases||null),-1===Jt.indexOf(this.kind))throw new Yt('Unknown kind "'+this.kind+'" is specified for "'+t+'" YAML type.')};function Xt(t,e){var i=[];return t[e].forEach(function(t){var e=i.length;i.forEach(function(i,n){i.tag===t.tag&&i.kind===t.kind&&i.multi===t.multi&&(e=n)}),i[e]=t}),i}function te(t){return this.extend(t)}te.prototype.extend=function(t){var e=[],i=[];if(t instanceof Qt)i.push(t);else if(Array.isArray(t))i=i.concat(t);else{if(!t||!Array.isArray(t.implicit)&&!Array.isArray(t.explicit))throw new Yt("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");t.implicit&&(e=e.concat(t.implicit)),t.explicit&&(i=i.concat(t.explicit))}e.forEach(function(t){if(!(t instanceof Qt))throw new Yt("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(t.loadKind&&"scalar"!==t.loadKind)throw new Yt("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(t.multi)throw new Yt("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),i.forEach(function(t){if(!(t instanceof Qt))throw new Yt("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var n=Object.create(te.prototype);return n.implicit=(this.implicit||[]).concat(e),n.explicit=(this.explicit||[]).concat(i),n.compiledImplicit=Xt(n,"implicit"),n.compiledExplicit=Xt(n,"explicit"),n.compiledTypeMap=function(){var t,e,i={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function n(t){t.multi?(i.multi[t.kind].push(t),i.multi.fallback.push(t)):i[t.kind][t.tag]=i.fallback[t.tag]=t}for(t=0,e=arguments.length;t<e;t+=1)arguments[t].forEach(n);return i}(n.compiledImplicit,n.compiledExplicit),n};var ee=new te({explicit:[new Qt("tag:yaml.org,2002:str",{kind:"scalar",construct:function(t){return null!==t?t:""}}),new Qt("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(t){return null!==t?t:[]}}),new Qt("tag:yaml.org,2002:map",{kind:"mapping",construct:function(t){return null!==t?t:{}}})]});var ie=new Qt("tag:yaml.org,2002:null",{kind:"scalar",resolve:function(t){if(null===t)return!0;var e=t.length;return 1===e&&"~"===t||4===e&&("null"===t||"Null"===t||"NULL"===t)},construct:function(){return null},predicate:function(t){return null===t},represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});var ne=new Qt("tag:yaml.org,2002:bool",{kind:"scalar",resolve:function(t){if(null===t)return!1;var e=t.length;return 4===e&&("true"===t||"True"===t||"TRUE"===t)||5===e&&("false"===t||"False"===t||"FALSE"===t)},construct:function(t){return"true"===t||"True"===t||"TRUE"===t},predicate:function(t){return"[object Boolean]"===Object.prototype.toString.call(t)},represent:{lowercase:function(t){return t?"true":"false"},uppercase:function(t){return t?"TRUE":"FALSE"},camelcase:function(t){return t?"True":"False"}},defaultStyle:"lowercase"});function oe(t){return 48<=t&&t<=57||65<=t&&t<=70||97<=t&&t<=102}function re(t){return 48<=t&&t<=55}function se(t){return 48<=t&&t<=57}var ae=new Qt("tag:yaml.org,2002:int",{kind:"scalar",resolve:function(t){if(null===t)return!1;var e,i=t.length,n=0,o=!1;if(!i)return!1;if("-"!==(e=t[n])&&"+"!==e||(e=t[++n]),"0"===e){if(n+1===i)return!0;if("b"===(e=t[++n])){for(n++;n<i;n++)if("_"!==(e=t[n])){if("0"!==e&&"1"!==e)return!1;o=!0}return o&&"_"!==e}if("x"===e){for(n++;n<i;n++)if("_"!==(e=t[n])){if(!oe(t.charCodeAt(n)))return!1;o=!0}return o&&"_"!==e}if("o"===e){for(n++;n<i;n++)if("_"!==(e=t[n])){if(!re(t.charCodeAt(n)))return!1;o=!0}return o&&"_"!==e}}if("_"===e)return!1;for(;n<i;n++)if("_"!==(e=t[n])){if(!se(t.charCodeAt(n)))return!1;o=!0}return!(!o||"_"===e)},construct:function(t){var e,i=t,n=1;if(-1!==i.indexOf("_")&&(i=i.replace(/_/g,"")),"-"!==(e=i[0])&&"+"!==e||("-"===e&&(n=-1),e=(i=i.slice(1))[0]),"0"===i)return 0;if("0"===e){if("b"===i[1])return n*parseInt(i.slice(2),2);if("x"===i[1])return n*parseInt(i.slice(2),16);if("o"===i[1])return n*parseInt(i.slice(2),8)}return n*parseInt(i,10)},predicate:function(t){return"[object Number]"===Object.prototype.toString.call(t)&&t%1==0&&!Bt.isNegativeZero(t)},represent:{binary:function(t){return t>=0?"0b"+t.toString(2):"-0b"+t.toString(2).slice(1)},octal:function(t){return t>=0?"0o"+t.toString(8):"-0o"+t.toString(8).slice(1)},decimal:function(t){return t.toString(10)},hexadecimal:function(t){return t>=0?"0x"+t.toString(16).toUpperCase():"-0x"+t.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),le=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");var ce=/^[-+]?[0-9]+e/;var pe=new Qt("tag:yaml.org,2002:float",{kind:"scalar",resolve:function(t){return null!==t&&!(!le.test(t)||"_"===t[t.length-1])},construct:function(t){var e,i;return i="-"===(e=t.replace(/_/g,"").toLowerCase())[0]?-1:1,"+-".indexOf(e[0])>=0&&(e=e.slice(1)),".inf"===e?1===i?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:".nan"===e?NaN:i*parseFloat(e,10)},predicate:function(t){return"[object Number]"===Object.prototype.toString.call(t)&&(t%1!=0||Bt.isNegativeZero(t))},represent:function(t,e){var i;if(isNaN(t))switch(e){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===t)switch(e){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===t)switch(e){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Bt.isNegativeZero(t))return"-0.0";return i=t.toString(10),ce.test(i)?i.replace("e",".e"):i},defaultStyle:"lowercase"}),de=ee.extend({implicit:[ie,ne,ae,pe]}),ue=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),he=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");var fe=new Qt("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:function(t){return null!==t&&(null!==ue.exec(t)||null!==he.exec(t))},construct:function(t){var e,i,n,o,r,s,a,l,c=0,p=null;if(null===(e=ue.exec(t))&&(e=he.exec(t)),null===e)throw new Error("Date resolve error");if(i=+e[1],n=+e[2]-1,o=+e[3],!e[4])return new Date(Date.UTC(i,n,o));if(r=+e[4],s=+e[5],a=+e[6],e[7]){for(c=e[7].slice(0,3);c.length<3;)c+="0";c=+c}return e[9]&&(p=6e4*(60*+e[10]+ +(e[11]||0)),"-"===e[9]&&(p=-p)),l=new Date(Date.UTC(i,n,o,r,s,a,c)),p&&l.setTime(l.getTime()-p),l},instanceOf:Date,represent:function(t){return t.toISOString()}});var ge=new Qt("tag:yaml.org,2002:merge",{kind:"scalar",resolve:function(t){return"<<"===t||null===t}}),be="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";var me=new Qt("tag:yaml.org,2002:binary",{kind:"scalar",resolve:function(t){if(null===t)return!1;var e,i,n=0,o=t.length,r=be;for(i=0;i<o;i++)if(!((e=r.indexOf(t.charAt(i)))>64)){if(e<0)return!1;n+=6}return n%8==0},construct:function(t){var e,i,n=t.replace(/[\r\n=]/g,""),o=n.length,r=be,s=0,a=[];for(e=0;e<o;e++)e%4==0&&e&&(a.push(s>>16&255),a.push(s>>8&255),a.push(255&s)),s=s<<6|r.indexOf(n.charAt(e));return 0===(i=o%4*6)?(a.push(s>>16&255),a.push(s>>8&255),a.push(255&s)):18===i?(a.push(s>>10&255),a.push(s>>2&255)):12===i&&a.push(s>>4&255),new Uint8Array(a)},predicate:function(t){return"[object Uint8Array]"===Object.prototype.toString.call(t)},represent:function(t){var e,i,n="",o=0,r=t.length,s=be;for(e=0;e<r;e++)e%3==0&&e&&(n+=s[o>>18&63],n+=s[o>>12&63],n+=s[o>>6&63],n+=s[63&o]),o=(o<<8)+t[e];return 0===(i=r%3)?(n+=s[o>>18&63],n+=s[o>>12&63],n+=s[o>>6&63],n+=s[63&o]):2===i?(n+=s[o>>10&63],n+=s[o>>4&63],n+=s[o<<2&63],n+=s[64]):1===i&&(n+=s[o>>2&63],n+=s[o<<4&63],n+=s[64],n+=s[64]),n}}),ve=Object.prototype.hasOwnProperty,_e=Object.prototype.toString;var ye=new Qt("tag:yaml.org,2002:omap",{kind:"sequence",resolve:function(t){if(null===t)return!0;var e,i,n,o,r,s=[],a=t;for(e=0,i=a.length;e<i;e+=1){if(n=a[e],r=!1,"[object Object]"!==_e.call(n))return!1;for(o in n)if(ve.call(n,o)){if(r)return!1;r=!0}if(!r)return!1;if(-1!==s.indexOf(o))return!1;s.push(o)}return!0},construct:function(t){return null!==t?t:[]}}),xe=Object.prototype.toString;var $e=new Qt("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:function(t){if(null===t)return!0;var e,i,n,o,r,s=t;for(r=new Array(s.length),e=0,i=s.length;e<i;e+=1){if(n=s[e],"[object Object]"!==xe.call(n))return!1;if(1!==(o=Object.keys(n)).length)return!1;r[e]=[o[0],n[o[0]]]}return!0},construct:function(t){if(null===t)return[];var e,i,n,o,r,s=t;for(r=new Array(s.length),e=0,i=s.length;e<i;e+=1)n=s[e],o=Object.keys(n),r[e]=[o[0],n[o[0]]];return r}}),we=Object.prototype.hasOwnProperty;var Ae=new Qt("tag:yaml.org,2002:set",{kind:"mapping",resolve:function(t){if(null===t)return!0;var e,i=t;for(e in i)if(we.call(i,e)&&null!==i[e])return!1;return!0},construct:function(t){return null!==t?t:{}}}),Ce=de.extend({implicit:[fe,ge],explicit:[me,ye,$e,Ae]}),ke=Object.prototype.hasOwnProperty,Se=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,Te=/[\x85\u2028\u2029]/,Ee=/[,\[\]\{\}]/,Oe=/^(?:!|!!|![a-z\-]+!)$/i,Ne=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function Ie(t){return Object.prototype.toString.call(t)}function je(t){return 10===t||13===t}function Me(t){return 9===t||32===t}function Fe(t){return 9===t||32===t||10===t||13===t}function Le(t){return 44===t||91===t||93===t||123===t||125===t}function Pe(t){var e;return 48<=t&&t<=57?t-48:97<=(e=32|t)&&e<=102?e-97+10:-1}function Ue(t){return 120===t?2:117===t?4:85===t?8:0}function ze(t){return 48<=t&&t<=57?t-48:-1}function Re(t){return 48===t?"\0":97===t?"":98===t?"\b":116===t||9===t?"\t":110===t?"\n":118===t?"\v":102===t?"\f":114===t?"\r":101===t?"":32===t?" ":34===t?'"':47===t?"/":92===t?"\\":78===t?"":95===t?" ":76===t?"\u2028":80===t?"\u2029":""}function De(t){return t<=65535?String.fromCharCode(t):String.fromCharCode(55296+(t-65536>>10),56320+(t-65536&1023))}function He(t,e,i){"__proto__"===e?Object.defineProperty(t,e,{configurable:!0,enumerable:!0,writable:!0,value:i}):t[e]=i}for(var Be=new Array(256),We=new Array(256),qe=0;qe<256;qe++)Be[qe]=Re(qe)?1:0,We[qe]=Re(qe);function Ye(t,e){this.input=t,this.filename=e.filename||null,this.schema=e.schema||Ce,this.onWarning=e.onWarning||null,this.legacy=e.legacy||!1,this.json=e.json||!1,this.listener=e.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=t.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function Ge(t,e){var i={name:t.filename,buffer:t.input.slice(0,-1),position:t.position,line:t.line,column:t.position-t.lineStart};return i.snippet=Kt(i),new Yt(e,i)}function Ve(t,e){throw Ge(t,e)}function Ke(t,e){t.onWarning&&t.onWarning.call(null,Ge(t,e))}var Ze={YAML:function(t,e,i){var n,o,r;null!==t.version&&Ve(t,"duplication of %YAML directive"),1!==i.length&&Ve(t,"YAML directive accepts exactly one argument"),null===(n=/^([0-9]+)\.([0-9]+)$/.exec(i[0]))&&Ve(t,"ill-formed argument of the YAML directive"),o=parseInt(n[1],10),r=parseInt(n[2],10),1!==o&&Ve(t,"unacceptable YAML version of the document"),t.version=i[0],t.checkLineBreaks=r<2,1!==r&&2!==r&&Ke(t,"unsupported YAML version of the document")},TAG:function(t,e,i){var n,o;2!==i.length&&Ve(t,"TAG directive accepts exactly two arguments"),n=i[0],o=i[1],Oe.test(n)||Ve(t,"ill-formed tag handle (first argument) of the TAG directive"),ke.call(t.tagMap,n)&&Ve(t,'there is a previously declared suffix for "'+n+'" tag handle'),Ne.test(o)||Ve(t,"ill-formed tag prefix (second argument) of the TAG directive");try{o=decodeURIComponent(o)}catch(e){Ve(t,"tag prefix is malformed: "+o)}t.tagMap[n]=o}};function Je(t,e,i,n){var o,r,s,a;if(e<i){if(a=t.input.slice(e,i),n)for(o=0,r=a.length;o<r;o+=1)9===(s=a.charCodeAt(o))||32<=s&&s<=1114111||Ve(t,"expected valid JSON character");else Se.test(a)&&Ve(t,"the stream contains non-printable characters");t.result+=a}}function Qe(t,e,i,n){var o,r,s,a;for(Bt.isObject(i)||Ve(t,"cannot merge mappings; the provided source object is unacceptable"),s=0,a=(o=Object.keys(i)).length;s<a;s+=1)r=o[s],ke.call(e,r)||(He(e,r,i[r]),n[r]=!0)}function Xe(t,e,i,n,o,r,s,a,l){var c,p;if(Array.isArray(o))for(c=0,p=(o=Array.prototype.slice.call(o)).length;c<p;c+=1)Array.isArray(o[c])&&Ve(t,"nested arrays are not supported inside keys"),"object"==typeof o&&"[object Object]"===Ie(o[c])&&(o[c]="[object Object]");if("object"==typeof o&&"[object Object]"===Ie(o)&&(o="[object Object]"),o=String(o),null===e&&(e={}),"tag:yaml.org,2002:merge"===n)if(Array.isArray(r))for(c=0,p=r.length;c<p;c+=1)Qe(t,e,r[c],i);else Qe(t,e,r,i);else t.json||ke.call(i,o)||!ke.call(e,o)||(t.line=s||t.line,t.lineStart=a||t.lineStart,t.position=l||t.position,Ve(t,"duplicated mapping key")),He(e,o,r),delete i[o];return e}function ti(t){var e;10===(e=t.input.charCodeAt(t.position))?t.position++:13===e?(t.position++,10===t.input.charCodeAt(t.position)&&t.position++):Ve(t,"a line break is expected"),t.line+=1,t.lineStart=t.position,t.firstTabInLine=-1}function ei(t,e,i){for(var n=0,o=t.input.charCodeAt(t.position);0!==o;){for(;Me(o);)9===o&&-1===t.firstTabInLine&&(t.firstTabInLine=t.position),o=t.input.charCodeAt(++t.position);if(e&&35===o)do{o=t.input.charCodeAt(++t.position)}while(10!==o&&13!==o&&0!==o);if(!je(o))break;for(ti(t),o=t.input.charCodeAt(t.position),n++,t.lineIndent=0;32===o;)t.lineIndent++,o=t.input.charCodeAt(++t.position)}return-1!==i&&0!==n&&t.lineIndent<i&&Ke(t,"deficient indentation"),n}function ii(t){var e,i=t.position;return!(45!==(e=t.input.charCodeAt(i))&&46!==e||e!==t.input.charCodeAt(i+1)||e!==t.input.charCodeAt(i+2)||(i+=3,0!==(e=t.input.charCodeAt(i))&&!Fe(e)))}function ni(t,e){1===e?t.result+=" ":e>1&&(t.result+=Bt.repeat("\n",e-1))}function oi(t,e){var i,n,o=t.tag,r=t.anchor,s=[],a=!1;if(-1!==t.firstTabInLine)return!1;for(null!==t.anchor&&(t.anchorMap[t.anchor]=s),n=t.input.charCodeAt(t.position);0!==n&&(-1!==t.firstTabInLine&&(t.position=t.firstTabInLine,Ve(t,"tab characters must not be used in indentation")),45===n)&&Fe(t.input.charCodeAt(t.position+1));)if(a=!0,t.position++,ei(t,!0,-1)&&t.lineIndent<=e)s.push(null),n=t.input.charCodeAt(t.position);else if(i=t.line,ai(t,e,3,!1,!0),s.push(t.result),ei(t,!0,-1),n=t.input.charCodeAt(t.position),(t.line===i||t.lineIndent>e)&&0!==n)Ve(t,"bad indentation of a sequence entry");else if(t.lineIndent<e)break;return!!a&&(t.tag=o,t.anchor=r,t.kind="sequence",t.result=s,!0)}function ri(t){var e,i,n,o,r=!1,s=!1;if(33!==(o=t.input.charCodeAt(t.position)))return!1;if(null!==t.tag&&Ve(t,"duplication of a tag property"),60===(o=t.input.charCodeAt(++t.position))?(r=!0,o=t.input.charCodeAt(++t.position)):33===o?(s=!0,i="!!",o=t.input.charCodeAt(++t.position)):i="!",e=t.position,r){do{o=t.input.charCodeAt(++t.position)}while(0!==o&&62!==o);t.position<t.length?(n=t.input.slice(e,t.position),o=t.input.charCodeAt(++t.position)):Ve(t,"unexpected end of the stream within a verbatim tag")}else{for(;0!==o&&!Fe(o);)33===o&&(s?Ve(t,"tag suffix cannot contain exclamation marks"):(i=t.input.slice(e-1,t.position+1),Oe.test(i)||Ve(t,"named tag handle cannot contain such characters"),s=!0,e=t.position+1)),o=t.input.charCodeAt(++t.position);n=t.input.slice(e,t.position),Ee.test(n)&&Ve(t,"tag suffix cannot contain flow indicator characters")}n&&!Ne.test(n)&&Ve(t,"tag name cannot contain such characters: "+n);try{n=decodeURIComponent(n)}catch(e){Ve(t,"tag name is malformed: "+n)}return r?t.tag=n:ke.call(t.tagMap,i)?t.tag=t.tagMap[i]+n:"!"===i?t.tag="!"+n:"!!"===i?t.tag="tag:yaml.org,2002:"+n:Ve(t,'undeclared tag handle "'+i+'"'),!0}function si(t){var e,i;if(38!==(i=t.input.charCodeAt(t.position)))return!1;for(null!==t.anchor&&Ve(t,"duplication of an anchor property"),i=t.input.charCodeAt(++t.position),e=t.position;0!==i&&!Fe(i)&&!Le(i);)i=t.input.charCodeAt(++t.position);return t.position===e&&Ve(t,"name of an anchor node must contain at least one character"),t.anchor=t.input.slice(e,t.position),!0}function ai(t,e,i,n,o){var r,s,a,l,c,p,d,u,h,f=1,g=!1,b=!1;if(null!==t.listener&&t.listener("open",t),t.tag=null,t.anchor=null,t.kind=null,t.result=null,r=s=a=4===i||3===i,n&&ei(t,!0,-1)&&(g=!0,t.lineIndent>e?f=1:t.lineIndent===e?f=0:t.lineIndent<e&&(f=-1)),1===f)for(;ri(t)||si(t);)ei(t,!0,-1)?(g=!0,a=r,t.lineIndent>e?f=1:t.lineIndent===e?f=0:t.lineIndent<e&&(f=-1)):a=!1;if(a&&(a=g||o),1!==f&&4!==i||(u=1===i||2===i?e:e+1,h=t.position-t.lineStart,1===f?a&&(oi(t,h)||function(t,e,i){var n,o,r,s,a,l,c,p=t.tag,d=t.anchor,u={},h=Object.create(null),f=null,g=null,b=null,m=!1,v=!1;if(-1!==t.firstTabInLine)return!1;for(null!==t.anchor&&(t.anchorMap[t.anchor]=u),c=t.input.charCodeAt(t.position);0!==c;){if(m||-1===t.firstTabInLine||(t.position=t.firstTabInLine,Ve(t,"tab characters must not be used in indentation")),n=t.input.charCodeAt(t.position+1),r=t.line,63!==c&&58!==c||!Fe(n)){if(s=t.line,a=t.lineStart,l=t.position,!ai(t,i,2,!1,!0))break;if(t.line===r){for(c=t.input.charCodeAt(t.position);Me(c);)c=t.input.charCodeAt(++t.position);if(58===c)Fe(c=t.input.charCodeAt(++t.position))||Ve(t,"a whitespace character is expected after the key-value separator within a block mapping"),m&&(Xe(t,u,h,f,g,null,s,a,l),f=g=b=null),v=!0,m=!1,o=!1,f=t.tag,g=t.result;else{if(!v)return t.tag=p,t.anchor=d,!0;Ve(t,"can not read an implicit mapping pair; a colon is missed")}}else{if(!v)return t.tag=p,t.anchor=d,!0;Ve(t,"can not read a block mapping entry; a multiline key may not be an implicit key")}}else 63===c?(m&&(Xe(t,u,h,f,g,null,s,a,l),f=g=b=null),v=!0,m=!0,o=!0):m?(m=!1,o=!0):Ve(t,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),t.position+=1,c=n;if((t.line===r||t.lineIndent>e)&&(m&&(s=t.line,a=t.lineStart,l=t.position),ai(t,e,4,!0,o)&&(m?g=t.result:b=t.result),m||(Xe(t,u,h,f,g,b,s,a,l),f=g=b=null),ei(t,!0,-1),c=t.input.charCodeAt(t.position)),(t.line===r||t.lineIndent>e)&&0!==c)Ve(t,"bad indentation of a mapping entry");else if(t.lineIndent<e)break}return m&&Xe(t,u,h,f,g,null,s,a,l),v&&(t.tag=p,t.anchor=d,t.kind="mapping",t.result=u),v}(t,h,u))||function(t,e){var i,n,o,r,s,a,l,c,p,d,u,h,f=!0,g=t.tag,b=t.anchor,m=Object.create(null);if(91===(h=t.input.charCodeAt(t.position)))s=93,c=!1,r=[];else{if(123!==h)return!1;s=125,c=!0,r={}}for(null!==t.anchor&&(t.anchorMap[t.anchor]=r),h=t.input.charCodeAt(++t.position);0!==h;){if(ei(t,!0,e),(h=t.input.charCodeAt(t.position))===s)return t.position++,t.tag=g,t.anchor=b,t.kind=c?"mapping":"sequence",t.result=r,!0;f?44===h&&Ve(t,"expected the node content, but found ','"):Ve(t,"missed comma between flow collection entries"),u=null,a=l=!1,63===h&&Fe(t.input.charCodeAt(t.position+1))&&(a=l=!0,t.position++,ei(t,!0,e)),i=t.line,n=t.lineStart,o=t.position,ai(t,e,1,!1,!0),d=t.tag,p=t.result,ei(t,!0,e),h=t.input.charCodeAt(t.position),!l&&t.line!==i||58!==h||(a=!0,h=t.input.charCodeAt(++t.position),ei(t,!0,e),ai(t,e,1,!1,!0),u=t.result),c?Xe(t,r,m,d,p,u,i,n,o):a?r.push(Xe(t,null,m,d,p,u,i,n,o)):r.push(p),ei(t,!0,e),44===(h=t.input.charCodeAt(t.position))?(f=!0,h=t.input.charCodeAt(++t.position)):f=!1}Ve(t,"unexpected end of the stream within a flow collection")}(t,u)?b=!0:(s&&function(t,e){var i,n,o,r,s=1,a=!1,l=!1,c=e,p=0,d=!1;if(124===(r=t.input.charCodeAt(t.position)))n=!1;else{if(62!==r)return!1;n=!0}for(t.kind="scalar",t.result="";0!==r;)if(43===(r=t.input.charCodeAt(++t.position))||45===r)1===s?s=43===r?3:2:Ve(t,"repeat of a chomping mode identifier");else{if(!((o=ze(r))>=0))break;0===o?Ve(t,"bad explicit indentation width of a block scalar; it cannot be less than one"):l?Ve(t,"repeat of an indentation width identifier"):(c=e+o-1,l=!0)}if(Me(r)){do{r=t.input.charCodeAt(++t.position)}while(Me(r));if(35===r)do{r=t.input.charCodeAt(++t.position)}while(!je(r)&&0!==r)}for(;0!==r;){for(ti(t),t.lineIndent=0,r=t.input.charCodeAt(t.position);(!l||t.lineIndent<c)&&32===r;)t.lineIndent++,r=t.input.charCodeAt(++t.position);if(!l&&t.lineIndent>c&&(c=t.lineIndent),je(r))p++;else{if(t.lineIndent<c){3===s?t.result+=Bt.repeat("\n",a?1+p:p):1===s&&a&&(t.result+="\n");break}for(n?Me(r)?(d=!0,t.result+=Bt.repeat("\n",a?1+p:p)):d?(d=!1,t.result+=Bt.repeat("\n",p+1)):0===p?a&&(t.result+=" "):t.result+=Bt.repeat("\n",p):t.result+=Bt.repeat("\n",a?1+p:p),a=!0,l=!0,p=0,i=t.position;!je(r)&&0!==r;)r=t.input.charCodeAt(++t.position);Je(t,i,t.position,!1)}}return!0}(t,u)||function(t,e){var i,n,o;if(39!==(i=t.input.charCodeAt(t.position)))return!1;for(t.kind="scalar",t.result="",t.position++,n=o=t.position;0!==(i=t.input.charCodeAt(t.position));)if(39===i){if(Je(t,n,t.position,!0),39!==(i=t.input.charCodeAt(++t.position)))return!0;n=t.position,t.position++,o=t.position}else je(i)?(Je(t,n,o,!0),ni(t,ei(t,!1,e)),n=o=t.position):t.position===t.lineStart&&ii(t)?Ve(t,"unexpected end of the document within a single quoted scalar"):(t.position++,o=t.position);Ve(t,"unexpected end of the stream within a single quoted scalar")}(t,u)||function(t,e){var i,n,o,r,s,a;if(34!==(a=t.input.charCodeAt(t.position)))return!1;for(t.kind="scalar",t.result="",t.position++,i=n=t.position;0!==(a=t.input.charCodeAt(t.position));){if(34===a)return Je(t,i,t.position,!0),t.position++,!0;if(92===a){if(Je(t,i,t.position,!0),je(a=t.input.charCodeAt(++t.position)))ei(t,!1,e);else if(a<256&&Be[a])t.result+=We[a],t.position++;else if((s=Ue(a))>0){for(o=s,r=0;o>0;o--)(s=Pe(a=t.input.charCodeAt(++t.position)))>=0?r=(r<<4)+s:Ve(t,"expected hexadecimal character");t.result+=De(r),t.position++}else Ve(t,"unknown escape sequence");i=n=t.position}else je(a)?(Je(t,i,n,!0),ni(t,ei(t,!1,e)),i=n=t.position):t.position===t.lineStart&&ii(t)?Ve(t,"unexpected end of the document within a double quoted scalar"):(t.position++,n=t.position)}Ve(t,"unexpected end of the stream within a double quoted scalar")}(t,u)?b=!0:!function(t){var e,i,n;if(42!==(n=t.input.charCodeAt(t.position)))return!1;for(n=t.input.charCodeAt(++t.position),e=t.position;0!==n&&!Fe(n)&&!Le(n);)n=t.input.charCodeAt(++t.position);return t.position===e&&Ve(t,"name of an alias node must contain at least one character"),i=t.input.slice(e,t.position),ke.call(t.anchorMap,i)||Ve(t,'unidentified alias "'+i+'"'),t.result=t.anchorMap[i],ei(t,!0,-1),!0}(t)?function(t,e,i){var n,o,r,s,a,l,c,p,d=t.kind,u=t.result;if(Fe(p=t.input.charCodeAt(t.position))||Le(p)||35===p||38===p||42===p||33===p||124===p||62===p||39===p||34===p||37===p||64===p||96===p)return!1;if((63===p||45===p)&&(Fe(n=t.input.charCodeAt(t.position+1))||i&&Le(n)))return!1;for(t.kind="scalar",t.result="",o=r=t.position,s=!1;0!==p;){if(58===p){if(Fe(n=t.input.charCodeAt(t.position+1))||i&&Le(n))break}else if(35===p){if(Fe(t.input.charCodeAt(t.position-1)))break}else{if(t.position===t.lineStart&&ii(t)||i&&Le(p))break;if(je(p)){if(a=t.line,l=t.lineStart,c=t.lineIndent,ei(t,!1,-1),t.lineIndent>=e){s=!0,p=t.input.charCodeAt(t.position);continue}t.position=r,t.line=a,t.lineStart=l,t.lineIndent=c;break}}s&&(Je(t,o,r,!1),ni(t,t.line-a),o=r=t.position,s=!1),Me(p)||(r=t.position+1),p=t.input.charCodeAt(++t.position)}return Je(t,o,r,!1),!!t.result||(t.kind=d,t.result=u,!1)}(t,u,1===i)&&(b=!0,null===t.tag&&(t.tag="?")):(b=!0,null===t.tag&&null===t.anchor||Ve(t,"alias node should not have any properties")),null!==t.anchor&&(t.anchorMap[t.anchor]=t.result)):0===f&&(b=a&&oi(t,h))),null===t.tag)null!==t.anchor&&(t.anchorMap[t.anchor]=t.result);else if("?"===t.tag){for(null!==t.result&&"scalar"!==t.kind&&Ve(t,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+t.kind+'"'),l=0,c=t.implicitTypes.length;l<c;l+=1)if((d=t.implicitTypes[l]).resolve(t.result)){t.result=d.construct(t.result),t.tag=d.tag,null!==t.anchor&&(t.anchorMap[t.anchor]=t.result);break}}else if("!"!==t.tag){if(ke.call(t.typeMap[t.kind||"fallback"],t.tag))d=t.typeMap[t.kind||"fallback"][t.tag];else for(d=null,l=0,c=(p=t.typeMap.multi[t.kind||"fallback"]).length;l<c;l+=1)if(t.tag.slice(0,p[l].tag.length)===p[l].tag){d=p[l];break}d||Ve(t,"unknown tag !<"+t.tag+">"),null!==t.result&&d.kind!==t.kind&&Ve(t,"unacceptable node kind for !<"+t.tag+'> tag; it should be "'+d.kind+'", not "'+t.kind+'"'),d.resolve(t.result,t.tag)?(t.result=d.construct(t.result,t.tag),null!==t.anchor&&(t.anchorMap[t.anchor]=t.result)):Ve(t,"cannot resolve a node with !<"+t.tag+"> explicit tag")}return null!==t.listener&&t.listener("close",t),null!==t.tag||null!==t.anchor||b}function li(t){var e,i,n,o,r=t.position,s=!1;for(t.version=null,t.checkLineBreaks=t.legacy,t.tagMap=Object.create(null),t.anchorMap=Object.create(null);0!==(o=t.input.charCodeAt(t.position))&&(ei(t,!0,-1),o=t.input.charCodeAt(t.position),!(t.lineIndent>0||37!==o));){for(s=!0,o=t.input.charCodeAt(++t.position),e=t.position;0!==o&&!Fe(o);)o=t.input.charCodeAt(++t.position);for(n=[],(i=t.input.slice(e,t.position)).length<1&&Ve(t,"directive name must not be less than one character in length");0!==o;){for(;Me(o);)o=t.input.charCodeAt(++t.position);if(35===o){do{o=t.input.charCodeAt(++t.position)}while(0!==o&&!je(o));break}if(je(o))break;for(e=t.position;0!==o&&!Fe(o);)o=t.input.charCodeAt(++t.position);n.push(t.input.slice(e,t.position))}0!==o&&ti(t),ke.call(Ze,i)?Ze[i](t,i,n):Ke(t,'unknown document directive "'+i+'"')}ei(t,!0,-1),0===t.lineIndent&&45===t.input.charCodeAt(t.position)&&45===t.input.charCodeAt(t.position+1)&&45===t.input.charCodeAt(t.position+2)?(t.position+=3,ei(t,!0,-1)):s&&Ve(t,"directives end mark is expected"),ai(t,t.lineIndent-1,4,!1,!0),ei(t,!0,-1),t.checkLineBreaks&&Te.test(t.input.slice(r,t.position))&&Ke(t,"non-ASCII line breaks are interpreted as content"),t.documents.push(t.result),t.position===t.lineStart&&ii(t)?46===t.input.charCodeAt(t.position)&&(t.position+=3,ei(t,!0,-1)):t.position<t.length-1&&Ve(t,"end of the stream or a document separator is expected")}var ci={load:function(t,e){var i=function(t,e){e=e||{},0!==(t=String(t)).length&&(10!==t.charCodeAt(t.length-1)&&13!==t.charCodeAt(t.length-1)&&(t+="\n"),65279===t.charCodeAt(0)&&(t=t.slice(1)));var i=new Ye(t,e),n=t.indexOf("\0");for(-1!==n&&(i.position=n,Ve(i,"null byte is not allowed in input")),i.input+="\0";32===i.input.charCodeAt(i.position);)i.lineIndent+=1,i.position+=1;for(;i.position<i.length-1;)li(i);return i.documents}(t,e);if(0!==i.length){if(1===i.length)return i[0];throw new Yt("expected a single document in the stream, but found more")}}},pi=Object.prototype.toString,di=Object.prototype.hasOwnProperty,ui=65279,hi={0:"\\0",7:"\\a",8:"\\b",9:"\\t",10:"\\n",11:"\\v",12:"\\f",13:"\\r",27:"\\e",34:'\\"',92:"\\\\",133:"\\N",160:"\\_",8232:"\\L",8233:"\\P"},fi=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],gi=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function bi(t){var e,i,n;if(e=t.toString(16).toUpperCase(),t<=255)i="x",n=2;else if(t<=65535)i="u",n=4;else{if(!(t<=4294967295))throw new Yt("code point within a string may not be greater than 0xFFFFFFFF");i="U",n=8}return"\\"+i+Bt.repeat("0",n-e.length)+e}function mi(t){this.schema=t.schema||Ce,this.indent=Math.max(1,t.indent||2),this.noArrayIndent=t.noArrayIndent||!1,this.skipInvalid=t.skipInvalid||!1,this.flowLevel=Bt.isNothing(t.flowLevel)?-1:t.flowLevel,this.styleMap=function(t,e){var i,n,o,r,s,a,l;if(null===e)return{};for(i={},o=0,r=(n=Object.keys(e)).length;o<r;o+=1)s=n[o],a=String(e[s]),"!!"===s.slice(0,2)&&(s="tag:yaml.org,2002:"+s.slice(2)),(l=t.compiledTypeMap.fallback[s])&&di.call(l.styleAliases,a)&&(a=l.styleAliases[a]),i[s]=a;return i}(this.schema,t.styles||null),this.sortKeys=t.sortKeys||!1,this.lineWidth=t.lineWidth||80,this.noRefs=t.noRefs||!1,this.noCompatMode=t.noCompatMode||!1,this.condenseFlow=t.condenseFlow||!1,this.quotingType='"'===t.quotingType?2:1,this.forceQuotes=t.forceQuotes||!1,this.replacer="function"==typeof t.replacer?t.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function vi(t,e){for(var i,n=Bt.repeat(" ",e),o=0,r=-1,s="",a=t.length;o<a;)-1===(r=t.indexOf("\n",o))?(i=t.slice(o),o=a):(i=t.slice(o,r+1),o=r+1),i.length&&"\n"!==i&&(s+=n),s+=i;return s}function _i(t,e){return"\n"+Bt.repeat(" ",t.indent*e)}function yi(t){return 32===t||9===t}function xi(t){return 32<=t&&t<=126||161<=t&&t<=55295&&8232!==t&&8233!==t||57344<=t&&t<=65533&&t!==ui||65536<=t&&t<=1114111}function $i(t){return xi(t)&&t!==ui&&13!==t&&10!==t}function wi(t,e,i){var n=$i(t),o=n&&!yi(t);return(i?n:n&&44!==t&&91!==t&&93!==t&&123!==t&&125!==t)&&35!==t&&!(58===e&&!o)||$i(e)&&!yi(e)&&35===t||58===e&&o}function Ai(t,e){var i,n=t.charCodeAt(e);return n>=55296&&n<=56319&&e+1<t.length&&(i=t.charCodeAt(e+1))>=56320&&i<=57343?1024*(n-55296)+i-56320+65536:n}function Ci(t){return/^\n* /.test(t)}function ki(t,e,i,n,o,r,s,a){var l,c=0,p=null,d=!1,u=!1,h=-1!==n,f=-1,g=function(t){return xi(t)&&t!==ui&&!yi(t)&&45!==t&&63!==t&&58!==t&&44!==t&&91!==t&&93!==t&&123!==t&&125!==t&&35!==t&&38!==t&&42!==t&&33!==t&&124!==t&&61!==t&&62!==t&&39!==t&&34!==t&&37!==t&&64!==t&&96!==t}(Ai(t,0))&&function(t){return!yi(t)&&58!==t}(Ai(t,t.length-1));if(e||s)for(l=0;l<t.length;c>=65536?l+=2:l++){if(!xi(c=Ai(t,l)))return 5;g=g&&wi(c,p,a),p=c}else{for(l=0;l<t.length;c>=65536?l+=2:l++){if(10===(c=Ai(t,l)))d=!0,h&&(u=u||l-f-1>n&&" "!==t[f+1],f=l);else if(!xi(c))return 5;g=g&&wi(c,p,a),p=c}u=u||h&&l-f-1>n&&" "!==t[f+1]}return d||u?i>9&&Ci(t)?5:s?2===r?5:2:u?4:3:!g||s||o(t)?2===r?5:2:1}function Si(t,e,i,n,o){t.dump=function(){if(0===e.length)return 2===t.quotingType?'""':"''";if(!t.noCompatMode&&(-1!==fi.indexOf(e)||gi.test(e)))return 2===t.quotingType?'"'+e+'"':"'"+e+"'";var r=t.indent*Math.max(1,i),s=-1===t.lineWidth?-1:Math.max(Math.min(t.lineWidth,40),t.lineWidth-r),a=n||t.flowLevel>-1&&i>=t.flowLevel;switch(ki(e,a,t.indent,s,function(e){return function(t,e){var i,n;for(i=0,n=t.implicitTypes.length;i<n;i+=1)if(t.implicitTypes[i].resolve(e))return!0;return!1}(t,e)},t.quotingType,t.forceQuotes&&!n,o)){case 1:return e;case 2:return"'"+e.replace(/'/g,"''")+"'";case 3:return"|"+Ti(e,t.indent)+Ei(vi(e,r));case 4:return">"+Ti(e,t.indent)+Ei(vi(function(t,e){var i,n,o=/(\n+)([^\n]*)/g,r=(a=t.indexOf("\n"),a=-1!==a?a:t.length,o.lastIndex=a,Oi(t.slice(0,a),e)),s="\n"===t[0]||" "===t[0];var a;for(;n=o.exec(t);){var l=n[1],c=n[2];i=" "===c[0],r+=l+(s||i||""===c?"":"\n")+Oi(c,e),s=i}return r}(e,s),r));case 5:return'"'+function(t){for(var e,i="",n=0,o=0;o<t.length;n>=65536?o+=2:o++)n=Ai(t,o),!(e=hi[n])&&xi(n)?(i+=t[o],n>=65536&&(i+=t[o+1])):i+=e||bi(n);return i}(e)+'"';default:throw new Yt("impossible error: invalid scalar style")}}()}function Ti(t,e){var i=Ci(t)?String(e):"",n="\n"===t[t.length-1];return i+(n&&("\n"===t[t.length-2]||"\n"===t)?"+":n?"":"-")+"\n"}function Ei(t){return"\n"===t[t.length-1]?t.slice(0,-1):t}function Oi(t,e){if(""===t||" "===t[0])return t;for(var i,n,o=/ [^ ]/g,r=0,s=0,a=0,l="";i=o.exec(t);)(a=i.index)-r>e&&(n=s>r?s:a,l+="\n"+t.slice(r,n),r=n+1),s=a;return l+="\n",t.length-r>e&&s>r?l+=t.slice(r,s)+"\n"+t.slice(s+1):l+=t.slice(r),l.slice(1)}function Ni(t,e,i,n){var o,r,s,a="",l=t.tag;for(o=0,r=i.length;o<r;o+=1)s=i[o],t.replacer&&(s=t.replacer.call(i,String(o),s)),(ji(t,e+1,s,!0,!0,!1,!0)||void 0===s&&ji(t,e+1,null,!0,!0,!1,!0))&&(n&&""===a||(a+=_i(t,e)),t.dump&&10===t.dump.charCodeAt(0)?a+="-":a+="- ",a+=t.dump);t.tag=l,t.dump=a||"[]"}function Ii(t,e,i){var n,o,r,s,a,l;for(r=0,s=(o=i?t.explicitTypes:t.implicitTypes).length;r<s;r+=1)if(((a=o[r]).instanceOf||a.predicate)&&(!a.instanceOf||"object"==typeof e&&e instanceof a.instanceOf)&&(!a.predicate||a.predicate(e))){if(i?a.multi&&a.representName?t.tag=a.representName(e):t.tag=a.tag:t.tag="?",a.represent){if(l=t.styleMap[a.tag]||a.defaultStyle,"[object Function]"===pi.call(a.represent))n=a.represent(e,l);else{if(!di.call(a.represent,l))throw new Yt("!<"+a.tag+'> tag resolver accepts not "'+l+'" style');n=a.represent[l](e,l)}t.dump=n}return!0}return!1}function ji(t,e,i,n,o,r,s){t.tag=null,t.dump=i,Ii(t,i,!1)||Ii(t,i,!0);var a,l=pi.call(t.dump),c=n;n&&(n=t.flowLevel<0||t.flowLevel>e);var p,d,u="[object Object]"===l||"[object Array]"===l;if(u&&(d=-1!==(p=t.duplicates.indexOf(i))),(null!==t.tag&&"?"!==t.tag||d||2!==t.indent&&e>0)&&(o=!1),d&&t.usedDuplicates[p])t.dump="*ref_"+p;else{if(u&&d&&!t.usedDuplicates[p]&&(t.usedDuplicates[p]=!0),"[object Object]"===l)n&&0!==Object.keys(t.dump).length?(!function(t,e,i,n){var o,r,s,a,l,c,p="",d=t.tag,u=Object.keys(i);if(!0===t.sortKeys)u.sort();else if("function"==typeof t.sortKeys)u.sort(t.sortKeys);else if(t.sortKeys)throw new Yt("sortKeys must be a boolean or a function");for(o=0,r=u.length;o<r;o+=1)c="",n&&""===p||(c+=_i(t,e)),a=i[s=u[o]],t.replacer&&(a=t.replacer.call(i,s,a)),ji(t,e+1,s,!0,!0,!0)&&((l=null!==t.tag&&"?"!==t.tag||t.dump&&t.dump.length>1024)&&(t.dump&&10===t.dump.charCodeAt(0)?c+="?":c+="? "),c+=t.dump,l&&(c+=_i(t,e)),ji(t,e+1,a,!0,l)&&(t.dump&&10===t.dump.charCodeAt(0)?c+=":":c+=": ",p+=c+=t.dump));t.tag=d,t.dump=p||"{}"}(t,e,t.dump,o),d&&(t.dump="&ref_"+p+t.dump)):(!function(t,e,i){var n,o,r,s,a,l="",c=t.tag,p=Object.keys(i);for(n=0,o=p.length;n<o;n+=1)a="",""!==l&&(a+=", "),t.condenseFlow&&(a+='"'),s=i[r=p[n]],t.replacer&&(s=t.replacer.call(i,r,s)),ji(t,e,r,!1,!1)&&(t.dump.length>1024&&(a+="? "),a+=t.dump+(t.condenseFlow?'"':"")+":"+(t.condenseFlow?"":" "),ji(t,e,s,!1,!1)&&(l+=a+=t.dump));t.tag=c,t.dump="{"+l+"}"}(t,e,t.dump),d&&(t.dump="&ref_"+p+" "+t.dump));else if("[object Array]"===l)n&&0!==t.dump.length?(t.noArrayIndent&&!s&&e>0?Ni(t,e-1,t.dump,o):Ni(t,e,t.dump,o),d&&(t.dump="&ref_"+p+t.dump)):(!function(t,e,i){var n,o,r,s="",a=t.tag;for(n=0,o=i.length;n<o;n+=1)r=i[n],t.replacer&&(r=t.replacer.call(i,String(n),r)),(ji(t,e,r,!1,!1)||void 0===r&&ji(t,e,null,!1,!1))&&(""!==s&&(s+=","+(t.condenseFlow?"":" ")),s+=t.dump);t.tag=a,t.dump="["+s+"]"}(t,e,t.dump),d&&(t.dump="&ref_"+p+" "+t.dump));else{if("[object String]"!==l){if("[object Undefined]"===l)return!1;if(t.skipInvalid)return!1;throw new Yt("unacceptable kind of an object to dump "+l)}"?"!==t.tag&&Si(t,t.dump,e,r,c)}null!==t.tag&&"?"!==t.tag&&(a=encodeURI("!"===t.tag[0]?t.tag.slice(1):t.tag).replace(/!/g,"%21"),a="!"===t.tag[0]?"!"+a:"tag:yaml.org,2002:"===a.slice(0,18)?"!!"+a.slice(18):"!<"+a+">",t.dump=a+" "+t.dump)}return!0}function Mi(t,e){var i,n,o=[],r=[];for(Fi(t,o,r),i=0,n=r.length;i<n;i+=1)e.duplicates.push(o[r[i]]);e.usedDuplicates=new Array(n)}function Fi(t,e,i){var n,o,r;if(null!==t&&"object"==typeof t)if(-1!==(o=e.indexOf(t)))-1===i.indexOf(o)&&i.push(o);else if(e.push(t),Array.isArray(t))for(o=0,r=t.length;o<r;o+=1)Fi(t[o],e,i);else for(o=0,r=(n=Object.keys(t)).length;o<r;o+=1)Fi(t[n[o]],e,i)}var Li=ci.load,Pi={dump:function(t,e){var i=new mi(e=e||{});i.noRefs||Mi(t,i);var n=t;return i.replacer&&(n=i.replacer.call({"":n},"",n)),ji(i,0,n,!0,!0)?i.dump+"\n":""}}.dump;function Ui(t="none"){return{action:t}}let zi=class extends at{constructor(){super(...arguments),this._stored=null,this._availableConfigs=[],this._tab="config",this._expandedTile=null,this._filterTab={},this._loading=!0,this._saving=!1,this._error=null,this._slotRefs=new Map,this._slotEditing=new Set}_getSlotRef(t){return this._slotRefs.has(t)||this._slotRefs.set(t,new zt),this._slotRefs.get(t)}setConfig(t){this.config=t}updated(t){super.updated(t),t.has("hass")&&this.hass&&this._loading&&this._initialLoad(),t.has("config")&&this.hass&&!this._loading&&this._loadStoredConfig(),this._slotRefs.forEach((t,e)=>{if(t.value&&!this._slotEditing.has(e)){const i=this._stored?.slots?.bottom?.[e];i&&(t.value.value=this._slotToFullYaml(i))}})}async _initialLoad(){await Promise.all([this._loadAvailableConfigs(),this._loadStoredConfig()]),this._loading=!1}async _loadAvailableConfigs(){try{const t=await this.hass.callWS({type:"navbar/list_configs"});this._availableConfigs=t.configs??[]}catch{this._availableConfigs=[]}}async _loadStoredConfig(){const t=this.config?.config_id??bt;try{const e=await this.hass.callWS({type:mt,config_id:t});this._stored=e,this._error=null}catch(t){const e=t,i=t instanceof Error?t.message:String(e?.message?e.message:e?.code?e.code:t),n=String(e?.code??"");i.includes("not_found")||n.includes("not_found")?this._stored={tiles:[],layout:{columns:0,gap:6}}:this._error=i}}_schedSave(){this._saveTimer&&clearTimeout(this._saveTimer),this._saveTimer=setTimeout(()=>{this._saveNow()},500)}async _saveNow(){if(this._stored){this._saving=!0;try{await this.hass.callWS({type:"navbar/save_config",config_id:this.config?.config_id??bt,config:this._stored})}catch(t){console.error("[navbar-editor] save failed:",t)}finally{this._saving=!1}}}_fireConfigChanged(t){const e={...this.config,...t};this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0}))}_patchStored(t){this._stored={...this._stored,...t},this._schedSave()}_patchTile(t,e){const i=[...this._stored?.tiles??[]];i[t]={...i[t],...e},this._patchStored({tiles:i})}_patchAction(t,e,i){const n=this._stored.tiles[t][e]??Ui();this._patchTile(t,{[e]:{...n,...i}})}_patchSensor(t,e,i){const n=[...this._stored.tiles[t].sensors??[]];n[e]={...n[e],...i},this._patchTile(t,{sensors:n})}_addTile(){const t=[...this._stored?.tiles??[],{name:"New Tile",entity:"",background_image:"",tap_action:{action:"navigate",navigation_path:""}}];this._patchStored({tiles:t}),this._expandedTile=t.length-1}_deleteTile(t){const e=(this._stored?.tiles??[]).filter((e,i)=>i!==t);this._patchStored({tiles:e}),this._expandedTile===t&&(this._expandedTile=null)}_moveTile(t,e){const i=[...this._stored?.tiles??[]],n=t+e;n<0||n>=i.length||([i[t],i[n]]=[i[n],i[t]],this._patchStored({tiles:i}),this._expandedTile=n)}_addSensor(t){const e=[...this._stored.tiles[t].sensors??[],{entity:"",position:"top-right"}];this._patchTile(t,{sensors:e})}_deleteSensor(t,e){const i=(this._stored.tiles[t].sensors??[]).filter((t,i)=>i!==e);this._patchTile(t,{sensors:i})}render(){return this._loading?B`<div class="loading">Loading...</div>`:this._error?B`<div class="error">${this._error}</div>`:B`
      <div class="editor">
        ${this._renderTabs()}
        ${"config"===this._tab?this._renderConfigTab():"tiles"===this._tab?this._renderTilesTab():this._renderSlotsTab()}
        ${this._saving?B`<div class="saving-badge">Saving...</div>`:q}
      </div>
    `}_renderTabs(){return B`
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
    `}_renderConfigTab(){const t=this._stored?.layout??{},e=this.config?.config_id??bt;return B`
      <div class="section">
        <div class="section-title">Configuration ID</div>
        <div class="row">
          <div class="field">
            <label>Config ID</label>
            <input
              type="text"
              .value=${e}
              @change=${t=>this._fireConfigChanged({config_id:t.target.value.trim()||bt})}
            />
            <span class="hint">Shared across all dashboards using this ID</span>
          </div>
        </div>
        ${this._availableConfigs.length>1?B`
          <div class="row">
            <div class="field">
              <label>Available configs</label>
              <div class="chip-row">
                ${this._availableConfigs.map(t=>B`
                  <button
                    class="chip ${t===e?"chip-active":""}"
                    @click=${()=>this._fireConfigChanged({config_id:t})}
                  >${t}</button>
                `)}
              </div>
            </div>
          </div>
        `:q}
      </div>

      <div class="section">
        <div class="section-title">Layout</div>
        <div class="row two-col">
          <div class="field">
            <label>Columns <span class="hint-inline">(0 = auto flex row)</span></label>
            <input
              type="number" min="0" max="12"
              .value=${String(t.columns??0)}
              @change=${e=>{const i=parseInt(e.target.value);this._patchStored({layout:{...t,columns:isNaN(i)?0:i}})}}
            />
          </div>
          <div class="field">
            <label>Gap (px)</label>
            <input
              type="number" min="0" max="32"
              .value=${String(t.gap??6)}
              @change=${e=>{const i=parseInt(e.target.value);this._patchStored({layout:{...t,gap:isNaN(i)?6:i}})}}
            />
          </div>
        </div>
      </div>
    `}_renderTilesTab(){const t=this._stored?.tiles??[];return B`
      <div class="section">
        ${t.map((e,i)=>this._renderTileRow(e,i,t.length))}
        <button class="btn-add" @click=${this._addTile}>+ Add tile</button>
      </div>
    `}_renderTileRow(t,e,i){const n=this._expandedTile===e;return B`
      <div class="tile-row">
        <div class="tile-header" @click=${()=>{this._expandedTile=n?null:e}}>
          <span class="tile-arrow">${n?"▾":"▸"}</span>
          <span class="tile-name">${t.name||"(unnamed)"}</span>
          <span class="tile-entity">${t.entity??""}</span>
          <span class="tile-actions-row">
            <button class="icon-btn" title="Move up"
              ?disabled=${0===e}
              @click=${t=>{t.stopPropagation(),this._moveTile(e,-1)}}>↑</button>
            <button class="icon-btn" title="Move down"
              ?disabled=${e===i-1}
              @click=${t=>{t.stopPropagation(),this._moveTile(e,1)}}>↓</button>
            <button class="icon-btn danger" title="Delete"
              @click=${t=>{t.stopPropagation(),this._deleteTile(e)}}>✕</button>
          </span>
        </div>
        ${n?this._renderTileEditor(t,e):q}
      </div>
    `}_renderTileEditor(t,e){const i=this._filterTab[e]??"on",n="on"===i?"object"==typeof t.filter_on?t.filter_on:t.filter_on?yt(t.filter_on):void 0:"object"==typeof t.filter_off?t.filter_off:t.filter_off?yt(t.filter_off):void 0;return B`
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
              @change=${t=>{const i=parseInt(t.target.value);this._patchTile(e,{min_height:isNaN(i)?83:i})}} />
          </div>
          <div class="field">
            <label>Filter transition (s)</label>
            <input type="number" min="0" max="5" step="0.1" .value=${String(t.transition??1.5)}
              @change=${t=>{const i=parseFloat(t.target.value);this._patchTile(e,{transition:isNaN(i)?1.5:i})}} />
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
              @change=${t=>{const i=t.target.value;this._patchTile(e,{filter_preset:i||void 0})}}
            >
              <option value="">— None / custom —</option>
              ${Object.entries(xt).map(([e,i])=>B`
                <option value="${e}" ?selected=${t.filter_preset===e}>${i.label}</option>
              `)}
            </select>
          </div>
        </div>
        ${t.filter_preset?B`
          <div class="preset-preview">
            <span class="hint">${xt[t.filter_preset]?.description??""}</span>
            <span class="hint">ON: <code>${_t(xt[t.filter_preset]?.on)}</code></span>
            <span class="hint">OFF: <code>${_t(xt[t.filter_preset]?.off)}</code></span>
          </div>
        `:B`
          <div class="filter-tabs">
            <button class="filter-tab ${"on"===i?"active":""}"
              @click=${()=>{this._filterTab={...this._filterTab,[e]:"on"}}}>ON state</button>
            <button class="filter-tab ${"off"===i?"active":""}"
              @click=${()=>{this._filterTab={...this._filterTab,[e]:"off"}}}>OFF state</button>
          </div>
          ${this._renderFilterSliders(e,i,n)}
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
        ${(t.sensors??[]).map((t,i)=>this._renderSensorRow(t,e,i))}
      </div>
    `}_renderFilterSliders(t,e,i){const n="on"===e?"filter_on":"filter_off",o=i??{};return B`
      <div class="filter-sliders">
        ${Object.entries($t).map(([e,i])=>{const r=o[e]??{brightness:1,sepia:0,saturate:1,hue_rotate:0,contrast:1,blur:0}[e]??0;return B`
              <div class="slider-row">
                <span class="slider-label">${i.label}</span>
                <input
                  type="range"
                  min="${i.min}" max="${i.max}" step="${i.step}"
                  .value=${String(r)}
                  @input=${i=>{const o=parseFloat(i.target.value),r="object"==typeof this._stored.tiles[t][n]?this._stored.tiles[t][n]:{brightness:1,sepia:0,saturate:1,hue_rotate:0,contrast:1,blur:0};this._patchTile(t,{[n]:{...r,[e]:o}})}}
                />
                <span class="slider-value">${r.toFixed("hue_rotate"===e?0:2)}</span>
              </div>
            `})}
      </div>
    `}_renderActionEditor(t,e,i,n){const o=t[i]??Ui("none");return B`
      <div class="action-row">
        <span class="action-label">${n}</span>
        <select
          .value=${o.action}
          @change=${t=>{const n=t.target.value;this._patchTile(e,{[i]:Ui(n)})}}
        >
          ${["none","navigate","more-info","call-service","popup"].map(t=>B`
            <option value="${t}" ?selected=${o.action===t}>${t}</option>
          `)}
        </select>
        ${"navigate"===o.action?B`
          <input
            type="text" class="action-extra"
            placeholder="/dashboard/room"
            .value=${o.navigation_path??""}
            @input=${t=>this._patchAction(e,i,{navigation_path:t.target.value})}
          />
        `:q}
        ${"more-info"===o.action?B`
          <input
            type="text" class="action-extra"
            placeholder="entity (leave blank to use tile entity)"
            .value=${o.entity??""}
            @input=${t=>this._patchAction(e,i,{entity:t.target.value})}
          />
        `:q}
        ${"call-service"===o.action?B`
          <input
            type="text" class="action-extra"
            placeholder="domain.service"
            .value=${o.service??""}
            @input=${t=>this._patchAction(e,i,{service:t.target.value})}
          />
        `:q}
        ${"popup"===o.action?B`
          <input
            type="text" class="action-extra"
            placeholder="Popup title"
            .value=${o.popup?.title??""}
            @input=${t=>this._patchAction(e,i,{popup:{...o.popup,title:t.target.value}})}
          />
        `:q}
      </div>
    `}_renderSensorRow(t,e,i){return B`
      <div class="sensor-row">
        <input
          type="text" class="sensor-entity"
          placeholder="sensor.temperature"
          .value=${t.entity}
          @input=${t=>this._patchSensor(e,i,{entity:t.target.value})}
        />
        <select
          .value=${t.position}
          @change=${t=>this._patchSensor(e,i,{position:t.target.value})}
        >
          ${["top-left","top-right","bottom-left","bottom-right"].map(e=>B`
            <option value="${e}" ?selected=${t.position===e}>${e}</option>
          `)}
        </select>
        <input
          type="text" class="sensor-unit"
          placeholder="unit"
          .value=${t.unit??""}
          @input=${t=>this._patchSensor(e,i,{unit:t.target.value||void 0})}
        />
        <button class="icon-btn danger"
          @click=${()=>this._deleteSensor(e,i)}>✕</button>
      </div>
    `}_renderSlotsTab(){const t=this._stored?.slots?.bottom??[];return B`
      <div class="section">
        <div class="section-title">Bottom slots</div>
        <span class="hint" style="display:block;margin-bottom:8px;">
          Vlož celý YAML karty (včetně řádku <code>type:</code>).
          Změny se uloží při kliknutí mimo pole.
        </span>

        ${t.map((t,e)=>B`
          <div class="slot-row">
            <div class="slot-header">
              <input
                type="text"
                class="slot-name-input"
                placeholder="Název slotu (jen pro editor)"
                .value=${t._name??""}
                @input=${t=>this._patchSlotName(e,t.target.value)}
              />
              <button class="icon-btn danger" title="Odstranit slot"
                @click=${()=>this._deleteSlot(e)}>✕</button>
            </div>
            <textarea
              class="slot-yaml"
              rows="12"
              spellcheck="false"
              autocorrect="off"
              autocapitalize="off"
              ${Dt(this._getSlotRef(e))}
              @focus=${()=>this._slotEditing.add(e)}
              @blur=${t=>{this._slotEditing.delete(e),this._patchSlotFull(e,t.target.value)}}
            ></textarea>
          </div>
        `)}

        <button class="btn-add" @click=${this._addSlot}>+ Add slot card</button>
      </div>
    `}_slotToFullYaml(t){const{_name:e,...i}=t;return Pi(i,{lineWidth:-1}).trimEnd()}_patchSlotFull(t,e){const i=e.trim();if(!i)return;const n=[...this._stored?.slots?.bottom??[]];try{const e=Li(i);if(!e||"object"!=typeof e||!e.type)return;const o=n[t]?._name,r={...e};o&&(r._name=o),n[t]=r,this._patchStored({slots:{bottom:n}})}catch{}}_patchSlotName(t,e){const i=[...this._stored?.slots?.bottom??[]];i[t]&&(i[t]={...i[t],_name:e||void 0},this._patchStored({slots:{bottom:i}}))}_addSlot(){const t=[...this._stored?.slots?.bottom??[],{type:"custom:button-card"}];this._patchStored({slots:{bottom:t}})}_deleteSlot(t){const e=(this._stored?.slots?.bottom??[]).filter((e,i)=>i!==t);this._patchStored({slots:{bottom:e}})}static get styles(){return s`
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
        display: grid;
        grid-template-columns: 1fr auto 60px auto;
        gap: 4px;
        align-items: center;
        margin-bottom: 4px;
      }

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
        gap: 6px;
        margin-bottom: 6px;
      }
      .slot-name-input {
        flex: 1;
        padding: 5px 8px;
        background: rgba(var(--rgb-primary-text-color,255,255,255),0.05);
      border: 1px solid rgba(var(--rgb-primary-text-color,255,255,255),0.12);
        border-radius: 6px;
        color: var(--primary-text-color);
        font-size: 13px;
        box-sizing: border-box;
        outline: none;
      }
      .slot-name-input:focus {
        border-color: var(--primary-color, #3b82f6);
      }
      .slot-yaml {
        width: 100%;
        padding: 6px 8px;
        box-sizing: border-box;
        background: rgba(var(--rgb-primary-text-color,255,255,255),0.04);
        border: 1px solid rgba(var(--rgb-primary-text-color,255,255,255),0.12);
        border-radius: 6px;
        color: var(--primary-text-color);
        font-size: 11px;
        font-family: monospace;
        line-height: 1.5;
        resize: vertical;
        outline: none;
        display: block;
      }
      .slot-yaml:focus {
        border-color: var(--primary-color, #3b82f6);
        background: rgba(var(--rgb-primary-text-color,255,255,255),0.06);
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
    `}};t([ut({attribute:!1})],zi.prototype,"hass",void 0),t([ut({attribute:!1})],zi.prototype,"config",void 0),t([ht()],zi.prototype,"_stored",void 0),t([ht()],zi.prototype,"_availableConfigs",void 0),t([ht()],zi.prototype,"_tab",void 0),t([ht()],zi.prototype,"_expandedTile",void 0),t([ht()],zi.prototype,"_filterTab",void 0),t([ht()],zi.prototype,"_loading",void 0),t([ht()],zi.prototype,"_saving",void 0),t([ht()],zi.prototype,"_error",void 0),zi=t([ct("navbar-card-editor")],zi),console.info(`%c NAVBAR-CARD %c v${ft} `,"color:#fff;background:#3b82f6;font-weight:700;padding:2px 6px;border-radius:4px 0 0 4px;","color:#3b82f6;background:#1e293b;font-weight:700;padding:2px 6px;border-radius:0 4px 4px 0;");let Ri=class extends at{constructor(){super(...arguments),this._stored=null,this._loading=!0,this._error=null,this._standalone=!1,this._holdTimers=new Map,this._lastTap=new Map,this._holdFired=new Set,this._slotElements=new Map}setConfig(t){if(!t)throw new Error("navbar-card: missing configuration");this.config=t,this._stored=null,this._loading=!0,this._error=null}updated(t){if(super.updated(t),t.has("hass")&&this.hass){this._loading&&this._loadConfig();for(const t of this._slotElements.values())t.hass=this.hass}}async _loadConfig(){if(!this.config.config_id&&this.config.tiles?.length)return this._stored={tiles:this.config.tiles,slots:this.config.slots},this._standalone=!0,void(this._loading=!1);const t=this.config.config_id??bt;try{const e=await this.hass.callWS({type:mt,config_id:t});this._stored=e,this._loading=!1}catch(t){const e=t,i=t instanceof Error?t.message:String(e?.message?e.message:e?.code?e.code:t);this.config.tiles?.length?(this._stored={tiles:this.config.tiles,slots:this.config.slots},this._standalone=!0,this._loading=!1,console.warn(`[navbar-card] Backend unavailable (${i}). Running in standalone mode.`)):i.includes("not_found")?(this._stored={tiles:[]},this._loading=!1):(this._error=`Backend unavailable (${i}). Go to Settings → Integrations → Add → "Navbar Card" to enable the backend, or use standalone mode with inline tiles: in the card config.`,this._loading=!1)}}_handlePointerDown(t,e,i){if(0===i.button&&(this._holdFired.delete(t),e.hold_action&&"none"!==e.hold_action.action)){const i=setTimeout(()=>{this._holdFired.add(t),this._executeAction(e.hold_action,e)},700);this._holdTimers.set(t,i)}}_handlePointerUp(t){const e=this._holdTimers.get(t);void 0!==e&&(clearTimeout(e),this._holdTimers.delete(t))}_handleClick(t,e){if(this._holdFired.has(t))return void this._holdFired.delete(t);const i=Date.now(),n=this._lastTap.get(t)??0;i-n<300&&e.double_tap_action?(this._lastTap.delete(t),this._executeAction(e.double_tap_action,e)):(this._lastTap.set(t,i),e.double_tap_action?setTimeout(()=>{this._lastTap.get(t)===i&&(this._lastTap.delete(t),this._executeAction(e.tap_action,e))},350):(this._lastTap.delete(t),this._executeAction(e.tap_action,e)))}_executeAction(t,e){if(t&&"none"!==t.action)switch(t.action){case"navigate":t.navigation_path&&(window.history.pushState(null,"",t.navigation_path),window.dispatchEvent(new Event("location-changed")));break;case"more-info":{const i=t.entity??e.entity;i&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:i},bubbles:!0,composed:!0}));break}case"call-service":if(t.service){const[e,i]=t.service.split(".");this.hass.callService(e,i,t.service_data)}break;case"popup":t.popup&&Et(this.hass,0,t.popup.title,t.popup.size,t.popup.content)}}_resolveFilter(t,e){const i=e?t.filter_on:t.filter_off;if(void 0!==i)return _t(i);if(t.filter_preset){const i=xt[t.filter_preset];if(i)return _t(e?i.on:i.off)}return"none"}_sensorColor(t,e){const i=parseFloat(e);if(isNaN(i))return"rgba(255,255,255,0.55)";const n=(this.hass?.states[t.entity]?.attributes??{}).device_class,o=t.thresholds?.length?t.thresholds:function(t){if(t)return wt[t.toLowerCase()]}(n);if(!o?.length)return"rgba(255,255,255,0.85)";const r=[...o].sort((t,e)=>e.above-t.above);for(const t of r)if(i>=t.above)return t.color;return"rgba(255,255,255,0.55)"}_renderSensor(t,e){if("on"===t.show_when&&"on"!==e)return q;if("off"===t.show_when&&"off"!==e)return q;const i=this.hass?.states[t.entity],n=i?.state??"--",o=i?.attributes?.device_class;let r=n;if("--"!==n&&"unavailable"!==n&&"unknown"!==n){const e=parseFloat(n);if(!isNaN(e)){const i=t.precision??1;r=e.toFixed(i)}}const s=void 0!==t.unit?t.unit:function(t){return t?At[t.toLowerCase()]??"":""}(o),a=this._sensorColor(t,n),l=vt[t.position]??vt["top-left"],c=t.font_size??11,p="unavailable"===n||"unknown"===n;return B`
      <div style="
        position:absolute;
        top:${l.top};right:${l.right};
        bottom:${l.bottom};left:${l.left};
        z-index:2;
        color:${p?"rgba(255,255,255,0.25)":a};
        font-size:${c}px;font-weight:700;line-height:1;
        text-shadow:0 1px 3px rgba(0,0,0,0.9);pointer-events:none;
      ">${r}${p?"":s}</div>
    `}_renderTile(t,e){const i=t.entity?this.hass?.states[t.entity]?.state??"off":"off",n="on"===i,o=t.min_height??83,r=t.transition??1.5,s=n?t.border_color_on??"rgba(255,165,0,0.45)":t.border_color_off??"rgba(255,255,255,0.1)",a=this._resolveFilter(t,n),l=n?"1":"0";return B`
      <div
        style="
          flex:1;position:relative;overflow:hidden;
          border-radius:${"12px"};
          min-height:${o}px;
          border:1px solid ${s};
          transition:border-color ${r}s ease;
          cursor:pointer;-webkit-tap-highlight-color:transparent;user-select:none;
        "
        @pointerdown=${i=>this._handlePointerDown(e,t,i)}
        @pointerup=${()=>this._handlePointerUp(e)}
        @pointercancel=${()=>this._handlePointerUp(e)}
        @click=${()=>this._handleClick(e,t)}
      >
        ${t.background_image?B`
          <div style="
            position:absolute;inset:0;z-index:0;
            background-image:url('${t.background_image}');
            background-size:cover;background-position:center;
            filter:${a};
            transition:filter ${r}s ease;
            pointer-events:none;
          "></div>
        `:B`
          <div style="
            position:absolute;inset:0;z-index:0;
            background:rgba(var(--rgb-primary-text-color,255,255,255),0.05);
          "></div>
        `}
        ${t.overlay_image?B`
          <div style="
            position:absolute;inset:0;z-index:1;
            background-image:url('${t.overlay_image}');
            background-size:cover;background-position:center;
            opacity:${l};
            transition:opacity ${r}s ease;
            pointer-events:none;
          "></div>
        `:q}
        ${(t.sensors??[]).map(t=>this._renderSensor(t,i))}
      </div>
    `}_renderSlots(){const t=this._stored?.slots?.bottom;return t?.length?B`
      <div class="slots-bottom">
        ${t.map((t,e)=>{const i=`bottom-${e}-${t.type}`;let n=this._slotElements.get(i);if(!n){const e=t.type.startsWith("custom:")?t.type.slice(7):t.type;if(n=document.createElement(e),"function"==typeof n.setConfig)try{const{_name:e,...i}=t;n.setConfig(i)}catch(t){console.warn("[navbar-card] slot setConfig failed:",t)}n.hass=this.hass,this._slotElements.set(i,n)}return B`<div class="slot-item" .slotEl=${n}>${n}</div>`})}
      </div>
    `:q}render(){if(this._loading)return B`<div class="state-box loading">Loading...</div>`;if(this._error)return B`<div class="state-box error">Warning: ${this._error}</div>`;if(!this._stored?.tiles?.length)return B`
        <div class="state-box empty">
          Navbar Card v${ft} - No tiles configured yet.
        </div>
      `;const t=this._stored.layout??{},e=t.columns??0,i=t.gap??6;return B`
      <div class="navbar">
        <div style="${e>0?`display:grid;grid-template-columns:repeat(${e},1fr);gap:${i}px;`:`display:flex;gap:${i}px;align-items:stretch;`}">
          ${this._stored.tiles.map((t,e)=>this._renderTile(t,e))}
        </div>
        ${this._standalone?B`<div class="mode-badge">standalone</div>`:q}
        ${this._renderSlots()}
      </div>
    `}static get styles(){return s`
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
    `}static getConfigElement(){return document.createElement("navbar-card-editor")}static getStubConfig(){return{config_id:bt}}};t([ut({attribute:!1})],Ri.prototype,"hass",void 0),t([ut({attribute:!1})],Ri.prototype,"config",void 0),t([ht()],Ri.prototype,"_stored",void 0),t([ht()],Ri.prototype,"_loading",void 0),t([ht()],Ri.prototype,"_error",void 0),t([ht()],Ri.prototype,"_standalone",void 0),Ri=t([ct(gt)],Ri),window.customCards=window.customCards??[],window.customCards.push({type:gt,name:"Navbar Card",description:"Configurable room navigation card with sensor overlays and popup support.",preview:!0,documentationURL:"https://github.com/Michailjovic/Navbar"});export{Ri as NavbarCard};
