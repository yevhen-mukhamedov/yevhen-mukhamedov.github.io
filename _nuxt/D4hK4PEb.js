import{_ as se}from"./C3H6epDl.js";import{d as ne,a as ae,m as le,j as ie,s as A,a0 as d,H,w as S,n as B,o as a,B as V,C as m,f as I,t as l,e as n,b as i,g as s,O as N,c,a1 as O,aE as R,$ as q,i as T,p as re,h as ce,ab as _e,A as ue,x as de,y as ve,_ as pe}from"./7PQ9d4dP.js";import{_ as ge}from"./RQfXHScZ.js";import{_ as me}from"./UCCBr-NG.js";import"./D0WEjs_T.js";const fe=f=>(de("data-v-aa829f34"),f=f(),ve(),f),be={class:"wallet-settings-togglers"},we={class:"toggler-container"},ye={class:"toggler-content"},ke={class:"toggler-label"},he={class:"toggler-description"},Ce={class:"toggler-container"},$e={class:"toggler-content"},Se={class:"toggler-label"},Be={class:"toggler-description"},Ve={key:0,class:"wallet-settings-convert"},Ie=["onClick"],Ne={class:"tw-font-bold tw-text-base"},Te=fe(()=>n("div",{class:"ng-divider"},null,-1)),Ue={key:1,class:"wallet-settings-preference"},ze={class:"preference-title"},Ee={key:2,class:"wallet-settings-multisport-convert"},Me=["onClick"],Fe={class:"tw-font-bold tw-text-base"},We=ne({__name:"WalletSettingsModal",setup(f){var E,M,F,W,j;const{t:U}=ae(),v={crypto:"crypto_native",fiat:"fiat_conversion"},x=[{label:U("wallet_settings_crypto_native"),value:v.crypto,icon:"all-crypto"},{label:U("wallet_settings_fiat_conversion"),value:v.fiat,icon:"convert-currency",img:""}],z=le(),D=ie(),{updateSettings:L}=z,{getConvertCurrencies:C,getSportbookConvertCurrencies:G,getHiddenBlocks:J}=A(D),{getSettings:p,getBalances:K}=A(z),b=d(((E=p.value)==null?void 0:E.multi_no_show_zero_balance)??!1),g=d((M=p.value)==null?void 0:M.multi_convert_to_fiat),_=d(!!(((F=p.value)==null?void 0:F.multi_convert_to_fiat)??!1)),r=d((W=p.value)==null?void 0:W.multi_sportbook_convert_to_fiat),w=d(x),y=d((j=p.value)!=null&&j.multi_sportbook_convert_to_fiat?v.fiat:v.crypto),k=H(()=>y.value===v.fiat),P=H(()=>w.value.map(({icon:e,label:o,value:u,img:h=""})=>({icon:e,label:o,key:u,img:h}))),Q=async()=>{const e={multi_no_show_zero_balance:b.value,multi_convert_to_fiat:_.value?g.value:!1,multi_sportbook_convert_to_fiat:r.value||!1};await L(e)};return S(()=>_.value,e=>{if(!e)g.value="";else{const[o]=C.value;g.value=o}}),S(()=>k.value,e=>{if(!e)r.value="";else{const[o]=C.value;r.value=o}}),S(()=>[k.value,r.value],()=>{const[e,o]=w.value;k.value?w.value=[e,{...o,img:B(r.value)}]:(o.img="",w.value=[e,o])},{immediate:!0}),(e,o)=>{const u=se,h=re,X=ce,Y=ge,Z=_e,ee=ue,te=me;return a(),V(te,{class:"wallet-settings-modal","is-footer":"","fullscreen-mode":""},{title:m(()=>[I(l(e.$t("wallet_settings")),1)]),content:m(()=>[n("div",be,[n("div",we,[i(u,{modelValue:s(b),"onUpdate:modelValue":o[0]||(o[0]=t=>N(b)?b.value=t:null)},null,8,["modelValue"]),n("div",ye,[n("div",ke,l(e.$t("hide_zero_balances")),1),n("div",he,l(e.$t("your_zero_balances")),1)])]),n("div",Ce,[i(u,{modelValue:s(_),"onUpdate:modelValue":o[1]||(o[1]=t=>N(_)?_.value=t:null),disabled:Object.values(s(K)).every(t=>!t.is_crypto)},null,8,["modelValue","disabled"]),n("div",$e,[n("div",Se,l(e.$t("crypto_in_fiat")),1),n("div",Be,l(e.$t("in_the_crypto_equivalent")),1)])])]),s(_)?(a(),c("div",Ve,[(a(!0),c(O,null,R(s(C),(t,$)=>(a(),c("div",{key:t,class:"tw-flex tw-gap-1 tw-items-center tw-cursor-pointer",onClick:oe=>g.value=t},[(a(),V(u,{key:`wallet-settings-convert-${$}-${t}`,"model-value":s(g)===t,type:s(q).radio},null,8,["model-value","type"])),n("span",Ne,l(t),1),i(h,{src:("getCurrencyIconUrl"in e?e.getCurrencyIconUrl:s(B))(t),width:"16",height:"16",class:"convert-currency-icon",alt:"currency"},null,8,["src"])],8,Ie))),128))])):T("",!0),Te,s(J).includes("sportbook")?T("",!0):(a(),c("div",Ue,[n("div",ze,[I(l(e.$t("currency_preference_for_sports_betting"))+" ",1),i(Y,null,{content:m(()=>[I(l(e.$t("currency_preference_for_sports_betting_tooltip")),1)]),target:m(()=>[i(X,{size:16,name:"info",color:"#ffffff66"})]),_:1})]),i(Z,{modelValue:s(y),"onUpdate:modelValue":o[2]||(o[2]=t=>N(y)?y.value=t:null),tabs:s(P),type:"primary","slider-settings":{spaceBetween:0},class:"preference-tabs"},null,8,["modelValue","tabs"])])),s(k)?(a(),c("div",Ee,[(a(!0),c(O,null,R(s(G),(t,$)=>(a(),c("div",{key:t,class:"tw-flex tw-gap-1 tw-items-center tw-cursor-pointer",onClick:oe=>r.value=t},[(a(),V(u,{key:`wallet-settings-convert-${$}-${t}`,"model-value":s(r)===t,type:s(q).radio},null,8,["model-value","type"])),n("span",Fe,l(t),1),i(h,{src:("getCurrencyIconUrl"in e?e.getCurrencyIconUrl:s(B))(t),class:"multisport-convert-currency-icon",alt:"currency"},null,8,["src"])],8,Me))),128))])):T("",!0)]),footer:m(()=>[i(ee,{"label-key":"save",onClick:o[3]||(o[3]=t=>Q())})]),_:1})}}}),qe=pe(We,[["__scopeId","data-v-aa829f34"]]);export{qe as default};
