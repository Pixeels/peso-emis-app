import{r as i,j as a,a as e,n as w,F as p,R as j}from"./app-6c5c40eb.js";import{A as T,N as E}from"./AuthenticatedLayout-d93447bc.js";import{F as I}from"./tooltip.esm-aa814582.js";import{D as A,C as r}from"./column.esm-8362eb0f.js";import{I as V}from"./inputtext.esm-dccf838e.js";import{B as d}from"./button.esm-9c34fa01.js";import P from"./Index-d5b37367.js";import"./ApplicationLogo-6afe5874.js";import"./Dropdown-23df0daf.js";import"./transition-94bd252a.js";import"./hooks.esm-a69b8e5c.js";import"./ripple.esm-403a413e.js";import"./dropdown.esm-c9aecd26.js";import"./overlayservice.esm-a8b3c4cf.js";import"./csstransition.esm-dd79fdf2.js";import"./Table-d90f137e.js";import"./View-d5f4bba5.js";import"./calendar.esm-95cb6d58.js";import"./radiobutton.esm-77e5a923.js";import"./checkbox.esm-40a1dcac.js";import"./index-4355d5a8.js";import"./index-419cf3fb.js";import"./Edit-7759537c.js";import"./PersonalInformation-c663416f.js";import"./InputTextWrapper-e0c8b555.js";import"./Authorization-b674f539.js";import"./JobPreference-9e61cec9.js";import"./Language-d3eeddfc.js";import"./OtherSkills-dd2f771a.js";import"./Vocational-e4482e77.js";import"./WorkExperience-57698cff.js";import"./Education-ec66634e.js";import"./dialog.esm-42ca21db.js";import"./lodash-aaa7814d.js";function A0(c){const n=i.useRef(null),[z,k]=i.useState({}),[o,s]=i.useState("default"),[h,_]=i.useState(),[C,S]=i.useState("");i.useEffect(()=>{k(c.employers),console.log(c)}),i.useEffect(()=>{c.auth.user.role==0&&u(c.auth.user.id),console.log(c.auth.user.id)},[]);const u=t=>fetch(route("get-all-employer-job_posting",t)).then(l=>l.json()).then(l=>{c.auth.user.role===1?s("show_posting_details"):s("default"),_(l[0].employer_vacancy_detail),S(l[0].establishment_name)}),f=t=>{n.current.style.cursor="progress",console.log(c.auth.user.role),c.auth.user.role===1?u(t.id):y(t)},[N,M]=i.useState(""),[m,R]=i.useState({global:{value:null,matchMode:I.CONTAINS}}),B=t=>{const l=t.target.value;let v={...m};v.global.value=l,R(v),M(l)},L=()=>{s("default")},D=()=>a("div",{className:"flex flex-wrap gap-2 justify-content-between align-items-center",children:[e("h4",{className:"m-0",children:C}),a("div",{className:"flex justify-between gap-2",children:[a("span",{className:"p-input-icon-left",children:[e("i",{className:"pi pi-search"}),e(V,{value:N,onChange:B,placeholder:"Keyword Search"})]}),e(d,{icon:"pi pi-arrow-left",className:"mr-2",label:"Back",onClick:()=>L()})]})]}),[g,F]=i.useState([]),y=t=>fetch(route("get-matching-applicants",[t.position_title,t.salary])).then(l=>l.json()).then(l=>{s("show_applicants"),F(l)}),W=t=>{n.current.style.cursor="progress",y(t)},b=t=>a(j.Fragment,{children:[e(d,{icon:"pi pi-eye",rounded:!0,outlined:!0,className:"mr-2",ref:n,onClick:()=>W(t)}),e(d,{icon:"pi pi-check",rounded:!0,outlined:!0,severity:"success"})]}),x=D();return c.auth.user.is_activated==1||c.auth.user.role==1?a(T,{auth:c.auth,errors:c.errors,header:e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Dashboard"}),children:[e(w,{title:"EMIS-Dashboard"}),c.auth.user.role==1&&e("div",{className:"py-12",children:e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:a("div",{className:" overflow-hidden shadow-sm sm:rounded-lg",children:[o=="default"&&e("div",{className:"flex flex-wrap",style:{gap:"1rem"},children:c.employers.map(t=>t.user.is_activated==1&&a("a",{class:"relative hover:bg-stone-200 transition flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8",href:"#",style:{"flex-basis":"calc(calc(100% / 4) - 1rem)"},ref:n,onClick:()=>f(t),children:[a("div",{class:"pt-4 text-gray-500",children:[e("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAs0lEQVR4nO2XQQoCMRAE6+TXXR+q32gR9hQiJOKaxK2COWZJb89ME3jPBbgBDyCD6w5s+5262SYQkKKunwiZwYkU9bpTN5m0uhl94Sik4BSOtHDE2TSe/+rHFIKO1LG1VpqR/Mv6jULQkRiImOzrrN8WFIKO1BkdfDHZC0b/+ehIget3xxzBHKnjjKw0IzFHMBBja+HDap2t1YJC0JETt1YOfuFFIRV0BFtrrRn5xbJgWSFPw22Fit98xUkAAAAASUVORK5CYII="}),e("h3",{class:"mt-4 text-lg font-bold text-gray-900 sm:text-xl",children:t.establishment_accronym}),e("p",{class:"mt-2 hidden text-sm sm:block",children:t.establishment_name})]}),e("span",{class:"rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600",children:t.employer_vacancy_detail.length})]}))}),o=="show_posting_details"&&a(A,{value:h,paginator:!0,header:x,rows:10,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[10,25,50],dataKey:"id",filters:m,filterDisplay:"menu",emptyMessage:"No customers found.",currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} entries",children:[e(r,{field:"position_title",header:"Job Title",sortable:!0,filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"14rem"}}),e(r,{field:"place_of_work",header:"Place of Work",sortable:!0,filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"14rem"}}),e(r,{field:"job_description",header:"Description",sortable:!0,filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"14rem"}}),e(r,{field:"salary",header:"Salary",sortable:!0,filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"14rem"}}),e(r,{field:"vacancy_count",header:"Vacancy",sortable:!0,filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"14rem"}}),e(r,{body:b,exportable:!1,style:{minWidth:"12rem",display:"flex",gap:"0.5rem"}})]}),o=="show_applicants"&&a(p,{children:[e(d,{icon:"pi pi-arrow-left",className:"mr-2",label:"Back",onClick:()=>s("show_posting_details")}),e(P,{applicants:g,setDashBoardType:s,auth:c.auth,isMatches:!0})]})]})})}),c.auth.user.role==0&&h&&e("div",{className:"py-12",children:e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:a("div",{className:" overflow-hidden shadow-sm sm:rounded-lg",children:[o=="default"&&e("div",{className:"flex flex-wrap",style:{gap:"1rem"},children:h.map(t=>t.is_active==1&&e("a",{class:"relative hover:bg-stone-200 transition flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8",href:"#",style:{"flex-basis":"calc(calc(100% / 4) - 1rem)"},ref:n,onClick:()=>f(t),children:a("div",{class:"pt-4 text-gray-500",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",fill:"#000000",height:"55px",width:"55px",version:"1.1",id:"Capa_1",viewBox:"0 0 512 512","xml:space":"preserve",children:a("g",{children:[e("path",{d:"M411.779,192.47c-4.166,1.472-6.35,6.043-4.877,10.208C412.939,219.763,416,237.703,416,256c0,88.225-71.776,160-160,160   S96,344.225,96,256S167.776,96,256,96c37.952,0,74.749,13.522,103.612,38.076c3.365,2.861,8.414,2.455,11.277-0.91   s2.456-8.414-0.91-11.277C338.226,94.876,297.747,80,256,80c-97.047,0-176,78.953-176,176s78.953,176,176,176s176-78.953,176-176   c0-20.118-3.369-39.852-10.012-58.652C420.516,193.182,415.946,190.997,411.779,192.47z"}),e("path",{d:"M392.307,172.166c1.512,2.453,4.133,3.804,6.818,3.804c1.432,0,2.881-0.385,4.19-1.19   c3.761-2.318,4.931-7.247,2.612-11.008c-3.55-5.76-7.478-11.377-11.673-16.695c-2.737-3.47-7.767-4.063-11.236-1.325   c-3.469,2.736-4.062,7.767-1.326,11.235C385.508,161.822,389.079,166.93,392.307,172.166z"}),e("path",{d:"M480,208h-13.393c-5.399-23.848-14.705-46.326-27.734-66.991l9.46-9.46c12.477-12.477,12.477-32.777,0-45.255   l-22.627-22.628c-12.476-12.474-32.778-12.475-45.255,0l-9.46,9.461C350.327,60.098,327.849,50.792,304,45.393V32   c0-17.645-14.355-32-32-32h-32c-17.645,0-32,14.355-32,32v13.393c-23.849,5.4-46.327,14.705-66.991,27.734l-9.46-9.461   c-12.476-12.474-32.778-12.475-45.255,0L63.667,86.295c-12.477,12.477-12.477,32.777,0,45.255l9.46,9.459   C60.098,161.675,50.792,184.153,45.393,208H32c-17.645,0-32,14.355-32,32v32c0,17.645,14.355,32,32,32h13.393   c5.399,23.848,14.705,46.325,27.734,66.99l-9.46,9.461c-12.477,12.477-12.477,32.777,0,45.255l22.627,22.628   c12.476,12.475,32.777,12.478,45.255-0.001l9.46-9.461c20.665,13.03,43.142,22.336,66.99,27.734V480c0,17.645,14.355,32,32,32h32   c17.645,0,32-14.355,32-32v-13.394c23.847-5.398,46.325-14.704,66.99-27.733l9.46,9.461c12.476,12.475,32.778,12.477,45.255,0   l22.627-22.629c12.477-12.477,12.477-32.777,0-45.255l-9.46-9.459c13.029-20.665,22.335-43.143,27.734-66.991H480   c17.645,0,32-14.355,32-32v-32C512,222.355,497.645,208,480,208z M496,272c0,8.822-7.178,16-16,16h-19.883   c-3.828,0-7.12,2.712-7.852,6.47c-5.127,26.313-15.313,50.913-30.272,73.12c-2.139,3.175-1.729,7.42,0.978,10.127l14.048,14.048   c6.238,6.238,6.238,16.389,0,22.627l-22.627,22.628c-6.239,6.238-16.389,6.238-22.628,0l-14.048-14.049   c-2.706-2.706-6.953-3.116-10.126-0.978c-22.209,14.96-46.81,25.145-73.12,30.271c-3.758,0.732-6.47,4.024-6.47,7.853V480   c0,8.822-7.178,16-16,16h-32c-8.822,0-16-7.178-16-16v-19.884c0-3.828-2.712-7.12-6.47-7.853   c-26.311-5.126-50.912-15.312-73.119-30.271c-1.361-0.917-2.918-1.365-4.467-1.365c-2.064,0-4.113,0.797-5.66,2.344l-14.048,14.049   c-6.239,6.238-16.389,6.238-22.628,0l-22.627-22.628c-6.238-6.238-6.238-16.389,0-22.627l14.049-14.049   c2.707-2.707,3.117-6.952,0.978-10.127c-14.959-22.207-25.145-46.808-30.272-73.119c-0.732-3.758-4.024-6.47-7.852-6.47H32   c-8.822,0-16-7.178-16-16v-32c0-8.822,7.178-16,16-16h19.883c3.828,0,7.12-2.712,7.852-6.47   c5.127-26.311,15.312-50.911,30.272-73.12c2.139-3.175,1.728-7.42-0.979-10.127l-14.048-14.048c-6.238-6.238-6.238-16.389,0-22.627   L97.608,74.98c6.239-6.237,16.389-6.239,22.628,0l14.048,14.049c2.707,2.706,6.952,3.117,10.126,0.978   c22.205-14.959,46.806-25.144,73.12-30.271c3.757-0.732,6.47-4.024,6.47-7.853V32c0-8.822,7.178-16,16-16h32   c8.822,0,16,7.178,16,16v19.883c0,3.828,2.712,7.12,6.47,7.853c26.313,5.128,50.914,15.313,73.12,30.271   c3.174,2.139,7.419,1.729,10.126-0.978l14.048-14.049c6.239-6.237,16.389-6.239,22.628,0l22.627,22.628   c6.238,6.238,6.238,16.389,0,22.627l-14.048,14.048c-2.707,2.707-3.117,6.952-0.978,10.127   c14.96,22.207,25.145,46.809,30.271,73.12c0.732,3.758,4.024,6.47,7.853,6.47H480c8.822,0,16,7.178,16,16V272z"}),e("path",{d:"M210.858,294.883l-29.809,7.741c-0.049,0.013-0.099,0.026-0.148,0.04C161.927,307.98,152,326.581,152,342.208v8.641   c0,9.457,8.277,17.151,18.452,17.151l85.418-0.009c0.062,0.001,0.121,0.009,0.183,0.009s0.122-0.008,0.184-0.009l85.419-0.009   c10.174,0,18.451-7.694,18.451-17.151v-8.641c0-15.628-9.927-34.229-28.901-39.544c-0.049-0.014-0.098-0.027-0.147-0.04   l-29.808-7.741c-2.527-0.744-4.524-2.053-4.955-2.736l-0.02-16.214c0.025-0.03,0.051-0.057,0.076-0.086   c10.221-12.217,15.85-28.045,15.85-44.57v-12.076c10.197-33.218,3.011-62.02-0.677-70.402c-0.012-0.028-0.028-0.053-0.041-0.081   c-0.071-0.157-0.15-0.309-0.23-0.459c-0.046-0.087-0.09-0.175-0.14-0.26c-0.077-0.133-0.162-0.26-0.246-0.388   c-0.064-0.098-0.127-0.197-0.195-0.291c-0.073-0.101-0.153-0.196-0.23-0.293c-0.088-0.111-0.176-0.223-0.269-0.328   c-0.066-0.075-0.138-0.144-0.207-0.215c-0.112-0.117-0.223-0.233-0.341-0.342c-0.065-0.06-0.135-0.115-0.201-0.172   c-0.127-0.11-0.254-0.22-0.388-0.321c-0.077-0.059-0.158-0.111-0.237-0.166c-0.128-0.09-0.255-0.181-0.388-0.263   c-0.103-0.064-0.211-0.12-0.317-0.179c-0.114-0.063-0.226-0.13-0.343-0.188c-0.132-0.065-0.268-0.122-0.404-0.18   c-0.097-0.042-0.193-0.087-0.292-0.125c-0.148-0.057-0.301-0.104-0.453-0.152c-0.092-0.029-0.183-0.062-0.276-0.088   c-0.148-0.041-0.298-0.071-0.449-0.104c-0.105-0.022-0.208-0.048-0.314-0.066c-0.132-0.022-0.266-0.037-0.399-0.053   c-0.131-0.016-0.261-0.034-0.393-0.043c-0.109-0.008-0.218-0.008-0.328-0.011c-0.161-0.005-0.321-0.009-0.483-0.004   c-0.089,0.002-0.179,0.011-0.268,0.017c-0.18,0.011-0.361,0.026-0.541,0.05c-0.027,0.003-0.054,0.003-0.081,0.007   c-7.709,1.103-17.114-1.15-27.07-3.533c-17.611-4.218-37.474-8.962-54.875,3.584c-16.826,1.446-28.756,15.586-28.756,34.698   c0,13.898,6.449,38.721,7.927,44.229v6.681c0,17.249,5.969,33.193,15.538,45.087l-0.022,17.32   C215.382,292.83,213.385,294.139,210.858,294.883z M216.296,227.007c0-7.952,3.365-19.58,5.88-26.936   c36.247,0.832,63.597,9.537,74.026,13.396v4.44c0,0.024,0,0.049,0,0.073v13.276c0,14.103-5.303,27.023-13.576,35.964   c-0.022,0.022-0.042,0.045-0.063,0.067c-7.112,7.656-16.405,12.379-26.42,12.379c-21.227,0-39.846-23.331-39.846-49.928V227.007z    M231.816,288.827c7.4,4.362,15.669,6.84,24.326,6.84c8.498,0,16.699-2.2,24.15-6.364l0.004,2.932c0,3.967,1.43,7.293,3.65,10.013   l-27.858,16.442l-27.743-16.646c2.115-2.677,3.467-5.927,3.467-9.781L231.816,288.827z M170.451,352   c-1.634,0-2.451-0.932-2.451-1.151v-8.641c0-9.578,5.891-20.926,17.152-24.119l27.103-7.038l35.799,21.479v19.461L170.451,352z    M344.107,342.189v8.641c0,0.22-0.817,1.151-2.452,1.151l-77.602,0.008v-19.422l36.279-21.412l26.626,6.915   C338.218,321.265,344.107,332.611,344.107,342.189z M223.992,160c0.025,0,0.049-0.003,0.074-0.004   c0.239-0.002,0.477-0.013,0.715-0.036c0.078-0.007,0.153-0.022,0.23-0.032c0.183-0.023,0.365-0.047,0.547-0.083   c0.098-0.019,0.193-0.046,0.29-0.07c0.157-0.037,0.313-0.073,0.469-0.12c0.106-0.032,0.208-0.072,0.313-0.109   c0.142-0.049,0.283-0.097,0.423-0.155c0.111-0.046,0.217-0.1,0.325-0.15c0.128-0.06,0.256-0.117,0.381-0.184   c0.122-0.065,0.238-0.139,0.355-0.21c0.105-0.063,0.213-0.123,0.316-0.192c0.149-0.1,0.29-0.209,0.432-0.318   c0.063-0.049,0.13-0.091,0.192-0.142c11.771-9.619,27.047-5.959,43.221-2.089c8.705,2.085,17.645,4.22,26.325,4.252   c2.086,7.707,4.137,21.364,1.934,37.631c-13.021-4.743-43.573-13.99-83.926-13.99c-0.017,0-0.034,0.002-0.051,0.002   c-0.197,0.001-0.393,0.014-0.589,0.03c-0.074,0.006-0.15,0.008-0.224,0.016c-0.166,0.018-0.33,0.047-0.494,0.075   c-0.102,0.018-0.205,0.031-0.305,0.052c-0.121,0.026-0.239,0.061-0.358,0.092c-0.137,0.036-0.275,0.068-0.41,0.11   c-0.078,0.025-0.154,0.058-0.231,0.085c-0.167,0.059-0.335,0.117-0.497,0.187c-0.061,0.026-0.12,0.059-0.18,0.087   c-0.171,0.079-0.342,0.158-0.506,0.248c-0.094,0.051-0.183,0.111-0.274,0.167c-0.125,0.075-0.252,0.147-0.372,0.229   c-0.152,0.103-0.297,0.217-0.442,0.331c-0.054,0.042-0.111,0.08-0.163,0.124c-0.169,0.139-0.33,0.289-0.487,0.443   c-0.025,0.024-0.053,0.047-0.078,0.072c-0.142,0.142-0.275,0.294-0.407,0.448c-0.037,0.043-0.078,0.083-0.114,0.127   c-0.102,0.124-0.195,0.256-0.29,0.388c-0.061,0.083-0.125,0.164-0.182,0.25c-0.066,0.1-0.125,0.205-0.187,0.308   c-0.077,0.127-0.156,0.254-0.226,0.387c-0.042,0.079-0.078,0.163-0.117,0.244c-0.052,0.105-0.106,0.209-0.153,0.318   c-0.553-3.774-0.901-7.241-0.901-9.988C208.369,170.144,212.46,160,223.992,160z"})]})}),e("h3",{class:"mt-4 text-lg font-bold text-gray-900 sm:text-xl",children:t.position_title})]})}))}),o=="show_posting_details"&&a(A,{value:h,paginator:!0,header:x,rows:10,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[10,25,50],dataKey:"id",filters:m,filterDisplay:"menu",emptyMessage:"No customers found.",currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} entries",children:[e(r,{field:"position_title",header:"Job Title",sortable:!0,filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"14rem"}}),e(r,{field:"place_of_work",header:"Place of Work",sortable:!0,filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"14rem"}}),e(r,{field:"job_description",header:"Description",sortable:!0,filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"14rem"}}),e(r,{field:"salary",header:"Salary",sortable:!0,filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"14rem"}}),e(r,{field:"vacancy_count",header:"Vacancy",sortable:!0,filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"14rem"}}),e(r,{body:b,exportable:!1,style:{minWidth:"12rem",display:"flex",gap:"0.5rem"}})]}),o=="show_applicants"&&a(p,{children:[e(d,{icon:"pi pi-arrow-left",className:"mr-2",label:"Back",onClick:()=>s("default")}),e(P,{applicants:g,setDashBoardType:s,auth:c.auth,isMatches:!0})]})]})})})]}):a(p,{children:[e(w,{title:"EMIS-Dashboard"}),e("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:a("h1",{style:{fontSize:"32px",fontWeight:"bold",textAlign:"center"},children:["Please contact the administrator to activate your account.",e("br",{}),e(E,{style:{backgroundColor:"black",color:"white",padding:"5px 30px",borderBottom:"0",borderRadius:"5px"},method:"post",href:route("logout"),as:"button",children:"Back"})]})})]})}export{A0 as default};
