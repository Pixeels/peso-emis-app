import{j as s,a as e}from"./app-5a7a9fd1.js";import me from"./NavigatorButton-8aa9d61f.js";import{I as a}from"./inputtext.esm-da2b6c4b.js";import{C as o}from"./calendar.esm-495f5314.js";import{u as l}from"./hooks.esm-a34a9d06.js";import{D as r}from"./dropdown.esm-bc1e0c16.js";import"./tooltip.esm-e9f9bfaf.js";import"./button.esm-77a3c82b.js";import"./ripple.esm-8552c990.js";import"./overlayservice.esm-b3a75a51.js";import"./csstransition.esm-e846696c.js";function _e({activeIndex:n,numberOfPage:y,setActiveIndex:m,counterPrevious:_}){const w=t=>{t.preventDefault(),m(n+1)},[N,S]=l(sessionStorage.getItem("companyName1"),"companyName1"),[C,k]=l(sessionStorage.getItem("address1"),"address1"),[I,E]=l(sessionStorage.getItem("position1"),"position1"),[P,A]=l(sessionStorage.getItem("inclusive1"),"inclusive1"),[D,L]=l(sessionStorage.getItem("status1"),"status1"),[F,j]=l(sessionStorage.getItem("companyName2"),"companyName2"),[R,W]=l(sessionStorage.getItem("address2"),"address2"),[B,K]=l(sessionStorage.getItem("position2"),"position2"),[O,T]=l(sessionStorage.getItem("inclusive2"),"inclusive2"),[X,q]=l(sessionStorage.getItem("status2"),"status2"),[c,d]=l(sessionStorage.getItem("companyName3"),"companyName3"),[p,x]=l(sessionStorage.getItem("address3"),"address3"),[h,g]=l(sessionStorage.getItem("position3"),"position3"),[b,v]=l(sessionStorage.getItem("inclusive3"),"inclusive3"),[f,u]=l(sessionStorage.getItem("status3"),"status3"),[z,G]=l(sessionStorage.getItem("companyName4"),"companyName4"),[H,J]=l(sessionStorage.getItem("address4"),"address4"),[M,Q]=l(sessionStorage.getItem("position4"),"position4"),[U,V]=l(sessionStorage.getItem("inclusive4"),"inclusive4"),[Y,Z]=l(sessionStorage.getItem("status4"),"status4"),[$,ee]=l(sessionStorage.getItem("companyName5"),"companyName5"),[te,se]=l(sessionStorage.getItem("address5"),"address5"),[le,ae]=l(sessionStorage.getItem("position5"),"position5"),[ie,oe]=l(sessionStorage.getItem("inclusive5"),"inclusive5"),[re,ne]=l(sessionStorage.getItem("status5"),"status5"),i=[{name:"Permanent"},{name:"Contractual"},{name:"Part-time"},{name:"Probationary"}];return s("form",{onSubmit:t=>w(t),children:[e("div",{class:"step-8",children:s("div",{class:"py-5 card border-0 rounded-0",children:[s("h4",{class:"card-header pl-0 border-0 fw-bold",children:["8. WORK EXPERIENCE (Limit to 10 year period, start with the most recent employment)"," "]}),s("div",{class:"card-body pl-0 pt-3",children:[s("div",{class:"row responsive-text-md-none",children:[e("div",{class:"col-md-4",children:e("h6",{class:"fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md",children:"Company Name"})}),e("div",{class:"col-md-8",children:s("div",{class:"row",children:[e("div",{class:"col-md-3",children:e("h6",{class:"fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md",children:"Address"})}),e("div",{class:"col-md-3",children:e("h6",{class:"fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md",children:"Position"})}),e("div",{class:"col-md-3",children:e("h6",{class:"fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md",children:"Inclusive Date"})}),e("div",{class:"col-md-3",children:e("h6",{class:"fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md",children:"Status"})})]})})]}),s("div",{class:"row mb-4",children:[s("div",{class:"col-md-4 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(a,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:N,placeholder:"Company Name",onChange:t=>S(t.target.value)})]}),e("div",{class:"col-md-8",children:s("div",{class:"row",children:[s("div",{class:"col-md-3  mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(a,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:C,placeholder:"Address",onChange:t=>k(t.target.value)})]}),s("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(a,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:I,placeholder:"Position",onChange:t=>E(t.target.value)})]}),s("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(o,{className:"form-control calendar-text-xs h-10 p-0 border-0",value:P,placeholder:"Inclusive Date",onChange:t=>A(t.value),dateFormat:"dd/mm/yy"})]}),s("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(r,{value:D,onChange:t=>L(t.value),options:i,optionLabel:"name",editable:!0,placeholder:"Select a Status",className:"form-select p-0 h-10 calendar-text-xs !text-xs pi_civil_status !text-gray-500 !py-2.5 border-light-emphasis"})]})]})})]}),s("div",{class:"row mb-4",children:[s("div",{class:"col-md-4 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"2"}),e(a,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:F,placeholder:"Company Name",onChange:t=>j(t.target.value)})]}),e("div",{class:"col-md-8",children:s("div",{class:"row",children:[s("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",placeholder:"Address",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(a,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:R,placeholder:"Address",onChange:t=>W(t.target.value)})]}),s("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(a,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:B,placeholder:"Position",onChange:t=>K(t.target.value)})]}),s("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(o,{className:"form-control h-10 calendar-text-xs p-0 border-0",value:O,placeholder:"Inclusive Date",onChange:t=>T(t.value),dateFormat:"dd/mm/yy"})]}),s("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(r,{value:X,onChange:t=>q(t.value),options:i,optionLabel:"name",editable:!0,placeholder:"Select a Status",className:"form-select p-0 calendar-text-xs h-10 !text-xs pi_civil_status !text-gray-500 !py-2.5 border-light-emphasis"})]})]})})]}),s("div",{class:"row mb-4",children:[s("div",{class:"col-md-4 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"3"}),e(a,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:c,placeholder:"Company Name",onChange:t=>d(t.target.value)})]}),e("div",{class:"col-md-8",children:s("div",{class:"row",children:[s("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(a,{className:"form-control pi_is_actively_looking_for_work !py-3.5 !text-xs !text-gray-500 border-light-emphasis",value:p,placeholder:"Address",onChange:t=>x(t.target.value)})]}),s("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(a,{className:"form-control pi_is_actively_looking_for_work !py-3.5 !text-xs !text-gray-500 border-light-emphasis",value:h,placeholder:"Position",onChange:t=>g(t.target.value)})]}),s("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(o,{className:"form-control calendar-text-xs h-10 p-0 border-0",placeholder:"Inclusive Date",value:b,onChange:t=>v(t.value),dateFormat:"dd/mm/yy"})]}),s("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(r,{value:f,onChange:t=>u(t.value),options:i,optionLabel:"name",editable:!0,placeholder:"Select a Status",className:"form-select p-0 calendar-text-xs h-10 !text-xs pi_civil_status !text-gray-500 !py-2.5 border-light-emphasis"})]})]})})]}),s("div",{class:"row mb-4",children:[s("div",{class:"col-md-4 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"4"}),e(a,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:c,placeholder:"Company Name",onChange:t=>d(t.target.value)})]}),e("div",{class:"col-md-8",children:s("div",{class:"row",children:[s("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(a,{className:"form-control pi_is_actively_looking_for_work !py-3.5 !text-xs !text-gray-500 border-light-emphasis",value:p,placeholder:"Address",onChange:t=>x(t.target.value)})]}),s("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(a,{className:"form-control pi_is_actively_looking_for_work !py-3.5 !text-xs !text-gray-500 border-light-emphasis",value:h,placeholder:"Position",onChange:t=>g(t.target.value)})]}),s("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(o,{placeholder:"Inclusive Date",className:"form-control calendar-text-xs h-10 p-0 border-0",value:b,onChange:t=>v(t.value),dateFormat:"dd/mm/yy"})]}),s("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(r,{value:f,onChange:t=>u(t.value),options:i,optionLabel:"name",editable:!0,placeholder:"Select a Status",className:"form-select calendar-text-xs p-0 h-10 !text-xs pi_civil_status !text-gray-500 !py-2.5 border-light-emphasis"})]})]})})]}),s("div",{class:"row mb-4",children:[s("div",{class:"col-md-4 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"5"}),e(a,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:z,placeholder:"Company Name",onChange:t=>G(t.target.value)})]}),e("div",{class:"col-md-8",children:s("div",{class:"row",children:[s("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(a,{className:"form-control pi_is_actively_looking_for_work !py-4.5 !text-xs !text-gray-500 border-light-emphasis",value:H,placeholder:"Address",onChange:t=>J(t.target.value)})]}),s("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(a,{className:"form-control pi_is_actively_looking_for_work !py-4.5 !text-xs !text-gray-500 border-light-emphasis",value:M,placeholder:"Position",onChange:t=>Q(t.target.value)})]}),s("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(o,{className:"form-control calendar-text-xs h-10 p-0 border-0",value:U,placeholder:"Inclusive Date",onChange:t=>V(t.value),dateFormat:"dd/mm/yy"})]}),s("div",{class:"col-md-3 mb-4 calendar-text-xs   d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(r,{value:Y,onChange:t=>Z(t.value),options:i,optionLabel:"name",editable:!0,placeholder:"Select a Status",className:"form-select h-10 calendar-text-xs p-0 !text-xs pi_civil_status !text-gray-500 !py-2.5 border-light-emphasis"})]})]})})]}),s("div",{class:"row mb-4",children:[s("div",{class:"col-md-4 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"6"}),e(a,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:$,placeholder:"Company name",onChange:t=>ee(t.target.value)})]}),e("div",{class:"col-md-8",children:s("div",{class:"row",children:[s("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(a,{className:"form-control pi_is_actively_looking_for_work !py-5.5 !text-xs !text-gray-500 border-light-emphasis",value:te,placeholder:"Address",onChange:t=>se(t.target.value)})]}),s("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(a,{className:"form-control pi_is_actively_looking_for_work !py-5.5 !text-xs !text-gray-500 border-light-emphasis",value:le,placeholder:"Position",onChange:t=>ae(t.target.value)})]}),s("div",{class:"col-md-3 mb-4  d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(o,{className:"form-control calendar-text-xs h-10 p-0 border-0",value:ie,placeholder:"Inclusive Date",onChange:t=>oe(t.value),dateFormat:"dd/mm/yy"})]}),s("div",{class:"col-md-3 mb-4 calendar-text-xs d-flex flex-row align-items-center gap-3 ",children:[e("label",{for:"inputEmail4",class:"form-label !text-xs responsive-visibility-md  !text-gray-600 mb-0 fw-bold text-light-emphasis",children:"1"}),e(r,{value:re,onChange:t=>ne(t.value),options:i,optionLabel:"name",editable:!0,placeholder:"Select a Status",className:"form-select h-10 calendar-text-xs p-0 !text-xs pi_civil_status !text-gray-500 !py-2.5 border-light-emphasis"})]})]})})]})]})]})}),e(me,{activeIndex:n,numberOfPage:y,setActiveIndex:m,counterPrevious:_})]})}export{_e as default};
