import{r as o}from"./app-9722631b.js";import{T as O}from"./tooltip.esm-9f2393cc.js";import{O as l,c as D,D as P}from"./hooks.esm-01741f00.js";function d(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function E(r){if(Array.isArray(r))return d(r)}function I(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function K(r,e){if(r){if(typeof r=="string")return d(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return d(r,e)}}function T(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(r){return E(r)||I(r)||K(r)||T()}var s={DEFAULT_MASKS:{pint:/[\d]/,int:/[\d\-]/,pnum:/[\d\.]/,money:/[\d\.\s,]/,num:/[\d\-\.]/,hex:/[0-9a-f]/i,email:/[a-z0-9_\.\-@]/i,alpha:/[a-z_]/i,alphanum:/[a-z0-9_]/i},getRegex:function(e){return s.DEFAULT_MASKS[e]?s.DEFAULT_MASKS[e]:e},onKeyPress:function(e,t,n){if(!n&&!(e.ctrlKey||e.altKey)){var i=e.key.length===1;if(i){var u=this.getRegex(t);u.test(e.key)||e.preventDefault()}}},onPaste:function(e,t,n){if(!n){var i=this.getRegex(t),u=e.clipboardData.getData("text");_(u).forEach(function(c){if(!i.test(c))return e.preventDefault(),!1})}},validate:function(e,t){var n=e.target.value,i=!0,u=this.getRegex(t);return n&&!u.test(n)&&(i=!1),i}};function f(){return f=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},f.apply(this,arguments)}var p={defaultProps:{__TYPE:"InputText",keyfilter:null,validateOnly:!1,tooltip:null,tooltipOptions:null,onInput:null,onKeyDown:null,onPaste:null,children:void 0},getProps:function(e){return l.getMergedProps(e,p.defaultProps)},getOtherProps:function(e){return l.getDiffProps(e,p.defaultProps)}},S=o.memo(o.forwardRef(function(r,e){var t=p.getProps(r),n=o.useRef(e),i=function(a){t.onKeyDown&&t.onKeyDown(a),t.keyfilter&&s.onKeyPress(a,t.keyfilter,t.validateOnly)},u=function(a){var g=!0;if(t.keyfilter&&t.validateOnly&&(g=s.validate(a,t.keyfilter)),t.onInput&&t.onInput(a,g),!t.onChange){var y=a.target;l.isNotEmpty(y.value)?P.addClass(y,"p-filled"):P.removeClass(y,"p-filled")}},c=function(a){t.onPaste&&t.onPaste(a),t.keyfilter&&s.onPaste(a,t.keyfilter,t.validateOnly)},m=n.current&&n.current.value,b=o.useMemo(function(){return l.isNotEmpty(t.value)||l.isNotEmpty(t.defaultValue)||l.isNotEmpty(m)},[t.value,t.defaultValue,m]);o.useEffect(function(){l.combinedRefs(n,e)},[n,e]);var h=l.isNotEmpty(t.tooltip),x=p.getOtherProps(t),A=D("p-inputtext p-component",{"p-disabled":t.disabled,"p-filled":b},t.className);return o.createElement(o.Fragment,null,o.createElement("input",f({ref:n},x,{className:A,onInput:u,onKeyDown:i,onPaste:c})),h&&o.createElement(O,f({target:n,content:t.tooltip},t.tooltipOptions)))}));S.displayName="InputText";export{S as I};
