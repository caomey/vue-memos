(function(t){function e(e){for(var n,r,a=e[0],c=e[1],l=e[2],u=0,m=[];u<a.length;u++)r=a[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&m.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,a=1;a<o.length;a++){var c=o[a];0!==s[c]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=o[0]))}return t}var n={},s={app:0},i=[];function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/vue-memos/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var d=c;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0161":function(t,e,o){"use strict";var n=o("df51"),s=o.n(n);s.a},"1e41":function(t,e,o){"use strict";var n=o("e95c"),s=o.n(n);s.a},"21dc":function(t,e,o){},2342:function(t,e,o){"use strict";var n=o("e81e"),s=o.n(n);s.a},2395:function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("canvas",{attrs:{id:"q"}}),t.$store.state.isShow?o("div",{staticClass:"cover-layer"}):t._e(),o("memo-nav"),o("article",t._l(t.$store.state.filteredMemos||t.$store.state.memos,(function(t){return o("memoArticle",{key:t.id,attrs:{memo:t}})})),1),t.$store.state.isShow?o("memo-edit"):t._e()],1)},i=[],r=(o("21dc"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nav",[o("section",{attrs:{id:"title"}},[t._v("记事本")]),o("label",{attrs:{for:"toggle-nav"}}),o("input",{attrs:{type:"checkbox",id:"toggle-nav"}}),o("section",{attrs:{id:"navbar"}},[o("div",{staticClass:"nav add",on:{click:t.buildMemo}},[t._v("新建")]),o("div",{staticClass:"nav categories"},[o("div",{staticClass:"dropdown-toggle",on:{click:t.categoryDropdown}},[t._v(" "+t._s(t.categories[t.categoryId])+" ")]),t.$store.state.categoryDropdown?o("ul",{staticClass:"dropdown-menu"},[o("li",{on:{click:t.selectAll}},[t._v("全部")]),o("li",{on:{click:t.selectWork}},[t._v("工作")]),o("li",{on:{click:t.selectStudy}},[t._v("学习")]),o("li",{on:{click:t.selectLife}},[t._v("生活")])]):t._e()]),o("div",{staticClass:"nav sort-by"},[o("div",{staticClass:"dropdown-toggle",on:{click:t.sortbyDropdown}},[t._v(" "+t._s(t.sortby[t.sortbyId])+" ")]),t.$store.state.sortbyDropdown?o("ul",{staticClass:"dropdown-menu"},[o("li",{on:{click:t.sortByTime}},[t._v("按时间排序")]),o("li",{on:{click:t.sortByTitle}},[t._v("按标题排序")])]):t._e()]),o("div",{staticClass:"nav search"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.queryString,expression:"queryString"}],attrs:{type:"text",placeholder:"过滤标题, 内容, 时间"},domProps:{value:t.queryString},on:{keyup:t.filteredByContent,input:function(e){e.target.composing||(t.queryString=e.target.value)}}})])])])}),a=[],c=(o("4de4"),o("c975"),{data:function(){return{code:1,categoryId:1,categories:{1:"工作",2:"生活",3:"学习",4:"全部"},sortbyId:1,sortby:{1:"按时间排序",2:"按标题排序"},queryString:""}},methods:{categoryDropdown:function(){this.$store.state.categoryDropdown=!0,console.log(666666,this.$store.state.categoryDropdown)},sortbyDropdown:function(){this.$store.state.sortbyDropdown=!0,console.log(77777777,this.$store.state.sortbyDropdown)},buildMemo:function(){this.$store.state.isShow=!0,console.log(this.$store.state.isShow),this.$store.state.editinfo=""},selectAll:function(){this.categoryId=4,this.$store.state.filteredMemos=this.$store.state.memos,this.$store.state.categoryDropdown=!1},selectWork:function(){this.categoryId=1,this.$store.state.filteredMemos=this.$store.state.memos.filter((function(t){return 1==t.categoryId})),this.$store.state.categoryDropdown=!1},selectLife:function(){this.categoryId=2,this.$store.state.filteredMemos=this.$store.state.memos.filter((function(t){return 2==t.categoryId})),this.$store.state.categoryDropdown=!1},selectStudy:function(){this.categoryId=3,this.$store.state.filteredMemos=this.$store.state.memos.filter((function(t){return 3==t.categoryId})),this.$store.state.categoryDropdown=!1},sortByTime:function(){var t=this;this.sortbyId=1,this.$store.state.filteredMemos.sort((function(e,o){return e["date"]<o["date"]?-1*t.code:1*t.code})),this.code=-1*this.code,this.$store.state.sortbyDropdown=!1},sortByTitle:function(){var t=this;this.sortbyId=2,this.$store.state.filteredMemos.sort((function(e,o){return e["title"]<o["title"]?-1*t.code:1*t.code})),this.code=-1*this.code,this.$store.state.sortbyDropdown=!1},filteredByContent:function(){var t=this;console.log(this.queryString),""!==this.queryString&&(this.$store.state.filteredMemos=this.$store.state.memos.filter((function(e){return console.log(e),-1!==e.title.indexOf(t.queryString)||-1!==e.date.indexOf(t.queryString)||-1!==e.content.indexOf(t.queryString)})))}}}),l=c,d=(o("2342"),o("2877")),u=Object(d["a"])(l,r,a,!1,null,"59cbd6ab",null),m=u.exports,f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"memo-container"},[o("div",{staticClass:"memo"},[o("div",{staticClass:"header"},[o("h5",{staticClass:"title"},[t._v(t._s(t.memo.title))]),o("ul",{staticClass:"tools"},[o("li",{staticClass:"edit",on:{click:t.editMemo}}),o("li",{staticClass:"delete",on:{click:t.deleteMemo}})])]),o("div",{staticClass:"info"},[o("span",{staticClass:"timestamp"},[t._v(t._s(t.memo.date))]),o("span",{staticClass:"catagory"},[t._v("分类："+t._s(t.categories[t.memo.categoryId]))])]),o("div",{staticClass:"content"},[o("div",{staticClass:"text markdown-body",domProps:{innerHTML:t._s(t.marked(t.memo.content))}})])])])},h=[],p=(o("fb6a"),o("a434"),o("bee2")),v=o("d4ec"),g=function t(e){Object(v["a"])(this,t),this.categoryId=e.categoryId,this.title=e.title,this.content=e.content,this.date=JSON.stringify(new Date).slice(1,11)},y=function(){function t(){Object(v["a"])(this,t),this.memos=[]}return Object(p["a"])(t,[{key:"loadLocalStorage",value:function(){this.memos=JSON.parse(localStorage.getItem("store")).memos}},{key:"saveToLocalStorage",value:function(){localStorage.setItem("store",JSON.stringify(this))}},{key:"add",value:function(t){this.memos.push(t)}},{key:"remove",value:function(t){this.memos.splice(this.memos.indexOf(t),1)}},{key:"update",value:function(t,e){this.memos.splice(this.memos.indexOf(t),1,e)}},{key:"init",value:function(){var t=new g({categoryId:1,title:"功能介绍",content:"### 1. 可以使用markdown语法\n1.[markdown介绍(点我）](https://www.jianshu.com/p/191d1e21f7ed)\n```\n# 这是一级标题 \n##  这是二级标题 \n###  这是三级标题 \n```\n2.插入图片\n\n`![](图片url)`\n\n![](https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2771947279,1942205435&fm=26&gp=0.jpg)\n### 2. 笔记操作\n1.新建笔记\n\n2.编辑笔记\n\n3.筛选类别\n\n4.笔记排序\n\n5.搜索笔记"});t.date="2020-06-03",this.add(t);var e=new g({categoryId:3,title:"瀑布文字源码",content:'```\n<canvas id="q"></canvas>\n<style>\n  body {\n    margin: 0;\n    overflow: hidden;\n  }\n</style>\n<script>\n  const s = window.screen;\n  const w = (q.width = s.width);\n  const h = (q.height = s.height);\n  const ctx = q.getContext("2d");\n  const p = Array(Math.floor(w / 10) + 1).fill(0);\n\n  const random = (items) => items[Math.floor(Math.random() * items.length)];\n  const hex = "0123456789ABCDEF".split("");\n\n  setInterval(() => {\n    ctx.fillStyle = "rgba(0,0,0,.05)";\n    ctx.fillRect(0, 0, w, h);\n    ctx.fillStyle = "#0f0";\n    p.map((v, i) => {\n      ctx.fillText(random(hex), i * 10, v);\n      p[i] = v >= h || v > 50 + 10000 * Math.random() ? 0 : v + 10;\n    });\n  }, 1000 / 30);\n<\/script>\n```'});e.date="2020-06-03",this.add(e);var o=new g({categoryId:3,title:"今天你更博学了吗？",content:"# flex弹性盒子布局\n\n\n\n## 基本概念\n\n采用Flex布局的元素，称为Flex容器（flex container），简称”容器”。它的所有子元素自动成为容器成员，称为Flex项目（flex item），简称”项目”。\n\n![](https://img-blog.csdnimg.cn/20190405163746672.png)\n\n容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。"});o.date="2020-06-03",this.add(o);var n=new g({categoryId:2,title:"庐山",content:"# 《望庐山瀑布》\n\n日照香炉生紫烟，遥看瀑布挂前川。\n\n飞流直下三千尺，疑是银河落九天。\n![](https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591329967420&di=6454e6b74404396d881616d1294eee04&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2Fw600h475%2F20180224%2F541e-fyrwsqh6788464.jpg)"});n.date="2020-06-03",this.add(n),this.saveToLocalStorage()}}]),t}(),w=new y;null!==localStorage.getItem("store")?w.loadLocalStorage():w.init();var b={memo:g,store:w};console.log(w);var x=b,$=x.store,_={props:["memo"],data:function(){return{editinfo:"",categories:{1:"工作",2:"生活",3:"学习"}}},methods:{marked:marked,deleteMemo:function(){confirm("确定删除“".concat(this.memo.title,"”吗？"))&&($.remove(this.memo),$.saveToLocalStorage())},editMemo:function(){this.$store.state.editinfo=this.memo,this.$store.state.isShow=!0}}},S=_,k=(o("0161"),Object(d["a"])(S,f,h,!1,null,null,null)),C=k.exports,I=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{attrs:{id:"memo-edit"}},[o("div",{staticClass:"edit-markdown"},[o("div",{staticClass:"header"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"title",attrs:{type:"text",placeholder:"标题"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),o("ul",{staticClass:"tools"},[o("li",{staticClass:"save",on:{click:t.saveMemo}}),o("li",{staticClass:"exit",on:{click:t.exitMemo}})]),o("div",{staticClass:"dropdown"},[o("select",{directives:[{name:"model",rawName:"v-model",value:t.categoryId,expression:"categoryId"}],on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.categoryId=e.target.multiple?o:o[0]}}},[o("option",{attrs:{selected:"selected",value:"1"}},[t._v("工作")]),o("option",{attrs:{value:"2"}},[t._v("生活")]),o("option",{attrs:{value:"3"}},[t._v("学习")])])])]),o("div",{staticClass:"content"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"text",attrs:{placeholder:"内容"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})])])])},M=[],O=x.store,D=x.memo,j={data:function(){return{categories:{1:"工作",2:"生活",3:"学习"},title:this.$store.state.editinfo.title,categoryId:this.$store.state.editinfo.categoryId||1,content:this.$store.state.editinfo.content}},methods:{saveMemo:function(){var t=new D({categoryId:this.categoryId||1,title:this.title,content:this.content});this.$store.state.editinfo?O.update(this.$store.state.editinfo,t):O.add(t),O.saveToLocalStorage(),this.$store.state.isShow=!1},exitMemo:function(){this.$store.state.isShow=!1}},computed:{}},q=j,T=(o("1e41"),Object(d["a"])(q,I,M,!1,null,null,null)),F=T.exports,P=n["a"].extend({data:function(){return{}},methods:{},watch:{isShow:function(){}},components:{memoNav:m,memoArticle:C,memoEdit:F}}),L=P,A=(o("7c55"),Object(d["a"])(L,s,i,!1,null,null,null)),N=A.exports,B=o("2f62"),E=x.store;n["a"].use(B["a"]);var J=E.memos,z=new B["a"].Store({state:{isShow:!1,categoryDropdown:!1,sortbyDropdown:!1,editInfo:"",memos:E.memos,filteredMemos:J},mutations:{}}),W=z;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(N)},store:W}).$mount("#app")},"7c55":function(t,e,o){"use strict";var n=o("2395"),s=o.n(n);s.a},df51:function(t,e,o){},e81e:function(t,e,o){},e95c:function(t,e,o){}});
//# sourceMappingURL=app.00c762f8.js.map