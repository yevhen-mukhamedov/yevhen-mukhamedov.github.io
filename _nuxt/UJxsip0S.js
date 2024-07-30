import{d as oe,a as le,L as ve,I as re,m as he,s as J,j as ce,a0 as k,aJ as be,a8 as Le,o,c as g,b as _,g as e,C as s,e as r,a1 as ne,aE as ke,B as y,t as n,U as xe,i as b,n as L,f as w,a2 as we,aK as Ce,K as Ye,au as Te,p as $e,h as Ve,aL as Oe,a4 as Ne,_ as ie,H as Ie,O as ze,T as He,ab as Fe}from"./7PQ9d4dP.js";import{a as Se,_ as Ue}from"./CXUEa_s4.js";import{C as q,_ as De,M as Be}from"./D5X7BfX4.js";import{_ as Me}from"./D8jXsFdl.js";import{_ as Re}from"./RQfXHScZ.js";import{_ as Pe}from"./DUlDJf1u.js";import{_ as Ee}from"./BjUcVok3.js";import{d as te}from"./Z4E70_i9.js";import{_ as Ae}from"./UCCBr-NG.js";import"./BQWyzQZp.js";import"./D0WEjs_T.js";import"./DqC-nx6a.js";import"./DD170oM2.js";import"./C3H6epDl.js";import"./DPPwigSW.js";const je={class:"payment-history"},Ke={class:"tw-grid tw-grid-cols-3 tw-gap-2"},Ge={class:"tw-text-center"},qe={key:0},Je={key:0},Qe={key:1},We={class:"tw-flex tw-items-center"},Xe={key:0},Ze={class:"tw-flex tw-gap-1 tw-items-center"},et={class:"tw-truncate"},tt={key:0},at={key:0},st={key:1},nt={class:"tw-flex tw-items-center"},ot={key:0},lt={class:"tw-flex tw-gap-1 tw-items-center"},rt={class:"tw-truncate"},ct=oe({__name:"PaymentHistory",setup(_e){const{t}=le(),{platformCommasFormat:x}=ve(),C=["8dfa5f04-fa62-4634-a170-d65019070b5f","6ed534e6-fe06-428f-b15f-e769cbbfe1c4","45cab422-ae18-45d9-acde-e0ddead0091a"],Y=[{key:"id",title:t("id"),align:"left"},{key:"created_at",title:t("date"),align:"left"},{key:"type",title:t("type"),align:"left"},{key:"initiator",title:t("iniciator"),align:"left"},{key:"amount",title:t("amount"),align:"left"},{key:"status",title:t("status"),align:"left"},{key:"reason",title:t("reason_for_transaction"),align:"left"},{key:"transactionId",title:t("transaction_id"),align:"left"}],P={1:t("deposit"),2:t("withdraw"),3:t("bonus"),4:t("deposit"),30:t("withdrawal_fee")},E={1:t("pending_ph"),2:t("success_ph"),3:t("rejected_ph"),5:t("payment_error_ph")},d=[{label:t("all"),key:0},{label:t("deposit"),key:1},{label:t("menu_withdrawal"),key:2},{label:t("player_to_player_deposit"),key:4},{label:t("withdrawal_fee"),key:30}],R=re(),{fetchPaymentStatTotals:V}=R,S=he(),{getUserData:z}=J(S),{userPaymentHistory:H}=S,F=ce(),{isLessContainerTablet:h}=J(F),f=k({total_deposits:"",total_wagered:0,withdrawable:0}),p=k({date_start:"",date_end:"",order:"id",direction:"desc",search:"",page:1}),$=k({}),U=k([]),O=k(!1),A=async()=>{try{O.value=!0;const c=await V(),m=await H(Ce(p.value));f.value=c.data,$.value=m}catch(c){console.error(c)}finally{O.value=!1}},Q=c=>{var D,M;const m=((D=c==null?void 0:c.date)==null?void 0:D.length)>0;p.value={...p.value,date_start:m?c.date[0]:"",date_end:m?c.date[1]:"",types:c.type,search:c.search},((M=p.value)==null?void 0:M.types)===0&&delete p.value.types,A()},ae=({page:c})=>{p.value.page=c,A()},i=()=>{U.value=[{target:"date",componentName:q.DATE_PICKER,props:{modelValue:"",isDisabled:!1,range:!0,inputName:"date",labelText:t("date"),multiCalendar:!0}},{target:"type",componentName:q.SINGLE_SELECTOR,props:{modelValue:"",additionalLabel:t("type"),displayedOption:"label",returnedOption:"key",defaultOption:d[0],itemList:d,isAllowEmpty:!1}}]},u=c=>{var m,D,M;return((m=c.extra)==null?void 0:m.txId)||((D=c.extra)==null?void 0:D.walletId)||((M=c.extra)==null?void 0:M.transactionId)},v=k(""),N=c=>{Ye(c),v.value=c,setTimeout(()=>{v.value=""},1e3)};return be(()=>{A(),i()}),(c,m)=>{const D=De,M=Me,se=Te,W=$e,B=Re,j=Ve,K=Oe,X=Pe,Z=Ee,ee=Se,l=Ne,G=Le("tooltip");return o(),g("div",je,[_(D,{list:e(U),class:"filter-list",onChange:Q},null,8,["list"]),_(l,{loading:e(O),class:"tw-flex tw-flex-col tw-grow tw-overflow-hidden"},{default:s(()=>{var de,pe,ue,me,ye,fe,ge;return[r("div",Ke,[(o(!0),g(ne,null,ke(e(f),(a,I)=>(o(),y(M,{key:`${a}-${I}`,name:I,value:a},null,8,["name","value"]))),128))]),(pe=(de=e($))==null?void 0:de.items)!=null&&pe.length?(o(),g(ne,{key:1},[(me=(ue=e($))==null?void 0:ue.items)!=null&&me.length?(o(),g("div",{key:0,class:xe(["table-wrapper",{"table-wrapper--desktop":!e(h)}])},[e(h)?(o(),y(X,{key:0,header:Y,list:e($).items},{"created_at-value":s(({item:a})=>[r("div",null,n(e(te)(a.created_at).format("YYYY/MM/DD")),1)]),"type-value":s(({item:a})=>[a.type===4?(o(),g("div",qe,[a.sum<0?(o(),g("span",Je,n(e(t)("withdraw")),1)):(o(),g("span",Qe,n(P[4]),1))])):b("",!0),r("div",null,n(P[a.type]||""),1)]),"amount-value":s(({item:a})=>[r("div",We,[_(W,{src:e(L)(e(z).currency),alt:"currency",class:"tw-mr-1 payment-history-img"},null,8,["src"]),w(" "+n(e(x)(C,a.sum)),1)])]),"status-value":s(({item:a})=>[r("div",null,n(E[a.status]),1)]),"reason-value":s(({item:a})=>{var I;return[(I=a.extra)!=null&&I.reason?(o(),g("div",Xe,[_(B,null,{content:s(()=>{var T;return[w(n((T=a.extra)==null?void 0:T.reason),1)]}),target:s(()=>{var T;return[w(n((T=a.extra)==null?void 0:T.reason),1)]}),_:2},1024)])):b("",!0)]}),"transactionId-value":s(({item:a})=>[r("div",Ze,[u(a)?we((o(),y(K,{key:0,"color-type":"transparent"},{default:s(()=>[_(j,{size:24,name:"copy",onClick:I=>N(u(a))},null,8,["onClick"])]),_:2},1024)),[[G,{content:c.$t("copied"),shown:e(v)===u(a),triggers:["click"]}]]):b("",!0),r("div",et,n(u(a)),1)])]),_:1},8,["list"])):(o(),y(Z,{key:1,header:Y,list:e($).items},{created_at:s(({item:a})=>[r("div",null,n(e(te)(a.created_at).format("YYYY/MM/DD")),1)]),type:s(({item:a})=>[a.type===4?(o(),g("div",tt,[a.sum<0?(o(),g("span",at,n(e(t)("withdraw")),1)):(o(),g("span",st,n(P[4]),1))])):b("",!0),r("div",null,n(P[a.type]||""),1)]),initiator:s(({item:a})=>[_(B,{text:a.initiator},{content:s(()=>[w(n(a.initiator),1)]),target:s(()=>[w(n(a.initiator),1)]),_:2},1032,["text"])]),amount:s(({item:a})=>[r("div",nt,[_(W,{src:e(L)(e(z).currency),alt:"currency",class:"tw-mr-1 payment-history-img"},null,8,["src"]),w(" "+n(e(x)(C,a.sum)),1)])]),status:s(({item:a})=>[r("div",null,n(E[a.status]),1)]),reason:s(({item:a})=>{var I;return[(I=a.extra)!=null&&I.reason?(o(),g("div",ot,[_(B,null,{content:s(()=>{var T;return[w(n((T=a.extra)==null?void 0:T.reason),1)]}),target:s(()=>{var T;return[w(n((T=a.extra)==null?void 0:T.reason),1)]}),_:2},1024)])):b("",!0)]}),transactionId:s(({item:a})=>[r("div",lt,[u(a)?we((o(),y(K,{key:0,"color-type":"transparent"},{default:s(()=>[_(j,{size:24,name:"copy",onClick:I=>N(u(a))},null,8,["onClick"])]),_:2},1024)),[[G,{content:c.$t("copied"),shown:e(v)===u(a),triggers:["click"]}]]):b("",!0),r("div",rt,n(u(a)),1)])]),_:1},8,["list"]))],2)):b("",!0)],64)):(o(),y(se,{key:0},{content:s(()=>[r("div",Ge,n(c.$t("no_result")),1)]),_:1})),(ye=e(p))!=null&&ye.page&&((ge=(fe=e($))==null?void 0:fe.pagination)==null?void 0:ge.total_pages)>1?(o(),y(ee,{key:2,"current-page":e(p).page,pages:e($).pagination.total_pages,"with-per-page":!1,onChange:ae},null,8,["current-page","pages"])):b("",!0)]}),_:1},8,["loading"])])}}}),it=ie(ct,[["__scopeId","data-v-158b2fcc"]]),_t={class:"casino-history"},dt={class:"tw-grid tw-grid-cols-3 tw-gap-2"},pt={class:"tw-text-center"},ut={class:"tw-flex tw-items-center"},mt={class:"tw-flex tw-items-center"},yt={class:"tw-flex tw-items-center"},ft={class:"tw-flex tw-items-center"},gt={class:"tw-flex tw-items-center"},wt={class:"tw-flex tw-items-center"},vt=oe({__name:"CasinoHistory",setup(_e){const{t}=le(),{platformCommasFormat:x}=ve(),C=["6ed534e6-fe06-428f-b15f-e769cbbfe1c4","45cab422-ae18-45d9-acde-e0ddead0091a"],Y=[{key:"id",title:t("id"),align:"left"},{key:"preview",title:t("preview"),align:"left"},{key:"game",title:t("name"),align:"left"},{key:"provider",title:t("provider"),align:"left"},{key:"created_at",title:t("date"),align:"left"},{key:"type",title:t("type"),align:"left"},{key:"balance",title:t("balance"),align:"left"},{key:"amount",title:t("amount"),align:"left"},{key:"bonus_amount",title:t("bonusAmount"),align:"left"}],P={type:Be.ACCORDION},E=he(),{getUserData:d}=J(E),R=re(),{fetchCasinoStatTotals:V,fetchCasinoTransactions:S}=R,z=ce(),{isLessContainerTablet:H}=J(z),F=k({total_bets:0,total_wagered:0,total_wins:0}),h=k({date_start:"",date_end:"",order:"id",direction:"desc",search:"",page:1}),f=k({}),p=k(!1),$=k([]),U=Ie(()=>{var i,u;if((u=(i=f.value)==null?void 0:i.filters)!=null&&u.type){let v=[{key:0,label:t("all")}];return v=[...v,...Object.entries(f.value.filters.type).map(N=>({key:Number(N[0]),label:t(N[1])}))],v}return[]}),O=async()=>{p.value=!0;try{const i=await S(Ce(h.value)),{data:u}=await V();F.value=u,f.value=i.data}catch(i){console.error("CasinoHistory.vue -> getData:",i)}finally{p.value=!1}},A=({page:i})=>{h.value.page=i,O()},Q=i=>{var v,N;const u=((v=i==null?void 0:i.date)==null?void 0:v.length)>0;h.value={...h.value,page:1,date_start:u?i.date[0]:"",date_end:u?i.date[1]:"",search:i.search,"type[]":i.type},((N=h.value)==null?void 0:N.types)===0&&delete h.value["type[]"],O()},ae=()=>{$.value=[{target:"search",componentName:q.SEARCH_INPUT,props:{placeholderText:t("search")+"...",modelValue:"",isRequired:!0},mobile:{class:"tw-col-span-6"}},{target:"date",componentName:q.DATE_PICKER,props:{modelValue:"",modelType:"yyyy-MM-dd",format:"yyyy-MM-dd",isDisabled:!1,range:!0,inputName:"date",labelText:t("date"),multiCalendar:!0},mobile:{redirect:!0}},{target:"type",componentName:q.SINGLE_SELECTOR,props:{modelValue:"",additionalLabel:t("type"),displayedOption:"label",returnedOption:"key",defaultOption:U.value?U.value[0]:null,itemList:U.value,isAllowEmpty:!1},mobile:{redirect:!0}}]};return be(async()=>{await O(),ae()}),(i,u)=>{const v=De,N=Me,c=Te,m=$e,D=Pe,M=Ee,se=Se,W=Ne;return o(),g("div",_t,[_(v,{"mobile-settings":P,list:e($),class:"filter-list",onChange:Q,onInput:Q},null,8,["list"]),_(W,{loading:e(p),class:"tw-flex tw-flex-col tw-grow tw-overflow-hidden"},{default:s(()=>{var B,j,K,X,Z,ee;return[r("div",dt,[(o(!0),g(ne,null,ke(e(F),(l,G)=>(o(),y(N,{key:`${l}-${G}`,name:G,value:l},null,8,["name","value"]))),128))]),!((j=(B=e(f))==null?void 0:B.items)!=null&&j.length)&&!e(p)?(o(),y(c,{key:0},{content:s(()=>[r("div",pt,n(i.$t("no_result")),1)]),_:1})):b("",!0),(X=(K=e(f))==null?void 0:K.items)!=null&&X.length?(o(),g("div",{key:1,class:xe(["table-wrapper",{"table-wrapper--desktop":!e(H)}])},[e(H)?(o(),y(D,{key:0,header:Y,list:e(f).items},{preview:s(({item:l})=>[_(m,{src:l.banner_vertical||l.banner_horizontal,alt:"preview",class:"mobile-table-preview"},null,8,["src"])]),"created_at-value":s(({item:l})=>[r("div",null,n(e(te)(l.created_at).format("YYYY/MM/DD")),1)]),"balance-value":s(({item:l})=>[r("div",ut,[_(m,{src:e(L)(e(d).currency),alt:"currency",class:"tw-mr-1 tw-size-4"},null,8,["src"]),w(" "+n(e(x)(C,l.balance)),1)])]),"type-value":s(({item:l})=>[r("div",null,n(e(t)(e(f).filters.type[l.type])),1)]),"amount-value":s(({item:l})=>[r("div",mt,[_(m,{src:e(L)(e(d).currency),alt:"currency",class:"tw-mr-1 tw-size-4"},null,8,["src"]),w(" "+n(e(x)(C,l.sum)),1)])]),"bonus_amount-value":s(({item:l})=>[r("div",yt,[_(m,{src:e(L)(e(d).currency),alt:"currency",class:"tw-mr-1 tw-size-4"},null,8,["src"]),w(" "+n(e(x)(C,l.bonus_sum)),1)])]),_:1},8,["list"])):(o(),y(M,{key:1,header:Y,list:e(f).items},{preview:s(({item:l})=>[_(m,{src:l.banner_vertical||l.banner_horizontal||"https://via.placeholder.com/150",alt:"preview",class:"tw-w-16 tw-min-w-16 tw-h-20 tw-rounded"},null,8,["src"])]),created_at:s(({item:l})=>[r("div",null,n(e(te)(l.created_at).format("YYYY/MM/DD")),1)]),balance:s(({item:l})=>[r("div",ft,[_(m,{src:e(L)(e(d).currency),alt:"currency",class:"tw-mr-1 tw-size-4"},null,8,["src"]),w(" "+n(e(x)(C,l.balance)),1)])]),type:s(({item:l})=>[r("div",null,n(e(t)(e(f).filters.type[l.type])),1)]),amount:s(({item:l})=>[r("div",gt,[_(m,{src:e(L)(e(d).currency),alt:"currency",class:"tw-mr-1 tw-size-4"},null,8,["src"]),w(" "+n(e(x)(C,l.sum)),1)])]),bonus_amount:s(({item:l})=>[r("div",wt,[_(m,{src:e(L)(e(d).currency),alt:"currency",class:"tw-mr-1 tw-size-4"},null,8,["src"]),w(" "+n(e(x)(C,l.bonus_sum)),1)])]),_:1},8,["list"]))],2)):b("",!0),((ee=(Z=e(f))==null?void 0:Z.pagination)==null?void 0:ee.total_pages)>1?(o(),y(se,{key:2,"current-page":e(h).page,pages:e(f).pagination.total_pages,"with-per-page":!1,onChange:A},null,8,["current-page","pages"])):b("",!0)]}),_:1},8,["loading"])])}}}),ht=ie(vt,[["__scopeId","data-v-e798941f"]]),bt={class:"tw-flex tw-items-center"},kt={class:"content-wrapper"},xt={class:"tw-overflow-hidden tw-flex tw-flex-col tw-grow tw-mt-2 desktop:tw-mt-4"},Ct=oe({__name:"UserTransactions",setup(_e){const{t}=le(),x=ce(),{isMobile:C}=J(x),Y=re(),{closeModal:P}=Y,E=[{key:"payment",label:t("payment_history")},{key:"casino",label:t("casino_transactions")}],d=k("payment"),R=Ie(()=>E.find(V=>V.key===d.value));return(V,S)=>{const z=Fe,H=Ue,F=it,h=ht,f=Ae;return o(),y(He,{to:"#globalModal"},[_(f,{"modal-width":"100%","modal-max-width":"896px","is-footer":!1,class:"user-history",onClose:e(P)},{title:s(()=>[r("div",bt,[r("h2",null,n(V.$t("transaction_history")),1)])]),content:s(()=>[r("div",kt,[e(C)?(o(),y(H,{key:1,"item-list":E,"displayed-option":"label","returned-option":"key","additional-label":e(t)("transaction_history"),"default-option":e(R),"onUpdate:modelValue":S[1]||(S[1]=p=>d.value=p)},null,8,["additional-label","default-option"])):(o(),y(z,{key:0,modelValue:e(d),"onUpdate:modelValue":S[0]||(S[0]=p=>ze(d)?d.value=p:null),tabs:E,type:"primary"},null,8,["modelValue"])),r("div",xt,[e(d)==="payment"?(o(),y(F,{key:0})):e(d)==="casino"?(o(),y(h,{key:1})):b("",!0)])])]),_:1},8,["onClose"])])}}}),Ft=ie(Ct,[["__scopeId","data-v-95aeccdc"]]);export{Ft as default};
