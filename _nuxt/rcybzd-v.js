import{_ as F}from"./BrvGPcun.js";import I from"./BX0yJhA7.js";import{_ as T}from"./Cf_ozb67.js";import{u as q}from"./2vsOAOr9.js";import{V as L,an as N,$ as S,k as B,o as H,c as V,u as l,X as t,x as $,F as D}from"./JoFQSik9.js";const j=L({__name:"TableGames",props:{keyName:{}},setup(_){const g=_,d=N(),{fetchTableGames:f}=d,{gamesPaginationItem:i,gamesListItem:m,filtersItems:c,sortItems:u,params:s,isGameLoading:o,filterList:y,defaultParams:v,mobileSettings:P,getQueryParams:b,setFilters:G,checkPayload:h}=q(),n=async a=>{try{const{data:e}=await f(a);i.value=e.pagination,m.value=e.items,c.value=e.filters,u.value=e.sort}catch(e){console.error("TableGames.vue -> getTableGames:",e)}finally{o.value=!1}},w=S(),p=async a=>{const e=h(a),r={...e,per_page:s.value.per_page};w.push({query:e}),o.value=!0,await n(r)},C=async()=>{s.value.per_page+=v.value.per_page,await n(s.value)};return B(async()=>{const a=b(g.keyName);await n(a),await G(c.value,u.value)}),(a,e)=>{const r=F,k=I,x=T;return H(),V(D,null,[l(r,{"mobile-settings":t(P),"order-settings":{gridCols:6},list:t(y),class:"tw-my-4",onChange:p,onInput:p},null,8,["mobile-settings","list"]),l(x,{loading:t(o)},{default:$(()=>[l(k,{pagination:t(i),games:t(m),onPagination:C},null,8,["pagination","games"])]),_:1},8,["loading"])],64)}}});export{j as _};
