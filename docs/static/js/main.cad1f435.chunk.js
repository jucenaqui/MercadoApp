(this.webpackJsonpventa=this.webpackJsonpventa||[]).push([[0],{47:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(20),i=n.n(r),a=n(21),s=n(58),o=n(10),u=n(9),d=n(24),p=n.n(d),j=n(4),l=n.n(j),m=n(8),b=function(){var e=Object(m.a)(l.a.mark((function e(t){var n,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.mercadolibre.com/categories/".concat(t),e.next=3,fetch(n);case 3:return c=e.sent,e.next=6,c.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(m.a)(l.a.mark((function e(t){var n,c,r,i,a,s,o,u,d,p,j,m,h,f,x,O=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=O.length>1&&void 0!==O[1]?O[1]:10,c=[],r="",i="https://api.mercadolibre.com/sites/MLA/search?q=".concat(t,"&limit=").concat(n),e.next=6,fetch(i);case 6:return a=e.sent,e.next=9,a.json();case 9:if(s=e.sent,o=s.results,u=s.filters,d=s.available_filters,!((null===u||void 0===u?void 0:u.length)>0)){e.next=19;break}p=u[0],j=p.values[0].path_from_root,c=j,e.next=28;break;case 19:if(!((null===d||void 0===d?void 0:d.length)>0)){e.next=28;break}return m=d.filter((function(e){return"category"===e.id})),(h=m[0].values).sort((function(e,t){return t.results-e.results})),r=h[0].id,e.next=26,b(r);case 26:f=e.sent,c=f.path_from_root;case 28:return x={author:{name:"julio cesar",lastname:"naranjo"},categories:c,items:o.map((function(e){return{picture:e.thumbnail,id:e.id,title:e.title,price:{currency:e.currency_id,amount:e.price,decimals:0},free_shipping:e.free_shipping,condition:e.condition}}))},e.abrupt("return",x);case 30:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=n(2),x=n.n(f),O=(n(47),n(0)),v=function(e){var t,n=e.product,c=Object(s.e)();return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"product-item-app",onClick:function(){c.push("items/".concat(n.id))},children:[Object(O.jsx)("img",{className:"producto-item-img-app",src:n.picture,alt:n.title}),Object(O.jsxs)("div",{className:"product-description-app",children:[Object(O.jsxs)("h3",{children:["$ ",null===(t=n.price)||void 0===t?void 0:t.amount]}),Object(O.jsx)("p",{children:n.title})]})]})})};v.prototype={product:x.a.object.isRequired};n(51);var g=function(e){var t=e.products,n=e.categories;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("p",{className:"product-category",children:n.map((function(e){return e.name})).join(" > ")}),Object(O.jsx)("ol",{className:"product-list animate__animated animate__fadeIn",children:t.map((function(e){return Object(O.jsx)(v,{product:e},e.id)}))})]})},_=function(e){var t=e.location,n=p.a.parse(t.search).search,r=void 0===n?"":n,i=Object(c.useState)({items:[],categories:"",search:"",author:{}}),a=Object(u.a)(i,2),s=a[0],d=a[1],j=s.items,l=s.categories;return Object(c.useEffect)((function(){h(r,4).then((function(e){var t=e.items,n=e.categories,c=e.author;d((function(e){return Object(o.a)(Object(o.a)({},e),{},{items:t,categories:n,author:c})}))}))}),[r]),Object(O.jsx)(O.Fragment,{children:j.length>0&&Object(O.jsx)(g,{products:j,categories:l})})},y=n(26),N=(n(52),function(e){var t=e.history,n=Object(c.useState)(""),r=Object(u.a)(n,2),i=r[0],a=r[1];Object(c.useEffect)((function(){t.push("/items?search=".concat(i))}),[t,i]);return Object(O.jsx)("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&t.push("/items?search=".concat(i))},className:"search-form",children:Object(O.jsxs)("div",{className:"input-group",children:[Object(O.jsx)("input",{type:"text",value:i,onChange:function(e){a(e.target.value)}}),Object(O.jsx)(y.a,{})]})})}),w=(n(53),function(e){var t=e.history;return Object(O.jsx)("div",{className:"header-bar",children:Object(O.jsxs)("div",{className:"container-search",children:[Object(O.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/mercadolibreprueba.appspot.com/o/logo-header.png?alt=media&token=05b1170a-abb5-4159-ad6b-ae3f130392c5",alt:"logo"}),Object(O.jsx)(N,{history:t})]})})}),k=function(){var e=Object(m.a)(l.a.mark((function e(t){var n,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.mercadolibre.com/items/".concat(t,"/description"),e.next=3,fetch(n);case 3:return c=e.sent,e.next=6,c.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(m.a)(l.a.mark((function e(){var t,n,c,r,i,a,s,o,u,d,p,j,m,h,f,x,O,v,g=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=g.length>0&&void 0!==g[0]?g[0]:""){e.next=3;break}return e.abrupt("return",{});case 3:return n="https://api.mercadolibre.com/items/".concat(t),e.next=6,fetch(n);case 6:return c=e.sent,e.next=9,c.json();case 9:if(r=e.sent,i=r.thumbnail,a=r.id,s=r.title,o=r.price,u=r.currency_id,d=r.condition,p=r.shipping,j=r.sold_quantity,m=r.category_id,a){e.next=21;break}return e.abrupt("return",{});case 21:return e.next=23,k(t);case 23:return h=e.sent,f=h.plain_text,e.next=27,b(m);case 27:return x=e.sent,O=x.path_from_root,v={author:{name:"julio cesar",lastname:"naranjo"},categories:O,item:{picture:i,id:a,title:s,price:{currency:u,amount:o,decimals:0},condition:d,free_shipping:p.free_shipping,sold_quantity:j,description:f}},e.abrupt("return",v);case 31:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=(n(54),function(e){var t,n=e.product,c=e.categories;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("p",{className:"product-category",children:c&&c.map((function(e){return e.name})).join(" > ")}),Object(O.jsx)("div",{className:"product-item animate__animated animate__fadeIn",children:Object(O.jsxs)("div",{className:"container-product",children:[Object(O.jsxs)("div",{className:"container-product-item",children:[Object(O.jsx)("img",{className:"producto-item-img",src:n.picture,alt:n.title}),Object(O.jsxs)("div",{className:"product-item-params",children:[Object(O.jsxs)("span",{className:"producto-item-condition",children:["new"===(null===n||void 0===n?void 0:n.condition)?"Nuevo":null===n||void 0===n?void 0:n.condition," - ",null===n||void 0===n?void 0:n.sold_quantity," Vendidos "]}),Object(O.jsx)("p",{className:"producto-item-title",children:n.title}),Object(O.jsxs)("h2",{children:["$ ",null===(t=n.price)||void 0===t?void 0:t.amount]}),Object(O.jsx)("button",{className:"producto-item-button",children:"Comprar"})]})]}),Object(O.jsxs)("div",{className:"product-item-description-app",children:[Object(O.jsx)("h2",{className:"description-title",children:"Descrici\xf3n del producto"}),Object(O.jsx)("p",{className:"description",children:n.description})]})]})})]})}),S=function(){var e=Object(s.f)().id,t=Object(c.useState)({item:{},categories:[],author:{}}),n=Object(u.a)(t,2),r=n[0],i=n[1],a=r.item,d=r.categories;return Object(c.useEffect)((function(){F(e).then((function(e){var t=e.item,n=e.categories;e.author;i((function(e){return Object(o.a)(Object(o.a)({},e),{},{item:t,categories:n})}))}))}),[e]),Object(O.jsx)("div",{children:a&&Object(O.jsx)(q,{product:a,categories:d})})},E=n(6),C=Object(E.a)(),I=function(){return Object(O.jsx)(s.c,{history:C,children:Object(O.jsxs)("div",{children:[Object(O.jsx)(w,{history:C}),Object(O.jsxs)(s.d,{children:[Object(O.jsx)(s.b,{exact:!0,path:"/",component:_}),Object(O.jsx)(s.b,{exact:!0,path:"/items",component:_}),Object(O.jsx)(s.b,{exact:!0,path:"/items/:id",component:S}),Object(O.jsx)(s.a,{to:"/"})]})]})})},A=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(a.a,{children:[Object(O.jsx)("meta",{charSet:"UTF-8"}),Object(O.jsx)("title",{children:"MercadoApp"}),Object(O.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),Object(O.jsx)("meta",{name:"theme-color",content:"#000000"}),Object(O.jsx)("meta",{name:"description",content:"Busca tus productos favoritos"})]}),Object(O.jsx)(I,{})]})};n(55),n(56);i.a.render(Object(O.jsx)(A,{}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.cad1f435.chunk.js.map