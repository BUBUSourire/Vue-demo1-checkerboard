(function(t){function n(n){for(var l,c,s=n[0],u=n[1],o=n[2],f=0,p=[];f<s.length;f++)c=s[f],i[c]&&p.push(i[c][0]),i[c]=0;for(l in u)Object.prototype.hasOwnProperty.call(u,l)&&(t[l]=u[l]);a&&a(n);while(p.length)p.shift()();return r.push.apply(r,o||[]),e()}function e(){for(var t,n=0;n<r.length;n++){for(var e=r[n],l=!0,s=1;s<e.length;s++){var u=e[s];0!==i[u]&&(l=!1)}l&&(r.splice(n--,1),t=c(c.s=e[0]))}return t}var l={},i={app:0},r=[];function c(n){if(l[n])return l[n].exports;var e=l[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=l,c.d=function(t,n,e){c.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,n){if(1&n&&(t=c(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var l in t)c.d(e,l,function(n){return t[n]}.bind(null,l));return e},c.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(n,"a",n),n},c.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},c.p="/vue-test/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=n,s=s.slice();for(var o=0;o<s.length;o++)n(s[o]);var a=u;r.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var l=e("64a9"),i=e.n(l);i.a},"07e1":function(t,n,e){"use strict";var l=e("969d"),i=e.n(l);i.a},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var l=e("2b0e"),i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",[t._v("n的值为"+t._s(t.n))]),e("div",{staticClass:"row"},[e("Cell",{attrs:{n:t.n},on:{click:function(n){return t.cellOnClick(0,n)}}}),e("Cell",{attrs:{n:t.n},on:{click:function(n){return t.cellOnClick(1,n)}}}),e("Cell",{attrs:{n:t.n},on:{click:function(n){return t.cellOnClick(2,n)}}})],1),e("div",{staticClass:"row"},[e("Cell",{attrs:{n:t.n},on:{click:function(n){return t.cellOnClick(3,n)}}}),e("Cell",{attrs:{n:t.n},on:{click:function(n){return t.cellOnClick(4,n)}}}),e("Cell",{attrs:{n:t.n},on:{click:function(n){return t.cellOnClick(5,n)}}})],1),e("div",{staticClass:"row"},[e("Cell",{attrs:{n:t.n},on:{click:function(n){return t.cellOnClick(6,n)}}}),e("Cell",{attrs:{n:t.n},on:{click:function(n){return t.cellOnClick(7,n)}}}),e("Cell",{attrs:{n:t.n},on:{click:function(n){return t.cellOnClick(8,n)}}})],1),e("div",[t._v(t._s(t.map))]),e("div",[t._v("胜利者是："+t._s(t.result))])])},r=[],c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"cell",on:{click:t.onClickSelf}},[t.a?[t._v(t._s(t.text))]:void 0],2)])},s=[],u={props:["n","finished"],data:function(){return{a:!1,text:""}},methods:{onClickSelf:function(){""===this.text&&(this.finished||(this.a=!0,this.text=this.n%2===0?"x":"o",this.$emit("click",this.text)))}}},o=u,a=(e("07e1"),e("2877")),f=Object(a["a"])(o,c,s,!1,null,null,null),p=f.exports,h={components:{Cell:p},data:function(){return{n:0,map:[[null,null,null],[null,null,null],[null,null,null]],result:""}},methods:{cellOnClick:function(t,n){this.map[Math.floor(t/3)][t%3]=n,this.n+=1,this.tell()},tell:function(){for(var t=0;t<2;t++)null!==this.map[t][0]&&this.map[t][0]===this.map[t][1]&&this.map[t][1]===this.map[t][2]&&(this.result=this.map[t][0]);for(var n=0;n<2;n++)null!==this.map[0][n]&&this.map[0][n]===this.map[1][n]&&this.map[1][n]===this.map[2][n]&&(this.result=this.map[0][n]);null!==this.map[0][0]&&this.map[0][0]===this.map[1][1]&&this.map[1][1]===this.map[2][2]&&(this.result=this.map[0][0]),null!==this.map[0][2]&&this.map[0][2]===this.map[1][1]&&this.map[1][1]===this.map[2][0]&&(this.result=this.map[0][2])}}},d=h,m=(e("034f"),Object(a["a"])(d,i,r,!1,null,null,null)),v=m.exports;l["a"].config.productionTip=!1,new l["a"]({render:function(t){return t(v)}}).$mount("#app")},"64a9":function(t,n,e){},"969d":function(t,n,e){}});
//# sourceMappingURL=app.5379b90c.js.map