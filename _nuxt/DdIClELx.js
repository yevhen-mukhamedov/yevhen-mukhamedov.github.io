import{V as I,j as y,o as l,f as p,x as u,u as V,X as t,b as x,m as C,a4 as B,bf as i,a5 as A,a6 as b}from"./JoFQSik9.js";import{_ as N}from"./B92FZ1g3.js";const k=I({__name:"NgSearchInput",props:{isLabelShown:{type:Boolean},inputName:{},labelKey:{},inputType:{},isReadonly:{type:Boolean},isDisabled:{type:Boolean},placeholderText:{},isRequired:{type:Boolean},isAutocomplete:{type:Boolean},classes:{},isValidatedSeparately:{type:Boolean},validationRules:{},supportingText:{},suffixKey:{},optionalText:{},focusOnMounted:{type:Boolean},mask:{},modelValue:{},searchIconSize:{default:20},onChangeAction:{},onInputAction:{}},emits:["update:modelValue","input","change"],setup(r,{emit:m}){const n=r,a=m,o=y({get:()=>n.modelValue,set:e=>{a("update:modelValue",e)}}),d=()=>{o.value=""},_=i(e=>{if(n.onInputAction){n.onInputAction(e);return}a("input")}),f=i(e=>{if(n.onChangeAction){n.onChangeAction(e);return}a("change")});return(e,s)=>{const c=A,h=N;return l(),p(h,C(n,{modelValue:t(o),"onUpdate:modelValue":s[0]||(s[0]=g=>B(o)?o.value=g:null),class:["ng-search-input",e.classes],onInput:t(_),onChange:t(f)}),{leftIcon:u(()=>[V(c,{size:e.searchIconSize,name:"search"},null,8,["size"])]),rightIcon:u(()=>[t(o)?(l(),p(c,{key:0,class:"clear-search tw-cursor-pointer",size:14,name:"close",onClick:d})):x("",!0)]),_:1},16,["modelValue","class","onInput","onChange"])}}}),T=b(k,[["__scopeId","data-v-96e3f5fc"]]);export{T as _};
