import{a as X,F as Y}from"./BQWyzQZp.js";import{_ as Z}from"./CML6iTNl.js";import{d as R,o as s,c as w,a1 as ee,aE as te,B as c,C as D,b as O,ah as oe,j as se,m as re,I as ne,s as y,a0 as d,H as v,g as a,i as l,r as ae,f as ie,t as C,O as le,A as ce,aF as ue}from"./7PQ9d4dP.js";import{_ as de}from"./Qqx45fX5.js";import{_ as pe}from"./Dty3woGA.js";import{_ as me}from"./DqC-nx6a.js";import{u as fe}from"./UCCBr-NG.js";const _e={class:"tw-flex tw-flex-col tw-gap-2"},ye=R({__name:"DepositErrors",props:{errors:{}},setup(F){return(g,A)=>{const S=X,p=Z;return s(),w("div",_e,[(s(!0),w(ee,null,te(g.errors,(i,b)=>(s(),c(p,{key:b},{default:D(()=>[O(S,{"error-code":i.code,"error-message":i.msg},null,8,["error-code","error-message"])]),_:2},1024))),128))])}}}),ve={key:4,class:"tw-flex tw-justify-center"},De=R({__name:"DepositFrame",props:{provider:{},filedValues:{},isFormValid:{type:Boolean},isSubmitted:{type:Boolean,default:!0},isNeedNote:{type:Boolean,default:!0},hideDepositButton:{type:Boolean,default:!1},onResponse:{},onBeforeSubmit:{}},emits:["onResponse"],setup(F,{emit:g}){const A=g,S=oe(),p=se(),i=re(),b=ne(),{isMultiBalance:P,getAnalyticsEvents:j}=y(p),{getCurrency:M}=y(i),{actualizeUserData:U}=i,{setTransacitonsModalTab:W}=b,{googleAnalytic:N}=fe(),t=F,u=d(null),{scrollToElement:q}=ue(),H=v(()=>t.provider.settings?t.provider.settings.is_deposit_note:!1),I=v(()=>{var e;return P.value&&((e=t.provider)==null?void 0:e.only)}),z=v(()=>!I.value&&(H.value||t.provider.code==="CoinsPaid")),L=()=>{var e;!N.value||!((e=j.value)!=null&&e.deposits_front)||N.value.emitEvent("deposit_button")},{is2FA:x}=y(p),{get2faControl:E}=y(i),G=v(()=>t.provider.id&&!E.value&&x.value),m=d(""),T=d(!1),f=d(!1),J=async()=>{if(x.value&&E.value&&!f.value){f.value=!0;return}u.value=null;let e={};if(t.onBeforeSubmit&&(e=await t.onBeforeSubmit(),e.error))return u.value=[{msg:e.error}],!1;try{const r={return_url:window.location.origin};let o={type:String(t.provider.id),currency:M.value,...r};e.isWaitingResponse&&e.extraData&&(o={...o,...e.extraData},f.value&&(o.code_2fa=m.value));const n={...o,...t.filedValues},_=new FormData;for(const[B,k]of Object.entries(n))_.append(B,k);const{data:h}=await S.sendDepositOrder(_);K(h,n)}catch(r){const{msg:o,error_code:n}=r;q("#deposit-form"),u.value=[{code:n,msg:o}]}},V=d(!0),K=async(e,r)=>{const o=async()=>(await U(),W("payment"),!1),n=()=>(A("onResponse",e,r),V.value=!(e.action==="stay"&&e.address),T.value=!0,!1);if(e.action_key==="show_payment_history")return await o();if(e.no_action||e.action==="stay")return n();if(e.redirect_url==="no_redirect")return!1;window.location.replace(e.redirect_url)};return(e,r)=>{const o=ye,n=de,_=pe,h=me,B=ce,k=Y;return s(),w("div",null,[O(k,{id:"deposit-form",class:"tw-flex tw-flex-col tw-gap-4",onSubmit:J},{default:D(()=>{var $;return[($=a(u))!=null&&$.length?(s(),c(o,{key:0,id:"deposit-errors",errors:a(u)},null,8,["errors"])):l("",!0),ae(e.$slots,"default"),a(z)&&e.isNeedNote?(s(),c(n,{key:1,"title-key":"deposit_noteTitle"},{text:D(()=>[ie(C(e.$t("deposit_noteText"))+" "+C(e.$t("deposit_noteText2")),1)]),_:1})):l("",!0),a(G)?(s(),c(_,{key:2})):l("",!0),a(f)&&!a(T)?(s(),c(h,{key:3,modelValue:a(m),"onUpdate:modelValue":r[0]||(r[0]=Q=>le(m)?m.value=Q:null),"input-name":"code_2fa","placeholder-text":e.$t("code_2fa"),"is-required":!0,"is-validated-separately":!0},null,8,["modelValue","placeholder-text"])):l("",!0),e.isSubmitted?(s(),w("div",ve,[a(V)&&!e.hideDepositButton?(s(),c(B,{key:0,type:"submit","label-key":"deposit","is-disabled":!t.isFormValid,class:"tw-w-full",onClick:L},null,8,["is-disabled"])):l("",!0)])):l("",!0)]}),_:3})])}}});export{De as _};