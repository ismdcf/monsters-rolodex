(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(1),c=n.n(s),o=n(3),a=n.n(o),i=(n(13),n(4)),h=n(5),l=n(7),u=n(6),d=(n(14),n(15),n(16),function(e){return Object(r.jsxs)("div",{className:"card-container",children:[Object(r.jsx)("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set2"),alt:"monster profile"}),Object(r.jsx)("h2",{children:e.monster.name}),Object(r.jsx)("p",{children:e.monster.email})]})}),j=function(e){return Object(r.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(r.jsx)(d,{monster:e},e.id)}))})},m=(n(17),function(e){var t=e.placeHolder,n=e.handleOnChange;return Object(r.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleOnSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,s=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{children:"Monsters Rolodex"}),Object(r.jsx)(m,{placeHolder:"Search for Monsters",handleOnChange:this.handleOnSearchChange}),Object(r.jsx)(j,{monsters:s})]})}}]),n}(s.Component),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),s(e),c(e),o(e)}))};a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(f,{})}),document.getElementById("root")),b()}],[[18,1,2]]]);
//# sourceMappingURL=main.bbc9abde.chunk.js.map