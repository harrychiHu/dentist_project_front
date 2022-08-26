import{V as w,u as R,r as b,o as U,c as j,a as i,b as s,w as o,C as p,L as _,S as r,bg as H,N as m,bh as T,k as x,ar as $,bn as D,bi as I,bj as L,A as f}from"./index.d761683c.js";import{_ as W,N as G}from"./Upload.fe7e9eec.js";import{_ as J}from"./DataTable.c80ac2bb.js";import"./get-slot.65c4337d.js";import"./Select.1926cd0a.js";const K={id:"HomeSetting"},O=i("h1",null,"\u9996\u9801\u7BA1\u7406",-1),P=i("h2",null,"Banner",-1),Q={class:"editorButton"},X=x(" \u65B0\u589E "),Y={class:"bannerFormContent"},Z=x("\u4E0A\u50B3\u5716\u7247"),ee={style:{display:"flex","justify-content":"flex-end"},class:"submitButton"},te={href:"#admin/"},ne=i("button",{type:"submit",class:"saveBtnBanner"},"\u4FDD\u5B58",-1),de={__name:"AdminHomeSettingView",setup(se){const y=w("medium"),C=w(null),k={width:"600px"},B=R(),E=()=>[{title:"\u6A19\u984C",key:"title"},{title:"\u5716\u7247",key:"image",render(n){return f(G,{strong:!0,tertiary:!0,width:100,src:n.image},{default:()=>"\u522A\u9664"})}},{title:"\u7DE8\u8F2F",key:"editor",render(n){return f(m,{strong:!0,tertiary:!0,size:"small",class:"bg-editor",onClick:()=>g(n._id,n.idx)},{default:()=>"\u7DE8\u8F2F"})}},{title:"\u522A\u9664",key:"del",render(n){return f(m,{strong:!0,tertiary:!0,size:"small",class:"bg-del",onClick:()=>z(n._id)},{default:()=>"\u522A\u9664"})}}],t=b({_id:"",title:"",image:[],idx:-1,showModal:!1,show:!1}),a=b([]),v={title:{required:!0,trigger:["blur","input"],validator(n,e){if(e){if(e.length<=1)return new Error("\u5B57\u6578\u4E0D\u80FD\u5C11\u65BC2");if(e.length>=10)return new Error("\u5B57\u6578\u4E0D\u80FD\u591A\u65BC10")}else return new Error("\u9700\u8981\u6A19\u984C");return!0}},image:{required:!0,validator(n,e){var l,c,u;if(e){if(!e.length||((c=(l=e[0])==null?void 0:l.type)==null?void 0:c.includes("image"))&&((u=e[0])==null?void 0:u.size)<1024*1024)return new Error("\u6A94\u6848\u683C\u5F0F\u4E0D\u7B26")}else return new Error("\u9700\u8981\u5716\u7247");return!0}}},g=(n,e)=>{t._id=n,e>-1?(t.title=a[e].title,t.image=a[e].image):t.title="",t.showModal=!0,t.image=[],t.idx},M=async()=>{t.show=!0;const n=new FormData;for(const e in t)["_id","idx","show"].includes(e)||(e==="image"?t.image.length>0&&n.append(e,t[e][0].file):n.append(e,t[e]));try{if(t._id.length===0)await _.post("/banners",n),r.fire({icon:"success",title:"\u6210\u529F",text:"\u65B0\u589E\u6210\u529F"}),B.push("/admin/admin-home-setting");else{const{data:e}=await _.patch("/banners/"+t._id,n);a[t.idx]=e.result,r.fire({icon:"success",title:"\u6210\u529F",text:"\u7DE8\u8F2F\u6210\u529F"})}t.showModal=!1}catch(e){r.fire({icon:"error",title:"\u5931\u6557",text:e.isAxiosError?e.response.data.message:e.message}),t.showModal=!1}t.show=!1},z=n=>{r.fire({title:"\u78BA\u5B9A\u522A\u9664\u55CE?",text:"\u522A\u9664\u5F8C\u7121\u6CD5\u56DE\u5FA9!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"\u5C0D\uFF0C\u522A\u9664!"}).then(async e=>{await _.delete("/banners/"+n),e.isConfirmed&&r.fire("\u522A\u9664\u6210\u529F","\u6210\u529F"),h()}).catch(e=>{r.fire({icon:"error",title:"\u5931\u6557",text:e.isAxiosError?e.response.data.message:e.message})})},h=async()=>{try{let n=0;const{data:e}=await _.get("./banners/all");a.push(...e.result),a.forEach(l=>{l.idx=n++})}catch(n){r.fire({icon:"error",title:"\u5931\u6557",text:n.isAxiosError?n.response.data.message:n.message})}};h();const S={pageSize:5},N=E();return(n,e)=>{const l=J,c=$,u=D,A=W,F=I,V=L,q=H;return U(),j("section",K,[O,P,i("div",Q,[s(p(m),{type:"primary",color:"#64C1C6",onClick:e[0]||(e[0]=d=>g("",-1))},{default:o(()=>[X]),_:1})]),i("div",Y,[i("div",null,[s(l,{columns:p(N),data:a,pagination:S,bordered:!1},null,8,["columns","data"])]),s(q,{show:t.showModal,"onUpdate:show":e[3]||(e[3]=d=>t.showModal=d),class:"editCard",preset:"card",style:k,title:"\u7DE8\u8F2F\u8F2A\u64AD\u5716\u8868\u55AE",size:"huge",bordered:!1},{default:o(()=>[s(V,{class:"bannerForm",ref_key:"formRef",ref:C,model:t,rules:v,"label-placement":"left","label-width":"auto","require-mark-placement":"right-hanging",size:y.value,style:{maxWidth:"1000px"},onSubmit:T(M,["prevent"])},{default:o(()=>[s(u,{label:"\u5716\u7247\u6A19\u984C",path:"title"},{default:o(()=>[s(c,{value:t.title,"onUpdate:value":e[1]||(e[1]=d=>t.title=d),placeholder:"\u8ACB\u8F38\u5165\u5716\u7247\u6A19\u984C"},null,8,["value"])]),_:1}),s(u,{label:"\u5716\u7247",path:"image"},{default:o(()=>[s(A,{"file-list":t.image,"onUpdate:file-list":e[2]||(e[2]=d=>t.image=d),accept:"image/*",max:1},{default:o(()=>[s(p(m),null,{default:o(()=>[Z]),_:1})]),_:1},8,["file-list"])]),_:1}),i("div",ee,[i("a",te,[s(F,{show:t.show},{default:o(()=>[ne]),_:1},8,["show"])])])]),_:1},8,["model","size","onSubmit"])]),_:1},8,["show"])])])}}};export{de as default};