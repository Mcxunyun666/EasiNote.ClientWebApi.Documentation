(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{824:function(t,e,o){},895:function(t,e,o){"use strict";o(824)},909:function(t,e,o){"use strict";o.r(e);var a={name:"DebugPageInvoke",data:function(){return{invokeType:0,commonMethodName:"",commonMethodParamName1:"",commonMethodParamValue1:"",commonMethodParamName2:"",commonMethodParamValue2:"",methodOptions:[{value:"InsertElement",label:"InsertElement"},{value:"InsertMedia",label:"InsertMedia"}]}},computed:{resultJsCode:function(){return'window.external.InvokeMethod("'.concat(this.commonInvokeMethodJson,'")')},resultJsCode2:function(){return'window.external.InvokeMethod("'.concat(this.commonInvokeMethodJson2,'")')},commonInvokeMethodJson:function(){var t=this.commonMethodName,e=this.commonMethodParamName1,o=this.commonMethodParamName2,a=this.commonMethodParamValue1,n=this.commonMethodParamValue2,l={};return l[e]=a,l[o]=n,JSON.stringify({method:t,args:l})},commonInvokeMethodJson2:function(){var t=this.commonMethodName,e=this.commonMethodParamValue1;return JSON.stringify({method:t,args:e})}},methods:{invokeCommonMethod:function(){console.log("InvokeMethod\r\n".concat(this.commonInvokeMethodJson)),window.external.InvokeMethod(this.commonInvokeMethodJson)},invokeCommonMethod2:function(){console.log("InvokeMethod\r\n".concat(this.commonInvokeMethodJson2)),window.external.InvokeMethod(this.commonInvokeMethodJson2)},switchToView:function(t){this.invokeType=t}}},n=(o(895),o(8)),l=Object(n.a)(a,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("el-button-group",{staticStyle:{"margin-bottom":"1em"}},[o("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.switchToView(0)}}},[t._v("默认 API")]),t._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.switchToView(1)}}},[t._v("插入元素 API")])],1),t._v(" "),0===t.invokeType?o("div",{staticClass:"grid-content"},[o("div",{attrs:{id:"createPanel"}},[o("h3",[t._v("将要执行的语句是")]),t._v(" "),o("el-button",{staticStyle:{width:"10em"},attrs:{type:"primary"},on:{click:t.invokeCommonMethod}},[t._v("执行")])],1),t._v(" "),o("highlightjs",{attrs:{language:"javascript",code:t.resultJsCode}}),t._v(" "),o("h4",[t._v("方法名")]),t._v(" "),o("el-row",{staticClass:"row-bg",attrs:{gutter:24}},[o("el-col",{attrs:{span:24}},[o("div",{staticClass:"grid-content bg-purple-light"},[o("el-select",{attrs:{filterable:"","allow-create":"","default-first-option":"",placeholder:"请选择或输入方法名"},model:{value:t.commonMethodName,callback:function(e){t.commonMethodName=e},expression:"commonMethodName"}},t._l(t.methodOptions,(function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)])],1),t._v(" "),o("h4",[t._v("参数")]),t._v(" "),o("el-row",{staticClass:"row-bg",staticStyle:{"margin-bottom":"1em"},attrs:{gutter:24}},[o("el-col",{attrs:{span:20}},[o("div",{staticClass:"grid-content bg-purple-light"},[o("el-input",{attrs:{placeholder:"参数名1"},model:{value:t.commonMethodParamName1,callback:function(e){t.commonMethodParamName1=e},expression:"commonMethodParamName1"}})],1)])],1),t._v(" "),o("el-row",{staticClass:"row-bg",staticStyle:{"margin-bottom":"1em"},attrs:{gutter:24}},[o("el-col",{attrs:{span:24}},[o("div",{staticClass:"grid-content bg-purple-light"},[o("el-input",{attrs:{type:"textarea",rows:4,placeholder:"参数值1"},model:{value:t.commonMethodParamValue1,callback:function(e){t.commonMethodParamValue1=e},expression:"commonMethodParamValue1"}})],1)])],1),t._v(" "),o("el-row",{staticClass:"row-bg",staticStyle:{"margin-bottom":"1em"},attrs:{gutter:24}},[o("el-col",{attrs:{span:20}},[o("div",{staticClass:"grid-content bg-purple-light"},[o("el-input",{attrs:{placeholder:"参数名2"},model:{value:t.commonMethodParamName2,callback:function(e){t.commonMethodParamName2=e},expression:"commonMethodParamName2"}})],1)])],1),t._v(" "),o("el-row",{staticClass:"row-bg",attrs:{gutter:24}},[o("el-col",{attrs:{span:24}},[o("div",{staticClass:"grid-content bg-purple-light"},[o("el-input",{attrs:{type:"textarea",rows:4,placeholder:"参数值2"},model:{value:t.commonMethodParamValue2,callback:function(e){t.commonMethodParamValue2=e},expression:"commonMethodParamValue2"}})],1)])],1),t._v(" "),o("el-button",{staticStyle:{"margin-top":"1em",width:"10em"},attrs:{type:"primary"},on:{click:t.invokeCommonMethod}},[t._v("执行")])],1):t._e(),t._v(" "),1===t.invokeType?o("div",{staticClass:"grid-content"},[o("p",[t._v("将要执行的语句是:")]),t._v(" "),o("highlightjs",{attrs:{language:"javascript",code:t.resultJsCode2}}),t._v(" "),o("h4",[t._v("方法名")]),t._v(" "),o("el-row",{staticClass:"row-bg",attrs:{gutter:24}},[o("el-col",{attrs:{span:24}},[o("div",{staticClass:"grid-content bg-purple-light"},[o("el-select",{attrs:{filterable:"","allow-create":"","default-first-option":"",placeholder:"请选择或输入方法名"},model:{value:t.commonMethodName,callback:function(e){t.commonMethodName=e},expression:"commonMethodName"}},t._l(t.methodOptions,(function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)])],1),t._v(" "),o("h4",[t._v("参数")]),t._v(" "),o("el-row",{staticClass:"row-bg",staticStyle:{"margin-bottom":"1em"},attrs:{gutter:24}},[o("el-col",{attrs:{span:24}},[o("div",{staticClass:"grid-content bg-purple-light"},[o("el-input",{attrs:{type:"textarea",rows:8,placeholder:"参数值"},model:{value:t.commonMethodParamValue1,callback:function(e){t.commonMethodParamValue1=e},expression:"commonMethodParamValue1"}})],1)])],1),t._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:t.invokeCommonMethod2}},[t._v("执行")])],1):t._e()],1)}),[],!1,null,"075720de",null);e.default=l.exports}}]);