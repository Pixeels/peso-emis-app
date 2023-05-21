import{_ as rt,r as n,a as t,j as a}from"./app-5a7a9fd1.js";import{I as o}from"./inputtext.esm-da2b6c4b.js";import{u as s}from"./hooks.esm-a34a9d06.js";import{C as ot}from"./calendar.esm-495f5314.js";import{R as c}from"./radiobutton.esm-b6747123.js";import{D as Z}from"./dropdown.esm-bc1e0c16.js";import $ from"./InputTextWrapper-fe378a8a.js";import{s as d}from"./index-4355d5a8.js";import"./tooltip.esm-e9f9bfaf.js";import"./button.esm-77a3c82b.js";import"./ripple.esm-8552c990.js";import"./overlayservice.esm-b3a75a51.js";import"./csstransition.esm-e846696c.js";import"./index-419cf3fb.js";function Nt({back:it,values:ee}){const{data:l,setData:r,post:nt,processing:ct,errors:dt}=rt(ee);n.useEffect(()=>{console.log("data"),console.log(l)},[]),s(sessionStorage.getItem("surname"),"surname"),s(sessionStorage.getItem("firstname"),"firstname"),s(sessionStorage.getItem("middlename"),"middlename"),s(sessionStorage.getItem("suffix"),"suffix"),s(sessionStorage.getItem("birthdate"),"birthdate"),s(sessionStorage.getItem("religion"),"religion"),s(sessionStorage.getItem("height"),"height"),s(sessionStorage.getItem("birthOfPlaceHouseOrStreet"),"birthOfPlaceHouseOrStreet"),s(sessionStorage.getItem("presentAddressHouseOrStreet"),"presentAddressHouseOrStreet"),s(sessionStorage.getItem("emailAddress"),"emailAddress"),s(sessionStorage.getItem("phoneNumber"),"phoneNumber"),s(sessionStorage.getItem("landlineNumber"),"landlineNumber"),s(sessionStorage.getItem("GSISNumber"),"GSISNumber"),s(sessionStorage.getItem("pagIbigNumber"),"pagIbigNumber"),s(sessionStorage.getItem("TINNumber"),"TINNumber"),s(sessionStorage.getItem("philhealthNumber"),"philhealthNumber"),s(sessionStorage.getItem("sex"),"sex"),s(sessionStorage.getItem("civilStatus"),"civilStatus"),s(sessionStorage.getItem("disability"),"disability");const[A,te]=s(sessionStorage.getItem("activelyLookingForWork"),"activelyLookingForWork"),[ae,se]=s(sessionStorage.getItem("howLongLookingForWork"),"howLongLookingForWork"),[le,re]=s(sessionStorage.getItem("noWhenToWork"),"noWhenToWork");s(sessionStorage.getItem("employedStatus"),"employedStatus"),s(sessionStorage.getItem("unEmployedStatus"),"unEmployedStatus");const[p,R]=s(sessionStorage.getItem("willingToWorkImmediately"),"willingToWorkImmediately"),[oe,ie]=s(sessionStorage.getItem("householdNumber"),"householdNumber"),[g,W]=s(sessionStorage.getItem("is4psBeneficiary"),"is4psBeneficiary"),[m,D]=s(sessionStorage.getItem("employementStatus"),"employementStatus"),[ne,ce]=s(sessionStorage.getItem("pob_regionAddr"),"pob_regionAddr"),[de,me]=s(sessionStorage.getItem("pob_provinceAddr"),"pob_provinceAddr"),[pe,ge]=s("pob_cityAddr","pob_cityAddr"),[he,ue]=s(sessionStorage.getItem("pob_barangayAddr"),"pob_barangayAddr"),[xe,be]=s(sessionStorage.getItem("pob_houseNumber_Street_Village"),"pob_houseNumber_Street_Village"),[h,fe]=n.useState([]),[u,ye]=s(sessionStorage.getItem("provinceData"),"provinceData"),[x,L]=s(sessionStorage.getItem("cityData"),"cityData"),[b,O]=s(sessionStorage.getItem("barangayData"),"barangayData"),[mt,_e]=s(sessionStorage.getItem("regionCode"),"regionCode"),F=()=>{d.regions().then(e=>{fe(e)})},ve=e=>{ce(e.target.selectedOptions[0].text),d.provinces(e.target.value).then(i=>{ye(i),L([]),O([]),_e(e.target.value)})},Se=e=>{me(e.target.selectedOptions[0].text),d.cities(e.target.value).then(i=>{L(i)})},ke=e=>{ge(e.target.selectedOptions[0].text),d.barangays(e.target.value).then(i=>{O(i)})},we=e=>{ue(e.target.selectedOptions[0].text)};n.useState(!0),n.useEffect(()=>{F()},[]);const[Ee,Ie]=s(sessionStorage.getItem("pa_regionAddr"),"pa_regionAddr"),[Ne,Ce]=s(sessionStorage.getItem("pa_provinceAddr"),"pa_provinceAddr"),[Te,Ae]=s("pa_cityAddr","pa_cityAddr"),[Re,We]=s(sessionStorage.getItem("pa_barangayAddr"),"pa_barangayAddr"),[De,Le]=s(sessionStorage.getItem("pa_houseNumber_Street_Village"),"pa_houseNumber_Street_Village"),[f,Oe]=n.useState([]),[y,Fe]=s(sessionStorage.getItem("provinceData"),"provinceData"),[_,U]=s(sessionStorage.getItem("cityData"),"cityData"),[v,V]=s(sessionStorage.getItem("barangayData"),"barangayData"),[pt,Ue]=s(sessionStorage.getItem("regionCode"),"regionCode");s(sessionStorage.getItem("employedStatusType"),"employedStatusType"),n.useState(""),s(sessionStorage.getItem("unEmployedStatusTypes"),"unEmployedStatusTypes");const P=()=>{d.regions().then(e=>{Oe(e)})},Ve=e=>{Ie(e.target.selectedOptions[0].text),d.provinces(e.target.value).then(i=>{Fe(i),U([]),V([]),Ue(e.target.value)})},Pe=e=>{Ce(e.target.selectedOptions[0].text),d.cities(e.target.value).then(i=>{U(i)})},Be=e=>{Ae(e.target.selectedOptions[0].text),d.barangays(e.target.value).then(i=>{V(i)})},He=e=>{We(e.target.selectedOptions[0].text)};n.useEffect(()=>{P()},[]);const je=[{name:"Single"},{name:"Married"},{name:"Widowed"},{name:"Seperated"},{name:"Live-in"}],Ye=[{name:"Visual"},{name:"Hearing"},{name:"Speech"},{name:"Physical"},{name:"Others"}],[Ge,B]=n.useState(!1);n.useState("");const[Me,H]=n.useState(!1);n.useState("");const[j,Y]=s(sessionStorage.getItem("employedStatusTypeWageEmployed"),"employedStatusTypeWageEmployed"),qe=e=>{Y(j!==""?"":e)},[S,G]=s(sessionStorage.getItem("employedStatusTypeSelfEmployed"),"employedStatusTypeSelfEmployed"),ze=e=>{G(S!==""?"":e),console.log(S)},[k,M]=s(sessionStorage.getItem("unEmployedStatusNewEntrant"),"unEmployedStatusNewEntrant"),Je=e=>{M(k!==""?"":e),console.log(k)},[w,q]=s(sessionStorage.getItem("unEmployedStatusFinishedContract"),"unEmployedStatusFinishedContract"),Ke=e=>{q(w!==""?"":e),console.log(w)},[E,z]=s(sessionStorage.getItem("unEmployedStatusResigned"),"unEmployedStatusResigned"),Qe=e=>{z(E!==""?"":e),console.log(E)},[I,J]=s(sessionStorage.getItem("unEmployedStatusRetired"),"unEmployedStatusRetired"),Xe=e=>{J(I!==""?"":e),console.log(I)},[N,K]=s(sessionStorage.getItem("unEmployedStatusTerminatedLocal"),"unEmployedStatusTerminatedLocal"),Ze=e=>{K(N!==""?"":e),console.log(N)},[C,Q]=s(sessionStorage.getItem("unEmployedStatusTerminatedAbroad"),"unEmployedStatusTerminatedAbroad"),$e=(e,i)=>{i.target.checked?B(!0):B(!1),Q(C!==""?"":e),console.log(C)},[et,tt]=s(sessionStorage.getItem("unEmployedStatusTerminatedAbroadValue"),"unEmployedStatusTerminatedAbroadValue"),[T,X]=s(sessionStorage.getItem("unEmployedStatusOthers"),"unEmployedStatusOthers"),at=(e,i)=>{i.target.checked?H(!0):H(!1),X(T!==""?"":e),console.log(T)},[st,lt]=s(sessionStorage.getItem("unEmployedStatusOthersValue"),"unEmployedStatusOthersValue");return t("div",{class:"step-1",children:a("div",{class:"card rounded-0 border-0",children:[a("div",{class:"card-body pb-0 row",children:[a("div",{class:"col-md-6 mb-4",children:[t("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:"Surname"}),t(o,{className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname",value:l.surname,onChange:e=>r("surname",e.target.value)}),t("span",{class:"text-danger !text-xs pi_surname-error"})]}),a("div",{class:"col-md-6 mb-4",children:[t("label",{for:"inputEmail4",class:"form-label !text-xs text-gray-400 fw-bold text-light-emphasis",children:"First Name"}),t(o,{className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname",value:l.firstname,onChange:e=>r("firstname",e.target.value)}),t("span",{class:"text-danger !text-xs pi_firstname-error"})]}),a("div",{class:"col-md-6 mb-4",children:[t("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:"Middle Name"}),t(o,{className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname",value:l.middlename,onChange:e=>r("middlename",e.target.value)}),t("span",{class:"text-danger !text-xs pi_middlename-error"})]}),a("div",{class:"col-md-6 mb-4",children:[t("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:"Suffix"}),t(o,{className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname",value:l.suffix,onChange:e=>r("suffix",e.target.value)}),t("span",{class:"text-danger !text-xs pi_suffix-error"})]}),a("div",{class:"col-md-6 mb-4",children:[t("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:"Date of Birth"}),t(ot,{className:"form-control h-10 p-0 border-0",value:new Date(l.birthdate),onChange:e=>r("birthdate",e.value)}),t("span",{class:"text-danger !text-xs pi_date_of_birth-error"})]}),a("div",{class:"col-md-6 mb-4",children:[t("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:"Religion"}),t(o,{className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname",value:l.religion,onChange:e=>r("religion",e.target.value)}),t("span",{class:"text-danger !text-xs pi_religion-error"})]}),a("div",{class:"col-md-4 mb-4",children:[t("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:"Sex"}),a("div",{class:"row",children:[t("div",{class:"col-md-6",children:a("div",{class:"form-check pl-0 flex items-center gap-2",children:[t(c,{inputId:"ingredient1",name:"sex",value:"Male",onChange:e=>r("sex",e.value),checked:l.sex==="Male"}),t("label",{class:"form-check-label !text-xs !text-gray-500",for:"exampleRadios1",children:"Male"})]})}),t("div",{class:"col-md-6",children:a("div",{class:"form-check flex  pl-0 items-center gap-2",children:[t(c,{inputId:"ingredient1",name:"sex",value:"Female",onChange:e=>r("sex",e.value),checked:l.sex==="Female"}),t("label",{class:"form-check-label !text-xs !text-gray-500",for:"exampleRadios2",children:"Female"})]})})]}),t("span",{class:"text-danger !text-xs pi_sex-error"})]}),a("div",{class:"col-md-4 mb-4",children:[t("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:"Civil Status"}),t(Z,{value:l.civil_status,onChange:e=>r("civil_status",e.value),options:je,optionLabel:"name",editable:!0,placeholder:"Select a Civil Status",className:"form-select h-10 !text-xs pi_civil_status !text-gray-500 !py-2.5 border-light-emphasis"}),t("span",{class:"text-danger !text-xs pi_civil_status-error h-10"})]}),a("div",{class:"col-md-4 mb-4",children:[t("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:"Height"}),a("div",{class:"input-group mb-3",children:[t(o,{className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname",value:l.height,onChange:e=>r("height",e.target.value)}),t("span",{class:"input-group-text !text-gray-500 !text-xs border-light-emphasis",children:"cm"})]}),t("span",{class:"text-danger !text-xs pi_height-error"})]}),t("div",{class:"col-md-4 mb-4",children:a("div",{class:"row",children:[t("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:"Are you actively looking for work?"}),a("div",{class:"row",children:[t("div",{class:"col-md-6",children:a("div",{class:"form-check pl-0 flex items-center gap-2",children:[t(c,{inputId:"ingredient1",name:"activilyLookingForWork",value:"Yes",onChange:e=>r(e.value),checked:l.is_actively_looking_for_work===1}),t("label",{class:"form-check-label !text-xs !py-2.5 !text-gray-500",for:"exampleRadios1",children:"Yes"})]})}),t("div",{class:"col-md-6",children:a("div",{class:"form-check pl-0  flex items-center gap-2",children:[t(c,{inputId:"ingredient1",name:"activilyLookingForWork",value:"No",onChange:e=>te(e.value),checked:A==="No"}),t("label",{class:"form-check-label !text-xs !py-2.5 !text-gray-500",for:"exampleRadios2",children:"No"})]})})]}),t("span",{class:"text-danger !text-xs pi_looking_for_work-error"}),A=="Yes"&&a("div",{class:"col-md-12 mb-4 is_actively_looking_for_work",children:[t("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:"How long have you been looking for work?"}),t(o,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:ae,onChange:e=>se(e.target.value)}),t("span",{class:"text-danger !text-xs pi_is_actively_looking_for_work-error"})]})]})}),a("div",{class:"col-md-4 mb-4",children:[a("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:["Willing to work immediately?"," "]}),a("div",{class:"row",children:[t("div",{class:"col-md-6",children:a("div",{class:"form-check pl-0 flex items-center gap-2",children:[t(c,{inputId:"ingredient1",name:"willingToWorkImmediately",value:"Yes",onChange:e=>R(e.value),checked:p==="Yes"}),t("label",{class:"form-check-label !text-xs !py-2.5 !text-gray-500",for:"exampleRadios1",children:"Yes"})]})}),t("div",{class:"col-md-6",children:a("div",{class:"form-check flex pl-0  items-center gap-2",children:[t(c,{inputId:"ingredient1",name:"willingToWorkImmediately",value:"No",onChange:e=>R(e.value),checked:p==="No"}),t("label",{class:"form-check-label !text-xs !py-2.5 !text-gray-500",for:"exampleRadios2",children:"No"})]})}),t("span",{class:"text-danger !text-xs pi_when_to_work-error"}),p=="No"&&a("div",{class:"col-md-12 mb-4 is_not_when_to_work",children:[t("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:"If no, when?"}),t(o,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:le,onChange:e=>re(e.target.value)}),t("span",{class:"text-danger !text-xs pi_not_when_to_work-error"})]})]})]}),a("div",{class:"col-md-4 mb-4",children:[a("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:["Are you a 4Ps beneficiary?"," "]}),a("div",{class:"row",children:[t("div",{class:"col-md-6",children:a("div",{class:"form-check pl-0 flex items-center gap-2",children:[t(c,{inputId:"ingredient1",name:"is4psBeneficiary",value:"Yes",onChange:e=>W(e.value),checked:g==="Yes"}),t("label",{class:"form-check-label !text-xs !py-2.5 !text-gray-500",for:"exampleRadios1",children:"Yes"})]})}),t("div",{class:"col-md-6",children:a("div",{class:"form-check pl-0  flex items-center gap-2",children:[t(c,{inputId:"ingredient1",name:"is4psBeneficiary",value:"No",onChange:e=>W(e.value),checked:g==="No"}),t("label",{class:"form-check-label !text-xs !py-2.5 !text-gray-500",for:"exampleRadios2",children:"No"})]})}),t("span",{class:"text-danger !text-xs pi_4ps_beneficiary-error"}),g=="Yes"&&a("div",{class:"col-md-12 mb-4 is_4ps_beneficiary",children:[t("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:"If yes, Household ID No."}),t(o,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:oe,onChange:e=>ie(e.target.value)}),t("span",{class:"text-danger !text-xs pi_4ps_household_id-error"})]})]})]}),a("div",{class:"col-md-6 mb-4",children:[t("h5",{class:"fw-bold text-dark-emphasis mb-4 text-gray-500 !text-md",children:"Place of Birth"}),a("div",{class:"row",children:[a("div",{class:"col-md-12 mb-4 d-flex flex-column justify-content-between",children:[a("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 text-light-emphasis",children:["Region",t("span",{className:"text-red-500",children:"*"})]}),a("select",{onChange:ve,onSelect:F,className:" pa_province !text-xs !py-2.5 !text-gray-500 !rounded form-select !border-gray-300","aria-label":"Default select example",children:[t("option",{disabled:!0,children:"Select Region"}),h&&h.length>0&&h.map(e=>t("option",{value:e.region_code,selected:ne==e.region_name?!0:null,children:e.region_name},e.region_code))]})]}),a("div",{class:"col-md-12 mb-4 d-flex flex-column justify-content-between",children:[a("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 text-light-emphasis",children:["Province",t("span",{className:"text-red-500",children:"*"})]}),a("select",{onChange:Se,class:" pa_province !text-xs !py-2.5 !text-gray-500 !rounded form-select !border-gray-300 form-select border-light-emphasis","aria-label":"Default select example",children:[t("option",{disabled:!0,children:"Select Province"}),u&&u.length>0&&u.map(e=>t("option",{value:e.province_code,selected:de==e.province_name?!0:null,children:e.province_name},e.province_code))]})]}),a("div",{class:"col-md-12 mb-4  d-flex flex-column justify-content-between",children:[a("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 text-light-emphasis",children:["Municipality/City",t("span",{className:"text-red-500",children:"*"})]}),a("select",{onChange:ke,class:" pa_city !text-xs !py-2.5 !rounded form-select !border-gray-300 !text-gray-500 form-select border-light-emphasis","aria-label":"Default select example",children:[t("option",{disabled:!0,children:"Select City"}),x&&x.length>0&&x.map(e=>t("option",{value:e.city_code,selected:pe==e.city_name?!0:null,children:e.city_name},e.city_code))]})]}),a("div",{class:"col-md-12 mb-4  d-flex flex-column justify-content-between",children:[a("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 text-light-emphasis",children:["Barangay",t("span",{className:"text-red-500",children:"*"})]}),a("select",{onChange:we,class:" pa_barangay !text-xs !rounded form-select !border-gray-300 !py-2.5 !text-gray-500 form-select border-light-emphasis","aria-label":"Default select example",children:[t("option",{disabled:!0,children:"Select Barangay"}),b&&b.length>0&&b.map(e=>t("option",{value:e.brgy_code,selected:he==e.brgy_name?!0:null,children:e.brgy_name},e.brgy_code))]})]}),t("div",{class:"col-md-12 mb-4  d-flex flex-column justify-content-between",children:t($,{stateValue:xe,stateMethod:be,isRequired:!1,label:"House No./ Street Village"})})]})]}),a("div",{class:"col-md-6 mb-4",children:[t("h5",{class:"fw-bold text-gray-500 text-dark-emphasis mb-4",children:"Present Address"}),a("div",{class:"row",children:[a("div",{class:"col-md-12 mb-4 d-flex flex-column justify-content-between",children:[a("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 text-light-emphasis",children:["Region",t("span",{className:"text-red-500",children:"*"})]}),a("select",{onChange:Ve,onSelect:P,className:" pa_province !text-xs !py-2.5 !text-gray-500 !rounded form-select !border-gray-300","aria-label":"Default select example",children:[t("option",{disabled:!0,children:"Select Region"}),f&&f.length>0&&f.map(e=>t("option",{value:e.region_code,selected:Ee==e.region_name?!0:null,children:e.region_name},e.region_code))]})]}),a("div",{class:"col-md-12 mb-4 d-flex flex-column justify-content-between",children:[a("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 text-light-emphasis",children:["Province",t("span",{className:"text-red-500",children:"*"})]}),a("select",{onChange:Pe,class:" pa_province !text-xs !py-2.5 !text-gray-500 !rounded form-select !border-gray-300 form-select border-light-emphasis","aria-label":"Default select example",children:[t("option",{disabled:!0,children:"Select Province"}),y&&y.length>0&&y.map(e=>t("option",{value:e.province_code,selected:Ne==e.province_name?!0:null,children:e.province_name},e.province_code))]})]}),a("div",{class:"col-md-12 mb-4  d-flex flex-column justify-content-between",children:[a("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 text-light-emphasis",children:["Municipality/City",t("span",{className:"text-red-500",children:"*"})]}),a("select",{onChange:Be,class:" pa_city !text-xs !py-2.5 !rounded form-select !border-gray-300 !text-gray-500 form-select border-light-emphasis","aria-label":"Default select example",children:[t("option",{disabled:!0,children:"Select City"}),_&&_.length>0&&_.map(e=>t("option",{value:e.city_code,selected:Te==e.city_name?!0:null,children:e.city_name},e.city_code))]})]}),a("div",{class:"col-md-12 mb-4  d-flex flex-column justify-content-between",children:[a("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 text-light-emphasis",children:["Barangay",t("span",{className:"text-red-500",children:"*"})]}),a("select",{onChange:He,class:" pa_barangay !text-xs !rounded form-select !border-gray-300 !py-2.5 !text-gray-500 form-select border-light-emphasis","aria-label":"Default select example",children:[t("option",{disabled:!0,children:"Select Barangay"}),v&&v.length>0&&v.map(e=>t("option",{value:e.brgy_code,selected:Re==e.brgy_name?!0:null,children:e.brgy_name},e.brgy_code))]})]}),t("div",{class:"col-md-12 mb-4  d-flex flex-column justify-content-between",children:t($,{stateValue:De,stateMethod:Le,isRequired:!1,label:"House No./ Street Village"})})]})]})]}),a("div",{class:"card-body pt-0 row",children:[a("div",{class:"col-md-6 mb-4",children:[t("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:"Email Address"}),t(o,{className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname",value:l.email_address,onChange:e=>r("email_address",e.target.value)}),t("span",{class:"text-danger !text-xs pi_email_address-error"})]}),a("div",{class:"col-md-6 mb-4",children:[t("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:"Cellphone Number"}),t(o,{className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname",value:l.phone_number,onChange:e=>r("phone_number",e.target.value)}),t("span",{class:"text-danger !text-xs pi_celphone_number-error"})]}),a("div",{class:"col-md-6 mb-4",children:[t("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:"Landline Number"}),t(o,{className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname",value:l.landline_number,onChange:e=>r("landline_number",e.target.value)}),t("span",{class:"text-danger !text-xs pi_landine_number-error"})]}),a("div",{class:"col-md-6 mb-4",children:[t("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:"GSIS/SSS Number"}),t(o,{className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname",value:l.GSIS_SSS_id,onChange:e=>r("GSIS_SSS_id",e.target.value)}),t("span",{class:"text-danger !text-xs pi_sss_number-error"})]}),a("div",{class:"col-md-6 mb-4",children:[t("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:"Pag-ibig Number"}),t(o,{className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname",value:l.pag_ibig_number,onChange:e=>r("pag_ibig_number",e.target.value)}),t("span",{class:"text-danger !text-xs pi_pag_ibig_number-error"})]}),a("div",{class:"col-md-6 mb-4",children:[t("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:"PhilHealth Number"}),t(o,{className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname",value:l.philhealth_id,onChange:e=>r("philhealth_id",e.target.value)}),t("span",{class:"text-danger !text-xs pi_philheath_number-error"})]}),a("div",{class:"col-md-6 mb-4",children:[t("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:"TIN Number"}),t(o,{className:"form-control !text-xs !py-2.5 !text-gray-500 border-light-emphasis pi_surname",value:l.TIN_number,onChange:e=>r("TIN_number",e.target.value)}),t("span",{class:"text-danger !text-xs pi_philheath_number-error"})]}),t("div",{class:"col-md-6 mb-4",children:a("div",{class:"col-md-12 mb-4",children:[t("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 text-light-emphasis",children:"Disability"}),t(Z,{value:l.disability,onChange:e=>r("disability",e.value),options:Ye,optionLabel:"name",editable:!0,placeholder:"Select a Disability",className:"form-select h-10 !text-xs pi_civil_status !text-gray-500 !py-2.5 border-light-emphasis"}),t("span",{class:"text-danger !text-xs pi_disability-error"})]})}),t("div",{class:"col-md-6 mb-4",children:a("div",{class:"col-md-4 mb-4",children:[t("label",{for:"inputEmail4",class:"form-label !text-xs !text-gray-400 fw-bold text-light-emphasis",children:"Employment Status"}),a("div",{class:"row",children:[t("div",{class:"col-md-6",children:a("div",{class:"form-check pl-0 flex items-center gap-2",children:[t(c,{inputId:"ingredient1",name:"employementStatus",value:"Employed",onChange:e=>D(e.value),checked:m==="Employed"}),t("label",{class:"form-check-label !text-xs !py-2.5 !text-gray-500",for:"exampleRadios1",children:"Employed"})]})}),t("div",{class:"col-md-6",children:a("div",{class:"form-check  pl-0 flex items-center gap-2",children:[t(c,{inputId:"ingredient1",name:"employementStatus",value:"Unemployed",onChange:e=>D(e.value),checked:m==="Unemployed"}),t("label",{class:"form-check-label !text-xs !py-2.5 !text-gray-500",for:"exampleRadios2",children:"Unemployed"})]})}),t("span",{class:"text-danger !text-xs pi_employed-error"})]}),m==="Employed"&&a("div",{class:"row ",children:[t("div",{class:"col-md-12",children:a("div",{class:"form-check flex items-center gap-2",children:[t("input",{class:"form-check-input osawft local_preferred_work_location border-light-emphasis",type:"checkbox",name:"osawft",id:"osawft",value:"Wage Employed",onChange:e=>qe("Wage Employed"),checked:j==="Wage Employed"}),t("label",{class:"form-check-label !text-xs !py-2.5 !text-gray-500",for:"osawft",children:"Wage Employed"})]})}),t("div",{class:"col-md-12",children:a("div",{class:"form-check flex items-center gap-2",children:[t("input",{class:"form-check-input osawft local_preferred_work_location border-light-emphasis",type:"checkbox",name:"osawft",id:"osawft",value:"Self Employed",checked:S==="Self Employed",onChange:e=>ze("Self Employed")}),t("label",{class:"form-check-label !text-xs !py-2.5 !text-gray-500",for:"osawft",children:"Self Employed"})]})})]}),m==="Unemployed"&&a("div",{class:"row",children:[t("div",{class:"col-md-12",children:a("div",{class:"form-check flex items-center gap-2",children:[t("input",{class:"form-check-input osawft local_preferred_work_location border-light-emphasis",type:"checkbox",name:"osawft",id:"osawft",value:"New Entrant/Fresh Graduate",checked:k==="New Entrant/Fresh Graduate",onChange:e=>Je("New Entrant/Fresh Graduate")}),t("label",{class:"form-check-label !text-xs !py-2.5 !text-gray-500",for:"osawft",children:"New Entrant/Fresh Graduate"})]})}),t("div",{class:"col-md-12",children:a("div",{class:"form-check flex items-center gap-2",children:[t("input",{class:"form-check-input osawft local_preferred_work_location border-light-emphasis",type:"checkbox",name:"osawft",id:"osawft",value:"Finished Contract",checked:w==="Finished Contract",onChange:e=>Ke("Finished Contract")}),t("label",{class:"form-check-label !text-xs !py-2.5 !text-gray-500",for:"osawft",children:"Finished Contract"})]})}),t("div",{class:"col-md-12",children:a("div",{class:"form-check flex items-center gap-2",children:[t("input",{class:"form-check-input osawft local_preferred_work_location border-light-emphasis",type:"checkbox",name:"osawft",id:"osawft",value:"Resigned",checked:E==="Resigned",onChange:e=>Qe("Resigned")}),t("label",{class:"form-check-label !text-xs !py-2.5 !text-gray-500",for:"osawft",children:"Resigned"})]})}),t("div",{class:"col-md-12",children:a("div",{class:"form-check flex items-center gap-2",children:[t("input",{class:"form-check-input osawft local_preferred_work_location border-light-emphasis",type:"checkbox",name:"osawft",id:"osawft",checked:I==="Retired",onChange:e=>Xe("Retired")}),t("label",{class:"form-check-label !text-xs !py-2.5 !text-gray-500",for:"osawft",children:"Retired"})]})}),t("div",{class:"col-md-12",children:a("div",{class:"form-check flex items-center gap-2",children:[t("input",{class:"form-check-input osawft local_preferred_work_location border-light-emphasis",type:"checkbox",name:"osawft",id:"osawft",value:"Terminated/Laidoff(local)",checked:N==="Terminated/Laidoff(local)",onChange:e=>Ze("Terminated/Laidoff(local)")}),t("label",{class:"form-check-label !text-xs !py-2.5 !text-gray-500",for:"osawft",children:"Terminated/Laidoff(local)"})]})}),a("div",{class:"col-md-12",children:[a("div",{class:"form-check flex items-center gap-2",children:[t("input",{class:"form-check-input osawft local_preferred_work_location border-light-emphasis",type:"checkbox",name:"osawft",id:"osawft",value:"Teminated/Laidoff(abroad)",checked:C==="Teminated/Laidoff(abroad)",onChange:e=>$e("Teminated/Laidoff(abroad)",e)}),t("label",{class:"form-check-label !text-xs !py-2.5 !text-gray-500",for:"osawft",children:"Teminated/Laidoff(abroad)"})]}),Ge&&t(o,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:et,onChange:e=>tt(e.target.value)})]}),a("div",{class:"col-md-12",children:[a("div",{class:"form-check flex items-center gap-2",children:[t("input",{class:"form-check-input osawft local_preferred_work_location border-light-emphasis",type:"checkbox",name:"osawft",id:"osawft",value:"Others, specify",checked:T==="Others, specify",onChange:e=>at("Others, specify",e)}),t("label",{class:"form-check-label !text-xs !py-2.5 !text-gray-500",for:"osawft",children:"Others, specify"})]}),Me&&t(o,{className:"form-control pi_is_actively_looking_for_work !py-2.5 !text-xs !text-gray-500 border-light-emphasis",value:st,onChange:e=>lt(e.target.value)})]})]})]})})]})]})})}export{Nt as default};
