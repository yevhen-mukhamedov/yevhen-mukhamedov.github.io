import{d as H,o as u,B as d,b as T,C as E,e as S,t as g,r as rs,c as V,i as c,T as ds,A as W,_ as ms,aa as Bs,m as ps,a7 as fs,j as bs,X as _s,ah as ws,ax as vs,a as ys,aM as Cs,s as j,a0 as I,H as r,w as Ss,g as o,U as f,a1 as Ms,ay as gs,bb as ks,aU as M,aP as As,ak as Os}from"./7PQ9d4dP.js";import{_ as Ns}from"./UCCBr-NG.js";import{u as hs}from"./D0WEjs_T.js";import{d as Ts}from"./Z4E70_i9.js";const Es={class:"title"},Is={class:"tw-flex tw-flex-col tw-items-center tw-p-4"},Vs={class:"desc-title"},$s={key:0,class:"desc"},Ds={class:"tw-flex tw-justify-between tw-gap-4 tw-p-4 tw-pt-0"},Rs=H({__name:"ConfirmModal",props:{title:{default:"delete_message"},subTitle:{default:"are_you_sure_delete_message"},description:{},acceptText:{default:"delete"},cancelText:{default:"cancel"}},emits:["close","confirm"],setup($,{emit:e}){const b=e;return(a,l)=>{const _=W,k=Ns;return u(),d(ds,{to:"#globalModal"},[T(k,{class:"confirm-modal","is-footer":"",onClose:l[2]||(l[2]=w=>b("close"))},{title:E(()=>[S("h2",Es,g(a.$t(a.title)),1)]),content:E(()=>[rs(a.$slots,"content",{},()=>[S("div",Is,[S("p",Vs,g(a.$t(a.subTitle)),1),a.description?(u(),V("p",$s,g(a.$t(a.description)),1)):c("",!0)])],!0)]),footer:E(()=>[S("div",Ds,[T(_,{"color-type":"secondary","label-key":a.cancelText,class:"tw-w-full",onClick:l[0]||(l[0]=w=>b("close"))},null,8,["label-key"]),T(_,{"label-key":a.acceptText,class:"tw-w-full",onClick:l[1]||(l[1]=w=>b("confirm"))},null,8,["label-key"])])]),_:3})])}}}),Us=ms(Rs,[["__scopeId","data-v-a1ead369"]]),Ls={key:6,class:"tw-text-sm tw-text-text-error-primary tw-mt-2"},Ws=H({__name:"BonusActions",props:{bonus:{},showBonusInfo:{type:Boolean,default:!0},isButtonsSmall:{type:Boolean,default:!1},error:{default:null}},setup($){const e=$,b=Bs(),a=ps(),l=fs(),_=bs(),k=_s(),w=ws(),n=vs(),{t:m}=ys(),{$emitter:v}=Cs(),{actualizeUserData:D}=a,{showActivateModal:z}=n,{shiftOpenedModals:F,closeAllModals:X}=_,{isLoggedIn:R}=j(l),{isMultiBalance:q,isHideSingInBtn:G,isHideRegistrationBtn:J}=j(_),A=I(!1),O=I(null),B=I(null),K=r(()=>{var s;return((s=e.bonus)==null?void 0:s.allow_close)&&l.isLoggedIn}),N=r(()=>{var s;return((s=e.bonus)==null?void 0:s.activated)===!0}),Q=r(()=>{var s,t;return((t=(s=e.bonus)==null?void 0:s.actions)==null?void 0:t.includes("deposit"))&&l.isLoggedIn&&N.value}),Y=r(()=>{var s,t;return((t=(s=e.bonus)==null?void 0:s.actions)==null?void 0:t.includes("make_spins"))&&N.value}),y=r(()=>{var p,C,x,P;const s=!((p=e.bonus)!=null&&p.activated),t=Ts().isAfter((x=(C=e.bonus)==null?void 0:C.extra)==null?void 0:x.expiration_after),i=((P=e.bonus)==null?void 0:P.status)===4;return s&&(t||i)}),Z=r(()=>{var s;return(s=e.bonus)==null?void 0:s.not_for_activation}),ss=r(()=>!y.value&&!Z.value&&!N.value&&R.value),es=r(()=>!R.value&&!y.value&&!(G.value&&J.value)),ts=()=>{q.value||e.bonus.actions.includes(gs.PROMO_CODE)?(os(),z(e.bonus,ks.BONUSES)):ns()},os=()=>{v.on(M.BONUS_ACTIVATED,L),v.on(M.CLOSE_BONUS_MODAL,U)},U=()=>{v.off(M.BONUS_ACTIVATED),v.off(M.CLOSE_BONUS_MODAL)},L=async()=>{await n.getBonusById(e.bonus.id),n.setActiveBonus(),n.setVisibleBonusModal(!1),await D(),U(),X()},ns=async()=>{try{B.value=null,await n.postActivateBonus(e.bonus.id,void 0),L()}catch(s){const t=s;B.value=(t==null?void 0:t.msg)||t.message,console.log("activateBonus BonusActions",s)}},as=async()=>{try{B.value=null,await n.postCancelBonus(),await n.getBonusById(e.bonus.id),n.setActiveBonus(),h(),n.setVisibleBonusModal(!1),await D()}catch(s){const{msg:t,message:i,error_code:p}=s;p===As.BONUS_CANNOT_BE_CLOSED&&h(),B.value=t||i,console.log("cancelBonus BonusActions",s)}},ls=()=>{var s;n.setVisibleBonusModal(!1),n.setCurrentBonusId(null),b.push(k({name:"games-id",params:{id:(s=e.bonus)==null?void 0:s.extra.game_id}}))},us=()=>{n.setVisibleBonusModal(!1),n.setCurrentBonusId(null),w.setWalletModalTab(Os.deposit),w.setWalletModal(!0)},is=()=>{n.setVisibleBonusModal(!1),n.setCurrentBonusId(null);const{nameModal:s}=hs();s&&l.setAuthModal(s)},cs=s=>{n.setCurrentBonusId(s),n.setVisibleBonusModal(!0)},h=()=>{A.value=!1,F()};return Ss(()=>e.error,()=>{O.value=e.error}),(s,t)=>{const i=W,p=Us;return u(),V(Ms,null,[o(Q)&&!o(y)?(u(),d(i,{key:0,class:f({"tw-w-full":!s.isButtonsSmall}),label:o(m)("bonus_deposit"),onClick:us},null,8,["class","label"])):c("",!0),o(Y)&&!o(y)?(u(),d(i,{key:1,class:f({"tw-w-full":!s.isButtonsSmall}),label:o(m)("bonus_make_spins"),onClick:ls},null,8,["class","label"])):c("",!0),s.showBonusInfo?(u(),d(i,{key:2,class:f({"tw-w-full tw-mt-2":!s.isButtonsSmall}),label:o(m)("bonus_info"),"color-type":"outline",onClick:t[0]||(t[0]=C=>cs(e.bonus.id))},null,8,["class","label"])):c("",!0),o(K)?(u(),d(i,{key:3,class:f({"tw-w-full tw-mt-2":!s.isButtonsSmall}),label:o(m)("bonus_close"),"color-type":"secondary",onClick:t[1]||(t[1]=C=>A.value=!0)},null,8,["class","label"])):c("",!0),o(ss)?(u(),d(i,{key:4,class:f({"tw-w-full":!s.isButtonsSmall}),label:o(m)("bonus_activate"),onClick:ts},null,8,["class","label"])):c("",!0),o(es)?(u(),d(i,{key:5,class:f({"tw-w-full":!s.isButtonsSmall}),label:o(m)("bonus_registration"),onClick:is},null,8,["class","label"])):c("",!0),o(O)||o(B)?(u(),V("span",Ls,g(o(O)||o(m)(o(B))),1)):c("",!0),o(A)?(u(),d(p,{key:7,"sub-title":"are_you_sure",title:"bonus_close",onClose:h,onConfirm:as})):c("",!0)],64)}}});export{Ws as _,Us as a};