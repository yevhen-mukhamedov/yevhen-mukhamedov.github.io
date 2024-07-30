import{_ as et}from"./UCCBr-NG.js";import{d as P,a as U,m as X,s as R,o as e,c as l,a1 as Y,aE as J,e as d,t as p,b as _,i as h,f as V,g as t,B as A,n as K,p as G,_ as j,ax as z,j as D,H as B,C as $,h as ot,x as Q,y as Z,X as tt,U as nt,Y as at,aa as lt,R as q,V as it,bq as ct,k as rt,l as ut,T as _t,ac as dt}from"./7PQ9d4dP.js";import{_ as pt}from"./ao6LVzqx.js";import{_ as st}from"./RQfXHScZ.js";import{_ as mt}from"./CXUEa_s4.js";import{_ as gt}from"./Do2gu6g3.js";import{_ as vt}from"./CRGjSqPP.js";import{_ as ht}from"./BwlXDD88.js";import"./D0WEjs_T.js";import"./Z4E70_i9.js";import"./BQWyzQZp.js";const wt={class:"tw-w-full bonus-popup-left-side-list"},ft={key:0,class:"tw-flex tw-items-center tw-py-3 tw-px-2"},bt={class:"tw-text-base"},yt={key:1,class:"tw-w-full selectMethod"},$t={key:2,class:"bonus-popup-left-side-value"},xt={key:0},kt={key:0},Mt={key:1,class:"bonus-popup-left-side-value"},Bt=P({__name:"CardList",props:{list:{type:Array,default:()=>[]}},setup(w){const{t:r}=U(),m=X(),{getCurrency:b}=R(m);return(u,I)=>{const a=st,i=mt,L=G;return e(),l("ul",wt,[(e(!0),l(Y,null,J(w.list,(s,g)=>{var o;return e(),l("li",{key:`${s.title}_${s.value}_${g}`,class:"bonus-popup-left-side-list-item"},[s.type!=="list"?(e(),l("div",ft,[d("span",bt,p(s.title),1),_(a,{class:"bonus-popup-left-side-tooltip",text:s.tooltip},null,8,["text"])])):h("",!0),s.type==="list"&&((o=s.value)!=null&&o.length)?(e(),l("div",yt,[_(i,{"model-value":s.value[0],"default-option":s.value[0],"item-list":s.value},null,8,["model-value","default-option","item-list"])])):(e(),l("div",$t,[s.type!=="translation"?(e(),l("span",xt,[V(p(s.value)+" ",1),s.type==="percent"?(e(),l("span",kt," %")):h("",!0)])):(e(),l("span",Mt,p(t(r)(s.value)),1)),s.type==="amount"?(e(),A(L,{key:2,class:"tw-ms-1 tw-max-w-4",src:t(K)(t(b)),alt:t(b)},null,8,["src","alt"])):h("",!0)]))])}),128))])}}}),It=j(Bt,[["__scopeId","data-v-c9d50075"]]),Ct=w=>(Q("data-v-9b5d2d30"),w=w(),Z(),w),St={class:"bonus-popup-left"},Nt={class:"tw-relative"},Lt=Ct(()=>d("div",{class:"tw-flex tw-absolute tw-bg-black tw-white-space"},null,-1)),Tt={class:"tw-mx-4"},At={class:"tw-mt-4"},Ot={key:0,class:"tw-mt-6"},Vt={class:"tw-flex tw-items-center"},Pt={class:"tw-ml-1"},Rt={key:1,class:"tw-mt-6"},jt={class:"tw-flex tw-items-center"},Et={class:"tw-ml-1"},Gt=P({__name:"BonusModalLeftSide",setup(w){const{t:r}=U(),m=z(),b=D(),{getCurrentBonus:u}=R(m),I=B(()=>{var g,o;const s=b.isMobile||b.isTablet;return(g=u.value)!=null&&g.mobile_banner&&s?u.value.mobile_banner:(o=u.value)==null?void 0:o.banner}),a=B(()=>{var s,g;return(g=(s=u.value)==null?void 0:s.extra)==null?void 0:g.expiration_after}),i=B(()=>{var g;if(!((g=u.value)!=null&&g.wagering))return[];const s=u.value.wagering;return Object.keys(s).map(o=>{var y,S,O,c,n;const f=Array.isArray(s[o])&&!!((y=s[o])!=null&&y.length),C=f?(S=s[o][0])==null?void 0:S.value:(O=s[o])==null?void 0:O.value,k=f?(c=s[o][0])==null?void 0:c.type:(n=s[o])==null?void 0:n.type;return{title:r(o),value:C,tooltip:r(`${o}_tooltip`),type:k}})}),L=B(()=>{var g;if(!((g=u.value)!=null&&g.activation))return[];const s=u.value.activation;return Object.keys(s).map(o=>{var y,S,O,c,n;const f=Array.isArray(s[o])&&!!((y=s[o])!=null&&y.length),C=f?(S=s[o][0])==null?void 0:S.value:(O=s[o])==null?void 0:O.value,k=f?(c=s[o][0])==null?void 0:c.type:(n=s[o])==null?void 0:n.type;return{title:r(o),value:C,tooltip:r(`${o}_tooltip`),type:k}})});return(s,g)=>{var y,S;const o=G,f=pt,C=ot,k=It;return e(),l("div",St,[d("div",Nt,[Lt,t(I)?(e(),A(o,{key:0,src:t(I),class:"tw-block tw-min-h-[164px] tw-aspect-[340/164] mobile:tw-w-full",alt:"bonus banner"},null,8,["src"])):h("",!0),t(a)?(e(),A(f,{key:1,id:"bonus-timer-modal","end-date":t(a),class:"tw-absolute tw-bottom-2 tw-right-2","is-bonus":""},{days:$(()=>[V(p(t(r)("days")),1)]),hours:$(()=>[V(p(t(r)("hours")),1)]),minutes:$(()=>[V(p(t(r)("min")),1)]),seconds:$(()=>[V(p(t(r)("sec")),1)]),_:1},8,["end-date"])):h("",!0)]),d("div",Tt,[d("div",At,[_(gt,{bonus:t(u),"show-bonus-info":!1},null,8,["bonus"])]),(y=t(L))!=null&&y.length?(e(),l("div",Ot,[d("div",Vt,[_(C,{color:"--gray-200",height:16,width:16,class:"title-icon",name:"crown"}),d("span",Pt,p(t(r)("activation")),1)]),_(k,{list:t(L),class:"tw-mt-2"},null,8,["list"])])):h("",!0),(S=t(i))!=null&&S.length?(e(),l("div",Rt,[d("div",jt,[_(C,{color:"--gray-200",height:16,width:16,class:"title-icon",name:"arcade"}),d("span",Et,p(t(r)("wagering")),1)]),_(k,{list:t(i),class:"tw-mt-2"},null,8,["list"])])):h("",!0)])])}}}),Ut=j(Gt,[["__scopeId","data-v-9b5d2d30"]]),zt={class:"bonus-right-side-list"},Dt={class:"item-title"},Ft={key:0,class:"item-value"},Ht={key:1,class:"item-value"},qt={key:2,class:"item-value"},Wt={key:3,class:"tw-ms-1 tw-flex tw-items-center"},Xt=P({__name:"InfoList",props:{list:{type:Array,default:()=>[]}},setup(w){const r=X(),{getCurrency:m}=R(r);return(b,u)=>{const I=G;return e(),l("ul",zt,[(e(!0),l(Y,null,J(w.list,(a,i)=>(e(),l("li",{key:`${a.title}_${i}`,class:"bonus-right-side-list-item"},[d("span",Dt,p(a.title),1),a.type==="list"?(e(),l("span",Ft,p(a.value.join(", ")),1)):a.type==="translation"?(e(),l("span",Ht,p(b.$t(a.value)),1)):(e(),l("span",qt,p(a.value),1)),a.type==="amount"?(e(),l("span",Wt,[_(I,{src:t(K)(t(m)),alt:t(m)},null,8,["src","alt"])])):h("",!0)]))),128))])}}}),W=j(Xt,[["__scopeId","data-v-79d481b3"]]),Yt={class:"picture"},Jt=P({__name:"BonusProviderItem",props:{classList:{default:""},linkTo:{default:"/"},item:{}},setup(w){const r=tt(),m=w,b=B(()=>typeof m.linkTo=="string"?{path:m.linkTo}:m.linkTo);return(u,I)=>{const a=G,i=at;return e(),A(i,{class:nt(["ng-provider-item",u.classList]),to:t(r)(t(b))},{default:$(()=>[d("div",Yt,[_(a,{src:u.item.slider_url,alt:u.item.soft,class:"imgs"},null,8,["src","alt"])])]),_:1},8,["class","to"])}}}),Kt=w=>(Q("data-v-5415a505"),w=w(),Z(),w),Qt={class:"bonus-popup-right"},Zt={class:"bonus-popup-right-title"},ts=["innerHTML"],ss={key:0,class:"tw-mt-8"},es={class:"bonus-accordion-title"},os={class:"tw-mt-3"},ns={key:0,class:"bonus-info-wagering"},as={class:"tw-flex tw-items-center tw-text-text-secondary"},ls=Kt(()=>d("div",{class:"ng-divider tw-my-2"},null,-1)),is={key:1,class:"tw-mt-8","is-open":!0},cs={class:"bonus-accordion-title"},rs={key:2,class:"tw-mt-8"},us={class:"bonus-accordion-title"},_s=P({__name:"BonusModalRightSide",setup(w){const r=lt(),m=D(),b=tt(),u=z(),{closeAllModals:I}=m,{t:a}=U(),{getCurrentBonus:i}=R(u),L=B(()=>{var c,n,v,M;return(n=(c=i.value)==null?void 0:c.info)!=null&&n.providers?(M=(v=i.value)==null?void 0:v.info)==null?void 0:M.providers:[]}),s=B(()=>{var c,n,v;return((v=(n=(c=i.value)==null?void 0:c.info)==null?void 0:n.games)==null?void 0:v.items)||[]}),g=B(()=>{var c,n;return(n=(c=i.value)==null?void 0:c.info)==null?void 0:n.game}),o=B(()=>{const v=m.isMobile||m.isTablet;return L.value.length>=(v?9:14)}),f=B(()=>{const v=m.isMobile||m.isTablet;return s.value.length>=(v?6:8)}),C=B(()=>{var v,M,T;if(!((v=i==null?void 0:i.value)!=null&&v.info))return[];const{...c}=i.value.info,n={...(M=i.value)==null?void 0:M.activation,...(T=i.value)==null?void 0:T.wagering,...c};return Object.keys(n).map(x=>{var N,E,F,H;return{title:a(x),value:Array.isArray(n[x])?(N=n[x][0])==null?void 0:N.value:(E=n[x])==null?void 0:E.value,type:Array.isArray(n[x])?(F=n[x])==null?void 0:F.type:(H=n[x])==null?void 0:H.type,tooltip:a(`${x}_tooltip`)}})}),k=B(()=>{var n,v,M,T;return(v=(n=i.value)==null?void 0:n.info)!=null&&v.wagering_overrides?((T=(M=i.value)==null?void 0:M.info)==null?void 0:T.wagering_overrides).map(x=>({title:x.label,value:x.value})):[]}),y=()=>{u.setVisibleBonusModal(!1),I()},S=()=>{var c;y(),r.push(b({name:q.bonus_wagering_id,params:{id:(c=i.value)==null?void 0:c.id}}))},O=c=>{y(),r.push(b({name:q.games_id,params:{id:c}}))};return(c,n)=>{const v=st,M=vt,T=it,x=ht;return e(),l("div",Qt,[d("div",null,[d("span",Zt,p(t(i).name),1)]),d("div",{class:"bonus-popup-right-description",innerHTML:t(i).desc},null,8,ts),t(C).length||t(k).length?(e(),l("div",ss,[_(M,{"size-icon":24},{title:$(()=>[d("span",es,p(t(a)("bonus_info")),1)]),content:$(()=>{var N;return[d("div",os,[_(W,{list:t(C),class:"tw-px-2"},null,8,["list"]),(N=t(k))!=null&&N.length?(e(),l("div",ns,[d("div",as,[V(p(t(a)("wagering_override_modal"))+" ",1),_(v,{class:"tw-h-4 tw-ms-2 tw-text-text-secondary",text:t(a)("wagering_override_modal_tooltip")},null,8,["text"])]),ls,_(W,{list:t(k)},null,8,["list"])])):h("",!0)])]}),_:1})])):h("",!0),t(L).length?(e(),l("div",is,[_(M,{"is-open":!0,"size-icon":24,class:"bonus-accordion-providers"},{title:$(()=>[d("span",cs,p(t(a)("providers")),1)]),content:$(()=>[_(T,{list:t(L),class:"tw-grid tw-gap-2 tw-grid-cols-3 desktop:tw-grid-cols-4"},{item:$(({item:N})=>[_(Jt,{class:"tw-mt-4","link-to":{path:"/games",query:{provider:N.id}},item:N,onClick:y},null,8,["link-to","item"])]),_:1},8,["list"]),t(o)?(e(),l("div",{key:0,class:"mask-show-all",onClick:S},p(t(a)("show_more")),1)):h("",!0)]),_:1})])):h("",!0),t(s).length||t(g)?(e(),l("div",rs,[_(M,{"is-open":!0,"size-icon":24,class:"bonus-accordion-providers"},{title:$(()=>[d("span",us,p(t(a)("games")),1)]),content:$(()=>{var N;return[(N=t(s))!=null&&N.length?(e(),A(T,{key:0,"key-name":"bonus-game",list:t(s),class:"tw-mt-4 tw-grid tw-gap-2 tw-grid-cols-3 desktop:tw-grid-cols-4 desktop:tw-gap-3"},{item:$(({item:E})=>[_(x,{"is-linkable":!1,game:E,onGameClick:O},null,8,["game"])]),_:1},8,["list"])):h("",!0),t(f)?(e(),l("div",{key:1,class:"mask-show-all",onClick:S},p(t(a)("show_more")),1)):h("",!0)]}),_:1})])):h("",!0)])}}}),ds=j(_s,[["__scopeId","data-v-5415a505"]]),ps={key:0,class:"mobile:tw-block tw-flex"},ms=P({__name:"BonusModal",setup(w){const{loading:r,setLoading:m}=ct(),b=z(),u=D(),{getCurrentBonusId:I,getVisibleBonusModal:a,getCurrentBonus:i}=R(b),{getBonusById:L,setVisibleBonusModal:s}=b,g=()=>{s(!1),u.shiftOpenedModals()};return rt(async()=>{if(typeof I.value!="number")return g();m(!0);try{await L(I.value)}catch(o){console.error("BonusModal.vue onMounted error: ",o)}finally{m(!1)}}),ut(()=>{g()}),(o,f)=>{const C=et,k=dt;return e(),A(k,null,{default:$(()=>[(e(),A(_t,{to:"#globalModal"},[t(a)?(e(),A(C,{key:0,"modal-width":"944px","modal-max-width":"90vw",class:"bonus-modal","without-bg":"","fullscreen-mode":"","without-header":"",loading:t(r),onClose:f[2]||(f[2]=y=>t(s)(!1))},{content:$(()=>[t(i)?(e(),l("div",ps,[_(Ut,{onClose:f[0]||(f[0]=y=>t(s)(!1))}),_(ds,{onClose:f[1]||(f[1]=y=>t(s)(!1))})])):h("",!0)]),_:1},8,["loading"])):h("",!0)]))]),_:1})}}}),Bs=j(ms,[["__scopeId","data-v-c47b541e"]]);export{Bs as default};
