import{d as L,bJ as j,a0 as J,w as R,o as a,c as o,e as c,t as _,i as l,r as b,a1 as U,g as t,B as f,U as C,bK as K,S as A,b as u,C as i,b8 as G,h as x,ai as Q,a7 as W,bL as X,a as Y,s as B,H as y,aq as Z,ar as ee,F as te,A as q,V as ae,f as se,p as ne,au as oe}from"./7PQ9d4dP.js";const le={key:0},ie={key:0,class:"accordion-content"},ce={key:0},re={key:0,class:"ng-divider tw-mt-2"},de=L({__name:"NgAccordionPanel",props:{collapseIcon:{default:"up"},expandIcon:{default:"down"},sizeIcon:{default:16},bgColor:{default:""},headerColor:{default:""},disabled:{type:Boolean,default:!1},hideActions:{type:Boolean,default:!1},transitionName:{default:""},title:{default:""},text:{default:""},isOpen:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},hasBottomSeparator:{type:Boolean,default:!0}},setup(P){const r=P,h=j(),n=J(r.isOpen);R(()=>r.isOpen,e=>{n.value=e});const k=()=>{r.disabled||(n.value=!n.value)};return(e,v)=>{const m=x;return a(),o("div",{class:C(["ng-accordion",{active:t(n)}]),style:A({backgroundColor:e.bgColor})},[c("div",{class:C(["accordion-header",{"accordion-disabled":e.disabled,"accordion-readonly":"readonly"in e?e.readonly:t(K)}]),style:A({backgroundColor:e.headerColor}),onClick:k},[e.title?(a(),o("p",le,_(e.title),1)):l("",!0),b(e.$slots,"title"),e.hideActions?l("",!0):(a(),o(U,{key:1},[t(h).icon?l("",!0):(a(),f(m,{key:0,size:e.sizeIcon,name:t(n)?e.collapseIcon:e.expandIcon,class:"accordion-icon"},null,8,["size","name"])),b(e.$slots,"icon",{isActive:t(n)})],64))],6),u(G,{name:e.transitionName},{default:i(()=>[t(n)?(a(),o("div",ie,[e.text?(a(),o("p",ce,_(e.text),1)):l("",!0),b(e.$slots,"content")])):l("",!0)]),_:3},8,["name"]),!t(n)&&e.hasBottomSeparator?(a(),o("div",re)):l("",!0)],6)}}}),ue={key:0,class:"ng-page"},pe={key:0,class:"ng-page-title"},ge={key:1,class:"ng-page-title"},_e={key:2,class:"ng-page-html-wrapper"},me={class:"caption"},ye=c("div",{class:"accordion-icon"},null,-1),fe=["innerHTML"],he=["innerHTML"],ke=c("div",{class:"gradient"},null,-1),ve={class:"contact-us"},Te={key:3,class:"ng-page-html-wrapper"},be=["innerHTML"],Ce=L({__name:"[slug]",setup(P){const r=Q(),h=W(),n=X(),{fetchTextPage:k,resetTextPageState:e}=n,{t:v}=Y(),{getTextPageFile:m,getTextPageHtml:T,getTextPageType:H,getTextPageDomain:I}=B(n),{isLoggedIn:M}=B(h),z=y(()=>JSON.parse(T.value)),d=y(()=>{const s=H.value,p=T.value;return{isComponent:s&&p,isFaq:s==="faq_for_all",isTxt:s==="text_page"}}),F=y(()=>M.value?"/tickets/create":"/tickets"),O=y(()=>d.value.isFaq?v("faq"):d.value.isTxt?v($()):"Text page"),V=async()=>{try{await k()}catch(s){console.error("textPageCallAction pages/page/[slug].vue",s)}},$=()=>{var s,p;return((p=(s=r==null?void 0:r.path)==null?void 0:s.split("/"))==null?void 0:p.pop().replace(/-/g,"_"))??""};return Z("textPageCallAction",async()=>await V()),ee(()=>e()),te({title:()=>O.value}),(s,p)=>{const E=ne,w=de,S=ae,D=oe;return t(d).isComponent?(a(),o("div",ue,[t(d).isFaq?(a(),o("div",pe,_(s.$t("faq")),1)):t(d).isTxt?(a(),o("div",ge,_(s.$t($())),1)):l("",!0),t(d).isFaq?(a(),o("div",_e,[u(S,{list:t(z),"key-name":"accordion-layer-1",class:"ng-page-html container-faq"},{item:i(g=>[u(w,{class:"accordion-layer-1"},{title:i(()=>[c("div",me,[g.item.icon?(a(),f(E,{key:0,class:"pictures",src:`
                    ${t(I)}${g.item.icon}
                  `,alt:g.item.questionCategoryName},null,8,["src","alt"])):l("",!0),se(" "+_(g.item.questionCategoryName),1)])]),icon:i(()=>[ye]),content:i(()=>[u(S,{list:g.item.questions,"key-name":"accordion-layer-2"},{item:i(N=>[u(w,{class:"accordion-layer-2"},{title:i(()=>[c("div",{class:"ng-page-html",innerHTML:N.item.title},null,8,fe)]),content:i(()=>[c("div",{class:"ng-page-html",innerHTML:N.item.answer},null,8,he),ke]),_:2},1024)]),_:2},1032,["list"])]),_:2},1024)]),_:1},8,["list"]),c("div",ve,[u(q,{"color-type":"outline","label-key":s.$t("did_not_find_answer"),"is-link":!0,link:t(F),"is-with-icon":!0,"icon-position":"right"},{default:i(()=>[u(x,{name:"contact-us",size:30})]),_:1},8,["label-key","link"])])])):l("",!0),t(d).isTxt?(a(),o("div",Te,[c("div",{class:"ng-page-html container-txt",innerHTML:t(T)},null,8,be),t(m)?(a(),f(q,{key:0,"external-link":t(m),"label-key":s.$t("download_file"),target:"_blank","is-link":!0,classes:"tw-w-fit",class:C("ng-button--primary")},null,8,["external-link","label-key"])):l("",!0)])):l("",!0)])):(a(),f(D,{key:1,class:"ng-page tw-border-none"}))}}}),$e=Object.freeze(Object.defineProperty({__proto__:null,default:Ce},Symbol.toStringTag,{value:"Module"}));export{de as _,$e as a};
