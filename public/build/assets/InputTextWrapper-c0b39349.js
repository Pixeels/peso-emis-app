<<<<<<< HEAD:public/build/assets/InputTextWrapper-8abe5064.js
import{r as t,j as o,F as f,a}from"./app-795d5ab7.js";import{I as c}from"./inputtext.esm-3956e564.js";import"./tooltip.esm-6a5d9820.js";import"./hooks.esm-336a0b9f.js";function q({stateValue:u,stateMethod:m,label:s,isRequired:p}){const[r,l]=t.useState(!1),[i,n]=t.useState(!1),x=e=>{m(e.target.value),e.target.value===""?l(!0):l(!1)};return t.useEffect(()=>{n(p!==!1)},[]),o(f,{children:[o("label",{for:"inputEmail4",className:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:[s,a("span",{className:"text-red-500",children:"*"})]}),a(c,{className:`form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis establishment-name ${r&&i&&"p-invalid"}`,onChange:e=>x(e),value:u}),a("span",{className:"text-danger !text-xs establishment-name-error",children:r&&i&&s+" is required"})]})}export{q as default};
=======
import{r as t,j as o,F as f,a}from"./app-e50456e4.js";import{I as c}from"./inputtext.esm-05b5c608.js";import"./tooltip.esm-356fa9bd.js";import"./hooks.esm-af47eb61.js";function q({stateValue:u,stateMethod:m,label:s,isRequired:p}){const[r,l]=t.useState(!1),[i,n]=t.useState(!1),x=e=>{m(e.target.value),e.target.value===""?l(!0):l(!1)};return t.useEffect(()=>{n(p!==!1)},[]),o(f,{children:[o("label",{for:"inputEmail4",className:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:[s,a("span",{className:"text-red-500",children:"*"})]}),a(c,{className:`form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis establishment-name ${r&&i&&"p-invalid"}`,onChange:e=>x(e),value:u}),a("span",{className:"text-danger !text-xs establishment-name-error",children:r&&i&&s+" is required"})]})}export{q as default};
>>>>>>> 733947bd3fffb87bf8c50a80ad7ca2bbe45d634a:public/build/assets/InputTextWrapper-c0b39349.js
