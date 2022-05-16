(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{927:function(s,t,a){"use strict";a.r(t);var n=a(8),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"账号信息相关的-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#账号信息相关的-api"}},[s._v("#")]),s._v(" 账号信息相关的 API")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"title"},[s._v("警告")]),a("p",[s._v("这里的 API 仅在 EN5 Windows 客户端支持")])]),a("ul",[a("li",[s._v("获取希沃用户ID")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取希沃用户ID")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("externalAsync"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetAccountInfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v('返回数据示例 {"t_user_id":"","user_id":"smwytvyzsorknpyvnvlygjys66289121"}')]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"t_user_id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 第三方用户ID，通过定制方式使用第三方账号登录才有值")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"user_id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"smwytvyzsorknpyvnvlygjys66289121"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// seewo 用户ID，用户登录之后有值")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("ul",[a("li",[s._v("获取 OAUTH 鉴权使用的 CODE")])]),s._v(" "),a("p",[s._v("只有对接了"),a("a",{attrs:{href:"http://open.seewo.com/#/service/1112/doc/1695",target:"_blank",rel:"noopener noreferrer"}},[s._v("希沃开放平台"),a("OutboundLink")],1),s._v("才能使用")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 根据 app_id 获取鉴权使用的 CODE (app_id 指希沃开放平台申请的 app_id)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("externalAsync"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetOpenOAuthCode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'app_id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v('返回数据示例 {"success":true,"error_code":0,"message":"OK","code":"fb2f757941bd405db51f2ccb13660783"}')]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"success"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"error_code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"message"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"OK"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fb2f757941bd405db51f2ccb13660783"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);