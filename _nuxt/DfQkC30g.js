import{d as j,ad as $,H as c,g as b,o as y,c as m,b as q,C as F,S as w,t as _,i as p,e as J,U as C,r as O,V as P,_ as Q}from"./7PQ9d4dP.js";const W=j({__name:"MainBannerContent",props:{options:{default:()=>({})},align:{default:$},bgColor:{default:"#fff"},priority:{default:()=>[]},tKey:{default:""},socials:{default:()=>[]},showAuth:{type:Boolean,default:!0},isMobile:{type:Boolean,default:!1}},emits:["onClickButton"],setup(E,{emit:I}){const H=I,o=E,K=c(()=>{var t,n,e,s,i,l,r,a,u,d,g,f,h,k,S,V,z,A,N,M;return{"--button-color":(n=(t=o.options)==null?void 0:t.button)==null?void 0:n.color,"--button-weight":((s=(e=o.options)==null?void 0:e.button)==null?void 0:s.weight)==="normal"?400:700,"--button-bg-color":(l=(i=o.options)==null?void 0:i.button)==null?void 0:l.bg_color,"--button-align":((a=(r=o.options)==null?void 0:r.button)==null?void 0:a.align)==="left"?"flex-start":((d=(u=o.options)==null?void 0:u.button)==null?void 0:d.align)==="right"?"flex-end":"center","--second-button-color":(f=(g=o.options)==null?void 0:g.second_button)==null?void 0:f.color,"--second-button-weight":((k=(h=o.options)==null?void 0:h.second_button)==null?void 0:k.weight)==="normal"?400:700,"--second-button-bg-color":(V=(S=o.options)==null?void 0:S.second_button)==null?void 0:V.bg_color,"--second-button-align":((A=(z=o.options)==null?void 0:z.second_button)==null?void 0:A.align)==="left"?"flex-start":((M=(N=o.options)==null?void 0:N.second_button)==null?void 0:M.align)==="right"?"flex-end":"center"}}),L=c(()=>{let t={};return o.isMobile?t={"background-color":"transparent",position:"static"}:t={"background-color":o.bgColor,transform:v.value?"translate(-50%, -50%)":"translateY(-50%)",top:"50%",[U(o.align)]:Y()},t}),v=c(()=>o.align===$),T=c(()=>{var t,n;return{"--title-align":((t=o.options.title)==null?void 0:t.align)||"left","--subtitle-align":((n=o.options.sub_title)==null?void 0:n.align)||"left"}}),D=c(()=>{var t,n,e;return{"font-size":((t=o.options.title)==null?void 0:t.size)+"px"||"",color:((n=o.options.title)==null?void 0:n.color)||"","font-weight":((e=o.options.title)==null?void 0:e.weight)||""}}),G=c(()=>{var t,n,e;return{"font-size":((t=o.options.sub_title)==null?void 0:t.size)+"px"||"",color:((n=o.options.sub_title)==null?void 0:n.color)||"","font-weight":((e=o.options.sub_title)==null?void 0:e.weight)||""}}),R=c(()=>{var t,n,e,s,i,l,r,a,u;return!((n=(t=o.options)==null?void 0:t.title)!=null&&n.show)&&((e=o.options)==null?void 0:e.title)&&!((i=(s=o.options)==null?void 0:s.sub_title)!=null&&i.show)&&!((r=(l=o.options)==null?void 0:l.button)!=null&&r.show)&&!((u=(a=o.options)==null?void 0:a.second_button)!=null&&u.show)&&(!o.showAuth||!o.socials.length)}),U=t=>t==="right"?"right":"left",Y=()=>v.value?"50%":"var(--padding-block)",B=t=>{H("onClickButton",t)};return(t,n)=>{const e=P;return b(R)?p("",!0):(y(),m("div",{key:0,class:C(["mainbanner-content",{"content-mobile":t.isMobile}]),style:w([b(L),b(T)])},[q(e,{list:t.priority,"key-name":""},{item:F(({item:s})=>{var i,l,r,a,u,d,g,f,h;return[s==="title"&&((i=t.options.title)!=null&&i.show)?(y(),m("div",{key:0,class:"content-title",style:w(b(D))},_((l=t.options.title)==null?void 0:l.text),5)):p("",!0),s==="subtitle"&&((r=t.options.sub_title)!=null&&r.show)?(y(),m("div",{key:1,class:"content-subtitle",style:w(b(G))},_(t.options.sub_title.text),5)):p("",!0),s==="button"&&((a=t.options.button)!=null&&a.show)?(y(),m("div",{key:2,style:w(b(K)),class:"content-actions"},[J("button",{class:C(["content-btn",(d=(u=t.options)==null?void 0:u.button)==null?void 0:d.style]),onClick:n[0]||(n[0]=k=>B(t.options.button.link))},_(t.options.button.text),3),(g=t.options.second_button)!=null&&g.show?(y(),m("button",{key:0,class:C(["content-btn",(h=(f=t.options)==null?void 0:f.second_button)==null?void 0:h.style]),onClick:n[1]||(n[1]=k=>B(t.options.second_button.link))},_(t.options.second_button.text),3)):p("",!0)],4)):p("",!0),s==="Auth Icons"&&t.tKey==="non_auth"?O(t.$slots,"socials",{key:3},void 0,!0):p("",!0)]}),_:3},8,["list"])],6))}}}),Z=Q(W,[["__scopeId","data-v-63754e98"]]);export{Z as default};
