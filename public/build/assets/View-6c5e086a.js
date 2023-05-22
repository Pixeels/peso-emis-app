import{j as l,a as e}from"./app-02827c05.js";import"./Dropdown-df7f1dfa.js";import{I as i}from"./inputtext.esm-950eb863.js";import{B as d}from"./button.esm-881a1c71.js";import{C as r}from"./calendar.esm-63fe80ee.js";import{R as c}from"./radiobutton.esm-fdd6201f.js";import"./transition-9652aa34.js";import"./tooltip.esm-8d9315b9.js";import"./hooks.esm-6c11bdbf.js";import"./ripple.esm-d12888c2.js";import"./overlayservice.esm-a7599efe.js";import"./csstransition.esm-1e1c9630.js";function q({props:o,backEdit:s,setType:n,jobPostings:a}){return l("div",{className:"card my-5 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:[e("div",{class:"step-3",children:l("div",{class:"card rounded-0 border-0",children:[l("div",{class:" bg-light mb-2 font-bold mt-10 flex justify-between",children:[e("h4",{class:"card-title fw-bold",children:"III. VACANCY DETAILS"}),e(d,{label:"Back",icon:"pi pi-arrow-left",className:"p-button-help self-end",onClick:s})]}),l("div",{class:"card-body row",children:[l("div",{class:"col-md-6",children:[l("div",{class:"col-md-12 mb-4",children:[e("label",{for:"inputEmail4",className:"form-label !text-xs  !text-gray-900 fw-bold text-light-emphasis",children:"Position Title:"}),e(i,{disabled:!0,value:a.employer_vacancy_detail.position_title,className:"form-control p-error !text-xs !py-2.5 !text-gray-500 border-light-emphasis establishment-name"})]}),l("div",{class:"col-md-12 mb-4",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs text-gray-400 fw-bold text-light-emphasis",children:"Job Description:"}),e("div",{class:"form-floating",children:e("textarea",{class:"form-control text-xs text-gray-500 vacancy-job-description",placeholder:"Leave a comment here",id:"floatingTextarea2",style:{height:"250px"},children:a.employer_vacancy_detail.job_description})})]})]}),e("div",{class:"col-md-6",children:l("div",{class:"row",children:[l("div",{class:"col-md-12 mb-4",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-900 fw-bold text-light-emphasis",children:"Nature of Work:"}),l("div",{class:"row",children:[l("div",{class:"col-md-6",children:[l("div",{class:"form-check",children:[e("input",{class:"form-check-input vacancy-nature-of-work  border-light-emphasis ",name:"vacancy-nature-of-work[]",type:"checkbox",disabled:!0,value:"Permanent",id:"vacancy-nature-of-work",checked:a.employer_vacancy_detail.nature_of_work.includes("Permanent")}),e("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"Permanent"})]}),l("div",{class:"form-check",children:[e("input",{class:"form-check-input vacancy-nature-of-work  border-light-emphasis ",name:"vacancy-nature-of-work[]",type:"checkbox",disabled:!0,value:"Contractual",id:"vacancy-nature-of-work",checked:a.employer_vacancy_detail.nature_of_work.includes("Contractual")}),e("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"Contractual"})]}),l("div",{class:"form-check",children:[e("input",{class:"form-check-input vacancy-nature-of-work  border-light-emphasis ",name:"vacancy-nature-of-work[]",type:"checkbox",disabled:!0,value:"Project-based",id:"vacancy-nature-of-work",checked:a.employer_vacancy_detail.nature_of_work.includes("Project-based")}),e("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"Project-based"})]})]}),l("div",{class:"col-md-6",children:[l("div",{class:"form-check",children:[e("input",{class:"form-check-input vacancy-nature-of-work  border-light-emphasis ",name:"vacancy-nature-of-work[]",type:"checkbox",disabled:!0,value:"Internship / OJT",id:"vacancy-nature-of-work",checked:a.employer_vacancy_detail.nature_of_work.includes("Internship / OJT")}),e("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"Internship / OJT"})]}),l("div",{class:"form-check",children:[e("input",{class:"form-check-input vacancy-nature-of-work  border-light-emphasis ",name:"vacancy-nature-of-work[]",type:"checkbox",disabled:!0,value:"Part-time",id:"vacancy-nature-of-work",checked:a.employer_vacancy_detail.nature_of_work.includes("Part-time")}),e("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"Part-time"})]}),l("div",{class:"form-check",children:[e("input",{class:"form-check-input vacancy-nature-of-work  border-light-emphasis ",name:"vacancy-nature-of-work[]",type:"checkbox",disabled:!0,value:"Work from home / online-job",id:"vacancy-nature-of-work",checked:a.employer_vacancy_detail.nature_of_work.includes("Work from home / online-job")}),e("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"Work from home / online-job"})]})]})]})]}),l("div",{class:"col-md-12 mb-4",children:[l("label",{for:"inputEmail4",className:"form-label !text-xs !text-gray-900 fw-bold text-light-emphasis",children:["Place of Work:",e("span",{className:"text-red-500",children:"*"})]}),e(i,{disabled:!0,value:a.employer_vacancy_detail.place_of_work,className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis establishment-name"})]}),l("div",{class:"col-md-12 mb-4",children:[l("label",{for:"inputEmail4",className:"form-label !text-xs  !text-gray-900 fw-bold text-light-emphasis",children:["Salary:",e("span",{className:"text-red-500",children:"*"})]}),e(i,{disabled:!0,value:a.employer_vacancy_detail.salary,className:"form-control !text-xs !py-2.5  !text-gray-500 border-light-emphasis establishment-name"})]}),l("div",{class:"col-md-12 mb-4",children:[l("label",{for:"inputEmail4",className:"form-label !text-xs  !text-gray-900 fw-bold text-light-emphasis",children:["Vacancy Count:",e("span",{className:"text-red-500",children:"*"})]}),e(i,{disabled:!0,value:a.employer_vacancy_detail.vacancy_count,className:"form-control !text-xs !py-2.5  !text-gray-500 border-light-emphasis establishment-name"})]})]})}),e("div",{class:"col-md-12 mb-4"})]})]})}),e("div",{class:"step-4",children:l("div",{class:"card rounded-0 border-0",children:[e("div",{class:" bg-light mb-2 font-bold mt-10",children:e("h4",{class:"card-title fw-bold",children:"IV. QUALIFICATION REQUIREMENTS"})}),l("div",{class:"card-body row",children:[l("div",{class:"col-md-6",children:[l("div",{class:"col-md-12 mb-4",children:[l("label",{for:"inputEmail4",className:"form-label !text-xs $ !text-gray-900 fw-bold text-light-emphasis",children:["Work Experience:",e("span",{className:"text-red-500",children:"*"})]}),e(i,{disabled:!0,value:a.employer_qualification_requirement.work_of_experience,className:"form-control !text-xs !py-2.5  !text-gray-500 border-light-emphasis establishment-name"})]}),l("div",{class:"col-md-12 mb-4",children:[l("label",{for:"inputEmail4",className:"form-label !text-xs !text-gray-900 fw-bold text-light-emphasis",children:["Religion:",e("span",{className:"text-red-500",children:"*"})]}),e(i,{disabled:!0,value:a.employer_qualification_requirement.religion,className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis establishment-name"})]}),l("div",{class:"col-md-12 mb-4",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs text-gray-400 fw-bold text-light-emphasis",children:"Other Qualifications:"}),e("div",{class:"form-floating",children:e("textarea",{class:"form-control text-xs text-gray-500 other-qualification",placeholder:"Leave a comment here",id:"floatingTextarea2",style:{height:"197px"},disabledonClick:t=>setData("otherQualifications",t.target.value),children:a.employer_qualification_requirement.other_qualification})})]}),l("div",{class:"col-md-12 mb-4",children:[l("label",{for:"inputEmail4",className:"form-label !text-xs  !text-gray-900 fw-bold text-light-emphasis",children:["License:",e("span",{className:"text-red-500",children:"*"})]}),e(i,{disabled:!0,value:a.employer_qualification_requirement.license,className:"form-control !text-xs !py-2.5  !text-gray-500 border-light-emphasis establishment-name"})]}),l("div",{class:"col-md-12 mb-4",children:[l("label",{for:"inputEmail4",className:"form-label !text-xs !text-gray-900 fw-bold text-light-emphasis",children:["Certification:",e("span",{className:"text-red-500",children:"*"})]}),e(i,{disabled:!0,value:a.employer_qualification_requirement.certification,className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis establishment-name"})]}),l("div",{class:"col-md-12 mb-4",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-900 fw-bold text-light-emphasis",children:"Accepts:"}),l("div",{class:"row",children:[l("div",{class:"col-md-6",children:[l("div",{class:"form-check",children:[e("input",{class:"form-check-input border-light-emphasis qnof",type:"checkbox",disabled:!0,value:"PESO",id:"qnof",name:"qnof",checked:a.employer_qualification_requirement.nature_of_work.includes("PESO")}),e("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"PESO"})]}),l("div",{class:"form-check",children:[e("input",{class:"form-check-input border-light-emphasis qnof",type:"checkbox",disabled:!0,value:"SPES",id:"qnof",name:"qnof",checked:a.employer_qualification_requirement.nature_of_work.includes("SPES")}),e("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"SPES"})]}),l("div",{class:"form-check",children:[e("input",{class:"form-check-input border-light-emphasis qnof",type:"checkbox",disabled:!0,value:"GIP",id:"qnof",name:"qnof",checked:a.employer_qualification_requirement.nature_of_work.includes("GIP")}),e("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"GIP"})]})]}),l("div",{class:"col-md-6",children:[l("div",{class:"form-check",children:[e("input",{class:"form-check-input border-light-emphasis qnof",type:"checkbox",disabled:!0,value:"Job Start Philippines",id:"qnof",name:"qnof",checked:a.employer_qualification_requirement.nature_of_work.includes("Job Start Philippines")}),e("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"JobStart Philippines"})]}),l("div",{class:"form-check",children:[e("input",{class:"form-check-input border-light-emphasis qnof",type:"checkbox",disabled:!0,value:"K-12 AMP",id:"qnof",name:"qnof",checked:a.employer_qualification_requirement.nature_of_work.includes("K-12 AMP")}),e("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"K-12 AMP"})]}),l("div",{class:"form-check",children:[e("input",{class:"form-check-input border-light-emphasis qnof",type:"checkbox",disabled:!0,value:"Trabajo",id:"qnof",name:"qnof",checked:a.employer_qualification_requirement.nature_of_work.includes("Trabajo")}),e("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"Trabajo"})]})]})]})]})]}),e("div",{class:"col-md-6",children:l("div",{class:"row",children:[l("div",{class:"col-md-12 mb-4",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs  !text-gray-900 fw-bold text-light-emphasis",children:"Sex:"}),l("div",{class:"row",children:[e("div",{class:"col-md-4",children:l("div",{className:"flex flex-nowrap items-center",children:[e(c,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",disabled:!0,value:"Male",checked:a.employer_qualification_requirement.sex==="Male"}),e("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Male"})]})}),e("div",{class:"col-md-4",children:l("div",{className:"flex flex-nowrap items-center",children:[e(c,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",disabled:!0,value:"Female",checked:a.employer_qualification_requirement.sex==="Female",disabledonChange:t=>setData("sex",t.target.value)}),e("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Female"})]})}),e("div",{class:"col-md-4",children:l("div",{className:"flex flex-nowrap items-center",children:[e(c,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",disabled:!0,value:"No Preference",checked:a.employer_qualification_requirement.sex==="No Preference",disabledonChange:t=>setData("sex",t.target.value)}),e("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"No Preference"})]})})]})]}),l("div",{class:"col-md-12 mb-4",children:[l("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-900 fw-bold text-light-emphasis",children:["Civil Status:"," "]}),l("div",{class:"row",children:[e("div",{class:"col-md-4",children:l("div",{className:"flex flex-nowrap items-center",children:[e(c,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",disabled:!0,value:"Single",checked:a.employer_qualification_requirement.civil_status==="Single"}),e("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Single"})]})}),e("div",{class:"col-md-4",children:l("div",{className:"flex flex-nowrap items-center",children:[e(c,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",disabled:!0,value:"Married",checked:a.employer_qualification_requirement.civil_status==="Married"}),e("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"Married"})]})}),e("div",{class:"col-md-4",children:l("div",{className:"flex flex-nowrap items-center",children:[e(c,{className:"form-check-input border-light-emphasis !border-0 establishment-employer-type",inputId:"f5",disabled:!0,value:"No Preference",checked:a.employer_qualification_requirement.civil_status==="No Preference"}),e("label",{htmlFor:"f5",className:"ml-1 mr-3 form-check-label !text-xs !text-gray-500 ml-1",children:"No Preference"})]})})]}),e("span",{class:"text-danger !text-xs qualification_civil_status-error"})]}),l("div",{class:"col-md-12 mb-4",children:[l("label",{for:"inputEmail4",className:"form-label !text-xs !text-gray-900 fw-bold text-light-emphasis",children:["Educational Level:",e("span",{className:"text-red-500",children:"*"})]}),e(i,{className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis establishment-name",disabled:!0,value:a.employer_qualification_requirement.educational_level})]}),l("div",{class:"col-md-12 mb-4",children:[l("label",{for:"inputEmail4",className:"form-label !text-xs  !text-gray-900 fw-bold text-light-emphasis",children:["Course or Major:",e("span",{className:"text-red-500",children:"*"})]}),e(i,{className:"form-control !text-xs !py-2.5  !text-gray-500 border-light-emphasis establishment-name",disabled:!0,value:a.employer_qualification_requirement.course_or_major})]}),l("div",{class:"col-md-12 mb-4",children:[l("label",{for:"inputEmail4",className:"form-label !text-xs  !text-gray-900 fw-bold text-light-emphasis",children:["Eligibility:",e("span",{className:"text-red-500",children:"*"})]}),e(i,{disabled:!0,value:a.employer_qualification_requirement.eligibility,className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis establishment-name"})]}),l("div",{class:"col-md-12 mb-4",children:[l("label",{for:"inputEmail4",className:"form-label !text-xs  !text-gray-900 fw-bold text-light-emphasis",children:["Language or Dialect Spoken:",e("span",{className:"text-red-500",children:"*"})]}),e(i,{disabled:!0,value:a.employer_qualification_requirement.language_or_dialect,className:"form-control !text-xs !py-2.5  !text-gray-500 border-light-emphasis establishment-name"}),e("label",{for:"inputEmail4",className:"form-label !text-xs !text-gray-900 fw-bold text-light-emphasis",children:"Preferred Residence:"}),e(i,{className:"form-control !text-xs !py-2.5  !text-gray-500 border-light-emphasis establishment-name",disabled:!0,value:a.employer_qualification_requirement.preferred_residence})]}),l("div",{class:"col-md-12 mb-4",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-900 fw-bold text-light-emphasis",children:"Accepts Disability:"}),l("div",{class:"row",children:[e("div",{class:"col-md-4",children:l("div",{class:"form-check",children:[e("input",{class:"form-check-input qualification_accept_disability border-light-emphasis ",type:"radio",disabled:!0,value:"Yes",checked:a.employer_qualification_requirement.is_accept_disability=="Yes",id:"qualification_accept_disability",name:"qualification_accept_disability",onChange:()=>setData("isAcceptDisability","Yes")}),e("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"Yes"})]})}),e("div",{class:"col-md-4",children:l("div",{class:"form-check",children:[e("input",{class:"form-check-input qualification_accept_disability border-light-emphasis ",type:"radio",disabled:!0,value:"No",checked:a.employer_qualification_requirement.is_accept_disability=="No",id:"qualification_accept_disability",name:"qualification_accept_disability",onChange:()=>setData("isAcceptDisability","No")}),e("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"No"})]})})]})]}),a.employer_qualification_requirement.is_accept_disability=="Yes"&&l("div",{class:"col-md-12 mb-4",children:[l("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-900 fw-bold text-light-emphasis",children:['If "yes":'," "]}),l("div",{class:"row",children:[l("div",{class:"col-md-6",children:[l("div",{class:"form-check",children:[e("input",{class:"form-check-input qualification_accept_disability_yes border-light-emphasis ",type:"checkbox",disabled:!0,value:"Visual",id:"qualification_accept_disability_yes",name:"qualification_accept_disability_yes[]",checked:a.employer_qualification_requirement.disability_type.includes("Visual")}),e("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"Visual"})]}),l("div",{class:"form-check",children:[e("input",{class:"form-check-input qualification_accept_disability_yes border-light-emphasis ",type:"checkbox",disabled:!0,value:"Physical",id:"qualification_accept_disability_yes",name:"qualification_accept_disability_yes[]",checked:a.employer_qualification_requirement.disability_type.includes("Physical")}),e("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"Physical"})]}),l("div",{class:"form-check",children:[e("input",{class:"form-check-input qualification_accept_disability_yes border-light-emphasis ",type:"checkbox",disabled:!0,value:"Hearing",id:"qualification_accept_disability_yes",name:"qualification_accept_disability_yes[]",checked:a.employer_qualification_requirement.disability_type.includes("Hearing")}),e("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"Hearing"})]})]}),l("div",{class:"col-md-6",children:[l("div",{class:"form-check",children:[e("input",{class:"form-check-input qualification_accept_disability_yes border-light-emphasis ",type:"checkbox",disabled:!0,value:"Speech",id:"qualification_accept_disability_yes",name:"qualification_accept_disability_yes[]",checked:a.employer_qualification_requirement.disability_type.includes("Speech")}),e("label",{class:"form-check-label !text-xs fw-bold !text-gray-500 !p-0",for:"flexCheckDefault",children:"Speech"})]}),l("div",{class:"col-md-12 mb-4",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-900 fw-bold text-light-emphasis",children:"Others (please specify):"}),e("input",{type:"input",class:"form-control qualification_accept_disability_yes_others !py-2.5 !text-xs !text-gray-500 border-light-emphasis",id:"qualification_accept_disability_yes_others",name:"qualification_accept_disability_yes_others",onChange:t=>handleDisabilityAccepted("input",t)})]})]})]}),e("span",{class:"text-danger !text-xs qualification_accept_disability-type-error"})]})]})}),e("div",{class:"col-md-12 mb-4"})]})]})}),e("div",{class:" bg-light mb-2 font-bold mt-10",children:e("h4",{class:"card-title fw-bold",children:"V. POSTING DETAILS"})}),l("div",{class:"row",children:[e("div",{class:"col-md-6",children:l("div",{class:"col-md-12 mb-4",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-900 fw-bold text-light-emphasis",children:"Posting Date"}),e(r,{className:"form-control !border-0 ",disabled:!0,value:new Date(a.employer_posting_detail.posting_date)})]})}),e("div",{class:"col-md-6",children:l("div",{class:"col-md-12 mb-4",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-900 fw-bold text-light-emphasis",children:"Valid Until"}),e(r,{className:"form-control !border-0 ",disabled:!0,value:new Date(a.employer_posting_detail.valid_until)})]})})]})]})}export{q as default};
