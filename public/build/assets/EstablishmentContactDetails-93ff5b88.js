import{_ as x,r as d,j as s,F as f,a as e}from"./app-9722631b.js";import{I as m}from"./inputtext.esm-3b821202.js";import{R as n}from"./radiobutton.esm-024036f6.js";import{B as g}from"./button.esm-1f2901ae.js";import"./index-419cf3fb.js";import{c as o}from"./hooks.esm-01741f00.js";import"./tooltip.esm-9f2393cc.js";import"./ripple.esm-e05e5718.js";function F({employer:r,back:v,setType:h}){const{data:l,setData:a,post:b,reset:u,processing:N,errors:y}=x({email_address:r.email_address,fax_number:r.fax_number,fullname:r.fullname,mobile_number:r.mobile_number,position:r.position,telephone_number:r.telephone_number,title:r.title,employer_id:r.employer_id,id:r.id});d.useEffect(()=>{console.log(l)},[]);const[i,c]=d.useState(!1),p=t=>{c(!0),b(route("update-establishment-contact-details"),{forceFormData:!0,onSuccess:()=>{console.log("success"),u(),c(!1),h("default")},onError:()=>{}})};return s(f,{children:[e("div",{class:"step-1",children:s("div",{class:"card rounded-0 border-0",children:[e("div",{class:" bg-light mb-2 font-bold mt-10",children:e("h4",{class:"card-title fw-bold",children:"II. ESTABLISHMENT CONTACT DETAILS"})}),s("div",{class:"card-body row",children:[s("div",{class:"col-md-12",children:[s("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:["Title:",e("span",{className:"text-red-500",children:"*"})]}),s("div",{class:"row",children:[e("div",{class:"col-md-1",children:s("div",{className:"flex flex-nowrap items-center",children:[e(n,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"Mr.",checked:l.title==="Mr.",onChange:t=>a("title",t.target.value)}),e("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Mr."})]})}),e("div",{class:"col-md-1",children:s("div",{className:"flex flex-nowrap items-center",onClick:t=>setOtherTitle(!1),children:[e(n,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"Ms.",checked:l.title==="Ms.",onChange:t=>a("title",t.target.value)}),e("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Ms."})]})}),e("div",{class:"col-md-1",children:s("div",{className:"flex flex-nowrap items-center",onClick:t=>setOtherTitle(!1),children:[e(n,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"Mrs.",checked:l.title==="Mrs.",onChange:t=>a("title",t.target.value)}),e("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Mrs."})]})}),e("div",{class:"col-md-9",children:s("div",{className:"flex flex-nowrap items-center",children:[e(n,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"Others (please specify):",checked:l.title!=="Others (please specify):"&&l.title!=="Mrs."&&l.title!=="Ms."&&l.title!=="Mr.",onChange:t=>a("title",t.target.value)}),e("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Others (please specify):"})]})}),i&&(l.title==""||l.title==null)&&e(InputError,{message:"Establishment Name is required!",className:"mt-2 text-xs"})]})]}),s("div",{class:"col-md-6 mb-4",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis",children:"Contact Person (Full Name):"}),e(m,{value:l.fullname,className:`form-control !text-xs !py-2.5 ${o({"p-invalid":i&&(l.fullname==""||l.fullname==null)})} !text-gray-500 border-light-emphasis establishment-name`,onChange:t=>a("fullname",t.target.value)}),i&&(l.fullname==""||l.fullname==null)&&e(InputError,{message:"Contact Person is required!",className:"mt-2 text-xs"})]}),s("div",{class:"col-md-6 mb-4",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis",children:"Position:"}),e(m,{value:l.position,className:`form-control !text-xs !py-2.5 ${o({"p-invalid":i&&(l.position==""||l.position==null)})} !text-gray-500 border-light-emphasis establishment-name`,onChange:t=>a("position",t.target.value)}),i&&(l.position==""||l.position==null)&&e(InputError,{message:"Position is required!",className:"mt-2 text-xs"})]}),s("div",{class:"col-md-6 mb-4",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis",children:"Telephone Number:"}),e(m,{value:l.telephone_number,className:"form-control !text-xs !py-2.5  !text-gray-500 border-light-emphasis establishment-name",onChange:t=>a("telephone_number",t.target.value)})]}),s("div",{class:"col-md-6 mb-4",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis",children:"Mobile Number:"}),e(m,{value:l.mobile_number,className:`form-control !text-xs !py-2.5 ${o({"p-invalid":i&&(l.mobile_number==""||l.mobile_number==null)})} !text-gray-500 border-light-emphasis establishment-name`,onChange:t=>a("mobile_number",t.target.value)}),i&&(l.mobile_number==""||l.mobile_number==null)&&e(InputError,{message:"Mobile Number is required!",className:"mt-2 text-xs"})]}),s("div",{class:"col-md-6 mb-4",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis",children:"Fax Number:"}),e(m,{value:l.fax_number,className:"form-control !text-xs !py-2.5  !text-gray-500 border-light-emphasis establishment-name",onChange:t=>a("fax_number",t.target.value)})]}),s("div",{class:"col-md-6 mb-4",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis",children:"Email Adress:"}),e(m,{value:l.email_address,className:`form-control !text-xs !py-2.5 ${o({"p-invalid":i&&(l.email_address==""||l.email_address==null)})} !text-gray-500 border-light-emphasis establishment-name`,onChange:t=>a("email_address",t.target.value)}),i&&(l.email_address==""||l.email_address==null)&&e(InputError,{message:"Email Address is required!",className:"mt-2 text-xs"})]}),e("div",{class:"col-md-12 mb-4"})]})]})}),e(g,{className:"mr-2 w-20",label:"Save",onClick:()=>p()})]})}export{F as default};
