(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/list"],{"0ec8":function(e,t,n){"use strict";n.r(t);var r=n("fe6d"),a=n("c948");for(var u in a)"default"!==u&&function(e){n.d(t,e,(function(){return a[e]}))}(u);n("46e7");var s,i=n("f0c5"),c=Object(i["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],s);t["default"]=c.exports},"46e7":function(e,t,n){"use strict";var r=n("91fe"),a=n.n(r);a.a},"91fe":function(e,t,n){},c948:function(e,t,n){"use strict";n.r(t);var r=n("e019"),a=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);t["default"]=a.a},e019:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n,r,a,u,s){try{var i=e[u](s),c=i.value}catch(o){return void n(o)}i.done?t(c):Promise.resolve(c).then(r,a)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var s=e.apply(t,n);function i(e){u(s,r,a,i,c,"next",e)}function c(e){u(s,r,a,i,c,"throw",e)}i(void 0)}))}}var i={data:function(){return{source:0,list:[],user:{}}},onLoad:function(t){var n=this;return s(r.default.mark((function t(){var a,u;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.getStorageSync("nowTable"),t.next=3,n.$api.session(a);case 3:return u=t.sent,n.user=u.data,t.next=7,n.$api.page("address",{yonghuId:n.user.id});case 7:u=t.sent,n.list=u.data.list;case 9:case"end":return t.stop()}}),t)})))()},onShow:function(){var t=this;return s(r.default.mark((function n(){var a,u;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.getStorageSync("nowTable"),n.next=3,t.$api.session(a);case 3:return u=n.sent,t.user=u.data,n.next=7,t.$api.page("address",{yonghuId:t.user.id});case 7:u=n.sent,t.list=u.data.list;case 9:case"end":return n.stop()}}),n)})))()},methods:{onSelectTap:function(t){e.setStorageSync("address",t),e.navigateBack({delta:1})},onAddressDtailTap:function(e){var t="";t=e?"../address/detail?id="+e:"../address/detail?id=",this.$utils.jump(t)},onDeleteTap:function(t){var n=this;return s(r.default.mark((function a(){var u;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:u=n,e.showModal({title:"提示",content:"是否确认删除",success:function(){var e=s(r.default.mark((function e(n){var a;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n.confirm){e.next=9;break}return e.next=3,u.$api.del("address",JSON.stringify([t]));case 3:return a=e.sent,e.next=6,u.$api.page("address",{yonghuId:u.user.id});case 6:a=e.sent,u.list=a.data.list,u.$utils.msg("删除成功");case 9:case"end":return e.stop()}}),e)})));function n(t){return e.apply(this,arguments)}return n}()});case 2:case"end":return a.stop()}}),a)})))()}}};t.default=i}).call(this,n("543d")["default"])},fe6d:function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return r}));var a=function(){var e=this,t=e.$createElement;e._self._c},u=[]},fff2:function(e,t,n){"use strict";(function(e){n("48e8");r(n("66fd"));var t=r(n("0ec8"));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])}},[["fff2","common/runtime","common/vendor"]]]);