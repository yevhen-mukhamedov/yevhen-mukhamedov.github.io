import{_ as F}from"./BrvGPcun.js";import I from"./BX0yJhA7.js";import{_ as b}from"./Cf_ozb67.js";import{u as q}from"./2vsOAOr9.js";import{V as L,an as N,$ as S,k as B,o as H,c as $,u as i,X as t,x as D,F as E}from"./JoFQSik9.js";const z=L({__name:"VirtualGames",props:{keyName:{}},setup(_){const g=_,d=N(),{fetchVirtuals:f}=d,{gamesPaginationItem:l,gamesListItem:m,filtersItems:u,sortItems:c,params:s,isGameLoading:o,filterList:y,defaultParams:v,mobileSettings:P,getQueryParams:h,setFilters:w,checkPayload:C}=q(),n=async a=>{try{const{data:e}=await f(a);l.value=e.pagination,m.value=e.items,u.value=e.filters,c.value=e.sort}catch(e){console.error("VirtualGames.vue -> getVirtualsGames:",e)}finally{o.value=!1}},G=S(),p=async a=>{const e=C(a),r={...e,per_page:s.value.per_page};G.push({query:e}),o.value=!0,await n(r)},V=async()=>{s.value.per_page+=v.value.per_page,await n(s.value)};return B(async()=>{const a=h(g.keyName);await n(a),await w(u.value,c.value)}),(a,e)=>{const r=F,k=I,x=b;return H(),$(E,null,[i(r,{"mobile-settings":t(P),"order-settings":{gridCols:6},list:t(y),class:"tw-my-4",onChange:p,onInput:p},null,8,["mobile-settings","list"]),i(x,{loading:t(o)},{default:D(()=>[i(k,{pagination:t(l),games:t(m),onPagination:V},null,8,["pagination","games"])]),_:1},8,["loading"])],64)}}});export{z as _};