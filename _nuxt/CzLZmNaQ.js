import{_ as Me}from"./sQNTZNBq.js";import{_ as Ae}from"./1-N0yLDQ.js";import{V as Q,j as d,X as e,o as l,c as k,u as L,x,y as H,t as R,b as B,n as j,f as T,d as ve,a6 as ae,i as W,a as m,K as be,a0 as re,a1 as U,k as Ge,l as ze,$ as Ne,W as Te,a2 as pe,Z as E,_ as ke,ab as He,an as Ue,ak as Re,aw as We,E as De,z as Oe,F as fe,r as Ee,ax as K,ao as Fe,a5 as Ke,ah as je,ai as Ye}from"./JoFQSik9.js";import{_ as qe}from"./D9zo_Myw.js";import{_ as Xe}from"./iYoyzWPT.js";import{u as Ze,a as Je,L as ue,_ as Qe}from"./hF7kiodX.js";import{_ as et}from"./BkdEmRM5.js";import{_ as tt}from"./3N86B1rU.js";import{_ as st}from"./Bk6z1lE-.js";import{_ as nt}from"./B850H_fa.js";import{u as de}from"./CXetEtI4.js";import"./Cel6GgYv.js";import"./Cf_ozb67.js";import"./LijCuOwn.js";import"./R1J_LkVd.js";import"./56Y_7FHu.js";import"./BZw8aVXh.js";import"./CXQSc-M8.js";import"./BKAhWZth.js";import"./BM2BYuY2.js";import"./D8aEg3BZ.js";import"./K-WBeQ-v.js";import"./BQxgWOyN.js";const he="center",ot=Q({__name:"BannerContent",props:{options:{default:()=>({})},align:{default:he},bgColor:{default:"#fff"},priority:{default:()=>[]},tKey:{default:""},socials:{default:()=>[]},showAuth:{type:Boolean,default:!0},isMobile:{type:Boolean,default:!1}},emits:["onClickButton"],setup(n,{emit:a}){const v=a,t=n,S=d(()=>{var s,r,p,u,$,V,G,I,M,A,N,g,w,z,F,Y,q,ee,te,se;return{"--button-color":(r=(s=t.options)==null?void 0:s.button)==null?void 0:r.color,"--button-weight":((u=(p=t.options)==null?void 0:p.button)==null?void 0:u.weight)==="normal"?400:700,"--button-bg-color":(V=($=t.options)==null?void 0:$.button)==null?void 0:V.bg_color,"--button-align":((I=(G=t.options)==null?void 0:G.button)==null?void 0:I.align)==="left"?"flex-start":((A=(M=t.options)==null?void 0:M.button)==null?void 0:A.align)==="right"?"flex-end":"center","--second-button-color":(g=(N=t.options)==null?void 0:N.second_button)==null?void 0:g.color,"--second-button-weight":((z=(w=t.options)==null?void 0:w.second_button)==null?void 0:z.weight)==="normal"?400:700,"--second-button-bg-color":(Y=(F=t.options)==null?void 0:F.second_button)==null?void 0:Y.bg_color,"--second-button-align":((ee=(q=t.options)==null?void 0:q.second_button)==null?void 0:ee.align)==="left"?"flex-start":((se=(te=t.options)==null?void 0:te.second_button)==null?void 0:se.align)==="right"?"flex-end":"center"}}),b=d(()=>{let s={};return t.isMobile?s={"background-color":"transparent",position:"static"}:s={"background-color":t.bgColor,transform:_.value?"translate(-50%, -50%)":"translateY(-50%)",top:"50%",[P(t.align)]:D()},s}),_=d(()=>t.align===he),i=d(()=>{var s,r;return{"--title-align":((s=t.options.title)==null?void 0:s.align)||"left","--subtitle-align":((r=t.options.sub_title)==null?void 0:r.align)||"left"}}),f=d(()=>{var s,r,p;return{"font-size":((s=t.options.title)==null?void 0:s.size)+"px"||"",color:((r=t.options.title)==null?void 0:r.color)||"","font-weight":((p=t.options.title)==null?void 0:p.weight)||""}}),C=d(()=>{var s,r,p;return{"font-size":((s=t.options.sub_title)==null?void 0:s.size)+"px"||"",color:((r=t.options.sub_title)==null?void 0:r.color)||"","font-weight":((p=t.options.sub_title)==null?void 0:p.weight)||""}}),c=d(()=>{var s,r,p,u,$,V,G,I,M;return!((r=(s=t.options)==null?void 0:s.title)!=null&&r.show)&&((p=t.options)==null?void 0:p.title)&&!(($=(u=t.options)==null?void 0:u.sub_title)!=null&&$.show)&&!((G=(V=t.options)==null?void 0:V.button)!=null&&G.show)&&!((M=(I=t.options)==null?void 0:I.second_button)!=null&&M.show)&&(!t.showAuth||!t.socials.length)}),P=s=>s==="right"?"right":"left",D=()=>_.value?"50%":"var(--padding-block)",o=s=>{v("onClickButton",s)};return(s,r)=>{const p=Me,u=Ae;return e(c)?B("",!0):(l(),k("div",{key:0,class:j(["mainbanner-content",{"content-mobile":s.isMobile}]),style:H([e(b),e(i)])},[L(u,{list:s.priority,"key-name":""},{item:x(({item:$})=>{var V,G,I,M,A,N,g,w,z;return[$==="title"&&((V=s.options.title)!=null&&V.show)?(l(),k("div",{key:0,class:"content-title",style:H(e(f))},R((G=s.options.title)==null?void 0:G.text),5)):B("",!0),$==="subtitle"&&((I=s.options.sub_title)!=null&&I.show)?(l(),k("div",{key:1,class:"content-subtitle",style:H(e(C))},R(s.options.sub_title.text),5)):B("",!0),$==="button"&&((M=s.options.button)!=null&&M.show)?(l(),k("div",{key:2,style:H(e(S)),class:"content-actions"},[L(p,{class:j(["content-btn",(N=(A=s.options)==null?void 0:A.button)==null?void 0:N.style]),label:s.options.button.text,onClick:r[0]||(r[0]=F=>o(s.options.button.link))},null,8,["class","label"]),(g=s.options.second_button)!=null&&g.show?(l(),T(p,{key:0,class:j(["content-btn",(z=(w=s.options)==null?void 0:w.second_button)==null?void 0:z.style]),label:s.options.second_button.text,onClick:r[1]||(r[1]=F=>o(s.options.second_button.link))},null,8,["class","label"])):B("",!0)],4)):B("",!0),$==="Auth Icons"&&s.tKey==="non_auth"?ve(s.$slots,"socials",{key:3},void 0,!0):B("",!0)]}),_:3},8,["list"])],6))}}}),it=ae(ot,[["__scopeId","data-v-c1abac94"]]),at={class:"ng-tier"},rt={class:"tier-title"},lt={class:"tier-username"},ct={class:"tier-progress"},ut={class:"tier-progress-info"},dt={class:"tier-progress-wrapper"},pt={class:"tier-progress-bar"},gt={class:"tier-progress-info"},mt={class:"tier-progress-level"},_t=["src"],bt={class:"tier-progress-level"},ft=["src"],we="center",ht=Q({__name:"TierContent",props:{align:{default:we},bgColor:{default:"#000000"},tierInfo:{default:()=>({welcomeMessage:"",textProgess:"",username:"",banner:"",nextBanner:"",level:"",nextLevel:"",points:0,progress:0})},color:{default:"#000000"},isMobile:{type:Boolean,default:!1}},setup(n){const a=n,v=W({level:"Level 1",points:0,nextLevel:"Level 2",progress:0,username:"cosmic_dreamer",welcomeMessage:"Welcome Back",textProgess:"Your Progress",banner:"https://platform-1.nuxbet.net/images/star.svg",nextBanner:"https://platform-1.nuxbet.net/images/star.svg"}),t=d(()=>({"--tier-color":a.color})),S=d(()=>a.align===we),b=C=>C==="right"?"right":"left",_=()=>S.value?"50%":"var(--padding-block)",i=d(()=>{let C={};return a.isMobile?C={"background-color":"transparent",position:"static"}:C={"background-color":a.bgColor,transform:S.value?"translate(-50%, -50%)":"translateY(-50%)",top:"50%",[b(a.align)]:_()},{...C,...t.value}}),f=d(()=>({...v.value,...a.tierInfo}));return(C,c)=>(l(),k("div",{class:j(["ng-tier-wrapper",{"tier-mobile":C.isMobile}]),style:H(e(i))},[m("div",at,[m("span",rt,R(e(f).welcomeMessage),1),m("span",lt,R(e(f).username),1),m("div",ct,[m("div",ut,[m("span",null,R(e(f).textProgess),1),m("span",null,R(e(f).progress)+" %",1)]),m("div",dt,[m("div",pt,[m("div",{style:H({width:e(f).progress+"%"})},null,4)])]),m("div",gt,[m("span",mt,[m("img",{src:e(f).banner,alt:"tier icon"},null,8,_t),be(" "+R(e(f).level),1)]),m("span",bt,[m("img",{src:e(f).nextBanner||e(f).banner,alt:"tier icon"},null,8,ft),be(" "+R(e(f).nextLevel),1)])])])])],6))}}),wt=ae(ht,[["__scopeId","data-v-719e1764"]]),vt=["src"],kt={key:1,class:"mainbanner-image mainbanner-empty"},yt=["innerHTML"],Bt=Q({__name:"NgMainBanner",props:{image:{default:""},options:{default:()=>({})},align:{default:"center"},bgColor:{default:"#fff"},priority:{default:()=>[]},tKey:{default:""},socials:{default:()=>[]},showAuth:{type:Boolean,default:!0},mode:{default:"default"},tierColor:{default:"#fff"},tierInfo:{default:()=>({welcomeMessage:"",textProgess:"",username:"",banner:"",nextBanner:"",level:"",nextLevel:"",points:0,progress:0})},height:{default:0},width:{default:0},isScale:{type:Boolean,default:!1},textRatius:{default:""}},emits:["onClickBanner","onClickButton"],setup(n,{emit:a}){const v=a,t=n,S=re(),{isMobile:b}=U(S),_=W(1),i=W(null),f=d(()=>{let o={};const s=typeof t.height=="number";return b.value?o={"--block-width":t.width+"px","--block-height":s?t.height+"px":"auto"}:o={width:"100%","--block-width":t.width+"px","--block-height":s?t.height+"px":t.height,"--banner-align":t.align==="left"?"right":t.align==="right"?"left":"center"},o}),C=d(()=>({transform:`scale('${_.value}')'`,height:typeof t.height=="string"?t.height:`${_.value*t.height}px`,"transform-origin":"0 0"})),c=d(()=>{var o,s,r,p;return((s=(o=t.options)==null?void 0:o.banner_link)==null?void 0:s.show)&&((p=(r=t.options)==null?void 0:r.banner_link)==null?void 0:p.link)}),P=()=>{i.value&&(_.value=i.value.offsetWidth/t.width)},D=()=>{var o,s;c.value&&v("onClickBanner",(s=(o=t.options)==null?void 0:o.banner_link)==null?void 0:s.link)};return Ge(()=>{P(),window.addEventListener("resize",P)}),ze(()=>{window.removeEventListener("resize",P)}),(o,s)=>{const r=it,p=wt;return l(),k("div",{ref_key:"banner",ref:i,class:"ng-mainbanner",style:H(e(f))},[m("div",{style:H(o.isScale&&!e(b)?e(C):"width: 100%")},[m("div",{class:j(["mainbanner-block",{"mainbanner-empty":!e(i),"mainbanner-scale":o.isScale&&!e(b),"mainbanner-mobile":e(b)}])},[o.image?(l(),k("img",{key:0,src:o.image,class:j(["mainbanner-image",{"tw-cursor-pointer":e(c)}]),alt:"banner",onClick:D},null,10,vt)):(l(),k("div",kt,[o.textRatius?(l(),k("span",{key:0,style:H({transform:`scale('${1/e(_)}')`}),class:"mainbanner-ratius",innerHTML:o.textRatius},null,12,yt)):B("",!0)])),o.mode==="default"?(l(),T(r,{key:2,"bg-color":o.bgColor,align:o.align,priority:o.priority,options:o.options,"show-auth":o.showAuth,socials:o.socials,"is-mobile":e(b),"t-key":o.tKey,onOnClickButton:s[0]||(s[0]=u=>v("onClickButton",u))},{socials:x(()=>[ve(o.$slots,"socials",{},void 0,!0)]),_:3},8,["bg-color","align","priority","options","show-auth","socials","is-mobile","t-key"])):B("",!0),o.mode==="tier"?(l(),T(p,{key:3,align:o.align,"bg-color":o.bgColor,color:o.tierColor,"tier-info":o.tierInfo,"is-mobile":e(b)},null,8,["align","bg-color","color","tier-info","is-mobile"])):B("",!0)],2)],4)],4)}}}),St=ae(Bt,[["__scopeId","data-v-fb55c9c2"]]),Ct=()=>{const n=Ne(),a=Te(),v=pe(),{setAuthModal:t}=v,{isLoggedIn:S}=U(v),b=i=>n.hasRoute(i)?i:E.error_page;return{linkHandler:i=>{if(i==="showModalDeposit"){if(S.value)return;t("signUp")}else if(i==="showModalWithdrawal"){if(S.value)return;t("signUp")}else i==="showModalRegistration"?t("signUp"):i==="showModalLogin"?t("signIn"):n.push(a({path:b(i)}))}}},Pt=()=>{const{t:n}=ke(),{getHiddenBlocks:a}=re(),v={title:{show:!0,text:`${n("tier_text")} ${n("tier_text_deposits")}`,align:"left",color:"#fff",italic:!1,weight:"bold",underline:!1},button:{link:"showModalDeposit",show:!0,text:n("register_instantly"),align:"left",color:"#fff",style:"primary",weight:"bold",bg_color:"#232333"},sub_title:{show:!0,text:`${n("sign_up_tier")} ${n("tier_welcome")}`,align:"left",color:"#ffffff",italic:!1,weight:"normal",underline:!1},second_button:{link:"showModalWithdrawal",show:!1,text:"Button Text",color:"#ffffff",style:"primary",weight:"normal",bg_color:"#29C238"}},t=()=>{const b=a.includes("allAboutSports")&&a.includes("sportbook")&&!a.includes("live-casino"),_={title:{show:!0,text:n("casino_title"),align:"left",color:"#fff",italic:!1,weight:"bold",underline:!1},button:{link:"/casino",show:!0,text:n("go_to_casino"),align:"left",color:"#fff",style:"primary",weight:"bold",bg_color:"#fff"},heading:{icon:"casino",show:!0,size:"20",text:n("casino"),align:"left",color:"#fff",style:"primary",weight:"bold"},sub_title:{show:!0,text:n("casino_desc"),align:"left",color:"#fff",italic:!1,weight:"normal",underline:!1},second_button:{show:!1}},i={title:{show:!0,text:n("sport_title"),align:"left",color:"#fff",italic:!1,weight:"bold",underline:!1},button:{link:"/sports",show:!0,text:n("go_to_sport"),align:"left",color:"primary",style:"primary",weight:"bold",bg_color:"primary"},heading:{icon:"sport",show:!0,size:"20",text:n("sport"),align:"left",color:"#fff",style:"primary",weight:"bold",bg_color:"#ffff00"},sub_title:{show:!0,text:n("sport__desc"),align:"left",color:"#fff",italic:!1,weight:"normal",underline:!1},second_button:{show:!1}};return a.includes("allAboutSports")&&a.includes("sportbook")&&!a.includes("live-casino")?(i.heading.text=n("live_casino"),i.heading.icon="live_casino",i.title.text=n("live_casino_title"),i.sub_title.text=n("live_casino_desc"),i.button.text=n("go_to_live_casino"),i.button.link="/live-games"):a.includes("allAboutSports")&&!a.includes("sportbook")?i.button.link="/sportbook":!a.includes("allAboutSports")&&a.includes("sportbook")&&(i.button.link="/sports"),b?{ban1:_}:{ban1:_,ban2:i}},S={banners:[{banner:""},{banner:""}],translations:{en:{auth:{...v,title:{show:!1},sub_title:{show:!1},button:{show:!1}},non_auth:{...v}}},priority:["subtitle","title","button","Auth Icons"],align:"left",bg_content_color:"#3131444D",is_tier:!1,is_tier_color:"#232333",socials:[],show_auth:!0};return{mainBannerComponents:v,mainBannerOptions:S,slotBannerComponents:t}};var J=(n=>(n.auth="auth",n.non_auth="non_auth",n.both_auth="both_auth",n))(J||{});const Lt={class:"mainbanner"},$t=Q({__name:"MainBanner",props:{banner:{type:Object,default:()=>({})}},setup(n){const a=n,{t:v}=ke(),t=re(),{getLang:S,isMobile:b,isTierProgram:_}=U(t),i=He(),{getTiers:f,getNickname:C}=U(i),c=pe(),{isLoggedIn:P}=U(c),{linkHandler:D}=Ct(),{mainBannerComponents:o,mainBannerOptions:s}=Pt(),r=d(()=>P.value?J.auth:J.non_auth),p=d(()=>({welcomeMessage:v("welcome_message").toUpperCase(),textProgess:v("your_progress"),username:C.value,...f.value})),u=d(()=>{var g;return(g=a.banner)!=null&&g.data?{...s,...a.banner.data}:{...s,banners:[{banner:a.banner.image},{banner:a.banner.mob_image||a.banner.image}],translations:{en:{[J.auth]:{...o,title:{show:_.value},sub_title:{show:_.value},button:{show:_.value}},[J.non_auth]:{...o}}},is_tier:_.value}}),$=d(()=>{const g=u.value.translations,w=g[S.value]??g.en;return w?w[r.value]?w[r.value]:w.non_auth:w[r.value]}),V=d(()=>{var g,w,z;return((w=(g=u.value)==null?void 0:g.socials)==null?void 0:w.length)&&((z=u.value)==null?void 0:z.show_auth)}),G=d(()=>b.value?u.value.banners[1].banner:u.value.banners[0].banner),I=d(()=>b.value?"auto":390),M=g=>_.value&&P.value&&g?"tier":"default",A=d(()=>{var g;return(g=u.value.socials)!=null&&g.length?u.value.socials.filter(w=>w.show):[]}),N=g=>{g&&D(g)};return(g,w)=>{const z=St;return l(),k("div",Lt,[L(z,{image:e(G),align:e(u).align,options:e($),priority:e(u).priority,"bg-color":e(u).bg_content_color,"t-key":e(r),lang:e(S),show_auth:e(u).show_auth,mode:M(e(u).is_tier),"tier-color":e(u).is_tier_color,"tier-info":e(p),height:e(I),width:1200,socials:e(u).socials,"is-scale":!1,"is-mobile":e(b),onOnClickButton:N},{socials:x(()=>[e(V)?(l(),T(qe,{key:0,class:"banner-socials",socials:e(A)},null,8,["socials"])):B("",!0)]),_:1},8,["image","align","options","priority","bg-color","t-key","lang","show_auth","mode","tier-color","tier-info","height","socials","is-mobile"])])}}}),Vt=n=>(je("data-v-ed8ab84a"),n=n(),Ye(),n),xt={class:"tw-pt-6 mobileLarge:tw-pt-4 tw-pb-16"},It={class:"mainbanner-wrapper"},Mt={class:"mainbanner-controls"},At={class:"mainbanner slider-prev"},Gt=Vt(()=>m("div",{class:"swiper-pagination"},null,-1)),zt={class:"mainbanner slider-next"},Nt={key:0,class:"tw-my-8"},Tt={key:1,class:"tw-my-8"},Ht={key:2,class:"tw-my-8"},Ut=["onClick"],Rt=["src"],Wt={key:3,class:"tw-my-8"},Dt={key:4,class:"tw-mt-8"},Ot=Q({__name:"index",setup(n){const{slicedList:a,gridSize:v,filter:t,onFilter:S,onGoTo:b}=Ze(),{setSliders:_,getSliders:i,hasCustomSlider:f}=Je(),C=[ue.month,ue.week,ue.day],c=d(()=>({mobileSmall:K.mobileSmall,mobile:K.mobile-32,mobileLarge:K.mobileLarge-32,tablet:K.tablet-32,desktop:K.desktop-32,desktopLarge:K.desktopLarge-32})),P=re(),{isLeaderBoard:D,isLiveWins:o,isMobile:s}=U(P),r=pe(),{isLoggedIn:p,tokenChanging:u}=U(r),$=Ue(),{fetchSpins:V,fetchVirtuals:G}=$,I=W([]),M=W([]),A=W([]),N=W([]),g=d(()=>[{title:"new_games",titleIcon:"new-games",games:N.value,titleIconUrl:"",link:E.games},{title:"top_games",titleIcon:"top_games",games:I.value,titleIconUrl:"",link:E.games},{title:"virtual_games",titleIcon:"virtual-sport",games:M.value.slice(0,12),titleIconUrl:"",link:E.virtual_sport}]),w=async()=>{try{const{data:y}=await V({sort:"rating",per_page:12,is_recommended:1});if(A.value=y.items,!(f!=null&&f.value)){const{data:O}=await G({sort:"rating",per_page:12}),{data:le}=await V({sort:"rating",per_page:12}),{data:X}=await V({sort:"rating",per_page:12,is_new:1});I.value=le.items,M.value=O.items,N.value=X.items}_(g.value,3)}catch(y){console.error("gamesCallAction index.vue",y)}},z={breakpointsBase:"container",slidesPerView:6,breakpoints:{[c.value.mobileSmall]:{slidesPerView:3,spaceBetween:8,slidesPerGroup:3},[c.value.mobileLarge]:{slidesPerView:4,spaceBetween:8,slidesPerGroup:4},[c.value.tablet]:{slidesPerView:5,spaceBetween:12,slidesPerGroup:5},[c.value.desktop]:{slidesPerView:6,spaceBetween:16,slidesPerGroup:6},[c.value.desktopLarge]:{slidesPerView:7,spaceBetween:16,slidesPerGroup:7}}},F=d(()=>s.value?20:24);de("fetchHomeGames",()=>w(),{watch:[p,u]});const Y=Re(),{getBonuses:q}=U(Y),{fetchBonuses:ee,setCurrentBonusId:te,setVisibleBonusModal:se}=Y,ne=d(()=>q.value??q.value.filter(y=>{var O;return!y.activated&&(!Fe((O=y.extra)==null?void 0:O.expiration_after)&&y.status!==4||!y.extra&&!y.activated)})),ye=async()=>{try{await ee()}catch(y){console.error("bonusesCallAction index.vue",y)}},Be=y=>{te(y),se(!0)};de("fetchBonuses",()=>ye(),{watch:[p]});const ge=We(),{getProvidersObjectList:oe}=U(ge),{fetchProviders:Se,resetProvidersStore:Ce}=ge,Pe=W({get_all:1}),Le=async y=>{try{await Se(y)}catch(O){console.error("providersCallAction index.vue",O)}};return de("fetchProviders",()=>Le(Pe.value),{watch:[p]}),De(()=>{Ce()}),(y,O)=>{const le=$t,X=Ke,Z=Xe,$e=Qe,ie=et,me=tt,Ve=st,xe=nt;return l(),k("div",xt,[m("section",It,[e(P).getBanners&&e(P).getBanners.length>0?(l(),T(Z,{key:`mainbanner-slider-${e(P).getBanners.length}`,list:e(P).getBanners,"slider-id":"slider-mainbanner",class:"mainbanner-slider","is-navigation":!0,"is-pagination":!0,"slider-settings":{slidesPerView:1,spaceBetween:16,speed:2500,loop:!0,autoplay:{delay:5e3}}},Oe({item:x(({item:h})=>[L(le,{banner:h},null,8,["banner"])]),_:2},[e(P).getBanners.length>1?{name:"pagination",fn:x(()=>[m("div",Mt,[m("div",At,[L(X,{name:"left",size:13})]),Gt,m("div",zt,[L(X,{name:"right",size:13})])])]),key:"0"}:void 0]),1032,["list"])):B("",!0)]),e(o)?(l(),T($e,{key:0,class:"tw-my-8","current-filter":e(t),"filter-list":C,"grid-size":e(v),list:e(a),onGoTo:e(b),onUpdate:e(S)},{"header-icon":x(()=>[L(X,{name:"lobby",size:e(F)},null,8,["size"])]),_:1},8,["current-filter","grid-size","list","onGoTo","onUpdate"])):B("",!0),(l(),k(fe,null,Ee(3,h=>{var ce,_e;return l(),k(fe,{key:`side-banners-${h-1}`},[(_e=(ce=e(i)[h-1])==null?void 0:ce.games)!=null&&_e.length&&e(i)[h-1]?(l(),k("section",Nt,[(l(),T(Z,{key:`top-games-slider_${h}`,list:e(i)[h-1].games,"slider-id":`slider-top-games_${h}`,class:"game-slider","is-navigation":!0,"slider-settings":z},{header:x(()=>[L(ie,{"title-key":e(i)[h-1].title,"is-navigation":!0,"navigation-link":e(i)[h-1].link,"title-icon":e(i)[h-1].titleIcon,"title-icon-url":e(i)[h-1].titleIconUrl},null,8,["title-key","navigation-link","title-icon","title-icon-url"])]),item:x(({item:Ie})=>[L(me,{game:Ie},null,8,["game"])]),_:2},1032,["list","slider-id"]))])):B("",!0)],64)}),64)),e(oe)&&e(oe).length?(l(),k("section",Tt,[(l(),T(Z,{key:`provider-slider-${e(oe).length}`,list:e(oe),"slider-id":"slider-provider",class:"game-slider","is-navigation":!0,"slider-settings":{breakpointsBase:"container",slidesPerView:6,loop:!0,autoplay:{delay:5e3},breakpoints:{[e(c).mobileSmall]:{slidesPerView:3,spaceBetween:8},[e(c).mobileLarge]:{slidesPerView:4,spaceBetween:8},[e(c).tablet]:{slidesPerView:5,spaceBetween:12},[e(c).desktop]:{slidesPerView:6,spaceBetween:16},[e(c).desktopLarge]:{slidesPerView:7,spaceBetween:16}}}},{header:x(()=>[L(ie,{"title-key":"providers","is-navigation":!0,"navigation-link":e(E).providers,"title-icon":"top-providers"},null,8,["navigation-link"])]),item:x(({item:h})=>[L(Ve,{"link-to":{query:{tab:"spins",provider:h.id},path:"/casino"},"is-game-count-shown":!1,item:h},null,8,["link-to","item"])]),_:1},8,["list","slider-settings"]))])):B("",!0),e(ne)&&e(ne).length>0?(l(),k("section",Ht,[(l(),T(Z,{key:`bonuses-slider-${e(ne).length}`,list:e(ne),"slider-id":"casino-bonuses","is-navigation":!0,class:"game-slider slider-bonuses","slider-settings":{breakpointsBase:"container",slidesPerView:3,autoplay:{delay:5e3},breakpoints:{[e(c).mobileSmall]:{slidesPerView:1,spaceBetween:8},[e(c).mobileLarge]:{slidesPerView:2,spaceBetween:8},[e(c).tablet]:{slidesPerView:2,spaceBetween:10},[e(c).desktop]:{slidesPerView:3,spaceBetween:10}}}},{header:x(()=>[L(ie,{"is-navigation":!0,"title-key":"bonuses","navigation-link":e(E).promotions,"title-icon":"bonuses"},null,8,["navigation-link"])]),item:x(({item:h})=>[m("div",{class:"hover:tw-opacity-80 tw-cursor-pointer",onClick:ce=>Be(h.id)},[m("img",{src:h.banner,class:"game-slider__item-image"},null,8,Rt)],8,Ut)]),_:1},8,["list","slider-settings"]))])):B("",!0),e(A)&&e(A).length>0?(l(),k("section",Wt,[(l(),T(Z,{key:`recommended-games-slider-${e(A).length}`,list:e(A),"slider-id":"slider-recommended-games",class:"game-slider","is-navigation":!0,"slider-settings":{breakpointsBase:"container",slidesPerView:6,breakpoints:{[e(c).mobileSmall]:{slidesPerView:3,spaceBetween:8},[e(c).mobileLarge]:{slidesPerView:4,spaceBetween:8},[e(c).tablet]:{slidesPerView:5,spaceBetween:12},[e(c).desktop]:{slidesPerView:6,spaceBetween:16},[e(c).desktopLarge]:{slidesPerView:7,spaceBetween:16}}}},{header:x(()=>[L(ie,{"is-navigation":!0,"title-key":"recommended_games","navigation-link":e(E).casino,"title-icon":"for_you"},null,8,["navigation-link"])]),item:x(({item:h})=>[L(me,{game:h},null,8,["game"])]),_:1},8,["list","slider-settings"]))])):B("",!0),e(D)?(l(),k("section",Dt,[L(xe)])):B("",!0)])}}}),gs=ae(Ot,[["__scopeId","data-v-ed8ab84a"]]);export{gs as default};
