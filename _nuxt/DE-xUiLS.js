import{V as J,W as ge,a0 as X,a1 as Y,i as m,j as O,ay as W,p as Q,o as y,c as V,u as o,X as s,a4 as Z,ag as j,a as l,t as k,aD as G,x as v,n as F,az as fe,a6 as ee,_ as ye,aB as ve,N as he,aH as ke,K as be,f as P,b as R,a3 as Ce,a5 as we}from"./JoFQSik9.js";import{M as Ne,C as U,_ as $e}from"./BrvGPcun.js";import{_ as se}from"./ClZaf3ID.js";import{_ as Me}from"./sQNTZNBq.js";import{_ as Te}from"./BQxgWOyN.js";import{_ as xe}from"./1-N0yLDQ.js";import{_ as Ve}from"./B3BteicU.js";import{_ as Ie}from"./Cf_ozb67.js";import{_ as De}from"./Qsi9eMhV.js";import{u as Be}from"./CXetEtI4.js";import{u as Le}from"./CrHKx1Rg.js";import"./B92FZ1g3.js";import"./BM2BYuY2.js";import"./D8aEg3BZ.js";import"./BKAhWZth.js";import"./DTX8-FfK.js";import"./DdIClELx.js";import"./Cel6GgYv.js";import"./Bcnv4IFf.js";const Se={class:"message-date--mobile"},Ee=["src"],Ae={class:"message-text"},ze={class:"tw-flex tw-items-center tw-justify-between tw-w-full"},Pe={class:"message-title"},Re={class:"message-date"},Ue={class:"message-desc"},Oe=J({__name:"MessageItem",props:{item:{},checked:{type:Boolean}},emits:["select"],setup(H,{emit:C}){const r=H,i=C,I=ge(),w=X(),{isMobile:D}=Y(w),d=m(!1),B=O(()=>{var n;return r.item.type===W.tier_push||r.item.type===W.tier_modal?"/img/tierNotyBanner.png":((n=r.item.message)==null?void 0:n.banner)||r.item.message_default.banner||"/img/tierNotyBanner.png"}),L=O(()=>({"message--checked":d.value,"message--mobile":D.value,"message--unread":!r.item.is_read}));return Q(()=>r.checked,n=>{d.value=n}),(n,p)=>{const S=se,N=fe;return y(),V("div",{class:F(["message",s(L)])},[o(S,{modelValue:s(d),"onUpdate:modelValue":p[0]||(p[0]=b=>Z(d)?d.value=b:null),type:s(j).check,class:"message-checkbox",onChange:p[1]||(p[1]=b=>i("select",n.item.id))},null,8,["modelValue","type"]),l("span",Se,k(s(G)(n.item.date)),1),l("img",{src:s(B),alt:"banner",class:"message-img"},null,8,Ee),l("div",Ae,[o(N,{to:s(I)({path:`/messages/${n.item.id}`})},{default:v(()=>[l("div",ze,[l("h2",Pe,k(n.item.message.subject||n.item.message_default.subject),1),l("span",Re,k(s(G)(n.item.date)),1)]),l("p",Ue,k(n.item.message.description||n.item.message_default.description),1)]),_:1},8,["to"])])],2)}}}),je=ee(Oe,[["__scopeId","data-v-1ea507b2"]]),Fe={class:"ng-messages-caption ng-flex-center"},He={class:"messages-wrapper"},qe={class:"messages-actions"},Ke={key:0,class:"tw-flex tw-items-center tw-justify-between"},We={class:"tw-text-center"},Ge={key:1,class:"messages-list"},Je=J({__name:"index",async setup(H){let C,r;const{t:i}=ye(),I={type:Ne.ACCORDION,style:{accordionContainerClass:"filter-accordion"}},w=[{key:0,label:i("all")},{key:1,label:i("read")},{key:2,label:i("unread")}],D=ve(),{fetchMessages:d,setRead:B,setUnread:L,deleteMessages:n,setIsUnreadUserMessages:p}=D,S=X(),{isLessContainerDesktop:N}=Y(S),b={read:B,unread:L,delete:n},_=m({page:1,type:0,from:"",to:"",search:"",theme:"dark",limit:10}),g=m([]),h=m(null),u=m(!1),a=m([]),$=m(!1),q=m([]),M=m(!1),te=O(()=>{var e,t;return((e=a.value)==null?void 0:e.length)===((t=g.value)==null?void 0:t.length)?j.check:j.indeterminate});Q(()=>a.value,()=>{var e;u.value=!1,((e=a.value)==null?void 0:e.length)>0&&(u.value=!0)});const ae=()=>{u.value?a.value=g.value.map(e=>e.id):a.value=[]},ne=e=>{a.value.includes(e)?a.value=a.value.filter(t=>t!==e):a.value=[...a.value,e],a.value.length+1<(_.value.limit??0)&&(u.value=!1),a.value.length+1===_.value.limit&&(u.value=!0)},oe=e=>{_.value.page=e.page,T()},le=()=>{q.value=[{target:"search",componentName:U.SEARCH_INPUT,props:{placeholderText:i("search_dots"),modelValue:"",isRequired:!0}},{target:"date",componentName:U.DATE_PICKER,props:{modelValue:"",modelType:"yyyy-MM-dd",format:"yyyy-MM-dd",isDisabled:!1,labelText:i("date"),range:!0,inputName:"date",multiCalendar:!0},mobile:{redirect:!0}},{target:"type",componentName:U.SINGLE_SELECTOR,props:{modelValue:"",additionalLabel:i("type"),displayedOption:"label",returnedOption:"key",defaultOption:w[0],itemList:w,isAllowEmpty:!1},mobile:{redirect:!0}}]},ie=e=>{var c;const t=((c=e==null?void 0:e.date)==null?void 0:c.length)>0;_.value={..._.value,from:t?e.date[0]:"",to:t?e.date[1]:"",search:e.search,type:Number(e.type)||0},T()},E=async e=>{if(e==="delete"){g.value=g.value.filter(A=>!a.value.includes(A.id));const c=await b[e](a.value);p(c.unread_company_messages),M.value=!1;return}const t=await b[e](a.value);p(t.unread_company_messages),a.value=[],T()},T=async()=>{try{$.value=!0;const e=await d(Ce(_.value));g.value=e.messages,h.value=e.pagination,p(e.unread_company_messages)}catch(e){console.error("getData messages -> index",e)}finally{$.value=!1}};return he(()=>le()),[C,r]=ke(async()=>Be(async()=>{await T()},"$ogd0YzJqUM")),await C,r(),Le(),(e,t)=>{const c=we,A=$e,re=se,z=Me,ce=Te,me=je,pe=xe,ue=Ve,de=Ie,_e=De;return y(),V("div",{class:F(["messages",{"messages--mobile":s(N)}])},[l("h1",Fe,[o(c,{name:"message_unread",size:24}),be(" "+k(s(i)("messages")),1)]),o(A,{"mobile-settings":I,list:s(q),class:F(["filter-list",{"filter-list--mobile":s(N)}]),onChange:ie},null,8,["list","class"]),o(de,{loading:s($)},{default:v(()=>{var x,K;return[l("div",He,[l("div",qe,[o(re,{modelValue:s(u),"onUpdate:modelValue":t[0]||(t[0]=f=>Z(u)?u.value=f:null),type:s(te),onChange:ae},null,8,["modelValue","type"]),(x=s(a))!=null&&x.length?(y(),V("div",Ke,[o(z,{"is-with-icon":"",class:"messages-action","color-type":"transparent","icon-position":"right","label-key":"read",onClick:t[1]||(t[1]=f=>E("read"))},{default:v(()=>[o(c,{name:"message_read",size:25})]),_:1}),o(z,{"is-with-icon":"",class:"messages-action","color-type":"transparent","icon-position":"right","label-key":"unread",onClick:t[2]||(t[2]=f=>E("unread"))},{default:v(()=>[o(c,{name:"message_unread",size:25})]),_:1}),o(z,{"is-with-icon":"",class:"messages-action","color-type":"transparent","icon-position":"right","label-key":"delete",onClick:t[3]||(t[3]=f=>M.value=!0)},{default:v(()=>[o(c,{name:"delete",size:25})]),_:1})])):R("",!0)]),!((K=s(g))!=null&&K.length)&&!s($)?(y(),P(ce,{key:0},{content:v(()=>[l("div",We,k(s(i)("no_result")),1)]),_:1})):(y(),V("div",Ge,[o(pe,{list:s(g),container:!1,"key-name":"messages-list"},{item:v(({item:f})=>[o(me,{item:f,checked:s(a).includes(f.id),onSelect:ne},null,8,["item","checked"])]),_:1},8,["list"]),s(h)&&s(h).total_pages>1?(y(),P(ue,{key:0,"current-page":s(_).page,pages:s(h).total_pages,"per-page":s(h).per_page,total:s(h).total,class:"tw-py-4",onChange:oe},null,8,["current-page","pages","per-page","total"])):R("",!0)]))])]}),_:1},8,["loading"]),s(M)?(y(),P(_e,{key:0,onConfirm:t[4]||(t[4]=x=>E("delete")),onClose:t[5]||(t[5]=x=>M.value=!1)})):R("",!0)],2)}}}),gs=ee(Je,[["__scopeId","data-v-dba0b981"]]);export{gs as default};
