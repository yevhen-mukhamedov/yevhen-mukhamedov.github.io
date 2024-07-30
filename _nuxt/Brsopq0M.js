import{_ as P}from"./CXUEa_s4.js";import{b as z}from"./BQWyzQZp.js";import{d as q,m as F,s as O,a0 as w,H as v,w as k,k as H,o as d,c as j,B as y,C as _,e as l,t as f,g as e,O as A,i as V,U as G,n as M,b as U,h as J,_ as K}from"./7PQ9d4dP.js";import{_ as Q}from"./JGQl4adw.js";import{c as C}from"./Dty3woGA.js";import{_ as X}from"./DqC-nx6a.js";import{_ as Y}from"./r5J4__cq.js";import{p as Z}from"./RQfXHScZ.js";import"./D0WEjs_T.js";import"./CML6iTNl.js";import"./DD170oM2.js";const ee={class:"converter"},te={class:"tw-flex tw-items-center tw-gap-1"},re={class:"tw-flex tw-flex-col"},ne={class:"fg-main-12-regular tw-text-text-tertiary"},oe={class:"tw-mt-4"},ae={class:"tw-mb-2"},ie=["src"],se={class:"tw-text-text-tertiary ng-flex-center"},ue=["src"],me=q({__name:"WithdrawAmountConverter",props:{amount:{},minLimit:{},maxLimit:{},currencyList:{},isRequired:{type:Boolean},allowedPlatforms:{},rates:{}},emits:["update:amount","update:originAmount","update:originCurrency"],setup(b,{emit:g}){const t=b,a=g,i=F(),{getCurrency:c,userData:h,getBalance:x}=O(i),n=w(t.currencyList[0]),o=w(0),s=w(!1),L=v(()=>C(t.minLimit??0,c.value,n.value,t.rates)),I=v(()=>C(t.maxLimit??0,c.value,n.value,t.rates)),B=v(()=>C(x.value,c.value,n.value,t.rates)),p=v(()=>C(o.value,n.value,c.value,t.rates)),S=()=>{B.value>I.value?o.value=Number(I.value):o.value=Number(B.value)},D=v(()=>h.value.decimal_payment),N=r=>D.value?r:Math.round(Number(r)),W=()=>{o.value=N(o.value)};return k(()=>p.value,()=>{a("update:amount",p.value),a("update:originCurrency",n.value.code)}),k(()=>n.value,()=>{o.value=Number(L.value)}),H(()=>{o.value=N(Number(t.amount))}),(r,u)=>{const E=P,$=z,R=J,T=Q;return d(),j("div",ee,[r.currencyList.length>0?(d(),y(E,{key:0,modelValue:e(n),"onUpdate:modelValue":u[0]||(u[0]=m=>A(n)?n.value=m:null),"item-list":r.currencyList,"default-option":r.currencyList[0],"modal-overflow":!0},{"selected-option":_(({props:m})=>[l("div",te,[l("div",re,[l("span",ne,f(r.$t("currency")),1),l("span",null,f(m),1)])])]),_:1},8,["modelValue","item-list","default-option"])):V("",!0),l("div",oe,[l("div",ae,f(r.$t("amount")),1),l("div",{class:G(["converter-inputs",{"tw-mb-8":e(s)}])},[(d(),y($,{key:e(n),modelValue:e(o),"onUpdate:modelValue":u[1]||(u[1]=m=>A(o)?o.value=m:null),modelModifiers:{number:!0},"input-name":"amount","is-max-btn":"",min:Number(e(L)),max:Number(e(I)),"is-required":r.isRequired,onInput:u[2]||(u[2]=m=>r.$emit("update:originAmount",N(e(o)))),onBlur:W,onClickMaxBtn:S,onOnError:u[3]||(u[3]=m=>s.value=m)},{leftIcon:_(()=>[l("img",{src:("getCurrencyIconUrl"in r?r.getCurrencyIconUrl:e(M))(e(n)),alt:"currency",width:"24",height:"24"},null,8,ie)]),rightIcon:_(()=>[l("span",se,f(e(n).code),1)]),_:1},8,["modelValue","min","max","is-required"])),U(R,{size:24,name:"converter",class:"converter-icon"}),U($,{modelValue:e(p),"onUpdate:modelValue":u[4]||(u[4]=m=>A(p)?p.value=m:null),modelModifiers:{number:!0},"input-name":"convertedAmount","is-max-btn":"","is-required":"","is-disabled":""},{leftIcon:_(()=>[l("img",{src:("getCurrencyIconUrl"in r?r.getCurrencyIconUrl:e(M))(e(c)),alt:"currency",width:"24",height:"24"},null,8,ue)]),_:1},8,["modelValue"])],2),r.minLimit?(d(),y(T,{key:0,"min-amount":r.minLimit},null,8,["min-amount"])):V("",!0)])])}}}),le=K(me,[["__scopeId","data-v-1932a41b"]]),xe=q({__name:"WithdrawalExternalCoinPayments",props:{provider:{}},setup(b){const g=b,t=w({origin_amount:0,amount:0,address:"",currency:g.provider.extra.currency_list[0],origin_currency:g.provider.extra.currency_list[0]});return(a,i)=>{const c=le,h=X,x=Y;return d(),y(x,{"filed-values":e(t),provider:a.provider,"is-form-valid":!0},{default:_(()=>{var n,o;return[((n=a.provider.extra.currency_list)==null?void 0:n.length)>0?(d(),y(c,{key:0,amount:e(t).amount,"onUpdate:amount":i[0]||(i[0]=s=>e(t).amount=s),"origin-amount":e(t).origin_amount,"onUpdate:originAmount":i[1]||(i[1]=s=>e(t).origin_amount=s),"origin-currency":e(t).origin_currency,"onUpdate:originCurrency":i[2]||(i[2]=s=>e(t).origin_currency=s),currency:a.provider.currency,"currency-list":a.provider.extra.currency_list,"min-limit":a.provider.min_limit,"max-limit":a.provider.max_limit,"allowed-platforms":e(Z),rates:(o=a.provider.extra)==null?void 0:o.rates,"is-required":""},null,8,["amount","origin-amount","origin-currency","currency","currency-list","min-limit","max-limit","allowed-platforms","rates"])):V("",!0),U(h,{modelValue:e(t).address,"onUpdate:modelValue":i[3]||(i[3]=s=>e(t).address=s),"input-name":"address","placeholder-text":a.$t("address"),"is-required":"","is-validated-separately":""},null,8,["modelValue","placeholder-text"])]}),_:1},8,["filed-values","provider"])}}});export{xe as default};
