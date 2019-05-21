(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,n){e.exports=n(39)},29:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21);n(29),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(12),o=n(10),l=n(2),u=n(3),m=n(5),s=n(4),p=n(6),h=n(11),v=n.n(h),f=n(14);var b=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={items:[]},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"fetchItems",value:function(){var e=Object(f.a)(v.a.mark(function e(){var t,n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.props["data-url"]);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({items:n});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.fetchItems()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"items-container"},this.state.items.map(function(e){return r.a.createElement("div",{key:e.id,className:"items"},r.a.createElement("img",{src:e.image}),r.a.createElement("p",null,e.name),r.a.createElement("p",null,(e.price/100).toLocaleString("en-US",{style:"currency",currency:"USD"})))}))))}}]),t}(a.Component),y=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{"data-url":"../store-items.json"}))}}]),t}(a.Component),j=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"cartObject-container"},r.a.createElement("img",{src:"../img/cart.png"}))}}]),t}(a.Component),E=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"menu-container"},r.a.createElement(i.b,{to:"/"},r.a.createElement("h1",null,"THE CLOSET")),r.a.createElement(i.b,{to:"/admin"},r.a.createElement("h3",null,"ADMIN")),r.a.createElement(i.b,{to:"/cart"},r.a.createElement(j,null))))}}]),t}(a.Component),d=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={inventory:[]},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"fetchInventory",value:function(){var e=Object(f.a)(v.a.mark(function e(){var t,n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.props["data-url"]);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({inventory:n});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.fetchInventory()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"inventory-container"},this.state.inventory.map(function(e){return r.a.createElement("form",{key:e.id,className:"indiv-inventory-form"},r.a.createElement("input",{type:"text",name:"inventoryItemID",value:e.id}),r.a.createElement("img",{src:e.image}),r.a.createElement("input",{type:"text",name:"inventoryItemImage",value:e.image}),r.a.createElement("input",{type:"text",name:"inventoryItemName",value:e.name}),r.a.createElement("input",{type:"text",name:"inventoryItemPrice",value:e.price}))})))}}]),t}(a.Component),O=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"admin-container"},r.a.createElement(d,{"data-url":"../store-items.json"}))}}]),t}(a.Component),g=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Not Found"))},k=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"cartPage-container"},"cart")}}]),t}(a.Component);Object(c.render)(r.a.createElement(i.a,{basename:"/the-closet"},r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null)),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:y}),r.a.createElement(o.a,{path:"/admin",component:O}),r.a.createElement(o.a,{path:"/cart",component:k}),r.a.createElement(o.a,{component:g}))),document.getElementById("app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.8bd6d9cc.chunk.js.map