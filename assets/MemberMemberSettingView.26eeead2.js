import{E as l,G as i,W as _,o as u,c as d,a as s,b as p,D as m,t as a,k as n,n as h,S as v,O as f}from"./index.88006003.js";const b={id:"memberMemberContent"},g=s("h1",null,"\u6703\u54E1\u8CC7\u6599",-1),x={class:"memberList"},S={class:"avatar"},N={class:"form"},V={class:"formContent"},k=n(" \u59D3\u540D\uFF1A"),w=n(" \u5E33\u865F\uFF1A"),y=n(" \u4FE1\u7BB1\uFF1A"),B=n(" \u624B\u6A5F\u865F\u78BC\uFF1A"),D={__name:"MemberMemberSettingView",setup(E){const o=l(),{avatar:r}=i(o),t=_([]);return(async()=>{try{const{data:e}=await h.get("/users/");t.value=e.result}catch(e){v.fire({icon:"error",title:"\u5931\u6557",text:e.isAxiosError?e.response.data.message:e.message})}})(),(e,A)=>{const c=f;return u(),d("section",b,[g,s("div",x,[s("div",S,[p(c,{round:"",size:150,src:m(r)},null,8,["src"])]),s("div",N,[s("div",V,[s("p",null,[k,s("span",null,a(t.value.name),1)]),s("p",null,[w,s("span",null,a(t.value.account),1)]),s("p",null,[y,s("span",null,a(t.value.email),1)]),s("p",null,[B,s("span",null,a(t.value.phoneNr),1)])])])])])}}};export{D as default};
