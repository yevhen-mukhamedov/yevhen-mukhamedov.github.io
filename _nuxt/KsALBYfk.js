import{M as tt,C as k,_ as et}from"./D5X7BfX4.js";import{d as st,ai as at,a as ot,L as nt,j as it,s as x,b5 as lt,H as V,a0 as N,k as rt,l as ct,o as p,c as $,e as o,b as m,g as s,C as r,B as b,t as c,n as D,f as v,i as dt,p as mt,h as pt,A as ut,at as _t,au as yt,a4 as gt,_ as ft}from"./7PQ9d4dP.js";import{_ as bt}from"./DUlDJf1u.js";import{_ as vt}from"./BjUcVok3.js";import"./DqC-nx6a.js";import"./BQWyzQZp.js";import"./DD170oM2.js";import"./C3H6epDl.js";import"./D0WEjs_T.js";import"./CXUEa_s4.js";import"./DPPwigSW.js";const ht={class:"tier-games"},wt={class:"tw-my-4"},Ct={key:0},kt={class:"table-row"},Nt={class:"table-row-wrapper"},St={class:"table-row-title"},jt={class:"table-row-value"},Lt={class:"table-row"},Tt={class:"table-row-wrapper"},Gt={class:"table-row-title"},It={class:"table-row-value"},Et={class:"table-row"},Ot={class:"table-row-wrapper"},Pt={class:"table-row-title"},Mt={class:"table-row-value"},xt={class:"date"},Vt={class:"amount"},$t={class:"points"},Dt=st({__name:"GameStatistics",setup(Bt){const h=at(),{t:a}=ot(),{platformCommasFormat:_}=nt(),y=["6ed534e6-fe06-428f-b15f-e769cbbfe1c4","45cab422-ae18-45d9-acde-e0ddead0091a"],B=it(),{isDesktop:S}=x(B),j=lt(),{getGamePagination:L,getGameStatistics:g,getGameFilters:T}=x(j),{fetchGameStatistics:F,resetTiersProgramsStore:R}=j,G=V(()=>({per_page:10,...h.query})),U={title:a("preview"),justify:"left",key:"banner_vertical"},A=[{title:a("type"),justify:"left",key:"type"},{title:a("date"),justify:"left",key:"date"},{title:a("amount"),justify:"right",key:"sum"},{title:a("points"),justify:"right",key:"points"}],q=[{title:a("name"),justify:"left",key:"game_name"},{title:a("type"),justify:"left",key:"type"},{title:a("date"),justify:"left",key:"date"},{title:a("amount"),justify:"right",key:"sum"},{title:a("points"),justify:"right",key:"points"}],I=N([]),w=N({per_page:G.value.per_page}),f=N(!0),E=V(()=>S.value?[U,...q]:A),C=async t=>{try{await F(t)}catch(n){console.error("getTierGameStatistic tiers/GameStatistics",n)}finally{f.value=!1}},z=async t=>{var i,l,d;const n={type:(i=t.type)==null?void 0:i.toString(),date_from:(l=t.date)!=null&&l[0]?t.date[0]:"",date_to:(d=t.date)!=null&&d[1]?t.date[1]:"",game_id:t.game_id,per_page:t.per_page};f.value=!0,await C(n)},H=()=>{w.value.per_page+=G.value.per_page,C(w.value)},K={style:{accordionContainerClass:"tw-flex tw-flex-col tw-gap-4"},type:tt.ACCORDION},O=t=>Object.entries(t).map(([n,i])=>({text:typeof i=="string"?a(i):i,val:Number(n)})),J=t=>{const n=O(t.type),i=[{text:a("all"),val:void 0},...O(t.game)],l={default:n.find(u=>u.val===Number(h.query.type))||n[0],list:n},d={default:i.find(u=>u.val===Number(h.query.game_id))||i[0],list:i};I.value=[{componentName:k.SINGLE_SELECTOR,target:"game_id",class:"game-search-selector tw-col-span-2",props:{additionalLabel:a("game"),placeholder:a("game"),displayedOption:"text",returnedOption:"val",defaultOption:d.default,itemList:d.list,isAllowEmpty:!1,isSearchable:!0,modelValue:""},mobile:{class:"tw-col-span-6"}},{target:"date",componentName:k.DATE_PICKER,props:{modelValue:"",modelType:"yyyy-MM-dd",format:"yyyy/MM/dd",isDisabled:!1,range:!0,inputName:"date",labelText:a("date"),multiCalendar:!0},mobile:{redirect:!0}},{componentName:k.SINGLE_SELECTOR,target:"type",props:{additionalLabel:`${a("type")}: `,displayedOption:"text",returnedOption:"val",defaultOption:l.default,itemList:l.list,isAllowEmpty:!1,modelValue:""},mobile:{redirect:!0}}]};return rt(async()=>{if(await C(w.value),T.value){const{value:t}=T;await J(t)}f.value=!1}),ct(()=>{R()}),(t,n)=>{const i=et,l=mt,d=pt,u=bt,Q=vt,W=ut,X=_t,Y=yt,Z=gt;return p(),$("div",ht,[o("div",wt,[m(i,{"mobile-settings":K,"order-settings":{gridCols:6},list:s(I),class:"tw-my-4",onChange:z},null,8,["list"])]),m(Z,{loading:s(f),class:"tw-mt-4"},{default:r(()=>{var P,M;return[(P=s(g))!=null&&P.length?(p(),$("section",Ct,[s(S)?(p(),b(Q,{key:1,header:s(E),list:s(g),class:"ng-table-tablet"},{banner_vertical:r(({item:e})=>[m(l,{src:e.banner_vertical,alt:e.banner_vertical,class:"picture"},null,8,["src","alt"])]),date:r(({item:e})=>[o("div",xt,c(e.date.split("-").join("/")),1)]),sum:r(({item:e})=>[o("div",Vt,[m(l,{class:"tw-size-4",src:("getCurrencyIconUrl"in t?t.getCurrencyIconUrl:s(D))(e.currency),alt:e.currency},null,8,["src","alt"]),v(" "+c(s(_)(y,e.sum)),1)])]),points:r(({item:e})=>[o("div",$t,[m(d,{"is-init-color":!0,size:16,name:"gem"}),v(" "+c(s(_)(y,e.points)),1)])]),_:1},8,["header","list"])):(p(),b(u,{key:0,header:s(E),list:s(g)},{date:r(({item:e})=>[o("div",kt,[o("div",Nt,[o("div",St,c(t.$t("date")),1),o("div",jt,c(e.date.split("-").join("/")),1)])])]),sum:r(({item:e})=>[o("div",Lt,[o("div",Tt,[o("div",Gt,c(t.$t("amount")),1),o("div",It,[m(l,{class:"tw-size-4",src:("getCurrencyIconUrl"in t?t.getCurrencyIconUrl:s(D))(e.currency),alt:e.currency},null,8,["src","alt"]),v(" "+c(s(_)(y,e.sum)),1)])])])]),points:r(({item:e})=>[o("div",Et,[o("div",Ot,[o("div",Pt,c(t.$t("points")),1),o("div",Mt,[m(d,{"is-init-color":!0,size:16,name:"gem"}),v(" "+c(s(_)(y,e.points)),1)])])])]),_:1},8,["header","list"])),(M=s(L))!=null&&M.next_page?(p(),b(X,{key:2,"item-count":s(g).length,item:s(L),"class-list":"tw-mt-8"},{action:r(()=>[m(W,{"label-key":"show_more","color-type":"outline",class:"content-btn",onClick:n[0]||(n[0]=e=>H())})]),_:1},8,["item-count","item"])):dt("",!0)])):(p(),b(Y,{key:1}))]}),_:1},8,["loading"])])}}}),Xt=ft(Dt,[["__scopeId","data-v-d0f5b8c7"]]);export{Xt as default};
