import{_ as W}from"./sQNTZNBq.js";import{V as j,o as u,f as r,u as g,x as E,a as M,t as A,c as h,b as c,T as us,a5 as is,a6 as cs,$ as rs,ab as ds,a2 as ms,a0 as ps,W as _s,bc as bs,ak as fs,_ as Bs,a1 as P,i as I,j as m,p as ws,X as t,n as b,F as vs,aF as ys,aG as Cs,a9 as k,bl as Ss,aa as gs,bm as Ms}from"./JoFQSik9.js";import{_ as ks}from"./Bcnv4IFf.js";import{d as As}from"./ElL4sWVy.js";const Os={class:"title"},Ns={class:"tw-flex tw-flex-col tw-items-center tw-p-4"},Ts={class:"desc-title"},Es={key:0,class:"desc"},Is={class:"tw-flex tw-justify-between tw-gap-4 tw-p-4 tw-pt-0"},hs=j({__name:"ConfirmModal",props:{title:{default:"delete_message"},subTitle:{default:"are_you_sure_delete_message"},description:{},acceptText:{default:"delete"},cancelText:{default:"cancel"}},emits:["close","confirm"],setup(V,{emit:o}){const f=o;return(l,a)=>{const B=is,w=W,v=ks;return u(),r(us,{to:"#globalModal"},[g(v,{class:"confirm-modal","is-footer":"",onClose:a[2]||(a[2]=e=>f("close"))},{title:E(()=>[M("h2",Os,A(l.$t(l.title)),1)]),content:E(()=>[M("div",Ns,[g(B,{name:"alert",size:76,class:"tw-text-text-brand icon"}),M("p",Ts,A(l.$t(l.subTitle)),1),l.description?(u(),h("p",Es,A(l.$t(l.description)),1)):c("",!0)])]),footer:E(()=>[M("div",Is,[g(w,{"color-type":"secondary","label-key":l.cancelText,class:"tw-w-full",onClick:a[0]||(a[0]=e=>f("close"))},null,8,["label-key"]),g(w,{"label-key":l.acceptText,class:"tw-w-full",onClick:a[1]||(a[1]=e=>f("confirm"))},null,8,["label-key"])])]),_:1})])}}}),Vs=cs(hs,[["__scopeId","data-v-ea9067df"]]),$s={key:6,class:"tw-text-sm tw-text-text-error-primary tw-mt-2"},Us=j({__name:"BonusActions",props:{bonus:{},showBonusInfo:{type:Boolean,default:!0},isButtonsSmall:{type:Boolean,default:!1},error:{default:null}},setup(V){const o=V,f=rs(),l=ds(),a=ms(),B=ps(),w=_s(),v=bs(),e=fs(),{t:d}=Bs(),{$emitter:y}=gs(),{actualizeUserData:$}=l,{showActivateModal:z}=e,{shiftOpenedModals:G,closeAllModals:X}=B,{isLoggedIn:D}=P(a),{isMultiBalance:q}=P(B),O=I(!1),N=I(null),p=I(null),H=m(()=>{var s;return((s=o.bonus)==null?void 0:s.allow_close)&&a.isLoggedIn}),x=m(()=>{var s;return((s=o.bonus)==null?void 0:s.activated)===!0}),J=m(()=>{var s,n;return((n=(s=o.bonus)==null?void 0:s.actions)==null?void 0:n.includes("deposit"))&&a.isLoggedIn}),K=m(()=>{var s,n;return((n=(s=o.bonus)==null?void 0:s.actions)==null?void 0:n.includes("make_spins"))&&x.value}),C=m(()=>{var _,S,U,F;const s=!((_=o.bonus)!=null&&_.activated),n=As().isAfter((U=(S=o.bonus)==null?void 0:S.extra)==null?void 0:U.expiration_after),i=((F=o.bonus)==null?void 0:F.status)===4;return s&&(n||i)}),Q=m(()=>{var s;return(s=o.bonus)==null?void 0:s.not_for_activation}),Y=m(()=>!C.value&&!Q.value&&!x.value&&D.value),Z=()=>{q.value||o.bonus.actions.includes(ys.PROMO_CODE)?(ss(),z(o.bonus,Cs.BONUSES)):es()},ss=()=>{y.on(k.BONUS_ACTIVATED,R),y.on(k.CLOSE_BONUS_MODAL,L)},L=()=>{y.off(k.BONUS_ACTIVATED),y.off(k.CLOSE_BONUS_MODAL)},R=async()=>{await e.getBonusById(o.bonus.id),e.setActiveBonus(),e.setVisibleBonusModal(!1),await $(),L(),X()},es=async()=>{try{p.value=null,await e.postActivateBonus(o.bonus.id,void 0),R()}catch(s){const n=s;p.value=(n==null?void 0:n.msg)||n.message,console.log("activateBonus BonusActions",s)}},ts=async()=>{try{p.value=null,await e.postCancelBonus(),await e.getBonusById(o.bonus.id),e.setActiveBonus(),T(),e.setVisibleBonusModal(!1),await $()}catch(s){const{msg:n,message:i,error_code:_}=s;_===Ms.BONUS_CANNOT_BE_CLOSED&&T(),p.value=n||i,console.log("cancelBonus BonusActions",s)}},os=()=>{var s;e.setVisibleBonusModal(!1),e.setCurrentBonusId(null),f.push(w({name:"games-id",params:{id:(s=o.bonus)==null?void 0:s.extra.game_id}}))},ns=()=>{e.setVisibleBonusModal(!1),e.setCurrentBonusId(null),v.setWalletModalTab(Ss.deposit),v.setWalletModal(!0)},ls=()=>{e.setVisibleBonusModal(!1),e.setCurrentBonusId(null),a.setAuthModal("signIn")},as=s=>{e.setCurrentBonusId(s),e.setVisibleBonusModal(!0)},T=()=>{O.value=!1,G()};return ws(()=>o.error,()=>{N.value=o.error}),(s,n)=>{const i=W,_=Vs;return u(),h(vs,null,[t(J)&&!t(C)?(u(),r(i,{key:0,class:b({"tw-w-full":!s.isButtonsSmall}),label:t(d)("bonus_deposit"),onClick:ns},null,8,["class","label"])):c("",!0),t(K)&&!t(C)?(u(),r(i,{key:1,class:b({"tw-w-full":!s.isButtonsSmall}),label:t(d)("bonus_make_spins"),onClick:os},null,8,["class","label"])):c("",!0),s.showBonusInfo?(u(),r(i,{key:2,class:b({"tw-w-full tw-mt-2":!s.isButtonsSmall}),label:t(d)("bonus_info"),"color-type":"outline",onClick:n[0]||(n[0]=S=>as(o.bonus.id))},null,8,["class","label"])):c("",!0),t(H)?(u(),r(i,{key:3,class:b({"tw-w-full tw-mt-2":!s.isButtonsSmall}),label:t(d)("bonus_close"),"color-type":"secondary",onClick:n[1]||(n[1]=S=>O.value=!0)},null,8,["class","label"])):c("",!0),t(Y)?(u(),r(i,{key:4,class:b({"tw-w-full":!s.isButtonsSmall}),label:t(d)("bonus_activate"),onClick:Z},null,8,["class","label"])):c("",!0),!t(D)&&!t(C)?(u(),r(i,{key:5,class:b({"tw-w-full":!s.isButtonsSmall}),label:t(d)("bonus_registration"),onClick:ls},null,8,["class","label"])):c("",!0),t(N)||t(p)?(u(),h("span",$s,A(t(N)||t(d)(t(p))),1)):c("",!0),t(O)?(u(),r(_,{key:7,"sub-title":"are_you_sure",title:"bonus_close",onClose:T,onConfirm:ts})):c("",!0)],64)}}});export{Us as _};
