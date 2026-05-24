function t(t,e,i,o){var s,r=arguments.length,n=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),s=new WeakMap;let r=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(e,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new r(i,t,o)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,o))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:p,getOwnPropertySymbols:h,getPrototypeOf:u}=Object,g=globalThis,f=g.trustedTypes,b=f?f.emptyScript:"",v=g.reactiveElementPolyfillSupport,_=(t,e)=>t,m={toAttribute(t,e){switch(e){case Boolean:t=t?b:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},x=(t,e)=>!l(t,e),y={attribute:!0,type:String,converter:m,reflect:!1,useDefault:!1,hasChanged:x};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,e);void 0!==o&&c(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){const{get:o,set:s}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:o,set(e){const r=o?.call(this);s?.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const t=this.properties,e=[...p(t),...h(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,o)=>{if(i)t.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of o){const o=document.createElement("style"),s=e.litNonce;void 0!==s&&o.setAttribute("nonce",s),o.textContent=i.cssText,t.appendChild(o)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(void 0!==o&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:m).toAttribute(e,i.type);this._$Em=t,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,e){const i=this.constructor,o=i._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=i.getPropertyOptions(o),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:m;this._$Em=o;const r=s.fromAttribute(e,t.type);this[o]=r??this._$Ej?.get(o)??r,this._$Em=null}}requestUpdate(t,e,i,o=!1,s){if(void 0!==t){const r=this.constructor;if(!1===o&&(s=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??x)(s,e)||i.useDefault&&i.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:o,wrapped:s},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==s||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===o&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,o=this[e];!0!==t||this._$AL.has(e)||void 0===o||this.C(e,void 0,i,o)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[_("elementProperties")]=new Map,$[_("finalized")]=new Map,v?.({ReactiveElement:$}),(g.reactiveElementVersions??=[]).push("2.1.2");const w=globalThis,A=t=>t,S=w.trustedTypes,E=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,k="?"+T,P=`<${k}>`,N=document,O=()=>N.createComment(""),z=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,R="[ \t\n\f\r]",M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,F=/>/g,D=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,j=/"/g,B=/^(?:script|style|textarea|title)$/i,I=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),W=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),V=new WeakMap,J=N.createTreeWalker(N,129);function K(t,e){if(!U(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const G=(t,e)=>{const i=t.length-1,o=[];let s,r=2===e?"<svg>":3===e?"<math>":"",n=M;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(n.lastIndex=d,l=n.exec(i),null!==l);)d=n.lastIndex,n===M?"!--"===l[1]?n=H:void 0!==l[1]?n=F:void 0!==l[2]?(B.test(l[2])&&(s=RegExp("</"+l[2],"g")),n=D):void 0!==l[3]&&(n=D):n===D?">"===l[0]?(n=s??M,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?D:'"'===l[3]?j:L):n===j||n===L?n=D:n===H||n===F?n=M:(n=D,s=void 0);const p=n===D&&t[e+1].startsWith("/>")?" ":"";r+=n===M?i+P:c>=0?(o.push(a),i.slice(0,c)+C+i.slice(c)+T+p):i+T+(-2===c?e:p)}return[K(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),o]};class Z{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let s=0,r=0;const n=t.length-1,a=this.parts,[l,c]=G(t,e);if(this.el=Z.createElement(l,i),J.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=J.nextNode())&&a.length<n;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(C)){const e=c[r++],i=o.getAttribute(t).split(T),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:s,name:n[2],strings:i,ctor:"."===n[1]?et:"?"===n[1]?it:"@"===n[1]?ot:tt}),o.removeAttribute(t)}else t.startsWith(T)&&(a.push({type:6,index:s}),o.removeAttribute(t));if(B.test(o.tagName)){const t=o.textContent.split(T),e=t.length-1;if(e>0){o.textContent=S?S.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],O()),J.nextNode(),a.push({type:2,index:++s});o.append(t[e],O())}}}else if(8===o.nodeType)if(o.data===k)a.push({type:2,index:s});else{let t=-1;for(;-1!==(t=o.data.indexOf(T,t+1));)a.push({type:7,index:s}),t+=T.length-1}s++}}static createElement(t,e){const i=N.createElement("template");return i.innerHTML=t,i}}function Q(t,e,i=t,o){if(e===W)return e;let s=void 0!==o?i._$Co?.[o]:i._$Cl;const r=z(e)?void 0:e._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),void 0===r?s=void 0:(s=new r(t),s._$AT(t,i,o)),void 0!==o?(i._$Co??=[])[o]=s:i._$Cl=s),void 0!==s&&(e=Q(t,s._$AS(t,e.values),s,o)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??N).importNode(e,!0);J.currentNode=o;let s=J.nextNode(),r=0,n=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new Y(s,s.nextSibling,this,t):1===a.type?e=new a.ctor(s,a.name,a.strings,this,t):6===a.type&&(e=new st(s,this,t)),this._$AV.push(e),a=i[++n]}r!==a?.index&&(s=J.nextNode(),r++)}return J.currentNode=N,o}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),z(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>U(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&z(this._$AH)?this._$AA.nextSibling.data=t:this.T(N.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Z.createElement(K(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new X(o,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new Z(t)),e}k(t){U(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const s of t)o===e.length?e.push(i=new Y(this.O(O()),this.O(O()),this,this.options)):i=e[o],i._$AI(s),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=A(t).nextSibling;A(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,s){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}_$AI(t,e=this,i,o){const s=this.strings;let r=!1;if(void 0===s)t=Q(this,t,e,0),r=!z(t)||t!==this._$AH&&t!==W,r&&(this._$AH=t);else{const o=t;let n,a;for(t=s[0],n=0;n<s.length-1;n++)a=Q(this,o[i+n],e,n),a===W&&(a=this._$AH[n]),r||=!z(a)||a!==this._$AH[n],a===q?t=q:t!==q&&(t+=(a??"")+s[n+1]),this._$AH[n]=a}r&&!o&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class ot extends tt{constructor(t,e,i,o,s){super(t,e,i,o,s),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??q)===W)return;const i=this._$AH,o=t===q&&i!==q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==q&&(i===q||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const rt=w.litHtmlPolyfillSupport;rt?.(Z,Y),(w.litHtmlVersions??=[]).push("3.3.3");const nt=globalThis;class at extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const o=i?.renderBefore??e;let s=o._$litPart$;if(void 0===s){const t=i?.renderBefore??null;o._$litPart$=s=new Y(e.insertBefore(O(),t),t,void 0,i??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}at._$litElement$=!0,at.finalized=!0,nt.litElementHydrateSupport?.({LitElement:at});const lt=nt.litElementPolyfillSupport;lt?.({LitElement:at}),(nt.litElementVersions??=[]).push("4.2.2");const ct=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},dt={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:x},pt=(t=dt,e,i)=>{const{kind:o,metadata:s}=i;let r=globalThis.litPropertyMetadata.get(s);if(void 0===r&&globalThis.litPropertyMetadata.set(s,r=new Map),"setter"===o&&((t=Object.create(t)).wrapped=!0),r.set(i.name,t),"accessor"===o){const{name:o}=i;return{set(i){const s=e.get.call(this);e.set.call(this,i),this.requestUpdate(o,s,t,!0,i)},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===o){const{name:o}=i;return function(i){const s=this[o];e.call(this,i),this.requestUpdate(o,s,t,!0,i)}}throw Error("Unsupported decorator location: "+o)};function ht(t){return(e,i)=>"object"==typeof i?pt(t,e,i):((t,e,i)=>{const o=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),o?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function ut(t){return ht({...t,state:!0,attribute:!1})}const gt="0.0.9",ft="navbar-card",bt="default",vt="navbar/get_config",_t={"top-left":{top:"5px",left:"6px",bottom:"auto",right:"auto"},"top-right":{top:"5px",right:"6px",bottom:"auto",left:"auto"},"bottom-left":{bottom:"5px",left:"6px",top:"auto",right:"auto"},"bottom-right":{bottom:"5px",right:"6px",top:"auto",left:"auto"}};function mt(t){if(!t)return"none";if("string"==typeof t)return t.trim()||"none";const e=[];return void 0!==t.brightness&&1!==t.brightness&&e.push(`brightness(${+t.brightness.toFixed(3)})`),void 0!==t.sepia&&0!==t.sepia&&e.push(`sepia(${+t.sepia.toFixed(3)})`),void 0!==t.saturate&&1!==t.saturate&&e.push(`saturate(${+t.saturate.toFixed(3)})`),void 0!==t.hue_rotate&&0!==t.hue_rotate&&e.push(`hue-rotate(${Math.round(t.hue_rotate)}deg)`),void 0!==t.contrast&&1!==t.contrast&&e.push(`contrast(${+t.contrast.toFixed(3)})`),void 0!==t.blur&&t.blur>0&&e.push(`blur(${+t.blur.toFixed(1)}px)`),e.join(" ")||"none"}function xt(t){const e=(e,i="")=>{const o=new RegExp(`${e}\\(([\\d.]+)${i}\\)`),s=t.match(o);return s?parseFloat(s[1]):void 0};return{brightness:e("brightness")??1,sepia:e("sepia")??0,saturate:e("saturate")??1,hue_rotate:e("hue-rotate","deg")??0,contrast:e("contrast")??1,blur:e("blur","px")??0}}const yt={"warm-bedroom":{label:"Warm Bedroom",description:"Warm orange incandescent light, darker when off.",on:{brightness:2.6,sepia:.35,saturate:.9,hue_rotate:0,contrast:1,blur:0},off:{brightness:.6,sepia:0,saturate:1,hue_rotate:0,contrast:1,blur:0}},"warm-living":{label:"Warm Living Room",description:"Warm ambient light with slight orange overlay.",on:{brightness:2,sepia:.3,saturate:1,hue_rotate:0,contrast:1,blur:0},off:{brightness:.5,sepia:0,saturate:.85,hue_rotate:0,contrast:1,blur:0}},"teal-kitchen":{label:"Teal Kitchen",description:"Cool teal LED tone, typical for under-cabinet lighting.",on:{brightness:1.6,sepia:.47,saturate:3,hue_rotate:175,contrast:1,blur:0},off:{brightness:.5,sepia:.3,saturate:1.8,hue_rotate:-10,contrast:1,blur:0}},"teal-hall":{label:"Teal Hall",description:"Cool teal panel light.",on:{brightness:1.7,sepia:.57,saturate:2.5,hue_rotate:175,contrast:1,blur:0},off:{brightness:.6,sepia:0,saturate:.9,hue_rotate:0,contrast:1,blur:0}},"white-bathroom":{label:"White Bathroom",description:"Bright white/blue bathroom light.",on:{brightness:2,sepia:.35,saturate:1.5,hue_rotate:185,contrast:1,blur:0},off:{brightness:.75,sepia:.1,saturate:.9,hue_rotate:0,contrast:1,blur:0}},"natural-day":{label:"Natural Day",description:"Neutral daylight through blinds.",on:{brightness:1.7,sepia:.12,saturate:1.05,hue_rotate:0,contrast:1,blur:0},off:{brightness:.6,sepia:0,saturate:1,hue_rotate:0,contrast:1,blur:0}},dim:{label:"Dim",description:"Subtle dimming effect, light slightly brightens when on.",on:{brightness:1.4,sepia:0,saturate:1,hue_rotate:0,contrast:1,blur:0},off:{brightness:.5,sepia:0,saturate:.8,hue_rotate:0,contrast:1,blur:0}},night:{label:"Night",description:"Strong darkening at night, soft glow when on.",on:{brightness:1.2,sepia:.2,saturate:.8,hue_rotate:0,contrast:1,blur:0},off:{brightness:.3,sepia:.1,saturate:.6,hue_rotate:0,contrast:1,blur:0}}},$t={brightness:{min:0,max:3,step:.05,label:"Brightness"},sepia:{min:0,max:1,step:.05,label:"Sepia"},saturate:{min:0,max:3,step:.05,label:"Saturate"},hue_rotate:{min:0,max:360,step:1,label:"Hue rotate"},contrast:{min:0,max:2,step:.05,label:"Contrast"},blur:{min:0,max:20,step:.5,label:"Blur"}};const wt={temperature:[{above:27,color:"#ff4d4f"},{above:23,color:"#faad14"},{above:17,color:"#52c41a"},{above:0,color:"#40a9ff"},{above:-99,color:"#1890ff"}],humidity:[{above:70,color:"#ff4d4f"},{above:60,color:"#faad14"},{above:40,color:"#52c41a"},{above:30,color:"#faad14"},{above:0,color:"#40a9ff"}],carbon_dioxide:[{above:2e3,color:"#ff4d4f"},{above:1e3,color:"#faad14"},{above:700,color:"#52c41a"},{above:0,color:"#52c41a"}],pm25:[{above:55,color:"#ff4d4f"},{above:35,color:"#faad14"},{above:12,color:"#52c41a"},{above:0,color:"#52c41a"}],pm10:[{above:255,color:"#ff4d4f"},{above:155,color:"#faad14"},{above:55,color:"#52c41a"},{above:0,color:"#52c41a"}],volatile_organic_compounds:[{above:300,color:"#ff4d4f"},{above:150,color:"#faad14"},{above:0,color:"#52c41a"}],battery:[{above:60,color:"#52c41a"},{above:30,color:"#faad14"},{above:0,color:"#ff4d4f"}],illuminance:[{above:1e3,color:"#faad14"},{above:200,color:"#52c41a"},{above:0,color:"#40a9ff"}],power:[{above:2e3,color:"#ff4d4f"},{above:500,color:"#faad14"},{above:0,color:"#52c41a"}]},At={temperature:"°",humidity:"%",carbon_dioxide:" ppm",pm25:" μg",pm10:" μg",volatile_organic_compounds:"",battery:"%",illuminance:" lx",power:" W"};function St(t){return{large:"wide"===t||"fullscreen"===t,wide:"wide"===t,fullscreen:"fullscreen"===t}}function Et(t){switch(t){case"small":return"380px";case"wide":return"860px";case"fullscreen":return"100vw";default:return"560px"}}function Ct(t,e){const i=e.type??"";let o;const s=i.startsWith("custom:")?i.slice(7):i;if(!s||!customElements.get(s)){o=document.createElement("ha-card");const t=document.createElement("div");return t.style.cssText="padding:12px;font-size:11px;white-space:pre-wrap;word-break:break-all;color:var(--secondary-text-color);",t.textContent=JSON.stringify(e,null,2),o.appendChild(t),o}o=document.createElement(s);try{"function"==typeof o.setConfig&&o.setConfig(e),o.hass=t}catch(t){console.warn("[navbar-card] popup: setConfig failed for",s,t)}return o}function Tt(t,e,i,o){const s=window.browser_mod;if(!s)return!1;const r=1===o.length?o[0]:{type:"vertical-stack",cards:o};try{return s.service("popup",{title:e??"",content:r,...St(i)}),!0}catch(t){return console.warn("[navbar-card] browser_mod popup failed:",t),!1}}function kt(t,e,i,o,s){const r=o??"normal",n=s??[];"undefined"!=typeof window&&window.browser_mod&&Tt(0,i,r,n)||function(t,e,i,o){if(!customElements.get("ha-dialog"))return!1;const s=document.createElement("ha-dialog");if(e){const t=document.createElement("span");t.setAttribute("slot","heading"),t.textContent=e,s.appendChild(t)}const r=document.createElement("div");r.style.cssText=`min-width:${Et(i)};max-width:${Et(i)};padding:0 0 16px;`;for(const e of o){const i=Ct(t,e);i.style.cssText="display:block;margin-bottom:8px;",r.appendChild(i)}const n=document.createElement("mwc-button");return n.setAttribute("slot","primaryAction"),n.setAttribute("dialogAction","close"),n.textContent="Close",s.appendChild(n),s.appendChild(r),document.body.appendChild(s),s.open=!0,s.addEventListener("closed",()=>s.remove(),{once:!0}),!0}(t,i,r,n)||function(t,e,i,o){const s=Et(i),r="fullscreen"===i,n=document.createElement("div");n.style.cssText="position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,0.6);backdrop-filter:blur(3px);display:flex;align-items:center;justify-content:center;";const a=document.createElement("div");if(a.style.cssText=`background:var(--card-background-color,#1c1c1c);border-radius:${r?"0":"16px"};max-width:${s};width:calc(100% - ${r?"0":"32px"});max-height:${r?"100vh":"90vh"};overflow:auto;box-shadow:0 24px 48px rgba(0,0,0,0.5);`,e){const t=document.createElement("div");t.style.cssText="display:flex;align-items:center;justify-content:space-between;padding:20px 20px 12px;font-size:18px;font-weight:600;color:var(--primary-text-color);border-bottom:1px solid rgba(var(--rgb-primary-text-color,255,255,255),0.1);";const i=document.createElement("span");i.textContent=e;const o=document.createElement("button");o.textContent="✕",o.style.cssText="background:none;border:none;cursor:pointer;font-size:16px;padding:4px 8px;color:var(--secondary-text-color);border-radius:6px;line-height:1;",o.addEventListener("click",()=>n.remove()),t.appendChild(i),t.appendChild(o),a.appendChild(t)}const l=document.createElement("div");l.style.cssText="padding:16px;display:flex;flex-direction:column;gap:8px;";for(const e of o){const i=Ct(t,e);l.appendChild(i)}a.appendChild(l),n.appendChild(a),n.addEventListener("click",t=>{t.target===n&&n.remove()});const c=t=>{"Escape"===t.key&&(n.remove(),window.removeEventListener("keydown",c))};window.addEventListener("keydown",c),document.body.appendChild(n)}(t,i,r,n)}function Pt(t="none"){return{action:t}}let Nt=class extends at{constructor(){super(...arguments),this._stored=null,this._availableConfigs=[],this._tab="config",this._expandedTile=null,this._filterTab={},this._loading=!0,this._saving=!1,this._error=null}setConfig(t){this.config=t}updated(t){super.updated(t),t.has("hass")&&this.hass&&this._loading&&this._initialLoad(),t.has("config")&&this.hass&&!this._loading&&this._loadStoredConfig()}async _initialLoad(){await Promise.all([this._loadAvailableConfigs(),this._loadStoredConfig()]),this._loading=!1}async _loadAvailableConfigs(){try{const t=await this.hass.callWS({type:"navbar/list_configs"});this._availableConfigs=t.configs??[]}catch{this._availableConfigs=[]}}async _loadStoredConfig(){const t=this.config?.config_id??bt;try{const e=await this.hass.callWS({type:vt,config_id:t});this._stored=e,this._error=null}catch(t){const e=t instanceof Error?t.message:String(t);e.includes("not_found")?this._stored={tiles:[],layout:{columns:0,gap:6}}:this._error=e}}_schedSave(){this._saveTimer&&clearTimeout(this._saveTimer),this._saveTimer=setTimeout(()=>{this._saveNow()},500)}async _saveNow(){if(this._stored){this._saving=!0;try{await this.hass.callWS({type:"navbar/save_config",config_id:this.config?.config_id??bt,config:this._stored})}catch(t){console.error("[navbar-editor] save failed:",t)}finally{this._saving=!1}}}_fireConfigChanged(t){const e={...this.config,...t};this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0}))}_patchStored(t){this._stored={...this._stored,...t},this._schedSave()}_patchTile(t,e){const i=[...this._stored?.tiles??[]];i[t]={...i[t],...e},this._patchStored({tiles:i})}_patchAction(t,e,i){const o=this._stored.tiles[t][e]??Pt();this._patchTile(t,{[e]:{...o,...i}})}_patchSensor(t,e,i){const o=[...this._stored.tiles[t].sensors??[]];o[e]={...o[e],...i},this._patchTile(t,{sensors:o})}_addTile(){const t=[...this._stored?.tiles??[],{name:"New Tile",entity:"",background_image:"",tap_action:{action:"navigate",navigation_path:""}}];this._patchStored({tiles:t}),this._expandedTile=t.length-1}_deleteTile(t){const e=(this._stored?.tiles??[]).filter((e,i)=>i!==t);this._patchStored({tiles:e}),this._expandedTile===t&&(this._expandedTile=null)}_moveTile(t,e){const i=[...this._stored?.tiles??[]],o=t+e;o<0||o>=i.length||([i[t],i[o]]=[i[o],i[t]],this._patchStored({tiles:i}),this._expandedTile=o)}_addSensor(t){const e=[...this._stored.tiles[t].sensors??[],{entity:"",position:"top-right"}];this._patchTile(t,{sensors:e})}_deleteSensor(t,e){const i=(this._stored.tiles[t].sensors??[]).filter((t,i)=>i!==e);this._patchTile(t,{sensors:i})}render(){return this._loading?I`<div class="loading">Loading...</div>`:this._error?I`<div class="error">${this._error}</div>`:I`
      <div class="editor">
        ${this._renderTabs()}
        ${"config"===this._tab?this._renderConfigTab():this._renderTilesTab()}
        ${this._saving?I`<div class="saving-badge">Saving...</div>`:q}
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
      </div>
    `}_renderConfigTab(){const t=this._stored?.layout??{},e=this.config?.config_id??bt;return I`
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
    `}_renderTilesTab(){const t=this._stored?.tiles??[];return I`
      <div class="section">
        ${t.map((e,i)=>this._renderTileRow(e,i,t.length))}
        <button class="btn-add" @click=${this._addTile}>+ Add tile</button>
      </div>
    `}_renderTileRow(t,e,i){const o=this._expandedTile===e;return I`
      <div class="tile-row">
        <div class="tile-header" @click=${()=>{this._expandedTile=o?null:e}}>
          <span class="tile-arrow">${o?"▾":"▸"}</span>
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
        ${o?this._renderTileEditor(t,e):q}
      </div>
    `}_renderTileEditor(t,e){const i=this._filterTab[e]??"on",o="on"===i?"object"==typeof t.filter_on?t.filter_on:t.filter_on?xt(t.filter_on):void 0:"object"==typeof t.filter_off?t.filter_off:t.filter_off?xt(t.filter_off):void 0;return I`
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
              ${Object.entries(yt).map(([e,i])=>I`
                <option value="${e}" ?selected=${t.filter_preset===e}>${i.label}</option>
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
            <button class="filter-tab ${"on"===i?"active":""}"
              @click=${()=>{this._filterTab={...this._filterTab,[e]:"on"}}}>ON state</button>
            <button class="filter-tab ${"off"===i?"active":""}"
              @click=${()=>{this._filterTab={...this._filterTab,[e]:"off"}}}>OFF state</button>
          </div>
          ${this._renderFilterSliders(e,i,o)}
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
    `}_renderFilterSliders(t,e,i){const o="on"===e?"filter_on":"filter_off",s=i??{};return I`
      <div class="filter-sliders">
        ${Object.entries($t).map(([e,i])=>{const r=s[e]??{brightness:1,sepia:0,saturate:1,hue_rotate:0,contrast:1,blur:0}[e]??0;return I`
              <div class="slider-row">
                <span class="slider-label">${i.label}</span>
                <input
                  type="range"
                  min="${i.min}" max="${i.max}" step="${i.step}"
                  .value=${String(r)}
                  @input=${i=>{const s=parseFloat(i.target.value),r="object"==typeof this._stored.tiles[t][o]?this._stored.tiles[t][o]:{brightness:1,sepia:0,saturate:1,hue_rotate:0,contrast:1,blur:0};this._patchTile(t,{[o]:{...r,[e]:s}})}}
                />
                <span class="slider-value">${r.toFixed("hue_rotate"===e?0:2)}</span>
              </div>
            `})}
      </div>
    `}_renderActionEditor(t,e,i,o){const s=t[i]??Pt("none");return I`
      <div class="action-row">
        <span class="action-label">${o}</span>
        <select
          .value=${s.action}
          @change=${t=>{const o=t.target.value;this._patchTile(e,{[i]:Pt(o)})}}
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
            @input=${t=>this._patchAction(e,i,{navigation_path:t.target.value})}
          />
        `:q}
        ${"more-info"===s.action?I`
          <input
            type="text" class="action-extra"
            placeholder="entity (leave blank to use tile entity)"
            .value=${s.entity??""}
            @input=${t=>this._patchAction(e,i,{entity:t.target.value})}
          />
        `:q}
        ${"call-service"===s.action?I`
          <input
            type="text" class="action-extra"
            placeholder="domain.service"
            .value=${s.service??""}
            @input=${t=>this._patchAction(e,i,{service:t.target.value})}
          />
        `:q}
        ${"popup"===s.action?I`
          <input
            type="text" class="action-extra"
            placeholder="Popup title"
            .value=${s.popup?.title??""}
            @input=${t=>this._patchAction(e,i,{popup:{...s.popup,title:t.target.value}})}
          />
        `:q}
      </div>
    `}_renderSensorRow(t,e,i){return I`
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
          ${["top-left","top-right","bottom-left","bottom-right"].map(e=>I`
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
    `}static get styles(){return n`
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
    `}};t([ht({attribute:!1})],Nt.prototype,"hass",void 0),t([ht({attribute:!1})],Nt.prototype,"config",void 0),t([ut()],Nt.prototype,"_stored",void 0),t([ut()],Nt.prototype,"_availableConfigs",void 0),t([ut()],Nt.prototype,"_tab",void 0),t([ut()],Nt.prototype,"_expandedTile",void 0),t([ut()],Nt.prototype,"_filterTab",void 0),t([ut()],Nt.prototype,"_loading",void 0),t([ut()],Nt.prototype,"_saving",void 0),t([ut()],Nt.prototype,"_error",void 0),Nt=t([ct("navbar-card-editor")],Nt),console.info(`%c NAVBAR-CARD %c v${gt} `,"color:#fff;background:#3b82f6;font-weight:700;padding:2px 6px;border-radius:4px 0 0 4px;","color:#3b82f6;background:#1e293b;font-weight:700;padding:2px 6px;border-radius:0 4px 4px 0;");let Ot=class extends at{constructor(){super(...arguments),this._stored=null,this._loading=!0,this._error=null,this._standalone=!1,this._holdTimers=new Map,this._lastTap=new Map,this._holdFired=new Set}setConfig(t){if(!t)throw new Error("navbar-card: missing configuration");this.config=t,this._stored=null,this._loading=!0,this._error=null}updated(t){super.updated(t),t.has("hass")&&this.hass&&this._loading&&this._loadConfig()}async _loadConfig(){if(!this.config.config_id&&this.config.tiles?.length)return this._stored={tiles:this.config.tiles,slots:this.config.slots},this._standalone=!0,void(this._loading=!1);const t=this.config.config_id??bt;try{const e=await this.hass.callWS({type:vt,config_id:t});this._stored=e,this._loading=!1}catch(t){const e=t,i=t instanceof Error?t.message:String(e?.message?e.message:e?.code?e.code:t);this.config.tiles?.length?(this._stored={tiles:this.config.tiles,slots:this.config.slots},this._standalone=!0,this._loading=!1,console.warn(`[navbar-card] Backend unavailable (${i}). Running in standalone mode.`)):i.includes("not_found")?(this._stored={tiles:[]},this._loading=!1):(this._error=`Backend unavailable (${i}). Go to Settings → Integrations → Add → "Navbar Card" to enable the backend, or use standalone mode with inline tiles: in the card config.`,this._loading=!1)}}_handlePointerDown(t,e,i){if(0===i.button&&(this._holdFired.delete(t),e.hold_action&&"none"!==e.hold_action.action)){const i=setTimeout(()=>{this._holdFired.add(t),this._executeAction(e.hold_action,e)},700);this._holdTimers.set(t,i)}}_handlePointerUp(t){const e=this._holdTimers.get(t);void 0!==e&&(clearTimeout(e),this._holdTimers.delete(t))}_handleClick(t,e){if(this._holdFired.has(t))return void this._holdFired.delete(t);const i=Date.now(),o=this._lastTap.get(t)??0;i-o<300&&e.double_tap_action?(this._lastTap.delete(t),this._executeAction(e.double_tap_action,e)):(this._lastTap.set(t,i),e.double_tap_action?setTimeout(()=>{this._lastTap.get(t)===i&&(this._lastTap.delete(t),this._executeAction(e.tap_action,e))},350):(this._lastTap.delete(t),this._executeAction(e.tap_action,e)))}_executeAction(t,e){if(t&&"none"!==t.action)switch(t.action){case"navigate":t.navigation_path&&(window.history.pushState(null,"",t.navigation_path),window.dispatchEvent(new Event("location-changed")));break;case"more-info":{const i=t.entity??e.entity;i&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:i},bubbles:!0,composed:!0}));break}case"call-service":if(t.service){const[e,i]=t.service.split(".");this.hass.callService(e,i,t.service_data)}break;case"popup":t.popup&&kt(this.hass,0,t.popup.title,t.popup.size,t.popup.content)}}_resolveFilter(t,e){const i=e?t.filter_on:t.filter_off;if(void 0!==i)return mt(i);if(t.filter_preset){const i=yt[t.filter_preset];if(i)return mt(e?i.on:i.off)}return"none"}_sensorColor(t,e){const i=parseFloat(e);if(isNaN(i))return"rgba(255,255,255,0.55)";const o=(this.hass?.states[t.entity]?.attributes??{}).device_class,s=t.thresholds?.length?t.thresholds:function(t){if(t)return wt[t.toLowerCase()]}(o);if(!s?.length)return"rgba(255,255,255,0.85)";const r=[...s].sort((t,e)=>e.above-t.above);for(const t of r)if(i>=t.above)return t.color;return"rgba(255,255,255,0.55)"}_renderSensor(t,e){if("on"===t.show_when&&"on"!==e)return q;if("off"===t.show_when&&"off"!==e)return q;const i=this.hass?.states[t.entity],o=i?.state??"--",s=i?.attributes?.device_class;let r=o;if("--"!==o&&"unavailable"!==o&&"unknown"!==o){const e=parseFloat(o);if(!isNaN(e)){const i=t.precision??1;r=e.toFixed(i)}}const n=void 0!==t.unit?t.unit:function(t){return t?At[t.toLowerCase()]??"":""}(s),a=this._sensorColor(t,o),l=_t[t.position]??_t["top-left"],c=t.font_size??11,d="unavailable"===o||"unknown"===o;return I`
      <div style="
        position:absolute;
        top:${l.top};right:${l.right};
        bottom:${l.bottom};left:${l.left};
        z-index:2;
        color:${d?"rgba(255,255,255,0.25)":a};
        font-size:${c}px;font-weight:700;line-height:1;
        text-shadow:0 1px 3px rgba(0,0,0,0.9);pointer-events:none;
      ">${r}${d?"":n}</div>
    `}_renderTile(t,e){const i=t.entity?this.hass?.states[t.entity]?.state??"off":"off",o="on"===i,s=t.min_height??83,r=t.transition??1.5,n=o?t.border_color_on??"rgba(255,165,0,0.45)":t.border_color_off??"rgba(255,255,255,0.1)",a=this._resolveFilter(t,o),l=o?"1":"0";return I`
      <div
        style="
          flex:1;position:relative;overflow:hidden;
          border-radius:${"12px"};
          min-height:${s}px;
          border:1px solid ${n};
          transition:border-color ${r}s ease;
          cursor:pointer;-webkit-tap-highlight-color:transparent;user-select:none;
        "
        @pointerdown=${i=>this._handlePointerDown(e,t,i)}
        @pointerup=${()=>this._handlePointerUp(e)}
        @pointercancel=${()=>this._handlePointerUp(e)}
        @click=${()=>this._handleClick(e,t)}
      >
        ${t.background_image?I`
          <div style="
            position:absolute;inset:0;z-index:0;
            background-image:url('${t.background_image}');
            background-size:cover;background-position:center;
            filter:${a};
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
        `:q}
        ${(t.sensors??[]).map(t=>this._renderSensor(t,i))}
      </div>
    `}render(){if(this._loading)return I`<div class="state-box loading">Loading...</div>`;if(this._error)return I`<div class="state-box error">Warning: ${this._error}</div>`;if(!this._stored?.tiles?.length)return I`
        <div class="state-box empty">
          Navbar Card v${gt} - No tiles configured yet.
        </div>
      `;const t=this._stored.layout??{},e=t.columns??0,i=t.gap??6;return I`
      <div class="navbar">
        <div style="${e>0?`display:grid;grid-template-columns:repeat(${e},1fr);gap:${i}px;`:`display:flex;gap:${i}px;align-items:stretch;`}">
          ${this._stored.tiles.map((t,e)=>this._renderTile(t,e))}
        </div>
        ${this._standalone?I`<div class="mode-badge">standalone</div>`:q}
      </div>
    `}static get styles(){return n`
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
    `}static getConfigElement(){return document.createElement("navbar-card-editor")}static getStubConfig(){return{config_id:bt}}};t([ht({attribute:!1})],Ot.prototype,"hass",void 0),t([ht({attribute:!1})],Ot.prototype,"config",void 0),t([ut()],Ot.prototype,"_stored",void 0),t([ut()],Ot.prototype,"_loading",void 0),t([ut()],Ot.prototype,"_error",void 0),t([ut()],Ot.prototype,"_standalone",void 0),Ot=t([ct(ft)],Ot),window.customCards=window.customCards??[],window.customCards=window.customCards??[],window.customCards.push({type:ft,name:"Navbar Card",description:"Configurable room navigation card with sensor overlays and popup support.",preview:!0,documentationURL:"https://github.com/Michailjovic/Navbar"});export{Ot as NavbarCard};
