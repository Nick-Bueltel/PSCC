(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{186:function(e,t,a){e.exports=a(325)},191:function(e,t,a){},192:function(e,t,a){},325:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(43),c=a.n(r),o=(a(191),a(192),a(26)),i=a(27),u=a(30),s=a(28),m=a(31),h=a(62),p=a(336),E=a(39),d=a(55),b=a.n(d),v=a(80),f=a(81),g=a(334),C=a(333),y=a(335),j="/api/races/",O={index:function(){return fetch(j,{method:"GET",headers:{}}).then(function(e){return e.json()})},create:function(e){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return fetch(j,t).then(function(e){return e.json()})}};n.Component;var w="/api/classes/",x={index:function(){return fetch(w,{method:"GET",headers:{}}).then(function(e){return e.json()})},create:function(e){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return fetch(w,t).then(function(e){return e.json()})}};var S=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={playerClassName:"",ablRecharge1:"",ablRecharge2:"",startingWealth:"",statBonus1:"",statBonus1Amount:null,statBonus2:"",statBonus2Amount:null,proficiency1:!1,subClass1:{},subClass2:{},abilities:{},purchaseRQ:!1},a.handleChange=function(e){a.setState(Object(f.a)({},e.target.name,e.target.value))},a.handleSubmit=function(){var e=Object(v.a)(b.a.mark(function e(t){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,x.create(a.state);case 4:a.props.history.push("/"),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:case"end":return e.stop()}},e,null,[[1,7]])}));return function(t){return e.apply(this,arguments)}}(),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(g.a,{onSubmit:this.handleSubmit},l.a.createElement(g.a.Field,null,l.a.createElement("label",null,"Class Name "),l.a.createElement("input",{type:"Text",name:"playerClassName",onChange:this.handleChange})),l.a.createElement(g.a.Field,null,l.a.createElement("label",null,"Ability Recharge"),l.a.createElement("select",{name:"ablRecharge1",onChange:this.handleChange},l.a.createElement("option",{value:"str"},"str"),l.a.createElement("option",{value:"dex"},"dex"),l.a.createElement("option",{value:"con"},"con"),l.a.createElement("option",{value:"int"},"int"),l.a.createElement("option",{value:"wis"},"wis"),l.a.createElement("option",{value:"cha"},"cha")),"+",l.a.createElement("select",{name:"ablRecharge2",onChange:this.handleChange},l.a.createElement("option",{value:"str"},"str"),l.a.createElement("option",{value:"dex"},"dex"),l.a.createElement("option",{value:"con"},"con"),l.a.createElement("option",{value:"int"},"int"),l.a.createElement("option",{value:"wis"},"wis"),l.a.createElement("option",{value:"cha"},"cha"))),l.a.createElement(g.a.Field,null,l.a.createElement("label",null,"Starting Wealth"),l.a.createElement("input",{type:"Text",name:"startingWealth",onChange:this.handleChange})),l.a.createElement(g.a.Field,null,l.a.createElement("label",null," Stat Bonus 1"),l.a.createElement("select",{name:"statBonus1",onChange:this.handleChange},l.a.createElement("option",{value:"str"},"str"),l.a.createElement("option",{value:"dex"},"dex"),l.a.createElement("option",{value:"con"},"con"),l.a.createElement("option",{value:"int"},"int"),l.a.createElement("option",{value:"wis"},"wis"),l.a.createElement("option",{value:"cha"},"cha"))),l.a.createElement(g.a.Field,null,l.a.createElement("label",null," Stats Bonus 1 Amount"),l.a.createElement("input",{name:"statBonus1Amount",type:"Number",onChange:this.handleChange})),l.a.createElement(g.a.Field,null,l.a.createElement("label",null," Stat Bonus 2"),l.a.createElement("select",{name:"statBonus2",onChange:this.handleChange},l.a.createElement("option",{value:"str"},"str"),l.a.createElement("option",{value:"dex"},"dex"),l.a.createElement("option",{value:"con"},"con"),l.a.createElement("option",{value:"int"},"int"),l.a.createElement("option",{value:"wis"},"wis"),l.a.createElement("option",{value:"cha"},"cha"))),l.a.createElement(g.a.Field,null,l.a.createElement("label",null," Stats Bonus 2 Amount"),l.a.createElement("input",{name:"statBonus2Amount",type:"Number",onChange:this.handleChange})),l.a.createElement(g.a.Field,null,l.a.createElement("label",null,"Proficiencies "),l.a.createElement("label",null,"test"),l.a.createElement(C.a,{name:"proficiency1",onChange:this.handleChange})),l.a.createElement(g.a.Field,null,l.a.createElement("label",null,"Abilities")),l.a.createElement(g.a.Field,null,l.a.createElement("label",null,"Sub Class 1 Name"),l.a.createElement("input",{name:"subClass1",type:"Text",onChange:this.handleChange})),l.a.createElement(g.a.Field,null,l.a.createElement("label",null," Sub Class  1 Description "),l.a.createElement("input",{name:"subClass1.subDescription",type:"Text",onChange:this.handleChange})),l.a.createElement(g.a.Field,null,l.a.createElement("label",null," Sub Class  1 Ability "),l.a.createElement("input",{name:"subClass1.subDescription",type:"Text",onChange:this.handleChange})),l.a.createElement(y.a,{type:"submit"}," Submit ")))}}]),t}(n.Component),F=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Class Form"),l.a.createElement("div",{className:"classForm"},l.a.createElement(S,null)))}}]),t}(n.Component),B=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"test"),l.a.createElement("p",null,"lorem text yo"))}}]),t}(n.Component),N=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(h.a,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"NavBar"},l.a.createElement(p.a,null,l.a.createElement(p.a.Item,null,l.a.createElement(h.b,{to:"/"},"Home")),l.a.createElement(p.a.Item,null,l.a.createElement(h.b,{to:"/admin"},"Admin")))),l.a.createElement("div",{className:"content"},l.a.createElement(E.a,{exact:!0,path:"/",component:B}),l.a.createElement(E.a,{exact:!0,path:"/admin",component:F}))))}}]),t}(n.Component);var A=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("link",{rel:"stylesheet",href:"//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"}),l.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[186,1,2]]]);
//# sourceMappingURL=main.ab428016.chunk.js.map