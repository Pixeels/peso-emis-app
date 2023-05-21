import{r as t,_ as A,j as o,R as C,a as e,n as E}from"./app-5a7a9fd1.js";import{A as F}from"./AuthenticatedLayout-0b28f98a.js";import{F as M}from"./tooltip.esm-e9f9bfaf.js";import j from"./Table-6e569863.js";import{D as T}from"./dialog.esm-f83e2e8e.js";import{B as h}from"./button.esm-77a3c82b.js";import _ from"./ViewUser-5c0e57dd.js";import B from"./Edit-b73080b6.js";import"./ApplicationLogo-b47e674d.js";import"./Dropdown-67caba3b.js";import"./transition-cdba00be.js";import"./hooks.esm-a34a9d06.js";import"./column.esm-c8bc2da6.js";import"./ripple.esm-8552c990.js";import"./inputtext.esm-da2b6c4b.js";import"./dropdown.esm-bc1e0c16.js";import"./overlayservice.esm-b3a75a51.js";import"./csstransition.esm-e846696c.js";import"./InputError-04c80be7.js";import"./InputLabel-96a2cfaf.js";import"./PrimaryButton-ae84d71e.js";import"./TextInput-6d198f1b.js";function oe(i){const[x,g]=t.useState([]);t.useState(""),t.useState(!1),t.useState(!1);const[U,c]=t.useState(!1),[l,s]=t.useState(""),[a,S]=t.useState({}),{data:d,setData:n,post:p,processing:w,errors:v,reset:u}=A({name:a.name,email:a.email,password:"",password_confirmation:"",role:1});t.useState({global:{value:null,matchMode:M.CONTAINS}}),t.useEffect(()=>{g(i.users),s(i.type)},[]);const y=r=>{S(r),s("view")},f=()=>{s("default")},D=r=>{n(r),s("edit")},b=r=>{c(!0),n("user_id",r.id)},m=()=>{c(!1)},N=()=>{p(route("delete-user"),{onSuccess:()=>{u(),m()}}),console.log(d)},k=o(C.Fragment,{children:[e(h,{label:"No",icon:"pi pi-times",outlined:!0,onClick:m}),e(h,{label:"Yes",icon:"pi pi-check",severity:"danger",onClick:N})]});return o(F,{auth:i.auth,errors:i.errors,header:e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Users"}),children:[e(E,{title:"EMIS - Users"}),o("div",{className:"mt-5 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:[l=="default"&&e(j,{users:x,setType:s,editUser:D,viewUser:y,confirmDeleteUser:b}),l=="view"&&e(_,{back:f,user:a}),l=="edit"&&e(B,{back:f,user:a,data:d,setData:n,processing:w,errors:v,reset:u,post:p}),e(T,{visible:U,style:{width:"32rem"},breakpoints:{"960px":"75vw","641px":"90vw"},header:"Confirm",modal:!0,footer:k,onHide:m,children:o("div",{className:"confirmation-content",children:[e("i",{className:"pi pi-exclamation-triangle mr-3",style:{fontSize:"2rem"}}),o("span",{children:["Are you sure you want to delete ",e("b",{}),"?"]})]})})]})]})}export{oe as default};
