(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[7],{108:function(e,t,a){"use strict";var n=a(9),r=a(0),l=a(6),c=a(48),o=a(23),i=a(47),s=a(109),u=a.n(s),b=a(1);t.a=function(e){var t=e.collection,a=Object(r.useContext)(c.b),s=Object(r.useState)([]),y=Object(n.a)(s,2),g=y[0],j=y[1],f=Object(r.useState)(8),m=Object(n.a)(f,2),O=m[0],v=m[1];Object(r.useEffect)((function(){j(t.slice(0,O))}),[O,t]);var d=Object(l.b)();return Object(b.jsxs)("div",{className:u.a.galleryContainer,children:[Object(b.jsx)("ul",{className:u.a.galleryCollection,children:g.map((function(e){return Object(b.jsx)("li",{className:u.a.galleryItem,children:Object(b.jsx)("div",{className:u.a.imageOverlay,onClick:function(a){return d(o.a.setModalItem({image:e,collection:t}))},children:Object(b.jsx)("img",{src:"https://drive.google.com/uc?export=view&id=".concat(e),alt:e,className:u.a.galleryImage})})},e)}))}),t&&t.length>8&&t.length>O&&Object(b.jsx)(i.a,{text:a.galleryMoreButton,onClick:function(e){return function(e,t){t(e+8)}(O,v)}})]})}},109:function(e,t,a){e.exports={galleryContainer:"gallery_galleryContainer__2Ggif",galleryItem:"gallery_galleryItem__SHWSe",imageOverlay:"gallery_imageOverlay__xpOy9",galleryCollection:"gallery_galleryCollection__2V_XR",galleryImage:"gallery_galleryImage__3wDA6"}},118:function(e,t,a){"use strict";a.r(t);var n=a(44);var r=a(31);function l(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=a(9),o=a(0),i=a(6),s=a(108),u=a(1);t.default=function(){var e=Object(i.c)((function(e){return e.data.content.events})),t=Object(o.useState)([]),a=Object(c.a)(t,2),n=a[0],r=a[1];return Object(o.useEffect)((function(){var t=[];e.forEach((function(e){t.push.apply(t,l(e.eventGallery))})),r(t)}),[e]),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(s.a,{collection:n})})}}}]);
//# sourceMappingURL=7.72e8a43c.chunk.js.map