import{j as o,a as e}from"./app-8152747c.js";import{r}from"./react-9a873dbd.js";import{u as s,T as x,e as I}from"./primereact-81f5fb97.js";import S from"./NavigatorButton-f2b9f056.js";import{_ as w}from"./@inertiajs-ef2582a9.js";import"./jspdf-7a201d71.js";import"./@babel-e66356b2.js";import"./fflate-8981c52c.js";import"./axios-aba6f0e0.js";import"./react-dom-3eb6303a.js";import"./call-bind-2ea32180.js";import"./get-intrinsic-b9397c9a.js";import"./has-symbols-e8f3ca0e.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./scheduler-04ce0582.js";import"./laravel-vite-plugin-d10ca5e8.js";/* empty css                   */import"./deepmerge-89e33937.js";import"./qs-da11641f.js";import"./side-channel-9a8f457d.js";import"./object-inspect-4012e9c9.js";import"./nprogress-e0bc7c5f.js";import"./lodash.isequal-c571d922.js";import"./react-transition-group-0105c8fc.js";import"./dom-helpers-9a525042.js";function $({activeIndex:c,numberOfPage:m,setActiveIndex:d,counterPrevious:p}){s(sessionStorage.getItem("postingDate"),"postingDate");const[i,a]=r.useState(!1);s(sessionStorage.getItem("validUntil"),"validUntil");const{data:E,setData:h,post:f,processing:N,errors:u}=w(sessionStorage),g=r.useRef(null),b=t=>{t.preventDefault(),n&&!i&&f("/api/employers",{onSuccess:()=>{sessionStorage.clear()},onError:()=>{console.log(u)}})};r.useState(()=>{},[]);const[n,y]=s(sessionStorage.getItem("authorizationAccepted"),"authorizationAccepted"),v=(t,A)=>{let l=t.target.value.split(".").pop();l==="png"||l==="jpg"?(a(!1),sessionStorage.setItem("e_signature",JSON.stringify(t.target.files[0])),h("e_signature",t.target.files[0])):a(!0)};return o("form",{onSubmit:t=>b(t),children:[e(x,{ref:g}),e("div",{class:"step-5",children:o("div",{class:"py-5 card border-0 rounded-0",children:[e("h4",{class:"card-header pl-0 border-0 text-center fw-bold mt-5",children:"CERTIFICATION/AUTHORIZATION"}),e("div",{class:"card-body pl-0 pt-3",children:o("div",{class:"row",children:[e("div",{className:"col-md-1 flex justify-end",children:e(I,{className:"mr-3",onChange:t=>y(t.checked),checked:n})}),e("div",{className:"col-md-11",children:e("h6",{class:" !text-gray-500",children:"This is to certify that all data/information that I have provided in this form are true to the best of my knowledge.This Is also to authorized the DOLE to include my profile in the PESO Employment Information System , which ia a subsystem of the PhilJobNet. It is understood that my name shall be made available to employers who have access to the Registry. I am also aware that DOLE is not obliged to seek employment on my behalf."})})]})}),e("div",{class:"row mt-5",children:e("div",{class:"flex justify-center",children:o("div",{class:"mb-3 w-96",children:[e("label",{for:"formFile",class:"form-label inline-block mb-2 text-gray-700",children:"Upload applicant signature"}),e("input",{class:`form-control
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      upload-applicant-signature
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`,type:"file",id:"formFile",onChange:t=>v(t)}),i&&e("span",{className:"text-red-500 text-xs",children:"File must be png or jpg."})]})})})]})}),e(S,{activeIndex:c,numberOfPage:m,setActiveIndex:d,counterPrevious:p})]})}export{$ as default};
