(function(t){function e(e){for(var a,o,c=e[0],l=e[1],u=e[2],f=0,p=[];f<c.length;f++)o=c[f],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);s&&s(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,c=1;c<n.length;c++){var l=n[c];0!==r[l]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var s=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"387b":function(t,e,n){},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"9c0c":function(t,e,n){},a229:function(t,e,n){"use strict";var a=n("d26e"),r=n.n(a);r.a},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"settingsBtn",attrs:{title:t.$t("Toggle chorus mode")}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.multiPlay,expression:"multiPlay"}],attrs:{type:"checkbox",id:"isMutliplay"},domProps:{checked:Array.isArray(t.multiPlay)?t._i(t.multiPlay,null)>-1:t.multiPlay},on:{change:function(e){var n=t.multiPlay,a=e.target,r=!!a.checked;if(Array.isArray(n)){var i=null,o=t._i(n,i);a.checked?o<0&&(t.multiPlay=n.concat([i])):o>-1&&(t.multiPlay=n.slice(0,o).concat(n.slice(o+1)))}else t.multiPlay=r}}}),n("label",{attrs:{for:"isMutliplay"}},[t._v(t._s(t.$t("Do Not Click Me")))])]),t._l(t.sounds,(function(e,a){return["center"==e.type?n("CentralButton",{key:a,attrs:{item:e}}):t._e()]})),n("div",{attrs:{id:"bottom"}},[n("a",{staticClass:"bottonBtnLink",attrs:{href:"https://github.com/suisei-cn",target:"_blank"}},[t._v(" "+t._s(t.$t("GitHub")))]),t._v("/ "),n("a",{staticClass:"bottonBtnLink",attrs:{href:"https://t.me/suiseihosimati",target:"_blank"}},[t._v(" "+t._s(t.$t("Telegram"))+" ")])])],2)},i=[],o=(n("d3b7"),n("ac1f"),n("1276"),n("96cf"),n("1da1")),c=n("d4ec"),l=n("bee2"),u=n("262e"),s=n("2caf"),f=n("9ab4"),p=n("60a3"),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"btn animateBtn",class:{playingBtn:t.playLayer>0},on:{click:t.play}},[t._v(" "+t._s(t.localizedName)+" ")])},d=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"btn animateBtn",class:{playingBtn:t.playLayer>0},on:{click:t.play}},[t._v(" "+t._s(t.localizedName)+" ")])},m=[],b=(n("b0c0"),function(t){Object(u["a"])(n,t);var e=Object(s["a"])(n);function n(){var t;return Object(c["a"])(this,n),t=e.apply(this,arguments),t.playLayer=0,t.lang="zh",t}return Object(l["a"])(n,[{key:"mounted",value:function(){this.lang=this.$i18n.locale}},{key:"play",value:function(){if(!(this.$store.getters.playing>0)||this.$store.state.multiPlay){var t;t="string"===typeof this.item.file?this.item.file:this.item.file[Math.floor(Math.random()*this.item.file.length)];var e=new Audio("assets/".concat(t)),n=this;e.addEventListener("play",(function(){n.playLayer+=1,n.$store.commit("playOne")})),e.addEventListener("ended",(function(){n.playLayer-=1,n.$store.commit("stopOne")})),e.play()}}},{key:"localizedName",get:function(){return this.item.name_l10n[this.lang]||this.item.name||""}}]),n}(p["c"]));Object(f["a"])([Object(p["b"])()],b.prototype,"item",void 0),b=Object(f["a"])([p["a"]],b);var v=b,g=v,O=(n("f0e0"),n("2877")),j=Object(O["a"])(g,h,m,!1,null,"50598ec0",null),_=j.exports,P=function(t){Object(u["a"])(n,t);var e=Object(s["a"])(n);function n(){return Object(c["a"])(this,n),e.apply(this,arguments)}return n}(_);P=Object(f["a"])([p["a"]],P);var k=P,w=k,$=(n("a229"),Object(O["a"])(w,y,d,!1,null,"4e3e925e",null)),M=$.exports,T=function(t){Object(u["a"])(n,t);var e=Object(s["a"])(n);function n(){var t;return Object(c["a"])(this,n),t=e.apply(this,arguments),t.sounds=[],t}return Object(l["a"])(n,[{key:"mounted",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("/sounds.json").then((function(t){return t.json()})).catch((function(t){console.error("Sound data fetch error. Exiting.")}));case 2:this.sounds=t.sent,e=(window.location.hash.substr(1)||navigator.language||navigator.userLanguage).split("-")[0]||"zh",this.$i18n.locale=e;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"multiPlay",get:function(){return this.$store.state.multiPlay},set:function(t){this.$store.commit("setMultiPlay",t)}}]),n}(p["c"]);T=Object(f["a"])([Object(p["a"])({components:{CentralButton:M,BaseButton:_}})],T);var x=T,C=x,B=(n("5c0b"),n("cf0b"),Object(O["a"])(C,r,i,!1,null,"9983724e",null)),L=B.exports,N=n("2f62");a["a"].use(N["a"]);var z=new N["a"].Store({state:{concurPlay:0,multiPlay:!0},getters:{playing:function(t){return t.concurPlay>0}},mutations:{playOne:function(t){t.concurPlay+=1},stopOne:function(t){t.concurPlay>0&&(t.concurPlay-=1)},setMultiPlay:function(t,e){t.multiPlay=e}}}),S=n("a925"),E={"Do Not Click Me":"没事不要点",GitHub:"代码猫",Telegram:"小飞机","Toggle chorus mode":"多重吟唱模式开关"},G={"Do Not Click Me":"Do Not Click Me",GitHub:"GitHub",Telegram:"Telegram","Toggle chorus mode":"Toggle chorus mode"},H={"Do Not Click Me":"ヤメテクダサイ",GitHub:"GitHub",Telegram:"Telegram","Toggle chorus mode":"Toggle chorus mode"};a["a"].use(S["a"]);var A=new S["a"]({locale:"zh",fallbackLocale:"en",messages:{en:G,ja:H,zh:E}});a["a"].config.productionTip=!1,new a["a"]({store:z,i18n:A,render:function(t){return t(L)}}).$mount("#app")},cf0b:function(t,e,n){"use strict";var a=n("d1d3"),r=n.n(a);r.a},d1d3:function(t,e,n){},d26e:function(t,e,n){},f0e0:function(t,e,n){"use strict";var a=n("387b"),r=n.n(a);r.a}});
//# sourceMappingURL=app.cdd1219a.js.map