import{d as p,o as d,B as f,b as s,C as l,T as w,e as t,t as _,h as u,A as g,_ as y}from"./7PQ9d4dP.js";import{_ as v}from"./UCCBr-NG.js";const x={class:"title"},$={class:"tw-flex tw-flex-col tw-items-center tw-p-4"},b={class:"desc-title"},k={class:"desc"},C={class:"tw-flex tw-justify-between tw-gap-4 tw-p-4 tw-pt-0"},B=p({__name:"MessageDelete",emits:["close","confirm"],setup(N,{emit:i}){const o=i;return(n,e)=>{const r=u,a=g,m=v;return d(),f(w,{to:"#globalModal"},[s(m,{class:"delete-modal","is-footer":"",onClose:e[2]||(e[2]=c=>o("close"))},{title:l(()=>[t("h2",x,_(n.$t("delete_message")),1)]),content:l(()=>[t("div",$,[s(r,{name:"alert",size:76,class:"icon"}),t("p",b,_(n.$t("are_you_sure_delete_message")),1),t("p",k,_(n.$t("this_message_will_be_premanentry_removed")),1)])]),footer:l(()=>[t("div",C,[s(a,{"color-type":"secondary","label-key":"cancel",class:"tw-w-full",onClick:e[0]||(e[0]=c=>o("close"))}),s(a,{"label-key":"delete",class:"tw-w-full",onClick:e[1]||(e[1]=c=>o("confirm"))})])]),_:1})])}}}),D=y(B,[["__scopeId","data-v-3876f018"]]);export{D as _};