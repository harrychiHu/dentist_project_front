import{s as ee,aQ as yt,aR as Ct,aS as Pe,aT as tn,aO as nn,x as P,V as z,a6 as De,aA as it,A as i,aJ as ut,aU as He,aM as on,aV as ln,aE as Ee,ah as at,aW as rn,aX as ft,aY as St,n as je,p as $,a0 as N,$ as re,v as Ft,q as he,ao as Rt,a5 as st,aZ as an,y as Ke,as as Tt,ab as de,ac as dt,au as sn,a_ as ct,a$ as Se,aP as zt,a1 as ie,an as lt,aN as Ot,Y as J,ae as ke,X as ht,b0 as dn,ay as cn,aG as un,aB as fn,aq as hn,ag as Ve,b1 as vn,b2 as Je,ad as gn,Q as Ce,ap as pn,b3 as bn,b4 as et,H as mn,F as wn,b5 as xn,W as vt,b6 as yn,T as Cn,b7 as Sn,b8 as rt,b9 as Fn,ba as Rn,bb as Tn,bc as zn,bd as On,be as gt,bf as Mn,ai as kn,Z as ae}from"./index.1a24bf7e.js";function Pn(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function tt(e){const n=e.filter(o=>o!==void 0);if(n.length!==0)return n.length===1?n[0]:o=>{e.forEach(l=>{l&&l(o)})}}function pt(e){return e&-e}class In{constructor(n,o){this.l=n,this.min=o;const l=new Array(n+1);for(let s=0;s<n+1;++s)l[s]=0;this.ft=l}add(n,o){if(o===0)return;const{l,ft:s}=this;for(n+=1;n<=l;)s[n]+=o,n+=pt(n)}get(n){return this.sum(n+1)-this.sum(n)}sum(n){if(n===void 0&&(n=this.l),n<=0)return 0;const{ft:o,min:l,l:s}=this;if(n>s)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let c=n*l;for(;n>0;)c+=o[n],n-=pt(n);return c}getBound(n){let o=0,l=this.l;for(;l>o;){const s=Math.floor((o+l)/2),c=this.sum(s);if(c>n){l=s;continue}else if(c<n){if(o===s)return this.sum(o+1)<=n?o+1:s;o=s}else return s}return o}}let Ne;function _n(){return Ne===void 0&&("matchMedia"in window?Ne=window.matchMedia("(pointer:coarse)").matches:Ne=!1),Ne}let nt;function bt(){return nt===void 0&&(nt="chrome"in window?window.devicePixelRatio:1),nt}const $n=He(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[He("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[He("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),Bn=ee({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const n=yt();$n.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:Ct,ssr:n}),Pe(()=>{const{defaultScrollIndex:h,defaultScrollKey:g}=e;h!=null?m({index:h}):g!=null&&m({key:g})});let o=!1,l=!1;tn(()=>{if(o=!1,!l){l=!0;return}m({top:S.value,left:p})}),nn(()=>{o=!0,l||(l=!0)});const s=P(()=>{const h=new Map,{keyField:g}=e;return e.items.forEach((_,W)=>{h.set(_[g],W)}),h}),c=z(null),f=z(void 0),r=new Map,x=P(()=>{const{items:h,itemSize:g,keyField:_}=e,W=new In(h.length,g);return h.forEach((j,H)=>{const L=j[_],K=r.get(L);K!==void 0&&W.add(H,K)}),W}),w=z(0);let p=0;const S=z(0),T=De(()=>Math.max(x.value.getBound(S.value-it(e.paddingTop))-1,0)),O=P(()=>{const{value:h}=f;if(h===void 0)return[];const{items:g,itemSize:_}=e,W=T.value,j=Math.min(W+Math.ceil(h/_+1),g.length-1),H=[];for(let L=W;L<=j;++L)H.push(g[L]);return H}),m=(h,g)=>{if(typeof h=="number"){y(h,g,"auto");return}const{left:_,top:W,index:j,key:H,position:L,behavior:K,debounce:a=!0}=h;if(_!==void 0||W!==void 0)y(_,W,K);else if(j!==void 0)C(j,K,a);else if(H!==void 0){const v=s.value.get(H);v!==void 0&&C(v,K,a)}else L==="bottom"?y(0,Number.MAX_SAFE_INTEGER,K):L==="top"&&y(0,0,K)};let R,B=null;function C(h,g,_){const{value:W}=x,j=W.sum(h)+it(e.paddingTop);if(!_)c.value.scrollTo({left:0,top:j,behavior:g});else{R=h,B!==null&&window.clearTimeout(B),B=window.setTimeout(()=>{R=void 0,B=null},16);const{scrollTop:H,offsetHeight:L}=c.value;if(j>H){const K=W.get(h);j+K<=H+L||c.value.scrollTo({left:0,top:j+K-L,behavior:g})}else c.value.scrollTo({left:0,top:j,behavior:g})}}function y(h,g,_){c.value.scrollTo({left:h,top:g,behavior:_})}function V(h,g){var _,W,j;if(o||e.ignoreItemResize||te(g.target))return;const{value:H}=x,L=s.value.get(h),K=H.get(L),a=(j=(W=(_=g.borderBoxSize)===null||_===void 0?void 0:_[0])===null||W===void 0?void 0:W.blockSize)!==null&&j!==void 0?j:g.contentRect.height;if(a===K)return;a-e.itemSize===0?r.delete(h):r.set(h,a-e.itemSize);const E=a-K;if(E===0)return;H.add(L,E);const Q=c.value;if(Q!=null){if(R===void 0){const se=H.sum(L);Q.scrollTop>se&&Q.scrollBy(0,E)}else if(L<R)Q.scrollBy(0,E);else if(L===R){const se=H.sum(L);a+se>Q.scrollTop+Q.offsetHeight&&Q.scrollBy(0,E)}ne()}w.value++}const Z=!_n();let q=!1;function D(h){var g;(g=e.onScroll)===null||g===void 0||g.call(e,h),(!Z||!q)&&ne()}function G(h){var g;if((g=e.onWheel)===null||g===void 0||g.call(e,h),Z){const _=c.value;if(_!=null){if(h.deltaX===0&&(_.scrollTop===0&&h.deltaY<=0||_.scrollTop+_.offsetHeight>=_.scrollHeight&&h.deltaY>=0))return;h.preventDefault(),_.scrollTop+=h.deltaY/bt(),_.scrollLeft+=h.deltaX/bt(),ne(),q=!0,on(()=>{q=!1})}}}function X(h){if(o||te(h.target)||h.contentRect.height===f.value)return;f.value=h.contentRect.height;const{onResize:g}=e;g!==void 0&&g(h)}function ne(){const{value:h}=c;h!=null&&(S.value=h.scrollTop,p=h.scrollLeft)}function te(h){let g=h;for(;g!==null;){if(g.style.display==="none")return!0;g=g.parentElement}return!1}return{listHeight:f,listStyle:{overflow:"auto"},keyToIndex:s,itemsStyle:P(()=>{const{itemResizable:h}=e,g=Ee(x.value.sum());return w.value,[e.itemsStyle,{boxSizing:"content-box",height:h?"":g,minHeight:h?g:"",paddingTop:Ee(e.paddingTop),paddingBottom:Ee(e.paddingBottom)}]}),visibleItemsStyle:P(()=>(w.value,{transform:`translateY(${Ee(x.value.sum(T.value))})`})),viewportItems:O,listElRef:c,itemsElRef:z(null),scrollTo:m,handleListResize:X,handleListScroll:D,handleListWheel:G,handleItemResize:V}},render(){const{itemResizable:e,keyField:n,keyToIndex:o,visibleItemsTag:l}=this;return i(ut,{onResize:this.handleListResize},{default:()=>{var s,c;return i("div",ln(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?i("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[i(l,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(f=>{const r=f[n],x=o.get(r),w=this.$slots.default({item:f,index:x})[0];return e?i(ut,{key:r,onResize:p=>this.handleItemResize(r,p)},{default:()=>w}):(w.key=r,w)})})]):(c=(s=this.$slots).empty)===null||c===void 0?void 0:c.call(s)])}})}}),pe="v-hidden",Ln=He("[v-hidden]",{display:"none!important"}),mt=ee({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateOverflow:Function},setup(e,{slots:n}){const o=z(null),l=z(null);function s(){const{value:f}=o,{getCounter:r,getTail:x}=e;let w;if(r!==void 0?w=r():w=l.value,!f||!w)return;w.hasAttribute(pe)&&w.removeAttribute(pe);const{children:p}=f,S=f.offsetWidth,T=[],O=n.tail?x==null?void 0:x():null;let m=O?O.offsetWidth:0,R=!1;const B=f.children.length-(n.tail?1:0);for(let y=0;y<B-1;++y){if(y<0)continue;const V=p[y];if(R){V.hasAttribute(pe)||V.setAttribute(pe,"");continue}else V.hasAttribute(pe)&&V.removeAttribute(pe);const Z=V.offsetWidth;if(m+=Z,T[y]=Z,m>S){const{updateCounter:q}=e;for(let D=y;D>=0;--D){const G=B-1-D;q!==void 0?q(G):w.textContent=`${G}`;const X=w.offsetWidth;if(m-=T[D],m+X<=S||D===0){R=!0,y=D-1,O&&(y===-1?(O.style.maxWidth=`${S-X}px`,O.style.boxSizing="border-box"):O.style.maxWidth="");break}}}}const{onUpdateOverflow:C}=e;R?C!==void 0&&C(!0):(C!==void 0&&C(!1),w.setAttribute(pe,""))}const c=yt();return Ln.mount({id:"vueuc/overflow",head:!0,anchorMetaName:Ct,ssr:c}),Pe(s),{selfRef:o,counterRef:l,sync:s}},render(){const{$slots:e}=this;return at(this.sync),i("div",{class:"v-overflow",ref:"selfRef"},[rn(e,"default"),e.counter?e.counter():i("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function Mt(e,n){n&&(Pe(()=>{const{value:o}=e;o&&ft.registerHandler(o,n)}),St(()=>{const{value:o}=e;o&&ft.unregisterHandler(o)}))}const vo=ee({name:"Backward",render(){return i("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i("path",{d:"M12.2674 15.793C11.9675 16.0787 11.4927 16.0672 11.2071 15.7673L6.20572 10.5168C5.9298 10.2271 5.9298 9.7719 6.20572 9.48223L11.2071 4.23177C11.4927 3.93184 11.9675 3.92031 12.2674 4.206C12.5673 4.49169 12.5789 4.96642 12.2932 5.26634L7.78458 9.99952L12.2932 14.7327C12.5789 15.0326 12.5673 15.5074 12.2674 15.793Z",fill:"currentColor"}))}}),An=ee({name:"Checkmark",render(){return i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},i("g",{fill:"none"},i("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),En=ee({name:"Empty",render(){return i("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),i("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),go=ee({name:"FastBackward",render(){return i("svg",{viewBox:"0 0 20 20",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},i("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},i("g",{fill:"currentColor","fill-rule":"nonzero"},i("path",{d:"M8.73171,16.7949 C9.03264,17.0795 9.50733,17.0663 9.79196,16.7654 C10.0766,16.4644 10.0634,15.9897 9.76243,15.7051 L4.52339,10.75 L17.2471,10.75 C17.6613,10.75 17.9971,10.4142 17.9971,10 C17.9971,9.58579 17.6613,9.25 17.2471,9.25 L4.52112,9.25 L9.76243,4.29275 C10.0634,4.00812 10.0766,3.53343 9.79196,3.2325 C9.50733,2.93156 9.03264,2.91834 8.73171,3.20297 L2.31449,9.27241 C2.14819,9.4297 2.04819,9.62981 2.01448,9.8386 C2.00308,9.89058 1.99707,9.94459 1.99707,10 C1.99707,10.0576 2.00356,10.1137 2.01585,10.1675 C2.05084,10.3733 2.15039,10.5702 2.31449,10.7254 L8.73171,16.7949 Z"}))))}}),po=ee({name:"FastForward",render(){return i("svg",{viewBox:"0 0 20 20",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},i("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},i("g",{fill:"currentColor","fill-rule":"nonzero"},i("path",{d:"M11.2654,3.20511 C10.9644,2.92049 10.4897,2.93371 10.2051,3.23464 C9.92049,3.53558 9.93371,4.01027 10.2346,4.29489 L15.4737,9.25 L2.75,9.25 C2.33579,9.25 2,9.58579 2,10.0000012 C2,10.4142 2.33579,10.75 2.75,10.75 L15.476,10.75 L10.2346,15.7073 C9.93371,15.9919 9.92049,16.4666 10.2051,16.7675 C10.4897,17.0684 10.9644,17.0817 11.2654,16.797 L17.6826,10.7276 C17.8489,10.5703 17.9489,10.3702 17.9826,10.1614 C17.994,10.1094 18,10.0554 18,10.0000012 C18,9.94241 17.9935,9.88633 17.9812,9.83246 C17.9462,9.62667 17.8467,9.42976 17.6826,9.27455 L11.2654,3.20511 Z"}))))}}),bo=ee({name:"Forward",render(){return i("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i("path",{d:"M7.73271 4.20694C8.03263 3.92125 8.50737 3.93279 8.79306 4.23271L13.7944 9.48318C14.0703 9.77285 14.0703 10.2281 13.7944 10.5178L8.79306 15.7682C8.50737 16.0681 8.03263 16.0797 7.73271 15.794C7.43279 15.5083 7.42125 15.0336 7.70694 14.7336L12.2155 10.0005L7.70694 5.26729C7.42125 4.96737 7.43279 4.49264 7.73271 4.20694Z",fill:"currentColor"}))}}),Nn=ee({props:{onFocus:Function,onBlur:Function},setup(e){return()=>i("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}}),Dn={iconSizeSmall:"34px",iconSizeMedium:"40px",iconSizeLarge:"46px",iconSizeHuge:"52px"},Hn=e=>{const{textColorDisabled:n,iconColor:o,textColor2:l,fontSizeSmall:s,fontSizeMedium:c,fontSizeLarge:f,fontSizeHuge:r}=e;return Object.assign(Object.assign({},Dn),{fontSizeSmall:s,fontSizeMedium:c,fontSizeLarge:f,fontSizeHuge:r,textColor:n,iconColor:o,extraTextColor:l})},Vn={name:"Empty",common:je,self:Hn},kt=Vn,Wn=$("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[N("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[re("+",[N("description",`
 margin-top: 8px;
 `)])]),N("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),N("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),jn=Object.assign(Object.assign({},he.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),Kn=ee({name:"Empty",props:jn,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:o}=Ft(e),l=he("Empty","-empty",Wn,kt,e,n),{localeRef:s}=Rt("Empty"),c=st(an,null),f=P(()=>{var p,S,T;return(p=e.description)!==null&&p!==void 0?p:(T=(S=c==null?void 0:c.mergedComponentPropsRef.value)===null||S===void 0?void 0:S.Empty)===null||T===void 0?void 0:T.description}),r=P(()=>{var p,S;return((S=(p=c==null?void 0:c.mergedComponentPropsRef.value)===null||p===void 0?void 0:p.Empty)===null||S===void 0?void 0:S.renderIcon)||(()=>i(En,null))}),x=P(()=>{const{size:p}=e,{common:{cubicBezierEaseInOut:S},self:{[de("iconSize",p)]:T,[de("fontSize",p)]:O,textColor:m,iconColor:R,extraTextColor:B}}=l.value;return{"--n-icon-size":T,"--n-font-size":O,"--n-bezier":S,"--n-text-color":m,"--n-icon-color":R,"--n-extra-text-color":B}}),w=o?Ke("empty",P(()=>{let p="";const{size:S}=e;return p+=S[0],p}),x,e):void 0;return{mergedClsPrefix:n,mergedRenderIcon:r,localizedDescription:P(()=>f.value||s.value.description),cssVars:o?void 0:x,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender}},render(){const{$slots:e,mergedClsPrefix:n,onRender:o}=this;return o==null||o(),i("div",{class:[`${n}-empty`,this.themeClass],style:this.cssVars},this.showIcon?i("div",{class:`${n}-empty__icon`},e.icon?e.icon():i(Tt,{clsPrefix:n},{default:this.mergedRenderIcon})):null,this.showDescription?i("div",{class:`${n}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?i("div",{class:`${n}-empty__extra`},e.extra()):null)}}),Un={height:"calc(var(--n-option-height) * 7.6)",paddingSmall:"4px 0",paddingMedium:"4px 0",paddingLarge:"4px 0",paddingHuge:"4px 0",optionPaddingSmall:"0 12px",optionPaddingMedium:"0 12px",optionPaddingLarge:"0 12px",optionPaddingHuge:"0 12px",loadingSize:"18px"},qn=e=>{const{borderRadius:n,popoverColor:o,textColor3:l,dividerColor:s,textColor2:c,primaryColorPressed:f,textColorDisabled:r,primaryColor:x,opacityDisabled:w,hoverColor:p,fontSizeSmall:S,fontSizeMedium:T,fontSizeLarge:O,fontSizeHuge:m,heightSmall:R,heightMedium:B,heightLarge:C,heightHuge:y}=e;return Object.assign(Object.assign({},Un),{optionFontSizeSmall:S,optionFontSizeMedium:T,optionFontSizeLarge:O,optionFontSizeHuge:m,optionHeightSmall:R,optionHeightMedium:B,optionHeightLarge:C,optionHeightHuge:y,borderRadius:n,color:o,groupHeaderTextColor:l,actionDividerColor:s,optionTextColor:c,optionTextColorPressed:f,optionTextColorDisabled:r,optionTextColorActive:x,optionOpacityDisabled:w,optionCheckColor:x,optionColorPending:p,optionColorActive:"rgba(0, 0, 0, 0)",optionColorActivePending:p,actionTextColor:c,loadingColor:x})},Gn=dt({name:"InternalSelectMenu",common:je,peers:{Scrollbar:sn,Empty:kt},self:qn}),Pt=Gn,Zn=i(An);function Yn(e,n){return i(zt,{name:"fade-in-scale-up-transition"},{default:()=>e?i(Tt,{clsPrefix:n,class:`${n}-base-select-option__check`},{default:()=>Zn}):null})}const wt=ee({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:n,pendingTmNodeRef:o,multipleRef:l,valueSetRef:s,renderLabelRef:c,renderOptionRef:f,labelFieldRef:r,valueFieldRef:x,showCheckmarkRef:w,nodePropsRef:p,handleOptionClick:S,handleOptionMouseEnter:T}=st(ct),O=De(()=>{const{value:C}=o;return C?e.tmNode.key===C.key:!1});function m(C){const{tmNode:y}=e;y.disabled||S(C,y)}function R(C){const{tmNode:y}=e;y.disabled||T(C,y)}function B(C){const{tmNode:y}=e,{value:V}=O;y.disabled||V||T(C,y)}return{multiple:l,isGrouped:De(()=>{const{tmNode:C}=e,{parent:y}=C;return y&&y.rawNode.type==="group"}),showCheckmark:w,nodeProps:p,isPending:O,isSelected:De(()=>{const{value:C}=n,{value:y}=l;if(C===null)return!1;const V=e.tmNode.rawNode[x.value];if(y){const{value:Z}=s;return Z.has(V)}else return C===V}),labelField:r,renderLabel:c,renderOption:f,handleMouseMove:B,handleMouseEnter:R,handleClick:m}},render(){const{clsPrefix:e,tmNode:{rawNode:n},isSelected:o,isPending:l,isGrouped:s,showCheckmark:c,nodeProps:f,renderOption:r,renderLabel:x,handleClick:w,handleMouseEnter:p,handleMouseMove:S}=this,T=Yn(o,e),O=x?[x(n,o),c&&T]:[Se(n[this.labelField],n,o),c&&T],m=f==null?void 0:f(n),R=i("div",Object.assign({},m,{class:[`${e}-base-select-option`,n.class,m==null?void 0:m.class,{[`${e}-base-select-option--disabled`]:n.disabled,[`${e}-base-select-option--selected`]:o,[`${e}-base-select-option--grouped`]:s,[`${e}-base-select-option--pending`]:l,[`${e}-base-select-option--show-checkmark`]:c}],style:[(m==null?void 0:m.style)||"",n.style||""],onClick:tt([w,m==null?void 0:m.onClick]),onMouseenter:tt([p,m==null?void 0:m.onMouseenter]),onMousemove:tt([S,m==null?void 0:m.onMousemove])}),i("div",{class:`${e}-base-select-option__content`},O));return n.render?n.render({node:R,option:n,selected:o}):r?r({node:R,option:n,selected:o}):R}}),xt=ee({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:n,labelFieldRef:o,nodePropsRef:l}=st(ct);return{labelField:o,nodeProps:l,renderLabel:e,renderOption:n}},render(){const{clsPrefix:e,renderLabel:n,renderOption:o,nodeProps:l,tmNode:{rawNode:s}}=this,c=l==null?void 0:l(s),f=n?n(s,!1):Se(s[this.labelField],s,!1),r=i("div",Object.assign({},c,{class:[`${e}-base-select-group-header`,c==null?void 0:c.class]}),f);return s.render?s.render({node:r,option:s}):o?o({node:r,option:s,selected:!1}):r}}),Xn=$("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[$("scrollbar",`
 max-height: var(--n-height);
 `),$("virtual-list",`
 max-height: var(--n-height);
 `),$("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[N("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),$("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),$("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),N("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),N("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),N("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),$("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),$("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[ie("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),re("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),re("&:active",`
 color: var(--n-option-text-color-pressed);
 `),ie("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),ie("pending",[re("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),ie("selected",`
 color: var(--n-option-text-color-active);
 `,[re("&::before",`
 background-color: var(--n-option-color-active);
 `),ie("pending",[re("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),ie("disabled",`
 cursor: not-allowed;
 `,[lt("selected",`
 color: var(--n-option-text-color-disabled);
 `),ie("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),N("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Ot({enterScale:"0.5"})])])]),Qn=ee({name:"InternalSelectMenu",props:Object.assign(Object.assign({},he.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const n=he("InternalSelectMenu","-internal-select-menu",Xn,Pt,e,J(e,"clsPrefix")),o=z(null),l=z(null),s=z(null),c=P(()=>e.treeMate.getFlattenedNodes()),f=P(()=>vn(c.value)),r=z(null);function x(){const{treeMate:a}=e;let v=null;const{value:E}=e;E===null?v=a.getFirstAvailableNode():(e.multiple?v=a.getNode((E||[])[(E||[]).length-1]):v=a.getNode(E),(!v||v.disabled)&&(v=a.getFirstAvailableNode())),h(v||null)}function w(){const{value:a}=r;a&&!e.treeMate.getNode(a.key)&&(r.value=null)}let p;ke(()=>e.show,a=>{a?p=ke(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?x():w(),at(g)):w()},{immediate:!0}):p==null||p()},{immediate:!0}),St(()=>{p==null||p()});const S=P(()=>it(n.value.self[de("optionHeight",e.size)])),T=P(()=>Je(n.value.self[de("padding",e.size)])),O=P(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),m=P(()=>{const a=c.value;return a&&a.length===0});function R(a){const{onToggle:v}=e;v&&v(a)}function B(a){const{onScroll:v}=e;v&&v(a)}function C(a){var v;(v=s.value)===null||v===void 0||v.sync(),B(a)}function y(){var a;(a=s.value)===null||a===void 0||a.sync()}function V(){const{value:a}=r;return a||null}function Z(a,v){v.disabled||h(v,!1)}function q(a,v){v.disabled||R(v)}function D(a){var v;Ve(a,"action")||(v=e.onKeyup)===null||v===void 0||v.call(e,a)}function G(a){var v;Ve(a,"action")||(v=e.onKeydown)===null||v===void 0||v.call(e,a)}function X(a){var v;(v=e.onMousedown)===null||v===void 0||v.call(e,a),!e.focusable&&a.preventDefault()}function ne(){const{value:a}=r;a&&h(a.getNext({loop:!0}),!0)}function te(){const{value:a}=r;a&&h(a.getPrev({loop:!0}),!0)}function h(a,v=!1){r.value=a,v&&g()}function g(){var a,v;const E=r.value;if(!E)return;const Q=f.value(E.key);Q!==null&&(e.virtualScroll?(a=l.value)===null||a===void 0||a.scrollTo({index:Q}):(v=s.value)===null||v===void 0||v.scrollTo({index:Q,elSize:S.value}))}function _(a){var v,E;!((v=o.value)===null||v===void 0)&&v.contains(a.target)&&((E=e.onFocus)===null||E===void 0||E.call(e,a))}function W(a){var v,E;!((v=o.value)===null||v===void 0)&&v.contains(a.relatedTarget)||(E=e.onBlur)===null||E===void 0||E.call(e,a)}ht(ct,{handleOptionMouseEnter:Z,handleOptionClick:q,valueSetRef:O,pendingTmNodeRef:r,nodePropsRef:J(e,"nodeProps"),showCheckmarkRef:J(e,"showCheckmark"),multipleRef:J(e,"multiple"),valueRef:J(e,"value"),renderLabelRef:J(e,"renderLabel"),renderOptionRef:J(e,"renderOption"),labelFieldRef:J(e,"labelField"),valueFieldRef:J(e,"valueField")}),ht(dn,o),Pe(()=>{const{value:a}=s;a&&a.sync()});const j=P(()=>{const{size:a}=e,{common:{cubicBezierEaseInOut:v},self:{height:E,borderRadius:Q,color:se,groupHeaderTextColor:Fe,actionDividerColor:Re,optionTextColorPressed:be,optionTextColor:me,optionTextColorDisabled:ce,optionTextColorActive:oe,optionOpacityDisabled:we,optionCheckColor:ue,actionTextColor:Te,optionColorPending:ve,optionColorActive:ge,loadingColor:ze,loadingSize:Oe,optionColorActivePending:Me,[de("optionFontSize",a)]:xe,[de("optionHeight",a)]:ye,[de("optionPadding",a)]:le}}=n.value;return{"--n-height":E,"--n-action-divider-color":Re,"--n-action-text-color":Te,"--n-bezier":v,"--n-border-radius":Q,"--n-color":se,"--n-option-font-size":xe,"--n-group-header-text-color":Fe,"--n-option-check-color":ue,"--n-option-color-pending":ve,"--n-option-color-active":ge,"--n-option-color-active-pending":Me,"--n-option-height":ye,"--n-option-opacity-disabled":we,"--n-option-text-color":me,"--n-option-text-color-active":oe,"--n-option-text-color-disabled":ce,"--n-option-text-color-pressed":be,"--n-option-padding":le,"--n-option-padding-left":Je(le,"left"),"--n-option-padding-right":Je(le,"right"),"--n-loading-color":ze,"--n-loading-size":Oe}}),{inlineThemeDisabled:H}=e,L=H?Ke("internal-select-menu",P(()=>e.size[0]),j,e):void 0,K={selfRef:o,next:ne,prev:te,getPendingTmNode:V};return Mt(o,e.onResize),Object.assign({mergedTheme:n,virtualListRef:l,scrollbarRef:s,itemSize:S,padding:T,flattenedNodes:c,empty:m,virtualListContainer(){const{value:a}=l;return a==null?void 0:a.listElRef},virtualListContent(){const{value:a}=l;return a==null?void 0:a.itemsElRef},doScroll:B,handleFocusin:_,handleFocusout:W,handleKeyUp:D,handleKeyDown:G,handleMouseDown:X,handleVirtualListResize:y,handleVirtualListScroll:C,cssVars:H?void 0:j,themeClass:L==null?void 0:L.themeClass,onRender:L==null?void 0:L.onRender},K)},render(){const{$slots:e,virtualScroll:n,clsPrefix:o,mergedTheme:l,themeClass:s,onRender:c}=this;return c==null||c(),i("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${o}-base-select-menu`,s,this.multiple&&`${o}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},this.loading?i("div",{class:`${o}-base-select-menu__loading`},i(un,{clsPrefix:o,strokeWidth:20})):this.empty?i("div",{class:`${o}-base-select-menu__empty`,"data-empty":!0},hn(e.empty,()=>[i(Kn,{theme:l.peers.Empty,themeOverrides:l.peerOverrides.Empty})])):i(fn,{ref:"scrollbarRef",theme:l.peers.Scrollbar,themeOverrides:l.peerOverrides.Scrollbar,scrollable:this.scrollable,container:n?this.virtualListContainer:void 0,content:n?this.virtualListContent:void 0,onScroll:n?void 0:this.doScroll},{default:()=>n?i(Bn,{ref:"virtualListRef",class:`${o}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:f})=>f.isGroup?i(xt,{key:f.key,clsPrefix:o,tmNode:f}):f.ignored?null:i(wt,{clsPrefix:o,key:f.key,tmNode:f})}):i("div",{class:`${o}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(f=>f.isGroup?i(xt,{key:f.key,clsPrefix:o,tmNode:f}):i(wt,{clsPrefix:o,key:f.key,tmNode:f})))}),cn(e.action,f=>f&&[i("div",{class:`${o}-base-select-menu__action`,"data-action":!0,key:"action"},f),i(Nn,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),Jn={paddingSingle:"0 26px 0 12px",paddingMultiple:"3px 26px 0 12px",clearSize:"16px",arrowSize:"16px"},eo=e=>{const{borderRadius:n,textColor2:o,textColorDisabled:l,inputColor:s,inputColorDisabled:c,primaryColor:f,primaryColorHover:r,warningColor:x,warningColorHover:w,errorColor:p,errorColorHover:S,borderColor:T,iconColor:O,iconColorDisabled:m,clearColor:R,clearColorHover:B,clearColorPressed:C,placeholderColor:y,placeholderColorDisabled:V,fontSizeTiny:Z,fontSizeSmall:q,fontSizeMedium:D,fontSizeLarge:G,heightTiny:X,heightSmall:ne,heightMedium:te,heightLarge:h}=e;return Object.assign(Object.assign({},Jn),{fontSizeTiny:Z,fontSizeSmall:q,fontSizeMedium:D,fontSizeLarge:G,heightTiny:X,heightSmall:ne,heightMedium:te,heightLarge:h,borderRadius:n,textColor:o,textColorDisabled:l,placeholderColor:y,placeholderColorDisabled:V,color:s,colorDisabled:c,colorActive:s,border:`1px solid ${T}`,borderHover:`1px solid ${r}`,borderActive:`1px solid ${f}`,borderFocus:`1px solid ${r}`,boxShadowHover:"none",boxShadowActive:`0 0 0 2px ${Ce(f,{alpha:.2})}`,boxShadowFocus:`0 0 0 2px ${Ce(f,{alpha:.2})}`,caretColor:f,arrowColor:O,arrowColorDisabled:m,loadingColor:f,borderWarning:`1px solid ${x}`,borderHoverWarning:`1px solid ${w}`,borderActiveWarning:`1px solid ${x}`,borderFocusWarning:`1px solid ${w}`,boxShadowHoverWarning:"none",boxShadowActiveWarning:`0 0 0 2px ${Ce(x,{alpha:.2})}`,boxShadowFocusWarning:`0 0 0 2px ${Ce(x,{alpha:.2})}`,colorActiveWarning:s,caretColorWarning:x,borderError:`1px solid ${p}`,borderHoverError:`1px solid ${S}`,borderActiveError:`1px solid ${p}`,borderFocusError:`1px solid ${S}`,boxShadowHoverError:"none",boxShadowActiveError:`0 0 0 2px ${Ce(p,{alpha:.2})}`,boxShadowFocusError:`0 0 0 2px ${Ce(p,{alpha:.2})}`,colorActiveError:s,caretColorError:p,clearColor:R,clearColorHover:B,clearColorPressed:C})},to=dt({name:"InternalSelection",common:je,peers:{Popover:gn},self:eo}),It=to,no=re([$("base-selection",`
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[$("base-loading",`
 color: var(--n-loading-color);
 `),$("base-selection-tags","min-height: var(--n-height);"),N("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),N("state-border",`
 z-index: 1;
 border-color: #0000;
 `),$("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[N("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),$("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[N("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),$("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[N("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),$("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),$("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[$("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[N("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),N("render-label",`
 color: var(--n-text-color);
 `)]),lt("disabled",[re("&:hover",[N("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),ie("focus",[N("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),ie("active",[N("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),$("base-selection-label","background-color: var(--n-color-active);"),$("base-selection-tags","background-color: var(--n-color-active);")])]),ie("disabled","cursor: not-allowed;",[N("arrow",`
 color: var(--n-arrow-color-disabled);
 `),$("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[$("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),N("render-label",`
 color: var(--n-text-color-disabled);
 `)]),$("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),$("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),$("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[N("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),N("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>ie(`${e}-status`,[N("state-border",`border: var(--n-border-${e});`),lt("disabled",[re("&:hover",[N("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),ie("active",[N("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),$("base-selection-label",`background-color: var(--n-color-active-${e});`),$("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),ie("focus",[N("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),$("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),$("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[re("&:last-child","padding-right: 0;"),$("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[N("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),oo=ee({name:"InternalSelection",props:Object.assign(Object.assign({},he.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,onResize:Function}),setup(e){const n=z(null),o=z(null),l=z(null),s=z(null),c=z(null),f=z(null),r=z(null),x=z(null),w=z(null),p=z(null),S=z(!1),T=z(!1),O=z(!1),m=he("InternalSelection","-internal-selection",no,It,e,J(e,"clsPrefix")),R=P(()=>e.clearable&&!e.disabled&&(O.value||e.active)),B=P(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Se(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),C=P(()=>{const d=e.selectedOption;if(!!d)return d[e.labelField]}),y=P(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function V(){var d;const{value:b}=n;if(b){const{value:U}=o;U&&(U.style.width=`${b.offsetWidth}px`,e.maxTagCount!=="responsive"&&((d=w.value)===null||d===void 0||d.sync()))}}function Z(){const{value:d}=p;d&&(d.style.display="none")}function q(){const{value:d}=p;d&&(d.style.display="inline-block")}ke(J(e,"active"),d=>{d||Z()}),ke(J(e,"pattern"),()=>{e.multiple&&at(V)});function D(d){const{onFocus:b}=e;b&&b(d)}function G(d){const{onBlur:b}=e;b&&b(d)}function X(d){const{onDeleteOption:b}=e;b&&b(d)}function ne(d){const{onClear:b}=e;b&&b(d)}function te(d){const{onPatternInput:b}=e;b&&b(d)}function h(d){var b;(!d.relatedTarget||!(!((b=l.value)===null||b===void 0)&&b.contains(d.relatedTarget)))&&D(d)}function g(d){var b;!((b=l.value)===null||b===void 0)&&b.contains(d.relatedTarget)||G(d)}function _(d){ne(d)}function W(){O.value=!0}function j(){O.value=!1}function H(d){!e.active||!e.filterable||d.target!==o.value&&d.preventDefault()}function L(d){X(d)}function K(d){if(d.key==="Backspace"&&!a.value&&!e.pattern.length){const{selectedOptions:b}=e;b!=null&&b.length&&L(b[b.length-1])}}const a=z(!1);let v=null;function E(d){const{value:b}=n;if(b){const U=d.target.value;b.textContent=U,V()}a.value?v=d:te(d)}function Q(){a.value=!0}function se(){a.value=!1,te(v),v=null}function Fe(d){var b;T.value=!0,(b=e.onPatternFocus)===null||b===void 0||b.call(e,d)}function Re(d){var b;T.value=!1,(b=e.onPatternBlur)===null||b===void 0||b.call(e,d)}function be(){var d,b;if(e.filterable)T.value=!1,(d=f.value)===null||d===void 0||d.blur(),(b=o.value)===null||b===void 0||b.blur();else if(e.multiple){const{value:U}=s;U==null||U.blur()}else{const{value:U}=c;U==null||U.blur()}}function me(){var d,b,U;e.filterable?(T.value=!1,(d=f.value)===null||d===void 0||d.focus()):e.multiple?(b=s.value)===null||b===void 0||b.focus():(U=c.value)===null||U===void 0||U.focus()}function ce(){const{value:d}=o;d&&(q(),d.focus())}function oe(){const{value:d}=o;d&&d.blur()}function we(d){const{value:b}=r;b&&b.setTextContent(`+${d}`)}function ue(){const{value:d}=x;return d}function Te(){return o.value}let ve=null;function ge(){ve!==null&&window.clearTimeout(ve)}function ze(){e.disabled||e.active||(ge(),ve=window.setTimeout(()=>{S.value=!0},100))}function Oe(){ge()}function Me(d){d||(ge(),S.value=!1)}Pe(()=>{pn(()=>{const d=f.value;!d||(d.tabIndex=e.disabled||T.value?-1:0)})}),Mt(l,e.onResize);const{inlineThemeDisabled:xe}=e,ye=P(()=>{const{size:d}=e,{common:{cubicBezierEaseInOut:b},self:{borderRadius:U,color:Ie,placeholderColor:Ue,textColor:qe,paddingSingle:Ge,paddingMultiple:Ze,caretColor:_e,colorDisabled:$e,textColorDisabled:Be,placeholderColorDisabled:Ye,colorActive:Xe,boxShadowFocus:Le,boxShadowActive:fe,boxShadowHover:t,border:u,borderFocus:F,borderHover:A,borderActive:M,arrowColor:I,arrowColorDisabled:k,loadingColor:Y,colorActiveWarning:Ae,boxShadowFocusWarning:Qe,boxShadowActiveWarning:$t,boxShadowHoverWarning:Bt,borderWarning:Lt,borderFocusWarning:At,borderHoverWarning:Et,borderActiveWarning:Nt,colorActiveError:Dt,boxShadowFocusError:Ht,boxShadowActiveError:Vt,boxShadowHoverError:Wt,borderError:jt,borderFocusError:Kt,borderHoverError:Ut,borderActiveError:qt,clearColor:Gt,clearColorHover:Zt,clearColorPressed:Yt,clearSize:Xt,arrowSize:Qt,[de("height",d)]:Jt,[de("fontSize",d)]:en}}=m.value;return{"--n-bezier":b,"--n-border":u,"--n-border-active":M,"--n-border-focus":F,"--n-border-hover":A,"--n-border-radius":U,"--n-box-shadow-active":fe,"--n-box-shadow-focus":Le,"--n-box-shadow-hover":t,"--n-caret-color":_e,"--n-color":Ie,"--n-color-active":Xe,"--n-color-disabled":$e,"--n-font-size":en,"--n-height":Jt,"--n-padding-single":Ge,"--n-padding-multiple":Ze,"--n-placeholder-color":Ue,"--n-placeholder-color-disabled":Ye,"--n-text-color":qe,"--n-text-color-disabled":Be,"--n-arrow-color":I,"--n-arrow-color-disabled":k,"--n-loading-color":Y,"--n-color-active-warning":Ae,"--n-box-shadow-focus-warning":Qe,"--n-box-shadow-active-warning":$t,"--n-box-shadow-hover-warning":Bt,"--n-border-warning":Lt,"--n-border-focus-warning":At,"--n-border-hover-warning":Et,"--n-border-active-warning":Nt,"--n-color-active-error":Dt,"--n-box-shadow-focus-error":Ht,"--n-box-shadow-active-error":Vt,"--n-box-shadow-hover-error":Wt,"--n-border-error":jt,"--n-border-focus-error":Kt,"--n-border-hover-error":Ut,"--n-border-active-error":qt,"--n-clear-size":Xt,"--n-clear-color":Gt,"--n-clear-color-hover":Zt,"--n-clear-color-pressed":Yt,"--n-arrow-size":Qt}}),le=xe?Ke("internal-selection",P(()=>e.size[0]),ye,e):void 0;return{mergedTheme:m,mergedClearable:R,patternInputFocused:T,filterablePlaceholder:B,label:C,selected:y,showTagsPanel:S,isCompositing:a,counterRef:r,counterWrapperRef:x,patternInputMirrorRef:n,patternInputRef:o,selfRef:l,multipleElRef:s,singleElRef:c,patternInputWrapperRef:f,overflowRef:w,inputTagElRef:p,handleMouseDown:H,handleFocusin:h,handleClear:_,handleMouseEnter:W,handleMouseLeave:j,handleDeleteOption:L,handlePatternKeyDown:K,handlePatternInputInput:E,handlePatternInputBlur:Re,handlePatternInputFocus:Fe,handleMouseEnterCounter:ze,handleMouseLeaveCounter:Oe,handleFocusout:g,handleCompositionEnd:se,handleCompositionStart:Q,onPopoverUpdateShow:Me,focus:me,focusInput:ce,blur:be,blurInput:oe,updateCounter:we,getCounter:ue,getTail:Te,renderLabel:e.renderLabel,cssVars:xe?void 0:ye,themeClass:le==null?void 0:le.themeClass,onRender:le==null?void 0:le.onRender}},render(){const{status:e,multiple:n,size:o,disabled:l,filterable:s,maxTagCount:c,bordered:f,clsPrefix:r,onRender:x,renderTag:w,renderLabel:p}=this;x==null||x();const S=c==="responsive",T=typeof c=="number",O=S||T,m=i(bn,null,{default:()=>i(xn,{clsPrefix:r,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var B,C;return(C=(B=this.$slots).arrow)===null||C===void 0?void 0:C.call(B)}})});let R;if(n){const{labelField:B}=this,C=g=>i("div",{class:`${r}-base-selection-tag-wrapper`,key:g.value},w?w({option:g,handleClose:()=>this.handleDeleteOption(g)}):i(et,{size:o,closable:!g.disabled,disabled:l,onClose:()=>this.handleDeleteOption(g),internalCloseFocusable:!1,internalStopClickPropagation:!0},{default:()=>p?p(g,!0):Se(g[B],g,!0)})),y=(T?this.selectedOptions.slice(0,c):this.selectedOptions).map(C),V=s?i("div",{class:`${r}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},i("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:l,value:this.pattern,autofocus:this.autofocus,class:`${r}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),i("span",{ref:"patternInputMirrorRef",class:`${r}-base-selection-input-tag__mirror`},this.pattern)):null,Z=S?()=>i("div",{class:`${r}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},i(et,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:l})):void 0;let q;if(T){const g=this.selectedOptions.length-c;g>0&&(q=i("div",{class:`${r}-base-selection-tag-wrapper`,key:"__counter__"},i(et,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:l},{default:()=>`+${g}`})))}const D=S?s?i(mt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:()=>y,counter:Z,tail:()=>V}):i(mt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:()=>y,counter:Z}):T?y.concat(q):y,G=O?()=>i("div",{class:`${r}-base-selection-popover`},S?y:this.selectedOptions.map(C)):void 0,X=O?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,te=(this.selected?!1:this.active?!this.pattern&&!this.isCompositing:!0)?i("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`},i("div",{class:`${r}-base-selection-placeholder__inner`},this.placeholder)):null,h=s?i("div",{ref:"patternInputWrapperRef",class:`${r}-base-selection-tags`},D,S?null:V,m):i("div",{ref:"multipleElRef",class:`${r}-base-selection-tags`,tabindex:l?void 0:0},D,m);R=i(wn,null,O?i(mn,Object.assign({},X,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>h,default:G}):h,te)}else if(s){const B=this.pattern||this.isCompositing,C=this.active?!B:!this.selected,y=this.active?!1:this.selected;R=i("div",{ref:"patternInputWrapperRef",class:`${r}-base-selection-label`},i("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${r}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:l,disabled:l,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),y?i("div",{class:`${r}-base-selection-label__render-label ${r}-base-selection-overlay`,key:"input"},i("div",{class:`${r}-base-selection-overlay__wrapper`},w?w({option:this.selectedOption,handleClose:()=>{}}):p?p(this.selectedOption,!0):Se(this.label,this.selectedOption,!0))):null,C?i("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`,key:"placeholder"},i("div",{class:`${r}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,m)}else R=i("div",{ref:"singleElRef",class:`${r}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?i("div",{class:`${r}-base-selection-input`,title:Pn(this.label),key:"input"},i("div",{class:`${r}-base-selection-input__content`},w?w({option:this.selectedOption,handleClose:()=>{}}):p?p(this.selectedOption,!0):Se(this.label,this.selectedOption,!0))):i("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`,key:"placeholder"},i("div",{class:`${r}-base-selection-placeholder__inner`},this.placeholder)),m);return i("div",{ref:"selfRef",class:[`${r}-base-selection`,this.themeClass,e&&`${r}-base-selection--${e}-status`,{[`${r}-base-selection--active`]:this.active,[`${r}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${r}-base-selection--disabled`]:this.disabled,[`${r}-base-selection--multiple`]:this.multiple,[`${r}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},R,f?i("div",{class:`${r}-base-selection__border`}):null,f?i("div",{class:`${r}-base-selection__state-border`}):null)}});function We(e){return e.type==="group"}function _t(e){return e.type==="ignored"}function ot(e,n){try{return!!(1+n.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function io(e,n){return{getIsGroup:We,getIgnored:_t,getKey(l){return We(l)?l.name||l.key||"key-required":l[e]},getChildren(l){return l[n]}}}function lo(e,n,o,l){if(!n)return e;function s(c){if(!Array.isArray(c))return[];const f=[];for(const r of c)if(We(r)){const x=s(r[l]);x.length&&f.push(Object.assign({},r,{[l]:x}))}else{if(_t(r))continue;n(o,r)&&f.push(r)}return f}return s(e)}function ro(e,n,o){const l=new Map;return e.forEach(s=>{We(s)?s[o].forEach(c=>{l.set(c[n],c)}):l.set(s[n],s)}),l}function ao(e){const{boxShadow2:n}=e;return{menuBoxShadow:n}}const so=dt({name:"Select",common:je,peers:{InternalSelection:It,InternalSelectMenu:Pt},self:ao}),co=so,uo=re([$("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),$("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Ot({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),fo=Object.assign(Object.assign({},he.props),{to:rt.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,internalShowCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),mo=ee({name:"Select",props:fo,setup(e){const{mergedClsPrefixRef:n,mergedBorderedRef:o,namespaceRef:l,inlineThemeDisabled:s}=Ft(e),c=he("Select","-select",uo,co,e,n),f=z(e.defaultValue),r=J(e,"value"),x=vt(r,f),w=z(!1),p=z(""),S=P(()=>{const{valueField:t,childrenField:u}=e,F=io(t,u);return kn(g.value,F)}),T=P(()=>ro(te.value,e.valueField,e.childrenField)),O=z(!1),m=vt(J(e,"show"),O),R=z(null),B=z(null),C=z(null),{localeRef:y}=Rt("Select"),V=P(()=>{var t;return(t=e.placeholder)!==null&&t!==void 0?t:y.value.placeholder}),Z=yn(e,["items","options"]),q=[],D=z([]),G=z([]),X=z(new Map),ne=P(()=>{const{fallbackOption:t}=e;if(t===void 0){const{labelField:u,valueField:F}=e;return A=>({[u]:String(A),[F]:A})}return t===!1?!1:u=>Object.assign(t(u),{value:u})}),te=P(()=>G.value.concat(D.value).concat(Z.value)),h=P(()=>{const{filter:t}=e;if(t)return t;const{labelField:u,valueField:F}=e;return(A,M)=>{if(!M)return!1;const I=M[u];if(typeof I=="string")return ot(A,I);const k=M[F];return typeof k=="string"?ot(A,k):typeof k=="number"?ot(A,String(k)):!1}}),g=P(()=>{if(e.remote)return Z.value;{const{value:t}=te,{value:u}=p;return!u.length||!e.filterable?t:lo(t,h.value,u,e.childrenField)}});function _(t){const u=e.remote,{value:F}=X,{value:A}=T,{value:M}=ne,I=[];return t.forEach(k=>{if(A.has(k))I.push(A.get(k));else if(u&&F.has(k))I.push(F.get(k));else if(M){const Y=M(k);Y&&I.push(Y)}}),I}const W=P(()=>{if(e.multiple){const{value:t}=x;return Array.isArray(t)?_(t):[]}return null}),j=P(()=>{const{value:t}=x;return!e.multiple&&!Array.isArray(t)?t===null?null:_([t])[0]||null:null}),H=Cn(e),{mergedSizeRef:L,mergedDisabledRef:K,mergedStatusRef:a}=H;function v(t,u){const{onChange:F,"onUpdate:value":A,onUpdateValue:M}=e,{nTriggerFormChange:I,nTriggerFormInput:k}=H;F&&ae(F,t,u),M&&ae(M,t,u),A&&ae(A,t,u),f.value=t,I(),k()}function E(t){const{onBlur:u}=e,{nTriggerFormBlur:F}=H;u&&ae(u,t),F()}function Q(){const{onClear:t}=e;t&&ae(t)}function se(t){const{onFocus:u}=e,{nTriggerFormFocus:F}=H;u&&ae(u,t),F()}function Fe(t){const{onSearch:u}=e;u&&ae(u,t)}function Re(t){const{onScroll:u}=e;u&&ae(u,t)}function be(){var t;const{remote:u,multiple:F}=e;if(u){const{value:A}=X;if(F){const{valueField:M}=e;(t=W.value)===null||t===void 0||t.forEach(I=>{A.set(I[M],I)})}else{const M=j.value;M&&A.set(M[e.valueField],M)}}}function me(t){const{onUpdateShow:u,"onUpdate:show":F}=e;u&&ae(u,t),F&&ae(F,t),O.value=t}function ce(){K.value||(me(!0),O.value=!0,e.filterable&&Be())}function oe(){me(!1)}function we(){p.value="",G.value=q}const ue=z(!1);function Te(){e.filterable&&(ue.value=!0)}function ve(){e.filterable&&(ue.value=!1,m.value||we())}function ge(){K.value||(m.value?e.filterable?Be():oe():ce())}function ze(t){var u,F;!((F=(u=C.value)===null||u===void 0?void 0:u.selfRef)===null||F===void 0)&&F.contains(t.relatedTarget)||(w.value=!1,E(t),oe())}function Oe(t){se(t),w.value=!0}function Me(t){w.value=!0}function xe(t){var u;!((u=R.value)===null||u===void 0)&&u.$el.contains(t.relatedTarget)||(w.value=!1,E(t),oe())}function ye(){var t;(t=R.value)===null||t===void 0||t.focus(),oe()}function le(t){var u;m.value&&(!((u=R.value)===null||u===void 0)&&u.$el.contains(t.target)||oe())}function d(t){if(!Array.isArray(t))return[];if(ne.value)return Array.from(t);{const{remote:u}=e,{value:F}=T;if(u){const{value:A}=X;return t.filter(M=>F.has(M)||A.has(M))}else return t.filter(A=>F.has(A))}}function b(t){U(t.rawNode)}function U(t){if(K.value)return;const{tag:u,remote:F,clearFilterAfterSelect:A,valueField:M}=e;if(u&&!F){const{value:I}=G,k=I[0]||null;if(k){const Y=D.value;Y.length?Y.push(k):D.value=[k],G.value=q}}if(F&&X.value.set(t[M],t),e.multiple){const I=d(x.value),k=I.findIndex(Y=>Y===t[M]);if(~k){if(I.splice(k,1),u&&!F){const Y=Ie(t[M]);~Y&&(D.value.splice(Y,1),A&&(p.value=""))}}else I.push(t[M]),A&&(p.value="");v(I,_(I))}else{if(u&&!F){const I=Ie(t[M]);~I?D.value=[D.value[I]]:D.value=q}$e(),oe(),v(t[M],t)}}function Ie(t){return D.value.findIndex(F=>F[e.valueField]===t)}function Ue(t){m.value||ce();const{value:u}=t.target;p.value=u;const{tag:F,remote:A}=e;if(Fe(u),F&&!A){if(!u){G.value=q;return}const{onCreate:M}=e,I=M?M(u):{[e.labelField]:u,[e.valueField]:u},{valueField:k}=e;Z.value.some(Y=>Y[k]===I[k])||D.value.some(Y=>Y[k]===I[k])?G.value=q:G.value=[I]}}function qe(t){t.stopPropagation();const{multiple:u}=e;!u&&e.filterable&&oe(),Q(),u?v([],[]):v(null,null)}function Ge(t){!Ve(t,"action")&&!Ve(t,"empty")&&t.preventDefault()}function Ze(t){Re(t)}function _e(t){var u,F,A,M,I;switch(t.key){case" ":if(e.filterable)break;t.preventDefault();case"Enter":if(!(!((u=R.value)===null||u===void 0)&&u.isCompositing)){if(m.value){const k=(F=C.value)===null||F===void 0?void 0:F.getPendingTmNode();k?b(k):e.filterable||(oe(),$e())}else if(ce(),e.tag&&ue.value){const k=G.value[0];if(k){const Y=k[e.valueField],{value:Ae}=x;e.multiple&&Array.isArray(Ae)&&Ae.some(Qe=>Qe===Y)||U(k)}}}t.preventDefault();break;case"ArrowUp":if(t.preventDefault(),e.loading)return;m.value&&((A=C.value)===null||A===void 0||A.prev());break;case"ArrowDown":if(t.preventDefault(),e.loading)return;m.value?(M=C.value)===null||M===void 0||M.next():ce();break;case"Escape":m.value&&(Mn(t),oe()),(I=R.value)===null||I===void 0||I.focus();break}}function $e(){var t;(t=R.value)===null||t===void 0||t.focus()}function Be(){var t;(t=R.value)===null||t===void 0||t.focusInput()}function Ye(){var t;!m.value||(t=B.value)===null||t===void 0||t.syncPosition()}be(),ke(J(e,"options"),be);const Xe={focus:()=>{var t;(t=R.value)===null||t===void 0||t.focus()},blur:()=>{var t;(t=R.value)===null||t===void 0||t.blur()}},Le=P(()=>{const{self:{menuBoxShadow:t}}=c.value;return{"--n-menu-box-shadow":t}}),fe=s?Ke("select",void 0,Le,e):void 0;return Object.assign(Object.assign({},Xe),{mergedStatus:a,mergedClsPrefix:n,mergedBordered:o,namespace:l,treeMate:S,isMounted:Sn(),triggerRef:R,menuRef:C,pattern:p,uncontrolledShow:O,mergedShow:m,adjustedTo:rt(e),uncontrolledValue:f,mergedValue:x,followerRef:B,localizedPlaceholder:V,selectedOption:j,selectedOptions:W,mergedSize:L,mergedDisabled:K,focused:w,activeWithoutMenuOpen:ue,inlineThemeDisabled:s,onTriggerInputFocus:Te,onTriggerInputBlur:ve,handleTriggerOrMenuResize:Ye,handleMenuFocus:Me,handleMenuBlur:xe,handleMenuTabOut:ye,handleTriggerClick:ge,handleToggle:b,handleDeleteOption:U,handlePatternInput:Ue,handleClear:qe,handleTriggerBlur:ze,handleTriggerFocus:Oe,handleKeydown:_e,handleMenuAfterLeave:we,handleMenuClickOutside:le,handleMenuScroll:Ze,handleMenuKeydown:_e,handleMenuMousedown:Ge,mergedTheme:c,cssVars:s?void 0:Le,themeClass:fe==null?void 0:fe.themeClass,onRender:fe==null?void 0:fe.onRender})},render(){return i("div",{class:`${this.mergedClsPrefix}-select`},i(Fn,null,{default:()=>[i(Rn,null,{default:()=>i(oo,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize},{arrow:()=>{var e,n;return[(n=(e=this.$slots).arrow)===null||n===void 0?void 0:n.call(e)]}})}),i(Tn,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===rt.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>i(zt,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,n,o;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),zn(i(Qn,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(n=this.menuProps)===null||n===void 0?void 0:n.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(o=this.menuProps)===null||o===void 0?void 0:o.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.internalShowCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var l,s;return[(s=(l=this.$slots).empty)===null||s===void 0?void 0:s.call(l)]},action:()=>{var l,s;return[(s=(l=this.$slots).action)===null||s===void 0?void 0:s.call(l)]}}),this.displayDirective==="show"?[[On,this.mergedShow],[gt,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[gt,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{vo as B,bo as F,Qn as N,Bn as V,mo as _,po as a,go as b,io as c,Kn as d,kt as e,Nn as f,Pt as i,tt as m,co as s};
