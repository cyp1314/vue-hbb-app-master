(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c1cbdae"],{"2d34":function(t,n,i){"use strict";var e=i("474f"),a=i.n(e);a.a},"474f":function(t,n,i){},6314:function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"page"},[e("div",{staticClass:"divBottom",style:{height:t.height}},[null!=t.profile.wechatInfo?e("div",{staticClass:"divItem"},[e("div",{staticClass:"txtName"},[t._v("\n        微信\n        "),e("div",{staticClass:"divFlex"},[null==t.profile.wechatInfo.avatar?e("img",{staticClass:"imgAvatar",attrs:{src:i("dc5a")}}):t._e(),null!=t.profile.wechatInfo.avatar?e("van-image",{staticClass:"imgAvatar",attrs:{src:t.profile.wechatInfo.avatar,"lazy-load":""},scopedSlots:t._u([{key:"loading",fn:function(){return[e("van-loading",{attrs:{type:"spinner",size:"20"}})]},proxy:!0},{key:"error",fn:function(){return[e("img",{staticClass:"imgAvatar",attrs:{src:i("dc5a")}})]},proxy:!0}],null,!1,497272672)}):t._e(),e("label",[t._v(t._s(t.profile.wechatInfo.nickName))])],1)])]):t._e(),null==t.profile.wechatInfo?e("div",{staticClass:"divItem",on:{click:t.bindWechat}},[t._m(0)]):t._e(),e("div",{staticClass:"divItem",on:{click:t.gotoBindTel}},[e("div",{staticClass:"txtName"},[t._v("\n        手机号\n        "),null==t.profile.telInfo?e("div",{staticClass:"divFlex"},[e("label",[t._v("未绑定")])]):t._e(),null!=t.profile.telInfo?e("div",{staticClass:"divFlex"},[e("label",{staticClass:"lblPhone"},[t._v(t._s(t.profile.telInfo.tel))]),e("img",{staticClass:"imgRight",attrs:{src:i("f45c")}})]):t._e()])]),null!=t.profile.telInfo?e("div",{staticClass:"divItem"},[e("router-link",{staticClass:"txtName",attrs:{to:"/setPassword/"+t.profile.telInfo.tel}},[t._v("\n        账号密码\n        "),e("div",{staticClass:"divFlex"},[t.profile.telInfo.havePwd?t._e():e("label",{staticClass:"lblPhone"},[t._v("未设置")]),e("img",{staticClass:"imgRight",attrs:{src:i("f45c")}})])])],1):t._e(),e("div",{staticClass:"divItem"},[e("a",{staticClass:"txtName",attrs:{href:"javascript:;"},on:{click:t.gotoWithdrawalPwd}},[t._v("\n        提现密码\n        "),e("img",{staticClass:"imgRight",attrs:{src:i("f45c")}})])])])])},a=[function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"txtName"},[t._v("\n        微信\n        "),i("div",{staticClass:"divFlex"},[i("label",[t._v("未绑定")])])])}],s=(i("6762"),i("2fdb"),i("e7e5"),i("d399")),o=i("7884"),r=(i("946e"),{name:"personalInfo",data:function(){return{height:window.innerHeight+"px",profile:{}}},methods:{initiData:function(){var t=this;o["h"]().then((function(n){200==n.code&&(t.profile=n.data)}))},gotoWithdrawalPwd:function(){null==this.profile.telInfo?(this.$router.push("/personalInfo"),Object(s["a"])("请先绑定手机号")):0==this.profile.isReal?this.$router.push("/verifyPhone/true"):1==this.profile.isReal&&this.$router.push("/verifyPhone/false")},gotoBindTel:function(t){null==this.profile.telInfo?this.$router.push("/bindPhone"):this.$router.push("/switchPhone/"+this.profile.telInfo.tel)},bindWechat:function(){var t="wx233ca74b3d313293",n=encodeURIComponent(window.CallbackURL+"/personalInfo"),i="http://oauth.hbbclub.com/#/?appid=".concat(t,"&redirect_url=").concat(n);location.href=i}},mounted:function(){var t=location.href;if(1==t.includes("?code=")){t=t.substr(t.indexOf("?code=")+6,t.length);var n=this;o["a"]({wxcode:t,appType:"web"}).then((function(t){200==t.code&&(Object(s["a"])(t.msg),n.$router.push("/personalInfo"),n.initiData())}))}this.initiData()}}),c=r,l=(i("2d34"),i("2877")),d=Object(l["a"])(c,e,a,!1,null,"6bb86b5c",null);n["default"]=d.exports},7884:function(t,n,i){"use strict";i.d(n,"e",(function(){return a})),i.d(n,"f",(function(){return s})),i.d(n,"g",(function(){return o})),i.d(n,"i",(function(){return r})),i.d(n,"c",(function(){return l})),i.d(n,"d",(function(){return d})),i.d(n,"b",(function(){return c})),i.d(n,"h",(function(){return u})),i.d(n,"a",(function(){return f})),i.d(n,"j",(function(){return p}));var e=i("5724"),a=function(t){return e["a"].post("/api/client/login/",t)},s=function(t){return e["a"].post("/api/client/register/",t)},o=function(t){return e["a"].post("/api/client/sendcode/",t)},r=function(t){return e["a"].post("/api/client/wechatlogin/",t)},c=function(t){return e["a"].post("/api/client/bindtel/",t)},l=function(t){return e["a"].post("/api/client/changepwd/",t)},d=function(t){return e["a"].post("/api/client/changetel/",t)},u=function(){return e["a"].get("/api/client/userInfo/")},f=function(t){return e["a"].post("/api/client/bindwechat/",t)},p=function(t){return e["a"].post("/api/client/querytel/",t)}},"946e":function(t,n,i){"use strict";i.d(n,"a",(function(){return a}));var e=i("5724"),a=function(t){return e["a"].postFileUpload("https://appupload.hbbclub.com/api/oss/upload",t)}},dc5a:function(t,n){t.exports="data:image/png;base64,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"},f45c:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAXBAMAAADNSrOMAAAAMFBMVEVHcEyVlZWZmZmZmZmZmZmAgICcnJyZmZmampqcnJyZmZmYmJiZmZmYmJiZmZmZmZlsYV2dAAAAD3RSTlMADP5uwwIxsr8k8GivV8D9csMNAAAAPElEQVQI12OIDGAAgfONYGr9FwEQtem/I4hi1odwjQhwCyDcb2Aj3v9F4kHkoCoh+rBxoPZBbYe6BeIyAAKoH8efqO/ZAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=chunk-5c1cbdae.5e9d089c.js.map