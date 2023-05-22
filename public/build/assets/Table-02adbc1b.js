import{_ as S,r as o,a as e,j as t,R as v,F as m}from"./app-02827c05.js";import{F as C}from"./tooltip.esm-8d9315b9.js";import{D as k,C as a}from"./column.esm-4b38e8a8.js";import{I as T}from"./inputtext.esm-950eb863.js";import{B as l}from"./button.esm-881a1c71.js";import"./hooks.esm-6c11bdbf.js";import"./ripple.esm-d12888c2.js";import"./dropdown.esm-c58ea5a1.js";import"./overlayservice.esm-a7599efe.js";import"./csstransition.esm-1e1c9630.js";function E({applicants:d,confirmDeleteApplicant:c,viewApplicant:p,editApplicant:u,isMatches:h,handleHiredApplicantData:f}){S();const[g,y]=o.useState(""),[i,b]=o.useState({global:{value:null,matchMode:C.CONTAINS}}),x=r=>{const s=r.target.value;let n={...i};n.global.value=s,b(n),y(s)},P=()=>t("div",{className:"flex flex-wrap gap-2 justify-content-between align-items-center",children:[e("h4",{className:"m-0",children:"Applicants"}),t("span",{className:"p-input-icon-left",children:[e("i",{className:"pi pi-search"}),e(T,{value:g,onChange:x,placeholder:"Keyword Search"})]})]}),N=r=>t(v.Fragment,{children:[e(l,{icon:"pi pi-eye",rounded:!0,outlined:!0,className:"mr-2",onClick:()=>p(r)}),h==!1?t(m,{children:[e(l,{icon:"pi pi-pencil",rounded:!0,outlined:!0,className:"mr-2",onClick:()=>u(r)}),e(l,{icon:"pi pi-trash",rounded:!0,outlined:!0,severity:"danger",onClick:()=>c(r)})]}):e(m,{children:e(l,{icon:"pi pi-user-plus",rounded:!0,outlined:!0,className:"mr-2",label:"Hire",onClick:()=>f(r)})})]}),F=P();return e("div",{className:"card mt-5 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:t(k,{value:d,paginator:!0,header:F,rows:10,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[10,25,50],dataKey:"id",filters:i,filterDisplay:"menu",emptyMessage:"No Applicants found.",currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} entries",children:[e(a,{field:"surname",header:"Surname",sortable:!0,filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"14rem"}}),e(a,{field:"firstname",header:"First Name",sortable:!0,filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"14rem"}}),e(a,{field:"email_address",header:"Email Address",sortable:!0,filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"14rem"}}),e(a,{field:"sex",header:"Sex",sortable:!0,filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"6rem"}}),e(a,{body:N,exportable:!1,style:{minWidth:"12rem",display:"flex",gap:"0.5rem"}})]})})}export{E as default};
