<<<<<<<< HEAD:public/build/assets/transition-1939f8f5.js
import{r as l,R as y}from"./app-db555519.js";var Fe=Object.defineProperty,Te=(e,t,n)=>t in e?Fe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Y=(e,t,n)=>(Te(e,typeof t!="symbol"?t+"":t,n),n);let we=class{constructor(){Y(this,"current",this.detect()),Y(this,"handoffState","pending"),Y(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},N=new we,D=(e,t)=>{N.isServer?l.useEffect(e,t):l.useLayoutEffect(e,t)};function $(e){let t=l.useRef(e);return D(()=>{t.current=e},[e]),t}function Ce(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function x(){let e=[],t={addEventListener(n,r,i,f){return n.addEventListener(r,i,f),t.add(()=>n.removeEventListener(r,i,f))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);return t.add(()=>cancelAnimationFrame(r))},nextFrame(...n){return t.requestAnimationFrame(()=>t.requestAnimationFrame(...n))},setTimeout(...n){let r=setTimeout(...n);return t.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return Ce(()=>{r.current&&n[0]()}),t.add(()=>{r.current=!1})},style(n,r,i){let f=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:i}),this.add(()=>{Object.assign(n.style,{[r]:f})})},group(n){let r=x();return n(r),this.add(()=>r.dispose())},add(n){return e.push(n),()=>{let r=e.indexOf(n);if(r>=0)for(let i of e.splice(r,1))i()}},dispose(){for(let n of e.splice(0))n()}};return t}function re(){let[e]=l.useState(x);return l.useEffect(()=>()=>e.dispose(),[e]),e}let j=function(e){let t=$(e);return y.useCallback((...n)=>t.current(...n),[t])};function ie(){let[e,t]=l.useState(N.isHandoffComplete);return e&&N.isHandoffComplete===!1&&t(!1),l.useEffect(()=>{e!==!0&&t(!0)},[e]),l.useEffect(()=>N.handoff(),[]),e}function E(e,t,...n){if(e in t){let i=t[e];return typeof i=="function"?i(...n):i}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(i=>`"${i}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,E),r}let le=Symbol();function Ge(e,t=!0){return Object.assign(e,{[le]:t})}function ae(...e){let t=l.useRef(e);l.useEffect(()=>{t.current=e},[e]);let n=j(r=>{for(let i of t.current)i!=null&&(typeof i=="function"?i(r):i.current=r)});return e.every(r=>r==null||(r==null?void 0:r[le]))?void 0:n}function se(...e){return e.filter(Boolean).join(" ")}var oe=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(oe||{}),w=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(w||{});function ue({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:i,visible:f=!0,name:d}){let o=ce(t,e);if(f)return A(o,n,r,d);let s=i??0;if(s&2){let{static:c=!1,...u}=o;if(c)return A(u,n,r,d)}if(s&1){let{unmount:c=!0,...u}=o;return E(c?0:1,{[0](){return null},[1](){return A({...u,hidden:!0,style:{display:"none"}},n,r,d)}})}return A(o,n,r,d)}function A(e,t={},n,r){var i;let{as:f=n,children:d,refName:o="ref",...s}=_(e,["unmount","static"]),c=e.ref!==void 0?{[o]:e.ref}:{},u=typeof d=="function"?d(t):d;"className"in s&&s.className&&typeof s.className=="function"&&(s.className=s.className(t));let v={};if(t){let g=!1,m=[];for(let[a,h]of Object.entries(t))typeof h=="boolean"&&(g=!0),h===!0&&m.push(a);g&&(v["data-headlessui-state"]=m.join(" "))}if(f===l.Fragment&&Object.keys(te(s)).length>0){if(!l.isValidElement(u)||Array.isArray(u)&&u.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map(a=>`  - ${a}`).join(`
========
import{r as l,R as y}from"./app-02827c05.js";var Fe=Object.defineProperty,Te=(e,t,n)=>t in e?Fe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Y=(e,t,n)=>(Te(e,typeof t!="symbol"?t+"":t,n),n);let we=class{constructor(){Y(this,"current",this.detect()),Y(this,"handoffState","pending"),Y(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},N=new we,D=(e,t)=>{N.isServer?l.useEffect(e,t):l.useLayoutEffect(e,t)};function $(e){let t=l.useRef(e);return D(()=>{t.current=e},[e]),t}function Ce(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function x(){let e=[],t={addEventListener(n,r,i,f){return n.addEventListener(r,i,f),t.add(()=>n.removeEventListener(r,i,f))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);return t.add(()=>cancelAnimationFrame(r))},nextFrame(...n){return t.requestAnimationFrame(()=>t.requestAnimationFrame(...n))},setTimeout(...n){let r=setTimeout(...n);return t.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return Ce(()=>{r.current&&n[0]()}),t.add(()=>{r.current=!1})},style(n,r,i){let f=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:i}),this.add(()=>{Object.assign(n.style,{[r]:f})})},group(n){let r=x();return n(r),this.add(()=>r.dispose())},add(n){return e.push(n),()=>{let r=e.indexOf(n);if(r>=0)for(let i of e.splice(r,1))i()}},dispose(){for(let n of e.splice(0))n()}};return t}function re(){let[e]=l.useState(x);return l.useEffect(()=>()=>e.dispose(),[e]),e}let j=function(e){let t=$(e);return y.useCallback((...n)=>t.current(...n),[t])};function ie(){let[e,t]=l.useState(N.isHandoffComplete);return e&&N.isHandoffComplete===!1&&t(!1),l.useEffect(()=>{e!==!0&&t(!0)},[e]),l.useEffect(()=>N.handoff(),[]),e}function E(e,t,...n){if(e in t){let i=t[e];return typeof i=="function"?i(...n):i}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(i=>`"${i}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,E),r}let le=Symbol();function Ge(e,t=!0){return Object.assign(e,{[le]:t})}function ae(...e){let t=l.useRef(e);l.useEffect(()=>{t.current=e},[e]);let n=j(r=>{for(let i of t.current)i!=null&&(typeof i=="function"?i(r):i.current=r)});return e.every(r=>r==null||(r==null?void 0:r[le]))?void 0:n}function se(...e){return e.filter(Boolean).join(" ")}var oe=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(oe||{}),w=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(w||{});function ue({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:i,visible:f=!0,name:d}){let o=ce(t,e);if(f)return A(o,n,r,d);let s=i??0;if(s&2){let{static:c=!1,...u}=o;if(c)return A(u,n,r,d)}if(s&1){let{unmount:c=!0,...u}=o;return E(c?0:1,{[0](){return null},[1](){return A({...u,hidden:!0,style:{display:"none"}},n,r,d)}})}return A(o,n,r,d)}function A(e,t={},n,r){var i;let{as:f=n,children:d,refName:o="ref",...s}=_(e,["unmount","static"]),c=e.ref!==void 0?{[o]:e.ref}:{},u=typeof d=="function"?d(t):d;"className"in s&&s.className&&typeof s.className=="function"&&(s.className=s.className(t));let v={};if(t){let g=!1,m=[];for(let[a,h]of Object.entries(t))typeof h=="boolean"&&(g=!0),h===!0&&m.push(a);g&&(v["data-headlessui-state"]=m.join(" "))}if(f===l.Fragment&&Object.keys(te(s)).length>0){if(!l.isValidElement(u)||Array.isArray(u)&&u.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map(a=>`  - ${a}`).join(`
>>>>>>>> 3a01ac762eb9d7cc11730769d148fcd37a782b97:public/build/assets/transition-9652aa34.js
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(a=>`  - ${a}`).join(`
`)].join(`
`));let g=se((i=u.props)==null?void 0:i.className,s.className),m=g?{className:g}:{};return l.cloneElement(u,Object.assign({},ce(u.props,te(_(s,["ref"]))),v,c,Oe(u.ref,c.ref),m))}return l.createElement(f,Object.assign({},_(s,["ref"]),f!==l.Fragment&&c,f!==l.Fragment&&v),u)}function Oe(...e){return{ref:e.every(t=>t==null)?void 0:t=>{for(let n of e)n!=null&&(typeof n=="function"?n(t):n.current=t)}}}function ce(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let i in r)i.startsWith("on")&&typeof r[i]=="function"?(n[i]!=null||(n[i]=[]),n[i].push(r[i])):t[i]=r[i];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](i,...f){let d=n[r];for(let o of d){if((i instanceof Event||(i==null?void 0:i.nativeEvent)instanceof Event)&&i.defaultPrevented)return;o(i,...f)}}});return t}function X(e){var t;return Object.assign(l.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function te(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function _(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}let Z=l.createContext(null);Z.displayName="OpenClosedContext";var T=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(T||{});function fe(){return l.useContext(Z)}function Se({value:e,children:t}){return y.createElement(Z.Provider,{value:e},t)}function de(){let e=l.useRef(!1);return D(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function je(e=0){let[t,n]=l.useState(e),r=l.useCallback(o=>n(s=>s|o),[t]),i=l.useCallback(o=>Boolean(t&o),[t]),f=l.useCallback(o=>n(s=>s&~o),[n]),d=l.useCallback(o=>n(s=>s^o),[n]);return{flags:t,addFlag:r,hasFlag:i,removeFlag:f,toggleFlag:d}}function $e(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function J(e,...t){e&&t.length>0&&e.classList.add(...t)}function K(e,...t){e&&t.length>0&&e.classList.remove(...t)}function Re(e,t){let n=x();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:i}=getComputedStyle(e),[f,d]=[r,i].map(s=>{let[c=0]=s.split(",").filter(Boolean).map(u=>u.includes("ms")?parseFloat(u):parseFloat(u)*1e3).sort((u,v)=>v-u);return c}),o=f+d;if(o!==0){n.group(c=>{c.setTimeout(()=>{t(),c.dispose()},o),c.addEventListener(e,"transitionrun",u=>{u.target===u.currentTarget&&c.dispose()})});let s=n.addEventListener(e,"transitionend",c=>{c.target===c.currentTarget&&(t(),s())})}else t();return n.add(()=>t()),n.dispose}function Ne(e,t,n,r){let i=n?"enter":"leave",f=x(),d=r!==void 0?$e(r):()=>{};i==="enter"&&(e.removeAttribute("hidden"),e.style.display="");let o=E(i,{enter:()=>t.enter,leave:()=>t.leave}),s=E(i,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),c=E(i,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return K(e,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),J(e,...o,...c),f.nextFrame(()=>{K(e,...c),J(e,...s),Re(e,()=>(K(e,...o),J(e,...t.entered),d()))}),f.dispose}function xe({container:e,direction:t,classes:n,onStart:r,onStop:i}){let f=de(),d=re(),o=$(t);D(()=>{let s=x();d.add(s.dispose);let c=e.current;if(c&&o.current!=="idle"&&f.current)return s.dispose(),r.current(o.current),s.add(Ne(c,n.current,o.current==="enter",()=>{s.dispose(),i.current(o.current)})),s.dispose},[t])}function S(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let q=l.createContext(null);q.displayName="TransitionContext";var Pe=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Pe||{});function Le(){let e=l.useContext(q);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function ke(){let e=l.useContext(I);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let I=l.createContext(null);I.displayName="NestingContext";function M(e){return"children"in e?M(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function me(e,t){let n=$(e),r=l.useRef([]),i=de(),f=re(),d=j((m,a=w.Hidden)=>{let h=r.current.findIndex(({el:p})=>p===m);h!==-1&&(E(a,{[w.Unmount](){r.current.splice(h,1)},[w.Hidden](){r.current[h].state="hidden"}}),f.microTask(()=>{var p;!M(r)&&i.current&&((p=n.current)==null||p.call(n))}))}),o=j(m=>{let a=r.current.find(({el:h})=>h===m);return a?a.state!=="visible"&&(a.state="visible"):r.current.push({el:m,state:"visible"}),()=>d(m,w.Unmount)}),s=l.useRef([]),c=l.useRef(Promise.resolve()),u=l.useRef({enter:[],leave:[],idle:[]}),v=j((m,a,h)=>{s.current.splice(0),t&&(t.chains.current[a]=t.chains.current[a].filter(([p])=>p!==m)),t==null||t.chains.current[a].push([m,new Promise(p=>{s.current.push(p)})]),t==null||t.chains.current[a].push([m,new Promise(p=>{Promise.all(u.current[a].map(([b,F])=>F)).then(()=>p())})]),a==="enter"?c.current=c.current.then(()=>t==null?void 0:t.wait.current).then(()=>h(a)):h(a)}),g=j((m,a,h)=>{Promise.all(u.current[a].splice(0).map(([p,b])=>b)).then(()=>{var p;(p=s.current.shift())==null||p()}).then(()=>h(a))});return l.useMemo(()=>({children:r,register:o,unregister:d,onStart:v,onStop:g,wait:c,chains:u}),[o,d,r,v,g,u,c])}function He(){}let Ae=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function ne(e){var t;let n={};for(let r of Ae)n[r]=(t=e[r])!=null?t:He;return n}function De(e){let t=l.useRef(ne(e));return l.useEffect(()=>{t.current=ne(e)},[e]),t}let qe="div",pe=oe.RenderStrategy;function Ie(e,t){let{beforeEnter:n,afterEnter:r,beforeLeave:i,afterLeave:f,enter:d,enterFrom:o,enterTo:s,entered:c,leave:u,leaveFrom:v,leaveTo:g,...m}=e,a=l.useRef(null),h=ae(a,t),p=m.unmount?w.Unmount:w.Hidden,{show:b,appear:F,initial:ve}=Le(),[C,U]=l.useState(b?"visible":"hidden"),ee=ke(),{register:P,unregister:L}=ee,B=l.useRef(null);l.useEffect(()=>P(a),[P,a]),l.useEffect(()=>{if(p===w.Hidden&&a.current){if(b&&C!=="visible"){U("visible");return}return E(C,{hidden:()=>L(a),visible:()=>P(a)})}},[C,a,P,L,b,p]);let V=$({enter:S(d),enterFrom:S(o),enterTo:S(s),entered:S(c),leave:S(u),leaveFrom:S(v),leaveTo:S(g)}),k=De({beforeEnter:n,afterEnter:r,beforeLeave:i,afterLeave:f}),z=ie();l.useEffect(()=>{if(z&&C==="visible"&&a.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[a,C,z]);let G=ve&&!F,ge=(()=>!z||G||B.current===b?"idle":b?"enter":"leave")(),R=je(0),be=j(O=>E(O,{enter:()=>{R.addFlag(T.Opening),k.current.beforeEnter()},leave:()=>{R.addFlag(T.Closing),k.current.beforeLeave()},idle:()=>{}})),ye=j(O=>E(O,{enter:()=>{R.removeFlag(T.Opening),k.current.afterEnter()},leave:()=>{R.removeFlag(T.Closing),k.current.afterLeave()},idle:()=>{}})),H=me(()=>{U("hidden"),L(a)},ee);xe({container:a,classes:V,direction:ge,onStart:$(O=>{H.onStart(a,O,be)}),onStop:$(O=>{H.onStop(a,O,ye),O==="leave"&&!M(H)&&(U("hidden"),L(a))})}),l.useEffect(()=>{G&&(p===w.Hidden?B.current=null:B.current=b)},[b,G,C]);let W=m,Ee={ref:h};return F&&b&&N.isServer&&(W={...W,className:se(m.className,...V.current.enter,...V.current.enterFrom)}),y.createElement(I.Provider,{value:H},y.createElement(Se,{value:E(C,{visible:T.Open,hidden:T.Closed})|R.flags},ue({ourProps:Ee,theirProps:W,defaultTag:qe,features:pe,visible:C==="visible",name:"Transition.Child"})))}function Me(e,t){let{show:n,appear:r=!1,unmount:i,...f}=e,d=l.useRef(null),o=ae(d,t);ie();let s=fe();if(n===void 0&&s!==null&&(n=(s&T.Open)===T.Open),![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[c,u]=l.useState(n?"visible":"hidden"),v=me(()=>{u("hidden")}),[g,m]=l.useState(!0),a=l.useRef([n]);D(()=>{g!==!1&&a.current[a.current.length-1]!==n&&(a.current.push(n),m(!1))},[a,n]);let h=l.useMemo(()=>({show:n,appear:r,initial:g}),[n,r,g]);l.useEffect(()=>{if(n)u("visible");else if(!M(v))u("hidden");else{let b=d.current;if(!b)return;let F=b.getBoundingClientRect();F.x===0&&F.y===0&&F.width===0&&F.height===0&&u("hidden")}},[n,v]);let p={unmount:i};return y.createElement(I.Provider,{value:v},y.createElement(q.Provider,{value:h},ue({ourProps:{...p,as:l.Fragment,children:y.createElement(he,{ref:o,...p,...f})},theirProps:{},defaultTag:l.Fragment,features:pe,visible:c==="visible",name:"Transition"})))}function Ue(e,t){let n=l.useContext(q)!==null,r=fe()!==null;return y.createElement(y.Fragment,null,!n&&r?y.createElement(Q,{ref:t,...e}):y.createElement(he,{ref:t,...e}))}let Q=X(Me),he=X(Ie),Be=X(Ue),We=Object.assign(Q,{Child:Be,Root:Q});export{fe as C,ue as D,X as L,Ge as T,D as a,$ as b,Ce as c,x as d,T as e,de as f,oe as j,ie as l,j as o,re as p,N as s,We as t,E as u,ae as y};
