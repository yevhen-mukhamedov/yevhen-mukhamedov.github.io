import{V as y,b0 as V,c as s,X as e,f as b,b as r,n,F as h,a as P,d as B,b1 as C,o,b2 as S}from"./JoFQSik9.js";const v={key:0,class:"ng-component-preloader"},w=["src"],M=["src"],W={key:0},F=["src"],N=["src"],D=y({__name:"ComponentPreloader",props:{loading:{type:Boolean,default:!1}},setup(i){const{getColor:c,loaderType:d,logo:u,gif:t,video:p,img_animation:l,isDefaultViewPreloader:_,isLogoViewPreloader:m,isGifViewPreloader:g,isVideoViewPreloader:f}=V();return(a,$)=>{const k=C;return o(),s("div",null,[i.loading?(o(),s("div",v,[e(_)?(o(),b(k,{key:0,color:e(c),loader:e(d)},null,8,["color","loader"])):r("",!0),e(m)?(o(),s("img",{key:1,class:n(e(l)),src:e(u)},null,10,w)):r("",!0),e(g)?(o(),s("img",{key:2,class:n(e(l)),src:e(t)},null,10,M)):r("",!0),e(f)?(o(),s(h,{key:3},[("isSupportedWebM"in a?a.isSupportedWebM:e(S))()?(o(),s("video",W,[P("source",{src:e(p),autoplay:"",loop:""},null,8,F)])):(o(),s("img",{key:1,src:e(t)},null,8,N))],64)):r("",!0)])):B(a.$slots,"default",{key:1})])}}});export{D as _};