(this.webpackJsonpventa=this.webpackJsonpventa||[]).push([[0],{47:function(t,e,n){},51:function(t,e,n){},52:function(t,e,n){},53:function(t,e,n){},54:function(t,e,n){},55:function(t,e,n){},56:function(t,e,n){},57:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(20),i=n.n(r),a=n(21),s=n(58),o=n(10),u=n(9),d=n(24),j=n.n(d),p=n(4),l=n.n(p),m=n(8),h=function(){var t=Object(m.a)(l.a.mark((function t(e){var n,c,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.mercadolibre.com/categories/".concat(e),t.next=3,fetch(n);case 3:return c=t.sent,t.next=6,c.json();case 6:return r=t.sent,t.abrupt("return",r);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(){var t=Object(m.a)(l.a.mark((function t(e){var n,c,r,i,a,s,o,u,d,j,p,m,b,f,x,O=arguments;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=O.length>1&&void 0!==O[1]?O[1]:10,c=[],r="",i="https://api.mercadolibre.com/sites/MLA/search?q=".concat(e,"&limit=").concat(n),t.next=6,fetch(i);case 6:return a=t.sent,t.next=9,a.json();case 9:if(s=t.sent,o=s.results,u=s.filters,d=s.available_filters,!((null===u||void 0===u?void 0:u.length)>0)){t.next=19;break}j=u[0],p=j.values[0].path_from_root,c=p,t.next=28;break;case 19:if(!((null===d||void 0===d?void 0:d.length)>0)){t.next=28;break}return m=d.filter((function(t){return"category"===t.id})),(b=m[0].values).sort((function(t,e){return e.results-t.results})),r=b[0].id,t.next=26,h(r);case 26:f=t.sent,c=f.path_from_root;case 28:return x={author:{name:"julio cesar",lastname:"naranjo"},categories:c,items:o.map((function(t){return{picture:t.thumbnail,id:t.id,title:t.title,price:{currency:t.currency_id,amount:t.price,decimals:0},free_shipping:t.free_shipping,condition:t.condition}}))},t.abrupt("return",x);case 30:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=n(2),x=n.n(f),O=(n(47),n(0)),v=function(t){var e,n=t.product,c=Object(s.e)();return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"product-item-app",onClick:function(){c.push("items/".concat(n.id))},children:[Object(O.jsx)("img",{className:"producto-item-img-app",src:n.picture,alt:n.title}),Object(O.jsxs)("div",{className:"product-description-app",children:[Object(O.jsxs)("h3",{children:["$ ",null===(e=n.price)||void 0===e?void 0:e.amount]}),Object(O.jsx)("p",{children:n.title})]})]})})};v.prototype={product:x.a.object.isRequired};n(51);var g=function(t){var e=t.products,n=t.categories;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("p",{className:"product-category",children:n.map((function(t){return t.name})).join(" > ")}),Object(O.jsx)("ol",{className:"product-list animate__animated animate__fadeIn",children:e.map((function(t){return Object(O.jsx)(v,{product:t},t.id)}))})]})},_=function(t){var e=t.location,n=j.a.parse(e.search).search,r=void 0===n?"":n,i=Object(c.useState)({items:[],categories:"",search:"",author:{}}),a=Object(u.a)(i,2),s=a[0],d=a[1],p=s.items,l=s.categories;return Object(c.useEffect)((function(){b(r,4).then((function(t){var e=t.items,n=t.categories,c=t.author;d((function(t){return Object(o.a)(Object(o.a)({},t),{},{items:e,categories:n,author:c})}))}))}),[r]),Object(O.jsx)(O.Fragment,{children:p.length>0&&Object(O.jsx)(g,{products:p,categories:l})})},y=n(26),N=(n(52),function(t){var e=t.history,n=Object(c.useState)(""),r=Object(u.a)(n,2),i=r[0],a=r[1];return Object(O.jsx)("form",{onSubmit:function(t){t.preventDefault(),i.trim().length>2&&e.push("/items?search=".concat(i))},className:"search-form",children:Object(O.jsxs)("div",{className:"input-group",children:[Object(O.jsx)("input",{type:"text",value:i,onChange:function(t){a(t.target.value)}}),Object(O.jsx)(y.a,{})]})})}),w=(n(53),function(t){var e=t.history;return Object(O.jsx)("div",{className:"header-bar",children:Object(O.jsxs)("div",{className:"container-search",children:[Object(O.jsx)("img",{src:"./public/logo-header.png",alt:"logo"}),Object(O.jsx)(N,{history:e})]})})}),k=function(){var t=Object(m.a)(l.a.mark((function t(e){var n,c,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.mercadolibre.com/items/".concat(e,"/description"),t.next=3,fetch(n);case 3:return c=t.sent,t.next=6,c.json();case 6:return r=t.sent,t.abrupt("return",r);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),F=function(){var t=Object(m.a)(l.a.mark((function t(){var e,n,c,r,i,a,s,o,u,d,j,p,m,b,f,x,O,v,g=arguments;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=g.length>0&&void 0!==g[0]?g[0]:""){t.next=3;break}return t.abrupt("return",{});case 3:return n="https://api.mercadolibre.com/items/".concat(e),t.next=6,fetch(n);case 6:return c=t.sent,t.next=9,c.json();case 9:if(r=t.sent,i=r.thumbnail,a=r.id,s=r.title,o=r.price,u=r.currency_id,d=r.condition,j=r.shipping,p=r.sold_quantity,m=r.category_id,a){t.next=21;break}return t.abrupt("return",{});case 21:return t.next=23,k(e);case 23:return b=t.sent,f=b.plain_text,t.next=27,h(m);case 27:return x=t.sent,O=x.path_from_root,v={author:{name:"julio cesar",lastname:"naranjo"},categories:O,item:{picture:i,id:a,title:s,price:{currency:u,amount:o,decimals:0},condition:d,free_shipping:j.free_shipping,sold_quantity:p,description:f}},t.abrupt("return",v);case 31:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),q=(n(54),function(t){var e,n=t.product,c=t.categories;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("p",{className:"product-category",children:c&&c.map((function(t){return t.name})).join(" > ")}),Object(O.jsx)("div",{className:"product-item animate__animated animate__fadeIn",children:Object(O.jsxs)("div",{className:"container-product",children:[Object(O.jsxs)("div",{className:"container-product-item",children:[Object(O.jsx)("img",{className:"producto-item-img",src:n.picture,alt:n.title}),Object(O.jsxs)("div",{className:"product-item-params",children:[Object(O.jsxs)("span",{className:"producto-item-condition",children:["new"===(null===n||void 0===n?void 0:n.condition)?"Nuevo":null===n||void 0===n?void 0:n.condition," - ",null===n||void 0===n?void 0:n.sold_quantity," Vendidos "]}),Object(O.jsx)("p",{className:"producto-item-title",children:n.title}),Object(O.jsxs)("h2",{children:["$ ",null===(e=n.price)||void 0===e?void 0:e.amount]}),Object(O.jsx)("button",{className:"producto-item-button",children:"Comprar"})]})]}),Object(O.jsxs)("div",{className:"product-item-description-app",children:[Object(O.jsx)("h2",{className:"description-title",children:"Descrici\xf3n del producto"}),Object(O.jsx)("p",{className:"description",children:n.description})]})]})})]})}),S=function(){var t=Object(s.f)().id,e=Object(c.useState)({item:{},categories:[],author:{}}),n=Object(u.a)(e,2),r=n[0],i=n[1],a=r.item,d=r.categories;return Object(c.useEffect)((function(){F(t).then((function(t){var e=t.item,n=t.categories;t.author;i((function(t){return Object(o.a)(Object(o.a)({},t),{},{item:e,categories:n})}))}))}),[t]),Object(O.jsx)("div",{children:a&&Object(O.jsx)(q,{product:a,categories:d})})},C=n(6),E=Object(C.a)(),I=function(){return Object(O.jsx)(s.c,{history:E,children:Object(O.jsxs)("div",{children:[Object(O.jsx)(w,{history:E}),Object(O.jsxs)(s.d,{children:[Object(O.jsx)(s.b,{exact:!0,path:"/",component:_}),Object(O.jsx)(s.b,{exact:!0,path:"/items",component:_}),Object(O.jsx)(s.b,{exact:!0,path:"/items/:id",component:S}),Object(O.jsx)(s.a,{to:"/"})]})]})})},A=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(a.a,{children:[Object(O.jsx)("meta",{charSet:"UTF-8"}),Object(O.jsx)("title",{children:"MercadoApp"}),Object(O.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),Object(O.jsx)("meta",{name:"theme-color",content:"#000000"}),Object(O.jsx)("meta",{name:"description",content:"Busca tus productos favoritos"})]}),Object(O.jsx)(I,{})]})};n(55),n(56);i.a.render(Object(O.jsx)(A,{}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.fe8aaa5a.chunk.js.map