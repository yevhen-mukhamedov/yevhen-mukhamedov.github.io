import{V as $,_ as c,j as P,c as s,d as o,b as n,F as a,K as i,t as u,X as d,n as f,f as I,x as W,W as K,az as B,o as l}from"./JoFQSik9.js";const L=["disabled"],C=["disabled","for"],T=["href"],D=$({__name:"NgButton",props:{isDisabled:{type:Boolean,default:!1},link:{default:()=>({path:"/"})},isLink:{type:Boolean,default:!1},externalLink:{default:""},labelKey:{default:""},label:{},colorType:{default:"primary"},isOutlined:{type:Boolean,default:!1},borderRadiusValue:{default:""},classes:{default:""},isWithIcon:{type:Boolean,default:!1},iconPosition:{default:"right"},size:{default:"origin"},tagType:{default:"button"},forInput:{default:""}},emits:["click"],setup(y,{emit:k}){const{t:r}=c(),t=y,h=k,p=()=>K()(t.link),b=P(()=>[`tw-rounded${t.borderRadiusValue?"-"+t.borderRadiusValue:""}`,`ng-btn-${t.colorType}`,`${t.size}`,`${t.isOutlined?"ng-btn-outlined":""}`,`${t.isDisabled?"ng-disabled":""}`,`${t.isWithIcon?t.iconPosition==="right"?"ng-btn-with-icon-right":"ng-btn-with-icon-left":""}`,`${t.classes}`].join(" ")),g=()=>{h("click")};return(e,V)=>{const m=B;return!e.isLink&&e.tagType==="button"?(l(),s("button",{key:0,class:f([d(b),"ng-btn"]),disabled:e.isDisabled,type:"button",onClick:g},[e.isWithIcon&&e.iconPosition==="left"?o(e.$slots,"default",{key:0}):n("",!0),e.label||e.labelKey?(l(),s(a,{key:1},[e.label?(l(),s(a,{key:0},[i(u(e.label),1)],64)):(l(),s(a,{key:1},[i(u(d(r)(e.labelKey)),1)],64))],64)):o(e.$slots,"default",{key:2}),e.isWithIcon&&e.iconPosition==="right"?o(e.$slots,"default",{key:3}):n("",!0)],10,L)):!e.isLink&&e.tagType==="label"?(l(),s("label",{key:1,class:f([d(b),"ng-btn"]),disabled:e.isDisabled,for:e.forInput},[e.isWithIcon&&e.iconPosition==="left"?o(e.$slots,"default",{key:0}):n("",!0),e.label||e.labelKey?(l(),s(a,{key:1},[e.label?(l(),s(a,{key:0},[i(u(e.label),1)],64)):(l(),s(a,{key:1},[i(u(d(r)(e.labelKey)),1)],64))],64)):o(e.$slots,"default",{key:2}),e.isWithIcon&&e.iconPosition==="right"?o(e.$slots,"default",{key:3}):n("",!0)],10,C)):e.externalLink?(l(),s("a",{key:3,class:f(["ng-btn",d(b)]),href:e.externalLink,target:"_blank",rel:"nofollow"},[e.isWithIcon&&e.iconPosition==="left"?o(e.$slots,"default",{key:0}):n("",!0),e.label?(l(),s(a,{key:1},[i(u(e.label),1)],64)):(l(),s(a,{key:2},[i(u(d(r)(e.labelKey)),1)],64)),e.isWithIcon&&e.iconPosition==="right"?o(e.$slots,"default",{key:3}):n("",!0)],10,T)):(l(),I(m,{key:2,class:f(["ng-btn",d(b)]),to:p()},{default:W(()=>[e.isWithIcon&&e.iconPosition==="left"?o(e.$slots,"default",{key:0}):n("",!0),e.label||e.labelKey?(l(),s(a,{key:1},[e.label?(l(),s(a,{key:0},[i(u(e.label),1)],64)):(l(),s(a,{key:1},[i(u(d(r)(e.labelKey)),1)],64))],64)):o(e.$slots,"default",{key:2}),e.isWithIcon&&e.iconPosition==="right"?o(e.$slots,"default",{key:3}):n("",!0)]),_:3},8,["class","to"]))}}});export{D as _};
