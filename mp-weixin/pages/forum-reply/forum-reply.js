(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/forum-reply/forum-reply"],{"1b8d":function(n,e,t){"use strict";t.r(e);var r=t("ddb9"),u=t.n(r);for(var a in r)"default"!==a&&function(n){t.d(e,n,(function(){return r[n]}))}(a);e["default"]=u.a},"27b5":function(n,e,t){"use strict";(function(n){t("48e8");r(t("66fd"));var e=r(t("b827"));function r(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=t,n(e.default)}).call(this,t("543d")["createPage"])},"40b0":function(n,e,t){"use strict";var r;t.d(e,"b",(function(){return u})),t.d(e,"c",(function(){return a})),t.d(e,"a",(function(){return r}));var u=function(){var n=this,e=n.$createElement;n._self._c},a=[]},"5c02":function(n,e,t){},"7db1":function(n,e,t){"use strict";var r=t("5c02"),u=t.n(r);u.a},b827:function(n,e,t){"use strict";t.r(e);var r=t("40b0"),u=t("1b8d");for(var a in u)"default"!==a&&function(n){t.d(e,n,(function(){return u[n]}))}(a);t("7db1");var o,c=t("f0c5"),i=Object(c["a"])(u["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);e["default"]=i.exports},ddb9:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(t("a34a"));function u(n){return n&&n.__esModule?n:{default:n}}function a(n,e,t,r,u,a,o){try{var c=n[a](o),i=c.value}catch(s){return void t(s)}c.done?e(i):Promise.resolve(i).then(r,u)}function o(n){return function(){var e=this,t=arguments;return new Promise((function(r,u){var o=n.apply(e,t);function c(n){a(o,r,u,c,i,"next",n)}function i(n){a(o,r,u,c,i,"throw",n)}c(void 0)}))}}var c={data:function(){return{pid:"",content:"",username:"",user:{}}},onLoad:function(e){var t=this;return o(r.default.mark((function u(){var a,o;return r.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.pid=e.pid,a=n.getStorageSync("nowTable"),r.next=4,t.$api.session(a);case 4:o=r.sent,t.user=o.data,"yonghu"==a&&(t.username=t.user.yonghuzhanghao);case 7:case"end":return r.stop()}}),u)})))()},methods:{onReplyTap:function(){var n=this;return o(r.default.mark((function e(){return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.$api.save("forum",{parentid:n.pid,content:n.contont,username:n.username});case 2:n.$utils.msgBack("回复成功");case 3:case"end":return e.stop()}}),e)})))()}}};e.default=c}).call(this,t("543d")["default"])}},[["27b5","common/runtime","common/vendor"]]]);