import{_ as rt}from"./C4WAmt-P.js";import{d as Q,a as Y,m as Z,s as D,aT as tt,L as ct,a0 as f,H as g,g as t,o as d,c as A,e as n,t as o,B as y,C as m,f as z,W as O,i as h,b as x,n as E,A as et,p as at,X as ut,ai as _t,b3 as dt,j as pt,a7 as mt,k as bt,l as vt,F as ft,a4 as yt,K as ht,h as wt,_ as gt}from"./7PQ9d4dP.js";import{p as kt}from"./RQfXHScZ.js";import{_ as Bt}from"./BjUcVok3.js";import"./ao6LVzqx.js";import"./Z4E70_i9.js";import"./Do2gu6g3.js";import"./UCCBr-NG.js";import"./D0WEjs_T.js";const xt={key:0,class:"tw-bg-bg-secondary tw-p-4 tw-rounded tw-mb-4"},zt={key:0,class:"tw-flex tw-justify-center tw-font-bold"},Ct={class:"tw-mx-0.5"},It={key:1,class:"tw-flex tw-justify-center tw-font-bold"},Lt={class:"tw-me-1"},Mt={class:"tw-flex tw-justify-center tw-mt-2"},Tt={class:"tw-mx-1"},St=Q({__name:"BattleWinMessage",props:{battleBoard:{},battleData:{},status:{},battleId:{}},emits:["update-board"],setup(G,{emit:i}){const V=i,w=G,{t:_}=Y(),C=Z(),{getMainUser:I}=D(C),L=tt(),{claimBattlePrize:M}=L,{platformCommasFormat:T}=ct(),b=f(!1),a=g(()=>{const l={ids:[],names:[],prize:0,can_claim_prize:!1};return w.battleBoard.forEach(c=>{+c.prize>0&&(l.ids.push(c.main_user_id),l.names.push(c.username)),c.main_user_id===I.value&&(l.prize=+c.prize,l.can_claim_prize=c.can_claim_prize)}),l}),S=g(()=>{var l;return(l=w.battleData)!=null&&l.points_entry_fee?"nuxPoint":w.battleData.battle_currency}),j=g(()=>a.value.prize&&!a.value.can_claim_prize&&!b.value),W=g(()=>a.value.prize&&a.value.can_claim_prize&&!b.value),k=async()=>{try{await M({battleId:w.battleData.battle_id}),b.value=!0,V("update-board")}catch(l){console.error("claimPrize BattleWinMessage",l)}};return(l,c)=>{const u=et,s=at;return l.status===3&&t(a).ids.length?(d(),A("div",xt,[!t(b)&&t(a).ids.includes(t(I))?(d(),A("div",zt,[n("span",null,o(t(_)("congratulations"))+"!",1),n("span",Ct,o(t(_)("you")),1),n("span",null,o(t(_)("have_won_the_battle")),1)])):(d(),A("div",It,[n("span",Lt,o(t(a).names.join(", ")),1),n("span",null,o(t(a).names.length>1?t(_)("have_won_the_battle"):t(_)("has_won_the_battle")),1)])),n("div",Mt,[!t(a).prize||t(b)?(d(),y(u,{key:0,link:t(O).pvp_battle,"is-link":""},{default:m(()=>[z(o(t(_)("return_to_battles")),1)]),_:1},8,["link"])):h("",!0),t(W)?(d(),y(u,{key:1,onClick:k},{default:m(()=>[z(o(t(_)("claim"))+" ",1),n("span",Tt,o(t(T)(t(kt),t(a).prize)),1),x(s,{src:t(E)(t(S)),alt:t(S)},null,8,["src","alt"])]),_:1})):h("",!0),t(j)?(d(),y(u,{key:2,link:t(O).pvp_battle,"is-link":""},{default:m(()=>[z(o(t(_)("back_to_battles")),1)]),_:1},8,["link"])):h("",!0)])])):h("",!0)}}}),$t={class:"tw-grow"},Nt={class:"players"},Pt={class:"tw-text-text-tertiary"},Ut={class:"invite"},Dt={class:"tw-text-text-tertiary"},Vt={class:"tw-text-text-brand"},jt={class:"tw-flex tw-itwms-center tw-gap-1"},Wt={class:"tw-flex tw-itwms-center tw-gap-1"},Ft=Q({__name:"lobby-[id]",setup(G){const{t:i}=Y(),V=ut(),w=_t(),{setBreadcrumbs:_}=dt();_([{label:i("battles"),path:V({name:"battles"})},{label:i("pvp_lobby")}]);const C=tt(),I=pt(),L=Z(),M=mt(),{isLessContainerTablet:T,isMultiBalance:b}=D(I),{getUserBattle:a,getCurrency:S}=D(L),{isLoggedIn:j}=D(M),{switchUser:W}=M;let k,l;const c=f(!1),u=f(null),s=f(null),F=f([]),H=f(!0),st=f([{title:"#",align:"left",key:"position",width:"24px"},{title:i("players"),align:"left",key:"username"},{title:i("status"),align:"left",key:"status",hideTablet:!0,hideMobile:!0},{title:i("spins_lobby"),align:"left",key:"spins_left",hideTablet:!0,hideMobile:!0},{title:i("winnings"),align:"left",key:"winnings"},{title:i("consecutive_wins"),align:"left",key:"max_consecutive_wins",hideTablet:!0,hideMobile:!0},{title:i("max_multiplier"),align:"left",key:"max_multiplier",hideTablet:!0,hideMobile:!0},{title:i("prize"),align:"left",key:"prize"}]),nt=g(()=>F.value.map((e,p)=>({position:p+1,...e,status:i("leader_"+e.status.replace(" ","_").toLowerCase())}))),lt=g(()=>T.value?"24px repeat(3, 1fr)":"24px repeat(7, 1fr)"),ot=()=>{ht(location.href),c.value=!0,setTimeout(()=>{c.value=!1},4e3)},K=async()=>{const{data:e,status:p}=await C.fetchBattleByLink({link:w.params.id});if(p){if(clearInterval(k),s.value=e,u.value=e.battle_id,a.value){const v={...a.value};v.timer=e.timer,L.setUserBattle(v)}(e.battle_status===2||e.battle_status===1)&&(k=window.setInterval(()=>{K()},1e4))}else s.value=null,u.value=null},R=async e=>{const{data:p}=await C.fetchBattleLeaderBoard({battleId:e});F.value=p};return bt(async()=>{var e,p,v,$,N,P,B,U;await K(),u.value&&(await R(u.value),(((e=s.value)==null?void 0:e.battle_status)===1||((p=s.value)==null?void 0:p.battle_status)===2)&&(l=window.setInterval(()=>{u.value&&R(u.value)},1e4))),j.value&&b.value&&((v=a.value)==null?void 0:v.player_origin_currency)!==S.value&&(($=a.value)==null?void 0:$.battle_link)===((N=s.value)==null?void 0:N.link)&&(((P=s.value)==null?void 0:P.battle_status)===1||((B=s.value)==null?void 0:B.battle_status)===2)&&W((U=a.value)==null?void 0:U.player_origin_currency),H.value=!1}),vt(()=>{clearInterval(k),clearInterval(l)}),ft({title:()=>{var e;return((e=s.value)==null?void 0:e.game_name)??"PVP Match"}}),(e,p)=>{const v=rt,$=St,N=wt,P=et,B=at,U=Bt,it=yt;return d(),y(it,{loading:t(H),class:"lobby"},{default:m(()=>{var X,q,J;return[n("div",null,[t(s)?(d(),y(v,{key:0,item:t(s),"is-column":!t(T)},null,8,["item","is-column"])):h("",!0)]),n("div",$t,[x($,{"battle-board":t(F),"battle-data":t(s),status:((X=t(s))==null?void 0:X.battle_status)||0,"battle-id":t(u),onUpdateBoard:R},null,8,["battle-board","battle-data","status","battle-id"]),n("div",Nt,[n("span",Pt,o((q=t(s))==null?void 0:q.active_participant_count)+" "+o(t(i)("players")),1),n("div",Ut,[n("span",Dt,o(t(i)((J=t(s))!=null&&J.is_private?"private_match":"public_match")),1),x(P,{"label-key":t(c)?"link_copied":"invite_players","is-with-icon":"","color-type":"secondary","is-disabled":t(c),onClick:ot},{default:m(()=>[x(N,{name:"copy",size:20})]),_:1},8,["label-key","is-disabled"])])]),x(U,{header:t(st),list:t(nt),class:"leader-board",type:"grid","has-dash":"","grid-templates":t(lt)},{"header-winnings":m(({header:r})=>[n("span",Vt,o(r.title),1)]),winnings:m(({item:r})=>[n("div",jt,[z(o(r.winnings||"-")+" ",1),r.currency&&r.winnings?(d(),y(B,{key:0,src:t(E)(r.currency),alt:r.currency},null,8,["src","alt"])):h("",!0)])]),prize:m(({item:r})=>[n("div",Wt,[z(o(r.prize||"-")+" ",1),r.currency&&r.prize?(d(),y(B,{key:0,src:t(E)(r.currency),alt:r.currency},null,8,["src","alt"])):h("",!0)])]),_:1},8,["header","list","grid-templates"])])]}),_:1},8,["loading"])}}}),Ot=gt(Ft,[["__scopeId","data-v-c2d9e6f5"]]);export{Ot as default};