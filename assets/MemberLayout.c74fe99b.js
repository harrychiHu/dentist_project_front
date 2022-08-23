import{O as ne,j as se,aI as ae,aK as U,k as d,m as T,bL as q,p as $,s as V,C as j,q as G,v as J,bM as Q,y as R,z as Z,A as l,aR as ee,B as ie,n as c,l as P,a2 as ce,aY as de,H as ue,aC as he,x as D,bN as be,ab as H,av as N,o as O,c as F,a as y,ah as ge,ai as me,aj as fe,b as p,w,t as ve,ad as x,h as pe,ac as Y,am as K,an as ye,ak as X,L as A,ao as _e,ap as Ce,N as xe,al as Se}from"./index.191661c7.js";import{S as we}from"./Search.76395c98.js";const Te=e=>{const{baseColor:o,textColor2:t,bodyColor:s,cardColor:m,dividerColor:g,actionColor:S,scrollbarColor:_,scrollbarColorHover:f,invertedColor:h}=e;return{textColor:t,textColorInverted:"#FFF",color:s,colorEmbedded:S,headerColor:m,headerColorInverted:h,footerColor:S,footerColorInverted:h,headerBorderColor:g,headerBorderColorInverted:h,footerBorderColor:g,footerBorderColorInverted:h,siderBorderColor:g,siderBorderColorInverted:h,siderColor:m,siderColorInverted:h,siderToggleButtonBorder:`1px solid ${g}`,siderToggleButtonColor:o,siderToggleButtonIconColor:t,siderToggleButtonIconColorInverted:t,siderToggleBarColor:U(s,_),siderToggleBarColorHover:U(s,f),__invertScrollbar:"true"}},Be=ne({name:"Layout",common:se,peers:{Scrollbar:ae},self:Te}),oe=Be,ze=d("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[d("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),T("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),ke={embedded:Boolean,position:q,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},te=ie("n-layout");function Ie(e){return $({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},V.props),ke),setup(o){const t=j(null),s=j(null),{mergedClsPrefixRef:m,inlineThemeDisabled:g}=G(o),S=V("Layout","-layout",ze,oe,o,m);function _(a,u){if(o.nativeScrollbar){const{value:b}=t;b&&(u===void 0?b.scrollTo(a):b.scrollTo(a,u))}else{const{value:b}=s;b&&b.scrollTo(a,u)}}J(te,o);let f=0,h=0;const E=a=>{var u;const b=a.target;f=b.scrollLeft,h=b.scrollTop,(u=o.onScroll)===null||u===void 0||u.call(o,a)};Q(()=>{if(o.nativeScrollbar){const a=t.value;a&&(a.scrollTop=h,a.scrollLeft=f)}});const B={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},z={scrollTo:_},k=R(()=>{const{common:{cubicBezierEaseInOut:a},self:u}=S.value;return{"--n-bezier":a,"--n-color":o.embedded?u.colorEmbedded:u.color,"--n-text-color":u.textColor}}),v=g?Z("layout",void 0,k,o):void 0;return Object.assign({mergedClsPrefix:m,scrollableElRef:t,scrollbarInstRef:s,hasSiderStyle:B,mergedTheme:S,handleNativeElScroll:E,cssVars:g?void 0:k,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender},z)},render(){var o;const{mergedClsPrefix:t,hasSider:s}=this;(o=this.onRender)===null||o===void 0||o.call(this);const m=s?this.hasSiderStyle:void 0,g=[this.themeClass,e&&`${t}-layout-content`,`${t}-layout`,`${t}-layout--${this.position}-positioned`];return l("div",{class:g,style:this.cssVars},this.nativeScrollbar?l("div",{ref:"scrollableElRef",class:`${t}-layout-scroll-container`,style:[this.contentStyle,m],onScroll:this.handleNativeElScroll},this.$slots):l(ee,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,m]}),this.$slots))}})}const Le=Ie(!1),Re=d("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[T("bordered",[c("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),c("left-placement",[T("bordered",[c("border",`
 right: 0;
 `)])]),T("right-placement",`
 justify-content: flex-start;
 `,[T("bordered",[c("border",`
 left: 0;
 `)]),T("collapsed",[d("layout-toggle-button",[d("base-icon",`
 transform: rotate(180deg);
 `)]),d("layout-toggle-bar",[P("&:hover",[c("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),c("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),d("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[d("base-icon",`
 transform: rotate(0);
 `)]),d("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[P("&:hover",[c("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),c("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),T("collapsed",[d("layout-toggle-bar",[P("&:hover",[c("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),c("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),d("layout-toggle-button",[d("base-icon",`
 transform: rotate(0);
 `)])]),d("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[d("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),d("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[c("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),c("bottom",`
 position: absolute;
 top: 34px;
 `),P("&:hover",[c("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),c("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),c("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),P("&:hover",[c("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),c("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),d("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),T("show-content",[d("layout-sider-scroll-container",{opacity:1})]),T("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),$e=$({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return l("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},l(ce,{clsPrefix:e},{default:()=>l(de,null)}))}}),Pe=$({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return l("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},l("div",{class:`${e}-layout-toggle-bar__top`}),l("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),je={position:q,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},Oe=$({name:"LayoutSider",props:Object.assign(Object.assign({},V.props),je),setup(e){const o=ue(te),t=j(null),s=j(null),m=R(()=>H(f.value?e.collapsedWidth:e.width)),g=R(()=>e.collapseMode!=="transform"?{}:{minWidth:H(e.width)}),S=R(()=>o?o.siderPlacement:"left"),_=j(e.defaultCollapsed),f=he(D(e,"collapsed"),_);function h(i,r){if(e.nativeScrollbar){const{value:n}=t;n&&(r===void 0?n.scrollTo(i):n.scrollTo(i,r))}else{const{value:n}=s;n&&n.scrollTo(i,r)}}function E(){const{"onUpdate:collapsed":i,onUpdateCollapsed:r,onExpand:n,onCollapse:M}=e,{value:L}=f;r&&N(r,!L),i&&N(i,!L),_.value=!L,L?n&&N(n):M&&N(M)}let B=0,z=0;const k=i=>{var r;const n=i.target;B=n.scrollLeft,z=n.scrollTop,(r=e.onScroll)===null||r===void 0||r.call(e,i)};Q(()=>{if(e.nativeScrollbar){const i=t.value;i&&(i.scrollTop=z,i.scrollLeft=B)}}),J(be,{collapsedRef:f,collapseModeRef:D(e,"collapseMode")});const{mergedClsPrefixRef:v,inlineThemeDisabled:a}=G(e),u=V("Layout","-layout-sider",Re,oe,e,v);function b(i){var r,n;i.propertyName==="max-width"&&(f.value?(r=e.onAfterLeave)===null||r===void 0||r.call(e):(n=e.onAfterEnter)===null||n===void 0||n.call(e))}const re={scrollTo:h},W=R(()=>{const{common:{cubicBezierEaseInOut:i},self:r}=u.value,{siderToggleButtonColor:n,siderToggleButtonBorder:M,siderToggleBarColor:L,siderToggleBarColorHover:le}=r,C={"--n-bezier":i,"--n-toggle-button-color":n,"--n-toggle-button-border":M,"--n-toggle-bar-color":L,"--n-toggle-bar-color-hover":le};return e.inverted?(C["--n-color"]=r.siderColorInverted,C["--n-text-color"]=r.textColorInverted,C["--n-border-color"]=r.siderBorderColorInverted,C["--n-toggle-button-icon-color"]=r.siderToggleButtonIconColorInverted,C.__invertScrollbar=r.__invertScrollbar):(C["--n-color"]=r.siderColor,C["--n-text-color"]=r.textColor,C["--n-border-color"]=r.siderBorderColor,C["--n-toggle-button-icon-color"]=r.siderToggleButtonIconColor),C}),I=a?Z("layout-sider",R(()=>e.inverted?"a":"b"),W,e):void 0;return Object.assign({scrollableElRef:t,scrollbarInstRef:s,mergedClsPrefix:v,mergedTheme:u,styleMaxWidth:m,mergedCollapsed:f,scrollContainerStyle:g,siderPlacement:S,handleNativeElScroll:k,handleTransitionend:b,handleTriggerClick:E,inlineThemeDisabled:a,cssVars:W,themeClass:I==null?void 0:I.themeClass,onRender:I==null?void 0:I.onRender},re)},render(){var e;const{mergedClsPrefix:o,mergedCollapsed:t,showTrigger:s}=this;return(e=this.onRender)===null||e===void 0||e.call(this),l("aside",{class:[`${o}-layout-sider`,this.themeClass,`${o}-layout-sider--${this.position}-positioned`,`${o}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${o}-layout-sider--bordered`,t&&`${o}-layout-sider--collapsed`,(!t||this.showCollapsedContent)&&`${o}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:H(this.width)}]},this.nativeScrollbar?l("div",{class:`${o}-layout-sider-scroll-container`,onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):l(ee,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),s?s==="bar"?l(Pe,{clsPrefix:o,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):l($e,{clsPrefix:o,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?l("div",{class:`${o}-layout-sider__border`}):null)}}),Ee={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 384 512"},Me=y("path",{d:"M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM96 424c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24zm96-192c13.3 0 24 10.7 24 24s-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24zm128 368c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z",fill:"currentColor"},null,-1),Ne=[Me],Ve=$({name:"ClipboardList",render:function(o,t){return O(),F("svg",Ee,Ne)}}),Fe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 576 512"},He=y("path",{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z",fill:"currentColor"},null,-1),Ye=[He],Ae=$({name:"Home",render:function(o,t){return O(),F("svg",Fe,Ye)}}),We={class:"container"},Ue={id:"memberContent"},De={class:"avatarList"},Ke={class:"avatarText"},Xe={href:"#member"},qe=A("\u6703\u54E1\u8CC7\u6599"),Ge={key:0,href:"#admin"},Je=A("\u7BA1\u7406"),Qe=A(" \u767B\u51FA"),Ze={class:"memberWrap"},eo={class:"memberSection"},ro={__name:"MemberLayout",setup(e){const o=ge(),{logout:t}=o,{isLogin:s,isAdmin:m,avatar:g,name:S}=me(o);function _(h){return()=>l(Y,null,{default:()=>l(h)})}const f=[{label:()=>l("a",{href:"#member"},"\u6703\u54E1\u8CC7\u6599"),key:"member-member-setting",icon:_(K)},{label:()=>l("a",{href:"#member/member-resever"},"\u7DDA\u4E0A\u9810\u7D04"),key:"member-resever",icon:_(Ve)},{label:()=>l("a",{href:"#member/member-check-resever"},"\u67E5\u770B\u9810\u7D04"),key:"member-check-resever",icon:_(we)},{label:()=>l("a",{href:"#"},"\u56DE\u9996\u9801"),key:"home",icon:_(Ae)}];return(h,E)=>{const B=_e,z=Oe,k=Ce,v=xe,a=Se,u=fe("router-view"),b=Le;return O(),F("div",We,[y("section",Ue,[p(b,{"has-sider":"",class:"memberLeft"},{default:w(()=>[p(z,{bordered:"","collapse-mode":"width","collapsed-width":64,width:240,"show-trigger":""},{default:w(()=>[p(B,{"collapsed-width":64,"collapsed-icon-size":22,options:f})]),_:1}),p(b,{class:"memberRight"},{default:w(()=>[y("div",De,[y("p",Ke,"\u6B61\u8FCE\u60A8\uFF0C"+ve(x(S)),1),x(s)?(O(),pe(a,{key:0,placement:"bottom",trigger:"hover"},{trigger:w(()=>[p(v,{circle:"",color:"#fff",class:"avatar"},{default:w(()=>[p(k,{round:"",size:"small",src:x(g)},null,8,["src"])]),_:1})]),default:w(()=>[y("ul",null,[y("li",null,[y("a",Xe,[p(x(Y),null,{default:w(()=>[p(x(K))]),_:1}),qe])]),y("li",null,[x(s)&&x(m)?(O(),F("a",Ge,[p(x(Y),null,{default:w(()=>[p(x(ye))]),_:1}),Je])):X("",!0)]),y("li",null,[p(v,{size:"medium",color:"#64C1C6",onClick:x(t)},{default:w(()=>[Qe]),_:1},8,["onClick"])])])]),_:1})):X("",!0)]),y("div",Ze,[y("div",eo,[p(u)])])]),_:1})]),_:1})])])}}};export{ro as default};
