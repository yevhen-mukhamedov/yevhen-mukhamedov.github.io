import{d as m,o as r,c as o,b as _,C as p,S as y,e as a,U as k,r as n,t as i,i as d,f as h,V as v,_ as g}from"./7PQ9d4dP.js";const w={class:"ng-table-mobile"},f={key:0,class:"table-row-wrapper"},A={key:0,class:"table-row-title"},$={class:"table-row-value"},N={class:"table-row-wrapper"},T={key:0,class:"table-row-title"},C={class:"table-row-value"},V=m({__name:"NgTableMobile",props:{header:{},list:{},isGridAreas:{type:Boolean},gridTemplateAreas:{}},setup(B){const u=(s,c)=>s.split(".").reduce((l,t)=>l[t],c);return(s,c)=>{const l=v;return r(),o("div",w,[_(l,{list:s.list,"key-name":"table-list",container:!1},{item:p(({item:t})=>[_(l,{list:s.header,"key-name":"table-list-row",class:"table-list-wrapper",style:y(s.gridTemplateAreas?{gridTemplateAreas:s.gridTemplateAreas}:{})},{item:p(({item:e,index:b})=>[a("div",{class:k(["table-row",`table-row-${b}`]),style:y(s.isGridAreas?{gridArea:e.key}:{})},[n(s.$slots,e.key,{item:t,header:e},()=>[e.key.includes(".")?(r(),o("div",f,[e.title?(r(),o("div",A,i(e.title),1)):d("",!0),a("div",$,i(u(e.key,t)),1)])):d("",!0),a("div",N,[e.title?(r(),o("div",T,[n(s.$slots,`${e.key}-header`,{item:t},()=>[h(i(e.title),1)],!0)])):d("",!0),a("div",C,[n(s.$slots,`${e.key}-value`,{item:t},()=>[a("div",null,i(t[e.key]),1)],!0)])])],!0)],6)]),_:2},1032,["list","style"])]),_:3},8,["list"])])}}}),z=g(V,[["__scopeId","data-v-a5a70804"]]);export{z as _};