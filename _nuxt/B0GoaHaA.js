import{d as V,X as w,m as z,s as I,a7 as U,I as A,a0 as D,a8 as L,o as t,c as a,e as i,b as l,g as o,U as T,a9 as x,a2 as O,B as m,C as d,a1 as E,t as r,i as c,p as F,h as R,Y as X,V as Y,_ as j}from"./7PQ9d4dP.js";const q={class:"profile"},G={class:"tw-mr-auto"},H={class:"tier-level"},J={key:1},K=["onClick"],Q=V({__name:"UserProfile",props:{profileMenu:{}},setup(W){const k=w(),v=z(),{getTiers:_,isTierProgramm:h,getAvatar:g}=I(v),y=U(),{signOut:C}=y,N=A(),{openModal:S}=N,n=D(!1),p=()=>{n.value=!1},$=s=>{if(s==="logout"){C();return}S(s)};return(s,f)=>{const M=F,u=R,P=X,b=Y,B=L("click-outside");return t(),a("div",q,[i("div",{class:T(["profile-avatar",{"is-active":o(n)}]),onClick:f[0]||(f[0]=x(e=>n.value=!o(n),["stop"]))},[l(M,{alt:"user_avatar",src:o(g)},null,8,["src"])],2),s.profileMenu&&o(n)?O((t(),m(b,{key:0,list:s.profileMenu,class:"profile-menu","key-name":"profile-menu-item","key-identify":"link"},{item:d(({item:e})=>[e.isVisible?(t(),a("div",{key:0,onClick:p},[e.link?(t(),m(P,{key:0,class:"profile-menu-item",to:o(k)({path:e.link})},{default:d(()=>[l(u,{name:e.icon,size:20},null,8,["name"]),o(h)&&e.icon==="tier"&&o(_).level?(t(),a(E,{key:0},[i("span",G,r(s.$t("tiers")),1),i("span",H,[l(u,{name:"stat",size:12}),i("span",null,r(o(_).level),1)])],64)):(t(),a("span",J,r(s.$t(e.label)),1))]),_:2},1032,["to"])):c("",!0),e.action?(t(),a("button",{key:1,class:"profile-menu-item",onClick:Z=>$(e.action)},[l(u,{name:e.icon,size:20},null,8,["name"]),i("span",null,r(s.$t(e.label)),1)],8,K)):c("",!0)])):c("",!0)]),_:1},8,["list"])),[[B,p]]):c("",!0)])}}}),se=j(Q,[["__scopeId","data-v-66c43032"]]);export{se as default};