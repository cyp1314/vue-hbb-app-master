(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0638b2b2"],{"52f8":function(t,s,i){},"53dd":function(t,s,i){t.exports=i.p+"img/recording.5150621f.png"},7512:function(t,s,i){"use strict";var e=i("52f8"),o=i.n(e);o.a},bbde:function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"page divBrowsingHistory",style:{height:t.height}},[t.list.length<=0?e("div",{staticClass:"divDefInfo",style:{height:t.scrollHeight}},[e("img",{staticClass:"imgDefault",attrs:{src:i("53dd")}}),e("div",{staticClass:"divTip"},[t._v("没有历史记录")])]):t._e(),t.list.length>0?e("van-checkbox-group",{ref:"checkboxGroup",staticClass:"divGroup",style:{height:t.scrollHeight},model:{value:t.result,callback:function(s){t.result=s},expression:"result"}},t._l(t.list,(function(s,i){return e("div",{key:i,staticClass:"divItem"},[e("div",{staticClass:"divTitle"},[t._v("\n        "+t._s(s.date)+"\n        "),0==i&&1==t.showHistory?e("a",{staticClass:"checkAll",attrs:{href:"javascript:;"},on:{click:t.selectAll}},[t._v("全选")]):t._e()]),t._l(s.items,(function(s,i){return e("div",{key:i,staticClass:"divSubItem"},[e("div",{staticClass:"divLeft"},[t.showHistory?e("van-checkbox",{staticClass:"checkbox",attrs:{name:s.uuid,"checked-color":"#FF6B88"}}):t._e(),e("div",{staticClass:"divTimer"},[t._v(t._s(t._f("formatDateByFormat")(s.createTime,"hh:mm")))])],1),e("div",{staticClass:"divRight",on:{click:function(i){return t.gotoCourse(s.course.uuid)}}},[e("div",{staticClass:"divName"},[t._v(t._s(s.course.name))]),e("div",{staticClass:"divType"},[t._v(t._s(t._f("contentIsEmpty")(s.course.intro)))])])])}))],2)})),0):t._e(),e("div",{staticClass:"divBottom"},[e("button",{staticClass:"divDelete",on:{click:t.deleteHistory}},[t._v("删除")]),e("button",{staticClass:"divCarryOut",on:{click:t.showDelete}},[t._v(t._s(t.txtEdit))])])],1)},o=[],c=(i("e17f"),i("2241")),n=(i("e7e5"),i("d399")),r=i("5724"),a=function(){return r["a"].get("/api/client/studyHistory/")},l=function(t){return r["a"].delete("/api/client/studyHistory/",t)},h={name:"browsingHistory",data:function(){return{height:window.innerHeight+"px",scrollHeight:window.innerHeight-88+"px",checkbox:!1,showHistory:!1,list:[],result:[],txtEdit:"编辑"}},methods:{gotoCourse:function(t){this.$router.push("/course/"+t)},refreshData:function(){var t=this;a().then((function(s){200==s.code&&(t.list=s.data)}))},selectAll:function(){0==this.checkbox?(this.checkbox=!0,this.$refs.checkboxGroup.toggleAll(!0)):(this.checkbox=!1,this.$refs.checkboxGroup.toggleAll())},showDelete:function(){1==this.showHistory?(this.showHistory=!1,this.txtEdit="编辑"):(this.showHistory=!0,this.txtEdit="完成")},deleteHistory:function(){var t=this;0!=this.showHistory?this.result.length<=0?Object(n["a"])("至少要选择一条记录。"):c["a"].confirm({message:"确定要删除历史记录吗？"}).then((function(){l({uuidList:t.result}).then((function(s){200==s.code&&(Object(n["a"])(s.msg),t.refreshData())}))})):Object(n["a"])("编辑 模式，才可删除。")}},mounted:function(){this.refreshData()}},u=h,d=(i("7512"),i("2877")),v=Object(d["a"])(u,e,o,!1,null,"0e52ae5c",null);s["default"]=v.exports}}]);
//# sourceMappingURL=chunk-0638b2b2.68b9faa2.js.map