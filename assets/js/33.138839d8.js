(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{831:function(e,t,o){"use strict";o.r(t);var a={name:"DebugPage1",data:function(){return{invokeType:0,commonMethodName:"",commonMethodParamName1:"",commonMethodParamValue1:"",commonMethodParamName2:"",commonMethodParamValue2:"",methodOptions:[{value:"InsertElement",label:"InsertElement"},{value:"InsertMedia",label:"InsertMedia"}]}},computed:{documentUrl:function(){return"".concat(this.$store.state.basePath,"apis/invoke-api/")},resultJsCode:function(){return'window.external.InvokeMethod("'.concat(this.commonInvokeMethodJson,'")')},resultJsCode2:function(){return'window.external.InvokeMethod("'.concat(this.commonInvokeMethodJson2,'")')},commonInvokeMethodJson:function(){var e=this.commonMethodName,t=this.commonMethodParamName1,o=this.commonMethodParamName2,a=this.commonMethodParamValue1,n=this.commonMethodParamValue2,l={};return l[t]=a,l[o]=n,JSON.stringify({method:e,args:l})},commonInvokeMethodJson2:function(){var e=this.commonMethodName,t=this.commonMethodParamValue1;return JSON.stringify({method:e,args:t})}},methods:{invokeCommonMethod:function(){console.log("InvokeMethod\r\n".concat(this.commonInvokeMethodJson)),window.external.InvokeMethod(this.commonInvokeMethodJson)},invokeCommonMethod2:function(){console.log("InvokeMethod\r\n".concat(this.commonInvokeMethodJson2)),window.external.InvokeMethod(this.commonInvokeMethodJson2)},switchToView:function(e){this.invokeType=e}}},n=o(8),l=Object(n.a)(a,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h3",[e._v("1 执行通用回调 InvokeMethod")]),e._v(" "),o("div",{staticStyle:{"margin-bottom":"1em"}},[o("el-link",{attrs:{type:"primary",target:"_blank",href:e.documentUrl}},[e._v("\n      相关文档\n    ")])],1),e._v(" "),o("el-button-group",[o("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.switchToView(0)}}},[e._v("默认")]),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.switchToView(1)}}},[e._v("插入元素")])],1),e._v(" "),0===e.invokeType?o("div",{staticClass:"grid-content"},[o("p",[e._v('\n      window.external.InvokeMethod(JSON.stringify({ "method": "实际方法名",\n      "args": JSON.stringify({ "参数1": "值1", "参数2": "值2", "参数3": "值3"\n      })}))\n    ')]),e._v(" "),o("p",[e._v("将要执行的语句是："+e._s(e.resultJsCode))]),e._v(" "),o("h4",[e._v("方法名")]),e._v(" "),o("el-row",{staticClass:"row-bg"},[o("el-col",{attrs:{span:4}},[o("div",{staticClass:"grid-content bg-purple-light"},[o("el-select",{attrs:{filterable:"","allow-create":"","default-first-option":"",placeholder:"请选择或输入方法名"},model:{value:e.commonMethodName,callback:function(t){e.commonMethodName=t},expression:"commonMethodName"}},e._l(e.methodOptions,(function(e){return o("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)])],1),e._v(" "),o("h4",[e._v("参数")]),e._v(" "),o("el-row",{staticClass:"row-bg",staticStyle:{"margin-bottom":"1em"},attrs:{gutter:20}},[o("el-col",{attrs:{span:4}},[o("div",{staticClass:"grid-content bg-purple-light"},[o("el-input",{attrs:{placeholder:"参数名1"},model:{value:e.commonMethodParamName1,callback:function(t){e.commonMethodParamName1=t},expression:"commonMethodParamName1"}})],1)]),e._v(" "),o("el-col",{attrs:{span:18}},[o("div",{staticClass:"grid-content bg-purple-light"},[o("el-input",{attrs:{type:"textarea",rows:4,placeholder:"参数值1"},model:{value:e.commonMethodParamValue1,callback:function(t){e.commonMethodParamValue1=t},expression:"commonMethodParamValue1"}})],1)])],1),e._v(" "),o("el-row",{staticClass:"row-bg",attrs:{gutter:20}},[o("el-col",{attrs:{span:4}},[o("div",{staticClass:"grid-content bg-purple-light"},[o("el-input",{attrs:{placeholder:"参数名2"},model:{value:e.commonMethodParamName2,callback:function(t){e.commonMethodParamName2=t},expression:"commonMethodParamName2"}})],1)]),e._v(" "),o("el-col",{attrs:{span:18}},[o("div",{staticClass:"grid-content bg-purple-light"},[o("el-input",{attrs:{type:"textarea",rows:4,placeholder:"参数值2"},model:{value:e.commonMethodParamValue2,callback:function(t){e.commonMethodParamValue2=t},expression:"commonMethodParamValue2"}})],1)])],1),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:e.invokeCommonMethod}},[e._v("执行")])],1):e._e(),e._v(" "),1===e.invokeType?o("div",{staticClass:"grid-content"},[o("p",[e._v('\n      window.external.InvokeMethod(JSON.stringify({ "method":\n      "实际方法名","args": "参数值" )}))\n    ')]),e._v(" "),o("p",[e._v("将要执行的语句是："+e._s(e.resultJsCode2))]),e._v(" "),o("h4",[e._v("方法名")]),e._v(" "),o("el-row",{staticClass:"row-bg"},[o("el-col",{attrs:{span:4}},[o("div",{staticClass:"grid-content bg-purple-light"},[o("el-select",{attrs:{filterable:"","allow-create":"","default-first-option":"",placeholder:"请选择或输入方法名"},model:{value:e.commonMethodName,callback:function(t){e.commonMethodName=t},expression:"commonMethodName"}},e._l(e.methodOptions,(function(e){return o("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)])],1),e._v(" "),o("h4",[e._v("参数")]),e._v(" "),o("el-row",{staticClass:"row-bg",staticStyle:{"margin-bottom":"1em"},attrs:{gutter:22}},[o("el-col",{attrs:{span:22}},[o("div",{staticClass:"grid-content bg-purple-light"},[o("el-input",{attrs:{type:"textarea",rows:8,placeholder:"参数值"},model:{value:e.commonMethodParamValue1,callback:function(t){e.commonMethodParamValue1=t},expression:"commonMethodParamValue1"}})],1)])],1),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:e.invokeCommonMethod2}},[e._v("执行")])],1):e._e()],1)}),[],!1,null,null,null);t.default=l.exports}}]);