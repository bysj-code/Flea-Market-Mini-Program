(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{2599:function(t,e,n){"use strict";var o=n("97a7"),a=n.n(o);a.a},"773e":function(t,e,n){"use strict";n.r(e);var o=n("c4cf"),a=n("7af3");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("2599");var i,s=n("f0c5"),u=Object(s["a"])(a["default"],o["b"],o["c"],!1,null,"0f180f72",null,!1,o["a"],i);e["default"]=u.exports},"7af3":function(t,e,n){"use strict";n.r(e);var o=n("9adc"),a=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=a.a},"97a7":function(t,e,n){},"9adc":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n("a34a")),a=r(n("fd63"));function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n,o,a,r,i){try{var s=t[r](i),u=s.value}catch(c){return void n(c)}s.done?e(u):Promise.resolve(u).then(o,a)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var r=t.apply(e,n);function s(t){i(r,o,a,s,u,"next",t)}function u(t){i(r,o,a,s,u,"throw",t)}s(void 0)}))}}var u={data:function(){return{username:"",password:"",codes:[{num:1,color:"#000",rotate:"10deg",size:"16px"},{num:2,color:"#000",rotate:"10deg",size:"16px"},{num:3,color:"#000",rotate:"10deg",size:"16px"},{num:4,color:"#000",rotate:"10deg",size:"16px"}],options:["请选择登录用户类型"],optionsValues:["","yonghu"],index:0,roleNum:0}},onLoad:function(){var t=["请选择登录用户类型"],e=a.default.list();this.menuList=e;for(var n=0;n<this.menuList.length;n++)"是"==this.menuList[n].hasFrontLogin&&(t.push(this.menuList[n].roleName),this.roleNum++);1==this.roleNum&&(this.index=1),this.options=t,this.randomString(4),this.styleChange()},methods:{randomString:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4,e=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"],n=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],o=["28","30","32","34","36"],a=0;a<t;a++){var r=Math.floor(Math.random()*e.length);this.codes[a].num=e[r];for(var i="#",s=0;s<6;s++){var u=Math.floor(Math.random()*n.length);i+=n[u]}this.codes[a].color=i;var c=Math.floor(30*Math.random()),f=Math.floor(2*Math.random());1==f&&(c="-"+c),this.codes[a].rotate="rotate("+c+"deg)";var d=Math.floor(Math.random()*o.length);this.codes[a].size=o[d]+"rpx"}},styleChange:function(){this.$nextTick((function(){}))},onRegisterTap:function(e){t.setStorageSync("loginTable",e),this.$utils.jump("../register/register")},onForgetTap:function(){this.$utils.jump("../forget/forget")},onLoginTap:function(){var e=this;return s(o.default.mark((function n(){var a;return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.optionsValues[e.index]){n.next=3;break}return e.$utils.msg("请选择登陆用户类型"),n.abrupt("return");case 3:return n.next=5,e.$api.login("".concat(e.optionsValues[e.index]),{username:e.username,password:e.password});case 5:return a=n.sent,t.setStorageSync("token",a.token),t.setStorageSync("nickname",e.username),t.setStorageSync("nowTable","".concat(e.optionsValues[e.index])),n.next=11,e.$api.session("".concat(e.optionsValues[e.index]));case 11:a=n.sent,t.setStorageSync("userid",a.data.id),a.data.vip&&t.setStorageSync("vip",a.data.vip),t.setStorageSync("role","".concat(e.options[e.index])),e.$utils.tab("../index/index");case 16:case"end":return n.stop()}}),n)})))()},optionsChange:function(t){this.index=t.target.value}}};e.default=u}).call(this,n("543d")["default"])},c4cf:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o}));var a=function(){var t=this,e=t.$createElement;t._self._c},r=[]},fa14:function(t,e,n){"use strict";(function(t){n("48e8");o(n("66fd"));var e=o(n("773e"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])}},[["fa14","common/runtime","common/vendor"]]]);