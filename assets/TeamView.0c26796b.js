import{u as _,r as u,o as a,c as o,a as t,F as d,f as m,e as h,S as p,h as g,w as c,t as i,i as f}from"./index.7757ae15.js";const w={class:"container"},v=t("section",{class:"bg",id:"team_header"},[t("div",{class:"title section"},[t("h2",null,"\u91AB\u5E2B\u4ECB\u7D39"),t("h3",null,"TEAM")])],-1),k={id:"team_content"},x={class:"team_row section"},y=["src"],T={__name:"TeamView",setup(B){const r=_(),n=u([]);return(async()=>{try{const{data:s}=await h.get("/doctors/allHome");n.push(...s.result)}catch{p.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u5546\u54C1\u8CC7\u6599\u5931\u6557"}),r.go(-1)}})(),(s,E)=>{const l=f;return a(),o("div",w,[v,t("section",k,[t("div",x,[(a(!0),o(d,null,m(n,e=>(a(),g(l,{key:e._id},{cover:c(()=>[t("img",{src:e.image},null,8,y)]),default:c(()=>[t("h2",null,i(e.name),1),t("p",null,i(e.description),1)]),_:2},1024))),128))])])])}}};export{T as default};
