const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./7PQ9d4dP.js","./entry.ipf8rPRR.css"])))=>i.map(i=>d[i]);
import{d as Z,a as se,a0 as O,bJ as ne,H as f,w as oe,k as ie,bu as re,o as g,c as w,b as P,C as b,g as r,B as M,a9 as X,i as $,r as h,t as S,e as _,T as ce,N as ue,O as pe,U as x,v as de,h as ee,by as fe,aL as ge,A as me,V as he}from"./7PQ9d4dP.js";import{u as ve}from"./BQWyzQZp.js";import{v as ye}from"./D0WEjs_T.js";const be=(n,c)=>{n.parentElement||document.body.appendChild(n);const l=window.innerHeight,t=c.top,d=l-(c.top+c.height);n.style.visibility="hidden",n.style.display="block";const D=n.offsetHeight;n.style.visibility="",n.style.display="",d>=t?n.style.top=`${c.top+c.height}px`:n.style.top=`${c.top-D-20}px`,n.style.left=`${c.left}px`,n.style.right="auto",n.style.position="fixed",n.style.width=`${c.width}px`,n.style.maxHeight="300px",n.style.height="fit-content",n.style.maxWidth=`${c.width}px`,n.style.minWidth=`${c.width}px`,n.style.minHeight="80px",n.style.zIndex="9999",n.parentElement||document.body.removeChild(n)},Pe={key:0,class:"multiselect-search-container tw-relative tw-pb-2"},$e={key:0,class:"ng-multiselect-label fg-main-12-regular"},Se={class:"fg-main-14-regular tw-line-clamp-1"},Le=["onMousedown"],Ce=Z({__name:"NgSingleSelector",props:{isRequired:{type:Boolean,default:!0},isValidatedSeparately:{type:Boolean,default:!1},isOptionSearchable:{type:Boolean,default:!1},isCloseOnSelected:{type:Boolean,default:!0},isHideSelected:{type:Boolean,default:!1},isDefaultClass:{type:Boolean,default:!0},isFullOption:{type:Boolean,default:!1},isAllowEmpty:{type:Boolean,default:!1},isSearchable:{type:Boolean,default:!1},isSearchIcon:{type:Boolean},isDisabled:{type:Boolean,default:!1},validationRules:{},returnedOption:{default:null},defaultOption:{default:null},displayedOption:{default:""},additionalLabel:{default:""},deselectLabel:{default:""},selectedLabel:{default:""},selectLabel:{default:""},placeholder:{default:""},classList:{default:""},inputName:{default:""},modelValue:{},itemList:{},isPreventAutofocus:{type:Boolean,default:!1},modalOverflow:{type:Boolean,default:!1},openDirection:{default:"auto"}},emits:["update:modelValue","change","close","open"],setup(n,{emit:c}){const{t:l}=se(),t=n,d=fe(),D=e=>typeof e=="object"?Object.values(e).join(" "):String(e),q=()=>{const e={};return t.isSearchable&&(e.customLabel=D),e},v=O(null),y=O(),k=O(`ng-single-selector-footer-${ye()}`),E=O(!1),z=ne(),F=O(""),B=()=>{t.defaultOption&&(v.value=t.defaultOption)},V=f(()=>t.additionalLabel?t.isRequired?t.additionalLabel:`${t.additionalLabel} (${l("optional")})`:""),a=f(()=>t.placeholder?t.isRequired?t.placeholder:`${t.placeholder} (${l("optional")})`:""),o=()=>{C("open"),L()},N=()=>{C("close"),T()},m=O(null),L=()=>{t.modalOverflow&&(d||(m.value&&cancelAnimationFrame(m.value),m.value=requestAnimationFrame(()=>{j(),L()})))},T=()=>{t.modalOverflow&&(d||m.value&&(cancelAnimationFrame(m.value),m.value=null))},j=()=>{if(!t.modalOverflow||d)return;const e=y.value.$el;if(e){const p=e.querySelector(".multiselect__content-wrapper");if(p&&e){const s=e.getBoundingClientRect();be(p,s)}}},H=()=>{const e=y.value.$el;if(e&&t.isSearchable){const p=e.querySelector(".multiselect__content-wrapper"),s=e.querySelector(".multiselect__input");if(p&&s){if(t.isOptionSearchable)s.placeholder=`${l("search")}...`,s.classList.add("ng-selector-search"),p.querySelector(".multiselect-search-container").prepend(s);else{const I=document.createElement("div");I.classList.add("ng-search-wrapper");const i=document.createElement("div");i.classList.add("ng-search-content");const W=document.createElement("div");W.classList.add("ng-selector-placeholder"),W.innerHTML=s.placeholder,s.placeholder="",I.append(i),i.append(W),s.before(I),i.append(s),t.isSearchIcon&&de(()=>import("./7PQ9d4dP.js").then(J=>J.ch),__vite__mapDeps([0,1]),import.meta.url).then(J=>{const G=document.createElement("img");G.classList.add("ng-search-icon"),G.src=J.default,I.prepend(G)})}s.addEventListener("click",()=>s.focus())}}},u=()=>{const e=y.value.$el;if(e){const p=e.querySelector(".multiselect__content-wrapper"),s=document.createElement("div");s.classList.add("ng-selector-footer"),s.id=k.value,p.append(s),E.value=!0}},C=c,Q=()=>{var e;if(!t.returnedOption||t.isFullOption){C("update:modelValue",v.value),C("change");return}t.returnedOption&&(C("update:modelValue",((e=v.value)==null?void 0:e[t.returnedOption])??""),C("change"))},te=f(()=>[`${t.isDefaultClass?"ng-single-selector":""}`,`${t.isSearchable?"ng-hide-placeholder":""}`,`${t.isDisabled?"disabled":""}`,`${U.value?"error":""}`,`${t.classList}`]),{errorMessage:U}=ve(()=>t.inputName,t.isValidatedSeparately?t.validationRules:null,{syncVModel:!0}),ae=()=>{const{$el:e,updateSearch:p}=y.value,s=e.querySelector(".multiselect__input");s&&(s!=null&&s.value)&&(s.value="",p())},le=(e="")=>{F.value=e};return oe(()=>t.defaultOption,()=>{B()}),ie(()=>{B(),H(),z.footer&&u()}),(e,p)=>{const s=ee,I=re("VueMultiselect");return g(),w("div",null,[P(I,ue({ref_key:"ngselector",ref:y,modelValue:r(v),"onUpdate:modelValue":p[0]||(p[0]=i=>pe(v)?v.value=i:null)},q(),{label:e.displayedOption,"close-on-select":e.isCloseOnSelected,"hide-selected":e.isHideSelected,"allow-empty":e.isAllowEmpty,searchable:e.isSearchable,"selected-label":e.selectedLabel,"select-label":e.selectLabel,"deselect-label":e.deselectLabel,placeholder:r(a),"tag-position":"bottom","preserve-search":!0,options:e.itemList,multiple:!1,class:r(te),"prevent-autofocus":e.isPreventAutofocus,"open-direction":e.openDirection,onSelect:Q,onRemove:Q,onOpen:o,onClose:N,onSearchChange:le}),{beforeList:b(()=>[t.isOptionSearchable?(g(),w("div",Pe,[P(s,{class:"tw-absolute tw-top-3.5 tw-left-4 tw-text-input-fg icon-search",size:20,name:"search"}),r(F).length?(g(),M(s,{key:0,class:"tw-absolute tw-top-4 tw-right-4 tw-text-input-fg icon-close",size:16,name:"close",onClick:X(ae,["prevent","stop"])})):$("",!0)])):$("",!0),h(e.$slots,"before-list")]),singleLabel:b(({option:i})=>[h(e.$slots,"selected-option",{props:i},()=>[e.additionalLabel?(g(),w("span",$e,S(r(V)),1)):$("",!0),_("span",Se,S(i[e.displayedOption]||i),1)])]),option:b(({option:i})=>[h(e.$slots,"option",{props:i})]),afterList:b(()=>[r(E)?(g(),M(ce,{key:0,to:`#${r(k)}`},[h(e.$slots,"footer")],8,["to"])):$("",!0),h(e.$slots,"after-list")]),noOptions:b(()=>[h(e.$slots,"no-options")]),caret:b(({toggle:i})=>[h(e.$slots,"caret",{toggle:i},()=>[_("div",{class:"caret",onMousedown:X(i,["prevent","stop"])},[P(s,{name:"toggle",size:16})],40,Le)])]),_:3},16,["modelValue","label","close-on-select","hide-selected","allow-empty","searchable","selected-label","select-label","deselect-label","placeholder","options","class","prevent-autofocus","open-direction"]),r(U)?(g(),w("div",{key:0,class:x(["ng-selector-error-message",{disabled:e.isDisabled}])},S(r(U)),3)):$("",!0)])}}}),Oe={class:"ng-pagination"},_e={key:0,class:"pagination-info-container"},we={key:0,class:"pagination-info"},ke={class:"pagination"},R="...",Y=3,A=1,K=1,Re=Z({__name:"NgPagination",props:{currentPage:{},pages:{},total:{},perPageList:{},perPage:{},defaultPerPage:{default:10},withPerPage:{type:Boolean,default:!0}},emits:["change"],setup(n,{emit:c}){const l=n,t=c,d=O({page:1,perPage:l.defaultPerPage}),D=f(()=>A+5),q=f(()=>Math.max(l.currentPage-A,1)),v=f(()=>Math.min(l.currentPage+A,l.pages)),y=f(()=>q.value>2),k=f(()=>v.value<l.pages-2),E=f(()=>{if(D.value>=l.pages)return V(1,l.pages);if(!y.value&&k.value){const a=Y+2*A;return[...V(1,a),R,l.pages]}if(y.value&&!k.value){const a=Y+2*A,o=V(l.pages-a+1,l.pages);return[K,R,...o]}if(y.value&&k.value){const a=V(q.value,v.value);return[K,R,...a,R,l.pages]}return[]}),z=f(()=>l.perPage?l.perPage*(l.currentPage-1)+1:0),F=f(()=>l.perPage&&l.total?l.perPage*l.currentPage>l.total?l.total:l.perPage*l.currentPage:0),B=a=>{d.value.page=a,t("change",d.value)};function V(a,o){const N=o-a+1;return Array.from({length:N},(m,L)=>L+a)}return(a,o)=>{var H;const N=Ce,m=ee,L=ge,T=me,j=he;return g(),w("div",Oe,[a.withPerPage?(g(),w("div",_e,[a.total?(g(),w("div",we,[_("div",null,S(r(z))+"-"+S(r(F)),1),_("div",null,S(a.$t("of")),1),_("div",null,S(a.total),1)])):$("",!0),(H=a.perPageList)!=null&&H.length?(g(),M(N,{key:1,modelValue:r(d).perPage,"onUpdate:modelValue":[o[0]||(o[0]=u=>r(d).perPage=u),o[1]||(o[1]=u=>t("change",r(d)))],"item-list":a.perPageList,"default-option":a.perPageList[0],class:"pagination-perpage"},null,8,["modelValue","item-list","default-option"])):$("",!0)])):$("",!0),_("div",ke,[h(a.$slots,"prev",{},()=>[P(L,{class:"pagination-button pagination-prev","color-type":"secondary","is-disabled":a.currentPage===K,onClick:o[2]||(o[2]=u=>B(a.currentPage-1))},{default:b(()=>[P(m,{name:"pagination-left",size:16})]),_:1},8,["is-disabled"])]),P(j,{list:r(E),"key-name":"pagination",container:!1},{item:b(({item:u})=>[u===R?h(a.$slots,"divider",{key:0},()=>[_("div",null,S(R))]):(g(),M(T,{key:1,"label-key":u,"color-type":u===a.currentPage?"primary":"secondary",class:x(["pagination-button",{"pagination-current":u===a.currentPage}]),onClick:C=>B(u)},null,8,["label-key","color-type","class","onClick"]))]),_:3},8,["list"]),h(a.$slots,"next",{},()=>[P(L,{class:"pagination-button pagination-next","color-type":"secondary","is-disabled":a.currentPage===a.pages,onClick:o[3]||(o[3]=u=>B(a.currentPage+1))},{default:b(()=>[P(m,{name:"pagination-right",size:16})]),_:1},8,["is-disabled"])])])])}}});export{Ce as _,Re as a,be as s};