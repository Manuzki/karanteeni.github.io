_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[24],{ECgv:function(a,e,t){a.exports={"card-heading":"admincard_card-heading__3K9Wr","card-container":"admincard_card-container__1GF-Y",omistaja:"admincard_omistaja__2RTF5",admin:"admincard_admin__3qQNt",operator:"admincard_operator__26Mj8",moderator:"admincard_moderator__2frOP",builder:"admincard_builder__WFVoB",kuolematon:"admincard_kuolematon__CamW5",card:"admincard_card__2h70c",background:"admincard_background__2UO_B",content:"admincard_content__28xCe",name:"admincard_name__1hS9W",type:"admincard_type__1IwZT",strength:"admincard_strength__3LmDv","strength-bullet":"admincard_strength-bullet__3oHFb",avatar:"admincard_avatar__2cR4A",footer:"admincard_footer__EfPny"}},YTSb:function(a,e,t){"use strict";function n(a,e){(null==e||e>a.length)&&(e=a.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=a[t];return n}function i(a,e){return function(a){if(Array.isArray(a))return a}(a)||function(a,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(a)){var t=[],n=!0,i=!1,r=void 0;try{for(var s,c=a[Symbol.iterator]();!(n=(s=c.next()).done)&&(t.push(s.value),!e||t.length!==e);n=!0);}catch(o){i=!0,r=o}finally{try{n||null==c.return||c.return()}finally{if(i)throw r}}return t}}(a,e)||function(a,e){if(a){if("string"===typeof a)return n(a,e);var t=Object.prototype.toString.call(a).slice(8,-1);return"Object"===t&&a.constructor&&(t=a.constructor.name),"Map"===t||"Set"===t?Array.from(a):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(a,e):void 0}}(a,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.r(e);var r=t("nKUr"),s=t("rePB"),c=t("q1tI"),o=t.n(c),l=t("YFqc"),d=t.n(l),u=t("ECgv"),m=t.n(u),j={prefix:"far",iconName:"arrow-alt-circle-right",icon:[512,512,[],"f35a","M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"]},h=t("IP2g"),p=function(a){var e=a.children;return Object(r.jsxs)("p",{children:[Object(r.jsx)(h.a,{icon:j,className:"".concat(m.a["strength-bullet"])}),e]})},k=function(a){var e=a.rank,t=a.uuid,n=a.name,i=a.description,s=a.strengths;return console.log(e),Object(r.jsx)("div",{className:"".concat(m.a["card-container"]," ").concat(m.a[e]),children:Object(r.jsxs)("div",{className:"".concat(m.a.card," ").concat(m.a[e]),children:[Object(r.jsx)("div",{className:"".concat(m.a.background," ").concat(m.a[e]),children:Object(r.jsx)("div",{className:"".concat(m.a.avatar," ").concat(m.a[e]),children:Object(r.jsx)("img",{src:"https://visage.surgeplay.com/full/".concat(t)})})}),Object(r.jsxs)("div",{className:"".concat(m.a.content," ").concat(m.a[e]),children:[Object(r.jsx)("div",{className:"".concat(m.a.type," ").concat(m.a[e]),children:e}),Object(r.jsx)("div",{className:"".concat(m.a.name," ").concat(m.a[e]),children:n}),Object(r.jsx)("div",{className:"".concat(m.a.strength," ").concat(m.a[e]),children:s.map((function(a,e){return Object(r.jsx)(p,{children:a},e)}))})]}),Object(r.jsx)("div",{className:"".concat(m.a.footer),children:Object(r.jsx)("p",{children:i})})]})})},b=t("rXMc"),v=t("7Ubz"),f=t("jX+G");function y(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function O(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?y(Object(t),!0).forEach((function(e){Object(s.a)(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}var g=function(a){switch(a){case"omistaja":return"Sellout";case"admin":return"Olisikohan jostakin operaattorista t\xe4h\xe4n hommaan?";case"operator":return"Operaattoreita ei n\xe4kyvill\xe4";case"moderator":return"Hmm.. moderaattoreistahan on pulaa! Haku yll\xe4pitoon on aina auki!";case"builder":return"Ei rakentajia? Kuka nyt rakentaa Gauriksen spawnit?"}},_=function(a){var e=a.data,t=a.rank;return Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{className:"tag ".concat(t," minecraft"),children:t}),Object(r.jsxs)("div",{className:"admin-card-wrapper",children:[0===e.length&&Object(r.jsx)("p",{children:g(t)}),e.length>=0&&e.map((function(a,e){return Object(c.createElement)(k,O(O({},a),{},{rank:t,key:e}))}))]})]})},x=function(){var a=i(o.a.useState(f),2),e=a[0],t=(a[1],i(o.a.useState(Object.keys(f)),2)),n=t[0];t[1];return e&&n?Object(r.jsx)("div",{children:n.map((function(a){return Object(r.jsx)(_,{rank:a,data:e[a]},a)}))}):null};e.default=function(){return Object(r.jsxs)(v.a,{title:"Yll\xe4pito",className:"yllapito",description:"Karanteenin yll\xe4pito summattuna",children:[Object(r.jsx)(b.a,{heading:"Yll\xe4pito",lead:"Keit\xe4 yll\xe4pit\xe4j\xe4t ovat ja mit\xe4 he tekev\xe4t?"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:"K\xe4yt\xe4nn\xf6ss\xe4 yll\xe4pit\xe4j\xe4t pit\xe4v\xe4t vapaaehtoisesti palvelinta pystyss\xe4 eri tavoin. Meill\xe4 on niit\xe4 varten kasa yll\xe4pitoarvoja, jotta voimme jakaa ty\xf6teht\xe4vi\xe4 kokemuksen ja osaamisen, sek\xe4 my\xf6skin ajan mukaan. Ylentyminen on mahdollista, tosin Rakentajalla vain, mik\xe4li siirtynee Moderaattoriksi ennen sit\xe4. Listataan arvoja hieman ja kerrotaan mit\xe4 kukakin tekee!"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{className:"tag moderator",children:"Rakentaja"}),", meid\xe4n visuaalisten ja luovien ihmisten arvo, johon voi p\xe4\xe4st\xe4"," ",Object(r.jsx)(d.a,{href:"/yphaku",children:"hakemalla"}),"! Heid\xe4n teht\xe4v\xe4 on rakentaa palvelimen",Object(r.jsx)("span",{"data-toggle":"tooltip","data-placement":"top",title:"Spawnit, hubit, erilaiset huoneet",children:Object(r.jsx)("b",{children:" p\xe4\xe4rakennukset"})}),". Jos yht\xe4\xe4n katselette ymp\xe4rille, tajuatte, ett\xe4 se on heid\xe4n k\xe4sialaa kokonaisuudessaan. He ovat samalla viivalla moderaattoreiden kanssa ja toimivat varalla vain, mik\xe4li palvelimella ei ole moderaattoria tai ylemp\xe4\xe4 paikalla. Rakentajien teht\xe4viin ",Object(r.jsx)("b",{children:"EI KUULU"})," nahisteluiden selvitt\xe4minen!"]})}),Object(r.jsx)("li",{children:Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{className:"tag builder",children:"Moderator"})," on arvo, johon p\xe4\xe4set' '",Object(r.jsx)(d.a,{href:"/yphaku",children:"hakemalla"}),". Heid\xe4n teht\xe4v\xe4n\xe4 on pit\xe4\xe4 chat siistin\xe4, suojata alueita, tarkistaa grieffit ja vied\xe4 ne eteenp\xe4in, sek\xe4 purkaa nahisteluita pelaajien v\xe4lill\xe4."]})}),Object(r.jsx)("li",{children:Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{className:"tag operator",children:"Operator"})," on moderaattorista seuraava yll\xe4pitoarvo. T\xe4h\xe4n arvoon p\xe4\xe4see vain, mik\xe4li muu yll\xe4pito on vakuuttunut moderaattorin osaamisesta, aktiivisuudesta ja motivaatiosta. Operaattorit siirtyv\xe4t vastuullisempiin hommiin (mm. grief, varastus, kotien palautus) ker\xe4tyn luottamuksen ansiosta. He eiv\xe4t kiinnit\xe4 huomiota niin paljon nahisteluun chatissa, vaikka tarpeen tullen voivat ottaa ohjat ja antaa vinkkej\xe4 modeille. :)"]})}),Object(r.jsx)("li",{children:Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{className:"tag admin",children:"Admin"})," on seuraavaksi korkein yll\xe4pitoarvo, jolla on oikeudet tehd\xe4 k\xe4yt\xe4nn\xf6ss\xe4 kaikkea, usein p\xe4\xe4t\xf6ksiin vaikuttaa muun yll\xe4pidon mielipide. T\xe4h\xe4n porukkaan kuuluu sekalaista v\xe4ke\xe4 osaamisen kannalta. On kehitt\xe4ji\xe4, on entisi\xe4 rakentajia, on tavallisia rivimiehi\xe4. Adminit tekev\xe4t eniten taustalla hommaa (mm. tapahtumien, pluginien, mapresettien yms. kanssa), mutta my\xf6s vaativimmat tapaukset hoidetaan heid\xe4n kautta tarpeen mukaan."]})}),Object(r.jsx)("li",{children:Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{className:"tag omistaja",children:"Omistaja"})," rankin omaavat k\xe4yt\xe4nn\xf6ss\xe4 pit\xe4v\xe4t palvelinta pystyss\xe4 rahallisesti, sen lis\xe4ksi, ett\xe4 keksiv\xe4t uusia ominaisuuksia ja tekev\xe4t viimeiset p\xe4\xe4t\xf6kset asioista muuta yll\xe4pitoa kuunnellen, my\xf6s siit\xe4 kuka yll\xe4pitoon astuu ja kuka ylentyy. T\xe4h\xe4n arvoon ei ole mahdollista ylenty\xe4."]})})]})]}),Object(r.jsx)("p",{className:"lead",children:Object(r.jsx)("em",{children:"Hyv\xe4t naiset ja herrat, palvelimen henkil\xf6kunta"})}),Object(r.jsx)(x,{})]})}},jFO5:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/yllapito",function(){return t("YTSb")}])},"jX+G":function(a){a.exports=JSON.parse('{"omistaja":[{"name":"Jomeee","description":"Toimii yhteis\xf6n hyv\xe4ksi kaikin tavoin. Opettelee piakkoin Javaa ja alkaa ohjelmoimaan plugineita (aamen).","strengths":["Konfigurointi","Palvelimen yll\xe4pito"],"uuid":"5b9a03483c15472b8bd8987134cf9f1d"},{"name":"Nuubles","description":"big but very smooth brain","strengths":["Pluginit","Palvelimen yll\xe4pito"],"uuid":"d4ef4bc2db26462c9793389ba56d2818"}],"admin":[{"name":"Susse","description":"Hoitelee nettijuttuja, ja kuka ties mit\xe4.","strengths":["Nettisivut","Discord botit"],"uuid":"144b79b3-71c0-4e7e-b466-f94d36d0caed"},{"name":"Wiikin","description":"Tunnetaan my\xf6s nimell\xe4 varislokki.","strengths":["Maisemointi"],"uuid":"9b218de84001430d88f9821a71e62ad4"},{"name":"Manuzki","description":"\\"Autan jos osaan, olen ymm\xe4rt\xe4v\xe4inen, mutta en keksi mit\xe4\xe4n, vaan ajattelen.\\"","strengths":["Musiikki","Grief-tapaukset"],"uuid":"a802f54ebfa148e3a7754d18d38a48be"},{"name":"LouNii","description":"Yes.","strengths":["Hack-clientit"],"uuid":"d347193d8b794a389158074681bc32f8"}],"operator":[{"name":"RetuPoika","description":"\\"Oispa kahvia.\\"","strengths":["Hack-clientit"],"uuid":"02518a1790f740e8940251d8ae348991"},{"name":"Iita","description":"\\"Ahdistaa.\\"","strengths":["Suojaaminen"],"uuid":"d0cd2962ea3944c48b486c6376e57ca3"},{"name":"Viherkukka","description":"\\"T\xe4h?\\"","strengths":["Riitojen sovittelu"],"uuid":"5db3cb0e4ae847dc91594cc10079190d"}],"moderator":[],"builder":[{"name":"PreGauris","description":"\\"Kuvaus? No jos sitten kun en tee lohisalaattia.\\"","strengths":["Rakentaminen"],"uuid":"eaa677e2710d41faaed5b258cf31fdd7"},{"name":"Asheline","description":"Rikospodcastien ahmija, kissojen yst\xe4v\xe4 ja serverin lyhyin yll\xe4pit\xe4j\xe4.","strengths":["Rakentaminen"],"uuid":"ca5f9868d9bc4a02b63d5fa2e48a8326"},{"name":"Ougii_Lewe","description":"Gauriksen aliurakoitsija.","strengths":["Rakentaminen"],"uuid":"5cab2b2a16dc410491ff40fa6920d01d"},{"name":"jafarin","description":"Aiemman sukupolven supersotilas.","strengths":["Rakentaminen"],"uuid":"0dc20ee9778746ceabecf208098484d7"},{"name":"Oonakuni","description":"\\"olen kanalintu, pot pot\\"","strengths":["Rakentaminen"],"uuid":"fcc6a1f38457404daed5206e467ec3ff"}]}')},rXMc:function(a,e,t){"use strict";var n=t("nKUr");e.a=function(a){var e=a.heading,t=a.lead,i=a.children;return Object(n.jsxs)("div",{className:"main-heading",children:[Object(n.jsx)("h1",{children:e}),Object(n.jsx)("p",{className:"lead",children:t}),i]})}},rePB:function(a,e,t){"use strict";function n(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}t.d(e,"a",(function(){return n}))}},[["jFO5",0,1,5,3,2,4]]]);