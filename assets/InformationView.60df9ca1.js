import{u as r,r as _,o as s,c as e,a,b as d,w as l,d as u,e as h,S as m,_ as p,F as b,f as v,g}from"./index.d9d4ca77.js";const f="/assets/information01.6e7033e9.png",w={class:"container"},x=u('<section class="bg" id="about_header"><div class="title section"><h2>\u8A3A\u6240\u8CC7\u8A0A</h2><h3>ABOUT</h3></div></section><section id="about_content"><div class="about_wrap section"><div class="about_card"><img src="'+f+'"></div><div class="about_card"><h2>\u8A3A\u6240\u4ECB\u7D39</h2><p>\u559C\u6A02\u82BD\u7259\u91AB\u8A3A\u6240 (\u539F\u5927\u76F4\u7259\u91AB\u8A3A\u6240) \u4F4D\u65BC\u53F0\u5317\u5E02\u677E\u5C71\u5340 \u5C08\u696D\u77EF\u6B63\u7259\u91AB\u8A3A\u6240\uFF0C\u63D0\u4F9B\u5168\u65B9\u4F4D\u53E3\u8154\u91AB\u7642\u7167\u8B77\u3002\u53E6\u57282019\u5E74\u5728\u5B9C\u862D\u5E02\u5B9C\u4E2D\u8DEF\u4E0A,\u958B\u7ACB\u559C\u6A02\u82BD\u7259\u91AB\u8A3A\u6240\u5B9C\u862D\u5206\u90E8\uFF0C\u5168\u65B0\u5343\u842C\u7B49\u7D1A\u91AB\u7642\u5100\u5668\u8A2D\u5099\u8207\u88DD\u6F62\u3002<br> \u53F0\u5927\u78A9\u58EB\u91AB\u5E2B\u5718\u968A\u91AB\u7642\uFF0C\u63D0\u4F9B\u5B89\u5168 \u8212\u9069\u7684\u91AB\u7642\u74B0\u5883 \u8207 \u73FE\u4EE3\u5316\u5100\u5668\u8A2D\u5099 \u4E4B\u5916 \u6CE8\u91CD\u7121\u83CC\u89C0\u5FF5\uFF0C\u4E00\u4EBA\u4E00\u6A5F\uFF0C\u624B\u8853\u7528\u8A3A\u7642\u6905\u3002\u8A3A\u6240\u5099\u6709\u91AB\u5B78\u4E2D\u5FC3\u7D1A\u74B0\u53E3\u6578\u4F4D\u96FB\u8166\u653E\u5C04\u7DDA\u8A3A\u65B7\u5100\uFF0C\u5F71\u50CF\u6E05\u6670\u8A3A\u65B7\u7CBE\u78BA\uFF0C\u65B9\u4FBF\u89E3\u8AAA\u75C5\u6CC1\u3002\u8A3A\u7642\u9805\u76EE\u5305\u62EC\u4EBA\u5DE5\u690D\u7259\u3001\u9F52\u984E\u77EF\u6B63\u3001\u56FA\u5B9A\u5047\u7259\u542B\u5168\u74F7\u7259\u51A0\u3001\u7259\u9F52\u7F8E\u767D\u3001\u4E00\u822C\u7259\u79D1\u7B49\u7B49\u3002 \u5F37\u8ABF\u91AB\u7642\u54C1\u8CEA\u53CA\u670D\u52D9\uFF0C\u74B0\u5883\u8212\u9069\u3002 </p></div></div></section><section id="about_timetable" class="bg"><div class="timetable section"><h2>\u770B\u8A3A\u6642\u9593</h2><div class="timetable_img"><img src="'+g+'"></div></div></section>',3),y={id:"about_pic"},B={class:"section pic"},V=a("h2",null,"\u74B0\u5883\u8207\u8A2D\u5099",-1),k=["src"],C={__name:"InformationView",setup(N){const c=r(),o=_([]);return(async()=>{try{const{data:t}=await h.get("/banners/allHome");o.push(...t.result)}catch{m.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u5546\u54C1\u8CC7\u6599\u5931\u6557"}),c.go(-1)}})(),(t,F)=>{const n=p;return s(),e("div",w,[x,a("section",y,[a("div",B,[V,d(n,{"show-arrow":"",autoplay:"",draggable:""},{default:l(()=>[(s(!0),e(b,null,v(o,i=>(s(),e("img",{class:"carousel-img",src:i.bannerPic,key:i._id},null,8,k))),128))]),_:1})])])])}}};export{C as default};
