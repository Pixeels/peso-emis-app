import{r as l,j as a,R as b,a as e,F as E}from"./app-5a7a9fd1.js";import T from"./EstablishmentDetails-dc039888.js";import L from"./EstablishmentContactDetails-b9d1c283.js";import{F as R}from"./tooltip.esm-e9f9bfaf.js";import{D as A,C as n}from"./column.esm-c8bc2da6.js";import{I as M}from"./inputtext.esm-da2b6c4b.js";import{B as s}from"./button.esm-77a3c82b.js";import V from"./Add-7e88d9de.js";import B from"./Edit-58752d74.js";import H from"./View-dda55648.js";import{D as I}from"./dialog.esm-f83e2e8e.js";import"./radiobutton.esm-b6747123.js";import"./hooks.esm-a34a9d06.js";import"./index-419cf3fb.js";import"./ripple.esm-8552c990.js";import"./dropdown.esm-bc1e0c16.js";import"./overlayservice.esm-b3a75a51.js";import"./csstransition.esm-e846696c.js";import"./Dropdown-67caba3b.js";import"./transition-cdba00be.js";import"./calendar.esm-495f5314.js";import"./InputError-04c80be7.js";function ue({employer:r,back:p,setType:u}){const[P,v]=l.useState(),[N,w]=l.useState(""),[f,k]=l.useState({global:{value:null,matchMode:R.CONTAINS}}),[c,d]=l.useState("default"),m=()=>{d("default")},[D,h]=l.useState(!1);l.useEffect(()=>{v(r.employer_vacancy_detail.filter(i=>i.is_active==1))});const S=i=>{const t=i.target.value;let _={...f};_.global.value=t,k(_),w(t)},g=()=>{h(!1)},y=i=>{h(!0),setData({id:i.id})},C=a(b.Fragment,{children:[e(s,{label:"No",icon:"pi pi-times",outlined:!0,onClick:g}),e(s,{label:"Yes",icon:"pi pi-check",severity:"danger",onClick:y})]}),[o,j]=l.useState({employer_vacancy_detail:{},employer_posting_detail:{},employer_qualification_requirement:{}}),x=i=>{r.employer_vacancy_detail.map(t=>{t.id===i.id&&(o.employer_vacancy_detail=t)}),r.employer_posting_detail.map(t=>{t.id===i.id&&(o.employer_posting_detail=t)}),r.employer_qualification_requirement.map(t=>{t.id===i.id&&(o.employer_qualification_requirement=t)}),d("edit")},J=i=>{r.employer_vacancy_detail.map(t=>{t.id===i.id&&(o.employer_vacancy_detail=t)}),r.employer_posting_detail.map(t=>{t.id===i.id&&(o.employer_posting_detail=t)}),r.employer_qualification_requirement.map(t=>{t.id===i.id&&(o.employer_qualification_requirement=t)}),d("view")},F=i=>a(b.Fragment,{children:[e(s,{icon:"pi pi-eye",rounded:!0,outlined:!0,className:"mr-2",onClick:()=>J(i)}),e(s,{icon:"pi pi-pencil",rounded:!0,outlined:!0,className:"mr-2",onClick:()=>x(i)}),e(s,{icon:"pi pi-trash",rounded:!0,outlined:!0,severity:"danger",onClick:()=>y(i)})]}),q=()=>{d("add")},W=(()=>a("div",{className:"flex flex-wrap gap-2 justify-content-between align-items-center",children:[e("h4",{className:"m-0",children:"Job Posting"}),a("div",{className:"flex gap-2",children:[e(s,{label:"New",icon:"pi pi-plus",className:"p-button-help self-end",onClick:q}),a("span",{className:"p-input-icon-left",children:[e("i",{className:"pi pi-search"}),e(M,{value:N,onChange:S,placeholder:"Keyword Search"})]})]})]}))();return a(E,{children:[e(T,{employer:r,back:p,setType:u}),e(L,{employer:r.employer_establishment_contact_detail,back:p,setType:u}),c=="default"&&a(A,{value:P,paginator:!0,header:W,rows:10,className:"mt-5",paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[10,25,50],dataKey:"id",filters:f,filterDisplay:"menu",emptyMessage:"No customers found.",currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} entries",children:[e(n,{field:"position_title",header:"Position Title",sortable:!0,filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"14rem"}}),e(n,{field:"nature_of_work",header:"Nature of Work",sortable:!0,filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"14rem"}}),e(n,{field:"place_of_work",header:"Place of Work",sortable:!0,filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"14rem"}}),e(n,{field:"salary",header:"Salary",sortable:!0,filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"14rem"}}),e(n,{field:"vacancy_count",header:"Vacancy Count",sortable:!0,filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"14rem"}}),e(n,{field:"job_description",header:"Job Description",sortable:!0,filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"14rem"}}),e(n,{body:F,exportable:!1,style:{minWidth:"10rem",display:"flex",gap:"0.5rem"}})]}),c=="add"&&e(V,{backEdit:m}),c=="view"&&e(H,{backEdit:m,jobPostings:o}),c=="edit"&&e(B,{backEdit:m,jobPostings:o}),e(I,{visible:D,style:{width:"32rem"},breakpoints:{"960px":"75vw","641px":"90vw"},header:"Confirm",modal:!0,footer:C,onHide:g,children:a("div",{className:"confirmation-content",children:[e("i",{className:"pi pi-exclamation-triangle mr-3",style:{fontSize:"2rem"}}),a("span",{children:["Are you sure you want to delete ",e("b",{}),"?"]})]})})]})}export{ue as default};
