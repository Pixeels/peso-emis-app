import{r as n,j as p,F as c,a as r,n as f}from"./app-db555519.js";import d from"./Header-3b021985.js";import E from"./Footer-06ee00e8.js";import g from"./Content-487d31c1.js";import u from"./NavigatorPage-f0c26cff.js";import x from"./EstablishmentDetails-8d294932.js";import I from"./PostingDetails-5ee75b55.js";import T from"./EstablishmentContactDetails-75a1979e.js";import h from"./RegisterEmployer-81c63a3b.js";import"./index-4355d5a8.js";import"./index-419cf3fb.js";import"./hooks.esm-bdbdd65e.js";import"./inputtext.esm-3b467285.js";import"./tooltip.esm-414337a4.js";import"./radiobutton.esm-cf8d0f13.js";import"./NavigatorButton-31df0b45.js";import"./index.esm-d0583599.js";import"./toast.esm-84001264.js";import"./csstransition.esm-33ea5eaf.js";import"./ripple.esm-62773535.js";import"./InputError-e0ad3e11.js";import"./checkbox.esm-d61355f5.js";import"./InputLabel-52389537.js";import"./PrimaryButton-efbfd4ea.js";import"./TextInput-50314796.js";function J(){const[t,o]=n.useState(0);n.useRef(null);const e=4,i=()=>{t<4&&o(t+1)},m=()=>{t>=1&&o(t-1)},a=["REGISTRATION","ESTABLISHMENT DETAILS","ESTABLISHMENT CONTACT DETAILS","AUTHORIZATION"];return p(c,{children:[r(f,{title:"EMIS - Employer Forms"}),r(d,{}),r(g,{children:r("div",{class:"d-flex applicant-container max-w-screen-lg mx-auto",children:p("div",{class:"basis-full applicant-content pr-1",children:[r("div",{class:"border-b-2 pl-3 flex gap-2 py-3 pb-4 flex-wrap navigation-top",children:a.map((s,l)=>r(u,{index:l,activeIndex:t,length:a.length,children:s}))}),t==0&&r(h,{activeIndex:t,numberOfPage:e,counterNext:i,counterPrevious:m,setActiveIndex:o}),t==1&&r(x,{activeIndex:t,numberOfPage:e,counterNext:i,counterPrevious:m,setActiveIndex:o}),t==2&&r(T,{activeIndex:t,numberOfPage:e,counterNext:i,counterPrevious:m,setActiveIndex:o}),t==3&&r(I,{activeIndex:t,numberOfPage:e,counterNext:i,counterPrevious:m,setActiveIndex:o})]})})}),r(E,{})]})}export{J as default};
