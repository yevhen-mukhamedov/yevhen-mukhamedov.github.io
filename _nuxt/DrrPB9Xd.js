import{d as Z,a7 as C,aN as S,m as E,j as R,a as tt,s as et,a0 as T,H as f,aJ as st,o as l,B as p,g as e,C as A,e as o,b as h,t as c,c as L,f as g,i as d,aO as P,T as ot,aP as at,aQ as w,p as nt,A as ct,_ as rt}from"./7PQ9d4dP.js";import{_ as lt}from"./CML6iTNl.js";import{_ as it}from"./UCCBr-NG.js";import"./CXUEa_s4.js";import"./BQWyzQZp.js";import"./D0WEjs_T.js";var v=(t=>(t[t.BONUS_IS_NOT_AVAILABLE=401]="BONUS_IS_NOT_AVAILABLE",t[t.HAVE_ACTIVE_BONUS=402]="HAVE_ACTIVE_BONUS",t[t.BONUS_WAS_USED=403]="BONUS_WAS_USED",t[t.BONUS_WITHDRAWAL_LIMIT=405]="BONUS_WITHDRAWAL_LIMIT",t[t.BONUS_WRONG_PRODUCT=406]="BONUS_WRONG_PRODUCT",t[t.BONUS_WRONG_SPORT_TYPE=407]="BONUS_WRONG_SPORT_TYPE",t[t.BONUS_WRONG_PROMO_CODE=408]="BONUS_WRONG_PROMO_CODE",t[t.BONUS_CAN_NOT_BE_CLOSED=409]="BONUS_CAN_NOT_BE_CLOSED",t[t.BONUS_WITHDRAWAL_ASK=410]="BONUS_WITHDRAWAL_ASK",t[t.BONUS_SPORT_ERROR=411]="BONUS_SPORT_ERROR",t[t.BONUS_SYSTEM=413]="BONUS_SYSTEM",t[t.BONUS_WRONG_BET_TYPE=414]="BONUS_WRONG_BET_TYPE",t[t.BONUS_WAGERING_ORDER_ERROR=415]="BONUS_WAGERING_ORDER_ERROR",t[t.BONUS_NOT_ALLOWED_TO_BE_CLOSED=416]="BONUS_NOT_ALLOWED_TO_BE_CLOSED",t[t.BONUS_NOT_FOUND=417]="BONUS_NOT_FOUND",t[t.BONUS_WAS_NOT_GIVEN=418]="BONUS_WAS_NOT_GIVEN",t))(v||{});const W=""+new URL("gem.BxDKkVpv.svg",import.meta.url).href,_t={class:"shop-modal-body-wrapper"},dt={class:"shop-modal-img-wrapper"},ut={class:"shop-modal-info"},mt={class:"shop-modal-title fg-title-20-thin"},pt=["innerHTML"],ht={key:0,class:"shop-modal-prices"},Nt={class:"shop-modal-prices_text fg-text-12-thin"},Tt={class:"shop-modal-tiers fg-text-12-fat"},ft={class:"tw-text-center tw-text-text-tertiary tw-font-bold"},At={class:"tw-flex tw-items-center tw-text-base tw-font-bold mobileLarge:tw-text-sm"},gt={class:"ng-modal-footer"},wt={class:"tw-flex tw-items-center"},It={class:"tw-flex tw-flex-col"},xt={key:0,class:"shop-modal-price fg-text-12-thin tw-line-through tw-text-text-tertiary"},bt={class:"tw-text-xl tw-font-bold tw-leading-6"},Lt=4,Pt=Z({__name:"ProductModal",props:{id:{}},emits:["close","open-buy-modal","success"],setup(t,{emit:M}){const I=t,i=M,B=C(),y=S(),V=E(),G=R(),{t:N}=tt(),{shiftOpenedModals:U,setShowVerificationModal:k}=G,{fetchProduct:H,submitOrder:Y}=y,{getTiers:O,fetchSettings:F,fetchData:K}=V,{isLoggedIn:$}=et(B),s=T(null),u=T([]),r=T(null),j=f(()=>$.value?N("buy_now"):N("join_now")),J=f(()=>{var a,n;return((a=s.value)==null?void 0:a.is_bonus)||((n=s.value)==null?void 0:n.type)===Lt}),Q=f(()=>{var a;return Number(O.points??0)<Number((a=s.value)==null?void 0:a.price)}),q=async()=>{const a=await H(I.id);s.value=a.product,u.value=a.prices},x=()=>{U(),i("close")},z=()=>{J.value?D():(i("open-buy-modal",s.value),x())},D=async()=>{try{r.value=null,await Y({id:I.id}),F(),K(),x(),i("success")}catch(a){const{error_code:n,msg:_,latestDate:m=null}=a;n===at.BONUS_CANNOT_BE_CLOSED&&m&&i("close"),n===v.BONUS_IS_NOT_AVAILABLE&&(r.value=_),[w.PAYMENT_NEED_PROOF_EMAIL,w.PAYMENT_NEED_PROOF_PHONE,w.NEED_KYC_VERIFICATION].includes(n)&&k(!0)}};return st(()=>{q()}),(a,n)=>{const _=nt,m=lt,b=ct,X=it;return l(),p(ot,{to:"#globalModal"},[e(s)?(l(),p(X,{key:0,"modal-max-width":"512px","without-bg":"","fullscreen-mode":"",class:"shop-modal",onClose:n[0]||(n[0]=Wt=>i("close"))},{content:A(()=>[o("div",_t,[o("div",dt,[h(_,{src:e(s).banner,alt:`shop-modal ${e(s).name}`,class:"img"},null,8,["src","alt"])]),o("div",ut,[o("h3",mt,c(e(s).name),1),o("p",{class:"shop-modal-desc fg-text-14-thin",innerHTML:e(s).description},null,8,pt),e(u).length?(l(),L("div",ht,[o("p",Nt,c(e(N)("play_more")),1),o("div",Tt,[o("p",ft,c(e(u)[0].tier_name),1),o("p",At,[h(_,{src:e(W),alt:"gem",width:"16",height:"16",class:"tw-mr-1"},null,8,["src"]),g(" "+c(e(u)[0].total),1)])])])):d("",!0),e(r)?(l(),p(m,{key:1},{default:A(()=>[g(c(e(r)),1)]),_:1})):d("",!0)]),e(r)?(l(),p(m,{key:0},{default:A(()=>[g(c(e(r)),1)]),_:1})):d("",!0)]),o("div",gt,[o("div",wt,[h(_,{src:e(W),alt:"gem",width:"24",height:"24",class:"tw-mr-1"},null,8,["src"]),o("p",It,[e(s).discount?(l(),L("span",xt,c(e(P)(e(s).price)),1)):d("",!0),o("span",bt,c(e(P)(e(s).total)),1)])]),h(b,{"is-disabled":e(Q),"label-key":e(j),class:"submit-btn",onClick:z},null,8,["is-disabled","label-key"])])]),_:1})):d("",!0)])}}}),Ut=rt(Pt,[["__scopeId","data-v-f249723b"]]);export{Ut as default};