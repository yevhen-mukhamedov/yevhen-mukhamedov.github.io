import{_ as Q}from"./1-N0yLDQ.js";import{V as B,_ as Y,o as _,c as w,a as u,d as q,K as D,t as $,n as U,X as F,f as A,x as V,b as E,au as H,u as X,$ as x,a0 as Z,a1 as C,i as N,U as ee,j as I,N as te,k as se,l as ne,bi as K,Z as J,bg as j,bj as ae,aa as re,ax as T,m as oe,y as ie,bh as ce,F as le,r as me,a6 as ue,W as de,an as pe}from"./JoFQSik9.js";import{_ as _e}from"./LijCuOwn.js";import{f as fe}from"./R1J_LkVd.js";import{g as ve}from"./BZw8aVXh.js";var h=(e=>(e.month="30",e.week="7",e.day="1",e))(h||{});const P="none";var S=(e=>(e[e.large=12]="large",e[e.medium=10]="medium",e[e.mediumMin=8]="mediumMin",e[e.small=6]="small",e[e.smallExtra=4]="smallExtra",e))(S||{});const he={class:"control-panel"},ge=["onClick"],ke=B({__name:"LiveWinsControlPanel",props:{currentFilter:{},filterList:{}},emits:["filter"],setup(e){const{t:m}=Y(),i=o=>{switch(o){case h.month:return m("month_m");case h.week:return m("week_w");case h.day:return m("day_d")}};return(o,r)=>{const c=Q;return _(),w("header",he,[u("button",{class:U(["none-filter-button",{active:o.currentFilter===F(P)}]),onClick:r[0]||(r[0]=t=>o.$emit("filter",F(P)))},[q(o.$slots,"header-ico"),D(" "+$(o.$t("live_wins")),1)],2),o.filterList?(_(),A(c,{key:0,list:o.filterList,"key-name":"wins-filter",class:"filter-list"},{item:V(({item:t})=>[u("button",{class:U(["filter-button",{active:o.currentFilter===t}]),onClick:f=>o.$emit("filter",t)},$(i(t)),11,ge)]),_:1},8,["list"])):E("",!0)])}}}),Le={class:"game-item"},Se={class:"game-content"},$e={class:"game-payout"},ye={class:"game-amount"},be=["src"],Te={class:"nickname"},we=B({__name:"LiveWinsItem",props:{item:{}},setup(e){const m=e,{PLATFORM_ID:i}=H().public,o=r=>["8dfa5f04-fa62-4634-a170-d65019070b5f","6ed534e6-fe06-428f-b15f-e769cbbfe1c4","45cab422-ae18-45d9-acde-e0ddead0091a"].includes(i)?fe(r):r;return(r,c)=>{const t=_e;return _(),w("div",Le,[X(t,{alt:r.item.game,src:m.item.banner_vertical,class:"tw-object-cover game-image"},null,8,["alt","src"]),u("div",Se,[u("div",$e,[u("div",ye,$(o(r.item.amount)),1),u("img",{class:"payout-icon",src:F(ve)(r.item.currency),alt:""},null,8,be)]),u("div",Te,$(r.item.nickname),1)])])}}}),We=()=>{const e=x(),m=Z(),{$echo:i}=re(),{PLATFORM_ID:o}=H().public,{getContainerWidth:r}=C(m),c=N([]),t=N(!1),f=N(P),d=ee({error_code:0,status:!0,msg:""}),g=I(()=>r.value>=T.desktopLarge?S.large:r.value>=T.desktop&&r.value<=T.desktopLarge?S.medium:r.value>=T.tablet?S.mediumMin:r.value>=T.mobileLarge?S.small:S.smallExtra),l=I(()=>c.value.slice(0,g.value)??[]),k=a=>{const{msg:n="Wrong request LiveWins",status:p,error_code:W=0}=a;d.msg=n,d.status=p,d.error_code=W},y=async()=>{try{const a=await K.wins.getLiveWins();c.value=L(a)}catch(a){k(a),console.error("useLiveWins.ts -> fetchLiveWins",a)}},v=async a=>{try{const n=await K.wins.getTopWins({filter:a});c.value=L(n)}catch(n){k(n),console.error("useLiveWins.ts -> fetchTopWins",n)}},L=a=>a.toSorted(({amount:n},{amount:p})=>n-p),M=async a=>{switch(f.value=a,t.value=!0,a){case P:await y();break;case h.day:case h.month:case h.week:await v(a);break;default:console.error("Type of filter is not defined")}t.value=!1},R=a=>{e.push({path:J.spins,params:{id:a.game_id}})},s=()=>{i.channel(`${j.liveTransactionsCompany}.${o}`).listen(ae.liveWins,a=>{c.value=L([a.liveWins,...c.value])})},b=()=>i.leaveChannel(`${j.liveTransactionsCompany}.${o}`);return te(()=>M(f.value)),se(()=>s()),ne(()=>b()),{fetchTopWins:v,fetchLiveWins:y,gridSize:g,list:c,onFilter:M,onGoTo:R,slicedList:l,loading:t,filter:f,errorStatus:d}},Ne={key:0,class:"ng-live-wins"},Fe={class:"content-container"},Ie={key:1,class:"empty-result"},Pe=B({__name:"LiveWins",props:{filterList:{},currentFilter:{},list:{},gridSize:{}},emits:["update","go-to"],setup(e,{emit:m}){const{errorStatus:i}=We(),o=e,r=m,c=t=>{o.currentFilter!==t&&r("update",t)};return(t,f)=>{const d=ke,g=we;return F(i).status?(_(),w("div",Ne,[X(d,oe({currentFilter:t.currentFilter,filterList:[...new Set(t.filterList)]},{onFilter:c}),{"header-ico":V(()=>[q(t.$slots,"header-icon",{},void 0,!0)]),_:3},16),u("div",Fe,[t.list.length?(_(),A(ce,{key:0,name:"list",tag:"div",class:"wins-grid tw-grid",style:ie({gridTemplateColumns:`repeat(${t.gridSize}, minmax(0, 1fr))`})},{default:V(()=>[(_(!0),w(le,null,me(t.list,(l,k)=>(_(),A(g,{key:`${l.game_id}-${k}-${l.game}-${l.nickname}-${l.amount}-${l.currency}`,item:l,onClick:y=>t.$emit("go-to",l)},null,8,["item","onClick"]))),128))]),_:1},8,["style"])):(_(),w("div",Ie,[u("p",null,$(t.$t("no_results_yet")),1),u("p",null,$(t.$t("be_first_winner")),1)]))])])):E("",!0)}}}),ze=ue(Pe,[["__scopeId","data-v-1fa9aa10"]]),Ge=()=>{const e=de(),m=Z(),{globalData:i}=m,{fetchSpins:o,fetchVirtuals:r,fetchTvGames:c,fetchTableGames:t,fetchLiveGames:f,fetchPoker:d,fetchCrypto:g}=pe();let l;(s=>{s[s.Live=1]="Live",s[s.CasinoGames=2]="CasinoGames",s[s.VirtualGames=3]="VirtualGames",s[s.TvGames=4]="TvGames",s[s.Poker=5]="Poker",s[s.Sportbook=6]="Sportbook",s[s.Special=8]="Special",s[s.TableGames=9]="TableGames"})(l||(l={}));const k={1:"live-games",2:"games",3:"virtual-sport",4:"tv-games",5:"poker",8:"special-games",9:"table-games"},y={2:o,3:r,4:c,9:t,1:f,5:d,8:g},v=N([]),L=I(()=>{var s;return(s=i==null?void 0:i.casino_categories)==null?void 0:s.length});return{getSliders:I(()=>v.value),setSliders:(s,b=3)=>{if(L.value){const a=[];i==null||i.casino_categories.slice(0,b).forEach((n,p)=>{p>b||(a.push({api:y[n.type_id],query:{custom_category:n.id,per_page:12}}),v.value.push({games:[],name:n.name,title:n.name,titleIconUrl:(n==null?void 0:n.icon)||"",link:e({path:J[k[n.type_id].replace("-","_")],query:{custom_category:n.id}})}))}),Promise.allSettled(a.map(({api:n,query:p})=>n(p))).then(n=>{i==null||i.casino_categories.slice(0,b).forEach((p,W)=>{var z,G,O;v.value[W].games=((O=(G=(z=n[W])==null?void 0:z.value)==null?void 0:G.data)==null?void 0:O.items)||[]})})}else v.value=s},hasCustomSlider:L}};export{h as L,ze as _,Ge as a,We as u};