<<<<<<< HEAD:public/build/assets/Login-58614ab0.js
import{a as e,_ as g,r as h,j as r,F as b,n as x,d as w}from"./app-795d5ab7.js";import{G as N}from"./GuestLayout-76dd1e1e.js";import{I as i}from"./InputError-1bce495b.js";import{I as l}from"./InputLabel-98066509.js";import{P as y}from"./PrimaryButton-d95510c8.js";import{T as d}from"./TextInput-303b570a.js";import v from"./Header-ad4b980f.js";import k from"./Footer-9b647fde.js";import"./ApplicationLogo-ed52fb62.js";function C({className:s="",...t}){return e("input",{...t,type:"checkbox",className:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 "+s})}function q({status:s,canResetPassword:t}){const{data:o,setData:c,post:u,processing:p,errors:n,reset:f}=g({email:"",password:"",remember:""});h.useEffect(()=>()=>{f("password")},[]);const m=a=>{c(a.target.name,a.target.type==="checkbox"?a.target.checked:a.target.value)};return r(b,{children:[r(N,{children:[e(x,{title:"EMIS - Login"}),e(v,{}),s&&e("div",{className:"mb-4 font-medium text-sm text-green-600 mt-5",children:s}),r("form",{onSubmit:a=>{a.preventDefault(),u(route("login"))},children:[r("div",{children:[e(l,{htmlFor:"email",value:"Email"}),e(d,{id:"email",type:"email",name:"email",value:o.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,onChange:m}),e(i,{message:n.email,className:"mt-2"})]}),r("div",{className:"mt-4",children:[e(l,{htmlFor:"password",value:"Password"}),e(d,{id:"password",type:"password",name:"password",value:o.password,className:"mt-1 block w-full",autoComplete:"current-password",onChange:m}),e(i,{message:n.password,className:"mt-2"})]}),e("div",{className:"block mt-4",children:r("label",{className:"flex items-center",children:[e(C,{name:"remember",value:o.remember,onChange:m}),e("span",{className:"ml-2 text-sm text-gray-600",children:"Remember me"})]})}),r("div",{className:"flex items-center justify-end mt-4",children:[t&&e(w,{href:route("password.request"),className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Forgot your password?"}),e(y,{className:"ml-4",disabled:p,children:"Log in"})]})]})]}),e(k,{})]})}export{q as default};
=======
import{a as e,_ as g,r as h,j as r,F as b,n as x,d as w}from"./app-e50456e4.js";import{G as N}from"./GuestLayout-f4a032c2.js";import{I as i}from"./InputError-c3b0d5f0.js";import{I as l}from"./InputLabel-cb7e18fa.js";import{P as y}from"./PrimaryButton-604c5933.js";import{T as d}from"./TextInput-14f27dda.js";import v from"./Header-f28854da.js";import k from"./Footer-ad55984d.js";import"./ApplicationLogo-a75b2c7e.js";function C({className:s="",...t}){return e("input",{...t,type:"checkbox",className:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 "+s})}function q({status:s,canResetPassword:t}){const{data:o,setData:c,post:u,processing:p,errors:n,reset:f}=g({email:"",password:"",remember:""});h.useEffect(()=>()=>{f("password")},[]);const m=a=>{c(a.target.name,a.target.type==="checkbox"?a.target.checked:a.target.value)};return r(b,{children:[r(N,{children:[e(x,{title:"EMIS - Login"}),e(v,{}),s&&e("div",{className:"mb-4 font-medium text-sm text-green-600 mt-5",children:s}),r("form",{onSubmit:a=>{a.preventDefault(),u(route("login"))},children:[r("div",{children:[e(l,{htmlFor:"email",value:"Email"}),e(d,{id:"email",type:"email",name:"email",value:o.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,onChange:m}),e(i,{message:n.email,className:"mt-2"})]}),r("div",{className:"mt-4",children:[e(l,{htmlFor:"password",value:"Password"}),e(d,{id:"password",type:"password",name:"password",value:o.password,className:"mt-1 block w-full",autoComplete:"current-password",onChange:m}),e(i,{message:n.password,className:"mt-2"})]}),e("div",{className:"block mt-4",children:r("label",{className:"flex items-center",children:[e(C,{name:"remember",value:o.remember,onChange:m}),e("span",{className:"ml-2 text-sm text-gray-600",children:"Remember me"})]})}),r("div",{className:"flex items-center justify-end mt-4",children:[t&&e(w,{href:route("password.request"),className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Forgot your password?"}),e(y,{className:"ml-4",disabled:p,children:"Log in"})]})]})]}),e(k,{})]})}export{q as default};
>>>>>>> 733947bd3fffb87bf8c50a80ad7ca2bbe45d634a:public/build/assets/Login-ba9d2513.js
