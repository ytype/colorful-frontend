(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{240:function(t,e,o){var content=o(244);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(40).default)("21854714",content,!0,{sourceMap:!1})},242:function(t,e,o){t.exports=o.p+"img/background.bcebac7.png"},243:function(t,e,o){"use strict";var n=o(240);o.n(n).a},244:function(t,e,o){(e=o(39)(!1)).push([t.i,".logo-title[data-v-02edee42]{height:3rem;width:auto}.logo-title[data-v-02edee42],.title[data-v-02edee42]{display:inline}.ghost[data-v-02edee42]{width:12rem;height:4rem;font-size:16px;color:#fff;background:transparent;border:2px solid #fff;box-sizing:border-box;border-radius:15px}.hero.has-background[data-v-02edee42]{position:relative;overflow:hidden}.hero-background[data-v-02edee42]{position:absolute;-o-object-fit:cover;object-fit:cover;-o-object-position:center center;object-position:center center;-webkit-user-drag:none;height:100%;width:100%}.container .title[data-v-02edee42]{color:#fff;font-weight:800;font-size:3rem}.container .subtitle[data-v-02edee42]{color:#fff;font-size:1.5rem}",""]),t.exports=e},250:function(t,e,o){var content=o(267);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(40).default)("5526a8ef",content,!0,{sourceMap:!1})},251:function(t,e,o){var content=o(269);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(40).default)("38cef831",content,!0,{sourceMap:!1})},252:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"hero is-large has-fullheight has-background"},[e("img",{staticClass:"hero-background",attrs:{src:o(242)}}),this._v(" "),e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container "},[e("div",{staticClass:"has-text-centered"},[e("img",{staticClass:"logo-title",attrs:{src:o(137)}}),this._v(" "),e("h1",{staticClass:"title has-text-centered"},[this._v("\n          olorful\n        ")])]),this._v(" "),e("h2",{staticClass:"subtitle has-text-centered"},[this._v("\n        color palette for developer\n      ")])])])])}],r=o(5).a.extend({name:"FullHero"}),d=(o(243),o(19)),component=Object(d.a)(r,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),n,!1,null,"02edee42",null);e.default=component.exports},266:function(t,e,o){"use strict";var n=o(250);o.n(n).a},267:function(t,e,o){(e=o(39)(!1)).push([t.i,".main[data-v-4133eb38]{background:#eee;padding:1rem}",""]),t.exports=e},268:function(t,e,o){"use strict";var n=o(251);o.n(n).a},269:function(t,e,o){(e=o(39)(!1)).push([t.i,".card[data-v-0dd0f734]{background:#fff;box-sizing:border-box;box-shadow:2px 2px 2px rgba(0,0,0,.25);border-radius:5px}.card-header-title[data-v-0dd0f734]{font-weight:600;font-size:15px}.card-content[data-v-0dd0f734]{padding-top:0}.card-header[data-v-0dd0f734]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.card-footer-item[data-v-0dd0f734]{border-right:none}.content[data-v-0dd0f734]{color:#434343;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;height:1.5rem;margin-top:.5rem;margin-bottom:0}.content p[data-v-0dd0f734]{display:inline}.dot-box[data-v-0dd0f734]{height:2rem;overflow:hidden;display:block}.dot-box .dot[data-v-0dd0f734]{margin-top:10px;margin-right:5px;height:12px;width:12px;border-radius:50%;display:inline-block}.email[data-v-0dd0f734]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline;color:grey}.is-small[data-v-0dd0f734]{margin-top:10px}.author[data-v-0dd0f734]{display:flex}.info[data-v-0dd0f734]{display:inline;margin-left:auto}",""]),t.exports=e},274:function(t,e,o){"use strict";o.r(e);var n=o(5).a.extend({name:"ColorCard",props:["data"],data:function(){return{loading:!0,url:"#"}},watch:{data:function(){this.render()}},mounted:function(){this.data.like=[],this.data.comments=[],this.render()},methods:{render:function(){this.data.title&&(this.loading=!1,this.url="color/".concat(this.data._id))}}}),r=(o(268),o(19)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"column is-3"},[o("a",{attrs:{href:t.url}},[o("div",{staticClass:"card"},[o("div",{staticClass:"card-header",attrs:{role:"button"}},[o("div",{staticClass:"card-header-title"},[t.loading?t._e():[o("i",{staticClass:"fas fa-palette",staticStyle:{"margin-right":"10px","margin-left":"10px"}}),t._v(" "),o("p",[t._v(t._s(t.data.title))])],t._v(" "),o("b-skeleton",{attrs:{size:"is-large",active:t.loading}})],2)]),t._v(" "),o("div",{staticClass:"card-content",staticStyle:{"margin-top":"10px"}},[t.loading?t._e():[o("div",{staticClass:"content"},[o("p",[t._v(" "+t._s(t.data.content)+" ")])]),t._v(" "),o("div",{staticClass:"dot-box"},t._l(t.data.color,(function(t,e){return o("span",{key:e,staticClass:"dot",style:{backgroundColor:t}})})),0)],t._v(" "),o("b-skeleton",{attrs:{size:"is-medium",active:t.loading,count:2}}),t._v(" "),o("div",{staticClass:"author"},[t.loading?t._e():[o("p",{staticClass:"email"},[t._v("\n              "+t._s(t.data.user)+"\n            ")]),t._v(" "),o("div",{staticClass:"info"},[o("i",{staticClass:"far fa-thumbs-up"}),t._v("\n              "+t._s(t.data.like.length)+"\n              "),o("i",{staticClass:"fas fa-comment",staticStyle:{"margin-left":"5px"}}),t._v("\n              "+t._s(t.data.comments.length)+"\n            ")])],t._v(" "),o("b-skeleton",{attrs:{size:"is-small",active:t.loading}})],2)],2)])])])}),[],!1,null,"0dd0f734",null);e.default=component.exports},277:function(t,e,o){"use strict";o.r(e);var n=o(5),r=o(52),d=o.n(r),l=n.a.extend({data:function(){return{color:[{},{},{},{}]}},mounted:function(){var t=this;d.a.get("http://49.50.162.193:5000/api/color").then((function(e){t.color=e.data.color})).catch((function(t){console.log(t.response)}))}}),c=(o(266),o(19)),component=Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("FullHero"),this._v(" "),e("div",{staticClass:"columns is-multiline main",attrs:{id:"main"}},this._l(this.color,(function(data,t){return e("ColorCard",{key:t,attrs:{data:data}})})),1)],1)}),[],!1,null,"4133eb38",null);e.default=component.exports;installComponents(component,{FullHero:o(252).default,ColorCard:o(274).default})}}]);