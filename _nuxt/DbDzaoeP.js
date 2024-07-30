import{d as W,m as z,s as H,H as C,a0 as k,k as Z,o as v,c as P,r as ee,B as w,C as y,b as p,g as e,n as N,O as q,a1 as te,e as d,t as b,i as h,p as L,h as oe,_ as ne,f as R,b2 as K,w as G}from"./7PQ9d4dP.js";import{_ as A}from"./CXUEa_s4.js";import{_ as j}from"./DqC-nx6a.js";import{_ as M}from"./r5J4__cq.js";import{a as J}from"./Dty3woGA.js";import{b as E}from"./BQWyzQZp.js";import{_ as re}from"./JGQl4adw.js";const ae={class:"withdrawal-amount"},le={class:"fg-main-14-bold tw-mb-2 tw-ms-2"},de={class:"tw-flex tw-items-center"},se={class:"tw-w-16 tw-h-8 tw-overflow-hidden tw-rounded-sm tw-mr-3"},ie={class:"fg-main-12-regular tw-text-text-tertiary"},ue={class:"fg-info-14-regular"},me={class:"tw-flex tw-items-center"},pe={class:"tw-w-16 tw-h-8 tw-overflow-hidden tw-rounded-sm tw-mr-3"},ce={class:"fg-main-14-thin"},ve={class:"inputs"},_e={class:"min-amount"},fe={class:"fg-main-14-bold tw-ml-auto"},we=W({__name:"WithdrawAmount",props:{amount:{},provider:{},isConvertable:{type:Boolean,default:!1},convertedAmount:{default:void 0},type:{default:"simple"}},emits:["update:amount","update:convertedAmount"],setup(x,{emit:r}){const o=x,s=r,t=z(),{getCurrency:u,getWithdrawable:l,userData:i}=H(t),n=c=>{const V=String(c).lastIndexOf(".");return Number(String(c).slice(0,V))},m=C(()=>i.value.decimal_payment),f=(c,V)=>m.value?c:V?n(c):Math.round(Number(c)),a=k(f(o.amount)),U=k(o.convertedAmount),_=k("usd"),D=k(["usd","eur"]),T=C(()=>{var c;return o.isConvertable&&((c=o.provider.extra)==null?void 0:c.exchange_input)}),g=C(()=>o.provider.max_limit<l.value?o.provider.max_limit:l.value),F=()=>{a.value=f(a.value)},S=()=>{const c=f(g.value,!0);s("update:amount",c),a.value=c};return Z(()=>{s("update:amount",f(o.amount))}),(c,V)=>{const O=L,B=E,Q=A,X=oe,Y=re;return v(),P("div",ae,[ee(c.$slots,"before",{},void 0,!0),c.type==="simple"?(v(),w(B,{key:0,modelValue:e(a),"onUpdate:modelValue":V[0]||(V[0]=$=>q(a)?a.value=$:null),modelModifiers:{number:!0},"input-name":"amount","is-max-btn":"",min:c.provider.min_limit,max:e(g),"is-required":"","placeholder-key":"withdrawal_amount",onClickMaxBtn:S,onInput:V[1]||(V[1]=$=>c.$emit("update:amount",f(e(a)))),onBlur:F},{leftIcon:y(()=>[p(O,{src:("getCurrencyIconUrl"in c?c.getCurrencyIconUrl:e(N))(e(u)),alt:"currency",width:"24",height:"24"},null,8,["src"])]),_:1},8,["modelValue","min","max"])):(v(),P(te,{key:1},[d("div",le,b(c.$t("amount")),1),e(T)?(v(),w(Q,{key:0,modelValue:e(_),"onUpdate:modelValue":V[2]||(V[2]=$=>q(_)?_.value=$:null),"default-option":e(_),"item-list":e(D),class:"tw-mb-4","modal-overflow":!0},{"selected-option":y(({props:$})=>[d("div",de,[d("div",se,[p(O,{class:"tw-block tw-object-cover tw-w-16 tw-h-8",src:("getCurrencyIconUrl"in c?c.getCurrencyIconUrl:e(N))($),alt:$},null,8,["src","alt"])]),d("div",null,[d("div",ie,b(c.$t("currency")),1),d("h4",ue,b($),1)])])]),option:y(({props:$})=>[d("div",me,[d("div",pe,[p(O,{class:"tw-block tw-object-cover tw-w-16 tw-h-8",src:("getCurrencyIconUrl"in c?c.getCurrencyIconUrl:e(N))($),alt:$},null,8,["src","alt"])]),d("div",null,[d("h4",ce,b($),1)])])]),_:1},8,["modelValue","default-option","item-list"])):h("",!0),d("div",ve,[p(B,{modelValue:e(a),"onUpdate:modelValue":V[3]||(V[3]=$=>q(a)?a.value=$:null),"is-max-btn":"","input-name":"amount",onClickMaxBtn:S,onInput:V[4]||(V[4]=$=>c.$emit("update:amount",e(a))),onBlur:F},{leftIcon:y(()=>[p(O,{src:("getCurrencyIconUrl"in c?c.getCurrencyIconUrl:e(N))(e(u)),alt:"currency",width:"24",height:"24"},null,8,["src"])]),_:1},8,["modelValue"]),e(T)?(v(),w(X,{key:0,name:"convertable",size:24,class:"converted-icon"})):h("",!0),e(T)?(v(),w(B,{key:1,modelValue:e(U),"onUpdate:modelValue":V[5]||(V[5]=$=>q(U)?U.value=$:null),"is-max-btn":"","input-name":"amount",class:"converted-amount",onClickMaxBtn:S,onInput:V[6]||(V[6]=$=>c.$emit("update:convertedAmount",e(U)))},{leftIcon:y(()=>[p(O,{src:("getCurrencyIconUrl"in c?c.getCurrencyIconUrl:e(N))(e(u)),alt:"currency",width:"24",height:"24"},null,8,["src"])]),_:1},8,["modelValue"])):h("",!0)]),d("div",_e,[d("span",null,b(c.$t("min_withdrawal_amount")),1),d("span",fe,b(c.provider.min_limit),1),p(O,{src:("getCurrencyIconUrl"in c?c.getCurrencyIconUrl:e(N))(e(u)),alt:"currency",width:"16",height:"16",class:"tw-ml-1"},null,8,["src"])])],64)),c.provider.min_limit?(v(),w(Y,{key:2,"min-amount":c.provider.min_limit},null,8,["min-amount"])):h("",!0)])}}}),I=ne(we,[["__scopeId","data-v-e4215230"]]),ye={class:"selected-option"},be={class:"option-container"},ge={class:"option-value"},he={class:"option-label"},Ve={class:"option-balance"},$e={class:"option-amount"},xe={class:"simple-option"},ke=W({__name:"WithdrawalCoinsPaid",props:{provider:{}},setup(x){const r=x,o=C(()=>r.provider.extra.currency_list.map(l=>l.currency)),s=C(()=>r.provider.extra_data.showTag.includes(t.value.currency)),t=k({amount:0,address:"",tag:"",currency:o.value[0]}),u=C(()=>{var l,i;return(i=(l=r.provider)==null?void 0:l.extra)==null?void 0:i.rates});return(l,i)=>{const n=L,m=A,f=j,a=I,U=M;return v(),w(U,{"filed-values":e(t),provider:l.provider,"is-form-valid":!0},{default:y(()=>[p(m,{modelValue:e(t).currency,"onUpdate:modelValue":i[0]||(i[0]=_=>e(t).currency=_),class:"balance-select","item-list":e(o),"default-option":e(o)[0],"modal-overflow":!0},{"selected-option":y(({props:_})=>[d("div",ye,[d("div",be,[p(n,{src:e(N)(_),alt:"currency",class:"option-currency-icon"},null,8,["src"]),d("div",ge,[d("span",he,b(l.$t("currency")),1),d("div",Ve,[d("span",$e,b(_),1)])])])])]),option:y(({props:_})=>[d("div",xe,[p(n,{src:e(N)(_),alt:"currency",width:"16",height:"16",class:"option-currency-icon"},null,8,["src"]),R(" "+b(_),1)])]),_:1},8,["modelValue","item-list","default-option"]),e(s)?(v(),w(f,{key:0,modelValue:e(t).tag,"onUpdate:modelValue":i[1]||(i[1]=_=>e(t).tag=_),"input-name":"tag","placeholder-text":l.$t("tag"),"is-required":"","is-validated-separately":""},null,8,["modelValue","placeholder-text"])):h("",!0),p(a,{amount:e(t).amount,"onUpdate:amount":i[2]||(i[2]=_=>e(t).amount=_),provider:l.provider},K({_:2},[e(u)?{name:"before",fn:y(()=>[p(J,{provider:l.provider,"convert-to":e(t).currency,amount:e(t).amount},null,8,["provider","convert-to","amount"])]),key:"0"}:void 0]),1032,["amount","provider"]),p(f,{modelValue:e(t).address,"onUpdate:modelValue":i[3]||(i[3]=_=>e(t).address=_),"input-name":"address","placeholder-text":l.$t("address"),"is-required":"","is-validated-separately":""},null,8,["modelValue","placeholder-text"])]),_:1},8,["filed-values","provider"])}}}),bt=Object.freeze(Object.defineProperty({__proto__:null,default:ke},Symbol.toStringTag,{value:"Module"})),Ue={class:"selected-option"},Ce={class:"option-container"},Se={class:"option-value"},We={class:"option-label"},Ne={class:"option-balance"},Me={class:"option-amount"},Ie={class:"simple-option"},Te=W({__name:"WithdrawalExternalCoinPaymentsWithFiat",props:{provider:{}},setup(x){const r=x,o=k({amount:0,address:"",currency:r.provider.extra.currency_list[0]}),s=C(()=>{var t,u;return(u=(t=r.provider)==null?void 0:t.extra)==null?void 0:u.rates});return(t,u)=>{const l=L,i=A,n=I,m=j,f=M;return v(),w(f,{"filed-values":e(o),provider:t.provider,"is-form-valid":!0},{default:y(()=>[p(i,{modelValue:e(o).currency,"onUpdate:modelValue":u[0]||(u[0]=a=>e(o).currency=a),class:"balance-select","item-list":t.provider.extra.currency_list,"default-option":t.provider.extra.currency_list[0],"modal-overflow":!0},{"selected-option":y(({props:a})=>[d("div",Ue,[d("div",Ce,[p(l,{src:e(N)(a),alt:"currency",class:"option-currency-icon"},null,8,["src"]),d("div",Se,[d("span",We,b(t.$t("currency")),1),d("div",Ne,[d("span",Me,b(a),1)])])])])]),option:y(({props:a})=>[d("div",Ie,[p(l,{src:e(N)(a),alt:"currency",width:"16",height:"16",class:"option-currency-icon"},null,8,["src"]),R(" "+b(a),1)])]),_:1},8,["modelValue","item-list","default-option"]),p(n,{amount:e(o).amount,"onUpdate:amount":u[1]||(u[1]=a=>e(o).amount=a),provider:t.provider},K({_:2},[e(s)?{name:"before",fn:y(()=>[p(J,{provider:t.provider,"convert-to":e(o).currency,amount:e(o).amount},null,8,["provider","convert-to","amount"])]),key:"0"}:void 0]),1032,["amount","provider"]),p(m,{modelValue:e(o).address,"onUpdate:modelValue":u[2]||(u[2]=a=>e(o).address=a),"input-name":"address","placeholder-text":t.$t("address"),"is-required":"","is-validated-separately":""},null,8,["modelValue","placeholder-text"])]),_:1},8,["filed-values","provider"])}}}),gt=Object.freeze(Object.defineProperty({__proto__:null,default:Te},Symbol.toStringTag,{value:"Module"})),Ae={class:"tw-flex tw-items-center"},je={class:"tw-flex tw-items-center"},Oe=W({__name:"WithdrawalExternalKasha",props:{provider:{}},setup(x){const{provider:r}=x,o=k({country:"",amount:"0"}),s=C(()=>r.extra&&r.extra.countries&&r.extra.countries.length);return(t,u)=>{const l=A,i=I,n=M;return v(),w(n,{"filed-values":e(o),provider:t.provider},{default:y(()=>[e(s)?(v(),w(l,{key:0,modelValue:e(o).country,"onUpdate:modelValue":u[0]||(u[0]=m=>e(o).country=m),"default-option":e(o).country,"item-list":t.provider.extra.countries,class:"tw-mb-4","modal-overflow":!0},{"selected-option":y(({props:m})=>[d("div",Ae,b(m),1)]),option:y(({props:m})=>[d("div",je,b(m),1)]),_:1},8,["modelValue","default-option","item-list"])):h("",!0),p(i,{amount:e(o).amount,"onUpdate:amount":u[1]||(u[1]=m=>e(o).amount=m),provider:t.provider},null,8,["amount","provider"])]),_:1},8,["filed-values","provider"])}}}),ht=Object.freeze(Object.defineProperty({__proto__:null,default:Oe},Symbol.toStringTag,{value:"Module"})),Pe={class:"tw-flex tw-items-center"},qe={class:"tw-flex tw-items-center"},De={class:"tw-flex tw-items-center"},Fe={class:"tw-flex tw-items-center"},Be=W({__name:"WithdrawalExternalNowPayment",props:{provider:{}},setup(x){const{provider:r}=x,o=k({cryptocurrency:"",amount:"0"}),s=C(()=>{var l;return(l=r.extra)==null?void 0:l.isCrypto}),t=C(()=>{var l,i;return(i=(l=r.extra)==null?void 0:l.tokenStandards[o.value.cryptocurrency])==null?void 0:i.length}),u=C(()=>{var l,i;return((i=(l=r.extra)==null?void 0:l.countries)==null?void 0:i.length)&&!s.value});return(l,i)=>{const n=A,m=I,f=M;return v(),w(f,{"filed-values":e(o),provider:l.provider},{default:y(()=>[e(u)?(v(),w(n,{key:0,modelValue:e(o).cryptocurrency,"onUpdate:modelValue":i[0]||(i[0]=a=>e(o).cryptocurrency=a),"default-option":e(o).cryptocurrency,"item-list":l.provider.extra.currencies,class:"tw-mb-4","modal-overflow":!0},{"selected-option":y(({props:a})=>[d("div",Pe,b(a),1)]),option:y(({props:a})=>[d("div",qe,b(a),1)]),_:1},8,["modelValue","default-option","item-list"])):h("",!0),e(t)?(v(),w(n,{key:1,modelValue:e(o).cryptocurrency,"onUpdate:modelValue":i[1]||(i[1]=a=>e(o).cryptocurrency=a),"default-option":e(o).cryptocurrency,"item-list":l.provider.extra.currencies,class:"tw-mb-4","modal-overflow":!0},{"selected-option":y(({props:a})=>[d("div",De,b(a),1)]),option:y(({props:a})=>[d("div",Fe,b(a),1)]),_:1},8,["modelValue","default-option","item-list"])):h("",!0),p(m,{amount:e(o).amount,"onUpdate:amount":i[2]||(i[2]=a=>e(o).amount=a),provider:l.provider},null,8,["amount","provider"])]),_:1},8,["filed-values","provider"])}}}),Vt=Object.freeze(Object.defineProperty({__proto__:null,default:Be},Symbol.toStringTag,{value:"Module"})),ze=["innerHTML"],He=W({__name:"WithdrawalManual",props:{provider:{}},setup(x){const r=k({amount:0,address:""});return(o,s)=>{const t=I,u=j,l=M;return v(),w(l,{"filed-values":e(r),provider:o.provider,"is-form-valid":!0},{default:y(()=>{var i;return[(i=o.provider.extra)!=null&&i.text?(v(),P("div",{key:0,class:"disclaimer-container fg-main-14-regular",innerHTML:o.provider.extra.text},null,8,ze)):h("",!0),p(t,{amount:e(r).amount,"onUpdate:amount":s[0]||(s[0]=n=>e(r).amount=n),provider:o.provider},null,8,["amount","provider"]),p(u,{modelValue:e(r).address,"onUpdate:modelValue":s[1]||(s[1]=n=>e(r).address=n),"input-name":"address","placeholder-text":o.$t("address"),"is-required":"","is-validated-separately":""},null,8,["modelValue","placeholder-text"])]}),_:1},8,["filed-values","provider"])}}}),$t=Object.freeze(Object.defineProperty({__proto__:null,default:He},Symbol.toStringTag,{value:"Module"})),Le={class:"tw-flex tw-gap-4 tw-flex-col"},Ee=["innerHTML"],Re=W({__name:"WithdrawalManualB",props:{provider:{}},setup(x){const r=k({name:"",bank:"",branch:"",iban:"",amount:"0"});return(o,s)=>{const t=j,u=I,l=M;return v(),w(l,{"filed-values":e(r),provider:o.provider},{default:y(()=>{var i;return[d("div",Le,[(i=o.provider.extra)!=null&&i.text?(v(),P("div",{key:0,class:"disclaimer-container fg-main-14-regular",innerHTML:o.provider.extra.text},null,8,Ee)):h("",!0),p(t,{modelValue:e(r).name,"onUpdate:modelValue":s[0]||(s[0]=n=>e(r).name=n),"label-key":"name_surname_form","placeholder-text":o.$t("name_surname_form"),"input-type":"text","input-name":"name_surname"},null,8,["modelValue","placeholder-text"]),p(t,{modelValue:e(r).bank,"onUpdate:modelValue":s[1]||(s[1]=n=>e(r).bank=n),"label-key":"bank","placeholder-text":o.$t("bank"),"input-type":"text","input-name":"bank"},null,8,["modelValue","placeholder-text"]),p(t,{modelValue:e(r).branch,"onUpdate:modelValue":s[2]||(s[2]=n=>e(r).branch=n),"label-key":"branch","placeholder-text":o.$t("branch"),"input-type":"text","input-name":"branch"},null,8,["modelValue","placeholder-text"]),p(t,{modelValue:e(r).iban,"onUpdate:modelValue":s[3]||(s[3]=n=>e(r).iban=n),"label-key":"iban","placeholder-text":o.$t("iban"),"input-type":"text","input-name":"iban"},null,8,["modelValue","placeholder-text"]),p(u,{amount:e(r).amount,"onUpdate:amount":s[4]||(s[4]=n=>e(r).amount=n),provider:o.provider},null,8,["amount","provider"])])]}),_:1},8,["filed-values","provider"])}}}),xt=Object.freeze(Object.defineProperty({__proto__:null,default:Re},Symbol.toStringTag,{value:"Module"})),Ke={class:"withdrawal-manual-c2c-container tw-flex tw-flex-col tw-gap-4"},Ge=["innerHTML"],Je={class:"tw-flex tw-gap-2 tw-items-end"},Qe={class:"tw-flex tw-flex-col tw-gap-2 tw-min-w-24"},Xe={class:"tw-text-white tw-font-bold tw-text-base"},Ye=W({__name:"WithdrawalManualC2C",props:{provider:{},error:{}},setup(x){const r=x,o=z(),{getCurrency:s}=H(o),t=k({address:"",bank_account_number:"",bank:r.provider.fields.bank_name?r.provider.fields.bank_name.options[0].label:"",cancel_url:window.location.origin,code_2fa:"",currency:s.value,name:"",account_holder_name:"",return_url:window.location.origin,type:r.provider.id,amount:0,converted_amount:0,converted_currency:r.provider.extra_data.selected_currencies[0].code}),u=k(r.provider.extra_data.selected_currencies[0]),l=C(()=>u.value&&u.value.exact_value?(Number(t.value.amount)/Number(u.value.exact_value)).toFixed(2):t.value.amount),i=()=>{u.value=r.provider.extra_data.selected_currencies.find(n=>n.code===t.value.converted_currency)};return G(()=>l.value,n=>{t.value.converted_amount=Number(n)}),(n,m)=>{const f=I,a=E,U=A,_=j,D=M;return v(),w(D,{"filed-values":e(t),provider:n.provider,"is-form-valid":!0},{default:y(()=>{var T;return[d("div",Ke,[(T=n.provider.extra)!=null&&T.text?(v(),P("div",{key:0,class:"disclaimer-container fg-main-14-regular",innerHTML:n.provider.extra.text},null,8,Ge)):h("",!0),p(f,{amount:e(t).amount,"onUpdate:amount":m[0]||(m[0]=g=>e(t).amount=g),provider:n.provider},null,8,["amount","provider"]),d("div",Je,[p(a,{modelValue:e(l),"onUpdate:modelValue":m[1]||(m[1]=g=>q(l)?l.value=g:null),"input-name":"converted_amount","label-key":"converted_amount","is-label-shown":"","is-required":"","is-readonly":""},null,8,["modelValue"]),d("div",Qe,[d("span",Xe,b(n.$t("currency")),1),n.provider.extra_data.selected_currencies?(v(),w(U,{key:0,modelValue:e(t).converted_currency,"onUpdate:modelValue":m[2]||(m[2]=g=>e(t).converted_currency=g),"item-list":n.provider.extra_data.selected_currencies,"default-option":e(t).converted_currency,"displayed-option":"code","returned-option":"code","modal-overflow":!0,onChange:i},null,8,["modelValue","item-list","default-option"])):h("",!0)])]),n.provider.fields.account_holder_name?h("",!0):(v(),w(_,{key:1,modelValue:e(t).name,"onUpdate:modelValue":m[3]||(m[3]=g=>e(t).name=g),"input-name":"name","is-required":"","placeholder-text":n.$t("account_name")},null,8,["modelValue","placeholder-text"])),n.provider.fields.bank_account_number?h("",!0):(v(),w(_,{key:2,modelValue:e(t).address,"onUpdate:modelValue":m[4]||(m[4]=g=>e(t).address=g),"input-name":"address","is-required":"","placeholder-text":n.$t("address_account_number")},null,8,["modelValue","placeholder-text"])),n.provider.fields.bank_name?h("",!0):(v(),w(_,{key:3,modelValue:e(t).bank,"onUpdate:modelValue":m[5]||(m[5]=g=>e(t).bank=g),"input-name":"bank","is-required":"","placeholder-text":n.$t("bank_name")},null,8,["modelValue","placeholder-text"])),n.provider.fields.account_holder_name?(v(),w(_,{key:4,modelValue:e(t).account_holder_name,"onUpdate:modelValue":m[6]||(m[6]=g=>e(t).account_holder_name=g),"is-disabled":n.provider.fields.account_holder_name.disabled,"input-name":"name","is-required":"","placeholder-text":n.$t("account_name")},null,8,["modelValue","is-disabled","placeholder-text"])):h("",!0),n.provider.fields.bank_account_number?(v(),w(_,{key:5,modelValue:e(t).bank_account_number,"onUpdate:modelValue":m[7]||(m[7]=g=>e(t).bank_account_number=g),"is-disabled":n.provider.fields.bank_account_number.disabled,"input-name":"address","is-required":"","placeholder-text":n.$t("address_account_number")},null,8,["modelValue","is-disabled","placeholder-text"])):h("",!0),n.provider.fields.bank_name?(v(),w(U,{key:6,modelValue:e(t).bank,"onUpdate:modelValue":m[8]||(m[8]=g=>e(t).bank=g),"default-option":e(t).bank,"is-disabled":n.provider.fields.bank_name.disabled,"item-list":n.provider.fields.bank_name.options,"displayed-option":"label","returned-option":"label","modal-overflow":!0},null,8,["modelValue","default-option","is-disabled","item-list"])):h("",!0)])]}),_:1},8,["filed-values","provider"])}}}),kt=Object.freeze(Object.defineProperty({__proto__:null,default:Ye},Symbol.toStringTag,{value:"Module"})),Ze={class:"withdrawal-manual-c2c-container tw-flex tw-flex-col tw-gap-4"},et=["innerHTML"],tt={class:"tw-flex tw-gap-2 tw-items-end"},ot={class:"tw-flex tw-flex-col tw-gap-2 tw-min-w-24"},nt={class:"tw-text-white tw-font-bold tw-text-base"},rt=W({__name:"WithdrawalManualC2CAsterisk",props:{provider:{},error:{}},setup(x){var n,m;const r=x,o=z(),{getCurrency:s}=H(o),t=k({amount:0,converted_amount:0,converted_currency:((m=(n=r.provider.extra_data)==null?void 0:n.selected_currencies[0])==null?void 0:m.code)||s.value,address:""}),u=k(r.provider.extra_data.selected_currencies[0]),l=C(()=>u.value&&u.value.exact_value?(Number(t.value.amount)/Number(u.value.exact_value)).toFixed(2):t.value.amount),i=()=>{u.value=r.provider.extra_data.selected_currencies.find(f=>f.code===t.value.converted_currency)};return G(()=>l.value,f=>{t.value.converted_amount=Number(f)}),(f,a)=>{const U=I,_=E,D=A,T=j,g=M;return v(),w(g,{"filed-values":e(t),provider:f.provider,"is-form-valid":!0},{default:y(()=>{var F;return[d("div",Ze,[(F=f.provider.extra)!=null&&F.text?(v(),P("div",{key:0,class:"disclaimer-container fg-main-14-regular",innerHTML:f.provider.extra.text},null,8,et)):h("",!0),p(U,{amount:e(t).amount,"onUpdate:amount":a[0]||(a[0]=S=>e(t).amount=S),provider:f.provider},null,8,["amount","provider"]),d("div",tt,[p(_,{modelValue:e(l),"onUpdate:modelValue":a[1]||(a[1]=S=>q(l)?l.value=S:null),"input-name":"converted_amount","label-key":"converted_amount","is-label-shown":"","is-required":"","is-readonly":""},null,8,["modelValue"]),d("div",ot,[d("span",nt,b(f.$t("currency")),1),f.provider.extra_data.selected_currencies?(v(),w(D,{key:0,modelValue:e(t).converted_currency,"onUpdate:modelValue":a[2]||(a[2]=S=>e(t).converted_currency=S),"item-list":f.provider.extra_data.selected_currencies,"default-option":e(t).converted_currency,"displayed-option":"code","returned-option":"code","modal-overflow":!0,onChange:i},null,8,["modelValue","item-list","default-option"])):h("",!0)])]),p(T,{modelValue:e(t).address,"onUpdate:modelValue":a[3]||(a[3]=S=>e(t).address=S),"input-name":"address","is-required":"","placeholder-text":f.$t("your_wallet")},null,8,["modelValue","placeholder-text"])])]}),_:1},8,["filed-values","provider"])}}}),Ut=Object.freeze(Object.defineProperty({__proto__:null,default:rt},Symbol.toStringTag,{value:"Module"})),at={class:"withdrawal-manual-c2c-container tw-flex tw-flex-col tw-gap-4"},lt=["innerHTML"],dt=W({__name:"WithdrawalManualPayfix",props:{provider:{},error:{}},setup(x){const r=k({amount:0,name:"",address:"",note:""});return(o,s)=>{const t=j,u=I,l=M;return v(),w(l,{"filed-values":e(r),provider:o.provider,"is-form-valid":!0},{default:y(()=>{var i;return[d("div",at,[(i=o.provider.extra)!=null&&i.text?(v(),P("div",{key:0,class:"disclaimer-container fg-main-14-regular",innerHTML:o.provider.extra.text},null,8,lt)):h("",!0),p(t,{modelValue:e(r).name,"onUpdate:modelValue":s[0]||(s[0]=n=>e(r).name=n),"input-name":"name","is-required":"","placeholder-text":o.$t("name_surname_form")},null,8,["modelValue","placeholder-text"]),p(u,{amount:e(r).amount,"onUpdate:amount":s[1]||(s[1]=n=>e(r).amount=n),provider:o.provider},null,8,["amount","provider"]),p(t,{modelValue:e(r).address,"onUpdate:modelValue":s[2]||(s[2]=n=>e(r).address=n),"input-name":"address","is-required":"","placeholder-text":o.$t("payfix_account_number")},null,8,["modelValue","placeholder-text"]),p(t,{modelValue:e(r).note,"onUpdate:modelValue":s[3]||(s[3]=n=>e(r).note=n),"input-name":"note","is-required":"","placeholder-text":o.$t("customer_note")},null,8,["modelValue","placeholder-text"])])]}),_:1},8,["filed-values","provider"])}}}),Ct=Object.freeze(Object.defineProperty({__proto__:null,default:dt},Symbol.toStringTag,{value:"Module"})),st={class:"tw-flex tw-items-center tw-gap-1"},it={class:"tw-flex tw-flex-col"},ut={class:"fg-main-12-regular tw-text-text-tertiary"},mt=W({__name:"WithdrawalNowPayment",props:{provider:{}},setup(x){const r=k({amount:0,currency:"",address:""});return(o,s)=>{const t=A,u=I,l=j,i=M;return v(),w(i,{"filed-values":e(r),provider:o.provider,"is-form-valid":!0},{default:y(()=>{var n,m,f,a,U;return[(m=(n=o.provider.extra)==null?void 0:n.currencies)!=null&&m.length&&((f=o.provider.extra)!=null&&f.is_crypto)?(v(),w(t,{key:0,modelValue:e(r).currency,"onUpdate:modelValue":s[0]||(s[0]=_=>e(r).currency=_),"item-list":(a=o.provider.extra)==null?void 0:a.currencies,"default-option":(U=o.provider.extra)==null?void 0:U.currencies[0],"modal-overflow":!0},{"selected-option":y(({props:_})=>[d("div",st,[d("div",it,[d("span",ut,b(o.$t("currency")),1),d("span",null,b(_),1)])])]),_:1},8,["modelValue","item-list","default-option"])):h("",!0),p(u,{amount:e(r).amount,"onUpdate:amount":s[1]||(s[1]=_=>e(r).amount=_),provider:o.provider},null,8,["amount","provider"]),d("div",null,b(o.provider.extra_data.accountText),1),p(l,{modelValue:e(r).address,"onUpdate:modelValue":s[2]||(s[2]=_=>e(r).address=_),"input-name":"address","placeholder-text":o.$t("address_account_number"),"is-required":"","is-validated-separately":"","validation-rules":o.yup.string().required().trim()},null,8,["modelValue","placeholder-text","validation-rules"])]}),_:1},8,["filed-values","provider"])}}}),St=Object.freeze(Object.defineProperty({__proto__:null,default:mt},Symbol.toStringTag,{value:"Module"}));export{bt as W,I as _,gt as a,ht as b,Vt as c,$t as d,xt as e,kt as f,Ut as g,Ct as h,St as i};