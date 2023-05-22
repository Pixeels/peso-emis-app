import{r as n,j as t,a as e}from"./app-db555519.js";import te from"./NavigatorButton-64aee707.js";import{I as l}from"./inputtext.esm-3b467285.js";import{C as o}from"./calendar.esm-b16a72f6.js";import{u as a}from"./hooks.esm-bdbdd65e.js";import"./tooltip.esm-414337a4.js";import"./button.esm-94a371a8.js";import"./ripple.esm-62773535.js";import"./overlayservice.esm-8adfd5fb.js";import"./csstransition.esm-33ea5eaf.js";function xe({activeIndex:s,numberOfPage:c,setActiveIndex:r,counterPrevious:d}){const g=i=>{i.preventDefault(),r(s+1)};n.useState(""),n.useState("");const[m,x]=a(sessionStorage.getItem("trainingVocationalCourse1"),"trainingVocationalCourse1"),[h,f]=a(sessionStorage.getItem("trainingVocationalCourseDuration1"),"trainingVocationalCourseDuration1"),[p,b]=a(sessionStorage.getItem("trainingVocationalCourseTrainingInstituition1"),"trainingVocationalCourseTrainingInstituition1"),[u,v]=a(sessionStorage.getItem("trainingVocationalCourseCertificateRecieved1"),"trainingVocationalCourseCertificateRecieved1"),[y,C]=a(sessionStorage.getItem("trainingVocationalCourse2"),"trainingVocationalCourse2"),[_,w]=a(sessionStorage.getItem("trainingVocationalCourseDuration2"),"trainingVocationalCourseDuration2"),[I,V]=a(sessionStorage.getItem("trainingVocationalCourseTrainingInstituition2"),"trainingVocationalCourseTrainingInstituition2"),[E,N]=a(sessionStorage.getItem("trainingVocationalCourseCertificateRecieved2"),"trainingVocationalCourseCertificateRecieved2"),[k,T]=a(sessionStorage.getItem("trainingVocationalCourse3"),"trainingVocationalCourse3"),[S,R]=a(sessionStorage.getItem("trainingVocationalCourseDuration3"),"trainingVocationalCourseDuration3"),[D,L]=a(sessionStorage.getItem("trainingVocationalCourseTrainingInstituition3"),"trainingVocationalCourseTrainingInstituition3"),[O,P]=a(sessionStorage.getItem("trainingVocationalCourseCertificateRecieved3"),"trainingVocationalCourseCertificateRecieved3"),[U,A]=a(sessionStorage.getItem("eligibilility1"),"eligibilility1"),[F,G]=a(sessionStorage.getItem("eligibililityRating1"),"eligibililityRating1"),[j,B]=a(sessionStorage.getItem("eligibililityDateOfExamination1"),"eligibililityDateOfExamination1"),[H,Y]=a(sessionStorage.getItem("eligibilility2"),"eligibilility2"),[q,z]=a(sessionStorage.getItem("eligibililityRating2"),"eligibililityRating2"),[J,K]=a(sessionStorage.getItem("eligibililityDateOfExamination2"),"eligibililityDateOfExamination2"),[M,Q]=a(sessionStorage.getItem("professionalLicense1"),"professionalLicense1"),[W,X]=a(sessionStorage.getItem("professionalLicenseValidUntil1"),"professionalLicenseValidUntil1"),[Z,$]=a(sessionStorage.getItem("professionalLicense2"),"professionalLicense2"),[ee,ie]=a(sessionStorage.getItem("professionalLicenseValidUntil2"),"professionalLicenseValidUntil2");return t("form",{onSubmit:i=>g(i),children:[e("div",{class:"step-6",children:t("div",{class:"pt-5 card border-0 rounded-0",children:[t("h4",{class:"card-header pl-0 border-0 fw-bold",children:["6. TECHNICAL/VOCATIONAL AND OTHER TRAINING (Include courses takens as part of college education)"," "]}),t("div",{class:"card-body pl-0 pt-3",children:[t("div",{class:"row",children:[e("div",{class:"col-md-3",children:e("h6",{class:"fw-bold text-dark-emphasis mb-2 !text-xs text-gray-500 !text-md",children:"TRAINING/VOCATIONAL COURSE"})}),e("div",{class:"col-md-3 responsive-text-md-none",children:e("h6",{class:"fw-bold text-dark-emphasis mb-2 !text-xs text-gray-500 !text-md",children:"Duration"})}),e("div",{class:"col-md-3 responsive-text-md-none",children:e("h6",{class:"fw-bold text-dark-emphasis mb-2 !text-xs text-gray-500 !text-md",children:"Training Institution"})}),e("div",{class:"col-md-3 responsive-text-md-none",children:e("h6",{class:"fw-bold text-dark-emphasis mb-2 !text-xs text-gray-500 !text-md",children:"Certificates Received"})})]}),t("div",{class:"row mb-4",children:[t("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(l,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:m,placeholder:"Training / Vocational Course",onChange:i=>x(i.target.value)})]}),t("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(l,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:h,placeholder:"Duration",onChange:i=>f(i.target.value)})]}),t("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(l,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:p,placeholder:"Training Instituition",onChange:i=>b(i.target.value)})]}),t("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label responsive-visibility-md !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(l,{placeholder:"(NC I, NC II, NC II, NC IV, etc)",className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:u,onChange:i=>v(i.target.value)})]})]}),t("div",{class:"row mb-4",children:[t("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"2"}),e(l,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:y,placeholder:"Training / Vocational Course",onChange:i=>C(i.target.value)})]}),t("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(l,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:_,placeholder:"Duration",onChange:i=>w(i.target.value)})]}),t("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(l,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:I,placeholder:"Training Instituition",onChange:i=>V(i.target.value)})]}),t("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(l,{placeholder:"(NC I, NC II, NC II, NC IV, etc)",className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:E,onChange:i=>N(i.target.value)})]})]}),t("div",{class:"row mb-4",children:[t("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"3"}),e(l,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:k,placeholder:"Training / Vocational Course",onChange:i=>T(i.target.value)})]}),t("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(l,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:S,placeholder:"Duration",onChange:i=>R(i.target.value)})]}),t("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(l,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:D,placeholder:"Training Instituition",onChange:i=>L(i.target.value)})]}),t("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(l,{placeholder:"(NC I, NC II, NC II, NC IV, etc)",className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:O,onChange:i=>P(i.target.value)})]})]})]})]})}),e("div",{class:"step-7",children:t("div",{class:"pb-5 card border-0 rounded-0",children:[e("h4",{class:"card-header pl-0 border-0 fw-bold",children:"7. ELIGIBILITY/ PROFESSIONAL LICENSE"}),t("div",{class:"card-body pl-0 pt-3",children:[t("div",{class:"row",children:[e("div",{class:"col-md-4",children:e("h6",{class:"fw-bold text-dark-emphasis mb-2 !text-xs text-gray-500 !text-md",children:"ELIGIBILITY (Civil Service)"})}),e("div",{class:"col-md-4 responsive-text-md-none",children:e("h6",{class:"fw-bold text-dark-emphasis mb-2 !text-xs text-gray-500 !text-md",children:"Rating"})}),e("div",{class:"col-md-4 responsive-text-md-none",children:e("h6",{class:"fw-bold text-dark-emphasis mb-2 !text-xs text-gray-500 !text-md",children:"Date of examination"})})]}),t("div",{class:"row mb-4",children:[t("div",{class:"col-md-4 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(l,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:U,placeholder:"Eligibility (Civil Service)",onChange:i=>A(i.target.value)})]}),t("div",{class:"col-md-4 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(l,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:F,placeholder:"Rating",onChange:i=>G(i.target.value)})]}),t("div",{class:"col-md-4 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(o,{className:"form-control calendar-text-xs h-10 p-0 border-0",value:j,placeholder:"Date Of Examination",onChange:i=>B(i.target.value),dateFormat:"dd/mm/yy"})]})]}),t("div",{class:"row mb-4",children:[t("div",{class:"col-md-4 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"2"}),e(l,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:H,placeholder:"Eligibility (Civil Service)",onChange:i=>Y(i.target.value)})]}),t("div",{class:"col-md-4 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(l,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:q,placeholder:"Rating",onChange:i=>z(i.target.value)})]}),t("div",{class:"col-md-4 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(o,{className:"form-control h-10 p-0 border-0 calendar-text-xs",value:J,placeholder:"Date of Examination",onChange:i=>K(i.target.value),dateFormat:"dd/mm/yy"})]})]}),t("div",{class:"row",children:[e("div",{class:"col-md-6",children:e("h6",{class:"fw-bold text-dark-emphasis mb-2 !text-xs text-gray-500 !text-md",children:"PROFESSIONAL LICENSE (PRC)"})}),e("div",{class:"col-md-6 responsive-text-md-none",children:e("h6",{class:"fw-bold text-dark-emphasis mb-2 !text-xs text-gray-500 !text-md",children:"Valid Until"})})]}),t("div",{class:"row mb-6",children:[t("div",{class:"col-md-6 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(l,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:M,placeholder:"Professional License (PRC)",onChange:i=>Q(i.target.value)})]}),t("div",{class:"col-md-6 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(o,{className:"form-control h-10 p-0 border-0 calendar-text-xs",value:W,placeholder:"Valid Until",onChange:i=>X(i.value),dateFormat:"dd/mm/yy"})]})]}),t("div",{class:"row mb-6",children:[t("div",{class:"col-md-6 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"2"}),e(l,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:Z,placeholder:"Professional License (PRC)",onChange:i=>$(i.target.value)})]}),t("div",{class:"col-md-6 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(o,{className:"form-control h-10 p-0 border-0 calendar-text-xs",value:ee,placeholder:"Date of Examination",onChange:i=>ie(i.value),dateFormat:"dd/mm/yy"})]})]})]})]})}),e(te,{activeIndex:s,numberOfPage:c,setActiveIndex:r,counterPrevious:d})]})}export{xe as default};
