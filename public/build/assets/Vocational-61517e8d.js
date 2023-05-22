import{r as s,j as t,F as X,a as e}from"./app-db555519.js";import{I as l}from"./inputtext.esm-3b467285.js";import{C as o}from"./calendar.esm-b16a72f6.js";import{u as a}from"./hooks.esm-bdbdd65e.js";import"./tooltip.esm-414337a4.js";import"./button.esm-94a371a8.js";import"./ripple.esm-62773535.js";import"./overlayservice.esm-8adfd5fb.js";import"./csstransition.esm-33ea5eaf.js";function ne(Z){s.useState(""),s.useState("");const[r,n]=a(sessionStorage.getItem("trainingVocationalCourse1"),"trainingVocationalCourse1"),[c,d]=a(sessionStorage.getItem("trainingVocationalCourseDuration1"),"trainingVocationalCourseDuration1"),[g,m]=a(sessionStorage.getItem("trainingVocationalCourseTrainingInstituition1"),"trainingVocationalCourseTrainingInstituition1"),[x,h]=a(sessionStorage.getItem("trainingVocationalCourseCertificateRecieved1"),"trainingVocationalCourseCertificateRecieved1"),[p,f]=a(sessionStorage.getItem("trainingVocationalCourse2"),"trainingVocationalCourse2"),[b,v]=a(sessionStorage.getItem("trainingVocationalCourseDuration2"),"trainingVocationalCourseDuration2"),[u,y]=a(sessionStorage.getItem("trainingVocationalCourseTrainingInstituition2"),"trainingVocationalCourseTrainingInstituition2"),[C,_]=a(sessionStorage.getItem("trainingVocationalCourseCertificateRecieved2"),"trainingVocationalCourseCertificateRecieved2"),[w,I]=a(sessionStorage.getItem("trainingVocationalCourse3"),"trainingVocationalCourse3"),[V,E]=a(sessionStorage.getItem("trainingVocationalCourseDuration3"),"trainingVocationalCourseDuration3"),[k,N]=a(sessionStorage.getItem("trainingVocationalCourseTrainingInstituition3"),"trainingVocationalCourseTrainingInstituition3"),[T,S]=a(sessionStorage.getItem("trainingVocationalCourseCertificateRecieved3"),"trainingVocationalCourseCertificateRecieved3"),[R,D]=a(sessionStorage.getItem("eligibilility1"),"eligibilility1"),[L,O]=a(sessionStorage.getItem("eligibililityRating1"),"eligibililityRating1"),[P,U]=a(sessionStorage.getItem("eligibililityDateOfExamination1"),"eligibililityDateOfExamination1"),[A,F]=a(sessionStorage.getItem("eligibilility2"),"eligibilility2"),[G,j]=a(sessionStorage.getItem("eligibililityRating2"),"eligibililityRating2"),[B,H]=a(sessionStorage.getItem("eligibililityDateOfExamination2"),"eligibililityDateOfExamination2"),[Y,q]=a(sessionStorage.getItem("professionalLicense1"),"professionalLicense1"),[z,J]=a(sessionStorage.getItem("professionalLicenseValidUntil1"),"professionalLicenseValidUntil1"),[K,M]=a(sessionStorage.getItem("professionalLicense2"),"professionalLicense2"),[Q,W]=a(sessionStorage.getItem("professionalLicenseValidUntil2"),"professionalLicenseValidUntil2");return t(X,{children:[e("div",{class:"step-6",children:t("div",{class:"pt-5 card border-0 rounded-0",children:[t("h4",{class:"card-header pl-0 border-0 fw-bold",children:["6. TECHNICAL/VOCATIONAL AND OTHER TRAINING (Include courses takens as part of college education)"," "]}),t("div",{class:"card-body pl-0 pt-3",children:[t("div",{class:"row",children:[e("div",{class:"col-md-3",children:e("h6",{class:"fw-bold text-dark-emphasis mb-2 !text-xs text-gray-500 !text-md",children:"TRAINING/VOCATIONAL COURSE"})}),e("div",{class:"col-md-3 responsive-text-md-none",children:e("h6",{class:"fw-bold text-dark-emphasis mb-2 !text-xs text-gray-500 !text-md",children:"Duration"})}),e("div",{class:"col-md-3 responsive-text-md-none",children:e("h6",{class:"fw-bold text-dark-emphasis mb-2 !text-xs text-gray-500 !text-md",children:"Training Institution"})}),e("div",{class:"col-md-3 responsive-text-md-none",children:e("h6",{class:"fw-bold text-dark-emphasis mb-2 !text-xs text-gray-500 !text-md",children:"Certificates Received"})})]}),t("div",{class:"row mb-4",children:[t("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(l,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:r,placeholder:"Training / Vocational Course",onChange:i=>n(i.target.value)})]}),t("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(l,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:c,placeholder:"Duration",onChange:i=>d(i.target.value)})]}),t("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(l,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:g,placeholder:"Training Instituition",onChange:i=>m(i.target.value)})]}),t("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label responsive-visibility-md !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(l,{placeholder:"(NC I, NC II, NC II, NC IV, etc)",className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:x,onChange:i=>h(i.target.value)})]})]}),t("div",{class:"row mb-4",children:[t("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"2"}),e(l,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:p,placeholder:"Training / Vocational Course",onChange:i=>f(i.target.value)})]}),t("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(l,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:b,placeholder:"Duration",onChange:i=>v(i.target.value)})]}),t("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(l,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:u,placeholder:"Training Instituition",onChange:i=>y(i.target.value)})]}),t("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(l,{placeholder:"(NC I, NC II, NC II, NC IV, etc)",className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:C,onChange:i=>_(i.target.value)})]})]}),t("div",{class:"row mb-4",children:[t("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"3"}),e(l,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:w,placeholder:"Training / Vocational Course",onChange:i=>I(i.target.value)})]}),t("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(l,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:V,placeholder:"Duration",onChange:i=>E(i.target.value)})]}),t("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(l,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:k,placeholder:"Training Instituition",onChange:i=>N(i.target.value)})]}),t("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(l,{placeholder:"(NC I, NC II, NC II, NC IV, etc)",className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:T,onChange:i=>S(i.target.value)})]})]})]})]})}),e("div",{class:"step-7",children:t("div",{class:"pb-5 card border-0 rounded-0",children:[e("h4",{class:"card-header pl-0 border-0 fw-bold",children:"7. ELIGIBILITY/ PROFESSIONAL LICENSE"}),t("div",{class:"card-body pl-0 pt-3",children:[t("div",{class:"row",children:[e("div",{class:"col-md-4",children:e("h6",{class:"fw-bold text-dark-emphasis mb-2 !text-xs text-gray-500 !text-md",children:"ELIGIBILITY (Civil Service)"})}),e("div",{class:"col-md-4 responsive-text-md-none",children:e("h6",{class:"fw-bold text-dark-emphasis mb-2 !text-xs text-gray-500 !text-md",children:"Rating"})}),e("div",{class:"col-md-4 responsive-text-md-none",children:e("h6",{class:"fw-bold text-dark-emphasis mb-2 !text-xs text-gray-500 !text-md",children:"Date of examination"})})]}),t("div",{class:"row mb-4",children:[t("div",{class:"col-md-4 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(l,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:R,placeholder:"Eligibility (Civil Service)",onChange:i=>D(i.target.value)})]}),t("div",{class:"col-md-4 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(l,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:L,placeholder:"Rating",onChange:i=>O(i.target.value)})]}),t("div",{class:"col-md-4 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(o,{className:"form-control calendar-text-xs h-10 p-0 border-0",value:P,placeholder:"Date Of Examination",onChange:i=>U(i.target.value),dateFormat:"dd/mm/yy"})]})]}),t("div",{class:"row mb-4",children:[t("div",{class:"col-md-4 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"2"}),e(l,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:A,placeholder:"Eligibility (Civil Service)",onChange:i=>F(i.target.value)})]}),t("div",{class:"col-md-4 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(l,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:G,placeholder:"Rating",onChange:i=>j(i.target.value)})]}),t("div",{class:"col-md-4 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(o,{className:"form-control h-10 p-0 border-0 calendar-text-xs",value:B,placeholder:"Date of Examination",onChange:i=>H(i.target.value),dateFormat:"dd/mm/yy"})]})]}),t("div",{class:"row",children:[e("div",{class:"col-md-6",children:e("h6",{class:"fw-bold text-dark-emphasis mb-2 !text-xs text-gray-500 !text-md",children:"PROFESSIONAL LICENSE (PRC)"})}),e("div",{class:"col-md-6 responsive-text-md-none",children:e("h6",{class:"fw-bold text-dark-emphasis mb-2 !text-xs text-gray-500 !text-md",children:"Valid Until"})})]}),t("div",{class:"row mb-6",children:[t("div",{class:"col-md-6 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(l,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:Y,placeholder:"Professional License (PRC)",onChange:i=>q(i.target.value)})]}),t("div",{class:"col-md-6 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(o,{className:"form-control h-10 p-0 border-0 calendar-text-xs",value:z,placeholder:"Valid Until",onChange:i=>J(i.value),dateFormat:"dd/mm/yy"})]})]}),t("div",{class:"row mb-6",children:[t("div",{class:"col-md-6 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"2"}),e(l,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:K,placeholder:"Professional License (PRC)",onChange:i=>M(i.target.value)})]}),t("div",{class:"col-md-6 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(o,{className:"form-control h-10 p-0 border-0 calendar-text-xs",value:Q,placeholder:"Date of Examination",onChange:i=>W(i.value),dateFormat:"dd/mm/yy"})]})]})]})]})})]})}export{ne as default};
