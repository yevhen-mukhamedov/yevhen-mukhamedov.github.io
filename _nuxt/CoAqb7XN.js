import{_ as Ue}from"./BKAhWZth.js";import{V as J,o as i,c as w,a,X as e,b7 as Qe,t as d,K as Y,n as xe,b as T,a6 as Te,u as C,ah as et,ai as tt,ab as ge,a0 as Ne,bc as Ee,i as p,_ as Pe,a1 as re,j as B,p as pe,k as Oe,bv as Be,f as k,x as $,F as ye,a4 as Ae,z as me,g as ve,r as ot,aj as De,bf as Me,bL as Re,a5 as Fe}from"./JoFQSik9.js";import{_ as qe}from"./C87lQMtF.js";import{_ as je}from"./B92FZ1g3.js";import{g as A}from"./BZw8aVXh.js";import{_ as ze}from"./DXxiuGCq.js";import{_ as Ge}from"./BK14r1T1.js";import{_ as Le}from"./sQNTZNBq.js";import{_ as Xe}from"./Cf_ozb67.js";import"./BM2BYuY2.js";import"./D8aEg3BZ.js";const at={class:"provider-card-banner"},nt=["src"],st={class:"provider-card-content"},rt={class:"provider-card-label"},lt={class:"provider-card-amount"},ct=["src"],Ve=16,ut=J({__name:"CryptoProviderCard",props:{name:{},getAmount:{},isSelected:{type:Boolean},providerImage:{},currency:{}},emits:["on-button-provider-click"],setup(D,{emit:_}){const R=D,V=_,F=()=>{V("on-button-provider-click",R.name)};return(v,S)=>(i(),w("div",{class:xe(["provider-card-container",{selected:v.isSelected}]),onClick:F},[a("div",at,[a("img",{src:v.providerImage??e(Qe),alt:"provider-card-banner"},null,8,nt)]),a("div",st,[a("span",rt,d(v.$t("changelly_you_get")),1),a("div",lt,[Y(d(v.getAmount)+" ",1),a("img",{alt:"currency",width:Ve,height:Ve,class:"provider-card-currency",src:("getCurrencyIconUrl"in v?v.getCurrencyIconUrl:e(A))(v.currency)},null,8,ct)])])],2))}}),it={class:"payment-details-item"},dt={class:"payment-details-label"},_t={class:"payment-details-value"},pt=["src"],Se=16,yt=J({__name:"CryptoPaymentDetailsItem",props:{text:{},info:{},icon:{}},setup(D){return(_,R)=>(i(),w("div",it,[a("div",dt,d(_.text),1),a("div",_t,[Y(d(_.info)+" ",1),_.icon?(i(),w("img",{key:0,src:_.icon,width:Se,height:Se,alt:"currencyIcon",class:"payment-details-icon"},null,8,pt)):T("",!0)])]))}}),mt=Te(yt,[["__scopeId","data-v-4798e57c"]]),Ye=D=>(et("data-v-3fa69c61"),D=D(),tt(),D),vt={class:"payment-details-container"},gt={class:"payment-details-title"},ft=Ye(()=>a("div",{class:"ng-divider"},null,-1)),ht=Ye(()=>a("div",{class:"ng-divider"},null,-1)),Ct=J({__name:"CryptoPaymentDetails",props:{fee:{},provider:{},rate:{},total:{},receive:{},payIconImage:{},getIconImage:{}},setup(D){return(_,R)=>{const V=mt;return i(),w("div",vt,[a("div",gt,d(_.$t("changelly_paymentDetails")),1),ft,C(V,{text:_.$t("changelly_provider"),info:_.provider},null,8,["text","info"]),C(V,{text:_.$t("changelly_rate"),info:_.rate,icon:_.payIconImage},null,8,["text","info","icon"]),C(V,{text:_.$t("changelly_fee"),info:_.fee,icon:_.payIconImage},null,8,["text","info","icon"]),ht,C(V,{text:_.$t("changelly_total"),info:_.total,icon:_.payIconImage},null,8,["text","info","icon"]),C(V,{text:_.$t("changelly_receive"),info:_.receive,icon:_.getIconImage},null,8,["text","info","icon"])])}}}),$t=Te(Ct,[["__scopeId","data-v-3fa69c61"]]),bt={class:"payment-crypto"},kt={key:0,class:"agent-child"},It={class:"pay-container"},wt={class:"pay-label"},Vt={class:"pay-control"},St={class:"selected-option"},Ut={class:"option-container"},Tt=["src"],Nt={class:"option-value"},Et={class:"option-label"},Pt={class:"option-balance"},Ot={class:"option-amount"},Bt={class:"simple-option"},At=["src"],Dt={class:"get-container"},Mt={class:"get-label"},Rt={class:"get-control"},Ft={class:"selected-option"},qt={class:"option-container"},jt=["src"],zt={class:"option-value"},Gt={class:"option-label"},Lt={class:"option-balance"},Xt={class:"option-amount"},Yt=["src"],Zt={class:"selected-option"},Kt={class:"option-container"},Wt={class:"option-value"},Ht={class:"option-label"},Jt={class:"option-balance"},Qt={class:"option-amount"},xt={class:"copy-address-btn"},eo={class:"copy-memo-btn"},to={key:3,class:"providers-container"},oo={key:0,class:"providers-title"},ao=J({__name:"BuyCryptoChangelly",setup(D){const _={memoTag:!1,address:!1},R={pay_currency:"USD",amount:void 0,get_currency:"",address:void 0,memo_tag:"",network:"",provider:void 0},V=ge(),F=Ne(),v=Ee(),S=p(!1),y=p(null),q=p(0),Q=p([]),x=p([]),ee=p({}),U=p([]),E=p(!1),m=p(!1),j=p(void 0),z=p(!1),G=p(!1),I=p(_),t=p(R),M=p(""),{fetchCryptoPairInfo:le,fetchCryptoCurrencies:te,createCryptoOrder:Z,fetchCryptoOffers:s}=v,{t:K}=Pe(),{isAgentChild:oe,getPaymentBuyCrypto:ae}=re(V),{getAllCurrencies:ie}=re(F),de=B(()=>{var o;return(o=ie.value.find(n=>n.code===t.value.pay_currency))==null?void 0:o.symbol}),ne=B(()=>{var o;return(o=ae.value)!=null&&o.show_memo_tag?t.value.get_currency==="BNB"&&t.value.network==="BEP2"||t.value.get_currency==="XLM"||t.value.get_currency==="XRP"||t.value.get_currency==="EOS":!1}),ce=B(()=>{var o;return(o=ae.value)==null?void 0:o.extra.text}),se=B(()=>ee.value[t.value.get_currency]),N=B(()=>U.value.find(o=>o.code===t.value.provider)),W=B(()=>t.value.network?t.value.get_currency+"."+t.value.network:t.value.get_currency),_e=o=>{var n;t.value.provider=o,q.value=(n=U.value.find(f=>f.code===o))==null?void 0:n.get_amount},ue=(o,n)=>{r(o),De(n)},c=async()=>{var o,n,f,O;try{const u={pay_currency:t.value.pay_currency,get_currency:W.value},{msg:X,data:h}=await le(u);j.value=Math.ceil(h.min_amount),t.value.address=((o=h==null?void 0:h.data)==null?void 0:o.address)||null,t.value.memo_tag=((n=h==null?void 0:h.data)==null?void 0:n.memo_tag)||null,G.value=!!((f=h==null?void 0:h.data)!=null&&f.memo_tag),z.value=!!((O=h==null?void 0:h.data)!=null&&O.address),y.value=X,M.value=X}catch(u){const{error_code:X,msg:h}=u;X===738&&(t.value.address=null),X===740&&(t.value.memo_tag=null,z.value=!0,G.value=!0),U.value=[],t.value.provider="",t.value.address=null,t.value.memo_tag="",z.value=!1,G.value=!1,y.value=h,M.value=h}},r=o=>{I.value[o]=!I.value[o],setTimeout(()=>{I.value[o]=!I.value[o]},1e3)},b=async()=>{try{const{data:o}=await te();Q.value=Object.freeze(o.get_currencies),ee.value=Object.freeze(o.networks),x.value=Object.freeze(o.pay_currencies);const[n]=Q.value;t.value.get_currency=n;const[f]=x.value;t.value.pay_currency=f}catch(o){const{message:n}=o;y.value=n}},P=async()=>{if(!(!t.value.amount||y.value)){E.value=!0;try{const o={amount:t.value.amount,get_currency:W.value,pay_currency:t.value.pay_currency},{data:n,msg:f}=await s(o),[O]=n;E.value=!1,U.value=n,q.value=O.get_amount,y.value=f}catch(o){const{msg:n}=o;U.value=[],t.value.memo_tag="",t.value.provider="",y.value=n}}},L=Me(async()=>{E.value=!0,S.value=!0;try{const o={get_currency:W.value,amount:t.value.amount,pay_currency:t.value.pay_currency},{data:n,msg:f}=await s(o);S.value=!1;const[O]=n;E.value=!1,U.value=n,q.value=O.get_amount,y.value=f}catch(o){S.value=!1;const{msg:n}=o;U.value=[],t.value.provider="",y.value=n}},500),g=async()=>{if(!H())return!1;m.value=!0,ne.value||(t.value.memo_tag=void 0);try{const o={address:t.value.address,memo_tag:t.value.memo_tag,amount:t.value.amount,get_currency:W.value,pay_currency:t.value.pay_currency,provider:t.value.provider},{data:n}=await Z(o);m.value=!1,y.value=void 0,n.is_blank&&Re()!=="safari"?window.open(n.redirect_url):window.location.replace(n.redirect_url),m.value=!1,y.value=""}catch(o){m.value=!1;const{data:{message:n},msg:f}=o;t.value.provider="",t.value.address="",t.value.memo_tag="",U.value=[],y.value=n??f}},H=()=>t.value.amount?t.value.amount<j.value?(y.value=K("buy_crypto_min_amount")+`: ${j.value}${de.value}`,!1):t.value.get_currency?t.value.pay_currency?t.value.address?(y.value=void 0,!0):(y.value=K("buy_crypto_address"),!1):(y.value=K("buy_crypto_crypto_currency"),!1):(y.value=K("buy_crypto_fiat_currency"),!1):(y.value=K("buy_crypto_wrong_amount"),!1);return pe(()=>se.value,o=>{if(o!=null&&o.length){const[n]=o;t.value.network=n}else t.value.network=""}),Oe(async()=>{oe.value||(S.value=!0,await b(),await c(),S.value=!1,pe(()=>[t.value.pay_currency,t.value.get_currency,t.value.network],async()=>{S.value=!0,await c(),await P(),S.value=!1}))}),(o,n)=>{const f=Ue,O=qe,u=Fe,X=je,h=ut,Ze=ze,Ke=$t,We=Ge,He=Le,Je=Xe,fe=Be("tooltip");return i(),k(Je,{loading:e(S)},{default:$(()=>{var he,Ce,$e,be,ke,Ie,we;return[a("div",bt,[e(oe)?(i(),w("div",kt,d(o.$t("agent_child")),1)):(i(),w(ye,{key:1},[a("div",It,[a("span",wt,d(o.$t("buy_crypto_pay_with")),1),a("div",Vt,[C(f,{modelValue:e(t).pay_currency,"onUpdate:modelValue":n[0]||(n[0]=l=>e(t).pay_currency=l),class:"balance-select pay-select","default-option":e(t).pay_currency,"item-list":e(x)},{"selected-option":$(({props:l})=>[a("div",St,[a("div",Ut,[a("img",{src:("getCurrencyIconUrl"in o?o.getCurrencyIconUrl:e(A))(l),alt:"currency",class:"option-currency-icon"},null,8,Tt),a("div",Nt,[a("span",Et,d(o.$t("currency")),1),a("div",Pt,[a("span",Ot,d(l),1)])])])])]),option:$(({props:l})=>[a("div",Bt,[a("img",{src:("getCurrencyIconUrl"in o?o.getCurrencyIconUrl:e(A))(l),alt:"currency",width:16,height:16,class:"option-currency-icon"},null,8,At),Y(" "+d(l),1)])]),_:1},8,["modelValue","default-option","item-list"]),C(O,{modelValue:e(t).amount,"onUpdate:modelValue":n[1]||(n[1]=l=>e(t).amount=l),class:"pay-amount","placeholder-key":"amount","is-required":"","is-validated-separately":"","suffix-key":e(t).pay_currency,onInput:e(L)},null,8,["modelValue","suffix-key","onInput"])])]),a("div",Dt,[a("span",Mt,d(o.$t("buy_crypto_you_get")),1),a("div",Rt,[C(f,{modelValue:e(t).get_currency,"onUpdate:modelValue":n[2]||(n[2]=l=>e(t).get_currency=l),class:"balance-select get-select","default-option":e(t).get_currency,"item-list":e(Q)},{"selected-option":$(({props:l})=>[a("div",Ft,[a("div",qt,[a("img",{src:("getCurrencyIconUrl"in o?o.getCurrencyIconUrl:e(A))(l),alt:"currency",class:"option-currency-icon"},null,8,jt),a("div",zt,[a("span",Gt,d(o.$t("currency")),1),a("div",Lt,[a("span",Xt,d(l),1)])])])])]),option:$(({props:l})=>[a("div",{class:"simple-option",onClick:P},[a("img",{src:("getCurrencyIconUrl"in o?o.getCurrencyIconUrl:e(A))(l),width:16,height:16,alt:"currency",class:"option-currency-icon"},null,8,Yt),Y(" "+d(l),1)])]),_:1},8,["modelValue","default-option","item-list"]),C(O,{modelValue:e(q),"onUpdate:modelValue":n[3]||(n[3]=l=>Ae(q)?q.value=l:null),class:"get-amount","placeholder-key":"amount","is-required":"","is-readonly":"","suffix-key":e(t).get_currency},null,8,["modelValue","suffix-key"])])]),e(se)?(i(),k(f,{key:0,modelValue:e(t).network,"onUpdate:modelValue":n[4]||(n[4]=l=>e(t).network=l),class:"balance-select network-select","default-option":e(t).network,"item-list":e(se)},{"selected-option":$(({props:l})=>[a("div",Zt,[a("div",Kt,[a("div",Wt,[a("span",Ht,d(o.$t("choose_blockchain_network")),1),a("div",Jt,[a("span",Qt,d(l),1)])])])])]),option:$(({props:l})=>[a("div",{class:"simple-option",onClick:P},d(l),1)]),_:1},8,["modelValue","default-option","item-list"])):T("",!0),e(z)?T("",!0):(i(),k(X,{key:1,modelValue:e(t).address,"onUpdate:modelValue":n[6]||(n[6]=l=>e(t).address=l),"placeholder-text":o.$t("address"),class:"copy-address-input","is-required":"","is-readonly":e(z),onInput:e(L)},me({_:2},[e(t).address?{name:"rightIcon",fn:$(()=>[ve((i(),w("button",xt,[C(u,{name:"copy",onClick:n[5]||(n[5]=l=>ue("address",e(t).address))})])),[[fe,{content:o.$t("copied"),shown:e(I),triggers:["click"]}]])]),key:"0"}:void 0]),1032,["modelValue","placeholder-text","is-readonly","onInput"])),e(ne)&&!e(G)?(i(),k(X,{key:2,modelValue:e(t).memo_tag,"onUpdate:modelValue":n[8]||(n[8]=l=>e(t).memo_tag=l),"placeholder-key":"Memo tag",class:"copy-memo-input","is-required":"","is-readonly":e(G)},me({_:2},[e(t).memo_tag?{name:"rightIcon",fn:$(()=>[ve((i(),w("button",eo,[C(u,{name:"copy",onClick:n[7]||(n[7]=l=>ue("memoTag",e(t).memo_tag))})])),[[fe,{content:o.$t("copied"),shown:e(I),triggers:["click"]}]])]),key:"0"}:void 0]),1032,["modelValue","is-readonly"])):T("",!0),!e(y)&&!e(M)&&e(U).length?(i(),w("div",to,[e(U).length?(i(),w("span",oo,d(o.$t("changelly_payment_offer")),1)):T("",!0),(i(!0),w(ye,null,ot(e(U),l=>(i(),k(h,{key:`crypto-provide-card-${l.name}`,name:l.name,"get-amount":l.get_amount,"provider-image":l.iconUrl,currency:e(t).get_currency,"is-selected":l.code===e(t).provider,onOnButtonProviderClick:Po=>_e(l.code)},null,8,["name","get-amount","provider-image","currency","is-selected","onOnButtonProviderClick"]))),128))])):T("",!0),e(ce)?(i(),k(Ze,{key:4,"title-key":"changelly_title_note","note-html":e(ce)},null,8,["note-html"])):T("",!0),e(N)&&(!e(y)||!e(M))?(i(),k(Ke,{key:5,class:"mt-16",fee:(he=e(N))==null?void 0:he.fee,provider:(Ce=e(N))==null?void 0:Ce.name,rate:($e=e(N))==null?void 0:$e.rate,total:(be=e(N))==null?void 0:be.pay_amount,receive:(ke=e(N))==null?void 0:ke.get_amount,"pay-icon-image":("getCurrencyIconUrl"in o?o.getCurrencyIconUrl:e(A))((Ie=e(N))==null?void 0:Ie.pay_currency),"get-icon-image":("getCurrencyIconUrl"in o?o.getCurrencyIconUrl:e(A))(e(t).get_currency)},null,8,["fee","provider","rate","total","receive","pay-icon-image","get-icon-image"])):T("",!0)],64)),e(y)||e(M)?(i(),k(We,{key:2},{default:$(()=>[Y(d(e(y)||e(M)),1)]),_:1})):T("",!0),e(N)?(i(),k(He,{key:3,"is-disabled":e(E)||e(m),label:`${o.$t("buy_via")} ${(we=e(N))==null?void 0:we.name}`,onClick:g},null,8,["is-disabled","label"])):T("",!0)])]}),_:1},8,["loading"])}}}),no={class:"payment-crypto"},so={key:0,class:"agent-child"},ro={class:"pay-container"},lo={class:"pay-label"},co={class:"pay-control"},uo={class:"selected-option"},io={class:"option-container"},_o=["src"],po={class:"option-value"},yo={class:"option-label"},mo={class:"option-balance"},vo={class:"option-amount"},go={class:"simple-option"},fo=["src"],ho={class:"get-container"},Co={class:"get-label"},$o={class:"get-control"},bo={class:"selected-option"},ko={class:"option-container"},Io=["src"],wo={class:"option-value"},Vo={class:"option-label"},So={class:"option-balance"},Uo={class:"option-amount"},To=["src"],No={class:"copy-address-btn"},Eo=J({__name:"BuyCrypto",setup(D){const _={pay_currency:"USD",amount:void 0,get_currency:void 0,address:void 0,memo_tag:""},R=ge(),V=Ee(),F=Ne(),{t:v}=Pe(),{getAllCurrencies:S}=re(F),{isAgentChild:y,getPaymentBuyCrypto:q}=re(R),{fetchCryptoCurrencies:Q,fetchCryptoPairInfo:x,fetchCryptoOffers:ee,createCryptoOrder:U}=V,E=p(!1),m=p(null),j=p(0),z=p([]),G=p([]),I=p(!1),t=p(!1),M=p(void 0),le=p(!1),te=p(!1),Z=p(!1),s=p(_),K=B(()=>{var c;return(c=S.value.find(r=>r.code===s.value.pay_currency))==null?void 0:c.symbol}),oe=B(()=>q.value.show_memo_tag),ae=B(()=>q.value.extra.text),ie=B(()=>I.value||t.value),de=c=>{ce(),De(c)},ne=async()=>{var c,r,b,P;try{const L={pay_currency:s.value.pay_currency,get_currency:s.value.get_currency},{data:g}=await x(L);M.value=Math.ceil(g.min_amount),s.value.address=((c=g==null?void 0:g.data)==null?void 0:c.address)||null,s.value.memo_tag=((r=g==null?void 0:g.data)==null?void 0:r.memo_tag)||null,te.value=!!((b=g==null?void 0:g.data)!=null&&b.memo_tag),le.value=!!((P=g==null?void 0:g.data)!=null&&P.address),m.value=""}catch(L){const{error_code:g,msg:H}=L;g===738&&(s.value.address=null),le.value=!1,te.value=!1,m.value=H}},ce=()=>{Z.value=!Z.value,setTimeout(()=>{Z.value=!Z.value},1e3)},se=async()=>{try{const{data:c}=await Q();z.value=Object.freeze(c.get_currencies),G.value=Object.freeze(c.pay_currencies);const[r]=z.value,[b]=G.value;s.value.get_currency=r,s.value.pay_currency=b}catch(c){const{msg:r,message:b}=c;m.value=b??r}},N=async()=>{if(s.value.amount){I.value=!0;try{const c={get_currency:s.value.get_currency,amount:s.value.amount,pay_currency:s.value.pay_currency},{data:[r]}=await ee(c);I.value=!1,m.value=null,j.value=r.get_amount}catch(c){I.value=!0;const{msg:r,message:b}=c;m.value=b??r}}},W=Me(async function(){I.value=!0;try{const c={get_currency:s.value.get_currency,amount:s.value.amount,pay_currency:s.value.pay_currency},{data:[r]}=await ee(c);I.value=!1,m.value=null,j.value=r==null?void 0:r.get_amount}catch(c){I.value=!1;const{msg:r,message:b}=c;m.value=b??r}},300),_e=async()=>{if(!ue())return!1;t.value=!0,oe.value||(s.value.memo_tag=void 0);const c={...s.value,amount:Number(s.value.amount)};try{const{data:r}=await U(c);t.value=!1,m.value=void 0,r.is_blank&&Re()!=="safari"?window.open(r.redirect_url):window.location.replace(r.redirect_url),t.value=!1,m.value=""}catch(r){t.value=!1;const{msg:b,data:{message:P}}=r;m.value=P??b}},ue=()=>s.value.amount?s.value.amount<M.value?(m.value=v("buy_crypto_min_amount")+`: ${M.value}${K.value}`,!1):s.value.get_currency?s.value.pay_currency?s.value.address?(m.value=void 0,!0):(m.value=v("buy_crypto_address"),!1):(m.value=v("buy_crypto_crypto_currency"),!1):(m.value=v("buy_crypto_fiat_currency"),!1):(m.value=v("buy_crypto_wrong_amount"),!1);return Oe(async()=>{y.value||(E.value=!0,await se(),await ne(),E.value=!1,pe(()=>[s.value.pay_currency,s.value.get_currency],async()=>{E.value=!0,await ne(),await N(),E.value=!1}))}),(c,r)=>{const b=ze,P=Ue,L=qe,g=Fe,H=je,o=Le,n=Ge,f=Xe,O=Be("tooltip");return i(),k(f,{loading:e(E)},{default:$(()=>[a("div",no,[e(y)?(i(),w("div",so,d(c.$t("agent_child")),1)):(i(),w(ye,{key:1},[e(ae)?(i(),k(b,{key:0,"title-key":"buy_crypto_disclaimer_title","note-html":e(ae)},null,8,["note-html"])):T("",!0),a("div",ro,[a("span",lo,d(c.$t("buy_crypto_pay_with")),1),a("div",co,[C(P,{modelValue:e(s).pay_currency,"onUpdate:modelValue":r[0]||(r[0]=u=>e(s).pay_currency=u),class:"balance-select pay-select","default-option":e(s).pay_currency,"item-list":e(G)},{"selected-option":$(({props:u})=>[a("div",uo,[a("div",io,[a("img",{src:e(A)(u),alt:"currency",class:"option-currency-icon"},null,8,_o),a("div",po,[a("span",yo,d(c.$t("currency")),1),a("div",mo,[a("span",vo,d(u),1)])])])])]),option:$(({props:u})=>[a("div",go,[a("img",{src:e(A)(u),alt:"currency",width:16,height:16,class:"option-currency-icon"},null,8,fo),Y(" "+d(u),1)])]),_:1},8,["modelValue","default-option","item-list"]),C(L,{modelValue:e(s).amount,"onUpdate:modelValue":r[1]||(r[1]=u=>e(s).amount=u),class:"pay-amount","placeholder-key":"amount","is-required":"","is-validated-separately":"","suffix-key":e(s).pay_currency,onInput:e(W)},null,8,["modelValue","suffix-key","onInput"])])]),a("div",ho,[a("span",Co,d(c.$t("buy_crypto_you_get")),1),a("div",$o,[C(P,{modelValue:e(s).get_currency,"onUpdate:modelValue":r[2]||(r[2]=u=>e(s).get_currency=u),class:"balance-select get-select","default-option":e(s).get_currency,"item-list":e(z)},{"selected-option":$(({props:u})=>[a("div",bo,[a("div",ko,[a("img",{src:e(A)(u),alt:"currency",class:"option-currency-icon"},null,8,Io),a("div",wo,[a("span",Vo,d(c.$t("currency")),1),a("div",So,[a("span",Uo,d(u),1)])])])])]),option:$(({props:u})=>[a("div",{class:"simple-option",onClick:N},[a("img",{src:e(A)(u),width:16,height:16,alt:"currency",class:"option-currency-icon"},null,8,To),Y(" "+d(u),1)])]),_:1},8,["modelValue","default-option","item-list"]),C(L,{modelValue:e(j),"onUpdate:modelValue":r[3]||(r[3]=u=>Ae(j)?j.value=u:null),class:"get-amount","placeholder-key":"amount","is-required":"","is-readonly":"","suffix-key":e(s).get_currency},null,8,["modelValue","suffix-key"])])]),C(H,{modelValue:e(s).address,"onUpdate:modelValue":r[5]||(r[5]=u=>e(s).address=u),"placeholder-text":c.$t("address"),class:"copy-address-input","is-required":"","is-readonly":""},me({_:2},[e(s).address?{name:"rightIcon",fn:$(()=>[ve((i(),w("button",No,[C(g,{name:"copy",onClick:r[4]||(r[4]=u=>de(e(s).address))})])),[[O,{content:c.$t("copied"),shown:e(Z),triggers:["click"]}]])]),key:"0"}:void 0]),1032,["modelValue","placeholder-text"]),e(oe)?(i(),k(H,{key:1,modelValue:e(s).memo_tag,"onUpdate:modelValue":r[6]||(r[6]=u=>e(s).memo_tag=u),"placeholder-key":"Memo tag",class:"copy-memo-input","is-required":"","is-readonly":e(te)},null,8,["modelValue","is-readonly"])):T("",!0),C(o,{"label-key":"buy_crypto_button_buy","is-disabled":e(ie),onClick:_e},null,8,["is-disabled"]),e(m)?(i(),k(n,{key:2},{default:$(()=>[Y(d(e(m)),1)]),_:1})):T("",!0)],64))])]),_:1},8,["loading"])}}}),Lo=J({__name:"Crypto",setup(D){const _=ge(),{getPaymentBuyCrypto:R}=re(_),V=B(()=>{var F,v;return(v=(F=R.value)==null?void 0:F.fields)==null?void 0:v.changelly});return(F,v)=>{const S=ao,y=Eo;return e(V)?(i(),k(S,{key:0})):(i(),k(y,{key:1}))}}});export{Lo as default};