var ot=Object.defineProperty;var lt=(n,s,t)=>s in n?ot(n,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[s]=t;var Te=(n,s,t)=>lt(n,typeof s!="symbol"?s+"":s,t);import{d as W,a as ze,ai as rt,j as je,s as A,bo as it,bm as We,bn as re,H as te,o as i,c as L,b as I,N as ct,g as e,e as _,a2 as Ie,bt as Ce,t as N,B as v,i as E,U as Ge,h as He,_ as be,al as V,p as qe,A as Je,ap as ut,a7 as xe,a0 as ne,k as Ae,l as Qe,O as Le,m as dt,n as Ee,w as Ne,C as de,f as $e,aQ as De,ab as mt,aS as Ue,X as Ze,aa as et,ar as tt,a9 as _t,W as Be,aL as nt,aM as pt,b3 as we,bf as gt,aU as Ye,bH as ft,F as bt,aZ as ke,aq as vt,a4 as ht,T as wt,bg as yt,b4 as ye}from"./7PQ9d4dP.js";import{_ as St}from"./BQWyzQZp.js";import{_ as at}from"./C3H6epDl.js";import{_ as Et}from"./CXUEa_s4.js";import{u as $t}from"./D0WEjs_T.js";import{_ as kt,a as It}from"./ao6LVzqx.js";import{_ as Ct}from"./Cm3F6K_u.js";import{_ as Nt}from"./BwlXDD88.js";const Bt={class:"status-btn-content"},Gt=W({__name:"BattleStatusButton",props:{battle:{}},setup(n){const{t:s}=ze(),t=n,o=rt(),l=je(),{isLessContainerTablet:g}=A(l),d={...it,[We.AVAILABLE_KEY]:re.PLAY},D=te(()=>{var p;return!g.value&&((p=o==null?void 0:o.params)==null?void 0:p.id)}),C=te(()=>t.battle.timer>0&&t.battle.timer<=30),r=te(()=>C.value&&y.value!==re.FINISHED?{name:"trophy",width:"16",height:"16"}:y.value===re.CANCELED?{name:"block",width:"16",height:"16"}:y.value===re.FINISHED?{name:re.FINISHED,folder:"pvp",width:"16",height:"16"}:{name:re.PLAY,folder:"pvp",width:"16",height:"16"}),y=te(()=>C.value&&t.battle.battle_status!==We.FINISHED_KEY?re.RESULTS_IN:d[t.battle.battle_status]),w=te(()=>[re.CANCELED,re.DELETED,re.FINISHED].includes(y.value));return(p,P)=>{const a=He,f=kt;return i(),L("div",{class:Ge(["status-btn",[e(y)]])},[I(a,ct({class:"status-btn-icon"},e(r)),null,16),_("div",Bt,[Ie(_("span",{class:"tw-mr-1"},N(e(s)(`status_bar_${e(y)}`)),513),[[Ce,e(D)]]),p.battle.timer&&!e(w)?(i(),v(f,{key:0,id:`status-${p.battle.battle_id}-timer`,"hidden-days":!0,"hidden-hours":!0,"end-time":p.battle.timer*1e3},null,8,["id","end-time"])):E("",!0)])],2)}}}),Ft=be(Gt,[["__scopeId","data-v-067e24ed"]]),Pt={key:0,class:"casino-game-error"},xt={class:"fg-title-16-fat"},Lt={class:"fg-main-14-regular tw-text-text-tertiary"},At=W({__name:"CasinoGameError",setup(n){const s=V(),{getGamePageError:t}=A(s);return(o,l)=>{const g=qe,d=Je;return e(t)?(i(),L("div",Pt,[I(g,{src:"/img/casino_game_error.png",alt:"game error"}),_("div",xt,N(o.$t(e(t).title)),1),_("div",Lt,N(o.$t(e(t).description)),1),I(d,{"is-link":!0,"label-key":e(t).buttonText,link:e(t).navigationLink},null,8,["label-key","link"])])):E("",!0)}}}),Tt=be(At,[["__scopeId","data-v-2b3b563a"]]),Dt={class:"favourites-handler"},Mt=W({__name:"FavouritesHandler",props:{gameId:{type:Number,required:!0}},setup(n){const s=ut(),{getObjectList:t}=A(s),{fetchMyFavoritesGames:o,resetActivitiesStore:l}=s,g=V(),{addGameToFavourites:d,removeGameFromFavourites:D}=g,C=xe(),{isLoggedIn:r}=A(C),{setAuthModal:y}=C,w=ne({}),p=ne(!1),P=n,a=async()=>{w.value={};try{if(p.value){const c=await d(P.gameId);c!=null&&c.status?p.value=!0:p.value=!1}else{const c=await D(P.gameId);c!=null&&c.status?p.value=!1:p.value=!0}}catch(c){c&&typeof c=="object"&&(w.value=c)}},f=async()=>{try{await o({}),await $()}catch(c){c&&typeof c=="object"&&(w.value=c)}},$=()=>{p.value=!!t.value.find(c=>c.game_id===P.gameId)},h=te(()=>r.value?"tw-pointer-events-auto":"tw-pointer-events-none"),S=()=>{r.value||y("signUp")};return Ae(()=>{f()}),Qe(()=>{l()}),(c,x)=>{const G=St,O=at;return i(),L("div",Dt,[Object.keys(e(w)).length?(i(),v(G,{key:0,error:e(w),type:"tooltip"},null,8,["error"])):E("",!0),_("div",{class:"action-wrapper",onClick:S},[I(O,{modelValue:e(p),"onUpdate:modelValue":x[0]||(x[0]=U=>Le(p)?p.value=U:null),"is-disabled":!e(r),"is-checked":e(p),type:"fav",classes:e(h),onChange:a},null,8,["modelValue","is-disabled","is-checked","classes"])])])}}}),st=be(Mt,[["__scopeId","data-v-1470b0fb"]]);var Pe=(n=>(n.USD="USD",n.EUR="EUR",n))(Pe||{});const Rt={key:1,class:"game-lobby"},Ot={class:"tw-grid mobileAndTablet:tw-grid-cols-2 tw-gap-2 tw-w-full"},Ut={key:0,class:"tw-ml-auto"},Vt={class:"tw-absolute tw-top-0 tw-right-0"},zt={class:"tw-w-full tw-text-right mobileAndTablet:tw-text-left"},jt={class:"tw-w-full tw-text-text-tertiary"},Ht={class:"tw-text-text-secondary tw-w-1/2"},qt={class:"caption selected"},Wt={class:"caption"},Yt={key:1,class:"tw-flex tw-gap-2 mobileAndTablet:tw-w-full"},Kt=W({__name:"CasinoGameLobby",props:{playNow:{type:Boolean,default:!1},isBattle:{type:Boolean,default:!1}},setup(n){var oe;const{t:s}=ze(),t=xe(),{isLoggedIn:o}=A(t),{setAuthModal:l}=xe(),g=V(),{startDemoGame:d,startRealGame:D,setGameFullScreen:C}=V(),{getGameInfo:r,getGamePageError:y}=A(g),w=je(),{setShowVerificationModal:p}=w,{isDesktop:P,getIsFullscreenGameMode:a,isMultiBalance:f,isHideSingInBtn:$,isHideRegistrationBtn:h}=A(w),S=dt(),{getUserBattle:c}=A(S),x=n,G=ne(!1),O=()=>{G.value=!0},U=ne(((oe=r==null?void 0:r.value)==null?void 0:oe.allowed_currencies[0])??""),z=ne(Pe.USD),K=[{key:Pe.USD,label:"USD",img:Ee("USD")},{key:Pe.EUR,label:"EUR",img:Ee("EUR")}],Y=()=>{Ue(()=>{const b=!P.value||a.value;C(b)})},X=te(()=>f.value?U.value:z.value),ae=async()=>{var b;if(!(x.isBattle&&((b=c==null?void 0:c.value)==null?void 0:b.battle_status)!==2))try{await D(X.value,x.isBattle),Y()}catch(H){const{error_code:ie}=H;[De.PAYMENT_NEED_PROOF_EMAIL,De.PAYMENT_NEED_PROOF_PHONE,De.NEED_KYC_VERIFICATION].includes(ie)&&p(!0)}},F=()=>{d(),Y()},me=te(()=>{var b;return(b=r==null?void 0:r.value)==null?void 0:b.demo});Ne(()=>o.value,()=>_e());const{fetchGameInfo:J}=g,_e=async()=>{var b;if((b=r==null?void 0:r.value)!=null&&b.gameId)try{await J(r.value.gameId)}catch(H){console.error("updateGameInfo CasinoGamePage/CasinoGameLobby.vue",H)}},j=()=>{const{nameModal:b}=$t();b&&l(b)};return Ae(()=>{o.value&&x.playNow&&ae()}),(b,H)=>{var pe,ge,ve,he,fe;const ie=Tt,m=qe,Q=st,le=Et,M=mt,ce=Je;return e(y)?(i(),v(ie,{key:0})):(i(),L("div",Rt,[_("div",Ot,[!e(P)&&((pe=e(r))!=null&&pe.banner_vertical)&&!e(G)?(i(),L("div",Ut,[I(m,{class:"tw-rounded tw-shadow-shadow-md",src:(ge=e(r))==null?void 0:ge.banner_vertical,alt:"game-banner",onerror:O},null,8,["src"])])):E("",!0),e(r)?(i(),L("div",{key:1,class:Ge(["game-lobby__body",{"mobileAndTablet:tw-items-start":!e(G),"mobileAndTablet:tw-items-center":e(G)}])},[_("div",Vt,[e(P)?E("",!0):(i(),v(Q,{key:0,"game-id":e(r).gameId},null,8,["game-id"]))]),_("span",zt,N(e(r).name),1),_("span",jt,N(e(r).soft),1)],2)):E("",!0)]),(((ve=e(r))==null?void 0:ve.allowed_currencies.length)??!1)&&e(o)?(i(),L("div",{key:0,class:Ge(["balance-wrap",{"single-balance-wrap":!e(f)}])},[_("span",Ht,N(e(s)("display_balance_in"))+":",1),e(f)?(i(),v(le,{key:0,modelValue:e(U),"onUpdate:modelValue":H[0]||(H[0]=R=>Le(U)?U.value=R:null),"item-list":(he=e(r))==null?void 0:he.allowed_currencies,"default-option":(fe=e(r))==null?void 0:fe.allowed_currencies[0],class:"currencies-selector"},{"selected-option":de(({props:R})=>[_("div",qt,[I(m,{src:e(Ee)(R),alt:R,class:"currIcon"},null,8,["src","alt"]),$e(" "+N(R),1)])]),option:de(({props:R})=>[_("div",Wt,[I(m,{src:e(Ee)(R),alt:R,class:"currIcon"},null,8,["src","alt"]),$e(" "+N(R),1)])]),_:1},8,["modelValue","item-list","default-option"])):(i(),v(M,{key:1,modelValue:e(z),"onUpdate:modelValue":H[1]||(H[1]=R=>Le(z)?z.value=R:null),class:"single-currency","tab-without-translate":"",tabs:K,type:"default"},null,8,["modelValue"]))],2)):E("",!0),e(y)?E("",!0):(i(),L("div",Yt,[e(o)?(i(),v(ce,{key:0,class:"game-preview-btn","label-key":"play_now",onClick:ae})):!e(o)&&!(e($)&&e(h))?(i(),v(ce,{key:1,class:"game-preview-btn","label-key":"join_now",onClick:j})):E("",!0),e(me)&&!b.isBattle?(i(),v(ce,{key:2,class:"game-preview-btn","label-key":"play_demo","color-type":"outline",onClick:F})):E("",!0)]))]))}}}),Xt=be(Kt,[["__scopeId","data-v-5d59ae64"]]);var Me={dragStart:!0},Jt=(n,s={})=>{let t,o,{bounds:l,axis:g="both",gpuAcceleration:d=!0,legacyTranslate:D=!0,transform:C,applyUserSelectHack:r=!0,disabled:y=!1,ignoreMultitouch:w=!1,recomputeBounds:p=Me,grid:P,position:a,cancel:f,handle:$,defaultClass:h="neodrag",defaultClassDragging:S="neodrag-dragging",defaultClassDragged:c="neodrag-dragged",defaultPosition:x={x:0,y:0},onDragStart:G,onDrag:O,onDragEnd:U}=s,z=!1,K=0,Y=0,X=0,ae=0,F=0,me=0,{x:J,y:_e}=a?{x:(a==null?void 0:a.x)??0,y:(a==null?void 0:a.y)??0}:x;ce(J,_e);let j,se,oe,b,H,ie="",m=!!a;p={...Me,...p};let Q=new Set;const le=document.body.style,M=n.classList;function ce(u=K,B=Y){if(!C){if(D){let q=`${+u}px, ${+B}px`;return Fe(n,"transform",d?`translate3d(${q}, 0)`:`translate(${q})`)}return Fe(n,"translate",`${+u}px ${+B}px ${d?"1px":""}`)}const T=C({offsetX:u,offsetY:B,rootNode:n});Re(T)&&Fe(n,"transform",T)}const pe=(u,B)=>{const T={offsetX:K,offsetY:Y,rootNode:n,currentNode:H};n.dispatchEvent(new CustomEvent(u,{detail:T})),B==null||B(T)},ge=addEventListener;ge("pointerdown",he,!1),ge("pointerup",fe,!1),ge("pointermove",R,!1),Fe(n,"touch-action","none");const ve=()=>{let u=n.offsetWidth/se.width;return isNaN(u)&&(u=1),u};function he(u){if(y||u.button===2)return;if(Q.add(u.pointerId),w&&Q.size>1)return u.preventDefault();if(p.dragStart&&(j=Oe(l,n)),Re($)&&Re(f)&&$===f)throw new Error("`handle` selector can't be same as `cancel` selector");if(M.add(h),oe=function(k,ee){if(!k)return[ee];if(Ve(k))return[k];if(Array.isArray(k))return k;const ue=ee.querySelectorAll(k);if(ue===null)throw new Error("Selector passed for `handle` option should be child of the element on which the action is applied");return Array.from(ue.values())}($,n),b=function(k,ee){if(!k)return[];if(Ve(k))return[k];if(Array.isArray(k))return k;const ue=ee.querySelectorAll(k);if(ue===null)throw new Error("Selector passed for `cancel` option should be child of the element on which the action is applied");return Array.from(ue.values())}(f,n),t=/(both|x)/.test(g),o=/(both|y)/.test(g),Xe(b,oe))throw new Error("Element being dragged can't be a child of the element on which `cancel` is applied");const B=u.composedPath()[0];if(!oe.some(k=>{var ee;return k.contains(B)||((ee=k.shadowRoot)==null?void 0:ee.contains(B))})||Xe(b,[B]))return;H=oe.length===1?n:oe.find(k=>k.contains(B)),z=!0,se=n.getBoundingClientRect(),r&&(ie=le.userSelect,le.userSelect="none"),pe("neodrag:start",G);const{clientX:T,clientY:q}=u,Z=ve();t&&(X=T-J/Z),o&&(ae=q-_e/Z),j&&(F=T-se.left,me=q-se.top)}function fe(u){Q.delete(u.pointerId),z&&(p.dragEnd&&(j=Oe(l,n)),M.remove(S),M.add(c),r&&(le.userSelect=ie),pe("neodrag:end",U),t&&(X=K),o&&(ae=Y),z=!1)}function R(u){if(!z||w&&Q.size>1)return;p.drag&&(j=Oe(l,n)),M.add(S),u.preventDefault(),se=n.getBoundingClientRect();let B=u.clientX,T=u.clientY;const q=ve();if(j){const Z={left:j.left+F,top:j.top+me,right:j.right+F-se.width,bottom:j.bottom+me-se.height};B=Ke(B,Z.left,Z.right),T=Ke(T,Z.top,Z.bottom)}if(Array.isArray(P)){let[Z,k]=P;if(isNaN(+Z)||Z<0)throw new Error("1st argument of `grid` must be a valid positive number");if(isNaN(+k)||k<0)throw new Error("2nd argument of `grid` must be a valid positive number");let ee=B-X,ue=T-ae;[ee,ue]=Qt([Z/q,k/q],ee,ue),B=X+ee,T=ae+ue}t&&(K=Math.round((B-X)*q)),o&&(Y=Math.round((T-ae)*q)),J=K,_e=Y,pe("neodrag",O),ce()}return{destroy:()=>{const u=removeEventListener;u("pointerdown",he,!1),u("pointerup",fe,!1),u("pointermove",R,!1)},update:u=>{var T,q;g=u.axis||"both",y=u.disabled??!1,w=u.ignoreMultitouch??!1,$=u.handle,l=u.bounds,p=u.recomputeBounds??Me,f=u.cancel,r=u.applyUserSelectHack??!0,P=u.grid,d=u.gpuAcceleration??!0,D=u.legacyTranslate??!0,C=u.transform;const B=M.contains(c);M.remove(h,c),h=u.defaultClass??"neodrag",S=u.defaultClassDragging??"neodrag-dragging",c=u.defaultClassDragged??"neodrag-dragged",M.add(h),B&&M.add(c),m&&(J=K=((T=u.position)==null?void 0:T.x)??K,_e=Y=((q=u.position)==null?void 0:q.y)??Y,ce())}}},Ke=(n,s,t)=>Math.min(Math.max(n,s),t),Re=n=>typeof n=="string",Qt=([n,s],t,o)=>{const l=(g,d)=>d===0?0:Math.ceil(g/d)*d;return[l(t,n),l(o,s)]},Xe=(n,s)=>n.some(t=>s.some(o=>t.contains(o)));function Oe(n,s){if(n===void 0)return;if(Ve(n))return n.getBoundingClientRect();if(typeof n=="object"){const{top:o=0,left:l=0,right:g=0,bottom:d=0}=n;return{top:o,right:window.innerWidth-g,bottom:window.innerHeight-d,left:l}}if(n==="parent")return s.parentNode.getBoundingClientRect();const t=document.querySelector(n);if(t===null)throw new Error("The selector provided for bound doesn't exists in the document.");return t.getBoundingClientRect()}var Fe=(n,s,t)=>n.style.setProperty(s,t),Ve=n=>n instanceof HTMLElement,Zt=class{constructor(n,s={}){Te(this,"_dragInstance");Te(this,"_options",{});this.node=n,this._dragInstance=Jt(n,this._options=s)}updateOptions(n){this._dragInstance.update(Object.assign(this._options,n))}set options(n){this._dragInstance.update(this._options=n)}get options(){return this._options}destroy(){this._dragInstance.destroy()}};const en={class:"casino-game-mobile-menu"},tn={class:"casino-game-mobile-menu-wrapper"},nn={class:"casino-game-mobile-menu-heading"},an={class:"casino-game-mobile-menu-title"},sn={class:"casino-game-mobile-menu-soft"},on={key:0,class:"tw-flex tw-flex-col tw-items-center tw-justify-center tw-mt-8"},ln={class:"tw-flex"},rn={class:"tw-text-xl"},cn={class:"battle-stat-list"},un={key:0,class:"battle-stat"},dn={class:"battle-stat-val"},mn={key:1,class:"battle-stat"},_n={class:"battle-stat-val"},pn={key:2,class:"battle-stat"},gn={class:"battle-stat-val"},fn={class:"casino-game-mobile-menu-btn-w"},bn=W({__name:"CasinoGameMobileMenu",props:{gameName:{},gameSoft:{},isBattle:{type:Boolean},battle:{},statInfo:{},isGameLoaded:{type:Boolean}},setup(n){const{setGameFullScreen:s}=V(),t=n,o=ne(!1),l=ne(null),g=ne(!1),d=ne({x:0,y:0}),D=Ze(),C=et(),r=te(()=>{var a,f,$,h,S,c;return(a=t.battle)!=null&&a.battle_type?{max_winning:{name:"winnings",val:Number((f=t==null?void 0:t.statInfo)==null?void 0:f.winnings)||Number(($=t==null?void 0:t.statInfo)==null?void 0:$.winnings).toFixed(2),img:Ee(t.battle.battle_currency)},max_multiplying:{name:"multiplier",val:`x${Number((h=t==null?void 0:t.statInfo)==null?void 0:h.max_multiplayer)||Number((S=t==null?void 0:t.statInfo)==null?void 0:S.max_multiplayer).toFixed(1)}`,icon:"max_multiplying"},consecutive_wins:{name:"consecutive_wins",val:(c=t==null?void 0:t.statInfo)==null?void 0:c.max_consecutive_wins,icon:"consecutive_wins"}}[t.battle.battle_type]:null}),y=()=>{o.value=!o.value,g.value=o.value,Ue(()=>{w()})},w=()=>{const a=document.querySelector(".draggable");if(!a)return;const f=document.documentElement.clientWidth,$=document.documentElement.clientHeight,h=a.clientWidth/2;d.value={x:f/2-h,y:0},l.value=new Zt(a,{position:d.value,onDragEnd:({offsetX:S,offsetY:c})=>{setTimeout(()=>{g.value||p(S,c,a,f,$)},100)}})},p=(a,f,$,h,S)=>{var O;const c=$.offsetWidth===0?56:$.offsetWidth;let x=a;a>h-c&&(x=h-c),a<0&&(x=0);let G=f>S-c?S-c:f;G<0&&(G=0),(O=l.value)==null||O.updateOptions({position:{x,y:G}})},P=()=>{var a;s(!1),C.push(D(t.isBattle&&((a=t==null?void 0:t.battle)!=null&&a.link)?`${Be.pvp_battle_lobby}-${t.battle.link}`:Be.main_home))};return Ne(()=>t.isGameLoaded,()=>{Ue(()=>{w()})}),Ae(()=>{w(),window.addEventListener("resize",()=>{setTimeout(()=>{g.value=!0,w()},100)})}),tt(()=>{var a;(a=l.value)==null||a.destroy()}),(a,f)=>{var G,O,U;const $=It,h=He,S=nt,c=Ft,x=qe;return Ie((i(),L("div",en,[a.isBattle?Ie((i(),L("div",{key:0,class:Ge([{"battle-game-mobile-menu-toggler":a.isBattle},"casino-game-mobile-menu-toggler draggable"]),onClick:_t(y,["prevent"])},[I($,{"is-game-menu":"","is-static":""})],2)),[[Ce,!e(o)]]):Ie((i(),v(S,{key:1,class:"casino-game-mobile-menu-toggler draggable","color-type":"transparent",onClick:y},{default:de(()=>[I(h,{size:24,color:"white",name:"mobile-game-menu-toggler"})]),_:1},512)),[[Ce,!e(o)]]),Ie(_("div",tn,[_("div",nn,[_("div",an,N(a.gameName),1),_("div",sn,N(a.gameSoft),1)]),a.isBattle?(i(),L("div",on,[_("div",ln,[I(h,{size:24,class:"tw-mr-2",color:"white",name:"battle"}),_("h2",rn,N(a.$t("pvpBattleTitle")),1)]),I(c,{battle:a.battle,class:"battle-stat-btn"},null,8,["battle"]),_("div",cn,[(G=a.statInfo)!=null&&G.bet_amount?(i(),L("div",un,[_("div",null,N(a.$t("bet_amount")),1),_("div",dn,[$e(N(a.statInfo.bet_amount)+" ",1),(O=a.battle)!=null&&O.battle_currency?(i(),v(x,{key:0,src:("getCurrencyIconUrl"in a?a.getCurrencyIconUrl:e(Ee))(a.battle.battle_currency),alt:"currency"},null,8,["src"])):E("",!0)])])):E("",!0),(U=a.statInfo)!=null&&U.spins_left?(i(),L("div",mn,[_("div",null,N(a.$t("spins_left")),1),_("div",_n,[$e(N(a.statInfo.spins_left)+" ",1),I(h,{size:16,folder:"pvp",name:"spins_left_bar"})])])):E("",!0),e(r)?(i(),L("div",pn,[_("div",null,N(a.$t(e(r).name)),1),_("div",gn,[$e(N(e(r).val)+" ",1),e(r).img?(i(),v(x,{key:0,src:e(r).img,alt:"currency"},null,8,["src"])):E("",!0),e(r).icon?(i(),v(h,{key:1,name:e(r).icon,size:16,folder:"pvp"},null,8,["name"])):E("",!0)])])):E("",!0)])])):E("",!0),_("div",fn,[I(S,{class:"casino-game-mobile-menu-button","color-type":"transparent",onClick:f[0]||(f[0]=z=>P())},{default:de(()=>[I(h,{name:a.isBattle?"mobile-game-menu-battle":"mobile-game-menu-home",size:40,color:"white"},null,8,["name"])]),_:1}),e(o)?(i(),v(S,{key:0,class:"casino-game-mobile-menu-button","color-type":"transparent",onClick:f[1]||(f[1]=z=>y())},{default:de(()=>[I(h,{size:40,color:"white",name:"mobile-game-menu-close"})]),_:1})):E("",!0)])],512),[[Ce,e(o)]])],512)),[[Ce,a.isGameLoaded]])}}}),vn=be(bn,[["__scopeId","data-v-74763e8f"]]),hn={class:"game-bottom-panel"},wn={key:0,class:"tw-flex tw-gap-2 tw-items-center fg-title-16-fat"},yn={class:"tw-text-text-tertiary"},Sn={key:1,class:"tw-flex tw-items-center tw-gap-4"},En={class:"tw-flex tw-items-center tw-gap-2"},$n={class:"tw-text-text-primary"},kn={class:"tw-text-text-primary"},In=W({__name:"CasinoGameBottomPanel",setup(n){const s=V(),{setGameFullScreen:t,setIsRealPlay:o}=V(),{getGameInfo:l,getGameSrc:g,getIsRealPlay:d}=A(s),D=te({get(){return d.value},set(C){o(C)}});return(C,r)=>{const y=st,w=at,p=He,P=nt;return i(),L("div",hn,[e(l)?(i(),L("div",wn,[I(y,{"game-id":e(l).gameId},null,8,["game-id"]),_("span",null,[$e(N(e(l).name)+" ",1),_("span",yn,N(e(l).soft),1)])])):E("",!0),e(g)?(i(),L("div",Sn,[_("div",En,[_("span",$n,N(C.$t("fun_play")),1),I(w,{modelValue:e(D),"onUpdate:modelValue":r[0]||(r[0]=a=>Le(D)?D.value=a:null)},null,8,["modelValue"]),_("span",kn,N(C.$t("real_play")),1)]),I(P,{"color-type":"transparent",onClick:r[1]||(r[1]=a=>e(t)(!0))},{default:de(()=>[I(p,{name:"full-screen",width:18,height:18})]),_:1})])):E("",!0)])}}}),Cn=be(In,[["__scopeId","data-v-b7c80251"]]),Nn={class:"tw-relative casino-game-page"},Bn=["src"],Gn={key:1,class:"tw-my-8"},Fn=W({__name:"CasinoGamePage",props:{gameId:{},isBattle:{type:Boolean},battle:{default:null},statInfo:{default:null},playGameNow:{type:Boolean,default:!1}},async setup(n){let s,t;const o=n,{t:l}=ze(),g=et(),d=xe(),D=je(),C=Ze(),r=V(),{$emitter:y}=pt(),{setBreadcrumbs:w}=we(),{setGameFullScreen:p,fetchGameInfo:P,setGameSrc:a,startDemoGame:f,setGamePageError:$,setExitUrl:h}=r,{getGameSrc:S,getIsGameFullScreen:c,getGameLoading:x,getGameInfo:G,getGameName:O,getSimilarGames:U,getIsRealPlay:z,getExitUrl:K}=A(r),{isDesktop:Y,isLessContainerTablet:X}=A(D),{isLoggedIn:ae}=A(d),F=ne(null),me=ne(!1),J=te(()=>({mobileSmall:ke.mobileSmall,mobile:ke.mobile-32,mobileLarge:ke.mobileLarge-32,tablet:ke.tablet-32,desktop:ke.desktop-32})),_e=m=>{m.origin,K.value},j=()=>document.fullscreenElement===F.value||document.webkitFullscreenElement===F.value||document.mozFullScreenElement===F.value||document.msFullscreenElement===F.value,se=()=>{if(!X.value)try{F.value.requestFullscreen?F.value.requestFullscreen():F.value.webkitRequestFullscreen?F.value.webkitRequestFullscreen():F.value.mozRequestFullScreen?F.value.mozRequestFullScreen():F.value.msRequestFullscreen&&F.value.msRequestFullscreen()}catch(m){console.log("enterFullscreen",m)}},oe=()=>{try{(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement)&&(document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen())}catch(m){console.log("exitFullscreen",m)}},b=()=>{const m=j();p(m)},H=()=>{try{window==null||window.addEventListener("message",_e),me.value=!0}catch(m){console.error(m)}},ie=m=>{["#intercom-container","#chat-widget-container",".chatstyle-sc-111jtth-0"].forEach(le=>{const M=document.querySelector(`${le}`);M&&(m?M.classList.add("hidden"):M.classList.remove("hidden"))})};return[s,t]=gt(async()=>vt(async()=>{var m,Q;try{await P(o.gameId),(Q=(m=G.value)==null?void 0:m.hover)!=null&&Q.show?$({title:"error",description:`sorry_${G.value.hover.reason}_title`,navigationLink:Be.main_home,buttonText:"go_to_home"}):$(null)}catch{$({title:"error",description:"game_not_found",navigationLink:Be.main_home,buttonText:"go_to_home"})}},"$SVzJnVCWkE")),await s,t(),Ne(ae,m=>{m||g.push(C({path:Be.main_home}))}),Ne(z,m=>{m?a(""):f()}),Ne(c,m=>{m?se():oe()}),Ae(()=>{o.isBattle?w([{label:l("battles"),path:C({name:"battles"})},{label:l("pvp_game")}]):w([{label:"Casino",path:"/casino"},{label:O.value}]),a(""),h(window.location.origin),y.on(Ye.BONUS_WAGERING_CHANGED,()=>{ft()}),document.addEventListener("fullscreenchange",b),document.addEventListener("webkitfullscreenchange",b),document.addEventListener("mozfullscreenchange",b),document.addEventListener("MSFullscreenChange",b),ie(!0)}),tt(()=>{y.off(Ye.BONUS_WAGERING_CHANGED)}),Qe(()=>{p(!1),document.removeEventListener("fullscreenchange",b),document.removeEventListener("webkitfullscreenchange",b),document.removeEventListener("mozfullscreenchange",b),document.removeEventListener("MSFullscreenChange",b),ie(!1)}),bt({title:O.value}),(m,Q)=>{const le=Xt,M=vn,ce=Cn,pe=Ct,ge=Nt,ve=yt,he=ht;return i(),v(he,{loading:e(x)},{default:de(()=>{var fe;return[_("div",Nn,[_("div",{ref_key:"game",ref:F,class:"tw-h-[70vh]"},[e(S)?(i(),v(wt,{key:1,disabled:!e(X),to:"body"},[_("div",{class:Ge([{"game-mobile":e(X)},"tw-h-full tw-relative"])},[_("iframe",{id:"iframe-game",src:e(S),allowfullscreen:"",frameborder:"0",height:"100%",width:"100%",onLoad:H},null,40,Bn),e(c)&&e(S)?(i(),v(M,{key:0,battle:m.battle,"game-loading":!1,"game-name":e(O),"game-soft":((fe=e(G))==null?void 0:fe.soft)??"","is-battle":m.isBattle,"is-game-loaded":e(me),"stat-info":m.statInfo,class:"desktop:tw-hidden tw-flex tw-relative tw-z-[115]"},null,8,["battle","game-name","game-soft","is-battle","is-game-loaded","stat-info"])):E("",!0)],2)],8,["disabled"])):(i(),v(le,{key:0,"is-battle":m.isBattle,"play-now":m.playGameNow,class:"desktop:tw-h-full"},null,8,["is-battle","play-now"]))],512),e(Y)&&!m.playGameNow?(i(),v(ce,{key:0})):E("",!0),e(U).length>0?(i(),L("section",Gn,[I(ve,{"is-navigation":!0,list:e(U),"slider-settings":{breakpointsBase:"container",slidesPerView:6,breakpoints:{[e(J).mobileSmall]:{slidesPerView:2,spaceBetween:10},[e(J).mobileLarge]:{slidesPerView:3,spaceBetween:10},[e(J).tablet]:{slidesPerView:4,spaceBetween:10},[e(J).desktop]:{slidesPerView:7,spaceBetween:10}}},class:"game-slider","slider-id":"slider-similar-games"},{header:de(()=>[I(pe,{"is-navigation":!0,"title-icon":"virtual-sport","title-key":"similar_games"})]),item:de(({item:R})=>[I(ge,{game:R},null,8,["game"])]),_:1},8,["list","slider-settings"])])):E("",!0)])]}),_:1},8,["loading"])}}}),Se=be(Fn,[["__scopeId","data-v-347103b3"]]),Pn={};function xn(n,s){const t=Se;return i(),v(t,{class:"tw-mt-10 tw-mb-20","game-id":(n._.provides[ye]||n.$route).params.id},null,8,["game-id"])}const Ln=be(Pn,[["render",xn]]),Xn=Object.freeze(Object.defineProperty({__proto__:null,default:Ln},Symbol.toStringTag,{value:"Module"})),An=W({__name:"[id]",setup(n){const{setBreadcrumbs:s}=we(),t=V(),{getGameName:o}=A(t);return s([{label:"tv-games",path:"/tv-games"},{label:o.value}]),(l,g)=>{const d=Se;return i(),v(d,{class:"tw-mt-10 tw-mb-20","game-id":(l._.provides[ye]||l.$route).params.id},null,8,["game-id"])}}}),Jn=Object.freeze(Object.defineProperty({__proto__:null,default:An},Symbol.toStringTag,{value:"Module"})),Tn=W({__name:"[id]",setup(n){const{setBreadcrumbs:s}=we(),t=V(),{getGameName:o}=A(t);return s([{label:"Games",path:"/games"},{label:o.value}]),(l,g)=>{const d=Se;return i(),v(d,{class:"tw-mt-10 tw-mb-20","game-id":(l._.provides[ye]||l.$route).params.id},null,8,["game-id"])}}}),Qn=Object.freeze(Object.defineProperty({__proto__:null,default:Tn},Symbol.toStringTag,{value:"Module"})),Dn=W({__name:"[id]",setup(n){const{setBreadcrumbs:s}=we(),t=V(),{getGameName:o}=A(t);return s([{label:"Games",path:"/games"},{label:o.value}]),(l,g)=>{const d=Se;return i(),v(d,{class:"tw-mt-10 tw-mb-20","play-game-now":!0,"game-id":String((l._.provides[ye]||l.$route).params.id)},null,8,["game-id"])}}}),Zn=Object.freeze(Object.defineProperty({__proto__:null,default:Dn},Symbol.toStringTag,{value:"Module"})),Mn=W({__name:"[id]",setup(n){const{setBreadcrumbs:s}=we(),t=V(),{getGameName:o}=A(t);return s([{label:"table-games",path:"/table-games"},{label:o.value}]),(l,g)=>{const d=Se;return i(),v(d,{class:"tw-mt-10 tw-mb-20","game-id":(l._.provides[ye]||l.$route).params.id},null,8,["game-id"])}}}),ea=Object.freeze(Object.defineProperty({__proto__:null,default:Mn},Symbol.toStringTag,{value:"Module"})),Rn=W({__name:"[id]",setup(n){const{setBreadcrumbs:s}=we(),t=V(),{getGameName:o}=A(t);return s([{label:"tv-games",path:"/tv-games"},{label:o.value}]),(l,g)=>{const d=Se;return i(),v(d,{class:"tw-mt-10 tw-mb-20","game-id":(l._.provides[ye]||l.$route).params.id},null,8,["game-id"])}}}),ta=Object.freeze(Object.defineProperty({__proto__:null,default:Rn},Symbol.toStringTag,{value:"Module"})),On=W({__name:"[id]",setup(n){const{setBreadcrumbs:s}=we(),t=V(),{getGameName:o}=A(t);return s([{label:"Virtual Sport",path:"/virtual-sport"},{label:o.value}]),(l,g)=>{const d=Se;return i(),v(d,{class:"tw-mt-10 tw-mb-20","game-id":(l._.provides[ye]||l.$route).params.id},null,8,["game-id"])}}}),na=Object.freeze(Object.defineProperty({__proto__:null,default:On},Symbol.toStringTag,{value:"Module"}));export{Ft as _,Se as a,Xn as b,Jn as c,Qn as d,Zn as e,ea as f,ta as g,na as h};