import{V as E,ak as U,a2 as j,a1 as u,a0 as F,i as f,j as G,_ as O,a7 as Q,$ as W,W as X,p as q,o as _,c as H,u as l,x as m,a as t,X as s,f as g,b,a4 as J,d as K,ao as Y,a5 as Z,ah as ee,ai as se,a6 as te}from"./JoFQSik9.js";import{_ as oe}from"./iYoyzWPT.js";import{_ as ae}from"./Cf_ozb67.js";import{_ as ne}from"./K-WBeQ-v.js";import{_ as ie}from"./B850H_fa.js";import{u as re}from"./DB508c6W.js";import{u as ce}from"./CXetEtI4.js";import"./1-N0yLDQ.js";import"./BKAhWZth.js";import"./BM2BYuY2.js";import"./D8aEg3BZ.js";import"./BQxgWOyN.js";import"./R1J_LkVd.js";import"./56Y_7FHu.js";import"./BZw8aVXh.js";const le=n=>(ee("data-v-054b9427"),n=n(),se(),n),pe={class:"tw-pt-6 tw-pb-16 tw-overflow-hidden"},de={class:"slider-wrapper"},ue=["onClick"],_e=["src"],me={class:"controls"},he={class:"controls-prev slider-prev"},ve=le(()=>t("div",{class:"swiper-pagination"},null,-1)),fe={class:"controls-next slider-next"},ge={class:"tw-mt-4"},be=E({__name:"GamesListLayout",setup(n){const h=U(),w=j(),{updateBreakpoints:i}=re(),{fetchBonuses:k,setCurrentBonusId:B,setVisibleBonusModal:y}=h,{getBonuses:x}=u(h),{isLoggedIn:S,tokenChanging:V}=u(w),C=F(),{isLeaderBoard:I}=u(C),p=f(!1),d=G(()=>x.value.filter(e=>{var a;return!e.activated&&(!Y((a=e.extra)==null?void 0:a.expiration_after)&&e.status!==4||!e.extra&&!e.activated)})),P=e=>{B(e),y(!0)},$=async()=>{try{p.value=!0,await k()}catch(e){console.error("casinoInitializeAction, casino.vue",e)}finally{p.value=!1}};ce(()=>$(),{watch:[S,V]},"$UTuhumRFzD");const{t:o}=O(),L=Q().path.replace("/",""),r=f(L),R=W(),z=X();q(r,e=>{R.push(z({name:e}))});const N=[{key:"live-games",label:o("live_casino"),icon:"live"},{key:"games",label:o("slots"),icon:"spins"},{key:"table-games",label:o("table_games"),icon:"tables"},{key:"virtual-sport",label:o("virtual_sport"),icon:"virtuals"},{key:"poker",label:o("poker"),icon:"poker"},{key:"special-games",label:o("special_games"),icon:"special"}];return(e,a)=>{const v=Z,A=oe,T=ae,M=ne,D=ie;return _(),H("div",pe,[l(T,{loading:s(p)},{default:m(()=>[t("section",de,[s(d).length?(_(),g(A,{key:`casino-bonuses-${s(d).length}`,list:s(d),"slider-id":"casino-bonuses",class:"casino-bonuses tw-mb-8","is-navigation":!0,"is-pagination":!0,"slider-settings":{breakpointsBase:"container",slidesPerView:6,breakpoints:{[s(i).mobileSmall]:{slidesPerView:1,spaceBetween:10},[s(i).mobile]:{slidesPerView:2,spaceBetween:10},[s(i).tablet]:{slidesPerView:2,spaceBetween:10},[s(i).desktop]:{slidesPerView:3,spaceBetween:10}}}},{item:m(({item:c})=>[t("div",{class:"hover:tw-opacity-80",onClick:ke=>P(c.id)},[t("img",{src:c.banner,class:"bonus-img"},null,8,_e)],8,ue)]),pagination:m(()=>[t("div",me,[t("div",he,[l(v,{name:"left",size:13})]),ve,t("div",fe,[l(v,{name:"right",size:13})])])]),_:1},8,["list","slider-settings"])):b("",!0)])]),_:1},8,["loading"]),l(M,{modelValue:s(r),"onUpdate:modelValue":a[0]||(a[0]=c=>J(r)?r.value=c:null),tabs:N,type:"secondary"},null,8,["modelValue"]),t("div",ge,[K(e.$slots,"default",{},void 0,!0)]),s(I)?(_(),g(D,{key:0,class:"tw-mt-8"})):b("",!0)])}}}),Me=te(be,[["__scopeId","data-v-054b9427"]]);export{Me as default};
