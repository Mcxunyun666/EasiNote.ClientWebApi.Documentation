(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2076ec"],{a106:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"grid-content"},[n("h3",[e._v("5 创建题库元素")]),n("el-link",{attrs:{type:"primary",target:"_blank",href:"https://gitee.com/easinote/client-web-api-documentation/blob/master/zh-CN/apis/direct-api/element-json/question-analysis-card.md"}},[e._v(" 相关文档 ")]),n("h4",[e._v("创建参数")]),n("el-row",{staticClass:"row-bg",attrs:{gutter:5}},[n("el-col",{attrs:{span:18}},[n("div",{staticClass:"grid-content bg-purple-light"},[n("el-form",{attrs:{"label-position":"right","label-width":"360px",model:e.questionCard,size:"medium"}},[n("el-form-item",{attrs:{label:"标签(tag)"}},[n("el-input",{model:{value:e.questionCard.tag,callback:function(t){e.$set(e.questionCard,"tag",t)},expression:"questionCard.tag"}})],1),n("el-form-item",{attrs:{label:"问题类型(questionType)"}},[n("el-input",{model:{value:e.questionCard.questionType,callback:function(t){e.$set(e.questionCard,"questionType",t)},expression:"questionCard.questionType"}})],1),n("el-form-item",{attrs:{label:"题干图片URL(questionTitleUrl)"}},[n("el-input",{model:{value:e.questionCard.questionTitleUrl,callback:function(t){e.$set(e.questionCard,"questionTitleUrl",t)},expression:"questionCard.questionTitleUrl"}})],1),n("el-form-item",{attrs:{label:"题目内容图片URL(questionContentUrl)"}},[n("el-input",{model:{value:e.questionCard.questionContentUrl,callback:function(t){e.$set(e.questionCard,"questionContentUrl",t)},expression:"questionCard.questionContentUrl"}})],1),n("el-form-item",{attrs:{label:"答案图片URL(answerUrl)"}},[n("el-input",{model:{value:e.questionCard.answerUrl,callback:function(t){e.$set(e.questionCard,"answerUrl",t)},expression:"questionCard.answerUrl"}})],1),n("el-form-item",{attrs:{label:"解析图片URL(analysisUrl)"}},[n("el-input",{model:{value:e.questionCard.analysisUrl,callback:function(t){e.$set(e.questionCard,"analysisUrl",t)},expression:"questionCard.analysisUrl"}})],1)],1)],1)]),n("el-col",{attrs:{span:6}},[n("el-input",{attrs:{type:"textarea",rows:18},model:{value:e.questionCardJson,callback:function(t){e.questionCardJson=t},expression:"questionCardJson"}})],1)],1),n("el-button",{staticStyle:{"margin-left":"10em"},attrs:{type:"primary"},on:{click:e.createQuestionCard}},[e._v("创建题库元素")])],1)},a=[],i=n("a676"),l=n.n(i),o={name:"DebugPage5",data:function(){return{questionCard:{tag:"seewo-tiku-test",questionType:"单选题",questionTitleUrl:"http://files.eduuu.com/img/2011/08/18/162033_4e4ccb510ed70.jpg",questionContentUrl:"http://5b0988e595225.cdn.sohucs.com/images/20170914/e22bca324ab242f3bc91295b855f4d6d.jpeg",answerUrl:"http://files.eduuu.com/img/2012/07/11/100611_4ffcdf9349df0.jpg",analysisUrl:"https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/b219ebc4b74543a90234b6511b178a82b901147b.jpg"}}},computed:{questionCardJson:function(){return JSON.stringify(this.questionCard,null,2)}},methods:{createQuestionCard:function(){l.a.Proxy.insertElementByJson("QuestionAnalysisCard",this.questionCardJson)}}},r=o,u=n("2877"),c=Object(u["a"])(r,s,a,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d2076ec.85cabdc8.js.map