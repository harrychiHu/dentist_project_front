import{C as u,u as S,r as T,ac as q,o as C,c as U,b as r,w as i,bt as B,a as s,bw as N,ad as P,L as d,aq as z,S as _,aE as A,bu as F,N as R,bv as V}from"./index.3d3d0521.js";import{Q as $}from"./vue-quill.esm-bundler.8d82d1da.js";import{_ as Q}from"./DatePicker.d3a65474.js";import{_ as j}from"./Upload.e2a5f1e9.js";import{_ as I}from"./Select.8fa80892.js";import{_ as L}from"./Checkbox.d3f72466.js";import"./Image.1445e8be.js";const M={id:"ArticleEditor"},O=s("h1",null,"\u6587\u7AE0\u7BA1\u7406",-1),W=d("\u4E0A\u50B3\u6587\u7AE0\u5716\u7247"),G=d(" \u4E0A\u67B6 "),H={style:{display:"flex","justify-content":"flex-end"},class:"submitButton"},J={href:"#admin/admin-article-setting"},K=s("button",{type:"submit"},"\u4FDD\u5B58",-1),le={__name:"AdminArticleEditorSettingView",setup(X){const p=u("medium"),m=u(null),f=S(),t=T({_id:"",articleTitle:"",articleDate:Date.now(),articlePic:[],articleDescription:"",articleShow:!1,idx:-1,show:!1,articleEditor:"",articleCategory:""}),h={articleTitle:{required:!0,trigger:["blur","input"],validator(o,e){if(e){if(e.length<=1)return new Error("\u5B57\u6578\u4E0D\u80FD\u5C11\u65BC2");if(e.length>29)return new Error("\u5B57\u6578\u4E0D\u80FD\u591A\u65BC30")}else return new Error("\u9700\u8981\u6A19\u984C");return!0}},articleDescription:{required:!0,trigger:["blur","input"],validator(o,e){if(e){if(e.length<=9)return new Error("\u5B57\u6578\u4E0D\u80FD\u5C11\u65BC10");if(e.length>149)return new Error("\u5B57\u6578\u4E0D\u80FD\u591A\u65BC150")}else return new Error("\u9700\u8981\u63CF\u8FF0");return!0}},articlePic:{required:!0,validator(o,e){var a,l,c;if(e){if(!e.length||((l=(a=e[0])==null?void 0:a.type)==null?void 0:l.includes("image"))&&((c=e[0])==null?void 0:c.size)<1024*1024)return new Error("\u6A94\u6848\u683C\u5F0F\u4E0D\u7B26")}else return new Error("\u9700\u8981\u5716\u7247");return!0}},articleEditor:{required:!0},articleCategory:{required:!0},articleDate:{required:!0}},g=[{label:"\u9F52\u984E\u77EF\u6B63",key:"orthodontics",value:"\u9F52\u984E\u77EF\u6B63"},{label:"\u4EBA\u5DE5\u690D\u7259",key:"dental implant",value:"\u4EBA\u5DE5\u690D\u7259"},{label:"\u7F8E\u5BB9\u7259\u79D1",key:"aesthetic",value:"\u7F8E\u5BB9\u7259\u79D1"},{label:"\u5BB6\u5EAD\u7259\u79D1",key:"family dentistry division",value:"\u5BB6\u5EAD\u7259\u79D1"}],b=async()=>{t.show=!0;const o=new FormData;for(const e in t)["_id","idx","show"].includes(e)||(e==="articlePic"?o.append(e,t[e][0].file):o.append(e,t[e]));try{t._id.length===0&&(await z.post("/articles",o),_.fire({icon:"success",title:"\u6210\u529F",text:"\u65B0\u589E\u6210\u529F"}),f.push("/admin/admin-article-setting"))}catch(e){console.log(e),_.fire({icon:"error",title:"\u5931\u6557",text:e.isAxiosError?e.response.data.message:e.message})}t.show=!1};return(o,e)=>{const a=A,l=F,c=Q,w=R,y=j,v=q,E=I,x=L,k=V,D=N;return C(),U("section",M,[O,r(D,{class:"articleForm",ref_key:"formRef",ref:m,model:t,rules:h,"label-placement":"left","label-width":"auto","require-mark-placement":"right-hanging",size:p.value,style:{maxWidth:"1000px"},onSubmit:B(b,["prevent"])},{default:i(()=>[r(l,{label:"\u6587\u7AE0\u6A19\u984C",path:"articleTitle"},{default:i(()=>[r(a,{value:t.articleTitle,"onUpdate:value":e[0]||(e[0]=n=>t.articleTitle=n),placeholder:"\u8ACB\u8F38\u5165\u6587\u7AE0\u6A19\u984C"},null,8,["value"])]),_:1}),r(l,{label:"\u6587\u7AE0\u65E5\u671F",path:"articleDate"},{default:i(()=>[r(c,{value:t.articleDate,"onUpdate:value":e[1]||(e[1]=n=>t.articleDate=n),type:"datetime",clearable:""},null,8,["value"])]),_:1}),r(l,{label:"\u6587\u7AE0\u5716\u7247",path:"articlePic"},{default:i(()=>[r(y,{"file-list":t.articlePic,"onUpdate:file-list":e[2]||(e[2]=n=>t.articlePic=n),accept:"image/*"},{default:i(()=>[r(w,null,{default:i(()=>[W]),_:1})]),_:1},8,["file-list"])]),_:1}),r(l,{label:"\u6587\u7AE0\u63CF\u8FF0",path:"articleDescription"},{"clear-icon":i(()=>[r(v,{component:o.TrashBinOutline},null,8,["component"])]),default:i(()=>[r(a,{value:t.articleDescription,"onUpdate:value":e[3]||(e[3]=n=>t.articleDescription=n),placeholder:"Textarea",type:"textarea",round:"",clearable:"",autosize:{minRows:3}},null,8,["value"])]),_:1}),r(l,{label:"\u6587\u7AE0\u5167\u5BB9",path:"articleEditor"},{default:i(()=>[s("div",null,[r(P($),{toolbar:"full",content:t.articleEditor,"onUpdate:content":e[4]||(e[4]=n=>t.articleEditor=n),contentType:"html"},null,8,["content"])])]),_:1}),r(l,{label:"\u9078\u64C7\u5206\u985E",path:"articleCategory"},{default:i(()=>[r(E,{value:t.articleCategory,"onUpdate:value":e[5]||(e[5]=n=>t.articleCategory=n),options:g,placeholder:"\u9078\u64C7\u5206\u985E"},null,8,["value"])]),_:1}),r(l,{label:"\u662F\u5426\u4E0A\u67B6",path:"articleShow"},{default:i(()=>[r(x,{checked:t.articleShow,"onUpdate:checked":e[6]||(e[6]=n=>t.articleShow=n)},{default:i(()=>[G]),_:1},8,["checked"])]),_:1}),s("div",H,[s("a",J,[r(k,{show:t.show},{default:i(()=>[K]),_:1},8,["show"])])])]),_:1},8,["model","size","onSubmit"])])}}};export{le as default};