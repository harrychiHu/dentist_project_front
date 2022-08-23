import{j as w,k as m,l,m as H,n as v,p as k,q as j,s as B,v as E,x as N,y as x,z as S,A as _,B as V,C as I,D as $,E as A,G as O,H as K,I as M,J as D,o as q,c as F,a,b as u,w as b,K as G,N as J,L as f}from"./index.191661c7.js";import{N as U}from"./Image.a28a7f8e.js";const Q={fontWeightActive:"400"},X=e=>{const{fontSize:n,textColor3:t,textColor2:r,borderRadius:s,buttonColor2Hover:o,buttonColor2Pressed:i}=e;return Object.assign(Object.assign({},Q),{fontSize:n,itemLineHeight:"1.25",itemTextColor:t,itemTextColorHover:r,itemTextColorPressed:r,itemTextColorActive:r,itemBorderRadius:s,itemColorHover:o,itemColorPressed:i,separatorColor:t})},Y={name:"Breadcrumb",common:w,self:X},Z=Y,W=m("breadcrumb",`
 white-space: nowrap;
 cursor: default;
 line-height: var(--n-item-line-height);
`,[l("ul",`
 list-style: none;
 padding: 0;
 margin: 0;
 `),l("a",`
 color: inherit;
 text-decoration: inherit;
 `),m("breadcrumb-item",`
 font-size: var(--n-font-size);
 transition: color .3s var(--n-bezier);
 display: inline-flex;
 align-items: center;
 `,[m("icon",`
 font-size: 18px;
 vertical-align: -.2em;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `),l("&:not(:last-child)",[H("clickable",[v("link",`
 cursor: pointer;
 `,[l("&:hover",`
 background-color: var(--n-item-color-hover);
 `),l("&:active",`
 background-color: var(--n-item-color-pressed); 
 `)])])]),v("link",`
 padding: 4px;
 border-radius: var(--n-item-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 position: relative;
 `,[l("&:hover",`
 color: var(--n-item-text-color-hover);
 `,[m("icon",`
 color: var(--n-item-text-color-hover);
 `)]),l("&:active",`
 color: var(--n-item-text-color-pressed);
 `,[m("icon",`
 color: var(--n-item-text-color-pressed);
 `)])]),v("separator",`
 margin: 0 8px;
 color: var(--n-separator-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 `),l("&:last-child",[v("link",`
 font-weight: var(--n-font-weight-active);
 cursor: unset;
 color: var(--n-item-text-color-active);
 `,[m("icon",`
 color: var(--n-item-text-color-active);
 `)]),v("separator",`
 display: none;
 `)])])]),R=V("n-breadcrumb"),ee=Object.assign(Object.assign({},B.props),{separator:{type:String,default:"/"}}),te=k({name:"Breadcrumb",props:ee,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=j(e),r=B("Breadcrumb","-breadcrumb",W,Z,e,n);E(R,{separatorRef:N(e,"separator"),mergedClsPrefixRef:n});const s=x(()=>{const{common:{cubicBezierEaseInOut:i},self:{separatorColor:h,itemTextColor:c,itemTextColorHover:d,itemTextColorPressed:p,itemTextColorActive:g,fontSize:C,fontWeightActive:z,itemBorderRadius:L,itemColorHover:y,itemColorPressed:T,itemLineHeight:P}}=r.value;return{"--n-font-size":C,"--n-bezier":i,"--n-item-text-color":c,"--n-item-text-color-hover":d,"--n-item-text-color-pressed":p,"--n-item-text-color-active":g,"--n-separator-color":h,"--n-item-color-hover":y,"--n-item-color-pressed":T,"--n-item-border-radius":L,"--n-font-weight-active":z,"--n-item-line-height":P}}),o=t?S("breadcrumb",void 0,s,e):void 0;return{mergedClsPrefix:n,cssVars:t?void 0:s,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),_("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},_("ul",null,this.$slots))}}),oe=O?window:null,re=(e=oe)=>{const n=()=>{const{hash:s,host:o,hostname:i,href:h,origin:c,pathname:d,port:p,protocol:g,search:C}=(e==null?void 0:e.location)||{};return{hash:s,host:o,hostname:i,href:h,origin:c,pathname:d,port:p,protocol:g,search:C}},t=()=>{r.value=n()},r=I(n());return $(()=>{e&&(e.addEventListener("popstate",t),e.addEventListener("hashchange",t))}),A(()=>{e&&(e.removeEventListener("popstate",t),e.removeEventListener("hashchange",t))}),r},ne={separator:String,href:String,clickable:{type:Boolean,default:!0},onClick:Function},se=k({name:"BreadcrumbItem",props:ne,setup(e,{slots:n}){const t=K(R,null);if(!t)return()=>null;const{separatorRef:r,mergedClsPrefixRef:s}=t,o=re(),i=x(()=>e.href?"a":"span"),h=x(()=>o.value.href===e.href?"location":null);return()=>{const{value:c}=s;return _("li",{class:[`${c}-breadcrumb-item`,e.clickable&&`${c}-breadcrumb-item--clickable`]},_(i.value,{class:`${c}-breadcrumb-item__link`,"aria-current":h.value,href:e.href,onClick:e.onClick},n),_("span",{class:`${c}-breadcrumb-item__separator`,"aria-hidden":"true"},M(n.separator,()=>{var d;return[(d=e.separator)!==null&&d!==void 0?d:r.value]})))}}}),ae={},ie={class:"container"},ce=a("section",{id:"articleHeader",class:"bg"},[a("div",{class:"title section"},[a("h2",null,"\u4FDD\u5065\u6587\u7AE0"),a("h3",null,"article")])],-1),le={id:"articleContent"},de={class:"content section"},me={class:"header"},ue=f(" \u6642\u9593"),he=f(" \u5206\u985E"),ve={class:"body"},be=a("h2",null,"\u9019\u80FD\u5E79\u561B\uFF1F",-1),_e=f(" \u4E0D\u662F\u4EBA\u7684\u22EF\u5B9A\u9019\u5E7E\u5929\u4E0D\u597D\u610F\uFF0C\u91AB\u751F\u770B\u770B\uFF0C\u6700\u8FD1\u7684\u6587\u5FAE\u5999\u6709\u9019\u6A23\u6C92\uFF0C\u5403\u5E0C\u671B\u80FD\u7684\u6642\u5019\u80FD\u662F\uFF0C\u624D\u90FD\u5728\u4E00\u7684\u6A23\u5B50\u4EFB\u4F55\u4EE5\u524D\u7684\u3002\u7684\u597D\u53B2\u611F\u89BA\uFF1F\u5019\u4E00\u6642\u6709\u8981\u5929\u65E9\u6668\u5340\u4E4B\u985E\u7684\u578B\u6EAB\u4E00\uFF0C\u5728\u540C\u4E00\u81EA\u5DF1\u7D42\u524D\u9053\u671B\u4E0D\u8981\u52A0\u5165\u5F97\u6709\u9EDE\uFF0C\u56E0\u70BA\u6211\u4E0A\u7684\u70BA\u5E78\u798F\u662F\u81EA\u5DF1\u770B\u9EDE\uFF0C\u7136\u53EF\u611B\u6211\u7A2E\u4E8B\u4E4B\u524D\u6709\uFF0C\u4EC0\u771F\u662F\u8981\u5927\u771F\u7684\u22EF\u4F4D\u7F8E\u9E97\u3002\u5C31\u958B\u6211\u771F\u8DDF\u4F60\u767C\u662F\uFF0C\u4E5F\u7B97\u7684\u5C31\u53EF\u6211\u4EBA\u53EF\u80FD\uFF0C\u500B\u4EBA\u5B8C\u5168\u4E0D\u5B78\u6821\u7684\u597D\u5927\u8D85\uFF0C\u662F\u81EA\u4E00\u6D6A\u771F\u7684\u4E0D\u53EA\u8AAA\u90FD\u52AA\u529B\uFF0C\u4F38\u624B\u6642\u5019\uFF0C\u4EE5\u9019\u9EBC\u800C\u4E14\u3002\u96D6\u7136\u6709\uFF1A\u5927\u5B78\u7136\u5F8C\u6211\u6211\u771F\u5566\u9019\u6A23\uFF0C\u6B61\u7684\u662F\u90A3\u9019\u5E0C\u671B\u4F60\u78BC\u5C31\u4E0D\u6703\uFF0C\u597D\u51B7\u5B58\u5728\u6982\u662F\u8ECA\u7684\u610F\u6211\u770B\u5230\uFF0C\u662F\u8AAA\u5916\u7684\u53E6\u4E00\u500B\u6BD4\u8A66\u89BA\u5F97\u9019\u60E0\u5831\u540D\u6642\u3002 "),fe={class:"article_btn"},pe=f(" Read More ");function ge(e,n){const t=U,r=se,s=te,o=G,i=J;return q(),F("div",ie,[ce,a("section",le,[a("div",de,[a("div",me,[u(t,{src:"https://tour.taitung.gov.tw/image/24568/1024x768","preview-disabled":""}),u(s,null,{default:b(()=>[u(r,null,{default:b(()=>[ue]),_:1}),u(r,null,{default:b(()=>[he]),_:1})]),_:1})]),a("div",ve,[be,u(o,{tooltip:!1},{default:b(()=>[_e]),_:1}),a("div",fe,[u(i,{type:"primary",color:"#64C1C6",size:"large",onClick:e.team},{default:b(()=>[pe]),_:1},8,["onClick"])])])])])])}const ke=D(ae,[["render",ge]]);export{ke as default};
