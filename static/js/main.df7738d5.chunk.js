(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{16:function(e,t,n){e.exports=n(29)},26:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(2),c=n.n(o),s=n(5),i=n(1),l=n(14),u=n(15),h=(n(26),n(3)),m=n(4),d=n(7),b=n(6),p=function(e){var t=e.id,n=e.name,r=e.email;return a.a.createElement("div",{className:"tc bg-light-green dib pa3 ma2 bw2 shadow-5 grow"},a.a.createElement("img",{alt:"robot",src:"https://robohash.org/".concat(t,"?200x200")}),a.a.createElement("div",null,a.a.createElement("h2",null,n),a.a.createElement("p",null,r)))},E=function(e){var t=e.robots;return a.a.createElement("div",null,t.map((function(e,n){return a.a.createElement(p,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})})))},g=function(e){var t=e.searchChange;return a.a.createElement("div",null,a.a.createElement("input",{className:"pa3 ma3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},f=function(e){var t=e.switchSource,n=e.label;return a.a.createElement("div",null,a.a.createElement("button",{className:"f6 link dim pv2 mb2 dib w5 br4 white bg-near-black",type:"button",name:"switch source",onClick:t},"Switch robots source to ",a.a.createElement("span",{class:"b"},"API"===n?"LOCAL":"API")))},S=function(e){return a.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"500px"}},e.children)},O=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(m.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Ooops. That's not good"):this.props.children}}]),n}(r.Component),v=(n(27),[{id:1,name:"Martie",username:"bear",email:"bear@gmail.com"},{id:2,name:"Rachie",username:"cutie",email:"cutie@gmail.com"},{id:3,name:"Owen",username:"leonard",email:"leonard@gmail.com"},{id:4,name:"Clazza",username:"clairebear",email:"clairebear@gmail.com"}]),R=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots(this.props.source)}},{key:"componentDidUpdate",value:function(e){this.props.source!==e.source&&this.props.onRequestRobots(this.props.source)}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.source,r=e.onSearchChange,o=e.onSwitchSource,c=e.robots,s=e.isPending,i=c.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return s?a.a.createElement("h1",null,"Loading"):a.a.createElement("div",{className:"tc"},a.a.createElement("h1",{className:"f1"},"RoboFriends  -  ",n),a.a.createElement(g,{searchChange:r}),a.a.createElement(f,{switchSource:o,label:n}),a.a.createElement(S,null,a.a.createElement(O,null,a.a.createElement(E,{robots:i}))))}}]),n}(r.Component),C=Object(s.b)((function(e){return{searchField:e.searchRobots.searchField,source:e.searchRobots.source,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onSwitchSource:function(){return e({type:"SWITCH_SOURCE"})},onRequestRobots:function(t){return e(function(e){return function(t){t({type:"REQUEST_ROBOTS_PENDING"}),"API"===e?fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return t({type:"REQUEST_ROBOTS_SUCCESS",payload:e})})).catch((function(e){return t({type:"REQUEST_ROBOTS_FAILED",payload:e})})):"LOCAL"===e&&t({type:"REQUEST_ROBOTS_SUCCESS",payload:v})}}(t))}}}))(R);n(28),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y={searchField:"",source:"API"},w={isPending:!1,robots:[],error:""},j=Object(l.createLogger)(),_=Object(i.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});case"SWITCH_SOURCE":var n="API"===e.source?"LOCAL":"API";return Object.assign({},e,{source:n});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),T=Object(i.d)(_,Object(i.a)(u.a,j));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(s.a,{store:T},a.a.createElement(C,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.df7738d5.chunk.js.map