import{C as h,r as w,ac as U,o as V,c as R,a as i,b as r,ad as g,w as n,aq as m,S as d,bs as Y,bt as $,N as p,L as y,aE as Z,bu as j,bv as G,bw as I,A as _}from"./index.d9d4ca77.js";import{_ as L}from"./DataTable.bf31b510.js";import{_ as O}from"./Upload.e43c2bb3.js";import{_ as W}from"./Checkbox.59356a49.js";import{N as b}from"./GradientText.238774ca.js";import"./Select.86bf23f2.js";import"./Image.f3833513.js";const H={id:"DoctorSetting"},J=i("h1",null,"\u91AB\u5E2B\u7BA1\u7406",-1),K=i("div",{class:"editorButton"},[i("a",{href:"#admin/admin-doctor-editor-setting"},[i("button",{type:"submit",class:"create_btn"},"\u65B0\u589E")])],-1),Q={class:"doctorFormContent"},X=y("\u4E0A\u50B3\u91AB\u5E2B\u7167\u7247"),ee=y(" \u4E0A\u7DDA "),te={style:{display:"flex","justify-content":"flex-end"},class:"submitButton"},oe={href:"#admin/admin-doctor-setting"},re=i("button",{type:"submit",class:"saveBtn"},"\u4FDD\u5B58",-1),_e={__name:"AdminDoctorSettingView",setup(ne){const x=h("medium"),E=h(null),N={width:"600px"},t=w({_id:"",doctorName:"",doctorPic:[],doctorDescription:"",doctorShow:!1,idx:-1,show:!1,showModal:!1}),S=(o,e)=>{t._id=o,e>-1&&(t.doctorName=a[e].doctorName,t.doctorPic=a[e].doctorPic,t.doctorDescription=a[e].doctorDescription,t.doctorShow=a[e].doctorShow),t.showModal=!0,t.doctorPic=[],t.idx},k=()=>[{title:"\u91AB\u751F\u540D\u5B57",key:"doctorName"},{title:"\u4E0A\u7DDA",key:"doctorShow",render(o){return o.doctorShow===!1?_(b,{type:"danger",size:"small"},{default:()=>"\u672A\u4E0A\u7DDA"}):_(b,{type:"info",size:"small"},{default:()=>"\u4E0A\u7DDA"})}},{title:"\u7DE8\u8F2F",key:"editor",render(o){return _(p,{strong:!0,tertiary:!0,size:"small",onClick:()=>S(o._id,o.idx)},{default:()=>"\u7DE8\u8F2F"})}},{title:"\u522A\u9664",key:"del",render(o){return _(p,{strong:!0,tertiary:!0,size:"small",onClick:()=>v(o._id)},{default:()=>"\u522A\u9664"})}}],a=w([]),z={doctorName:{required:!0,trigger:["blur","input"],validator(o,e){if(e)if(/^[\u4E00-\u9FA5A-Za-z\s]+(·[\u4E00-\u9FA5A-Za-z]+)*$/.test(e)){if(e.length<=1)return new Error("\u5B57\u6578\u4E0D\u80FD\u5C11\u65BC2");if(e.length>=10)return new Error("\u5B57\u6578\u4E0D\u80FD\u591A\u65BC10")}else return new Error("\u540D\u5B57\u683C\u5F0F\u932F\u8AA4");else return new Error("\u9700\u8981\u540D\u5B57");return!0}},doctorDescription:{required:!0,trigger:["blur","input"],validator(o,e){if(e){if(e.length<=9)return new Error("\u5B57\u6578\u4E0D\u80FD\u5C11\u65BC10");if(e.length>=99)return new Error("\u5B57\u6578\u4E0D\u80FD\u591A\u65BC100")}else return new Error("\u9700\u8981\u63CF\u8FF0");return!0}},doctorPic:{required:!0,validator(o,e){var c,u,l;if(e){if(!e.length||((u=(c=e[0])==null?void 0:c.type)==null?void 0:u.includes("image"))&&((l=e[0])==null?void 0:l.size)<1024*1024)return new Error("\u6A94\u6848\u683C\u5F0F\u4E0D\u7B26")}else return new Error("\u9700\u8981\u5716\u7247");return!0}}},B=async()=>{t.show=!0;const o=new FormData;for(const e in t)["_id","idx","show"].includes(e)||(e==="doctorPic"?t.doctorPic.length>0&&o.append(e,t[e][0].file):o.append(e,t[e]));try{const{data:e}=await m.patch("/doctors/"+t._id,o);a[t.idx]=e.result,d.fire({icon:"success",title:"\u6210\u529F",text:"\u7DE8\u8F2F\u6210\u529F"}),t.showModal=!1}catch(e){d.fire({icon:"error",title:"\u5931\u6557",text:e.isAxiosError?e.response.data.message:e.message}),t.showModal=!1}t.show=!1},v=o=>{d.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(async e=>{await m.delete("/doctors/"+o),e.isConfirmed&&d.fire("Deleted!","Your file has been deleted.","success"),f()}).catch(e=>{d.fire({icon:"error",title:"\u5931\u6557",text:e.isAxiosError?e.response.data.message:e.message})})},f=async()=>{let o=0;try{const{data:e}=await m.get("./doctors/all");a.push(...e.result),a.forEach(c=>{c.idx=o++})}catch(e){d.fire({icon:"error",title:"\u5931\u6557",text:e.isAxiosError?e.response.data.message:e.message})}};f();const A={pageSize:5},C=k();return(o,e)=>{const c=L,u=Z,l=j,D=O,P=U,M=W,F=G,q=I,T=Y;return V(),R("section",H,[J,K,i("div",Q,[i("div",null,[r(c,{columns:g(C),data:a,pagination:A,bordered:!1},null,8,["columns","data"])])]),r(T,{show:t.showModal,"onUpdate:show":e[4]||(e[4]=s=>t.showModal=s),class:"editCard",preset:"card",style:N,title:"\u7DE8\u8F2F\u8868\u55AE",size:"huge",bordered:!1,segmented:o.segmented},{default:n(()=>[r(q,{class:"doctorForm",ref_key:"formRef",ref:E,model:t,rules:z,"label-placement":"left","label-width":"auto","require-mark-placement":"right-hanging",size:x.value,style:{maxWidth:"1000px"},onSubmit:$(B,["prevent"])},{default:n(()=>[r(l,{label:"\u91AB\u5E2B\u59D3\u540D",path:"doctorName"},{default:n(()=>[r(u,{value:t.doctorName,"onUpdate:value":e[0]||(e[0]=s=>t.doctorName=s),placeholder:"\u8ACB\u8F38\u5165\u91AB\u5E2B\u59D3\u540D"},null,8,["value"])]),_:1}),r(l,{label:"\u91AB\u5E2B\u7167\u7247",path:"doctorPic"},{default:n(()=>[r(D,{"file-list":t.doctorPic,"onUpdate:file-list":e[1]||(e[1]=s=>t.doctorPic=s),accept:"image/*"},{default:n(()=>[r(g(p),null,{default:n(()=>[X]),_:1})]),_:1},8,["file-list"])]),_:1}),r(l,{label:"\u91AB\u5E2B\u4ECB\u7D39",path:"doctorDescription"},{"clear-icon":n(()=>[r(P,{component:o.TrashBinOutline},null,8,["component"])]),default:n(()=>[r(u,{value:t.doctorDescription,"onUpdate:value":e[2]||(e[2]=s=>t.doctorDescription=s),placeholder:"Textarea",type:"textarea",round:"",clearable:"",autosize:{minRows:3}},null,8,["value"])]),_:1}),r(l,{label:"\u662F\u5426\u4E0A\u7DDA",path:"doctorShow"},{default:n(()=>[r(M,{checked:t.doctorShow,"onUpdate:checked":e[3]||(e[3]=s=>t.doctorShow=s)},{default:n(()=>[ee]),_:1},8,["checked"])]),_:1}),i("div",te,[i("a",oe,[r(F,{show:t.show},{default:n(()=>[re]),_:1},8,["show"])])])]),_:1},8,["model","size","onSubmit"])]),_:1},8,["show","segmented"])])}}};export{_e as default};