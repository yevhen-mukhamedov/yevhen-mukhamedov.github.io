import{_ as T}from"./Bxl7epld.js";import{V as D,al as L,a1 as G,i as l,$ as H,a7 as M,j as y,p as O,E as U,c as v,u as a,a as z,x as c,X as t,f as p,b as k,o as n,K,t as Q,am as W,a5 as X,a6 as F}from"./JoFQSik9.js";import{_ as J}from"./B92FZ1g3.js";import{_ as Y}from"./3N86B1rU.js";import{_ as Z}from"./1-N0yLDQ.js";import{_ as ee}from"./sQNTZNBq.js";import{_ as te}from"./ChQlXKMR.js";import{_ as oe}from"./BQxgWOyN.js";import{_ as se}from"./BMBJnSAB.js";import{u as ae}from"./CXetEtI4.js";import{u as ne}from"./CrHKx1Rg.js";import"./BM2BYuY2.js";import"./LijCuOwn.js";import"./CXQSc-M8.js";const re={class:"ng-casino-recent"},ce={class:"tw-mb-8 tw-mt-4"},ie={key:0,class:"tw-my-8"},me=D({__name:"casino-recent",setup(_e){const u=L(),{getPagination:f,getObjectList:i}=G(u),{fetchMyRecentGames:w,resetActivitiesStore:x}=u,d=l(7),o=l({per_page:d.value,search:""}),h=H(),m=M(),$=y(()=>m.query.search),b=y(()=>o.value.per_page),_=l({}),N=s=>{try{w(s)}catch(e){e&&typeof e=="object"&&(_.value=e),console.error("recentCallAction pages/casino-recent.vue",e)}},I=()=>{o.value.per_page+=d.value},S=W(()=>{h.push({query:{search:o.value.search}})});return O(()=>m.query.search,(s,e)=>{s?o.value={...o.value,...m.query}:e&&(h.push({query:{}}),o.value.search="")}),ae("fetchProviders",async()=>await N(o.value),{watch:[$,b]}),U(()=>{x()}),ne(),(s,e)=>{var g;const V=T,C=X,P=J,q=Y,B=Z,R=ee,A=te,E=oe,j=se;return n(),v("div",re,[a(V,{"title-key":"casino_recent","icon-name":"time",class:"tw-font-bold"}),z("section",ce,[a(P,{modelValue:t(o).search,"onUpdate:modelValue":e[0]||(e[0]=r=>t(o).search=r),"placeholder-text":s.$t("search_recent"),"is-required":!0,onInput:t(S)},{leftIcon:c(()=>[a(C,{size:18,name:"search"})]),_:1},8,["modelValue","placeholder-text","onInput"])]),t(i).length?(n(),v("section",ie,[a(B,{"key-name":"leader-board-tab","key-identify":"game_id",list:t(i),class:"casino-recent-grid"},{item:c(({item:r})=>[a(q,{class:"tw-mt-1",game:r},null,8,["game"])]),_:1},8,["list"]),(g=t(f))!=null&&g.next_page?(n(),p(A,{key:0,"class-list":"tw-my-8","item-count":t(i).length,item:t(f)},{action:c(()=>[a(R,{"label-key":"show_more","color-type":"outline",class:"content-btn",onClick:e[1]||(e[1]=r=>I())})]),_:1},8,["item-count","item"])):k("",!0)])):(n(),p(E,{key:1},{content:c(()=>[K(Q(s.$t("no_recent")),1)]),_:1})),Object.keys(t(_)).length?(n(),p(j,{key:2,error:t(_),type:"tooltip"},null,8,["error"])):k("",!0)])}}}),Ne=F(me,[["__scopeId","data-v-97e95286"]]);export{Ne as default};
