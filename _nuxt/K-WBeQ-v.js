import{V as A,W as D,$ as F,_ as M,h as U,i as u,j,p as H,P as K,k as X,E as q,X as o,c as a,a as d,u as G,x as J,n as p,b as l,aa as O,o as n,F as m,f as Q,K as h,t as f,D as Y,a5 as Z}from"./JoFQSik9.js";import{_ as ee}from"./1-N0yLDQ.js";const te=["onClick"],se=["src","alt"],ne={key:1,class:"tabs-slider-btn-counter"},le=A({__name:"NgSliderTabs",props:{sliderSettings:{},tabs:{},modelValue:{default:""},bgColor:{default:"tw-tab-primary-bg"},type:{default:"default"},tabWithoutTranslate:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(y,{emit:v}){const b=D(),S=F(),{t:V}=M(),{$Swiper:{init:C,modules:x}}=O(),_=y,{tabs:i,modelValue:N,bgColor:T}=U(_),B=v,$=u(N),g=u(!1),r=u(null);let t=null;const E={modules:[x.navigation],slidesPerView:"auto",loopedSlides:1,spaceBetween:8,loop:!1,navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next",enabled:!1}},P=j(()=>({...E,..._.sliderSettings})),R=(s,k)=>{if(B("update:modelValue",s.key),s.route){const c=b({path:s.route});S.push({path:c})}t&&t.slideTo(k)},I=s=>$.value===s.key,w=()=>{r.value&&!g.value&&(t=new C(r.value,P.value),g.value=!0)},L=()=>{t&&t.update()};return H(i,s=>{t||Y(()=>{w()}),L()}),K(()=>{t&&t.update()}),X(()=>{w()}),q(()=>{t&&(t.destroy(),t=null)}),(s,k)=>{const c=Z,W=ee;return o(i)&&o(i).length>1?(n(),a("div",{key:0,class:p(["tabs tw-relative ng-slider-tabs",[s.type]])},[d("div",{ref_key:"tabSliderRef",ref:r,class:p(["tabs-slider swiper swiper-variable-width",o(T)])},[G(W,{"key-identify":"icon","key-name":"slider",list:o(i),class:"tabs-slider-wrapper swiper-wrapper"},{item:J(({item:e,index:z})=>[d("button",{class:p([{"tabs-slider-btn--active":I(e),"tabs-slider-btn--icon":e.icon||e.img,"tabs-slider-btn--counter":e.counter||e.counter===0},"tabs-slider-btn fg-main-14-fat swiper-slide"]),onClick:ae=>R(e,z)},[e.icon||e.img?(n(),a(m,{key:0},[e.img?(n(),a("img",{key:0,width:"16",height:"16",src:e.img,alt:e.name},null,8,se)):e.icon?(n(),Q(c,{key:1,name:e.icon,size:16},null,8,["name"])):l("",!0)],64)):l("",!0),d("span",null,[s.tabWithoutTranslate?(n(),a(m,{key:0},[h(f(e.label),1)],64)):(n(),a(m,{key:1},[h(f(o(V)(e.label)),1)],64))]),e.counter||e.counter===0?(n(),a("span",ne,f(e.counter),1)):l("",!0)],10,te)]),_:1},8,["list"])],2)],2)):l("",!0)}}});export{le as _};
