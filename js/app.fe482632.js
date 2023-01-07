(function(){"use strict";var e={4741:function(e,r,t){var n=t(9242),a=t(3396);const i={class:"wrapper"},o={class:"main"},s=(0,a._)("footer",null,[(0,a._)("div",{class:"attribution"},[(0,a.Uk)(" Challenge by "),(0,a._)("a",{href:"https://www.frontendmentor.io?ref=challenge",target:"_blank"},"Frontend Mentor"),(0,a.Uk)(". Coded by "),(0,a._)("a",{href:"#"},"Evgi Ss"),(0,a.Uk)(". ")])],-1);function c(e,r,t,n,c,u){const l=(0,a.up)("CardsWrapper");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a._)("main",o,[(0,a.Wm)(l,{defaultTimeFrame:"daily"})]),s])}const u={class:"app"};function l(e,r,t,n,i,o){const s=(0,a.up)("CardProfile"),c=(0,a.up)("CardItem");return(0,a.wg)(),(0,a.iD)("div",u,[(0,a.Wm)(s,{onOnChangeTimeFrame:n.changeTimeFrame},null,8,["onOnChangeTimeFrame"]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.items,(e=>((0,a.wg)(),(0,a.j4)(c,{key:e.type,data:e,timeFrame:n.timeFrame},null,8,["data","timeFrame"])))),128))])}var m=t(7139),p=t.p+"./img/image-jeremy.8e0382f0.png";const f={class:"profile"},d=(0,a.uE)('<div class="profile__header"><div class="profile__header-avatar"><img src="'+p+'" alt="img-avatar"></div><p class="profile__header-name"><span class="note">Report for</span><br> Jeremy Robson </p></div>',1),v={class:"profile__timeframes"},y=["onClick"];function h(e,r,t,n,i,o){return(0,a.wg)(),(0,a.iD)("section",f,[d,(0,a._)("div",v,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.timeFrames,((e,r)=>((0,a.wg)(),(0,a.iD)("a",{href:"#",key:r,class:(0,m.C_)(["profile__timeframes-link",{active:r==n.selectedItem}]),onClick:t=>o.changeTimeFrame(e.value,r)},(0,m.zw)(e.name),11,y)))),128))])])}var _=t(4870),g={methods:{changeTimeFrame(e,r){this.selectedItem=r,this.$emit("onChangeTimeFrame",e)}},setup(){const e=(0,_.iH)(null),r=(0,_.iH)(0);return(0,a.bv)((()=>{e.value=[{value:"daily",name:"Daily"},{value:"weekly",name:"Weekly"},{value:"monthly",name:"Monthly"}]})),{name:name,timeFrames:e,selectedItem:r}}},w=t(89);const k=(0,w.Z)(g,[["render",h]]);var F=k,b=t.p+"./img/icon-ellipsis.569fff1c.svg";const C=(0,a._)("div",{class:"card__topframe"},null,-1),O={class:"card__content"},T={class:"card__header"},j={class:"card__title"},D=(0,a._)("div",{class:"card__img"},[(0,a._)("img",{src:b,alt:"img"})],-1),W={class:"card__hours"},x={class:"card__hours-current"},H={class:"card__hours-last"};function S(e,r,t,n,i,o){return(0,a.wg)(),(0,a.iD)("section",{class:(0,m.C_)(["card",t.data.type])},[C,(0,a._)("div",O,[(0,a._)("div",T,[(0,a._)("p",j,(0,m.zw)(t.data.title),1),D]),(0,a._)("div",W,[(0,a._)("div",x,(0,m.zw)(t.data.timeframes[t.timeFrame].current)+"hrs ",1),(0,a._)("div",H,(0,m.zw)(n.checkTimeFrame(t.timeFrame))+" "+(0,m.zw)(t.data.timeframes[t.timeFrame].previous)+"hrs ",1)])])],2)}var z={props:{data:Object,timeFrame:String},setup(){const e=e=>{switch(e){case"daily":return"Last Day - ";case"weekly":return"Last Week - ";case"monthly":return"Last Month - "}};return{checkTimeFrame:e}}};const I=(0,w.Z)(z,[["render",S]]);var P=I;function E(){return[{type:"work",title:"Work",timeframes:{daily:{current:5,previous:7},weekly:{current:32,previous:36},monthly:{current:103,previous:128}}},{type:"play",title:"Play",timeframes:{daily:{current:1,previous:2},weekly:{current:10,previous:8},monthly:{current:23,previous:29}}},{type:"study",title:"Study",timeframes:{daily:{current:0,previous:1},weekly:{current:4,previous:7},monthly:{current:13,previous:19}}},{type:"exercise",title:"Exercise",timeframes:{daily:{current:1,previous:1},weekly:{current:4,previous:5},monthly:{current:11,previous:18}}},{type:"social",title:"Social",timeframes:{daily:{current:1,previous:3},weekly:{current:5,previous:10},monthly:{current:21,previous:23}}},{type:"self-care",title:"Self Care",timeframes:{daily:{current:0,previous:1},weekly:{current:2,previous:2},monthly:{current:7,previous:11}}}]}var M={components:{CardProfile:F,CardItem:P},props:{defaultTimeFrame:String},methods:{},setup(e){const r=(0,_.iH)(null),t=(0,_.iH)("");(0,a.bv)((()=>{r.value=E(),t.value=e.defaultTimeFrame}));const n=e=>{t.value=e};return{items:r,timeFrame:t,changeTimeFrame:n}}};const Z=(0,w.Z)(M,[["render",l]]);var L=Z,U={name:"App",components:{CardsWrapper:L}};const K=(0,w.Z)(U,[["render",c]]);var R=K;(0,n.ri)(R).mount("#app")}},r={};function t(n){var a=r[n];if(void 0!==a)return a.exports;var i=r[n]={exports:{}};return e[n](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(r,n,a,i){if(!n){var o=1/0;for(l=0;l<e.length;l++){n=e[l][0],a=e[l][1],i=e[l][2];for(var s=!0,c=0;c<n.length;c++)(!1&i||o>=i)&&Object.keys(t.O).every((function(e){return t.O[e](n[c])}))?n.splice(c--,1):(s=!1,i<o&&(o=i));if(s){e.splice(l--,1);var u=a();void 0!==u&&(r=u)}}return r}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[n,a,i]}}(),function(){t.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(r,{a:r}),r}}(),function(){t.d=function(e,r){for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){t.p=""}(),function(){var e={143:0};t.O.j=function(r){return 0===e[r]};var r=function(r,n){var a,i,o=n[0],s=n[1],c=n[2],u=0;if(o.some((function(r){return 0!==e[r]}))){for(a in s)t.o(s,a)&&(t.m[a]=s[a]);if(c)var l=c(t)}for(r&&r(n);u<o.length;u++)i=o[u],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(l)},n=self["webpackChunktime_tracker"]=self["webpackChunktime_tracker"]||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(4741)}));n=t.O(n)})();
//# sourceMappingURL=app.fe482632.js.map