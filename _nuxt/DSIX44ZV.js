import{b as h,_ as $,a as C}from"./DIzpOUXX.js";import{V as D,bd as B,i as E,o as p,f as _,x as v,c as f,F as y,K as F,t as i,u as m,a as o,X as a,b as S,aj as z,a5 as I,a6 as P}from"./JoFQSik9.js";import{_ as T}from"./BKAhWZth.js";import"./BdUp3nNt.js";import"./sQNTZNBq.js";import"./BZw8aVXh.js";import"./BK14r1T1.js";import"./Cf_ozb67.js";import"./C87lQMtF.js";import"./BM2BYuY2.js";import"./D-sCvmnZ.js";import"./B92FZ1g3.js";import"./RGGkZJYr.js";import"./DXxiuGCq.js";import"./BMBJnSAB.js";import"./CjsFN-o8.js";import"./1-N0yLDQ.js";import"./K-WBeQ-v.js";import"./56Y_7FHu.js";import"./R1J_LkVd.js";import"./L3qbADmP.js";import"./Cel6GgYv.js";import"./LijCuOwn.js";import"./BrvGPcun.js";import"./ClZaf3ID.js";import"./D8aEg3BZ.js";import"./DTX8-FfK.js";import"./DdIClELx.js";import"./Bcnv4IFf.js";import"./DJse-9-j.js";import"./D0zd4JXZ.js";import"./Bxl7epld.js";import"./3N86B1rU.js";import"./CXQSc-M8.js";import"./DG4EeLIg.js";import"./B3BteicU.js";import"./D9zo_Myw.js";import"./DiZsDeCV.js";import"./BQxgWOyN.js";import"./D8kn6U6N.js";import"./ElL4sWVy.js";import"./CkHyjaJP.js";import"./Bi6GOjoi.js";import"./R92wxnHx.js";import"./CXetEtI4.js";const U={class:"read-only"},j={class:"read-only-content"},q={class:"tw-text-text-tertiary fg-main-12-regular tw-mt-[6px]"},A={class:"fg-main-14-regular tw-break-all"},H={class:"read-only-icon"},K={class:"tw-flex tw-items-center tw-gap-1"},Q={class:"tw-flex tw-flex-col"},X={class:"fg-main-12-regular tw-text-text-tertiary"},G=D({__name:"DepositExternalNowPayment",props:{provider:{}},setup(J){const{show:g}=B(),s=E({amount:0,currency:""}),x=t=>{z(t),g({message:"copied",position:"bottom-right",type:"error"})};return(t,e)=>{const w=h,N=I,V=$,b=T,k=C;return p(),_(k,{"filed-values":a(s),provider:t.provider,"is-form-valid":!0},{default:v(()=>{var n,l,d,c,u;return[(n=t.provider.extra)!=null&&n.address?(p(),f(y,{key:0},[F(i(t.provider.extra.address)+" ",1),m(w,{value:t.provider.extra.address,size:145,level:"H",class:"qr-code"},null,8,["value"]),o("div",null,i(t.$t("crypto_text",{min:t.provider.min_limit})),1),o("div",U,[o("div",j,[o("span",q,i(t.$t("crypto_address")),1),o("span",A,i(t.provider.extra.address),1)]),o("div",H,[m(N,{size:20,name:"copy",class:"tw-cursor-pointer",onClick:e[0]||(e[0]=r=>x(t.provider.extra.address))})])])],64)):(p(),f(y,{key:1},[m(V,{amount:a(s).amount,"onUpdate:amount":e[1]||(e[1]=r=>a(s).amount=r),"min-limit":t.provider.min_limit,"max-limit":t.provider.max_limit},null,8,["amount","min-limit","max-limit"]),(d=(l=t.provider.extra)==null?void 0:l.currencies)!=null&&d.length?(p(),_(b,{key:0,modelValue:a(s).currency,"onUpdate:modelValue":e[2]||(e[2]=r=>a(s).currency=r),"item-list":(c=t.provider.extra)==null?void 0:c.currencies,"default-option":(u=t.provider.extra)==null?void 0:u.currencies[0]},{"selected-option":v(({props:r})=>[o("div",K,[o("div",Q,[o("span",X,i(t.$t("currency")),1),o("span",null,i(r),1)])])]),_:1},8,["modelValue","item-list","default-option"])):S("",!0)],64))]}),_:1},8,["filed-values","provider"])}}}),jt=P(G,[["__scopeId","data-v-eb99c1f8"]]);export{jt as default};
