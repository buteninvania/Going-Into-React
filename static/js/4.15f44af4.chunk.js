(this["webpackJsonphello-react"]=this["webpackJsonphello-react"]||[]).push([[4],{291:function(e,a,t){e.exports={dialogues:"Dialogs_dialogues__2TYsi",dialog:"Dialogs_dialog__lk_cw",dialoguesItem:"Dialogs_dialoguesItem__m4mqC",dialogNav:"Dialogs_dialogNav__baout",active:"Dialogs_active__2sQhs",messages:"Dialogs_messages__1w_Up",messageItem:"Dialogs_messageItem__3wY4Y",addMessage:"Dialogs_addMessage__1Bihp"}},292:function(e,a,t){"use strict";t.d(a,"a",(function(){return g}));var s=t(32),n=t(33),i=t(36),l=t(35),r=t(0),c=t.n(r),m=t(10),o=t(16),u=function(e){return{isAuth:e.auth.isAuth}},g=function(e){var a=function(a){Object(i.a)(r,a);var t=Object(l.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(n.a)(r,[{key:"render",value:function(){return this.props.isAuth?c.a.createElement(e,this.props):c.a.createElement(m.a,{to:"/login"})}}]),r}(c.a.Component);return Object(o.b)(u)(a)}},297:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),i=t(128),l=t(291),r=t.n(l),c=t(20),m=function(e){return n.a.createElement("div",{className:r.a.dialog},n.a.createElement("img",{src:e.urlImg,alt:"daria"}),n.a.createElement(c.b,{to:"/dialogs/"+e.id,className:r.a.dialogNav,activeClassName:r.a.active},e.name))},o=function(e){return n.a.createElement("div",{className:r.a.messageItem},n.a.createElement("div",null,e.message))},u=t(10),g=t(88),d=t(129),_=t(31),b=t(85),f=Object(b.a)(50),v=Object(d.a)({form:"dialogAddMessageForm"})((function(e){return n.a.createElement("form",{onSubmit:e.handleSubmit,className:r.a.addMessage},n.a.createElement("div",null,n.a.createElement(g.a,{component:_.b,validate:[b.b,f],name:"newMessageText",placeholder:"Enter new Message"})),n.a.createElement("div",null,n.a.createElement("button",null,"Add Message")))})),h=function(e){var a=e.dialogs.map((function(e){return n.a.createElement(m,{name:e.name,key:e.id,id:e.id,urlImg:e.urlImg})})),t=e.messages.map((function(e){return n.a.createElement(o,{message:e.message,key:e.id})}));return!1===e.isAuth?n.a.createElement(u.a,{to:"/login"}):n.a.createElement("div",{className:r.a.dialogues},n.a.createElement("div",{className:r.a.dialoguesItem},a),n.a.createElement("div",{className:r.a.messages},t,n.a.createElement(v,{onSubmit:function(a){e.addMessage(a.newMessageText)}})))},E=t(16),p=t(292),M=t(8);a.default=Object(M.d)(Object(E.b)((function(e){return{messages:e.messagePage.messageData,dialogs:e.messagePage.dialogData,newMessageText:e.messagePage.newMessageText,isAuth:e.auth.isAuth}}),(function(e){return{addMessage:function(a){e(Object(i.a)(a))}}})),p.a)(h)}}]);
//# sourceMappingURL=4.15f44af4.chunk.js.map