import{r as F,a as r,j as a,F as c}from"./app-5a7a9fd1.js";import{u as S,C as i}from"./index.esm-889b016b.js";import{c as l}from"./hooks.esm-a34a9d06.js";import{T as f}from"./toast.esm-81f16656.js";import{I as p}from"./inputtext.esm-da2b6c4b.js";import"./tooltip.esm-e9f9bfaf.js";import"./csstransition.esm-e846696c.js";import"./ripple.esm-8552c990.js";function V({children:h}){const o=F.useRef(null),d=()=>{o.current.show({severity:"success",summary:"Form Submitted",detail:g("value")})},v={value:""},{control:t,formState:{errors:s},handleSubmit:N,getValues:g,reset:x}=S({defaultValues:v}),b=e=>{e.value&&d()},u=e=>s[e]?r("small",{className:"p-error",children:s[e].message}):r("small",{className:"p-error",children:" "});return r("div",{className:"card flex justify-content-center",children:a("form",{onSubmit:N(b),children:[r(f,{ref:o}),r(i,{name:"value",control:t,rules:{required:"Name - Surname is required."},render:({field:e,fieldState:m})=>a(c,{children:[r("label",{htmlFor:e.name,className:l({"p-error":s.value})}),a("span",{className:"p-float-label",children:[r(p,{id:e.name,value:e.value,className:l({"p-invalid":m.error}),onChange:n=>e.onChange(n.target.value)}),r("label",{htmlFor:e.name,children:"Name - Surname"})]}),u(e.name)]})}),r(i,{name:"sample",control:t,rules:{required:"Name - Surname is required."},render:({field:e,fieldState:m})=>a(c,{children:[r("label",{htmlFor:e.name,className:l({"p-error":s.value})}),a("span",{className:"p-float-label",children:[r(p,{id:e.name,value:e.value,className:l({"p-invalid":m.error}),onChange:n=>e.onChange(n.target.value)}),r("label",{htmlFor:e.name,children:"Name - Surname"})]}),u(e.name)]})}),h]})})}export{V as default};
