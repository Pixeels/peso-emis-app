import{r,j as a,a as t,n as i}from"./app-5a7a9fd1.js";import s from"./EstablishmentContactDetails-867b4ecb.js";import l from"./EstablishmentDetails-1290d681.js";import{A as p}from"./AuthenticatedLayout-0b28f98a.js";import"./inputtext.esm-da2b6c4b.js";import"./tooltip.esm-e9f9bfaf.js";import"./hooks.esm-a34a9d06.js";import"./radiobutton.esm-b6747123.js";import"./button.esm-77a3c82b.js";import"./ripple.esm-8552c990.js";import"./index-419cf3fb.js";import"./index-4355d5a8.js";import"./ApplicationLogo-b47e674d.js";import"./Dropdown-67caba3b.js";import"./transition-cdba00be.js";function v(m){const[e,o]=r.useState([]);return r.useEffect(()=>{o(m.employers[0]),console.log(e.employer_establishment_contact_detail)}),a(p,{auth:m.auth,errors:m.errors,header:t("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Employer Settings"}),children:[t(i,{title:"EMIS - Employer Settings"}),t("div",{className:"card mt-5 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:e&&t(l,{employer:e})}),t("div",{className:"card mt-5 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 mb-5",children:e.employer_establishment_contact_detail&&t(s,{employer:e.employer_establishment_contact_detail})})]})}export{v as default};
