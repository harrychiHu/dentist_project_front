import{u as _,r as u,o,c,a as t,F as d,f as m,e as h,S as p,h as g,w as n,t as r,i as f}from"./index.3d3d0521.js";const w={class:"container"},v=t("section",{class:"bg",id:"team_header"},[t("div",{class:"title section"},[t("h2",null,"\u91AB\u5E2B\u4ECB\u7D39"),t("h3",null,"TEAM")])],-1),k={id:"team_content"},x={class:"team_row section"},y=["src"],F={__name:"TeamView",setup(B){const i=_(),a=u([]);return(async()=>{try{const{data:s}=await h.get("/doctors/allHome");a.push(...s.result)}catch{p.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u5546\u54C1\u8CC7\u6599\u5931\u6557"}),i.go(-1)}})(),(s,D)=>{const l=f;return o(),c("div",w,[v,t("section",k,[t("div",x,[(o(!0),c(d,null,m(a,e=>(o(),g(l,{key:e._id},{cover:n(()=>[t("img",{src:e.doctorPic},null,8,y)]),default:n(()=>[t("h2",null,r(e.doctorName),1),t("p",null,r(e.doctorDescription),1)]),_:2},1024))),128))])])])}}};export{F as default};