(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{106:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n(30),c=n.n(o),r=n(9),s=n(48),i=n(34),u=n(4),l=[{path:"/",label:"Home",exact:!0,component:Object(a.lazy)((function(){return n.e(3).then(n.bind(null,117))}))},{path:"/competitions",label:"Competitions",exact:!0,component:Object(a.lazy)((function(){return n.e(6).then(n.bind(null,120))}))},{path:"/event/:id",label:"Event",exact:!0,component:Object(a.lazy)((function(){return n.e(4).then(n.bind(null,122))}))},{path:"/gallery",label:"gallery",exact:!0,component:Object(a.lazy)((function(){return n.e(7).then(n.bind(null,118))}))},{path:"/about",label:"About",exact:!0,component:Object(a.lazy)((function(){return n.e(5).then(n.bind(null,121))}))},{path:"/contacts",label:"Contacts",exact:!0,component:Object(a.lazy)((function(){return n.e(8).then(n.bind(null,123))}))},{path:"/editor",label:"Editor",exact:!0,component:Object(a.lazy)((function(){return n.e(9).then(n.bind(null,119))}))}],b=n(64),d=n.n(b),p=n(46),j=n.n(p),O=n(1);var f=function(e){return Object(O.jsx)("div",{className:j.a.spinnerSection,children:Object(O.jsx)("div",{className:j.a.spinnerContainer,children:Object(O.jsx)(d.a,{size:e,color:"rgba(73, 126, 233, 0.79)"})})})},g=n(6),_=n(23),m=n(38),C=n.n(m),v=function(e){var t=e.onButtonClick;return Object(O.jsxs)("div",{onClick:t,className:C.a.closeContainer,children:[Object(O.jsx)("div",{className:C.a.leftright}),Object(O.jsx)("div",{className:C.a.rightleft})]})},h=n(26),x=n.n(h);function T(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(0),s=Object(r.a)(c,2),i=s[0],u=s[1],l=Object(g.c)((function(e){return e.app.modalItem}));console.log(n,i,n.length),Object(a.useEffect)((function(){l&&(o(l.collection),u(l.collection.indexOf(l.image)))}),[l]);var b=Object(g.b)(),d=Object(a.useCallback)((function(e){b(_.a.setModalItem(null))}),[b]);Object(a.useEffect)((function(){var e=function(e){"Escape"===e.code&&d()};return window.addEventListener("keydown",e),window.removeEventListener("keydown",e)}),[d]);var p=function(e){"+"===e&&(i===n.length-1?u(0):u(i+1)),"-"===e&&u(0===i?n.length-1:i-1)},j=function(e){"backdrop"!==e.target.id&&"svg"!==e.target.nodeName&&"path"!==e.target.nodeName||d()};return Object(O.jsx)("div",{className:x.a.backdrop,id:"backdrop",onClick:j,children:Object(O.jsxs)("div",{className:x.a.overlay,onClick:j,children:[Object(O.jsx)("div",{className:x.a.close,children:Object(O.jsx)(v,{onButtonClick:d})}),Object(O.jsx)("div",{className:x.a.prev,onClick:function(e){return p("-")}}),Object(O.jsx)("img",{src:"https://drive.google.com/uc?export=view&id=".concat(n[i]),alt:i,className:x.a.galleryImage}),Object(O.jsx)("div",{className:x.a.next,onClick:function(e){return p("+")}})]})})}var N=n(39),E=n.n(N),k=function(){var e=Object(g.c)((function(e){return e.app.message})),t=Object(g.b)(),n=Object(a.useCallback)((function(e){t(_.a.setMessage(null))}),[t]);return Object(O.jsxs)("div",{className:E.a.messageContainer,children:[Object(O.jsx)("div",{className:E.a.close,onClick:n}),Object(O.jsx)("p",{className:E.a.message,children:e})]})};var S=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(null),b=Object(r.a)(c,2),d=b[0],p=b[1],j=Object(g.c)((function(e){return e.app.modalItem})),_=Object(g.c)((function(e){return e.app.message}));return Object(a.useEffect)((function(){o(!!j)}),[j]),Object(a.useEffect)((function(){p(!!_)}),[_]),Object(O.jsx)(i.a,{children:Object(O.jsx)(s.a,{children:Object(O.jsxs)(a.Suspense,{fallback:f(100),children:[n&&Object(O.jsx)(T,{}),d&&Object(O.jsx)(k,{}),Object(O.jsx)(u.c,{children:l.map((function(e){return Object(O.jsx)(u.a,{path:e.path,exact:!0,component:e.component},e.label)}))})]})})})},y=n(65),U=n(2),M=n(17),w=n(40),R=n.n(w),B=n(35),I=n(5),A=n(7),L=n(8),q=function(e,t){return t.payload},H=Object(U.c)("Ua",Object(I.a)({},L.a.toggleLanguage,q)),F=Object(U.c)(null,Object(I.a)({},L.a.setModalItem,q)),z=Object(U.c)(null,Object(I.a)({},L.a.setMessage,q)),D=Object(A.b)({modalItem:F,language:H,message:z}),G=n(33),K={key:"user",storage:R.a},V={key:"content",storage:R.a,blacklist:["auth"]},P={key:"app",storage:R.a},W=Object(U.a)({reducer:{app:Object(M.g)(P,D),data:Object(M.g)(V,B.a),auth:Object(M.g)(K,G.a)},middleware:Object(U.d)({serializableCheck:{ignoredActions:[M.a,M.f,M.b,M.c,M.d,M.e]}})}),J=Object(M.h)(W);c.a.render(Object(O.jsx)(g.a,{store:W,children:Object(O.jsx)(y.a,{loading:null,persistor:J,children:Object(O.jsx)(S,{})})}),document.getElementById("root"))},12:function(e,t,n){e.exports={app:"footer_app__3buCC",container:"footer_container__3XR-k",appContainer:"footer_appContainer__2FzV6",appContentContainer:"footer_appContentContainer__3i-YJ",footer:"footer_footer__2ct4d",footerMenu:"footer_footerMenu__aJ5Yi",footerMenuItem:"footer_footerMenuItem__2ViU9",footerMenuEditor:"footer_footerMenuEditor__2rdg_",mail:"footer_mail__23SlZ",facebook:"footer_facebook__1bK7E",instagram:"footer_instagram__2E__C",login:"footer_login__1R-zI",edit:"footer_edit__2uFHX",footerLable:"footer_footerLable__1ALX6"}},18:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return O}));var a=n(2),o={getContentRequest:Object(a.b)("CONTENT/getEventsSend"),getContentSuccess:Object(a.b)("CONTENT/getEventsSuccess"),getContentError:Object(a.b)("CONTENT/getEventsError"),addContentRequest:Object(a.b)("CONTENT/addContentRequest"),addContentSuccess:Object(a.b)("CONTENT/addContentSuccess"),addContentError:Object(a.b)("CONTENT/addContentError"),updateContentRequest:Object(a.b)("CONTENT/updateContentRequest"),updateContentSuccess:Object(a.b)("CONTENT/updateContentSuccess"),updateContentError:Object(a.b)("CONTENT/updateContentError"),deleteContentRequest:Object(a.b)("CONTENT/deleteContentRequest"),deleteContentSuccess:Object(a.b)("CONTENT/deleteContentSuccess"),deleteContentError:Object(a.b)("CONTENT/deleteContentError")},c=(n(35),n(58),n(10)),r=n.n(c),s=n(22),i=n(16),u=n.n(i),l=n(8),b=n(66),d=function(e){var t=new FormData,n=e.event,a=n.titleUa,o=n.titleEn,c=n.contentUa,r=n.contentEn,s=n.date,i=n.images,u=n.backgroundImage;t.append("link",e.link),t.append("titleUa",a),t.append("titleEn",o),t.append("contentUa",c),t.append("contentEn",r),t.append("date",s);var l,d=Object(b.a)(i);try{for(d.s();!(l=d.n()).done;){var p=l.value;t.append("gallery",p,p.name)}}catch(m){d.e(m)}finally{d.f()}if(t.append("backgroundImage",u[0]),e.competition){var j=e.competition,O=j.competitionTitleUk,f=j.competitionTitleEn,g=j.compBackgroudImage,_=j.rases;t.append("competitionTitleUk",O),t.append("competitionTitleEn",f),t.append("compBackgroudImage",g[0]),t.append("rasesFiles",_[0])}return t},p=function(e){var t=new FormData,n=e.profile,a=n.nameEn,o=n.nameUa,c=n.avatar,r=n.uaDescription,s=n.enDescription,i=n.isOuner;return t.append("link",e.link),t.append("nameEn",a),t.append("nameUa",o),t.append("avatar",c[0]),t.append("uaDescription",r),t.append("enDescription",s),t.append("isOuner",i),t},j="http://hqua0210238.online-vm.com/club";console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).BASE_URL);var O={getContent:function(e){return function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(o.getContentRequest()),e.next=3,u.a.get("".concat(j,"/getContent")).then((function(e){var n=e.data;return t(o.getContentSuccess(n))})).catch((function(e){return t(o.getContentError(e))}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},addContent:function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n){var a,c,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(o.addContentRequest()),e.next=3,u.a.post("".concat(j,"/createContent"),t).then((function(e){var t=e.data;return n(o.addContentSuccess(t))&&n(l.a.setMessage("\u0423\u0441\u043f\u0456\u0448\u043d\u043e \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043e"))})).catch((function(e){return n(o.addContentError(e))&&n(l.a.setMessage("\u0414\u0430\u043d\u043d\u0456 \u043d\u0435 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043e"))}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),"event"===e.link?(c=d(e),a(c)):(i=p(e),a(i));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},deleteContent:function(e,t){return function(){var n=Object(s.a)(r.a.mark((function n(a){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(o.deleteContentRequest()),n.next=3,u.a.delete("".concat(j,"/removeContent/?id=").concat(e,"&link=").concat(t)).then((function(e){var t=e.data;return a(o.deleteContentSuccess(t))&&a(l.a.setMessage("\u0423\u0441\u043f\u0456\u0448\u043d\u043e \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043e"))})).catch((function(e){return a(o.deleteContentError(e))&&a(l.a.setMessage("\u0414\u0430\u043d\u0456 \u043d\u0435 \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043e"))}));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}},19:function(e,t,n){"use strict";var a=n(2),o=Object(a.b)("AUTH/loginRequest"),c=Object(a.b)("AUTH/loginSuccess"),r=Object(a.b)("AUTH/loginError"),s=Object(a.b)("AUTH/logoutRequest"),i=Object(a.b)("AUTH/logoutSuccess"),u=Object(a.b)("AUTH/logoutError"),l=Object(a.b)("AUTH/currentUserRequest"),b=Object(a.b)("AUTH/currentUserRejected"),d=Object(a.b)("AUTH/currentUserError");t.a={loginRequest:o,loginSuccess:c,loginError:r,logoutRequest:s,logoutSuccess:i,logoutError:u,currentUserRequest:l,currentUserRejected:b,currentUserError:d}},20:function(e,t,n){e.exports={app:"login_app__1TKlI",container:"login_container__2ndH9",appContainer:"login_appContainer__1Frg0",appContentContainer:"login_appContentContainer__3epUN",loginContainer:"login_loginContainer__1Jy4_",login:"login_login__1pnyY",label:"login_label__1CtX7",labelError:"login_labelError__ZFTxD",input:"login_input__25VpD",close:"login_close__3KpGk"}},23:function(e,t,n){"use strict";var a=n(8);t.a={setLanguage:function(e){return function(t){t(a.a.toggleLanguage(e))}},setModalItem:function(e){return function(t){t(a.a.setModalItem(e))}},setMessage:function(e){return function(t){t(a.a.setMessage(e))}}}},24:function(e,t,n){"use strict";var a=n(19);n.d(t,"a",(function(){return a.a}));n(33);var o=n(32);n.d(t,"b",(function(){return o.a}))},26:function(e,t,n){e.exports={backdrop:"modal_backdrop__2eW9A",overlay:"modal_overlay__y5NBE",close:"modal_close__3NEKh",prev:"modal_prev__lCWqz",next:"modal_next__1P7NC"}},28:function(e,t,n){e.exports={buttoncontainer:"lang_buttoncontainer__16dRT",active:"lang_active__3cbuR",passive:"lang_passive__26old"}},29:function(e,t,n){e.exports={navButton:"buttons_navButton__2P9r9",deleteButton:"buttons_deleteButton__Uw4BF",menuButton:"buttons_menuButton__3OXRi",buttonText:"buttons_buttonText__3KHsY",edit:"buttons_edit__2iRb-",delete:"buttons_delete__26NST"}},32:function(e,t,n){"use strict";var a=n(10),o=n.n(a),c=n(22),r=n(16),s=n.n(r),i=n(24),u=n(8),l="http://hqua0210238.online-vm.com/auth",b=function(e){s.a.defaults.headers.common.token="".concat(e)};t.a={login:function(e){return function(){var t=Object(c.a)(o.a.mark((function t(n){var a,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(i.a.loginRequest()),t.prev=1,t.next=4,s.a.post("".concat(l,"/login"),e);case 4:a=t.sent,c=a.data,b(c),c&&n(i.a.loginSuccess(c))&&n(u.a.setMessage("\u0423\u0441\u043f\u0456\u0448\u043d\u0438\u0439 \u0432\u0445\u0456\u0434 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443")),s.a.defaults.headers.common.token=c,t.next=15;break;case 11:t.prev=11,t.t0=t.catch(1),n(i.a.loginError(t.t0)),n(u.a.setMessage("\u0412\u0445\u0456\u0434 \u043d\u0435 \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043e"));case 15:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}()},currentUser:function(e){return function(){var t=Object(c.a)(o.a.mark((function t(n){var a,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(i.a.currentUserRequest()),t.prev=1,t.next=4,s.a.post("".concat(l,"/currentUser"),{token:e});case 4:a=t.sent,c=a.data,n(c?i.a.loginSuccess(c):i.a.currentUserRejected()),c&&(s.a.defaults.headers.common.token=c),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()}}},33:function(e,t,n){"use strict";var a,o=n(5),c=n(7),r=n(2),s=n(19),i=Object(r.c)(null,(a={},Object(o.a)(a,s.a.loginSuccess,(function(e,t){return t.payload})),Object(o.a)(a,s.a.logoutSuccess,(function(e,t){t.payload;return null})),Object(o.a)(a,s.a.currentUserRejected,(function(e,t){t.payload;return null})),a));t.a=Object(c.b)({isLogged:i})},35:function(e,t,n){"use strict";var a,o,c=n(5),r=n(7),s=n(2),i=n(18),u=n(19),l=null,b=function(e,t){return t.payload},d=Object(s.c)({},(a={},Object(c.a)(a,i.a.getContentSuccess,b),Object(c.a)(a,i.a.addContentSuccess,b),Object(c.a)(a,i.a.deleteContentSuccess,b),Object(c.a)(a,i.a.updateContentSuccess,b),a)),p=Object(s.c)(null,(o={},Object(c.a)(o,u.a.loginSuccess,(function(){return l})),Object(c.a)(o,i.a.getContentSuccess,(function(){return l})),Object(c.a)(o,i.a.addContentSuccess,(function(){return l})),Object(c.a)(o,i.a.deleteContentSuccess,(function(){return l})),Object(c.a)(o,u.a.loginError,b),Object(c.a)(o,i.a.getContentError,b),Object(c.a)(o,i.a.addContentError,b),Object(c.a)(o,u.a.currentUserError,b),o));t.a=Object(r.b)({content:d,error:p})},36:function(e,t,n){e.exports={header:"header_header__1ocRX",headerContainer:"header_headerContainer__2o0xg",logoContainer:"header_logoContainer__3CnNU"}},37:function(e,t,n){e.exports={app:"main_app__2mYBc",container:"main_container__1O4yu",appContainer:"main_appContainer__5P6xD",appContentContainer:"main_appContentContainer__2gQNb"}},38:function(e,t,n){e.exports={closeContainer:"closeModalBtn_closeContainer__bIjhk",leftright:"closeModalBtn_leftright__ACTBn",rightleft:"closeModalBtn_rightleft__1WHkC",close:"closeModalBtn_close__1vFFM"}},39:function(e,t,n){e.exports={app:"message_app__3F1da",container:"message_container__33IlQ",appContainer:"message_appContainer__irMTU",appContentContainer:"message_appContentContainer__33KOQ",messageContainer:"message_messageContainer__2VIQ3",login:"message_login__2WRTu",message:"message_message__1vMjV",close:"message_close__2O3_z"}},46:function(e,t,n){e.exports={spinnerSection:"spinner_spinnerSection__PC6yu",spinnerContainer:"spinner_spinnerContainer__3F9Rm"}},47:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(0);var a=n(29),o=n.n(a),c=n(1);function r(e){var t=e.text,n=e.onClick;return Object(c.jsx)("div",{className:o.a.menuButton,children:Object(c.jsx)("p",{className:o.a.buttonText,onClick:n,children:t})})}},48:function(e,t,n){"use strict";n.d(t,"b",(function(){return B})),n.d(t,"a",(function(){return I}));var a=n(0),o=n.n(a),c=n(6),r=n(29),s=n.n(r),i=n(1);function u(e){var t=e.path,n=e.text;return Object(i.jsx)("a",{href:t,className:s.a.navButton,children:n})}var l=n(60),b=n.n(l);function d(){var e=Object(a.useContext)(B);return Object(i.jsxs)("nav",{className:b.a.navContainer,children:[Object(i.jsx)(u,{path:"/",text:e.navButtons.Home}),Object(i.jsx)(u,{path:"/competitions",text:e.navButtons.Competitions}),Object(i.jsx)(u,{path:"/gallery",text:e.navButtons.Gallery}),Object(i.jsx)(u,{path:"/about",text:e.navButtons.AboutClub}),Object(i.jsx)(u,{path:"/contacts",text:e.navButtons.Contacts})]})}var p=n(9),j=n(23),O=n(28),f=n.n(O),g=function(){var e=Object(a.useState)(!0),t=Object(p.a)(e,2),n=t[0],o=t[1],r=Object(c.c)((function(e){return e.app.language}));Object(a.useEffect)((function(){o("Ua"===r)}),[r]);var s=Object(c.b)(),u=function(){s("Ua"===r?j.a.setLanguage("En"):j.a.setLanguage("Ua"))};return Object(i.jsxs)("div",{className:f.a.buttoncontainer,children:[Object(i.jsx)("div",{className:n?f.a.active:f.a.passive,onClick:u,children:"Ua"}),Object(i.jsx)("div",{className:n?f.a.passive:f.a.active,onClick:u,children:"En"})]})},_=n(36),m=n.n(_);function C(){return Object(i.jsx)("header",{className:m.a.header,children:Object(i.jsxs)("div",{className:m.a.headerContainer,children:[Object(i.jsx)("div",{className:m.a.logoContainer}),Object(i.jsx)(d,{}),Object(i.jsx)(g,{})]})})}var v=n(34),h=n(32),x=n(47),T=n(20),N=n.n(T),E=function(e){var t=e.onClose,n=Object(a.useContext)(B),o=Object(a.useState)(""),r=Object(p.a)(o,2),s=r[0],u=r[1],l=Object(a.useState)(""),b=Object(p.a)(l,2),d=b[0],j=b[1],O=Object(a.useState)(!1),f=Object(p.a)(O,2),g=f[0],_=f[1],m=Object(a.useState)(!1),C=Object(p.a)(m,2),v=C[0],T=C[1],E=function(e,t){t(e.target.value)},k=Object(c.b)(),S=Object(a.useCallback)((function(e){if(s.length<3)return _(!0);if(d.length<3)return T(!0);var n={user:d,password:s};T(!1),_(!1),k(h.a.login(n)),t(!1)}),[k,d,s,t]);return Object(i.jsxs)("div",{className:N.a.loginContainer,children:[Object(i.jsx)("div",{className:N.a.close,onClick:function(e){return t(!1)}}),Object(i.jsxs)("form",{className:N.a.login,children:[Object(i.jsx)("label",{htmlFor:"user",className:g?N.a.labelError:N.a.label,children:Object(i.jsx)("input",{type:"text",value:d,onChange:function(e){return E(e,j)},name:"user",className:N.a.input,placeholder:n.user})}),Object(i.jsx)("label",{htmlFor:"password",className:v?N.a.labelError:N.a.label,children:Object(i.jsx)("input",{type:"password",value:s,onChange:function(e){return E(e,u)},name:"password",className:N.a.input,placeholder:n.password})})]}),Object(i.jsx)(x.a,{text:n.login,onClick:S})]})},k=n(12),S=n.n(k),y=function(){var e=Object(a.useState)(!1),t=Object(p.a)(e,2),n=t[0],o=t[1],r=Object(c.c)((function(e){return e.auth.isLogged}));return Object(i.jsxs)("div",{className:S.a.footer,children:[Object(i.jsxs)("ul",{className:S.a.footerMenu,children:[Object(i.jsx)("li",{className:S.a.footerMenuItem,children:Object(i.jsx)("a",{href:"https://uk-ua.facebook.com/",children:Object(i.jsx)("div",{className:S.a.facebook})})}),Object(i.jsx)("li",{className:S.a.footerMenuItem,children:Object(i.jsx)("a",{href:"https://instagram.com/zakhidnyiviter?utm_medium=copy_link",children:Object(i.jsx)("div",{className:S.a.instagram})})}),Object(i.jsx)("li",{className:S.a.footerMenuItem,onClick:function(e){o(!n)},children:Object(i.jsx)("div",{className:S.a.login})}),Object(i.jsx)("li",{className:S.a.footerMenuItem,children:Object(i.jsx)("div",{className:S.a.mail})}),r&&Object(i.jsx)("li",{className:S.a.footerMenuEditor,children:Object(i.jsx)(v.b,{to:{pathname:"/editor"},children:Object(i.jsx)("div",{className:S.a.edit})})})]}),n&&Object(i.jsx)(E,{onClose:o}),Object(i.jsx)("p",{className:S.a.footerLable,children:"Created by Igor Verchyk <igorverchyk@gmail.com>"})]})},U=n(37),M=n.n(U),w=n(62),R=n(63),B=o.a.createContext();function I(e){var t=e.children,n="Ua"===Object(c.c)((function(e){return e.app.language}))?w:R;return Object(i.jsx)("div",{className:M.a.app,children:Object(i.jsx)("div",{className:M.a.appContainer,children:Object(i.jsxs)(B.Provider,{value:n,children:[Object(i.jsx)(C,{}),Object(i.jsx)("div",{className:M.a.appContentContainer,children:t}),Object(i.jsx)(y,{})]})})})}},58:function(e,t){},60:function(e,t,n){e.exports={navContainer:"nav_navContainer__3c8vw",edit:"nav_edit__3OLde"}},62:function(e){e.exports=JSON.parse('{"navButtons":{"Home":"\u0414\u043e\u043c\u0430\u0448\u043d\u044f","Competitions":"\u0417\u043c\u0430\u0433\u0430\u043d\u043d\u044f","Gallery":"\u0413\u0430\u043b\u0435\u0440\u0435\u044f","AboutClub":"\u041f\u0440\u043e \u043a\u043b\u0443\u0431","Contacts":"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438"},"heroText":"\u0421\u043f\u043e\u0440\u0442\u0438\u0432\u043d\u0438\u0439 \u043a\u043b\u0443\u0431 \u0437 \u0432\u0435\u0441\u043b\u0443\u0432\u0430\u043d\u043d\u044f \u043d\u0430 \u0447\u043e\u0432\u043d\u0430\u0445 \u0434\u0440\u0430\u043a\u043e\u043d \u0417\u0430\u0445\u0456\u0434\u043d\u0438\u0439 \u0412\u0456\u0442\u0435\u0440","aboutClubTitle":"\u041f\u0440\u043e \u043a\u043b\u0443\u0431","aboutClub":"\u041d\u0430 \u0441\u044c\u043e\u0433\u043e\u0434\u043d\u0456\u0448\u043d\u0456\u0439 \u0434\u0435\u043d\u044c \u0431\u0430\u0433\u0430\u0442\u043e\u0440\u0430\u0437\u043e\u0432\u0456 \u0447\u0435\u043c\u043f\u0456\u043e\u043d\u0438 \u0442\u0430 \u043f\u0440\u0438\u0437\u0435\u0440\u0438 \u043a\u043b\u0443\u0431\u043d\u0438\u0445 \u0447\u0435\u043c\u043f\u0456\u043e\u043d\u0430\u0442\u0456\u0432 \u0441\u0432\u0456\u0442\u0443","aboutOunerSectionTitle":"\u0417\u0430\u0441\u043d\u043e\u0432\u043d\u0438\u043a\u0438 \u043a\u043b\u0443\u0431\u0443","aboutClubMenbersSectionTitle":"\u0427\u043b\u0435\u043d\u0438 \u043a\u043b\u0443\u0431\u0443","eventsTitle":"\u041f\u043e\u0434\u0456\u0457","competitionsTitle":"\u0417\u043c\u0430\u0433\u0430\u043d\u043d\u044f","loadingButton":"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u0449\u0435","contacts":{"contactTitle":"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438","addres":"\u0423\u043a\u0440\u0430\u0457\u043d\u0430, \u0412\u043e\u043b\u0438\u043d\u0441\u044c\u043a\u0430 \u043e\u0431\u043b. \u0432\u0443\u043b \u0412\u0430\u0440\u0448\u0430\u0432\u0441\u044c\u043a\u0430 ","phoneTitle":"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u0438\u0439 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443:"},"galleryMoreButton":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0438 \u0449\u0435...","raseShowCrew":"\u0415\u043a\u0456\u043f\u0430\u0436","user":"\u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447","password":"\u043f\u0430\u0440\u043e\u043b\u044c","login":"\u0443\u0432\u0456\u0439\u0442\u0438","clickToGo":"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0434\u043e \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0456\u0432 \u0437\u043c\u0430\u0433\u0430\u043d\u043d\u044c","clickToSee":"\u041a\u043b\u0430\u0446\u043d\u0456\u0442\u044c \u0449\u043e\u0431 \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u0434\u043e \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0456\u0432 \u0437\u043c\u0430\u0433\u0430\u043d\u043d\u044c"}')},63:function(e){e.exports=JSON.parse('{"navButtons":{"Home":"Home","Competitions":"Competitions","Gallery":"Gallery","AboutClub":"About Club","Contacts":" Contacts"},"heroText":"Zakhidnui Viter (West-wind in ukrainian) is a dragonboat sport club","aboutClubTitle":"About club","aboutClub":"Testing Text Testing Text Testing Text Testing Text Testing Text Testing Text Testing Text Testing Text Testing Text Testing Text Testing Text ","aboutOunerSectionTitle":"Club Creators","aboutClubMenbersSectionTitle":"Club Members","eventsTitle":"Events","competitionsTitle":"Competitions","loadingButton":"Load more","contacts":{"contactTitle":"Contacts","addres":"Ukraine, Volunska obl, Kovel Varchavska st.","phoneTitle":"Contact phone number:"},"galleryMoreButton":"Load more...","raseShowCrew":"Crew","user":"user","password":"password","login":"login","clickToGo":"See competition protocols","clickToSee":"Click to see competition protocols"}')},8:function(e,t,n){"use strict";var a=n(2),o=Object(a.b)("LANGUAGE/toggleLanguage"),c=Object(a.b)("MODAL/setModalItem"),r=Object(a.b)("MESSAGE/setMessage");t.a={toggleLanguage:o,setModalItem:c,setMessage:r}}},[[106,1,2]]]);
//# sourceMappingURL=main.618f917e.chunk.js.map