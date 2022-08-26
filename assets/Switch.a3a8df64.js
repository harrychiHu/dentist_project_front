import{n as le,Q as se,p as D,a0 as t,a2 as j,$ as W,a1 as l,an as A,s as de,v as ce,q as K,T as ue,V as H,Y as he,W as be,x as V,y as fe,by as L,A as n,ay as g,a9 as ge,aG as ve,ab as v,aE as M,aA as s,Z as T}from"./index.d761683c.js";const me={buttonHeightSmall:"14px",buttonHeightMedium:"18px",buttonHeightLarge:"22px",buttonWidthSmall:"14px",buttonWidthMedium:"18px",buttonWidthLarge:"22px",buttonWidthPressedSmall:"20px",buttonWidthPressedMedium:"24px",buttonWidthPressedLarge:"28px",railHeightSmall:"18px",railHeightMedium:"22px",railHeightLarge:"26px",railWidthSmall:"32px",railWidthMedium:"40px",railWidthLarge:"48px"},we=e=>{const{primaryColor:d,opacityDisabled:h,borderRadius:o,textColor3:r}=e,m="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},me),{iconColor:r,textColor:"white",loadingColor:d,opacityDisabled:h,railColor:m,railColorActive:d,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:o,railBorderRadiusMedium:o,railBorderRadiusLarge:o,buttonBorderRadiusSmall:o,buttonBorderRadiusMedium:o,buttonBorderRadiusLarge:o,boxShadowFocus:`0 0 0 2px ${se(d,{alpha:.2})}`})},pe={name:"Switch",common:le,self:we},xe=pe,ye=D("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[t("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),t("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),t("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),D("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[j({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),t("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),t("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),t("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),W("&:focus",[t("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),l("round",[t("rail","border-radius: calc(var(--n-rail-height) / 2);",[t("button","border-radius: calc(var(--n-button-height) / 2);")])]),A("disabled",[A("icon",[l("rubber-band",[l("pressed",[t("rail",[t("button","max-width: var(--n-button-width-pressed);")])]),t("rail",[W("&:active",[t("button","max-width: var(--n-button-width-pressed);")])]),l("active",[l("pressed",[t("rail",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),t("rail",[W("&:active",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),l("active",[t("rail",[t("button","left: calc(100% - (var(--n-rail-height) + var(--n-button-width)) / 2)")])]),t("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[t("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[j()]),t("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-width);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),l("active",[t("rail","background-color: var(--n-rail-color-active);")]),l("loading",[t("rail",`
 cursor: wait;
 `)]),l("disabled",[t("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),ke=Object.assign(Object.assign({},K.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]}),Be=de({name:"Switch",props:ke,setup(e){const{mergedClsPrefixRef:d,inlineThemeDisabled:h}=ce(e),o=K("Switch","-switch",ye,xe,e,d),r=ue(e),{mergedSizeRef:m,mergedDisabledRef:b}=r,x=H(e.defaultValue),B=he(e,"value"),f=be(B,x),y=V(()=>f.value===e.checkedValue),w=H(!1),a=H(!1),c=V(()=>{const{railStyle:i}=e;if(!!i)return i({focused:a.value,checked:y.value})});function u(i){const{"onUpdate:value":C,onChange:R,onUpdateValue:_}=e,{nTriggerFormInput:$,nTriggerFormChange:z}=r;C&&T(C,i),_&&T(_,i),R&&T(R,i),x.value=i,$(),z()}function N(){const{nTriggerFormFocus:i}=r;i()}function O(){const{nTriggerFormBlur:i}=r;i()}function U(){e.loading||b.value||(f.value!==e.checkedValue?u(e.checkedValue):u(e.uncheckedValue))}function E(){a.value=!0,N()}function I(){a.value=!1,O(),w.value=!1}function Y(i){e.loading||b.value||i.key===" "&&(f.value!==e.checkedValue?u(e.checkedValue):u(e.uncheckedValue),w.value=!1)}function X(i){e.loading||b.value||i.key===" "&&(i.preventDefault(),w.value=!0)}const P=V(()=>{const{value:i}=m,{self:{opacityDisabled:C,railColor:R,railColorActive:_,buttonBoxShadow:$,buttonColor:z,boxShadowFocus:q,loadingColor:G,textColor:Q,iconColor:Z,[v("buttonHeight",i)]:k,[v("buttonWidth",i)]:J,[v("buttonWidthPressed",i)]:ee,[v("railHeight",i)]:S,[v("railWidth",i)]:F,[v("railBorderRadius",i)]:te,[v("buttonBorderRadius",i)]:ie},common:{cubicBezierEaseInOut:ae}}=o.value,ne=M((s(S)-s(k))/2),oe=M(Math.max(s(S),s(k))),re=s(S)>s(k)?F:M(s(F)+s(k)-s(S));return{"--n-bezier":ae,"--n-button-border-radius":ie,"--n-button-box-shadow":$,"--n-button-color":z,"--n-button-width":J,"--n-button-width-pressed":ee,"--n-button-height":k,"--n-height":oe,"--n-offset":ne,"--n-opacity-disabled":C,"--n-rail-border-radius":te,"--n-rail-color":R,"--n-rail-color-active":_,"--n-rail-height":S,"--n-rail-width":F,"--n-width":re,"--n-box-shadow-focus":q,"--n-loading-color":G,"--n-text-color":Q,"--n-icon-color":Z}}),p=h?fe("switch",V(()=>m.value[0]),P,e):void 0;return{handleClick:U,handleBlur:I,handleFocus:E,handleKeyup:Y,handleKeydown:X,mergedRailStyle:c,pressed:w,mergedClsPrefix:d,mergedValue:f,checked:y,mergedDisabled:b,cssVars:h?void 0:P,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:d,checked:h,mergedRailStyle:o,onRender:r,$slots:m}=this;r==null||r();const{checked:b,unchecked:x,icon:B,"checked-icon":f,"unchecked-icon":y}=m,w=!(L(B)&&L(f)&&L(y));return n("div",{role:"switch","aria-checked":h,class:[`${e}-switch`,this.themeClass,w&&`${e}-switch--icon`,h&&`${e}-switch--active`,d&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},n("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:o},g(b,a=>g(x,c=>a||c?n("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},n("div",{class:`${e}-switch__rail-placeholder`},n("div",{class:`${e}-switch__button-placeholder`}),a),n("div",{class:`${e}-switch__rail-placeholder`},n("div",{class:`${e}-switch__button-placeholder`}),c)):null)),n("div",{class:`${e}-switch__button`},g(B,a=>g(f,c=>g(y,u=>n(ge,null,{default:()=>this.loading?n(ve,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(c||a)?n("div",{class:`${e}-switch__button-icon`,key:c?"checked-icon":"icon"},c||a):!this.checked&&(u||a)?n("div",{class:`${e}-switch__button-icon`,key:u?"unchecked-icon":"icon"},u||a):null})))),g(b,a=>a&&n("div",{key:"checked",class:`${e}-switch__checked`},a)),g(x,a=>a&&n("div",{key:"unchecked",class:`${e}-switch__unchecked`},a)))))}});export{Be as _};