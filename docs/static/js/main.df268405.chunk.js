(this["webpackJsonp04-gif-expert-app"]=this["webpackJsonp04-gif-expert-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n(7),c=n.n(a),i=n(2),s=n(9),u=n(0),j=function(t){var e=t.setCategories,n=Object(r.useState)(""),a=Object(i.a)(n,2),c=a[0],j=a[1];return Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),c.trim().length>2&&(e((function(t){return[c].concat(Object(s.a)(t))})),j(""))},children:Object(u.jsx)("input",{type:"text",value:c,onChange:function(t){j(t.target.value)}})})},o=n(10),d=n(6),b=n.n(d),l=n(8),f=function(){var t=Object(l.a)(b.a.mark((function t(e){var n,r,a,c,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=fb36rhWkdzSVD5NPLfFas2Wryuq82AM2"),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return a=t.sent,c=a.data,i=c.map((function(t){return{id:t.id,title:t.title,url:t.images.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(t){var e=t.title,n=t.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__fadeIn animate__delay-3s",children:[Object(u.jsx)("img",{src:n,alt:e}),Object(u.jsx)("p",{children:e})]})},O=function(t){var e=t.category,n=function(t){var e=Object(r.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){f(t).then((function(t){c({data:t,loading:!1})}))}),[t]),a}(e),a=n.data,c=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h3",{children:[" ",e," "]}),c&&Object(u.jsx)("p",{children:"Cargando..."}),Object(u.jsxs)("div",{className:"card-grid",children:[a.map((function(t){return Object(u.jsx)(p,Object(o.a)({},t),t.id)})),";"]})]})},h=function(){var t=Object(r.useState)(["Dragon ball"]),e=Object(i.a)(t,2),n=e[0],a=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(j,{setCategories:a}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(t){return Object(u.jsx)(O,{category:t},t)}))})]})};n(17);c.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.df268405.chunk.js.map