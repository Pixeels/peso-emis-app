import{r as t,j as o,F as f,a}from"./app-02827c05.js";import{I as c}from"./inputtext.esm-950eb863.js";import"./tooltip.esm-8d9315b9.js";import"./hooks.esm-6c11bdbf.js";function q({stateValue:u,stateMethod:m,label:s,isRequired:p}){const[r,l]=t.useState(!1),[i,n]=t.useState(!1),x=e=>{m(e.target.value),e.target.value===""?l(!0):l(!1)};return t.useEffect(()=>{n(p!==!1)},[]),o(f,{children:[o("label",{for:"inputEmail4",className:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:[s,a("span",{className:"text-red-500",children:"*"})]}),a(c,{className:`form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis establishment-name ${r&&i&&"p-invalid"}`,onChange:e=>x(e),value:u}),a("span",{className:"text-danger !text-xs establishment-name-error",children:r&&i&&s+" is required"})]})}export{q as default};
