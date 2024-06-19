import{V as k,W as b,j as m,c as i,d as n,n as l,X as t,f as _,x as y,az as g,o}from"./JoFQSik9.js";const h=["disabled"],$=["href"],z=k({__name:"NgButtonIcon",props:{isDisabled:{type:Boolean,default:!1},link:{default:()=>({path:"/"})},isLink:{type:Boolean,default:!1},externalLink:{default:""},colorType:{default:"primary"},isOutlined:{type:Boolean,default:!1},borderRadiusValue:{default:""},classes:{default:""},size:{default:"origin"}},emits:["click"],setup(d,{emit:u}){const e=d,r=u,c=b(),a=m(()=>`
      ${e.classes}
      ${e.size}
      tw-rounded${e.borderRadiusValue?"-"+e.borderRadiusValue:""}
      ng-btn-${e.colorType}
      ${e.isOutlined?"ng-btn-outlined":""}
      ${e.isDisabled?"ng-disabled":""}
    `),f=()=>{r("click")};return(s,B)=>{const p=g;return s.isLink?s.externalLink?(o(),i("a",{key:2,class:l(["ng-btn-icon",t(a)]),href:s.externalLink,target:"_blank",rel:"nofollow"},[n(s.$slots,"default")],10,$)):(o(),_(p,{key:1,class:l(["ng-btn-icon",t(a)]),to:t(c)(s.link)},{default:y(()=>[n(s.$slots,"default")]),_:3},8,["class","to"])):(o(),i("button",{key:0,class:l([t(a),"ng-btn-icon"]),disabled:s.isDisabled,type:"button",onClick:f},[n(s.$slots,"default",{size:e.size})],10,h))}}});export{z as _};
