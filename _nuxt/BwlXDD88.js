import{d as C,o as s,c as m,t as r,i as c,W as R,X as T,al as j,j as E,H as o,G as H,a as K,B as d,C as W,N as X,g as a,aG as Y,Y as q,e as n,U as k,b as w,f as A,p as F,h as J,x as O,y as Q,_ as Z}from"./7PQ9d4dP.js";const x={class:"mark-container"},ee={key:0,class:"mark-top game-mark"},ae={key:1,class:"mark-new game-mark"},se={key:2,class:"mark-for-you game-mark"},te=C({__name:"GameMarkList",props:{list:{}},setup(l){return(i,g)=>(s(),m("div",x,[i.list.top?(s(),m("div",ee,r(i.$t("Top").toUpperCase()),1)):c("",!0),i.list.new?(s(),m("div",ae,r(i.$t("New").toUpperCase()),1)):c("",!0),i.list.recommended?(s(),m("div",se,r(i.$t("for_you").toUpperCase()),1)):c("",!0)]))}}),oe=l=>(O("data-v-455c05b3"),l=l(),Q(),l),ne={class:"tw-relative"},re={key:0,class:"card-hover-container"},ce={class:"card-hover-header"},ie={class:"card-name"},me={class:"card-soft"},le={class:"card-footer"},de={key:0,class:"rate-container"},_e={class:"card-category"},pe={key:1,class:"card-hover-container card-hover-container--blocked"},ge=oe(()=>n("div",{class:"card-gradient"},null,-1)),ue={class:"tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-1 tw-text-center tw-max-w-32 tw-h-full tw-relative"},he={class:"card-title"},ve={class:"card-description tw-text-text-secondary"},b=95,fe=C({__name:"GameCard",props:{game:{},size:{},isLinkable:{type:Boolean,default:!0},pagePath:{default:R.games}},emits:["game-click"],setup(l,{emit:i}){const g=T(),$=j(),I=E(),N=o(()=>I.getCountryCode),{getIconName:u}=H(),L=i,e=l,{showNotify:S}=$,{t:h}=K(),v=o(()=>e.isLinkable&&!p.value),z=o(()=>e.game.is_custom_category?h(e.game.category):e.game.category),B=o(()=>e.game.show_rtp&&e.game.rtp!==null&&e.game.rtp!==""),P=o(()=>e.game.hover.reason==="country"),G=o(()=>`${e.game.rtp||0}%`),p=o(()=>e.game.hover&&e.game.hover.show),f=o(()=>e.game.is_top||e.game.is_recommended||e.game.is_new?{top:e.game.is_top,recommended:e.game.is_recommended,new:e.game.is_new}:null),U=o(()=>v.value?q:"div"),V=o(()=>g({path:`${e.pagePath}/${e.game.gameId}`})),D=()=>{L("game-click",e.game.gameId),p.value&&S({...e.game.hover,soft:e.game.soft,name:e.game.name})};return(t,ye)=>{const M=te,y=F,_=J;return s(),m("div",ne,[(s(),d(Y(a(U)),X({class:["ng-game-card",[t.size]]},a(v)?{to:a(V)}:null,{onClick:D}),{default:W(()=>[n("div",{class:k(["card-container",{disable:a(p)}])},[a(f)?(s(),d(M,{key:0,list:a(f)},null,8,["list"])):c("",!0),t.game.banner_vertical?(s(),d(y,{key:1,class:"game-banner",src:t.game.banner_vertical,alt:t.game.name,loading:"eager"},null,8,["src","alt"])):(s(),d(y,{key:2,class:"game-banner",src:t.game.banner_url,alt:t.game.name,loading:"eager"},null,8,["src","alt"]))],2),t.game.hover.show?c("",!0):(s(),m("div",re,[n("header",ce,[n("div",ie,r(t.game.name),1),n("div",me,r(t.game.soft),1)]),w(_,{class:k(["play-icon",a(u)("play-btn")]),name:a(u)("play-btn"),size:64},null,8,["class","name"]),n("footer",le,[a(B)?(s(),m("div",de,[Number(t.game.rtp)<b?(s(),d(_,{key:0,name:"rtp-freez",size:12})):c("",!0),Number(t.game.rtp)>=b?(s(),d(_,{key:1,name:"rtp-fire",size:12})):c("",!0),A(" "+r(a(G))+" "+r(a(h)("srp").toUpperCase()),1)])):c("",!0),n("div",_e,r(a(z)),1)])])),a(P)?(s(),m("div",pe,[ge,n("div",ue,[n("span",he,r(t.$t("game_not_available_region")),1),w(_,{"is-init-color":!0,name:a(N).toLowerCase(),width:20,height:20,folder:"flags"},null,8,["name"]),n("span",ve,r(t.$t("if_you_use_vpn_off_to_access")),1)])])):c("",!0)]),_:1},16,["class"]))])}}}),we=Z(fe,[["__scopeId","data-v-455c05b3"]]);export{we as _};