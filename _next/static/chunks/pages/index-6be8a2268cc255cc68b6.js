_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"23aj":function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return O})),n.d(t,"default",(function(){return m}));var r=n("nKUr"),s=n("q1tI"),i=n("YFqc"),a=n.n(i),c=n("fRaF"),l=n("7Ubz"),o=function(){var e,t=Object(s.useState)(null),n=t[0],i=t[1];return Object(s.useEffect)((function(){fetch("https://api.mcsrvstat.us/2/95.217.120.173").then((function(e){return e.json()})).then((function(e){return i(e)}))}),[]),Object(r.jsxs)("div",{className:"server-status",children:[Object(r.jsx)("h3",{children:"Palvelin"}),!n&&Object(r.jsx)("div",{className:"loading-spinner-container",children:Object(r.jsx)("div",{className:"loading-spinner"})}),n&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("span",{className:" online",children:n.online?"P\xe4\xe4ll\xe4":"Pois p\xe4\xe4lt\xe4"}),Object(r.jsxs)("span",{className:"server-version",children:["Versio: ",n.version]}),Object(r.jsx)("span",{className:"server-address",children:"mc.karanteeni.net"}),Object(r.jsx)("span",{className:"server-ip",children:n.ip}),Object(r.jsxs)("span",{className:"server-player-count",children:["Pelaajia paikalla: ",(null===n||void 0===n||null===(e=n.players)||void 0===e?void 0:e.online)||0]})]})]})},j=function(){return Object(r.jsxs)("div",{className:"vote-buttons",children:[Object(r.jsx)("h3",{children:"\xc4\xe4nest\xe4minen"}),Object(r.jsx)("a",{href:"https://minecraft-mp.com/server/194896/vote/",target:"_blank",rel:"noreferrer",children:"\xc4\xe4nestyslinkki 1"}),Object(r.jsx)("a",{href:"https://topg.org/Minecraft/in-515100",target:"_blank",rel:"noreferrer",children:"\xc4\xe4nestyslinkki 2"})]})},d=n("A2yl"),u=n("ODXe"),h=n("YnrZ"),b=function(e){if(!e)return null;var t=e.split("."),n=Object(u.a)(t,3),r=n[0],s=n[1],i=n[2];return Date.parse([s,r,i].join("."))},p=function(e){var t=e.title,n=e.description,s=e.dates,i=s.startDate,a=s.endDate,c=a?i+" - "+a:i;return Object(r.jsxs)("div",{className:"server-event",children:[Object(r.jsx)("h4",{children:t}),Object(r.jsx)("p",{children:n}),Object(r.jsx)("time",{children:c})]})},f=function(){var e=h,t=Date.now(),n=e.filter((function(e){var n=b(e.dates.startDate),r=e.dates.endDate?b(e.dates.endDate):n+864e5;return n<t&&r>t})),s=e.filter((function(e){return b(e.dates.startDate)>t}));return n||s?Object(r.jsxs)("div",{className:"server-events",children:[n.length>0&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h3",{children:"Meneill\xe4\xe4n olevat tapahtumat"}),n.map((function(e,t){return Object(r.jsx)(p,{title:e.title,description:e.description,dates:e.dates},t)}))]}),s.length>0&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h3",{children:"Tulevat tapahtumat"}),s.map((function(e,t){return Object(r.jsx)(p,{title:e.title,description:e.description,dates:e.dates},t)}))]})]}):null},O=!0;function m(e){var t=e.visiblePost,n=e.olderPosts;return Object(r.jsx)(l.a,{home:!0,description:"Karanteeni on suomalainen minecraft palvelin.",children:Object(r.jsxs)("div",{className:"home-grid",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("section",{children:Object(r.jsx)(o,{})}),Object(r.jsx)("section",{children:Object(r.jsx)(j,{})})]}),Object(r.jsx)("div",{className:"home-grid-main",children:Object(r.jsx)("section",{children:Object(r.jsx)(d.a,{postData:t})})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("section",{children:Object(r.jsx)(f,{})}),Object(r.jsxs)("section",{children:[Object(r.jsx)("h3",{children:"Vanhempia julkaisuja"}),Object(r.jsx)("ul",{className:"posts",children:n.map((function(e){var t=e.id,n=e.date,s=e.title;return Object(r.jsxs)("li",{className:"list-item",children:[Object(r.jsx)(a.a,{href:"/julkaisut/".concat(t),children:Object(r.jsx)("a",{children:s})}),Object(r.jsx)("small",{className:"secondary-color",children:Object(r.jsx)(c.a,{dateString:n})})]},t)}))}),Object(r.jsx)(a.a,{href:"/julkaisut",children:"Kaikki julkaisut"})]})]})]})})}},A2yl:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("nKUr"),s=n("fRaF");function i(e){var t=e.postData;return Object(r.jsxs)("article",{className:"post",children:[Object(r.jsx)("h2",{className:"post-title",children:t.title}),Object(r.jsx)("div",{className:"secondary-color",children:Object(r.jsx)(s.a,{dateString:t.date})}),Object(r.jsx)("div",{dangerouslySetInnerHTML:{__html:t.contentHtml}})]})}},ODXe:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,s=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){s=!0,i=l}finally{try{r||null==c.return||c.return()}finally{if(s)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return s}))},YnrZ:function(e){e.exports=JSON.parse('[{"title":"Maailmanloppu","description":"Haha, TNT printer go brrr.","dates":{"startDate":"05.11.2020","endDate":"06.11.2020"}},{"title":"Mapreset","description":"Palvelimen aukaisu.","dates":{"startDate":"07.11.2020"}},{"title":"Karanteenin joulu","description":"Karanteenin joulua vietet\xe4\xe4n joulukalenterin muodossa koko joulun ajan.","dates":{"startDate":"1.12.2019","endDate":"28.12.2019"}},{"title":"Karanteenin p\xe4\xe4si\xe4isjuhla","description":"P\xe4\xe4si\xe4isjuhlia vietetet\xe4\xe4n pitkin p\xe4iv\xe4\xe4!","dates":{"startDate":"3.4.2021"}}]')}},[["/EDR",0,1,5,3,2,4,6]]]);