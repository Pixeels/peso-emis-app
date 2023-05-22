import{_ as f,r as d,j as s,F as x,a as l}from"./app-02827c05.js";import{I as m}from"./inputtext.esm-950eb863.js";import{R as n}from"./radiobutton.esm-fdd6201f.js";import{B as g}from"./button.esm-881a1c71.js";import"./index-419cf3fb.js";import{c as o}from"./hooks.esm-6c11bdbf.js";import"./tooltip.esm-8d9315b9.js";import"./ripple.esm-d12888c2.js";function F({employer:r,back:v,setType:h}){const{data:e,setData:a,post:b,reset:u,processing:_,errors:N}=f({email_address:r.email_address,fax_number:r.fax_number,fullname:r.fullname,mobile_number:r.mobile_number,position:r.position,telephone_number:r.telephone_number,title:r.title,employer_id:r.employer_id,id:r.id});d.useEffect(()=>{console.log(e)},[]);const[i,c]=d.useState(!1),p=t=>{c(!0),e.establishment_accronym&&e.establishment_name&&e.is_authorization_accepted&&e.line_of_business&&e.total_work_force&&e.TIN_number&&e.e_signature&&e.employer_type&&b("/api/update-employer-establishment-details",{forceFormData:!0,onSuccess:()=>{console.log("success"),u(),c(!1),h("default")},onError:()=>{}})};return s(x,{children:[l("div",{class:"step-1",children:s("div",{class:"card rounded-0 border-0",children:[l("div",{class:" bg-light mb-2 font-bold mt-10",children:l("div",{className:"flex justify-between",children:l("h4",{class:"card-title fw-bold",children:"II. ESTABLISHMENT CONTACT DETAILS"})})}),s("div",{class:"card-body row",children:[s("div",{class:"col-md-12",children:[s("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:["Title:",l("span",{className:"text-red-500",children:"*"})]}),s("div",{class:"row",children:[l("div",{class:"col-md-1",children:s("div",{className:"flex flex-nowrap items-center",children:[l(n,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"Mr.",checked:e.title==="Mr.",onChange:t=>a("title",t.target.value)}),l("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Mr."})]})}),l("div",{class:"col-md-1",children:s("div",{className:"flex flex-nowrap items-center",onClick:t=>setOtherTitle(!1),children:[l(n,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"Ms.",checked:e.title==="Ms.",onChange:t=>a("title",t.target.value)}),l("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Ms."})]})}),l("div",{class:"col-md-1",children:s("div",{className:"flex flex-nowrap items-center",onClick:t=>setOtherTitle(!1),children:[l(n,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"Mrs.",checked:e.title==="Mrs.",onChange:t=>a("title",t.target.value)}),l("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Mrs."})]})}),l("div",{class:"col-md-9",children:s("div",{className:"flex flex-nowrap items-center",children:[l(n,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",value:"Others (please specify):",checked:e.title!=="Others (please specify):"&&e.title!=="Mrs."&&e.title!=="Ms."&&e.title!=="Mr.",onChange:t=>a("title",t.target.value)}),l("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Others (please specify):"})]})}),i&&(e.title==""||e.title==null)&&l(InputError,{message:"Establishment Name is required!",className:"mt-2 text-xs"})]})]}),s("div",{class:"col-md-6 mb-4",children:[l("label",{for:"inputEmail4",class:"form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis",children:"Contact Person (Full Name):"}),l(m,{value:e.fullname,className:`form-control !text-xs !py-2.5 ${o({"p-invalid":i&&(e.fullname==""||e.fullname==null)})} !text-gray-500 border-light-emphasis establishment-name`,onChange:t=>a("fullname",t.target.value)}),i&&(e.fullname==""||e.fullname==null)&&l(InputError,{message:"Contact Person is required!",className:"mt-2 text-xs"})]}),s("div",{class:"col-md-6 mb-4",children:[l("label",{for:"inputEmail4",class:"form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis",children:"Position:"}),l(m,{value:e.position,className:`form-control !text-xs !py-2.5 ${o({"p-invalid":i&&(e.position==""||e.position==null)})} !text-gray-500 border-light-emphasis establishment-name`,onChange:t=>a("position",t.target.value)}),i&&(e.position==""||e.position==null)&&l(InputError,{message:"Position is required!",className:"mt-2 text-xs"})]}),s("div",{class:"col-md-6 mb-4",children:[l("label",{for:"inputEmail4",class:"form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis",children:"Telephone Number:"}),l(m,{value:e.telephone_number,className:"form-control !text-xs !py-2.5  !text-gray-500 border-light-emphasis establishment-name",onChange:t=>a("telephone_number",t.target.value)})]}),s("div",{class:"col-md-6 mb-4",children:[l("label",{for:"inputEmail4",class:"form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis",children:"Mobile Number:"}),l(m,{value:e.mobile_number,className:`form-control !text-xs !py-2.5 ${o({"p-invalid":i&&(e.mobile_number==""||e.mobile_number==null)})} !text-gray-500 border-light-emphasis establishment-name`,onChange:t=>a("mobile_number",t.target.value)}),i&&(e.mobile_number==""||e.mobile_number==null)&&l(InputError,{message:"Mobile Number is required!",className:"mt-2 text-xs"})]}),s("div",{class:"col-md-6 mb-4",children:[l("label",{for:"inputEmail4",class:"form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis",children:"Fax Number:"}),l(m,{value:e.fax_number,className:"form-control !text-xs !py-2.5  !text-gray-500 border-light-emphasis establishment-name",onChange:t=>a("fax_number",t.target.value)})]}),s("div",{class:"col-md-6 mb-4",children:[l("label",{for:"inputEmail4",class:"form-label !text-xs  !text-gray-400 fw-bold text-light-emphasis",children:"Email Adress:"}),l(m,{value:e.email_address,className:`form-control !text-xs !py-2.5 ${o({"p-invalid":i&&(e.email_address==""||e.email_address==null)})} !text-gray-500 border-light-emphasis establishment-name`,onChange:t=>a("email_address",t.target.value)}),i&&(e.email_address==""||e.email_address==null)&&l(InputError,{message:"Email Address is required!",className:"mt-2 text-xs"})]}),l("div",{class:"col-md-12 mb-4"})]})]})}),l(g,{className:"mr-2 w-20",label:"Save",onClick:()=>p()})]})}export{F as default};
