import{d as m,j as N,s as b,o as n,c as w,B as g,g as i,i as y,r as c,p as d,X as $,G as k,H as B,F as S,C as x,b as l,e as a,t as _,af as C,W as E,A as I}from"./7PQ9d4dP.js";const v={class:"ng-error"},L=m({__name:"NgError",props:{showLogo:{type:Boolean,default:!1}},setup(p){const t=N(),{getLogo:s}=b(t);return(e,r)=>{const o=d;return n(),w("div",v,[e.showLogo?(n(),g(o,{key:0,src:i(s),class:"ng-error-logo",alt:"error logo"},null,8,["src"])):y("",!0),c(e.$slots,"body"),c(e.$slots,"footer")])}}}),P={class:"tw-text-center tw-flex tw-flex-col tw-gap-3"},j={class:"tw-text-2xl tw-font-semibold"},F={class:"tw-text-text-brand"},M=m({__name:"404",setup(p){const t=$(),{getIconName:s}=k(),e=B(()=>s("/img/404_image")+".svg"),r=()=>{C({redirect:t({path:E.main_home})})};return S({title:"Page Not Found"}),(o,V)=>{const u=d,f=I,h=L;return n(),g(h,{"show-logo":""},{body:x(()=>[l(u,{src:i(e),alt:"not found icon"},null,8,["src"]),a("div",P,[a("p",j,_(o.$t("page_not_found")),1),a("p",F,_(o.$t("try_later")),1)]),l(f,{"label-key":o.$t("back_to_home"),onClick:r},null,8,["label-key"])]),_:1})}}}),R=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"}));export{L as _,R as a};