import{r as n,R as h}from"./react-9a873dbd.js";import{C as b,B as v}from"./chart.js-d090789a.js";const y="label";function m(t,e){typeof t=="function"?t(e):t&&(t.current=e)}function B(t,e){const s=t.options;s&&e&&Object.assign(s,e)}function C(t,e){t.labels=e}function E(t,e){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:y;const o=[];t.datasets=e.map(a=>{const c=t.datasets.find(i=>i[s]===a[s]);return!c||!a.data||o.includes(c)?{...a}:(o.push(c),Object.assign(c,a),c)})}function I(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:y;const s={labels:[],datasets:[]};return C(s,t.labels),E(s,t.datasets,e),s}function K(t,e){const{height:s=150,width:o=300,redraw:a=!1,datasetIdKey:c,type:i,data:u,options:f,plugins:R=[],fallbackContent:w,updateMode:p,...j}=t,d=n.useRef(null),r=n.useRef(),l=()=>{d.current&&(r.current=new b(d.current,{type:i,data:I(u,c),options:f&&{...f},plugins:R}),m(e,r.current))},g=()=>{m(e,null),r.current&&(r.current.destroy(),r.current=null)};return n.useEffect(()=>{!a&&r.current&&f&&B(r.current,f)},[a,f]),n.useEffect(()=>{!a&&r.current&&C(r.current.config.data,u.labels)},[a,u.labels]),n.useEffect(()=>{!a&&r.current&&u.datasets&&E(r.current.config.data,u.datasets,c)},[a,u.datasets]),n.useEffect(()=>{r.current&&(a?(g(),setTimeout(l)):r.current.update(p))},[a,f,u.labels,u.datasets,p]),n.useEffect(()=>{r.current&&(g(),setTimeout(l))},[i]),n.useEffect(()=>(l(),()=>g()),[]),h.createElement("canvas",Object.assign({ref:d,role:"img",height:s,width:o},j),w)}const O=n.forwardRef(K);function T(t,e){return b.register(e),n.forwardRef((s,o)=>h.createElement(O,Object.assign({},s,{ref:o,type:t})))}const L=T("bar",v);export{L as B};
