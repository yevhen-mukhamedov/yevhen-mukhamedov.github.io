import{_ as re,a as ie}from"./BdUp3nNt.js";import{_ as ce}from"./B92FZ1g3.js";import{_ as me}from"./BK14r1T1.js";import{_ as de}from"./C87lQMtF.js";import{a6 as _e,o as l,c as w,d as fe,V as ve,ab as pe,bc as be,_ as ge,a1 as ye,i as u,j as s,ad as Ne,X as e,t as v,u as p,a4 as E,f as r,x as i,K as b,b as m,T as $e,aa as ke,au as he}from"./JoFQSik9.js";import{_ as xe}from"./sQNTZNBq.js";import{_ as Ce}from"./Bcnv4IFf.js";import{f as we}from"./R1J_LkVd.js";import"./BKAhWZth.js";import"./BM2BYuY2.js";import"./D8aEg3BZ.js";import"./BZw8aVXh.js";import"./Cf_ozb67.js";import"./56Y_7FHu.js";const Ve={},Pe={class:"successfull-msg"};function Se(F,V){return l(),w("div",Pe,[fe(F.$slots,"default",{},void 0,!0)])}const Ae=_e(Ve,[["render",Se],["__scopeId","data-v-fd2fcf5f"]]),Ie={class:"payment-p2p"},Te={key:0,class:"agent-child"},Ee={key:1,class:"form-conatiner"},Xe=ve({__name:"P2P",setup(F){const V=pe(),L=be(),{$2fa:M}=ke(),{t:q}=ge(),{setP2PUserName:O}=V,{sendP2POrder:W}=L,{public:{PLATFORM_ID:H}}=he(),{isAgentChild:j,getUser:z,getPaymentP2P:U,getP2PUserName:K,getCurrencySymbol:B,getWithdrawable:P}=ye(V),N=u(!0),o=u(""),d=u(""),g=u(""),y=u(""),n=u(""),$=u(!1),h=u(!0),S=u(!1),X=s(()=>M.auth),G=s(()=>M.control),_=s({get:()=>K.value,set:a=>O(a)}),x=s(()=>Number(U.value.max_limit)),f=s(()=>Number(U.value.min_limit)),J=s(()=>["6ed534e6-fe06-428f-b15f-e769cbbfe1c4","45cab422-ae18-45d9-acde-e0ddead0091a"].includes(H)),Q=s(()=>`${q("amount")} (${B.value} ${A(String(f.value))} - ${B.value} ${A(String(x.value))})`),Y=s(()=>N.value||f.value>P.value),Z=s(()=>!G.value.value&&X.value.value),ee=s(()=>Ne().typeError("").required().min(f.value).max(x.value)),ae=()=>{$.value&&n.value.length===6&&te()},te=async()=>{N.value=!0;try{const a={address:String(_.value),amount:o.value,code_2fa:n.value};await W(a),N.value=!1,$.value=!1,n.value="",S.value=!0}catch(a){const{message:t,error_code:I,msg:C}=a;t==="common.user_not_found"?g.value="user_not_found":t==="payment.withdrawal_wagering"?d.value="available_withdrawal_exceeded":t==="payment.not_enough_balance_operation"?d.value="current_amountexceeds":I===216?($.value=!0,n.value=""):(y.value=C,n.value="")}},R=a=>{y.value="",S.value=!1,a==="player"&&(/[^a-z\d_@.-]/i.test(_.value)||_.value===z.value?g.value="incorrect_emailuser":g.value=""),a==="amount"&&(Number(o.value)===0||!o.value.length||Number(o.value)>x.value||Number(o.value)<f.value?d.value="amountMaxError":d.value=""),!g.value.length&&_.value.length&&!d.value.length&&o.value?N.value=!1:N.value=!0},le=()=>{n.value.length<6?h.value=!0:h.value=!1},A=a=>J.value?we(a):a,D=()=>{$.value=!1,n.value="",h.value=!0};return(a,t)=>{const I=re,C=ce,k=me,oe=de,ne=ie,se=Ae,T=xe,ue=Ce;return l(),w("div",Ie,[e(j)?(l(),w("div",Te,v(a.$t("agent_child")),1)):(l(),w("div",Ee,[p(I),p(C,{modelValue:e(_),"onUpdate:modelValue":t[0]||(t[0]=c=>E(_)?_.value=c:null),"placeholder-text":a.$t("username_or_email"),"is-required":"",onInput:t[1]||(t[1]=c=>R("player"))},null,8,["modelValue","placeholder-text"]),e(g)?(l(),r(k,{key:0},{default:i(()=>[b(v(a.$t(e(g))),1)]),_:1})):m("",!0),p(oe,{modelValue:e(o),"onUpdate:modelValue":t[2]||(t[2]=c=>E(o)?o.value=c:null),"placeholder-key":e(Q),"is-disabled":e(f)>e(P),"validation-rules":e(ee),"is-max-btn":"","is-required":"",onInput:t[3]||(t[3]=c=>R("amount")),onClickMaxBtn:t[4]||(t[4]=c=>o.value=String(e(x)))},null,8,["modelValue","placeholder-key","is-disabled","validation-rules"]),e(d)?(l(),r(k,{key:1},{default:i(()=>[b(v(a.$t(e(d))),1)]),_:1})):m("",!0),e(f)>e(P)?(l(),r(k,{key:2},{default:i(()=>[b(v(a.$t("amountMinErrorFull",{min:A(String(e(f)))})),1)]),_:1})):m("",!0),e(y)?(l(),r(k,{key:3},{default:i(()=>[b(v(e(y)),1)]),_:1})):m("",!0),e(Z)?(l(),r(ne,{key:4})):m("",!0),e(S)?(l(),r(se,{key:5},{default:i(()=>[b(v(a.$t("transfer_to_player_completed_successfully")),1)]),_:1})):m("",!0),p(T,{class:"tw-w-full","label-key":"send","is-disabled":e(Y)},null,8,["is-disabled"])])),(l(),r($e,{to:"#globalModal"},[e($)?(l(),r(ue,{key:0,class:"need-two-fa-modal","is-footer":"",onClose:D},{title:i(()=>[b(" Need 2fa code ")]),content:i(()=>[p(C,{modelValue:e(n),"onUpdate:modelValue":t[5]||(t[5]=c=>E(n)?n.value=c:null),"is-required":"","placeholder-text":a.$t("code"),onInput:le},null,8,["modelValue","placeholder-text"]),e(y)?(l(),r(k,{key:0},{default:i(()=>[b(v(e(y)),1)]),_:1})):m("",!0)]),footer:i(()=>[p(T,{"color-type":"secondary","label-key":"confirm","is-disabled":e(h),onClick:ae},null,8,["is-disabled"]),p(T,{"color-type":"secondary","label-key":"cancel",onClick:D})]),_:1})):m("",!0)]))])}}});export{Xe as default};