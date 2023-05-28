import{R as E}from"./app-9722631b.js";var ue=e=>e.type==="checkbox",Y=e=>e instanceof Date,T=e=>e==null;const Je=e=>typeof e=="object";var p=e=>!T(e)&&!Array.isArray(e)&&Je(e)&&!Y(e),Qe=e=>p(e)&&e.target?ue(e.target)?e.target.checked:e.target.value:e,bt=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Xe=(e,i)=>e.has(bt(i)),At=e=>{const i=e.constructor&&e.constructor.prototype;return p(i)&&i.hasOwnProperty("isPrototypeOf")},Ee=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function G(e){let i;const s=Array.isArray(e);if(e instanceof Date)i=new Date(e);else if(e instanceof Set)i=new Set(e);else if(!(Ee&&(e instanceof Blob||e instanceof FileList))&&(s||p(e)))if(i=s?[]:{},!Array.isArray(e)&&!At(e))i=e;else for(const r in e)i[r]=G(e[r]);else return e;return i}var ae=e=>Array.isArray(e)?e.filter(Boolean):[],k=e=>e===void 0,c=(e,i,s)=>{if(!i||!p(e))return s;const r=ae(i.split(/[,[\].]+?/)).reduce((n,l)=>T(n)?n:n[l],e);return k(r)||r===e?k(e[i])?s:e[i]:r};const fe={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},I={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},K={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},xt=E.createContext(null),pe=()=>E.useContext(xt);var Ye=(e,i,s,r=!0)=>{const n={defaultValues:i._defaultValues};for(const l in e)Object.defineProperty(n,l,{get:()=>{const d=l;return i._proxyFormState[d]!==I.all&&(i._proxyFormState[d]=!r||I.all),s&&(s[d]=!0),e[d]}});return n},B=e=>p(e)&&!Object.keys(e).length,Ze=(e,i,s,r)=>{s(e);const{name:n,...l}=e;return B(l)||Object.keys(l).length>=Object.keys(i).length||Object.keys(l).find(d=>i[d]===(!r||I.all))},oe=e=>Array.isArray(e)?e:[e],et=(e,i,s)=>s&&i?e===i:!e||!i||e===i||oe(e).some(r=>r&&(r.startsWith(i)||i.startsWith(r)));function Ce(e){const i=E.useRef(e);i.current=e,E.useEffect(()=>{const s=!e.disabled&&i.current.subject&&i.current.subject.subscribe({next:i.current.next});return()=>{s&&s.unsubscribe()}},[e.disabled])}function Ft(e){const i=pe(),{control:s=i.control,disabled:r,name:n,exact:l}=e||{},[d,g]=E.useState(s._formState),v=E.useRef(!0),A=E.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),C=E.useRef(n);return C.current=n,Ce({disabled:r,next:x=>v.current&&et(C.current,x.name,l)&&Ze(x,A.current,s._updateFormState)&&g({...s._formState,...x}),subject:s._subjects.state}),E.useEffect(()=>{v.current=!0;const x=s._proxyFormState.isDirty&&s._getDirty();return x!==s._formState.isDirty&&s._subjects.state.next({isDirty:x}),A.current.isValid&&s._updateValid(!0),()=>{v.current=!1}},[s]),Ye(d,s,A.current,!1)}var H=e=>typeof e=="string",tt=(e,i,s,r,n)=>H(e)?(r&&i.watch.add(e),c(s,e,n)):Array.isArray(e)?e.map(l=>(r&&i.watch.add(l),c(s,l))):(r&&(i.watchAll=!0),s);function mt(e){const i=pe(),{control:s=i.control,name:r,defaultValue:n,disabled:l,exact:d}=e||{},g=E.useRef(r);g.current=r,Ce({disabled:l,subject:s._subjects.values,next:C=>{et(g.current,C.name,d)&&A(G(tt(g.current,s._names,C.values||s._formValues,!1,n)))}});const[v,A]=E.useState(s._getWatch(r,n));return E.useEffect(()=>s._removeUnmounted()),v}var Oe=e=>/^\w*$/.test(e),rt=e=>ae(e.replace(/["|']|\]/g,"").split(/\.|\[/));function m(e,i,s){let r=-1;const n=Oe(i)?[i]:rt(i),l=n.length,d=l-1;for(;++r<l;){const g=n[r];let v=s;if(r!==d){const A=e[g];v=p(A)||Array.isArray(A)?A:isNaN(+n[r+1])?{}:[]}e[g]=v,e=e[g]}return e}function wt(e){const i=pe(),{name:s,control:r=i.control,shouldUnregister:n}=e,l=Xe(r._names.array,s),d=mt({control:r,name:s,defaultValue:c(r._formValues,s,c(r._defaultValues,s,e.defaultValue)),exact:!0}),g=Ft({control:r,name:s}),v=E.useRef(r.register(s,{...e.rules,value:d}));return E.useEffect(()=>{const A=r._options.shouldUnregister||n,C=(x,V)=>{const P=c(r._fields,x);P&&(P._f.mount=V)};return C(s,!0),A&&m(r._defaultValues,s,G(c(r._options.defaultValues,s))),()=>{(l?A&&!r._state.action:A)?r.unregister(s):C(s,!1)}},[s,r,l,n]),{field:{name:s,value:d,onChange:E.useCallback(A=>v.current.onChange({target:{value:Qe(A),name:s},type:fe.CHANGE}),[s]),onBlur:E.useCallback(()=>v.current.onBlur({target:{value:c(r._formValues,s),name:s},type:fe.BLUR}),[s,r]),ref:A=>{const C=c(r._fields,s);C&&A&&(C._f.ref={focus:()=>A.focus(),select:()=>A.select(),setCustomValidity:x=>A.setCustomValidity(x),reportValidity:()=>A.reportValidity()})}},formState:g,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!c(g.errors,s)},isDirty:{enumerable:!0,get:()=>!!c(g.dirtyFields,s)},isTouched:{enumerable:!0,get:()=>!!c(g.touchedFields,s)},error:{enumerable:!0,get:()=>c(g.errors,s)}})}}const Bt=e=>e.render(wt(e));var Dt=(e,i,s,r,n)=>i?{...s[e],types:{...s[e]&&s[e].types?s[e].types:{},[r]:n||!0}}:{};const ke=(e,i,s)=>{for(const r of s||Object.keys(e)){const n=c(e,r);if(n){const{_f:l,...d}=n;if(l&&i(l.name)){if(l.ref.focus){l.ref.focus();break}else if(l.refs&&l.refs[0].focus){l.refs[0].focus();break}}else p(d)&&ke(d,i)}}};var qe=e=>({isOnSubmit:!e||e===I.onSubmit,isOnBlur:e===I.onBlur,isOnChange:e===I.onChange,isOnAll:e===I.all,isOnTouch:e===I.onTouched}),We=(e,i,s)=>!s&&(i.watchAll||i.watch.has(e)||[...i.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length)))),St=(e,i,s)=>{const r=ae(c(e,s));return m(r,"root",i[s]),m(e,s,r),e},Z=e=>typeof e=="boolean",Le=e=>e.type==="file",ee=e=>typeof e=="function",de=e=>{if(!Ee)return!1;const i=e?e.ownerDocument:0;return e instanceof(i&&i.defaultView?i.defaultView.HTMLElement:HTMLElement)},ce=e=>H(e),Te=e=>e.type==="radio",ye=e=>e instanceof RegExp;const He={value:!1,isValid:!1},je={value:!0,isValid:!0};var st=e=>{if(Array.isArray(e)){if(e.length>1){const i=e.filter(s=>s&&s.checked&&!s.disabled).map(s=>s.value);return{value:i,isValid:!!i.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!k(e[0].attributes.value)?k(e[0].value)||e[0].value===""?je:{value:e[0].value,isValid:!0}:je:He}return He};const $e={isValid:!1,value:null};var it=e=>Array.isArray(e)?e.reduce((i,s)=>s&&s.checked&&!s.disabled?{isValid:!0,value:s.value}:i,$e):$e;function Ke(e,i,s="validate"){if(ce(e)||Array.isArray(e)&&e.every(ce)||Z(e)&&!e)return{type:s,message:ce(e)?e:"",ref:i}}var X=e=>p(e)&&!ye(e)?e:{value:e,message:""},Ge=async(e,i,s,r,n)=>{const{ref:l,refs:d,required:g,maxLength:v,minLength:A,min:C,max:x,pattern:V,validate:P,name:U,valueAsNumber:ve,mount:le,disabled:_e}=e._f,_=c(i,U);if(!le||_e)return{};const N=d?d[0]:l,j=F=>{r&&N.reportValidity&&(N.setCustomValidity(Z(F)?"":F||""),N.reportValidity())},O={},te=Te(l),re=ue(l),Ve=te||re,q=(ve||Le(l))&&k(l.value)&&k(_)||de(l)&&l.value===""||_===""||Array.isArray(_)&&!_.length,z=Dt.bind(null,U,s,O),$=(F,b,D,R=K.maxLength,M=K.minLength)=>{const W=F?b:D;O[U]={type:F?R:M,message:W,ref:l,...z(F?R:M,W)}};if(n?!Array.isArray(_)||!_.length:g&&(!Ve&&(q||T(_))||Z(_)&&!_||re&&!st(d).isValid||te&&!it(d).isValid)){const{value:F,message:b}=ce(g)?{value:!!g,message:g}:X(g);if(F&&(O[U]={type:K.required,message:b,ref:N,...z(K.required,b)},!s))return j(b),O}if(!q&&(!T(C)||!T(x))){let F,b;const D=X(x),R=X(C);if(!T(_)&&!isNaN(_)){const M=l.valueAsNumber||_&&+_;T(D.value)||(F=M>D.value),T(R.value)||(b=M<R.value)}else{const M=l.valueAsDate||new Date(_),W=ie=>new Date(new Date().toDateString()+" "+ie),J=l.type=="time",se=l.type=="week";H(D.value)&&_&&(F=J?W(_)>W(D.value):se?_>D.value:M>new Date(D.value)),H(R.value)&&_&&(b=J?W(_)<W(R.value):se?_<R.value:M<new Date(R.value))}if((F||b)&&($(!!F,D.message,R.message,K.max,K.min),!s))return j(O[U].message),O}if((v||A)&&!q&&(H(_)||n&&Array.isArray(_))){const F=X(v),b=X(A),D=!T(F.value)&&_.length>F.value,R=!T(b.value)&&_.length<b.value;if((D||R)&&($(D,F.message,b.message),!s))return j(O[U].message),O}if(V&&!q&&H(_)){const{value:F,message:b}=X(V);if(ye(F)&&!_.match(F)&&(O[U]={type:K.pattern,message:b,ref:l,...z(K.pattern,b)},!s))return j(b),O}if(P){if(ee(P)){const F=await P(_,i),b=Ke(F,N);if(b&&(O[U]={...b,...z(K.validate,b.message)},!s))return j(b.message),O}else if(p(P)){let F={};for(const b in P){if(!B(F)&&!s)break;const D=Ke(await P[b](_,i),N,b);D&&(F={...D,...z(b,D.message)},j(D.message),s&&(O[U]=F))}if(!B(F)&&(O[U]={ref:N,...F},!s))return O}}return j(!0),O};function kt(e,i){const s=i.slice(0,-1).length;let r=0;for(;r<s;)e=k(e)?r++:e[i[r++]];return e}function Et(e){for(const i in e)if(!k(e[i]))return!1;return!0}function L(e,i){const s=Array.isArray(i)?i:Oe(i)?[i]:rt(i),r=s.length===1?e:kt(e,s),n=s.length-1,l=s[n];return r&&delete r[l],n!==0&&(p(r)&&B(r)||Array.isArray(r)&&Et(r))&&L(e,s.slice(0,-1)),e}function me(){let e=[];return{get observers(){return e},next:n=>{for(const l of e)l.next&&l.next(n)},subscribe:n=>(e.push(n),{unsubscribe:()=>{e=e.filter(l=>l!==n)}}),unsubscribe:()=>{e=[]}}}var he=e=>T(e)||!Je(e);function Q(e,i){if(he(e)||he(i))return e===i;if(Y(e)&&Y(i))return e.getTime()===i.getTime();const s=Object.keys(e),r=Object.keys(i);if(s.length!==r.length)return!1;for(const n of s){const l=e[n];if(!r.includes(n))return!1;if(n!=="ref"){const d=i[n];if(Y(l)&&Y(d)||p(l)&&p(d)||Array.isArray(l)&&Array.isArray(d)?!Q(l,d):l!==d)return!1}}return!0}var nt=e=>e.type==="select-multiple",pt=e=>Te(e)||ue(e),we=e=>de(e)&&e.isConnected,ut=e=>{for(const i in e)if(ee(e[i]))return!0;return!1};function ge(e,i={}){const s=Array.isArray(e);if(p(e)||s)for(const r in e)Array.isArray(e[r])||p(e[r])&&!ut(e[r])?(i[r]=Array.isArray(e[r])?[]:{},ge(e[r],i[r])):T(e[r])||(i[r]=!0);return i}function at(e,i,s){const r=Array.isArray(e);if(p(e)||r)for(const n in e)Array.isArray(e[n])||p(e[n])&&!ut(e[n])?k(i)||he(s[n])?s[n]=Array.isArray(e[n])?ge(e[n],[]):{...ge(e[n])}:at(e[n],T(i)?{}:i[n],s[n]):s[n]=!Q(e[n],i[n]);return s}var De=(e,i)=>at(e,i,ge(i)),lt=(e,{valueAsNumber:i,valueAsDate:s,setValueAs:r})=>k(e)?e:i?e===""?NaN:e&&+e:s&&H(e)?new Date(e):r?r(e):e;function Se(e){const i=e.ref;if(!(e.refs?e.refs.every(s=>s.disabled):i.disabled))return Le(i)?i.files:Te(i)?it(e.refs).value:nt(i)?[...i.selectedOptions].map(({value:s})=>s):ue(i)?st(e.refs).value:lt(k(i.value)?e.ref.value:i.value,e)}var Ct=(e,i,s,r)=>{const n={};for(const l of e){const d=c(i,l);d&&m(n,l,d._f)}return{criteriaMode:s,names:[...e],fields:n,shouldUseNativeValidation:r}},ne=e=>k(e)?e:ye(e)?e.source:p(e)?ye(e.value)?e.value.source:e.value:e,Ot=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function ze(e,i,s){const r=c(e,s);if(r||Oe(s))return{error:r,name:s};const n=s.split(".");for(;n.length;){const l=n.join("."),d=c(i,l),g=c(e,l);if(d&&!Array.isArray(d)&&s!==l)return{name:s};if(g&&g.type)return{name:l,error:g};n.pop()}return{name:s}}var Lt=(e,i,s,r,n)=>n.isOnAll?!1:!s&&n.isOnTouch?!(i||e):(s?r.isOnBlur:n.isOnBlur)?!e:(s?r.isOnChange:n.isOnChange)?e:!0,Tt=(e,i)=>!ae(c(e,i)).length&&L(e,i);const Rt={mode:I.onSubmit,reValidateMode:I.onChange,shouldFocusError:!0};function Ut(e={},i){let s={...Rt,...e},r={submitCount:0,isDirty:!1,isLoading:!0,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},n={},l=p(s.defaultValues)||p(s.values)?G(s.defaultValues||s.values)||{}:{},d=s.shouldUnregister?{}:G(l),g={action:!1,mount:!1,watch:!1},v={mount:new Set,unMount:new Set,array:new Set,watch:new Set},A,C=0;const x={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},V={values:me(),array:me(),state:me()},P=e.resetOptions&&e.resetOptions.keepDirtyValues,U=qe(s.mode),ve=qe(s.reValidateMode),le=s.criteriaMode===I.all,_e=t=>u=>{clearTimeout(C),C=setTimeout(t,u)},_=async t=>{if(x.isValid||t){const u=s.resolver?B((await q()).errors):await $(n,!0);u!==r.isValid&&V.state.next({isValid:u})}},N=t=>x.isValidating&&V.state.next({isValidating:t}),j=(t,u=[],a,f,y=!0,o=!0)=>{if(f&&a){if(g.action=!0,o&&Array.isArray(c(n,t))){const h=a(c(n,t),f.argA,f.argB);y&&m(n,t,h)}if(o&&Array.isArray(c(r.errors,t))){const h=a(c(r.errors,t),f.argA,f.argB);y&&m(r.errors,t,h),Tt(r.errors,t)}if(x.touchedFields&&o&&Array.isArray(c(r.touchedFields,t))){const h=a(c(r.touchedFields,t),f.argA,f.argB);y&&m(r.touchedFields,t,h)}x.dirtyFields&&(r.dirtyFields=De(l,d)),V.state.next({name:t,isDirty:b(t,u),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else m(d,t,u)},O=(t,u)=>{m(r.errors,t,u),V.state.next({errors:r.errors})},te=(t,u,a,f)=>{const y=c(n,t);if(y){const o=c(d,t,k(a)?c(l,t):a);k(o)||f&&f.defaultChecked||u?m(d,t,u?o:Se(y._f)):M(t,o),g.mount&&_()}},re=(t,u,a,f,y)=>{let o=!1,h=!1;const S={name:t};if(!a||f){x.isDirty&&(h=r.isDirty,r.isDirty=S.isDirty=b(),o=h!==S.isDirty);const w=Q(c(l,t),u);h=c(r.dirtyFields,t),w?L(r.dirtyFields,t):m(r.dirtyFields,t,!0),S.dirtyFields=r.dirtyFields,o=o||x.dirtyFields&&h!==!w}if(a){const w=c(r.touchedFields,t);w||(m(r.touchedFields,t,a),S.touchedFields=r.touchedFields,o=o||x.touchedFields&&w!==a)}return o&&y&&V.state.next(S),o?S:{}},Ve=(t,u,a,f)=>{const y=c(r.errors,t),o=x.isValid&&Z(u)&&r.isValid!==u;if(e.delayError&&a?(A=_e(()=>O(t,a)),A(e.delayError)):(clearTimeout(C),A=null,a?m(r.errors,t,a):L(r.errors,t)),(a?!Q(y,a):y)||!B(f)||o){const h={...f,...o&&Z(u)?{isValid:u}:{},errors:r.errors,name:t};r={...r,...h},V.state.next(h)}N(!1)},q=async t=>s.resolver(d,s.context,Ct(t||v.mount,n,s.criteriaMode,s.shouldUseNativeValidation)),z=async t=>{const{errors:u}=await q();if(t)for(const a of t){const f=c(u,a);f?m(r.errors,a,f):L(r.errors,a)}else r.errors=u;return u},$=async(t,u,a={valid:!0})=>{for(const f in t){const y=t[f];if(y){const{_f:o,...h}=y;if(o){const S=v.array.has(o.name),w=await Ge(y,d,le,s.shouldUseNativeValidation,S);if(w[o.name]&&(a.valid=!1,u))break;!u&&(c(w,o.name)?S?St(r.errors,w,o.name):m(r.errors,o.name,w[o.name]):L(r.errors,o.name))}h&&await $(h,u,a)}}return a.valid},F=()=>{for(const t of v.unMount){const u=c(n,t);u&&(u._f.refs?u._f.refs.every(a=>!we(a)):!we(u._f.ref))&&be(t)}v.unMount=new Set},b=(t,u)=>(t&&u&&m(d,t,u),!Q(Re(),l)),D=(t,u,a)=>tt(t,v,{...g.mount?d:k(u)?l:H(t)?{[t]:u}:u},a,u),R=t=>ae(c(g.mount?d:l,t,e.shouldUnregister?c(l,t,[]):[])),M=(t,u,a={})=>{const f=c(n,t);let y=u;if(f){const o=f._f;o&&(!o.disabled&&m(d,t,lt(u,o)),y=de(o.ref)&&T(u)?"":u,nt(o.ref)?[...o.ref.options].forEach(h=>h.selected=y.includes(h.value)):o.refs?ue(o.ref)?o.refs.length>1?o.refs.forEach(h=>(!h.defaultChecked||!h.disabled)&&(h.checked=Array.isArray(y)?!!y.find(S=>S===h.value):y===h.value)):o.refs[0]&&(o.refs[0].checked=!!y):o.refs.forEach(h=>h.checked=h.value===y):Le(o.ref)?o.ref.value="":(o.ref.value=y,o.ref.type||V.values.next({name:t,values:{...d}})))}(a.shouldDirty||a.shouldTouch)&&re(t,y,a.shouldTouch,a.shouldDirty,!0),a.shouldValidate&&ie(t)},W=(t,u,a)=>{for(const f in u){const y=u[f],o=`${t}.${f}`,h=c(n,o);(v.array.has(t)||!he(y)||h&&!h._f)&&!Y(y)?W(o,y,a):M(o,y,a)}},J=(t,u,a={})=>{const f=c(n,t),y=v.array.has(t),o=G(u);m(d,t,o),y?(V.array.next({name:t,values:{...d}}),(x.isDirty||x.dirtyFields)&&a.shouldDirty&&V.state.next({name:t,dirtyFields:De(l,d),isDirty:b(t,o)})):f&&!f._f&&!T(o)?W(t,o,a):M(t,o,a),We(t,v)&&V.state.next({...r}),V.values.next({name:t,values:{...d}}),!g.mount&&i()},se=async t=>{const u=t.target;let a=u.name;const f=c(n,a),y=()=>u.type?Se(f._f):Qe(t);if(f){let o,h;const S=y(),w=t.type===fe.BLUR||t.type===fe.FOCUS_OUT,vt=!Ot(f._f)&&!s.resolver&&!c(r.errors,a)&&!f._f.deps||Lt(w,c(r.touchedFields,a),r.isSubmitted,ve,U),xe=We(a,v,w);m(d,a,S),w?(f._f.onBlur&&f._f.onBlur(t),A&&A(0)):f._f.onChange&&f._f.onChange(t);const Fe=re(a,S,w,!1),_t=!B(Fe)||xe;if(!w&&V.values.next({name:a,type:t.type,values:{...d}}),vt)return x.isValid&&_(),_t&&V.state.next({name:a,...xe?{}:Fe});if(!w&&xe&&V.state.next({...r}),N(!0),s.resolver){const{errors:Ne}=await q([a]),Vt=ze(r.errors,n,a),Ie=ze(Ne,n,Vt.name||a);o=Ie.error,a=Ie.name,h=B(Ne)}else o=(await Ge(f,d,le,s.shouldUseNativeValidation))[a],o?h=!1:x.isValid&&(h=await $(n,!0));f._f.deps&&ie(f._f.deps),Ve(a,h,o,Fe)}},ie=async(t,u={})=>{let a,f;const y=oe(t);if(N(!0),s.resolver){const o=await z(k(t)?t:y);a=B(o),f=t?!y.some(h=>c(o,h)):a}else t?(f=(await Promise.all(y.map(async o=>{const h=c(n,o);return await $(h&&h._f?{[o]:h}:h)}))).every(Boolean),!(!f&&!r.isValid)&&_()):f=a=await $(n);return V.state.next({...!H(t)||x.isValid&&a!==r.isValid?{}:{name:t},...s.resolver||!t?{isValid:a}:{},errors:r.errors,isValidating:!1}),u.shouldFocus&&!f&&ke(n,o=>o&&c(r.errors,o),t?y:v.mount),f},Re=t=>{const u={...l,...g.mount?d:{}};return k(t)?u:H(t)?c(u,t):t.map(a=>c(u,a))},Ue=(t,u)=>({invalid:!!c((u||r).errors,t),isDirty:!!c((u||r).dirtyFields,t),isTouched:!!c((u||r).touchedFields,t),error:c((u||r).errors,t)}),ot=t=>{t&&oe(t).forEach(u=>L(r.errors,u)),V.state.next({errors:t?r.errors:{}})},ct=(t,u,a)=>{const f=(c(n,t,{_f:{}})._f||{}).ref;m(r.errors,t,{...u,ref:f}),V.state.next({name:t,errors:r.errors,isValid:!1}),a&&a.shouldFocus&&f&&f.focus&&f.focus()},ft=(t,u)=>ee(t)?V.values.subscribe({next:a=>t(D(void 0,u),a)}):D(t,u,!0),be=(t,u={})=>{for(const a of t?oe(t):v.mount)v.mount.delete(a),v.array.delete(a),c(n,a)&&(u.keepValue||(L(n,a),L(d,a)),!u.keepError&&L(r.errors,a),!u.keepDirty&&L(r.dirtyFields,a),!u.keepTouched&&L(r.touchedFields,a),!s.shouldUnregister&&!u.keepDefaultValue&&L(l,a));V.values.next({values:{...d}}),V.state.next({...r,...u.keepDirty?{isDirty:b()}:{}}),!u.keepIsValid&&_()},Ae=(t,u={})=>{let a=c(n,t);const f=Z(u.disabled);return m(n,t,{...a||{},_f:{...a&&a._f?a._f:{ref:{name:t}},name:t,mount:!0,...u}}),v.mount.add(t),a?f&&m(d,t,u.disabled?void 0:c(d,t,Se(a._f))):te(t,!0,u.value),{...f?{disabled:u.disabled}:{},...s.shouldUseNativeValidation?{required:!!u.required,min:ne(u.min),max:ne(u.max),minLength:ne(u.minLength),maxLength:ne(u.maxLength),pattern:ne(u.pattern)}:{},name:t,onChange:se,onBlur:se,ref:y=>{if(y){Ae(t,u),a=c(n,t);const o=k(y.value)&&y.querySelectorAll&&y.querySelectorAll("input,select,textarea")[0]||y,h=pt(o),S=a._f.refs||[];if(h?S.find(w=>w===o):o===a._f.ref)return;m(n,t,{_f:{...a._f,...h?{refs:[...S.filter(we),o,...Array.isArray(c(l,t))?[{}]:[]],ref:{type:o.type,name:t}}:{ref:o}}}),te(t,!1,void 0,o)}else a=c(n,t,{}),a._f&&(a._f.mount=!1),(s.shouldUnregister||u.shouldUnregister)&&!(Xe(v.array,t)&&g.action)&&v.unMount.add(t)}}},Me=()=>s.shouldFocusError&&ke(n,t=>t&&c(r.errors,t),v.mount),dt=(t,u)=>async a=>{a&&(a.preventDefault&&a.preventDefault(),a.persist&&a.persist());let f=G(d);if(V.state.next({isSubmitting:!0}),s.resolver){const{errors:y,values:o}=await q();r.errors=y,f=o}else await $(n);L(r.errors,"root"),B(r.errors)?(V.state.next({errors:{}}),await t(f,a)):(u&&await u({...r.errors},a),Me(),setTimeout(Me)),V.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:B(r.errors),submitCount:r.submitCount+1,errors:r.errors})},yt=(t,u={})=>{c(n,t)&&(k(u.defaultValue)?J(t,c(l,t)):(J(t,u.defaultValue),m(l,t,u.defaultValue)),u.keepTouched||L(r.touchedFields,t),u.keepDirty||(L(r.dirtyFields,t),r.isDirty=u.defaultValue?b(t,c(l,t)):b()),u.keepError||(L(r.errors,t),x.isValid&&_()),V.state.next({...r}))},Be=(t,u={})=>{const a=t||l,f=G(a),y=t&&!B(t)?f:l;if(u.keepDefaultValues||(l=a),!u.keepValues){if(u.keepDirtyValues||P)for(const o of v.mount)c(r.dirtyFields,o)?m(y,o,c(d,o)):J(o,c(y,o));else{if(Ee&&k(t))for(const o of v.mount){const h=c(n,o);if(h&&h._f){const S=Array.isArray(h._f.refs)?h._f.refs[0]:h._f.ref;if(de(S)){const w=S.closest("form");if(w){w.reset();break}}}}n={}}d=e.shouldUnregister?u.keepDefaultValues?G(l):{}:f,V.array.next({values:{...y}}),V.values.next({values:{...y}})}v={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!g.mount&&i(),g.mount=!x.isValid||!!u.keepIsValid,g.watch=!!e.shouldUnregister,V.state.next({submitCount:u.keepSubmitCount?r.submitCount:0,isDirty:u.keepDirty?r.isDirty:!!(u.keepDefaultValues&&!Q(t,l)),isSubmitted:u.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:u.keepDirtyValues?r.dirtyFields:u.keepDefaultValues&&t?De(l,t):{},touchedFields:u.keepTouched?r.touchedFields:{},errors:u.keepErrors?r.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},Pe=(t,u)=>Be(ee(t)?t(d):t,u),ht=(t,u={})=>{const a=c(n,t),f=a&&a._f;if(f){const y=f.refs?f.refs[0]:f.ref;y.focus&&(y.focus(),u.shouldSelect&&y.select())}},gt=t=>{r={...r,...t}};return ee(s.defaultValues)&&s.defaultValues().then(t=>{Pe(t,s.resetOptions),V.state.next({isLoading:!1})}),{control:{register:Ae,unregister:be,getFieldState:Ue,_executeSchema:q,_getWatch:D,_getDirty:b,_updateValid:_,_removeUnmounted:F,_updateFieldArray:j,_getFieldArray:R,_reset:Be,_updateFormState:gt,_subjects:V,_proxyFormState:x,get _fields(){return n},get _formValues(){return d},get _state(){return g},set _state(t){g=t},get _defaultValues(){return l},get _names(){return v},set _names(t){v=t},get _formState(){return r},set _formState(t){r=t},get _options(){return s},set _options(t){s={...s,...t}}},trigger:ie,register:Ae,handleSubmit:dt,watch:ft,setValue:J,getValues:Re,reset:Pe,resetField:yt,clearErrors:ot,unregister:be,setError:ct,setFocus:ht,getFieldState:Ue}}function Pt(e={}){const i=E.useRef(),[s,r]=E.useState({isDirty:!1,isValidating:!1,isLoading:!0,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:ee(e.defaultValues)?void 0:e.defaultValues});i.current||(i.current={...Ut(e,()=>r(l=>({...l}))),formState:s});const n=i.current.control;return n._options=e,Ce({subject:n._subjects.state,next:l=>{Ze(l,n._proxyFormState,n._updateFormState,!0)&&r({...n._formState})}}),E.useEffect(()=>{e.values&&!Q(e.values,n._defaultValues)&&n._reset(e.values,n._options.resetOptions)},[e.values,n]),E.useEffect(()=>{n._state.mount||(n._updateValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()}),i.current.formState=Ye(s,n),i.current}export{Bt as C,Pt as u};
