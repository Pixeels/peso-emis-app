import{j as r,a,F as h}from"./app-8152747c.js";import{r as g}from"./react-9a873dbd.js";import{u as n,T as q,c as o,I as p}from"./primereact-81f5fb97.js";import $ from"./NavigatorButton-f2b9f056.js";import{u as V,C as u}from"./react-hook-form-20ad6bdc.js";import"./jspdf-7a201d71.js";import"./@babel-e66356b2.js";import"./fflate-8981c52c.js";import"./axios-aba6f0e0.js";import"./react-dom-3eb6303a.js";import"./call-bind-2ea32180.js";import"./get-intrinsic-b9397c9a.js";import"./has-symbols-e8f3ca0e.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./scheduler-04ce0582.js";import"./@inertiajs-ef2582a9.js";import"./deepmerge-89e33937.js";import"./qs-da11641f.js";import"./side-channel-9a8f457d.js";import"./object-inspect-4012e9c9.js";import"./nprogress-e0bc7c5f.js";import"./lodash.isequal-c571d922.js";import"./laravel-vite-plugin-d10ca5e8.js";/* empty css                   */import"./react-transition-group-0105c8fc.js";import"./dom-helpers-9a525042.js";function xe({activeIndex:f,numberOfPage:y,setActiveIndex:x,counterPrevious:k}){const[F,w]=n(sessionStorage.getItem("positionTitle"),"positionTitle"),[i,b]=g.useState(""),[J,C]=n("","natureOfWork"),[N,W]=n(sessionStorage.getItem("jobDescription"),"jobDescription"),[A,S]=n(sessionStorage.getItem("placeOfWork"),"placeOfWork"),[L,T]=n(sessionStorage.getItem("salary"),"salary"),[B,O]=n(sessionStorage.getItem("vacancyCount"),"vacancyCount"),v=g.useRef(null),P=()=>{v.current.show({severity:"success",summary:"Form Submitted",detail:I("value")})},j={value:""},{control:m,formState:{errors:l},handleSubmit:D,getValues:I,reset:M}=V({defaultValues:j}),E=e=>{e.value&&P(),C(i),w(e.positionTitle),S(e.placeOfWork),T(e.salary),O(e.vacancyCount),x(f+1)},d=e=>l[e]?a("small",{className:"p-error",children:l[e].message}):a("small",{className:"p-error",children:" "}),c=(e,t)=>{t.target.checked&&!i.includes(e)?b(i+" "+e):b(i.replace(e,""))};return r("form",{onSubmit:D(E),children:[a(q,{ref:v}),a("div",{class:"step-3",children:r("div",{class:"card rounded-0 border-0",children:[a("div",{class:" bg-light mb-2 font-bold mt-10",children:a("h4",{class:"card-title fw-bold",children:"III. VACANCY DETAILS"})}),r("div",{class:"card-body row",children:[r("div",{class:"col-md-6",children:[r("div",{class:"col-md-12 mb-4",children:[a(u,{name:"positionTitle",control:m,rules:{required:"Position Title is required."},render:({field:e,fieldState:t})=>r(h,{children:[r("label",{for:"inputEmail4",className:`form-label !text-xs ${o({"p-error":l.value})} !text-gray-400 fw-bold text-light-emphasis`,children:[" ","Position Title:",a("span",{className:"text-red-500",children:"*"})," "]}),a(p,{id:e.name,value:e.value,className:`form-control !text-xs !py-2.5 ${o({"p-invalid":t.error})} !text-gray-500 border-light-emphasis establishment-name`,onChange:s=>e.onChange(s.target.value)}),d(e.name)]})}),a("span",{class:"text-danger !text-xs  vacancy-title-error"})]}),r("div",{class:"col-md-12 mb-4",children:[a("label",{for:"inputEmail4",class:"form-label !text-xs text-gray-400 fw-bold text-light-emphasis",children:"Job Description:"}),a("div",{class:"form-floating",children:a("textarea",{class:"form-control  vacancy-job-description",placeholder:"Leave a comment here",id:"floatingTextarea2",style:{height:"250px"},onChange:e=>W(e.target.value),children:N})}),a("span",{class:"text-danger !text-xs vacancy-job-description-error"})]})]}),a("div",{class:"col-md-6",children:r("div",{class:"row",children:[r("div",{class:"col-md-12 mb-4",children:[r("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:["Nature of Work:"," "]}),r("div",{class:"row",children:[r("div",{class:"col-md-6",children:[r("div",{class:"form-check",children:[a("input",{class:"form-check-input vacancy-nature-of-work  border-light-emphasis ",name:"vacancy-nature-of-work[]",type:"checkbox",value:"Permanent",id:"vacancy-nature-of-work",onChange:e=>c("Permanent",e)}),a("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"Permanent"})]}),r("div",{class:"form-check",children:[a("input",{class:"form-check-input vacancy-nature-of-work  border-light-emphasis ",name:"vacancy-nature-of-work[]",type:"checkbox",value:"Contractual",id:"vacancy-nature-of-work",onChange:e=>c("Contractual",e)}),a("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"Contractual"})]}),r("div",{class:"form-check",children:[a("input",{class:"form-check-input vacancy-nature-of-work  border-light-emphasis ",name:"vacancy-nature-of-work[]",type:"checkbox",value:"Project-based",id:"vacancy-nature-of-work",onChange:e=>c("Project-based",e)}),a("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"Project-based"})]})]}),r("div",{class:"col-md-6",children:[r("div",{class:"form-check",children:[a("input",{class:"form-check-input vacancy-nature-of-work  border-light-emphasis ",name:"vacancy-nature-of-work[]",type:"checkbox",value:"Internship / OJT",id:"vacancy-nature-of-work",onChange:e=>c("Internship / OJT",e)}),a("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"Internship / OJT"})]}),r("div",{class:"form-check",children:[a("input",{class:"form-check-input vacancy-nature-of-work  border-light-emphasis ",name:"vacancy-nature-of-work[]",type:"checkbox",value:"Part-time",id:"vacancy-nature-of-work",onChange:e=>c("Part-time",e)}),a("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"Part-time"})]}),r("div",{class:"form-check",children:[a("input",{class:"form-check-input vacancy-nature-of-work  border-light-emphasis ",name:"vacancy-nature-of-work[]",type:"checkbox",value:"Work from home / online-job",id:"vacancy-nature-of-work",onChange:e=>c("Work from home / online-job",e)}),a("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"Work from home / online-job"})]})]}),a("span",{class:"text-danger !text-xs vacancy-nature-of-work-error"})]})]}),r("div",{class:"col-md-12 mb-4",children:[a(u,{name:"placeOfWork",control:m,rules:{required:"Place of Work is required."},render:({field:e,fieldState:t})=>r(h,{children:[r("label",{for:"inputEmail4",className:`form-label !text-xs ${o({"p-error":l.value})} !text-gray-400 fw-bold text-light-emphasis`,children:[" ","Place of Work:",a("span",{className:"text-red-500",children:"*"})," "]}),a(p,{id:e.name,value:e.value,className:`form-control !text-xs !py-2.5 ${o({"p-invalid":t.error})} !text-gray-500 border-light-emphasis establishment-name`,onChange:s=>e.onChange(s.target.value)}),d(e.name)]})}),a("span",{class:"text-danger !text-xs vacancy-place-of-work-error"})]}),r("div",{class:"col-md-12 mb-4",children:[a(u,{name:"salary",control:m,rules:{required:"Salary is required."},render:({field:e,fieldState:t})=>r(h,{children:[r("label",{for:"inputEmail4",className:`form-label !text-xs ${o({"p-error":l.value})} !text-gray-400 fw-bold text-light-emphasis`,children:[" ","Salary:",a("span",{className:"text-red-500",children:"*"})," "]}),a(p,{id:e.name,value:e.value,className:`form-control !text-xs !py-2.5 ${o({"p-invalid":t.error})} !text-gray-500 border-light-emphasis establishment-name`,onChange:s=>e.onChange(s.target.value)}),d(e.name)]})}),a("span",{class:"text-danger !text-xs vacancy-salary-error"})]}),r("div",{class:"col-md-12 mb-4",children:[a(u,{name:"vacancyCount",control:m,rules:{required:"Vacancy Count is required."},render:({field:e,fieldState:t})=>r(h,{children:[r("label",{for:"inputEmail4",className:`form-label !text-xs ${o({"p-error":l.value})} !text-gray-400 fw-bold text-light-emphasis`,children:[" ","Vacancy Count:",a("span",{className:"text-red-500",children:"*"})," "]}),a(p,{id:e.name,value:e.value,className:`form-control !text-xs !py-2.5 ${o({"p-invalid":t.error})} !text-gray-500 border-light-emphasis establishment-name`,onChange:s=>e.onChange(s.target.value)}),d(e.name)]})}),a("span",{class:"text-danger !text-xs vacancy-count-error"})]})]})}),a("div",{class:"col-md-12 mb-4"})]})]})}),a($,{activeIndex:f,numberOfPage:y,setActiveIndex:x,counterPrevious:k})]})}export{xe as default};
