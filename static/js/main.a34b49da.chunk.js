(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(4),c=n.n(o),s=n(1),l=n.n(s),i=n(2),u=n(5),d=n(6),f=n(8),m=n(7),g=(n(15),function(e){var t=e.title,n=e.onClick;return a.a.createElement("button",{type:"button",onClick:n},t)}),p=function(e){var t=e.getAll,n=e.get5First,r=e.getRed;return a.a.createElement(a.a.Fragment,null,a.a.createElement(g,{title:"Load All",onClick:t}),a.a.createElement(g,{title:"Load first 5",onClick:n}),a.a.createElement(g,{title:"Load only red",onClick:r}))},h=function(e){var t=e.goods;return a.a.createElement("div",null,a.a.createElement("ul",null,t.map((function(e){return a.a.createElement("li",{key:e.id,style:{color:"".concat(e.color)}},e.name)}))))};function v(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(e){return e.json()}))}var E=function(){return v().then((function(e){return e.sort((function(e,t){return e.name.localeCompare(t.name)})).slice(0,5)}))},y=function(){return v().then((function(e){return e.filter((function(e){return"red"===e.color}))}))},b=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={goods:[]},e.setAllGoods=Object(i.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:n=t.sent,e.setState({goods:n});case 4:case"end":return t.stop()}}),t)}))),e.setFirst5=Object(i.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E();case 2:n=t.sent,e.setState({goods:n});case 4:case"end":return t.stop()}}),t)}))),e.setRed=Object(i.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y();case 2:n=t.sent,e.setState({goods:n});case 4:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(n,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Dynamic list of Goods"),a.a.createElement(p,{getAll:this.setAllGoods,get5First:this.setFirst5,getRed:this.setRed}),this.state.goods.length>0?a.a.createElement(h,{goods:this.state.goods}):a.a.createElement("p",null,"NOT LOAD"))}}]),n}(a.a.PureComponent);c.a.render(a.a.createElement(b,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.a34b49da.chunk.js.map