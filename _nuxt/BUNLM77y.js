import{o as d,c as v,a as w,b as h,m as q,w as he,n as f,F as ee,r as le,d as D,e as We,t as Ce,f as L,T as Cl,g as Fe,v as ft,h as Pe,i as Le,j as K,k as Kn,l as js,p as Se,q as ue,s as F,u as Ee,x as U,y as mr,z as Ie,A as hr,B as Us,C as Jn,D as hn,E as Vs,G as Al,H as br,I as Oa,J as Ws,K as Qs,L as qs}from"./JoFQSik9.js";import{defineConfig as Ks}from"./nRF_dJSk.js";const Js={vueform:{elements:{list:{add:"+ Add",remove:"&times;"},file:{defaultName:"File",dndTitle:"Upload file",dndDescription:"Drop file or click here to upload",removeConfirm:"By removing the file it will be permanently deleted. Are you sure to continue?",select:"Select file",upload:"Upload"},multifile:{uploadButton:"Upload files",dndTitle:"Upload files",dndDescription:"Drop files or click here to upload"},gallery:{uploadButton:"Upload images",dndTitle:"Upload images",dndDescription:"Drop images or click here to upload"},phone:{ariaLabel:"Select a country"}},steps:{finish:"Finish",next:"Next",previous:"Previous"},editor:{acceptedMimesError:"Accepted mimes are: :mimes",acceptedExtensionsError:"Accepted extenions are: :extensions"},datepicker:{weekdays:{shorthand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},months:{shorthand:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longhand:["January","February","March","April","May","June","July","August","September","October","November","December"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0,ordinal:function(t){var e=t%100;if(e>3&&e<21)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},rangeSeparator:" to ",weekAbbreviation:"Wk",scrollTitle:"Scroll to increment",toggleTitle:"Click to toggle",amPM:["AM","PM"],yearAriaLabel:"Year",monthAriaLabel:"Month",hourAriaLabel:"Hour",minuteAriaLabel:"Minute"},dateFormats:{datetimeSeconds24:"YYYY-MM-DD HH:mm:ss",datetimeSeconds12:"YYYY-MM-DD hh:mm:ss a",datetime24:"YYYY-MM-DD HH:mm",datetime12:"YYYY-MM-DD hh:mm a",timeSeconds24:"HH:mm:ss",timeSeconds12:"hh:mm:ss a",time24:"HH:mm",time12:"hh:mm a",date:"YYYY-MM-DD"},multiselect:{multipleLabelOne:"1 option selected",multipleLabelMore:":options options selected",noResults:"No options found",noOptions:"The list is empty"},defaultMessage:"Invalid field",a11y:{file:{description:"Press Backspace to remove"},list:{remove:"Remove item button"}},countries:{AF:"Afghanistan",AL:"Albania",DZ:"Algeria",AS:"American Samoa",AD:"Andorra",AO:"Angola",AI:"Anguilla",AG:"Antigua & Barbuda",AR:"Argentina",AM:"Armenia",AW:"Aruba",AC:"Ascension Island",AU:"Australia",AT:"Austria",AZ:"Azerbaijan",BS:"Bahamas",BH:"Bahrain",BD:"Bangladesh",BB:"Barbados",BY:"Belarus",BE:"Belgium",BZ:"Belize",BJ:"Benin",BM:"Bermuda",BT:"Bhutan",BO:"Bolivia",BA:"Bosnia & Herzegovina",BW:"Botswana",BR:"Brazil",IO:"British Indian Ocean Territory",VG:"British Virgin Islands",BN:"Brunei",BG:"Bulgaria",BF:"Burkina Faso",BI:"Burundi",KH:"Cambodia",CM:"Cameroon",CA:"Canada",CV:"Cape Verde",BQ:"Caribbean Netherlands",KY:"Cayman Islands",CF:"Central African Republic",TD:"Chad",CL:"Chile",CN:"China",CO:"Colombia",KM:"Comoros",CG:"Congo - Brazzaville",CD:"Congo - Kinshasa",CK:"Cook Islands",CR:"Costa Rica",CI:"Côte d’Ivoire",HR:"Croatia",CU:"Cuba",CW:"Curaçao",CY:"Cyprus",CZ:"Czechia",DK:"Denmark",DJ:"Djibouti",DM:"Dominica",DO:"Dominican Republic",EC:"Ecuador",EG:"Egypt",SV:"El Salvador",GQ:"Equatorial Guinea",ER:"Eritrea",EE:"Estonia",SZ:"Eswatini",ET:"Ethiopia",FK:"Falkland Islands (Islas Malvinas)",FO:"Faroe Islands",FJ:"Fiji",FI:"Finland",FR:"France",GF:"French Guiana",PF:"French Polynesia",GA:"Gabon",GM:"Gambia",GE:"Georgia",DE:"Germany",GH:"Ghana",GI:"Gibraltar",GR:"Greece",GL:"Greenland",GD:"Grenada",GP:"Guadeloupe",GU:"Guam",GT:"Guatemala",GN:"Guinea",GW:"Guinea-Bissau",GY:"Guyana",HT:"Haiti",HN:"Honduras",HK:"Hong Kong",HU:"Hungary",IS:"Iceland",IN:"India",ID:"Indonesia",IR:"Iran",IQ:"Iraq",IE:"Ireland",IL:"Israel",IT:"Italy",JM:"Jamaica",JP:"Japan",JO:"Jordan",KZ:"Kazakhstan",KE:"Kenya",KI:"Kiribati",XK:"Kosovo",KW:"Kuwait",KG:"Kyrgyzstan",LA:"Laos",LV:"Latvia",LB:"Lebanon",LS:"Lesotho",LR:"Liberia",LY:"Libya",LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",MO:"Macao",MG:"Madagascar",MW:"Malawi",MY:"Malaysia",MV:"Maldives",ML:"Mali",MT:"Malta",MH:"Marshall Islands",MQ:"Martinique",MR:"Mauritania",MU:"Mauritius",MX:"Mexico",FM:"Micronesia",MD:"Moldova",MC:"Monaco",MN:"Mongolia",ME:"Montenegro",MS:"Montserrat",MA:"Morocco",MZ:"Mozambique",MM:"Myanmar (Burma)",NA:"Namibia",NR:"Nauru",NP:"Nepal",NL:"Netherlands",NC:"New Caledonia",NZ:"New Zealand",NI:"Nicaragua",NE:"Niger",NG:"Nigeria",NU:"Niue",NF:"Norfolk Island",KP:"North Korea",MK:"North Macedonia",MP:"Northern Mariana Islands",NO:"Norway",OM:"Oman",PK:"Pakistan",PW:"Palau",PS:"Palestine",PA:"Panama",PG:"Papua New Guinea",PY:"Paraguay",PE:"Peru",PH:"Philippines",PL:"Poland",PT:"Portugal",PR:"Puerto Rico",QA:"Qatar",RE:"Réunion",RO:"Romania",RU:"Russia",RW:"Rwanda",WS:"Samoa",SM:"San Marino",ST:"São Tomé & Príncipe",SA:"Saudi Arabia",SN:"Senegal",RS:"Serbia",SC:"Seychelles",SL:"Sierra Leone",SG:"Singapore",SX:"Sint Maarten",SK:"Slovakia",SI:"Slovenia",SB:"Solomon Islands",SO:"Somalia",ZA:"South Africa",KR:"South Korea",SS:"South Sudan",ES:"Spain",LK:"Sri Lanka",BL:"St. Barthélemy",SH:"St. Helena",KN:"St. Kitts & Nevis",LC:"St. Lucia",MF:"St. Martin",PM:"St. Pierre & Miquelon",VC:"St. Vincent & Grenadines",SD:"Sudan",SR:"Suriname",SE:"Sweden",CH:"Switzerland",SY:"Syria",TW:"Taiwan",TJ:"Tajikistan",TZ:"Tanzania",TH:"Thailand",TL:"Timor-Leste",TG:"Togo",TK:"Tokelau",TO:"Tonga",TT:"Trinidad & Tobago",TN:"Tunisia",TR:"Türkiye",TM:"Turkmenistan",TC:"Turks & Caicos Islands",TV:"Tuvalu",VI:"U.S. Virgin Islands",UG:"Uganda",UA:"Ukraine",AE:"United Arab Emirates",GB:"United Kingdom",US:"United States",UY:"Uruguay",UZ:"Uzbekistan",VU:"Vanuatu",VA:"Vatican City",VE:"Venezuela",VN:"Vietnam",WF:"Wallis & Futuna",YE:"Yemen",ZM:"Zambia",ZW:"Zimbabwe"}},validation:{accepted:"The :attribute must be accepted.",active_url:"The :attribute is not a valid URL.",after:"The :attribute must be a date after :date.",after_or_equal:"The :attribute must be a date after or equal to :date.",alpha:"The :attribute may only contain letters.",alpha_dash:"The :attribute may only contain letters, numbers, dashes and underscores.",alpha_num:"The :attribute may only contain letters and numbers.",array:"The :attribute must be an array.",before:"The :attribute must be a date before :date.",before_or_equal:"The :attribute must be a date before or equal to :date.",between:{numeric:"The :attribute must be between :min and :max.",file:"The :attribute must be between :min and :max kilobytes.",string:"The :attribute must be between :min and :max characters.",array:"The :attribute must have between :min and :max items."},boolean:"The :attribute field must be true or false.",captcha:"Please verify that you are not a robot.",completed:"Please fill in a valid phone number.",confirmed:"The :attribute confirmation does not match.",date:"The :attribute is not a valid date.",date_format:"The :attribute does not match the format :format.",date_equals:"The :attribute must be equal to :date.",different:"The :attribute and :other must be different.",digits:"The :attribute must be :digits digits.",digits_between:"The :attribute must be between :min and :max digits.",dimensions:"The :attribute has invalid image dimensions.",distinct:"The :attribute field has a duplicate value.",email:"The :attribute must be a valid email address.",exists:"The selected :attribute is invalid.",file:"The :attribute must be a file.",filled:"The :attribute field must have a value.",gt:{numeric:"The :attribute must be greater than :value.",file:"The :attribute must be greater than :value kilobytes.",string:"The :attribute must be greater than :value characters.",array:"The :attribute must have more than :value items."},gte:{numeric:"The :attribute must be greater than or equal :value.",file:"The :attribute must be greater than or equal :value kilobytes.",string:"The :attribute must be greater than or equal :value characters.",array:"The :attribute must have :value items or more."},image:"The :attribute must be an image.",in:"The selected :attribute is invalid.",in_array:"The :attribute field does not exist in :other.",integer:"The :attribute must be an integer.",ip:"The :attribute must be a valid IP address.",ipv4:"The :attribute must be a valid IPv4 address.",ipv6:"The :attribute must be a valid IPv6 address.",json:"The :attribute must be a valid JSON string.",lt:{numeric:"The :attribute must be less than :value.",file:"The :attribute must be less than :value kilobytes.",string:"The :attribute must be less than :value characters.",array:"The :attribute must have less than :value items."},lte:{numeric:"The :attribute must be less than or equal :value.",file:"The :attribute must be less than or equal :value kilobytes.",string:"The :attribute must be less than or equal :value characters.",array:"The :attribute must not have more than :value items."},max:{numeric:"The :attribute may not be greater than :max.",file:"The :attribute may not be greater than :max kilobytes.",string:"The :attribute may not be greater than :max characters.",array:"The :attribute may not have more than :max items."},mimes:"The :attribute must be a file of type: :values.",mimetypes:"The :attribute must be a file of type: :values.",min:{numeric:"The :attribute must be at least :min.",file:"The :attribute must be at least :min kilobytes.",string:"The :attribute must be at least :min characters.",array:"The :attribute must have at least :min items."},not_in:"The selected :attribute is invalid.",not_regex:"The :attribute format is invalid.",numeric:"The :attribute must be a number.",present:"The :attribute field must be present.",regex:"The :attribute format is invalid.",required:"The :attribute field is required.",required_if:"The :attribute field is required when :other is :value.",required_unless:"The :attribute field is required unless :other is in :values.",required_with:"The :attribute field is required when :values is present.",required_with_all:"The :attribute field is required when :values are present.",required_without:"The :attribute field is required when :values is not present.",required_without_all:"The :attribute field is required when none of :values are present.",same:"The :attribute and :other must match.",size:{numeric:"The :attribute must be :size.",file:"The :attribute must be :size kilobytes.",string:"The :attribute must be :size characters.",array:"The :attribute must contain :size items."},string:"The :attribute must be a string.",timezone:"The :attribute must be a valid zone.",unique:"The :attribute has already been taken.",uploaded:"The :attribute failed to upload.",url:"The :attribute format is invalid.",uuid:"The :attribute must be a valid UUID.",remote:"The :attribute field is invalid."}};/*!
 * Vueform v1.9.9 (https://github.com/vueform/vueform)
 * Copyright (c) 2024 Adam Berecz <adam@vueform.com>
 * Licensed under the MIT License
 */var pi={data(){return{merge:!0,defaultClasses:{form:""}}}};function _s(t,e,n,r,i,l){const a=ue("FormElements");return d(),v("form",{class:f(t.classes.form),onSubmit:e[0]||(e[0]=he((...o)=>t.submit&&t.submit(...o),["prevent"]))},[D(t.$slots,"empty",{classes:t.classes},()=>[t.showMessages?(d(),L(F("FormMessages"),{key:0})):h("v-if",!0),t.showErrors?(d(),L(F("FormErrors"),{key:1})):h("v-if",!0),t.showLanguages?(d(),L(F("FormLanguages"),{key:2})):h("v-if",!0),t.showTabs?(d(),L(F("FormTabs"),{key:3})):h("v-if",!0),t.showSteps?(d(),L(F("FormSteps"),{key:4})):h("v-if",!0),Ee(a,null,{default:U(()=>[D(t.$slots,"default")]),_:3}),t.showStepsControls?(d(),L(F("FormStepsControls"),{key:5})):h("v-if",!0)])],34)}pi.render=_s;pi.__file="themes/blank/templates/Vueform.vue";var El={name:"Vueform",render:pi.render,data(){return{merge:!0,defaultClasses:{form:""}}}};El.__file="themes/vueform/templates/Vueform.vue";var fi={name:"FormErrors",data(){return{merge:!0,defaultClasses:{container:"",error:""}}}};const Gs=["innerHTML"];function Ys(t,e,n,r,i,l){return d(),v("div",{class:f(t.classes.container)},[(d(!0),v(ee,null,le(t.errors,(a,o,s)=>(d(),v("div",{class:f(t.classes.error),innerHTML:a,key:s},null,10,Gs))),128))],2)}fi.render=Ys;fi.__file="themes/blank/templates/FormErrors.vue";var Ll={name:"FormErrors",render:fi.render,data(){return{merge:!0,defaultClasses:{container:"vf-errors",container_sm:"vf-errors-sm",container_md:"",container_lg:"vf-errors-lg",error:"",$container:(t,{Size:e})=>[t.container,t[`container_${e}`]]}}}};function G(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}var Xs=`.vf-errors {
  background: var(--vf-bg-danger);
  color: var(--vf-color-danger);
  border-radius: var(--vf-radius-input);
  margin-bottom: var(--vf-gutter);
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
  padding: 0.5rem 0.75rem;
}

.vf-errors.vf-errors-sm {
  border-radius: var(--vf-radius-input-sm);
  margin-bottom: var(--vf-gutter-sm);
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-sm);
  padding: 0.5rem 0.75rem;
}

.vf-errors.vf-errors-lg {
  border-radius: var(--vf-radius-input-lg);
  margin-bottom: var(--vf-gutter-lg);
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
  padding: 0.75rem 1rem;
}`;G(Xs);Ll.__file="themes/vueform/templates/FormErrors.vue";var vi={name:"FormMessages",data(){return{merge:!0,defaultClasses:{container:"",message:""}}}};const Zs=["innerHTML"];function eu(t,e,n,r,i,l){return d(),v("div",{class:f(t.classes.container)},[(d(!0),v(ee,null,le(t.messages,(a,o,s)=>(d(),v("div",{class:f(t.classes.message),innerHTML:a,key:s},null,10,Zs))),128))],2)}vi.render=eu;vi.__file="themes/blank/templates/FormMessages.vue";var xl={name:"FormMessages",render:vi.render,data(){return{merge:!0,defaultClasses:{container:"vf-messages",container_sm:"vf-messages-sm",container_md:"",container_lg:"vf-messages-lg",message:"",$container:(t,{Size:e})=>[t.container,t[`container_${e}`]]}}}},tu=`.vf-messages {
  background: var(--vf-bg-success);
  color: var(--vf-color-success);
  border-radius: var(--vf-radius-input);
  margin-bottom: var(--vf-gutter);
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
  padding: 0.5rem 0.75rem;
}

.vf-messages.vf-messages-sm {
  border-radius: var(--vf-radius-input-sm);
  margin-bottom: var(--vf-gutter-sm);
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-sm);
  padding: 0.5rem 0.75rem;
}

.vf-messages.vf-messages-lg {
  border-radius: var(--vf-radius-input-lg);
  margin-bottom: var(--vf-gutter-lg);
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
  padding: 0.75rem 1rem;
}`;G(tu);xl.__file="themes/vueform/templates/FormMessages.vue";var gi={name:"FormLanguages",data(){return{merge:!0,defaultClasses:{container:""}}}};function nu(t,e,n,r,i,l){const a=ue("FormLanguage");return d(),v("ul",{class:f(t.classes.container)},[D(t.$slots,"default",{},()=>[(d(!0),v(ee,null,le(t.languages,(o,s,u)=>(d(),L(a,{language:o,code:s,key:u,onSelect:t.handleSelect},null,8,["language","code","onSelect"]))),128))])],2)}gi.render=nu;gi.__file="themes/blank/templates/FormLanguages.vue";var Sl={name:"FormLanguages",render:gi.render,data(){return{merge:!0,defaultClasses:{container:"vf-languages",container_sm:"vf-languages-sm",container_md:"",container_lg:"vf-languages-lg",$container:(t,{Size:e})=>[t.container,t[`container_${e}`]]}}}},ru=`.vf-languages {
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0 0 var(--vf-gutter-lg) 0;
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
}

.vf-languages.vf-languages-sm {
  margin: 0 0 var(--vf-gutter) 0;
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-sm);
}

.vf-languages.vf-languages-lg {
  margin: 0 0 var(--vf-gutter-lg) 0;
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
}`;G(ru);Sl.__file="themes/vueform/templates/FormLanguages.vue";var mi={name:"FormLanguage",data(){return{merge:!0,defaultClasses:{container:"",wrapper:""}}}};function iu(t,e,n,r,i,l){return d(),v("li",{class:f(t.classes.container)},[w("a",{href:"#",class:f(t.classes.wrapper),onClick:e[0]||(e[0]=he((...a)=>t.select&&t.select(...a),["prevent"]))},Ce(t.language),3)],2)}mi.render=iu;mi.__file="themes/blank/templates/FormLanguage.vue";var Tl={name:"FormLanguage",render:mi.render,data(){return{merge:!0,defaultClasses:{container:"vf-language",wrapper:"vf-language-wrapper",wrapper_sm:"vf-language-wrapper-sm",wrapper_md:"",wrapper_lg:"vf-language-wrapper-lg",wrapper_active:"vf-language-wrapper-active",wrapper_inactive:"",$wrapper:(t,{selected:e,Size:n})=>[t.wrapper,t[`wrapper_${n}`],e?t.wrapper_active:t.wrapper_inactive]}}}},au=`.vf-language {
  flex-grow: 1;
  flex-shrink: 1;
  width: 100%;
}

.vf-language-wrapper {
  padding: 0.5rem 1rem;
  display: block;
  margin-left: 1px;
  margin-right: 1px;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  color: var(--vf-color-input);
  text-align: center;
}

.vf-language-wrapper:hover {
  text-decoration: none;
}

.vf-language-wrapper.vf-language-wrapper-sm {
  padding: 0.375rem 0.875rem;
}

.vf-language-wrapper.vf-language-wrapper-lg {
  padding: 0.5rem 1rem;
}

.vf-language-wrapper.vf-language-wrapper-active {
  border-color: var(--vf-primary);
}

.vf-language-wrapper.vf-language-wrapper-invalid {
  border-color: var(--vf-danger);
  color: var(--vf-color-danger);
}`;G(au);Tl.__file="themes/vueform/templates/FormLanguage.vue";var hi={name:"FormTabs",data(){return{merge:!0,defaultClasses:{container:""}}}};function lu(t,e,n,r,i,l){const a=ue("FormTab");return d(),v("ul",{class:f(t.classes.container),role:"tablist"},[D(t.$slots,"default",{},()=>[(d(!0),v(ee,null,le(t.tabs,(o,s,u)=>(d(),L(a,q({ref_for:!0},o,{name:s,index:u,key:s}),null,16,["name","index"]))),128))])],2)}hi.render=lu;hi.__file="themes/blank/templates/FormTabs.vue";var Bl={name:"FormTabs",render:hi.render,data(){return{merge:!0,defaultClasses:{container:"vf-tabs",container_sm:"vf-tabs-sm",container_md:"",container_lg:"vf-tabs-lg",$container:(t,{Size:e})=>[t.container,t[`container_${e}`]]}}}},ou=`.vf-tabs {
  display: flex;
  align-items: flex-end;
  list-style: none;
  padding: 0;
  margin: 0 0 var(--vf-gutter) 0;
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
}

.vf-tabs.vf-tabs-sm {
  margin: 0 0 var(--vf-gutter) 0;
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-sm);
}

.vf-tabs.vf-tabs-lg {
  margin: 0 0 var(--vf-gutter-lg) 0;
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
}`;G(ou);Bl.__file="themes/vueform/templates/FormTabs.vue";var bi={name:"FormTab",data(){return{merge:!0,defaultClasses:{container:"",wrapper:""}}}};const su=["aria-selected"],uu={key:0},du=["innerHTML"];function cu(t,e,n,r,i,l){return Fe((d(),v("li",{class:f(t.classes.container)},[w("div",{class:f(t.classes.wrapper),tabindex:"0",role:"tab","aria-selected":t.active,onClick:e[0]||(e[0]=he((...a)=>t.select&&t.select(...a),["prevent"])),onKeypress:e[1]||(e[1]=We(he((...a)=>t.select&&t.select(...a),["prevent"]),["enter","space"]))},[D(t.$slots,"default",{},()=>[h(" If label is a component "),t.isLabelComponent?(d(),v("span",uu,[(d(),L(F(t.tabLabel),{form$:t.form$},null,8,["form$"]))])):(d(),v(ee,{key:1},[h(" If label is HTML "),w("span",{innerHTML:t.tabLabel},null,8,du)],2112))])],42,su)],2)),[[ft,t.visible]])}bi.render=cu;bi.__file="themes/blank/templates/FormTab.vue";var Il={name:"FormTab",render:bi.render,data(){return{merge:!0,defaultClasses:{container:"vf-tab",wrapper:"vf-tab-wrapper",wrapper_active:"vf-tab-wrapper-active",wrapper_inactive:"",wrapper_valid:"",wrapper_invalid:"vf-tab-wrapper-invalid",wrapper_sm:"vf-tab-wrapper-sm",wrapper_md:"",wrapper_lg:"vf-tab-wrapper-lg",$container:(t,{})=>[t.container],$wrapper:(t,{active:e,invalid:n,Size:r})=>[t.wrapper,t[`wrapper_${r}`],e?t.wrapper_active:t.wrapper_inactive,n?t.wrapper_invalid:t.wrapper_valid]}}}},pu=`.vf-tab-wrapper {
  padding: 0.5rem 1rem;
  display: block;
  margin-left: 1px;
  margin-right: 1px;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  color: var(--vf-color-input);
}

.vf-tab-wrapper:hover {
  text-decoration: none;
}

.vf-tab-wrapper.vf-tab-wrapper-sm {
  padding: 0.375rem 0.875rem;
}

.vf-tab-wrapper.vf-tab-wrapper-lg {
  padding: 0.5rem 1rem;
}

.vf-tab-wrapper.vf-tab-wrapper-active {
  border-color: var(--vf-primary);
}

.vf-tab-wrapper.vf-tab-wrapper-invalid {
  border-color: var(--vf-danger);
  color: var(--vf-color-danger);
}`;G(pu);Il.__file="themes/vueform/templates/FormTab.vue";var wi={name:"FormSteps",data(){return{merge:!0,defaultClasses:{container:"",wrapper:""}}}};function fu(t,e,n,r,i,l){const a=ue("FormStep");return d(),v("div",{class:f(t.classes.container),role:"tablist"},[w("ul",{class:f(t.classes.wrapper)},[D(t.$slots,"default",{},()=>[(d(!0),v(ee,null,le(t.steps,(o,s)=>(d(),L(a,q({ref_for:!0},o,{name:s,key:s}),null,16,["name"]))),128))])],2)],2)}wi.render=fu;wi.__file="themes/blank/templates/FormSteps.vue";var Rl={name:"FormSteps",render:wi.render,data(){return{merge:!0,defaultClasses:{container:"vf-steps-container",container_sm:"vf-steps-container-sm",container_md:"",container_lg:"vf-steps-container-lg",wrapper:"vf-steps-wrapper",$container:(t,{Size:e})=>[t.container,t[`container_${e}`]]}}}},vu=`.vf-steps-container {
  width: 100%;
  position: relative;
  margin: 0 0 var(--vf-gutter-lg) 0;
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
}

.vf-steps-container:before {
  content: " ";
  display: inline-block;
  background: var(--vf-bg-passive);
  position: absolute;
  top: 0.375rem;
  left: 0.125rem;
  right: 0.125rem;
  height: 0.25rem;
}

.vf-steps-container.vf-steps-container-sm {
  margin: 0 0 var(--vf-gutter) 0;
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-sm);
}

.vf-steps-container.vf-steps-container-lg {
  margin: 0 0 var(--vf-gutter-lg) 0;
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
}

.vf-steps-wrapper {
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
  overflow-x: auto;
}`;G(vu);Rl.__file="themes/vueform/templates/FormSteps.vue";var yi={name:"FormStepsControls",data(){return{merge:!0,defaultClasses:{container:""}}}};function gu(t,e,n,r,i,l){const a=ue("FormStepsControl");return d(),v("div",{class:f(t.classes.container)},[Ee(a,{type:"previous",labels:t.labels},{default:U(()=>[D(t.$slots,"previous")]),_:3},8,["labels"]),Ee(a,{type:"next",labels:t.labels},{default:U(()=>[D(t.$slots,"next")]),_:3},8,["labels"]),Ee(a,{type:"finish",labels:t.labels},{default:U(()=>[D(t.$slots,"finish")]),_:3},8,["labels"])],2)}yi.render=gu;yi.__file="themes/blank/templates/FormStepsControls.vue";var Dl={name:"FormStepsControls",render:yi.render,data(){return{merge:!0,defaultClasses:{container:"vf-steps-controls",container_sm:"vf-steps-controls-sm",container_md:"",container_lg:"vf-steps-controls-lg",$container:(t,{Size:e})=>[t.container,t[`container_${e}`]]}}}},mu=`.vf-steps-controls {
  display: flex;
  justify-content: space-between;
  margin: var(--vf-gutter-lg) 0 0 0;
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
}

.vf-steps-controls.vf-steps-controls-sm {
  margin: var(--vf-gutter) 0 0 0;
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-md);
}

.vf-steps-controls.vf-steps-controls-lg {
  margin: var(--vf-gutter-lg) 0 0 0;
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
}`;G(mu);Dl.__file="themes/vueform/templates/FormStepsControls.vue";var ki={name:"FormStepsControl",data(){return{merge:!0,defaultClasses:{button:""}}}};const hu=["disabled"],bu=["innerHTML","disabled"],wu=["disabled"];function yu(t,e,n,r,i,l){return d(),v(ee,null,[h(" If label is a component "),t.visible&&t.label&&t.isLabelComponent?(d(),v("button",{key:0,disabled:t.isDisabled,class:f(t.classes.button),onClick:e[0]||(e[0]=he((...a)=>t.handleClick&&t.handleClick(...a),["prevent"])),onKeypress:e[1]||(e[1]=We(he((...a)=>t.handleClick&&t.handleClick(...a),["prevent"]),["enter","space"]))},[(d(),L(F(t.label),{step$:t.current$},null,8,["step$"]))],42,hu)):t.visible&&t.label?(d(),v(ee,{key:1},[h(" If label is HTML "),w("button",{innerHTML:t.label,disabled:t.isDisabled,class:f(t.classes.button),onClick:e[2]||(e[2]=he((...a)=>t.handleClick&&t.handleClick(...a),["prevent"])),onKeypress:e[3]||(e[3]=We(he((...a)=>t.handleClick&&t.handleClick(...a),["prevent"]),["enter","space"]))},null,42,bu)],2112)):t.visible?(d(),v(ee,{key:2},[h(" If label is a slot "),w("button",{disabled:t.isDisabled,class:f(t.classes.button),onClick:e[4]||(e[4]=he((...a)=>t.handleClick&&t.handleClick(...a),["prevent"])),onKeypress:e[5]||(e[5]=We(he((...a)=>t.handleClick&&t.handleClick(...a),["prevent"]),["enter","space"]))},[D(t.$slots,"default")],42,wu)],2112)):h("v-if",!0)],2112)}ki.render=yu;ki.__file="themes/blank/templates/FormStepsControl.vue";var Ml={name:"FormStepsControl",render:ki.render,data(){return{merge:!0,defaultClasses:{button:"vf-btn",button_previous:"",button_previous_enabled:"vf-btn-secondary",button_previous_disabled:"vf-btn-secondary vf-btn-disabled",button_next:"",button_next_enabled:"vf-btn-primary",button_next_disabled:"vf-btn-primary vf-btn-disabled",button_next_loading:"vf-btn-loading vf-btn-loading-primary",button_finish:"",button_finish_enabled:"vf-btn-primary",button_finish_disabled:"vf-btn-primary vf-btn-disabled",button_finish_loading:"vf-btn-loading vf-btn-loading-primary",button_sm:"vf-btn-sm",button_md:"",button_lg:"vf-btn-lg",$button:(t,{isDisabled:e,isLoading:n,type:r,Size:i})=>[t.button,t[`button_${i}`],t[`button_${r}`],e?t[`button_${r}_disabled`]:t[`button_${r}_enabled`],n?t[`button_${r}_loading`]:null]}}}};Ml.__file="themes/vueform/templates/FormStepsControl.vue";var Ci={name:"FormStep",data(){return{merge:!0,defaultClasses:{container:"",wrapper:""}}}};const ku=["tabindex","aria-selected"],Cu={key:0},Au=["innerHTML"];function Eu(t,e,n,r,i,l){return t.visible?(d(),v("li",{key:0,class:f(t.classes.container)},[w("a",{href:"",class:f(t.classes.wrapper),tabindex:t.isDisabled?-1:0,role:"tab","aria-selected":t.active,onClick:e[0]||(e[0]=he((...a)=>t.select&&t.select(...a),["prevent"])),onKeypress:e[1]||(e[1]=We(he((...a)=>t.select&&t.select(...a),["prevent"]),["enter","space"]))},[D(t.$slots,"default",{},()=>[h(" If label is a component "),t.isLabelComponent?(d(),v("span",Cu,[(d(),L(F(t.stepLabel),{form$:t.form$},null,8,["form$"]))])):(d(),v(ee,{key:1},[h(" If label is HTML "),w("span",{innerHTML:t.stepLabel},null,8,Au)],2112))])],42,ku)],2)):h("v-if",!0)}Ci.render=Eu;Ci.__file="themes/blank/templates/FormStep.vue";var Ol={name:"FormStep",render:Ci.render,data(){return{merge:!0,defaultClasses:{container:"vf-step",wrapper:"",container_active:"vf-step-active",container_inactive:"",container_invalid:"vf-step-invalid",container_valid:"",container_disabled:"vf-step-disabled",container_enabled:"",container_completed:"vf-step-completed",container_incompleted:"",container_pending:"vf-step-pending",$container:(t,{active:e,isDisabled:n,completed:r,invalid:i,pending:l})=>[t.container,e?t.container_active:t.container_inactive,n?t.container_disabled:t.container_enabled,r?t.container_completed:t.container_incompleted,i?t.container_invalid:t.container_valid,l?t.container_pending:null]}}}},Lu=`.vf-step {
  display: block;
  position: relative;
  white-space: nowrap;
  flex: 1 1;
  text-align: center;
  padding: 1.25rem 0.625rem 0;
}

.vf-step a {
  text-decoration: none !important;
  color: inherit;
}

.vf-step a:hover, .vf-step a:focus, .vf-step a:active {
  text-decoration: none !important;
  color: inherit;
}

.vf-step a:before {
  content: " ";
  display: inline-block;
  width: 1rem;
  height: 1rem;
  position: absolute;
  background: var(--vf-primary);
  border-radius: 50%;
  left: 50%;
  transform: translateX(-50%);
  top: 0px;
}

.vf-step a:after {
  content: " ";
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  position: absolute;
  background: #FFFFFF;
  border-radius: 50%;
  left: calc(50% - 0.25rem);
  transform: scale(0);
  top: 0.25rem;
  transition: transform 0.3s ease-in-out;
}

.vf-step:first-of-type {
  padding-left: 0;
  text-align: left;
}

.vf-step:first-of-type:before {
  display: none;
}

.vf-step:first-of-type:after {
  left: 0;
}

.vf-step:first-of-type a:before {
  left: 0;
  transform: none;
}

.vf-step:first-of-type a:after {
  left: 0.25rem;
  transform: scale(0);
}

.vf-step:last-of-type {
  padding-right: 0;
  text-align: right;
}

.vf-step:last-of-type:after {
  display: none;
}

.vf-step:last-of-type:before {
  right: 0;
}

.vf-step:last-of-type a:before {
  right: 0;
  left: auto;
  left: initial;
  transform: none;
}

.vf-step:last-of-type a:after {
  left: auto;
  left: initial;
  transform: scale(0);
  right: 0.25rem;
}

.vf-step.vf-step-disabled:before {
  background: var(--vf-bg-passive);
  left: -100%;
}

.vf-step.vf-step-disabled a {
  color: var(--vf-color-passive);
}

.vf-step.vf-step-disabled a:before {
  background: var(--vf-bg-passive);
}

.vf-step.vf-step-completed + .vf-step:not(.vf-step-completed):before {
  content: " ";
  display: inline-block;
  background: var(--vf-primary);
  position: absolute;
  top: 0.375rem;
  left: 0px;
  right: 50%;
  height: 0.25rem;
}

.vf-step.vf-step-completed + .vf-step:last-of-type:before {
  right: 0px;
}

.vf-step.vf-step-completed:before {
  content: " ";
  display: inline-block;
  background: var(--vf-primary);
  position: absolute;
  top: 0.375rem;
  left: 0px;
  right: 0px;
  height: 0.25rem;
}

.vf-step.vf-step-completed a:after {
  mask-image: url('data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="white" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>');
  -webkit-mask-image: url('data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="white" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>');
  mask-size: 0.5rem 0.5rem;
  -webkit-mask-size: 0.5rem 0.5rem;
  mask-position: 0 0;
  -webkit-mask-position: 0 0;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: var(--vf-color-on-primary);
  border-radius: 0;
  transform: scale(1);
}

.vf-step.vf-step-active a:after {
  mask-image: none;
  -webkit-mask-image: none;
  background-color: var(--vf-color-on-primary);
  top: 0.25rem;
  transform: scale(1);
  border-radius: 50%;
}

.vf-step.vf-step-invalid a {
  color: var(--vf-bg-btn-danger);
}

.vf-step.vf-step-invalid a:before {
  background-color: var(--vf-bg-btn-danger);
}

.vf-step.vf-step-invalid a:after {
  mask-image: url('data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation" class="svg-inline--fa fa-exclamation fa-w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="white" d="M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z"></path></svg>');
  -webkit-mask-image: url('data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation" class="svg-inline--fa fa-exclamation fa-w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="white" d="M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z"></path></svg>');
  mask-size: 0.5rem 0.5rem;
  -webkit-mask-size: 0.5rem 0.5rem;
  mask-position: 0 0;
  -webkit-mask-position: 0 0;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: var(--vf-color-btn-danger);
  width: 0.5rem;
  height: 0.5rem;
  top: 0.25rem;
  border-radius: 0;
}

.vf-step.vf-step-invalid.vf-step-active a:after {
  mask-image: none;
  -webkit-mask-image: none;
  background-color: var(--vf-color-on-primary);
  transform: scale(1);
  border-radius: 50%;
}

.vf-step.vf-step-pending a:after {
  animation: 1s linear infinite step-loading;
  background: var(--vf-color-btn-danger);
  top: 0.25rem;
  border-radius: 50%;
}

@keyframes step-loading {
  0% {
    transform: scale(0.5);
  }

  20% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(0.5);
  }
}`;G(Lu);Ol.__file="themes/vueform/templates/FormStep.vue";var Ai={name:"FormElements",data(){return{merge:!0,defaultClasses:{container:""}}}};function xu(t,e,n,r,i,l){return d(),v("div",{class:f(t.classes.container)},[D(t.$slots,"default",{},()=>[(d(!0),v(ee,null,le(t.schema,(a,o)=>(d(),L(F(t.component(a)),q({ref_for:!0},a,{name:o,key:o}),null,16,["name"]))),128))])],2)}Ai.render=xu;Ai.__file="themes/blank/templates/FormElements.vue";var Fl={name:"FormElements",render:Ai.render,data(){return{merge:!0,defaultClasses:{container:"vf-row",container_sm:"vf-row-sm",container_md:"",container_lg:"vf-row-lg",$container:(t,{Size:e})=>[t.container,t[`container_${e}`]]}}}},Su="/* Some styles are contained in Vueform.vue */";G(Su);Fl.__file="themes/vueform/templates/FormElements.vue";var Ei={name:"ElementLayout",data(){return{merge:!0,defaultClasses:{container:"",outerWrapper:"",innerContainer:"",innerWrapperBefore:"",innerWrapper:"",innerWrapperAfter:""}}}};function Tu(t,e,n,r,i,l){const a=ue("ElementLabel"),o=ue("ElementText"),s=ue("ElementDescription"),u=ue("ElementError"),c=ue("ElementMessage");return Fe((d(),v("div",{class:f(t.classes.container)},[w("div",{class:f(t.classes.outerWrapper)},[Ee(a,null,{default:U(()=>[D(t.$slots,"label")]),info:U(()=>[D(t.$slots,"info")]),_:3}),w("div",{class:f(t.classes.innerContainer)},[w("div",{class:f(t.classes.innerWrapperBefore)},[Ee(o,{type:"before"},{default:U(()=>[D(t.$slots,"before")]),_:3})],2),w("div",{class:f(t.classes.innerWrapper)},[D(t.$slots,"element")],2),w("div",{class:f(t.classes.innerWrapperAfter)},[Ee(o,{type:"between"},{default:U(()=>[D(t.$slots,"between")]),_:3}),Ee(s,null,{default:U(()=>[D(t.$slots,"description")]),_:3}),Ee(u),Ee(c),Ee(o,{type:"after"},{default:U(()=>[D(t.$slots,"after")]),_:3})],2)],2)],2)],2)),[[ft,t.visible]])}Ei.render=Tu;Ei.__file="themes/blank/templates/ElementLayout.vue";var Pl={name:"ElementLayout",render:Ei.render,data(){return{merge:!0,defaultClasses:{container:"vf-element-layout",container_sm:"vf-element-layout-sm",container_md:"",container_lg:"vf-element-layout-lg",container_error:"vf-element-layout-error",outerWrapper:"vf-element-layout-outer-wrapper",innerContainer:"vf-layout-inner-container",innerWrapperBefore:"vf-layout-inner-wrapper-before",innerWrapper:"vf-layout-inner-wrapper",innerWrapperAfter:"vf-layout-inner-wrapper-after",$container:(t,{el$:e,Size:n})=>[t.container,t[`container_${n}`],e.columnsClasses.container,e.classes.container,!e.isStatic&&e.errors&&e.errors.length?t.container_error:null],$innerContainer:(t,{el$:e})=>[t.innerContainer,e.columnsClasses.innerContainer],$innerWrapper:(t,{el$:e})=>[t.innerWrapper,e.columnsClasses.wrapper]}}}},Bu=`/* Some styles are contained in Vueform.vue */

.vf-element-layout {
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
}

.vf-element-layout.vf-element-layout-sm {
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-sm);
}

.vf-element-layout.vf-element-layout-lg {
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
}

.vf-layout-inner-container {
  flex: 1 1 0%;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
}

.vf-layout-inner-container .vf-layout-inner-wrapper,
.vf-layout-inner-container .vf-layout-inner-wrapper-before,
.vf-layout-inner-container .vf-layout-inner-wrapper-after {
  padding-left: 0;
  padding-right: 0;
}

.vf-layout-inner-wrapper-before,
.vf-layout-inner-wrapper-after {
  grid-column: span 12/span 12;
  padding-left: var(--vf-gutter);
  padding-right: var(--vf-gutter);
}

.vf-element-layout-outer-wrapper {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
}`;G(Bu);Pl.__file="themes/vueform/templates/ElementLayout.vue";var Li={name:"ElementLayoutInline",data(){return{merge:!0,defaultClasses:{container:""}}}};function Iu(t,e,n,r,i,l){const a=ue("ElementLabel"),o=ue("ElementText"),s=ue("ElementDescription"),u=ue("ElementError"),c=ue("ElementMessage");return Fe((d(),v("span",{class:f(t.classes.container)},[Ee(a,null,{default:U(()=>[D(t.$slots,"label")]),_:3}),Ee(o,{type:"before"},{default:U(()=>[D(t.$slots,"before")]),_:3}),D(t.$slots,"element"),Ee(o,{type:"between"},{default:U(()=>[D(t.$slots,"between")]),_:3}),Ee(s,null,{default:U(()=>[D(t.$slots,"description")]),_:3}),Ee(u),Ee(c),Ee(o,{type:"after"},{default:U(()=>[D(t.$slots,"after")]),_:3})],2)),[[ft,t.visible]])}Li.render=Iu;Li.__file="themes/blank/templates/ElementLayoutInline.vue";var $l={name:"ElementLayoutInline",render:Li.render,data(){return{merge:!0,defaultClasses:{container:"vf-inline-layout",container_error:"has-error",$container:(t,{el$:e})=>[t.container,!e.isStatic&&e.errors&&e.errors.length?t.container_error:null]}}}},Ru=`.vf-inline-layout {
  display: flex;
}`;G(Ru);$l.__file="themes/vueform/templates/ElementLayoutInline.vue";var xi={name:"ElementLoader",data(){return{merge:!0,defaultClasses:{container:"",loader:""}}}};function Du(t,e,n,r,i,l){return d(),v("div",{class:f(t.classes.container)},[w("span",{class:f(t.classes.loader)},null,2)],2)}xi.render=Du;xi.__file="themes/blank/templates/ElementLoader.vue";var zl={name:"ElementLoader",render:xi.render,data(){return{merge:!0,defaultClasses:{container:"vf-element-loader-container",loader:"vf-element-loader",loader_sm:"vf-element-loader-sm",loader_md:"",loader_lg:"vf-element-loader-lg",$loader:(t,{Size:e})=>[t.loader,t[`loader_${e}`]]}}}},Mu=`.vf-element-loader-container {
  position: relative;
  z-index: 1;
  order: 1;
}

.vf-element-loader {
  position: absolute;
  width: 1rem;
  height: 1rem;
  display: block;
  right: var(--vf-px-input);
  top: 50%;
  transform: translateY(-50%);
}

.vf-element-loader:before, .vf-element-loader:after {
  position: absolute;
  content: "";
  top: 50%;
  left: 50%;
  margin: -0.5rem 0 0 -0.5rem;
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
  border-color: var(--vf-primary) transparent transparent;
  border-style: solid;
  border-width: 2px;
  box-shadow: 0 0 0 1px transparent;
  box-sizing: border-box;
}

.vf-element-loader:before {
  animation: vf-element-loader 2.4s infinite cubic-bezier(0.41, 0.26, 0.2, 0.62);
}

.vf-element-loader:after {
  animation: vf-element-loader 2.4s infinite cubic-bezier(0.51, 0.09, 0.21, 0.8);
}

.vf-element-loader.vf-element-loader-sm {
  right: var(--vf-px-input-sm);
}

.vf-element-loader.vf-element-loader-lg {
  right: var(--vf-px-input-lg);
}

@keyframes vf-element-loader {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(2turn);
  }
}`;G(Mu);zl.__file="themes/vueform/templates/ElementLoader.vue";var Si={name:"ElementLabelFloating",data(){return{merge:!0,defaultClasses:{container:"",label:""}}}};const Ou=["innerHTML"];function Fu(t,e,n,r,i,l){return d(),v("div",{class:f(t.classes.container)},[w("span",{class:f(t.classes.label),innerHTML:t.floating},null,10,Ou)],2)}Si.render=Fu;Si.__file="themes/blank/templates/ElementLabelFloating.vue";var Nl={name:"ElementLabelFloating",render:Si.render,data(){return{merge:!0,defaultClasses:{container:"vf-floating-wrapper",label:"vf-floating-label",label_enabled:"",label_disabled:"vf-floating-label-disabled",label_danger:"vf-floating-label-danger",label_success:"vf-floating-label-success",label_focused:"vf-floating-label-focus",label_sm:"vf-floating-label-sm",label_md:"",label_lg:"vf-floating-label-lg",label_invisible:"",label_visible:"vf-floating-label-visible",$label:(t,{visible:e,Size:n,el$:r})=>[t.label,t[`label_${n}`],e?t.label_visible:t.label_invisible,r.focused?t.label_focused:null,!r.isDisabled&&!r.isDanger&&!r.isSuccess?t.label_enabled:null,r.isDisabled?t.label_disabled:null,r.isDanger?t.label_danger:null,r.isSuccess?t.label_success:null]}}}},Pu=`.vf-floating-wrapper {
  position: relative;
}

.vf-floating-label {
  position: absolute;
  z-index: 1;
  left: var(--vf-px-input);
  font-size: 0.6875rem;
  background-color: var(--vf-bg-input);
  padding: 0 1px;
  line-height: 1px;
  transition-property: box-shadow, color, background-color, border-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
  opacity: 0;
  visibility: hidden;
  white-space: nowrap;
  color: var(--vf-color-floating);
  margin-top: var(--vf-floating-top);
}

.vf-floating-label.vf-floating-label-visible {
  opacity: 1;
  visibility: visible;
}

.vf-floating-label.vf-floating-label-sm {
  left: var(--vf-px-input-sm);
  margin-top: var(--vf-floating-top-sm);
}

.vf-floating-label.vf-floating-label-lg {
  left: var(--vf-px-input-lg);
  margin-top: var(--vf-floating-top-lg);
  background-color: transparent !important;
}

.vf-floating-label.vf-floating-label-disabled {
  background-color: var(--vf-bg-disabled);
}

.vf-floating-label.vf-floating-label-focus {
  background-color: var(--vf-bg-input-focus);
  color: var(--vf-color-floating-focus);
}

.vf-floating-label.vf-floating-label-danger {
  background-color: var(--vf-bg-input-danger);
  color: var(--vf-color-floating-danger);
}

.vf-floating-label.vf-floating-label-success {
  background-color: var(--vf-bg-input-success);
  color: var(--vf-color-floating-success);
}

.vf-input-group .vf-floating-label {
  top: calc(var(--vf-border-width-input-t) * -1);
}

[dir=rtl] .vf-floating-label {
  left: auto;
  right: var(--vf-px-input);
}

[dir=rtl] .vf-floating-label.vf-floating-label-sm {
  left: auto;
  right: var(--vf-px-input-sm);
}

[dir=rtl] .vf-floating-label.vf-floating-label-lg {
  left: auto;
  right: var(--vf-px-input-lg);
}`;G(Pu);Nl.__file="themes/vueform/templates/ElementLabelFloating.vue";var Ti={name:"ElementLabel",data(){return{merge:!0,defaultClasses:{container:"",wrapper:""}}}};const $u=["for","id"],zu=["for","id"],Nu=["innerHTML"],Hu=["for","id"],ju=["for","id"];function Uu(t,e,n,r,i,l){const a=ue("ElementInfo");return d(),v(ee,null,[h(" If label is a component "),t.label&&t.isLabelComponent?(d(),v("label",{key:0,class:f(t.classes.container),for:t.name,id:t.id},[w("span",{class:f(t.classes.wrapper)},[t.isLabelComponent?(d(),L(F(t.label),{key:0})):h("v-if",!0)],2),Ee(a,null,{default:U(()=>[D(t.$slots,"info")]),_:3})],10,$u)):t.label?(d(),v(ee,{key:1},[h(" If label is HTML "),w("label",{class:f(t.classes.container),for:t.name,id:t.id},[w("span",{class:f(t.classes.wrapper),innerHTML:t.label},null,10,Nu),Ee(a,null,{default:U(()=>[D(t.$slots,"info")]),_:3})],10,zu)],2112)):t.isSlot?(d(),v(ee,{key:2},[h(" If label is a slot "),w("label",{class:f(t.classes.container),for:t.name,id:t.id},[w("span",{class:f(t.classes.wrapper)},[D(t.$slots,"default")],2),Ee(a,null,{default:U(()=>[D(t.$slots,"info")]),_:3})],10,Hu)],2112)):t.hasLabel?(d(),v(ee,{key:3},[h(" If labels are forced but has no value "),w("label",{class:f(t.classes.container),for:t.name,id:t.id},null,10,ju)],2112)):h("v-if",!0)],2112)}Ti.render=Uu;Ti.__file="themes/blank/templates/ElementLabel.vue";var Hl={name:"ElementLabel",render:Ti.render,data(){return{merge:!0,defaultClasses:{container:"vf-label",container_sm:"vf-label-sm",container_md:"",container_lg:"vf-label-lg",container_horizontal_sm:"vf-horizontal-label-sm",container_horizontal_md:"vf-horizontal-label",container_horizontal_lg:"vf-horizontal-label-lg",container_vertical_sm:"vf-vertical-label-sm",container_vertical_md:"vf-vertical-label",container_vertical_lg:"vf-vertical-label-lg",wrapper:"",$container:(t,{el$:e,Size:n})=>[t.container,t[`container_${n}`],e.inline?null:e.columnsClasses.label,e.cols.default.label<12?t[`container_horizontal_${n}`]:t[`container_vertical_${n}`],...Object.keys(e.cols).length>1?(e.$vueform.config.breakpoints||["sm","md","lg","xl","2xl"]).map(r=>{var i;return(i=e.cols[r])!=null&&i.label?e.cols[r].label<12?t[`container_horizontal_${n}`].map(l=>`vf-${r}:${l}`).join(" "):t[`container_vertical_${n}`].map(l=>`vf-${r}:${l}`).join(" "):null}):[]]}}}},Vu="/* Styles can be found at scss/_label.scss */";G(Vu);Hl.__file="themes/vueform/templates/ElementLabel.vue";var Bi={name:"ElementInfo",data(){return{merge:!0,defaultClasses:{container:"",wrapper:"",content:""}}}};const Wu=["id"],Qu=["innerHTML"];function qu(t,e,n,r,i,l){return t.info||t.isSlot?(d(),v("span",{key:0,class:f(t.classes.container),onMouseover:e[0]||(e[0]=(...a)=>t.handleMouseOver&&t.handleMouseOver(...a))},[w("div",{class:f(t.classes.wrapper),id:t.id},[t.isSlot?(d(),v("span",{key:0,class:f(t.classes.content)},[D(t.$slots,"default")],2)):(d(),v("span",{key:1,class:f(t.classes.content),innerHTML:t.info},null,10,Qu))],10,Wu)],34)):h("v-if",!0)}Bi.render=qu;Bi.__file="themes/blank/templates/ElementInfo.vue";var jl={name:"ElementInfo",render:Bi.render,data(){return{merge:!0,defaultClasses:{container:"vf-element-info",wrapper:"vf-element-info-wrapper",wrapper_left:"vf-element-info-wrapper-left",wrapper_right:"vf-element-info-wrapper-right",wrapper_top:"vf-element-info-wrapper-top",wrapper_bottom:"vf-element-info-wrapper-bottom",content:"vf-element-info-content",$wrapper:(t,{position:e})=>[t.wrapper,t[`wrapper_${e}`]]}}}},Ku=`.vf-element-info {
  margin-left: 0.25rem;
  position: relative;
  top: 1px;
  cursor: pointer;
}

.vf-element-info:before {
  content: "";
  mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='15px' height='14px' viewBox='0 0 15 14' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M7.40520349,0.18129431 C11.1501134,0.18129431 14.1864373,3.21871306 14.1864373,6.96252814 C14.1864373,10.7085329 11.1501134,13.743762 7.40520349,13.743762 C3.6602936,13.743762 0.62396966,10.7085329 0.62396966,6.96252814 C0.62396966,3.21871306 3.6602936,0.18129431 7.40520349,0.18129431 Z M7.40520349,3.18909964 C6.77093148,3.18909964 6.25676873,3.70326238 6.25676873,4.3375344 C6.25676873,4.97180642 6.77093148,5.48596916 7.40520349,5.48596916 C8.03947551,5.48596916 8.55363825,4.97180642 8.55363825,4.3375344 C8.55363825,3.70326238 8.03947551,3.18909964 7.40520349,3.18909964 Z M8.93644984,10.1343956 L8.93644984,9.47814714 C8.93644984,9.29694183 8.78953094,9.15002293 8.60832562,9.15002293 L8.28020141,9.15002293 L8.28020141,6.41565445 C8.28020141,6.23444913 8.13328251,6.08753023 7.95207719,6.08753023 L6.20208136,6.08753023 C6.02087604,6.08753023 5.87395714,6.23444913 5.87395714,6.41565445 L5.87395714,7.07190288 C5.87395714,7.2531082 6.02087604,7.4000271 6.20208136,7.4000271 L6.53020558,7.4000271 L6.53020558,9.15002293 L6.20208136,9.15002293 C6.02087604,9.15002293 5.87395714,9.29694183 5.87395714,9.47814714 L5.87395714,10.1343956 C5.87395714,10.3156009 6.02087604,10.4625198 6.20208136,10.4625198 L8.60832562,10.4625198 C8.78953094,10.4625198 8.93644984,10.3156009 8.93644984,10.1343956 Z' id='info-circle' fill='currentColor'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='15px' height='14px' viewBox='0 0 15 14' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M7.40520349,0.18129431 C11.1501134,0.18129431 14.1864373,3.21871306 14.1864373,6.96252814 C14.1864373,10.7085329 11.1501134,13.743762 7.40520349,13.743762 C3.6602936,13.743762 0.62396966,10.7085329 0.62396966,6.96252814 C0.62396966,3.21871306 3.6602936,0.18129431 7.40520349,0.18129431 Z M7.40520349,3.18909964 C6.77093148,3.18909964 6.25676873,3.70326238 6.25676873,4.3375344 C6.25676873,4.97180642 6.77093148,5.48596916 7.40520349,5.48596916 C8.03947551,5.48596916 8.55363825,4.97180642 8.55363825,4.3375344 C8.55363825,3.70326238 8.03947551,3.18909964 7.40520349,3.18909964 Z M8.93644984,10.1343956 L8.93644984,9.47814714 C8.93644984,9.29694183 8.78953094,9.15002293 8.60832562,9.15002293 L8.28020141,9.15002293 L8.28020141,6.41565445 C8.28020141,6.23444913 8.13328251,6.08753023 7.95207719,6.08753023 L6.20208136,6.08753023 C6.02087604,6.08753023 5.87395714,6.23444913 5.87395714,6.41565445 L5.87395714,7.07190288 C5.87395714,7.2531082 6.02087604,7.4000271 6.20208136,7.4000271 L6.53020558,7.4000271 L6.53020558,9.15002293 L6.20208136,9.15002293 C6.02087604,9.15002293 5.87395714,9.29694183 5.87395714,9.47814714 L5.87395714,10.1343956 C5.87395714,10.3156009 6.02087604,10.4625198 6.20208136,10.4625198 L8.60832562,10.4625198 C8.78953094,10.4625198 8.93644984,10.3156009 8.93644984,10.1343956 Z' id='info-circle' fill='currentColor'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  mask-position: center center;
  -webkit-mask-position: center center;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-size: contain;
  -webkit-mask-size: contain;
  background-color: var(--vf-bg-passive);
  width: 0.875rem;
  height: 0.875rem;
  display: inline-block;
}

.vf-element-info:hover .vf-element-info-wrapper {
  opacity: 1;
  visibility: visible;
}

.vf-element-info-wrapper {
  position: absolute;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
  z-index: 1000;
  width: 12.5rem;
}

.vf-element-info-wrapper.vf-element-info-wrapper-left {
  top: -0.5625rem;
  right: 1.375rem;
}

.vf-element-info-wrapper.vf-element-info-wrapper-right {
  top: -0.5625rem;
  left: 1.375rem;
}

.vf-element-info-wrapper.vf-element-info-wrapper-top {
  bottom: 1.375rem;
  left: 50%;
  transform: translateX(-50%);
}

.vf-element-info-wrapper.vf-element-info-wrapper-bottom {
  top: 1.375rem;
  left: 50%;
  transform: translateX(-50%);
}

.vf-element-info-content {
  background: rgba(0, 0, 0, 0.85);
  color: #FFFFFF;
  border-radius: var(--vf-radius-small);
  font-size: var(--vf-font-size-small);
  line-height: var(--vf-line-height-small);
  letter-spacing: var(--vf-letter-spacing-small);
  padding: 0.3125rem 0.625rem;
  font-style: normal;
  display: inline-block;
  position: relative;
}

.vf-element-info-content:after {
  right: 100%;
  top: 0.625rem;
  border: solid transparent;
  content: "";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0.85);
  border-width: 5px;
}`;G(Ku);jl.__file="themes/vueform/templates/ElementInfo.vue";var Ii={name:"ElementDescription",data(){return{merge:!0,defaultClasses:{container:""}}}};const Ju=["innerHTML","id"],_u=["id"];function Gu(t,e,n,r,i,l){return d(),v(ee,null,[h(" If description is HTML "),t.description?(d(),v("div",{key:0,class:f(t.classes.container),innerHTML:t.description,id:t.id},null,10,Ju)):t.isSlot?(d(),v(ee,{key:1},[h(" If description is a slot "),w("div",{class:f(t.classes.container),id:t.id},[D(t.$slots,"default")],10,_u)],2112)):h("v-if",!0)],2112)}Ii.render=Gu;Ii.__file="themes/blank/templates/ElementDescription.vue";var Ul={name:"ElementDescription",render:Ii.render,data(){return{merge:!0,defaultClasses:{container:"vf-description",container_sm:"vf-description-sm",container_md:"",container_lg:"vf-description-lg",$container:(t,{Size:e})=>[t.container,t[`container_${e}`]]}}}},Yu=`.vf-description {
  font-size: var(--vf-font-size-small);
  line-height: var(--vf-line-height-small);
  letter-spacing: var(--vf-letter-spacing-small);
  color: var(--vf-color-muted);
  margin-top: 0.25rem;
}

.vf-description.vf-description-sm {
  font-size: var(--vf-font-size-small-sm);
  line-height: var(--vf-line-height-small-sm);
  letter-spacing: var(--vf-letter-spacing-small-sm);
  margin-top: 0.125rem;
}

.vf-description.vf-description-lg {
  font-size: var(--vf-font-size-small-lg);
  line-height: var(--vf-line-height-small-lg);
  letter-spacing: var(--vf-letter-spacing-small-lg);
}`;G(Yu);Ul.__file="themes/vueform/templates/ElementDescription.vue";var Ri={name:"ElementError",data(){return{merge:!0,defaultClasses:{container:""}}}};const Xu=["id","innerHTML"];function Zu(t,e,n,r,i,l){return t.error?(d(),v("div",{key:0,class:f(t.classes.container),id:t.id,"aria-live":"assertive",innerHTML:t.error},null,10,Xu)):h("v-if",!0)}Ri.render=Zu;Ri.__file="themes/blank/templates/ElementError.vue";var Vl={name:"ElementError",render:Ri.render,data(){return{merge:!0,defaultClasses:{container:"vf-element-error",container_sm:"vf-element-error-sm",container_md:"",container_lg:"vf-element-error-lg",$container:(t,{Size:e})=>[t.container,t[`container_${e}`]]}}}},ed=`.vf-element-error {
  font-size: var(--vf-font-size-small);
  line-height: var(--vf-line-height-small);
  letter-spacing: var(--vf-letter-spacing-small);
  color: var(--vf-color-danger);
  margin-top: 0.25rem;
}

.vf-element-error.vf-element-error-sm {
  font-size: var(--vf-font-size-small-sm);
  line-height: var(--vf-line-height-small-sm);
  letter-spacing: var(--vf-letter-spacing-small-sm);
  margin-top: 0.125rem;
}

.vf-element-error.vf-element-error-lg {
  font-size: var(--vf-font-size-small-lg);
  line-height: var(--vf-line-height-small-lg);
  letter-spacing: var(--vf-letter-spacing-small-lg);
}`;G(ed);Vl.__file="themes/vueform/templates/ElementError.vue";var Di={name:"ElementMessage",data(){return{merge:!0,defaultClasses:{container:""}}}};const td=["innerHTML"];function nd(t,e,n,r,i,l){return t.message?(d(),v("div",{key:0,class:f(t.classes.container),innerHTML:t.message},null,10,td)):h("v-if",!0)}Di.render=nd;Di.__file="themes/blank/templates/ElementMessage.vue";var Wl={name:"ElementMessage",render:Di.render,data(){return{merge:!0,defaultClasses:{container:"vf-element-message",container_sm:"vf-element-message-sm",container_md:"",container_lg:"vf-element-message-lg",$container:(t,{Size:e})=>[t.container,t[`container_${e}`]]}}}},rd=`.vf-element-message {
  font-size: var(--vf-font-size-small);
  line-height: var(--vf-line-height-small);
  letter-spacing: var(--vf-letter-spacing-small);
  color: var(--vf-color-success);
  margin-top: 0.25rem;
}

.vf-element-message.vf-element-message-sm {
  font-size: var(--vf-font-size-small-sm);
  line-height: var(--vf-line-height-small-sm);
  letter-spacing: var(--vf-letter-spacing-small-sm);
  margin-top: 0.125rem;
}

.vf-element-message.vf-element-message-lg {
  font-size: var(--vf-font-size-small-lg);
  line-height: var(--vf-line-height-small-lg);
  letter-spacing: var(--vf-letter-spacing-small-lg);
}`;G(rd);Wl.__file="themes/vueform/templates/ElementMessage.vue";var Mi={name:"ElementText",data(){return{merge:!0,defaultClasses:{container:""}}}};const id=["innerHTML"];function ad(t,e,n,r,i,l){return d(),v(ee,null,[h(" If content is HTML "),t.content?(d(),v("div",{key:0,class:f(t.classes.container),innerHTML:t.content},null,10,id)):t.isSlot?(d(),v(ee,{key:1},[h(" If content is a slot "),w("div",{class:f(t.classes.container)},[D(t.$slots,"default")],2)],2112)):h("v-if",!0)],2112)}Mi.render=ad;Mi.__file="themes/blank/templates/ElementText.vue";var Ql={name:"ElementText",render:Mi.render,data(){return{merge:!0,defaultClasses:{container:"",container_before:"",container_between:"",container_after:"",$container:(t,{type:e})=>[t.container,t[`container_${e}`]]}}}};Ql.__file="themes/vueform/templates/ElementText.vue";var Oi={name:"ElementAddon",data(){return{merge:!0,defaultClasses:{container:"",wrapper:""}}}};const ld=["innerHTML"];function od(t,e,n,r,i,l){return d(),v(ee,null,[h(" If addon is a component "),t.addon&&t.isAddonComponent?(d(),v("div",{key:0,class:f(t.classes.container)},[w("div",{class:f(t.classes.wrapper)},[(d(),L(F(t.addon)))],2)],2)):t.addon?(d(),v(ee,{key:1},[h(" If addon is HTML "),w("div",{class:f(t.classes.container)},[w("div",{class:f(t.classes.wrapper),innerHTML:t.addon},null,10,ld)],2)],2112)):t.isSlot?(d(),v(ee,{key:2},[h(" If addon is a slot "),w("div",{class:f(t.classes.container)},[w("div",{class:f(t.classes.wrapper)},[D(t.$slots,"default")],2)],2)],2112)):h("v-if",!0)],2112)}Oi.render=od;Oi.__file="themes/blank/templates/ElementAddon.vue";var ql={name:"ElementAddon",render:Oi.render,data(){return{merge:!0,defaultClasses:{container:"vf-addon",container_before:"vf-addon-before",container_after:"vf-addon-after",container_sm:"vf-addon-sm",container_md:"",container_lg:"vf-addon-lg",container_before_sm:"",container_before_md:"",container_before_lg:"",container_after_sm:"",container_after_md:"",container_after_lg:"",wrapper:"vf-addon-wrapper",$container:(t,{type:e,Size:n})=>[t.container,t[`container_${n}`],t[`container_${e}`],t[`container_${e}_${n}`]]}}}},sd=`.vf-addon {
  background: var(--vf-bg-addon);
  color: var(--vf-color-addon);
  border-radius: var(--vf-radius-input);
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 0%;
}

.vf-addon.vf-addon-before {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  padding: 0 var(--vf-space-addon) 0 var(--vf-px-input);
}

.vf-addon.vf-addon-before.vf-addon-sm {
  padding: 0 var(--vf-space-addon-sm) 0 var(--vf-px-input-sm);
}

.vf-addon.vf-addon-before.vf-addon-lg {
  padding: 0 var(--vf-space-addon-lg) 0 var(--vf-px-input-lg);
}

.vf-addon.vf-addon-after {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding: 0 var(--vf-px-input) 0 var(--vf-space-addon);
  order: 2;
}

.vf-addon.vf-addon-after.vf-addon-sm {
  padding: 0 var(--vf-px-input-sm) 0 var(--vf-space-addon-sm);
}

.vf-addon.vf-addon-after.vf-addon-lg {
  padding: 0 var(--vf-px-input-lg) 0 var(--vf-space-addon-lg);
}

.vf-addon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}`;G(sd);ql.__file="themes/vueform/templates/ElementAddon.vue";var Fi={name:"ElementAddonOptions",data(){return{merge:!0,defaultClasses:{container:"",wrapper:"",caret:"",dropdown:"",option:""}}}};const ud=["aria-expanded","aria-controls","aria-label"],dd=["innerHTML"],cd=["innerHTML"],pd=["innerHTML"],fd=["innerHTML"],vd=["data-dropdown-for","id"],gd=["innerHTML","data-index","data-selected","onMouseover","onClick","tabindex","aria-selected"],md=["innerHTML","data-index","data-selected","onMouseover","onClick","tabindex","aria-selected"];function hd(t,e,n,r,i,l){return d(),v("div",{class:f(t.classes.container)},[w("div",{class:f(t.classes.wrapper),onClick:e[0]||(e[0]=(...a)=>t.handleSelectorClick&&t.handleSelectorClick(...a)),onKeydown:e[1]||(e[1]=(...a)=>t.handleSelectorKeydown&&t.handleSelectorKeydown(...a)),ref:"selector","aria-expanded":t.isOpen,"aria-haspopup":"listbox","aria-controls":`dropdown-${t.el$.fieldId}`,"aria-label":t.form$.translations.vueform.elements.phone.ariaLabel,role:"button",tabindex:"0"},[Object.keys(t.selected).length?(d(),v(ee,{key:0},[t.selected.valueDisplay&&typeof t.selected.valueDisplay=="object"&&[t.selected.valueDisplay.render||t.selected.valueDisplay.template]?(d(),L(F(t.selected.valueDisplay),{key:0,el$:t.el$,option:t.selected},null,8,["el$","option"])):t.selected.valueDisplay&&typeof t.selected.valueDisplay=="function"?(d(),v("div",{key:1,innerHTML:t.selected.valueDisplay(t.selected,t.el$)},null,8,dd)):(d(),v("div",{key:2,innerHTML:t.selected.label},null,8,cd))],64)):(d(),v(ee,{key:1},[t.placeholder&&typeof t.placeholder=="object"&&[t.placeholder.render||t.placeholder.template]?(d(),L(F(t.placeholder),{key:0,el$:t.el$,option:t.selected},null,8,["el$","option"])):t.placeholder&&typeof t.placeholder=="function"?(d(),v("div",{key:1,innerHTML:t.placeholder(t.selected,t.el$)},null,8,pd)):(d(),v("div",{key:2,innerHTML:t.placeholder},null,8,fd))],64)),w("div",{class:f(t.classes.caret)},null,2),(d(),L(Cl,{to:"body"},[t.isOpen?(d(),v("div",{key:0,"data-dropdown-for":t.el$.fieldId,id:`dropdown-${t.el$.fieldId}`,class:f(t.classes.dropdown),style:mr(t.style),ref:"dropdown",role:"listbox",tabindex:"-1"},[(d(!0),v(ee,null,le(t.options,(a,o)=>(d(),v("div",{class:f(t.classes.optionWrapper),key:a.value},[a.display&&typeof a.display=="object"&&[a.display.render||a.display.template]?(d(),L(F(a.display),{key:0,el$:t.el$,option:a,index:o,selected:t.selected.index===a.index,pointed:t.pointed.index===a.index,"data-index":a.index,"data-selected":t.selected.index===a.index,onMouseover:s=>t.handleOptionPoint(a),onClick:s=>t.handleOptionClick(a),role:"option",tabindex:t.pointed.index===a.index?0:-1,"aria-selected":t.selected.index===a.index},null,40,["el$","option","index","selected","pointed","data-index","data-selected","onMouseover","onClick","tabindex","aria-selected"])):a.display&&typeof a.display=="function"?(d(),v("div",{key:1,innerHTML:a.display(a,o,t.selected.index===a.index,t.pointed.index===a.index,t.el$),class:f(t.classes.option(a,o,t.el$)),"data-index":a.index,"data-selected":t.selected.index===a.index,onMouseover:s=>t.handleOptionPoint(a),onClick:s=>t.handleOptionClick(a),role:"option",tabindex:t.pointed.index===a.index?0:-1,"aria-selected":t.selected.index===a.index},null,42,gd)):(d(),v("div",{key:2,innerHTML:a.label,class:f(t.classes.option(a,o,t.el$)),"data-index":a.index,"data-selected":t.selected.index===a.index,onMouseover:s=>t.handleOptionPoint(a),onClick:s=>t.handleOptionClick(a),role:"option",tabindex:t.pointed.index===a.index?0:-1,"aria-selected":t.selected.index===a.index},null,42,md))],2))),128))],14,vd)):h("v-if",!0)]))],42,ud)],2)}Fi.render=hd;Fi.__file="themes/blank/templates/ElementAddonOptions.vue";var Kl={name:"ElementAddonOptions",render:Fi.render,data(){return{merge:!0,defaultClasses:{container:"vf-addon-options",container_sm:"vf-addon-options-sm",container_md:"",container_lg:"vf-addon-options-lg",container_disabled:"vf-addon-options-disabled",wrapper:"vf-addon-options-wrapper",caret:"vf-addon-options-caret",dropdown:"vf-addon-options-dropdown",option:"vf-addon-options-option",option_active:"vf-addon-options-option-active",$container:(t,{Size:e,el$:n})=>[t.container,t[`container_${e}`],n.isDisabled||n.readonly?t.container_disabled:null],$option:(t,{selected:e,pointed:n})=>r=>[t.option,e.index===r.index||n.index===r.index?t.option_active:null]}}}},bd=`.vf-addon-options {
  display: flex;
  align-items: center;
  margin-left: var(--vf-px-input);
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
}

.vf-addon-options.vf-addon-options-sm {
  margin-left: var(--vf-px-input-sm);
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-sm);
}

.vf-addon-options.vf-addon-options-lg {
  margin-left: var(--vf-px-input-lg);
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
}

.vf-addon-options.vf-addon-options-disabled {
  opacity: 0.5;
  cursor: initial;
  pointer-events: none;
}

.vf-addon-options-wrapper {
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 4px 4px;
  cursor: pointer;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline: none;
}

.vf-addon-options-wrapper:hover, .vf-addon-options-wrapper:focus {
  background: var(--vf-bg-selected);
}

.vf-addon-options-caret {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'%3E%3C/path%3E%3C/svg%3E");
  mask-position: center center;
  -webkit-mask-position: center center;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: var(--vf-bg-icon);
  color: var(--vf-color-input);
  width: 0.625rem;
  height: 1rem;
  padding: 1px 0;
  margin-left: 0.5rem;
}

.vf-addon-options-dropdown {
  background-color: var(--vf-bg-input);
  border-width: var(--vf-border-width-dropdown);
  border-style: solid;
  border-color: var(--vf-border-color-input);
  box-shadow: var(--vf-shadow-dropdown);
  color: var(--vf-color-input);
  position: absolute;
  top: 1rem;
  bottom: 1rem;
  z-index: 1002;
  overflow-x: scroll;
}

.vf-addon-options-option {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.3125rem 0.75rem;
  white-space: nowrap;
}

.vf-addon-options-option-active {
  background: var(--vf-bg-selected);
}

[dir=rtl] .vf-addon-options {
  margin-left: 0;
  margin-right: var(--vf-px-input);
}

[dir=rtl] .vf-addon-options.vf-addon-options-sm {
  margin-left: 0;
  margin-right: var(--vf-px-input-sm);
}

[dir=rtl] .vf-addon-options.vf-addon-options-lg {
  margin-left: 0;
  margin-right: var(--vf-px-input-lg);
}

[dir=rtl] .vf-addon-options-caret {
  margin-left: 0;
  margin-right: 0.5rem;
}`;G(bd);Kl.__file="themes/vueform/templates/ElementAddonOptions.vue";var Pi={name:"ButtonElement",data(){return{merge:!0,defaultClasses:{container:"",button:""}}}};const wd=["tabindex","disabled"],yd=["innerHTML","tabindex","disabled"],kd=["tabindex","disabled"],Cd=["tabindex"],Ad=["innerHTML","tabindex"],Ed=["tabindex"];function Ld(t,e,n,r,i,l){return d(),L(F(t.elementLayout),{ref:"container"},Ie({element:U(()=>[h(" Use `button` tag "),t.buttonType==="button"?(d(),v(ee,{key:0},[h(" Use it as a component "),t.buttonLabel&&t.isButtonLabelComponent?(d(),v("button",q({key:0},{...t.button,...t.aria},{tabindex:t.isDisabled||t.isLoading?-1:void 0,disabled:t.isDisabled,class:t.classes.button,onClick:e[0]||(e[0]=he((...a)=>t.handleClick&&t.handleClick(...a),["prevent"]))}),[(d(),L(F(t.buttonLabel)))],16,wd)):t.buttonLabel?(d(),v(ee,{key:1},[h(" Use it as HTML "),w("button",q({...t.button,...t.aria},{innerHTML:t.buttonLabel,tabindex:t.isDisabled||t.isLoading?-1:void 0,class:t.classes.button,disabled:t.isDisabled,onClick:e[1]||(e[1]=he((...a)=>t.handleClick&&t.handleClick(...a),["prevent"]))}),null,16,yd)],2112)):(d(),v(ee,{key:2},[h(" Use it as slot "),w("button",q({...t.button,...t.aria},{tabindex:t.isDisabled||t.isLoading?-1:void 0,class:t.classes.button,disabled:t.isDisabled,onClick:e[2]||(e[2]=he((...a)=>t.handleClick&&t.handleClick(...a),["prevent"]))}),[D(t.$slots,"default",{el$:t.el$},()=>[(d(),L(F(t.fieldSlots.default),{el$:t.el$},null,8,["el$"]))])],16,kd)],2112))],64)):(d(),v(ee,{key:1},[h(" Use `anchor` tag "),h(" Use it as a component "),t.buttonLabel&&t.isButtonLabelComponent?(d(),v("a",q({key:0},{...t.button,...t.aria},{tabindex:t.isDisabled||t.isLoading?-1:void 0,class:t.classes.button,onClick:e[3]||(e[3]=(...a)=>t.handleClick&&t.handleClick(...a))}),[(d(),L(F(t.buttonLabel)))],16,Cd)):t.buttonLabel?(d(),v(ee,{key:1},[h(" Use it as HTML "),w("a",q({...t.button,...t.aria},{innerHTML:t.buttonLabel,tabindex:t.isDisabled||t.isLoading?-1:void 0,class:t.classes.button,onClick:e[4]||(e[4]=(...a)=>t.handleClick&&t.handleClick(...a))}),null,16,Ad)],2112)):(d(),v(ee,{key:2},[h(" Use it as slot "),w("a",q({...t.button,...t.aria},{tabindex:t.isDisabled||t.isLoading?-1:void 0,class:t.classes.button,onClick:e[5]||(e[5]=(...a)=>t.handleClick&&t.handleClick(...a))}),[D(t.$slots,"default",{el$:t.el$},()=>[(d(),L(F(t.fieldSlots.default),{el$:t.el$},null,8,["el$"]))])],16,Ed)],2112))],64))]),_:2},[le(t.elementSlots,(a,o)=>({name:o,fn:U(()=>[D(t.$slots,o,{el$:t.el$},()=>[(d(),L(F(a),{el$:t.el$},null,8,["el$"]))])])}))]),1536)}Pi.render=Ld;Pi.__file="themes/blank/templates/elements/ButtonElement.vue";var Jl={name:"ButtonElement",render:Pi.render,data(){return{merge:!0,defaultClasses:{container:"vf-text-type",button:"vf-btn",button_enabled:"",button_disabled:"vf-btn-disabled",button_loading:"vf-btn-loading",button_loading_primary:"vf-btn-loading-primary",button_loading_secondary:"vf-btn-loading-secondary",button_loading_danger:"vf-btn-loading-danger",button_primary:"vf-btn-primary",button_secondary:"vf-btn-secondary",button_danger:"vf-btn-danger",button_full:"vf-btn-full",button_not_full:"",button_left:"vf-btn-left",button_center:"vf-btn-center",button_right:"vf-btn-right",button_sm:"vf-btn-sm",button_md:"",button_lg:"vf-btn-lg",$button:(t,{isDisabled:e,isLoading:n,buttonClass:r,Size:i,danger:l,secondary:a,full:o,align:s})=>[t.button,l?t.button_danger:null,a?t.button_secondary:null,!l&&!a?t.button_primary:null,t[`button_${i}`],e?t.button_disabled:null,!e&&!n?t.button_enabled:null,n?t.button_loading:null,n&&l?t.button_loading_danger:null,n&&a?t.button_loading_secondary:null,n&&!a&&!l?t.button_loading_primary:null,o?t.button_full:t.button_not_full,s==="left"?t.button_left:null,s==="center"?t.button_center:null,s==="right"?t.button_right:null,r]}}}},xd="/* Some styles are contained in Vueform.vue */";G(xd);Jl.__file="themes/vueform/templates/elements/ButtonElement.vue";var $i={name:"CaptchaElement",data(){return{merge:!0,defaultClasses:{container:"",wrapper:"",captcha:""}}}};const Sd=["id"];function Td(t,e,n,r,i,l){return d(),L(F(t.elementLayout),{ref:"container"},Ie({element:U(()=>[t.shouldVerify?(d(),v("div",{key:0,class:f(t.classes.wrapper)},[w("div",{id:t.fieldId,class:f(t.classes.captcha),ref:"input"},null,10,Sd)],2)):h("v-if",!0)]),_:2},[le(t.elementSlots,(a,o)=>({name:o,fn:U(()=>[D(t.$slots,o,{el$:t.el$},()=>[(d(),L(F(a),{el$:t.el$},null,8,["el$"]))])])}))]),1536)}$i.render=Td;$i.__file="themes/blank/templates/elements/CaptchaElement.vue";var _l={name:"CaptchaElement",render:$i.render,data(){return{merge:!0,defaultClasses:{container:"",wrapper:"",captcha:""}}}};_l.__file="themes/vueform/templates/elements/CaptchaElement.vue";var zi={name:"CheckboxElement",data(){return{merge:!0,defaultClasses:{container:"",wrapper:"",input:"",text:""}}}};const Bd=["name","id","true-value","false-value","disabled"],Id=["innerHTML"];function Rd(t,e,n,r,i,l){return d(),L(F(t.elementLayout),{ref:"container"},Ie({element:U(()=>[w("label",{class:f(t.classes.wrapper)},[Fe(w("input",q({type:"checkbox","onUpdate:modelValue":e[0]||(e[0]=a=>t.value=a)},t.aria,{class:t.classes.input,name:t.path,id:t.fieldId,"true-value":t.trueValue,"false-value":t.falseValue,disabled:t.isDisabled,ref:"input"}),null,16,Bd),[[hr,t.value]]),h(" If label is HTML "),t.Text?(d(),v("span",{key:0,class:f(t.classes.text),innerHTML:t.Text},null,10,Id)):(d(),v(ee,{key:1},[h(" If label is slot "),w("span",{class:f(t.classes.text)},[D(t.$slots,"default",{el$:t.el$},()=>[(d(),L(F(t.fieldSlots.default),{el$:t.el$},null,8,["el$"]))])],2)],2112))],2)]),_:2},[le(t.elementSlots,(a,o)=>({name:o,fn:U(()=>[D(t.$slots,o,{el$:t.el$},()=>[(d(),L(F(a),{el$:t.el$},null,8,["el$"]))])])}))]),1536)}zi.render=Rd;zi.__file="themes/blank/templates/elements/CheckboxElement.vue";var Gl={name:"CheckboxElement",render:zi.render,data(){return{merge:!0,defaultClasses:{container:"vf-contains-link",wrapper:"vf-checkbox-wrapper",wrapper_sm:"vf-checkbox-wrapper-sm",wrapper_md:"",wrapper_lg:"vf-checkbox-wrapper-lg",wrapper_left:"vf-checkbox-wrapper-left",wrapper_right:"vf-checkbox-wrapper-right",input:"vf-checkbox",input_enabled:"",input_disabled:"",input_danger:"vf-checkbox-danger",input_sm:"vf-checkbox-sm",input_md:"",input_lg:"vf-checkbox-lg",input_left:"vf-checkbox-left",input_right:"vf-checkbox-right",text:"vf-checkbox-text",text_left:"vf-checkbox-text-left",text_right:"vf-checkbox-text-right",$wrapper:(t,{Size:e,align:n})=>[t.wrapper,t[`wrapper_${e}`],n==="left"?t.wrapper_left:null,n==="right"?t.wrapper_right:null],$input:(t,{isDisabled:e,Size:n,isDanger:r,align:i})=>[t.input,t[`input_${n}`],e?t.input_disabled:t.input_enabled,!e&&r?t.input_danger:null,i==="left"?t.input_left:null,i==="right"?t.input_right:null],$text:(t,{align:e})=>[t.text,e==="left"?t.text_left:null,e==="right"?t.text_right:null]}}}},Dd="/* Some styles are contained in Vueform.vue */";G(Dd);Gl.__file="themes/vueform/templates/elements/CheckboxElement.vue";var _n={name:"CheckboxgroupElement",data(){return{merge:!0,defaultClasses:{container:"",wrapper:""}}}};const Md=["aria-labelledby"];function Od(t,e,n,r,i,l){const a=ue("CheckboxgroupCheckbox");return d(),L(F(t.elementLayout),{ref:"container"},Ie({element:U(()=>[w("div",{class:f(t.classes.wrapper),"aria-labelledby":t.labelId,role:"group"},[(d(!0),v(ee,null,le(t.resolvedOptions,(o,s,u)=>(d(),L(a,{items:t.resolvedOptions,index:s,item:o,value:o.value,key:u,attrs:t.aria},{default:U(c=>[D(t.$slots,"checkbox",q({ref_for:!0},c,{el$:t.el$}),()=>[(d(),L(F(t.fieldSlots.checkbox),q({ref_for:!0},c,{el$:t.el$}),null,16,["el$"]))])]),_:2},1032,["items","index","item","value","attrs"]))),128))],10,Md)]),_:2},[le(t.elementSlots,(o,s)=>({name:s,fn:U(()=>[D(t.$slots,s,{el$:t.el$},()=>[(d(),L(F(o),{el$:t.el$},null,8,["el$"]))])])}))]),1536)}_n.render=Od;_n.__file="themes/blank/templates/elements/CheckboxgroupElement.vue";var Yl={name:"CheckboxgroupElement",render:_n.render,data(){return{merge:!0,defaultClasses:{container:"",wrapper:"vf-checkboxgroup-wrapper",wrapper_sm:"vf-checkboxgroup-wrapper-sm",wrapper_md:"",wrapper_lg:"vf-checkboxgroup-wrapper-lg",$wrapper:(t,{Size:e})=>[t.wrapper,t[`wrapper_${e}`]]}}}},Fd=`.vf-checkboxgroup-wrapper {
  cursor: pointer;
}

.vf-checkboxgroup-wrapper .vf-checkbox-container {
  padding-top: 0;
}`;G(Fd);Yl.__file="themes/vueform/templates/elements/CheckboxgroupElement.vue";var Xl={name:"CheckboxgroupElement_tabs",render:_n.render,data(){return{merge:!0,defaultClasses:{container:"",wrapper:"vf-checkboxgroup-tabs-wrapper",wrapper_sm:"vf-checkboxgroup-tabs-wrapper-sm",wrapper_md:"",wrapper_lg:"vf-checkboxgroup-tabs-wrapper-lg",$wrapper:(t,{Size:e})=>[t.wrapper,t[`wrapper_${e}`]]}}}},Pd=`.vf-checkboxgroup-tabs-wrapper {
  display: grid;
  grid-auto-flow: column;
  box-shadow: var(--vf-shadow-input);
  border-radius: var(--vf-radius-large);
}

.vf-checkboxgroup-tabs-wrapper.vf-checkboxgroup-tabs-wrapper-sm {
  border-radius: var(--vf-radius-large-sm);
}

.vf-checkboxgroup-tabs-wrapper.vf-checkboxgroup-tabs-wrapper-lg {
  border-radius: var(--vf-radius-large-lg);
}`;G(Pd);Xl.__file="themes/vueform/templates/elements/CheckboxgroupElement_tabs.vue";var Zl={name:"CheckboxgroupElement_blocks",render:_n.render,data(){return{merge:!0,defaultClasses:{container:"",wrapper:"vf-checkboxgroup-blocks-wrapper",wrapper_sm:"vf-checkboxgroup-blocks-wrapper-sm",wrapper_md:"",wrapper_lg:"vf-checkboxgroup-blocks-wrapper-lg",$wrapper:(t,{Size:e})=>[t.wrapper,t[`wrapper_${e}`]]}}}},$d=`.vf-checkboxgroup-blocks-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: var(--vf-shadow-input);
  border-radius: var(--vf-radius-large);
}

.vf-checkboxgroup-blocks-wrapper.vf-checkboxgroup-blocks-wrapper-sm {
  border-radius: var(--vf-radius-large-sm);
}

.vf-checkboxgroup-blocks-wrapper.vf-checkboxgroup-blocks-wrapper-lg {
  border-radius: var(--vf-radius-large-lg);
}`;G($d);Zl.__file="themes/vueform/templates/elements/CheckboxgroupElement_blocks.vue";var Nn={name:"DateElement",data(){return{merge:!0,defaultClasses:{container:"",inputContainer:"",inputWrapper:"",input:""}}}};function zd(t,e,n,r,i,l){const a=ue("ElementAddon"),o=ue("ElementLabelFloating"),s=ue("DatepickerWrapper");return d(),L(F(t.elementLayout),{ref:"container"},Ie({element:U(()=>[w("div",{class:f(t.classes.inputContainer)},[t.hasAddonBefore?(d(),L(a,{key:0,type:"before"},{default:U(()=>[D(t.$slots,"addon-before",{},()=>[(d(),L(F(t.fieldSlots["addon-before"]),{el$:t.el$},null,8,["el$"]))])]),_:3})):h("v-if",!0),t.hasAddonAfter?(d(),L(a,{key:1,type:"after"},{default:U(()=>[D(t.$slots,"addon-after",{},()=>[(d(),L(F(t.fieldSlots["addon-after"]),{el$:t.el$},null,8,["el$"]))])]),_:3})):h("v-if",!0),t.hasFloating&&!t.empty?(d(),L(o,{key:2,visible:!t.empty},null,8,["visible"])):h("v-if",!0),w("div",{class:f(t.classes.inputWrapper)},[Ee(s,{value:t.model,options:t.fieldOptions,id:t.fieldId,class:f(t.classes.input),placeholder:t.Placeholder,disabled:t.isDisabled,readonly:t.readonly,attrs:t.aria,onChange:t.handleChange,ref:"input"},null,8,["value","options","id","class","placeholder","disabled","readonly","attrs","onChange"])],2)],2)]),_:2},[le(t.elementSlots,(u,c)=>({name:c,fn:U(()=>[D(t.$slots,c,{el$:t.el$},()=>[(d(),L(F(u),{el$:t.el$},null,8,["el$"]))])])}))]),1536)}Nn.render=zd;Nn.__file="themes/blank/templates/elements/DateElement.vue";var eo={name:"DateElement",render:Nn.render,data(){return{merge:!0,defaultClasses:{container:"vf-text-type",inputContainer:"vf-input-group",inputContainer_sm:"vf-input-group-sm",inputContainer_md:"",inputContainer_lg:"vf-input-group-lg",inputContainer_default:"",inputContainer_disabled:"vf-input-group-disabled",inputContainer_focused:"vf-input-group-focused",inputContainer_success:"vf-input-group-success",inputContainer_danger:"vf-input-group-danger",inputWrapper:"vf-datepicker-wrapper",input:"vf-input-field",input_sm:"",input_md:"",input_lg:"",input_enabled:"",input_disabled:"",input_focused:"",input_success:"",input_danger:"",$inputContainer:(t,{isDisabled:e,Size:n,isSuccess:r,isDanger:i,focused:l})=>[t.inputContainer,t[`inputContainer_${n}`],e?t.inputContainer_disabled:null,!e&&!r&&!i?t.inputContainer_default:null,!e&&l?t.inputContainer_focused:null,!e&&r?t.inputContainer_success:null,!e&&i?t.inputContainer_danger:null],$input:(t,{isDisabled:e,Size:n,isSuccess:r,isDanger:i,focused:l})=>[t.input,t[`input_${n}`],e?t.input_disabled:null,!e&&!r&&!i&&!l?t.input_enabled:null,!e&&l&&!r&&!i?t.input_focused:null,!e&&i?t.input_danger:null,!e&&r?t.input_success:null]}}}},Nd=`/* Some styles are contained in Vueform.vue & DatepickerWrapper.vue */

.vf-datepicker-wrapper {
  display: block;
  width: 100%;
  height: 100%;
}`;G(Nd);eo.__file="themes/vueform/templates/elements/DateElement.vue";var to={name:"DatesElement",render:Nn.render,staticRenderFns:Nn.staticRenderFns,data(){return{merge:!0,defaultClasses:{container:"",inputContainer:"",input:""}}}};to.__file="themes/blank/templates/elements/DatesElement.vue";var no={name:"DatesElement",render:to.render,data(){return{merge:!0,defaultClasses:{container:"vf-text-type",inputContainer:"vf-input-group",inputContainer_sm:"vf-input-group-sm",inputContainer_md:"",inputContainer_lg:"vf-input-group-lg",inputContainer_default:"",inputContainer_disabled:"vf-input-group-disabled",inputContainer_focused:"vf-input-group-focused",inputContainer_success:"vf-input-group-success",inputContainer_danger:"vf-input-group-danger",inputWrapper:"vf-datepicker-wrapper",input:"vf-input-field",input_sm:"",input_md:"",input_lg:"",input_enabled:"",input_disabled:"",input_focused:"",input_success:"",input_danger:"",$inputContainer:(t,{isDisabled:e,Size:n,isSuccess:r,isDanger:i,focused:l})=>[t.inputContainer,t[`inputContainer_${n}`],e?t.inputContainer_disabled:null,!e&&!r&&!i?t.inputContainer_default:null,!e&&l?t.inputContainer_focused:null,!e&&r?t.inputContainer_success:null,!e&&i?t.inputContainer_danger:null],$input:(t,{isDisabled:e,Size:n,isSuccess:r,isDanger:i,focused:l})=>[t.input,t[`input_${n}`],e?t.input_disabled:null,!e&&!r&&!i&&!l?t.input_enabled:null,!e&&l&&!r&&!i?t.input_focused:null,!e&&i?t.input_danger:null,!e&&r?t.input_success:null]}}}},Hd="/* Some styles are contained in Vueform.vue & DatepickerWrapper.vue */";G(Hd);no.__file="themes/vueform/templates/elements/DatesElement.vue";var Ni={name:"FileElement",data(){return{merge:!0,defaultClasses:{container:"",button:""}}}};const jd=["aria-labelledby","aria-placeholder"],Ud=["id","accept"];function Vd(t,e,n,r,i,l){const a=ue("DragAndDrop"),o=ue("FilePreview");return d(),L(F(t.elementLayout),{ref:"container"},Ie({element:U(()=>[h(" Drag n drop "),t.drop&&t.canDrop&&t.canSelect?(d(),L(a,{key:0,title:t.form$.translations.vueform.elements[t.type].dndTitle,description:t.form$.translations.vueform.elements[t.type].dndDescription,disabled:t.isDisabled,onClick:t.handleClick,onDrop:t.handleDrop},null,8,["title","description","disabled","onClick","onDrop"])):t.canSelect?(d(),v(ee,{key:1},[h(" Upload button "),w("div",q(t.aria,{class:t.classes.button,"aria-labelledby":t.labelId,"aria-placeholder":t.form$.translations.vueform.elements[t.type].select,onClick:e[0]||(e[0]=he((...s)=>t.handleClick&&t.handleClick(...s),["prevent"])),onKeypress:e[1]||(e[1]=We((...s)=>t.handleClick&&t.handleClick(...s),["enter","space"])),role:"button",tabindex:"0"}),Ce(t.form$.translations.vueform.elements[t.type].select),17,jd)],2112)):h("v-if",!0),h(" Hidden file input "),t.canSelect&&!t.isDisabled&&!t.preparing?Fe((d(),v("input",{key:2,id:t.fieldId,type:"file",accept:t.accept,onChange:e[2]||(e[2]=(...s)=>t.handleChange&&t.handleChange(...s)),ref:"input"},null,40,Ud)),[[ft,!1]]):h("v-if",!0),h(" Preview "),D(t.$slots,"preview",{},()=>[(d(),L(o,{key:t.view,attrs:t.aria},null,8,["attrs"]))])]),_:2},[le(t.elementSlots,(s,u)=>({name:u,fn:U(()=>[D(t.$slots,u,{el$:t.el$},()=>[(d(),L(F(s),{el$:t.el$},null,8,["el$"]))])])}))]),1536)}Ni.render=Vd;Ni.__file="themes/blank/templates/elements/FileElement.vue";var ro={name:"FileElement",render:Ni.render,data(){return{merge:!0,defaultClasses:{container:"vf-file vf-text-type",container_removing:"vf-file-removing",button:"vf-btn vf-btn-secondary",button_enabled:"",button_disabled:"vf-btn-disabled",button_sm:"vf-btn-sm",button_md:"",button_lg:"vf-btn-lg",assertiveText:"vf-assertive-text",$container:(t,{removing:e})=>[t.container,e?t.container_removing:null],$button:(t,{isDisabled:e,preparing:n,Size:r})=>[t.button,t[`button_${r}`],!e&&!n?t.button_enabled:null,e||n?t.button_disabled:null]}}}},Wd="/* Some styles are contained in Vueform.vue */";G(Wd);ro.__file="themes/vueform/templates/elements/FileElement.vue";var Hi={name:"GroupElement",data(){return{merge:!0,defaultClasses:{container:"",wrapper:""}}}};const Qd=["aria-labelledby"];function qd(t,e,n,r,i,l){return d(),L(F(t.elementLayout),{multiple:!0,ref:"container"},Ie({element:U(()=>[w("div",{class:f(t.classes.wrapper),role:"group","aria-labelledby":t.labelId},[D(t.$slots,"default",{},()=>[(d(!0),v(ee,null,le(t.children,(a,o)=>(d(),L(F(t.component(a)),q({ref_for:!0},a,{name:o,key:o}),null,16,["name"]))),128))])],10,Qd)]),_:2},[le(t.elementSlots,(a,o)=>({name:o,fn:U(()=>[D(t.$slots,o,{el$:t.el$},()=>[(d(),L(F(a),{el$:t.el$},null,8,["el$"]))])])}))]),1536)}Hi.render=qd;Hi.__file="themes/blank/templates/elements/GroupElement.vue";var io={name:"GroupElement",render:Hi.render,data(){return{merge:!0,defaultClasses:{container:"",wrapper:"vf-row",wrapper_sm:"vf-row-sm",wrapper_md:"",wrapper_lg:"vf-row-lg",$wrapper:(t,{Size:e})=>[t.wrapper,t[`wrapper_${e}`]]}}}},Kd="/* Some styles are contained in Vueform.vue */";G(Kd);io.__file="themes/vueform/templates/elements/GroupElement.vue";var ji={name:"HiddenElement",data(){return{merge:!0,defaultClasses:{}}}};const Jd={key:0,ref:"container"},_d=["name","id"];function Gd(t,e,n,r,i,l){return t.meta?h("v-if",!0):(d(),v("span",Jd,[Fe(w("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>t.value=a),type:"hidden",name:t.name,id:t.fieldId,ref:"input"},null,8,_d),[[Us,t.value]])],512))}ji.render=Gd;ji.__file="themes/blank/templates/elements/HiddenElement.vue";var ao={name:"HiddenElement",render:ji.render,data(){return{merge:!0,defaultClasses:{}}}};ao.__file="themes/vueform/templates/elements/HiddenElement.vue";var Ui={name:"ListElement",data(){return{merge:!0,defaultClasses:{container:"",list:"",listItem:"",handle:"",handleIcon:"",remove:"",removeIcon:"",add:""}}}};const Yd=["aria-labelledby"],Xd=["data-id"],Zd=["aria-roledescription","id","onClick","onKeypress"],ec=["id","innerHTML"];function tc(t,e,n,r,i,l){return d(),L(F(t.elementLayout),{ref:"container"},Ie({element:U(()=>[h(" Sorting container "),w("div",{class:f(t.classes.list),role:"list","aria-labelledby":t.labelId,ref:"list"},[(d(!0),v(ee,null,le(t.value,(a,o)=>(d(),v("div",{key:o,class:f(t.classes.listItem),role:"listitem","data-id":`${t.path}-${o}`},[D(t.$slots,"default",{index:o},()=>[t.prototype.type?(d(),L(F(t.component(t.prototype)),q({key:0,ref_for:!0},t.prototype,{name:o,key:o}),null,16,["name"])):h("v-if",!0)]),h(" Sort handle "),t.hasSort?(d(),v("span",{key:0,class:f(t.classes.handle),"data-handle":""},[w("span",{class:f(t.classes.handleIcon)},null,2)],2)):h("v-if",!0),h(" Remove button "),t.hasRemove?(d(),v("div",{key:1,"aria-roledescription":t.form$.translations.vueform.a11y.list.remove,class:f(t.classes.remove),id:`${t.path}-${o}-remove-button`,onClick:he(s=>t.handleRemove(o),["prevent"]),onKeypress:We(s=>t.handleRemove(o),["space","enter"]),role:"button",tabindex:"0"},[w("span",{class:f(t.classes.removeIcon)},null,2)],42,Zd)):h("v-if",!0)],10,Xd))),128))],10,Yd),h(" Add button "),t.hasAdd?(d(),v("div",{key:0,class:f(t.classes.add),id:`${t.fieldId}-add-button`,onClick:e[0]||(e[0]=he((...a)=>t.handleAdd&&t.handleAdd(...a),["prevent"])),onKeypress:e[1]||(e[1]=We((...a)=>t.handleAdd&&t.handleAdd(...a),["enter","space"])),innerHTML:t.addLabel,role:"button",tabindex:"0"},null,42,ec)):h("v-if",!0)]),_:2},[le(t.elementSlots,(a,o)=>({name:o,fn:U(()=>[D(t.$slots,o,{el$:t.el$},()=>[(d(),L(F(a),{el$:t.el$},null,8,["el$"]))])])}))]),1536)}Ui.render=tc;Ui.__file="themes/blank/templates/elements/ListElement.vue";var lo={name:"ListElement",render:Ui.render,data(){return{merge:!0,defaultClasses:{container:"",list:"vf-rowset",list_sm:"vf-rowset-sm",list_md:"",list_lg:"vf-rowset-lg",list_disabled:"vf-list-disabled",list_sorting:"vf-list-sorting",listItem:"vf-row",listItem_sm:"vf-row-sm",listItem_md:"",listItem_lg:"vf-row-lg",handle:"vf-list-handle",handle_sm:"vf-list-handle-sm",handle_md:"",handle_lg:"vf-list-handle-lg",handleIcon:"vf-list-handle-icon",remove:"vf-list-remove",removeIcon:"vf-list-remove-icon",add:"vf-btn vf-btn-primary vf-btn-small vf-btn-list-add",add_sm:"vf-btn-small-sm vf-btn-list-add-sm",add_md:"",add_lg:"vf-btn-small-lg vf-btn-list-add-lg",$list:(t,{isDisabled:e,sorting:n,Size:r})=>[t.list,t[`list_${r}`],e?t.list_disabled:null,n?t.list_sorting:null],$listItem:(t,{Size:e})=>[t.listItem,t[`listItem_${e}`]],$handle:(t,{Size:e})=>[t.handle,t[`handle_${e}`]],$add:(t,{Size:e})=>[t.add,t[`add_${e}`]]}}}},nc=`/* Some styles are contained in Vueform.vue */

.vf-rowset > .vf-row {
  position: relative;
}

.vf-rowset > .vf-row:hover > .vf-list-remove, .vf-rowset > .vf-row:hover > .vf-list-handle {
  visibility: visible;
  opacity: 1;
}

.vf-rowset.vf-list-sorting > div:hover .vf-list-handle, .vf-rowset.vf-list-sorting > div:hover .vf-list-remove {
  visibility: hidden;
  opacity: 0;
}

.vf-list-remove, .vf-list-handle {
  opacity: 0;
  transition: 0.3s;
}

.vf-list-remove span, .vf-list-handle span {
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: center center;
}

.vf-list-remove {
  position: absolute;
  left: 0;
  transform: translateX(-50%) translateY(-50%);
  top: 0;
  z-index: 999;
  background-color: var(--vf-bg-passive);
  border-radius: 999px;
  transition: 0.15s;
}

.vf-list-remove:hover {
  filter: brightness(0.9);
}

.vf-list-remove:focus {
  opacity: 1;
}

.vf-list-remove-icon {
  display: flex;
  width: 1.125rem;
  height: 1.125rem;
  align-items: center;
  justify-content: center;
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: 0.75rem 0.75rem;
  -webkit-mask-size: 0.75rem 0.75rem;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-position: center center;
  background-color: var(--vf-color-passive);
}

.vf-list-handle {
  position: absolute;
  left: 0;
  transform: translateX(-100%);
  top: 0;
  cursor: grab;
  z-index: 999;
}

.vf-list-handle:active {
  cursor: grabbing;
}

.vf-list-handle-icon {
  width: var(--vf-min-height-input);
  height: var(--vf-min-height-input);
  mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='11px' height='9px' viewBox='0 0 11 9' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3Ebars%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M10.0418527,0.894571939 L0.309709821,0.894571939 C0.235791888,0.894571939 0.17578125,0.834156736 0.17578125,0.759740479 L0.17578125,0.220414636 C0.17578125,0.145998379 0.235791888,0.0855831754 0.309709821,0.0855831754 L10.0418527,0.0855831754 C10.1157706,0.0855831754 10.1757812,0.145998379 10.1757812,0.220414636 L10.1757812,0.759740479 C10.1757812,0.834156736 10.1157706,0.894571939 10.0418527,0.894571939 Z M10.0418527,4.8049452 L0.309709821,4.8049452 C0.235791888,4.8049452 0.17578125,4.74453 0.17578125,4.67011374 L0.17578125,4.1307879 C0.17578125,4.05637164 0.235791888,3.99595644 0.309709821,3.99595644 L10.0418527,3.99595644 C10.1157706,3.99595644 10.1757812,4.05637164 10.1757812,4.1307879 L10.1757812,4.67011374 C10.1757812,4.74453 10.1157706,4.8049452 10.0418527,4.8049452 Z M10.0418527,8.80953919 L0.309709821,8.80953919 C0.235791888,8.80953919 0.17578125,8.74912399 0.17578125,8.67470773 L0.17578125,8.13538189 C0.17578125,8.06096563 0.235791888,8.00055043 0.309709821,8.00055043 L10.0418527,8.00055043 C10.1157706,8.00055043 10.1757812,8.06096563 10.1757812,8.13538189 L10.1757812,8.67470773 C10.1757812,8.74912399 10.1157706,8.80953919 10.0418527,8.80953919 Z' id='bars' fill='currentColor' %3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='11px' height='9px' viewBox='0 0 11 9' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3Ebars%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M10.0418527,0.894571939 L0.309709821,0.894571939 C0.235791888,0.894571939 0.17578125,0.834156736 0.17578125,0.759740479 L0.17578125,0.220414636 C0.17578125,0.145998379 0.235791888,0.0855831754 0.309709821,0.0855831754 L10.0418527,0.0855831754 C10.1157706,0.0855831754 10.1757812,0.145998379 10.1757812,0.220414636 L10.1757812,0.759740479 C10.1757812,0.834156736 10.1157706,0.894571939 10.0418527,0.894571939 Z M10.0418527,4.8049452 L0.309709821,4.8049452 C0.235791888,4.8049452 0.17578125,4.74453 0.17578125,4.67011374 L0.17578125,4.1307879 C0.17578125,4.05637164 0.235791888,3.99595644 0.309709821,3.99595644 L10.0418527,3.99595644 C10.1157706,3.99595644 10.1757812,4.05637164 10.1757812,4.1307879 L10.1757812,4.67011374 C10.1757812,4.74453 10.1157706,4.8049452 10.0418527,4.8049452 Z M10.0418527,8.80953919 L0.309709821,8.80953919 C0.235791888,8.80953919 0.17578125,8.74912399 0.17578125,8.67470773 L0.17578125,8.13538189 C0.17578125,8.06096563 0.235791888,8.00055043 0.309709821,8.00055043 L10.0418527,8.00055043 C10.1157706,8.00055043 10.1757812,8.06096563 10.1757812,8.13538189 L10.1757812,8.67470773 C10.1757812,8.74912399 10.1157706,8.80953919 10.0418527,8.80953919 Z' id='bars' fill='currentColor' %3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  mask-size: 0.7rem 0.7rem;
  -webkit-mask-size: 0.7rem 0.7rem;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-position: center center;
  background-color: var(--vf-color-passive);
}

.vf-list-handle-sm .vf-list-handle-icon {
  width: var(--vf-min-height-input-sm);
  height: var(--vf-min-height-input-sm);
}

.vf-list-handle-lg .vf-list-handle-icon {
  width: var(--vf-min-height-input-lg);
  height: var(--vf-min-height-input-lg);
}

.vf-btn-list-add {
  margin-top: var(--vf-gutter);
}

.vf-btn-list-add.vf-btn-list-add-sm {
  margin-top: var(--vf-gutter-sm);
}

.vf-btn-list-add.vf-btn-list-add-lg {
  margin-top: var(--vf-gutter-lg);
}

.sortable-ghost {
  opacity: 0.6;
}`;G(nc);lo.__file="themes/vueform/templates/elements/ListElement.vue";var Vi={name:"LocationElement",data(){return{merge:!0,defaultClasses:{container:"",inputContainer:"",input:""}}}};const rc=["name","id","placeholder","disabled","readonly","aria-labelledby"];function ic(t,e,n,r,i,l){const a=ue("ElementAddon"),o=ue("ElementLabelFloating");return d(),L(F(t.elementLayout),{ref:"container"},Ie({element:U(()=>[w("div",{class:f(t.classes.inputContainer)},[t.hasAddonBefore?(d(),L(a,{key:0,type:"before"},{default:U(()=>[D(t.$slots,"addon-before",{},()=>[(d(),L(F(t.fieldSlots["addon-before"]),{el$:t.el$},null,8,["el$"]))])]),_:3})):h("v-if",!0),t.hasAddonAfter?(d(),L(a,{key:1,type:"after"},{default:U(()=>[D(t.$slots,"addon-after",{},()=>[(d(),L(F(t.fieldSlots["addon-after"]),{el$:t.el$},null,8,["el$"]))])]),_:3})):h("v-if",!0),t.hasFloating&&!t.empty?(d(),L(o,{key:2,visible:!t.empty},null,8,["visible"])):h("v-if",!0),w("input",q({type:"search",name:t.name,id:t.fieldId,class:t.classes.input,placeholder:t.Placeholder,disabled:t.isDisabled,readonly:t.readonly,"aria-labelledby":t.labelId,autocomplete:"off"},t.attrs,{ref:"input",onBlur:e[0]||(e[0]=(...s)=>t.handleLocationBlur&&t.handleLocationBlur(...s))}),null,16,rc)],2)]),_:2},[le(t.elementSlots,(s,u)=>({name:u,fn:U(()=>[D(t.$slots,u,{el$:t.el$},()=>[(d(),L(F(s),{el$:t.el$},null,8,["el$"]))])])}))]),1536)}Vi.render=ic;Vi.__file="themes/blank/templates/elements/LocationElement.vue";var oo={name:"LocationElement",render:Vi.render,data(){return{merge:!0,defaultClasses:{container:"vf-text-type",inputContainer:"vf-input-group",inputContainer_sm:"vf-input-group-sm",inputContainer_md:"",inputContainer_lg:"vf-input-group-lg",inputContainer_default:"",inputContainer_disabled:"vf-input-group-disabled",inputContainer_focused:"vf-input-group-focused",inputContainer_success:"vf-input-group-success",inputContainer_danger:"vf-input-group-danger",input:"vf-input-field",input_sm:"",input_md:"",input_lg:"",input_enabled:"",input_disabled:"",input_focused:"",input_success:"",input_danger:"",$inputContainer:(t,{isDisabled:e,Size:n,isSuccess:r,isDanger:i,focused:l})=>[t.inputContainer,t[`inputContainer_${n}`],e?t.inputContainer_disabled:null,!e&&!r&&!i?t.inputContainer_default:null,!e&&l?t.inputContainer_focused:null,!e&&r?t.inputContainer_success:null,!e&&i?t.inputContainer_danger:null],$input:(t,{isDisabled:e,Size:n,isSuccess:r,isDanger:i,focused:l})=>[t.input,t[`input_${n}`],e?t.input_disabled:null,!e&&!r&&!i&&!l?t.input_enabled:null,!e&&l&&!r&&!i?t.input_focused:null,!e&&i?t.input_danger:null,!e&&r?t.input_success:null]}}}},ac=`/* Google */

.pac-container {
  border-color: var(--vf-border-color-input);
  background: var(--vf-bg-input);
}

.pac-item {
  display: flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  border-color: var(--vf-border-color-input);
  background: var(--vf-bg-input);
  color: var(--vf-color-input);
  cursor: pointer;
}

.pac-item > span:last-of-type {
  font-size: 0.75rem;
  color: var(--vf-color-muted);
}

.pac-item:hover, .pac-item.pac-item-selected {
  background: var(--vf-bg-selected);
}

.pac-item-query {
  font-size: 0.875rem;
  line-height: 1;
  margin-right: 0.25rem;
  padding-right: 0.25rem;
  color: var(--vf-color-input);
}

.pac-icon-marker {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 384 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 384 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z'%3e%3c/path%3e%3c/svg%3e");
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-position: center center;
  mask-size: contain;
  -webkit-mask-size: contain;
  background: var(--vf-bg-icon);
  width: 0.875rem;
  width: 0.875rem;
  margin-right: 0.75rem;
  margin-top: 0;
  padding-top: 1px;
  padding-bottom: 1px;
  box-sizing: content-box;
  flex-shrink: 0;
}

.pac-logo:after {
  margin-left: 0.625rem;
  margin-right: 0.625rem;
  margin-bottom: 0.625rem;
}

.pac-icon, .hdpi .pac-icon {
  background-image: none;
}`;G(ac);oo.__file="themes/vueform/templates/elements/LocationElement.vue";var Wi={name:"MultifileElement",data(){return{merge:!0,defaultClasses:{container:"",list:"",listItem:"",handle:"",handleIcon:"",dnd:"",button:""}}}};const lc=["aria-labelledby","aria-placeholder"],oc=["id","accept","disabled"];function sc(t,e,n,r,i,l){const a=ue("DragAndDrop");return d(),L(F(t.elementLayout),{multiple:!0,ref:"container"},Ie({element:U(()=>[h(" Drag n drop "),t.drop&&t.canDrop&&t.hasAdd?(d(),L(a,{key:0,title:t.form$.translations.vueform.elements[t.type].dndTitle,description:t.form$.translations.vueform.elements[t.type].dndDescription,disabled:t.isDisabled,class:f(t.classes.dnd),onClick:t.handleClick,onDrop:t.handleDrop},null,8,["title","description","disabled","class","onClick","onDrop"])):t.hasAdd?(d(),v(ee,{key:1},[h(" Upload button "),w("div",q(t.aria,{class:t.classes.button,"aria-labelledby":t.labelId,"aria-placeholder":t.form$.translations.vueform.elements.multifile.uploadButton,onClick:e[0]||(e[0]=he((...o)=>t.handleClick&&t.handleClick(...o),["prevent"])),onKeypress:e[1]||(e[1]=We((...o)=>t.handleClick&&t.handleClick(...o),["enter","space"])),role:"button",tabindex:"0"}),Ce(t.form$.translations.vueform.elements.multifile.uploadButton),17,lc)],2112)):h("v-if",!0),h(" Actual input field "),Fe(w("input",{multiple:"",id:t.fieldId,type:"file",onChange:e[2]||(e[2]=(...o)=>t.handleChange&&t.handleChange(...o)),accept:t.accept,disabled:t.isDisabled,ref:"input"},null,40,oc),[[ft,!1]]),Fe((d(),v("div",{class:f(t.classes.list),key:`${t.fieldId}-${t.length}`,ref:"list"},[(d(!0),v(ee,null,le(t.value,(o,s)=>(d(),v("div",{key:s,class:f(t.classes.listItem)},[t.prototype.type?(d(),L(F(t.component(t.prototype)),q({key:0,ref_for:!0},t.prototype,{disabled:!t.hasRemove,embed:!0,name:s,onRemove:u=>t.remove(s)}),null,16,["disabled","name","onRemove"])):h("v-if",!0),h(" Sort handle "),t.hasSort?(d(),v("span",{key:1,class:f(t.classes.handle),"data-handle":""},[w("span",{class:f(t.classes.handleIcon)},null,2)],2)):h("v-if",!0)],2))),128))],2)),[[ft,!t.empty]])]),_:2},[le(t.elementSlots,(o,s)=>({name:s,fn:U(()=>[D(t.$slots,s,{el$:t.el$},()=>[(d(),L(F(o),{el$:t.el$},null,8,["el$"]))])])}))]),1536)}Wi.render=sc;Wi.__file="themes/blank/templates/elements/MultifileElement.vue";var so={name:"MultifileElement",render:Wi.render,data(){return{merge:!0,defaultClasses:{container:"vf-text-type",list:"vf-multifile-list",list_sm:"vf-multifile-list-sm",list_md:"",list_lg:"vf-multifile-list-lg",list_file:"vf-multifile-list-file",list_file_sm:"",list_file_md:"",list_file_lg:"",list_image:"vf-multifile-list-image",list_image_sm:"vf-multifile-list-image-sm",list_image_md:"",list_image_lg:"vf-multifile-list-image-lg",list_gallery:"vf-multifile-list-gallery",list_gallery_sm:"vf-multifile-list-gallery-sm",list_gallery_md:"",list_gallery_lg:"vf-multifile-list-gallery-lg",list_disabled:"vf-multifile-list-disabled",list_sorting:"vf-multifile-list-sorting",listItem:"",handle:"",handle_file:"vf-multifile-handle-file",handle_file_sm:"vf-multifile-handle-file-sm",handle_file_md:"",handle_file_lg:"vf-multifile-handle-file-lg",handle_image:"vf-multifile-handle-image",handle_image_sm:"vf-multifile-handle-image-sm",handle_image_md:"",handle_image_lg:"vf-multifile-handle-image-lg",handle_gallery:"vf-multifile-handle-gallery",handle_gallery_sm:"",handle_gallery_md:"",handle_gallery_lg:"",handleIcon:"",handleIcon_file:"vf-multifile-handle-icon-file",handleIcon_image:"vf-multifile-handle-icon-image",handleIcon_gallery:"vf-multifile-handle-icon-gallery",dnd:"",button:"vf-btn vf-btn-secondary",button_enabled:"",button_disabled:"vf-btn-disabled",button_sm:"vf-btn-sm",button_md:"",button_lg:"vf-btn-lg",$list:(t,{isDisabled:e,sorting:n,view:r,Size:i})=>[t.list,t[`list_${i}`],e?t.list_disabled:null,n?t.list_sorting:null,t[`list_${r}`],t[`list_${r}_${i}`]],$handle:(t,{view:e,Size:n})=>[t.handle,t[`handle_${e}`],t[`handle_${e}_${n}`]],$handleIcon:(t,{view:e})=>[t.handleIcon,t[`handleIcon_${e}`]],$button:(t,{isDisabled:e,preparing:n,Size:r})=>[t.button,t[`button_${r}`],!e&&!n?t.button_enabled:null,e||n?t.button_disabled:null]}}}},uc=`/* Some styles are contained in Vueform.vue */

.vf-multifile-list {
  margin-top: var(--vf-gutter);
}

.vf-multifile-list.vf-multifile-list-sm {
  margin-top: var(--vf-gutter-sm);
}

.vf-multifile-list.vf-multifile-list-lg {
  margin-top: var(--vf-gutter-lg);
}

.vf-multifile-list-file,
.vf-multifile-list-image {
  display: grid;
}

.vf-multifile-list-file > .vf-row,
.vf-multifile-list-image > .vf-row {
  position: relative;
}

.vf-multifile-list-file > .vf-row:hover .vf-multifile-handle-file,
.vf-multifile-list-file > .vf-row:hover .vf-multifile-handle-image,
.vf-multifile-list-image > .vf-row:hover .vf-multifile-handle-file,
.vf-multifile-list-image > .vf-row:hover .vf-multifile-handle-image {
  visibility: visible;
  opacity: 1;
}

.vf-multifile-list-file.vf-multifile-list-sorting > div:hover .vf-multifile-handle-file,
.vf-multifile-list-file.vf-multifile-list-sorting > div:hover .vf-multifile-handle-image,
.vf-multifile-list-image.vf-multifile-list-sorting > div:hover .vf-multifile-handle-file,
.vf-multifile-list-image.vf-multifile-list-sorting > div:hover .vf-multifile-handle-image {
  visibility: hidden;
  opacity: 0;
}

.vf-multifile-list-file {
  row-gap: calc(var(--vf-gutter) / 2);
}

.vf-multifile-list-file.vf-multifile-list-file-sm {
  row-gap: calc(var(--vf-gutter-sm) / 2);
}

.vf-multifile-list-file.vf-multifile-list-file-lg {
  row-gap: calc(var(--vf-gutter-lg) / 2);
}

.vf-multifile-list-image {
  row-gap: calc(var(--vf-gutter) / 2);
}

.vf-multifile-list-image.vf-multifile-list-image-sm {
  row-gap: calc(var(--vf-gutter-sm) / 2);
}

.vf-multifile-list-image.vf-multifile-list-image-lg {
  row-gap: calc(var(--vf-gutter-lg) / 2);
}

.vf-multifile-list-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: calc(var(--vf-gutter) / 2);
}

.vf-multifile-list-gallery.vf-multifile-list-sorting > div:hover .vf-multifile-handle-gallery {
  visibility: hidden;
  opacity: 0;
}

.vf-multifile-list-gallery > div {
  position: relative;
}

.vf-multifile-list-gallery > div:hover .vf-multifile-handle-gallery {
  visibility: visible;
  opacity: 1;
}

.vf-multifile-handle-file,
.vf-multifile-handle-image {
  position: absolute;
  left: var(--vf-gutter);
  transform: translateX(-100%);
  top: 0;
  cursor: grab;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s;
}

.vf-multifile-handle-file:active,
.vf-multifile-handle-image:active {
  cursor: grabbing;
}

.vf-multifile-handle-icon-file,
.vf-multifile-handle-icon-image {
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: center center;
  width: var(--vf-min-height-input);
  height: var(--vf-min-height-input);
  mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='11px' height='9px' viewBox='0 0 11 9' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3Ebars%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M10.0418527,0.894571939 L0.309709821,0.894571939 C0.235791888,0.894571939 0.17578125,0.834156736 0.17578125,0.759740479 L0.17578125,0.220414636 C0.17578125,0.145998379 0.235791888,0.0855831754 0.309709821,0.0855831754 L10.0418527,0.0855831754 C10.1157706,0.0855831754 10.1757812,0.145998379 10.1757812,0.220414636 L10.1757812,0.759740479 C10.1757812,0.834156736 10.1157706,0.894571939 10.0418527,0.894571939 Z M10.0418527,4.8049452 L0.309709821,4.8049452 C0.235791888,4.8049452 0.17578125,4.74453 0.17578125,4.67011374 L0.17578125,4.1307879 C0.17578125,4.05637164 0.235791888,3.99595644 0.309709821,3.99595644 L10.0418527,3.99595644 C10.1157706,3.99595644 10.1757812,4.05637164 10.1757812,4.1307879 L10.1757812,4.67011374 C10.1757812,4.74453 10.1157706,4.8049452 10.0418527,4.8049452 Z M10.0418527,8.80953919 L0.309709821,8.80953919 C0.235791888,8.80953919 0.17578125,8.74912399 0.17578125,8.67470773 L0.17578125,8.13538189 C0.17578125,8.06096563 0.235791888,8.00055043 0.309709821,8.00055043 L10.0418527,8.00055043 C10.1157706,8.00055043 10.1757812,8.06096563 10.1757812,8.13538189 L10.1757812,8.67470773 C10.1757812,8.74912399 10.1157706,8.80953919 10.0418527,8.80953919 Z' id='bars' fill='currentColor' %3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='11px' height='9px' viewBox='0 0 11 9' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3Ebars%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M10.0418527,0.894571939 L0.309709821,0.894571939 C0.235791888,0.894571939 0.17578125,0.834156736 0.17578125,0.759740479 L0.17578125,0.220414636 C0.17578125,0.145998379 0.235791888,0.0855831754 0.309709821,0.0855831754 L10.0418527,0.0855831754 C10.1157706,0.0855831754 10.1757812,0.145998379 10.1757812,0.220414636 L10.1757812,0.759740479 C10.1757812,0.834156736 10.1157706,0.894571939 10.0418527,0.894571939 Z M10.0418527,4.8049452 L0.309709821,4.8049452 C0.235791888,4.8049452 0.17578125,4.74453 0.17578125,4.67011374 L0.17578125,4.1307879 C0.17578125,4.05637164 0.235791888,3.99595644 0.309709821,3.99595644 L10.0418527,3.99595644 C10.1157706,3.99595644 10.1757812,4.05637164 10.1757812,4.1307879 L10.1757812,4.67011374 C10.1757812,4.74453 10.1157706,4.8049452 10.0418527,4.8049452 Z M10.0418527,8.80953919 L0.309709821,8.80953919 C0.235791888,8.80953919 0.17578125,8.74912399 0.17578125,8.67470773 L0.17578125,8.13538189 C0.17578125,8.06096563 0.235791888,8.00055043 0.309709821,8.00055043 L10.0418527,8.00055043 C10.1157706,8.00055043 10.1757812,8.06096563 10.1757812,8.13538189 L10.1757812,8.67470773 C10.1757812,8.74912399 10.1157706,8.80953919 10.0418527,8.80953919 Z' id='bars' fill='currentColor' %3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  mask-size: 0.7rem 0.7rem;
  -webkit-mask-size: 0.7rem 0.7rem;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-position: center center;
  background-color: currentColor;
}

.vf-multifile-handle-file.vf-multifile-handle-file-sm .vf-multifile-handle-icon-file {
  width: var(--vf-min-height-input-sm);
  height: var(--vf-min-height-input-sm);
}

.vf-multifile-handle-file.vf-multifile-handle-file-lg .vf-multifile-handle-icon-file {
  width: var(--vf-min-height-input-lg);
  height: var(--vf-min-height-input-lg);
}

.vf-multifile-handle-image.vf-multifile-handle-image-sm .vf-multifile-handle-icon-image {
  width: var(--vf-min-height-input-sm);
  height: var(--vf-min-height-input-sm);
}

.vf-multifile-handle-image.vf-multifile-handle-image-lg .vf-multifile-handle-icon-image {
  width: var(--vf-min-height-input-lg);
  height: var(--vf-min-height-input-lg);
}

.vf-multifile-handle-gallery {
  position: absolute;
  cursor: grab;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s;
  border-radius: 999px;
  left: 0.1875rem;
  top: 0.1875rem;
  transform: none;
  background: var(--vf-gray-200);
}

.vf-multifile-handle-gallery:active {
  cursor: grabbing;
}

.vf-multifile-handle-gallery:hover {
  background-color: var(--vf-gray-300);
}

.vf-multifile-handle-icon-gallery {
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: center center;
  width: 1rem;
  height: 1rem;
  mask-size: 0.75rem 0.75rem;
  -webkit-mask-size: 0.75rem 0.75rem;
  mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='12px' height='13px' viewBox='0 0 12 13' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg stroke='none' stroke-width='1' fill='%236B7280' fill-rule='evenodd'%3E%3Cpath d='M7.93929644,10.4886534 L6.22140503,12.2179202 C6.11156489,12.3277374 5.93349525,12.3277374 5.82363223,12.2179202 L4.10576371,10.4886534 C3.99594646,10.3788132 3.99594646,10.2007436 4.10576371,10.0909263 L4.27147376,9.92521629 C4.381291,9.81537616 4.55938354,9.81537616 4.66922367,9.92521629 L5.62409352,10.89137 L5.64753097,10.89137 L5.64753097,6.67528507 L1.43144605,6.67528507 L1.43144605,6.69872252 L2.39762264,7.65359237 C2.50746277,7.76340962 2.50746277,7.94150215 2.39762264,8.05134228 L2.2318897,8.21705233 C2.12207245,8.32686958 1.94400281,8.32686958 1.83416268,8.21705233 L0.104918753,6.49916092 C-0.0048984896,6.38932079 -0.0048984896,6.21125115 0.104918753,6.10138813 L1.83418557,4.38349671 C1.9440257,4.27367947 2.12209534,4.27367947 2.23193547,4.38349671 L2.39766841,4.54922966 C2.50750855,4.6590469 2.50750855,4.83713943 2.39766841,4.94697956 L1.43144605,5.90184942 L1.43144605,5.92528686 L5.64753097,5.92528686 L5.64753097,1.70920194 L5.62409352,1.70920194 L4.66922367,2.67537853 C4.55940642,2.78521867 4.38131389,2.78521867 4.27147376,2.67537853 L4.10576371,2.50964559 C3.99594646,2.39982835 3.99592358,2.2217587 4.10576371,2.11191857 L5.82365512,0.382651762 C5.93349525,0.272834518 6.11156489,0.272834518 6.22142791,0.382651762 L7.93931933,2.11191857 C8.04913657,2.2217587 8.04913657,2.39982835 7.93931933,2.50966848 L7.77358638,2.67540142 C7.66376914,2.78524155 7.48567661,2.78524155 7.37583648,2.67540142 L6.42096662,1.70920194 L6.39752918,1.70920194 L6.39752918,5.92528686 L10.6136141,5.92528686 L10.6136141,5.90184942 L9.64743751,4.94697956 C9.53759737,4.83716232 9.53759737,4.65906979 9.64743751,4.54922966 L9.81317045,4.3835196 C9.92298769,4.27370236 10.1010573,4.27370236 10.2108975,4.3835196 L11.9401643,6.10141102 C12.0500044,6.21125115 12.0499815,6.38932079 11.9401643,6.49918381 L10.2108975,8.21707522 C10.1010573,8.32689246 9.92298769,8.32689246 9.81317045,8.21707522 L9.64743751,8.05136517 C9.53759737,7.94154792 9.53759737,7.76345539 9.64743751,7.65361526 L10.6136141,6.69872252 L10.6136141,6.67528507 L6.39752918,6.67528507 L6.39752918,10.89137 L6.42096662,10.89137 L7.37583648,9.9251934 C7.48565372,9.81535327 7.66374625,9.81535327 7.77358638,9.9251934 L7.93929644,10.0909263 C8.04911368,10.2007207 8.04911368,10.3787903 7.93929644,10.4886534 Z' id='arrows' fill='currentColor'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='12px' height='13px' viewBox='0 0 12 13' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg stroke='none' stroke-width='1' fill='%236B7280' fill-rule='evenodd'%3E%3Cpath d='M7.93929644,10.4886534 L6.22140503,12.2179202 C6.11156489,12.3277374 5.93349525,12.3277374 5.82363223,12.2179202 L4.10576371,10.4886534 C3.99594646,10.3788132 3.99594646,10.2007436 4.10576371,10.0909263 L4.27147376,9.92521629 C4.381291,9.81537616 4.55938354,9.81537616 4.66922367,9.92521629 L5.62409352,10.89137 L5.64753097,10.89137 L5.64753097,6.67528507 L1.43144605,6.67528507 L1.43144605,6.69872252 L2.39762264,7.65359237 C2.50746277,7.76340962 2.50746277,7.94150215 2.39762264,8.05134228 L2.2318897,8.21705233 C2.12207245,8.32686958 1.94400281,8.32686958 1.83416268,8.21705233 L0.104918753,6.49916092 C-0.0048984896,6.38932079 -0.0048984896,6.21125115 0.104918753,6.10138813 L1.83418557,4.38349671 C1.9440257,4.27367947 2.12209534,4.27367947 2.23193547,4.38349671 L2.39766841,4.54922966 C2.50750855,4.6590469 2.50750855,4.83713943 2.39766841,4.94697956 L1.43144605,5.90184942 L1.43144605,5.92528686 L5.64753097,5.92528686 L5.64753097,1.70920194 L5.62409352,1.70920194 L4.66922367,2.67537853 C4.55940642,2.78521867 4.38131389,2.78521867 4.27147376,2.67537853 L4.10576371,2.50964559 C3.99594646,2.39982835 3.99592358,2.2217587 4.10576371,2.11191857 L5.82365512,0.382651762 C5.93349525,0.272834518 6.11156489,0.272834518 6.22142791,0.382651762 L7.93931933,2.11191857 C8.04913657,2.2217587 8.04913657,2.39982835 7.93931933,2.50966848 L7.77358638,2.67540142 C7.66376914,2.78524155 7.48567661,2.78524155 7.37583648,2.67540142 L6.42096662,1.70920194 L6.39752918,1.70920194 L6.39752918,5.92528686 L10.6136141,5.92528686 L10.6136141,5.90184942 L9.64743751,4.94697956 C9.53759737,4.83716232 9.53759737,4.65906979 9.64743751,4.54922966 L9.81317045,4.3835196 C9.92298769,4.27370236 10.1010573,4.27370236 10.2108975,4.3835196 L11.9401643,6.10141102 C12.0500044,6.21125115 12.0499815,6.38932079 11.9401643,6.49918381 L10.2108975,8.21707522 C10.1010573,8.32689246 9.92298769,8.32689246 9.81317045,8.21707522 L9.64743751,8.05136517 C9.53759737,7.94154792 9.53759737,7.76345539 9.64743751,7.65361526 L10.6136141,6.69872252 L10.6136141,6.67528507 L6.39752918,6.67528507 L6.39752918,10.89137 L6.42096662,10.89137 L7.37583648,9.9251934 C7.48565372,9.81535327 7.66374625,9.81535327 7.77358638,9.9251934 L7.93929644,10.0909263 C8.04911368,10.2007207 8.04911368,10.3787903 7.93929644,10.4886534 Z' id='arrows' fill='currentColor'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-position: center center;
  background-color: var(--vf-gray-600);
}

.sortable-ghost {
  opacity: 0.6;
}`;G(uc);so.__file="themes/vueform/templates/elements/MultifileElement.vue";function wt(t){return[null,void 0].indexOf(t)!==-1}function dc(t,e,n){const{object:r,valueProp:i,mode:l}=Pe(t),a=Jn().proxy,o=n.iv,s=(A,k=!0)=>{o.value=c(A);const x=u(A);e.emit("change",x,a),k&&(e.emit("input",x),e.emit("update:modelValue",x))},u=A=>r.value||wt(A)?A:Array.isArray(A)?A.map(k=>k[i.value]):A[i.value],c=A=>wt(A)?l.value==="single"?{}:[]:A;return{update:s}}function cc(t,e){const{value:n,modelValue:r,mode:i,valueProp:l}=Pe(t),a=Le(i.value!=="single"?[]:{}),o=K(()=>r&&r.value!==void 0?r.value:n.value),s=K(()=>i.value==="single"?a.value[l.value]:a.value.map(c=>c[l.value])),u=K(()=>i.value!=="single"?a.value.map(c=>c[l.value]).join(","):a.value[l.value]);return{iv:a,internalValue:a,ev:o,externalValue:o,textValue:u,plainValue:s}}function pc(t,e,n){const{regex:r}=Pe(t),i=Jn().proxy,l=n.isOpen,a=n.open,o=Le(null),s=()=>{o.value=""},u=k=>{o.value=k.target.value},c=k=>{if(r&&r.value){let x=r.value;typeof x=="string"&&(x=new RegExp(x)),k.key.match(x)||k.preventDefault()}},A=k=>{if(r&&r.value){let y=(k.clipboardData||window.clipboardData).getData("Text"),C=r.value;typeof C=="string"&&(C=new RegExp(C)),y.split("").every(S=>!!S.match(C))||k.preventDefault()}e.emit("paste",k,i)};return Se(o,k=>{!l.value&&k&&a(),e.emit("search-change",k,i)}),{search:o,clearSearch:s,handleSearchInput:u,handleKeypress:c,handlePaste:A}}function fc(t,e,n){const{groupSelect:r,mode:i,groups:l,disabledProp:a}=Pe(t),o=Le(null),s=c=>{c===void 0||c!==null&&c[a.value]||l.value&&c&&c.group&&(i.value==="single"||!r.value)||(o.value=c)};return{pointer:o,setPointer:s,clearPointer:()=>{s(null)}}}function Dr(t,e=!0){return e?String(t).toLowerCase().trim():String(t).toLowerCase().normalize("NFD").trim().replace(new RegExp(/æ/g),"ae").replace(new RegExp(/œ/g),"oe").replace(new RegExp(/ø/g),"o").replace(new RegExp("\\p{Diacritic}","gu"),"")}function vc(t){return Object.prototype.toString.call(t)==="[object Object]"}function gc(t,e){const n=e.slice().sort();return t.length===e.length&&t.slice().sort().every(function(r,i){return r===n[i]})}function mc(t,e,n){const{options:r,mode:i,trackBy:l,limit:a,hideSelected:o,createTag:s,createOption:u,label:c,appendNewTag:A,appendNewOption:k,multipleLabel:x,object:y,loading:C,delay:S,resolveOnLoad:B,minChars:M,filterResults:E,clearOnSearch:$,clearOnSelect:Q,valueProp:R,allowAbsent:_,groupLabel:Y,canDeselect:I,max:Z,strict:X,closeOnSelect:V,closeOnDeselect:W,groups:fe,reverse:ie,infinite:de,groupOptions:re,groupHideEmpty:Oe,groupSelect:pe,onCreate:ae,disabledProp:z,searchStart:oe,searchFilter:He}=Pe(t),be=Jn().proxy,se=n.iv,O=n.ev,te=n.search,P=n.clearSearch,ve=n.update,Be=n.pointer,qe=n.setPointer,Ke=n.clearPointer,Ge=n.focus,vt=n.deactivate,gt=n.close,cn=n.localize,mt=Le([]),tt=Le([]),nt=Le(!1),Je=Le(null),ye=Le(de.value&&a.value===-1?10:a.value),ht=K(()=>s.value||u.value||!1),Bt=K(()=>A.value!==void 0?A.value:k.value!==void 0?k.value:!0),Ye=K(()=>{if(fe.value){let m=ut.value||[],N=[];return m.forEach(me=>{Jt(me[re.value]).forEach($e=>{N.push(Object.assign({},$e,me[z.value]?{[z.value]:!0}:{}))})}),N}else{let m=Jt(tt.value||[]);return mt.value.length&&(m=m.concat(mt.value)),m}}),It=K(()=>{let m=Ye.value;return ie.value&&(m=m.reverse()),At.value.length&&(m=At.value.concat(m)),Kt(m)}),bt=K(()=>{let m=It.value;return ye.value>0&&(m=m.slice(0,ye.value)),m}),ut=K(()=>{if(!fe.value)return[];let m=[],N=tt.value||[];return mt.value.length&&m.push({[Y.value]:" ",[re.value]:[...mt.value],__CREATE__:!0}),m.concat(N)}),lt=K(()=>{let m=[...ut.value].map(N=>({...N}));return At.value.length&&(m[0]&&m[0].__CREATE__?m[0][re.value]=[...At.value,...m[0][re.value]]:m=[{[Y.value]:" ",[re.value]:[...At.value],__CREATE__:!0}].concat(m)),m}),pn=K(()=>{if(!fe.value)return[];let m=lt.value;return Sn((m||[]).map((N,me)=>{const $e=Jt(N[re.value]);return{...N,index:me,group:!0,[re.value]:Kt($e,!1).map(Gt=>Object.assign({},Gt,N[z.value]?{[z.value]:!0}:{})),__VISIBLE__:Kt($e).map(Gt=>Object.assign({},Gt,N[z.value]?{[z.value]:!0}:{}))}}))}),fn=K(()=>{switch(i.value){case"single":return!wt(se.value[R.value]);case"multiple":case"tags":return!wt(se.value)&&se.value.length>0}}),vn=K(()=>x!==void 0&&x.value!==void 0?x.value(se.value,be):se.value&&se.value.length>1?`${se.value.length} options selected`:"1 option selected"),Br=K(()=>!Ye.value.length&&!nt.value&&!At.value.length),Ir=K(()=>Ye.value.length>0&&bt.value.length==0&&(te.value&&fe.value||!fe.value)),At=K(()=>ht.value===!1||!te.value?[]:Qe(te.value)!==-1?[]:[{[R.value]:te.value,[Et.value[0]]:te.value,[c.value]:te.value,__CREATE__:!0}]),Et=K(()=>l.value?Array.isArray(l.value)?l.value:[l.value]:[c.value]),Zn=K(()=>{switch(i.value){case"single":return null;case"multiple":case"tags":return[]}}),Rr=K(()=>C.value||nt.value),Rt=m=>{switch(typeof m!="object"&&(m=Ae(m)),i.value){case"single":ve(m);break;case"multiple":case"tags":ve(se.value.concat(m));break}e.emit("select",qt(m),m,be)},Dt=m=>{switch(typeof m!="object"&&(m=Ae(m)),i.value){case"single":b();break;case"tags":case"multiple":ve(Array.isArray(m)?se.value.filter(N=>m.map(me=>me[R.value]).indexOf(N[R.value])===-1):se.value.filter(N=>N[R.value]!=m[R.value]));break}e.emit("deselect",qt(m),m,be)},qt=m=>y.value?m:m[R.value],p=m=>{Dt(m)},g=(m,N)=>{if(N.button!==0){N.preventDefault();return}p(m)},b=()=>{ve(Zn.value),e.emit("clear",be)},T=m=>{if(m.group!==void 0)return i.value==="single"?!1:we(m[re.value])&&m[re.value].length;switch(i.value){case"single":return!wt(se.value)&&se.value[R.value]==m[R.value];case"tags":case"multiple":return!wt(se.value)&&se.value.map(N=>N[R.value]).indexOf(m[R.value])!==-1}},j=m=>m[z.value]===!0,H=()=>Z===void 0||Z.value===-1||!fn.value&&Z.value>0?!1:se.value.length>=Z.value,ne=m=>{if(!j(m)){if(ae&&ae.value&&!T(m)&&m.__CREATE__&&(m={...m},delete m.__CREATE__,m=ae.value(m,be),m instanceof Promise)){nt.value=!0,m.then(N=>{nt.value=!1,J(N)});return}J(m)}},J=m=>{switch(m.__CREATE__&&(m={...m},delete m.__CREATE__),i.value){case"single":if(m&&T(m)){I.value&&Dt(m),W.value&&(Ke(),gt());return}m&&ke(m),Q.value&&P(),V.value&&(Ke(),gt()),m&&Rt(m);break;case"multiple":if(m&&T(m)){Dt(m),W.value&&(Ke(),gt());return}if(H()){e.emit("max",be);return}m&&(ke(m),Rt(m)),Q.value&&P(),o.value&&Ke(),V.value&&gt();break;case"tags":if(m&&T(m)){Dt(m),W.value&&(Ke(),gt());return}if(H()){e.emit("max",be);return}m&&ke(m),Q.value&&P(),m&&Rt(m),o.value&&Ke(),V.value&&gt();break}V.value||Ge()},Te=m=>{if(!(j(m)||i.value==="single"||!pe.value)){switch(i.value){case"multiple":case"tags":De(m[re.value])?Dt(m[re.value]):Rt(m[re.value].filter(N=>se.value.map(me=>me[R.value]).indexOf(N[R.value])===-1).filter(N=>!N[z.value]).filter((N,me)=>se.value.length+1+me<=Z.value||Z.value===-1)),o.value&&Be.value&&qe(pn.value.filter(N=>!N[z.value])[Be.value.index]);break}V.value&&vt()}},ke=m=>{Ae(m[R.value])===void 0&&ht.value&&(e.emit("tag",m[R.value],be),e.emit("option",m[R.value],be),e.emit("create",m[R.value],be),Bt.value&&Ve(m),P())},Re=()=>{i.value!=="single"&&Rt(bt.value.filter(m=>!m.disabled&&!T(m)))},De=m=>m.find(N=>!T(N)&&!N[z.value])===void 0,we=m=>m.find(N=>!T(N))===void 0,Ae=m=>Ye.value[Ye.value.map(N=>String(N[R.value])).indexOf(String(m))],Qe=m=>Ye.value.findIndex(N=>Et.value.some(me=>(parseInt(N[me])==N[me]?parseInt(N[me]):N[me])===(parseInt(m)==m?parseInt(m):m))),je=m=>["tags","multiple"].indexOf(i.value)!==-1&&o.value&&T(m),Ve=m=>{mt.value.push(m)},Sn=m=>Oe.value?m.filter(N=>te.value?N.__VISIBLE__.length:N[re.value].length):m.filter(N=>te.value?N.__VISIBLE__.length:!0),Kt=(m,N=!0)=>{let me=m;if(te.value&&E.value){let $e=He.value;$e||($e=(Gt,Da,Sh)=>Et.value.some(Hs=>{let Ma=Dr(cn(Gt[Hs]),X.value);return oe.value?Ma.startsWith(Dr(Da,X.value)):Ma.indexOf(Dr(Da,X.value))!==-1})),me=me.filter(Gt=>$e(Gt,te.value,be))}return o.value&&N&&(me=me.filter($e=>!je($e))),me},Jt=m=>{let N=m;return vc(N)&&(N=Object.keys(N).map(me=>{let $e=N[me];return{[R.value]:me,[Et.value[0]]:$e,[c.value]:$e}})),N=N.map(me=>typeof me=="object"?me:{[R.value]:me,[Et.value[0]]:me,[c.value]:me}),N},_t=()=>{wt(O.value)||(se.value=tr(O.value))},Mt=m=>(nt.value=!0,new Promise((N,me)=>{r.value(te.value,be).then($e=>{tt.value=$e||[],typeof m=="function"&&m($e),nt.value=!1}).catch($e=>{console.error($e),tt.value=[],nt.value=!1}).finally(()=>{N()})})),gn=()=>{if(fn.value)if(i.value==="single"){let m=Ae(se.value[R.value]);if(m!==void 0){let N=m[c.value];se.value[c.value]=N,y.value&&(O.value[c.value]=N)}}else se.value.forEach((m,N)=>{let me=Ae(se.value[N][R.value]);if(me!==void 0){let $e=me[c.value];se.value[N][c.value]=$e,y.value&&(O.value[N][c.value]=$e)}})},er=m=>{Mt(m)},tr=m=>wt(m)?i.value==="single"?{}:[]:y.value?m:i.value==="single"?Ae(m)||(_.value?{[c.value]:m,[R.value]:m,[Et.value[0]]:m}:{}):m.filter(N=>!!Ae(N)||_.value).map(N=>Ae(N)||{[c.value]:N,[R.value]:N,[Et.value[0]]:N}),Ra=()=>{Je.value=Se(te,m=>{m.length<M.value||!m&&M.value!==0||(nt.value=!0,$.value&&(tt.value=[]),setTimeout(()=>{m==te.value&&r.value(te.value,be).then(N=>{(m==te.value||!te.value)&&(tt.value=N,Be.value=bt.value.filter(me=>me[z.value]!==!0)[0]||null,nt.value=!1)}).catch(N=>{console.error(N)})},S.value))},{flush:"sync"})};if(i.value!=="single"&&!wt(O.value)&&!Array.isArray(O.value))throw new Error(`v-model must be an array when using "${i.value}" mode`);return r&&typeof r.value=="function"?B.value?Mt(_t):y.value==!0&&_t():(tt.value=r.value,_t()),S.value>-1&&Ra(),Se(S,(m,N)=>{Je.value&&Je.value(),m>=0&&Ra()}),Se(O,m=>{if(wt(m)){ve(tr(m),!1);return}switch(i.value){case"single":(y.value?m[R.value]!=se.value[R.value]:m!=se.value[R.value])&&ve(tr(m),!1);break;case"multiple":case"tags":gc(y.value?m.map(N=>N[R.value]):m,se.value.map(N=>N[R.value]))||ve(tr(m),!1);break}},{deep:!0}),Se(r,(m,N)=>{typeof t.options=="function"?B.value&&(!N||m&&m.toString()!==N.toString())&&Mt():(tt.value=t.options,Object.keys(se.value).length||_t(),gn())}),Se(c,gn),Se(a,(m,N)=>{ye.value=de.value&&m===-1?10:m}),{pfo:It,fo:bt,filteredOptions:bt,hasSelected:fn,multipleLabelText:vn,eo:Ye,extendedOptions:Ye,eg:ut,extendedGroups:ut,fg:pn,filteredGroups:pn,noOptions:Br,noResults:Ir,resolving:nt,busy:Rr,offset:ye,select:Rt,deselect:Dt,remove:p,selectAll:Re,clear:b,isSelected:T,isDisabled:j,isMax:H,getOption:Ae,handleOptionClick:ne,handleGroupClick:Te,handleTagRemove:g,refreshOptions:er,resolveOptions:Mt,refreshLabels:gn}}function hc(t,e,n){const{valueProp:r,showOptions:i,searchable:l,groupLabel:a,groups:o,mode:s,groupSelect:u,disabledProp:c,groupOptions:A}=Pe(t),k=n.fo,x=n.fg,y=n.handleOptionClick,C=n.handleGroupClick,S=n.search,B=n.pointer,M=n.setPointer,E=n.clearPointer,$=n.multiselect,Q=n.isOpen,R=K(()=>k.value.filter(O=>!O[c.value])),_=K(()=>x.value.filter(O=>!O[c.value])),Y=K(()=>s.value!=="single"&&u.value),I=K(()=>B.value&&B.value.group),Z=K(()=>be(B.value)),X=K(()=>{const O=I.value?B.value:be(B.value),te=_.value.map(ve=>ve[a.value]).indexOf(O[a.value]);let P=_.value[te-1];return P===void 0&&(P=W.value),P}),V=K(()=>{let O=_.value.map(te=>te.label).indexOf(I.value?B.value[a.value]:be(B.value)[a.value])+1;return _.value.length<=O&&(O=0),_.value[O]}),W=K(()=>[..._.value].slice(-1)[0]),fe=K(()=>B.value.__VISIBLE__.filter(O=>!O[c.value])[0]),ie=K(()=>{const O=Z.value.__VISIBLE__.filter(te=>!te[c.value]);return O[O.map(te=>te[r.value]).indexOf(B.value[r.value])-1]}),de=K(()=>{const O=be(B.value).__VISIBLE__.filter(te=>!te[c.value]);return O[O.map(te=>te[r.value]).indexOf(B.value[r.value])+1]}),re=K(()=>[...X.value.__VISIBLE__.filter(O=>!O[c.value])].slice(-1)[0]),Oe=K(()=>[...W.value.__VISIBLE__.filter(O=>!O[c.value])].slice(-1)[0]),pe=O=>B.value&&(!O.group&&B.value[r.value]===O[r.value]||O.group!==void 0&&B.value[a.value]===O[a.value])?!0:void 0,ae=()=>{M(R.value[0]||null)},z=()=>{!B.value||B.value[c.value]===!0||(I.value?C(B.value):y(B.value))},oe=()=>{if(B.value===null)M((o.value&&Y.value?_.value[0].__CREATE__?R.value[0]:_.value[0]:R.value[0])||null);else if(o.value&&Y.value){let O=I.value?fe.value:de.value;O===void 0&&(O=V.value,O.__CREATE__&&(O=O[A.value][0])),M(O||null)}else{let O=R.value.map(te=>te[r.value]).indexOf(B.value[r.value])+1;R.value.length<=O&&(O=0),M(R.value[O]||null)}hn(()=>{se()})},He=()=>{if(B.value===null){let O=R.value[R.value.length-1];o.value&&Y.value&&(O=Oe.value,O===void 0&&(O=W.value)),M(O||null)}else if(o.value&&Y.value){let O=I.value?re.value:ie.value;O===void 0&&(O=I.value?X.value:Z.value,O.__CREATE__&&(O=re.value,O===void 0&&(O=X.value))),M(O||null)}else{let O=R.value.map(te=>te[r.value]).indexOf(B.value[r.value])-1;O<0&&(O=R.value.length-1),M(R.value[O]||null)}hn(()=>{se()})},be=O=>_.value.find(te=>te.__VISIBLE__.map(P=>P[r.value]).indexOf(O[r.value])!==-1),se=()=>{let O=$.value.querySelector("[data-pointed]");if(!O)return;let te=O.parentElement.parentElement;o.value&&(te=I.value?O.parentElement.parentElement.parentElement:O.parentElement.parentElement.parentElement.parentElement),O.offsetTop+O.offsetHeight>te.clientHeight+te.scrollTop&&(te.scrollTop=O.offsetTop+O.offsetHeight-te.clientHeight),O.offsetTop<te.scrollTop&&(te.scrollTop=O.offsetTop)};return Se(S,O=>{l.value&&(O.length&&i.value?ae():E())}),Se(Q,O=>{if(O&&($!=null&&$.value)){let te=$.value.querySelectorAll("[data-selected]")[0];if(!te)return;let P=te.parentElement.parentElement;hn(()=>{P.scrollTop>0||(P.scrollTop=te.offsetTop)})}}),{pointer:B,canPointGroups:Y,isPointed:pe,setPointerFirst:ae,selectPointer:z,forwardPointer:oe,backwardPointer:He}}function at(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function rn(t){var e=at(t).Element;return t instanceof e||t instanceof Element}function st(t){var e=at(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Qi(t){if(typeof ShadowRoot>"u")return!1;var e=at(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}var en=Math.max,dr=Math.min,yn=Math.round;function Yr(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function uo(){return!/^((?!chrome|android).)*safari/i.test(Yr())}function kn(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!1);var r=t.getBoundingClientRect(),i=1,l=1;e&&st(t)&&(i=t.offsetWidth>0&&yn(r.width)/t.offsetWidth||1,l=t.offsetHeight>0&&yn(r.height)/t.offsetHeight||1);var a=rn(t)?at(t):window,o=a.visualViewport,s=!uo()&&n,u=(r.left+(s&&o?o.offsetLeft:0))/i,c=(r.top+(s&&o?o.offsetTop:0))/l,A=r.width/i,k=r.height/l;return{width:A,height:k,top:c,right:u+A,bottom:c+k,left:u,x:u,y:c}}function qi(t){var e=at(t),n=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:n,scrollTop:r}}function bc(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function wc(t){return t===at(t)||!st(t)?qi(t):bc(t)}function kt(t){return t?(t.nodeName||"").toLowerCase():null}function Wt(t){return((rn(t)?t.ownerDocument:t.document)||window.document).documentElement}function Ki(t){return kn(Wt(t)).left+qi(t).scrollLeft}function Tt(t){return at(t).getComputedStyle(t)}function Ji(t){var e=Tt(t),n=e.overflow,r=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function yc(t){var e=t.getBoundingClientRect(),n=yn(e.width)/t.offsetWidth||1,r=yn(e.height)/t.offsetHeight||1;return n!==1||r!==1}function kc(t,e,n){n===void 0&&(n=!1);var r=st(e),i=st(e)&&yc(e),l=Wt(e),a=kn(t,i,n),o={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(r||!r&&!n)&&((kt(e)!=="body"||Ji(l))&&(o=wc(e)),st(e)?(s=kn(e,!0),s.x+=e.clientLeft,s.y+=e.clientTop):l&&(s.x=Ki(l))),{x:a.left+o.scrollLeft-s.x,y:a.top+o.scrollTop-s.y,width:a.width,height:a.height}}function co(t){var e=kn(t),n=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:r}}function wr(t){return kt(t)==="html"?t:t.assignedSlot||t.parentNode||(Qi(t)?t.host:null)||Wt(t)}function po(t){return["html","body","#document"].indexOf(kt(t))>=0?t.ownerDocument.body:st(t)&&Ji(t)?t:po(wr(t))}function Dn(t,e){var n;e===void 0&&(e=[]);var r=po(t),i=r===((n=t.ownerDocument)==null?void 0:n.body),l=at(r),a=i?[l].concat(l.visualViewport||[],Ji(r)?r:[]):r,o=e.concat(a);return i?o:o.concat(Dn(wr(a)))}function Cc(t){return["table","td","th"].indexOf(kt(t))>=0}function Fa(t){return!st(t)||Tt(t).position==="fixed"?null:t.offsetParent}function Ac(t){var e=/firefox/i.test(Yr()),n=/Trident/i.test(Yr());if(n&&st(t)){var r=Tt(t);if(r.position==="fixed")return null}var i=wr(t);for(Qi(i)&&(i=i.host);st(i)&&["html","body"].indexOf(kt(i))<0;){var l=Tt(i);if(l.transform!=="none"||l.perspective!=="none"||l.contain==="paint"||["transform","perspective"].indexOf(l.willChange)!==-1||e&&l.willChange==="filter"||e&&l.filter&&l.filter!=="none")return i;i=i.parentNode}return null}function yr(t){for(var e=at(t),n=Fa(t);n&&Cc(n)&&Tt(n).position==="static";)n=Fa(n);return n&&(kt(n)==="html"||kt(n)==="body"&&Tt(n).position==="static")?e:n||Ac(t)||e}var ct="top",Ct="bottom",jt="right",St="left",_i="auto",kr=[ct,Ct,jt,St],Cn="start",Hn="end",Ec="clippingParents",fo="viewport",Tn="popper",Lc="reference",Pa=kr.reduce(function(t,e){return t.concat([e+"-"+Cn,e+"-"+Hn])},[]),xc=[].concat(kr,[_i]).reduce(function(t,e){return t.concat([e,e+"-"+Cn,e+"-"+Hn])},[]),Sc="beforeRead",Tc="read",Bc="afterRead",Ic="beforeMain",Rc="main",Dc="afterMain",Mc="beforeWrite",Oc="write",Fc="afterWrite",Pc=[Sc,Tc,Bc,Ic,Rc,Dc,Mc,Oc,Fc];function $c(t){var e=new Map,n=new Set,r=[];t.forEach(function(l){e.set(l.name,l)});function i(l){n.add(l.name);var a=[].concat(l.requires||[],l.requiresIfExists||[]);a.forEach(function(o){if(!n.has(o)){var s=e.get(o);s&&i(s)}}),r.push(l)}return t.forEach(function(l){n.has(l.name)||i(l)}),r}function zc(t){var e=$c(t);return Pc.reduce(function(n,r){return n.concat(e.filter(function(i){return i.phase===r}))},[])}function Nc(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function Hc(t){var e=t.reduce(function(n,r){var i=n[r.name];return n[r.name]=i?Object.assign({},i,r,{options:Object.assign({},i.options,r.options),data:Object.assign({},i.data,r.data)}):r,n},{});return Object.keys(e).map(function(n){return e[n]})}function jc(t,e){var n=at(t),r=Wt(t),i=n.visualViewport,l=r.clientWidth,a=r.clientHeight,o=0,s=0;if(i){l=i.width,a=i.height;var u=uo();(u||!u&&e==="fixed")&&(o=i.offsetLeft,s=i.offsetTop)}return{width:l,height:a,x:o+Ki(t),y:s}}function Uc(t){var e,n=Wt(t),r=qi(t),i=(e=t.ownerDocument)==null?void 0:e.body,l=en(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),a=en(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),o=-r.scrollLeft+Ki(t),s=-r.scrollTop;return Tt(i||n).direction==="rtl"&&(o+=en(n.clientWidth,i?i.clientWidth:0)-l),{width:l,height:a,x:o,y:s}}function Vc(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&Qi(n)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Xr(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Wc(t,e){var n=kn(t,!1,e==="fixed");return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}function $a(t,e,n){return e===fo?Xr(jc(t,n)):rn(e)?Wc(e,n):Xr(Uc(Wt(t)))}function Qc(t){var e=Dn(wr(t)),n=["absolute","fixed"].indexOf(Tt(t).position)>=0,r=n&&st(t)?yr(t):t;return rn(r)?e.filter(function(i){return rn(i)&&Vc(i,r)&&kt(i)!=="body"}):[]}function qc(t,e,n,r){var i=e==="clippingParents"?Qc(t):[].concat(e),l=[].concat(i,[n]),a=l[0],o=l.reduce(function(s,u){var c=$a(t,u,r);return s.top=en(c.top,s.top),s.right=dr(c.right,s.right),s.bottom=dr(c.bottom,s.bottom),s.left=en(c.left,s.left),s},$a(t,a,r));return o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}function Ht(t){return t.split("-")[0]}function An(t){return t.split("-")[1]}function vo(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function go(t){var e=t.reference,n=t.element,r=t.placement,i=r?Ht(r):null,l=r?An(r):null,a=e.x+e.width/2-n.width/2,o=e.y+e.height/2-n.height/2,s;switch(i){case ct:s={x:a,y:e.y-n.height};break;case Ct:s={x:a,y:e.y+e.height};break;case jt:s={x:e.x+e.width,y:o};break;case St:s={x:e.x-n.width,y:o};break;default:s={x:e.x,y:e.y}}var u=i?vo(i):null;if(u!=null){var c=u==="y"?"height":"width";switch(l){case Cn:s[u]=s[u]-(e[c]/2-n[c]/2);break;case Hn:s[u]=s[u]+(e[c]/2-n[c]/2);break}}return s}function mo(){return{top:0,right:0,bottom:0,left:0}}function Kc(t){return Object.assign({},mo(),t)}function Jc(t,e){return e.reduce(function(n,r){return n[r]=t,n},{})}function Gi(t,e){e===void 0&&(e={});var n=e,r=n.placement,i=r===void 0?t.placement:r,l=n.strategy,a=l===void 0?t.strategy:l,o=n.boundary,s=o===void 0?Ec:o,u=n.rootBoundary,c=u===void 0?fo:u,A=n.elementContext,k=A===void 0?Tn:A,x=n.altBoundary,y=x===void 0?!1:x,C=n.padding,S=C===void 0?0:C,B=Kc(typeof S!="number"?S:Jc(S,kr)),M=k===Tn?Lc:Tn,E=t.rects.popper,$=t.elements[y?M:k],Q=qc(rn($)?$:$.contextElement||Wt(t.elements.popper),s,c,a),R=kn(t.elements.reference),_=go({reference:R,element:E,strategy:"absolute",placement:i}),Y=Xr(Object.assign({},E,_)),I=k===Tn?Y:R,Z={top:Q.top-I.top+B.top,bottom:I.bottom-Q.bottom+B.bottom,left:Q.left-I.left+B.left,right:I.right-Q.right+B.right},X=t.modifiersData.offset;if(k===Tn&&X){var V=X[i];Object.keys(Z).forEach(function(W){var fe=[jt,Ct].indexOf(W)>=0?1:-1,ie=[ct,Ct].indexOf(W)>=0?"y":"x";Z[W]+=V[ie]*fe})}return Z}var za={placement:"bottom",modifiers:[],strategy:"absolute"};function Na(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function _c(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,r=n===void 0?[]:n,i=e.defaultOptions,l=i===void 0?za:i;return function(o,s,u){u===void 0&&(u=l);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},za,l),modifiersData:{},elements:{reference:o,popper:s},attributes:{},styles:{}},A=[],k=!1,x={state:c,setOptions:function(B){var M=typeof B=="function"?B(c.options):B;C(),c.options=Object.assign({},l,c.options,M),c.scrollParents={reference:rn(o)?Dn(o):o.contextElement?Dn(o.contextElement):[],popper:Dn(s)};var E=zc(Hc([].concat(r,c.options.modifiers)));return c.orderedModifiers=E.filter(function($){return $.enabled}),y(),x.update()},forceUpdate:function(){if(!k){var B=c.elements,M=B.reference,E=B.popper;if(Na(M,E)){c.rects={reference:kc(M,yr(E),c.options.strategy==="fixed"),popper:co(E)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(Z){return c.modifiersData[Z.name]=Object.assign({},Z.data)});for(var $=0;$<c.orderedModifiers.length;$++){if(c.reset===!0){c.reset=!1,$=-1;continue}var Q=c.orderedModifiers[$],R=Q.fn,_=Q.options,Y=_===void 0?{}:_,I=Q.name;typeof R=="function"&&(c=R({state:c,options:Y,name:I,instance:x})||c)}}}},update:Nc(function(){return new Promise(function(S){x.forceUpdate(),S(c)})}),destroy:function(){C(),k=!0}};if(!Na(o,s))return x;x.setOptions(u).then(function(S){!k&&u.onFirstUpdate&&u.onFirstUpdate(S)});function y(){c.orderedModifiers.forEach(function(S){var B=S.name,M=S.options,E=M===void 0?{}:M,$=S.effect;if(typeof $=="function"){var Q=$({state:c,name:B,instance:x,options:E}),R=function(){};A.push(Q||R)}})}function C(){A.forEach(function(S){return S()}),A=[]}return x}}var nr={passive:!0};function Gc(t){var e=t.state,n=t.instance,r=t.options,i=r.scroll,l=i===void 0?!0:i,a=r.resize,o=a===void 0?!0:a,s=at(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper);return l&&u.forEach(function(c){c.addEventListener("scroll",n.update,nr)}),o&&s.addEventListener("resize",n.update,nr),function(){l&&u.forEach(function(c){c.removeEventListener("scroll",n.update,nr)}),o&&s.removeEventListener("resize",n.update,nr)}}var Yc={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Gc,data:{}};function Xc(t){var e=t.state,n=t.name;e.modifiersData[n]=go({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}var Zc={name:"popperOffsets",enabled:!0,phase:"read",fn:Xc,data:{}},ep={top:"auto",right:"auto",bottom:"auto",left:"auto"};function tp(t,e){var n=t.x,r=t.y,i=e.devicePixelRatio||1;return{x:yn(n*i)/i||0,y:yn(r*i)/i||0}}function Ha(t){var e,n=t.popper,r=t.popperRect,i=t.placement,l=t.variation,a=t.offsets,o=t.position,s=t.gpuAcceleration,u=t.adaptive,c=t.roundOffsets,A=t.isFixed,k=a.x,x=k===void 0?0:k,y=a.y,C=y===void 0?0:y,S=typeof c=="function"?c({x,y:C}):{x,y:C};x=S.x,C=S.y;var B=a.hasOwnProperty("x"),M=a.hasOwnProperty("y"),E=St,$=ct,Q=window;if(u){var R=yr(n),_="clientHeight",Y="clientWidth";if(R===at(n)&&(R=Wt(n),Tt(R).position!=="static"&&o==="absolute"&&(_="scrollHeight",Y="scrollWidth")),R=R,i===ct||(i===St||i===jt)&&l===Hn){$=Ct;var I=A&&R===Q&&Q.visualViewport?Q.visualViewport.height:R[_];C-=I-r.height,C*=s?1:-1}if(i===St||(i===ct||i===Ct)&&l===Hn){E=jt;var Z=A&&R===Q&&Q.visualViewport?Q.visualViewport.width:R[Y];x-=Z-r.width,x*=s?1:-1}}var X=Object.assign({position:o},u&&ep),V=c===!0?tp({x,y:C},at(n)):{x,y:C};if(x=V.x,C=V.y,s){var W;return Object.assign({},X,(W={},W[$]=M?"0":"",W[E]=B?"0":"",W.transform=(Q.devicePixelRatio||1)<=1?"translate("+x+"px, "+C+"px)":"translate3d("+x+"px, "+C+"px, 0)",W))}return Object.assign({},X,(e={},e[$]=M?C+"px":"",e[E]=B?x+"px":"",e.transform="",e))}function np(t){var e=t.state,n=t.options,r=n.gpuAcceleration,i=r===void 0?!0:r,l=n.adaptive,a=l===void 0?!0:l,o=n.roundOffsets,s=o===void 0?!0:o,u={placement:Ht(e.placement),variation:An(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Ha(Object.assign({},u,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:a,roundOffsets:s})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Ha(Object.assign({},u,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var rp={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:np,data:{}};function ip(t){var e=t.state;Object.keys(e.elements).forEach(function(n){var r=e.styles[n]||{},i=e.attributes[n]||{},l=e.elements[n];!st(l)||!kt(l)||(Object.assign(l.style,r),Object.keys(i).forEach(function(a){var o=i[a];o===!1?l.removeAttribute(a):l.setAttribute(a,o===!0?"":o)}))})}function ap(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach(function(r){var i=e.elements[r],l=e.attributes[r]||{},a=Object.keys(e.styles.hasOwnProperty(r)?e.styles[r]:n[r]),o=a.reduce(function(s,u){return s[u]="",s},{});!st(i)||!kt(i)||(Object.assign(i.style,o),Object.keys(l).forEach(function(s){i.removeAttribute(s)}))})}}var lp={name:"applyStyles",enabled:!0,phase:"write",fn:ip,effect:ap,requires:["computeStyles"]},op=[Yc,Zc,rp,lp],sp=_c({defaultModifiers:op});function up(t){return t==="x"?"y":"x"}function ir(t,e,n){return en(t,dr(e,n))}function dp(t,e,n){var r=ir(t,e,n);return r>n?n:r}function cp(t){var e=t.state,n=t.options,r=t.name,i=n.mainAxis,l=i===void 0?!0:i,a=n.altAxis,o=a===void 0?!1:a,s=n.boundary,u=n.rootBoundary,c=n.altBoundary,A=n.padding,k=n.tether,x=k===void 0?!0:k,y=n.tetherOffset,C=y===void 0?0:y,S=Gi(e,{boundary:s,rootBoundary:u,padding:A,altBoundary:c}),B=Ht(e.placement),M=An(e.placement),E=!M,$=vo(B),Q=up($),R=e.modifiersData.popperOffsets,_=e.rects.reference,Y=e.rects.popper,I=typeof C=="function"?C(Object.assign({},e.rects,{placement:e.placement})):C,Z=typeof I=="number"?{mainAxis:I,altAxis:I}:Object.assign({mainAxis:0,altAxis:0},I),X=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,V={x:0,y:0};if(R){if(l){var W,fe=$==="y"?ct:St,ie=$==="y"?Ct:jt,de=$==="y"?"height":"width",re=R[$],Oe=re+S[fe],pe=re-S[ie],ae=x?-Y[de]/2:0,z=M===Cn?_[de]:Y[de],oe=M===Cn?-Y[de]:-_[de],He=e.elements.arrow,be=x&&He?co(He):{width:0,height:0},se=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:mo(),O=se[fe],te=se[ie],P=ir(0,_[de],be[de]),ve=E?_[de]/2-ae-P-O-Z.mainAxis:z-P-O-Z.mainAxis,Be=E?-_[de]/2+ae+P+te+Z.mainAxis:oe+P+te+Z.mainAxis,qe=e.elements.arrow&&yr(e.elements.arrow),Ke=qe?$==="y"?qe.clientTop||0:qe.clientLeft||0:0,Ge=(W=X==null?void 0:X[$])!=null?W:0,vt=re+ve-Ge-Ke,gt=re+Be-Ge,cn=ir(x?dr(Oe,vt):Oe,re,x?en(pe,gt):pe);R[$]=cn,V[$]=cn-re}if(o){var mt,tt=$==="x"?ct:St,nt=$==="x"?Ct:jt,Je=R[Q],ye=Q==="y"?"height":"width",ht=Je+S[tt],Bt=Je-S[nt],Ye=[ct,St].indexOf(B)!==-1,It=(mt=X==null?void 0:X[Q])!=null?mt:0,bt=Ye?ht:Je-_[ye]-Y[ye]-It+Z.altAxis,ut=Ye?Je+_[ye]+Y[ye]-It-Z.altAxis:Bt,lt=x&&Ye?dp(bt,Je,ut):ir(x?bt:ht,Je,x?ut:Bt);R[Q]=lt,V[Q]=lt-Je}e.modifiersData[r]=V}}var pp={name:"preventOverflow",enabled:!0,phase:"main",fn:cp,requiresIfExists:["offset"]},fp={left:"right",right:"left",bottom:"top",top:"bottom"};function ar(t){return t.replace(/left|right|bottom|top/g,function(e){return fp[e]})}var vp={start:"end",end:"start"};function ja(t){return t.replace(/start|end/g,function(e){return vp[e]})}function gp(t,e){e===void 0&&(e={});var n=e,r=n.placement,i=n.boundary,l=n.rootBoundary,a=n.padding,o=n.flipVariations,s=n.allowedAutoPlacements,u=s===void 0?xc:s,c=An(r),A=c?o?Pa:Pa.filter(function(y){return An(y)===c}):kr,k=A.filter(function(y){return u.indexOf(y)>=0});k.length===0&&(k=A);var x=k.reduce(function(y,C){return y[C]=Gi(t,{placement:C,boundary:i,rootBoundary:l,padding:a})[Ht(C)],y},{});return Object.keys(x).sort(function(y,C){return x[y]-x[C]})}function mp(t){if(Ht(t)===_i)return[];var e=ar(t);return[ja(t),e,ja(e)]}function hp(t){var e=t.state,n=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var i=n.mainAxis,l=i===void 0?!0:i,a=n.altAxis,o=a===void 0?!0:a,s=n.fallbackPlacements,u=n.padding,c=n.boundary,A=n.rootBoundary,k=n.altBoundary,x=n.flipVariations,y=x===void 0?!0:x,C=n.allowedAutoPlacements,S=e.options.placement,B=Ht(S),M=B===S,E=s||(M||!y?[ar(S)]:mp(S)),$=[S].concat(E).reduce(function(be,se){return be.concat(Ht(se)===_i?gp(e,{placement:se,boundary:c,rootBoundary:A,padding:u,flipVariations:y,allowedAutoPlacements:C}):se)},[]),Q=e.rects.reference,R=e.rects.popper,_=new Map,Y=!0,I=$[0],Z=0;Z<$.length;Z++){var X=$[Z],V=Ht(X),W=An(X)===Cn,fe=[ct,Ct].indexOf(V)>=0,ie=fe?"width":"height",de=Gi(e,{placement:X,boundary:c,rootBoundary:A,altBoundary:k,padding:u}),re=fe?W?jt:St:W?Ct:ct;Q[ie]>R[ie]&&(re=ar(re));var Oe=ar(re),pe=[];if(l&&pe.push(de[V]<=0),o&&pe.push(de[re]<=0,de[Oe]<=0),pe.every(function(be){return be})){I=X,Y=!1;break}_.set(X,pe)}if(Y)for(var ae=y?3:1,z=function(se){var O=$.find(function(te){var P=_.get(te);if(P)return P.slice(0,se).every(function(ve){return ve})});if(O)return I=O,"break"},oe=ae;oe>0;oe--){var He=z(oe);if(He==="break")break}e.placement!==I&&(e.modifiersData[r]._skip=!0,e.placement=I,e.reset=!0)}}var bp={name:"flip",enabled:!0,phase:"main",fn:hp,requiresIfExists:["offset"],data:{_skip:!1}};function wp(t,e,n){const{disabled:r,appendTo:i,appendToBody:l,openDirection:a}=Pe(t),o=Jn().proxy,s=n.multiselect,u=n.dropdown,c=Le(!1),A=Le(null),k=Le(null),x=K(()=>i.value||l.value),y=K(()=>a.value==="top"&&k.value==="bottom"||a.value==="bottom"&&k.value!=="top"?"bottom":"top"),C=()=>{c.value||r.value||(c.value=!0,e.emit("open",o),x.value&&hn(()=>{B()}))},S=()=>{c.value&&(c.value=!1,e.emit("close",o))},B=()=>{if(!A.value)return;let E=parseInt(window.getComputedStyle(u.value).borderTopWidth.replace("px","")),$=parseInt(window.getComputedStyle(u.value).borderBottomWidth.replace("px",""));A.value.setOptions(Q=>({...Q,modifiers:[...Q.modifiers,{name:"offset",options:{offset:[0,(y.value==="top"?E:$)*-1]}}]})),A.value.update()},M=E=>{for(;E&&E!==document.body;){if(getComputedStyle(E).position==="fixed")return!0;E=E.parentElement}return!1};return Kn(()=>{x.value&&(A.value=sp(s.value,u.value,{strategy:M(s.value)?"fixed":void 0,placement:a.value,modifiers:[pp,bp,{name:"sameWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:({state:E})=>{E.styles.popper.width=`${E.rects.reference.width}px`},effect:({state:E})=>{E.elements.popper.style.width=`${E.elements.reference.offsetWidth}px`}},{name:"toggleClass",enabled:!0,phase:"write",fn({state:E}){k.value=E.placement}}]}))}),Vs(()=>{!x.value||!A.value||(A.value.destroy(),A.value=null)}),{popper:A,isOpen:c,open:C,close:S,placement:y,updatePopper:B}}function yp(t,e,n){const{searchable:r,disabled:i,clearOnBlur:l}=Pe(t),a=n.input,o=n.open,s=n.close,u=n.clearSearch,c=n.isOpen,A=n.wrapper,k=n.tags,x=Le(!1),y=Le(!1),C=K(()=>r.value||i.value?-1:0),S=()=>{r.value&&a.value.blur(),A.value.blur()},B=()=>{r.value&&!i.value&&a.value.focus()},M=(Y=!0)=>{i.value||(x.value=!0,Y&&o())},E=()=>{x.value=!1,setTimeout(()=>{x.value||(s(),l.value&&u())},1)};return{tabindex:C,isActive:x,mouseClicked:y,blur:S,focus:B,activate:M,deactivate:E,handleFocusIn:Y=>{Y.target.closest("[data-tags]")&&Y.target.nodeName!=="INPUT"||Y.target.closest("[data-clear]")||M(y.value)},handleFocusOut:()=>{E()},handleCaretClick:()=>{E(),S()},handleMousedown:Y=>{y.value=!0,c.value&&(Y.target.isEqualNode(A.value)||Y.target.isEqualNode(k.value))?setTimeout(()=>{E()},0):!c.value&&(document.activeElement.isEqualNode(A.value)||document.activeElement.isEqualNode(a.value))&&M(),setTimeout(()=>{y.value=!1},0)}}}function kp(t,e,n){const{mode:r,addTagOn:i,openDirection:l,searchable:a,showOptions:o,valueProp:s,groups:u,addOptionOn:c,createTag:A,createOption:k,reverse:x}=Pe(t),y=Jn().proxy,C=n.iv,S=n.update,B=n.deselect,M=n.search,E=n.setPointer,$=n.selectPointer,Q=n.backwardPointer,R=n.forwardPointer,_=n.multiselect,Y=n.wrapper,I=n.tags,Z=n.isOpen,X=n.open,V=n.blur,W=n.fo,fe=K(()=>A.value||k.value||!1),ie=K(()=>i.value!==void 0?i.value:c.value!==void 0?c.value:["enter"]),de=()=>{r.value==="tags"&&!o.value&&fe.value&&a.value&&!u.value&&E(W.value[W.value.map(pe=>pe[s.value]).indexOf(M.value)])};return{handleKeydown:pe=>{e.emit("keydown",pe,y);let ae,z;switch(["ArrowLeft","ArrowRight","Enter"].indexOf(pe.key)!==-1&&r.value==="tags"&&(ae=[..._.value.querySelectorAll("[data-tags] > *")].filter(oe=>oe!==I.value),z=ae.findIndex(oe=>oe===document.activeElement)),pe.key){case"Backspace":if(r.value==="single"||a.value&&[null,""].indexOf(M.value)===-1||C.value.length===0)return;let oe=C.value.filter(He=>!He.disabled&&He.remove!==!1);oe.length&&B(oe[oe.length-1]);break;case"Enter":if(pe.preventDefault(),pe.keyCode===229)return;if(z!==-1&&z!==void 0){S([...C.value].filter((He,be)=>be!==z)),z===ae.length-1&&(ae.length-1?ae[ae.length-2].focus():a.value?I.value.querySelector("input").focus():Y.value.focus());return}if(ie.value.indexOf("enter")===-1&&fe.value)return;de(),$();break;case" ":if(!fe.value&&!a.value){pe.preventDefault(),de(),$();return}if(!fe.value)return!1;if(ie.value.indexOf("space")===-1&&fe.value)return;pe.preventDefault(),de(),$();break;case"Tab":case";":case",":if(ie.value.indexOf(pe.key.toLowerCase())===-1||!fe.value)return;de(),$(),pe.preventDefault();break;case"Escape":V();break;case"ArrowUp":if(pe.preventDefault(),!o.value)return;Z.value||X(),Q();break;case"ArrowDown":if(pe.preventDefault(),!o.value)return;Z.value||X(),R();break;case"ArrowLeft":if(a.value&&I.value&&I.value.querySelector("input").selectionStart||pe.shiftKey||r.value!=="tags"||!C.value||!C.value.length)return;pe.preventDefault(),z===-1?ae[ae.length-1].focus():z>0&&ae[z-1].focus();break;case"ArrowRight":if(z===-1||pe.shiftKey||r.value!=="tags"||!C.value||!C.value.length)return;pe.preventDefault(),ae.length>z+1?ae[z+1].focus():a.value?I.value.querySelector("input").focus():a.value||Y.value.focus();break}},handleKeyup:pe=>{e.emit("keyup",pe,y)},preparePointer:de}}function Cp(t,e,n){const{classes:r,disabled:i,showOptions:l,breakTags:a}=Pe(t),o=n.isOpen,s=n.isPointed,u=n.isSelected,c=n.isDisabled,A=n.isActive,k=n.canPointGroups,x=n.resolving,y=n.fo,C=n.placement,S=K(()=>({container:"multiselect",containerDisabled:"is-disabled",containerOpen:"is-open",containerOpenTop:"is-open-top",containerActive:"is-active",wrapper:"multiselect-wrapper",singleLabel:"multiselect-single-label",singleLabelText:"multiselect-single-label-text",multipleLabel:"multiselect-multiple-label",search:"multiselect-search",tags:"multiselect-tags",tag:"multiselect-tag",tagWrapper:"multiselect-tag-wrapper",tagWrapperBreak:"multiselect-tag-wrapper-break",tagDisabled:"is-disabled",tagRemove:"multiselect-tag-remove",tagRemoveIcon:"multiselect-tag-remove-icon",tagsSearchWrapper:"multiselect-tags-search-wrapper",tagsSearch:"multiselect-tags-search",tagsSearchCopy:"multiselect-tags-search-copy",placeholder:"multiselect-placeholder",caret:"multiselect-caret",caretOpen:"is-open",clear:"multiselect-clear",clearIcon:"multiselect-clear-icon",spinner:"multiselect-spinner",inifinite:"multiselect-inifite",inifiniteSpinner:"multiselect-inifite-spinner",dropdown:"multiselect-dropdown",dropdownTop:"is-top",dropdownHidden:"is-hidden",options:"multiselect-options",optionsTop:"is-top",group:"multiselect-group",groupLabel:"multiselect-group-label",groupLabelPointable:"is-pointable",groupLabelPointed:"is-pointed",groupLabelSelected:"is-selected",groupLabelDisabled:"is-disabled",groupLabelSelectedPointed:"is-selected is-pointed",groupLabelSelectedDisabled:"is-selected is-disabled",groupOptions:"multiselect-group-options",option:"multiselect-option",optionPointed:"is-pointed",optionSelected:"is-selected",optionDisabled:"is-disabled",optionSelectedPointed:"is-selected is-pointed",optionSelectedDisabled:"is-selected is-disabled",noOptions:"multiselect-no-options",noResults:"multiselect-no-results",fakeInput:"multiselect-fake-input",assist:"multiselect-assistive-text",spacer:"multiselect-spacer",...r.value})),B=K(()=>!!(o.value&&l.value&&(!x.value||x.value&&y.value.length)));return{classList:K(()=>{const E=S.value;return{container:[E.container].concat(i.value?E.containerDisabled:[]).concat(B.value&&C.value==="top"?E.containerOpenTop:[]).concat(B.value&&C.value!=="top"?E.containerOpen:[]).concat(A.value?E.containerActive:[]),wrapper:E.wrapper,spacer:E.spacer,singleLabel:E.singleLabel,singleLabelText:E.singleLabelText,multipleLabel:E.multipleLabel,search:E.search,tags:E.tags,tag:[E.tag].concat(i.value?E.tagDisabled:[]),tagWrapper:[E.tagWrapper,a.value?E.tagWrapperBreak:null],tagDisabled:E.tagDisabled,tagRemove:E.tagRemove,tagRemoveIcon:E.tagRemoveIcon,tagsSearchWrapper:E.tagsSearchWrapper,tagsSearch:E.tagsSearch,tagsSearchCopy:E.tagsSearchCopy,placeholder:E.placeholder,caret:[E.caret].concat(o.value?E.caretOpen:[]),clear:E.clear,clearIcon:E.clearIcon,spinner:E.spinner,inifinite:E.inifinite,inifiniteSpinner:E.inifiniteSpinner,dropdown:[E.dropdown].concat(C.value==="top"?E.dropdownTop:[]).concat(!o.value||!l.value||!B.value?E.dropdownHidden:[]),options:[E.options].concat(C.value==="top"?E.optionsTop:[]),group:E.group,groupLabel:$=>{let Q=[E.groupLabel];return s($)?Q.push(u($)?E.groupLabelSelectedPointed:E.groupLabelPointed):u($)&&k.value?Q.push(c($)?E.groupLabelSelectedDisabled:E.groupLabelSelected):c($)&&Q.push(E.groupLabelDisabled),k.value&&Q.push(E.groupLabelPointable),Q},groupOptions:E.groupOptions,option:($,Q)=>{let R=[E.option];return s($)?R.push(u($)?E.optionSelectedPointed:E.optionPointed):u($)?R.push(c($)?E.optionSelectedDisabled:E.optionSelected):(c($)||Q&&c(Q))&&R.push(E.optionDisabled),R},noOptions:E.noOptions,noResults:E.noResults,assist:E.assist,fakeInput:E.fakeInput}}),showDropdown:B}}function Ap(t,e,n){const{limit:r,infinite:i}=Pe(t),l=n.isOpen,a=n.offset,o=n.search,s=n.pfo,u=n.eo,c=Le(null),A=Le(null),k=K(()=>a.value<s.value.length),x=C=>{const{isIntersecting:S,target:B}=C[0];if(S){const M=B.offsetParent,E=M.scrollTop;a.value+=r.value==-1?10:r.value,hn(()=>{M.scrollTop=E})}},y=()=>{l.value&&a.value<s.value.length?c.value.observe(A.value):!l.value&&c.value&&c.value.disconnect()};return Se(l,()=>{i.value&&y()}),Se(o,()=>{i.value&&(a.value=r.value,y())},{flush:"post"}),Se(u,()=>{i.value&&y()},{immediate:!1,flush:"post"}),Kn(()=>{window&&window.IntersectionObserver&&(c.value=new IntersectionObserver(x))}),{hasMore:k,infiniteLoader:A}}function Ep(t,e,n){const{placeholder:r,id:i,valueProp:l,label:a,mode:o,groupLabel:s,aria:u,searchable:c}=Pe(t),A=n.pointer,k=n.iv,x=n.hasSelected,y=n.multipleLabelText,C=Le(null),S=K(()=>{let V=[];return i&&i.value&&V.push(i.value),V.push("assist"),V.join("-")}),B=K(()=>{let V=[];return i&&i.value&&V.push(i.value),V.push("multiselect-options"),V.join("-")}),M=K(()=>{let V=[];if(i&&i.value&&V.push(i.value),A.value)return V.push(A.value.group?"multiselect-group":"multiselect-option"),V.push(A.value.group?A.value.index:A.value[l.value]),V.join("-")}),E=K(()=>r.value),$=K(()=>o.value!=="single"),Q=K(()=>{let V="";return o.value==="single"&&x.value&&(V+=k.value[a.value]),o.value==="multiple"&&x.value&&(V+=y.value),o.value==="tags"&&x.value&&(V+=k.value.map(W=>W[a.value]).join(", ")),V}),R=K(()=>{let V={...u.value};return c.value&&(V["aria-labelledby"]=V["aria-labelledby"]?`${S.value} ${V["aria-labelledby"]}`:S.value,Q.value&&V["aria-label"]&&(V["aria-label"]=`${Q.value}, ${V["aria-label"]}`)),V}),_=V=>{let W=[];return i&&i.value&&W.push(i.value),W.push("multiselect-option"),W.push(V[l.value]),W.join("-")},Y=V=>{let W=[];return i&&i.value&&W.push(i.value),W.push("multiselect-group"),W.push(V.index),W.join("-")},I=V=>{let W=[];return W.push(V),W.join(" ")},Z=V=>{let W=[];return W.push(V),W.join(" ")},X=V=>`${V} ❎`;return Kn(()=>{if(i&&i.value&&document&&document.querySelector){let V=document.querySelector(`[for="${i.value}"]`);C.value=V?V.innerText:null}}),{arias:R,ariaLabel:Q,ariaAssist:S,ariaControls:B,ariaPlaceholder:E,ariaMultiselectable:$,ariaActiveDescendant:M,ariaOptionId:_,ariaOptionLabel:I,ariaGroupId:Y,ariaGroupLabel:Z,ariaTagLabel:X}}function Lp(t,e,n){const{locale:r,fallbackLocale:i}=Pe(t);return{localize:a=>!a||typeof a!="object"?a:a&&a[r.value]?a[r.value]:a&&r.value&&a[r.value.toUpperCase()]?a[r.value.toUpperCase()]:a&&a[i.value]?a[i.value]:a&&i.value&&a[i.value.toUpperCase()]?a[i.value.toUpperCase()]:a&&Object.keys(a)[0]?a[Object.keys(a)[0]]:""}}function xp(t,e,n){const r=Le(null),i=Le(null),l=Le(null),a=Le(null),o=Le(null);return{multiselect:r,wrapper:i,tags:l,input:a,dropdown:o}}function Sp(t,e,n,r={}){return n.forEach(i=>{i&&(r={...r,...i(t,e,r)})}),r}var Qt={name:"Multiselect",emits:["paste","open","close","select","deselect","input","search-change","tag","option","update:modelValue","change","clear","keydown","keyup","max","create"],props:{value:{required:!1},modelValue:{required:!1},options:{type:[Array,Object,Function],required:!1,default:()=>[]},id:{type:[String,Number],required:!1},name:{type:[String,Number],required:!1,default:"multiselect"},disabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:"label"},trackBy:{type:[String,Array],required:!1,default:void 0},valueProp:{type:String,required:!1,default:"value"},placeholder:{type:String,required:!1,default:null},mode:{type:String,required:!1,default:"single"},searchable:{type:Boolean,required:!1,default:!1},limit:{type:Number,required:!1,default:-1},hideSelected:{type:Boolean,required:!1,default:!0},createTag:{type:Boolean,required:!1,default:void 0},createOption:{type:Boolean,required:!1,default:void 0},appendNewTag:{type:Boolean,required:!1,default:void 0},appendNewOption:{type:Boolean,required:!1,default:void 0},addTagOn:{type:Array,required:!1,default:void 0},addOptionOn:{type:Array,required:!1,default:void 0},caret:{type:Boolean,required:!1,default:!0},loading:{type:Boolean,required:!1,default:!1},noOptionsText:{type:[String,Object],required:!1,default:"The list is empty"},noResultsText:{type:[String,Object],required:!1,default:"No results found"},multipleLabel:{type:Function,required:!1},object:{type:Boolean,required:!1,default:!1},delay:{type:Number,required:!1,default:-1},minChars:{type:Number,required:!1,default:0},resolveOnLoad:{type:Boolean,required:!1,default:!0},filterResults:{type:Boolean,required:!1,default:!0},clearOnSearch:{type:Boolean,required:!1,default:!1},clearOnSelect:{type:Boolean,required:!1,default:!0},canDeselect:{type:Boolean,required:!1,default:!0},canClear:{type:Boolean,required:!1,default:!0},max:{type:Number,required:!1,default:-1},showOptions:{type:Boolean,required:!1,default:!0},required:{type:Boolean,required:!1,default:!1},openDirection:{type:String,required:!1,default:"bottom"},nativeSupport:{type:Boolean,required:!1,default:!1},classes:{type:Object,required:!1,default:()=>({})},strict:{type:Boolean,required:!1,default:!0},closeOnSelect:{type:Boolean,required:!1,default:!0},closeOnDeselect:{type:Boolean,required:!1,default:!1},autocomplete:{type:String,required:!1},groups:{type:Boolean,required:!1,default:!1},groupLabel:{type:String,required:!1,default:"label"},groupOptions:{type:String,required:!1,default:"options"},groupHideEmpty:{type:Boolean,required:!1,default:!1},groupSelect:{type:Boolean,required:!1,default:!0},inputType:{type:String,required:!1,default:"text"},attrs:{required:!1,type:Object,default:()=>({})},onCreate:{required:!1,type:Function},disabledProp:{type:String,required:!1,default:"disabled"},searchStart:{type:Boolean,required:!1,default:!1},reverse:{type:Boolean,required:!1,default:!1},regex:{type:[Object,String,RegExp],required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:!1},infinite:{type:Boolean,required:!1,default:!1},aria:{required:!1,type:Object,default:()=>({})},clearOnBlur:{required:!1,type:Boolean,default:!0},locale:{required:!1,type:String,default:null},fallbackLocale:{required:!1,type:String,default:"en"},searchFilter:{required:!1,type:Function,default:null},allowAbsent:{required:!1,type:Boolean,default:!1},appendToBody:{required:!1,type:Boolean,default:!1},closeOnScroll:{required:!1,type:Boolean,default:!1},breakTags:{required:!1,type:Boolean,default:!1},appendTo:{required:!1,type:String}},setup(t,e){return Sp(t,e,[xp,Lp,cc,fc,wp,pc,dc,yp,mc,Ap,hc,kp,Cp,Ep])},beforeMount(){var t,e;((e=(t=this.$root.constructor)==null?void 0:t.version)!=null&&e.match(/^2\./)||this.vueVersionMs===2)&&(this.$options.components.Teleport||(this.$options.components.Teleport={render(){return this.$slots.default?this.$slots.default[0]:null}}))}};const Tp=["id","dir"],Bp=["tabindex","aria-controls","aria-placeholder","aria-expanded","aria-activedescendant","aria-multiselectable","role"],Ip=["type","modelValue","value","autocomplete","id","aria-controls","aria-placeholder","aria-expanded","aria-activedescendant","aria-multiselectable"],Rp=["onKeyup","aria-label"],Dp=["onClick"],Mp=["type","modelValue","value","id","autocomplete","aria-controls","aria-placeholder","aria-expanded","aria-activedescendant","aria-multiselectable"],Op=["innerHTML"],Fp=["id"],Pp=["id"],$p=["id","aria-label","aria-selected"],zp=["data-pointed","onMouseenter","onMousedown"],Np=["innerHTML"],Hp=["aria-label"],jp=["data-pointed","data-selected","onMouseenter","onMousedown","id","aria-selected","aria-label"],Up=["data-pointed","data-selected","onMouseenter","onMousedown","id","aria-selected","aria-label"],Vp=["innerHTML"],Wp=["innerHTML"],Qp=["value"],qp=["name","value"],Kp=["name","value"],Jp=["id"];function _p(t,e,n,r,i,l){return d(),v("div",{ref:"multiselect",class:f(t.classList.container),id:n.searchable?void 0:n.id,dir:n.rtl?"rtl":void 0,onFocusin:e[12]||(e[12]=(...a)=>t.handleFocusIn&&t.handleFocusIn(...a)),onFocusout:e[13]||(e[13]=(...a)=>t.handleFocusOut&&t.handleFocusOut(...a)),onKeyup:e[14]||(e[14]=(...a)=>t.handleKeyup&&t.handleKeyup(...a)),onKeydown:e[15]||(e[15]=(...a)=>t.handleKeydown&&t.handleKeydown(...a))},[w("div",q({class:t.classList.wrapper,onMousedown:e[9]||(e[9]=(...a)=>t.handleMousedown&&t.handleMousedown(...a)),ref:"wrapper",tabindex:t.tabindex,"aria-controls":n.searchable?void 0:t.ariaControls,"aria-placeholder":n.searchable?void 0:t.ariaPlaceholder,"aria-expanded":n.searchable?void 0:t.isOpen,"aria-activedescendant":n.searchable?void 0:t.ariaActiveDescendant,"aria-multiselectable":n.searchable?void 0:t.ariaMultiselectable,role:n.searchable?void 0:"combobox"},n.searchable?{}:t.arias),[h(" Search "),n.mode!=="tags"&&n.searchable&&!n.disabled?(d(),v("input",q({key:0,type:n.inputType,modelValue:t.search,value:t.search,class:t.classList.search,autocomplete:n.autocomplete,id:n.searchable?n.id:void 0,onInput:e[0]||(e[0]=(...a)=>t.handleSearchInput&&t.handleSearchInput(...a)),onKeypress:e[1]||(e[1]=(...a)=>t.handleKeypress&&t.handleKeypress(...a)),onPaste:e[2]||(e[2]=he((...a)=>t.handlePaste&&t.handlePaste(...a),["stop"])),ref:"input","aria-controls":t.ariaControls,"aria-placeholder":t.ariaPlaceholder,"aria-expanded":t.isOpen,"aria-activedescendant":t.ariaActiveDescendant,"aria-multiselectable":t.ariaMultiselectable,role:"combobox"},{...n.attrs,...t.arias}),null,16,Ip)):h("v-if",!0),h(" Tags (with search) "),n.mode=="tags"?(d(),v("div",{key:1,class:f(t.classList.tags),"data-tags":""},[(d(!0),v(ee,null,le(t.iv,(a,o,s)=>D(t.$slots,"tag",{option:a,handleTagRemove:t.handleTagRemove,disabled:n.disabled},()=>[(d(),v("span",{class:f([t.classList.tag,a.disabled?t.classList.tagDisabled:null]),tabindex:"-1",onKeyup:We(u=>t.handleTagRemove(a,u),["enter"]),key:s,"aria-label":t.ariaTagLabel(t.localize(a[n.label]))},[w("span",{class:f(t.classList.tagWrapper)},Ce(t.localize(a[n.label])),3),!n.disabled&&!a.disabled?(d(),v("span",{key:0,class:f(t.classList.tagRemove),onClick:he(u=>t.handleTagRemove(a,u),["stop"])},[w("span",{class:f(t.classList.tagRemoveIcon)},null,2)],10,Dp)):h("v-if",!0)],42,Rp))])),256)),w("div",{class:f(t.classList.tagsSearchWrapper),ref:"tags"},[h(" Used for measuring search width "),w("span",{class:f(t.classList.tagsSearchCopy)},Ce(t.search),3),h(" Actual search input "),n.searchable&&!n.disabled?(d(),v("input",q({key:0,type:n.inputType,modelValue:t.search,value:t.search,class:t.classList.tagsSearch,id:n.searchable?n.id:void 0,autocomplete:n.autocomplete,onInput:e[3]||(e[3]=(...a)=>t.handleSearchInput&&t.handleSearchInput(...a)),onKeypress:e[4]||(e[4]=(...a)=>t.handleKeypress&&t.handleKeypress(...a)),onPaste:e[5]||(e[5]=he((...a)=>t.handlePaste&&t.handlePaste(...a),["stop"])),ref:"input","aria-controls":t.ariaControls,"aria-placeholder":t.ariaPlaceholder,"aria-expanded":t.isOpen,"aria-activedescendant":t.ariaActiveDescendant,"aria-multiselectable":t.ariaMultiselectable,role:"combobox"},{...n.attrs,...t.arias}),null,16,Mp)):h("v-if",!0)],2)],2)):h("v-if",!0),h(" Single label "),n.mode=="single"&&t.hasSelected&&!t.search&&t.iv?D(t.$slots,"singlelabel",{key:2,value:t.iv},()=>[w("div",{class:f(t.classList.singleLabel)},[w("span",{class:f(t.classList.singleLabelText)},Ce(t.localize(t.iv[n.label])),3)],2)]):h("v-if",!0),h(" Multiple label "),n.mode=="multiple"&&t.hasSelected&&!t.search?D(t.$slots,"multiplelabel",{key:3,values:t.iv},()=>[w("div",{class:f(t.classList.multipleLabel),innerHTML:t.multipleLabelText},null,10,Op)]):h("v-if",!0),h(" Placeholder "),n.placeholder&&!t.hasSelected&&!t.search?D(t.$slots,"placeholder",{key:4},()=>[w("div",{class:f(t.classList.placeholder),"aria-hidden":"true"},Ce(n.placeholder),3)]):h("v-if",!0),h(" Spinner "),n.loading||t.resolving?D(t.$slots,"spinner",{key:5},()=>[w("span",{class:f(t.classList.spinner),"aria-hidden":"true"},null,2)]):h("v-if",!0),h(" Clear "),t.hasSelected&&!n.disabled&&n.canClear&&!t.busy?D(t.$slots,"clear",{key:6,clear:t.clear},()=>[w("span",{"aria-hidden":"true",tabindex:"0",role:"button","data-clear":"","aria-roledescription":"❎",class:f(t.classList.clear),onClick:e[6]||(e[6]=(...a)=>t.clear&&t.clear(...a)),onKeyup:e[7]||(e[7]=We((...a)=>t.clear&&t.clear(...a),["enter"]))},[w("span",{class:f(t.classList.clearIcon)},null,2)],34)]):h("v-if",!0),h(" Caret "),n.caret&&n.showOptions?D(t.$slots,"caret",{key:7,handleCaretClick:t.handleCaretClick,isOpen:t.isOpen},()=>[w("span",{class:f(t.classList.caret),onClick:e[8]||(e[8]=(...a)=>t.handleCaretClick&&t.handleCaretClick(...a)),"aria-hidden":"true"},null,2)]):h("v-if",!0)],16,Bp),h(" Options "),(d(),L(Cl,{to:n.appendTo||"body",disabled:!n.appendToBody&&!n.appendTo},[w("div",{id:n.id?`${n.id}-dropdown`:void 0,class:f(t.classList.dropdown),tabindex:"-1",ref:"dropdown",onFocusin:e[10]||(e[10]=(...a)=>t.handleFocusIn&&t.handleFocusIn(...a)),onFocusout:e[11]||(e[11]=(...a)=>t.handleFocusOut&&t.handleFocusOut(...a))},[D(t.$slots,"beforelist",{options:t.fo}),w("ul",{class:f(t.classList.options),id:t.ariaControls,role:"listbox"},[n.groups?(d(!0),v(ee,{key:0},le(t.fg,(a,o,s)=>(d(),v("li",{class:f(t.classList.group),key:s,id:t.ariaGroupId(a),"aria-label":t.ariaGroupLabel(t.localize(a[n.groupLabel])),"aria-selected":t.isSelected(a),role:"option"},[a.__CREATE__?h("v-if",!0):(d(),v("div",{key:0,class:f(t.classList.groupLabel(a)),"data-pointed":t.isPointed(a),onMouseenter:u=>t.setPointer(a,o),onMousedown:he(u=>t.handleGroupClick(a),["prevent"])},[D(t.$slots,"grouplabel",{group:a,isSelected:t.isSelected,isPointed:t.isPointed},()=>[w("span",{innerHTML:t.localize(a[n.groupLabel])},null,8,Np)])],42,zp)),w("ul",{class:f(t.classList.groupOptions),"aria-label":t.ariaGroupLabel(t.localize(a[n.groupLabel])),role:"group"},[(d(!0),v(ee,null,le(a.__VISIBLE__,(u,c,A)=>(d(),v("li",{class:f(t.classList.option(u,a)),"data-pointed":t.isPointed(u),"data-selected":t.isSelected(u)||void 0,key:A,onMouseenter:k=>t.setPointer(u),onMousedown:he(k=>t.handleOptionClick(u),["prevent"]),id:t.ariaOptionId(u),"aria-selected":t.isSelected(u),"aria-label":t.ariaOptionLabel(t.localize(u[n.label])),role:"option"},[D(t.$slots,"option",{option:u,isSelected:t.isSelected,isPointed:t.isPointed,search:t.search},()=>[w("span",null,Ce(t.localize(u[n.label])),1)])],42,jp))),128))],10,Hp)],10,$p))),128)):(d(!0),v(ee,{key:1},le(t.fo,(a,o,s)=>(d(),v("li",{class:f(t.classList.option(a)),"data-pointed":t.isPointed(a),"data-selected":t.isSelected(a)||void 0,key:s,onMouseenter:u=>t.setPointer(a),onMousedown:he(u=>t.handleOptionClick(a),["prevent"]),id:t.ariaOptionId(a),"aria-selected":t.isSelected(a),"aria-label":t.ariaOptionLabel(t.localize(a[n.label])),role:"option"},[D(t.$slots,"option",{option:a,isSelected:t.isSelected,isPointed:t.isPointed,search:t.search},()=>[w("span",null,Ce(t.localize(a[n.label])),1)])],42,Up))),128))],10,Pp),t.noOptions?D(t.$slots,"nooptions",{key:0},()=>[w("div",{class:f(t.classList.noOptions),innerHTML:t.localize(n.noOptionsText)},null,10,Vp)]):h("v-if",!0),t.noResults?D(t.$slots,"noresults",{key:1},()=>[w("div",{class:f(t.classList.noResults),innerHTML:t.localize(n.noResultsText)},null,10,Wp)]):h("v-if",!0),n.infinite&&t.hasMore?(d(),v("div",{key:2,class:f(t.classList.inifinite),ref:"infiniteLoader"},[D(t.$slots,"infinite",{},()=>[w("span",{class:f(t.classList.inifiniteSpinner)},null,2)])],2)):h("v-if",!0),D(t.$slots,"afterlist",{options:t.fo})],42,Fp)],8,["to","disabled"])),h(" Hacky input element to show HTML5 required warning "),n.required?(d(),v("input",{key:0,class:f(t.classList.fakeInput),tabindex:"-1",value:t.textValue,required:""},null,10,Qp)):h("v-if",!0),h(" Native input support "),n.nativeSupport?(d(),v(ee,{key:1},[n.mode=="single"?(d(),v("input",{key:0,type:"hidden",name:n.name,value:t.plainValue!==void 0?t.plainValue:""},null,8,qp)):(d(!0),v(ee,{key:1},le(t.plainValue,(a,o)=>(d(),v("input",{type:"hidden",name:`${n.name}[]`,value:a,key:o},null,8,Kp))),128))],64)):h("v-if",!0),h(" Screen reader assistive text "),n.searchable&&t.hasSelected?(d(),v("div",{key:2,class:f(t.classList.assist),id:t.ariaAssist,"aria-hidden":"true"},Ce(t.ariaLabel),11,Jp)):h("v-if",!0),h(" Create height for empty input "),w("div",{class:f(t.classList.spacer)},null,2)],42,Tp)}Qt.render=_p;Qt.__file="node_modules/@vueform/multiselect/src/Multiselect.vue";var Yi={name:"MultiselectElement",components:{Multiselect:Qt},data(){return{merge:!0,defaultClasses:{container:"",input:"",inputWrapper:"",select:{container:"",containerDisabled:"",containerOpen:"",containerOpenTop:"",containerActive:"",multipleLabel:"",search:"",placeholder:"",caret:"",caretOpen:"",clear:"",clearIcon:"",spinner:"",dropdown:"",dropdownTop:"",dropdownHidden:"",options:"",optionsTop:"",group:"",groupLabel:"",groupLabelPointable:"",groupLabelPointed:"",groupLabelSelected:"",groupLabelDisabled:"",groupLabelSelectedPointed:"",groupLabelSelectedDisabled:"",groupOptions:"",option:"",optionPointed:"",optionSelected:"",optionDisabled:"",optionSelectedPointed:"",optionSelectedDisabled:"",noOptions:"",noResults:"",fakeInput:"",spacer:""}}}}};const Gp=["name","id","disabled"],Yp=["value"];function Xp(t,e,n,r,i,l){const a=ue("ElementLabelFloating"),o=ue("Multiselect");return d(),L(F(t.elementLayout),{ref:"container"},Ie({element:U(()=>[t.hasFloating&&!t.empty?(d(),L(a,{key:0,visible:!t.empty},null,8,["visible"])):h("v-if",!0),h(" Native select "),t.isNative?(d(),v("div",{key:1,class:f(t.classes.inputWrapper)},[Fe(w("select",q({"onUpdate:modelValue":e[0]||(e[0]=s=>t.value=s),class:t.classes.input,name:t.name,id:t.fieldId,multiple:!0,disabled:t.isDisabled},{...t.attrs,...t.aria},{ref:"input"}),[(d(!0),v(ee,null,le(t.resolvedOptions,(s,u)=>(d(),v("option",{value:s.value,key:u},Ce(s.label),9,Yp))),128))],16,Gp),[[Al,t.value]]),t.placeholder&&t.empty&&!t.isDisabled&&t.type=="select"?(d(),v("span",{key:0,class:f(t.classes.inputPlaceholder)},Ce(t.placeholder),3)):h("v-if",!0)],2)):(d(),v(ee,{key:2},[h(" @vueform/multiselect copmonent "),Ee(o,q(t.fieldOptions,{modelValue:t.value,"onUpdate:modelValue":e[1]||(e[1]=s=>t.value=s),classes:t.classes.select,id:t.fieldId,name:t.name,options:t.resolvedOptions,disabled:t.isDisabled,placeholder:t.Placeholder,attrs:t.attrs,aria:t.aria,locale:t.form$.locale$,onSelect:t.handleSelect,onDeselect:t.handleDeselect,onSearchChange:t.handleSearchChange,onTag:t.handleTag,onOpen:t.handleOpen,onClose:t.handleClose,onClear:t.handleClear,onPaste:t.handlePaste,ref:"input"}),Ie({_:2},[le({option:"option",noresults:"no-results",nooptions:"no-options",afterlist:"after-list",beforelist:"before-list",placeholder:"placeholder",grouplabel:"group-label",caret:"caret",clear:"clear",spinner:"spinner",default:"default"},(s,u)=>({name:u,fn:U(c=>[D(t.$slots,s,q(c,{el$:t.el$}),()=>[(d(),L(F(t.fieldSlots[s]),q(c,{el$:t.el$}),null,16,["el$"]))])])})),t.fieldOptions.mode=="multiple"?{name:"multiplelabel",fn:U(({values:s})=>[D(t.$slots,"multiple-label",{values:s,el$:t.el$},()=>[(d(),L(F(t.fieldSlots["multiple-label"]),{values:s,el$:t.el$},null,8,["values","el$"]))])]),key:"0"}:void 0]),1040,["modelValue","classes","id","name","options","disabled","placeholder","attrs","aria","locale","onSelect","onDeselect","onSearchChange","onTag","onOpen","onClose","onClear","onPaste"])],2112))]),_:2},[le(t.elementSlots,(s,u)=>({name:u,fn:U(()=>[D(t.$slots,u,{el$:t.el$},()=>[(d(),L(F(s),{el$:t.el$},null,8,["el$"]))])])}))]),1536)}Yi.render=Xp;Yi.__file="themes/blank/templates/elements/MultiselectElement.vue";var ho={name:"MultiselectElement",components:{Multiselect:Qt},render:Yi.render,data(){return{merge:!0,defaultClasses:{container:"vf-text-type",input:"vf-input",input_enabled:"",input_disabled:"",input_success:"vf-input-success",input_danger:"vf-input-danger",input_sm:"vf-input-sm",input_md:"",input_lg:"vf-input-lg",inputWrapper:"",select:{multipleLabel:"vf-multiselect-multiple-label",multipleLabel_sm:"vf-multiselect-multiple-label-sm",multipleLabel_md:"",multipleLabel_lg:"vf-multiselect-multiple-label-lg",multipleLabel_noClear:"vf-multiselect-multiple-label-no-clear",multipleLabel_noCaret:"vf-multiselect-multiple-label-no-caret",container:"vf-multiselect",container_enabled:"",container_disabled:"vf-multiselect-disabled",container_success:"vf-multiselect-success",container_danger:"vf-multiselect-danger",container_sm:"vf-multiselect-sm",container_md:"",container_lg:"vf-multiselect-lg",containerDisabled:"",containerOpen:"vf-multiselect-open",containerOpenTop:"vf-multiselect-open-top",containerActive:"vf-multiselect-active",containerActive_enabled:"",wrapper:"vf-multiselect-wrapper",wrapper_sm:"vf-multiselect-wrapper-sm",wrapper_md:"",wrapper_lg:"vf-multiselect-wrapper-lg",search:"vf-multiselect-search",search_sm:"vf-multiselect-search-sm",search_md:"",search_lg:"vf-multiselect-search-lg",placeholder:"vf-multiselect-placeholder",placeholder_sm:"vf-multiselect-placeholder-sm",placeholder_md:"",placeholder_lg:"vf-multiselect-placeholder-lg",caret:"vf-multiselect-caret",caret_sm:"vf-multiselect-caret-sm",caret_md:"",caret_lg:"vf-multiselect-caret-lg",caretOpen:"vf-multiselect-caret-open",clear:"vf-multiselect-clear",clear_sm:"vf-multiselect-clear-sm",clear_md:"",clear_lg:"vf-multiselect-clear-lg",clearIcon:"vf-multiselect-clear-icon",spinner:"vf-multiselect-spinner",spinner_sm:"vf-multiselect-spinner-sm",spinner_md:"",spinner_lg:"vf-multiselect-spinner-lg",infinite:"vf-multiselect-infinite",infinite_sm:"vf-multiselect-infinite-sm",infinite_md:"",infinite_lg:"vf-multiselect-infinite-lg",infiniteSpinner:"vf-multiselect-infinite-spinner",dropdown:"vf-multiselect-dropdown",dropdown_sm:"vf-multiselect-dropdown-sm",dropdown_md:"",dropdown_lg:"vf-multiselect-dropdown-lg",dropdownTop:"vf-multiselect-dropdown-top",dropdownTop_sm:"vf-multiselect-dropdown-top-sm",dropdownTop_md:"",dropdownTop_lg:"vf-multiselect-dropdown-top-lg",dropdownHidden:"vf-multiselect-dropdown-hidden",options:"vf-multiselect-options",optionsTop:"vf-multiselect-options-top",group:"vf-multiselect-group",groupLabel:"vf-multiselect-group-label",groupLabel_sm:"vf-multiselect-group-label-sm",groupLabel_md:"",groupLabel_lg:"vf-multiselect-group-label-lg",groupLabelPointable:"vf-multiselect-group-label-pointable",groupLabelPointed:"vf-multiselect-group-label-pointed",groupLabelSelected:"vf-multiselect-group-label-selected",groupLabelDisabled:"vf-multiselect-group-label-disabled",groupLabelSelectedPointed:"vf-multiselect-group-label-selected vf-multiselect-group-label-pointed",groupLabelSelectedDisabled:"vf-multiselect-group-label-selected vf-multiselect-group-label-disabled",groupOptions:"vf-multiselect-group-options",option:"vf-multiselect-option",option_sm:"vf-multiselect-option-sm",option_md:"",option_lg:"vf-multiselect-option-lg",optionPointed:"vf-multiselect-option-pointed",optionSelected:"vf-multiselect-option-selected",optionDisabled:"vf-multiselect-option-disabled",optionSelectedPointed:"vf-multiselect-option-selected vf-multiselect-option-pointed",optionSelectedDisabled:"vf-multiselect-option-selected vf-multiselect-option-disabled",noOptions:"vf-multiselect-no-options",noOptions_sm:"vf-multiselect-no-options-sm",noOptions_md:"",noOptions_lg:"vf-multiselect-no-options-lg",noResults:"vf-multiselect-no-results",noResults_sm:"vf-multiselect-no-results-sm",noResults_md:"",noResults_lg:"vf-multiselect-no-results-lg",fakeInput:"vf-multiselect-fake-input",assist:"vf-assistive-text",spacer:"vf-multiselect-spacer",spacer_sm:"vf-multiselect-spacer-sm",spacer_md:"",spacer_lg:"vf-multiselect-spacer-lg",$container:(t,{Size:e,isDanger:n,isSuccess:r,isDisabled:i})=>[t.select.container,t.select[`container_${e}`],i?t.select.container_disabled:null,!i&&!r&&!n?t.select.container_enabled:null,!i&&n?t.select.container_danger:null,!i&&r?t.select.container_success:null],$containerActive:(t,{Size:e,isDanger:n,isSuccess:r,isDisabled:i})=>[t.select.containerActive,t.select[`container_${e}`],!i&&!r&&!n?t.select.containerActive_enabled:null],$wrapper:(t,{Size:e})=>[t.select.wrapper,t.select[`wrapper_${e}`]],$search:(t,{Size:e})=>[t.select.search,t.select[`search_${e}`]],$placeholder:(t,{Size:e})=>[t.select.placeholder,t.select[`placeholder_${e}`]],$caret:(t,{Size:e})=>[t.select.caret,t.select[`caret_${e}`]],$clear:(t,{Size:e})=>[t.select.clear,t.select[`clear_${e}`]],$spinner:(t,{Size:e})=>[t.select.spinner,t.select[`spinner_${e}`]],$infinite:(t,{Size:e})=>[t.select.infinite,t.select[`infinite_${e}`]],$dropdown:(t,{Size:e})=>[t.select.dropdown,t.select[`dropdown_${e}`]],$dropdownTop:(t,{Size:e})=>[t.select.dropdownTop,t.select[`dropdownTop_${e}`]],$groupLabel:(t,{Size:e})=>[t.select.groupLabel,t.select[`groupLabel_${e}`]],$option:(t,{Size:e})=>[t.select.option,t.select[`option_${e}`]],$spacer:(t,{Size:e})=>[t.select.spacer,t.select[`spacer_${e}`]],$noOptions:(t,{Size:e})=>[t.select.noOptions,t.select[`noOptions_${e}`]],$noResults:(t,{Size:e})=>[t.select.noResults,t.select[`noResults_${e}`]],$multipleLabel:(t,{Size:e,canClear:n,caret:r})=>[t.select.multipleLabel,t.select[`multipleLabel_${e}`],n?null:t.select.multipleLabel_noClear,r?null:t.select.multipleLabel_noCaret]},$input:(t,{isDisabled:e,Size:n,isDanger:r,isSuccess:i})=>[t.input,t[`input_${n}`],e?t.input_disabled:null,!e&&!i&&!r?t.input_enabled:null,!e&&r?t.input_danger:null,!e&&i?t.input_success:null]}}}},Zp=`/* Some styles are contained in Vueform.vue & SelectElement.vue */

.vf-multiselect-multiple-label {
  display: flex;
  align-items: center;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
  background: transparent;
  padding-left: var(--vf-px-input);
  padding-right: calc(var(--vf-px-input) * 2.5 + 20px);
}

.vf-multiselect-multiple-label.vf-multiselect-multiple-label-no-caret, .vf-multiselect-multiple-label.vf-multiselect-multiple-label-no-clear {
  padding-right: calc(var(--vf-px-input) * 1.5 + 10px);
}

.vf-multiselect-multiple-label.vf-multiselect-multiple-label-no-caret.vf-multiselect-multiple-label-no-clear {
  padding-right: var(--vf-px-input);
}

.vf-multiselect-multiple-label.vf-multiselect-multiple-label-sm {
  padding-left: var(--vf-px-input-sm);
  padding-right: calc(var(--vf-px-input-sm) * 1.5 + 20px);
}

.vf-multiselect-multiple-label.vf-multiselect-multiple-label-sm.vf-multiselect-multiple-label-no-caret, .vf-multiselect-multiple-label.vf-multiselect-multiple-label-sm.vf-multiselect-multiple-label-no-clear {
  padding-right: calc(var(--vf-px-input-sm) * 1.5 + 10px);
}

.vf-multiselect-multiple-label.vf-multiselect-multiple-label-sm.vf-multiselect-multiple-label-no-caret.vf-multiselect-multiple-label-no-clear {
  padding-right: var(--vf-px-input-sm);
}

.vf-multiselect-multiple-label.vf-multiselect-multiple-label-lg {
  padding-left: var(--vf-px-input-lg);
  padding-right: calc(var(--vf-px-input-lg) * 2.5 + 20px);
}

.vf-multiselect-multiple-label.vf-multiselect-multiple-label-lg.vf-multiselect-multiple-label-no-caret, .vf-multiselect-multiple-label.vf-multiselect-multiple-label-lg.vf-multiselect-multiple-label-no-clear {
  padding-right: calc(var(--vf-px-input-lg) * 1.5 + 10px);
}

.vf-multiselect-multiple-label.vf-multiselect-multiple-label-lg.vf-multiselect-multiple-label-no-caret.vf-multiselect-multiple-label-no-clear {
  padding-right: var(--vf-px-input-lg);
}

.vf-floating-wrapper ~ .vf-multiselect-multiple-label,
.vf-floating-wrapper ~ div .vf-multiselect-multiple-label {
  padding-top: calc(var(--vf-py-input) + var(--vf-floating-top) / 2);
  padding-bottom: calc(var(--vf-py-input) - var(--vf-floating-top) / 2);
}

.vf-floating-wrapper ~ .vf-multiselect-multiple-label-sm,
.vf-floating-wrapper ~ div .vf-multiselect-multiple-label-sm {
  padding-top: calc(var(--vf-py-input-sm) + var(--vf-floating-top-sm) / 2);
  padding-bottom: calc(var(--vf-py-input-sm) - var(--vf-floating-top-sm) / 2);
}

.vf-floating-wrapper ~ .vf-multiselect-multiple-label-lg,
.vf-floating-wrapper ~ div .vf-multiselect-multiple-label-lg {
  padding-top: calc(var(--vf-py-input-lg) + var(--vf-floating-top-lg) / 2);
  padding-bottom: calc(var(--vf-py-input-lg) - var(--vf-floating-top-lg) / 2);
}

[dir=rtl] .vf-multiselect-multiple-label {
  padding-left: calc(var(--vf-px-input) * 2.5 + 20px);
  padding-right: var(--vf-px-input);
  left: auto;
  right: 0;
}

[dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-no-caret, [dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-no-clear {
  padding-left: calc(var(--vf-px-input) * 1.5 + 10px);
  padding-right: var(--vf-px-input);
}

[dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-no-caret.vf-multiselect-multiple-label-no-clear {
  padding-left: var(--vf-px-input);
  padding-right: var(--vf-px-input);
}

[dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-sm {
  padding-left: calc(var(--vf-px-input-sm) * 2.5 + 20px);
  padding-right: var(--vf-px-input-sm);
}

[dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-sm.vf-multiselect-multiple-label-no-caret, [dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-sm.vf-multiselect-multiple-label-no-clear {
  padding-left: calc(var(--vf-px-input-sm) * 1.5 + 10px);
  padding-right: var(--vf-px-input-sm);
}

[dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-sm.vf-multiselect-multiple-label-no-caret.vf-multiselect-multiple-label-no-clear {
  padding-left: var(--vf-px-input-sm);
  padding-right: var(--vf-px-input-sm);
}

[dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-lg {
  padding-left: calc(var(--vf-px-input-lg) * 2.5 + 20px);
  padding-right: var(--vf-px-input-lg);
}

[dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-lg.vf-multiselect-multiple-label-no-caret, [dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-lg.vf-multiselect-multiple-label-no-clear {
  padding-left: calc(var(--vf-px-input-lg) * 1.5 + 10px);
  padding-right: var(--vf-px-input-lg);
}

[dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-lg.vf-multiselect-multiple-label-no-caret.vf-multiselect-multiple-label-no-clear {
  padding-left: var(--vf-px-input-lg);
  padding-right: var(--vf-px-input-lg);
}`;G(Zp);ho.__file="themes/vueform/templates/elements/MultiselectElement.vue";var Xi={name:"ObjectElement",data(){return{merge:!0,defaultClasses:{container:"",wrapper:""}}}};const ef=["aria-labelledby"];function tf(t,e,n,r,i,l){return d(),L(F(t.elementLayout),{multiple:!0,ref:"container"},Ie({element:U(()=>[w("div",{class:f(t.classes.wrapper),role:"group","aria-labelledby":t.labelId},[D(t.$slots,"default",{},()=>[(d(!0),v(ee,null,le(t.children,(a,o)=>(d(),L(F(t.component(a)),q({ref_for:!0},a,{embed:t.embed,name:o,key:o,onRemove:e[0]||(e[0]=s=>t.$emit("remove",s))}),null,16,["embed","name"]))),128))])],10,ef)]),_:2},[le(t.elementSlots,(a,o)=>({name:o,fn:U(()=>[D(t.$slots,o,{el$:t.el$},()=>[(d(),L(F(a),{el$:t.el$},null,8,["el$"]))])])}))]),1536)}Xi.render=tf;Xi.__file="themes/blank/templates/elements/ObjectElement.vue";var bo={name:"ObjectElement",render:Xi.render,data(){return{merge:!0,defaultClasses:{container:"",wrapper:"vf-row",wrapper_sm:"vf-row-sm",wrapper_md:"",wrapper_lg:"vf-row-lg",wrapper_embed:"vf-row-embed",$wrapper:(t,{Size:e,embed:n})=>[t.wrapper,t[`wrapper_${e}`],n?t.wrapper_embed:null]}}}},nf="/* Some styles are contained in Vueform.vue */";G(nf);bo.__file="themes/vueform/templates/elements/ObjectElement.vue";var Zi={name:"PhoneElement",data(){return{merge:!0,defaultClasses:{container:"",inputContainer:"",input:""}}}};const rf=["value","type","name","id","placeholder","autocomplete","disabled","readonly"];function af(t,e,n,r,i,l){const a=ue("ElementAddonOptions"),o=ue("ElementLabelFloating"),s=ue("ElementLoader");return d(),L(F(t.elementLayout),{ref:"container"},Ie({element:U(()=>[w("div",{class:f(t.classes.inputContainer)},[Ee(a,{options:t.addonOptions,placeholder:t.addonPlaceholder,onSelect:t.handleOptionSelect,onOpen:t.handleOpen,onClose:t.handleClose,ref:"options$"},null,8,["options","placeholder","onSelect","onOpen","onClose"]),t.hasFloating&&!t.empty?(d(),L(o,{key:0,visible:!t.empty},null,8,["visible"])):h("v-if",!0),t.isLoading?(d(),L(s,{key:1})):h("v-if",!0),w("input",q({value:t.model,type:t.inputType,name:t.name,id:t.fieldId,class:t.classes.input,placeholder:t.Placeholder,autocomplete:t.autocomplete,disabled:t.isDisabled,readonly:t.readonly},{...t.attrs,...t.aria},{onKeydown:e[0]||(e[0]=(...u)=>t.handleKeydown&&t.handleKeydown(...u)),onInput:e[1]||(e[1]=(...u)=>t.handleInput&&t.handleInput(...u)),onSelect:e[2]||(e[2]=(...u)=>t.handleInput&&t.handleInput(...u)),onBlur:e[3]||(e[3]=(...u)=>t.handleBlur&&t.handleBlur(...u)),ref:"input"}),null,16,rf)],2)]),_:2},[le(t.elementSlots,(u,c)=>({name:c,fn:U(()=>[D(t.$slots,c,{el$:t.el$},()=>[(d(),L(F(u),{el$:t.el$},null,8,["el$"]))])])}))]),1536)}Zi.render=af;Zi.__file="themes/blank/templates/elements/PhoneElement.vue";var wo={name:"PhoneElement",render:Zi.render,data(){return{merge:!0,defaultClasses:{container:"vf-text-type",inputContainer:"vf-input-group",inputContainer_sm:"vf-input-group-sm",inputContainer_md:"",inputContainer_lg:"vf-input-group-lg",inputContainer_default:"",inputContainer_disabled:"vf-input-group-disabled",inputContainer_focused:"vf-input-group-focused",inputContainer_success:"vf-input-group-success",inputContainer_danger:"vf-input-group-danger",input:"vf-input-field",input_sm:"",input_md:"",input_lg:"",input_enabled:"",input_disabled:"",input_focused:"",input_success:"",input_danger:"",optionWrapper:"",option:"vf-phone-option",option_active:"vf-phone-option-active",optionWrapper:"vf-phone-option-wrapper",flag:"vf-phone-flag",country:"vf-phone-country",number:"vf-phone-number",placeholder:"vf-phone-flag vf-phone-flag-placeholder",$option:t=>e=>[t.option,e?t.option_active:null],$inputContainer:(t,{isDisabled:e,Size:n,isSuccess:r,isDanger:i,focused:l})=>[t.inputContainer,t[`inputContainer_${n}`],e?t.inputContainer_disabled:null,!e&&!r&&!i?t.inputContainer_default:null,!e&&l?t.inputContainer_focused:null,!e&&r?t.inputContainer_success:null,!e&&i?t.inputContainer_danger:null],$input:(t,{isDisabled:e,Size:n,isSuccess:r,isDanger:i,focused:l})=>[t.input,t[`input_${n}`],e?t.input_disabled:null,!e&&!r&&!i&&!l?t.input_enabled:null,!e&&l&&!r&&!i?t.input_focused:null,!e&&i?t.input_danger:null,!e&&r?t.input_success:null]}}}},lf=`/* Some styles are contained in Vueform.vue */

.vf-phone-option {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.3125rem 0.75rem;
  white-space: nowrap;
}

.vf-phone-option-active {
  background: var(--vf-bg-selected);
}

.vf-phone-option-wrapper {
  display: flex;
  align-items: center;
}

.vf-phone-flag {
  background: no-repeat 0 0;
  background-image: url("data:image/png;base64,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");
  background-size: 24px 4716px;
  width: 24px;
  height: 16px;
  overflow: hidden;
}

.vf-phone-flag-placeholder {
  opacity: 0.6;
}

.vf-phone-country {
  margin-left: 0.75rem;
  font-weight: 600;
  font-size: 15px;
  display: flex;
}

.vf-phone-number {
  margin-left: 0.5rem;
  color: var(--vf-color-muted);
}

[dir=rtl] .vf-phone-country {
  margin-left: 0;
  margin-right: 0.75rem;
}

[dir=rtl] .vf-phone-number {
  margin-left: 0;
  margin-right: 0.5rem;
}`;G(lf);wo.__file="themes/vueform/templates/elements/PhoneElement.vue";var ea={name:"RadioElement",data(){return{merge:!0,defaultClasses:{container:"",wrapper:"",input:"",text:""}}}};const of=["value","name","id","disabled"],sf=["innerHTML"];function uf(t,e,n,r,i,l){return d(),L(F(t.elementLayout),{ref:"container"},Ie({element:U(()=>[w("label",{class:f(t.classes.wrapper)},[Fe(w("input",q({type:"radio","onUpdate:modelValue":e[0]||(e[0]=a=>t.value=a)},t.aria,{value:t.radioValue,class:t.classes.input,name:t.inputName,id:t.fieldId,disabled:t.isDisabled,ref:"input"}),null,16,of),[[br,t.value]]),h(" If label is HTML "),t.Text?(d(),v("span",{key:0,class:f(t.classes.text),innerHTML:t.Text},null,10,sf)):(d(),v(ee,{key:1},[h(" If label is slot "),w("span",{class:f(t.classes.text)},[D(t.$slots,"default",{el$:t.el$},()=>[(d(),L(F(t.fieldSlots.default),{el$:t.el$},null,8,["el$"]))])],2)],2112))],2)]),_:2},[le(t.elementSlots,(a,o)=>({name:o,fn:U(()=>[D(t.$slots,o,{el$:t.el$},()=>[(d(),L(F(a),{el$:t.el$},null,8,["el$"]))])])}))]),1536)}ea.render=uf;ea.__file="themes/blank/templates/elements/RadioElement.vue";var yo={name:"RadioElement",render:ea.render,data(){return{merge:!0,defaultClasses:{container:"",wrapper:"vf-radio-wrapper",wrapper_sm:"vf-radio-wrapper-sm",wrapper_md:"",wrapper_lg:"vf-radio-wrapper-lg",wrapper_left:"vf-radio-wrapper-left",wrapper_right:"vf-radio-wrapper-right",input:"vf-radio",input_enabled:"",input_disabled:"",input_danger:"vf-radio-danger",input_sm:"vf-radio-sm",input_md:"",input_lg:"vf-radio-lg",input_left:"vf-radio-left",input_right:"vf-radio-right",text:"vf-radio-text",text_left:"vf-radio-text-left",text_right:"vf-radio-text-right",$wrapper:(t,{Size:e,align:n})=>[t.wrapper,t[`wrapper_${e}`],n==="left"?t.wrapper_left:null,n==="right"?t.wrapper_right:null],$input:(t,{isDisabled:e,Size:n,isDanger:r,align:i})=>[t.input,t[`input_${n}`],e?t.input_disabled:t.input_enabled,!e&&r?t.input_danger:null,i==="left"?t.input_left:null,i==="right"?t.input_right:null],$text:(t,{align:e})=>[t.text,e==="left"?t.text_left:null,e==="right"?t.text_right:null]}}}},df="/* Some styles are contained in Vueform.vue */";G(df);yo.__file="themes/vueform/templates/elements/RadioElement.vue";var Gn={name:"RadiogroupElement",data(){return{merge:!0,defaultClasses:{container:"",wrapper:""}}}};const cf=["aria-labelledby"];function pf(t,e,n,r,i,l){const a=ue("RadiogroupRadio");return d(),L(F(t.elementLayout),{ref:"container"},Ie({element:U(()=>[w("div",{class:f(t.classes.wrapper),"aria-labelledby":t.labelId,role:"radiogroup"},[(d(!0),v(ee,null,le(t.resolvedOptions,(o,s,u)=>(d(),L(a,{items:t.resolvedOptions,index:s,item:o,value:o.value,key:u,attrs:t.aria},{default:U(c=>[D(t.$slots,"radio",q({ref_for:!0},c,{el$:t.el$}),()=>[(d(),L(F(t.fieldSlots.radio),q({ref_for:!0},c,{el$:t.el$}),null,16,["el$"]))])]),_:2},1032,["items","index","item","value","attrs"]))),128))],10,cf)]),_:2},[le(t.elementSlots,(o,s)=>({name:s,fn:U(()=>[D(t.$slots,s,{el$:t.el$},()=>[(d(),L(F(o),{el$:t.el$},null,8,["el$"]))])])}))]),1536)}Gn.render=pf;Gn.__file="themes/blank/templates/elements/RadiogroupElement.vue";var ko={name:"RadiogroupElement",render:Gn.render,data(){return{merge:!0,defaultClasses:{container:"",wrapper:"vf-radiogroup-wrapper",wrapper_sm:"vf-radiogroup-wrapper-sm",wrapper_md:"",wrapper_lg:"vf-radiogroup-wrapper-lg",$wrapper:(t,{Size:e})=>[t.wrapper,t[`wrapper_${e}`]]}}}},ff=`.vf-radiogroup-wrapper {
  cursor: pointer;
}

.vf-radiogroup-wrapper .vf-radio-container {
  padding-top: 0;
}`;G(ff);ko.__file="themes/vueform/templates/elements/RadiogroupElement.vue";var Co={name:"RadiogroupElement",render:Gn.render,data(){return{merge:!0,defaultClasses:{container:"",wrapper:"vf-radiogroup-tabs-wrapper",wrapper_sm:"vf-radiogroup-tabs-wrapper-sm",wrapper_md:"",wrapper_lg:"vf-radiogroup-tabs-wrapper-lg",$wrapper:(t,{Size:e})=>[t.wrapper,t[`wrapper_${e}`]]}}}},vf=`.vf-radiogroup-tabs-wrapper {
  display: grid;
  grid-auto-flow: column;
  box-shadow: var(--vf-shadow-input);
  border-radius: var(--vf-radius-large);
}

.vf-radiogroup-tabs-wrapper.vf-radiogroup-tabs-wrapper-sm {
  border-radius: var(--vf-radius-large-sm);
}

.vf-radiogroup-tabs-wrapper.vf-radiogroup-tabs-wrapper-lg {
  border-radius: var(--vf-radius-large-lg);
}`;G(vf);Co.__file="themes/vueform/templates/elements/RadiogroupElement_tabs.vue";var Ao={name:"RadiogroupElement",render:Gn.render,data(){return{merge:!0,defaultClasses:{container:"",wrapper:"vf-radiogroup-blocks-wrapper",wrapper_sm:"vf-radiogroup-blocks-wrapper-sm",wrapper_md:"",wrapper_lg:"vf-radiogroup-blocks-wrapper-lg",$wrapper:(t,{Size:e})=>[t.wrapper,t[`wrapper_${e}`]]}}}},gf=`.vf-radiogroup-blocks-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: var(--vf-shadow-input);
  border-radius: var(--vf-radius-large);
}

.vf-radiogroup-blocks-wrapper.vf-radiogroup-blocks-wrapper-sm {
  border-radius: var(--vf-radius-large-sm);
}

.vf-radiogroup-blocks-wrapper.vf-radiogroup-blocks-wrapper-lg {
  border-radius: var(--vf-radius-large-lg);
}`;G(gf);Ao.__file="themes/vueform/templates/elements/RadiogroupElement_blocks.vue";var ta={name:"SelectElement",components:{Multiselect:Qt},data(){return{merge:!0,defaultClasses:{container:"",input:"",inputWrapper:"",inputPlaceholder:"",inputCaret:"",select:{container:"",containerDisabled:"",containerOpen:"",containerOpenTop:"",containerActive:"",singleLabel:"",singleLabelText:"",search:"",placeholder:"",caret:"",caretOpen:"",clear:"",clearIcon:"",spinner:"",dropdown:"",dropdownTop:"",dropdownHidden:"",options:"",optionsTop:"",group:"",groupLabel:"",groupLabelPointable:"",groupLabelPointed:"",groupLabelSelected:"",groupLabelDisabled:"",groupLabelSelectedPointed:"",groupLabelSelectedDisabled:"",groupOptions:"",option:"",optionPointed:"",optionSelected:"",optionDisabled:"",optionSelectedPointed:"",optionSelectedDisabled:"",noOptions:"",noResults:"",fakeInput:"",spacer:""}}}}};const mf=["name","id","disabled"],hf=["value"];function bf(t,e,n,r,i,l){const a=ue("ElementLabelFloating"),o=ue("Multiselect");return d(),L(F(t.elementLayout),{ref:"container"},Ie({element:U(()=>[t.hasFloating&&!t.empty?(d(),L(a,{key:0,visible:!t.empty},null,8,["visible"])):h("v-if",!0),h(" Native select "),t.isNative?(d(),v("div",{key:1,class:f(t.classes.inputWrapper)},[Fe(w("select",q({"onUpdate:modelValue":e[0]||(e[0]=s=>t.value=s),class:t.classes.input,name:t.name,id:t.fieldId,disabled:t.isDisabled},{...t.attrs,...t.aria},{ref:"input"}),[(d(!0),v(ee,null,le(t.resolvedOptions,(s,u)=>(d(),v("option",{value:s.value,key:u},Ce(s.label),9,hf))),128))],16,mf),[[Al,t.value]]),t.placeholder&&t.empty&&!t.isDisabled&&t.type=="select"?(d(),v("span",{key:0,class:f(t.classes.inputPlaceholder)},Ce(t.placeholder),3)):h("v-if",!0),w("span",{class:f(t.classes.inputCaret)},null,2)],2)):(d(),v(ee,{key:2},[h(" @vueform/multiselect copmonent "),Ee(o,q(t.fieldOptions,{modelValue:t.value,"onUpdate:modelValue":e[1]||(e[1]=s=>t.value=s),classes:t.classes.select,id:t.fieldId,name:t.name,options:t.resolvedOptions,disabled:t.isDisabled,placeholder:t.Placeholder,attrs:t.attrs,aria:t.aria,locale:t.form$.locale$,onSelect:t.handleSelect,onDeselect:t.handleDeselect,onSearchChange:t.handleSearchChange,onTag:t.handleTag,onOpen:t.handleOpen,onClose:t.handleClose,onClear:t.handleClear,onPaste:t.handlePaste,ref:"input"}),Ie({_:2},[le({option:"option",noresults:"no-results",nooptions:"no-options",afterlist:"after-list",beforelist:"before-list",placeholder:"placeholder",grouplabel:"group-label",caret:"caret",clear:"clear",spinner:"spinner",default:"default"},(s,u)=>({name:u,fn:U(c=>[D(t.$slots,s,q(c,{el$:t.el$}),()=>[(d(),L(F(t.fieldSlots[s]),q(c,{el$:t.el$}),null,16,["el$"]))])])})),t.fieldOptions.mode=="single"?{name:"singlelabel",fn:U(({value:s})=>[D(t.$slots,"single-label",{value:s,el$:t.el$},()=>[(d(),L(F(t.fieldSlots["single-label"]),{value:s,el$:t.el$},null,8,["value","el$"]))])]),key:"0"}:void 0]),1040,["modelValue","classes","id","name","options","disabled","placeholder","attrs","aria","locale","onSelect","onDeselect","onSearchChange","onTag","onOpen","onClose","onClear","onPaste"])],2112))]),_:2},[le(t.elementSlots,(s,u)=>({name:u,fn:U(()=>[D(t.$slots,u,{el$:t.el$},()=>[(d(),L(F(s),{el$:t.el$},null,8,["el$"]))])])}))]),1536)}ta.render=bf;ta.__file="themes/blank/templates/elements/SelectElement.vue";var Eo={name:"SelectElement",render:ta.render,components:{Multiselect:Qt},data(){return{merge:!0,defaultClasses:{container:"vf-text-type",input:"vf-input vf-native-select",input_enabled:"",input_disabled:"",input_success:"vf-input-success",input_danger:"vf-input-danger",input_sm:"vf-input-sm",input_md:"",input_lg:"vf-input-lg",inputWrapper:"vf-native-select-wrapper",inputWrapper_sm:"vf-native-select-wrapper-sm",inputWrapper_md:"",inputWrapper_lg:"vf-native-select-wrapper-lg",inputPlaceholder:"vf-native-select-placeholder",inputPlaceholder_sm:"vf-native-select-placeholder-sm",inputPlaceholder_md:"",inputPlaceholder_lg:"vf-native-select-placeholder-lg",inputCaret:"vf-native-select-caret",inputCaret_sm:"vf-native-select-caret-sm",inputCaret_md:"",inputCaret_lg:"vf-native-select-caret-lg",select:{singleLabel:"vf-multiselect-single-label",singleLabel_sm:"vf-multiselect-single-label-sm",singleLabel_md:"",singleLabel_lg:"vf-multiselect-single-label-lg",singleLabel_noClear:"vf-multiselect-single-label-no-clear",singleLabel_noCaret:"vf-multiselect-single-label-no-caret",singleLabelText:"vf-multiselect-single-label-text",singleLabelText_truncate:"vf-multiselect-single-label-text-truncate",container:"vf-multiselect",container_enabled:"",container_disabled:"vf-multiselect-disabled",container_success:"vf-multiselect-success",container_danger:"vf-multiselect-danger",container_sm:"vf-multiselect-sm",container_md:"",container_lg:"vf-multiselect-lg",containerDisabled:"",containerOpen:"vf-multiselect-open",containerOpenTop:"vf-multiselect-open-top",containerActive:"vf-multiselect-active",containerActive_enabled:"",wrapper:"vf-multiselect-wrapper",wrapper_sm:"vf-multiselect-wrapper-sm",wrapper_md:"",wrapper_lg:"vf-multiselect-wrapper-lg",search:"vf-multiselect-search",search_sm:"vf-multiselect-search-sm",search_md:"",search_lg:"vf-multiselect-search-lg",placeholder:"vf-multiselect-placeholder",placeholder_sm:"vf-multiselect-placeholder-sm",placeholder_md:"",placeholder_lg:"vf-multiselect-placeholder-lg",caret:"vf-multiselect-caret",caret_sm:"vf-multiselect-caret-sm",caret_md:"",caret_lg:"vf-multiselect-caret-lg",caretOpen:"vf-multiselect-caret-open",clear:"vf-multiselect-clear",clear_sm:"vf-multiselect-clear-sm",clear_md:"",clear_lg:"vf-multiselect-clear-lg",clearIcon:"vf-multiselect-clear-icon",spinner:"vf-multiselect-spinner",spinner_sm:"vf-multiselect-spinner-sm",spinner_md:"",spinner_lg:"vf-multiselect-spinner-lg",infinite:"vf-multiselect-infinite",infinite_sm:"vf-multiselect-infinite-sm",infinite_md:"",infinite_lg:"vf-multiselect-infinite-lg",infiniteSpinner:"vf-multiselect-infinite-spinner",dropdown:"vf-multiselect-dropdown",dropdown_sm:"vf-multiselect-dropdown-sm",dropdown_md:"",dropdown_lg:"vf-multiselect-dropdown-lg",dropdownTop:"vf-multiselect-dropdown-top",dropdownTop_sm:"vf-multiselect-dropdown-top-sm",dropdownTop_md:"",dropdownTop_lg:"vf-multiselect-dropdown-top-lg",dropdownHidden:"vf-multiselect-dropdown-hidden",options:"vf-multiselect-options",optionsTop:"vf-multiselect-options-top",group:"vf-multiselect-group",groupLabel:"vf-multiselect-group-label",groupLabel_sm:"vf-multiselect-group-label-sm",groupLabel_md:"",groupLabel_lg:"vf-multiselect-group-label-lg",groupLabelPointable:"vf-multiselect-group-label-pointable",groupLabelPointed:"vf-multiselect-group-label-pointed",groupLabelSelected:"vf-multiselect-group-label-selected",groupLabelDisabled:"vf-multiselect-group-label-disabled",groupLabelSelectedPointed:"vf-multiselect-group-label-selected vf-multiselect-group-label-pointed",groupLabelSelectedDisabled:"vf-multiselect-group-label-selected vf-multiselect-group-label-disabled",groupOptions:"vf-multiselect-group-options",option:"vf-multiselect-option",option_sm:"vf-multiselect-option-sm",option_md:"",option_lg:"vf-multiselect-option-lg",optionPointed:"vf-multiselect-option-pointed",optionSelected:"vf-multiselect-option-selected",optionDisabled:"vf-multiselect-option-disabled",optionSelectedPointed:"vf-multiselect-option-selected vf-multiselect-option-pointed",optionSelectedDisabled:"vf-multiselect-option-selected vf-multiselect-option-disabled",noOptions:"vf-multiselect-no-options",noOptions_sm:"vf-multiselect-no-options-sm",noOptions_md:"",noOptions_lg:"vf-multiselect-no-options-lg",noResults:"vf-multiselect-no-results",noResults_sm:"vf-multiselect-no-results-sm",noResults_md:"",noResults_lg:"vf-multiselect-no-results-lg",fakeInput:"vf-multiselect-fake-input",assist:"vf-assistive-text",spacer:"vf-multiselect-spacer",spacer_sm:"vf-multiselect-spacer-sm",spacer_md:"",spacer_lg:"vf-multiselect-spacer-lg",$container:(t,{Size:e,isDanger:n,isSuccess:r,isDisabled:i})=>[t.select.container,t.select[`container_${e}`],i?t.select.container_disabled:null,!i&&!r&&!n?t.select.container_enabled:null,!i&&n?t.select.container_danger:null,!i&&r?t.select.container_success:null],$containerActive:(t,{Size:e,isDanger:n,isSuccess:r,isDisabled:i})=>[t.select.containerActive,t.select[`container_${e}`],!i&&!r&&!n?t.select.containerActive_enabled:null],$wrapper:(t,{Size:e})=>[t.select.wrapper,t.select[`wrapper_${e}`]],$search:(t,{Size:e})=>[t.select.search,t.select[`search_${e}`]],$placeholder:(t,{Size:e})=>[t.select.placeholder,t.select[`placeholder_${e}`]],$caret:(t,{Size:e})=>[t.select.caret,t.select[`caret_${e}`]],$clear:(t,{Size:e})=>[t.select.clear,t.select[`clear_${e}`]],$spinner:(t,{Size:e})=>[t.select.spinner,t.select[`spinner_${e}`]],$infinite:(t,{Size:e})=>[t.select.infinite,t.select[`infinite_${e}`]],$dropdown:(t,{Size:e})=>[t.select.dropdown,t.select[`dropdown_${e}`]],$dropdownTop:(t,{Size:e})=>[t.select.dropdownTop,t.select[`dropdownTop_${e}`]],$groupLabel:(t,{Size:e})=>[t.select.groupLabel,t.select[`groupLabel_${e}`]],$option:(t,{Size:e})=>[t.select.option,t.select[`option_${e}`]],$spacer:(t,{Size:e})=>[t.select.spacer,t.select[`spacer_${e}`]],$noOptions:(t,{Size:e})=>[t.select.noOptions,t.select[`noOptions_${e}`]],$noResults:(t,{Size:e})=>[t.select.noResults,t.select[`noResults_${e}`]],$singleLabel:(t,{Size:e,canClear:n,caret:r})=>[t.select.singleLabel,t.select[`singleLabel_${e}`],n?null:t.select.singleLabel_noClear,r?null:t.select.singleLabel_noCaret],$singleLabelText:(t,{truncate:e})=>[t.select.singleLabelText,e?t.select.singleLabelText_truncate:null]},$input:(t,{isDisabled:e,Size:n,isDanger:r,isSuccess:i,caret:l})=>[t.input,t[`input_${n}`],e?t.input_disabled:null,!e&&!i&&!r?t.input_enabled:null,!e&&r?t.input_danger:null,!e&&i?t.input_success:null],$inputWrapper:(t,{Size:e})=>[t.inputWrapper,t[`inputWrapper_${e}`]],$inputPlaceholder:(t,{Size:e})=>[t.inputPlaceholder,t[`inputPlaceholder_${e}`]],$inputCaret:(t,{Size:e})=>[t.inputCaret,t[`inputCaret_${e}`]]}}}},wf=`.vf-native-select {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}

.vf-native-select::-webkit-search-decoration, .vf-native-select::-webkit-search-cancel-button, .vf-native-select::-webkit-search-results-button, .vf-native-select::-webkit-search-results-decoration {
  -webkit-appearance: none;
}

.vf-input.vf-native-select {
  padding-right: calc(var(--vf-px-input) * 2);
}

.vf-input-sm.vf-native-select {
  padding-right: calc(var(--vf-px-input-sm) * 2);
}

.vf-input-lg.vf-native-select {
  padding-right: calc(var(--vf-px-input-lg) * 2);
}

.vf-native-select-wrapper {
  position: relative;
}

.vf-native-select-wrapper.vf-native-select-wrapper-sm:before {
  width: var(--vf-min-height-input-sm);
  height: var(--vf-min-height-input-sm);
}

.vf-native-select-wrapper.vf-native-select-wrapper-lg:before {
  width: var(--vf-min-height-input-lg);
  height: var(--vf-min-height-input-lg);
}

.vf-native-select-placeholder {
  position: absolute;
  top: 0;
  left: var(--vf-px-input);
  bottom: 0;
  display: flex;
  align-items: center;
  margin-left: 1px;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  color: var(--vf-color-placeholder);
  cursor: default;
  pointer-events: none;
}

.vf-native-select-placeholder.vf-native-select-placeholder-sm {
  left: var(--vf-px-input-sm);
}

.vf-native-select-placeholder.vf-native-select-placeholder-lg {
  left: var(--vf-px-input-lg);
}

.vf-native-select-caret {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'%3E%3C/path%3E%3C/svg%3E");
  mask-position: center center;
  -webkit-mask-position: center center;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: var(--vf-bg-icon);
  position: absolute;
  right: 0;
  top: 50%;
  width: 0.625rem;
  height: 1rem;
  padding: 1px 0;
  box-sizing: content-box;
  display: inline-block;
  pointer-events: none;
  transform: translateY(-50%);
  transition: transform 150ms ease-in-out;
  margin-right: var(--vf-px-input);
}

.vf-native-select-caret.vf-native-select-caret-sm {
  margin-right: var(--vf-px-input-sm);
}

.vf-native-select-caret.vf-native-select-caret-lg {
  margin-right: var(--vf-px-input-lg);
}

/* @vueform/multiselect styles */

.vf-multiselect {
  position: relative;
  display: flex;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  cursor: pointer;
  outline: 0px solid var(--vf-ring-color);
  outline-offset: 0;
  transition: box-shadow 0.2s ease-in-out, color 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
  background-color: var(--vf-bg-input);
  color: var(--vf-color-input);
  border-color: var(--vf-border-color-input);
  box-shadow: var(--vf-shadow-input);
  min-height: var(--vf-min-height-input);
  border-radius: var(--vf-radius-input);
  border-width: var(--vf-border-width-input-t) var(--vf-border-width-input-r) var(--vf-border-width-input-b) var(--vf-border-width-input-l);
  border-style: solid;
}

.vf-multiselect.vf-multiselect-open {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-multiselect.vf-multiselect-open-top {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.vf-multiselect.vf-multiselect-disabled {
  cursor: default;
  background-color: var(--vf-bg-disabled);
  color: var(--vf-color-disabled);
  pointer-events: none;
}

.vf-multiselect.vf-multiselect-success {
  background-color: var(--vf-bg-input-success);
  color: var(--vf-color-input-success);
  border-color: var(--vf-border-color-input-success);
}

.vf-multiselect.vf-multiselect-danger {
  background-color: var(--vf-bg-input-danger);
  color: var(--vf-color-input-danger);
  border-color: var(--vf-border-color-input-danger);
}

.vf-multiselect:hover {
  box-shadow: var(--vf-shadow-input-hover);
}

.vf-multiselect:hover:not(.vf-multiselect-success):not(.vf-multiselect-danger) {
  background-color: var(--vf-bg-input-hover);
  color: var(--vf-color-input-hover);
  border-color: var(--vf-border-color-input-hover);
}

.vf-multiselect.vf-multiselect-active {
  box-shadow: var(--vf-shadow-input-focus);
  outline: var(--vf-ring-width) solid var(--vf-ring-color);
}

.vf-multiselect.vf-multiselect-active:not(.vf-multiselect-success):not(.vf-multiselect-danger) {
  border-color: var(--vf-border-color-input-focus);
  background-color: var(--vf-bg-input-focus);
  color: var(--vf-color-input-focus);
}

.vf-multiselect.vf-multiselect-sm {
  min-height: var(--vf-min-height-input-sm);
  border-radius: var(--vf-radius-input-sm);
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-sm);
}

.vf-multiselect.vf-multiselect-lg {
  min-height: var(--vf-min-height-input-lg);
  border-radius: var(--vf-radius-input-lg);
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
}

.vf-multiselect-wrapper {
  position: relative;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  cursor: pointer;
  outline: none;
  min-height: calc(var(--vf-min-height-input) - var(--vf-border-width-input-t) - var(--vf-border-width-input-b));
}

.vf-multiselect-wrapper.vf-multiselect-wrapper-sm {
  min-height: calc(var(--vf-min-height-input-sm) - var(--vf-border-width-input-t) - var(--vf-border-width-input-b));
}

.vf-multiselect-wrapper.vf-multiselect-wrapper-lg {
  min-height: calc(var(--vf-min-height-input-lg) - var(--vf-border-width-input-t) - var(--vf-border-width-input-b));
}

.vf-multiselect-single-label,
.vf-multiselect-placeholder {
  display: flex;
  align-items: center;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
  background: transparent;
  box-sizing: border-box;
  max-width: 100%;
  padding-left: var(--vf-px-input);
  padding-right: calc(var(--vf-px-input) * 2.5 + 20px);
}

.vf-multiselect-single-label.vf-multiselect-single-label-no-caret, .vf-multiselect-single-label.vf-multiselect-single-label-no-clear {
  padding-right: calc(var(--vf-px-input) * 1.5 + 10px);
}

.vf-multiselect-single-label.vf-multiselect-single-label-no-caret.vf-multiselect-single-label-no-clear {
  padding-right: var(--vf-px-input);
}

.vf-multiselect-single-label.vf-multiselect-single-label-sm {
  padding-left: var(--vf-px-input-sm);
  padding-right: calc(var(--vf-px-input-sm) * 2.5 + 20px);
}

.vf-multiselect-single-label.vf-multiselect-single-label-sm.vf-multiselect-single-label-no-caret, .vf-multiselect-single-label.vf-multiselect-single-label-sm.vf-multiselect-single-label-no-clear {
  padding-right: calc(var(--vf-px-input-sm) * 1.5 + 10px);
}

.vf-multiselect-single-label.vf-multiselect-single-label-sm.vf-multiselect-single-label-no-caret.vf-multiselect-single-label-no-clear {
  padding-right: var(--vf-px-input-sm);
}

.vf-multiselect-single-label.vf-multiselect-single-label-lg {
  padding-left: var(--vf-px-input-lg);
  padding-right: calc(var(--vf-px-input-lg) * 2.5 + 20px);
}

.vf-multiselect-single-label.vf-multiselect-single-label-lg.vf-multiselect-single-label-no-caret, .vf-multiselect-single-label.vf-multiselect-single-label-lg.vf-multiselect-single-label-no-clear {
  padding-right: calc(var(--vf-px-input-lg) * 1.5 + 10px);
}

.vf-multiselect-single-label.vf-multiselect-single-label-lg.vf-multiselect-single-label-no-caret.vf-multiselect-single-label-no-clear {
  padding-right: var(--vf-px-input-lg);
}

.vf-floating-wrapper ~ .vf-multiselect-single-label,
.vf-floating-wrapper ~ div .vf-multiselect-single-label {
  padding-top: calc(var(--vf-py-input) + var(--vf-floating-top) / 2);
  padding-bottom: calc(var(--vf-py-input) - var(--vf-floating-top) / 2);
}

.vf-floating-wrapper ~ .vf-multiselect-single-label-sm,
.vf-floating-wrapper ~ div .vf-multiselect-single-label-sm {
  padding-top: calc(var(--vf-py-input-sm) + var(--vf-floating-top-sm) / 2);
  padding-bottom: calc(var(--vf-py-input-sm) - var(--vf-floating-top-sm) / 2);
}

.vf-floating-wrapper ~ .vf-multiselect-single-label-lg,
.vf-floating-wrapper ~ div .vf-multiselect-single-label-lg {
  padding-top: calc(var(--vf-py-input-lg) + var(--vf-floating-top-lg) / 2);
  padding-bottom: calc(var(--vf-py-input-lg) - var(--vf-floating-top-lg) / 2);
}

.vf-multiselect-placeholder {
  color: var(--vf-color-placeholder);
}

.vf-multiselect-placeholder.vf-multiselect-placeholder-sm {
  padding-left: var(--vf-px-input-sm);
  padding-right: calc(var(--vf-px-input-sm) * 2.5 + 20px);
}

.vf-multiselect-placeholder.vf-multiselect-placeholder-lg {
  padding-left: var(--vf-px-input-lg);
  padding-right: calc(var(--vf-px-input-lg) * 2.5 + 20px);
}

.vf-multiselect-single-label-text {
  overflow: hidden;
  display: block;
  white-space: nowrap;
  max-width: 100%;
}

.vf-multiselect-single-label-text-truncate {
  text-overflow: ellipsis;
}

.vf-multiselect-search {
  width: 100%;
  height: 100%; /* for FF */
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  outline: none;
  box-sizing: border-box;
  border: 0;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  font-family: inherit;
  background: transparent;
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
  border-radius: var(--vf-radius-input);
  padding-left: var(--vf-px-input);
  padding-right: calc(var(--vf-px-input) * 2.5 + 20px);
  color: var(--vf-color-input);
}

.vf-multiselect-search::-webkit-search-decoration, .vf-multiselect-search::-webkit-search-cancel-button, .vf-multiselect-search::-webkit-search-results-button, .vf-multiselect-search::-webkit-search-results-decoration {
  -webkit-appearance: none;
}

.vf-multiselect-search.vf-multiselect-search-sm {
  border-radius: var(--vf-radius-input-sm);
  padding-left: var(--vf-px-input-sm);
  padding-right: calc(var(--vf-px-input-sm) * 2.5 + 20px);
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-sm);
}

.vf-multiselect-search.vf-multiselect-search-lg {
  border-radius: var(--vf-radius-input-lg);
  padding-left: var(--vf-px-input-lg);
  padding-right: calc(var(--vf-px-input-lg) * 2.5 + 20px);
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
}

.vf-floating-wrapper ~ .vf-multiselect-search-lg,
.vf-floating-wrapper ~ div .vf-multiselect-search-lg,
.vf-floating-wrapper ~ span .vf-multiselect-search-lg {
  padding-left: var(--vf-px-input-lg);
  padding-right: var(--vf-px-input-lg);
  padding-top: calc(var(--vf-py-input-lg) + var(--vf-floating-top-lg) / 2);
  padding-bottom: calc(var(--vf-py-input-lg) - var(--vf-floating-top-lg) / 2);
}

.vf-multiselect-spinner {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'%3E%3C/path%3E%3C/svg%3E");
  mask-position: center;
  -webkit-mask-position: center;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-size: contain;
  -webkit-mask-size: contain;
  background-color: var(--vf-primary);
  width: 1rem;
  height: 1rem;
  margin: 0 var(--vf-px-input) 0 0;
  animation: multiselect-spin 1s linear infinite;
  flex-shrink: 0;
  flex-grow: 0;
}

.vf-multiselect-spinner.vf-multiselect-spinner-sm {
  margin: 0 var(--vf-px-input-sm) 0 0;
}

.vf-multiselect-spinner.vf-multiselect-spinner-lg {
  margin: 0 var(--vf-px-input-lg) 0 0;
}

.vf-multiselect-inifite {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: var(--vf-min-height-input);
}

.vf-multiselect-inifite.vf-multiselect-inifite-sm {
  height: var(--vf-min-height-input-sm);
}

.vf-multiselect-inifite.vf-multiselect-inifite-lg {
  height: var(--vf-min-height-input-lg);
}

.vf-multiselect-inifite-spinner {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'%3E%3C/path%3E%3C/svg%3E");
  mask-position: center;
  -webkit-mask-position: center;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-size: contain;
  -webkit-mask-size: contain;
  background-color: var(--vf-primary);
  width: 1rem;
  height: 1rem;
  animation: multiselect-spin 1s linear infinite;
  flex-shrink: 0;
  flex-grow: 0;
}

.vf-multiselect-clear {
  margin: 0 var(--vf-px-input) 0 0px;
  position: relative;
  opacity: 1;
  transition: 0.3s;
  flex-shrink: 0;
  flex-grow: 0;
  display: flex;
}

.vf-multiselect-clear:hover .vf-multiselect-clear-icon {
  opacity: 1;
}

.vf-multiselect-clear.vf-multiselect-clear-sm {
  margin: 0 var(--vf-px-input-sm) 0 0px;
}

.vf-multiselect-clear.vf-multiselect-clear-lg {
  margin: 0 var(--vf-px-input-lg) 0 0px;
}

.vf-multiselect-clear-icon {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  mask-position: center;
  -webkit-mask-position: center;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-size: contain;
  -webkit-mask-size: contain;
  background-color: var(--vf-bg-icon);
  width: 0.625rem;
  height: 1.125rem;
  display: inline-block;
  transition: 0.3s;
  opacity: 0.5;
}

.vf-multiselect-caret {
  transform: rotate(0deg);
  transition: 0.3s transform;
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'%3E%3C/path%3E%3C/svg%3E");
  mask-position: center;
  -webkit-mask-position: center;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-size: contain;
  -webkit-mask-size: contain;
  background-color: var(--vf-bg-icon);
  width: 0.625rem;
  height: 1.125rem;
  margin: 0 var(--vf-px-input) 0 0;
  position: relative;
  flex-shrink: 0;
  flex-grow: 0;
  pointer-events: none;
}

.vf-multiselect-caret.vf-multiselect-caret-open {
  transform: rotate(180deg);
  pointer-events: auto;
}

.vf-multiselect-caret.vf-multiselect-caret-sm {
  margin: 0 var(--vf-px-input-sm) 0 0;
}

.vf-multiselect-caret.vf-multiselect-caret-lg {
  margin: 0 var(--vf-px-input-lg) 0 0;
}

.vf-multiselect-dropdown {
  position: absolute;
  left: calc(var(--vf-border-width-input-l) * -1);
  right: calc(var(--vf-border-width-input-r) * -1);
  bottom: 0;
  transform: translateY(100%);
  border-width: var(--vf-border-width-dropdown);
  border-style: solid;
  border-color: var(--vf-border-color-input);
  margin-top: calc(var(--vf-border-width-input-t) * -1);
  max-height: 15rem;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  z-index: 999;
  background: var(--vf-bg-input);
  display: flex;
  flex-direction: column;
  border-radius: var(--vf-radius-input);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  outline: none;
  box-shadow: var(--vf-shadow-dropdown);
}

.vf-multiselect-dropdown.vf-multiselect-dropdown-top {
  transform: translateY(-100%);
  top: 0;
  margin-top: 0;
  bottom: auto;
  border-radius: var(--vf-radius-input);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-multiselect-dropdown.vf-multiselect-dropdown-hidden {
  display: none;
}

v .vf-multiselect-dropdown.vf-multiselect-dropdown-sm {
  border-radius: var(--vf-radius-input-sm);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

v .vf-multiselect-dropdown.vf-multiselect-dropdown-sm.vf-multiselect-dropdown-top-sm {
  border-radius: var(--vf-radius-input-sm);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-multiselect-dropdown.vf-multiselect-dropdown-lg {
  border-radius: var(--vf-radius-input-lg);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.vf-multiselect-dropdown.vf-multiselect-dropdown-lg.vf-multiselect-dropdown-top-lg {
  border-radius: var(--vf-radius-input-lg);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-multiselect-options {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  color: var(--vf-color-input);
}

.vf-multiselect-group {
  padding: 0;
  margin: 0;
}

.vf-multiselect-group-label {
  font-weight: 600;
  color: #374151;
  cursor: default;
  display: flex;
  box-sizing: border-box;
  text-decoration: none;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  font-size: var(--vf-font-size-small);
  line-height: var(--vf-line-height-small);
  letter-spacing: var(--vf-letter-spacing-small);
  padding: calc(var(--vf-py-input) * 0.5) var(--vf-px-input);
  color: var(--vf-color-input);
  background: var(--vf-bg-selected);
  filter: brightness(0.9);
}

.vf-multiselect-group-label.vf-multiselect-group-label-pointable {
  cursor: pointer;
}

.vf-multiselect-group-label.vf-multiselect-group-label-pointed {
  filter: brightness(0.95);
}

.vf-multiselect-group-label.vf-multiselect-group-label-selected {
  background: var(--vf-primary-darker);
  color: var(--vf-color-on-primary);
  filter: brightness(1);
}

.vf-multiselect-group-label.vf-multiselect-group-label-disabled {
  background: var(--vf-bg-disabled);
  color: var(--vf-color-disabled);
  cursor: not-allowed;
}

.vf-multiselect-group-label.vf-multiselect-group-label-selected.vf-multiselect-group-label-pointed {
  opacity: 0.9;
}

.vf-multiselect-group-label.vf-multiselect-group-label-selected.vf-multiselect-group-label-disabled {
  opacity: 0.5;
}

.vf-multiselect-group-label.vf-multiselect-group-label-sm {
  font-size: var(--vf-font-size-small-sm);
  line-height: var(--vf-line-height-small-sm);
  letter-spacing: var(--vf-letter-spacing-small-sm);
  padding: calc(var(--vf-py-input-sm) * 0.5) var(--vf-px-input-sm);
}

.vf-multiselect-group-label.vf-multiselect-group-label-lg {
  font-size: var(--vf-font-size-small-lg);
  line-height: var(--vf-line-height-small-lg);
  letter-spacing: var(--vf-letter-spacing-small-lg);
  padding: calc(var(--vf-py-input-lg) * 0.5) var(--vf-px-input-lg);
}

.vf-multiselect-group-options {
  padding: 0;
  margin: 0;
}

.vf-multiselect-option {
  padding: calc(var(--vf-py-input) + var(--vf-border-width-input-t)) var(--vf-px-input) calc(var(--vf-py-input) + var(--vf-border-width-input-t));
  cursor: pointer;
  display: flex;
  box-sizing: border-box;
  text-decoration: none;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
}

.vf-multiselect-option.vf-multiselect-option-pointed {
  background: var(--vf-bg-selected);
  color: var(--vf-color-input);
}

.vf-multiselect-option.vf-multiselect-option-selected {
  background: var(--vf-primary);
  color: var(--vf-color-on-primary);
}

.vf-multiselect-option.vf-multiselect-option-disabled {
  background: var(--vf-bg-disabled);
  color: var(--vf-color-disabled);
  cursor: not-allowed;
}

.vf-multiselect-option.vf-multiselect-option-selected.vf-multiselect-option-pointed {
  opacity: 0.9;
}

.vf-multiselect-option.vf-multiselect-option-selected.vf-multiselect-option-disabled {
  opacity: 0.5;
}

.vf-multiselect-option.vf-multiselect-option-sm {
  padding: calc(var(--vf-py-input-sm) + var(--vf-border-width-input-t)) var(--vf-px-input-sm) calc(var(--vf-py-input-sm) + var(--vf-border-width-input-t));
}

.vf-multiselect-option.vf-multiselect-option-lg {
  padding: calc(var(--vf-py-input-lg) + var(--vf-border-width-input-t)) var(--vf-px-input-lg) calc(var(--vf-py-input-lg) + var(--vf-border-width-input-t));
}

.vf-multiselect-no-options,
.vf-multiselect-no-results {
  padding: var(--vf-py-input) var(--vf-px-input);
  color: var(--vf-color-muted);
}

.vf-multiselect-no-options.vf-multiselect-no-options-sm {
  padding: var(--vf-py-input-sm) var(--vf-px-input-sm);
}

.vf-multiselect-no-options.vf-multiselect-no-options-lg {
  padding: var(--vf-py-input-lg) var(--vf-px-input-lg);
}

.vf-multiselect-no-results.vf-multiselect-no-results-sm {
  padding: var(--vf-py-input-sm) var(--vf-px-input-sm);
}

.vf-multiselect-no-results.vf-multiselect-no-results-lg {
  padding: var(--vf-py-input-lg) var(--vf-px-input-lg);
}

.vf-multiselect-fake-input {
  background: transparent;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  width: 100%;
  height: 1px;
  border: 0;
  padding: 0;
  font-size: 0;
  outline: none;
}

.vf-multiselect-fake-input:active, .vf-multiselect-fake-input:focus {
  outline: none;
}

.vf-multiselect-spacer {
  display: none;
}

[dir=rtl] .vf-input.vf-native-select {
  padding-right: var(--vf-px-input);
  padding-left: calc(var(--vf-px-input) * 2);
}

[dir=rtl] .vf-input-sm.vf-native-select {
  padding-right: var(--vf-px-input);
  padding-left: calc(var(--vf-px-input-sm) * 2);
}

[dir=rtl] .vf-input-lg.vf-native-select {
  padding-right: var(--vf-px-input);
  padding-left: calc(var(--vf-px-input-lg) * 2);
}

[dir=rtl] .vf-native-select-placeholder {
  left: auto;
  right: var(--vf-px-input);
}

[dir=rtl] .vf-native-select-caret {
  right: auto;
  left: 0;
  margin-right: 0;
  margin-left: var(--vf-px-input);
}

[dir=rtl] .vf-native-select-caret.vf-native-select-caret-sm {
  margin-right: 0;
  margin-left: var(--vf-px-input-sm);
}

[dir=rtl] .vf-native-select-caret.vf-native-select-caret-lg {
  margin-right: 0;
  margin-left: var(--vf-px-input-lg);
}

[dir=rtl] .vf-multiselect-single-label {
  padding-left: calc(var(--vf-px-input) * 4);
  padding-right: var(--vf-px-input);
  left: auto;
  right: 0;
}

[dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-no-caret, [dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-no-clear {
  padding-left: calc(var(--vf-px-input) * 2);
  padding-right: var(--vf-px-input);
}

[dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-no-caret.vf-multiselect-single-label-no-clear {
  padding-left: var(--vf-px-input);
  padding-right: var(--vf-px-input);
}

[dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-sm {
  padding-left: calc(var(--vf-px-input-sm) * 4);
  padding-right: var(--vf-px-input-sm);
}

[dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-sm.vf-multiselect-single-label-no-caret, [dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-sm.vf-multiselect-single-label-no-clear {
  padding-left: calc(var(--vf-px-input-sm) * 2);
  padding-right: var(--vf-px-input-sm);
}

[dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-sm.vf-multiselect-single-label-no-caret.vf-multiselect-single-label-no-clear {
  padding-left: var(--vf-px-input-sm);
  padding-right: var(--vf-px-input-sm);
}

[dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-lg {
  padding-left: calc(var(--vf-px-input-lg) * 4);
  padding-right: var(--vf-px-input-lg);
}

[dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-lg.vf-multiselect-single-label-no-caret, [dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-lg.vf-multiselect-single-label-no-clear {
  padding-left: calc(var(--vf-px-input-lg) * 2);
  padding-right: var(--vf-px-input-lg);
}

[dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-lg.vf-multiselect-single-label-no-caret.vf-multiselect-single-label-no-clear {
  padding-left: var(--vf-px-input-lg);
  padding-right: var(--vf-px-input-lg);
}

[dir=rtl] .vf-multiselect-placeholder {
  padding-left: var(--vf-min-height-input);
  padding-right: var(--vf-px-input);
  left: auto;
  right: 0;
}

[dir=rtl] .vf-multiselect-placeholder.vf-multiselect-placeholder-sm {
  padding-left: calc(1.25rem + var(--vf-px-input-sm) * 3);
  padding-right: var(--vf-px-input-sm);
}

[dir=rtl] .vf-multiselect-placeholder.vf-multiselect-placeholder-lg {
  padding-left: calc(1.25rem + var(--vf-px-input-lg) * 3);
  padding-right: var(--vf-px-input-lg);
}

[dir=rtl] .vf-multiselect-search {
  padding-left: 0;
  padding-right: var(--vf-px-input);
}

[dir=rtl] .vf-multiselect-search.vf-multiselect-search-sm {
  padding-left: 0;
  padding-right: var(--vf-px-input-sm);
}

[dir=rtl] .vf-multiselect-search.vf-multiselect-search-lg {
  padding-left: 0;
  padding-right: var(--vf-px-input-lg);
}

[dir=rtl] .vf-multiselect-spinner {
  margin: 0 0 0 var(--vf-px-input);
}

[dir=rtl] .vf-multiselect-caret {
  margin: 0 0 0 var(--vf-px-input);
}

[dir=rtl] .vf-multiselect-clear {
  padding: 0 0 0 var(--vf-px-input);
}

@keyframes multiselect-spin {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}`;G(wf);Eo.__file="themes/vueform/templates/elements/SelectElement.vue";function lr(t){return[null,void 0,!1].indexOf(t)!==-1}function yf(t,e,n){const{value:r,modelValue:i,min:l}=Pe(t);let a=i&&i.value!==void 0?i:r;const o=Le(a.value);if(lr(a.value)&&(a=Le(l.value)),Array.isArray(a.value)&&a.value.length==0)throw new Error("Slider v-model must not be an empty array");return{value:a,initialValue:o}}function kf(t,e,n){const{classes:r,showTooltip:i,tooltipPosition:l,orientation:a}=Pe(t),o=K(()=>({target:"slider-target",focused:"slider-focused",tooltipFocus:"slider-tooltip-focus",tooltipDrag:"slider-tooltip-drag",ltr:"slider-ltr",rtl:"slider-rtl",horizontal:"slider-horizontal",vertical:"slider-vertical",textDirectionRtl:"slider-txt-dir-rtl",textDirectionLtr:"slider-txt-dir-ltr",base:"slider-base",connects:"slider-connects",connect:"slider-connect",origin:"slider-origin",handle:"slider-handle",handleLower:"slider-handle-lower",handleUpper:"slider-handle-upper",touchArea:"slider-touch-area",tooltip:"slider-tooltip",tooltipTop:"slider-tooltip-top",tooltipBottom:"slider-tooltip-bottom",tooltipLeft:"slider-tooltip-left",tooltipRight:"slider-tooltip-right",tooltipHidden:"slider-tooltip-hidden",active:"slider-active",draggable:"slider-draggable",tap:"slider-state-tap",drag:"slider-state-drag",pips:"slider-pips",pipsHorizontal:"slider-pips-horizontal",pipsVertical:"slider-pips-vertical",marker:"slider-marker",markerHorizontal:"slider-marker-horizontal",markerVertical:"slider-marker-vertical",markerNormal:"slider-marker-normal",markerLarge:"slider-marker-large",markerSub:"slider-marker-sub",value:"slider-value",valueHorizontal:"slider-value-horizontal",valueVertical:"slider-value-vertical",valueNormal:"slider-value-normal",valueLarge:"slider-value-large",valueSub:"slider-value-sub",...r.value}));return{classList:K(()=>{const u={...o.value};return Object.keys(u).forEach(c=>{u[c]=Array.isArray(u[c])?u[c].filter(A=>A!==null).join(" "):u[c]}),i.value!=="always"&&(u.target+=` ${i.value==="drag"?u.tooltipDrag:u.tooltipFocus}`),a.value==="horizontal"&&(u.tooltip+=l.value==="bottom"?` ${u.tooltipBottom}`:` ${u.tooltipTop}`),a.value==="vertical"&&(u.tooltip+=l.value==="right"?` ${u.tooltipRight}`:` ${u.tooltipLeft}`),u})}}var Lo={exports:{}};(function(t,e){(function(n){t.exports=n()})(function(){var n=["decimals","thousand","mark","prefix","suffix","encoder","decoder","negativeBefore","negative","edit","undo"];function r(y){return y.split("").reverse().join("")}function i(y,C){return y.substring(0,C.length)===C}function l(y,C){return y.slice(-1*C.length)===C}function a(y,C,S){if((y[C]||y[S])&&y[C]===y[S])throw new Error(C)}function o(y){return typeof y=="number"&&isFinite(y)}function s(y,C){return y=y.toString().split("e"),y=Math.round(+(y[0]+"e"+(y[1]?+y[1]+C:C))),y=y.toString().split("e"),(+(y[0]+"e"+(y[1]?+y[1]-C:-C))).toFixed(C)}function u(y,C,S,B,M,E,$,Q,R,_,Y,I){var Z=I,X,V,W,fe="",ie="";return E&&(I=E(I)),o(I)?(y!==!1&&parseFloat(I.toFixed(y))===0&&(I=0),I<0&&(X=!0,I=Math.abs(I)),y!==!1&&(I=s(I,y)),I=I.toString(),I.indexOf(".")!==-1?(V=I.split("."),W=V[0],S&&(fe=S+V[1])):W=I,C&&(W=r(W).match(/.{1,3}/g),W=r(W.join(r(C)))),X&&Q&&(ie+=Q),B&&(ie+=B),X&&R&&(ie+=R),ie+=W,ie+=fe,M&&(ie+=M),_&&(ie=_(ie,Z)),ie):!1}function c(y,C,S,B,M,E,$,Q,R,_,Y,I){var Z,X="";return Y&&(I=Y(I)),!I||typeof I!="string"||(Q&&i(I,Q)&&(I=I.replace(Q,""),Z=!0),B&&i(I,B)&&(I=I.replace(B,"")),R&&i(I,R)&&(I=I.replace(R,""),Z=!0),M&&l(I,M)&&(I=I.slice(0,-1*M.length)),C&&(I=I.split(C).join("")),S&&(I=I.replace(S,".")),Z&&(X+="-"),X+=I,X=X.replace(/[^0-9\.\-.]/g,""),X==="")||(X=Number(X),$&&(X=$(X)),!o(X))?!1:X}function A(y){var C,S,B,M={};for(y.suffix===void 0&&(y.suffix=y.postfix),C=0;C<n.length;C+=1)if(S=n[C],B=y[S],B===void 0)S==="negative"&&!M.negativeBefore?M[S]="-":S==="mark"&&M.thousand!=="."?M[S]=".":M[S]=!1;else if(S==="decimals")if(B>=0&&B<8)M[S]=B;else throw new Error(S);else if(S==="encoder"||S==="decoder"||S==="edit"||S==="undo")if(typeof B=="function")M[S]=B;else throw new Error(S);else if(typeof B=="string")M[S]=B;else throw new Error(S);return a(M,"mark","thousand"),a(M,"prefix","negative"),a(M,"prefix","negativeBefore"),M}function k(y,C,S){var B,M=[];for(B=0;B<n.length;B+=1)M.push(y[n[B]]);return M.push(S),C.apply("",M)}function x(y){if(!(this instanceof x))return new x(y);typeof y=="object"&&(y=A(y),this.to=function(C){return k(y,u,C)},this.from=function(C){return k(y,c,C)})}return x})})(Lo);var Ua=Lo.exports;function Cf(t,e,n){const{format:r,step:i}=Pe(t),l=n.value,a=n.classList,o=K(()=>!r||!r.value?Ua({decimals:i.value>=0?0:2}):typeof r.value=="function"?{to:r.value}:Ua({...r.value})),s=K(()=>Array.isArray(l.value)?l.value.map(c=>o.value):o.value);return{tooltipFormat:o,tooltipsFormat:s,tooltipsMerge:(c,A,k)=>{var x=getComputedStyle(c).direction==="rtl",y=c.noUiSlider.options.direction==="rtl",C=c.noUiSlider.options.orientation==="vertical",S=c.noUiSlider.getTooltips(),B=c.noUiSlider.getOrigins();S.forEach(function(M,E){M&&B[E].appendChild(M)}),c.noUiSlider.on("update",function(M,E,$,Q,R){var _=[[]],Y=[[]],I=[[]],Z=0;S[0]&&(_[0][0]=0,Y[0][0]=R[0],I[0][0]=o.value.to(parseFloat(M[0])));for(var X=1;X<M.length;X++)(!S[X]||M[X]-M[X-1]>A)&&(Z++,_[Z]=[],I[Z]=[],Y[Z]=[]),S[X]&&(_[Z].push(X),I[Z].push(o.value.to(parseFloat(M[X]))),Y[Z].push(R[X]));_.forEach(function(V,W){for(var fe=V.length,ie=0;ie<fe;ie++){var de=V[ie];if(ie===fe-1){var re=0;Y[W].forEach(function(z){re+=1e3-z});var Oe=C?"bottom":"right",pe=y?0:fe-1,ae=1e3-Y[W][pe];re=(x&&!C?100:0)+re/fe-ae,S[de].innerHTML=I[W].join(k),S[de].style.display="block",S[de].style[Oe]=re+"%",a.value.tooltipHidden.split(" ").forEach(z=>{S[de].classList.contains(z)&&S[de].classList.remove(z)})}else S[de].style.display="none",a.value.tooltipHidden.split(" ").forEach(z=>{S[de].classList.add(z)})}})})}}}var $t;(function(t){t.Range="range",t.Steps="steps",t.Positions="positions",t.Count="count",t.Values="values"})($t||($t={}));var Xe;(function(t){t[t.None=-1]="None",t[t.NoValue=0]="NoValue",t[t.LargeValue=1]="LargeValue",t[t.SmallValue=2]="SmallValue"})(Xe||(Xe={}));function Af(t){return cr(t)&&typeof t.from=="function"}function cr(t){return typeof t=="object"&&typeof t.to=="function"}function Va(t){t.parentElement.removeChild(t)}function Zr(t){return t!=null}function Wa(t){t.preventDefault()}function Ef(t){return t.filter(function(e){return this[e]?!1:this[e]=!0},{})}function Lf(t,e){return Math.round(t/e)*e}function xf(t,e){var n=t.getBoundingClientRect(),r=t.ownerDocument,i=r.documentElement,l=xo(r);return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(l.x=0),e?n.top+l.y-i.clientTop:n.left+l.x-i.clientLeft}function pt(t){return typeof t=="number"&&!isNaN(t)&&isFinite(t)}function Qa(t,e,n){n>0&&(_e(t,e),setTimeout(function(){or(t,e)},n))}function qa(t){return Math.max(Math.min(t,100),0)}function Cr(t){return Array.isArray(t)?t:[t]}function Sf(t){t=String(t);var e=t.split(".");return e.length>1?e[1].length:0}function _e(t,e){t.classList&&!/\s/.test(e)?t.classList.add(e):t.className+=" "+e}function or(t,e){t.classList&&!/\s/.test(e)?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function Tf(t,e){return t.classList?t.classList.contains(e):new RegExp("\\b"+e+"\\b").test(t.className)}function xo(t){var e=window.pageXOffset!==void 0,n=(t.compatMode||"")==="CSS1Compat",r=e?window.pageXOffset:n?t.documentElement.scrollLeft:t.body.scrollLeft,i=e?window.pageYOffset:n?t.documentElement.scrollTop:t.body.scrollTop;return{x:r,y:i}}function Bf(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function If(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch{}return t}function Rf(){return window.CSS&&CSS.supports&&CSS.supports("touch-action","none")}function na(t,e){return 100/(e-t)}function ei(t,e,n){return e*100/(t[n+1]-t[n])}function Df(t,e){return ei(t,t[0]<0?e+Math.abs(t[0]):e-t[0],0)}function Mf(t,e){return e*(t[1]-t[0])/100+t[0]}function jn(t,e){for(var n=1;t>=e[n];)n+=1;return n}function Of(t,e,n){if(n>=t.slice(-1)[0])return 100;var r=jn(n,t),i=t[r-1],l=t[r],a=e[r-1],o=e[r];return a+Df([i,l],n)/na(a,o)}function Ff(t,e,n){if(n>=100)return t.slice(-1)[0];var r=jn(n,e),i=t[r-1],l=t[r],a=e[r-1],o=e[r];return Mf([i,l],(n-a)*na(a,o))}function Pf(t,e,n,r){if(r===100)return r;var i=jn(r,t),l=t[i-1],a=t[i];return n?r-l>(a-l)/2?a:l:e[i-1]?t[i-1]+Lf(r-t[i-1],e[i-1]):r}var So=function(){function t(e,n,r){this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[r||!1],this.xNumSteps=[!1],this.snap=n;var i,l=[];for(Object.keys(e).forEach(function(a){l.push([Cr(e[a]),a])}),l.sort(function(a,o){return a[0][0]-o[0][0]}),i=0;i<l.length;i++)this.handleEntryPoint(l[i][1],l[i][0]);for(this.xNumSteps=this.xSteps.slice(0),i=0;i<this.xNumSteps.length;i++)this.handleStepPoint(i,this.xNumSteps[i])}return t.prototype.getDistance=function(e){for(var n=[],r=0;r<this.xNumSteps.length-1;r++)n[r]=ei(this.xVal,e,r);return n},t.prototype.getAbsoluteDistance=function(e,n,r){var i=0;if(e<this.xPct[this.xPct.length-1])for(;e>this.xPct[i+1];)i++;else e===this.xPct[this.xPct.length-1]&&(i=this.xPct.length-2);!r&&e===this.xPct[i+1]&&i++,n===null&&(n=[]);var l,a=1,o=n[i],s=0,u=0,c=0,A=0;for(r?l=(e-this.xPct[i])/(this.xPct[i+1]-this.xPct[i]):l=(this.xPct[i+1]-e)/(this.xPct[i+1]-this.xPct[i]);o>0;)s=this.xPct[i+1+A]-this.xPct[i+A],n[i+A]*a+100-l*100>100?(u=s*l,a=(o-100*l)/n[i+A],l=1):(u=n[i+A]*s/100*a,a=0),r?(c=c-u,this.xPct.length+A>=1&&A--):(c=c+u,this.xPct.length-A>=1&&A++),o=n[i+A]*a;return e+c},t.prototype.toStepping=function(e){return e=Of(this.xVal,this.xPct,e),e},t.prototype.fromStepping=function(e){return Ff(this.xVal,this.xPct,e)},t.prototype.getStep=function(e){return e=Pf(this.xPct,this.xSteps,this.snap,e),e},t.prototype.getDefaultStep=function(e,n,r){var i=jn(e,this.xPct);return(e===100||n&&e===this.xPct[i-1])&&(i=Math.max(i-1,1)),(this.xVal[i]-this.xVal[i-1])/r},t.prototype.getNearbySteps=function(e){var n=jn(e,this.xPct);return{stepBefore:{startValue:this.xVal[n-2],step:this.xNumSteps[n-2],highestStep:this.xHighestCompleteStep[n-2]},thisStep:{startValue:this.xVal[n-1],step:this.xNumSteps[n-1],highestStep:this.xHighestCompleteStep[n-1]},stepAfter:{startValue:this.xVal[n],step:this.xNumSteps[n],highestStep:this.xHighestCompleteStep[n]}}},t.prototype.countStepDecimals=function(){var e=this.xNumSteps.map(Sf);return Math.max.apply(null,e)},t.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},t.prototype.convert=function(e){return this.getStep(this.toStepping(e))},t.prototype.handleEntryPoint=function(e,n){var r;if(e==="min"?r=0:e==="max"?r=100:r=parseFloat(e),!pt(r)||!pt(n[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(r),this.xVal.push(n[0]);var i=Number(n[1]);r?this.xSteps.push(isNaN(i)?!1:i):isNaN(i)||(this.xSteps[0]=i),this.xHighestCompleteStep.push(0)},t.prototype.handleStepPoint=function(e,n){if(n){if(this.xVal[e]===this.xVal[e+1]){this.xSteps[e]=this.xHighestCompleteStep[e]=this.xVal[e];return}this.xSteps[e]=ei([this.xVal[e],this.xVal[e+1]],n,0)/na(this.xPct[e],this.xPct[e+1]);var r=(this.xVal[e+1]-this.xVal[e])/this.xNumSteps[e],i=Math.ceil(Number(r.toFixed(3))-1),l=this.xVal[e]+this.xNumSteps[e]*i;this.xHighestCompleteStep[e]=l}},t}(),Ka={to:function(t){return t===void 0?"":t.toFixed(2)},from:Number},To={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},Ot={tooltips:".__tooltips",aria:".__aria"};function $f(t,e){if(!pt(e))throw new Error("noUiSlider: 'step' is not numeric.");t.singleStep=e}function zf(t,e){if(!pt(e))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");t.keyboardPageMultiplier=e}function Nf(t,e){if(!pt(e))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");t.keyboardMultiplier=e}function Hf(t,e){if(!pt(e))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");t.keyboardDefaultStep=e}function jf(t,e){if(typeof e!="object"||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(e.min===void 0||e.max===void 0)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");t.spectrum=new So(e,t.snap||!1,t.singleStep)}function Uf(t,e){if(e=Cr(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider: 'start' option is incorrect.");t.handles=e.length,t.start=e}function Vf(t,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'snap' option must be a boolean.");t.snap=e}function Wf(t,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'animate' option must be a boolean.");t.animate=e}function Qf(t,e){if(typeof e!="number")throw new Error("noUiSlider: 'animationDuration' option must be a number.");t.animationDuration=e}function qf(t,e){var n=[!1],r;if(e==="lower"?e=[!0,!1]:e==="upper"&&(e=[!1,!0]),e===!0||e===!1){for(r=1;r<t.handles;r++)n.push(e);n.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");n=e}t.connect=n}function Kf(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function Bo(t,e){if(!pt(e))throw new Error("noUiSlider: 'margin' option must be numeric.");e!==0&&(t.margin=t.spectrum.getDistance(e))}function Jf(t,e){if(!pt(e))throw new Error("noUiSlider: 'limit' option must be numeric.");if(t.limit=t.spectrum.getDistance(e),!t.limit||t.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function _f(t,e){var n;if(!pt(e)&&!Array.isArray(e))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&!(e.length===2||pt(e[0])||pt(e[1])))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(e!==0){for(Array.isArray(e)||(e=[e,e]),t.padding=[t.spectrum.getDistance(e[0]),t.spectrum.getDistance(e[1])],n=0;n<t.spectrum.xNumSteps.length-1;n++)if(t.padding[0][n]<0||t.padding[1][n]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var r=e[0]+e[1],i=t.spectrum.xVal[0],l=t.spectrum.xVal[t.spectrum.xVal.length-1];if(r/(l-i)>1)throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function Gf(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function Yf(t,e){if(typeof e!="string")throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var n=e.indexOf("tap")>=0,r=e.indexOf("drag")>=0,i=e.indexOf("fixed")>=0,l=e.indexOf("snap")>=0,a=e.indexOf("hover")>=0,o=e.indexOf("unconstrained")>=0,s=e.indexOf("drag-all")>=0,u=e.indexOf("smooth-steps")>=0;if(i){if(t.handles!==2)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");Bo(t,t.start[1]-t.start[0])}if(o&&(t.margin||t.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:n||l,drag:r,dragAll:s,smoothSteps:u,fixed:i,snap:l,hover:a,unconstrained:o}}function Xf(t,e){if(e!==!1)if(e===!0||cr(e)){t.tooltips=[];for(var n=0;n<t.handles;n++)t.tooltips.push(e)}else{if(e=Cr(e),e.length!==t.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");e.forEach(function(r){if(typeof r!="boolean"&&!cr(r))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")}),t.tooltips=e}}function Zf(t,e){if(e.length!==t.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");t.handleAttributes=e}function ev(t,e){if(!cr(e))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");t.ariaFormat=e}function tv(t,e){if(!Af(e))throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");t.format=e}function nv(t,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");t.keyboardSupport=e}function rv(t,e){t.documentElement=e}function iv(t,e){if(typeof e!="string"&&e!==!1)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function av(t,e){if(typeof e!="object")throw new Error("noUiSlider: 'cssClasses' must be an object.");typeof t.cssPrefix=="string"?(t.cssClasses={},Object.keys(e).forEach(function(n){t.cssClasses[n]=t.cssPrefix+e[n]})):t.cssClasses=e}function Io(t){var e={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:Ka,format:Ka},n={step:{r:!1,t:$f},keyboardPageMultiplier:{r:!1,t:zf},keyboardMultiplier:{r:!1,t:Nf},keyboardDefaultStep:{r:!1,t:Hf},start:{r:!0,t:Uf},connect:{r:!0,t:qf},direction:{r:!0,t:Gf},snap:{r:!1,t:Vf},animate:{r:!1,t:Wf},animationDuration:{r:!1,t:Qf},range:{r:!0,t:jf},orientation:{r:!1,t:Kf},margin:{r:!1,t:Bo},limit:{r:!1,t:Jf},padding:{r:!1,t:_f},behaviour:{r:!0,t:Yf},ariaFormat:{r:!1,t:ev},format:{r:!1,t:tv},tooltips:{r:!1,t:Xf},keyboardSupport:{r:!0,t:nv},documentElement:{r:!1,t:rv},cssPrefix:{r:!0,t:iv},cssClasses:{r:!0,t:av},handleAttributes:{r:!1,t:Zf}},r={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:To,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};t.format&&!t.ariaFormat&&(t.ariaFormat=t.format),Object.keys(n).forEach(function(s){if(!Zr(t[s])&&r[s]===void 0){if(n[s].r)throw new Error("noUiSlider: '"+s+"' is required.");return}n[s].t(e,Zr(t[s])?t[s]:r[s])}),e.pips=t.pips;var i=document.createElement("div"),l=i.style.msTransform!==void 0,a=i.style.transform!==void 0;e.transformRule=a?"transform":l?"msTransform":"webkitTransform";var o=[["left","top"],["right","bottom"]];return e.style=o[e.dir][e.ort],e}function lv(t,e,n){var r=Bf(),i=Rf(),l=i&&If(),a=t,o,s,u,c,A,k=e.spectrum,x=[],y=[],C=[],S=0,B={},M=t.ownerDocument,E=e.documentElement||M.documentElement,$=M.body,Q=M.dir==="rtl"||e.ort===1?0:100;function R(p,g){var b=M.createElement("div");return g&&_e(b,g),p.appendChild(b),b}function _(p,g){var b=R(p,e.cssClasses.origin),T=R(b,e.cssClasses.handle);if(R(T,e.cssClasses.touchArea),T.setAttribute("data-handle",String(g)),e.keyboardSupport&&(T.setAttribute("tabindex","0"),T.addEventListener("keydown",function(H){return cn(H,g)})),e.handleAttributes!==void 0){var j=e.handleAttributes[g];Object.keys(j).forEach(function(H){T.setAttribute(H,j[H])})}return T.setAttribute("role","slider"),T.setAttribute("aria-orientation",e.ort?"vertical":"horizontal"),g===0?_e(T,e.cssClasses.handleLower):g===e.handles-1&&_e(T,e.cssClasses.handleUpper),b.handle=T,b}function Y(p,g){return g?R(p,e.cssClasses.connect):!1}function I(p,g){var b=R(g,e.cssClasses.connects);s=[],u=[],u.push(Y(b,p[0]));for(var T=0;T<e.handles;T++)s.push(_(g,T)),C[T]=T,u.push(Y(b,p[T+1]))}function Z(p){_e(p,e.cssClasses.target),e.dir===0?_e(p,e.cssClasses.ltr):_e(p,e.cssClasses.rtl),e.ort===0?_e(p,e.cssClasses.horizontal):_e(p,e.cssClasses.vertical);var g=getComputedStyle(p).direction;return g==="rtl"?_e(p,e.cssClasses.textDirectionRtl):_e(p,e.cssClasses.textDirectionLtr),R(p,e.cssClasses.base)}function X(p,g){return!e.tooltips||!e.tooltips[g]?!1:R(p.firstChild,e.cssClasses.tooltip)}function V(){return a.hasAttribute("disabled")}function W(p){var g=s[p];return g.hasAttribute("disabled")}function fe(p){p!=null?(s[p].setAttribute("disabled",""),s[p].handle.removeAttribute("tabindex")):(a.setAttribute("disabled",""),s.forEach(function(g){g.handle.removeAttribute("tabindex")}))}function ie(p){p!=null?(s[p].removeAttribute("disabled"),s[p].handle.setAttribute("tabindex","0")):(a.removeAttribute("disabled"),s.forEach(function(g){g.removeAttribute("disabled"),g.handle.setAttribute("tabindex","0")}))}function de(){A&&(Je("update"+Ot.tooltips),A.forEach(function(p){p&&Va(p)}),A=null)}function re(){de(),A=s.map(X),tt("update"+Ot.tooltips,function(p,g,b){if(!(!A||!e.tooltips)&&A[g]!==!1){var T=p[g];e.tooltips[g]!==!0&&(T=e.tooltips[g].to(b[g])),A[g].innerHTML=T}})}function Oe(){Je("update"+Ot.aria),tt("update"+Ot.aria,function(p,g,b,T,j){C.forEach(function(H){var ne=s[H],J=ht(y,H,0,!0,!0,!0),Te=ht(y,H,100,!0,!0,!0),ke=j[H],Re=String(e.ariaFormat.to(b[H]));J=k.fromStepping(J).toFixed(1),Te=k.fromStepping(Te).toFixed(1),ke=k.fromStepping(ke).toFixed(1),ne.children[0].setAttribute("aria-valuemin",J),ne.children[0].setAttribute("aria-valuemax",Te),ne.children[0].setAttribute("aria-valuenow",ke),ne.children[0].setAttribute("aria-valuetext",Re)})})}function pe(p){if(p.mode===$t.Range||p.mode===$t.Steps)return k.xVal;if(p.mode===$t.Count){if(p.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var g=p.values-1,b=100/g,T=[];g--;)T[g]=g*b;return T.push(100),ae(T,p.stepped)}return p.mode===$t.Positions?ae(p.values,p.stepped):p.mode===$t.Values?p.stepped?p.values.map(function(j){return k.fromStepping(k.getStep(k.toStepping(j)))}):p.values:[]}function ae(p,g){return p.map(function(b){return k.fromStepping(g?k.getStep(b):b)})}function z(p){function g(ke,Re){return Number((ke+Re).toFixed(7))}var b=pe(p),T={},j=k.xVal[0],H=k.xVal[k.xVal.length-1],ne=!1,J=!1,Te=0;return b=Ef(b.slice().sort(function(ke,Re){return ke-Re})),b[0]!==j&&(b.unshift(j),ne=!0),b[b.length-1]!==H&&(b.push(H),J=!0),b.forEach(function(ke,Re){var De,we,Ae,Qe=ke,je=b[Re+1],Ve,Sn,Kt,Jt,_t,Mt,gn,er=p.mode===$t.Steps;for(er&&(De=k.xNumSteps[Re]),De||(De=je-Qe),je===void 0&&(je=Qe),De=Math.max(De,1e-7),we=Qe;we<=je;we=g(we,De)){for(Ve=k.toStepping(we),Sn=Ve-Te,_t=Sn/(p.density||1),Mt=Math.round(_t),gn=Sn/Mt,Ae=1;Ae<=Mt;Ae+=1)Kt=Te+Ae*gn,T[Kt.toFixed(5)]=[k.fromStepping(Kt),0];Jt=b.indexOf(we)>-1?Xe.LargeValue:er?Xe.SmallValue:Xe.NoValue,!Re&&ne&&we!==je&&(Jt=0),we===je&&J||(T[Ve.toFixed(5)]=[we,Jt]),Te=Ve}}),T}function oe(p,g,b){var T,j,H=M.createElement("div"),ne=(T={},T[Xe.None]="",T[Xe.NoValue]=e.cssClasses.valueNormal,T[Xe.LargeValue]=e.cssClasses.valueLarge,T[Xe.SmallValue]=e.cssClasses.valueSub,T),J=(j={},j[Xe.None]="",j[Xe.NoValue]=e.cssClasses.markerNormal,j[Xe.LargeValue]=e.cssClasses.markerLarge,j[Xe.SmallValue]=e.cssClasses.markerSub,j),Te=[e.cssClasses.valueHorizontal,e.cssClasses.valueVertical],ke=[e.cssClasses.markerHorizontal,e.cssClasses.markerVertical];_e(H,e.cssClasses.pips),_e(H,e.ort===0?e.cssClasses.pipsHorizontal:e.cssClasses.pipsVertical);function Re(we,Ae){var Qe=Ae===e.cssClasses.value,je=Qe?Te:ke,Ve=Qe?ne:J;return Ae+" "+je[e.ort]+" "+Ve[we]}function De(we,Ae,Qe){if(Qe=g?g(Ae,Qe):Qe,Qe!==Xe.None){var je=R(H,!1);je.className=Re(Qe,e.cssClasses.marker),je.style[e.style]=we+"%",Qe>Xe.NoValue&&(je=R(H,!1),je.className=Re(Qe,e.cssClasses.value),je.setAttribute("data-value",String(Ae)),je.style[e.style]=we+"%",je.innerHTML=String(b.to(Ae)))}}return Object.keys(p).forEach(function(we){De(we,p[we][0],p[we][1])}),H}function He(){c&&(Va(c),c=null)}function be(p){He();var g=z(p),b=p.filter,T=p.format||{to:function(j){return String(Math.round(j))}};return c=a.appendChild(oe(g,b,T)),c}function se(){var p=o.getBoundingClientRect(),g="offset"+["Width","Height"][e.ort];return e.ort===0?p.width||o[g]:p.height||o[g]}function O(p,g,b,T){var j=function(ne){var J=te(ne,T.pageOffset,T.target||g);if(!J||V()&&!T.doNotReject||Tf(a,e.cssClasses.tap)&&!T.doNotReject||p===r.start&&J.buttons!==void 0&&J.buttons>1||T.hover&&J.buttons)return!1;l||J.preventDefault(),J.calcPoint=J.points[e.ort],b(J,T)},H=[];return p.split(" ").forEach(function(ne){g.addEventListener(ne,j,l?{passive:!0}:!1),H.push([ne,j])}),H}function te(p,g,b){var T=p.type.indexOf("touch")===0,j=p.type.indexOf("mouse")===0,H=p.type.indexOf("pointer")===0,ne=0,J=0;if(p.type.indexOf("MSPointer")===0&&(H=!0),p.type==="mousedown"&&!p.buttons&&!p.touches)return!1;if(T){var Te=function(De){var we=De.target;return we===b||b.contains(we)||p.composed&&p.composedPath().shift()===b};if(p.type==="touchstart"){var ke=Array.prototype.filter.call(p.touches,Te);if(ke.length>1)return!1;ne=ke[0].pageX,J=ke[0].pageY}else{var Re=Array.prototype.find.call(p.changedTouches,Te);if(!Re)return!1;ne=Re.pageX,J=Re.pageY}}return g=g||xo(M),(j||H)&&(ne=p.clientX+g.x,J=p.clientY+g.y),p.pageOffset=g,p.points=[ne,J],p.cursor=j||H,p}function P(p){var g=p-xf(o,e.ort),b=g*100/se();return b=qa(b),e.dir?100-b:b}function ve(p){var g=100,b=!1;return s.forEach(function(T,j){if(!W(j)){var H=y[j],ne=Math.abs(H-p),J=ne===100&&g===100,Te=ne<g,ke=ne<=g&&p>H;(Te||ke||J)&&(b=j,g=ne)}}),b}function Be(p,g){p.type==="mouseout"&&p.target.nodeName==="HTML"&&p.relatedTarget===null&&Ke(p,g)}function qe(p,g){if(navigator.appVersion.indexOf("MSIE 9")===-1&&p.buttons===0&&g.buttonsProperty!==0)return Ke(p,g);var b=(e.dir?-1:1)*(p.calcPoint-g.startCalcPoint),T=b*100/g.baseSize;Ye(b>0,T,g.locations,g.handleNumbers,g.connect)}function Ke(p,g){g.handle&&(or(g.handle,e.cssClasses.active),S-=1),g.listeners.forEach(function(b){E.removeEventListener(b[0],b[1])}),S===0&&(or(a,e.cssClasses.drag),ut(),p.cursor&&($.style.cursor="",$.removeEventListener("selectstart",Wa))),e.events.smoothSteps&&(g.handleNumbers.forEach(function(b){lt(b,y[b],!0,!0,!1,!1)}),g.handleNumbers.forEach(function(b){ye("update",b)})),g.handleNumbers.forEach(function(b){ye("change",b),ye("set",b),ye("end",b)})}function Ge(p,g){if(!g.handleNumbers.some(W)){var b;if(g.handleNumbers.length===1){var T=s[g.handleNumbers[0]];b=T.children[0],S+=1,_e(b,e.cssClasses.active)}p.stopPropagation();var j=[],H=O(r.move,E,qe,{target:p.target,handle:b,connect:g.connect,listeners:j,startCalcPoint:p.calcPoint,baseSize:se(),pageOffset:p.pageOffset,handleNumbers:g.handleNumbers,buttonsProperty:p.buttons,locations:y.slice()}),ne=O(r.end,E,Ke,{target:p.target,handle:b,listeners:j,doNotReject:!0,handleNumbers:g.handleNumbers}),J=O("mouseout",E,Be,{target:p.target,handle:b,listeners:j,doNotReject:!0,handleNumbers:g.handleNumbers});j.push.apply(j,H.concat(ne,J)),p.cursor&&($.style.cursor=getComputedStyle(p.target).cursor,s.length>1&&_e(a,e.cssClasses.drag),$.addEventListener("selectstart",Wa,!1)),g.handleNumbers.forEach(function(Te){ye("start",Te)})}}function vt(p){p.stopPropagation();var g=P(p.calcPoint),b=ve(g);b!==!1&&(e.events.snap||Qa(a,e.cssClasses.tap,e.animationDuration),lt(b,g,!0,!0),ut(),ye("slide",b,!0),ye("update",b,!0),e.events.snap?Ge(p,{handleNumbers:[b]}):(ye("change",b,!0),ye("set",b,!0)))}function gt(p){var g=P(p.calcPoint),b=k.getStep(g),T=k.fromStepping(b);Object.keys(B).forEach(function(j){j.split(".")[0]==="hover"&&B[j].forEach(function(H){H.call(qt,T)})})}function cn(p,g){if(V()||W(g))return!1;var b=["Left","Right"],T=["Down","Up"],j=["PageDown","PageUp"],H=["Home","End"];e.dir&&!e.ort?b.reverse():e.ort&&!e.dir&&(T.reverse(),j.reverse());var ne=p.key.replace("Arrow",""),J=ne===j[0],Te=ne===j[1],ke=ne===T[0]||ne===b[0]||J,Re=ne===T[1]||ne===b[1]||Te,De=ne===H[0],we=ne===H[1];if(!ke&&!Re&&!De&&!we)return!0;p.preventDefault();var Ae;if(Re||ke){var Qe=ke?0:1,je=Zn(g),Ve=je[Qe];if(Ve===null)return!1;Ve===!1&&(Ve=k.getDefaultStep(y[g],ke,e.keyboardDefaultStep)),Te||J?Ve*=e.keyboardPageMultiplier:Ve*=e.keyboardMultiplier,Ve=Math.max(Ve,1e-7),Ve=(ke?-1:1)*Ve,Ae=x[g]+Ve}else we?Ae=e.spectrum.xVal[e.spectrum.xVal.length-1]:Ae=e.spectrum.xVal[0];return lt(g,k.toStepping(Ae),!0,!0),ye("slide",g),ye("update",g),ye("change",g),ye("set",g),!1}function mt(p){p.fixed||s.forEach(function(g,b){O(r.start,g.children[0],Ge,{handleNumbers:[b]})}),p.tap&&O(r.start,o,vt,{}),p.hover&&O(r.move,o,gt,{hover:!0}),p.drag&&u.forEach(function(g,b){if(!(g===!1||b===0||b===u.length-1)){var T=s[b-1],j=s[b],H=[g],ne=[T,j],J=[b-1,b];_e(g,e.cssClasses.draggable),p.fixed&&(H.push(T.children[0]),H.push(j.children[0])),p.dragAll&&(ne=s,J=C),H.forEach(function(Te){O(r.start,Te,Ge,{handles:ne,handleNumbers:J,connect:g})})}})}function tt(p,g){B[p]=B[p]||[],B[p].push(g),p.split(".")[0]==="update"&&s.forEach(function(b,T){ye("update",T)})}function nt(p){return p===Ot.aria||p===Ot.tooltips}function Je(p){var g=p&&p.split(".")[0],b=g?p.substring(g.length):p;Object.keys(B).forEach(function(T){var j=T.split(".")[0],H=T.substring(j.length);(!g||g===j)&&(!b||b===H)&&(!nt(H)||b===H)&&delete B[T]})}function ye(p,g,b){Object.keys(B).forEach(function(T){var j=T.split(".")[0];p===j&&B[T].forEach(function(H){H.call(qt,x.map(e.format.to),g,x.slice(),b||!1,y.slice(),qt)})})}function ht(p,g,b,T,j,H,ne){var J;return s.length>1&&!e.events.unconstrained&&(T&&g>0&&(J=k.getAbsoluteDistance(p[g-1],e.margin,!1),b=Math.max(b,J)),j&&g<s.length-1&&(J=k.getAbsoluteDistance(p[g+1],e.margin,!0),b=Math.min(b,J))),s.length>1&&e.limit&&(T&&g>0&&(J=k.getAbsoluteDistance(p[g-1],e.limit,!1),b=Math.min(b,J)),j&&g<s.length-1&&(J=k.getAbsoluteDistance(p[g+1],e.limit,!0),b=Math.max(b,J))),e.padding&&(g===0&&(J=k.getAbsoluteDistance(0,e.padding[0],!1),b=Math.max(b,J)),g===s.length-1&&(J=k.getAbsoluteDistance(100,e.padding[1],!0),b=Math.min(b,J))),ne||(b=k.getStep(b)),b=qa(b),b===p[g]&&!H?!1:b}function Bt(p,g){var b=e.ort;return(b?g:p)+", "+(b?p:g)}function Ye(p,g,b,T,j){var H=b.slice(),ne=T[0],J=e.events.smoothSteps,Te=[!p,p],ke=[p,!p];T=T.slice(),p&&T.reverse(),T.length>1?T.forEach(function(De,we){var Ae=ht(H,De,H[De]+g,Te[we],ke[we],!1,J);Ae===!1?g=0:(g=Ae-H[De],H[De]=Ae)}):Te=ke=[!0];var Re=!1;T.forEach(function(De,we){Re=lt(De,b[De]+g,Te[we],ke[we],!1,J)||Re}),Re&&(T.forEach(function(De){ye("update",De),ye("slide",De)}),j!=null&&ye("drag",ne))}function It(p,g){return e.dir?100-p-g:p}function bt(p,g){y[p]=g,x[p]=k.fromStepping(g);var b=It(g,0)-Q,T="translate("+Bt(b+"%","0")+")";s[p].style[e.transformRule]=T,pn(p),pn(p+1)}function ut(){C.forEach(function(p){var g=y[p]>50?-1:1,b=3+(s.length+g*p);s[p].style.zIndex=String(b)})}function lt(p,g,b,T,j,H){return j||(g=ht(y,p,g,b,T,!1,H)),g===!1?!1:(bt(p,g),!0)}function pn(p){if(u[p]){var g=0,b=100;p!==0&&(g=y[p-1]),p!==u.length-1&&(b=y[p]);var T=b-g,j="translate("+Bt(It(g,T)+"%","0")+")",H="scale("+Bt(T/100,"1")+")";u[p].style[e.transformRule]=j+" "+H}}function fn(p,g){return p===null||p===!1||p===void 0||(typeof p=="number"&&(p=String(p)),p=e.format.from(p),p!==!1&&(p=k.toStepping(p)),p===!1||isNaN(p))?y[g]:p}function vn(p,g,b){var T=Cr(p),j=y[0]===void 0;g=g===void 0?!0:g,e.animate&&!j&&Qa(a,e.cssClasses.tap,e.animationDuration),C.forEach(function(J){lt(J,fn(T[J],J),!0,!1,b)});var H=C.length===1?0:1;if(j&&k.hasNoSize()&&(b=!0,y[0]=0,C.length>1)){var ne=100/(C.length-1);C.forEach(function(J){y[J]=J*ne})}for(;H<C.length;++H)C.forEach(function(J){lt(J,y[J],!0,!0,b)});ut(),C.forEach(function(J){ye("update",J),T[J]!==null&&g&&ye("set",J)})}function Br(p){vn(e.start,p)}function Ir(p,g,b,T){if(p=Number(p),!(p>=0&&p<C.length))throw new Error("noUiSlider: invalid handle number, got: "+p);lt(p,fn(g,p),!0,!0,T),ye("update",p),b&&ye("set",p)}function At(p){if(p===void 0&&(p=!1),p)return x.length===1?x[0]:x.slice(0);var g=x.map(e.format.to);return g.length===1?g[0]:g}function Et(){for(Je(Ot.aria),Je(Ot.tooltips),Object.keys(e.cssClasses).forEach(function(p){or(a,e.cssClasses[p])});a.firstChild;)a.removeChild(a.firstChild);delete a.noUiSlider}function Zn(p){var g=y[p],b=k.getNearbySteps(g),T=x[p],j=b.thisStep.step,H=null;if(e.snap)return[T-b.stepBefore.startValue||null,b.stepAfter.startValue-T||null];j!==!1&&T+j>b.stepAfter.startValue&&(j=b.stepAfter.startValue-T),T>b.thisStep.startValue?H=b.thisStep.step:b.stepBefore.step===!1?H=!1:H=T-b.stepBefore.highestStep,g===100?j=null:g===0&&(H=null);var ne=k.countStepDecimals();return j!==null&&j!==!1&&(j=Number(j.toFixed(ne))),H!==null&&H!==!1&&(H=Number(H.toFixed(ne))),[H,j]}function Rr(){return C.map(Zn)}function Rt(p,g){var b=At(),T=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];T.forEach(function(H){p[H]!==void 0&&(n[H]=p[H])});var j=Io(n);T.forEach(function(H){p[H]!==void 0&&(e[H]=j[H])}),k=j.spectrum,e.margin=j.margin,e.limit=j.limit,e.padding=j.padding,e.pips?be(e.pips):He(),e.tooltips?re():de(),y=[],vn(Zr(p.start)?p.start:b,g)}function Dt(){o=Z(a),I(e.connect,o),mt(e.events),vn(e.start),e.pips&&be(e.pips),e.tooltips&&re(),Oe()}Dt();var qt={destroy:Et,steps:Rr,on:tt,off:Je,get:At,set:vn,setHandle:Ir,reset:Br,disable:fe,enable:ie,__moveHandles:function(p,g,b){Ye(p,g,y,b)},options:n,updateOptions:Rt,target:a,removePips:He,removeTooltips:de,getPositions:function(){return y.slice()},getTooltips:function(){return A},getOrigins:function(){return s},pips:be};return qt}function ov(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");var n=Io(e),r=lv(t,n,e);return t.noUiSlider=r,r}var sv={__spectrum:So,cssClasses:To,create:ov};function Ja(t,e){if(!Array.isArray(t)||!Array.isArray(e))return!1;const n=e.slice().sort();return t.length===e.length&&t.slice().sort().every(function(r,i){return r===n[i]})}function uv(t,e,n){const{orientation:r,direction:i,tooltips:l,step:a,min:o,max:s,merge:u,id:c,disabled:A,options:k,classes:x,format:y,lazy:C,ariaLabelledby:S,aria:B}=Pe(t),M=n.value,E=n.initialValue,$=n.tooltipsFormat,Q=n.tooltipsMerge,R=n.tooltipFormat,_=n.classList,Y=Le(null),I=Le(null),Z=Le(!1),X=K(()=>{let z={cssPrefix:"",cssClasses:_.value,orientation:r.value,direction:i.value,tooltips:l.value?$.value:!1,connect:"lower",start:lr(M.value)?o.value:M.value,range:{min:o.value,max:s.value}};if(a.value>0&&(z.step=a.value),Array.isArray(M.value)&&(z.connect=!0),S&&S.value||B&&Object.keys(B.value).length){let oe=Array.isArray(M.value)?M.value:[M.value];z.handleAttributes=oe.map(He=>Object.assign({},B.value,S&&S.value?{"aria-labelledby":S.value}:{}))}return y.value&&(z.ariaFormat=R.value),z}),V=K(()=>{let z={id:c&&c.value?c.value:void 0};return A.value&&(z.disabled=!0),z}),W=K(()=>Array.isArray(M.value)),fe=()=>{re(E.value)},ie=()=>{let z=I.value.get();return Array.isArray(z)?z.map(oe=>parseFloat(oe)):parseFloat(z)},de=(z,oe=!0)=>{I.value.set(z,oe)},re=z=>{e.emit("input",z),e.emit("update:modelValue",z),e.emit("update",z)},Oe=()=>{I.value=sv.create(Y.value,Object.assign({},X.value,k.value)),l.value&&W.value&&u.value>=0&&Q(Y.value,u.value," - "),I.value.on("set",()=>{const z=ie();e.emit("change",z),e.emit("set",z),C.value&&re(z)}),I.value.on("update",()=>{if(!Z.value)return;const z=ie();if(W.value&&Ja(M.value,z)||!W.value&&M.value==z){e.emit("update",z);return}C.value||re(z)}),I.value.on("start",()=>{e.emit("start",ie())}),I.value.on("end",()=>{e.emit("end",ie())}),I.value.on("slide",()=>{e.emit("slide",ie())}),I.value.on("drag",()=>{e.emit("drag",ie())}),Y.value.querySelectorAll("[data-handle]").forEach(z=>{z.onblur=()=>{Y.value&&_.value.focused.split(" ").forEach(oe=>{Y.value.classList.remove(oe)})},z.onfocus=()=>{_.value.focused.split(" ").forEach(oe=>{Y.value.classList.add(oe)})}}),Z.value=!0},pe=()=>{I.value.off(),I.value.destroy(),I.value=null},ae=(z,oe)=>{Z.value=!1,pe(),Oe()};return Kn(Oe),js(pe),Se(W,ae,{immediate:!1}),Se(o,ae,{immediate:!1}),Se(s,ae,{immediate:!1}),Se(a,ae,{immediate:!1}),Se(r,ae,{immediate:!1}),Se(i,ae,{immediate:!1}),Se(l,ae,{immediate:!1}),Se(u,ae,{immediate:!1}),Se(y,ae,{immediate:!1,deep:!0}),Se(k,ae,{immediate:!1,deep:!0}),Se(x,ae,{immediate:!1,deep:!0}),Se(M,(z,oe)=>{oe&&(typeof oe=="object"&&typeof z=="object"&&z&&Object.keys(oe)>Object.keys(z)||typeof oe=="object"&&typeof z!="object"||lr(z))&&ae()},{immediate:!1}),Se(M,z=>{if(lr(z)){de(o.value,!1);return}let oe=ie();W.value&&!Array.isArray(oe)&&(oe=[oe]),(W.value&&!Ja(z,oe)||!W.value&&z!=oe)&&de(z,!1)},{deep:!0}),{slider:Y,slider$:I,isRange:W,sliderProps:V,init:Oe,destroy:pe,refresh:ae,update:de,reset:fe}}const dv={value:{validator:function(t){return e=>typeof e=="number"||e instanceof Array||e===null||e===void 0||e===!1},required:!1},modelValue:{validator:function(t){return e=>typeof e=="number"||e instanceof Array||e===null||e===void 0||e===!1},required:!1}};var Ar={name:"Slider",emits:["input","update:modelValue","start","slide","drag","update","change","set","end"],props:{...dv,id:{type:[String,Number],required:!1},disabled:{type:Boolean,required:!1,default:!1},min:{type:Number,required:!1,default:0},max:{type:Number,required:!1,default:100},step:{type:Number,required:!1,default:1},orientation:{type:String,required:!1,default:"horizontal"},direction:{type:String,required:!1,default:"ltr"},tooltips:{type:Boolean,required:!1,default:!0},options:{type:Object,required:!1,default:()=>({})},merge:{type:Number,required:!1,default:-1},format:{type:[Object,Function,Boolean],required:!1,default:null},classes:{type:Object,required:!1,default:()=>({})},showTooltip:{type:String,required:!1,default:"always"},tooltipPosition:{type:String,required:!1,default:null},lazy:{type:Boolean,required:!1,default:!0},ariaLabelledby:{type:String,required:!1,default:void 0},aria:{required:!1,type:Object,default:()=>({})}},setup(t,e){const n=yf(t),r=kf(t),i=Cf(t,e,{value:n.value,classList:r.classList}),l=uv(t,e,{value:n.value,initialValue:n.initialValue,tooltipFormat:i.tooltipFormat,tooltipsFormat:i.tooltipsFormat,tooltipsMerge:i.tooltipsMerge,classList:r.classList});return{...r,...i,...l}}};function cv(t,e,n,r,i,l){return d(),v("div",q(t.sliderProps,{ref:"slider"}),null,16)}Ar.render=cv;Ar.__file="node_modules/@vueform/slider/src/Slider.vue";var ra={name:"SliderElement",components:{Slider:Ar},data(){return{merge:!0,defaultClasses:{container:"",wrapper:"",slider:{target:"",focused:"",tooltipFocus:"",tooltipDrag:"",ltr:"",rtl:"",horizontal:"",vertical:"",textDirectionRtl:"",textDirectionLtr:"",base:"",connects:"",connect:"",origin:"",handle:"",touchArea:"",tooltip:"",tooltipTop:"",tooltipBottom:"",tooltipLeft:"",tooltipRight:"",tooltipHidden:"",active:"",draggable:"",tap:"",drag:""}}}}};function pv(t,e,n,r,i,l){const a=ue("Slider");return d(),L(F(t.elementLayout),{ref:"container"},Ie({element:U(()=>[w("div",{class:f(t.classes.wrapper)},[h(" @vueform/slider component "),Ee(a,q({value:t.value,modelValue:t.value},t.fieldOptions,{aria:t.aria,classes:t.classes.slider,id:t.fieldId,ref:"input",onUpdate:t.handleUpdate,onChange:t.handleChange}),null,16,["value","modelValue","aria","classes","id","onUpdate","onChange"])],2)]),_:2},[le(t.elementSlots,(o,s)=>({name:s,fn:U(()=>[D(t.$slots,s,{el$:t.el$},()=>[(d(),L(F(o),{el$:t.el$},null,8,["el$"]))])])}))]),1536)}ra.render=pv;ra.__file="themes/blank/templates/elements/SliderElement.vue";var Ro={name:"SliderElement",render:ra.render,components:{Slider:Ar},data(){return{merge:!0,defaultClasses:{container:"",wrapper:"vf-slider-wrapper",wrapper_sm:"vf-slider-wrapper-sm",wrapper_md:"",wrapper_lg:"vf-slider-wrapper-lg",slider:{target:"vf-slider-target",target_sm:"vf-slider-target-sm",target_md:"vf-slider-target-md",target_lg:"vf-slider-target-lg",focused:"vf-slider-focused",tooltipFocus:"vf-slider-tooltip-focus",tooltipDrag:"vf-slider-tooltip-drag",ltr:"vf-slider-ltr",rtl:"vf-slider-rtl",horizontal:"vf-slider-horizontal",horizontal_sm:"vf-slider-horizontal-sm",horizontal_md:"vf-slider-horizontal-md",horizontal_lg:"vf-slider-horizontal-lg",vertical:"vf-slider-vertical",vertical_sm:"vf-slider-vertical-sm",vertical_md:"vf-slider-vertical-md",vertical_lg:"vf-slider-vertical-lg",textDirectionRtl:"vf-slider-txt-dir-rtl",textDirectionLtr:"vf-slider-txt-dir-ltr",base:"vf-slider-base",base_sm:"vf-slider-base-sm",base_md:"vf-slider-base-md",base_lg:"vf-slider-base-lg",connects:"vf-slider-connects",connects_sm:"vf-slider-connects-sm",connects_md:"vf-slider-connects-md",connects_lg:"vf-slider-connects-lg",connect:"vf-slider-connect",connect_sm:"vf-slider-connect-sm",connect_md:"vf-slider-connect-md",connect_lg:"vf-slider-connect-lg",origin:"vf-slider-origin",handle:"vf-slider-handle",handle_sm:"vf-slider-handle-sm",handle_md:"vf-slider-handle-md",handle_lg:"vf-slider-handle-lg",handleUpper:"vf-handle-upper",handleLower:"vf-handle-lower",touchArea:"vf-slider-touch-area",tooltip:"vf-slider-tooltip",tooltip_sm:"vf-slider-tooltip-sm",tooltip_md:"vf-slider-tooltip-md",tooltip_lg:"vf-slider-tooltip-lg",tooltipTop:"vf-slider-tooltip-top",tooltipTop_sm:"vf-slider-tooltip-top-sm",tooltipTop_md:"vf-slider-tooltip-top-md",tooltipTop_lg:"vf-slider-tooltip-top-lg",tooltipBottom:"vf-slider-tooltip-bottom",tooltipBottom_sm:"vf-slider-tooltip-bottom-sm",tooltipBottom_md:"vf-slider-tooltip-bottom-md",tooltipBottom_lg:"vf-slider-tooltip-bottom-lg",tooltipLeft:"vf-slider-tooltip-left",tooltipLeft_sm:"vf-slider-tooltip-left-sm",tooltipLeft_md:"vf-slider-tooltip-left-md",tooltipLeft_lg:"vf-slider-tooltip-left-lg",tooltipRight:"vf-slider-tooltip-right",tooltipRight_sm:"vf-slider-tooltip-right-sm",tooltipRight_md:"vf-slider-tooltip-right-md",tooltipRight_lg:"vf-slider-tooltip-right-lg",tooltipHidden:"vf-slider-tooltip-hidden",active:"vf-slider-active",draggable:"vf-slider-draggable",tap:"vf-slider-state-tap",drag:"vf-slider-state-drag",$slider:(t,{Size:e})=>[t.slider.slider,t.slider[`slider_${e}`]],$horizontal:(t,{Size:e})=>[t.slider.horizontal,t.slider[`horizontal_${e}`]],$vertical:(t,{Size:e})=>[t.slider.vertical,t.slider[`vertical_${e}`]],$base:(t,{Size:e})=>[t.slider.base,t.slider[`base_${e}`]],$connects:(t,{Size:e})=>[t.slider.connects,t.slider[`connects_${e}`]],$connect:(t,{Size:e})=>[t.slider.connect,t.slider[`connect_${e}`]],$handle:(t,{Size:e})=>[t.slider.handle,t.slider[`handle_${e}`]],$tooltip:(t,{Size:e})=>[t.slider.tooltip,t.slider[`tooltip_${e}`]],$tooltipTop:(t,{Size:e})=>[t.slider.tooltipTop,t.slider[`tooltipTop_${e}`]],$tooltipBottom:(t,{Size:e})=>[t.slider.tooltipBottom,t.slider[`tooltipBottom_${e}`]],$tooltipLeft:(t,{Size:e})=>[t.slider.tooltipLeft,t.slider[`tooltipLeft_${e}`]],$tooltipRight:(t,{Size:e})=>[t.slider.tooltipRight,t.slider[`tooltipRight_${e}`]]},$wrapper:(t,{Size:e})=>[t.wrapper,t[`wrapper_${e}`]]}}}},fv=`.vf-slider-wrapper {
  margin-top: calc((var(--vf-min-height-input) - var(--vf-slider-height)) / 2);
}

.vf-slider-wrapper.vf-slider-wrapper-sm {
  margin-top: calc((var(--vf-min-height-input-sm) - var(--vf-slider-height)) / 2);
  margin-bottom: 0.25rem;
}

.vf-slider-wrapper.vf-slider-wrapper-lg {
  margin-top: calc((var(--vf-min-height-input-lg) - var(--vf-slider-height)) / 2);
}

/* @vueform/slider styles */

.vf-slider-target,
.vf-slider-target * {
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  touch-action: none;
  -moz-user-select: none;
  user-select: none;
  box-sizing: border-box;
}

.vf-slider-target {
  position: relative;
  margin: calc((var(--vf-line-height) - var(--vf-slider-height)) / 2) 0;
}

.vf-slider-target[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}

.vf-slider-target.vf-slider-target-sm {
  margin: calc((var(--vf-line-height-sm) - var(--vf-slider-height-sm)) / 2) 0;
}

.vf-slider-target.vf-slider-target-lg {
  margin: calc((var(--vf-line-height-lg) - var(--vf-slider-height-lg)) / 2) 0;
}

.vf-slider-target.vf-slider-horizontal {
  height: var(--vf-slider-height);
}

.vf-slider-target.vf-slider-horizontal.vf-slider-horizontal-sm {
  height: var(--vf-slider-height-sm);
}

.vf-slider-target.vf-slider-horizontal.vf-slider-horizontal-lg {
  height: var(--vf-slider-height-lg);
}

.vf-slider-target.vf-slider-vertical {
  width: var(--vf-slider-height);
  height: var(--vf-slider-height-vertical);
}

.vf-slider-target.vf-slider-vertical.vf-slider-vertical-sm {
  width: var(--vf-slider-height-sm);
  height: var(--vf-slider-height-vertical-sm);
}

.vf-slider-target.vf-slider-vertical.vf-slider-vertical-lg {
  width: var(--vf-slider-height-lg);
  height: var(--vf-slider-height-vertical-lg);
}

.vf-slider-target.vf-slider-state-drag * {
  cursor: inherit !important;
}

.vf-slider-base,
.vf-slider-connects {
  width: 100%;
  height: 100%;
  position: relative;
}

.vf-slider-base {
  box-shadow: var(--vf-shadow-input);
  background-color: var(--vf-bg-passive);
  border-radius: var(--vf-radius-slider);
  z-index: 1;
}

.vf-slider-base.vf-slider-base-sm {
  border-radius: var(--vf-radius-slider-sm);
}

.vf-slider-base.vf-slider-base-lg {
  border-radius: var(--vf-radius-slider-lg);
}

.vf-slider-connects {
  overflow: hidden;
  z-index: 0;
  border-radius: var(--vf-radius-slider);
}

.vf-slider-connects.vf-slider-connects-sm {
  border-radius: var(--vf-radius-slider-sm);
}

.vf-slider-connects.vf-slider-connects-lg {
  border-radius: var(--vf-radius-slider-lg);
}

.vf-slider-connect,
.vf-slider-origin {
  will-change: transform;
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  -ms-transform-origin: 0 0;
  -webkit-transform-origin: 0 0;
  -webkit-transform-style: preserve-3d;
  transform-origin: 0 0;
  transform-style: flat;
}

.vf-slider-connect {
  background: var(--vf-primary);
  border-radius: var(--vf-radius-slider);
  cursor: pointer;
}

.vf-slider-connect.vf-slider-connect-sm {
  border-radius: var(--vf-radius-slider-sm);
}

.vf-slider-connect.vf-slider-connect-lg {
  border-radius: var(--vf-radius-slider-lg);
}

[disabled] .vf-slider-connect {
  background: var(--vf-slider-connect-bg-disabled);
}

.vf-slider-txt-dir-rtl.vf-slider-horizontal .vf-slider-origin {
  left: 0;
  right: auto;
}

.vf-slider-vertical .vf-slider-origin {
  top: -100%;
  width: 0;
}

.vf-slider-horizontal .vf-slider-origin {
  height: 0;
}

.vf-slider-state-tap .vf-slider-connect,
.vf-slider-state-tap .vf-slider-origin {
  transition: transform 0.3s;
}

.vf-slider-handle {
  backface-visibility: hidden;
  position: absolute;
  width: var(--vf-slider-handle-size);
  height: var(--vf-slider-handle-size);
  background-color: var(--vf-bg-slider-handle);
  border-radius: 999px;
  box-shadow: var(--vf-shadow-handles);
  outline: 0px solid var(--vf-ring-color);
  outline-offset: 0;
  cursor: grab;
  transition: box-shadow 0.2s ease-in-out, color 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
}

.vf-slider-handle:focus {
  box-shadow: var(--vf-shadow-handles-focus);
  outline: var(--vf-ring-width) solid var(--vf-ring-color);
}

.vf-slider-handle:hover {
  box-shadow: var(--vf-shadow-handles-hover);
}

.vf-slider-handle.vf-slider-handle-sm {
  height: var(--vf-slider-handle-size-sm);
  width: var(--vf-slider-handle-size-sm);
}

.vf-slider-handle.vf-slider-handle-lg {
  height: var(--vf-slider-handle-size-lg);
  width: var(--vf-slider-handle-size-lg);
}

.vf-slider-horizontal .vf-slider-handle {
  top: calc((var(--vf-slider-handle-size) - var(--vf-slider-height)) / 2 * -1);
  right: calc(var(--vf-slider-handle-size) / 2 * -1);
}

.vf-slider-horizontal .vf-slider-handle.vf-slider-handle-sm {
  top: calc((var(--vf-slider-handle-size-sm) - var(--vf-slider-height-sm)) / 2 * -1);
  right: calc(var(--vf-slider-handle-size-sm) / 2 * -1);
}

.vf-slider-horizontal .vf-slider-handle.vf-slider-handle-lg {
  top: calc((var(--vf-slider-handle-size-lg) - var(--vf-slider-height-lg)) / 2 * -1);
  right: calc(var(--vf-slider-handle-size-lg) / 2 * -1);
}

.vf-slider-horizontal.vf-slider-txt-dir-rtl .vf-slider-handle {
  left: calc(var(--vf-slider-handle-width) / 2 * -1);
  right: auto;
}

.vf-slider-horizontal.vf-slider-txt-dir-rtl .vf-slider-handle.vf-slider-handle-sm {
  left: calc(var(--vf-slider-handle-width-sm) / 2 * -1);
}

.vf-slider-horizontal.vf-slider-txt-dir-rtl .vf-slider-handle.vf-slider-handle-lg {
  left: calc(var(--vf-slider-handle-width-lg) / 2 * -1);
}

.vf-slider-vertical {
  width: var(--vf-slider-height);
  height: var(--vf-slider-vertical-height);
}

.vf-slider-vertical .vf-slider-handle {
  bottom: calc(var(--vf-slider-handle-size) / 2 * -1);
  right: calc((var(--vf-slider-handle-size) - var(--vf-slider-height)) / 2 * -1);
}

.vf-slider-vertical .vf-slider-handle.vf-slider-handle-sm {
  bottom: calc(var(--vf-slider-handle-size-sm) / 2 * -1);
  right: calc((var(--vf-slider-handle-size-sm) - var(--vf-slider-height-sm)) / 2 * -1);
}

.vf-slider-vertical .vf-slider-handle.vf-slider-handle-lg {
  bottom: calc(var(--vf-slider-handle-size-lg) / 2 * -1);
  right: calc((var(--vf-slider-handle-size-lg) - var(--vf-slider-height-lg)) / 2 * -1);
}

.vf-slider-touch-area {
  height: 100%;
  width: 100%;
}

.vf-slider-tooltip {
  position: absolute;
  display: block;
  font-weight: 600;
  white-space: nowrap;
  min-width: 1.25rem;
  text-align: center;
  border: 1px solid var(--vf-border-color-slider-tooltip);
  background: var(--vf-primary);
  color: var(--vf-color-on-primary);
  font-size: var(--vf-font-size-small);
  line-height: var(--vf-line-height-small);
  letter-spacing: var(--vf-letter-spacing-small);
  padding: var(--vf-py-slider-tooltip) var(--vf-px-slider-tooltip);
  border-radius: var(--vf-radius-small);
}

.vf-slider-tooltip.vf-slider-tooltip-sm {
  font-size: var(--vf-font-size-small-sm);
  line-height: var(--vf-line-height-small-sm);
  letter-spacing: var(--vf-letter-spacing-small-sm);
  padding: var(--vf-py-slider-tooltip-sm) var(--vf-px-slider-tooltip-sm);
  border-radius: var(--vf-radius-small-sm);
}

.vf-slider-tooltip.vf-slider-tooltip-lg {
  font-size: var(--vf-font-size-small-lg);
  line-height: var(--vf-line-height-small-lg);
  letter-spacing: var(--vf-letter-spacing-small-lg);
  padding: var(--vf-py-slider-tooltip-lg) var(--vf-px-slider-tooltip-lg);
  border-radius: var(--vf-radius-small-lg);
}

.vf-slider-tooltip-focus .vf-slider-tooltip,
.vf-slider-tooltip-drag .vf-slider-tooltip {
  display: none !important;
}

.vf-slider-tooltip-focus.vf-slider-focused .vf-slider-tooltip:not(.vf-slider-tooltip-hidden),
.vf-slider-tooltip-drag.vf-slider-state-drag .vf-slider-tooltip:not(.vf-slider-tooltip-hidden),
.vf-slider-tooltip-drag .vf-slider-active .vf-slider-tooltip {
  display: block !important;
}

[disabled].vf-slider-target,
[disabled].vf-slider-handle,
[disabled] .vf-slider-handle {
  cursor: not-allowed;
}

.vf-slider-horizontal .vf-slider-tooltip-top {
  transform: translate(-50%, 0);
  left: 50%;
  bottom: calc(var(--vf-slider-handle-size) + var(--vf-slider-tooltip-distance));
}

.vf-slider-horizontal .vf-slider-tooltip-top:before {
  content: "";
  position: absolute;
  left: 50%;
  width: 0;
  height: 0;
  transform: translate(-50%);
  bottom: calc(var(--vf-slider-tooltip-arrow-size) * -2);
  border: var(--vf-slider-tooltip-arrow-size) solid transparent;
  border-top-color: inherit;
}

.vf-slider-horizontal .vf-slider-tooltip-top.vf-slider-tooltip-top-sm {
  bottom: calc(var(--vf-slider-handle-size-sm) + var(--vf-slider-tooltip-distance-sm));
}

.vf-slider-horizontal .vf-slider-tooltip-top.vf-slider-tooltip-top-sm:before {
  bottom: calc(var(--vf-slider-tooltip-arrow-size-sm) * -2);
  border: var(--vf-slider-tooltip-arrow-size-sm) solid transparent;
  border-top-color: inherit;
}

.vf-slider-horizontal .vf-slider-tooltip-top.vf-slider-tooltip-top-lg {
  bottom: calc(var(--vf-slider-handle-size-lg) + var(--vf-slider-tooltip-distance-lg));
}

.vf-slider-horizontal .vf-slider-tooltip-top.vf-slider-tooltip-top-lg:before {
  bottom: calc(var(--vf-slider-tooltip-arrow-size-lg) * -2);
  border: var(--vf-slider-tooltip-arrow-size-lg) solid transparent;
  border-top-color: inherit;
}

.vf-slider-horizontal .vf-slider-origin > .vf-slider-tooltip-top {
  bottom: calc((var(--vf-slider-handle-size) - var(--vf-slider-height)) / 2 + var(--vf-slider-tooltip-distance));
}

.vf-slider-horizontal .vf-slider-origin > .vf-slider-tooltip-top.vf-slider-tooltip-top-sm {
  bottom: calc((var(--vf-slider-handle-size-sm) - var(--vf-slider-height-sm)) / 2 + var(--vf-slider-tooltip-distance-sm));
}

.vf-slider-horizontal .vf-slider-origin > .vf-slider-tooltip-top.vf-slider-tooltip-top-lg {
  bottom: calc((var(--vf-slider-handle-size-lg) - var(--vf-slider-height-lg)) / 2 + var(--vf-slider-tooltip-distance-lg));
}

.vf-slider-horizontal .vf-slider-tooltip-bottom {
  transform: translate(-50%, 0);
  left: 50%;
  top: calc(var(--vf-slider-handle-size) + var(--vf-slider-tooltip-distance));
}

.vf-slider-horizontal .vf-slider-tooltip-bottom:before {
  content: "";
  position: absolute;
  left: 50%;
  width: 0;
  height: 0;
  transform: translate(-50%);
  top: calc(var(--vf-slider-tooltip-arrow-size) * -2);
  border: var(--vf-slider-tooltip-arrow-size) solid transparent;
  border-bottom-color: inherit;
}

.vf-slider-horizontal .vf-slider-tooltip-bottom.vf-slider-tooltip-bottom-sm {
  top: calc(var(--vf-slider-handle-size-sm) + var(--vf-slider-tooltip-distance-sm));
}

.vf-slider-horizontal .vf-slider-tooltip-bottom.vf-slider-tooltip-bottom-sm:before {
  top: calc(var(--vf-slider-tooltip-arrow-size-sm) * -2);
  border: var(--vf-slider-tooltip-arrow-size-sm) solid transparent;
  border-bottom-color: inherit;
}

.vf-slider-horizontal .vf-slider-tooltip-bottom.vf-slider-tooltip-bottom-lg {
  top: calc(var(--vf-slider-handle-size-lg) + var(--vf-slider-tooltip-distance-lg));
}

.vf-slider-horizontal .vf-slider-tooltip-bottom.vf-slider-tooltip-bottom-lg:before {
  top: calc(var(--vf-slider-tooltip-arrow-size-lg) * -2);
  border: var(--vf-slider-tooltip-arrow-size-lg) solid transparent;
  border-bottom-color: inherit;
}

.vf-slider-horizontal .vf-slider-origin > .vf-slider-tooltip-bottom {
  top: calc((var(--vf-slider-handle-size) - var(--vf-slider-height)) / 2 + var(--vf-slider-height) + var(--vf-slider-tooltip-distance));
}

.vf-slider-horizontal .vf-slider-origin > .vf-slider-tooltip-bottom.vf-slider-tooltip-bottom-sm {
  top: calc((var(--vf-slider-handle-size-sm) - var(--vf-slider-height-sm)) / 2 + var(--vf-slider-height-sm) + var(--vf-slider-tooltip-distance-sm));
}

.vf-slider-horizontal .vf-slider-origin > .vf-slider-tooltip-bottom.vf-slider-tooltip-bottom-lg {
  top: calc((var(--vf-slider-handle-size-lg) - var(--vf-slider-height-lg)) / 2 + var(--vf-slider-height-lg) + var(--vf-slider-tooltip-distance-lg));
}

.vf-slider-vertical .vf-slider-tooltip-left {
  transform: translate(0, -50%);
  top: 50%;
  right: calc(var(--vf-slider-handle-size) + var(--vf-slider-tooltip-distance));
}

.vf-slider-vertical .vf-slider-tooltip-left:before {
  content: "";
  position: absolute;
  top: 50%;
  width: 0;
  height: 0;
  transform: translateY(-50%);
  right: calc(var(--vf-slider-tooltip-arrow-size) * -2);
  border: var(--vf-slider-tooltip-arrow-size) solid transparent;
  border-left-color: inherit;
}

.vf-slider-vertical .vf-slider-tooltip-left.vf-slider-tooltip-left-sm {
  right: calc(var(--vf-slider-handle-size-sm) + var(--vf-slider-tooltip-distance-sm));
}

.vf-slider-vertical .vf-slider-tooltip-left.vf-slider-tooltip-left-sm:before {
  right: calc(var(--vf-slider-tooltip-arrow-size-sm) * -2);
  border: var(--vf-slider-tooltip-arrow-size-sm) solid transparent;
  border-left-color: inherit;
}

.vf-slider-vertical .vf-slider-tooltip-left.vf-slider-tooltip-left-lg {
  right: calc(var(--vf-slider-handle-siz-lg) + var(--vf-slider-tooltip-distanc-lg));
}

.vf-slider-vertical .vf-slider-tooltip-left.vf-slider-tooltip-left-lg:before {
  right: calc(var(--vf-slider-tooltip-arrow-size-sm) * -2);
  border: var(--vf-slider-tooltip-arrow-size-sm) solid transparent;
  border-left-color: inherit;
}

.vf-slider-vertical .vf-slider-origin > .vf-slider-tooltip-left {
  right: calc((var(--vf-slider-handle-size) - var(--vf-slider-height)) / 2 + var(--vf-slider-height) + var(--vf-slider-tooltip-distance));
}

.vf-slider-vertical .vf-slider-origin > .vf-slider-tooltip-left.vf-slider-tooltip-left-sm {
  right: calc((var(--vf-slider-handle-size-sm) - var(--vf-slider-height-sm)) / 2 + var(--vf-slider-height-sm) + var(--vf-slider-tooltip-distance-sm));
}

.vf-slider-vertical .vf-slider-origin > .vf-slider-tooltip-left.vf-slider-tooltip-left-lg {
  right: calc((var(--vf-slider-handle-size-lg) - var(--vf-slider-height-lg)) / 2 + var(--vf-slider-height-lg) + var(--vf-slider-tooltip-distance-lg));
}

.vf-slider-vertical .vf-slider-tooltip-right {
  transform: translate(0, -50%);
  top: 50%;
  left: calc(var(--vf-slider-handle-size) + var(--vf-slider-tooltip-distance));
}

.vf-slider-vertical .vf-slider-tooltip-right:before {
  content: "";
  position: absolute;
  top: 50%;
  width: 0;
  height: 0;
  transform: translateY(-50%);
  left: calc(var(--vf-slider-tooltip-arrow-size) * -2);
  border: var(--vf-slider-tooltip-arrow-size) solid transparent;
  border-right-color: inherit;
}

.vf-slider-vertical .vf-slider-tooltip-right.vf-slider-tooltip-right-sm {
  left: calc(var(--vf-slider-handle-size-sm) + var(--vf-slider-tooltip-distance-sm));
}

.vf-slider-vertical .vf-slider-tooltip-right.vf-slider-tooltip-right-sm:before {
  left: calc(var(--vf-slider-tooltip-arrow-size-sm) * -2);
  border: var(--vf-slider-tooltip-arrow-size-sm) solid transparent;
  border-right-color: inherit;
}

.vf-slider-vertical .vf-slider-tooltip-right.vf-slider-tooltip-right-lg {
  left: calc(var(--vf-slider-handle-size-lg) + var(--vf-slider-tooltip-distance-lg));
}

.vf-slider-vertical .vf-slider-tooltip-right.vf-slider-tooltip-right-lg:before {
  left: calc(var(--vf-slider-tooltip-arrow-size-lg) * -2);
  border: var(--vf-slider-tooltip-arrow-size-lg) solid transparent;
  border-right-color: inherit;
}

.vf-slider-vertical .vf-slider-origin > .vf-slider-tooltip-right {
  left: calc((var(--vf-slider-handle-size) - var(--vf-slider-height)) / 2 + var(--vf-slider-tooltip-distance));
}

.vf-slider-vertical .vf-slider-origin > .vf-slider-tooltip-right.vf-slider-tooltip-right-sm {
  left: calc((var(--vf-slider-handle-size-sm) - var(--vf-slider-height-sm)) / 2 + var(--vf-slider-tooltip-distance-sm));
}

.vf-slider-vertical .vf-slider-origin > .vf-slider-tooltip-right.vf-slider-tooltip-right-lg {
  left: calc((var(--vf-slider-handle-size-lg) - var(--vf-slider-height-lg)) / 2 + var(--vf-slider-tooltip-distance-lg));
}

.vf-slider-horizontal .vf-slider-origin > .vf-slider-tooltip {
  transform: translate(50%, 0);
  left: auto;
}

.vf-slider-vertical .vf-slider-origin > .vf-slider-tooltip {
  transform: translate(0, 50%);
  top: auto;
}

.vf-slider-active {
  cursor: grabbing;
}

.vf-slider-draggable {
  cursor: ew-resize;
}

.vf-slider-vertical .vf-slider-draggable {
  cursor: ns-resize;
}`;G(fv);Ro.__file="themes/vueform/templates/elements/SliderElement.vue";var ia={name:"StaticElement",data(){return{merge:!0,defaultClasses:{container:"",content:"",tag:""}}}};const vv=["innerHTML"],gv=["href","target","innerHTML"],mv=["href","target"],hv=["href","target"],bv=["src","alt","title","width","height"],wv=["src","alt","title","width","height"],yv=["innerHTML"];function kv(t,e,n,r,i,l){return t.wrap?(d(),L(F(t.elementLayout),{key:0,ref:"container"},Ie({element:U(()=>[h(" If content is HTML "),t.isHtml&&(t.resolvedContent||["img","hr"].indexOf(t.tag)!==-1)?(d(),v(ee,{key:0},[!t.tag&&t.allowHtml?(d(),v("div",q({key:0,class:t.classes.content,innerHTML:t.resolvedContent},t.attrs),null,16,vv)):h("v-if",!0),!t.tag&&!t.allowHtml?(d(),v("div",q({key:1,class:t.classes.content},t.attrs),Ce(t.content),17)):h("v-if",!0),t.tag==="a"?(d(),v("div",{key:2,class:f(t.classes.tag)},[t.allowHtml?(d(),v("a",q({key:0,href:t.href,target:t.target},t.attrs,{innerHTML:t.resolvedContent}),null,16,gv)):(d(),v("a",q({key:1,href:t.href,target:t.target},t.attrs),Ce(t.resolvedContent),17,mv))],2)):t.tag==="hr"?(d(),v("div",{key:3,class:f(t.classes.tag)},[w("hr",Oa(Ws(t.attrs)),null,16)],2)):t.tag==="img"?(d(),v("div",{key:4,class:f(t.classes.tag)},[t.href?(d(),v("a",{key:0,href:t.href,target:t.target},[w("img",q({src:t.src,alt:t.alt,title:t.title,width:t.width,height:t.height},t.attrs),null,16,bv)],8,hv)):(d(),v("img",q({key:1,src:t.src,alt:t.alt,title:t.title,width:t.width,height:t.height},t.attrs),null,16,wv))],2)):(d(),v("div",{key:5,class:f(t.classes.tag)},[t.allowHtml?(d(),L(F(t.tag),q({key:0,innerHTML:t.resolvedContent},t.attrs),null,16,["innerHTML"])):(d(),L(F(t.tag),Oa(q({key:1},t.attrs)),{default:U(()=>[Qs(Ce(t.resolvedContent),1)]),_:1},16))],2))],64)):t.resolvedContent?(d(),v(ee,{key:1},[h(" If content is component "),(d(),L(F(t.componentContent),{el$:t.el$},null,8,["el$"]))],2112)):(d(),v(ee,{key:2},[h(" If content is a slot "),D(t.$slots,"default",{el$:t.el$},()=>[(d(),L(F(t.slotContent),{el$:t.el$},null,8,["el$"]))])],2112))]),_:2},[le(t.elementSlots,(a,o)=>({name:o,fn:U(()=>[D(t.$slots,o,{el$:t.el$},()=>[(d(),L(F(a),{el$:t.el$},null,8,["el$"]))])])}))]),1536)):t.content&&t.isHtml?(d(),v("div",{key:1,class:f(t.classes.content),innerHTML:t.resolvedContent},null,10,yv)):t.content?(d(),L(F(t.componentContent),{key:2,ref:"container"},null,512)):(d(),v("div",{key:3,class:f(t.classes.container),ref:"container"},[D(t.$slots,"default",{el$:t.el$},()=>[(d(),L(F(t.slotContent),{el$:t.el$},null,8,["el$"]))])],2))}ia.render=kv;ia.__file="themes/blank/templates/elements/StaticElement.vue";var Do={name:"StaticElement",render:ia.render,data(){return{merge:!0,defaultClasses:{container:"vf-contains-link",content:"vf-static",content_sm:"vf-static-sm",content_md:"",content_lg:"vf-static-lg",content_top_1:"vf-static-tag-top-1",content_top_2:"vf-static-tag-top-2",content_top_3:"vf-static-tag-top-3",content_bottom_1:"vf-static-tag-bottom-1",content_bottom_2:"vf-static-tag-bottom-2",content_bottom_3:"vf-static-tag-bottom-3",tag:"vf-static-tag",tag_sm:"vf-static-tag-sm",tag_md:"",tag_lg:"vf-static-tag-lg",tag_top_1:"vf-static-tag-top-1",tag_top_2:"vf-static-tag-top-2",tag_top_3:"vf-static-tag-top-3",tag_bottom_1:"vf-static-tag-bottom-1",tag_bottom_2:"vf-static-tag-bottom-2",tag_bottom_3:"vf-static-tag-bottom-3",tag_left:"vf-static-tag-left",tag_center:"vf-static-tag-center",tag_right:"vf-static-tag-right",tag_p:"vf-static-tag-p",tag_h1:"vf-static-tag-h1",tag_h2:"vf-static-tag-h2",tag_h3:"vf-static-tag-h3",tag_h4:"vf-static-tag-h4",tag_blockquote:"vf-static-tag-blockquote",tag_a:"vf-static-tag-a",tag_hr:"vf-static-tag-hr",tag_img:"vf-static-tag-img",$content:(t,{Size:e,top:n,bottom:r})=>[t.content,t[`content_${e}`],n>=1?t[`content_top_${n}`]:null,r>=1?t[`content_bottom_${r}`]:null],$tag:(t,{Size:e,tag:n,align:r,top:i,bottom:l})=>[t.tag,t[`tag_${e}`],t[`tag_${n}`],r==="left"?t.tag_left:null,r==="center"?t.tag_center:null,r==="right"?t.tag_right:null,i>=1?t[`tag_top_${i}`]:null,l>=1?t[`tag_bottom_${l}`]:null]}}}},Cv="/* Styles contained in scss/_static.scss */";G(Cv);Do.__file="themes/vueform/templates/elements/StaticElement.vue";var aa={name:"TagsElement",components:{Multiselect:Qt},data(){return{merge:!0,defaultClasses:{container:"",select:{container:"",containerDisabled:"",containerOpen:"",containerOpenTop:"",containerActive:"",search:"",tags:"",tag:"",tagDisabled:"",tagRemove:"",tagRemoveIcon:"",tagsSearchWrapper:"",tagsSearch:"",tagsSearchCopy:"",placeholder:"",caret:"",caretOpen:"",clear:"",clearIcon:"",spinner:"",dropdown:"",dropdownTop:"",dropdownHidden:"",options:"",optionsTop:"",group:"",groupLabel:"",groupLabelPointable:"",groupLabelPointed:"",groupLabelSelected:"",groupLabelDisabled:"",groupLabelSelectedPointed:"",groupLabelSelectedDisabled:"",groupOptions:"",option:"",optionPointed:"",optionSelected:"",optionDisabled:"",optionSelectedPointed:"",optionSelectedDisabled:"",noOptions:"",noResults:"",fakeInput:"",spacer:""}}}}};function Av(t,e,n,r,i,l){const a=ue("ElementLabelFloating"),o=ue("Multiselect");return d(),L(F(t.elementLayout),{ref:"container"},Ie({element:U(()=>[t.hasFloating&&!t.empty?(d(),L(a,{key:0,visible:!t.empty},null,8,["visible"])):h("v-if",!0),h(" @vueform/multiselect copmonent "),Ee(o,q(t.fieldOptions,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=s=>t.value=s),classes:t.classes.select,id:t.fieldId,name:t.name,options:t.resolvedOptions,disabled:t.isDisabled,placeholder:t.Placeholder,attrs:t.attrs,aria:t.aria,locale:t.form$.locale$,onSelect:t.handleSelect,onDeselect:t.handleDeselect,onSearchChange:t.handleSearchChange,onTag:t.handleTag,onOpen:t.handleOpen,onClose:t.handleClose,onClear:t.handleClear,onPaste:t.handlePaste,ref:"input"}),Ie({_:2},[le({option:"option",noresults:"no-results",nooptions:"no-options",afterlist:"after-list",beforelist:"before-list",placeholder:"placeholder",grouplabel:"group-label",caret:"caret",clear:"clear",spinner:"spinner",default:"default"},(s,u)=>({name:u,fn:U(c=>[D(t.$slots,s,q(c,{el$:t.el$}),()=>[(d(),L(F(t.fieldSlots[s]),q(c,{el$:t.el$}),null,16,["el$"]))])])})),t.fieldOptions.mode=="tags"?{name:"tag",fn:U(({option:s,handleTagRemove:u,disabled:c})=>[D(t.$slots,"tag",{option:s,handleTagRemove:u,disabled:c,el$:t.el$},()=>[(d(),L(F(t.fieldSlots.tag),{option:s,handleTagRemove:u,disabled:c,el$:t.el$},null,8,["option","handleTagRemove","disabled","el$"]))])]),key:"0"}:void 0]),1040,["modelValue","classes","id","name","options","disabled","placeholder","attrs","aria","locale","onSelect","onDeselect","onSearchChange","onTag","onOpen","onClose","onClear","onPaste"])]),_:2},[le(t.elementSlots,(s,u)=>({name:u,fn:U(()=>[D(t.$slots,u,{el$:t.el$},()=>[(d(),L(F(s),{el$:t.el$},null,8,["el$"]))])])}))]),1536)}aa.render=Av;aa.__file="themes/blank/templates/elements/TagsElement.vue";var Mo={name:"TagsElement",render:aa.render,components:{Multiselect:Qt},data(){return{merge:!0,defaultClasses:{container:"vf-text-type",select:{tags:"vf-multiselect-tags",tags_sm:"vf-multiselect-tags-sm",tags_md:"",tags_lg:"vf-multiselect-tags-lg",tag:"vf-multiselect-tag",tag_sm:"vf-multiselect-tag-sm",tag_md:"",tag_lg:"vf-multiselect-tag-lg",tagDisabled:"vf-multiselect-tag-disabled",tagDisabled_sm:"",tagDisabled_md:"",tagDisabled_lg:"",tagWrapper:"vf-multiselect-tag-wrapper",tagWrapperBreak:"vf-multiselect-tag-wrapper-break",tagRemove:"vf-multiselect-tag-remove",tagRemove_sm:"vf-multiselect-tag-remove-sm",tagRemove_md:"",tagRemove_lg:"vf-multiselect-tag-remove-lg",tagRemoveIcon:"vf-multiselect-tag-remove-icon",tagsSearchWrapper:"vf-multiselect-tags-search-wrapper",tagsSearchWrapper_sm:"",tagsSearchWrapper_md:"",tagsSearchWrapper_lg:"",tagsSearch:"vf-multiselect-tags-search",tagsSearch_sm:"vf-multiselect-tags-search-sm",tagsSearch_md:"",tagsSearch_lg:"vf-multiselect-tags-search-lg",tagsSearchCopy:"vf-multiselect-tags-search-copy",container:"vf-multiselect",container_enabled:"",container_disabled:"vf-multiselect-disabled",container_success:"vf-multiselect-success",container_danger:"vf-multiselect-danger",container_sm:"vf-multiselect-sm",container_md:"",container_lg:"vf-multiselect-lg",containerDisabled:"",containerOpen:"vf-multiselect-open",containerOpenTop:"vf-multiselect-open-top",containerActive:"vf-multiselect-active",containerActive_enabled:"",wrapper:"vf-multiselect-wrapper",wrapper_sm:"vf-multiselect-wrapper-sm",wrapper_md:"",wrapper_lg:"vf-multiselect-wrapper-lg",search:"vf-multiselect-search",search_sm:"vf-multiselect-search-sm",search_md:"",search_lg:"vf-multiselect-search-lg",placeholder:"vf-multiselect-placeholder",placeholder_sm:"vf-multiselect-placeholder-sm",placeholder_md:"",placeholder_lg:"vf-multiselect-placeholder-lg",caret:"vf-multiselect-caret",caret_sm:"vf-multiselect-caret-sm",caret_md:"",caret_lg:"vf-multiselect-caret-lg",caretOpen:"vf-multiselect-caret-open",clear:"vf-multiselect-clear",clear_sm:"vf-multiselect-clear-sm",clear_md:"",clear_lg:"vf-multiselect-clear-lg",clearIcon:"vf-multiselect-clear-icon",spinner:"vf-multiselect-spinner",spinner_sm:"vf-multiselect-spinner-sm",spinner_md:"",spinner_lg:"vf-multiselect-spinner-lg",infinite:"vf-multiselect-infinite",infinite_sm:"vf-multiselect-infinite-sm",infinite_md:"",infinite_lg:"vf-multiselect-infinite-lg",infiniteSpinner:"vf-multiselect-infinite-spinner",dropdown:"vf-multiselect-dropdown",dropdown_sm:"vf-multiselect-dropdown-sm",dropdown_md:"",dropdown_lg:"vf-multiselect-dropdown-lg",dropdownTop:"vf-multiselect-dropdown-top",dropdownTop_sm:"vf-multiselect-dropdown-top-sm",dropdownTop_md:"",dropdownTop_lg:"vf-multiselect-dropdown-top-lg",dropdownHidden:"vf-multiselect-dropdown-hidden",options:"vf-multiselect-options",optionsTop:"vf-multiselect-options-top",group:"vf-multiselect-group",groupLabel:"vf-multiselect-group-label",groupLabel_sm:"vf-multiselect-group-label-sm",groupLabel_md:"",groupLabel_lg:"vf-multiselect-group-label-lg",groupLabelPointable:"vf-multiselect-group-label-pointable",groupLabelPointed:"vf-multiselect-group-label-pointed",groupLabelSelected:"vf-multiselect-group-label-selected",groupLabelDisabled:"vf-multiselect-group-label-disabled",groupLabelSelectedPointed:"vf-multiselect-group-label-selected vf-multiselect-group-label-pointed",groupLabelSelectedDisabled:"vf-multiselect-group-label-selected vf-multiselect-group-label-disabled",groupOptions:"vf-multiselect-group-options",option:"vf-multiselect-option",option_sm:"vf-multiselect-option-sm",option_md:"",option_lg:"vf-multiselect-option-lg",optionPointed:"vf-multiselect-option-pointed",optionSelected:"vf-multiselect-option-selected",optionDisabled:"vf-multiselect-option-disabled",optionSelectedPointed:"vf-multiselect-option-selected vf-multiselect-option-pointed",optionSelectedDisabled:"vf-multiselect-option-selected vf-multiselect-option-disabled",noOptions:"vf-multiselect-no-options",noOptions_sm:"vf-multiselect-no-options-sm",noOptions_md:"",noOptions_lg:"vf-multiselect-no-options-lg",noResults:"vf-multiselect-no-results",noResults_sm:"vf-multiselect-no-results-sm",noResults_md:"",noResults_lg:"vf-multiselect-no-results-lg",fakeInput:"vf-multiselect-fake-input",assist:"vf-assistive-text",spacer:"vf-multiselect-spacer",spacer_sm:"vf-multiselect-spacer-sm",spacer_md:"",spacer_lg:"vf-multiselect-spacer-lg",$container:(t,{Size:e,isDanger:n,isSuccess:r,isDisabled:i})=>[t.select.container,t.select[`container_${e}`],i?t.select.container_disabled:null,!i&&!r&&!n?t.select.container_enabled:null,!i&&n?t.select.container_danger:null,!i&&r?t.select.container_success:null],$containerActive:(t,{Size:e,isDanger:n,isSuccess:r,isDisabled:i})=>[t.select.containerActive,t.select[`container_${e}`],!i&&!r&&!n?t.select.containerActive_enabled:null],$wrapper:(t,{Size:e})=>[t.select.wrapper,t.select[`wrapper_${e}`]],$search:(t,{Size:e})=>[t.select.search,t.select[`search_${e}`]],$placeholder:(t,{Size:e})=>[t.select.placeholder,t.select[`placeholder_${e}`]],$caret:(t,{Size:e})=>[t.select.caret,t.select[`caret_${e}`]],$clear:(t,{Size:e})=>[t.select.clear,t.select[`clear_${e}`]],$spinner:(t,{Size:e})=>[t.select.spinner,t.select[`spinner_${e}`]],$infinite:(t,{Size:e})=>[t.select.infinite,t.select[`infinite_${e}`]],$dropdown:(t,{Size:e})=>[t.select.dropdown,t.select[`dropdown_${e}`]],$dropdownTop:(t,{Size:e})=>[t.select.dropdownTop,t.select[`dropdownTop_${e}`]],$groupLabel:(t,{Size:e})=>[t.select.groupLabel,t.select[`groupLabel_${e}`]],$option:(t,{Size:e})=>[t.select.option,t.select[`option_${e}`]],$spacer:(t,{Size:e})=>[t.select.spacer,t.select[`spacer_${e}`]],$noOptions:(t,{Size:e})=>[t.select.noOptions,t.select[`noOptions_${e}`]],$noResults:(t,{Size:e})=>[t.select.noResults,t.select[`noResults_${e}`]],$tags:(t,{Size:e})=>[t.select.tags,t.select[`tags_${e}`]],$tag:(t,{Size:e})=>[t.select.tag,t.select[`tag_${e}`]],$tagDisabled:(t,{Size:e})=>[t.select.tagDisabled,t.select[`tagDisabled_${e}`]],$tagRemove:(t,{Size:e})=>[t.select.tagRemove,t.select[`tagRemove_${e}`]],$tagsSearchWrapper:(t,{Size:e})=>[t.select.tagsSearchWrapper,t.select[`tagsSearchWrapper_${e}`]],$tagsSearch:(t,{Size:e})=>[t.select.tagsSearch,t.select[`tagsSearch_${e}`]]},$input:(t,{isDisabled:e,Size:n,isDanger:r,isSuccess:i})=>[t.input,t[`input_${n}`],e?t.input_disabled:null,!e&&!i&&!r?t.input_enabled:null,!e&&r?t.input_danger:null,!e&&i?t.input_success:null],$inputWrapper:(t,{Size:e})=>[t.inputWrapper,t[`inputWrapper_${e}`]]}}}},Ev=`/* Some styles are contained in SelectElement.vue */

.vf-multiselect-tags {
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  flex-wrap: wrap;
  margin: var(--vf-space-tags) 0 0;
  padding-left: var(--vf-py-input);
  align-items: center;
  min-width: 0;
}

.vf-multiselect-tags.vf-multiselect-tags-sm {
  padding-left: var(--vf-py-input-sm);
}

.vf-multiselect-tags.vf-multiselect-tags-lg {
  padding-left: var(--vf-py-input-lg);
}

.vf-floating-wrapper ~ .vf-multiselect-tags,
.vf-floating-wrapper ~ div .vf-multiselect-tags {
  padding-left: var(--vf-px-input);
  margin: calc(var(--vf-space-tags) + var(--vf-floating-top) + 0.34375rem - 1px) 0 0;
}

.vf-floating-wrapper ~ .vf-multiselect-tags-sm,
.vf-floating-wrapper ~ div .vf-multiselect-tags-sm {
  padding-left: var(--vf-px-input-sm);
  margin: calc(var(--vf-space-tags-sm) + var(--vf-floating-top-sm) + 0.34375rem - 1px) 0 0;
}

.vf-floating-wrapper ~ .vf-multiselect-tags-lg,
.vf-floating-wrapper ~ div .vf-multiselect-tags-lg {
  padding-left: var(--vf-px-input-lg);
  margin: calc(var(--vf-space-tags-lg) + var(--vf-floating-top-lg) + 0.34375rem - 1px) 0 0;
}

.vf-multiselect-tag {
  background: var(--vf-bg-tag);
  color: var(--vf-color-tag);
  border-style: solid;
  border-width: var(--vf-border-width-tag);
  border-color: var(--vf-border-color-tag);
  font-size: var(--vf-font-size-small);
  line-height: var(--vf-line-height-small);
  letter-spacing: var(--vf-letter-spacing-small);
  font-weight: 600;
  padding: var(--vf-py-tag) 0 var(--vf-py-tag) var(--vf-px-tag);
  border-radius: var(--vf-radius-tag);
  margin-right: var(--vf-space-tags);
  margin-bottom: var(--vf-space-tags);
  display: flex;
  align-items: center;
  white-space: nowrap;
  min-width: 0;
}

.vf-multiselect-tag.vf-multiselect-tag-disabled {
  padding-right: var(--vf-px-tag);
  opacity: 0.5;
}

.vf-multiselect-tag.vf-multiselect-tag-sm {
  font-size: var(--vf-font-size-small-sm);
  line-height: var(--vf-line-height-small-sm);
  letter-spacing: var(--vf-letter-spacing-small-sm);
  border-radius: var(--vf-radius-tag-sm);
  padding: var(--vf-py-tag-sm) 0 var(--vf-py-tag-sm) var(--vf-px-tag-sm);
}

.vf-multiselect-tag.vf-multiselect-tag-sm.vf-multiselect-tag-disabled {
  padding-right: var(--vf-px-tag-sm);
}

.vf-multiselect-tag.vf-multiselect-tag-lg {
  font-size: var(--vf-font-size-small-lg);
  line-height: var(--vf-line-height-small-lg);
  letter-spacing: var(--vf-letter-spacing-small-lg);
  border-radius: var(--vf-radius-tag-lg);
  padding: var(--vf-py-tag-lg) 0 var(--vf-py-tag-lg) var(--vf-px-tag-lg);
}

.vf-multiselect-tag.vf-multiselect-tag-lg.vf-multiselect-tag-disabled {
  padding-right: var(--vf-px-tag-lg);
}

.vf-multiselect-tag-wrapper {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.vf-multiselect-tag-wrapper-break {
  white-space: normal;
  word-break: break-all;
}

.vf-multiselect-tag-remove {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  margin: 0 0.125rem;
  border-radius: var(--vf-radius-tag);
}

.vf-multiselect-tag-remove:hover {
  background: rgba(0, 0, 0, 0.1);
}

.vf-multiselect-tag-remove.vf-multiselect-tag-remove-sm {
  border-radius: var(--vf-radius-tag-sm);
}

.vf-multiselect-tag-remove.vf-multiselect-tag-remove-lg {
  border-radius: var(--vf-radius-tag-lg);
}

.vf-multiselect-tag-remove-icon {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  mask-position: center;
  -webkit-mask-position: center;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-size: contain;
  -webkit-mask-size: contain;
  background-color: currentColor;
  display: inline-block;
  width: 0.75rem;
  height: 0.75rem;
}

.vf-multiselect-tags-search-wrapper {
  display: inline-block;
  position: relative;
  margin: 0 var(--vf-space-tags) var(--vf-space-tags);
  flex-grow: 1;
  flex-shrink: 1;
  height: 100%;
  max-width: 100%;
}

.vf-multiselect-tags-search-copy {
  visibility: hidden;
  white-space: pre-wrap;
  display: inline-block;
  height: 1px;
  width: 100%;
}

.vf-multiselect-tags-search {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border: 0;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  outline: none;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
  box-sizing: border-box;
  width: 100%;
  appearance: none;
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
  background-color: transparent;
  padding-right: 0.5rem;
}

.vf-multiselect-tags-search::-webkit-search-decoration, .vf-multiselect-tags-search::-webkit-search-cancel-button, .vf-multiselect-tags-search::-webkit-search-results-button, .vf-multiselect-tags-search::-webkit-search-results-decoration {
  -webkit-appearance: none;
}

.vf-multiselect-tags-search.vf-multiselect-tags-search-sm {
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-sm);
}

.vf-multiselect-tags-search.vf-multiselect-tags-search-lg {
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
}

[dir=rtl] .vf-multiselect-tags {
  padding-left: 0;
  padding-right: var(--vf-py-input);
}

[dir=rtl] .vf-multiselect-tags.vf-multiselect-tags-sm {
  padding-right: var(--vf-py-input-sm);
}

[dir=rtl] .vf-multiselect-tags.vf-multiselect-tags-lg {
  padding-right: var(--vf-py-input-lg);
}

[dir=rtl] .vf-floating-wrapper ~ .vf-multiselect-tags,
[dir=rtl] .vf-floating-wrapper ~ div .vf-multiselect-tags {
  padding-left: 0;
  padding-right: var(--vf-px-input);
}

[dir=rtl] .vf-floating-wrapper ~ .vf-multiselect-tags-sm,
[dir=rtl] .vf-floating-wrapper ~ div .vf-multiselect-tags-sm {
  padding-left: 0;
  padding-right: var(--vf-px-input-sm);
}

[dir=rtl] .vf-floating-wrapper ~ .vf-multiselect-tags-lg,
[dir=rtl] .vf-floating-wrapper ~ div .vf-multiselect-tags-lg {
  padding-left: 0;
  padding-right: var(--vf-px-input-lg);
}

[dir=rtl] .vf-multiselect-tag {
  padding: var(--vf-py-tag) var(--vf-px-tag) var(--vf-py-tag) 0;
  margin-right: 0;
  margin-left: var(--vf-space-tags);
}

[dir=rtl] .vf-multiselect-tag.is-disabled {
  padding-left: ar(--vf-px-tag);
}`;G(Ev);Mo.__file="themes/vueform/templates/elements/TagsElement.vue";var Un={name:"TextareaElement",data(){return{merge:!0,defaultClasses:{container:"",inputContainer:"",input:""}}}};const Lv=["value","name","id","placeholder","disabled","readonly","rows","data-autogrow"];function xv(t,e,n,r,i,l){const a=ue("ElementAddon"),o=ue("ElementLabelFloating"),s=ue("ElementLoader");return d(),L(F(t.elementLayout),{ref:"container"},Ie({element:U(()=>[w("div",{class:f(t.classes.inputContainer)},[t.hasAddonBefore?(d(),L(a,{key:0,type:"before"},{default:U(()=>[D(t.$slots,"addon-before",{},()=>[(d(),L(F(t.fieldSlots["addon-before"]),{el$:t.el$},null,8,["el$"]))])]),_:3})):h("v-if",!0),t.hasAddonAfter?(d(),L(a,{key:1,type:"after"},{default:U(()=>[D(t.$slots,"addon-after",{},()=>[(d(),L(F(t.fieldSlots["addon-after"]),{el$:t.el$},null,8,["el$"]))])]),_:3})):h("v-if",!0),t.hasFloating&&!t.empty?(d(),L(o,{key:2,visible:!t.empty},null,8,["visible"])):h("v-if",!0),Fe(Ee(s,null,null,512),[[ft,t.pending]]),w("textarea",q({value:t.model,name:t.name,id:t.fieldId,class:t.classes.input,placeholder:t.Placeholder,disabled:t.isDisabled,readonly:t.readonly,rows:t.rows},{...t.attrs,...t.aria},{"data-autogrow":t.autogrow||void 0,onKeydown:e[0]||(e[0]=(...u)=>t.handleKeydown&&t.handleKeydown(...u)),onKeyup:e[1]||(e[1]=(...u)=>t.handleKeyup&&t.handleKeyup(...u)),onKeypress:e[2]||(e[2]=(...u)=>t.handleKeypress&&t.handleKeypress(...u)),onInput:e[3]||(e[3]=(...u)=>t.handleInput&&t.handleInput(...u)),onBlur:e[4]||(e[4]=(...u)=>t.handleBlur&&t.handleBlur(...u)),ref:"input"}),null,16,Lv)],2)]),_:2},[le(t.elementSlots,(u,c)=>({name:c,fn:U(()=>[D(t.$slots,c,{el$:t.el$},()=>[(d(),L(F(u),{el$:t.el$},null,8,["el$"]))])])}))]),1536)}Un.render=xv;Un.__file="themes/blank/templates/elements/TextareaElement.vue";var Oo={name:"TextareaElement",render:Un.render,data(){return{merge:!0,defaultClasses:{container:"vf-text-type",inputContainer:"vf-input-group vf-input-group-textarea",inputContainer_sm:"vf-input-group-sm",inputContainer_md:"",inputContainer_lg:"vf-input-group-lg",inputContainer_default:"",inputContainer_disabled:"vf-input-group-disabled",inputContainer_focused:"vf-input-group-focused",inputContainer_success:"vf-input-group-success",inputContainer_danger:"vf-input-group-danger",input:"vf-input-field",input_sm:"",input_md:"",input_lg:"",input_enabled:"",input_disabled:"",input_focused:"",input_success:"",input_danger:"",$inputContainer:(t,{isDisabled:e,Size:n,isSuccess:r,isDanger:i,focused:l})=>[t.inputContainer,t[`inputContainer_${n}`],e?t.inputContainer_disabled:null,!e&&!r&&!i?t.inputContainer_default:null,!e&&l?t.inputContainer_focused:null,!e&&r?t.inputContainer_success:null,!e&&i?t.inputContainer_danger:null],$input:(t,{isDisabled:e,Size:n,isSuccess:r,isDanger:i,focused:l})=>[t.input,t[`input_${n}`],e?t.input_disabled:null,!e&&!r&&!i&&!l?t.input_enabled:null,!e&&l&&!r&&!i?t.input_focused:null,!e&&i?t.input_danger:null,!e&&r?t.input_success:null]}}}},Sv="/* Some styles are contained in Vueform.vue */";G(Sv);Oo.__file="themes/vueform/templates/elements/TextareaElement.vue";var Vn={name:"TextElement",data(){return{merge:!0,defaultClasses:{container:"",inputContainer:"",input:""}}}};const Tv=["value","type","name","id","placeholder","autocomplete","disabled","readonly"];function Bv(t,e,n,r,i,l){const a=ue("ElementAddon"),o=ue("ElementLabelFloating"),s=ue("ElementLoader");return d(),L(F(t.elementLayout),{ref:"container"},Ie({element:U(()=>[w("div",{class:f(t.classes.inputContainer)},[t.hasAddonBefore?(d(),L(a,{key:0,type:"before"},{default:U(()=>[D(t.$slots,"addon-before",{},()=>[(d(),L(F(t.fieldSlots["addon-before"]),{el$:t.el$},null,8,["el$"]))])]),_:3})):h("v-if",!0),t.hasAddonAfter?(d(),L(a,{key:1,type:"after"},{default:U(()=>[D(t.$slots,"addon-after",{},()=>[(d(),L(F(t.fieldSlots["addon-after"]),{el$:t.el$},null,8,["el$"]))])]),_:3})):h("v-if",!0),t.hasFloating&&!t.empty?(d(),L(o,{key:2,visible:!t.empty},null,8,["visible"])):h("v-if",!0),t.isLoading?(d(),L(s,{key:3})):h("v-if",!0),w("input",q({value:t.model,type:t.inputType,name:t.name,id:t.fieldId,class:t.classes.input,placeholder:t.Placeholder,autocomplete:t.autocomplete,disabled:t.isDisabled,readonly:t.readonly},{...t.attrs,...t.aria},{onKeydown:e[0]||(e[0]=(...u)=>t.handleKeydown&&t.handleKeydown(...u)),onKeyup:e[1]||(e[1]=(...u)=>t.handleKeyup&&t.handleKeyup(...u)),onKeypress:e[2]||(e[2]=(...u)=>t.handleKeypress&&t.handleKeypress(...u)),onInput:e[3]||(e[3]=(...u)=>t.handleInput&&t.handleInput(...u)),onSelect:e[4]||(e[4]=(...u)=>t.handleInput&&t.handleInput(...u)),onBlur:e[5]||(e[5]=(...u)=>t.handleBlur&&t.handleBlur(...u)),ref:"input"}),null,16,Tv)],2)]),_:2},[le(t.elementSlots,(u,c)=>({name:c,fn:U(()=>[D(t.$slots,c,{el$:t.el$},()=>[(d(),L(F(u),{el$:t.el$},null,8,["el$"]))])])}))]),1536)}Vn.render=Bv;Vn.__file="themes/blank/templates/elements/TextElement.vue";var Fo={name:"TextElement",render:Vn.render,data(){return{merge:!0,defaultClasses:{container:"vf-text-type",inputContainer:"vf-input-group",inputContainer_sm:"vf-input-group-sm",inputContainer_md:"",inputContainer_lg:"vf-input-group-lg",inputContainer_default:"",inputContainer_disabled:"vf-input-group-disabled",inputContainer_focused:"vf-input-group-focused",inputContainer_success:"vf-input-group-success",inputContainer_danger:"vf-input-group-danger",input:"vf-input-field",input_sm:"",input_md:"",input_lg:"",input_enabled:"",input_disabled:"",input_focused:"",input_success:"",input_danger:"",$inputContainer:(t,{isDisabled:e,Size:n,isSuccess:r,isDanger:i,focused:l})=>[t.inputContainer,t[`inputContainer_${n}`],e?t.inputContainer_disabled:null,!e&&!r&&!i?t.inputContainer_default:null,!e&&l?t.inputContainer_focused:null,!e&&r?t.inputContainer_success:null,!e&&i?t.inputContainer_danger:null],$input:(t,{isDisabled:e,Size:n,isSuccess:r,isDanger:i,focused:l})=>[t.input,t[`input_${n}`],e?t.input_disabled:null,!e&&!r&&!i&&!l?t.input_enabled:null,!e&&l&&!r&&!i?t.input_focused:null,!e&&i?t.input_danger:null,!e&&r?t.input_success:null]}}}},Iv="/* Some styles are contained in Vueform.vue */";G(Iv);Fo.__file="themes/vueform/templates/elements/TextElement.vue";function Rv(t,e,n){const{value:r,modelValue:i,falseValue:l,trueValue:a,disabled:o}=Pe(t),s=i&&i.value!==void 0?i:r,u=K(()=>s.value===a.value),c=C=>{e.emit("input",C),e.emit("update:modelValue",C),e.emit("change",C)},A=()=>{c(a.value)},k=()=>{c(l.value)},x=C=>{c(C.target.checked?a.value:l.value)},y=()=>{o.value||(u.value?k():A())};return[null,void 0,!1,0,"0","off"].indexOf(s.value)!==-1&&[l.value,a.value].indexOf(s.value)===-1&&k(),[!0,1,"1","on"].indexOf(s.value)!==-1&&[l.value,a.value].indexOf(s.value)===-1&&A(),{externalValue:s,checked:u,update:c,check:A,uncheck:k,handleInput:x,handleClick:y}}function Dv(t,e,n){const{trueValue:r,falseValue:i,onLabel:l,offLabel:a}=Pe(t),o=n.checked,s=n.update;return{label:K(()=>{let x=o.value?l.value:a.value;return x||(x="&nbsp;"),x}),toggle:()=>{s(o.value?i.value:r.value)},on:()=>{s(r.value)},off:()=>{s(i.value)}}}function Mv(t,e,n){const r=Pe(t),i=r.disabled,l=n.checked,a=K(()=>({container:"toggle-container",toggle:"toggle",toggleOn:"toggle-on",toggleOff:"toggle-off",toggleOnDisabled:"toggle-on-disabled",toggleOffDisabled:"toggle-off-disabled",handle:"toggle-handle",handleOn:"toggle-handle-on",handleOff:"toggle-handle-off",handleOnDisabled:"toggle-handle-on-disabled",handleOffDisabled:"toggle-handle-off-disabled",label:"toggle-label",...r.classes.value}));return{classList:K(()=>({container:a.value.container,toggle:[a.value.toggle,i.value?l.value?a.value.toggleOnDisabled:a.value.toggleOffDisabled:l.value?a.value.toggleOn:a.value.toggleOff],handle:[a.value.handle,i.value?l.value?a.value.handleOnDisabled:a.value.handleOffDisabled:l.value?a.value.handleOn:a.value.handleOff],label:a.value.label}))}}function Ov(t,e,n){const{disabled:r}=Pe(t),i=n.check,l=n.uncheck,a=n.checked;return{handleSpace:()=>{r.value||(a.value?l():i())}}}const Fv={value:{validator:function(t){return e=>["number","string","boolean"].indexOf(typeof e)!==-1||e===null||e===void 0},required:!1},modelValue:{validator:function(t){return e=>["number","string","boolean"].indexOf(typeof e)!==-1||e===null||e===void 0},required:!1}};var Er={name:"Toggle",emits:["input","update:modelValue","change"],props:{...Fv,id:{type:[String,Number],required:!1,default:"toggle"},name:{type:[String,Number],required:!1,default:"toggle"},disabled:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},falseValue:{type:[String,Number,Boolean],required:!1,default:!1},trueValue:{type:[String,Number,Boolean],required:!1,default:!0},onLabel:{type:[String,Object],required:!1,default:""},offLabel:{type:[String,Object],required:!1,default:""},classes:{type:Object,required:!1,default:()=>({})},labelledby:{type:String,required:!1},describedby:{type:String,required:!1},aria:{required:!1,type:Object,default:()=>({})}},setup(t,e){const n=Rv(t,e),r=Dv(t,e,{checked:n.checked,update:n.update}),i=Mv(t,e,{checked:n.checked}),l=Ov(t,e,{check:n.check,uncheck:n.uncheck,checked:n.checked});return{...n,...i,...r,...l}}};const Pv=["tabindex","aria-checked","aria-describedby","aria-labelledby"],$v=["id","name","value","checked","disabled"],zv=["innerHTML"],Nv=["checked"];function Hv(t,e,n,r,i,l){return d(),v("div",q({class:t.classList.container,tabindex:n.disabled?void 0:0,"aria-checked":t.checked,"aria-describedby":n.describedby,"aria-labelledby":n.labelledby,role:"switch"},n.aria,{onKeypress:e[1]||(e[1]=We(he((...a)=>t.handleSpace&&t.handleSpace(...a),["prevent"]),["space"]))}),[Fe(w("input",{type:"checkbox",id:n.id,name:n.name,value:n.trueValue,checked:t.checked,disabled:n.disabled},null,8,$v),[[ft,!1]]),w("div",{class:f(t.classList.toggle),onClick:e[0]||(e[0]=(...a)=>t.handleClick&&t.handleClick(...a))},[w("span",{class:f(t.classList.handle)},null,2),D(t.$slots,"label",{checked:t.checked,classList:t.classList},()=>[w("span",{class:f(t.classList.label),innerHTML:t.label},null,10,zv)]),n.required?(d(),v("input",{key:0,type:"checkbox",style:{appearance:"none",height:"1px",margin:"0",padding:"0",fontSize:"0",background:"transparent",position:"absolute",width:"100%",bottom:"0",outline:"none"},checked:t.checked,"aria-hidden":"true",tabindex:"-1",required:""},null,8,Nv)):h("v-if",!0)],2)],16,Pv)}Er.render=Hv;Er.__file="node_modules/@vueform/toggle/src/Toggle.vue";var la={name:"ToggleElement",components:{Toggle:Er},data(){return{merge:!0,defaultClasses:{container:"",wrapper:"",toggle:{container:"",toggle:"",toggleOn:"",toggleOff:"",toggleOnDisabled:"",toggleOffDisabled:"",handle:"",handleOn:"",handleOff:"",handleOnDisabled:"",handleOffDisabled:"",label:""},text:""}}}};const jv=["innerHTML"];function Uv(t,e,n,r,i,l){const a=ue("Toggle");return d(),L(F(t.elementLayout),{ref:"container"},Ie({element:U(()=>[w("div",{class:f(t.classes.wrapper)},[h(" @vueform/toggle component "),Ee(a,q({value:t.value,modelValue:t.value},t.fieldOptions,{classes:t.classes.toggle,name:t.name,id:t.fieldId,aria:t.aria,onInput:t.handleChange,ref:"input"}),null,16,["value","modelValue","classes","name","id","aria","onInput"]),t.Text?(d(),v("span",{key:0,class:f(t.classes.text),innerHTML:t.Text},null,10,jv)):(d(),v("span",{key:1,class:f(t.classes.text)},[D(t.$slots,"default",{el$:t.el$},()=>[(d(),L(F(t.fieldSlots.default),{el$:t.el$},null,8,["el$"]))])],2))],2)]),_:2},[le(t.elementSlots,(o,s)=>({name:s,fn:U(()=>[D(t.$slots,s,{el$:t.el$},()=>[(d(),L(F(o),{el$:t.el$},null,8,["el$"]))])])}))]),1536)}la.render=Uv;la.__file="themes/blank/templates/elements/ToggleElement.vue";var Po={name:"ToggleElement",render:la.render,components:{Toggle:Er},data(){return{merge:!0,defaultClasses:{container:"vf-contains-link",wrapper:"vf-toggle-wrapper",wrapper_left:"vf-toggle-wrapper-left",wrapper_right:"vf-toggle-wrapper-right",text:"vf-toggle-text",text_sm:"vf-toggle-text-sm",text_md:"",text_lg:"vf-toggle-text-lg",text_left:"vf-toggle-text-left",text_right:"vf-toggle-text-right",toggle:{container:"vf-toggle-container",container_enabled:"",container_disabled:"vf-toggle-container-disabled",toggle:"vf-toggle",toggle_sm:"vf-toggle-sm",toggle_md:"",toggle_lg:"vf-toggle-lg",toggleOn:"vf-toggle-on",toggleOff:"vf-toggle-off",toggleOnDisabled:"vf-toggle-on-disabled",toggleOffDisabled:"vf-toggle-off-disabled",handle:"vf-toggle-handle",handle_sm:"vf-toggle-handle-sm",handle_md:"",handle_lg:"vf-toggle-handle-lg",handleOn:"vf-toggle-handle-on",handleOff:"vf-toggle-handle-off",handleOnDisabled:"vf-toggle-handle-on-disabled",handleOffDisabled:"vf-toggle-handle-off-disabled",label:"vf-toggle-label",label_sm:"vf-toggle-label-sm",label_md:"",label_lg:"vf-toggle-label-lg",$container:(t,{Size:e,isDisabled:n})=>[t.toggle.container,t.toggle[`container_${e}`],n?t.toggle.container_disabled:t.toggle.container_enabled],$toggle:(t,{Size:e})=>[t.toggle.toggle,t.toggle[`toggle_${e}`]],$handle:(t,{Size:e})=>[t.toggle.handle,t.toggle[`handle_${e}`]],$label:(t,{Size:e})=>[t.toggle.label,t.toggle[`label_${e}`]]},$text:(t,{Size:e,align:n})=>[t.text,t[`text_${e}`],n==="left"?t.text_left:null,n==="right"?t.text_right:null],$wrapper:(t,{align:e})=>[t.wrapper,e==="left"?t.wrapper_left:null,e==="right"?t.wrapper_right:null]}}}},Vv=`.vf-toggle-wrapper {
  display: flex;
  align-items: flex-start;
  width: 100%;
}

.vf-toggle-text {
  margin-left: var(--vf-space-checkbox);
}

.vf-toggle-text.vf-toggle-text-sm {
  margin-left: var(--vf-space-checkbox-sm);
}

.vf-toggle-text.vf-toggle-text-lg {
  margin-left: var(--vf-space-checkbox-lg);
}

/* @vueform/toggle styles */

.vf-toggle-container {
  display: inline-block;
  outline: 0px solid var(--vf-ring-color);
  outline-offset: 0;
  border-radius: 9999px;
  transition: box-shadow 0.15s ease-in-out, color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
  box-shadow: var(--vf-shadow-handles);
}

.vf-toggle-container:hover:not(.vf-toggle-container-disabled) {
  box-shadow: var(--vf-shadow-handles-hover);
}

.vf-toggle-container:focus {
  box-shadow: var(--vf-shadow-handles-focus);
  outline: var(--vf-ring-width) solid var(--vf-ring-color);
}

.vf-toggle-container.vf-toggle-container-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.vf-toggle {
  display: flex;
  border-radius: 999px;
  position: relative;
  cursor: pointer;
  transition: 0.3s all;
  align-items: center;
  box-sizing: content-box;
  border-width: var(--vf-border-width-toggle);
  border-style: solid;
  font-size: 0.75rem;
  width: var(--vf-toggle-width);
  height: var(--vf-toggle-height);
  line-height: 1;
}

.vf-toggle.vf-toggle-sm {
  width: var(--vf-toggle-width-sm);
  height: var(--vf-toggle-height-sm);
  font-size: 0.75rem;
}

.vf-toggle.vf-toggle-lg {
  width: var(--vf-toggle-width-lg);
  height: var(--vf-toggle-height-lg);
  font-size: 0.8125rem;
}

.vf-toggle-on {
  background: var(--vf-primary);
  border-color: var(--vf-primary);
  justify-content: flex-start;
  color: var(--vf-color-on-primary);
}

.vf-toggle-off {
  background: var(--vf-bg-passive);
  border-color: var(--vf-bg-passive);
  justify-content: flex-end;
  color: var(--vf-color-passive);
}

.vf-toggle-on-disabled {
  background: var(--vf-primary);
  border-color: var(--vf-primary);
  justify-content: flex-start;
  color: var(--vf-color-on-primary);
}

.vf-toggle-off-disabled {
  background: var(--vf-bg-passive);
  border-color: var(--vf-bg-passive);
  justify-content: flex-end;
  color: var(--vf-color-passive);
}

.vf-toggle-handle {
  display: inline-block;
  background: var(--vf-bg-toggle-handle);
  width: var(--vf-toggle-height);
  height: var(--vf-toggle-height);
  top: 0;
  border-radius: 50%;
  position: absolute;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.vf-toggle-handle.vf-toggle-handle-sm {
  width: var(--vf-toggle-height-sm);
  height: var(--vf-toggle-height-sm);
}

.vf-toggle-handle.vf-toggle-handle-lg {
  width: var(--vf-toggle-height-lg);
  height: var(--vf-toggle-height-lg);
}

.vf-toggle-handle-on {
  left: 100%;
  transform: translateX(-100%);
}

.vf-toggle-handle-off {
  left: 0%;
}

.vf-toggle-handle-on-disabled {
  left: 100%;
  transform: translateX(-100%);
  background: var(--vf-bg-toggle-handle);
}

.vf-toggle-handle-off-disabled {
  left: 0%;
  background: var(--vf-bg-toggle-handle);
}

.vf-toggle-label {
  text-align: center;
  width: calc(var(--vf-toggle-width) - var(--vf-toggle-height));
  box-sizing: border-box;
  white-space: nowrap;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}

.vf-toggle-label.vf-toggle-label-sm {
  width: calc(var(--vf-toggle-width-sm) - var(--vf-toggle-height-sm));
}

.vf-toggle-label.vf-toggle-label-lg {
  width: calc(var(--vf-toggle-width-lg) - var(--vf-toggle-height-lg));
}

body:not([dir=rtl]) .vf-toggle-wrapper-right {
  justify-content: flex-end;
}

body:not([dir=rtl]) .vf-toggle-text-right {
  margin-left: 0;
  margin-right: var(--vf-space-checkbox);
  order: -1;
}

body:not([dir=rtl]) .vf-toggle-text-right.vf-toggle-text-sm {
  margin-left: 0;
  margin-right: var(--vf-space-checkbox-sm);
}

body:not([dir=rtl]) .vf-toggle-text-right.vf-toggle-text-lg {
  margin-left: 0;
  margin-right: var(--vf-space-checkbox-lg);
}

body[dir=rtl] .vf-toggle-wrapper-left {
  justify-content: flex-end;
}

body[dir=rtl] .vf-toggle-text {
  margin-left: 0;
  margin-right: var(--vf-space-checkbox);
}

body[dir=rtl] .vf-toggle-text.vf-toggle-text-sm {
  margin-left: 0;
  margin-right: var(--vf-space-checkbox-sm);
}

body[dir=rtl] .vf-toggle-text.vf-toggle-text-lg {
  margin-left: 0;
  margin-right: var(--vf-space-checkbox-lg);
}

body[dir=rtl] .vf-toggle-text.vf-toggle-text-left {
  margin-right: 0;
  margin-left: var(--vf-space-checkbox);
  order: -1;
}

body[dir=rtl] .vf-toggle-text.vf-toggle-text-left.vf-toggle-text-sm {
  margin-right: 0;
  margin-left: var(--vf-space-checkbox-sm);
}

body[dir=rtl] .vf-toggle-text.vf-toggle-text-left.vf-toggle-text-lg {
  margin-right: 0;
  margin-left: var(--vf-space-checkbox-lg);
}`;G(Vv);Po.__file="themes/vueform/templates/elements/ToggleElement.vue";var Wn={name:"EditorElement",data(){return{merge:!0,defaultClasses:{container:"",input:""}}}};function Wv(t,e,n,r,i,l){const a=ue("EditorWrapper");return d(),L(F(t.elementLayout),{ref:"container"},Ie({element:U(()=>[Ee(a,{value:t.model,placeholder:t.Placeholder,id:t.fieldId,accept:t.accept,"accept-mimes":t.acceptMimes,endpoint:t.editorEndpoint,method:t.editorMethod,disabled:t.isDisabled,"hide-tools":t.hideTools,class:f(t.classes.input),attrs:t.aria,onInput:t.handleInput,onAlert:t.handleAlert,onError:t.handleError,onBlur:t.handleBlur,ref:"input"},null,8,["value","placeholder","id","accept","accept-mimes","endpoint","method","disabled","hide-tools","class","attrs","onInput","onAlert","onError","onBlur"])]),_:2},[le(t.elementSlots,(o,s)=>({name:s,fn:U(()=>[D(t.$slots,s,{el$:t.el$},()=>[(d(),L(F(o),{el$:t.el$},null,8,["el$"]))])])}))]),1536)}Wn.render=Wv;Wn.__file="themes/blank/templates/elements/EditorElement.vue";var $o={name:"EditorElement",render:Wn.render,data(){return{merge:!0,defaultClasses:{container:"vf-text-type",input:"vf-editor",input_enabled:"",input_disabled:"vf-editor-disabled",input_success:"vf-editor-success",input_danger:"vf-editor-danger",input_focused:"vf-editor-focused",input_sm:"vf-editor-sm",input_md:"",input_lg:"vf-editor-lg",$input:(t,{isDisabled:e,focused:n,Size:r,isSuccess:i,isDanger:l})=>[t.input,t[`input_${r}`],e?t.input_disabled:null,!e&&!i&&!l?t.input_default:null,!e&&n?t.input_focused:null,!e&&i?t.input_success:null,!e&&l?t.input_danger:null]}}}},Qv=`.vf-editor {
  outline: 0px solid var(--vf-ring-color);
  outline-offset: 0;
  border-style: solid;
  transition: box-shadow 0.2s ease-in-out, color 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
  background-color: var(--vf-bg-input);
  color: var(--vf-color-input);
  border-color: var(--vf-border-color-input);
  box-shadow: var(--vf-shadow-input);
  border-width: var(--vf-border-width-input-t) var(--vf-border-width-input-r) var(--vf-border-width-input-b) var(--vf-border-width-input-l);
  border-radius: var(--vf-radius-input);
}

.vf-editor.vf-editor-disabled {
  background-color: var(--vf-bg-disabled);
  color: var(--vf-color-disabled);
}

.vf-editor.vf-editor-success {
  background-color: var(--vf-bg-input-success);
  color: var(--vf-color-input-success);
  border-color: var(--vf-border-color-input-success);
}

.vf-editor.vf-editor-danger {
  background-color: var(--vf-bg-input-danger);
  color: var(--vf-color-input-danger);
  border-color: var(--vf-border-color-input-danger);
}

.vf-editor:hover:not(.vf-editor-disabled) {
  box-shadow: var(--vf-shadow-input-hover);
}

.vf-editor:hover:not(.vf-editor-disabled):not(.vf-editor-success):not(.vf-editor-danger) {
  background-color: var(--vf-bg-input-hover);
  color: var(--vf-color-input-hover);
  border-color: var(--vf-border-color-input-hover);
}

.vf-editor.vf-editor-focused {
  box-shadow: var(--vf-shadow-input-focus);
  outline: var(--vf-ring-width) solid var(--vf-ring-color);
  border-color: var(--vf-border-color-input-focus);
}

.vf-editor.vf-editor-focused:not(.vf-editor-success):not(.vf-editor-danger), .vf-editor.vf-editor-focused:not(.vf-editor-disabled):not(.vf-editor-success):not(.vf-editor-danger) {
  background-color: var(--vf-bg-input-focus);
  color: var(--vf-color-input-focus);
}`;G(Qv);$o.__file="themes/vueform/templates/elements/EditorElement.vue";var zo={name:"TTextareaElement",render:Un.render,staticRenderFns:Un.staticRenderFns,data(){return{merge:!0,defaultClasses:{container:"",inputContainer:"",input:""}}}};zo.__file="themes/blank/templates/elements/TTextareaElement.vue";var No={name:"TTextareaElement",render:zo.render,data(){return{merge:!0,defaultClasses:{container:"vf-text-type",inputContainer:"vf-input-group vf-input-group-textarea",inputContainer_sm:"vf-input-group-sm",inputContainer_md:"",inputContainer_lg:"vf-input-group-lg",inputContainer_default:"",inputContainer_disabled:"vf-input-group-disabled",inputContainer_focused:"vf-input-group-focused",inputContainer_success:"vf-input-group-success",inputContainer_danger:"vf-input-group-danger",input:"vf-field",input_sm:"",input_md:"",input_lg:"",input_enabled:"",input_disabled:"",input_focused:"",input_success:"",input_danger:"",$inputContainer:(t,{isDisabled:e,Size:n,isSuccess:r,isDanger:i,focused:l})=>[t.inputContainer,t[`inputContainer_${n}`],e?t.inputContainer_disabled:null,!e&&!r&&!i?t.inputContainer_default:null,!e&&l?t.inputContainer_focused:null,!e&&r?t.inputContainer_success:null,!e&&i?t.inputContainer_danger:null],$input:(t,{isDisabled:e,Size:n,isSuccess:r,isDanger:i,focused:l})=>[t.input,t[`input_${n}`],e?t.input_disabled:null,!e&&!r&&!i&&!l?t.input_enabled:null,!e&&l&&!r&&!i?t.input_focused:null,!e&&i?t.input_danger:null,!e&&r?t.input_success:null]}}}},qv="/* Some styles are contained in Vueform.vue */";G(qv);No.__file="themes/vueform/templates/elements/TTextareaElement.vue";var Ho={name:"TTextElement",render:Vn.render,staticRenderFns:Vn.staticRenderFns,data(){return{merge:!0,defaultClasses:{container:"",inputContainer:"",input:""}}}};Ho.__file="themes/blank/templates/elements/TTextElement.vue";var jo={name:"TTextElement",render:Ho.render,data(){return{merge:!0,defaultClasses:{container:"vf-text-type",inputContainer:"vf-input-group",inputContainer_sm:"vf-input-group-sm",inputContainer_md:"",inputContainer_lg:"vf-input-group-lg",inputContainer_default:"",inputContainer_disabled:"vf-input-group-disabled",inputContainer_focused:"vf-input-group-focused",inputContainer_success:"vf-input-group-success",inputContainer_danger:"vf-input-group-danger",input:"vf-input-field",input_sm:"",input_md:"",input_lg:"",input_enabled:"",input_disabled:"",input_focused:"",input_success:"",input_danger:"",$inputContainer:(t,{isDisabled:e,Size:n,isSuccess:r,isDanger:i,focused:l})=>[t.inputContainer,t[`inputContainer_${n}`],e?t.inputContainer_disabled:null,!e&&!r&&!i?t.inputContainer_default:null,!e&&l?t.inputContainer_focused:null,!e&&r?t.inputContainer_success:null,!e&&i?t.inputContainer_danger:null],$input:(t,{isDisabled:e,Size:n,isSuccess:r,isDanger:i,focused:l})=>[t.input,t[`input_${n}`],e?t.input_disabled:null,!e&&!r&&!i&&!l?t.input_enabled:null,!e&&l&&!r&&!i?t.input_focused:null,!e&&i?t.input_danger:null,!e&&r?t.input_success:null]}}}},Kv="/* Some styles are contained in Vueform.vue */";G(Kv);jo.__file="themes/vueform/templates/elements/TTextElement.vue";var Uo={name:"TEditorElement",render:Wn.render,staticRenderFns:Wn.staticRenderFns,data(){return{merge:!0,defaultClasses:{container:"",input:""}}}};Uo.__file="themes/blank/templates/elements/TEditorElement.vue";var Vo={name:"TEditorElement",render:Uo.render,data(){return{merge:!0,defaultClasses:{container:"vf-text-type",input:"vf-editor",input_enabled:"",input_disabled:"vf-editor-disabled",input_success:"vf-editor-success",input_danger:"vf-editor-danger",input_focused:"vf-editor-focused",input_focused_success:"vf-editor-focused-success",input_focused_danger:"vf-editor-focused-danger",input_sm:"vf-editor-sm",input_md:"",input_lg:"vf-editor-lg",$input:(t,{isDisabled:e,focused:n,Size:r,isSuccess:i,isDanger:l})=>[t.input,t[`input_${r}`],e?t.input_disabled:null,!e&&!i&&!l&&!n?t.input_enabled:null,!e&&l?t.input_danger:null,!e&&i?t.input_success:null,n&&!l&&!i?t.input_focused:null,n&&i?t.input_focused_success:null,n&&l?t.input_focused_danger:null]}}}},Jv="/* Some styles are contained in EditorElement.vue */";G(Jv);Vo.__file="themes/vueform/templates/elements/TEditorElement.vue";var oa={name:"CheckboxgroupCheckbox",data(){return{merge:!0,defaultClasses:{container:"",input:"",text:""}}}};const _v=["value","name","id","disabled","aria-label"],Gv=["innerHTML"];function Yv(t,e,n,r,i,l){return d(),v("label",{class:f(t.classes.container)},[D(t.$slots,"default",q({name:t.name},{classes:t.classes,isDisabled:t.isDisabled,id:t.id,item:t.item,value:t.value,items:t.items,index:t.index}),()=>[Fe(w("input",q({type:"checkbox","onUpdate:modelValue":e[0]||(e[0]=a=>t.el$.model=a)},t.attrs,{value:t.value,class:t.classes.input,name:t.name,id:t.id,disabled:t.isDisabled,"aria-label":t.item.label}),null,16,_v),[[hr,t.el$.model]]),w("span",{class:f(t.classes.text),innerHTML:t.item.label},null,10,Gv)])],2)}oa.render=Yv;oa.__file="themes/blank/templates/elements/partials/CheckboxgroupCheckbox.vue";var Wo={name:"CheckboxgroupCheckbox",render:oa.render,data(){return{merge:!0,defaultClasses:{container:"vf-checkbox-container",input:"vf-checkbox",input_enabled:"",input_disabled:"",input_sm:"vf-checkbox-sm",input_md:"",input_lg:"vf-checkbox-lg",text:"vf-checkbox-text",$input:(t,{isDisabled:e,Size:n})=>[t.input,t[`input_${n}`],e?t.input_disabled:t.input_enabled]}}}},Xv="/* Some styles are contained in Vueform.vue & CheckboxgroupElement.vue */";G(Xv);Wo.__file="themes/vueform/templates/elements/partials/CheckboxgroupCheckbox.vue";var sa={name:"CheckboxgroupCheckbox_tabs",data(){return{merge:!0,defaultClasses:{container:"",wrapper:"",input:"",text:""}}}};const Zv=["aria-checked"],eg=["value","id","name","disabled"],tg=["innerHTML"];function ng(t,e,n,r,i,l){return d(),v("label",q(t.attrs,{class:t.classes.container,tabindex:"0",role:"checkbox","aria-checked":t.checked,onKeypress:e[1]||(e[1]=We(he(a=>t.el$.toggle(t.value),["prevent"]),["space"])),onKeydown:e[2]||(e[2]=(...a)=>t.handleKeydown&&t.handleKeydown(...a))}),[D(t.$slots,"default",q({name:t.name},{classes:t.classes,isDisabled:t.isDisabled,id:t.id,item:t.item,value:t.value,items:t.items,index:t.index}),()=>[w("div",{class:f(t.classes.wrapper)},[Fe(w("input",{type:"checkbox","onUpdate:modelValue":e[0]||(e[0]=a=>t.el$.model=a),value:t.value,id:t.id,class:f(t.classes.input),name:t.name,disabled:t.isDisabled},null,10,eg),[[hr,t.el$.model]]),w("span",{class:f(t.classes.text),innerHTML:`${t.item.label}`},null,10,tg)],2)])],16,Zv)}sa.render=ng;sa.__file="themes/blank/templates/elements/partials/CheckboxgroupCheckbox_tabs.vue";var Qo={name:"CheckboxgroupCheckbox_tabs",render:sa.render,data(){return{merge:!0,defaultClasses:{container:"vf-checkbox-tabs-container",wrapper:"vf-checkbox-tabs",wrapper_not_last:"vf-checkbox-tabs-not-last",wrapper_first:"vf-checkbox-tabs-first",wrapper_first_sm:"vf-checkbox-tabs-first-sm",wrapper_first_md:"",wrapper_first_lg:"vf-checkbox-tabs-first-lg",wrapper_last:"vf-checkbox-tabs-last",wrapper_last_sm:"vf-checkbox-tabs-last-sm",wrapper_last_md:"",wrapper_last_lg:"vf-checkbox-tabs-last-lg",wrapper_selected:"vf-checkbox-tabs-selected",wrapper_unselected:"vf-checkbox-tabs-unselected",wrapper_disabled:"vf-checkbox-tabs-disabled",wrapper_sm:"vf-checkbox-tabs-sm",wrapper_md:"",wrapper_lg:"vf-checkbox-tabs-lg",input:"vf-checkbox-tabs-input",text:"",$wrapper:(t,{index:e,items:n,el$:r,value:i,isDisabled:l,Size:a})=>[t.wrapper,t[`wrapper_${a}`],e<Object.keys(n).length-1?t.wrapper_not_last:null,e===0?t.wrapper_first:null,e===0?t[`wrapper_first_${a}`]:null,e===Object.keys(n).length-1?t.wrapper_last:null,e===Object.keys(n).length-1?t[`wrapper_last_${a}`]:null,r.value.indexOf(i)!==-1?t.wrapper_selected:t.wrapper_unselected,l?t.wrapper_disabled:null]}}}},rg=`/* Some styles are contained in Vueform.vue & CheckboxgroupElement.vue */

.vf-checkbox-tabs-container {
  display: flex;
  align-items: flex-start;
  cursor: pointer;
}

.vf-checkbox-tabs {
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: solid;
  border-width: var(--vf-border-width-input-t) var(--vf-border-width-input-r) var(--vf-border-width-input-b) var(--vf-border-width-input-l);
  border-color: var(--vf-border-color-input);
  padding: var(--vf-py-group-tabs) var(--vf-px-group-tabs);
  width: 100%;
  background: var(--vf-bg-input);
  color: var(--vf-color-input);
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
}

.vf-checkbox-tabs.vf-checkbox-tabs-not-last {
  border-right: 0;
}

.vf-checkbox-tabs.vf-checkbox-tabs-first {
  border-radius: var(--vf-radius-input);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-checkbox-tabs.vf-checkbox-tabs-first.vf-checkbox-tabs-first-sm {
  border-radius: var(--vf-radius-input-sm);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-checkbox-tabs.vf-checkbox-tabs-first.vf-checkbox-tabs-first-lg {
  border-radius: var(--vf-radius-input-lg);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-checkbox-tabs.vf-checkbox-tabs-last {
  border-radius: var(--vf-radius-input-lg);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.vf-checkbox-tabs.vf-checkbox-tabs-last.vf-checkbox-tabs-last-sm {
  border-radius: var(--vf-radius-input-sm);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.vf-checkbox-tabs.vf-checkbox-tabs-last.vf-checkbox-tabs-last-lg {
  border-radius: var(--vf-radius-input-lg);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.vf-checkbox-tabs.vf-checkbox-tabs-selected {
  background-color: var(--vf-primary);
  border-color: rgba(0, 0, 0, 0.15);
  color: var(--vf-color-on-primary);
}

.vf-checkbox-tabs.vf-checkbox-tabs-unselected {
  border-color: var(--vf-border-color-input);
}

.vf-checkbox-tabs.vf-checkbox-tabs-unselected:hover:not(.vf-radio-tabs-disabled) {
  background-color: var(--vf-bg-input-hover);
  color: var(--vf-color-input-hover);
}

.vf-checkbox-tabs.vf-checkbox-tabs-disabled {
  opacity: 0.5;
}

.vf-checkbox-tabs.vf-checkbox-tabs-sm {
  padding: var(--vf-py-group-tabs-sm) var(--vf-px-group-tabs-sm);
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-sm);
}

.vf-checkbox-tabs.vf-checkbox-tabs-lg {
  padding: var(--vf-py-group-tabs-lg) var(--vf-px-group-tabs-lg);
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
}

.vf-checkbox-tabs-input {
  display: none;
}`;G(rg);Qo.__file="themes/vueform/templates/elements/partials/CheckboxgroupCheckbox_tabs.vue";var ua={name:"CheckboxgroupCheckbox_tabs",data(){return{merge:!0,defaultClasses:{container:"",wrapper:"",input:"",text_wrapper:"",text:"",description:""}}}};const ig=["value","name","id","disabled"],ag=["innerHTML"],lg=["innerHTML"];function og(t,e,n,r,i,l){return d(),v("label",{class:f(t.classes.container)},[D(t.$slots,"default",q({name:t.name},{classes:t.classes,isDisabled:t.isDisabled,id:t.id,item:t.item,value:t.value,items:t.items,index:t.index}),()=>[w("div",{class:f(t.classes.wrapper)},[Fe(w("input",q({type:"checkbox","onUpdate:modelValue":e[0]||(e[0]=a=>t.el$.model=a)},t.attrs,{value:t.value,class:t.classes.input,name:t.name,id:t.id,disabled:t.isDisabled}),null,16,ig),[[hr,t.el$.model]]),w("div",{class:f(t.classes.text_wrapper)},[w("div",{class:f(t.classes.text),innerHTML:t.item.label},null,10,ag),w("div",{class:f(t.classes.description),innerHTML:t.item.description},null,10,lg)],2)],2)])],2)}ua.render=og;ua.__file="themes/blank/templates/elements/partials/CheckboxgroupCheckbox_blocks.vue";var qo={name:"CheckboxgroupCheckbox_blocks",render:ua.render,data(){return{merge:!0,defaultClasses:{container:"vf-checkbox-blocks-container",container_sm:"vf-checkbox-blocks-container-sm",container_md:"",container_lg:"vf-checkbox-blocks-container-lg",wrapper:"vf-checkbox-blocks",wrapper_not_last:"vf-checkbox-blocks-not-last",wrapper_first:"vf-checkbox-blocks-first",wrapper_first_sm:"vf-checkbox-blocks-first-sm",wrapper_first_md:"",wrapper_first_lg:"vf-checkbox-blocks-first-lg",wrapper_last:"vf-checkbox-blocks-last",wrapper_last_sm:"vf-checkbox-blocks-last-sm",wrapper_last_md:"",wrapper_last_lg:"vf-checkbox-blocks-last-lg",wrapper_selected:"vf-checkbox-blocks-selected",wrapper_unselected:"vf-checkbox-blocks-unselected",wrapper_disabled:"vf-checkbox-blocks-disabled",wrapper_sm:"vf-checkbox-blocks-sm",wrapper_md:"",wrapper_lg:"vf-checkbox-blocks-lg",input:"vf-checkbox",input_enabled:"",input_disabled:"",input_sm:"vf-checkbox-sm",input_md:"",input_lg:"vf-checkbox-lg",text_wrapper:"vf-checkbox-blocks-text-wrapper",text:"vf-checkbox-blocks-text",description:"vf-checkbox-blocks-description",description_sm:"vf-checkbox-blocks-description-sm",description_md:"",description_lg:"vf-checkbox-blocks-description-lg",$container:(t,{Size:e})=>[t.container,t[`container_${e}`]],$wrapper:(t,{index:e,items:n,el$:r,value:i,isDisabled:l,Size:a})=>[t.wrapper,t[`wrapper_${a}`],e<Object.keys(n).length-1?t.wrapper_not_last:null,e===0?t.wrapper_first:null,e===0?t[`wrapper_first_${a}`]:null,e===Object.keys(n).length-1?t.wrapper_last:null,e===Object.keys(n).length-1?t[`wrapper_last_${a}`]:null,r.value.indexOf(i)!==-1?t.wrapper_selected:t.wrapper_unselected,l?t.wrapper_disabled:null],$input:(t,{isDisabled:e,Size:n})=>[t.input,t[`input_${n}`],e?t.input_disabled:t.input_enabled],$description:(t,{Size:e})=>[t.description,t[`description_${e}`]]}}}},sg=`/* Some styles are contained in Vueform.vue & CheckboxgroupElement.vue */

.vf-checkbox-blocks-container {
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  border-radius: var(--vf-radius-large);
}

.vf-checkbox-blocks-container .vf-checkbox {
  margin-top: 0;
}

.vf-checkbox-blocks-container.vf-checkbox-blocks-container-sm {
  border-radius: var(--vf-radius-large-sm);
}

.vf-checkbox-blocks-container.vf-checkbox-blocks-container-lg {
  border-radius: var(--vf-radius-large-lg);
}

.vf-checkbox-blocks {
  display: flex;
  align-items: center;
  border-style: solid;
  border-width: var(--vf-border-width-input-t) var(--vf-border-width-input-r) var(--vf-border-width-input-b) var(--vf-border-width-input-l);
  border-color: var(--vf-border-color-input);
  width: 100%;
  padding: var(--vf-py-group-blocks) var(--vf-px-group-blocks);
  color: var(--vf-color-input);
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
  background: var(--vf-bg-input);
}

.vf-checkbox-blocks.vf-checkbox-blocks-not-last {
  border-bottom: 0;
}

.vf-checkbox-blocks.vf-checkbox-blocks-first {
  border-radius: var(--vf-radius-large);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-checkbox-blocks.vf-checkbox-blocks-first.vf-checkbox-blocks-first-sm {
  border-radius: var(--vf-radius-large-sm);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-checkbox-blocks.vf-checkbox-blocks-first.vf-checkbox-blocks-first-lg {
  border-radius: var(--vf-radius-large-lg);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-checkbox-blocks.vf-checkbox-blocks-last {
  border-radius: var(--vf-radius-large);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.vf-checkbox-blocks.vf-checkbox-blocks-last.vf-checkbox-blocks-last-sm {
  border-radius: var(--vf-radius-large-sm);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.vf-checkbox-blocks.vf-checkbox-blocks-last.vf-checkbox-blocks-last-lg {
  border-radius: var(--vf-radius-large-lg);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.vf-checkbox-blocks.vf-checkbox-blocks-selected {
  background-color: var(--vf-bg-selected);
}

.vf-checkbox-blocks.vf-checkbox-blocks-disabled {
  opacity: 0.5;
}

.vf-checkbox-blocks.vf-checkbox-blocks-sm {
  padding: var(--vf-py-group-blocks-sm) var(--vf-px-group-blocks-sm);
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-sm);
}

.vf-checkbox-blocks.vf-checkbox-blocks-lg {
  padding: var(--vf-py-group-blocks-lg) var(--vf-px-group-blocks-lg);
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
}

.vf-checkbox-blocks-text-wrapper {
  margin-left: 0.5rem;
}

.vf-checkbox-blocks-description {
  color: var(--vf-color-muted);
  font-size: var(--vf-font-size-small);
  line-height: var(--vf-line-height-small);
  letter-spacing: var(--vf-letter-spacing-small);
  margin-top: -0.125rem;
}

.vf-checkbox-blocks-description.vf-checkbox-blocks-description-sm {
  font-size: var(--vf-font-size-small-sm);
  line-height: var(--vf-line-height-small-sm);
  letter-spacing: var(--vf-letter-spacing-small-sm);
  margin-top: -0.125rem;
}

.vf-checkbox-blocks-description.vf-checkbox-blocks-description-lg {
  font-size: var(--vf-font-size-small-lg);
  line-height: var(--vf-line-height-small-lg);
  letter-spacing: var(--vf-letter-spacing-small-lg);
  margin-top: -0.125rem;
}`;G(sg);qo.__file="themes/vueform/templates/elements/partials/CheckboxgroupCheckbox_blocks.vue";var da={name:"DragAndDrop",data(){return{merge:!0,defaultClasses:{container:"",icon:"",title:"",description:""}}}};function ug(t,e,n,r,i,l){return d(),v("div",{class:f(t.classes.container),onClick:e[0]||(e[0]=he((...a)=>t.handleClick&&t.handleClick(...a),["prevent"])),ref:"area"},[w("span",{class:f(t.classes.icon)},null,2),t.title?(d(),v("span",{key:0,class:f(t.classes.title)},Ce(t.title),3)):h("v-if",!0),t.description?(d(),v("span",{key:1,class:f(t.classes.description)},Ce(t.description),3)):h("v-if",!0)],2)}da.render=ug;da.__file="themes/blank/templates/elements/partials/DragAndDrop.vue";var Ko={name:"DragAndDrop",render:da.render,data(){return{merge:!0,defaultClasses:{container:"vf-dnd",container_sm:"vf-dnd-sm",container_md:"",container_lg:"vf-dnd-lg",container_inactive:"",container_active:"is-active",container_enabled:"",container_disabled:"is-disabled",icon:"vf-dnd-icon-upload",title:"vf-dnd-title",description:"vf-dnd-description",$container:(t,{dragging:e,disabled:n,Size:r})=>[t.container,t[`container_${r}`],e?t.container_active:t.container_inactive,n?t.container_disabled:t.container_enabled]}}}},dg=`.vf-dnd {
  background-color: #FFFFFF;
  transition: 0.3s;
  border-width: var(--vf-border-width-input-t) var(--vf-border-width-input-r) var(--vf-border-width-input-b) var(--vf-border-width-input-l);
  border-style: dashed;
  border-color: var(--vf-border-color-input);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
  font-size: inherit;
  box-sizing: border-box;
  cursor: pointer;
  text-align: center;
  position: relative;
  transition: 0.3s;
  background-color: var(--vf-bg-input);
  color: var(--vf-color-input);
  border-radius: var(--vf-radius-large);
  box-shadow: var(--vf-shadow-input);
  text-align: center;
}

.vf-dnd.vf-dnd-sm {
  border-radius: var(--vf-radius-large);
}

.vf-dnd.is-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.vf-dnd.is-active {
  border-color: var(--vf-primary);
}

.vf-dnd-icon-upload {
  display: flex;
  width: 2.25rem;
  height: 2rem;
  align-items: center;
  justify-content: center;
  background: var(--vf-primary);
  mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='36px' height='32px' viewBox='0 0 36 32' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M35.0499042,20.6125054 C35.656165,21.1750041 35.9999142,21.9687644 35.9999142,22.8000002 L35.9999142,28.9999976 C35.9999142,30.6562437 34.6561674,31.9999905 32.9999213,31.9999905 L2.99999285,31.9999905 C1.3437468,31.9999905 0,30.6562437 0,28.9999976 L0,22.8000002 C0,21.9687644 0.34374918,21.1750041 0.950009942,20.6125054 L6.86247143,15.0687564 C7.01249549,14.9313056 7.24998271,14.9375311 7.39372016,15.0875552 L8.24998033,16.0000286 C8.38749221,16.1500527 8.3812056,16.3875399 8.23124258,16.5312773 L4.52501363,20.0062446 L11.7374598,20.0062446 L13.737455,24.0062351 L22.2624591,24.0062351 L24.2624544,20.0062446 L31.4811871,20.0062446 L27.7749582,16.5312773 C27.6249341,16.3875399 27.612422,16.1500527 27.7561594,16.0000286 L28.606194,15.0875552 C28.7499315,14.9375311 28.9874187,14.925019 29.1374427,15.0687564 L35.0499042,20.6125054 Z M33.9999189,28.9999976 L33.9999189,23.0000119 C33.9999189,22.4500254 33.5499078,22.0000143 32.9999213,22.0000143 L25.4999392,22.0000143 L23.499944,26.0000048 L12.4999702,26.0000048 L10.499975,22.0000143 L2.99999285,22.0000143 C2.45000637,22.0000143 1.99999523,22.4500254 1.99999523,23.0000119 L1.99999523,28.9999976 C1.99999523,29.5499841 2.45000637,29.9999952 2.99999285,29.9999952 L32.9999213,29.9999952 C33.5499078,29.9999952 33.9999189,29.5499841 33.9999189,28.9999976 Z M25.999938,8.00004768 C27.7811838,8.00004768 28.6686939,10.1562925 27.4186968,11.4125151 L19.4187159,19.4124961 C18.6374678,20.1937442 17.368733,20.1937442 16.5874849,19.4124961 L8.58750394,11.4125151 C7.32499474,10.1562925 8.22495598,8.00004768 9.99997616,8.00004768 L13.9999666,8.00004768 L13.9999666,1.50006318 C13.9999666,0.675052941 14.6749528,6.67572021e-05 15.499963,6.67572021e-05 L20.4999511,6.67572021e-05 C21.3249614,6.67572021e-05 21.9999475,0.675052941 21.9999475,1.50006318 L21.9999475,8.00004768 L25.999938,8.00004768 Z M17.9999571,18.0000238 L25.999938,10.0000429 L19.9999523,10.0000429 L19.9999523,2.00006199 L15.9999619,2.00006199 L15.9999619,10.0000429 L9.99997616,10.0000429 L17.9999571,18.0000238 Z' id='inbox-in' fill='currentColor'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='36px' height='32px' viewBox='0 0 36 32' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M35.0499042,20.6125054 C35.656165,21.1750041 35.9999142,21.9687644 35.9999142,22.8000002 L35.9999142,28.9999976 C35.9999142,30.6562437 34.6561674,31.9999905 32.9999213,31.9999905 L2.99999285,31.9999905 C1.3437468,31.9999905 0,30.6562437 0,28.9999976 L0,22.8000002 C0,21.9687644 0.34374918,21.1750041 0.950009942,20.6125054 L6.86247143,15.0687564 C7.01249549,14.9313056 7.24998271,14.9375311 7.39372016,15.0875552 L8.24998033,16.0000286 C8.38749221,16.1500527 8.3812056,16.3875399 8.23124258,16.5312773 L4.52501363,20.0062446 L11.7374598,20.0062446 L13.737455,24.0062351 L22.2624591,24.0062351 L24.2624544,20.0062446 L31.4811871,20.0062446 L27.7749582,16.5312773 C27.6249341,16.3875399 27.612422,16.1500527 27.7561594,16.0000286 L28.606194,15.0875552 C28.7499315,14.9375311 28.9874187,14.925019 29.1374427,15.0687564 L35.0499042,20.6125054 Z M33.9999189,28.9999976 L33.9999189,23.0000119 C33.9999189,22.4500254 33.5499078,22.0000143 32.9999213,22.0000143 L25.4999392,22.0000143 L23.499944,26.0000048 L12.4999702,26.0000048 L10.499975,22.0000143 L2.99999285,22.0000143 C2.45000637,22.0000143 1.99999523,22.4500254 1.99999523,23.0000119 L1.99999523,28.9999976 C1.99999523,29.5499841 2.45000637,29.9999952 2.99999285,29.9999952 L32.9999213,29.9999952 C33.5499078,29.9999952 33.9999189,29.5499841 33.9999189,28.9999976 Z M25.999938,8.00004768 C27.7811838,8.00004768 28.6686939,10.1562925 27.4186968,11.4125151 L19.4187159,19.4124961 C18.6374678,20.1937442 17.368733,20.1937442 16.5874849,19.4124961 L8.58750394,11.4125151 C7.32499474,10.1562925 8.22495598,8.00004768 9.99997616,8.00004768 L13.9999666,8.00004768 L13.9999666,1.50006318 C13.9999666,0.675052941 14.6749528,6.67572021e-05 15.499963,6.67572021e-05 L20.4999511,6.67572021e-05 C21.3249614,6.67572021e-05 21.9999475,0.675052941 21.9999475,1.50006318 L21.9999475,8.00004768 L25.999938,8.00004768 Z M17.9999571,18.0000238 L25.999938,10.0000429 L19.9999523,10.0000429 L19.9999523,2.00006199 L15.9999619,2.00006199 L15.9999619,10.0000429 L9.99997616,10.0000429 L17.9999571,18.0000238 Z' id='inbox-in' fill='currentColor'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  mask-size: cover;
  -webkit-mask-size: cover;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-position: center center;
}

.vf-dnd-title {
  font-weight: 600;
  margin-top: 0.75rem;
}`;G(dg);Ko.__file="themes/vueform/templates/elements/partials/DragAndDrop.vue";var ca={name:"FilePreview",data(){return{merge:!0,defaultClasses:{container:"",wrapper:"",file:"",filenameLink:"",filenameStatic:"",actions:"",percent:"",upload:"",progressBar:"",progress:"",warning:"",warningIcon:"",uploaded:"",uploadedIcon:"",remove:"",removeIcon:"",assistiveText:""}}}};const cg=["aria-labelledby","aria-placeholder","aria-describedby"],pg=["id"],fg=["href"];function vg(t,e,n,r,i,l){return Fe((d(),v("div",q({class:t.classes.container},t.attrs,{tabindex:"0",role:"button","aria-labelledby":t.ariaLabelledby,"aria-placeholder":t.ariaPlaceholder,"aria-describedby":`${t.el$.fieldId}-file-description`,onKeyup:e[3]||(e[3]=(...a)=>t.handleKeyup&&t.handleKeyup(...a))}),[w("span",{id:`${t.el$.fieldId}-file-description`,class:f(t.classes.assistiveText),"aria-hidden":""},Ce(t.form$.translations.vueform.a11y.file.description),11,pg),w("div",{class:f(t.classes.wrapper)},[w("div",{class:f(t.classes.file)},[h(" Filename "),t.hasLink&&t.clickable?(d(),v("a",{key:0,href:t.link,class:f(t.classes.filenameLink),target:"_blank",rel:"nofollow noopener"},Ce(t.filename),11,fg)):(d(),v("span",{key:1,class:f(t.classes.filenameStatic)},Ce(t.filename),3))],2),w("div",{class:f(t.classes.actions)},[h(" Remove "),t.canRemove?(d(),v("div",{key:0,class:f(t.classes.remove),onClick:e[0]||(e[0]=he((...a)=>t.remove&&t.remove(...a),["prevent"])),onKeypress:e[1]||(e[1]=We((...a)=>t.remove&&t.remove(...a),["enter","space"])),"aria-roledescription":"❎",role:"button",tabindex:"0"},[w("span",{class:f(t.classes.removeIcon)},null,2)],34)):h("v-if",!0),h(" Progress "),t.uploading?(d(),v("div",{key:1,class:f(t.classes.percent)},Ce(t.progress)+"%",3)):h("v-if",!0),h(" Error "),t.hasError?(d(),v("span",{key:2,class:f(t.classes.warning)},[w("span",{class:f(t.classes.warningIcon)},null,2)],2)):h("v-if",!0),h(" Upload button "),t.canUploadTemp?(d(),v("div",{key:3,class:f(t.classes.upload),onClick:e[2]||(e[2]=he((...a)=>t.upload&&t.upload(...a),["prevent"])),tabindex:"-1"},Ce(t.uploadText),3)):t.el$.stage>1?(d(),v(ee,{key:4},[h(" Success "),w("span",{class:f(t.classes.uploaded)},[w("span",{class:f(t.classes.uploadedIcon)},null,2)],2)],2112)):h("v-if",!0)],2)],2),t.uploading?(d(),v("div",{key:0,class:f(t.classes.progressBar)},[w("div",{class:f(t.classes.progress),style:mr({width:t.progress+"%"})},null,6)],2)):h("v-if",!0)],16,cg)),[[ft,t.visible]])}ca.render=vg;ca.__file="themes/blank/templates/elements/partials/FilePreview.vue";var Jo={name:"FilePreview",render:ca.render,data(){return{merge:!0,defaultClasses:{container:"vf-file-preview",container_sm:"vf-file-preview-sm",container_md:"",container_lg:"vf-file-preview-lg",wrapper:"vf-file-preview-wrapper",file:"vf-file-preview-file",filenameLink:"vf-file-preview-filename-link",filenameStatic:"vf-file-preview-filename",actions:"vf-file-preview-actions",percent:"vf-file-preview-percent",upload:"vf-file-preview-upload",progressBar:"vf-file-preview-progress-bar",progress:"vf-file-preview-progress",warning:"vf-file-preview-warning",warningIcon:"vf-file-preview-warning-icon",uploaded:"vf-file-preview-uploaded",uploadedIcon:"vf-file-preview-uploaded-icon",remove:"vf-file-preview-remove",removeIcon:"vf-file-preview-remove-icon",assistiveText:"vf-assistive-text",$container:(t,{Size:e})=>[t.container,t[`container_${e}`]]}}}},gg=`.vf-file-preview {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  min-height: var(--vf-min-height-input);
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
}

.vf-file-preview:hover .vf-file-preview-uploaded,
.vf-file-preview:hover .vf-file-preview-warning,
.vf-file-preview:hover .vf-file-preview-percent {
  display: none;
}

.vf-file-preview:hover .vf-file-preview-remove {
  display: inline-block;
}

.vf-file-preview.vf-file-preview-sm {
  padding-top: calc(var(--vf-py-input-sm) + var(--vf-border-width-input-t));
  min-height: var(--vf-min-height-input-sm);
}

.vf-file-preview.vf-file-preview-lg {
  padding-top: calc(var(--vf-py-input-lg) + var(--vf-border-width-input-t));
  min-height: var(--vf-min-height-input-lg);
}

.vf-file-preview-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.vf-file-preview-file {
  display: flex;
  align-items: center;
}

.vf-file-preview-filename-link {
  text-decoration: none;
  color: inherit;
}

.vf-file-preview-filename-link:hover, .vf-file-preview-filename-link:focus, .vf-file-preview-filename-link:active {
  color: inherit;
}

.vf-file-preview-filename-link:hover {
  text-decoration: underline;
}

.vf-file-preview-actions {
  display: flex;
  align-items: center;
}

.vf-file-preview-upload {
  font-size: 0.75rem;
  margin-left: 0.5rem;
  white-space: nowrap;
  padding: 0.0625rem 0.4375rem;
  background: var(--vf-primary);
  color: var(--vf-color-on-primary);
  border-radius: var(--vf-radius-small);
  text-decoration: none;
  transition: 0.15s;
  outline: 0px solid var(--vf-ring-color);
  outline-offset: 0;
}

.vf-file-preview-upload:hover {
  transform: scale(1.05);
}

.vf-file-preview-upload:focus {
  outline: var(--vf-ring-width) solid var(--vf-ring-color);
}

.vf-file-preview-percent {
  font-size: 0.875rem;
  color: var(--vf-color-muted);
  margin-left: 0.375rem;
}

.vf-file-preview-progress-bar {
  margin-top: 0.625rem;
  border-radius: 0;
  height: 0.1875rem;
  background: var(--vf-bg-passive);
  position: absolute;
  bottom: 0;
  width: 100%;
}

.vf-file-preview-progress {
  border-radius: 0;
  height: 100%;
  background: var(--vf-primary);
  transition: 0.6s ease;
}

.vf-file-preview-warning,
.vf-file-preview-uploaded,
.vf-file-preview-remove {
  display: flex;
  width: 1rem;
  height: 1rem;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
}

.vf-file-preview-warning-icon,
.vf-file-preview-uploaded-icon,
.vf-file-preview-remove-icon {
  width: 100%;
  height: 100%;
  display: block;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-position: center center;
}

.vf-file-preview-remove {
  display: none;
  margin-left: 0.375rem;
  background-color: var(--vf-bg-passive);
  transition: 0.15s;
}

.vf-file-preview-remove:hover {
  filter: brightness(0.9);
}

.vf-file-preview-remove-icon {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: 0.75rem 0.75rem;
  -webkit-mask-size: 0.75rem 0.75rem;
  background-color: var(--vf-color-passive);
}

.vf-file-preview-uploaded {
  background-color: var(--vf-bg-success);
}

.vf-file-preview-uploaded-icon {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: 0.625rem 0.625rem;
  -webkit-mask-size: 0.625rem 0.625rem;
  background-color: var(--vf-color-success);
}

.vf-file-preview-warning {
  background-color: var(--vf-bg-danger);
}

.vf-file-preview-warning-icon {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 192 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 192 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: 0.625rem 0.625rem;
  -webkit-mask-size: 0.625rem 0.625rem;
  background-color: var(--vf-color-danger);
}

.vf-file-removing .vf-file-preview {
  opacity: 0.6;
}`;G(gg);Jo.__file="themes/vueform/templates/elements/partials/FilePreview.vue";var pa={name:"FilePreview_image",data(){return{merge:!0,defaultClasses:{container:"",wrapper:"",image:"",img:"",file:"",filenameLink:"",filenameStatic:"",actions:"",percent:"",upload:"",progressBar:"",progress:"",warning:"",warningIcon:"",uploaded:"",uploadedIcon:"",remove:"",removeIcon:""}}}};const mg=["aria-labelledby","aria-placeholder","aria-describedby"],hg=["id"],bg=["href"],wg=["src","alt","title"],yg=["src","alt","title"],kg=["href"];function Cg(t,e,n,r,i,l){return Fe((d(),v("div",q({class:t.classes.container,tabindex:"0",role:"button"},t.attrs,{"aria-labelledby":t.ariaLabelledby,"aria-placeholder":t.ariaPlaceholder,"aria-describedby":`${t.el$.fieldId}-file-description`,onKeyup:e[4]||(e[4]=(...a)=>t.handleKeyup&&t.handleKeyup(...a))}),[w("span",{id:`${t.el$.fieldId}-file-description`,class:f(t.classes.assistiveText),"aria-hidden":""},Ce(t.form$.translations.vueform.a11y.file.description),11,hg),w("div",{class:f(t.classes.wrapper)},[h(" Image "),t.uploaded&&t.hasLink&&t.clickable?(d(),v("a",{key:0,href:t.link,class:f(t.classes.image),target:"_blank",rel:"nofollow noopener"},[w("img",{class:f(t.classes.img),src:t.preview,alt:t.filename,title:t.filename,"aria-hidden":"true"},null,10,wg)],10,bg)):(d(),v("span",{key:1,class:f(t.classes.image)},[w("img",{class:f(t.classes.img),src:t.preview,alt:t.filename,title:t.filename,"aria-hidden":"true"},null,10,yg)],2)),w("div",{class:f(t.classes.file)},[h(" Filename "),t.hasLink&&t.clickable?(d(),v("a",{key:0,href:t.link,class:f(t.classes.filenameLink),target:"_blank",rel:"nofollow noopener"},Ce(t.filename),11,kg)):(d(),v("span",{key:1,class:f(t.classes.filenameStatic)},Ce(t.filename),3))],2),w("div",{class:f(t.classes.actions)},[h(" Remove "),t.canRemove?(d(),v("div",{key:0,class:f(t.classes.remove),onClick:e[0]||(e[0]=he((...a)=>t.remove&&t.remove(...a),["prevent"])),onKeypress:e[1]||(e[1]=We((...a)=>t.remove&&t.remove(...a),["enter","space"])),"aria-roledescription":"❎",role:"button",tabindex:"0"},[w("span",{class:f(t.classes.removeIcon)},null,2)],34)):h("v-if",!0),h(" Progress "),t.uploading?(d(),v("div",{key:1,class:f(t.classes.percent)},Ce(t.progress)+"%",3)):h("v-if",!0),h(" Error "),t.hasError?(d(),v("span",{key:2,class:f(t.classes.warning)},[w("span",{class:f(t.classes.warningIcon)},null,2)],2)):h("v-if",!0),h(" Upload button "),t.canUploadTemp?(d(),v("div",{key:3,class:f(t.classes.upload),onClick:e[2]||(e[2]=he((...a)=>t.upload&&t.upload(...a),["prevent"])),onKeypress:e[3]||(e[3]=We((...a)=>t.upload&&t.upload(...a),["enter","space"])),tabindex:"-1",role:"button"},Ce(t.uploadText),35)):t.el$.stage>1?(d(),v(ee,{key:4},[h(" Success "),w("span",{class:f(t.classes.uploaded)},[w("span",{class:f(t.classes.uploadedIcon)},null,2)],2)],2112)):h("v-if",!0)],2)],2),t.uploading?(d(),v("div",{key:0,class:f(t.classes.progressBar)},[w("div",{class:f(t.classes.progress),style:mr({width:t.progress+"%"})},null,6)],2)):h("v-if",!0)],16,mg)),[[ft,t.visible]])}pa.render=Cg;pa.__file="themes/blank/templates/elements/partials/FilePreview_image.vue";var _o={name:"ImagePreview",render:pa.render,data(){return{merge:!0,defaultClasses:{container:"vf-file-preview-image",wrapper:"vf-file-preview-image-wrapper",image:"vf-file-preview-image-image",image_link:"",image_static:"",image_sm:"vf-file-preview-image-image-sm",image_md:"",image_lg:"vf-file-preview-image-image-lg",img:"vf-file-preview-image-img",img_sm:"vf-file-preview-image-img-sm",img_md:"",img_lg:"vf-file-preview-image-img-lg",file:"vf-file-preview-image-file",filenameLink:"vf-file-preview-image-filename-link",filenameStatic:"vf-file-preview-image-filename",actions:"vf-file-preview-image-actions",percent:"vf-file-preview-image-percent",upload:"vf-file-preview-image-upload",progressBar:"vf-file-preview-image-progress-bar",progressBar_sm:"vf-file-preview-image-progress-bar-sm",progressBar_md:"",progressBar_lg:"vf-file-preview-image-progress-bar-lg",progress:"vf-file-preview-image-progress",warning:"vf-file-preview-image-warning",warningIcon:"vf-file-preview-image-warning-icon",uploaded:"vf-file-preview-image-uploaded",uploadedIcon:"vf-file-preview-image-uploaded-icon",remove:"vf-file-preview-image-remove",removeIcon:"vf-file-preview-image-remove-icon",assistiveText:"vf-assistive-text",$image:(t,{hasLink:e,Size:n})=>[t.image,t[`image_${n}`],e?t.image_link:t.image_static],$img:(t,{Size:e})=>[t.img,t[`img_${e}`]],$progressBar:(t,{Size:e})=>[t.progressBar,t[`progressBar_${e}`]]}}}},Ag=`.vf-file-preview-image {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  position: relative;
}

.vf-file-preview-image:hover .vf-file-preview-image-uploaded,
.vf-file-preview-image:hover .vf-file-preview-image-warning,
.vf-file-preview-image:hover .vf-file-preview-image-percent {
  display: none;
}

.vf-file-preview-image:hover .vf-file-preview-image-remove {
  display: inline-block;
}

.vf-file-preview-image-image {
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  background: var(--vf-bg-passive);
  border-radius: var(--vf-radius-image);
  outline: 0px solid var(--vf-ring-color);
  outline-offset: 0;
  box-shadow: var(--vf-shadow-input);
}

.vf-file-preview-image-image:focus {
  outline: var(--vf-ring-width) solid var(--vf-ring-color);
}

.vf-file-preview-image-image.vf-file-preview-image-image-sm {
  border-radius: var(--vf-radius-image-sm);
}

.vf-file-preview-image-image.vf-file-preview-image-image-lg {
  border-radius: var(--vf-radius-image-lg);
}

.vf-file-preview-image-img {
  -o-object-fit: cover;
     object-fit: cover;
  width: var(--vf-min-height-input);
  height: var(--vf-min-height-input);
  border-radius: var(--vf-radius-image);
  border: 0;
}

.vf-file-preview-image-img[src=""], .vf-file-preview-image-img[src="data:"], .vf-file-preview-image-img:not([src]) {
  opacity: 0;
}

.vf-file-preview-image-img.vf-file-preview-image-img-sm {
  width: var(--vf-min-height-input-sm);
  height: var(--vf-min-height-input-sm);
  border-radius: var(--vf-radius-image-sm);
}

.vf-file-preview-image-img.vf-file-preview-image-img-lg {
  width: var(--vf-min-height-input-lg);
  height: var(--vf-min-height-input-lg);
  border-radius: var(--vf-radius-image-lg);
}

.vf-file-preview-image-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.vf-file-preview-image-file {
  display: flex;
  align-items: center;
  margin-left: 0.625rem;
  flex: 1 1 auto;
}

.vf-file-preview-image-filename-link {
  text-decoration: none;
  color: inherit;
}

.vf-file-preview-image-filename-link:hover, .vf-file-preview-image-filename-link:focus, .vf-file-preview-image-filename-link:active {
  color: inherit;
}

.vf-file-preview-image-filename-link:hover {
  text-decoration: underline;
}

.vf-file-preview-image-actions {
  display: flex;
  align-items: center;
}

.vf-file-preview-image-upload {
  font-size: 0.75rem;
  margin-left: 0.5rem;
  white-space: nowrap;
  padding: 0.0625rem 0.4375rem;
  background: var(--vf-primary);
  color: var(--vf-color-on-primary);
  border-radius: var(--vf-radius-small);
  text-decoration: none;
  transition: 0.15s;
  outline: 0px solid var(--vf-ring-color);
  outline-offset: 0;
}

.vf-file-preview-image-upload:hover {
  transform: scale(1.05);
}

.vf-file-preview-image-upload:focus {
  outline: var(--vf-ring-width) solid var(--vf-ring-color);
}

.vf-file-preview-image-percent {
  font-size: 0.875rem;
  color: var(--vf-color-muted);
  margin-left: 0.375rem;
}

.vf-file-preview-image-progress-bar {
  margin-top: 0.625rem;
  border-radius: 0;
  height: 0.1875rem;
  background: var(--vf-bg-passive);
  position: absolute;
  bottom: 0;
  left: calc(var(--vf-min-height-input) + 0.625rem);
  right: 0;
}

.vf-file-preview-image-progress-bar.vf-file-preview-image-progress-bar-sm {
  left: calc(var(--vf-min-height-input-sm) + 0.625rem);
}

.vf-file-preview-image-progress-bar.vf-file-preview-image-progress-bar-lg {
  left: calc(var(--vf-min-height-input-lg) + 0.625rem);
}

.vf-file-preview-image-progress {
  border-radius: 0;
  display: block;
  height: 100%;
  background: var(--vf-primary);
  transition: 0.6s ease;
}

.vf-file-preview-image-warning,
.vf-file-preview-image-uploaded,
.vf-file-preview-image-remove {
  display: flex;
  width: 1rem;
  height: 1rem;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
}

.vf-file-preview-image-warning-icon,
.vf-file-preview-image-uploaded-icon,
.vf-file-preview-image-remove-icon {
  width: 100%;
  height: 100%;
  display: block;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-position: center center;
}

.vf-file-preview-image-remove {
  display: none;
  margin-left: 0.375rem;
  background-color: var(--vf-bg-passive);
  transition: 0.15s;
}

.vf-file-preview-image-remove:hover {
  filter: brightness(0.9);
}

.vf-file-preview-image-remove-icon {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: 0.75rem 0.75rem;
  -webkit-mask-size: 0.75rem 0.75rem;
  background-color: var(--vf-color-passive);
}

.vf-file-preview-image-uploaded {
  background-color: var(--vf-bg-success);
}

.vf-file-preview-image-uploaded-icon {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: 0.625rem 0.625rem;
  -webkit-mask-size: 0.625rem 0.625rem;
  background-color: var(--vf-color-success);
}

.vf-file-preview-image-warning {
  background-color: var(--vf-bg-danger);
}

.vf-file-preview-image-warning-icon {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 192 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 192 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: 0.625rem 0.625rem;
  -webkit-mask-size: 0.625rem 0.625rem;
  background-color: var(--vf-color-danger);
}

.vf-file-removing .vf-file-preview-image {
  opacity: 0.6;
}`;G(Ag);_o.__file="themes/vueform/templates/elements/partials/FilePreview_image.vue";var fa={name:"FilePreview_gallery",data(){return{merge:!0,defaultClasses:{container:"",image:"",img:"",overlay:"",upload:"",progressBar:"",progress:"",warning:"",warningIcon:"",uploaded:"",uploadedIcon:"",remove:"",removeIcon:""}}}};const Eg=["aria-labelledby","aria-placeholder","aria-role","aria-describedby"],Lg=["id"],xg=["href"],Sg=["src","alt","title"],Tg=["src","alt","title"];function Bg(t,e,n,r,i,l){return Fe((d(),v("div",q({class:t.classes.container,tabindex:"0",role:"button"},t.attrs,{"aria-labelledby":t.ariaLabelledby,"aria-placeholder":t.ariaPlaceholder,"aria-role":t.ariaRoledescription,"aria-describedby":`${t.el$.fieldId}-file-description`,onKeyup:e[4]||(e[4]=(...a)=>t.handleKeyup&&t.handleKeyup(...a))}),[w("span",{id:`${t.el$.fieldId}-file-description`,class:f(t.classes.assistiveText),"aria-hidden":""},Ce(t.form$.translations.vueform.a11y.file.description),11,Lg),h(" Image  "),t.uploaded&&t.hasLink&&t.clickable?(d(),v("a",{key:0,class:f(t.classes.image),href:t.link,target:"_blank",rel:"nofollow noopener"},[w("img",{src:t.preview,class:f(t.classes.img),alt:t.filename,title:t.filename,"aria-hidden":"true"},null,10,Sg)],10,xg)):(d(),v("div",{key:1,class:f(t.classes.image)},[w("img",{class:f(t.classes.img),src:t.preview,alt:t.filename,title:t.filename,"aria-hidden":"true"},null,10,Tg)],2)),h(" Overlay "),!t.uploaded&&!t.uploading?(d(),v("div",{key:2,class:f(t.classes.overlay)},[t.canUploadTemp?(d(),v("div",{key:0,class:f(t.classes.upload),onClick:e[0]||(e[0]=he((...a)=>t.upload&&t.upload(...a),["prevent"])),onKeypress:e[1]||(e[1]=We((...a)=>t.upload&&t.upload(...a),["enter","space"])),tabindex:"-1",role:"button"},Ce(t.uploadText),35)):h("v-if",!0)],2)):h("v-if",!0),h(" Error "),t.hasError?(d(),v("span",{key:3,class:f(t.classes.warning)},[w("span",{class:f(t.classes.warningIcon)},null,2)],2)):t.el$.stage>1?(d(),v(ee,{key:4},[h(" Success "),w("span",{class:f(t.classes.uploaded)},[w("span",{class:f(t.classes.uploadedIcon)},null,2)],2)],2112)):h("v-if",!0),h(" Remove "),t.canRemove?(d(),v("div",{key:5,class:f(t.classes.remove),onClick:e[2]||(e[2]=he((...a)=>t.remove&&t.remove(...a),["prevent"])),onKeypress:e[3]||(e[3]=We((...a)=>t.remove&&t.remove(...a),["enter","space"])),"aria-roledescription":"❎",role:"button",tabindex:"0"},[w("span",{class:f(t.classes.removeIcon)},null,2)],34)):h("v-if",!0),h(" Progress "),t.uploading?(d(),v("div",{key:6,class:f(t.classes.progressBar)},[w("div",{class:f(t.classes.progress),style:mr({width:t.progress+"%"})},null,6)],2)):h("v-if",!0)],16,Eg)),[[ft,t.visible]])}fa.render=Bg;fa.__file="themes/blank/templates/elements/partials/FilePreview_gallery.vue";var Go={name:"GalleryPreview",render:fa.render,data(){return{merge:!0,defaultClasses:{container:"vf-file-preview-gallery",container_sm:"vf-file-preview-gallery-sm",container_md:"",container_lg:"vf-file-preview-gallery-lg",image:"vf-file-preview-gallery-image",image_sm:"vf-file-preview-gallery-image-sm",image_md:"",image_lg:"vf-file-preview-gallery-image-lg",image_link:"",image_static:"",img:"vf-file-preview-gallery-img",img_sm:"vf-file-preview-gallery-img-sm",img_md:"",img_lg:"vf-file-preview-gallery-img-lg",overlay:"vf-file-preview-gallery-overlay",overlay_sm:"vf-file-preview-gallery-overlay-sm",overlay_md:"",overlay_lg:"vf-file-preview-gallery-overlay-lg",upload:"vf-file-preview-gallery-upload",progressBar:"vf-file-preview-gallery-progress-bar",progress:"vf-file-preview-gallery-progress",warning:"vf-file-preview-gallery-warning",warningIcon:"vf-file-preview-gallery-warning-icon",uploaded:"vf-file-preview-gallery-uploaded",uploadedIcon:"vf-file-preview-gallery-uploaded-icon",remove:"vf-file-preview-gallery-remove",removeIcon:"vf-file-preview-gallery-remove-icon",assistiveText:"vf-assistive-text",$container:(t,{Size:e})=>[t.container,t[`container_${e}`]],$image:(t,{Size:e})=>[t.image,t[`image_${e}`]],$img:(t,{Size:e})=>[t.img,t[`img_${e}`]],$overlay:(t,{Size:e})=>[t.overlay,t[`overlay_${e}`]]}}}},Ig=`.vf-file-preview-gallery {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  transition: 0.2s background;
  width: var(--vf-gallery-size);
  height: var(--vf-gallery-size);
  position: relative;
}

.vf-file-preview-gallery:hover .vf-file-preview-gallery-overlay {
  opacity: 1;
  visibility: visible;
}

.vf-file-preview-gallery:hover .vf-file-preview-gallery-remove {
  opacity: 1;
  visibility: visible;
}

.vf-file-preview-gallery.vf-file-preview-gallery-sm {
  width: var(--vf-gallery-size-sm);
  height: var(--vf-gallery-size-sm);
}

.vf-file-preview-gallery.vf-file-preview-gallery-lg {
  width: var(--vf-gallery-size-lg);
  height: var(--vf-gallery-size-lg);
}

.vf-file-preview-gallery-overlay {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.5);
  transition: 0.3s;
  opacity: 0;
  visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 0.75rem;
  border-radius: var(--vf-radius-gallery);
}

.vf-file-preview-gallery-overlay.vf-file-preview-gallery-overlay-sm {
  border-radius: var(--vf-radius-gallery-sm);
}

.vf-file-preview-gallery-overlay.vf-file-preview-gallery-overlay-lg {
  border-radius: var(--vf-radius-gallery-lg);
}

.vf-file-preview-gallery-upload {
  font-size: 0.75rem;
  white-space: nowrap;
  background: #FFFFFF;
  padding: 0.0625rem 0.4375rem;
  background: var(--vf-primary);
  color: var(--vf-color-on-primary);
  border-radius: var(--vf-radius-small);
  text-decoration: none;
  transition: 0.15s;
  outline: 0px solid var(--vf-ring-color);
  outline-offset: 0;
}

.vf-file-preview-gallery-upload:hover {
  transform: scale(1.05);
}

.vf-file-preview-gallery-upload:focus {
  outline: var(--vf-ring-width) solid var(--vf-ring-color);
}

.vf-file-preview-gallery-image {
  width: 100%;
  height: 100%;
  font-size: 0;
  background: var(--vf-bg-passive);
  border-radius: var(--vf-radius-gallery);
  outline: none;
}

.vf-file-preview-gallery-image.vf-file-preview-gallery-image-sm {
  border-radius: var(--vf-radius-gallery-sm);
}

.vf-file-preview-gallery-image.vf-file-preview-gallery-image-lg {
  border-radius: var(--vf-radius-gallery-lg);
}

.vf-file-preview-gallery-img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  border-radius: var(--vf-radius-gallery);
}

.vf-file-preview-gallery-img[src=""], .vf-file-preview-gallery-img[src="data:"], .vf-file-preview-gallery-img:not([src]) {
  opacity: 0;
}

.vf-file-preview-gallery-img.vf-file-preview-gallery-img-sm {
  border-radius: var(--vf-radius-gallery-sm);
}

.vf-file-preview-gallery-img.vf-file-preview-gallery-img-lg {
  border-radius: var(--vf-radius-gallery-lg);
}

.vf-file-preview-gallery-progress-bar {
  border-radius: 0;
  height: 0.1875rem;
  position: absolute;
  left: 0.1875rem;
  bottom: 0.1875rem;
  z-index: 1;
  background: #FFFFFF;
  right: 0.1875rem;
}

.vf-file-preview-gallery-progress {
  border-radius: 0;
  height: 100%;
  background: var(--vf-primary);
  transition: 0.6s ease;
}

.vf-file-preview-gallery-remove,
.vf-file-preview-gallery-uploaded,
.vf-file-preview-gallery-warning {
  display: flex;
  width: 1rem;
  height: 1rem;
  align-items: center;
  justify-content: center;
}

.vf-file-preview-gallery-remove-icon,
.vf-file-preview-gallery-uploaded-icon,
.vf-file-preview-gallery-warning-icon {
  width: 100%;
  height: 100%;
  display: block;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-position: center center;
}

.vf-file-preview-gallery-remove {
  position: absolute;
  right: 0.1875rem;
  top: 0.1875rem;
  opacity: 0;
  visibility: hidden;
  background-color: var(--vf-bg-passive);
  border-radius: 999px;
  transition: 0.15s;
}

.vf-file-preview-gallery-remove:hover {
  filter: brightness(0.9);
}

.vf-file-preview-gallery-remove-icon {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: 0.75rem 0.75rem;
  -webkit-mask-size: 0.75rem 0.75rem;
  background-color: var(--vf-color-passive);
}

.vf-file-preview-gallery-uploaded {
  position: absolute;
  right: 0.1875rem;
  bottom: 0.1875rem;
  border-radius: 999px;
  background-color: var(--vf-bg-success);
}

.vf-file-preview-gallery-uploaded-icon {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: 0.625rem 0.625rem;
  -webkit-mask-size: 0.625rem 0.625rem;
  background-color: var(--vf-color-success);
}

.vf-file-preview-gallery-warning {
  position: absolute;
  right: 0.1875rem;
  bottom: 0.1875rem;
  border-radius: 999px;
  background-color: var(--vf-bg-danger);
}

.vf-file-preview-gallery-warning-icon {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 192 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 192 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: 0.625rem 0.625rem;
  -webkit-mask-size: 0.625rem 0.625rem;
  background-color: var(--vf-color-danger);
}

.vf-file-removing .vf-file-preview-gallery {
  opacity: 0.6;
}

.is-sorting .vf-file-preview-gallery:hover .vf-file-preview-gallery-overlay, .vf-gallery.is-disabled .vf-file-preview-gallery:hover .vf-file-preview-gallery-overlay {
  opacity: 0;
  visibility: hidden;
}

.is-sorting .vf-file-preview-gallery:hover .vf-file-preview-gallery-remove, .vf-gallery.is-disabled .vf-file-preview-gallery:hover .vf-file-preview-gallery-remove {
  opacity: 0;
  visibility: hidden;
}`;G(Ig);Go.__file="themes/vueform/templates/elements/partials/FilePreview_gallery.vue";var va={name:"RadiogroupRadio",data(){return{merge:!0,defaultClasses:{container:"",input:"",text:""}}}};const Rg=["value","name","id","disabled","aria-label"],Dg=["innerHTML"];function Mg(t,e,n,r,i,l){return d(),v("label",{class:f(t.classes.container)},[D(t.$slots,"default",q({name:t.name},{classes:t.classes,isDisabled:t.isDisabled,id:t.id,item:t.item,value:t.value,items:t.items,index:t.index}),()=>[Fe(w("input",q({type:"radio","onUpdate:modelValue":e[0]||(e[0]=a=>t.el$.value=a)},t.attrs,{value:t.value,class:t.classes.input,name:t.name,id:t.id,disabled:t.isDisabled,"aria-label":t.item.label}),null,16,Rg),[[br,t.el$.value]]),w("span",{class:f(t.classes.text),innerHTML:t.item.label},null,10,Dg)])],2)}va.render=Mg;va.__file="themes/blank/templates/elements/partials/RadiogroupRadio.vue";var Yo={name:"RadiogroupRadio",render:va.render,data(){return{merge:!0,defaultClasses:{container:"vf-radio-container",input:"vf-radio",input_enabled:"",input_disabled:"",input_sm:"vf-radio-sm",input_md:"",input_lg:"vf-radio-lg",text:"vf-radio-text",$input:(t,{isDisabled:e,Size:n})=>[t.input,t[`input_${n}`],e?t.input_disabled:t.input_enabled]}}}},Og="/* Some styles are contained in Vueform.vue & RadiogroupElement.vue */";G(Og);Yo.__file="themes/vueform/templates/elements/partials/RadiogroupRadio.vue";var ga={name:"RadiogroupRadio_tabs",data(){return{merge:!0,defaultClasses:{container:"",wrapper:"",input:"",text:""}}}};const Fg=["aria-checked"],Pg=["value","name","id","disabled"],$g=["innerHTML"];function zg(t,e,n,r,i,l){return d(),v("label",q(t.attrs,{class:t.classes.container,tabindex:"0",role:"radio","aria-checked":t.checked,onKeypress:e[1]||(e[1]=We(he(a=>t.el$.update(t.value),["prevent"]),["space"])),onKeydown:e[2]||(e[2]=(...a)=>t.handleKeydown&&t.handleKeydown(...a))}),[D(t.$slots,"default",q({name:t.name},{classes:t.classes,isDisabled:t.isDisabled,id:t.id,item:t.item,value:t.value,items:t.items,index:t.index}),()=>[w("div",{class:f(t.classes.wrapper)},[Fe(w("input",{type:"radio","onUpdate:modelValue":e[0]||(e[0]=a=>t.el$.model=a),value:t.value,class:f(t.classes.input),name:t.name,id:t.id,disabled:t.isDisabled},null,10,Pg),[[br,t.el$.model]]),w("span",{class:f(t.classes.text),innerHTML:`${t.item.label}`},null,10,$g)],2)])],16,Fg)}ga.render=zg;ga.__file="themes/blank/templates/elements/partials/RadiogroupRadio_tabs.vue";var Xo={name:"RadiogroupRadio_tabs",render:ga.render,data(){return{merge:!0,defaultClasses:{container:"vf-radio-tabs-container",wrapper:"vf-radio-tabs",wrapper_not_last:"vf-radio-tabs-not-last",wrapper_first:"vf-radio-tabs-first",wrapper_first_sm:"vf-radio-tabs-first-sm",wrapper_first_md:"",wrapper_first_lg:"vf-radio-tabs-first-lg",wrapper_last:"vf-radio-tabs-last",wrapper_last_sm:"vf-radio-tabs-last-sm",wrapper_last_md:"",wrapper_last_lg:"vf-radio-tabs-last-lg",wrapper_selected:"vf-radio-tabs-selected",wrapper_unselected:"vf-radio-tabs-unselected",wrapper_disabled:"vf-radio-tabs-disabled",wrapper_sm:"vf-radio-tabs-sm",wrapper_md:"",wrapper_lg:"vf-radio-tabs-lg",input:"vf-radio-tabs-input",text:"",$wrapper:(t,{index:e,items:n,el$:r,value:i,isDisabled:l,Size:a})=>[t.wrapper,t[`wrapper_${a}`],e<Object.keys(n).length-1?t.wrapper_not_last:null,e===0?t.wrapper_first:null,e===Object.keys(n).length-1?t.wrapper_last:null,r.value==i?t.wrapper_selected:t.wrapper_unselected,l?t.wrapper_disabled:null]}}}},Ng=`/* Some styles are contained in Vueform.vue & RadiogroupElement.vue */

.vf-radio-tabs-container {
  display: flex;
  align-items: flex-start;
  cursor: pointer;
}

.vf-radio-tabs {
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: solid;
  border-width: var(--vf-border-width-input-t) var(--vf-border-width-input-r) var(--vf-border-width-input-b) var(--vf-border-width-input-l);
  border-color: var(--vf-border-color-input);
  padding: var(--vf-py-group-tabs) var(--vf-px-group-tabs);
  width: 100%;
  background: var(--vf-bg-input);
  color: var(--vf-color-input);
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
}

.vf-radio-tabs.vf-radio-tabs-not-last {
  border-right: 0;
}

.vf-radio-tabs.vf-radio-tabs-first {
  border-radius: var(--vf-radius-input);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-radio-tabs.vf-radio-tabs-first.vf-radio-tabs-first-sm {
  border-radius: var(--vf-radius-input-sm);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-radio-tabs.vf-radio-tabs-first.vf-radio-tabs-first-lg {
  border-radius: var(--vf-radius-input-lg);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-radio-tabs.vf-radio-tabs-last {
  border-radius: var(--vf-radius-input-lg);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.vf-radio-tabs.vf-radio-tabs-last.vf-radio-tabs-last-sm {
  border-radius: var(--vf-radius-input-sm);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.vf-radio-tabs.vf-radio-tabs-last.vf-radio-tabs-last-lg {
  border-radius: var(--vf-radius-input-lg);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.vf-radio-tabs.vf-radio-tabs-selected {
  background-color: var(--vf-primary);
  border-color: rgba(0, 0, 0, 0.15);
  color: var(--vf-color-on-primary);
}

.vf-radio-tabs.vf-radio-tabs-unselected {
  border-color: var(--vf-border-color-input);
}

.vf-radio-tabs.vf-radio-tabs-unselected:hover:not(.vf-radio-tabs-disabled) {
  background-color: var(--vf-bg-input-hover);
  color: var(--vf-color-input-hover);
}

.vf-radio-tabs.vf-radio-tabs-disabled {
  opacity: 0.5;
}

.vf-radio-tabs.vf-radio-tabs-sm {
  padding: var(--vf-py-group-tabs-sm) var(--vf-px-group-tabs-sm);
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-sm);
}

.vf-radio-tabs.vf-radio-tabs-lg {
  padding: var(--vf-py-group-tabs-lg) var(--vf-px-group-tabs-lg);
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
}

.vf-radio-tabs-input {
  display: none;
}`;G(Ng);Xo.__file="themes/vueform/templates/elements/partials/RadiogroupRadio_tabs.vue";var ma={name:"RadiogroupRadio_tabs",data(){return{merge:!0,defaultClasses:{container:"",wrapper:"",input:"",text_wrapper:"",text:"",description:""}}}};const Hg=["value","name","id","disabled"],jg=["innerHTML"],Ug=["innerHTML"];function Vg(t,e,n,r,i,l){return d(),v("label",{class:f(t.classes.container)},[D(t.$slots,"default",q({name:t.name},{classes:t.classes,isDisabled:t.isDisabled,id:t.id,item:t.item,value:t.value,items:t.items,index:t.index}),()=>[w("div",{class:f(t.classes.wrapper)},[Fe(w("input",q({type:"radio","onUpdate:modelValue":e[0]||(e[0]=a=>t.el$.model=a)},t.attrs,{value:t.value,class:t.classes.input,name:t.name,id:t.id,disabled:t.isDisabled}),null,16,Hg),[[br,t.el$.model]]),w("div",{class:f(t.classes.text_wrapper)},[w("div",{class:f(t.classes.text),innerHTML:t.item.label},null,10,jg),w("div",{class:f(t.classes.description),innerHTML:t.item.description},null,10,Ug)],2)],2)])],2)}ma.render=Vg;ma.__file="themes/blank/templates/elements/partials/RadiogroupRadio_blocks.vue";var Zo={name:"RadiogroupRadio_blocks",render:ma.render,data(){return{merge:!0,defaultClasses:{container:"vf-radio-blocks-container",container_sm:"vf-radio-blocks-container-sm",container_md:"",container_lg:"vf-radio-blocks-container-lg",wrapper:"vf-radio-blocks",wrapper_not_last:"vf-radio-blocks-not-last",wrapper_first:"vf-radio-blocks-first",wrapper_first_sm:"vf-radio-blocks-first-sm",wrapper_first_md:"",wrapper_first_lg:"vf-radio-blocks-first-lg",wrapper_last:"vf-radio-blocks-last",wrapper_last_sm:"vf-radio-blocks-last-sm",wrapper_last_md:"",wrapper_last_lg:"vf-radio-blocks-last-lg",wrapper_selected:"vf-radio-blocks-selected",wrapper_unselected:"vf-radio-blocks-unselected",wrapper_disabled:"vf-radio-blocks-disabled",wrapper_sm:"vf-radio-blocks-sm",wrapper_md:"",wrapper_lg:"vf-radio-blocks-lg",input:"vf-radio",input_enabled:"",input_disabled:"",input_sm:"vf-radio-sm",input_md:"",input_lg:"vf-radio-lg",text_wrapper:"vf-radio-blocks-text-wrapper",text:"vf-radio-blocks-text",description:"vf-radio-blocks-description",description_sm:"vf-radio-blocks-description-sm",description_md:"",description_lg:"vf-radio-blocks-description-lg",$container:(t,{Size:e})=>[t.container,t[`container_${e}`]],$wrapper:(t,{index:e,items:n,el$:r,value:i,isDisabled:l,Size:a})=>[t.wrapper,t[`wrapper_${a}`],e<Object.keys(n).length-1?t.wrapper_not_last:null,e===0?t.wrapper_first:null,e===0?t[`wrapper_first_${a}`]:null,e===Object.keys(n).length-1?t.wrapper_last:null,e===Object.keys(n).length-1?t[`wrapper_last_${a}`]:null,r.value==i?t.wrapper_selected:t.wrapper_unselected,l?t.wrapper_disabled:null],$input:(t,{isDisabled:e,Size:n})=>[t.input,t[`input_${n}`],e?t.input_disabled:t.input_enabled],$description:(t,{Size:e})=>[t.description,t[`description_${e}`]]}}}},Wg=`/* Some styles are contained in Vueform.vue & RadiogroupElement.vue */

.vf-radio-blocks-container {
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  background: var(--vf-bg-input);
  border-radius: var(--vf-radius-large);
}

.vf-radio-blocks-container .vf-radio {
  margin-top: 0;
}

.vf-radio-blocks-container.vf-radio-blocks-container-sm {
  border-radius: var(--vf-radius-large-sm);
}

.vf-radio-blocks-container.vf-radio-blocks-container-lg {
  border-radius: var(--vf-radius-large-lg);
}

.vf-radio-blocks {
  display: flex;
  align-items: center;
  border-style: solid;
  border-width: var(--vf-border-width-input-t) var(--vf-border-width-input-r) var(--vf-border-width-input-b) var(--vf-border-width-input-l);
  border-color: var(--vf-border-color-input);
  width: 100%;
  padding: var(--vf-py-group-blocks) var(--vf-px-group-blocks);
  background: var(--vf-bg-input);
  color: var(--vf-color-input);
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
}

.vf-radio-blocks.vf-radio-blocks-not-last {
  border-bottom: 0;
}

.vf-radio-blocks.vf-radio-blocks-first {
  border-radius: var(--vf-radius-large);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-radio-blocks.vf-radio-blocks-first.vf-radio-blocks-first-sm {
  border-radius: var(--vf-radius-large-sm);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-radio-blocks.vf-radio-blocks-first.vf-radio-blocks-first-lg {
  border-radius: var(--vf-radius-large-lg);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-radio-blocks.vf-radio-blocks-last {
  border-radius: var(--vf-radius-large);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.vf-radio-blocks.vf-radio-blocks-last.vf-radio-blocks-last-sm {
  border-radius: var(--vf-radius-large-sm);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.vf-radio-blocks.vf-radio-blocks-last.vf-radio-blocks-last-lg {
  border-radius: var(--vf-radius-large-lg);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.vf-radio-blocks.vf-radio-blocks-selected {
  background-color: var(--vf-bg-selected);
}

.vf-radio-blocks.vf-radio-blocks-disabled {
  opacity: 0.5;
}

.vf-radio-blocks.vf-radio-blocks-sm {
  padding: var(--vf-py-group-blocks-sm) var(--vf-px-group-blocks-sm);
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-sm);
}

.vf-radio-blocks.vf-radio-blocks-lg {
  padding: var(--vf-py-group-blocks-lg) var(--vf-px-group-blocks-lg);
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
}

.vf-radio-blocks-text-wrapper {
  margin-left: 0.5rem;
}

.vf-radio-blocks-description {
  color: var(--vf-color-muted);
  font-size: var(--vf-font-size-small);
  line-height: var(--vf-line-height-small);
  letter-spacing: var(--vf-letter-spacing-small);
  margin-top: -0.125rem;
}

.vf-radio-blocks-description.vf-radio-blocks-description-sm {
  font-size: var(--vf-font-size-small-sm);
  line-height: var(--vf-line-height-small-sm);
  letter-spacing: var(--vf-letter-spacing-small-sm);
  margin-top: -0.125rem;
}

.vf-radio-blocks-description.vf-radio-blocks-description-lg {
  font-size: var(--vf-font-size-small-lg);
  line-height: var(--vf-line-height-small-lg);
  letter-spacing: var(--vf-letter-spacing-small-lg);
  margin-top: -0.125rem;
}`;G(Wg);Zo.__file="themes/vueform/templates/elements/partials/RadiogroupRadio_blocks.vue";var ha={name:"DatepickerWrapper",data(){return{merge:!0,defaultClasses:{datepicker:"",calendarContainer:""}}}};const Qg=["id","placeholder"];function qg(t,e,n,r,i,l){return d(),v("input",q({type:"text",class:t.classes.datepicker,id:t.id,placeholder:t.placeholder},t.attrs,{ref:"input"}),null,16,Qg)}ha.render=qg;ha.__file="themes/blank/templates/wrappers/DatepickerWrapper.vue";var es={name:"DatepickerWrapper",render:ha.render,data(){return{merge:!0,defaultClasses:{datepicker:"",calendarContainer:"flatpickr-calendar-container"}}}},Kg=`.flatpickr-wrapper {
  width: 100%;
  height: 100%;
}

.flatpickr-calendar {
  background: transparent;
  opacity: 0;
  display: none;
  text-align: center;
  visibility: hidden;
  padding: 0;
  animation: none;
  direction: ltr;
  border: 0;
  font-size: 14px;
  line-height: 24px;
  border-radius: 5px;
  position: absolute;
  width: 307.875px;
  box-sizing: border-box;
  touch-action: manipulation;
  box-shadow: 0 3px 13px rgba(0, 0, 0, 0.08);
  color: var(--vf-color-input);
}

.flatpickr-calendar.open,
.flatpickr-calendar.inline {
  opacity: 1;
  max-height: 640px;
  visibility: visible;
}

.flatpickr-calendar.open {
  display: inline-block;
  z-index: 999;
}

.flatpickr-calendar.animate.open {
  animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);
}

.flatpickr-calendar.inline {
  display: block;
  position: relative;
  top: 2px;
}

.flatpickr-calendar.rightMost {
  left: auto;
  right: 0;
}

.flatpickr-calendar.static {
  position: absolute;
  top: calc(100% + 2px);
}

.flatpickr-calendar.static.open {
  z-index: 999;
  display: block;
}

.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7) {
  box-shadow: none !important;
}

.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1) {
  box-shadow: -2px 0 0 var(--vf-bg-selected), 5px 0 0 var(--vf-bg-selected);
}

.flatpickr-calendar .hasWeeks .dayContainer,
.flatpickr-calendar .hasTime .dayContainer {
  border-bottom: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.flatpickr-calendar .hasWeeks .dayContainer {
  border-left: 0;
}

.flatpickr-calendar.hasTime .flatpickr-time {
  height: 40px;
  border-top: 1px solid var(--vf-border-color-input);
}

.flatpickr-calendar.hasTime .flatpickr-innerContainer {
  border-bottom: 0;
}

.flatpickr-calendar.noCalendar.hasTime .flatpickr-time {
  height: auto;
}

.flatpickr-calendar:before,
.flatpickr-calendar:after {
  position: absolute;
  display: block;
  pointer-events: none;
  border: solid transparent;
  content: "";
  height: 0;
  width: 0;
  left: 22px;
}

.flatpickr-calendar.rightMost:before,
.flatpickr-calendar.arrowRight:before,
.flatpickr-calendar.rightMost:after,
.flatpickr-calendar.arrowRight:after {
  left: auto;
  right: 22px;
}

.flatpickr-calendar.arrowCenter:before,
.flatpickr-calendar.arrowCenter:after {
  left: 50%;
  right: 50%;
}

.flatpickr-calendar:before {
  border-width: 5px;
  margin: 0 -5px;
  box-sizing: border-box;
}

.flatpickr-calendar:after {
  border-width: 4px;
  margin: 0 -4px;
  box-sizing: border-box;
}

.flatpickr-calendar.arrowTop:before,
.flatpickr-calendar.arrowTop:after {
  bottom: 100%;
}

.flatpickr-calendar.arrowTop:before {
  border-bottom-color: var(--vf-bg-date-head);
  box-sizing: border-box;
}

.flatpickr-calendar.arrowTop:after {
  border-bottom-color: var(--vf-bg-date-head);
  box-sizing: border-box;
}

.flatpickr-calendar.arrowBottom:before,
.flatpickr-calendar.arrowBottom:after {
  top: 100%;
}

.flatpickr-calendar.arrowBottom:before {
  border-top-color: var(--vf-bg-date-head);
}

.flatpickr-calendar.arrowBottom:after {
  border-top-color: var(--vf-bg-date-head);
}

.flatpickr-calendar:focus {
  outline: 0;
}

.flatpickr-wrapper {
  position: relative;
  display: flex;
}

.flatpickr-months {
  display: flex;
}

.flatpickr-months .flatpickr-month {
  border-radius: 5px 5px 0 0;
  background: var(--vf-bg-date-head);
  color: var(--vf-color-date-head);
  fill: var(--vf-color-date-head);
  height: 34px;
  line-height: 1;
  text-align: center;
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  overflow: hidden;
  flex: 1;
}

.flatpickr-months .flatpickr-prev-month,
.flatpickr-months .flatpickr-next-month {
  text-decoration: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  height: 34px;
  padding: 10px;
  z-index: 1;
  color: var(--vf-color-date-head);
  fill: var(--vf-color-date-head);
}

.flatpickr-months .flatpickr-prev-month.flatpickr-disabled,
.flatpickr-months .flatpickr-next-month.flatpickr-disabled {
  display: none;
}

.flatpickr-months .flatpickr-prev-month i,
.flatpickr-months .flatpickr-next-month i {
  position: relative;
}

.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month,
.flatpickr-months .flatpickr-next-month.flatpickr-prev-month {
  left: 0;
}

.flatpickr-months .flatpickr-prev-month.flatpickr-next-month,
.flatpickr-months .flatpickr-next-month.flatpickr-next-month {
  right: 0;
}

.flatpickr-months .flatpickr-prev-month:hover,
.flatpickr-months .flatpickr-next-month:hover {
  color: var(--vf-color-date-head);
}

.flatpickr-months .flatpickr-prev-month:hover svg,
.flatpickr-months .flatpickr-next-month:hover svg {
  opacity: 1;
}

.flatpickr-months .flatpickr-prev-month svg,
.flatpickr-months .flatpickr-next-month svg {
  width: 14px;
  height: 14px;
  opacity: 0.7;
  display: block;
}

.flatpickr-months .flatpickr-prev-month svg path,
.flatpickr-months .flatpickr-next-month svg path {
  transition: fill 0.1s;
  fill: inherit;
}

.numInputWrapper {
  position: relative;
  height: auto;
}

.numInputWrapper input,
.numInputWrapper span {
  display: inline-block;
}

.numInputWrapper input {
  width: 100%;
}

.numInputWrapper input::-ms-clear {
  display: none;
}

.numInputWrapper input::-webkit-outer-spin-button,
.numInputWrapper input::-webkit-inner-spin-button {
  margin: 0;
  -webkit-appearance: none;
}

.numInputWrapper span {
  position: absolute;
  right: 0;
  width: 14px;
  padding: 0 4px 0 2px;
  height: 50%;
  line-height: 50%;
  opacity: 0;
  cursor: pointer;
  border: 1px solid var(--vf-border-color-input);
  box-sizing: border-box;
}

.numInputWrapper span:hover {
  background: var(--vf-bg-selected);
}

.numInputWrapper span:active {
  background: var(--vf-bg-selected);
}

.numInputWrapper span:after {
  display: block;
  content: "";
  position: absolute;
}

.numInputWrapper span.arrowUp {
  top: 0;
  border-bottom: 0;
}

.numInputWrapper span.arrowUp:after {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid var(--vf-color-input);
  top: 26%;
  box-sizing: border-box;
}

.numInputWrapper span.arrowDown {
  top: 50%;
}

.numInputWrapper span.arrowDown:after {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid var(--vf-color-input);
  top: 40%;
  box-sizing: border-box;
}

.numInputWrapper span svg {
  width: inherit;
  height: auto;
}

.numInputWrapper span svg path {
  fill: var(--vf-color-input);
}

.numInputWrapper:hover {
  background: rgba(0, 0, 0, 0.05);
}

.numInputWrapper:hover span {
  opacity: 1;
}

.flatpickr-current-month {
  font-size: 135%;
  line-height: inherit;
  font-weight: 300;
  color: inherit;
  position: absolute;
  width: 75%;
  left: 12.5%;
  padding: 7.48px 0 0 0;
  line-height: 1;
  height: 34px;
  display: inline-block;
  text-align: center;
  transform: translate3d(0px, 0px, 0px);
}

.flatpickr-current-month span.cur-month {
  font-family: inherit;
  font-weight: 700;
  color: inherit;
  display: inline-block;
  margin-left: 0.5ch;
  padding: 0;
}

.flatpickr-current-month span.cur-month:hover {
  background: rgba(0, 0, 0, 0.05);
}

.flatpickr-current-month .numInputWrapper {
  width: 6ch;
  width: 7ch\\0 ;
  display: inline-block;
}

.flatpickr-current-month .numInputWrapper span.arrowUp:after {
  border-bottom-color: var(--vf-color-date-head);
}

.flatpickr-current-month .numInputWrapper span.arrowDown:after {
  border-top-color: var(--vf-color-date-head);
}

.flatpickr-current-month input.cur-year {
  background: transparent;
  box-sizing: border-box;
  color: inherit;
  cursor: text;
  padding: 0 0 0 0.5ch;
  margin: 0;
  display: inline-block;
  font-size: inherit;
  font-family: inherit;
  font-weight: 300;
  line-height: inherit;
  height: auto;
  border: 0;
  border-radius: 0;
  vertical-align: initial;
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
}

.flatpickr-current-month input.cur-year:focus {
  outline: 0;
}

.flatpickr-current-month input.cur-year[disabled],
.flatpickr-current-month input.cur-year[disabled]:hover {
  font-size: 100%;
  color: var(--vf-gray-300);
  background: transparent;
  pointer-events: none;
}

.flatpickr-current-month .flatpickr-monthDropdown-months {
  appearance: menulist;
  background: var(--vf-bg-date-head);
  border: none;
  border-radius: 0;
  box-sizing: border-box;
  color: inherit;
  cursor: pointer;
  font-size: inherit;
  font-family: inherit;
  font-weight: 300;
  height: auto;
  line-height: inherit;
  margin: -1px 0 0 0;
  outline: none;
  padding: 0 0 0 0.5ch;
  position: relative;
  vertical-align: initial;
  -webkit-box-sizing: border-box;
  -webkit-appearance: menulist;
  -moz-appearance: menulist;
  width: auto;
}

.flatpickr-current-month .flatpickr-monthDropdown-months:focus,
.flatpickr-current-month .flatpickr-monthDropdown-months:active {
  outline: none;
}

.flatpickr-current-month .flatpickr-monthDropdown-months:hover {
  background: rgba(0, 0, 0, 0.1);
}

.flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month {
  background-color: var(--vf-bg-date-head);
  outline: none;
  padding: 0;
}

.flatpickr-weekdays {
  background: var(--vf-bg-date-head);
  text-align: center;
  overflow: hidden;
  width: 100%;
  display: flex;
  align-items: center;
  height: 28px;
}

.flatpickr-weekdays .flatpickr-weekdaycontainer {
  display: flex;
  flex: 1;
}

span.flatpickr-weekday {
  cursor: default;
  font-size: 90%;
  background: var(--vf-bg-date-head);
  color: var(--vf-color-date-head);
  line-height: 1;
  margin: 0;
  text-align: center;
  display: block;
  flex: 1;
  font-weight: bolder;
}

.dayContainer,
.flatpickr-weeks {
  padding: 1px 0 0 0;
}

.flatpickr-days {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  width: 307.875px;
  background-color: var(--vf-bg-input);
}

.flatpickr-days:focus {
  outline: 0;
}

.dayContainer {
  padding: 0;
  outline: 0;
  text-align: left;
  width: 307.875px;
  min-width: 307.875px;
  max-width: 307.875px;
  box-sizing: border-box;
  display: inline-block;
  display: flex;
  flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  justify-content: space-around;
  transform: translate3d(0px, 0px, 0px);
  opacity: 1;
}

.dayContainer + .dayContainer {
  box-shadow: -1px 0 0 var(--vf-gray-200);
}

.flatpickr-day {
  background: none;
  border: 1px solid transparent;
  border-radius: 150px;
  box-sizing: border-box;
  cursor: pointer;
  font-weight: 400;
  width: 14.2857143%;
  flex-basis: 14.2857143%;
  max-width: 39px;
  height: 39px;
  line-height: 38px;
  margin: 0;
  display: inline-block;
  position: relative;
  justify-content: center;
  text-align: center;
}

.flatpickr-day.inRange,
.flatpickr-day.prevMonthDay.inRange,
.flatpickr-day.nextMonthDay.inRange,
.flatpickr-day.today.inRange,
.flatpickr-day.prevMonthDay.today.inRange,
.flatpickr-day.nextMonthDay.today.inRange,
.flatpickr-day:hover,
.flatpickr-day.prevMonthDay:hover,
.flatpickr-day.nextMonthDay:hover,
.flatpickr-day:focus,
.flatpickr-day.prevMonthDay:focus,
.flatpickr-day.nextMonthDay:focus {
  cursor: pointer;
  outline: 0;
  background: var(--vf-bg-selected);
  border-color: var(--vf-bg-selected);
}

.flatpickr-day.today {
  border-color: var(--vf-bg-selected);
}

.flatpickr-day.today:hover,
.flatpickr-day.today:focus {
  border-color: var(--vf-bg-selected);
  background: var(--vf-bg-selected);
}

.flatpickr-day.selected,
.flatpickr-day.startRange,
.flatpickr-day.endRange,
.flatpickr-day.selected.inRange,
.flatpickr-day.startRange.inRange,
.flatpickr-day.endRange.inRange,
.flatpickr-day.selected:focus,
.flatpickr-day.startRange:focus,
.flatpickr-day.endRange:focus,
.flatpickr-day.selected:hover,
.flatpickr-day.startRange:hover,
.flatpickr-day.endRange:hover,
.flatpickr-day.selected.prevMonthDay,
.flatpickr-day.startRange.prevMonthDay,
.flatpickr-day.endRange.prevMonthDay,
.flatpickr-day.selected.nextMonthDay,
.flatpickr-day.startRange.nextMonthDay,
.flatpickr-day.endRange.nextMonthDay {
  background: var(--vf-primary);
  box-shadow: none;
  color: #fff;
  border-color: var(--vf-primary);
}

.flatpickr-day.selected.startRange,
.flatpickr-day.startRange.startRange,
.flatpickr-day.endRange.startRange {
  border-radius: 50px 0 0 50px;
}

.flatpickr-day.selected.endRange,
.flatpickr-day.startRange.endRange,
.flatpickr-day.endRange.endRange {
  border-radius: 0 50px 50px 0;
}

.flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)),
.flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)),
.flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {
  box-shadow: -10px 0 0 var(--vf-primary);
}

.flatpickr-day.selected.startRange.endRange,
.flatpickr-day.startRange.startRange.endRange,
.flatpickr-day.endRange.startRange.endRange {
  border-radius: 50px;
}

.flatpickr-day.inRange {
  border-radius: 0;
  box-shadow: -5px 0 0 var(--vf-bg-selected), 5px 0 0 var(--vf-bg-selected);
}

.flatpickr-day.flatpickr-disabled,
.flatpickr-day.flatpickr-disabled:hover,
.flatpickr-day.prevMonthDay,
.flatpickr-day.nextMonthDay,
.flatpickr-day.notAllowed,
.flatpickr-day.notAllowed.prevMonthDay,
.flatpickr-day.notAllowed.nextMonthDay {
  color: var(--vf-color-disabled);
  background: transparent;
  border-color: transparent;
  cursor: default;
}

.flatpickr-day.flatpickr-disabled,
.flatpickr-day.flatpickr-disabled:hover {
  cursor: not-allowed;
  color: var(--vf-color-disabled);
}

.flatpickr-day.week.selected {
  border-radius: 0;
  box-shadow: -5px 0 0 var(--vf-primary), 5px 0 0 var(--vf-primary);
}

.flatpickr-day.hidden {
  visibility: hidden;
}

.rangeMode .flatpickr-day {
  margin-top: 1px;
}

.flatpickr-weekwrapper {
  float: left;
}

.flatpickr-weekwrapper .flatpickr-weeks {
  padding: 0 12px;
}

.flatpickr-weekwrapper .flatpickr-weekday {
  float: none;
  width: 100%;
  line-height: 28px;
}

.flatpickr-weekwrapper span.flatpickr-day,
.flatpickr-weekwrapper span.flatpickr-day:hover {
  display: block;
  width: 100%;
  max-width: none;
  color: var(--vf-gray-300);
  background: transparent;
  cursor: default;
  border: none;
}

.flatpickr-innerContainer {
  display: block;
  display: flex;
  box-sizing: border-box;
  overflow: hidden;
  background: var(--vf-bg-input);
}

.flatpickr-rContainer {
  display: inline-block;
  padding: 0;
  box-sizing: border-box;
}

.flatpickr-time {
  text-align: center;
  outline: 0;
  display: block;
  height: 0;
  line-height: 40px;
  max-height: 40px;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  background: var(--vf-bg-input);
  border-radius: 0 0 5px 5px;
  color: var(--vf-color-input);
}

.flatpickr-time:after {
  content: "";
  display: table;
  clear: both;
}

.flatpickr-time .numInputWrapper {
  flex: 1;
  width: 40%;
  height: 40px;
  float: left;
}

.flatpickr-time .numInputWrapper span.arrowUp:after {
  border-bottom-color: var(--vf-color-input);
  box-sizing: border-box;
}

.flatpickr-time .numInputWrapper span.arrowDown:after {
  border-top-color: var(--vf-color-input);
  box-sizing: border-box;
}

.flatpickr-time.hasSeconds .numInputWrapper {
  width: 26%;
}

.flatpickr-time.time24hr .numInputWrapper {
  width: 49%;
}

.flatpickr-time input {
  background: transparent;
  box-shadow: none;
  border: 0;
  border-radius: 0;
  text-align: center;
  margin: 0;
  padding: 0;
  height: inherit;
  line-height: inherit;
  font-size: 14px;
  position: relative;
  box-sizing: border-box;
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
  color: var(--vf-color-input);
  background: var(--vf-bg-input);
}

.flatpickr-time input.flatpickr-hour {
  font-weight: bold;
}

.flatpickr-time input.flatpickr-minute,
.flatpickr-time input.flatpickr-second {
  font-weight: 400;
}

.flatpickr-time input:focus {
  outline: 0;
  border: 0;
}

.flatpickr-time .flatpickr-time-separator,
.flatpickr-time .flatpickr-am-pm {
  height: inherit;
  float: left;
  line-height: inherit;
  font-weight: bold;
  width: 2%;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  align-self: center;
  background: var(--vf-bg-input);
}

.flatpickr-time .flatpickr-am-pm {
  outline: 0;
  width: 18%;
  cursor: pointer;
  text-align: center;
  font-weight: 400;
}

.flatpickr-time input:hover,
.flatpickr-time .flatpickr-am-pm:hover,
.flatpickr-time input:focus,
.flatpickr-time .flatpickr-am-pm:focus {
  background: var(--vf-bg-selected);
}

.flatpickr-input[readonly] {
  cursor: pointer;
}

@keyframes fpFadeInDown {
  from {
    opacity: 0;
    transform: translate3d(0, -20px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

span.flatpickr-day.selected {
  font-weight: bold;
}`;G(Kg);es.__file="themes/vueform/templates/wrappers/DatepickerWrapper.vue";var Jg="2.1.1";const tn="[data-trix-attachment]",ba={preview:{presentation:"gallery",caption:{name:!0,size:!0}},file:{caption:{size:!0}}},et={default:{tagName:"div",parse:!1},quote:{tagName:"blockquote",nestable:!0},heading1:{tagName:"h1",terminal:!0,breakOnReturn:!0,group:!1},code:{tagName:"pre",terminal:!0,htmlAttributes:["language"],text:{plaintext:!0}},bulletList:{tagName:"ul",parse:!1},bullet:{tagName:"li",listAttribute:"bulletList",group:!1,nestable:!0,test(t){return _a(t.parentNode)===et[this.listAttribute].tagName}},numberList:{tagName:"ol",parse:!1},number:{tagName:"li",listAttribute:"numberList",group:!1,nestable:!0,test(t){return _a(t.parentNode)===et[this.listAttribute].tagName}},attachmentGallery:{tagName:"div",exclusive:!0,terminal:!0,parse:!1,group:!1}},_a=t=>{var e;return t==null||(e=t.tagName)===null||e===void 0?void 0:e.toLowerCase()},Ga=navigator.userAgent.match(/android\s([0-9]+.*Chrome)/i),Mr=Ga&&parseInt(Ga[1]);var Yn={composesExistingText:/Android.*Chrome/.test(navigator.userAgent),recentAndroid:Mr&&Mr>12,samsungAndroid:Mr&&navigator.userAgent.match(/Android.*SM-/),forcesObjectResizing:/Trident.*rv:11/.test(navigator.userAgent),supportsInputEvents:typeof InputEvent<"u"&&["data","getTargetRanges","inputType"].every(t=>t in InputEvent.prototype)},ce={attachFiles:"Attach Files",bold:"Bold",bullets:"Bullets",byte:"Byte",bytes:"Bytes",captionPlaceholder:"Add a caption…",code:"Code",heading1:"Heading",indent:"Increase Level",italic:"Italic",link:"Link",numbers:"Numbers",outdent:"Decrease Level",quote:"Quote",redo:"Redo",remove:"Remove",strike:"Strikethrough",undo:"Undo",unlink:"Unlink",url:"URL",urlPlaceholder:"Enter a URL…",GB:"GB",KB:"KB",MB:"MB",PB:"PB",TB:"TB"};const _g=[ce.bytes,ce.KB,ce.MB,ce.GB,ce.TB,ce.PB];var ts={prefix:"IEC",precision:2,formatter(t){switch(t){case 0:return"0 ".concat(ce.bytes);case 1:return"1 ".concat(ce.byte);default:let e;this.prefix==="SI"?e=1e3:this.prefix==="IEC"&&(e=1024);const n=Math.floor(Math.log(t)/Math.log(e)),r=(t/Math.pow(e,n)).toFixed(this.precision).replace(/0*$/,"").replace(/\.$/,"");return"".concat(r," ").concat(_g[n])}}};const Lr="\uFEFF",Nt=" ",ns=function(t){for(const e in t){const n=t[e];this[e]=n}return this},wa=document.documentElement,Gg=wa.matches,Me=function(t){let{onElement:e,matchingSelector:n,withCallback:r,inPhase:i,preventDefault:l,times:a}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const o=e||wa,s=n,u=i==="capturing",c=function(A){a!=null&&--a==0&&c.destroy();const k=Ut(A.target,{matchingSelector:s});k!=null&&(r==null||r.call(k,A,k),l&&A.preventDefault())};return c.destroy=()=>o.removeEventListener(t,c,u),o.addEventListener(t,c,u),c},Mn=function(t){let{onElement:e,bubbles:n,cancelable:r,attributes:i}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const l=e??wa;n=n!==!1,r=r!==!1;const a=document.createEvent("Events");return a.initEvent(t,n,r),i!=null&&ns.call(a,i),l.dispatchEvent(a)},rs=function(t,e){if((t==null?void 0:t.nodeType)===1)return Gg.call(t,e)},Ut=function(t){let{matchingSelector:e,untilNode:n}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};for(;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;if(t!=null){if(e==null)return t;if(t.closest&&n==null)return t.closest(e);for(;t&&t!==n;){if(rs(t,e))return t;t=t.parentNode}}},ya=t=>document.activeElement!==t&&Zt(t,document.activeElement),Zt=function(t,e){if(t&&e)for(;e;){if(e===t)return!0;e=e.parentNode}},Or=function(t){var e;if((e=t)===null||e===void 0||!e.parentNode)return;let n=0;for(t=t.previousSibling;t;)n++,t=t.previousSibling;return n},Vt=t=>{var e;return t==null||(e=t.parentNode)===null||e===void 0?void 0:e.removeChild(t)},pr=function(t){let{onlyNodesOfType:e,usingFilter:n,expandEntityReferences:r}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=(()=>{switch(e){case"element":return NodeFilter.SHOW_ELEMENT;case"text":return NodeFilter.SHOW_TEXT;case"comment":return NodeFilter.SHOW_COMMENT;default:return NodeFilter.SHOW_ALL}})();return document.createTreeWalker(t,i,n??null,r===!0)},Ze=t=>{var e;return t==null||(e=t.tagName)===null||e===void 0?void 0:e.toLowerCase()},ge=function(t){let e,n,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};typeof t=="object"?(r=t,t=r.tagName):r={attributes:r};const i=document.createElement(t);if(r.editable!=null&&(r.attributes==null&&(r.attributes={}),r.attributes.contenteditable=r.editable),r.attributes)for(e in r.attributes)n=r.attributes[e],i.setAttribute(e,n);if(r.style)for(e in r.style)n=r.style[e],i.style[e]=n;if(r.data)for(e in r.data)n=r.data[e],i.dataset[e]=n;return r.className&&r.className.split(" ").forEach(l=>{i.classList.add(l)}),r.textContent&&(i.textContent=r.textContent),r.childNodes&&[].concat(r.childNodes).forEach(l=>{i.appendChild(l)}),i};let Bn;const On=function(){if(Bn!=null)return Bn;Bn=[];for(const t in et){const e=et[t];e.tagName&&Bn.push(e.tagName)}return Bn},Fr=t=>bn(t==null?void 0:t.firstChild),Ya=function(t){let{strict:e}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{strict:!0};return e?bn(t):bn(t)||!bn(t.firstChild)&&function(n){return On().includes(Ze(n))&&!On().includes(Ze(n.firstChild))}(t)},bn=t=>Yg(t)&&(t==null?void 0:t.data)==="block",Yg=t=>(t==null?void 0:t.nodeType)===Node.COMMENT_NODE,wn=function(t){let{name:e}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(t)return Fn(t)?t.data===Lr?!e||t.parentNode.dataset.trixCursorTarget===e:void 0:wn(t.firstChild)},nn=t=>rs(t,tn),is=t=>Fn(t)&&(t==null?void 0:t.data)==="",Fn=t=>(t==null?void 0:t.nodeType)===Node.TEXT_NODE,ka={level2Enabled:!0,getLevel(){return this.level2Enabled&&Yn.supportsInputEvents?2:0},pickFiles(t){const e=ge("input",{type:"file",multiple:!0,hidden:!0,id:this.fileInputId});e.addEventListener("change",()=>{t(e.files),Vt(e)}),Vt(document.getElementById(this.fileInputId)),document.body.appendChild(e),e.click()}};var sr={removeBlankTableCells:!1,tableCellSeparator:" | ",tableRowSeparator:`
`},an={bold:{tagName:"strong",inheritable:!0,parser(t){const e=window.getComputedStyle(t);return e.fontWeight==="bold"||e.fontWeight>=600}},italic:{tagName:"em",inheritable:!0,parser:t=>window.getComputedStyle(t).fontStyle==="italic"},href:{groupTagName:"a",parser(t){const e="a:not(".concat(tn,")"),n=t.closest(e);if(n)return n.getAttribute("href")}},strike:{tagName:"del",inheritable:!0},frozen:{style:{backgroundColor:"highlight"}}},as={getDefaultHTML:()=>`<div class="trix-button-row">
      <span class="trix-button-group trix-button-group--text-tools" data-trix-button-group="text-tools">
        <button type="button" class="trix-button trix-button--icon trix-button--icon-bold" data-trix-attribute="bold" data-trix-key="b" title="`.concat(ce.bold,'" tabindex="-1">').concat(ce.bold,`</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-italic" data-trix-attribute="italic" data-trix-key="i" title="`).concat(ce.italic,'" tabindex="-1">').concat(ce.italic,`</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-strike" data-trix-attribute="strike" title="`).concat(ce.strike,'" tabindex="-1">').concat(ce.strike,`</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-link" data-trix-attribute="href" data-trix-action="link" data-trix-key="k" title="`).concat(ce.link,'" tabindex="-1">').concat(ce.link,`</button>
      </span>

      <span class="trix-button-group trix-button-group--block-tools" data-trix-button-group="block-tools">
        <button type="button" class="trix-button trix-button--icon trix-button--icon-heading-1" data-trix-attribute="heading1" title="`).concat(ce.heading1,'" tabindex="-1">').concat(ce.heading1,`</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-quote" data-trix-attribute="quote" title="`).concat(ce.quote,'" tabindex="-1">').concat(ce.quote,`</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-code" data-trix-attribute="code" title="`).concat(ce.code,'" tabindex="-1">').concat(ce.code,`</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-bullet-list" data-trix-attribute="bullet" title="`).concat(ce.bullets,'" tabindex="-1">').concat(ce.bullets,`</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-number-list" data-trix-attribute="number" title="`).concat(ce.numbers,'" tabindex="-1">').concat(ce.numbers,`</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-decrease-nesting-level" data-trix-action="decreaseNestingLevel" title="`).concat(ce.outdent,'" tabindex="-1">').concat(ce.outdent,`</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-increase-nesting-level" data-trix-action="increaseNestingLevel" title="`).concat(ce.indent,'" tabindex="-1">').concat(ce.indent,`</button>
      </span>

      <span class="trix-button-group trix-button-group--file-tools" data-trix-button-group="file-tools">
        <button type="button" class="trix-button trix-button--icon trix-button--icon-attach" data-trix-action="attachFiles" title="`).concat(ce.attachFiles,'" tabindex="-1">').concat(ce.attachFiles,`</button>
      </span>

      <span class="trix-button-group-spacer"></span>

      <span class="trix-button-group trix-button-group--history-tools" data-trix-button-group="history-tools">
        <button type="button" class="trix-button trix-button--icon trix-button--icon-undo" data-trix-action="undo" data-trix-key="z" title="`).concat(ce.undo,'" tabindex="-1">').concat(ce.undo,`</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-redo" data-trix-action="redo" data-trix-key="shift+z" title="`).concat(ce.redo,'" tabindex="-1">').concat(ce.redo,`</button>
      </span>
    </div>

    <div class="trix-dialogs" data-trix-dialogs>
      <div class="trix-dialog trix-dialog--link" data-trix-dialog="href" data-trix-dialog-attribute="href">
        <div class="trix-dialog__link-fields">
          <input type="url" name="href" class="trix-input trix-input--dialog" placeholder="`).concat(ce.urlPlaceholder,'" aria-label="').concat(ce.url,`" required data-trix-input>
          <div class="trix-button-group">
            <input type="button" class="trix-button trix-button--dialog" value="`).concat(ce.link,`" data-trix-method="setAttribute">
            <input type="button" class="trix-button trix-button--dialog" value="`).concat(ce.unlink,`" data-trix-method="removeAttribute">
          </div>
        </div>
      </div>
    </div>`)};const ti={interval:5e3};var Xn=Object.freeze({__proto__:null,attachments:ba,blockAttributes:et,browser:Yn,css:{attachment:"attachment",attachmentCaption:"attachment__caption",attachmentCaptionEditor:"attachment__caption-editor",attachmentMetadata:"attachment__metadata",attachmentMetadataContainer:"attachment__metadata-container",attachmentName:"attachment__name",attachmentProgress:"attachment__progress",attachmentSize:"attachment__size",attachmentToolbar:"attachment__toolbar",attachmentGallery:"attachment-gallery"},fileSize:ts,input:ka,keyNames:{8:"backspace",9:"tab",13:"return",27:"escape",37:"left",39:"right",46:"delete",68:"d",72:"h",79:"o"},lang:ce,parser:sr,textAttributes:an,toolbar:as,undo:ti});class Ue{static proxyMethod(e){const{name:n,toMethod:r,toProperty:i,optional:l}=Xg(e);this.prototype[n]=function(){let a,o;var s,u;return r?o=l?(s=this[r])===null||s===void 0?void 0:s.call(this):this[r]():i&&(o=this[i]),l?(a=(u=o)===null||u===void 0?void 0:u[n],a?Xa.call(a,o,arguments):void 0):(a=o[n],Xa.call(a,o,arguments))}}}const Xg=function(t){const e=t.match(Zg);if(!e)throw new Error("can't parse @proxyMethod expression: ".concat(t));const n={name:e[4]};return e[2]!=null?n.toMethod=e[1]:n.toProperty=e[1],e[3]!=null&&(n.optional=!0),n},{apply:Xa}=Function.prototype,Zg=new RegExp("^(.+?)(\\(\\))?(\\?)?\\.(.+?)$");var Pr,$r,zr;class Qn extends Ue{static box(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return e instanceof this?e:this.fromUCS2String(e==null?void 0:e.toString())}static fromUCS2String(e){return new this(e,ni(e))}static fromCodepoints(e){return new this(ri(e),e)}constructor(e,n){super(...arguments),this.ucs2String=e,this.codepoints=n,this.length=this.codepoints.length,this.ucs2Length=this.ucs2String.length}offsetToUCS2Offset(e){return ri(this.codepoints.slice(0,Math.max(0,e))).length}offsetFromUCS2Offset(e){return ni(this.ucs2String.slice(0,Math.max(0,e))).length}slice(){return this.constructor.fromCodepoints(this.codepoints.slice(...arguments))}charAt(e){return this.slice(e,e+1)}isEqualTo(e){return this.constructor.box(e).ucs2String===this.ucs2String}toJSON(){return this.ucs2String}getCacheKey(){return this.ucs2String}toString(){return this.ucs2String}}const em=((Pr=Array.from)===null||Pr===void 0?void 0:Pr.call(Array,"👼").length)===1,tm=(($r=" ".codePointAt)===null||$r===void 0?void 0:$r.call(" ",0))!=null,nm=((zr=String.fromCodePoint)===null||zr===void 0?void 0:zr.call(String,32,128124))===" 👼";let ni,ri;ni=em&&tm?t=>Array.from(t).map(e=>e.codePointAt(0)):function(t){const e=[];let n=0;const{length:r}=t;for(;n<r;){let i=t.charCodeAt(n++);if(55296<=i&&i<=56319&&n<r){const l=t.charCodeAt(n++);(64512&l)==56320?i=((1023&i)<<10)+(1023&l)+65536:n--}e.push(i)}return e},ri=nm?t=>String.fromCodePoint(...Array.from(t||[])):function(t){return(()=>{const e=[];return Array.from(t).forEach(n=>{let r="";n>65535&&(n-=65536,r+=String.fromCharCode(n>>>10&1023|55296),n=56320|1023&n),e.push(r+String.fromCharCode(n))}),e})().join("")};let rm=0;class sn extends Ue{static fromJSONString(e){return this.fromJSON(JSON.parse(e))}constructor(){super(...arguments),this.id=++rm}hasSameConstructorAs(e){return this.constructor===(e==null?void 0:e.constructor)}isEqualTo(e){return this===e}inspect(){const e=[],n=this.contentsForInspection()||{};for(const r in n){const i=n[r];e.push("".concat(r,"=").concat(i))}return"#<".concat(this.constructor.name,":").concat(this.id).concat(e.length?" ".concat(e.join(", ")):"",">")}contentsForInspection(){}toJSONString(){return JSON.stringify(this)}toUTF16String(){return Qn.box(this)}getCacheKey(){return this.id.toString()}}const ln=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0},Ca=function(t){const e=t.slice(0);for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return e.splice(...r),e},im=/[\u05BE\u05C0\u05C3\u05D0-\u05EA\u05F0-\u05F4\u061B\u061F\u0621-\u063A\u0640-\u064A\u066D\u0671-\u06B7\u06BA-\u06BE\u06C0-\u06CE\u06D0-\u06D5\u06E5\u06E6\u200F\u202B\u202E\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE72\uFE74\uFE76-\uFEFC]/,am=function(){const t=ge("input",{dir:"auto",name:"x",dirName:"x.dir"}),e=ge("textarea",{dir:"auto",name:"y",dirName:"y.dir"}),n=ge("form");n.appendChild(t),n.appendChild(e);const r=function(){try{return new FormData(n).has(e.dirName)}catch{return!1}}(),i=function(){try{return t.matches(":dir(ltr),:dir(rtl)")}catch{return!1}}();return r?function(l){return e.value=l,new FormData(n).get(e.dirName)}:i?function(l){return t.value=l,t.matches(":dir(rtl)")?"rtl":"ltr"}:function(l){const a=l.trim().charAt(0);return im.test(a)?"rtl":"ltr"}}();let Nr=null,Hr=null,jr=null,rr=null;const ii=()=>(Nr||(Nr=om().concat(lm())),Nr),Ne=t=>et[t],lm=()=>(Hr||(Hr=Object.keys(et)),Hr),ai=t=>an[t],om=()=>(jr||(jr=Object.keys(an)),jr),ls=function(t,e){sm(t).textContent=e.replace(/%t/g,t)},sm=function(t){const e=document.createElement("style");e.setAttribute("type","text/css"),e.setAttribute("data-tag-name",t.toLowerCase());const n=um();return n&&e.setAttribute("nonce",n),document.head.insertBefore(e,document.head.firstChild),e},um=function(){const t=Za("trix-csp-nonce")||Za("csp-nonce");if(t)return t.getAttribute("content")},Za=t=>document.head.querySelector("meta[name=".concat(t,"]")),el={"application/x-trix-feature-detection":"test"},os=function(t){const e=t.getData("text/plain"),n=t.getData("text/html");if(!e||!n)return e==null?void 0:e.length;{const{body:r}=new DOMParser().parseFromString(n,"text/html");if(r.textContent===e)return!r.querySelector("*")}},ss=/Mac|^iP/.test(navigator.platform)?t=>t.metaKey:t=>t.ctrlKey,Aa=t=>setTimeout(t,1),us=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const e={};for(const n in t){const r=t[n];e[n]=r}return e},Ln=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(t[n]!==e[n])return!1;return!0},xe=function(t){if(t!=null)return Array.isArray(t)||(t=[t,t]),[tl(t[0]),tl(t[1]!=null?t[1]:t[0])]},xt=function(t){if(t==null)return;const[e,n]=xe(t);return li(e,n)},fr=function(t,e){if(t==null||e==null)return;const[n,r]=xe(t),[i,l]=xe(e);return li(n,i)&&li(r,l)},tl=function(t){return typeof t=="number"?t:us(t)},li=function(t,e){return typeof t=="number"?t===e:Ln(t,e)};class ds extends Ue{constructor(){super(...arguments),this.update=this.update.bind(this),this.selectionManagers=[]}start(){this.started||(this.started=!0,document.addEventListener("selectionchange",this.update,!0))}stop(){if(this.started)return this.started=!1,document.removeEventListener("selectionchange",this.update,!0)}registerSelectionManager(e){if(!this.selectionManagers.includes(e))return this.selectionManagers.push(e),this.start()}unregisterSelectionManager(e){if(this.selectionManagers=this.selectionManagers.filter(n=>n!==e),this.selectionManagers.length===0)return this.stop()}notifySelectionManagersOfSelectionChange(){return this.selectionManagers.map(e=>e.selectionDidChange())}update(){this.notifySelectionManagersOfSelectionChange()}reset(){this.update()}}const on=new ds,cs=function(){const t=window.getSelection();if(t.rangeCount>0)return t},Pn=function(){var t;const e=(t=cs())===null||t===void 0?void 0:t.getRangeAt(0);if(e&&!dm(e))return e},ps=function(t){const e=window.getSelection();return e.removeAllRanges(),e.addRange(t),on.update()},dm=t=>nl(t.startContainer)||nl(t.endContainer),nl=t=>!Object.getPrototypeOf(t),Rn=t=>t.replace(new RegExp("".concat(Lr),"g"),"").replace(new RegExp("".concat(Nt),"g")," "),Ea=new RegExp("[^\\S".concat(Nt,"]")),La=t=>t.replace(new RegExp("".concat(Ea.source),"g")," ").replace(/\ {2,}/g," "),rl=function(t,e){if(t.isEqualTo(e))return["",""];const n=Ur(t,e),{length:r}=n.utf16String;let i;if(r){const{offset:l}=n,a=t.codepoints.slice(0,l).concat(t.codepoints.slice(l+r));i=Ur(e,Qn.fromCodepoints(a))}else i=Ur(e,t);return[n.utf16String.toString(),i.utf16String.toString()]},Ur=function(t,e){let n=0,r=t.length,i=e.length;for(;n<r&&t.charAt(n).isEqualTo(e.charAt(n));)n++;for(;r>n+1&&t.charAt(r-1).isEqualTo(e.charAt(i-1));)r--,i--;return{utf16String:t.slice(n,r),offset:n}};class rt extends sn{static fromCommonAttributesOfObjects(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];if(!e.length)return new this;let n=In(e[0]),r=n.getKeys();return e.slice(1).forEach(i=>{r=n.getKeysCommonToHash(In(i)),n=n.slice(r)}),n}static box(e){return In(e)}constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};super(...arguments),this.values=ur(e)}add(e,n){return this.merge(cm(e,n))}remove(e){return new rt(ur(this.values,e))}get(e){return this.values[e]}has(e){return e in this.values}merge(e){return new rt(pm(this.values,fm(e)))}slice(e){const n={};return Array.from(e).forEach(r=>{this.has(r)&&(n[r]=this.values[r])}),new rt(n)}getKeys(){return Object.keys(this.values)}getKeysCommonToHash(e){return e=In(e),this.getKeys().filter(n=>this.values[n]===e.values[n])}isEqualTo(e){return ln(this.toArray(),In(e).toArray())}isEmpty(){return this.getKeys().length===0}toArray(){if(!this.array){const e=[];for(const n in this.values){const r=this.values[n];e.push(e.push(n,r))}this.array=e.slice(0)}return this.array}toObject(){return ur(this.values)}toJSON(){return this.toObject()}contentsForInspection(){return{values:JSON.stringify(this.values)}}}const cm=function(t,e){const n={};return n[t]=e,n},pm=function(t,e){const n=ur(t);for(const r in e){const i=e[r];n[r]=i}return n},ur=function(t,e){const n={};return Object.keys(t).sort().forEach(r=>{r!==e&&(n[r]=t[r])}),n},In=function(t){return t instanceof rt?t:new rt(t)},fm=function(t){return t instanceof rt?t.values:t};class xa{static groupObjects(){let e,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],{depth:r,asTree:i}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};i&&r==null&&(r=0);const l=[];return Array.from(n).forEach(a=>{var o;if(e){var s,u,c;if((s=a.canBeGrouped)!==null&&s!==void 0&&s.call(a,r)&&(u=(c=e[e.length-1]).canBeGroupedWith)!==null&&u!==void 0&&u.call(c,a,r))return void e.push(a);l.push(new this(e,{depth:r,asTree:i})),e=null}(o=a.canBeGrouped)!==null&&o!==void 0&&o.call(a,r)?e=[a]:l.push(a)}),e&&l.push(new this(e,{depth:r,asTree:i})),l}constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],{depth:n,asTree:r}=arguments.length>1?arguments[1]:void 0;this.objects=e,r&&(this.depth=n,this.objects=this.constructor.groupObjects(this.objects,{asTree:r,depth:this.depth+1}))}getObjects(){return this.objects}getDepth(){return this.depth}getCacheKey(){const e=["objectGroup"];return Array.from(this.getObjects()).forEach(n=>{e.push(n.getCacheKey())}),e.join("/")}}class vm extends Ue{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];super(...arguments),this.objects={},Array.from(e).forEach(n=>{const r=JSON.stringify(n);this.objects[r]==null&&(this.objects[r]=n)})}find(e){const n=JSON.stringify(e);return this.objects[n]}}class gm{constructor(e){this.reset(e)}add(e){const n=il(e);this.elements[n]=e}remove(e){const n=il(e),r=this.elements[n];if(r)return delete this.elements[n],r}reset(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return this.elements={},Array.from(e).forEach(n=>{this.add(n)}),e}}const il=t=>t.dataset.trixStoreKey;class vr extends Ue{isPerforming(){return this.performing===!0}hasPerformed(){return this.performed===!0}hasSucceeded(){return this.performed&&this.succeeded}hasFailed(){return this.performed&&!this.succeeded}getPromise(){return this.promise||(this.promise=new Promise((e,n)=>(this.performing=!0,this.perform((r,i)=>{this.succeeded=r,this.performing=!1,this.performed=!0,this.succeeded?e(i):n(i)})))),this.promise}perform(e){return e(!1)}release(){var e,n;(e=this.promise)===null||e===void 0||(n=e.cancel)===null||n===void 0||n.call(e),this.promise=null,this.performing=null,this.performed=null,this.succeeded=null}}vr.proxyMethod("getPromise().then"),vr.proxyMethod("getPromise().catch");class un extends Ue{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(...arguments),this.object=e,this.options=n,this.childViews=[],this.rootView=this}getNodes(){return this.nodes||(this.nodes=this.createNodes()),this.nodes.map(e=>e.cloneNode(!0))}invalidate(){var e;return this.nodes=null,this.childViews=[],(e=this.parentView)===null||e===void 0?void 0:e.invalidate()}invalidateViewForObject(e){var n;return(n=this.findViewForObject(e))===null||n===void 0?void 0:n.invalidate()}findOrCreateCachedChildView(e,n,r){let i=this.getCachedViewForObject(n);return i?this.recordChildView(i):(i=this.createChildView(...arguments),this.cacheViewForObject(i,n)),i}createChildView(e,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};n instanceof xa&&(r.viewClass=e,e=mm);const i=new e(n,r);return this.recordChildView(i)}recordChildView(e){return e.parentView=this,e.rootView=this.rootView,this.childViews.push(e),e}getAllChildViews(){let e=[];return this.childViews.forEach(n=>{e.push(n),e=e.concat(n.getAllChildViews())}),e}findElement(){return this.findElementForObject(this.object)}findElementForObject(e){const n=e==null?void 0:e.id;if(n)return this.rootView.element.querySelector("[data-trix-id='".concat(n,"']"))}findViewForObject(e){for(const n of this.getAllChildViews())if(n.object===e)return n}getViewCache(){return this.rootView!==this?this.rootView.getViewCache():this.isViewCachingEnabled()?(this.viewCache||(this.viewCache={}),this.viewCache):void 0}isViewCachingEnabled(){return this.shouldCacheViews!==!1}enableViewCaching(){this.shouldCacheViews=!0}disableViewCaching(){this.shouldCacheViews=!1}getCachedViewForObject(e){var n;return(n=this.getViewCache())===null||n===void 0?void 0:n[e.getCacheKey()]}cacheViewForObject(e,n){const r=this.getViewCache();r&&(r[n.getCacheKey()]=e)}garbageCollectCachedViews(){const e=this.getViewCache();if(e){const n=this.getAllChildViews().concat(this).map(r=>r.object.getCacheKey());for(const r in e)n.includes(r)||delete e[r]}}}class mm extends un{constructor(){super(...arguments),this.objectGroup=this.object,this.viewClass=this.options.viewClass,delete this.options.viewClass}getChildViews(){return this.childViews.length||Array.from(this.objectGroup.getObjects()).forEach(e=>{this.findOrCreateCachedChildView(this.viewClass,e,this.options)}),this.childViews}createNodes(){const e=this.createContainerElement();return this.getChildViews().forEach(n=>{Array.from(n.getNodes()).forEach(r=>{e.appendChild(r)})}),[e]}createContainerElement(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.objectGroup.getDepth();return this.getChildViews()[0].createContainerElement(e)}}const{css:Ft}=Xn;class Sa extends un{constructor(){super(...arguments),this.attachment=this.object,this.attachment.uploadProgressDelegate=this,this.attachmentPiece=this.options.piece}createContentNodes(){return[]}createNodes(){let e;const n=e=ge({tagName:"figure",className:this.getClassName(),data:this.getData(),editable:!1}),r=this.getHref();return r&&(e=ge({tagName:"a",editable:!1,attributes:{href:r,tabindex:-1}}),n.appendChild(e)),this.attachment.hasContent()?e.innerHTML=this.attachment.getContent():this.createContentNodes().forEach(i=>{e.appendChild(i)}),e.appendChild(this.createCaptionElement()),this.attachment.isPending()&&(this.progressElement=ge({tagName:"progress",attributes:{class:Ft.attachmentProgress,value:this.attachment.getUploadProgress(),max:100},data:{trixMutable:!0,trixStoreKey:["progressElement",this.attachment.id].join("/")}}),n.appendChild(this.progressElement)),[al("left"),n,al("right")]}createCaptionElement(){const e=ge({tagName:"figcaption",className:Ft.attachmentCaption}),n=this.attachmentPiece.getCaption();if(n)e.classList.add("".concat(Ft.attachmentCaption,"--edited")),e.textContent=n;else{let r,i;const l=this.getCaptionConfig();if(l.name&&(r=this.attachment.getFilename()),l.size&&(i=this.attachment.getFormattedFilesize()),r){const a=ge({tagName:"span",className:Ft.attachmentName,textContent:r});e.appendChild(a)}if(i){r&&e.appendChild(document.createTextNode(" "));const a=ge({tagName:"span",className:Ft.attachmentSize,textContent:i});e.appendChild(a)}}return e}getClassName(){const e=[Ft.attachment,"".concat(Ft.attachment,"--").concat(this.attachment.getType())],n=this.attachment.getExtension();return n&&e.push("".concat(Ft.attachment,"--").concat(n)),e.join(" ")}getData(){const e={trixAttachment:JSON.stringify(this.attachment),trixContentType:this.attachment.getContentType(),trixId:this.attachment.id},{attributes:n}=this.attachmentPiece;return n.isEmpty()||(e.trixAttributes=JSON.stringify(n)),this.attachment.isPending()&&(e.trixSerialize=!1),e}getHref(){if(!hm(this.attachment.getContent(),"a"))return this.attachment.getHref()}getCaptionConfig(){var e;const n=this.attachment.getType(),r=us((e=ba[n])===null||e===void 0?void 0:e.caption);return n==="file"&&(r.name=!0),r}findProgressElement(){var e;return(e=this.findElement())===null||e===void 0?void 0:e.querySelector("progress")}attachmentDidChangeUploadProgress(){const e=this.attachment.getUploadProgress(),n=this.findProgressElement();n&&(n.value=e)}}const al=t=>ge({tagName:"span",textContent:Lr,data:{trixCursorTarget:t,trixSerialize:!1}}),hm=function(t,e){const n=ge("div");return n.innerHTML=t||"",n.querySelector(e)};class fs extends Sa{constructor(){super(...arguments),this.attachment.previewDelegate=this}createContentNodes(){return this.image=ge({tagName:"img",attributes:{src:""},data:{trixMutable:!0}}),this.refresh(this.image),[this.image]}createCaptionElement(){const e=super.createCaptionElement(...arguments);return e.textContent||e.setAttribute("data-trix-placeholder",ce.captionPlaceholder),e}refresh(e){var n;if(e||(e=(n=this.findElement())===null||n===void 0?void 0:n.querySelector("img")),e)return this.updateAttributesForImage(e)}updateAttributesForImage(e){const n=this.attachment.getURL(),r=this.attachment.getPreviewURL();if(e.src=r||n,r===n)e.removeAttribute("data-trix-serialized-attributes");else{const o=JSON.stringify({src:n});e.setAttribute("data-trix-serialized-attributes",o)}const i=this.attachment.getWidth(),l=this.attachment.getHeight();i!=null&&(e.width=i),l!=null&&(e.height=l);const a=["imageElement",this.attachment.id,e.src,e.width,e.height].join("/");e.dataset.trixStoreKey=a}attachmentDidChangeAttributes(){return this.refresh(this.image),this.refresh()}}class vs extends un{constructor(){super(...arguments),this.piece=this.object,this.attributes=this.piece.getAttributes(),this.textConfig=this.options.textConfig,this.context=this.options.context,this.piece.attachment?this.attachment=this.piece.attachment:this.string=this.piece.toString()}createNodes(){let e=this.attachment?this.createAttachmentNodes():this.createStringNodes();const n=this.createElement();if(n){const r=function(i){for(;(l=i)!==null&&l!==void 0&&l.firstElementChild;){var l;i=i.firstElementChild}return i}(n);Array.from(e).forEach(i=>{r.appendChild(i)}),e=[n]}return e}createAttachmentNodes(){const e=this.attachment.isPreviewable()?fs:Sa;return this.createChildView(e,this.piece.attachment,{piece:this.piece}).getNodes()}createStringNodes(){var e;if((e=this.textConfig)!==null&&e!==void 0&&e.plaintext)return[document.createTextNode(this.string)];{const n=[],r=this.string.split(`
`);for(let i=0;i<r.length;i++){const l=r[i];if(i>0){const a=ge("br");n.push(a)}if(l.length){const a=document.createTextNode(this.preserveSpaces(l));n.push(a)}}return n}}createElement(){let e,n,r;const i={};for(n in this.attributes){r=this.attributes[n];const a=ai(n);if(a){if(a.tagName){var l;const o=ge(a.tagName);l?(l.appendChild(o),l=o):e=l=o}if(a.styleProperty&&(i[a.styleProperty]=r),a.style)for(n in a.style)r=a.style[n],i[n]=r}}if(Object.keys(i).length)for(n in e||(e=ge("span")),i)r=i[n],e.style[n]=r;return e}createContainerElement(){for(const e in this.attributes){const n=this.attributes[e],r=ai(e);if(r&&r.groupTagName){const i={};return i[e]=n,ge(r.groupTagName,i)}}}preserveSpaces(e){return this.context.isLast&&(e=e.replace(/\ $/,Nt)),e=e.replace(/(\S)\ {3}(\S)/g,"$1 ".concat(Nt," $2")).replace(/\ {2}/g,"".concat(Nt," ")).replace(/\ {2}/g," ".concat(Nt)),(this.context.isFirst||this.context.followsWhitespace)&&(e=e.replace(/^\ /,Nt)),e}}class gs extends un{constructor(){super(...arguments),this.text=this.object,this.textConfig=this.options.textConfig}createNodes(){const e=[],n=xa.groupObjects(this.getPieces()),r=n.length-1;for(let l=0;l<n.length;l++){const a=n[l],o={};l===0&&(o.isFirst=!0),l===r&&(o.isLast=!0),bm(i)&&(o.followsWhitespace=!0);const s=this.findOrCreateCachedChildView(vs,a,{textConfig:this.textConfig,context:o});e.push(...Array.from(s.getNodes()||[]));var i=a}return e}getPieces(){return Array.from(this.text.getPieces()).filter(e=>!e.hasAttribute("blockBreak"))}}const bm=t=>/\s$/.test(t==null?void 0:t.toString()),{css:ll}=Xn;class ms extends un{constructor(){super(...arguments),this.block=this.object,this.attributes=this.block.getAttributes()}createNodes(){const e=[document.createComment("block")];if(this.block.isEmpty())e.push(ge("br"));else{var n;const r=(n=Ne(this.block.getLastAttribute()))===null||n===void 0?void 0:n.text,i=this.findOrCreateCachedChildView(gs,this.block.text,{textConfig:r});e.push(...Array.from(i.getNodes()||[])),this.shouldAddExtraNewlineElement()&&e.push(ge("br"))}if(this.attributes.length)return e;{let r;const{tagName:i}=et.default;this.block.isRTL()&&(r={dir:"rtl"});const l=ge({tagName:i,attributes:r});return e.forEach(a=>l.appendChild(a)),[l]}}createContainerElement(e){const n={};let r;const i=this.attributes[e],{tagName:l,htmlAttributes:a=[]}=Ne(i);if(e===0&&this.block.isRTL()&&Object.assign(n,{dir:"rtl"}),i==="attachmentGallery"){const o=this.block.getBlockBreakPosition();r="".concat(ll.attachmentGallery," ").concat(ll.attachmentGallery,"--").concat(o)}return Object.entries(this.block.htmlAttributes).forEach(o=>{let[s,u]=o;a.includes(s)&&(n[s]=u)}),ge({tagName:l,className:r,attributes:n})}shouldAddExtraNewlineElement(){return/\n\n$/.test(this.block.toString())}}class xr extends un{static render(e){const n=ge("div"),r=new this(e,{element:n});return r.render(),r.sync(),n}constructor(){super(...arguments),this.element=this.options.element,this.elementStore=new gm,this.setDocument(this.object)}setDocument(e){e.isEqualTo(this.document)||(this.document=this.object=e)}render(){if(this.childViews=[],this.shadowElement=ge("div"),!this.document.isEmpty()){const e=xa.groupObjects(this.document.getBlocks(),{asTree:!0});Array.from(e).forEach(n=>{const r=this.findOrCreateCachedChildView(ms,n);Array.from(r.getNodes()).map(i=>this.shadowElement.appendChild(i))})}}isSynced(){return wm(this.shadowElement,this.element)}sync(){const e=this.createDocumentFragmentForSync();for(;this.element.lastChild;)this.element.removeChild(this.element.lastChild);return this.element.appendChild(e),this.didSync()}didSync(){return this.elementStore.reset(ol(this.element)),Aa(()=>this.garbageCollectCachedViews())}createDocumentFragmentForSync(){const e=document.createDocumentFragment();return Array.from(this.shadowElement.childNodes).forEach(n=>{e.appendChild(n.cloneNode(!0))}),Array.from(ol(e)).forEach(n=>{const r=this.elementStore.remove(n);r&&n.parentNode.replaceChild(r,n)}),e}}const ol=t=>t.querySelectorAll("[data-trix-store-key]"),wm=(t,e)=>sl(t.innerHTML)===sl(e.innerHTML),sl=t=>t.replace(/&nbsp;/g," ");function it(t,e,n){return(e=ym(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ym(t){var e=function(n,r){if(typeof n!="object"||n===null)return n;var i=n[Symbol.toPrimitive];if(i!==void 0){var l=i.call(n,r||"default");if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(n)}(t,"string");return typeof e=="symbol"?e:String(e)}class dn extends sn{static registerType(e,n){n.type=e,this.types[e]=n}static fromJSON(e){const n=this.types[e.type];if(n)return n.fromJSON(e)}constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(...arguments),this.attributes=rt.box(n)}copyWithAttributes(e){return new this.constructor(this.getValue(),e)}copyWithAdditionalAttributes(e){return this.copyWithAttributes(this.attributes.merge(e))}copyWithoutAttribute(e){return this.copyWithAttributes(this.attributes.remove(e))}copy(){return this.copyWithAttributes(this.attributes)}getAttribute(e){return this.attributes.get(e)}getAttributesHash(){return this.attributes}getAttributes(){return this.attributes.toObject()}hasAttribute(e){return this.attributes.has(e)}hasSameStringValueAsPiece(e){return e&&this.toString()===e.toString()}hasSameAttributesAsPiece(e){return e&&(this.attributes===e.attributes||this.attributes.isEqualTo(e.attributes))}isBlockBreak(){return!1}isEqualTo(e){return super.isEqualTo(...arguments)||this.hasSameConstructorAs(e)&&this.hasSameStringValueAsPiece(e)&&this.hasSameAttributesAsPiece(e)}isEmpty(){return this.length===0}isSerializable(){return!0}toJSON(){return{type:this.constructor.type,attributes:this.getAttributes()}}contentsForInspection(){return{type:this.constructor.type,attributes:this.attributes.inspect()}}canBeGrouped(){return this.hasAttribute("href")}canBeGroupedWith(e){return this.getAttribute("href")===e.getAttribute("href")}getLength(){return this.length}canBeConsolidatedWith(e){return!1}}it(dn,"types",{});class hs extends vr{constructor(e){super(...arguments),this.url=e}perform(e){const n=new Image;n.onload=()=>(n.width=this.width=n.naturalWidth,n.height=this.height=n.naturalHeight,e(!0,n)),n.onerror=()=>e(!1),n.src=this.url}}class xn extends sn{static attachmentForFile(e){const n=new this(this.attributesForFile(e));return n.setFile(e),n}static attributesForFile(e){return new rt({filename:e.name,filesize:e.size,contentType:e.type})}static fromJSON(e){return new this(e)}constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};super(e),this.releaseFile=this.releaseFile.bind(this),this.attributes=rt.box(e),this.didChangeAttributes()}getAttribute(e){return this.attributes.get(e)}hasAttribute(e){return this.attributes.has(e)}getAttributes(){return this.attributes.toObject()}setAttributes(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n=this.attributes.merge(e);var r,i,l,a;if(!this.attributes.isEqualTo(n))return this.attributes=n,this.didChangeAttributes(),(r=this.previewDelegate)===null||r===void 0||(i=r.attachmentDidChangeAttributes)===null||i===void 0||i.call(r,this),(l=this.delegate)===null||l===void 0||(a=l.attachmentDidChangeAttributes)===null||a===void 0?void 0:a.call(l,this)}didChangeAttributes(){if(this.isPreviewable())return this.preloadURL()}isPending(){return this.file!=null&&!(this.getURL()||this.getHref())}isPreviewable(){return this.attributes.has("previewable")?this.attributes.get("previewable"):xn.previewablePattern.test(this.getContentType())}getType(){return this.hasContent()?"content":this.isPreviewable()?"preview":"file"}getURL(){return this.attributes.get("url")}getHref(){return this.attributes.get("href")}getFilename(){return this.attributes.get("filename")||""}getFilesize(){return this.attributes.get("filesize")}getFormattedFilesize(){const e=this.attributes.get("filesize");return typeof e=="number"?ts.formatter(e):""}getExtension(){var e;return(e=this.getFilename().match(/\.(\w+)$/))===null||e===void 0?void 0:e[1].toLowerCase()}getContentType(){return this.attributes.get("contentType")}hasContent(){return this.attributes.has("content")}getContent(){return this.attributes.get("content")}getWidth(){return this.attributes.get("width")}getHeight(){return this.attributes.get("height")}getFile(){return this.file}setFile(e){if(this.file=e,this.isPreviewable())return this.preloadFile()}releaseFile(){this.releasePreloadedFile(),this.file=null}getUploadProgress(){return this.uploadProgress!=null?this.uploadProgress:0}setUploadProgress(e){var n,r;if(this.uploadProgress!==e)return this.uploadProgress=e,(n=this.uploadProgressDelegate)===null||n===void 0||(r=n.attachmentDidChangeUploadProgress)===null||r===void 0?void 0:r.call(n,this)}toJSON(){return this.getAttributes()}getCacheKey(){return[super.getCacheKey(...arguments),this.attributes.getCacheKey(),this.getPreviewURL()].join("/")}getPreviewURL(){return this.previewURL||this.preloadingURL}setPreviewURL(e){var n,r,i,l;if(e!==this.getPreviewURL())return this.previewURL=e,(n=this.previewDelegate)===null||n===void 0||(r=n.attachmentDidChangeAttributes)===null||r===void 0||r.call(n,this),(i=this.delegate)===null||i===void 0||(l=i.attachmentDidChangePreviewURL)===null||l===void 0?void 0:l.call(i,this)}preloadURL(){return this.preload(this.getURL(),this.releaseFile)}preloadFile(){if(this.file)return this.fileObjectURL=URL.createObjectURL(this.file),this.preload(this.fileObjectURL)}releasePreloadedFile(){this.fileObjectURL&&(URL.revokeObjectURL(this.fileObjectURL),this.fileObjectURL=null)}preload(e,n){if(e&&e!==this.getPreviewURL())return this.preloadingURL=e,new hs(e).then(r=>{let{width:i,height:l}=r;return this.getWidth()&&this.getHeight()||this.setAttributes({width:i,height:l}),this.preloadingURL=null,this.setPreviewURL(e),n==null?void 0:n()}).catch(()=>(this.preloadingURL=null,n==null?void 0:n()))}}it(xn,"previewablePattern",/^image(\/(gif|png|webp|jpe?g)|$)/);class En extends dn{static fromJSON(e){return new this(xn.fromJSON(e.attachment),e.attributes)}constructor(e){super(...arguments),this.attachment=e,this.length=1,this.ensureAttachmentExclusivelyHasAttribute("href"),this.attachment.hasContent()||this.removeProhibitedAttributes()}ensureAttachmentExclusivelyHasAttribute(e){this.hasAttribute(e)&&(this.attachment.hasAttribute(e)||this.attachment.setAttributes(this.attributes.slice([e])),this.attributes=this.attributes.remove(e))}removeProhibitedAttributes(){const e=this.attributes.slice(En.permittedAttributes);e.isEqualTo(this.attributes)||(this.attributes=e)}getValue(){return this.attachment}isSerializable(){return!this.attachment.isPending()}getCaption(){return this.attributes.get("caption")||""}isEqualTo(e){var n;return super.isEqualTo(e)&&this.attachment.id===(e==null||(n=e.attachment)===null||n===void 0?void 0:n.id)}toString(){return"￼"}toJSON(){const e=super.toJSON(...arguments);return e.attachment=this.attachment,e}getCacheKey(){return[super.getCacheKey(...arguments),this.attachment.getCacheKey()].join("/")}toConsole(){return JSON.stringify(this.toString())}}it(En,"permittedAttributes",["caption","presentation"]),dn.registerType("attachment",En);class Ta extends dn{static fromJSON(e){return new this(e.string,e.attributes)}constructor(e){super(...arguments),this.string=(n=>n.replace(/\r\n?/g,`
`))(e),this.length=this.string.length}getValue(){return this.string}toString(){return this.string.toString()}isBlockBreak(){return this.toString()===`
`&&this.getAttribute("blockBreak")===!0}toJSON(){const e=super.toJSON(...arguments);return e.string=this.string,e}canBeConsolidatedWith(e){return e&&this.hasSameConstructorAs(e)&&this.hasSameAttributesAsPiece(e)}consolidateWith(e){return new this.constructor(this.toString()+e.toString(),this.attributes)}splitAtOffset(e){let n,r;return e===0?(n=null,r=this):e===this.length?(n=this,r=null):(n=new this.constructor(this.string.slice(0,e),this.attributes),r=new this.constructor(this.string.slice(e),this.attributes)),[n,r]}toConsole(){let{string:e}=this;return e.length>15&&(e=e.slice(0,14)+"…"),JSON.stringify(e.toString())}}dn.registerType("string",Ta);class gr extends sn{static box(e){return e instanceof this?e:new this(e)}constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];super(...arguments),this.objects=e.slice(0),this.length=this.objects.length}indexOf(e){return this.objects.indexOf(e)}splice(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return new this.constructor(Ca(this.objects,...n))}eachObject(e){return this.objects.map((n,r)=>e(n,r))}insertObjectAtIndex(e,n){return this.splice(n,0,e)}insertSplittableListAtIndex(e,n){return this.splice(n,0,...e.objects)}insertSplittableListAtPosition(e,n){const[r,i]=this.splitObjectAtPosition(n);return new this.constructor(r).insertSplittableListAtIndex(e,i)}editObjectAtIndex(e,n){return this.replaceObjectAtIndex(n(this.objects[e]),e)}replaceObjectAtIndex(e,n){return this.splice(n,1,e)}removeObjectAtIndex(e){return this.splice(e,1)}getObjectAtIndex(e){return this.objects[e]}getSplittableListInRange(e){const[n,r,i]=this.splitObjectsAtRange(e);return new this.constructor(n.slice(r,i+1))}selectSplittableList(e){const n=this.objects.filter(r=>e(r));return new this.constructor(n)}removeObjectsInRange(e){const[n,r,i]=this.splitObjectsAtRange(e);return new this.constructor(n).splice(r,i-r+1)}transformObjectsInRange(e,n){const[r,i,l]=this.splitObjectsAtRange(e),a=r.map((o,s)=>i<=s&&s<=l?n(o):o);return new this.constructor(a)}splitObjectsAtRange(e){let n,[r,i,l]=this.splitObjectAtPosition(Cm(e));return[r,n]=new this.constructor(r).splitObjectAtPosition(Am(e)+l),[r,i,n-1]}getObjectAtPosition(e){const{index:n}=this.findIndexAndOffsetAtPosition(e);return this.objects[n]}splitObjectAtPosition(e){let n,r;const{index:i,offset:l}=this.findIndexAndOffsetAtPosition(e),a=this.objects.slice(0);if(i!=null)if(l===0)n=i,r=0;else{const o=this.getObjectAtIndex(i),[s,u]=o.splitAtOffset(l);a.splice(i,1,s,u),n=i+1,r=s.getLength()-l}else n=a.length,r=0;return[a,n,r]}consolidate(){const e=[];let n=this.objects[0];return this.objects.slice(1).forEach(r=>{var i,l;(i=(l=n).canBeConsolidatedWith)!==null&&i!==void 0&&i.call(l,r)?n=n.consolidateWith(r):(e.push(n),n=r)}),n&&e.push(n),new this.constructor(e)}consolidateFromIndexToIndex(e,n){const r=this.objects.slice(0).slice(e,n+1),i=new this.constructor(r).consolidate().toArray();return this.splice(e,r.length,...i)}findIndexAndOffsetAtPosition(e){let n,r=0;for(n=0;n<this.objects.length;n++){const i=r+this.objects[n].getLength();if(r<=e&&e<i)return{index:n,offset:e-r};r=i}return{index:null,offset:null}}findPositionAtIndexAndOffset(e,n){let r=0;for(let i=0;i<this.objects.length;i++){const l=this.objects[i];if(i<e)r+=l.getLength();else if(i===e){r+=n;break}}return r}getEndPosition(){return this.endPosition==null&&(this.endPosition=0,this.objects.forEach(e=>this.endPosition+=e.getLength())),this.endPosition}toString(){return this.objects.join("")}toArray(){return this.objects.slice(0)}toJSON(){return this.toArray()}isEqualTo(e){return super.isEqualTo(...arguments)||km(this.objects,e==null?void 0:e.objects)}contentsForInspection(){return{objects:"[".concat(this.objects.map(e=>e.inspect()).join(", "),"]")}}}const km=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];if(t.length!==e.length)return!1;let n=!0;for(let r=0;r<t.length;r++){const i=t[r];n&&!i.isEqualTo(e[r])&&(n=!1)}return n},Cm=t=>t[0],Am=t=>t[1];class dt extends sn{static textForAttachmentWithAttributes(e,n){return new this([new En(e,n)])}static textForStringWithAttributes(e,n){return new this([new Ta(e,n)])}static fromJSON(e){return new this(Array.from(e).map(n=>dn.fromJSON(n)))}constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];super(...arguments);const n=e.filter(r=>!r.isEmpty());this.pieceList=new gr(n)}copy(){return this.copyWithPieceList(this.pieceList)}copyWithPieceList(e){return new this.constructor(e.consolidate().toArray())}copyUsingObjectMap(e){const n=this.getPieces().map(r=>e.find(r)||r);return new this.constructor(n)}appendText(e){return this.insertTextAtPosition(e,this.getLength())}insertTextAtPosition(e,n){return this.copyWithPieceList(this.pieceList.insertSplittableListAtPosition(e.pieceList,n))}removeTextAtRange(e){return this.copyWithPieceList(this.pieceList.removeObjectsInRange(e))}replaceTextAtRange(e,n){return this.removeTextAtRange(n).insertTextAtPosition(e,n[0])}moveTextFromRangeToPosition(e,n){if(e[0]<=n&&n<=e[1])return;const r=this.getTextAtRange(e),i=r.getLength();return e[0]<n&&(n-=i),this.removeTextAtRange(e).insertTextAtPosition(r,n)}addAttributeAtRange(e,n,r){const i={};return i[e]=n,this.addAttributesAtRange(i,r)}addAttributesAtRange(e,n){return this.copyWithPieceList(this.pieceList.transformObjectsInRange(n,r=>r.copyWithAdditionalAttributes(e)))}removeAttributeAtRange(e,n){return this.copyWithPieceList(this.pieceList.transformObjectsInRange(n,r=>r.copyWithoutAttribute(e)))}setAttributesAtRange(e,n){return this.copyWithPieceList(this.pieceList.transformObjectsInRange(n,r=>r.copyWithAttributes(e)))}getAttributesAtPosition(e){var n;return((n=this.pieceList.getObjectAtPosition(e))===null||n===void 0?void 0:n.getAttributes())||{}}getCommonAttributes(){const e=Array.from(this.pieceList.toArray()).map(n=>n.getAttributes());return rt.fromCommonAttributesOfObjects(e).toObject()}getCommonAttributesAtRange(e){return this.getTextAtRange(e).getCommonAttributes()||{}}getExpandedRangeForAttributeAtOffset(e,n){let r,i=r=n;const l=this.getLength();for(;i>0&&this.getCommonAttributesAtRange([i-1,r])[e];)i--;for(;r<l&&this.getCommonAttributesAtRange([n,r+1])[e];)r++;return[i,r]}getTextAtRange(e){return this.copyWithPieceList(this.pieceList.getSplittableListInRange(e))}getStringAtRange(e){return this.pieceList.getSplittableListInRange(e).toString()}getStringAtPosition(e){return this.getStringAtRange([e,e+1])}startsWithString(e){return this.getStringAtRange([0,e.length])===e}endsWithString(e){const n=this.getLength();return this.getStringAtRange([n-e.length,n])===e}getAttachmentPieces(){return this.pieceList.toArray().filter(e=>!!e.attachment)}getAttachments(){return this.getAttachmentPieces().map(e=>e.attachment)}getAttachmentAndPositionById(e){let n=0;for(const i of this.pieceList.toArray()){var r;if(((r=i.attachment)===null||r===void 0?void 0:r.id)===e)return{attachment:i.attachment,position:n};n+=i.length}return{attachment:null,position:null}}getAttachmentById(e){const{attachment:n}=this.getAttachmentAndPositionById(e);return n}getRangeOfAttachment(e){const n=this.getAttachmentAndPositionById(e.id),r=n.position;if(e=n.attachment)return[r,r+1]}updateAttributesForAttachment(e,n){const r=this.getRangeOfAttachment(n);return r?this.addAttributesAtRange(e,r):this}getLength(){return this.pieceList.getEndPosition()}isEmpty(){return this.getLength()===0}isEqualTo(e){var n;return super.isEqualTo(e)||(e==null||(n=e.pieceList)===null||n===void 0?void 0:n.isEqualTo(this.pieceList))}isBlockBreak(){return this.getLength()===1&&this.pieceList.getObjectAtIndex(0).isBlockBreak()}eachPiece(e){return this.pieceList.eachObject(e)}getPieces(){return this.pieceList.toArray()}getPieceAtPosition(e){return this.pieceList.getObjectAtPosition(e)}contentsForInspection(){return{pieceList:this.pieceList.inspect()}}toSerializableText(){const e=this.pieceList.selectSplittableList(n=>n.isSerializable());return this.copyWithPieceList(e)}toString(){return this.pieceList.toString()}toJSON(){return this.pieceList.toJSON()}toConsole(){return JSON.stringify(this.pieceList.toArray().map(e=>JSON.parse(e.toConsole())))}getDirection(){return am(this.toString())}isRTL(){return this.getDirection()==="rtl"}}class yt extends sn{static fromJSON(e){return new this(dt.fromJSON(e.text),e.attributes,e.htmlAttributes)}constructor(e,n,r){super(...arguments),this.text=Em(e||new dt),this.attributes=n||[],this.htmlAttributes=r||{}}isEmpty(){return this.text.isBlockBreak()}isEqualTo(e){return!!super.isEqualTo(e)||this.text.isEqualTo(e==null?void 0:e.text)&&ln(this.attributes,e==null?void 0:e.attributes)&&Ln(this.htmlAttributes,e==null?void 0:e.htmlAttributes)}copyWithText(e){return new yt(e,this.attributes,this.htmlAttributes)}copyWithoutText(){return this.copyWithText(null)}copyWithAttributes(e){return new yt(this.text,e,this.htmlAttributes)}copyWithoutAttributes(){return this.copyWithAttributes(null)}copyUsingObjectMap(e){const n=e.find(this.text);return n?this.copyWithText(n):this.copyWithText(this.text.copyUsingObjectMap(e))}addAttribute(e){const n=this.attributes.concat(ul(e));return this.copyWithAttributes(n)}addHTMLAttribute(e,n){const r=Object.assign({},this.htmlAttributes,{[e]:n});return new yt(this.text,this.attributes,r)}removeAttribute(e){const{listAttribute:n}=Ne(e),r=cl(cl(this.attributes,e),n);return this.copyWithAttributes(r)}removeLastAttribute(){return this.removeAttribute(this.getLastAttribute())}getLastAttribute(){return dl(this.attributes)}getAttributes(){return this.attributes.slice(0)}getAttributeLevel(){return this.attributes.length}getAttributeAtLevel(e){return this.attributes[e-1]}hasAttribute(e){return this.attributes.includes(e)}hasAttributes(){return this.getAttributeLevel()>0}getLastNestableAttribute(){return dl(this.getNestableAttributes())}getNestableAttributes(){return this.attributes.filter(e=>Ne(e).nestable)}getNestingLevel(){return this.getNestableAttributes().length}decreaseNestingLevel(){const e=this.getLastNestableAttribute();return e?this.removeAttribute(e):this}increaseNestingLevel(){const e=this.getLastNestableAttribute();if(e){const n=this.attributes.lastIndexOf(e),r=Ca(this.attributes,n+1,0,...ul(e));return this.copyWithAttributes(r)}return this}getListItemAttributes(){return this.attributes.filter(e=>Ne(e).listAttribute)}isListItem(){var e;return(e=Ne(this.getLastAttribute()))===null||e===void 0?void 0:e.listAttribute}isTerminalBlock(){var e;return(e=Ne(this.getLastAttribute()))===null||e===void 0?void 0:e.terminal}breaksOnReturn(){var e;return(e=Ne(this.getLastAttribute()))===null||e===void 0?void 0:e.breakOnReturn}findLineBreakInDirectionFromPosition(e,n){const r=this.toString();let i;switch(e){case"forward":i=r.indexOf(`
`,n);break;case"backward":i=r.slice(0,n).lastIndexOf(`
`)}if(i!==-1)return i}contentsForInspection(){return{text:this.text.inspect(),attributes:this.attributes}}toString(){return this.text.toString()}toJSON(){return{text:this.text,attributes:this.attributes,htmlAttributes:this.htmlAttributes}}getDirection(){return this.text.getDirection()}isRTL(){return this.text.isRTL()}getLength(){return this.text.getLength()}canBeConsolidatedWith(e){return!this.hasAttributes()&&!e.hasAttributes()&&this.getDirection()===e.getDirection()}consolidateWith(e){const n=dt.textForStringWithAttributes(`
`),r=this.getTextWithoutBlockBreak().appendText(n);return this.copyWithText(r.appendText(e.text))}splitAtOffset(e){let n,r;return e===0?(n=null,r=this):e===this.getLength()?(n=this,r=null):(n=this.copyWithText(this.text.getTextAtRange([0,e])),r=this.copyWithText(this.text.getTextAtRange([e,this.getLength()]))),[n,r]}getBlockBreakPosition(){return this.text.getLength()-1}getTextWithoutBlockBreak(){return bs(this.text)?this.text.getTextAtRange([0,this.getBlockBreakPosition()]):this.text.copy()}canBeGrouped(e){return this.attributes[e]}canBeGroupedWith(e,n){const r=e.getAttributes(),i=r[n],l=this.attributes[n];return l===i&&!(Ne(l).group===!1&&!(()=>{if(!rr){rr=[];for(const a in et){const{listAttribute:o}=et[a];o!=null&&rr.push(o)}}return rr})().includes(r[n+1]))&&(this.getDirection()===e.getDirection()||e.isEmpty())}}const Em=function(t){return t=Lm(t),t=Sm(t)},Lm=function(t){let e=!1;const n=t.getPieces();let r=n.slice(0,n.length-1);const i=n[n.length-1];return i?(r=r.map(l=>l.isBlockBreak()?(e=!0,Tm(l)):l),e?new dt([...r,i]):t):t},xm=dt.textForStringWithAttributes(`
`,{blockBreak:!0}),Sm=function(t){return bs(t)?t:t.appendText(xm)},bs=function(t){const e=t.getLength();return e===0?!1:t.getTextAtRange([e-1,e]).isBlockBreak()},Tm=t=>t.copyWithoutAttribute("blockBreak"),ul=function(t){const{listAttribute:e}=Ne(t);return e?[e,t]:[t]},dl=t=>t.slice(-1)[0],cl=function(t,e){const n=t.lastIndexOf(e);return n===-1?t:Ca(t,n,1)};class ot extends sn{static fromJSON(e){return new this(Array.from(e).map(n=>yt.fromJSON(n)))}static fromString(e,n){const r=dt.textForStringWithAttributes(e,n);return new this([new yt(r)])}constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];super(...arguments),e.length===0&&(e=[new yt]),this.blockList=gr.box(e)}isEmpty(){const e=this.getBlockAtIndex(0);return this.blockList.length===1&&e.isEmpty()&&!e.hasAttributes()}copy(){const e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).consolidateBlocks?this.blockList.consolidate().toArray():this.blockList.toArray();return new this.constructor(e)}copyUsingObjectsFromDocument(e){const n=new vm(e.getObjects());return this.copyUsingObjectMap(n)}copyUsingObjectMap(e){const n=this.getBlocks().map(r=>e.find(r)||r.copyUsingObjectMap(e));return new this.constructor(n)}copyWithBaseBlockAttributes(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];const n=this.getBlocks().map(r=>{const i=e.concat(r.getAttributes());return r.copyWithAttributes(i)});return new this.constructor(n)}replaceBlock(e,n){const r=this.blockList.indexOf(e);return r===-1?this:new this.constructor(this.blockList.replaceObjectAtIndex(n,r))}insertDocumentAtRange(e,n){const{blockList:r}=e;n=xe(n);let[i]=n;const{index:l,offset:a}=this.locationFromPosition(i);let o=this;const s=this.getBlockAtPosition(i);return xt(n)&&s.isEmpty()&&!s.hasAttributes()?o=new this.constructor(o.blockList.removeObjectAtIndex(l)):s.getBlockBreakPosition()===a&&i++,o=o.removeTextAtRange(n),new this.constructor(o.blockList.insertSplittableListAtPosition(r,i))}mergeDocumentAtRange(e,n){let r,i;n=xe(n);const[l]=n,a=this.locationFromPosition(l),o=this.getBlockAtIndex(a.index).getAttributes(),s=e.getBaseBlockAttributes(),u=o.slice(-s.length);if(ln(s,u)){const k=o.slice(0,-s.length);r=e.copyWithBaseBlockAttributes(k)}else r=e.copy({consolidateBlocks:!0}).copyWithBaseBlockAttributes(o);const c=r.getBlockCount(),A=r.getBlockAtIndex(0);if(ln(o,A.getAttributes())){const k=A.getTextWithoutBlockBreak();if(i=this.insertTextAtRange(k,n),c>1){r=new this.constructor(r.getBlocks().slice(1));const x=l+k.getLength();i=i.insertDocumentAtRange(r,x)}}else i=this.insertDocumentAtRange(r,n);return i}insertTextAtRange(e,n){n=xe(n);const[r]=n,{index:i,offset:l}=this.locationFromPosition(r),a=this.removeTextAtRange(n);return new this.constructor(a.blockList.editObjectAtIndex(i,o=>o.copyWithText(o.text.insertTextAtPosition(e,l))))}removeTextAtRange(e){let n;e=xe(e);const[r,i]=e;if(xt(e))return this;const[l,a]=Array.from(this.locationRangeFromRange(e)),o=l.index,s=l.offset,u=this.getBlockAtIndex(o),c=a.index,A=a.offset,k=this.getBlockAtIndex(c);if(i-r==1&&u.getBlockBreakPosition()===s&&k.getBlockBreakPosition()!==A&&k.text.getStringAtPosition(A)===`
`)n=this.blockList.editObjectAtIndex(c,x=>x.copyWithText(x.text.removeTextAtRange([A,A+1])));else{let x;const y=u.text.getTextAtRange([0,s]),C=k.text.getTextAtRange([A,k.getLength()]),S=y.appendText(C);x=o!==c&&s===0&&u.getAttributeLevel()>=k.getAttributeLevel()?k.copyWithText(S):u.copyWithText(S);const B=c+1-o;n=this.blockList.splice(o,B,x)}return new this.constructor(n)}moveTextFromRangeToPosition(e,n){let r;e=xe(e);const[i,l]=e;if(i<=n&&n<=l)return this;let a=this.getDocumentAtRange(e),o=this.removeTextAtRange(e);const s=i<n;s&&(n-=a.getLength());const[u,...c]=a.getBlocks();return c.length===0?(r=u.getTextWithoutBlockBreak(),s&&(n+=1)):r=u.text,o=o.insertTextAtRange(r,n),c.length===0?o:(a=new this.constructor(c),n+=r.getLength(),o.insertDocumentAtRange(a,n))}addAttributeAtRange(e,n,r){let{blockList:i}=this;return this.eachBlockAtRange(r,(l,a,o)=>i=i.editObjectAtIndex(o,function(){return Ne(e)?l.addAttribute(e,n):a[0]===a[1]?l:l.copyWithText(l.text.addAttributeAtRange(e,n,a))})),new this.constructor(i)}addAttribute(e,n){let{blockList:r}=this;return this.eachBlock((i,l)=>r=r.editObjectAtIndex(l,()=>i.addAttribute(e,n))),new this.constructor(r)}removeAttributeAtRange(e,n){let{blockList:r}=this;return this.eachBlockAtRange(n,function(i,l,a){Ne(e)?r=r.editObjectAtIndex(a,()=>i.removeAttribute(e)):l[0]!==l[1]&&(r=r.editObjectAtIndex(a,()=>i.copyWithText(i.text.removeAttributeAtRange(e,l))))}),new this.constructor(r)}updateAttributesForAttachment(e,n){const r=this.getRangeOfAttachment(n),[i]=Array.from(r),{index:l}=this.locationFromPosition(i),a=this.getTextAtIndex(l);return new this.constructor(this.blockList.editObjectAtIndex(l,o=>o.copyWithText(a.updateAttributesForAttachment(e,n))))}removeAttributeForAttachment(e,n){const r=this.getRangeOfAttachment(n);return this.removeAttributeAtRange(e,r)}setHTMLAttributeAtPosition(e,n,r){const i=this.getBlockAtPosition(e),l=i.addHTMLAttribute(n,r);return this.replaceBlock(i,l)}insertBlockBreakAtRange(e){let n;e=xe(e);const[r]=e,{offset:i}=this.locationFromPosition(r),l=this.removeTextAtRange(e);return i===0&&(n=[new yt]),new this.constructor(l.blockList.insertSplittableListAtPosition(new gr(n),r))}applyBlockAttributeAtRange(e,n,r){const i=this.expandRangeToLineBreaksAndSplitBlocks(r);let l=i.document;r=i.range;const a=Ne(e);if(a.listAttribute){l=l.removeLastListAttributeAtRange(r,{exceptAttributeName:e});const o=l.convertLineBreaksToBlockBreaksInRange(r);l=o.document,r=o.range}else l=a.exclusive?l.removeBlockAttributesAtRange(r):a.terminal?l.removeLastTerminalAttributeAtRange(r):l.consolidateBlocksAtRange(r);return l.addAttributeAtRange(e,n,r)}removeLastListAttributeAtRange(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{blockList:r}=this;return this.eachBlockAtRange(e,function(i,l,a){const o=i.getLastAttribute();o&&Ne(o).listAttribute&&o!==n.exceptAttributeName&&(r=r.editObjectAtIndex(a,()=>i.removeAttribute(o)))}),new this.constructor(r)}removeLastTerminalAttributeAtRange(e){let{blockList:n}=this;return this.eachBlockAtRange(e,function(r,i,l){const a=r.getLastAttribute();a&&Ne(a).terminal&&(n=n.editObjectAtIndex(l,()=>r.removeAttribute(a)))}),new this.constructor(n)}removeBlockAttributesAtRange(e){let{blockList:n}=this;return this.eachBlockAtRange(e,function(r,i,l){r.hasAttributes()&&(n=n.editObjectAtIndex(l,()=>r.copyWithoutAttributes()))}),new this.constructor(n)}expandRangeToLineBreaksAndSplitBlocks(e){let n;e=xe(e);let[r,i]=e;const l=this.locationFromPosition(r),a=this.locationFromPosition(i);let o=this;const s=o.getBlockAtIndex(l.index);if(l.offset=s.findLineBreakInDirectionFromPosition("backward",l.offset),l.offset!=null&&(n=o.positionFromLocation(l),o=o.insertBlockBreakAtRange([n,n+1]),a.index+=1,a.offset-=o.getBlockAtIndex(l.index).getLength(),l.index+=1),l.offset=0,a.offset===0&&a.index>l.index)a.index-=1,a.offset=o.getBlockAtIndex(a.index).getBlockBreakPosition();else{const u=o.getBlockAtIndex(a.index);u.text.getStringAtRange([a.offset-1,a.offset])===`
`?a.offset-=1:a.offset=u.findLineBreakInDirectionFromPosition("forward",a.offset),a.offset!==u.getBlockBreakPosition()&&(n=o.positionFromLocation(a),o=o.insertBlockBreakAtRange([n,n+1]))}return r=o.positionFromLocation(l),i=o.positionFromLocation(a),{document:o,range:e=xe([r,i])}}convertLineBreaksToBlockBreaksInRange(e){e=xe(e);let[n]=e;const r=this.getStringAtRange(e).slice(0,-1);let i=this;return r.replace(/.*?\n/g,function(l){n+=l.length,i=i.insertBlockBreakAtRange([n-1,n])}),{document:i,range:e}}consolidateBlocksAtRange(e){e=xe(e);const[n,r]=e,i=this.locationFromPosition(n).index,l=this.locationFromPosition(r).index;return new this.constructor(this.blockList.consolidateFromIndexToIndex(i,l))}getDocumentAtRange(e){e=xe(e);const n=this.blockList.getSplittableListInRange(e).toArray();return new this.constructor(n)}getStringAtRange(e){let n;const r=e=xe(e);return r[r.length-1]!==this.getLength()&&(n=-1),this.getDocumentAtRange(e).toString().slice(0,n)}getBlockAtIndex(e){return this.blockList.getObjectAtIndex(e)}getBlockAtPosition(e){const{index:n}=this.locationFromPosition(e);return this.getBlockAtIndex(n)}getTextAtIndex(e){var n;return(n=this.getBlockAtIndex(e))===null||n===void 0?void 0:n.text}getTextAtPosition(e){const{index:n}=this.locationFromPosition(e);return this.getTextAtIndex(n)}getPieceAtPosition(e){const{index:n,offset:r}=this.locationFromPosition(e);return this.getTextAtIndex(n).getPieceAtPosition(r)}getCharacterAtPosition(e){const{index:n,offset:r}=this.locationFromPosition(e);return this.getTextAtIndex(n).getStringAtRange([r,r+1])}getLength(){return this.blockList.getEndPosition()}getBlocks(){return this.blockList.toArray()}getBlockCount(){return this.blockList.length}getEditCount(){return this.editCount}eachBlock(e){return this.blockList.eachObject(e)}eachBlockAtRange(e,n){let r,i;e=xe(e);const[l,a]=e,o=this.locationFromPosition(l),s=this.locationFromPosition(a);if(o.index===s.index)return r=this.getBlockAtIndex(o.index),i=[o.offset,s.offset],n(r,i,o.index);for(let u=o.index;u<=s.index;u++)if(r=this.getBlockAtIndex(u),r){switch(u){case o.index:i=[o.offset,r.text.getLength()];break;case s.index:i=[0,s.offset];break;default:i=[0,r.text.getLength()]}n(r,i,u)}}getCommonAttributesAtRange(e){e=xe(e);const[n]=e;if(xt(e))return this.getCommonAttributesAtPosition(n);{const r=[],i=[];return this.eachBlockAtRange(e,function(l,a){if(a[0]!==a[1])return r.push(l.text.getCommonAttributesAtRange(a)),i.push(pl(l))}),rt.fromCommonAttributesOfObjects(r).merge(rt.fromCommonAttributesOfObjects(i)).toObject()}}getCommonAttributesAtPosition(e){let n,r;const{index:i,offset:l}=this.locationFromPosition(e),a=this.getBlockAtIndex(i);if(!a)return{};const o=pl(a),s=a.text.getAttributesAtPosition(l),u=a.text.getAttributesAtPosition(l-1),c=Object.keys(an).filter(A=>an[A].inheritable);for(n in u)r=u[n],(r===s[n]||c.includes(n))&&(o[n]=r);return o}getRangeOfCommonAttributeAtPosition(e,n){const{index:r,offset:i}=this.locationFromPosition(n),l=this.getTextAtIndex(r),[a,o]=Array.from(l.getExpandedRangeForAttributeAtOffset(e,i)),s=this.positionFromLocation({index:r,offset:a}),u=this.positionFromLocation({index:r,offset:o});return xe([s,u])}getBaseBlockAttributes(){let e=this.getBlockAtIndex(0).getAttributes();for(let n=1;n<this.getBlockCount();n++){const r=this.getBlockAtIndex(n).getAttributes(),i=Math.min(e.length,r.length);e=(()=>{const l=[];for(let a=0;a<i&&r[a]===e[a];a++)l.push(r[a]);return l})()}return e}getAttachmentById(e){for(const n of this.getAttachments())if(n.id===e)return n}getAttachmentPieces(){let e=[];return this.blockList.eachObject(n=>{let{text:r}=n;return e=e.concat(r.getAttachmentPieces())}),e}getAttachments(){return this.getAttachmentPieces().map(e=>e.attachment)}getRangeOfAttachment(e){let n=0;const r=this.blockList.toArray();for(let i=0;i<r.length;i++){const{text:l}=r[i],a=l.getRangeOfAttachment(e);if(a)return xe([n+a[0],n+a[1]]);n+=l.getLength()}}getLocationRangeOfAttachment(e){const n=this.getRangeOfAttachment(e);return this.locationRangeFromRange(n)}getAttachmentPieceForAttachment(e){for(const n of this.getAttachmentPieces())if(n.attachment===e)return n}findRangesForBlockAttribute(e){let n=0;const r=[];return this.getBlocks().forEach(i=>{const l=i.getLength();i.hasAttribute(e)&&r.push([n,n+l]),n+=l}),r}findRangesForTextAttribute(e){let{withValue:n}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=0,i=[];const l=[];return this.getPieces().forEach(a=>{const o=a.getLength();(function(s){return n?s.getAttribute(e)===n:s.hasAttribute(e)})(a)&&(i[1]===r?i[1]=r+o:l.push(i=[r,r+o])),r+=o}),l}locationFromPosition(e){const n=this.blockList.findIndexAndOffsetAtPosition(Math.max(0,e));if(n.index!=null)return n;{const r=this.getBlocks();return{index:r.length-1,offset:r[r.length-1].getLength()}}}positionFromLocation(e){return this.blockList.findPositionAtIndexAndOffset(e.index,e.offset)}locationRangeFromPosition(e){return xe(this.locationFromPosition(e))}locationRangeFromRange(e){if(!(e=xe(e)))return;const[n,r]=Array.from(e),i=this.locationFromPosition(n),l=this.locationFromPosition(r);return xe([i,l])}rangeFromLocationRange(e){let n;e=xe(e);const r=this.positionFromLocation(e[0]);return xt(e)||(n=this.positionFromLocation(e[1])),xe([r,n])}isEqualTo(e){return this.blockList.isEqualTo(e==null?void 0:e.blockList)}getTexts(){return this.getBlocks().map(e=>e.text)}getPieces(){const e=[];return Array.from(this.getTexts()).forEach(n=>{e.push(...Array.from(n.getPieces()||[]))}),e}getObjects(){return this.getBlocks().concat(this.getTexts()).concat(this.getPieces())}toSerializableDocument(){const e=[];return this.blockList.eachObject(n=>e.push(n.copyWithText(n.text.toSerializableText()))),new this.constructor(e)}toString(){return this.blockList.toString()}toJSON(){return this.blockList.toJSON()}toConsole(){return JSON.stringify(this.blockList.toArray().map(e=>JSON.parse(e.text.toConsole())))}}const pl=function(t){const e={},n=t.getLastAttribute();return n&&(e[n]=!0),e},Bm="style href src width height language class".split(" "),Im="javascript:".split(" "),Rm="script iframe form noscript".split(" ");class Ba extends Ue{static sanitize(e,n){const r=new this(e,n);return r.sanitize(),r}constructor(e){let{allowedAttributes:n,forbiddenProtocols:r,forbiddenElements:i}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(...arguments),this.allowedAttributes=n||Bm,this.forbiddenProtocols=r||Im,this.forbiddenElements=i||Rm,this.body=Dm(e)}sanitize(){return this.sanitizeElements(),this.normalizeListElementNesting()}getHTML(){return this.body.innerHTML}getBody(){return this.body}sanitizeElements(){const e=pr(this.body),n=[];for(;e.nextNode();){const r=e.currentNode;switch(r.nodeType){case Node.ELEMENT_NODE:this.elementIsRemovable(r)?n.push(r):this.sanitizeElement(r);break;case Node.COMMENT_NODE:n.push(r)}}return n.forEach(r=>Vt(r)),this.body}sanitizeElement(e){return e.hasAttribute("href")&&this.forbiddenProtocols.includes(e.protocol)&&e.removeAttribute("href"),Array.from(e.attributes).forEach(n=>{let{name:r}=n;this.allowedAttributes.includes(r)||r.indexOf("data-trix")===0||e.removeAttribute(r)}),e}normalizeListElementNesting(){return Array.from(this.body.querySelectorAll("ul,ol")).forEach(e=>{const n=e.previousElementSibling;n&&Ze(n)==="li"&&n.appendChild(e)}),this.body}elementIsRemovable(e){if((e==null?void 0:e.nodeType)===Node.ELEMENT_NODE)return this.elementIsForbidden(e)||this.elementIsntSerializable(e)}elementIsForbidden(e){return this.forbiddenElements.includes(Ze(e))}elementIsntSerializable(e){return e.getAttribute("data-trix-serialize")==="false"&&!nn(e)}}const Dm=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";t=t.replace(/<\/html[^>]*>[^]*$/i,"</html>");const e=document.implementation.createHTMLDocument("");return e.documentElement.innerHTML=t,Array.from(e.head.querySelectorAll("style")).forEach(n=>{e.body.appendChild(n)}),e.body},Vr=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return{string:t=Rn(t),attributes:e,type:"string"}},fl=(t,e)=>{try{const n=JSON.parse(t.getAttribute("data-trix-".concat(e)));return n.contentType==="text/html"&&n.content&&(n.content=Ba.sanitize(n.content).getHTML()),n}catch{return{}}};class qn extends Ue{static parse(e,n){const r=new this(e,n);return r.parse(),r}constructor(e){let{referenceElement:n}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(...arguments),this.html=e,this.referenceElement=n,this.blocks=[],this.blockElements=[],this.processedElements=[]}getDocument(){return ot.fromJSON(this.blocks)}parse(){try{this.createHiddenContainer();const e=Ba.sanitize(this.html).getHTML();this.containerElement.innerHTML=e;const n=pr(this.containerElement,{usingFilter:Om});for(;n.nextNode();)this.processNode(n.currentNode);return this.translateBlockElementMarginsToNewlines()}finally{this.removeHiddenContainer()}}createHiddenContainer(){return this.referenceElement?(this.containerElement=this.referenceElement.cloneNode(!1),this.containerElement.removeAttribute("id"),this.containerElement.setAttribute("data-trix-internal",""),this.containerElement.style.display="none",this.referenceElement.parentNode.insertBefore(this.containerElement,this.referenceElement.nextSibling)):(this.containerElement=ge({tagName:"div",style:{display:"none"}}),document.body.appendChild(this.containerElement))}removeHiddenContainer(){return Vt(this.containerElement)}processNode(e){switch(e.nodeType){case Node.TEXT_NODE:if(!this.isInsignificantTextNode(e))return this.appendBlockForTextNode(e),this.processTextNode(e);break;case Node.ELEMENT_NODE:return this.appendBlockForElement(e),this.processElement(e)}}appendBlockForTextNode(e){const n=e.parentNode;if(n===this.currentBlockElement&&this.isBlockElement(e.previousSibling))return this.appendStringWithAttributes(`
`);if(n===this.containerElement||this.isBlockElement(n)){var r;const i=this.getBlockAttributes(n),l=this.getBlockHTMLAttributes(n);ln(i,(r=this.currentBlock)===null||r===void 0?void 0:r.attributes)||(this.currentBlock=this.appendBlockForAttributesWithElement(i,n,l),this.currentBlockElement=n)}}appendBlockForElement(e){const n=this.isBlockElement(e),r=Zt(this.currentBlockElement,e);if(n&&!this.isBlockElement(e.firstChild)){if(!this.isInsignificantTextNode(e.firstChild)||!this.isBlockElement(e.firstElementChild)){const i=this.getBlockAttributes(e),l=this.getBlockHTMLAttributes(e);if(e.firstChild){if(r&&ln(i,this.currentBlock.attributes))return this.appendStringWithAttributes(`
`);this.currentBlock=this.appendBlockForAttributesWithElement(i,e,l),this.currentBlockElement=e}}}else if(this.currentBlockElement&&!r&&!n){const i=this.findParentBlockElement(e);if(i)return this.appendBlockForElement(i);this.currentBlock=this.appendEmptyBlock(),this.currentBlockElement=null}}findParentBlockElement(e){let{parentElement:n}=e;for(;n&&n!==this.containerElement;){if(this.isBlockElement(n)&&this.blockElements.includes(n))return n;n=n.parentElement}return null}processTextNode(e){let n=e.data;var r;return vl(e.parentNode)||(n=La(n),ws((r=e.previousSibling)===null||r===void 0?void 0:r.textContent)&&(n=Fm(n))),this.appendStringWithAttributes(n,this.getTextAttributes(e.parentNode))}processElement(e){let n;if(nn(e)){if(n=fl(e,"attachment"),Object.keys(n).length){const r=this.getTextAttributes(e);this.appendAttachmentWithAttributes(n,r),e.innerHTML=""}return this.processedElements.push(e)}switch(Ze(e)){case"br":return this.isExtraBR(e)||this.isBlockElement(e.nextSibling)||this.appendStringWithAttributes(`
`,this.getTextAttributes(e)),this.processedElements.push(e);case"img":n={url:e.getAttribute("src"),contentType:"image"};const r=(i=>{const l=i.getAttribute("width"),a=i.getAttribute("height"),o={};return l&&(o.width=parseInt(l,10)),a&&(o.height=parseInt(a,10)),o})(e);for(const i in r){const l=r[i];n[i]=l}return this.appendAttachmentWithAttributes(n,this.getTextAttributes(e)),this.processedElements.push(e);case"tr":if(this.needsTableSeparator(e))return this.appendStringWithAttributes(sr.tableRowSeparator);break;case"td":if(this.needsTableSeparator(e))return this.appendStringWithAttributes(sr.tableCellSeparator)}}appendBlockForAttributesWithElement(e,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.blockElements.push(n);const i=function(){return{text:[],attributes:arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},htmlAttributes:arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}}}(e,r);return this.blocks.push(i),i}appendEmptyBlock(){return this.appendBlockForAttributesWithElement([],null)}appendStringWithAttributes(e,n){return this.appendPiece(Vr(e,n))}appendAttachmentWithAttributes(e,n){return this.appendPiece(function(r){return{attachment:r,attributes:arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},type:"attachment"}}(e,n))}appendPiece(e){return this.blocks.length===0&&this.appendEmptyBlock(),this.blocks[this.blocks.length-1].text.push(e)}appendStringToTextAtIndex(e,n){const{text:r}=this.blocks[n],i=r[r.length-1];if((i==null?void 0:i.type)!=="string")return r.push(Vr(e));i.string+=e}prependStringToTextAtIndex(e,n){const{text:r}=this.blocks[n],i=r[0];if((i==null?void 0:i.type)!=="string")return r.unshift(Vr(e));i.string=e+i.string}getTextAttributes(e){let n;const r={};for(const i in an){const l=an[i];if(l.tagName&&Ut(e,{matchingSelector:l.tagName,untilNode:this.containerElement}))r[i]=!0;else if(l.parser){if(n=l.parser(e),n){let a=!1;for(const o of this.findBlockElementAncestors(e))if(l.parser(o)===n){a=!0;break}a||(r[i]=n)}}else l.styleProperty&&(n=e.style[l.styleProperty],n&&(r[i]=n))}if(nn(e)){const i=fl(e,"attributes");for(const l in i)n=i[l],r[l]=n}return r}getBlockAttributes(e){const n=[];for(;e&&e!==this.containerElement;){for(const i in et){const l=et[i];var r;l.parse!==!1&&Ze(e)===l.tagName&&((r=l.test)!==null&&r!==void 0&&r.call(l,e)||!l.test)&&(n.push(i),l.listAttribute&&n.push(l.listAttribute))}e=e.parentNode}return n.reverse()}getBlockHTMLAttributes(e){const n={},r=Object.values(et).find(i=>i.tagName===Ze(e));return((r==null?void 0:r.htmlAttributes)||[]).forEach(i=>{e.hasAttribute(i)&&(n[i]=e.getAttribute(i))}),n}findBlockElementAncestors(e){const n=[];for(;e&&e!==this.containerElement;){const r=Ze(e);On().includes(r)&&n.push(e),e=e.parentNode}return n}isBlockElement(e){if((e==null?void 0:e.nodeType)===Node.ELEMENT_NODE&&!nn(e)&&!Ut(e,{matchingSelector:"td",untilNode:this.containerElement}))return On().includes(Ze(e))||window.getComputedStyle(e).display==="block"}isInsignificantTextNode(e){if((e==null?void 0:e.nodeType)!==Node.TEXT_NODE||!Pm(e.data))return;const{parentNode:n,previousSibling:r,nextSibling:i}=e;return Mm(n.previousSibling)&&!this.isBlockElement(n.previousSibling)||vl(n)?void 0:!r||this.isBlockElement(r)||!i||this.isBlockElement(i)}isExtraBR(e){return Ze(e)==="br"&&this.isBlockElement(e.parentNode)&&e.parentNode.lastChild===e}needsTableSeparator(e){if(sr.removeBlankTableCells){var n;const r=(n=e.previousSibling)===null||n===void 0?void 0:n.textContent;return r&&/\S/.test(r)}return e.previousSibling}translateBlockElementMarginsToNewlines(){const e=this.getMarginOfDefaultBlockElement();for(let n=0;n<this.blocks.length;n++){const r=this.getMarginOfBlockElementAtIndex(n);r&&(r.top>2*e.top&&this.prependStringToTextAtIndex(`
`,n),r.bottom>2*e.bottom&&this.appendStringToTextAtIndex(`
`,n))}}getMarginOfBlockElementAtIndex(e){const n=this.blockElements[e];if(n&&n.textContent&&!On().includes(Ze(n))&&!this.processedElements.includes(n))return gl(n)}getMarginOfDefaultBlockElement(){const e=ge(et.default.tagName);return this.containerElement.appendChild(e),gl(e)}}const vl=function(t){const{whiteSpace:e}=window.getComputedStyle(t);return["pre","pre-wrap","pre-line"].includes(e)},Mm=t=>t&&!ws(t.textContent),gl=function(t){const e=window.getComputedStyle(t);if(e.display==="block")return{top:parseInt(e.marginTop),bottom:parseInt(e.marginBottom)}},Om=function(t){return Ze(t)==="style"?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT},Fm=t=>t.replace(new RegExp("^".concat(Ea.source,"+")),""),Pm=t=>new RegExp("^".concat(Ea.source,"*$")).test(t),ws=t=>/\s$/.test(t),$m=["contenteditable","data-trix-id","data-trix-store-key","data-trix-mutable","data-trix-placeholder","tabindex"],oi="data-trix-serialized-attributes",zm="[".concat(oi,"]"),Nm=new RegExp("<!--block-->","g"),Hm={"application/json":function(t){let e;if(t instanceof ot)e=t;else{if(!(t instanceof HTMLElement))throw new Error("unserializable object");e=qn.parse(t.innerHTML).getDocument()}return e.toSerializableDocument().toJSONString()},"text/html":function(t){let e;if(t instanceof ot)e=xr.render(t);else{if(!(t instanceof HTMLElement))throw new Error("unserializable object");e=t.cloneNode(!0)}return Array.from(e.querySelectorAll("[data-trix-serialize=false]")).forEach(n=>{Vt(n)}),$m.forEach(n=>{Array.from(e.querySelectorAll("[".concat(n,"]"))).forEach(r=>{r.removeAttribute(n)})}),Array.from(e.querySelectorAll(zm)).forEach(n=>{try{const r=JSON.parse(n.getAttribute(oi));n.removeAttribute(oi);for(const i in r){const l=r[i];n.setAttribute(i,l)}}catch{}}),e.innerHTML.replace(Nm,"")}};var jm=Object.freeze({__proto__:null});class ze extends Ue{constructor(e,n){super(...arguments),this.attachmentManager=e,this.attachment=n,this.id=this.attachment.id,this.file=this.attachment.file}remove(){return this.attachmentManager.requestRemovalOfAttachment(this.attachment)}}ze.proxyMethod("attachment.getAttribute"),ze.proxyMethod("attachment.hasAttribute"),ze.proxyMethod("attachment.setAttribute"),ze.proxyMethod("attachment.getAttributes"),ze.proxyMethod("attachment.setAttributes"),ze.proxyMethod("attachment.isPending"),ze.proxyMethod("attachment.isPreviewable"),ze.proxyMethod("attachment.getURL"),ze.proxyMethod("attachment.getHref"),ze.proxyMethod("attachment.getFilename"),ze.proxyMethod("attachment.getFilesize"),ze.proxyMethod("attachment.getFormattedFilesize"),ze.proxyMethod("attachment.getExtension"),ze.proxyMethod("attachment.getContentType"),ze.proxyMethod("attachment.getFile"),ze.proxyMethod("attachment.setFile"),ze.proxyMethod("attachment.releaseFile"),ze.proxyMethod("attachment.getUploadProgress"),ze.proxyMethod("attachment.setUploadProgress");class ys extends Ue{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];super(...arguments),this.managedAttachments={},Array.from(e).forEach(n=>{this.manageAttachment(n)})}getAttachments(){const e=[];for(const n in this.managedAttachments){const r=this.managedAttachments[n];e.push(r)}return e}manageAttachment(e){return this.managedAttachments[e.id]||(this.managedAttachments[e.id]=new ze(this,e)),this.managedAttachments[e.id]}attachmentIsManaged(e){return e.id in this.managedAttachments}requestRemovalOfAttachment(e){var n,r;if(this.attachmentIsManaged(e))return(n=this.delegate)===null||n===void 0||(r=n.attachmentManagerDidRequestRemovalOfAttachment)===null||r===void 0?void 0:r.call(n,e)}unmanageAttachment(e){const n=this.managedAttachments[e.id];return delete this.managedAttachments[e.id],n}}class ks{constructor(e){this.composition=e,this.document=this.composition.document;const n=this.composition.getSelectedRange();this.startPosition=n[0],this.endPosition=n[1],this.startLocation=this.document.locationFromPosition(this.startPosition),this.endLocation=this.document.locationFromPosition(this.endPosition),this.block=this.document.getBlockAtIndex(this.endLocation.index),this.breaksOnReturn=this.block.breaksOnReturn(),this.previousCharacter=this.block.text.getStringAtPosition(this.endLocation.offset-1),this.nextCharacter=this.block.text.getStringAtPosition(this.endLocation.offset)}shouldInsertBlockBreak(){return this.block.hasAttributes()&&this.block.isListItem()&&!this.block.isEmpty()?this.startLocation.offset!==0:this.breaksOnReturn&&this.nextCharacter!==`
`}shouldBreakFormattedBlock(){return this.block.hasAttributes()&&!this.block.isListItem()&&(this.breaksOnReturn&&this.nextCharacter===`
`||this.previousCharacter===`
`)}shouldDecreaseListLevel(){return this.block.hasAttributes()&&this.block.isListItem()&&this.block.isEmpty()}shouldPrependListItem(){return this.block.isListItem()&&this.startLocation.offset===0&&!this.block.isEmpty()}shouldRemoveLastBlockAttribute(){return this.block.hasAttributes()&&!this.block.isListItem()&&this.block.isEmpty()}}class zt extends Ue{constructor(){super(...arguments),this.document=new ot,this.attachments=[],this.currentAttributes={},this.revision=0}setDocument(e){var n,r;if(!e.isEqualTo(this.document))return this.document=e,this.refreshAttachments(),this.revision++,(n=this.delegate)===null||n===void 0||(r=n.compositionDidChangeDocument)===null||r===void 0?void 0:r.call(n,e)}getSnapshot(){return{document:this.document,selectedRange:this.getSelectedRange()}}loadSnapshot(e){var n,r,i,l;let{document:a,selectedRange:o}=e;return(n=this.delegate)===null||n===void 0||(r=n.compositionWillLoadSnapshot)===null||r===void 0||r.call(n),this.setDocument(a??new ot),this.setSelection(o??[0,0]),(i=this.delegate)===null||i===void 0||(l=i.compositionDidLoadSnapshot)===null||l===void 0?void 0:l.call(i)}insertText(e){let{updatePosition:n}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{updatePosition:!0};const r=this.getSelectedRange();this.setDocument(this.document.insertTextAtRange(e,r));const i=r[0],l=i+e.getLength();return n&&this.setSelection(l),this.notifyDelegateOfInsertionAtRange([i,l])}insertBlock(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:new yt;const n=new ot([e]);return this.insertDocument(n)}insertDocument(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:new ot;const n=this.getSelectedRange();this.setDocument(this.document.insertDocumentAtRange(e,n));const r=n[0],i=r+e.getLength();return this.setSelection(i),this.notifyDelegateOfInsertionAtRange([r,i])}insertString(e,n){const r=this.getCurrentTextAttributes(),i=dt.textForStringWithAttributes(e,r);return this.insertText(i,n)}insertBlockBreak(){const e=this.getSelectedRange();this.setDocument(this.document.insertBlockBreakAtRange(e));const n=e[0],r=n+1;return this.setSelection(r),this.notifyDelegateOfInsertionAtRange([n,r])}insertLineBreak(){const e=new ks(this);if(e.shouldDecreaseListLevel())return this.decreaseListLevel(),this.setSelection(e.startPosition);if(e.shouldPrependListItem()){const n=new ot([e.block.copyWithoutText()]);return this.insertDocument(n)}return e.shouldInsertBlockBreak()?this.insertBlockBreak():e.shouldRemoveLastBlockAttribute()?this.removeLastBlockAttribute():e.shouldBreakFormattedBlock()?this.breakFormattedBlock(e):this.insertString(`
`)}insertHTML(e){const n=qn.parse(e).getDocument(),r=this.getSelectedRange();this.setDocument(this.document.mergeDocumentAtRange(n,r));const i=r[0],l=i+n.getLength()-1;return this.setSelection(l),this.notifyDelegateOfInsertionAtRange([i,l])}replaceHTML(e){const n=qn.parse(e).getDocument().copyUsingObjectsFromDocument(this.document),r=this.getLocationRange({strict:!1}),i=this.document.rangeFromLocationRange(r);return this.setDocument(n),this.setSelection(i)}insertFile(e){return this.insertFiles([e])}insertFiles(e){const n=[];return Array.from(e).forEach(r=>{var i;if((i=this.delegate)!==null&&i!==void 0&&i.compositionShouldAcceptFile(r)){const l=xn.attachmentForFile(r);n.push(l)}}),this.insertAttachments(n)}insertAttachment(e){return this.insertAttachments([e])}insertAttachments(e){let n=new dt;return Array.from(e).forEach(r=>{var i;const l=r.getType(),a=(i=ba[l])===null||i===void 0?void 0:i.presentation,o=this.getCurrentTextAttributes();a&&(o.presentation=a);const s=dt.textForAttachmentWithAttributes(r,o);n=n.appendText(s)}),this.insertText(n)}shouldManageDeletingInDirection(e){const n=this.getLocationRange();if(xt(n)){if(e==="backward"&&n[0].offset===0||this.shouldManageMovingCursorInDirection(e))return!0}else if(n[0].index!==n[1].index)return!0;return!1}deleteInDirection(e){let n,r,i,{length:l}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=this.getLocationRange();let o=this.getSelectedRange();const s=xt(o);if(s?r=e==="backward"&&a[0].offset===0:i=a[0].index!==a[1].index,r&&this.canDecreaseBlockAttributeLevel()){const u=this.getBlock();if(u.isListItem()?this.decreaseListLevel():this.decreaseBlockAttributeLevel(),this.setSelection(o[0]),u.isEmpty())return!1}return s&&(o=this.getExpandedRangeInDirection(e,{length:l}),e==="backward"&&(n=this.getAttachmentAtRange(o))),n?(this.editAttachment(n),!1):(this.setDocument(this.document.removeTextAtRange(o)),this.setSelection(o[0]),!r&&!i&&void 0)}moveTextFromRange(e){const[n]=Array.from(this.getSelectedRange());return this.setDocument(this.document.moveTextFromRangeToPosition(e,n)),this.setSelection(n)}removeAttachment(e){const n=this.document.getRangeOfAttachment(e);if(n)return this.stopEditingAttachment(),this.setDocument(this.document.removeTextAtRange(n)),this.setSelection(n[0])}removeLastBlockAttribute(){const[e,n]=Array.from(this.getSelectedRange()),r=this.document.getBlockAtPosition(n);return this.removeCurrentAttribute(r.getLastAttribute()),this.setSelection(e)}insertPlaceholder(){return this.placeholderPosition=this.getPosition(),this.insertString(" ")}selectPlaceholder(){if(this.placeholderPosition!=null)return this.setSelectedRange([this.placeholderPosition,this.placeholderPosition+1]),this.getSelectedRange()}forgetPlaceholder(){this.placeholderPosition=null}hasCurrentAttribute(e){const n=this.currentAttributes[e];return n!=null&&n!==!1}toggleCurrentAttribute(e){const n=!this.currentAttributes[e];return n?this.setCurrentAttribute(e,n):this.removeCurrentAttribute(e)}canSetCurrentAttribute(e){return Ne(e)?this.canSetCurrentBlockAttribute(e):this.canSetCurrentTextAttribute(e)}canSetCurrentTextAttribute(e){const n=this.getSelectedDocument();if(n){for(const r of Array.from(n.getAttachments()))if(!r.hasContent())return!1;return!0}}canSetCurrentBlockAttribute(e){const n=this.getBlock();if(n)return!n.isTerminalBlock()}setCurrentAttribute(e,n){return Ne(e)?this.setBlockAttribute(e,n):(this.setTextAttribute(e,n),this.currentAttributes[e]=n,this.notifyDelegateOfCurrentAttributesChange())}setHTMLAtributeAtPosition(e,n,r){var i;const l=this.document.getBlockAtPosition(e),a=(i=Ne(l.getLastAttribute()))===null||i===void 0?void 0:i.htmlAttributes;if(l&&a!=null&&a.includes(n)){const o=this.document.setHTMLAttributeAtPosition(e,n,r);this.setDocument(o)}}setTextAttribute(e,n){const r=this.getSelectedRange();if(!r)return;const[i,l]=Array.from(r);if(i!==l)return this.setDocument(this.document.addAttributeAtRange(e,n,r));if(e==="href"){const a=dt.textForStringWithAttributes(n,{href:n});return this.insertText(a)}}setBlockAttribute(e,n){const r=this.getSelectedRange();if(this.canSetCurrentAttribute(e))return this.setDocument(this.document.applyBlockAttributeAtRange(e,n,r)),this.setSelection(r)}removeCurrentAttribute(e){return Ne(e)?(this.removeBlockAttribute(e),this.updateCurrentAttributes()):(this.removeTextAttribute(e),delete this.currentAttributes[e],this.notifyDelegateOfCurrentAttributesChange())}removeTextAttribute(e){const n=this.getSelectedRange();if(n)return this.setDocument(this.document.removeAttributeAtRange(e,n))}removeBlockAttribute(e){const n=this.getSelectedRange();if(n)return this.setDocument(this.document.removeAttributeAtRange(e,n))}canDecreaseNestingLevel(){var e;return((e=this.getBlock())===null||e===void 0?void 0:e.getNestingLevel())>0}canIncreaseNestingLevel(){var e;const n=this.getBlock();if(n){if((e=Ne(n.getLastNestableAttribute()))===null||e===void 0||!e.listAttribute)return n.getNestingLevel()>0;{const r=this.getPreviousBlock();if(r)return function(){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return ln((arguments.length>0&&arguments[0]!==void 0?arguments[0]:[]).slice(0,i.length),i)}(r.getListItemAttributes(),n.getListItemAttributes())}}}decreaseNestingLevel(){const e=this.getBlock();if(e)return this.setDocument(this.document.replaceBlock(e,e.decreaseNestingLevel()))}increaseNestingLevel(){const e=this.getBlock();if(e)return this.setDocument(this.document.replaceBlock(e,e.increaseNestingLevel()))}canDecreaseBlockAttributeLevel(){var e;return((e=this.getBlock())===null||e===void 0?void 0:e.getAttributeLevel())>0}decreaseBlockAttributeLevel(){var e;const n=(e=this.getBlock())===null||e===void 0?void 0:e.getLastAttribute();if(n)return this.removeCurrentAttribute(n)}decreaseListLevel(){let[e]=Array.from(this.getSelectedRange());const{index:n}=this.document.locationFromPosition(e);let r=n;const i=this.getBlock().getAttributeLevel();let l=this.document.getBlockAtIndex(r+1);for(;l&&l.isListItem()&&!(l.getAttributeLevel()<=i);)r++,l=this.document.getBlockAtIndex(r+1);e=this.document.positionFromLocation({index:n,offset:0});const a=this.document.positionFromLocation({index:r,offset:0});return this.setDocument(this.document.removeLastListAttributeAtRange([e,a]))}updateCurrentAttributes(){const e=this.getSelectedRange({ignoreLock:!0});if(e){const n=this.document.getCommonAttributesAtRange(e);if(Array.from(ii()).forEach(r=>{n[r]||this.canSetCurrentAttribute(r)||(n[r]=!1)}),!Ln(n,this.currentAttributes))return this.currentAttributes=n,this.notifyDelegateOfCurrentAttributesChange()}}getCurrentAttributes(){return ns.call({},this.currentAttributes)}getCurrentTextAttributes(){const e={};for(const n in this.currentAttributes){const r=this.currentAttributes[n];r!==!1&&ai(n)&&(e[n]=r)}return e}freezeSelection(){return this.setCurrentAttribute("frozen",!0)}thawSelection(){return this.removeCurrentAttribute("frozen")}hasFrozenSelection(){return this.hasCurrentAttribute("frozen")}setSelection(e){var n;const r=this.document.locationRangeFromRange(e);return(n=this.delegate)===null||n===void 0?void 0:n.compositionDidRequestChangingSelectionToLocationRange(r)}getSelectedRange(){const e=this.getLocationRange();if(e)return this.document.rangeFromLocationRange(e)}setSelectedRange(e){const n=this.document.locationRangeFromRange(e);return this.getSelectionManager().setLocationRange(n)}getPosition(){const e=this.getLocationRange();if(e)return this.document.positionFromLocation(e[0])}getLocationRange(e){return this.targetLocationRange?this.targetLocationRange:this.getSelectionManager().getLocationRange(e)||xe({index:0,offset:0})}withTargetLocationRange(e,n){let r;this.targetLocationRange=e;try{r=n()}finally{this.targetLocationRange=null}return r}withTargetRange(e,n){const r=this.document.locationRangeFromRange(e);return this.withTargetLocationRange(r,n)}withTargetDOMRange(e,n){const r=this.createLocationRangeFromDOMRange(e,{strict:!1});return this.withTargetLocationRange(r,n)}getExpandedRangeInDirection(e){let{length:n}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},[r,i]=Array.from(this.getSelectedRange());return e==="backward"?n?r-=n:r=this.translateUTF16PositionFromOffset(r,-1):n?i+=n:i=this.translateUTF16PositionFromOffset(i,1),xe([r,i])}shouldManageMovingCursorInDirection(e){if(this.editingAttachment)return!0;const n=this.getExpandedRangeInDirection(e);return this.getAttachmentAtRange(n)!=null}moveCursorInDirection(e){let n,r;if(this.editingAttachment)r=this.document.getRangeOfAttachment(this.editingAttachment);else{const i=this.getSelectedRange();r=this.getExpandedRangeInDirection(e),n=!fr(i,r)}if(e==="backward"?this.setSelectedRange(r[0]):this.setSelectedRange(r[1]),n){const i=this.getAttachmentAtRange(r);if(i)return this.editAttachment(i)}}expandSelectionInDirection(e){let{length:n}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getExpandedRangeInDirection(e,{length:n});return this.setSelectedRange(r)}expandSelectionForEditing(){if(this.hasCurrentAttribute("href"))return this.expandSelectionAroundCommonAttribute("href")}expandSelectionAroundCommonAttribute(e){const n=this.getPosition(),r=this.document.getRangeOfCommonAttributeAtPosition(e,n);return this.setSelectedRange(r)}selectionContainsAttachments(){var e;return((e=this.getSelectedAttachments())===null||e===void 0?void 0:e.length)>0}selectionIsInCursorTarget(){return this.editingAttachment||this.positionIsCursorTarget(this.getPosition())}positionIsCursorTarget(e){const n=this.document.locationFromPosition(e);if(n)return this.locationIsCursorTarget(n)}positionIsBlockBreak(e){var n;return(n=this.document.getPieceAtPosition(e))===null||n===void 0?void 0:n.isBlockBreak()}getSelectedDocument(){const e=this.getSelectedRange();if(e)return this.document.getDocumentAtRange(e)}getSelectedAttachments(){var e;return(e=this.getSelectedDocument())===null||e===void 0?void 0:e.getAttachments()}getAttachments(){return this.attachments.slice(0)}refreshAttachments(){const e=this.document.getAttachments(),{added:n,removed:r}=function(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];const a=[],o=[],s=new Set;i.forEach(c=>{s.add(c)});const u=new Set;return l.forEach(c=>{u.add(c),s.has(c)||a.push(c)}),i.forEach(c=>{u.has(c)||o.push(c)}),{added:a,removed:o}}(this.attachments,e);return this.attachments=e,Array.from(r).forEach(i=>{var l,a;i.delegate=null,(l=this.delegate)===null||l===void 0||(a=l.compositionDidRemoveAttachment)===null||a===void 0||a.call(l,i)}),(()=>{const i=[];return Array.from(n).forEach(l=>{var a,o;l.delegate=this,i.push((a=this.delegate)===null||a===void 0||(o=a.compositionDidAddAttachment)===null||o===void 0?void 0:o.call(a,l))}),i})()}attachmentDidChangeAttributes(e){var n,r;return this.revision++,(n=this.delegate)===null||n===void 0||(r=n.compositionDidEditAttachment)===null||r===void 0?void 0:r.call(n,e)}attachmentDidChangePreviewURL(e){var n,r;return this.revision++,(n=this.delegate)===null||n===void 0||(r=n.compositionDidChangeAttachmentPreviewURL)===null||r===void 0?void 0:r.call(n,e)}editAttachment(e,n){var r,i;if(e!==this.editingAttachment)return this.stopEditingAttachment(),this.editingAttachment=e,(r=this.delegate)===null||r===void 0||(i=r.compositionDidStartEditingAttachment)===null||i===void 0?void 0:i.call(r,this.editingAttachment,n)}stopEditingAttachment(){var e,n;this.editingAttachment&&((e=this.delegate)===null||e===void 0||(n=e.compositionDidStopEditingAttachment)===null||n===void 0||n.call(e,this.editingAttachment),this.editingAttachment=null)}updateAttributesForAttachment(e,n){return this.setDocument(this.document.updateAttributesForAttachment(e,n))}removeAttributeForAttachment(e,n){return this.setDocument(this.document.removeAttributeForAttachment(e,n))}breakFormattedBlock(e){let{document:n}=e;const{block:r}=e;let i=e.startPosition,l=[i-1,i];r.getBlockBreakPosition()===e.startLocation.offset?(r.breaksOnReturn()&&e.nextCharacter===`
`?i+=1:n=n.removeTextAtRange(l),l=[i,i]):e.nextCharacter===`
`?e.previousCharacter===`
`?l=[i-1,i+1]:(l=[i,i+1],i+=1):e.startLocation.offset-1!=0&&(i+=1);const a=new ot([r.removeLastAttribute().copyWithoutText()]);return this.setDocument(n.insertDocumentAtRange(a,l)),this.setSelection(i)}getPreviousBlock(){const e=this.getLocationRange();if(e){const{index:n}=e[0];if(n>0)return this.document.getBlockAtIndex(n-1)}}getBlock(){const e=this.getLocationRange();if(e)return this.document.getBlockAtIndex(e[0].index)}getAttachmentAtRange(e){const n=this.document.getDocumentAtRange(e);if(n.toString()==="".concat("￼",`
`))return n.getAttachments()[0]}notifyDelegateOfCurrentAttributesChange(){var e,n;return(e=this.delegate)===null||e===void 0||(n=e.compositionDidChangeCurrentAttributes)===null||n===void 0?void 0:n.call(e,this.currentAttributes)}notifyDelegateOfInsertionAtRange(e){var n,r;return(n=this.delegate)===null||n===void 0||(r=n.compositionDidPerformInsertionAtRange)===null||r===void 0?void 0:r.call(n,e)}translateUTF16PositionFromOffset(e,n){const r=this.document.toUTF16String(),i=r.offsetFromUCS2Offset(e);return r.offsetToUCS2Offset(i+n)}}zt.proxyMethod("getSelectionManager().getPointRange"),zt.proxyMethod("getSelectionManager().setLocationRangeFromPointRange"),zt.proxyMethod("getSelectionManager().createLocationRangeFromDOMRange"),zt.proxyMethod("getSelectionManager().locationIsCursorTarget"),zt.proxyMethod("getSelectionManager().selectionIsExpanded"),zt.proxyMethod("delegate?.getSelectionManager");class si extends Ue{constructor(e){super(...arguments),this.composition=e,this.undoEntries=[],this.redoEntries=[]}recordUndoEntry(e){let{context:n,consolidatable:r}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=this.undoEntries.slice(-1)[0];if(!r||!Um(i,e,n)){const l=this.createEntry({description:e,context:n});this.undoEntries.push(l),this.redoEntries=[]}}undo(){const e=this.undoEntries.pop();if(e){const n=this.createEntry(e);return this.redoEntries.push(n),this.composition.loadSnapshot(e.snapshot)}}redo(){const e=this.redoEntries.pop();if(e){const n=this.createEntry(e);return this.undoEntries.push(n),this.composition.loadSnapshot(e.snapshot)}}canUndo(){return this.undoEntries.length>0}canRedo(){return this.redoEntries.length>0}createEntry(){let{description:e,context:n}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return{description:e==null?void 0:e.toString(),context:JSON.stringify(n),snapshot:this.composition.getSnapshot()}}}const Um=(t,e,n)=>(t==null?void 0:t.description)===(e==null?void 0:e.toString())&&(t==null?void 0:t.context)===JSON.stringify(n),Wr="attachmentGallery";class Cs{constructor(e){this.document=e.document,this.selectedRange=e.selectedRange}perform(){return this.removeBlockAttribute(),this.applyBlockAttribute()}getSnapshot(){return{document:this.document,selectedRange:this.selectedRange}}removeBlockAttribute(){return this.findRangesOfBlocks().map(e=>this.document=this.document.removeAttributeAtRange(Wr,e))}applyBlockAttribute(){let e=0;this.findRangesOfPieces().forEach(n=>{n[1]-n[0]>1&&(n[0]+=e,n[1]+=e,this.document.getCharacterAtPosition(n[1])!==`
`&&(this.document=this.document.insertBlockBreakAtRange(n[1]),n[1]<this.selectedRange[1]&&this.moveSelectedRangeForward(),n[1]++,e++),n[0]!==0&&this.document.getCharacterAtPosition(n[0]-1)!==`
`&&(this.document=this.document.insertBlockBreakAtRange(n[0]),n[0]<this.selectedRange[0]&&this.moveSelectedRangeForward(),n[0]++,e++),this.document=this.document.applyBlockAttributeAtRange(Wr,!0,n))})}findRangesOfBlocks(){return this.document.findRangesForBlockAttribute(Wr)}findRangesOfPieces(){return this.document.findRangesForTextAttribute("presentation",{withValue:"gallery"})}moveSelectedRangeForward(){this.selectedRange[0]+=1,this.selectedRange[1]+=1}}const As=function(t){const e=new Cs(t);return e.perform(),e.getSnapshot()},Vm=[As];class Es{constructor(e,n,r){this.insertFiles=this.insertFiles.bind(this),this.composition=e,this.selectionManager=n,this.element=r,this.undoManager=new si(this.composition),this.filters=Vm.slice(0)}loadDocument(e){return this.loadSnapshot({document:e,selectedRange:[0,0]})}loadHTML(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=qn.parse(e,{referenceElement:this.element}).getDocument();return this.loadDocument(n)}loadJSON(e){let{document:n,selectedRange:r}=e;return n=ot.fromJSON(n),this.loadSnapshot({document:n,selectedRange:r})}loadSnapshot(e){return this.undoManager=new si(this.composition),this.composition.loadSnapshot(e)}getDocument(){return this.composition.document}getSelectedDocument(){return this.composition.getSelectedDocument()}getSnapshot(){return this.composition.getSnapshot()}toJSON(){return this.getSnapshot()}deleteInDirection(e){return this.composition.deleteInDirection(e)}insertAttachment(e){return this.composition.insertAttachment(e)}insertAttachments(e){return this.composition.insertAttachments(e)}insertDocument(e){return this.composition.insertDocument(e)}insertFile(e){return this.composition.insertFile(e)}insertFiles(e){return this.composition.insertFiles(e)}insertHTML(e){return this.composition.insertHTML(e)}insertString(e){return this.composition.insertString(e)}insertText(e){return this.composition.insertText(e)}insertLineBreak(){return this.composition.insertLineBreak()}getSelectedRange(){return this.composition.getSelectedRange()}getPosition(){return this.composition.getPosition()}getClientRectAtPosition(e){const n=this.getDocument().locationRangeFromRange([e,e+1]);return this.selectionManager.getClientRectAtLocationRange(n)}expandSelectionInDirection(e){return this.composition.expandSelectionInDirection(e)}moveCursorInDirection(e){return this.composition.moveCursorInDirection(e)}setSelectedRange(e){return this.composition.setSelectedRange(e)}activateAttribute(e){let n=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];return this.composition.setCurrentAttribute(e,n)}attributeIsActive(e){return this.composition.hasCurrentAttribute(e)}canActivateAttribute(e){return this.composition.canSetCurrentAttribute(e)}deactivateAttribute(e){return this.composition.removeCurrentAttribute(e)}setHTMLAtributeAtPosition(e,n,r){this.composition.setHTMLAtributeAtPosition(e,n,r)}canDecreaseNestingLevel(){return this.composition.canDecreaseNestingLevel()}canIncreaseNestingLevel(){return this.composition.canIncreaseNestingLevel()}decreaseNestingLevel(){if(this.canDecreaseNestingLevel())return this.composition.decreaseNestingLevel()}increaseNestingLevel(){if(this.canIncreaseNestingLevel())return this.composition.increaseNestingLevel()}canRedo(){return this.undoManager.canRedo()}canUndo(){return this.undoManager.canUndo()}recordUndoEntry(e){let{context:n,consolidatable:r}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.undoManager.recordUndoEntry(e,{context:n,consolidatable:r})}redo(){if(this.canRedo())return this.undoManager.redo()}undo(){if(this.canUndo())return this.undoManager.undo()}}class Ls{constructor(e){this.element=e}findLocationFromContainerAndOffset(e,n){let{strict:r}=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{strict:!0},i=0,l=!1;const a={index:0,offset:0},o=this.findAttachmentElementParentForNode(e);o&&(e=o.parentNode,n=Or(o));const s=pr(this.element,{usingFilter:xs});for(;s.nextNode();){const u=s.currentNode;if(u===e&&Fn(e)){wn(u)||(a.offset+=n);break}if(u.parentNode===e){if(i++===n)break}else if(!Zt(e,u)&&i>0)break;Ya(u,{strict:r})?(l&&a.index++,a.offset=0,l=!0):a.offset+=Qr(u)}return a}findContainerAndOffsetFromLocation(e){let n,r;if(e.index===0&&e.offset===0){for(n=this.element,r=0;n.firstChild;)if(n=n.firstChild,Fr(n)){r=1;break}return[n,r]}let[i,l]=this.findNodeAndOffsetFromLocation(e);if(i){if(Fn(i))Qr(i)===0?(n=i.parentNode.parentNode,r=Or(i.parentNode),wn(i,{name:"right"})&&r++):(n=i,r=e.offset-l);else{if(n=i.parentNode,!Ya(i.previousSibling)&&!Fr(n))for(;i===n.lastChild&&(i=n,n=n.parentNode,!Fr(n)););r=Or(i),e.offset!==0&&r++}return[n,r]}}findNodeAndOffsetFromLocation(e){let n,r,i=0;for(const l of this.getSignificantNodesForIndex(e.index)){const a=Qr(l);if(e.offset<=i+a)if(Fn(l)){if(n=l,r=i,e.offset===r&&wn(n))break}else n||(n=l,r=i);if(i+=a,i>e.offset)break}return[n,r]}findAttachmentElementParentForNode(e){for(;e&&e!==this.element;){if(nn(e))return e;e=e.parentNode}}getSignificantNodesForIndex(e){const n=[],r=pr(this.element,{usingFilter:Wm});let i=!1;for(;r.nextNode();){const a=r.currentNode;var l;if(bn(a)){if(l!=null?l++:l=0,l===e)i=!0;else if(i)break}else i&&n.push(a)}return n}}const Qr=function(t){return t.nodeType===Node.TEXT_NODE?wn(t)?0:t.textContent.length:Ze(t)==="br"||nn(t)?1:0},Wm=function(t){return Qm(t)===NodeFilter.FILTER_ACCEPT?xs(t):NodeFilter.FILTER_REJECT},Qm=function(t){return is(t)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT},xs=function(t){return nn(t.parentNode)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT};class Ss{createDOMRangeFromPoint(e){let n,{x:r,y:i}=e;if(document.caretPositionFromPoint){const{offsetNode:l,offset:a}=document.caretPositionFromPoint(r,i);return n=document.createRange(),n.setStart(l,a),n}if(document.caretRangeFromPoint)return document.caretRangeFromPoint(r,i);if(document.body.createTextRange){const l=Pn();try{const a=document.body.createTextRange();a.moveToPoint(r,i),a.select()}catch{}return n=Pn(),ps(l),n}}getClientRectsForDOMRange(e){const n=Array.from(e.getClientRects());return[n[0],n[n.length-1]]}}class Xt extends Ue{constructor(e){super(...arguments),this.didMouseDown=this.didMouseDown.bind(this),this.selectionDidChange=this.selectionDidChange.bind(this),this.element=e,this.locationMapper=new Ls(this.element),this.pointMapper=new Ss,this.lockCount=0,Me("mousedown",{onElement:this.element,withCallback:this.didMouseDown})}getLocationRange(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return e.strict===!1?this.createLocationRangeFromDOMRange(Pn()):e.ignoreLock?this.currentLocationRange:this.lockedLocationRange?this.lockedLocationRange:this.currentLocationRange}setLocationRange(e){if(this.lockedLocationRange)return;e=xe(e);const n=this.createDOMRangeFromLocationRange(e);n&&(ps(n),this.updateCurrentLocationRange(e))}setLocationRangeFromPointRange(e){e=xe(e);const n=this.getLocationAtPoint(e[0]),r=this.getLocationAtPoint(e[1]);this.setLocationRange([n,r])}getClientRectAtLocationRange(e){const n=this.createDOMRangeFromLocationRange(e);if(n)return this.getClientRectsForDOMRange(n)[1]}locationIsCursorTarget(e){const n=Array.from(this.findNodeAndOffsetFromLocation(e))[0];return wn(n)}lock(){this.lockCount++==0&&(this.updateCurrentLocationRange(),this.lockedLocationRange=this.getLocationRange())}unlock(){if(--this.lockCount==0){const{lockedLocationRange:e}=this;if(this.lockedLocationRange=null,e!=null)return this.setLocationRange(e)}}clearSelection(){var e;return(e=cs())===null||e===void 0?void 0:e.removeAllRanges()}selectionIsCollapsed(){var e;return((e=Pn())===null||e===void 0?void 0:e.collapsed)===!0}selectionIsExpanded(){return!this.selectionIsCollapsed()}createLocationRangeFromDOMRange(e,n){if(e==null||!this.domRangeWithinElement(e))return;const r=this.findLocationFromContainerAndOffset(e.startContainer,e.startOffset,n);if(!r)return;const i=e.collapsed?void 0:this.findLocationFromContainerAndOffset(e.endContainer,e.endOffset,n);return xe([r,i])}didMouseDown(){return this.pauseTemporarily()}pauseTemporarily(){let e;this.paused=!0;const n=()=>{if(this.paused=!1,clearTimeout(r),Array.from(e).forEach(i=>{i.destroy()}),Zt(document,this.element))return this.selectionDidChange()},r=setTimeout(n,200);e=["mousemove","keydown"].map(i=>Me(i,{onElement:document,withCallback:n}))}selectionDidChange(){if(!this.paused&&!ya(this.element))return this.updateCurrentLocationRange()}updateCurrentLocationRange(e){var n,r;if((e??(e=this.createLocationRangeFromDOMRange(Pn())))&&!fr(e,this.currentLocationRange))return this.currentLocationRange=e,(n=this.delegate)===null||n===void 0||(r=n.locationRangeDidChange)===null||r===void 0?void 0:r.call(n,this.currentLocationRange.slice(0))}createDOMRangeFromLocationRange(e){const n=this.findContainerAndOffsetFromLocation(e[0]),r=xt(e)?n:this.findContainerAndOffsetFromLocation(e[1])||n;if(n!=null&&r!=null){const i=document.createRange();return i.setStart(...Array.from(n||[])),i.setEnd(...Array.from(r||[])),i}}getLocationAtPoint(e){const n=this.createDOMRangeFromPoint(e);var r;if(n)return(r=this.createLocationRangeFromDOMRange(n))===null||r===void 0?void 0:r[0]}domRangeWithinElement(e){return e.collapsed?Zt(this.element,e.startContainer):Zt(this.element,e.startContainer)&&Zt(this.element,e.endContainer)}}Xt.proxyMethod("locationMapper.findLocationFromContainerAndOffset"),Xt.proxyMethod("locationMapper.findContainerAndOffsetFromLocation"),Xt.proxyMethod("locationMapper.findNodeAndOffsetFromLocation"),Xt.proxyMethod("pointMapper.createDOMRangeFromPoint"),Xt.proxyMethod("pointMapper.getClientRectsForDOMRange");var Ts=Object.freeze({__proto__:null,Attachment:xn,AttachmentManager:ys,AttachmentPiece:En,Block:yt,Composition:zt,Document:ot,Editor:Es,HTMLParser:qn,HTMLSanitizer:Ba,LineBreakInsertion:ks,LocationMapper:Ls,ManagedAttachment:ze,Piece:dn,PointMapper:Ss,SelectionManager:Xt,SplittableList:gr,StringPiece:Ta,Text:dt,UndoManager:si}),qm=Object.freeze({__proto__:null,ObjectView:un,AttachmentView:Sa,BlockView:ms,DocumentView:xr,PieceView:vs,PreviewableAttachmentView:fs,TextView:gs});const{lang:qr,css:Yt,keyNames:Km}=Xn,Kr=function(t){return function(){const e=t.apply(this,arguments);e.do(),this.undos||(this.undos=[]),this.undos.push(e.undo)}};class Bs extends Ue{constructor(e,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(...arguments),it(this,"makeElementMutable",Kr(()=>({do:()=>{this.element.dataset.trixMutable=!0},undo:()=>delete this.element.dataset.trixMutable}))),it(this,"addToolbar",Kr(()=>{const l=ge({tagName:"div",className:Yt.attachmentToolbar,data:{trixMutable:!0},childNodes:ge({tagName:"div",className:"trix-button-row",childNodes:ge({tagName:"span",className:"trix-button-group trix-button-group--actions",childNodes:ge({tagName:"button",className:"trix-button trix-button--remove",textContent:qr.remove,attributes:{title:qr.remove},data:{trixAction:"remove"}})})})});return this.attachment.isPreviewable()&&l.appendChild(ge({tagName:"div",className:Yt.attachmentMetadataContainer,childNodes:ge({tagName:"span",className:Yt.attachmentMetadata,childNodes:[ge({tagName:"span",className:Yt.attachmentName,textContent:this.attachment.getFilename(),attributes:{title:this.attachment.getFilename()}}),ge({tagName:"span",className:Yt.attachmentSize,textContent:this.attachment.getFormattedFilesize()})]})})),Me("click",{onElement:l,withCallback:this.didClickToolbar}),Me("click",{onElement:l,matchingSelector:"[data-trix-action]",withCallback:this.didClickActionButton}),Mn("trix-attachment-before-toolbar",{onElement:this.element,attributes:{toolbar:l,attachment:this.attachment}}),{do:()=>this.element.appendChild(l),undo:()=>Vt(l)}})),it(this,"installCaptionEditor",Kr(()=>{const l=ge({tagName:"textarea",className:Yt.attachmentCaptionEditor,attributes:{placeholder:qr.captionPlaceholder},data:{trixMutable:!0}});l.value=this.attachmentPiece.getCaption();const a=l.cloneNode();a.classList.add("trix-autoresize-clone"),a.tabIndex=-1;const o=function(){a.value=l.value,l.style.height=a.scrollHeight+"px"};Me("input",{onElement:l,withCallback:o}),Me("input",{onElement:l,withCallback:this.didInputCaption}),Me("keydown",{onElement:l,withCallback:this.didKeyDownCaption}),Me("change",{onElement:l,withCallback:this.didChangeCaption}),Me("blur",{onElement:l,withCallback:this.didBlurCaption});const s=this.element.querySelector("figcaption"),u=s.cloneNode();return{do:()=>{if(s.style.display="none",u.appendChild(l),u.appendChild(a),u.classList.add("".concat(Yt.attachmentCaption,"--editing")),s.parentElement.insertBefore(u,s),o(),this.options.editCaption)return Aa(()=>l.focus())},undo(){Vt(u),s.style.display=null}}})),this.didClickToolbar=this.didClickToolbar.bind(this),this.didClickActionButton=this.didClickActionButton.bind(this),this.didKeyDownCaption=this.didKeyDownCaption.bind(this),this.didInputCaption=this.didInputCaption.bind(this),this.didChangeCaption=this.didChangeCaption.bind(this),this.didBlurCaption=this.didBlurCaption.bind(this),this.attachmentPiece=e,this.element=n,this.container=r,this.options=i,this.attachment=this.attachmentPiece.attachment,Ze(this.element)==="a"&&(this.element=this.element.firstChild),this.install()}install(){this.makeElementMutable(),this.addToolbar(),this.attachment.isPreviewable()&&this.installCaptionEditor()}uninstall(){var e;let n=this.undos.pop();for(this.savePendingCaption();n;)n(),n=this.undos.pop();(e=this.delegate)===null||e===void 0||e.didUninstallAttachmentEditor(this)}savePendingCaption(){if(this.pendingCaption!=null){const l=this.pendingCaption;var e,n,r,i;this.pendingCaption=null,l?(e=this.delegate)===null||e===void 0||(n=e.attachmentEditorDidRequestUpdatingAttributesForAttachment)===null||n===void 0||n.call(e,{caption:l},this.attachment):(r=this.delegate)===null||r===void 0||(i=r.attachmentEditorDidRequestRemovingAttributeForAttachment)===null||i===void 0||i.call(r,"caption",this.attachment)}}didClickToolbar(e){return e.preventDefault(),e.stopPropagation()}didClickActionButton(e){var n;if(e.target.getAttribute("data-trix-action")==="remove")return(n=this.delegate)===null||n===void 0?void 0:n.attachmentEditorDidRequestRemovalOfAttachment(this.attachment)}didKeyDownCaption(e){var n,r;if(Km[e.keyCode]==="return")return e.preventDefault(),this.savePendingCaption(),(n=this.delegate)===null||n===void 0||(r=n.attachmentEditorDidRequestDeselectingAttachment)===null||r===void 0?void 0:r.call(n,this.attachment)}didInputCaption(e){this.pendingCaption=e.target.value.replace(/\s/g," ").trim()}didChangeCaption(e){return this.savePendingCaption()}didBlurCaption(e){return this.savePendingCaption()}}class Is extends Ue{constructor(e,n){super(...arguments),this.didFocus=this.didFocus.bind(this),this.didBlur=this.didBlur.bind(this),this.didClickAttachment=this.didClickAttachment.bind(this),this.element=e,this.composition=n,this.documentView=new xr(this.composition.document,{element:this.element}),Me("focus",{onElement:this.element,withCallback:this.didFocus}),Me("blur",{onElement:this.element,withCallback:this.didBlur}),Me("click",{onElement:this.element,matchingSelector:"a[contenteditable=false]",preventDefault:!0}),Me("mousedown",{onElement:this.element,matchingSelector:tn,withCallback:this.didClickAttachment}),Me("click",{onElement:this.element,matchingSelector:"a".concat(tn),preventDefault:!0})}didFocus(e){var n;const r=()=>{var i,l;if(!this.focused)return this.focused=!0,(i=this.delegate)===null||i===void 0||(l=i.compositionControllerDidFocus)===null||l===void 0?void 0:l.call(i)};return((n=this.blurPromise)===null||n===void 0?void 0:n.then(r))||r()}didBlur(e){this.blurPromise=new Promise(n=>Aa(()=>{var r,i;return ya(this.element)||(this.focused=null,(r=this.delegate)===null||r===void 0||(i=r.compositionControllerDidBlur)===null||i===void 0||i.call(r)),this.blurPromise=null,n()}))}didClickAttachment(e,n){var r,i;const l=this.findAttachmentForElement(n),a=!!Ut(e.target,{matchingSelector:"figcaption"});return(r=this.delegate)===null||r===void 0||(i=r.compositionControllerDidSelectAttachment)===null||i===void 0?void 0:i.call(r,l,{editCaption:a})}getSerializableElement(){return this.isEditingAttachment()?this.documentView.shadowElement:this.element}render(){var e,n,r,i,l,a;return this.revision!==this.composition.revision&&(this.documentView.setDocument(this.composition.document),this.documentView.render(),this.revision=this.composition.revision),this.canSyncDocumentView()&&!this.documentView.isSynced()&&((r=this.delegate)===null||r===void 0||(i=r.compositionControllerWillSyncDocumentView)===null||i===void 0||i.call(r),this.documentView.sync(),(l=this.delegate)===null||l===void 0||(a=l.compositionControllerDidSyncDocumentView)===null||a===void 0||a.call(l)),(e=this.delegate)===null||e===void 0||(n=e.compositionControllerDidRender)===null||n===void 0?void 0:n.call(e)}rerenderViewForObject(e){return this.invalidateViewForObject(e),this.render()}invalidateViewForObject(e){return this.documentView.invalidateViewForObject(e)}isViewCachingEnabled(){return this.documentView.isViewCachingEnabled()}enableViewCaching(){return this.documentView.enableViewCaching()}disableViewCaching(){return this.documentView.disableViewCaching()}refreshViewCache(){return this.documentView.garbageCollectCachedViews()}isEditingAttachment(){return!!this.attachmentEditor}installAttachmentEditorForAttachment(e,n){var r;if(((r=this.attachmentEditor)===null||r===void 0?void 0:r.attachment)===e)return;const i=this.documentView.findElementForObject(e);if(!i)return;this.uninstallAttachmentEditor();const l=this.composition.document.getAttachmentPieceForAttachment(e);this.attachmentEditor=new Bs(l,i,this.element,n),this.attachmentEditor.delegate=this}uninstallAttachmentEditor(){var e;return(e=this.attachmentEditor)===null||e===void 0?void 0:e.uninstall()}didUninstallAttachmentEditor(){return this.attachmentEditor=null,this.render()}attachmentEditorDidRequestUpdatingAttributesForAttachment(e,n){var r,i;return(r=this.delegate)===null||r===void 0||(i=r.compositionControllerWillUpdateAttachment)===null||i===void 0||i.call(r,n),this.composition.updateAttributesForAttachment(e,n)}attachmentEditorDidRequestRemovingAttributeForAttachment(e,n){var r,i;return(r=this.delegate)===null||r===void 0||(i=r.compositionControllerWillUpdateAttachment)===null||i===void 0||i.call(r,n),this.composition.removeAttributeForAttachment(e,n)}attachmentEditorDidRequestRemovalOfAttachment(e){var n,r;return(n=this.delegate)===null||n===void 0||(r=n.compositionControllerDidRequestRemovalOfAttachment)===null||r===void 0?void 0:r.call(n,e)}attachmentEditorDidRequestDeselectingAttachment(e){var n,r;return(n=this.delegate)===null||n===void 0||(r=n.compositionControllerDidRequestDeselectingAttachment)===null||r===void 0?void 0:r.call(n,e)}canSyncDocumentView(){return!this.isEditingAttachment()}findAttachmentForElement(e){return this.composition.document.getAttachmentById(parseInt(e.dataset.trixId,10))}}class Rs extends Ue{}const Ds="data-trix-mutable",Jm="[".concat(Ds,"]"),_m={attributes:!0,childList:!0,characterData:!0,characterDataOldValue:!0,subtree:!0};class Ms extends Ue{constructor(e){super(e),this.didMutate=this.didMutate.bind(this),this.element=e,this.observer=new window.MutationObserver(this.didMutate),this.start()}start(){return this.reset(),this.observer.observe(this.element,_m)}stop(){return this.observer.disconnect()}didMutate(e){var n,r;if(this.mutations.push(...Array.from(this.findSignificantMutations(e)||[])),this.mutations.length)return(n=this.delegate)===null||n===void 0||(r=n.elementDidMutate)===null||r===void 0||r.call(n,this.getMutationSummary()),this.reset()}reset(){this.mutations=[]}findSignificantMutations(e){return e.filter(n=>this.mutationIsSignificant(n))}mutationIsSignificant(e){if(this.nodeIsMutable(e.target))return!1;for(const n of Array.from(this.nodesModifiedByMutation(e)))if(this.nodeIsSignificant(n))return!0;return!1}nodeIsSignificant(e){return e!==this.element&&!this.nodeIsMutable(e)&&!is(e)}nodeIsMutable(e){return Ut(e,{matchingSelector:Jm})}nodesModifiedByMutation(e){const n=[];switch(e.type){case"attributes":e.attributeName!==Ds&&n.push(e.target);break;case"characterData":n.push(e.target.parentNode),n.push(e.target);break;case"childList":n.push(...Array.from(e.addedNodes||[])),n.push(...Array.from(e.removedNodes||[]))}return n}getMutationSummary(){return this.getTextMutationSummary()}getTextMutationSummary(){const{additions:e,deletions:n}=this.getTextChangesFromCharacterData(),r=this.getTextChangesFromChildList();Array.from(r.additions).forEach(o=>{Array.from(e).includes(o)||e.push(o)}),n.push(...Array.from(r.deletions||[]));const i={},l=e.join("");l&&(i.textAdded=l);const a=n.join("");return a&&(i.textDeleted=a),i}getMutationsByType(e){return Array.from(this.mutations).filter(n=>n.type===e)}getTextChangesFromChildList(){let e,n;const r=[],i=[];return Array.from(this.getMutationsByType("childList")).forEach(l=>{r.push(...Array.from(l.addedNodes||[])),i.push(...Array.from(l.removedNodes||[]))}),r.length===0&&i.length===1&&bn(i[0])?(e=[],n=[`
`]):(e=ui(r),n=ui(i)),{additions:e.filter((l,a)=>l!==n[a]).map(Rn),deletions:n.filter((l,a)=>l!==e[a]).map(Rn)}}getTextChangesFromCharacterData(){let e,n;const r=this.getMutationsByType("characterData");if(r.length){const i=r[0],l=r[r.length-1],a=function(o,s){let u,c;return o=Qn.box(o),(s=Qn.box(s)).length<o.length?[c,u]=rl(o,s):[u,c]=rl(s,o),{added:u,removed:c}}(Rn(i.oldValue),Rn(l.target.data));e=a.added,n=a.removed}return{additions:e?[e]:[],deletions:n?[n]:[]}}}const ui=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];const e=[];for(const n of Array.from(t))switch(n.nodeType){case Node.TEXT_NODE:e.push(n.data);break;case Node.ELEMENT_NODE:Ze(n)==="br"?e.push(`
`):e.push(...Array.from(ui(n.childNodes)||[]))}return e};class Os extends vr{constructor(e){super(...arguments),this.file=e}perform(e){const n=new FileReader;return n.onerror=()=>e(!1),n.onload=()=>{n.onerror=null;try{n.abort()}catch{}return e(!0,this.file)},n.readAsArrayBuffer(this.file)}}class Gm{constructor(e){this.element=e}shouldIgnore(e){return!!Yn.samsungAndroid&&(this.previousEvent=this.event,this.event=e,this.checkSamsungKeyboardBuggyModeStart(),this.checkSamsungKeyboardBuggyModeEnd(),this.buggyMode)}checkSamsungKeyboardBuggyModeStart(){this.insertingLongTextAfterUnidentifiedChar()&&Ym(this.element.innerText,this.event.data)&&(this.buggyMode=!0,this.event.preventDefault())}checkSamsungKeyboardBuggyModeEnd(){this.buggyMode&&this.event.inputType!=="insertText"&&(this.buggyMode=!1)}insertingLongTextAfterUnidentifiedChar(){var e;return this.isBeforeInputInsertText()&&this.previousEventWasUnidentifiedKeydown()&&((e=this.event.data)===null||e===void 0?void 0:e.length)>50}isBeforeInputInsertText(){return this.event.type==="beforeinput"&&this.event.inputType==="insertText"}previousEventWasUnidentifiedKeydown(){var e,n;return((e=this.previousEvent)===null||e===void 0?void 0:e.type)==="keydown"&&((n=this.previousEvent)===null||n===void 0?void 0:n.key)==="Unidentified"}}const Ym=(t,e)=>ml(t)===ml(e),Xm=new RegExp("(".concat("￼","|").concat(Lr,"|").concat(Nt,"|\\s)+"),"g"),ml=t=>t.replace(Xm," ").trim();class Sr extends Ue{constructor(e){super(...arguments),this.element=e,this.mutationObserver=new Ms(this.element),this.mutationObserver.delegate=this,this.flakyKeyboardDetector=new Gm(this.element);for(const n in this.constructor.events)Me(n,{onElement:this.element,withCallback:this.handlerFor(n)})}elementDidMutate(e){}editorWillSyncDocumentView(){return this.mutationObserver.stop()}editorDidSyncDocumentView(){return this.mutationObserver.start()}requestRender(){var e,n;return(e=this.delegate)===null||e===void 0||(n=e.inputControllerDidRequestRender)===null||n===void 0?void 0:n.call(e)}requestReparse(){var e,n;return(e=this.delegate)===null||e===void 0||(n=e.inputControllerDidRequestReparse)===null||n===void 0||n.call(e),this.requestRender()}attachFiles(e){const n=Array.from(e).map(r=>new Os(r));return Promise.all(n).then(r=>{this.handleInput(function(){var i,l;return(i=this.delegate)===null||i===void 0||i.inputControllerWillAttachFiles(),(l=this.responder)===null||l===void 0||l.insertFiles(r),this.requestRender()})})}handlerFor(e){return n=>{n.defaultPrevented||this.handleInput(()=>{if(!ya(this.element)){if(this.flakyKeyboardDetector.shouldIgnore(n))return;this.eventName=e,this.constructor.events[e].call(this,n)}})}}handleInput(e){try{var n;(n=this.delegate)===null||n===void 0||n.inputControllerWillHandleInput(),e.call(this)}finally{var r;(r=this.delegate)===null||r===void 0||r.inputControllerDidHandleInput()}}createLinkHTML(e,n){const r=document.createElement("a");return r.href=e,r.textContent=n||e,r.outerHTML}}var Jr;it(Sr,"events",{});const{browser:Zm,keyNames:Fs}=Xn;let eh=0;class Lt extends Sr{constructor(){super(...arguments),this.resetInputSummary()}setInputSummary(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.inputSummary.eventName=this.eventName;for(const n in e){const r=e[n];this.inputSummary[n]=r}return this.inputSummary}resetInputSummary(){this.inputSummary={}}reset(){return this.resetInputSummary(),on.reset()}elementDidMutate(e){var n,r;return this.isComposing()?(n=this.delegate)===null||n===void 0||(r=n.inputControllerDidAllowUnhandledInput)===null||r===void 0?void 0:r.call(n):this.handleInput(function(){return this.mutationIsSignificant(e)&&(this.mutationIsExpected(e)?this.requestRender():this.requestReparse()),this.reset()})}mutationIsExpected(e){let{textAdded:n,textDeleted:r}=e;if(this.inputSummary.preferDocument)return!0;const i=n!=null?n===this.inputSummary.textAdded:!this.inputSummary.textAdded,l=r!=null?this.inputSummary.didDelete:!this.inputSummary.didDelete,a=[`
`,` 
`].includes(n)&&!i,o=r===`
`&&!l;if(a&&!o||o&&!a){const u=this.getSelectedRange();if(u){var s;const c=a?n.replace(/\n$/,"").length||-1:(n==null?void 0:n.length)||1;if((s=this.responder)!==null&&s!==void 0&&s.positionIsBlockBreak(u[1]+c))return!0}}return i&&l}mutationIsSignificant(e){var n;const r=Object.keys(e).length>0,i=((n=this.compositionInput)===null||n===void 0?void 0:n.getEndData())==="";return r||!i}getCompositionInput(){if(this.isComposing())return this.compositionInput;this.compositionInput=new Pt(this)}isComposing(){return this.compositionInput&&!this.compositionInput.isEnded()}deleteInDirection(e,n){var r;return((r=this.responder)===null||r===void 0?void 0:r.deleteInDirection(e))!==!1?this.setInputSummary({didDelete:!0}):n?(n.preventDefault(),this.requestRender()):void 0}serializeSelectionToDataTransfer(e){var n;if(!function(i){if(i==null||!i.setData)return!1;for(const l in el){const a=el[l];try{if(i.setData(l,a),!i.getData(l)===a)return!1}catch{return!1}}return!0}(e))return;const r=(n=this.responder)===null||n===void 0?void 0:n.getSelectedDocument().toSerializableDocument();return e.setData("application/x-trix-document",JSON.stringify(r)),e.setData("text/html",xr.render(r).innerHTML),e.setData("text/plain",r.toString().replace(/\n$/,"")),!0}canAcceptDataTransfer(e){const n={};return Array.from((e==null?void 0:e.types)||[]).forEach(r=>{n[r]=!0}),n.Files||n["application/x-trix-document"]||n["text/html"]||n["text/plain"]}getPastedHTMLUsingHiddenElement(e){const n=this.getSelectedRange(),r={position:"absolute",left:"".concat(window.pageXOffset,"px"),top:"".concat(window.pageYOffset,"px"),opacity:0},i=ge({style:r,tagName:"div",editable:!0});return document.body.appendChild(i),i.focus(),requestAnimationFrame(()=>{const l=i.innerHTML;return Vt(i),this.setSelectedRange(n),e(l)})}}it(Lt,"events",{keydown(t){this.isComposing()||this.resetInputSummary(),this.inputSummary.didInput=!0;const e=Fs[t.keyCode];if(e){var n;let i=this.keys;["ctrl","alt","shift","meta"].forEach(l=>{var a;t["".concat(l,"Key")]&&(l==="ctrl"&&(l="control"),i=(a=i)===null||a===void 0?void 0:a[l])}),((n=i)===null||n===void 0?void 0:n[e])!=null&&(this.setInputSummary({keyName:e}),on.reset(),i[e].call(this,t))}if(ss(t)){const i=String.fromCharCode(t.keyCode).toLowerCase();if(i){var r;const l=["alt","shift"].map(a=>{if(t["".concat(a,"Key")])return a}).filter(a=>a);l.push(i),(r=this.delegate)!==null&&r!==void 0&&r.inputControllerDidReceiveKeyboardCommand(l)&&t.preventDefault()}}},keypress(t){if(this.inputSummary.eventName!=null||t.metaKey||t.ctrlKey&&!t.altKey)return;const e=rh(t);var n,r;return e?((n=this.delegate)===null||n===void 0||n.inputControllerWillPerformTyping(),(r=this.responder)===null||r===void 0||r.insertString(e),this.setInputSummary({textAdded:e,didDelete:this.selectionIsExpanded()})):void 0},textInput(t){const{data:e}=t,{textAdded:n}=this.inputSummary;if(n&&n!==e&&n.toUpperCase()===e){var r;const i=this.getSelectedRange();return this.setSelectedRange([i[0],i[1]+n.length]),(r=this.responder)===null||r===void 0||r.insertString(e),this.setInputSummary({textAdded:e}),this.setSelectedRange(i)}},dragenter(t){t.preventDefault()},dragstart(t){var e,n;return this.serializeSelectionToDataTransfer(t.dataTransfer),this.draggedRange=this.getSelectedRange(),(e=this.delegate)===null||e===void 0||(n=e.inputControllerDidStartDrag)===null||n===void 0?void 0:n.call(e)},dragover(t){if(this.draggedRange||this.canAcceptDataTransfer(t.dataTransfer)){t.preventDefault();const r={x:t.clientX,y:t.clientY};var e,n;if(!Ln(r,this.draggingPoint))return this.draggingPoint=r,(e=this.delegate)===null||e===void 0||(n=e.inputControllerDidReceiveDragOverPoint)===null||n===void 0?void 0:n.call(e,this.draggingPoint)}},dragend(t){var e,n;(e=this.delegate)===null||e===void 0||(n=e.inputControllerDidCancelDrag)===null||n===void 0||n.call(e),this.draggedRange=null,this.draggingPoint=null},drop(t){var e,n;t.preventDefault();const r=(e=t.dataTransfer)===null||e===void 0?void 0:e.files,i=t.dataTransfer.getData("application/x-trix-document"),l={x:t.clientX,y:t.clientY};if((n=this.responder)===null||n===void 0||n.setLocationRangeFromPointRange(l),r!=null&&r.length)this.attachFiles(r);else if(this.draggedRange){var a,o;(a=this.delegate)===null||a===void 0||a.inputControllerWillMoveText(),(o=this.responder)===null||o===void 0||o.moveTextFromRange(this.draggedRange),this.draggedRange=null,this.requestRender()}else if(i){var s;const u=ot.fromJSONString(i);(s=this.responder)===null||s===void 0||s.insertDocument(u),this.requestRender()}this.draggedRange=null,this.draggingPoint=null},cut(t){var e,n;if((e=this.responder)!==null&&e!==void 0&&e.selectionIsExpanded()&&(this.serializeSelectionToDataTransfer(t.clipboardData)&&t.preventDefault(),(n=this.delegate)===null||n===void 0||n.inputControllerWillCutText(),this.deleteInDirection("backward"),t.defaultPrevented))return this.requestRender()},copy(t){var e;(e=this.responder)!==null&&e!==void 0&&e.selectionIsExpanded()&&this.serializeSelectionToDataTransfer(t.clipboardData)&&t.preventDefault()},paste(t){const e=t.clipboardData||t.testClipboardData,n={clipboard:e};if(!e||ih(t))return void this.getPastedHTMLUsingHiddenElement($=>{var Q,R,_;return n.type="text/html",n.html=$,(Q=this.delegate)===null||Q===void 0||Q.inputControllerWillPaste(n),(R=this.responder)===null||R===void 0||R.insertHTML(n.html),this.requestRender(),(_=this.delegate)===null||_===void 0?void 0:_.inputControllerDidPaste(n)});const r=e.getData("URL"),i=e.getData("text/html"),l=e.getData("public.url-name");if(r){var a,o,s;let $;n.type="text/html",$=l?La(l).trim():r,n.html=this.createLinkHTML(r,$),(a=this.delegate)===null||a===void 0||a.inputControllerWillPaste(n),this.setInputSummary({textAdded:$,didDelete:this.selectionIsExpanded()}),(o=this.responder)===null||o===void 0||o.insertHTML(n.html),this.requestRender(),(s=this.delegate)===null||s===void 0||s.inputControllerDidPaste(n)}else if(os(e)){var u,c,A;n.type="text/plain",n.string=e.getData("text/plain"),(u=this.delegate)===null||u===void 0||u.inputControllerWillPaste(n),this.setInputSummary({textAdded:n.string,didDelete:this.selectionIsExpanded()}),(c=this.responder)===null||c===void 0||c.insertString(n.string),this.requestRender(),(A=this.delegate)===null||A===void 0||A.inputControllerDidPaste(n)}else if(i){var k,x,y;n.type="text/html",n.html=i,(k=this.delegate)===null||k===void 0||k.inputControllerWillPaste(n),(x=this.responder)===null||x===void 0||x.insertHTML(n.html),this.requestRender(),(y=this.delegate)===null||y===void 0||y.inputControllerDidPaste(n)}else if(Array.from(e.types).includes("Files")){var C,S;const $=(C=e.items)===null||C===void 0||(C=C[0])===null||C===void 0||(S=C.getAsFile)===null||S===void 0?void 0:S.call(C);if($){var B,M,E;const Q=th($);!$.name&&Q&&($.name="pasted-file-".concat(++eh,".").concat(Q)),n.type="File",n.file=$,(B=this.delegate)===null||B===void 0||B.inputControllerWillAttachFiles(),(M=this.responder)===null||M===void 0||M.insertFile(n.file),this.requestRender(),(E=this.delegate)===null||E===void 0||E.inputControllerDidPaste(n)}}t.preventDefault()},compositionstart(t){return this.getCompositionInput().start(t.data)},compositionupdate(t){return this.getCompositionInput().update(t.data)},compositionend(t){return this.getCompositionInput().end(t.data)},beforeinput(t){this.inputSummary.didInput=!0},input(t){return this.inputSummary.didInput=!0,t.stopPropagation()}}),it(Lt,"keys",{backspace(t){var e;return(e=this.delegate)===null||e===void 0||e.inputControllerWillPerformTyping(),this.deleteInDirection("backward",t)},delete(t){var e;return(e=this.delegate)===null||e===void 0||e.inputControllerWillPerformTyping(),this.deleteInDirection("forward",t)},return(t){var e,n;return this.setInputSummary({preferDocument:!0}),(e=this.delegate)===null||e===void 0||e.inputControllerWillPerformTyping(),(n=this.responder)===null||n===void 0?void 0:n.insertLineBreak()},tab(t){var e,n;(e=this.responder)!==null&&e!==void 0&&e.canIncreaseNestingLevel()&&((n=this.responder)===null||n===void 0||n.increaseNestingLevel(),this.requestRender(),t.preventDefault())},left(t){var e;if(this.selectionIsInCursorTarget())return t.preventDefault(),(e=this.responder)===null||e===void 0?void 0:e.moveCursorInDirection("backward")},right(t){var e;if(this.selectionIsInCursorTarget())return t.preventDefault(),(e=this.responder)===null||e===void 0?void 0:e.moveCursorInDirection("forward")},control:{d(t){var e;return(e=this.delegate)===null||e===void 0||e.inputControllerWillPerformTyping(),this.deleteInDirection("forward",t)},h(t){var e;return(e=this.delegate)===null||e===void 0||e.inputControllerWillPerformTyping(),this.deleteInDirection("backward",t)},o(t){var e,n;return t.preventDefault(),(e=this.delegate)===null||e===void 0||e.inputControllerWillPerformTyping(),(n=this.responder)===null||n===void 0||n.insertString(`
`,{updatePosition:!1}),this.requestRender()}},shift:{return(t){var e,n;(e=this.delegate)===null||e===void 0||e.inputControllerWillPerformTyping(),(n=this.responder)===null||n===void 0||n.insertString(`
`),this.requestRender(),t.preventDefault()},tab(t){var e,n;(e=this.responder)!==null&&e!==void 0&&e.canDecreaseNestingLevel()&&((n=this.responder)===null||n===void 0||n.decreaseNestingLevel(),this.requestRender(),t.preventDefault())},left(t){if(this.selectionIsInCursorTarget())return t.preventDefault(),this.expandSelectionInDirection("backward")},right(t){if(this.selectionIsInCursorTarget())return t.preventDefault(),this.expandSelectionInDirection("forward")}},alt:{backspace(t){var e;return this.setInputSummary({preferDocument:!1}),(e=this.delegate)===null||e===void 0?void 0:e.inputControllerWillPerformTyping()}},meta:{backspace(t){var e;return this.setInputSummary({preferDocument:!1}),(e=this.delegate)===null||e===void 0?void 0:e.inputControllerWillPerformTyping()}}}),Lt.proxyMethod("responder?.getSelectedRange"),Lt.proxyMethod("responder?.setSelectedRange"),Lt.proxyMethod("responder?.expandSelectionInDirection"),Lt.proxyMethod("responder?.selectionIsInCursorTarget"),Lt.proxyMethod("responder?.selectionIsExpanded");const th=t=>{var e;return(e=t.type)===null||e===void 0||(e=e.match(/\/(\w+)$/))===null||e===void 0?void 0:e[1]},nh=!((Jr=" ".codePointAt)===null||Jr===void 0||!Jr.call(" ",0)),rh=function(t){if(t.key&&nh&&t.key.codePointAt(0)===t.keyCode)return t.key;{let e;if(t.which===null?e=t.keyCode:t.which!==0&&t.charCode!==0&&(e=t.charCode),e!=null&&Fs[e]!=="escape")return Qn.fromCodepoints([e]).toString()}},ih=function(t){const e=t.clipboardData;if(e){if(e.types.includes("text/html")){for(const n of e.types){const r=/^CorePasteboardFlavorType/.test(n),i=/^dyn\./.test(n)&&e.getData(n);if(r||i)return!0}return!1}{const n=e.types.includes("com.apple.webarchive"),r=e.types.includes("com.apple.flat-rtfd");return n||r}}};class Pt extends Ue{constructor(e){super(...arguments),this.inputController=e,this.responder=this.inputController.responder,this.delegate=this.inputController.delegate,this.inputSummary=this.inputController.inputSummary,this.data={}}start(e){if(this.data.start=e,this.isSignificant()){var n,r;this.inputSummary.eventName==="keypress"&&this.inputSummary.textAdded&&((r=this.responder)===null||r===void 0||r.deleteInDirection("left")),this.selectionIsExpanded()||(this.insertPlaceholder(),this.requestRender()),this.range=(n=this.responder)===null||n===void 0?void 0:n.getSelectedRange()}}update(e){if(this.data.update=e,this.isSignificant()){const n=this.selectPlaceholder();n&&(this.forgetPlaceholder(),this.range=n)}}end(e){return this.data.end=e,this.isSignificant()?(this.forgetPlaceholder(),this.canApplyToDocument()?(this.setInputSummary({preferDocument:!0,didInput:!1}),(n=this.delegate)===null||n===void 0||n.inputControllerWillPerformTyping(),(r=this.responder)===null||r===void 0||r.setSelectedRange(this.range),(i=this.responder)===null||i===void 0||i.insertString(this.data.end),(l=this.responder)===null||l===void 0?void 0:l.setSelectedRange(this.range[0]+this.data.end.length)):this.data.start!=null||this.data.update!=null?(this.requestReparse(),this.inputController.reset()):void 0):this.inputController.reset();var n,r,i,l}getEndData(){return this.data.end}isEnded(){return this.getEndData()!=null}isSignificant(){return!Zm.composesExistingText||this.inputSummary.didInput}canApplyToDocument(){var e,n;return((e=this.data.start)===null||e===void 0?void 0:e.length)===0&&((n=this.data.end)===null||n===void 0?void 0:n.length)>0&&this.range}}Pt.proxyMethod("inputController.setInputSummary"),Pt.proxyMethod("inputController.requestRender"),Pt.proxyMethod("inputController.requestReparse"),Pt.proxyMethod("responder?.selectionIsExpanded"),Pt.proxyMethod("responder?.insertPlaceholder"),Pt.proxyMethod("responder?.selectPlaceholder"),Pt.proxyMethod("responder?.forgetPlaceholder");class $n extends Sr{constructor(){super(...arguments),this.render=this.render.bind(this)}elementDidMutate(){return this.scheduledRender?this.composing?(e=this.delegate)===null||e===void 0||(n=e.inputControllerDidAllowUnhandledInput)===null||n===void 0?void 0:n.call(e):void 0:this.reparse();var e,n}scheduleRender(){return this.scheduledRender?this.scheduledRender:this.scheduledRender=requestAnimationFrame(this.render)}render(){var e,n;cancelAnimationFrame(this.scheduledRender),this.scheduledRender=null,this.composing||(n=this.delegate)===null||n===void 0||n.render(),(e=this.afterRender)===null||e===void 0||e.call(this),this.afterRender=null}reparse(){var e;return(e=this.delegate)===null||e===void 0?void 0:e.reparse()}insertString(){var e;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",r=arguments.length>1?arguments[1]:void 0;return(e=this.delegate)===null||e===void 0||e.inputControllerWillPerformTyping(),this.withTargetDOMRange(function(){var i;return(i=this.responder)===null||i===void 0?void 0:i.insertString(n,r)})}toggleAttributeIfSupported(e){var n;if(ii().includes(e))return(n=this.delegate)===null||n===void 0||n.inputControllerWillPerformFormatting(e),this.withTargetDOMRange(function(){var r;return(r=this.responder)===null||r===void 0?void 0:r.toggleCurrentAttribute(e)})}activateAttributeIfSupported(e,n){var r;if(ii().includes(e))return(r=this.delegate)===null||r===void 0||r.inputControllerWillPerformFormatting(e),this.withTargetDOMRange(function(){var i;return(i=this.responder)===null||i===void 0?void 0:i.setCurrentAttribute(e,n)})}deleteInDirection(e){let{recordUndoEntry:n}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{recordUndoEntry:!0};var r;n&&((r=this.delegate)===null||r===void 0||r.inputControllerWillPerformTyping());const i=()=>{var a;return(a=this.responder)===null||a===void 0?void 0:a.deleteInDirection(e)},l=this.getTargetDOMRange({minLength:2});return l?this.withTargetDOMRange(l,i):i()}withTargetDOMRange(e,n){var r;return typeof e=="function"&&(n=e,e=this.getTargetDOMRange()),e?(r=this.responder)===null||r===void 0?void 0:r.withTargetDOMRange(e,n.bind(this)):(on.reset(),n.call(this))}getTargetDOMRange(){var e,n;let{minLength:r}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{minLength:0};const i=(e=(n=this.event).getTargetRanges)===null||e===void 0?void 0:e.call(n);if(i&&i.length){const l=ah(i[0]);if(r===0||l.toString().length>=r)return l}}withEvent(e,n){let r;this.event=e;try{r=n.call(this)}finally{this.event=null}return r}}it($n,"events",{keydown(t){if(ss(t)){var e;const n=sh(t);(e=this.delegate)!==null&&e!==void 0&&e.inputControllerDidReceiveKeyboardCommand(n)&&t.preventDefault()}else{let n=t.key;t.altKey&&(n+="+Alt"),t.shiftKey&&(n+="+Shift");const r=this.constructor.keys[n];if(r)return this.withEvent(t,r)}},paste(t){var e;let n;const r=(e=t.clipboardData)===null||e===void 0?void 0:e.getData("URL");return lh(t)?(t.preventDefault(),this.attachFiles(t.clipboardData.files)):oh(t)?(t.preventDefault(),n={type:"text/plain",string:t.clipboardData.getData("text/plain")},(i=this.delegate)===null||i===void 0||i.inputControllerWillPaste(n),(l=this.responder)===null||l===void 0||l.insertString(n.string),this.render(),(a=this.delegate)===null||a===void 0?void 0:a.inputControllerDidPaste(n)):r?(t.preventDefault(),n={type:"text/html",html:this.createLinkHTML(r)},(o=this.delegate)===null||o===void 0||o.inputControllerWillPaste(n),(s=this.responder)===null||s===void 0||s.insertHTML(n.html),this.render(),(u=this.delegate)===null||u===void 0?void 0:u.inputControllerDidPaste(n)):void 0;var i,l,a,o,s,u},beforeinput(t){const e=this.constructor.inputTypes[t.inputType];e&&(this.withEvent(t,e),this.scheduleRender())},input(t){on.reset()},dragstart(t){var e,n;(e=this.responder)!==null&&e!==void 0&&e.selectionContainsAttachments()&&(t.dataTransfer.setData("application/x-trix-dragging",!0),this.dragging={range:(n=this.responder)===null||n===void 0?void 0:n.getSelectedRange(),point:Gr(t)})},dragenter(t){_r(t)&&t.preventDefault()},dragover(t){if(this.dragging){t.preventDefault();const n=Gr(t);var e;if(!Ln(n,this.dragging.point))return this.dragging.point=n,(e=this.responder)===null||e===void 0?void 0:e.setLocationRangeFromPointRange(n)}else _r(t)&&t.preventDefault()},drop(t){var e,n;if(this.dragging)return t.preventDefault(),(e=this.delegate)===null||e===void 0||e.inputControllerWillMoveText(),(n=this.responder)===null||n===void 0||n.moveTextFromRange(this.dragging.range),this.dragging=null,this.scheduleRender();if(_r(t)){var r;t.preventDefault();const i=Gr(t);return(r=this.responder)===null||r===void 0||r.setLocationRangeFromPointRange(i),this.attachFiles(t.dataTransfer.files)}},dragend(){var t;this.dragging&&((t=this.responder)===null||t===void 0||t.setSelectedRange(this.dragging.range),this.dragging=null)},compositionend(t){this.composing&&(this.composing=!1,Yn.recentAndroid||this.scheduleRender())}}),it($n,"keys",{ArrowLeft(){var t,e;if((t=this.responder)!==null&&t!==void 0&&t.shouldManageMovingCursorInDirection("backward"))return this.event.preventDefault(),(e=this.responder)===null||e===void 0?void 0:e.moveCursorInDirection("backward")},ArrowRight(){var t,e;if((t=this.responder)!==null&&t!==void 0&&t.shouldManageMovingCursorInDirection("forward"))return this.event.preventDefault(),(e=this.responder)===null||e===void 0?void 0:e.moveCursorInDirection("forward")},Backspace(){var t,e,n;if((t=this.responder)!==null&&t!==void 0&&t.shouldManageDeletingInDirection("backward"))return this.event.preventDefault(),(e=this.delegate)===null||e===void 0||e.inputControllerWillPerformTyping(),(n=this.responder)===null||n===void 0||n.deleteInDirection("backward"),this.render()},Tab(){var t,e;if((t=this.responder)!==null&&t!==void 0&&t.canIncreaseNestingLevel())return this.event.preventDefault(),(e=this.responder)===null||e===void 0||e.increaseNestingLevel(),this.render()},"Tab+Shift"(){var t,e;if((t=this.responder)!==null&&t!==void 0&&t.canDecreaseNestingLevel())return this.event.preventDefault(),(e=this.responder)===null||e===void 0||e.decreaseNestingLevel(),this.render()}}),it($n,"inputTypes",{deleteByComposition(){return this.deleteInDirection("backward",{recordUndoEntry:!1})},deleteByCut(){return this.deleteInDirection("backward")},deleteByDrag(){return this.event.preventDefault(),this.withTargetDOMRange(function(){var t;this.deleteByDragRange=(t=this.responder)===null||t===void 0?void 0:t.getSelectedRange()})},deleteCompositionText(){return this.deleteInDirection("backward",{recordUndoEntry:!1})},deleteContent(){return this.deleteInDirection("backward")},deleteContentBackward(){return this.deleteInDirection("backward")},deleteContentForward(){return this.deleteInDirection("forward")},deleteEntireSoftLine(){return this.deleteInDirection("forward")},deleteHardLineBackward(){return this.deleteInDirection("backward")},deleteHardLineForward(){return this.deleteInDirection("forward")},deleteSoftLineBackward(){return this.deleteInDirection("backward")},deleteSoftLineForward(){return this.deleteInDirection("forward")},deleteWordBackward(){return this.deleteInDirection("backward")},deleteWordForward(){return this.deleteInDirection("forward")},formatBackColor(){return this.activateAttributeIfSupported("backgroundColor",this.event.data)},formatBold(){return this.toggleAttributeIfSupported("bold")},formatFontColor(){return this.activateAttributeIfSupported("color",this.event.data)},formatFontName(){return this.activateAttributeIfSupported("font",this.event.data)},formatIndent(){var t;if((t=this.responder)!==null&&t!==void 0&&t.canIncreaseNestingLevel())return this.withTargetDOMRange(function(){var e;return(e=this.responder)===null||e===void 0?void 0:e.increaseNestingLevel()})},formatItalic(){return this.toggleAttributeIfSupported("italic")},formatJustifyCenter(){return this.toggleAttributeIfSupported("justifyCenter")},formatJustifyFull(){return this.toggleAttributeIfSupported("justifyFull")},formatJustifyLeft(){return this.toggleAttributeIfSupported("justifyLeft")},formatJustifyRight(){return this.toggleAttributeIfSupported("justifyRight")},formatOutdent(){var t;if((t=this.responder)!==null&&t!==void 0&&t.canDecreaseNestingLevel())return this.withTargetDOMRange(function(){var e;return(e=this.responder)===null||e===void 0?void 0:e.decreaseNestingLevel()})},formatRemove(){this.withTargetDOMRange(function(){for(const n in(t=this.responder)===null||t===void 0?void 0:t.getCurrentAttributes()){var t,e;(e=this.responder)===null||e===void 0||e.removeCurrentAttribute(n)}})},formatSetBlockTextDirection(){return this.activateAttributeIfSupported("blockDir",this.event.data)},formatSetInlineTextDirection(){return this.activateAttributeIfSupported("textDir",this.event.data)},formatStrikeThrough(){return this.toggleAttributeIfSupported("strike")},formatSubscript(){return this.toggleAttributeIfSupported("sub")},formatSuperscript(){return this.toggleAttributeIfSupported("sup")},formatUnderline(){return this.toggleAttributeIfSupported("underline")},historyRedo(){var t;return(t=this.delegate)===null||t===void 0?void 0:t.inputControllerWillPerformRedo()},historyUndo(){var t;return(t=this.delegate)===null||t===void 0?void 0:t.inputControllerWillPerformUndo()},insertCompositionText(){return this.composing=!0,this.insertString(this.event.data)},insertFromComposition(){return this.composing=!1,this.insertString(this.event.data)},insertFromDrop(){const t=this.deleteByDragRange;var e;if(t)return this.deleteByDragRange=null,(e=this.delegate)===null||e===void 0||e.inputControllerWillMoveText(),this.withTargetDOMRange(function(){var n;return(n=this.responder)===null||n===void 0?void 0:n.moveTextFromRange(t)})},insertFromPaste(){var t;const{dataTransfer:e}=this.event,n={dataTransfer:e},r=e.getData("URL"),i=e.getData("text/html");if(r){var l;let u;this.event.preventDefault(),n.type="text/html";const c=e.getData("public.url-name");u=c?La(c).trim():r,n.html=this.createLinkHTML(r,u),(l=this.delegate)===null||l===void 0||l.inputControllerWillPaste(n),this.withTargetDOMRange(function(){var A;return(A=this.responder)===null||A===void 0?void 0:A.insertHTML(n.html)}),this.afterRender=()=>{var A;return(A=this.delegate)===null||A===void 0?void 0:A.inputControllerDidPaste(n)}}else if(os(e)){var a;n.type="text/plain",n.string=e.getData("text/plain"),(a=this.delegate)===null||a===void 0||a.inputControllerWillPaste(n),this.withTargetDOMRange(function(){var u;return(u=this.responder)===null||u===void 0?void 0:u.insertString(n.string)}),this.afterRender=()=>{var u;return(u=this.delegate)===null||u===void 0?void 0:u.inputControllerDidPaste(n)}}else if(i){var o;this.event.preventDefault(),n.type="text/html",n.html=i,(o=this.delegate)===null||o===void 0||o.inputControllerWillPaste(n),this.withTargetDOMRange(function(){var u;return(u=this.responder)===null||u===void 0?void 0:u.insertHTML(n.html)}),this.afterRender=()=>{var u;return(u=this.delegate)===null||u===void 0?void 0:u.inputControllerDidPaste(n)}}else if((t=e.files)!==null&&t!==void 0&&t.length){var s;n.type="File",n.file=e.files[0],(s=this.delegate)===null||s===void 0||s.inputControllerWillPaste(n),this.withTargetDOMRange(function(){var u;return(u=this.responder)===null||u===void 0?void 0:u.insertFile(n.file)}),this.afterRender=()=>{var u;return(u=this.delegate)===null||u===void 0?void 0:u.inputControllerDidPaste(n)}}},insertFromYank(){return this.insertString(this.event.data)},insertLineBreak(){return this.insertString(`
`)},insertLink(){return this.activateAttributeIfSupported("href",this.event.data)},insertOrderedList(){return this.toggleAttributeIfSupported("number")},insertParagraph(){var t;return(t=this.delegate)===null||t===void 0||t.inputControllerWillPerformTyping(),this.withTargetDOMRange(function(){var e;return(e=this.responder)===null||e===void 0?void 0:e.insertLineBreak()})},insertReplacementText(){const t=this.event.dataTransfer.getData("text/plain"),e=this.event.getTargetRanges()[0];this.withTargetDOMRange(e,()=>{this.insertString(t,{updatePosition:!1})})},insertText(){var t;return this.insertString(this.event.data||((t=this.event.dataTransfer)===null||t===void 0?void 0:t.getData("text/plain")))},insertTranspose(){return this.insertString(this.event.data)},insertUnorderedList(){return this.toggleAttributeIfSupported("bullet")}});const ah=function(t){const e=document.createRange();return e.setStart(t.startContainer,t.startOffset),e.setEnd(t.endContainer,t.endOffset),e},_r=t=>{var e;return Array.from(((e=t.dataTransfer)===null||e===void 0?void 0:e.types)||[]).includes("Files")},lh=function(t){const e=t.clipboardData;if(e)return e.types.includes("Files")&&e.types.length===1&&e.files.length>=1},oh=function(t){const e=t.clipboardData;if(e)return e.types.includes("text/plain")&&e.types.length===1},sh=function(t){const e=[];return t.altKey&&e.push("alt"),t.shiftKey&&e.push("shift"),e.push(t.key),e},Gr=t=>({x:t.clientX,y:t.clientY}),di="[data-trix-attribute]",ci="[data-trix-action]",uh="".concat(di,", ").concat(ci),Tr="[data-trix-dialog]",dh="".concat(Tr,"[data-trix-active]"),ch="".concat(Tr," [data-trix-method]"),hl="".concat(Tr," [data-trix-input]"),bl=(t,e)=>(e||(e=mn(t)),t.querySelector("[data-trix-input][name='".concat(e,"']"))),wl=t=>t.getAttribute("data-trix-action"),mn=t=>t.getAttribute("data-trix-attribute")||t.getAttribute("data-trix-dialog-attribute");class Ps extends Ue{constructor(e){super(e),this.didClickActionButton=this.didClickActionButton.bind(this),this.didClickAttributeButton=this.didClickAttributeButton.bind(this),this.didClickDialogButton=this.didClickDialogButton.bind(this),this.didKeyDownDialogInput=this.didKeyDownDialogInput.bind(this),this.element=e,this.attributes={},this.actions={},this.resetDialogInputs(),Me("mousedown",{onElement:this.element,matchingSelector:ci,withCallback:this.didClickActionButton}),Me("mousedown",{onElement:this.element,matchingSelector:di,withCallback:this.didClickAttributeButton}),Me("click",{onElement:this.element,matchingSelector:uh,preventDefault:!0}),Me("click",{onElement:this.element,matchingSelector:ch,withCallback:this.didClickDialogButton}),Me("keydown",{onElement:this.element,matchingSelector:hl,withCallback:this.didKeyDownDialogInput})}didClickActionButton(e,n){var r;(r=this.delegate)===null||r===void 0||r.toolbarDidClickButton(),e.preventDefault();const i=wl(n);return this.getDialog(i)?this.toggleDialog(i):(l=this.delegate)===null||l===void 0?void 0:l.toolbarDidInvokeAction(i,n);var l}didClickAttributeButton(e,n){var r;(r=this.delegate)===null||r===void 0||r.toolbarDidClickButton(),e.preventDefault();const i=mn(n);var l;return this.getDialog(i)?this.toggleDialog(i):(l=this.delegate)===null||l===void 0||l.toolbarDidToggleAttribute(i),this.refreshAttributeButtons()}didClickDialogButton(e,n){const r=Ut(n,{matchingSelector:Tr});return this[n.getAttribute("data-trix-method")].call(this,r)}didKeyDownDialogInput(e,n){if(e.keyCode===13){e.preventDefault();const r=n.getAttribute("name"),i=this.getDialog(r);this.setAttribute(i)}if(e.keyCode===27)return e.preventDefault(),this.hideDialog()}updateActions(e){return this.actions=e,this.refreshActionButtons()}refreshActionButtons(){return this.eachActionButton((e,n)=>{e.disabled=this.actions[n]===!1})}eachActionButton(e){return Array.from(this.element.querySelectorAll(ci)).map(n=>e(n,wl(n)))}updateAttributes(e){return this.attributes=e,this.refreshAttributeButtons()}refreshAttributeButtons(){return this.eachAttributeButton((e,n)=>(e.disabled=this.attributes[n]===!1,this.attributes[n]||this.dialogIsVisible(n)?(e.setAttribute("data-trix-active",""),e.classList.add("trix-active")):(e.removeAttribute("data-trix-active"),e.classList.remove("trix-active"))))}eachAttributeButton(e){return Array.from(this.element.querySelectorAll(di)).map(n=>e(n,mn(n)))}applyKeyboardCommand(e){const n=JSON.stringify(e.sort());for(const r of Array.from(this.element.querySelectorAll("[data-trix-key]"))){const i=r.getAttribute("data-trix-key").split("+");if(JSON.stringify(i.sort())===n)return Mn("mousedown",{onElement:r}),!0}return!1}dialogIsVisible(e){const n=this.getDialog(e);if(n)return n.hasAttribute("data-trix-active")}toggleDialog(e){return this.dialogIsVisible(e)?this.hideDialog():this.showDialog(e)}showDialog(e){var n,r;this.hideDialog(),(n=this.delegate)===null||n===void 0||n.toolbarWillShowDialog();const i=this.getDialog(e);i.setAttribute("data-trix-active",""),i.classList.add("trix-active"),Array.from(i.querySelectorAll("input[disabled]")).forEach(a=>{a.removeAttribute("disabled")});const l=mn(i);if(l){const a=bl(i,e);a&&(a.value=this.attributes[l]||"",a.select())}return(r=this.delegate)===null||r===void 0?void 0:r.toolbarDidShowDialog(e)}setAttribute(e){const n=mn(e),r=bl(e,n);return r.willValidate&&!r.checkValidity()?(r.setAttribute("data-trix-validate",""),r.classList.add("trix-validate"),r.focus()):((i=this.delegate)===null||i===void 0||i.toolbarDidUpdateAttribute(n,r.value),this.hideDialog());var i}removeAttribute(e){var n;const r=mn(e);return(n=this.delegate)===null||n===void 0||n.toolbarDidRemoveAttribute(r),this.hideDialog()}hideDialog(){const e=this.element.querySelector(dh);var n;if(e)return e.removeAttribute("data-trix-active"),e.classList.remove("trix-active"),this.resetDialogInputs(),(n=this.delegate)===null||n===void 0?void 0:n.toolbarDidHideDialog((r=>r.getAttribute("data-trix-dialog"))(e))}resetDialogInputs(){Array.from(this.element.querySelectorAll(hl)).forEach(e=>{e.setAttribute("disabled","disabled"),e.removeAttribute("data-trix-validate"),e.classList.remove("trix-validate")})}getDialog(e){return this.element.querySelector("[data-trix-dialog=".concat(e,"]"))}}class zn extends Rs{constructor(e){let{editorElement:n,document:r,html:i}=e;super(...arguments),this.editorElement=n,this.selectionManager=new Xt(this.editorElement),this.selectionManager.delegate=this,this.composition=new zt,this.composition.delegate=this,this.attachmentManager=new ys(this.composition.getAttachments()),this.attachmentManager.delegate=this,this.inputController=ka.getLevel()===2?new $n(this.editorElement):new Lt(this.editorElement),this.inputController.delegate=this,this.inputController.responder=this.composition,this.compositionController=new Is(this.editorElement,this.composition),this.compositionController.delegate=this,this.toolbarController=new Ps(this.editorElement.toolbarElement),this.toolbarController.delegate=this,this.editor=new Es(this.composition,this.selectionManager,this.editorElement),r?this.editor.loadDocument(r):this.editor.loadHTML(i)}registerSelectionManager(){return on.registerSelectionManager(this.selectionManager)}unregisterSelectionManager(){return on.unregisterSelectionManager(this.selectionManager)}render(){return this.compositionController.render()}reparse(){return this.composition.replaceHTML(this.editorElement.innerHTML)}compositionDidChangeDocument(e){if(this.notifyEditorElement("document-change"),!this.handlingInput)return this.render()}compositionDidChangeCurrentAttributes(e){return this.currentAttributes=e,this.toolbarController.updateAttributes(this.currentAttributes),this.updateCurrentActions(),this.notifyEditorElement("attributes-change",{attributes:this.currentAttributes})}compositionDidPerformInsertionAtRange(e){this.pasting&&(this.pastedRange=e)}compositionShouldAcceptFile(e){return this.notifyEditorElement("file-accept",{file:e})}compositionDidAddAttachment(e){const n=this.attachmentManager.manageAttachment(e);return this.notifyEditorElement("attachment-add",{attachment:n})}compositionDidEditAttachment(e){this.compositionController.rerenderViewForObject(e);const n=this.attachmentManager.manageAttachment(e);return this.notifyEditorElement("attachment-edit",{attachment:n}),this.notifyEditorElement("change")}compositionDidChangeAttachmentPreviewURL(e){return this.compositionController.invalidateViewForObject(e),this.notifyEditorElement("change")}compositionDidRemoveAttachment(e){const n=this.attachmentManager.unmanageAttachment(e);return this.notifyEditorElement("attachment-remove",{attachment:n})}compositionDidStartEditingAttachment(e,n){return this.attachmentLocationRange=this.composition.document.getLocationRangeOfAttachment(e),this.compositionController.installAttachmentEditorForAttachment(e,n),this.selectionManager.setLocationRange(this.attachmentLocationRange)}compositionDidStopEditingAttachment(e){this.compositionController.uninstallAttachmentEditor(),this.attachmentLocationRange=null}compositionDidRequestChangingSelectionToLocationRange(e){if(!this.loadingSnapshot||this.isFocused())return this.requestedLocationRange=e,this.compositionRevisionWhenLocationRangeRequested=this.composition.revision,this.handlingInput?void 0:this.render()}compositionWillLoadSnapshot(){this.loadingSnapshot=!0}compositionDidLoadSnapshot(){this.compositionController.refreshViewCache(),this.render(),this.loadingSnapshot=!1}getSelectionManager(){return this.selectionManager}attachmentManagerDidRequestRemovalOfAttachment(e){return this.removeAttachment(e)}compositionControllerWillSyncDocumentView(){return this.inputController.editorWillSyncDocumentView(),this.selectionManager.lock(),this.selectionManager.clearSelection()}compositionControllerDidSyncDocumentView(){return this.inputController.editorDidSyncDocumentView(),this.selectionManager.unlock(),this.updateCurrentActions(),this.notifyEditorElement("sync")}compositionControllerDidRender(){this.requestedLocationRange&&(this.compositionRevisionWhenLocationRangeRequested===this.composition.revision&&this.selectionManager.setLocationRange(this.requestedLocationRange),this.requestedLocationRange=null,this.compositionRevisionWhenLocationRangeRequested=null),this.renderedCompositionRevision!==this.composition.revision&&(this.runEditorFilters(),this.composition.updateCurrentAttributes(),this.notifyEditorElement("render")),this.renderedCompositionRevision=this.composition.revision}compositionControllerDidFocus(){return this.isFocusedInvisibly()&&this.setLocationRange({index:0,offset:0}),this.toolbarController.hideDialog(),this.notifyEditorElement("focus")}compositionControllerDidBlur(){return this.notifyEditorElement("blur")}compositionControllerDidSelectAttachment(e,n){return this.toolbarController.hideDialog(),this.composition.editAttachment(e,n)}compositionControllerDidRequestDeselectingAttachment(e){const n=this.attachmentLocationRange||this.composition.document.getLocationRangeOfAttachment(e);return this.selectionManager.setLocationRange(n[1])}compositionControllerWillUpdateAttachment(e){return this.editor.recordUndoEntry("Edit Attachment",{context:e.id,consolidatable:!0})}compositionControllerDidRequestRemovalOfAttachment(e){return this.removeAttachment(e)}inputControllerWillHandleInput(){this.handlingInput=!0,this.requestedRender=!1}inputControllerDidRequestRender(){this.requestedRender=!0}inputControllerDidHandleInput(){if(this.handlingInput=!1,this.requestedRender)return this.requestedRender=!1,this.render()}inputControllerDidAllowUnhandledInput(){return this.notifyEditorElement("change")}inputControllerDidRequestReparse(){return this.reparse()}inputControllerWillPerformTyping(){return this.recordTypingUndoEntry()}inputControllerWillPerformFormatting(e){return this.recordFormattingUndoEntry(e)}inputControllerWillCutText(){return this.editor.recordUndoEntry("Cut")}inputControllerWillPaste(e){return this.editor.recordUndoEntry("Paste"),this.pasting=!0,this.notifyEditorElement("before-paste",{paste:e})}inputControllerDidPaste(e){return e.range=this.pastedRange,this.pastedRange=null,this.pasting=null,this.notifyEditorElement("paste",{paste:e})}inputControllerWillMoveText(){return this.editor.recordUndoEntry("Move")}inputControllerWillAttachFiles(){return this.editor.recordUndoEntry("Drop Files")}inputControllerWillPerformUndo(){return this.editor.undo()}inputControllerWillPerformRedo(){return this.editor.redo()}inputControllerDidReceiveKeyboardCommand(e){return this.toolbarController.applyKeyboardCommand(e)}inputControllerDidStartDrag(){this.locationRangeBeforeDrag=this.selectionManager.getLocationRange()}inputControllerDidReceiveDragOverPoint(e){return this.selectionManager.setLocationRangeFromPointRange(e)}inputControllerDidCancelDrag(){this.selectionManager.setLocationRange(this.locationRangeBeforeDrag),this.locationRangeBeforeDrag=null}locationRangeDidChange(e){return this.composition.updateCurrentAttributes(),this.updateCurrentActions(),this.attachmentLocationRange&&!fr(this.attachmentLocationRange,e)&&this.composition.stopEditingAttachment(),this.notifyEditorElement("selection-change")}toolbarDidClickButton(){if(!this.getLocationRange())return this.setLocationRange({index:0,offset:0})}toolbarDidInvokeAction(e,n){return this.invokeAction(e,n)}toolbarDidToggleAttribute(e){if(this.recordFormattingUndoEntry(e),this.composition.toggleCurrentAttribute(e),this.render(),!this.selectionFrozen)return this.editorElement.focus()}toolbarDidUpdateAttribute(e,n){if(this.recordFormattingUndoEntry(e),this.composition.setCurrentAttribute(e,n),this.render(),!this.selectionFrozen)return this.editorElement.focus()}toolbarDidRemoveAttribute(e){if(this.recordFormattingUndoEntry(e),this.composition.removeCurrentAttribute(e),this.render(),!this.selectionFrozen)return this.editorElement.focus()}toolbarWillShowDialog(e){return this.composition.expandSelectionForEditing(),this.freezeSelection()}toolbarDidShowDialog(e){return this.notifyEditorElement("toolbar-dialog-show",{dialogName:e})}toolbarDidHideDialog(e){return this.thawSelection(),this.editorElement.focus(),this.notifyEditorElement("toolbar-dialog-hide",{dialogName:e})}freezeSelection(){if(!this.selectionFrozen)return this.selectionManager.lock(),this.composition.freezeSelection(),this.selectionFrozen=!0,this.render()}thawSelection(){if(this.selectionFrozen)return this.composition.thawSelection(),this.selectionManager.unlock(),this.selectionFrozen=!1,this.render()}canInvokeAction(e){return!!this.actionIsExternal(e)||!((n=this.actions[e])===null||n===void 0||(n=n.test)===null||n===void 0||!n.call(this));var n}invokeAction(e,n){return this.actionIsExternal(e)?this.notifyEditorElement("action-invoke",{actionName:e,invokingElement:n}):(r=this.actions[e])===null||r===void 0||(r=r.perform)===null||r===void 0?void 0:r.call(this);var r}actionIsExternal(e){return/^x-./.test(e)}getCurrentActions(){const e={};for(const n in this.actions)e[n]=this.canInvokeAction(n);return e}updateCurrentActions(){const e=this.getCurrentActions();if(!Ln(e,this.currentActions))return this.currentActions=e,this.toolbarController.updateActions(this.currentActions),this.notifyEditorElement("actions-change",{actions:this.currentActions})}runEditorFilters(){let e=this.composition.getSnapshot();if(Array.from(this.editor.filters).forEach(i=>{const{document:l,selectedRange:a}=e;e=i.call(this.editor,e)||{},e.document||(e.document=l),e.selectedRange||(e.selectedRange=a)}),n=e,r=this.composition.getSnapshot(),!fr(n.selectedRange,r.selectedRange)||!n.document.isEqualTo(r.document))return this.composition.loadSnapshot(e);var n,r}updateInputElement(){const e=function(n,r){const i=Hm[r];if(i)return i(n);throw new Error("unknown content type: ".concat(r))}(this.compositionController.getSerializableElement(),"text/html");return this.editorElement.setInputElementValue(e)}notifyEditorElement(e,n){switch(e){case"document-change":this.documentChangedSinceLastRender=!0;break;case"render":this.documentChangedSinceLastRender&&(this.documentChangedSinceLastRender=!1,this.notifyEditorElement("change"));break;case"change":case"attachment-add":case"attachment-edit":case"attachment-remove":this.updateInputElement()}return this.editorElement.notify(e,n)}removeAttachment(e){return this.editor.recordUndoEntry("Delete Attachment"),this.composition.removeAttachment(e),this.render()}recordFormattingUndoEntry(e){const n=Ne(e),r=this.selectionManager.getLocationRange();if(n||!xt(r))return this.editor.recordUndoEntry("Formatting",{context:this.getUndoContext(),consolidatable:!0})}recordTypingUndoEntry(){return this.editor.recordUndoEntry("Typing",{context:this.getUndoContext(this.currentAttributes),consolidatable:!0})}getUndoContext(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return[this.getLocationContext(),this.getTimeContext(),...Array.from(n)]}getLocationContext(){const e=this.selectionManager.getLocationRange();return xt(e)?e[0].index:e}getTimeContext(){return ti.interval>0?Math.floor(new Date().getTime()/ti.interval):0}isFocused(){var e;return this.editorElement===((e=this.editorElement.ownerDocument)===null||e===void 0?void 0:e.activeElement)}isFocusedInvisibly(){return this.isFocused()&&!this.getLocationRange()}get actions(){return this.constructor.actions}}it(zn,"actions",{undo:{test(){return this.editor.canUndo()},perform(){return this.editor.undo()}},redo:{test(){return this.editor.canRedo()},perform(){return this.editor.redo()}},link:{test(){return this.editor.canActivateAttribute("href")}},increaseNestingLevel:{test(){return this.editor.canIncreaseNestingLevel()},perform(){return this.editor.increaseNestingLevel()&&this.render()}},decreaseNestingLevel:{test(){return this.editor.canDecreaseNestingLevel()},perform(){return this.editor.decreaseNestingLevel()&&this.render()}},attachFiles:{test:()=>!0,perform(){return ka.pickFiles(this.editor.insertFiles)}}}),zn.proxyMethod("getSelectionManager().setLocationRange"),zn.proxyMethod("getSelectionManager().getLocationRange");var ph=Object.freeze({__proto__:null,AttachmentEditorController:Bs,CompositionController:Is,Controller:Rs,EditorController:zn,InputController:Sr,Level0InputController:Lt,Level2InputController:$n,ToolbarController:Ps}),fh=Object.freeze({__proto__:null,MutationObserver:Ms,SelectionChangeObserver:ds}),vh=Object.freeze({__proto__:null,FileVerificationOperation:Os,ImagePreloadOperation:hs});ls("trix-toolbar",`%t {
  display: block;
}

%t {
  white-space: nowrap;
}

%t [data-trix-dialog] {
  display: none;
}

%t [data-trix-dialog][data-trix-active] {
  display: block;
}

%t [data-trix-dialog] [data-trix-validate]:invalid {
  background-color: #ffdddd;
}`);class $s extends HTMLElement{connectedCallback(){this.innerHTML===""&&(this.innerHTML=as.getDefaultHTML())}}let gh=0;const mh=function(t){if(!t.hasAttribute("contenteditable"))return t.setAttribute("contenteditable",""),function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return n.times=1,Me(e,n)}("focus",{onElement:t,withCallback:()=>hh(t)})},hh=function(t){return bh(t),wh()},bh=function(t){var e,n;if((e=(n=document).queryCommandSupported)!==null&&e!==void 0&&e.call(n,"enableObjectResizing"))return document.execCommand("enableObjectResizing",!1,!1),Me("mscontrolselect",{onElement:t,preventDefault:!0})},wh=function(t){var e,n;if((e=(n=document).queryCommandSupported)!==null&&e!==void 0&&e.call(n,"DefaultParagraphSeparator")){const{tagName:r}=et.default;if(["div","p"].includes(r))return document.execCommand("DefaultParagraphSeparator",!1,r)}},yl=Yn.forcesObjectResizing?{display:"inline",width:"auto"}:{display:"inline-block",width:"1px"};ls("trix-editor",`%t {
    display: block;
}

%t:empty:not(:focus)::before {
    content: attr(placeholder);
    color: graytext;
    cursor: text;
    pointer-events: none;
    white-space: pre-line;
}

%t a[contenteditable=false] {
    cursor: text;
}

%t img {
    max-width: 100%;
    height: auto;
}

%t `.concat(tn,` figcaption textarea {
    resize: none;
}

%t `).concat(tn,` figcaption textarea.trix-autoresize-clone {
    position: absolute;
    left: -9999px;
    max-height: 0px;
}

%t `).concat(tn,` figcaption[data-trix-placeholder]:empty::before {
    content: attr(data-trix-placeholder);
    color: graytext;
}

%t [data-trix-cursor-target] {
    display: `).concat(yl.display,` !important;
    width: `).concat(yl.width,` !important;
    padding: 0 !important;
    margin: 0 !important;
    border: none !important;
}

%t [data-trix-cursor-target=left] {
    vertical-align: top !important;
    margin-left: -1px !important;
}

%t [data-trix-cursor-target=right] {
    vertical-align: bottom !important;
    margin-right: -1px !important;
}`));class zs extends HTMLElement{get trixId(){return this.hasAttribute("trix-id")?this.getAttribute("trix-id"):(this.setAttribute("trix-id",++gh),this.trixId)}get labels(){const e=[];this.id&&this.ownerDocument&&e.push(...Array.from(this.ownerDocument.querySelectorAll("label[for='".concat(this.id,"']"))||[]));const n=Ut(this,{matchingSelector:"label"});return n&&[this,null].includes(n.control)&&e.push(n),e}get toolbarElement(){var e;if(this.hasAttribute("toolbar"))return(e=this.ownerDocument)===null||e===void 0?void 0:e.getElementById(this.getAttribute("toolbar"));if(this.parentNode){const n="trix-toolbar-".concat(this.trixId);this.setAttribute("toolbar",n);const r=ge("trix-toolbar",{id:n});return this.parentNode.insertBefore(r,this),r}}get form(){var e;return(e=this.inputElement)===null||e===void 0?void 0:e.form}get inputElement(){var e;if(this.hasAttribute("input"))return(e=this.ownerDocument)===null||e===void 0?void 0:e.getElementById(this.getAttribute("input"));if(this.parentNode){const n="trix-input-".concat(this.trixId);this.setAttribute("input",n);const r=ge("input",{type:"hidden",id:n});return this.parentNode.insertBefore(r,this.nextElementSibling),r}}get editor(){var e;return(e=this.editorController)===null||e===void 0?void 0:e.editor}get name(){var e;return(e=this.inputElement)===null||e===void 0?void 0:e.name}get value(){var e;return(e=this.inputElement)===null||e===void 0?void 0:e.value}set value(e){var n;this.defaultValue=e,(n=this.editor)===null||n===void 0||n.loadHTML(this.defaultValue)}notify(e,n){if(this.editorController)return Mn("trix-".concat(e),{onElement:this,attributes:n})}setInputElementValue(e){this.inputElement&&(this.inputElement.value=e)}connectedCallback(){this.hasAttribute("data-trix-internal")||(mh(this),function(e){e.hasAttribute("role")||e.setAttribute("role","textbox")}(this),function(e){if(e.hasAttribute("aria-label")||e.hasAttribute("aria-labelledby"))return;const n=function(){const r=Array.from(e.labels).map(l=>{if(!l.contains(e))return l.textContent}).filter(l=>l),i=r.join(" ");return i?e.setAttribute("aria-label",i):e.removeAttribute("aria-label")};n(),Me("focus",{onElement:e,withCallback:n})}(this),this.editorController||(Mn("trix-before-initialize",{onElement:this}),this.editorController=new zn({editorElement:this,html:this.defaultValue=this.value}),requestAnimationFrame(()=>Mn("trix-initialize",{onElement:this}))),this.editorController.registerSelectionManager(),this.registerResetListener(),this.registerClickListener(),function(e){!document.querySelector(":focus")&&e.hasAttribute("autofocus")&&document.querySelector("[autofocus]")===e&&e.focus()}(this))}disconnectedCallback(){var e;return(e=this.editorController)===null||e===void 0||e.unregisterSelectionManager(),this.unregisterResetListener(),this.unregisterClickListener()}registerResetListener(){return this.resetListener=this.resetBubbled.bind(this),window.addEventListener("reset",this.resetListener,!1)}unregisterResetListener(){return window.removeEventListener("reset",this.resetListener,!1)}registerClickListener(){return this.clickListener=this.clickBubbled.bind(this),window.addEventListener("click",this.clickListener,!1)}unregisterClickListener(){return window.removeEventListener("click",this.clickListener,!1)}resetBubbled(e){if(!e.defaultPrevented&&e.target===this.form)return this.reset()}clickBubbled(e){if(e.defaultPrevented||this.contains(e.target))return;const n=Ut(e.target,{matchingSelector:"label"});return n&&Array.from(this.labels).includes(n)?this.focus():void 0}reset(){this.value=this.defaultValue}}const kl={VERSION:Jg,config:Xn,core:jm,models:Ts,views:qm,controllers:ph,observers:fh,operations:vh,elements:Object.freeze({__proto__:null,TrixEditorElement:zs,TrixToolbarElement:$s}),filters:Object.freeze({__proto__:null,Filter:Cs,attachmentGalleryFilter:As})};Object.assign(kl,Ts),window.Trix=kl,setTimeout(function(){customElements.get("trix-toolbar")||customElements.define("trix-toolbar",$s),customElements.get("trix-editor")||customElements.define("trix-editor",zs)},0);var Ia={name:"EditorWrapper",data(){return{merge:!0,defaultClasses:{container:""}}}};const yh=["id","value"];function kh(t,e,n,r,i,l){return d(),v("div",{class:f(t.classes.container)},[w("input",{id:`editor-input-${t.id}`,value:t.value,type:"hidden"},null,8,yh),(d(),L(F(t.editorComponent)))],2)}Ia.render=kh;Ia.__file="themes/blank/templates/wrappers/EditorWrapper.vue";var Ns={name:"EditorWrapper",render:Ia.render,data(){return{merge:!0,defaultClasses:{container:"",container_hideBold:"vf-editor-hide-bold",container_hideItalic:"vf-editor-hide-italic",container_hideStrike:"vf-editor-hide-strike",container_hideLink:"vf-editor-hide-link",container_hideHeading:"vf-editor-hide-heading",container_hideQuote:"vf-editor-hide-quote",container_hideCode:"vf-editor-hide-code",container_hideBulletList:"vf-editor-hide-bullet-list",container_hideNumberList:"vf-editor-hide-number-list",container_hideDecreaseNesting:"vf-editor-hide-decrease-nesting",container_hideIncreaseNesting:"vf-editor-hide-increase-nesting",container_hideAttach:"vf-editor-hide-attach",container_hideUndo:"vf-editor-hide-undo",container_hideRedo:"vf-editor-hide-redo",$container:(t,{hideTools:e})=>[t.container].concat(e.map(n=>t[`container_hide${n.split("-").map(r=>r.charAt(0).toUpperCase()+r.slice(1)).join("")}`]))}}}},Ch=`@charset "UTF-8";

trix-toolbar {
  padding: 0.5rem 0.375rem;
  border-radius: 0.25rem;
  flex-wrap: wrap;
}

trix-toolbar .trix-button-row {
  display: block;
  margin-bottom: -0.25rem;
  flex-wrap: nowrap;
  justify-content: space-between;
  overflow-x: auto;
}

trix-toolbar .trix-button-group {
  display: inline;
}

trix-toolbar .trix-button-group-spacer {
  display: hidden;
  flex-grow: 1;
}

trix-toolbar .trix-button {
  position: relative;
  margin-bottom: 0.25rem;
  color: var(--vf-bg-icon);
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  outline: none;
  border-radius: 0.25rem;
  white-space: nowrap;
  float: left;
  border: 0;
  background: none;
}

trix-toolbar .trix-button.trix-active {
  background-color: var(--vf-bg-selected);
  filter: brightness(0.9);
}

trix-toolbar .trix-button:not(.trix-active):hover {
  background-color: var(--vf-bg-selected);
}

.is-disabled trix-toolbar .trix-button:not(.trix-active):hover {
  background: transparent;
  cursor: default;
}

trix-toolbar .trix-button:not(:disabled) {
  cursor: pointer;
}

.is-disabled trix-toolbar .trix-button {
  cursor: default;
  pointer-events: none;
}

trix-toolbar .trix-button--icon {
  width: 2.5rem;
  height: 1.5rem;
  font-size: 0.75rem;
  line-height: 1rem;
  text-indent: -9999px;
}

trix-toolbar .trix-button--icon::before {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  display: inline-block;
  content: "";
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-position: center center;
  mask-size: contain;
  -webkit-mask-size: contain;
  background-color: var(--vf-bg-icon);
  top: 0.125rem;
  bottom: 0.125rem;
  margin-top: 0.125rem;
  margin-bottom: 0.125rem;
}

trix-toolbar .trix-button--icon.trix-active::before {
  opacity: 1;
}

trix-toolbar .trix-button--icon:disabled::before {
  opacity: 0.4;
}

trix-toolbar .trix-button--icon-attach::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M67.508 468.467c-58.005-58.013-58.016-151.92 0-209.943l225.011-225.04c44.643-44.645 117.279-44.645 161.92 0 44.743 44.749 44.753 117.186 0 161.944l-189.465 189.49c-31.41 31.413-82.518 31.412-113.926.001-31.479-31.482-31.49-82.453 0-113.944L311.51 110.491c4.687-4.687 12.286-4.687 16.972 0l16.967 16.971c4.685 4.686 4.685 12.283 0 16.969L184.983 304.917c-12.724 12.724-12.73 33.328 0 46.058 12.696 12.697 33.356 12.699 46.054-.001l189.465-189.489c25.987-25.989 25.994-68.06.001-94.056-25.931-25.934-68.119-25.932-94.049 0l-225.01 225.039c-39.249 39.252-39.258 102.795-.001 142.057 39.285 39.29 102.885 39.287 142.162-.028A739446.174 739446.174 0 0 1 439.497 238.49c4.686-4.687 12.282-4.684 16.969.004l16.967 16.971c4.685 4.686 4.689 12.279.004 16.965a755654.128 755654.128 0 0 0-195.881 195.996c-58.034 58.092-152.004 58.093-210.048.041z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M67.508 468.467c-58.005-58.013-58.016-151.92 0-209.943l225.011-225.04c44.643-44.645 117.279-44.645 161.92 0 44.743 44.749 44.753 117.186 0 161.944l-189.465 189.49c-31.41 31.413-82.518 31.412-113.926.001-31.479-31.482-31.49-82.453 0-113.944L311.51 110.491c4.687-4.687 12.286-4.687 16.972 0l16.967 16.971c4.685 4.686 4.685 12.283 0 16.969L184.983 304.917c-12.724 12.724-12.73 33.328 0 46.058 12.696 12.697 33.356 12.699 46.054-.001l189.465-189.489c25.987-25.989 25.994-68.06.001-94.056-25.931-25.934-68.119-25.932-94.049 0l-225.01 225.039c-39.249 39.252-39.258 102.795-.001 142.057 39.285 39.29 102.885 39.287 142.162-.028A739446.174 739446.174 0 0 1 439.497 238.49c4.686-4.687 12.282-4.684 16.969.004l16.967 16.971c4.685 4.686 4.689 12.279.004 16.965a755654.128 755654.128 0 0 0-195.881 195.996c-58.034 58.092-152.004 58.093-210.048.041z'%3e%3c/path%3e%3c/svg%3e");
}

trix-toolbar .trix-button--icon-bold::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 384 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M333.49 238a122 122 0 0 0 27-65.21C367.87 96.49 308 32 233.42 32H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h31.87v288H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h209.32c70.8 0 134.14-51.75 141-122.4 4.74-48.45-16.39-92.06-50.83-119.6zM145.66 112h87.76a48 48 0 0 1 0 96h-87.76zm87.76 288h-87.76V288h87.76a56 56 0 0 1 0 112z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 384 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M333.49 238a122 122 0 0 0 27-65.21C367.87 96.49 308 32 233.42 32H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h31.87v288H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h209.32c70.8 0 134.14-51.75 141-122.4 4.74-48.45-16.39-92.06-50.83-119.6zM145.66 112h87.76a48 48 0 0 1 0 96h-87.76zm87.76 288h-87.76V288h87.76a56 56 0 0 1 0 112z'%3e%3c/path%3e%3c/svg%3e");
}

trix-toolbar .trix-button--icon-italic::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M320 48v32a16 16 0 0 1-16 16h-62.76l-80 320H208a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h62.76l80-320H112a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M320 48v32a16 16 0 0 1-16 16h-62.76l-80 320H208a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h62.76l80-320H112a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16z'%3e%3c/path%3e%3c/svg%3e");
}

trix-toolbar .trix-button--icon-link::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M314.222 197.78c51.091 51.091 54.377 132.287 9.75 187.16-6.242 7.73-2.784 3.865-84.94 86.02-54.696 54.696-143.266 54.745-197.99 0-54.711-54.69-54.734-143.255 0-197.99 32.773-32.773 51.835-51.899 63.409-63.457 7.463-7.452 20.331-2.354 20.486 8.192a173.31 173.31 0 0 0 4.746 37.828c.966 4.029-.272 8.269-3.202 11.198L80.632 312.57c-32.755 32.775-32.887 85.892 0 118.8 32.775 32.755 85.892 32.887 118.8 0l75.19-75.2c32.718-32.725 32.777-86.013 0-118.79a83.722 83.722 0 0 0-22.814-16.229c-4.623-2.233-7.182-7.25-6.561-12.346 1.356-11.122 6.296-21.885 14.815-30.405l4.375-4.375c3.625-3.626 9.177-4.594 13.76-2.294 12.999 6.524 25.187 15.211 36.025 26.049zM470.958 41.04c-54.724-54.745-143.294-54.696-197.99 0-82.156 82.156-78.698 78.29-84.94 86.02-44.627 54.873-41.341 136.069 9.75 187.16 10.838 10.838 23.026 19.525 36.025 26.049 4.582 2.3 10.134 1.331 13.76-2.294l4.375-4.375c8.52-8.519 13.459-19.283 14.815-30.405.621-5.096-1.938-10.113-6.561-12.346a83.706 83.706 0 0 1-22.814-16.229c-32.777-32.777-32.718-86.065 0-118.79l75.19-75.2c32.908-32.887 86.025-32.755 118.8 0 32.887 32.908 32.755 86.025 0 118.8l-45.848 45.84c-2.93 2.929-4.168 7.169-3.202 11.198a173.31 173.31 0 0 1 4.746 37.828c.155 10.546 13.023 15.644 20.486 8.192 11.574-11.558 30.636-30.684 63.409-63.457 54.733-54.735 54.71-143.3-.001-197.991z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M314.222 197.78c51.091 51.091 54.377 132.287 9.75 187.16-6.242 7.73-2.784 3.865-84.94 86.02-54.696 54.696-143.266 54.745-197.99 0-54.711-54.69-54.734-143.255 0-197.99 32.773-32.773 51.835-51.899 63.409-63.457 7.463-7.452 20.331-2.354 20.486 8.192a173.31 173.31 0 0 0 4.746 37.828c.966 4.029-.272 8.269-3.202 11.198L80.632 312.57c-32.755 32.775-32.887 85.892 0 118.8 32.775 32.755 85.892 32.887 118.8 0l75.19-75.2c32.718-32.725 32.777-86.013 0-118.79a83.722 83.722 0 0 0-22.814-16.229c-4.623-2.233-7.182-7.25-6.561-12.346 1.356-11.122 6.296-21.885 14.815-30.405l4.375-4.375c3.625-3.626 9.177-4.594 13.76-2.294 12.999 6.524 25.187 15.211 36.025 26.049zM470.958 41.04c-54.724-54.745-143.294-54.696-197.99 0-82.156 82.156-78.698 78.29-84.94 86.02-44.627 54.873-41.341 136.069 9.75 187.16 10.838 10.838 23.026 19.525 36.025 26.049 4.582 2.3 10.134 1.331 13.76-2.294l4.375-4.375c8.52-8.519 13.459-19.283 14.815-30.405.621-5.096-1.938-10.113-6.561-12.346a83.706 83.706 0 0 1-22.814-16.229c-32.777-32.777-32.718-86.065 0-118.79l75.19-75.2c32.908-32.887 86.025-32.755 118.8 0 32.887 32.908 32.755 86.025 0 118.8l-45.848 45.84c-2.93 2.929-4.168 7.169-3.202 11.198a173.31 173.31 0 0 1 4.746 37.828c.155 10.546 13.023 15.644 20.486 8.192 11.574-11.558 30.636-30.684 63.409-63.457 54.733-54.735 54.71-143.3-.001-197.991z'%3e%3c/path%3e%3c/svg%3e");
}

trix-toolbar .trix-button--icon-strike::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M496 224H293.9l-87.17-26.83A43.55 43.55 0 0 1 219.55 112h66.79A49.89 49.89 0 0 1 331 139.58a16 16 0 0 0 21.46 7.15l42.94-21.47a16 16 0 0 0 7.16-21.46l-.53-1A128 128 0 0 0 287.51 32h-68a123.68 123.68 0 0 0-123 135.64c2 20.89 10.1 39.83 21.78 56.36H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h480a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-180.24 96A43 43 0 0 1 336 356.45 43.59 43.59 0 0 1 292.45 400h-66.79A49.89 49.89 0 0 1 181 372.42a16 16 0 0 0-21.46-7.15l-42.94 21.47a16 16 0 0 0-7.16 21.46l.53 1A128 128 0 0 0 224.49 480h68a123.68 123.68 0 0 0 123-135.64 114.25 114.25 0 0 0-5.34-24.36z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M496 224H293.9l-87.17-26.83A43.55 43.55 0 0 1 219.55 112h66.79A49.89 49.89 0 0 1 331 139.58a16 16 0 0 0 21.46 7.15l42.94-21.47a16 16 0 0 0 7.16-21.46l-.53-1A128 128 0 0 0 287.51 32h-68a123.68 123.68 0 0 0-123 135.64c2 20.89 10.1 39.83 21.78 56.36H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h480a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-180.24 96A43 43 0 0 1 336 356.45 43.59 43.59 0 0 1 292.45 400h-66.79A49.89 49.89 0 0 1 181 372.42a16 16 0 0 0-21.46-7.15l-42.94 21.47a16 16 0 0 0-7.16 21.46l.53 1A128 128 0 0 0 224.49 480h68a123.68 123.68 0 0 0 123-135.64 114.25 114.25 0 0 0-5.34-24.36z'%3e%3c/path%3e%3c/svg%3e");
}

trix-toolbar .trix-button--icon-quote::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z'%3e%3c/path%3e%3c/svg%3e");
  top: 0.25rem;
  bottom: 0.25rem;
  margin-top: 1px;
  margin-bottom: 1px;
}

trix-toolbar .trix-button--icon-heading-1::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M448 96v320h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H320a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V288H160v128h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V96H32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-32v128h192V96h-32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M448 96v320h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H320a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V288H160v128h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V96H32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-32v128h192V96h-32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16z'%3e%3c/path%3e%3c/svg%3e");
}

trix-toolbar .trix-button--icon-code::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 640 304' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M165.9%2c291.3 L209.4%2c244.9 C214%2c240 213.7%2c232.2 208.6%2c227.7 L118%2c148 L208.6%2c68.3 C213.7%2c63.8 214.1%2c56 209.4%2c51.1 L165.9%2c4.7 C161.4%2c-0.1 153.8%2c-0.4 148.9%2c4.2 L4.8%2c139.2 C-0.3%2c143.9 -0.3%2c152 4.8%2c156.7 L148.9%2c291.8 C153.8%2c296.4 161.4%2c296.2 165.9%2c291.3 Z M493.1%2c291.9 L637.2%2c156.8 C642.3%2c152.1 642.3%2c144 637.2%2c139.3 L493.1%2c4.1 C488.3%2c-0.4 480.7%2c-0.2 476.1%2c4.6 L432.6%2c51 C428%2c55.9 428.3%2c63.7 433.4%2c68.2 L524%2c148 L433.4%2c227.7 C428.3%2c232.2 427.9%2c240 432.6%2c244.9 L476.1%2c291.3 C480.6%2c296.2 488.2%2c296.4 493.1%2c291.9 Z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 640 304' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M165.9%2c291.3 L209.4%2c244.9 C214%2c240 213.7%2c232.2 208.6%2c227.7 L118%2c148 L208.6%2c68.3 C213.7%2c63.8 214.1%2c56 209.4%2c51.1 L165.9%2c4.7 C161.4%2c-0.1 153.8%2c-0.4 148.9%2c4.2 L4.8%2c139.2 C-0.3%2c143.9 -0.3%2c152 4.8%2c156.7 L148.9%2c291.8 C153.8%2c296.4 161.4%2c296.2 165.9%2c291.3 Z M493.1%2c291.9 L637.2%2c156.8 C642.3%2c152.1 642.3%2c144 637.2%2c139.3 L493.1%2c4.1 C488.3%2c-0.4 480.7%2c-0.2 476.1%2c4.6 L432.6%2c51 C428%2c55.9 428.3%2c63.7 433.4%2c68.2 L524%2c148 L433.4%2c227.7 C428.3%2c232.2 427.9%2c240 432.6%2c244.9 L476.1%2c291.3 C480.6%2c296.2 488.2%2c296.4 493.1%2c291.9 Z'%3e%3c/path%3e%3c/svg%3e");
  top: 0.375rem;
  bottom: 0.375rem;
  margin-top: 1px;
  margin-bottom: 1px;
}

trix-toolbar .trix-button--icon-bullet-list::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z'%3e%3c/path%3e%3c/svg%3e");
  margin-top: 1px;
  margin-bottom: 1px;
}

trix-toolbar .trix-button--icon-number-list::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M61.77 401l17.5-20.15a19.92 19.92 0 0 0 5.07-14.19v-3.31C84.34 356 80.5 352 73 352H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h22.83a157.41 157.41 0 0 0-11 12.31l-5.61 7c-4 5.07-5.25 10.13-2.8 14.88l1.05 1.93c3 5.76 6.29 7.88 12.25 7.88h4.73c10.33 0 15.94 2.44 15.94 9.09 0 4.72-4.2 8.22-14.36 8.22a41.54 41.54 0 0 1-15.47-3.12c-6.49-3.88-11.74-3.5-15.6 3.12l-5.59 9.31c-3.72 6.13-3.19 11.72 2.63 15.94 7.71 4.69 20.38 9.44 37 9.44 34.16 0 48.5-22.75 48.5-44.12-.03-14.38-9.12-29.76-28.73-34.88zM496 224H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM16 160h64a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H64V40a8 8 0 0 0-8-8H32a8 8 0 0 0-7.14 4.42l-8 16A8 8 0 0 0 24 64h8v64H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8zm-3.91 160H80a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H41.32c3.29-10.29 48.34-18.68 48.34-56.44 0-29.06-25-39.56-44.47-39.56-21.36 0-33.8 10-40.46 18.75-4.37 5.59-3 10.84 2.8 15.37l8.58 6.88c5.61 4.56 11 2.47 16.12-2.44a13.44 13.44 0 0 1 9.46-3.84c3.33 0 9.28 1.56 9.28 8.75C51 248.19 0 257.31 0 304.59v4C0 316 5.08 320 12.09 320z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M61.77 401l17.5-20.15a19.92 19.92 0 0 0 5.07-14.19v-3.31C84.34 356 80.5 352 73 352H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h22.83a157.41 157.41 0 0 0-11 12.31l-5.61 7c-4 5.07-5.25 10.13-2.8 14.88l1.05 1.93c3 5.76 6.29 7.88 12.25 7.88h4.73c10.33 0 15.94 2.44 15.94 9.09 0 4.72-4.2 8.22-14.36 8.22a41.54 41.54 0 0 1-15.47-3.12c-6.49-3.88-11.74-3.5-15.6 3.12l-5.59 9.31c-3.72 6.13-3.19 11.72 2.63 15.94 7.71 4.69 20.38 9.44 37 9.44 34.16 0 48.5-22.75 48.5-44.12-.03-14.38-9.12-29.76-28.73-34.88zM496 224H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM16 160h64a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H64V40a8 8 0 0 0-8-8H32a8 8 0 0 0-7.14 4.42l-8 16A8 8 0 0 0 24 64h8v64H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8zm-3.91 160H80a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H41.32c3.29-10.29 48.34-18.68 48.34-56.44 0-29.06-25-39.56-44.47-39.56-21.36 0-33.8 10-40.46 18.75-4.37 5.59-3 10.84 2.8 15.37l8.58 6.88c5.61 4.56 11 2.47 16.12-2.44a13.44 13.44 0 0 1 9.46-3.84c3.33 0 9.28 1.56 9.28 8.75C51 248.19 0 257.31 0 304.59v4C0 316 5.08 320 12.09 320z'%3e%3c/path%3e%3c/svg%3e");
  margin-top: 1px;
  margin-bottom: 1px;
}

trix-toolbar .trix-button--icon-undo::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M255.545 8c-66.269.119-126.438 26.233-170.86 68.685L48.971 40.971C33.851 25.851 8 36.559 8 57.941V192c0 13.255 10.745 24 24 24h134.059c21.382 0 32.09-25.851 16.971-40.971l-41.75-41.75c30.864-28.899 70.801-44.907 113.23-45.273 92.398-.798 170.283 73.977 169.484 169.442C423.236 348.009 349.816 424 256 424c-41.127 0-79.997-14.678-110.63-41.556-4.743-4.161-11.906-3.908-16.368.553L89.34 422.659c-4.872 4.872-4.631 12.815.482 17.433C133.798 479.813 192.074 504 256 504c136.966 0 247.999-111.033 248-247.998C504.001 119.193 392.354 7.755 255.545 8z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M255.545 8c-66.269.119-126.438 26.233-170.86 68.685L48.971 40.971C33.851 25.851 8 36.559 8 57.941V192c0 13.255 10.745 24 24 24h134.059c21.382 0 32.09-25.851 16.971-40.971l-41.75-41.75c30.864-28.899 70.801-44.907 113.23-45.273 92.398-.798 170.283 73.977 169.484 169.442C423.236 348.009 349.816 424 256 424c-41.127 0-79.997-14.678-110.63-41.556-4.743-4.161-11.906-3.908-16.368.553L89.34 422.659c-4.872 4.872-4.631 12.815.482 17.433C133.798 479.813 192.074 504 256 504c136.966 0 247.999-111.033 248-247.998C504.001 119.193 392.354 7.755 255.545 8z'%3e%3c/path%3e%3c/svg%3e");
  top: 0.25rem;
  bottom: 0.25rem;
}

trix-toolbar .trix-button--icon-redo::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z'%3e%3c/path%3e%3c/svg%3e");
  top: 0.25rem;
  bottom: 0.25rem;
}

trix-toolbar .trix-button--icon-decrease-nesting-level::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 448 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M100.682584%2c116.695158 L4.68258422%2c212.695158 C-1.56086141%2c218.942698 -1.56086141%2c229.067619 4.68258422%2c235.315158 L100.682584%2c331.315158 C110.722584%2c341.335158 127.992584%2c334.215158 127.992584%2c319.995158 L127.992584%2c127.995158 C127.992584%2c113.685158 110.662584%2c106.695158 100.682584%2c116.695158 Z M432%2c384 L16%2c384 C7.163444%2c384 1.082166e-15%2c391.163444 0%2c400 L0%2c432 C1.082166e-15%2c440.836556 7.163444%2c448 16%2c448 L432%2c448 C440.836556%2c448 448%2c440.836556 448%2c432 L448%2c400 C448%2c391.163444 440.836556%2c384 432%2c384 Z M204.83%2c256 C201.426459%2c255.997344 198.161555%2c257.348219 195.754887%2c259.754887 C193.348219%2c262.161555 191.997344%2c265.426459 192%2c268.83 L192%2c307.17 C191.997344%2c310.573541 193.348219%2c313.838445 195.754887%2c316.245113 C198.161555%2c318.651781 201.426459%2c320.002656 204.83%2c320 L435.17%2c320 C438.573541%2c320.002656 441.838445%2c318.651781 444.245113%2c316.245113 C446.651781%2c313.838445 448.002656%2c310.573541 448%2c307.17 L448%2c268.83 C448.002656%2c265.426459 446.651781%2c262.161555 444.245113%2c259.754887 C441.838445%2c257.348219 438.573541%2c255.997344 435.17%2c256 L204.83%2c256 Z M435.17%2c128 L204.83%2c128 C201.426459%2c127.997344 198.161555%2c129.348219 195.754887%2c131.754887 C193.348219%2c134.161555 191.997344%2c137.426459 192%2c140.83 L192%2c179.17 C191.997344%2c182.573541 193.348219%2c185.838445 195.754887%2c188.245113 C198.161555%2c190.651781 201.426459%2c192.002656 204.83%2c192 L435.17%2c192 C438.573541%2c192.002656 441.838445%2c190.651781 444.245113%2c188.245113 C446.651781%2c185.838445 448.002656%2c182.573541 448%2c179.17 L448%2c140.83 C448.002656%2c137.426459 446.651781%2c134.161555 444.245113%2c131.754887 C441.838445%2c129.348219 438.573541%2c127.997344 435.17%2c128 Z M432%2c0 L16%2c0 C7.163444%2c0 1.082166e-15%2c7.163444 0%2c16 L0%2c48 C1.082166e-15%2c56.836556 7.163444%2c64 16%2c64 L432%2c64 C440.836556%2c64 448%2c56.836556 448%2c48 L448%2c16 C448%2c7.163444 440.836556%2c0 432%2c0 Z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 448 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M100.682584%2c116.695158 L4.68258422%2c212.695158 C-1.56086141%2c218.942698 -1.56086141%2c229.067619 4.68258422%2c235.315158 L100.682584%2c331.315158 C110.722584%2c341.335158 127.992584%2c334.215158 127.992584%2c319.995158 L127.992584%2c127.995158 C127.992584%2c113.685158 110.662584%2c106.695158 100.682584%2c116.695158 Z M432%2c384 L16%2c384 C7.163444%2c384 1.082166e-15%2c391.163444 0%2c400 L0%2c432 C1.082166e-15%2c440.836556 7.163444%2c448 16%2c448 L432%2c448 C440.836556%2c448 448%2c440.836556 448%2c432 L448%2c400 C448%2c391.163444 440.836556%2c384 432%2c384 Z M204.83%2c256 C201.426459%2c255.997344 198.161555%2c257.348219 195.754887%2c259.754887 C193.348219%2c262.161555 191.997344%2c265.426459 192%2c268.83 L192%2c307.17 C191.997344%2c310.573541 193.348219%2c313.838445 195.754887%2c316.245113 C198.161555%2c318.651781 201.426459%2c320.002656 204.83%2c320 L435.17%2c320 C438.573541%2c320.002656 441.838445%2c318.651781 444.245113%2c316.245113 C446.651781%2c313.838445 448.002656%2c310.573541 448%2c307.17 L448%2c268.83 C448.002656%2c265.426459 446.651781%2c262.161555 444.245113%2c259.754887 C441.838445%2c257.348219 438.573541%2c255.997344 435.17%2c256 L204.83%2c256 Z M435.17%2c128 L204.83%2c128 C201.426459%2c127.997344 198.161555%2c129.348219 195.754887%2c131.754887 C193.348219%2c134.161555 191.997344%2c137.426459 192%2c140.83 L192%2c179.17 C191.997344%2c182.573541 193.348219%2c185.838445 195.754887%2c188.245113 C198.161555%2c190.651781 201.426459%2c192.002656 204.83%2c192 L435.17%2c192 C438.573541%2c192.002656 441.838445%2c190.651781 444.245113%2c188.245113 C446.651781%2c185.838445 448.002656%2c182.573541 448%2c179.17 L448%2c140.83 C448.002656%2c137.426459 446.651781%2c134.161555 444.245113%2c131.754887 C441.838445%2c129.348219 438.573541%2c127.997344 435.17%2c128 Z M432%2c0 L16%2c0 C7.163444%2c0 1.082166e-15%2c7.163444 0%2c16 L0%2c48 C1.082166e-15%2c56.836556 7.163444%2c64 16%2c64 L432%2c64 C440.836556%2c64 448%2c56.836556 448%2c48 L448%2c16 C448%2c7.163444 440.836556%2c0 432%2c0 Z'%3e%3c/path%3e%3c/svg%3e");
  margin-bottom: 0;
}

trix-toolbar .trix-button--icon-increase-nesting-level::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 448 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M27.31 363.3l96-96a16 16 0 0 0 0-22.62l-96-96C17.27 138.66 0 145.78 0 160v192c0 14.31 17.33 21.3 27.31 11.3zM432 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm3.17-128H204.83A12.82 12.82 0 0 0 192 300.83v38.34A12.82 12.82 0 0 0 204.83 352h230.34A12.82 12.82 0 0 0 448 339.17v-38.34A12.82 12.82 0 0 0 435.17 288zm0-128H204.83A12.82 12.82 0 0 0 192 172.83v38.34A12.82 12.82 0 0 0 204.83 224h230.34A12.82 12.82 0 0 0 448 211.17v-38.34A12.82 12.82 0 0 0 435.17 160zM432 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 448 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M27.31 363.3l96-96a16 16 0 0 0 0-22.62l-96-96C17.27 138.66 0 145.78 0 160v192c0 14.31 17.33 21.3 27.31 11.3zM432 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm3.17-128H204.83A12.82 12.82 0 0 0 192 300.83v38.34A12.82 12.82 0 0 0 204.83 352h230.34A12.82 12.82 0 0 0 448 339.17v-38.34A12.82 12.82 0 0 0 435.17 288zm0-128H204.83A12.82 12.82 0 0 0 192 172.83v38.34A12.82 12.82 0 0 0 204.83 224h230.34A12.82 12.82 0 0 0 448 211.17v-38.34A12.82 12.82 0 0 0 435.17 160zM432 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z'%3e%3c/path%3e%3c/svg%3e");
  margin-top: 1px;
  margin-bottom: 1px;
}

trix-toolbar .trix-dialogs {
  position: relative;
}

trix-toolbar .trix-dialog {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 1rem 0.625rem;
  background-color: var(--vf-bg-input);
  box-shadow: 0 0px 15px 0px rgba(0, 0, 0, 0.3);
  margin-top: 0.375rem;
  border-radius: 0.25rem;
  z-index: 2;
}

trix-toolbar .trix-input--dialog {
  padding: 0.375rem 0.75rem;
  border: 1px solid var(--vf-border-color-input);
  border-radius: 0.25rem;
  margin-right: 0.5rem;
  font-size: 0.75rem;
  line-height: 1rem;
  background: var(--vf-bg-input);
  color: var(--vf-color-input);
}

trix-toolbar .trix-input--dialog:focus {
  outline: var(--vf-ring-width) solid var(--vf-ring-color) !important;
}

trix-toolbar .trix-input--dialog.validate:invalid {
  border-color: var(--vf-color-danger);
}

trix-toolbar .trix-button--dialog {
  padding: 0.5rem;
  border-left-width: 1px;
  border-color: var(--vf-border-color-input);
  background-color: transparent;
  border-radius: 0;
}

trix-toolbar .trix-button--dialog:not(.trix-active):hover {
  background-color: transparent;
}

trix-toolbar .trix-button--dialog:first-of-type {
  border: 0;
}

trix-toolbar .trix-dialog--link {
  max-width: 36rem;
}

trix-toolbar .trix-dialog__link-fields {
  display: flex;
  align-items: center;
  width: 100%;
}

trix-toolbar .trix-dialog__link-fields .trix-input {
  flex: 1 1 0%;
}

trix-toolbar .trix-dialog__link-fields .trix-button-group {
  flex-grow: 0;
  flex-shrink: 0;
}

trix-editor {
  padding-left: var(--vf-px-input);
  padding-right: var(--vf-px-input);
  padding-bottom: var(--vf-py-input);
  border-radius: var(--vf-radius-large);
  outline: none;
  min-height: 6rem;
}

trix-editor:empty:not(:focus)::before {
  color: var(--vf-color-placeholder);
}

trix-editor [data-trix-mutable]:not(.attachment__caption-editor) {
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}

trix-editor [data-trix-mutable]::-moz-selection,
trix-editor [data-trix-cursor-target]::-moz-selection,
trix-editor [data-trix-mutable] ::-moz-selection {
  background-image: none;
}

trix-editor [data-trix-mutable]::-moz-selection, trix-editor [data-trix-cursor-target]::-moz-selection, trix-editor [data-trix-mutable] ::-moz-selection {
  background-image: none;
}

trix-editor [data-trix-mutable]::selection,
trix-editor [data-trix-cursor-target]::selection,
trix-editor [data-trix-mutable] ::selection {
  background-image: none;
}

trix-editor [data-trix-mutable].attachment__caption-editor:focus::-moz-selection {
  background: highlight;
}

trix-editor [data-trix-mutable].attachment__caption-editor:focus::selection {
  background: highlight;
}

trix-editor [data-trix-mutable].attachment.attachment--file {
  background-color: var(--vf-bg-selected);
}

trix-editor [data-trix-mutable].attachment img {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

trix-editor .attachment {
  position: relative;
}

trix-editor .attachment:hover {
  cursor: default;
}

trix-editor .attachment--preview .attachment__caption:hover {
  cursor: text;
}

trix-editor .attachment__progress {
  position: absolute;
  z-index: 1;
  height: 1.25rem;
  top: 50%;
  left: 0;
  transform: translateY(-0.625rem);
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  opacity: 0.2;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

trix-editor .attachment__progress[value="100"] {
  opacity: 0;
}

trix-editor .attachment__caption-editor {
  display: inline-block;
  padding: 0;
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
  vertical-align: top;
  width: 100%;
  border-width: 0;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  outline: 0;
  background: var(--vf-bg-input);
  color: var(--vf-color-input);
  font-family: inherit;
}

trix-editor .attachment__toolbar {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transform: translateY(-50%);
  text-align: center;
  width: 100%;
}

trix-editor .trix-button-group {
  display: inline-flex;
}

trix-editor .trix-button {
  position: relative;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  margin: 0;
  background-color: transparent;
  color: var(--vf-bg-icon);
  font-size: 0.875rem;
  line-height: 1.25rem;
  white-space: nowrap;
  border-radius: 0;
  border-width: 0;
  outline: 0;
}

trix-editor .trix-button:not(:disabled) {
  cursor: pointer;
}

trix-editor .trix-button--remove {
  display: inline-block;
  overflow-x: hidden;
  padding: 0;
  background-color: var(--vf-bg-input);
  line-height: 1.75rem;
  border-color: var(--vf-color-selected);
  border-radius: 9999px;
  border-width: 1px;
  border-style: solid;
  outline: 0;
  text-indent: -9999px;
  width: 24px;
  height: 24px;
}

trix-editor .trix-button--remove:hover {
  background-color: var(--vf-bg-selected);
}

trix-editor .trix-button--remove::before {
  content: "";
  display: inline-block;
  position: absolute;
  top: 0.125rem;
  right: 0.125rem;
  bottom: 0.125rem;
  left: 0.125rem;
  background-color: var(--vf-color-input);
  opacity: 0.7;
  background-position: center;
  background-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-position: center center;
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z'%3e%3c/path%3e%3c/svg%3e");
}

trix-editor .attachment__metadata-container {
  position: relative;
}

trix-editor .attachment__metadata {
  position: absolute;
  top: 1rem;
  left: 50%;
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  background-color: #000000;
  opacity: 0.7;
  transform: translateX(-50%);
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-radius: 0.25rem;
}

trix-editor .attachment__metadata .attachment__name {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: bottom;
  white-space: nowrap;
  max-width: 100%;
}

trix-editor .attachment__metadata .attachment__size {
  margin-left: 0.25rem;
  white-space: nowrap;
}

.trix-content h1,
trix-editor h1 {
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
  line-height: 1.25;
}

.trix-content a,
trix-editor a {
  color: var(--vf-primary);
}

.trix-content ul,
trix-editor ul {
  padding-left: 2.5rem;
  list-style-type: disc;
}

.trix-content [dir=rtl] ul,
trix-editor [dir=rtl] ul {
  padding-right: 2.5rem;
  list-style-type: disc;
}

.trix-content ol,
trix-editor ol {
  padding-left: 2.5rem;
  list-style-type: decimal;
}

.trix-content [dir=rtl] ol,
trix-editor [dir=rtl] ol {
  padding-right: 2.5rem;
  list-style-type: decimal;
}

.trix-content blockquote,
trix-editor blockquote {
  padding-left: 0.625rem;
  border-left-width: 4px;
  border-color: var(--vf-gray-300);
  border-left-style: solid;
  margin: 0;
}

.trix-content [dir=rtl] blockquote,
.trix-content blockquote[dir=rtl],
trix-editor [dir=rtl] blockquote,
trix-editor blockquote[dir=rtl] {
  padding-left: 0.625rem;
  border-left-width: 4px;
  border-color: var(--vf-gray-300);
}

.trix-content pre,
trix-editor pre {
  display: inline-block;
  overscroll-behavior-x: auto;
  padding: 0.5rem;
  background-color: var(--vf-gray-50);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 0.875rem;
  line-height: 1.25rem;
  vertical-align: top;
  white-space: pre;
  width: 100%;
}

.trix-content img,
trix-editor img {
  max-width: 100%;
  height: auto;
}

.trix-content .attachment__caption,
trix-editor .attachment__caption {
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
}

.trix-content .attachment__caption .attachment__name + .attachment__size::before,
trix-editor .attachment__caption .attachment__name + .attachment__size::before {
  content: " · ";
}

.trix-content * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.trix-content .attachment {
  display: inline-block;
  position: relative;
  max-width: 100%;
}

.trix-content .attachment a {
  text-decoration: none;
}

.trix-content .attachment--preview {
  text-align: center;
  width: 100%;
}

.trix-content .attachment--preview .attachment__caption {
  color: var(--vf-gray-500);
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.trix-content .attachment--file {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 0.125rem;
  margin-top: 0;
  color: var(--vf-gray-700);
  line-height: 1;
  border-radius: 0.25rem;
  border-width: 1px;
  border-color: var(--vf-gray-300);
}

.trix-content .attachment-gallery {
  display: flex;
  position: relative;
  display: flex;
  flex-wrap: wrap;
}

.trix-content .attachment-gallery .attachment {
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  flex-grow: 1;
  flex-shrink: 0;
  width: 33.333333%;
}

.trix-content .attachment-gallery.attachment-gallery--2 .attachment, .trix-content .attachment-gallery.attachment-gallery--4 .attachment {
  width: 50%;
}

.trix-content .attachment__progress {
  display: none;
}

.vf-editor-sm trix-editor {
  padding-left: var(--vf-px-input-sm);
  padding-right: var(--vf-px-input-sm);
  padding-bottom: var(--vf-py-input-sm);
  border-radius: var(--vf-radius-large-sm);
  min-height: 5rem;
}

.vf-editor-sm .trix-content h1,
.vf-editor-sm trix-editor h1 {
  font-size: 1.625rem;
  font-weight: 700;
  line-height: 1.25;
}

.vf-editor-sm trix-toolbar {
  padding: var(--vf-py-input-sm) var(--vf-py-input-sm);
}

.vf-editor-sm trix-toolbar .trix-button--icon {
  width: 2.25rem;
}

.vf-editor-lg trix-editor {
  padding-left: var(--vf-px-input-lg);
  padding-right: var(--vf-px-input-lg);
  padding-bottom: var(--vf-py-input-lg);
  border-radius: var(--vf-radius-large-lg);
}

.vf-editor-disabled trix-toolbar {
  pointer-events: none;
}

.vf-editor-hide-bold .trix-button--icon-bold {
  display: none;
}

.vf-editor-hide-italic .trix-button--icon-italic {
  display: none;
}

.vf-editor-hide-strike .trix-button--icon-strike {
  display: none;
}

.vf-editor-hide-link .trix-button--icon-link {
  display: none;
}

.vf-editor-hide-heading .trix-button--icon-heading-1 {
  display: none;
}

.vf-editor-hide-quote .trix-button--icon-quote {
  display: none;
}

.vf-editor-hide-code .trix-button--icon-code {
  display: none;
}

.vf-editor-hide-bullet-list .trix-button--icon-bullet-list {
  display: none;
}

.vf-editor-hide-number-list .trix-button--icon-number-list {
  display: none;
}

.vf-editor-hide-decrease-nesting .trix-button--icon-decrease-nesting-level {
  display: none;
}

.vf-editor-hide-increase-nesting .trix-button--icon-increase-nesting-level {
  display: none;
}

.vf-editor-hide-attach .trix-button--icon-attach {
  display: none;
}

.vf-editor-hide-undo .trix-button--icon-undo {
  display: none;
}

.vf-editor-hide-redo .trix-button--icon-redo {
  display: none;
}

.dark .trix-content blockquote,
.dark trix-editor blockquote {
  border-color: var(--vf-dark-700);
}

.dark .trix-content pre,
.dark trix-editor pre {
  background-color: var(--vf-dark-900);
}`;G(Ch);Ns.__file="themes/vueform/templates/wrappers/EditorWrapper.vue";function Ah(t,e){switch(t){case"default":return"vf-col-".concat(e);default:return"vf-col-".concat(t,"-").concat(e)}}var Eh={},Lh={templates:{Vueform:El,FormErrors:Ll,FormMessages:xl,FormLanguages:Sl,FormLanguage:Tl,FormTabs:Bl,FormTab:Il,FormSteps:Rl,FormStepsControls:Dl,FormStepsControl:Ml,FormStep:Ol,FormElements:Fl,ElementLayout:Pl,ElementLayoutInline:$l,ElementLoader:zl,ElementLabelFloating:Nl,ElementLabel:Hl,ElementInfo:jl,ElementDescription:Ul,ElementError:Vl,ElementMessage:Wl,ElementText:Ql,ElementAddon:ql,ElementAddonOptions:Kl,ButtonElement:Jl,CaptchaElement:_l,CheckboxElement:Gl,CheckboxgroupElement:Yl,CheckboxgroupElement_tabs:Xl,CheckboxgroupElement_blocks:Zl,DateElement:eo,DatesElement:no,FileElement:ro,GroupElement:io,HiddenElement:ao,ListElement:lo,LocationElement:oo,MultifileElement:so,MultiselectElement:ho,ObjectElement:bo,PhoneElement:wo,RadioElement:yo,RadiogroupElement:ko,RadiogroupElement_tabs:Co,RadiogroupElement_blocks:Ao,SelectElement:Eo,SliderElement:Ro,StaticElement:Do,TagsElement:Mo,TextareaElement:Oo,TextElement:Fo,ToggleElement:Po,EditorElement:$o,TTextareaElement:No,TTextElement:jo,TEditorElement:Vo,CheckboxgroupCheckbox:Wo,CheckboxgroupCheckbox_tabs:Qo,CheckboxgroupCheckbox_blocks:qo,DragAndDrop:Ko,FilePreview:Jo,FilePreview_image:_o,FilePreview_gallery:Go,RadiogroupRadio:Yo,RadiogroupRadio_tabs:Xo,RadiogroupRadio_blocks:Zo,DatepickerWrapper:es,EditorWrapper:Ns},classes:Eh,columns:Ah};/*!
 * Vueform Mask Plugin v1.0.5 (https://github.com/vueform/plugin-mask)
 * Copyright (c) 2024-present Adam Berecz <adam@vueform.com>
 * Licensed under the MIT License
 */var xh=t=>((e={},n=null)=>({apply:["TextElement","PhoneElement"],props:{mask:{required:!1,type:[String,Object,Array,Function]},unmask:{require:!1,type:Boolean,default:!1},allowIncomplete:{require:!1,type:Boolean,default:!1}},setup(r,i,l){const{formatLoad:a,mask:o,inputType:s,unmask:u,allowIncomplete:c,name:A}=Pe(r),{nullValue:k,value:x,el$:y,path:C,form$:S,defaultValue:B,resetting:M,resetValidators:E,input:$,mask:Q,inputType:R}=l;let _=K(()=>!o.value&&Q?Q.value:o.value),Y=K(()=>!(s!=null&&s.value)&&R?R.value:s.value);if(!(_!=null&&_.value))return l;const I=Le(null),Z=Le(x.value),X=Le([]),V=Le(!1),W=K(()=>typeof e=="function"?e(n):e),fe=K(()=>{let P=typeof _.value=="function"?be(_.value):re(_.value);return W.value.definitions&&(P={...P,definitions:Oe({...W.value.definitions,...P.definitions})}),W.value.blocks&&(P={...P,blocks:Oe({...W.value.blocks,...P.blocks})}),P.definitions&&(P={...P,definitions:Oe(P.definitions)}),P.blocks&&(P={...P,blocks:Oe(P.blocks)}),P}),ie=K({get:()=>Z.value,set:P=>Z.value=P}),de=K(()=>[void 0,null,""].indexOf(ie.value)!==-1),re=P=>typeof P=="string"?{mask:se(P)}:P instanceof RegExp?{mask:P}:Array.isArray(P)?P.map(re):P&&typeof P=="object"?pe(P):{mask:P},Oe=P=>Object.keys(P).reduce((ve,Be)=>({...ve,[Be]:re(P[Be])}),{}),pe=P=>{let ve={...P};return P.mask==="number"&&(ve.mask=Number),P.mask==="range"&&(ve.mask=n.MaskedRange),P.mask==="enum"&&(ve.mask=n.MaskedEnum),P.mask==="date"&&(ve.mask=Date),P.placeholder!==void 0&&(ve.lazy=!ve.placeholder),P.caseInsensitive===void 0||P.matchValue||(ve.matchValue=O),P.dispatch&&(ve.dispatch=(Be,qe)=>P.dispatch(Be,qe,y.value,S.value)),Array.isArray(P.mask)&&(ve.mask=P.mask.map(re),ve.dispatch||(P.mask.some(Be=>Be.startsWith)&&(ve.dispatch=(Be,qe)=>{const Ke=(qe.value+Be).replace(/\D/g,"");return qe.compiledMasks.find(Ge=>Array.isArray(Ge.startsWith)?Ge.startsWith.some(vt=>Ke.indexOf(vt)===0):Ke.indexOf(Ge.startsWith)===0)}),P.element&&(ve.dispatch=(Be,qe)=>{var Ge;let Ke=(Ge=S.value.el$(P.element))==null?void 0:Ge.value;return qe.compiledMasks.find(vt=>vt.when==Ke||!vt.when)}))),P.blocks&&(ve.blocks=Object.keys(P.blocks).reduce((Be,qe)=>({...Be,[qe]:re(P.blocks[qe])}),{})),ve},ae=()=>{ie.value=I.value.displayValue,c.value||I.value.masked.isComplete?x.value=u.value?I.value.masked.unmaskedValue:I.value.value:x.value=k.value},z=()=>{var P;I.value&&oe(),I.value=n(y.value.input,fe.value),I.value.on("accept",()=>{ae()}),ae(),X.value.map(ve=>ve()),(P=fe.value)!=null&&P.element&&X.value.push(Se(K(()=>S.value.el$(fe.value.element).value),()=>{V.value?V.value=!1:ie.value=k.value,He()}))},oe=()=>{I.value&&I.value.destroy()},He=()=>{hn(()=>{z()})},be=P=>re(P(n)),se=P=>P.replace(/\\\\/g,"\\"),O=(P,ve,Be)=>n.MaskedEnum.DEFAULTS.matchValue(P.toLowerCase(),ve.toLowerCase(),Be),te=()=>Y.value==="text"||(console.error(`Input mask only works with type="text" (found at: '${C.value}').`),!1);return Kn(()=>{te()&&z()}),Se(Y,P=>{te()}),Se(fe,(P,ve)=>{I.value&&z()},{deep:!0}),{...l,Mask:I,destroyMask:oe,initMask:z,syncMask:ae,refreshMask:He,handleInput:()=>{},model:ie,load:(P,ve=!1)=>{V.value=!0,x.value=k.value;let Be=ve&&a.value?a.value(P,S.value):P;x.value=Be,I.value&&(I.value[u.value?"unmaskedValue":"value"]=typeof Be=="number"?Be.toString():Be)},update:P=>{V.value=!0,x.value=k.value,x.value=P,I.value&&(I.value[u.value?"unmaskedValue":"value"]=typeof P=="number"?P.toString():P)},clear:()=>{$.value.value="",ie.value=k.value,x.value=k.value,z()},reset:()=>{M.value=!0,$.value.value=B.value,ie.value=B.value,x.value=B.value,E(),z()},empty:de}}}))(t,qs);const Ih=Ks({theme:Lh,locales:{en:Js},locale:"en",plugins:[xh]});export{Ih as default};
