import{_ as F}from"./Bxl7epld.js";import{_ as M}from"./DdIClELx.js";import{_ as D}from"./sQNTZNBq.js";import{V as y,_ as R,a0 as U,a1 as T,j as S,o as e,f as g,x as q,a as p,t as n,X as t,c,aD as C,b as u,n as H,K as W,Z as $,az as X,a6 as b,u as k,a5 as Z,br as L,a2 as G,i as V,N as J,F as B,r as O,a3 as Q}from"./JoFQSik9.js";import{T as Y}from"./CHDbCGUn.js";import{_ as tt}from"./B3BteicU.js";import{u as et}from"./CrHKx1Rg.js";import{u as st}from"./C9Q4lrjy.js";import"./B92FZ1g3.js";import"./BM2BYuY2.js";import"./BKAhWZth.js";import"./D8aEg3BZ.js";import"./Cel6GgYv.js";import"./1-N0yLDQ.js";const at={class:"tw-flex tw-items-center tw-justify-between tw-bg-bg-tertiary tw-p-2"},ot={class:"ng-flex tw-text-text-secondary fg-text-14-thin"},nt={class:"tw-flex tw-gap-2 tw-items-center"},ct={key:0,class:"tw-flex tw-gap-2 fg-main-12-regular tw-text-text-tertiary"},it={class:"tw-p-2 tw-bg-bg-secondary fg-main-14-fat"},rt={key:0,class:"tw-flex tw-gap-2 fg-main-12-regular tw-text-text-tertiary tw-mt-4"},_t=y({__name:"TicketListItem",props:{ticket:{}},setup(f){const{t:o}=R(),l=f,i=U(),{isLessContainerDesktop:s}=T(i),m=S(()=>Y[l.ticket.status]),d=S(()=>"status-"+m.value.name);return(a,w)=>{const x=X;return e(),g(x,{to:`${t($).contact_us}/${a.ticket.id}`,class:"ticket-list-item"},{default:q(()=>[p("div",at,[p("div",ot,n(t(o)("id"))+" "+n(a.ticket.id),1),p("div",nt,[t(s)?u("",!0):(e(),c("div",ct,n(t(o)("date_updated"))+": "+n(t(C)(a.ticket.updated_at,{day:void 0,month:void 0,year:void 0})),1)),t(m)?(e(),c("div",{key:1,class:H(["tw-px-1 tw-py-0.5 tw-rounded-sm fg-main-12-fat tw-text-text-dark",t(d)])},n(t(o)(t(m).titleKey??"")),3)):u("",!0)])]),p("div",it,[W(n(a.ticket.title)+" ",1),t(s)?(e(),c("div",rt,n(t(o)("date_updated"))+": "+n(t(C)(a.ticket.updated_at,{day:void 0,month:void 0,year:void 0})),1)):u("",!0)])]),_:1},8,["to"])}}}),pt=b(_t,[["__scopeId","data-v-053192cf"]]),ut={class:"no-tickets"},lt={class:"tw-text-center"},mt={class:"no-tickets-desc"},dt=y({__name:"NoTickets",setup(f){return(o,l)=>{const i=Z,s=D;return e(),c("div",ut,[p("div",lt,[k(i,{name:"support",width:48,height:48,class:"tw-mb-5 tw-text-input-fg"}),p("p",mt,n(o.$t("if_you_have_any_problems")),1),k(s,{"is-link":!0,"label-key":"create_ticket",link:t($).contact_us_create},null,8,["link"])])])}}}),gt=b(dt,[["__scopeId","data-v-5b710a4b"]]),kt={key:0},ft={key:0,class:"tickets-search"},ht={key:1,class:"tickets-list"},yt=y({__name:"TicketsList",setup(f){const{fetchTickets:o}=L(),l=L(),{tickets:i,pagination:s}=T(l),m=G(),{isLoggedIn:d}=T(m),a=V({search:"",per_page:20,page:1}),w=V(!1),x=_=>{a.value={...a.value,page:_.page,per_page:_.perPage},v()},v=async()=>{var _;try{const{data:r}=await o(Q(a.value));((_=r==null?void 0:r.data)==null?void 0:_.length)===0&&(w.value=!0)}catch(r){console.error(r)}};return J(()=>{d.value&&v()}),et({redirectTo:"/tickets/create"}),(_,r)=>{var N,I;const E=F,K=M,P=D,z=pt,j=tt,A=gt;return e(),c(B,null,[k(E,{"title-key":"support","icon-name":"contact-us"}),t(w)?u("",!0):(e(),c("div",kt,[t(d)?(e(),c("div",ft,[k(K,{modelValue:t(a).search,"onUpdate:modelValue":r[0]||(r[0]=h=>t(a).search=h),class:"tw-w-full","is-required":"",onInput:v},null,8,["modelValue"]),k(P,{classes:"create-ticket-button","is-link":!0,"label-key":"create_ticket",link:t($).contact_us_create},null,8,["link"])])):u("",!0),((N=t(i))==null?void 0:N.length)>0&&t(d)?(e(),c("div",ht,[(e(!0),c(B,null,O(t(i),h=>(e(),g(z,{key:h.id,ticket:h},null,8,["ticket"]))),128)),(I=t(s))!=null&&I.total&&t(s).total_pages>1?(e(),g(j,{key:0,class:"tickets-pagination","current-page":t(s).page,total:t(s).total,pages:t(s).total_pages,"per-page":t(s).per_page,"default-per-page":"20","per-page-list":[10,15,20],onChange:x},null,8,["current-page","total","pages","per-page"])):u("",!0)])):(e(),g(A,{key:2}))]))],64)}}}),wt=b(yt,[["__scopeId","data-v-8aef2e35"]]),Kt=y({__name:"index",setup(f){return st(),(o,l)=>{const i=wt;return e(),g(i)}}});export{Kt as default};
