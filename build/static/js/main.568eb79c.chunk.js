(this.webpackJsonpquiz7=this.webpackJsonpquiz7||[]).push([[0],{63:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(10),s=n.n(i),c=(n(63),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,117)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),o(e),a(e),i(e),s(e)}))}),r=n(16),l=n(17),u=n(27),d=n(23),h=n(21),j=n(111),m=n(108),p=n(112),b=n(110),g=n(114),x=n(105),v=n(109),f=n(113),O=n(107),y=n(47),k=n(106),T=n(4);function w(){return Object(T.jsxs)(y.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(T.jsx)(x.a,{color:"inherit",href:"https://material-ui.com/",children:"Your Website \u7531material-ui\u63d0\u4f9b\u57fa\u790e\u6a21\u7d44"})," ",(new Date).getFullYear(),"."]})}var N=Object(k.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function C(e){var t=N();return Object(T.jsxs)(O.a,{container:!0,component:"main",className:t.root,children:[Object(T.jsx)(m.a,{}),Object(T.jsx)(O.a,{item:!0,xs:!1,sm:4,md:7,className:t.image}),Object(T.jsx)(O.a,{item:!0,xs:12,sm:8,md:5,component:v.a,elevation:6,square:!0,children:Object(T.jsxs)("div",{className:t.paper,children:[Object(T.jsxs)(y.a,{component:"h1",variant:"h5",children:[Object(T.jsx)("p",{style:{color:"goldenrod"},children:"\u9577\u5e9a\u5927\u5b78 CGG"}),Object(T.jsx)("hr",{}),"\u767b\u5165\u5427"]}),Object(T.jsxs)("form",{className:t.form,noValidate:!0,children:[Object(T.jsx)(p.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"\u5e33\u865f",name:"email",autoComplete:"email",autoFocus:!0}),Object(T.jsx)(p.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"\u5bc6\u78bc",type:"password",id:"password",autoComplete:"current-password"}),Object(T.jsx)(b.a,{control:Object(T.jsx)(g.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(T.jsx)(j.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:[t.submit].join(" "),onClick:e.onLogin,children:"Sign In"}),Object(T.jsxs)(O.a,{container:!0,children:[Object(T.jsx)(O.a,{item:!0,xs:!0,children:Object(T.jsx)(x.a,{href:"#",variant:"body2",children:"Forgot password?"})}),Object(T.jsx)(O.a,{item:!0,children:Object(T.jsx)(x.a,{href:"#",variant:"body2",children:"Don't have an account? Sign Up"})})]}),Object(T.jsx)(f.a,{mt:5,children:Object(T.jsx)(w,{})})]})]})})]})}var L=n(46),S=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).state={newText:e.todo.text,editing:!1},o}return Object(l.a)(n,[{key:"deleteTodo",value:function(){this.props.remove(this.props.todo.id)}},{key:"checkTodoToggle",value:function(){this.props.checkToggle(this.props.todo.id)}},{key:"showEditForm",value:function(){var e=this.state.editing;this.setState({newText:this.props.todo.text,editing:!e})}},{key:"getNewText",value:function(e){var t=e.target.value;this.setState({newText:t})}},{key:"saveEditedValue",value:function(){var e=this.state.newText;this.props.saveEditedValue(this.props.todo.id,e),this.setState({newText:this.props.todo.text,editing:!1})}},{key:"render",value:function(){var e=this,t=this.state.editing,n=this.props.todo;return Object(T.jsxs)("li",{className:"list-group-item list-row "+(n.completed?"done":""),children:[Object(T.jsx)("div",{className:"btn-circle checkbox",onClick:function(){return e.checkTodoToggle()},children:"\u2713"}),Object(T.jsxs)("div",{className:"list-text__container",onDoubleClick:function(){return e.showEditForm()},children:[!t&&Object(T.jsx)("span",{className:"list-text",children:n.text}),t&&Object(T.jsxs)("div",{className:"input-group",children:[Object(T.jsx)("input",{type:"text",className:"form-control",placeholder:n.text,value:this.state.newText,onChange:function(t){return e.getNewText(t)}}),Object(T.jsxs)("div",{className:"input-group-append",children:[Object(T.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:function(){return e.showEditForm()},children:"\u53d6\u6d88"}),Object(T.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:function(){return e.saveEditedValue()},children:"\u5b8c\u6210\u7de8\u8f2f"})]})]})]}),Object(T.jsx)("div",{className:"btn-circle delete",onClick:function(){return e.deleteTodo()},children:"\u2715"})]})}}]),n}(a.a.Component),I=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).state={todos:[{id:1,text:"tip\uff1a\u9ede\u6587\u5b57\u5169\u4e0b\u53ef\u4ee5\u7de8\u8f2f",completed:!1},{id:2,text:"\u5df2\u5b8c\u6210 \u9846\u9846",completed:!0},{id:3,text:"(*\xb4\u2200`)~\u2665 \u30ac\u30c3\u30ad\u30fc",completed:!1}],newId:4,newText:""},o}return Object(l.a)(n,[{key:"getNewValue",value:function(e){var t=e.target.value;this.setState({newText:t})}},{key:"addTodo",value:function(e){var t=this.state,n=t.todos,o=t.newText,a=t.newId;o?this.setState({todos:[].concat(Object(L.a)(n),[{id:a,text:o,completed:!1}]),newId:a+1,newText:""}):e.preventDefault()}},{key:"deleteTodo",value:function(e){var t=this.state.todos.filter((function(t){return t.id!==e}));this.setState({todos:t})}},{key:"checkTodoToggle",value:function(e){var t=this.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}));this.setState({todos:t})}},{key:"saveEditedValue",value:function(e,t){var n=this.state.todos.map((function(n){return n.id===e&&(n.text=t),n}));this.setState({todos:n})}},{key:"render",value:function(){var e=this,t=this.state.todos;return Object(T.jsxs)("div",{className:"container",children:[Object(T.jsxs)("header",{className:"header__container",children:[Object(T.jsx)("h1",{className:"header__site-title",children:"Todo list"}),Object(T.jsx)("p",{className:"header__site-description",children:"\u99ac\u4e0a \u8a18\u4e0b \u60f3\u8981\u505a\u7684\u4efb\u4f55\u4e8b"})]}),Object(T.jsxs)("div",{className:"input-group mb-3",children:[Object(T.jsx)("input",{type:"text",className:"form-control",id:"input-add",placeholder:"I'm gonna do...",value:this.state.newText,onChange:function(t){return e.getNewValue(t)}}),Object(T.jsx)("div",{className:"input-group-append",children:Object(T.jsx)("button",{className:"btn btn-outline-secondary",onClick:function(t){return e.addTodo(t)},children:"add"})})]}),Object(T.jsx)("ul",{className:"list-group list-group-flush",children:t.map((function(t){return Object(T.jsx)(S,{todo:t,remove:function(t){return e.deleteTodo(t)},checkToggle:function(t){return e.checkTodoToggle(t)},saveEditedValue:function(t,n){return e.saveEditedValue(t,n)}},t.id)}))})]})}}]),n}(a.a.Component),E=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).setRenderItem=o.setRenderItem.bind(Object(u.a)(o)),o}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"setRenderItem",value:function(){return this.props.LoginStatus?Object(T.jsx)(I,{}):Object(T.jsx)(C,{onLogin:this.props.onLogin})}},{key:"render",value:function(){return Object(T.jsx)("div",{children:this.setRenderItem()})}}]),n}(a.a.Component),F=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).state={login:!1},o.onLogin=o.onLogin.bind(Object(u.a)(o)),o.onLogout=o.onLogout.bind(Object(u.a)(o)),o}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"onLogin",value:function(){this.setState({login:!0})}},{key:"onLogout",value:function(){this.setState({login:!1})}},{key:"getLoginStatus",value:function(){return this.state.login}},{key:"render",value:function(){return Object(T.jsx)(E,{onLogin:this.onLogin,onLogout:this.onLogout,LoginStatus:this.getLoginStatus()})}}]),n}(a.a.Component);s.a.render(Object(T.jsx)(F,{}),document.getElementById("root")),c()}},[[68,1,2]]]);
//# sourceMappingURL=main.568eb79c.chunk.js.map