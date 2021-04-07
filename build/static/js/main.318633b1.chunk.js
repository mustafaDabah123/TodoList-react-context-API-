(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{21:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var c,i,r,a,o,s,d=n(0),l=n.n(d),u=n(12),j=n.n(u),b=(n(21),n(7)),f=n(16),p=n(5),x=function(e,t){switch(t.type){case"ADD_ITEM":return Object(p.a)(Object(p.a)({},e),{},{items:[t.payload].concat(Object(f.a)(e.items))});case"DELETE_ITEM":return Object(p.a)(Object(p.a)({},e),{},{items:e.items.filter((function(e){return e.id!==t.payload}))});default:return e}},m=n(1),O={items:JSON.parse(localStorage.getItem("items"))||[]},h=Object(d.createContext)(O),g=function(e){var t=e.children,n=Object(d.useReducer)(x,O),c=Object(b.a)(n,2),i=c[0],r=c[1];return Object(d.useEffect)((function(){localStorage.setItem("items",JSON.stringify(i.items))})),Object(m.jsx)(h.Provider,{value:{addItems:function(e){r({type:"ADD_ITEM",payload:e})},items:i.items,deleteItem:function(e){r({type:"DELETE_ITEM",payload:e})}},children:t})},y=n(2),v=n(3),E=v.a.div(c||(c=Object(y.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n"]))),I=v.a.h1(i||(i=Object(y.a)(["\n    color: #fff;\n    font-size: 60px;\n    margin-bottom: 30px;\n    text-align: center;\n"]))),w=v.a.form(r||(r=Object(y.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n"]))),D=v.a.ul(a||(a=Object(y.a)(["\n    padding:0px 20px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n"]))),M=v.a.li(o||(o=Object(y.a)(["\n    padding: 20px;\n    font-size: 20px;\n    text-transform: capitalize; \n    background-color: #fff;\n    border-radius: 20px;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n"]))),S=v.a.button(s||(s=Object(y.a)(["\n    padding: 5px 20px;\n    background: rgb(122,197,245);\n    background: linear-gradient(90deg, rgba(122,197,245,1) 0%, rgba(0,65,255,1) 100%);    \n    color: aliceblue;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n"])));var T=function(){var e=Object(d.useState)(""),t=Object(b.a)(e,2),n=t[0],c=t[1],i=Object(d.useContext)(h),r=i.addItems,a=i.items;return Object(m.jsx)("div",{className:"form-container",children:Object(m.jsxs)(w,{onSubmit:function(e){e.preventDefault();var t={id:Math.floor(1e8*Math.random()),text:n};r(t),console.log(a),c("")},children:[Object(m.jsx)("input",{type:"text",placeholder:"what needs to be done ? ",onChange:function(e){return c(e.target.value)},value:n,required:!0}),Object(m.jsx)("input",{type:"submit",value:"add"})]})})};var k=function(){var e=Object(d.useContext)(h),t=e.items,n=e.deleteItem;return Object(m.jsx)("div",{className:"list-items",children:t.map((function(e){return Object(m.jsx)(D,{children:Object(m.jsxs)(M,{children:[e.text," ",Object(m.jsx)(S,{onClick:function(){return n(e.id)},children:"delete"})]})},e.id)}))})};var C=function(){return Object(m.jsx)(g,{children:Object(m.jsxs)(E,{children:[Object(m.jsx)(I,{children:"To-do List "}),Object(m.jsx)(T,{}),Object(m.jsx)(k,{})]})})};j.a.render(Object(m.jsx)(l.a.StrictMode,{children:Object(m.jsx)(C,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.318633b1.chunk.js.map