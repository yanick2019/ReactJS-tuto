(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{54:function(e,t,a){e.exports=a(97)},95:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"increment",function(){return q}),a.d(n,"decrement",function(){return W}),a.d(n,"setText",function(){return F});var r=a(0),s=a.n(r),l=a(16),c=a.n(l),i=a(9);var o=function(){return s.a.createElement("div",null,s.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},s.a.createElement("div",{className:"container"},s.a.createElement(i.b,{className:"navbar-brand",to:"#"},s.a.createElement("b",null,"ReactJS App")),s.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},s.a.createElement("span",{className:"navbar-toggler-icon"})),s.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},s.a.createElement("ul",{className:"navbar-nav mr-auto"},s.a.createElement("li",{className:"nav-item "},s.a.createElement(i.b,{className:"nav-link",to:"/"},"Home ",s.a.createElement("span",{className:"sr-only"},"(current)"))),s.a.createElement("li",{className:"nav-item  "},s.a.createElement(i.b,{className:"nav-link",to:"Messageb"},"Message Board",s.a.createElement("span",{className:"sr-only"},"(current)"))),s.a.createElement("li",{className:"nav-item  "},s.a.createElement(i.b,{className:"nav-link",to:"about"},"About ",s.a.createElement("span",{className:"sr-only"},"(current)"))),s.a.createElement("li",{className:"nav-item  "},s.a.createElement(i.b,{className:"nav-link",to:"rt"},"Redux_totu ",s.a.createElement("span",{className:"sr-only"},"(current)"))),s.a.createElement("li",{className:"nav-item  "},s.a.createElement(i.b,{className:"nav-link",to:"contact"},"Contact ",s.a.createElement("span",{className:"sr-only"},"(current)"))))))))};var m=function(){return s.a.createElement("div",{className:"container-fluide jumbotron mt-4",style:{backgroundColor:"#333",color:"#fff"}},"this is foot ",s.a.createElement("br",null),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolor blanditiis deleniti soluta qui aspernatur, pariatur, quos facilis doloremque cumque, nemo quas ipsa officiis nesciunt magnam fugit aut ipsam repudiandae.")},u=a(3),d=a(4),p=a(6),h=a(5),v=a(14),g=a(7),b=a(49),E=a.n(b),f=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={lastClicked:"",clickCount:0,showB4:!0},a.handleClickIndiv=a.handleClick.bind(Object(v.a)(a)),a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"handleClick",value:function(e){e.preventDefault(),this.setState(function(e){return{lastClicked:(new Date).toLocaleTimeString(),clickCount:e.clickCount+1,showB4:!e.showB4}})}},{key:"render",value:function(){return s.a.createElement("div",{onClick:this.handleClickIndiv,style:{margin:"10px",border:"1px solid #ccc "}},s.a.createElement("h3",null,"   Block ",this.props.title," "),s.a.createElement("p",null," Block ",this.props.content," "),s.a.createElement("p",null,"last  clicked: ",this.state.lastClicked),s.a.createElement("p",null,"clickCount: ",this.state.clickCount),s.a.createElement("p",null,"showB4: ",this.state.showB4))}}]),t}(r.Component),k=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=s.a.createElement("div",{style:{margin:"10px",border:"1px solid #ccc "}},s.a.createElement("h3",null,"   Block ",this.props.title," "),s.a.createElement("p",null," Block ",this.props.content," "));return s.a.createElement("div",null,this.props.show?e:s.a.createElement("p",null," nothing "))}}]),t}(r.Component);r.Component;function y(e){return s.a.createElement("div",{style:{margin:10,border:"2px solid #ccc ",padding:20}},s.a.createElement("h3",null,"   Block ",e.title," "),s.a.createElement("p",null," Block ",e.content," Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus odit eos, voluptate dolores necessitatibus perferendis eius ullam culpa aut repellendus iure accusamus expedita! Vero ex, enim nihil inventore rem sed."))}function N(e){var t=e.post;return s.a.createElement("div",{style:{margin:"10px",border:"2px solid #ccc ",padding:""}},s.a.createElement("h3",null,"   Block ",t.title," "),s.a.createElement("p",null," Block ",t.content," Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus odit eos, voluptate dolores necessitatibus perferendis eius ullam culpa aut repellendus iure accusamus expedita! Vero ex, enim nihil inventore rem sed."))}var O=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"card mt-2",style:{width:"50rem"}},s.a.createElement("div",{className:"card-body"},s.a.createElement("h5",{className:"card-title"},"Card title   ",this.props.post.title," "),s.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"Author: ",this.props.post.author),s.a.createElement("p",{className:"card-text"},s.a.createElement("img",{style:{width:"50%"},src:this.props.post.urlToImage,alt:this.props.post.title})," ",s.a.createElement("br",null)," ",this.props.post.description),s.a.createElement("p",{className:"card-text"},this.props.post.content),s.a.createElement("p",{className:"card-text"},"Source :   ",this.props.post.source.name," "),s.a.createElement(i.b,{to:"contact",className:"btn btn-primary"},"contact"),"  \xa0",s.a.createElement(i.c,{to:"product",className:"card-link btn btn-primary "},"product")," \xa0 ",s.a.createElement("br",null),s.a.createElement("a",{href:this.props.post.url,className:"  text-primary",target:"_blank"},this.props.post.url),"  \xa0"))}}]),t}(r.Component),S=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={articles:[],isLoading:!1,hasError:!1,fetchError:""},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),E.a.get("http://php2010.free.fr/api.php?apikey=getApiKey").then(function(e){if(200==e.status)return e.data}).then(function(t){e.setState({articles:t.articles,isLoading:!1})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e,t=this.props.match.params.page?this.props.match.params.page:1,a=Math.ceil(this.state.articles.length/3);return t>a&&(t=a),this.state.articles.length&&(e=this.state.isLoading?s.a.createElement("h4",null,"the page is loading , please   waiting"):this.state.articles.map(function(e,t){if(t<3)return s.a.createElement(O,{key:t,post:e})})),this.state.hasError&&(e=s.a.createElement("h4",null,"Oops , something goes wrong : ",this.state.fetchError," ")),s.a.createElement("div",null,s.a.createElement("h1",null," this is body of Home page  "),s.a.createElement("br",null),e)}}]),t}(r.Component),j=a(52),w=a(28),C=a(20),x=a(26),I=a.n(x),T=a(51),B=a.n(T),L=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).handlSubmit=function(e){if(e.preventDefault(),a.validate()){var t=-1;a.state.messages.length>0&&a.state.messages.map(function(e){t<=e.id&&(t=e.id)}),t+=1,a.state.messages.push({email:a.state.newmsg.email+t,message:a.state.newmsg.message,date:(new Date).toLocaleString(),id:t}),a.insertIntoLocalStore(a.state.messages),a.clear(e)}},a.clear=function(e){e.preventDefault(),a.initialState()},a.editDone=function(e){a.clear(e)},a.checkedBox=function(e){e.target.checked?a.state.removeSelected.push(e.target.value):a.state.removeSelected=a.state.removeSelected.filter(function(t){return t!=e.target.value&&t}),a.setState({removeSelected:a.state.removeSelected})},a.myRef=s.a.createRef(),a.state={email:"",message:"",newmsg:{email:"test@test",message:"testtesttesttesttest"},count:0,emailError:"",messageError:"",messages:[],removeSelected:[]},a.handlInputChange=a.handlInputChange.bind(Object(v.a)(a)),a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){localStorage.getItem("messages")&&this.setState({messages:JSON.parse(localStorage.getItem("messages"))})}},{key:"GetQueryString",value:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),a=window.location.search.substr(1).match(t);return null!=a?unescape(a[2]):null}},{key:"validate",value:function(){var e="",t="";return this.state.newmsg.email.includes("@")||(e="Invalide email"),""===this.state.newmsg.email&&(e="Empty email"),""===this.state.newmsg.message&&(t="Empty string"),""!==t||""!==e?(this.setState({emailError:e,messageError:t}),!1):(this.setState({emailError:"",messageError:""}),!0)}},{key:"handlInputChange",value:function(e){var t,a=e.target.name,n="checkbox"===e.target.type?e.target.checked:e.target.value,r=this.state.newmsg;r[a]=n,this.setState((t={},Object(w.a)(t,a,n),Object(w.a)(t,"count",this.state.count+1),Object(w.a)(t,"newmsg",r),t))}},{key:"editMsg",value:function(e){B()("#myform",{offset:0,duration:500}),this.setState({newmsg:e})}},{key:"initialState",value:function(){this.setState({email:"",message:"",newmsg:{email:"",message:""},emailError:"",messageError:"",removeSelected:[]})}},{key:"handleMessages",value:function(e,t){var a;e.reverse();var n,r=this.state.removeSelected;e.map(function(e,a){t==a&&(n=e.id)}),a=r.filter(function(e){if(e!=n)return e}),e.splice(t,1),e.reverse(),this.setState({messages:e,removeSelected:a}),this.insertIntoLocalStore(e)}},{key:"removeMsg",value:function(e,t){var a=this.state.messages.slice();this.handleMessages(a,e)}},{key:"removeAll",value:function(){var e=[];window.confirm("Are you sure to remove them?")&&(this.setState({messages:e}),this.insertIntoLocalStore(e))}},{key:"removeSelected",value:function(){var e=this.state.removeSelected,t=this.state.messages.filter(function(t){return!(e.indexOf(t.id.toString())>=0)&&t});window.confirm("Are you sure to remove them?")&&(this.setState({messages:t,removeSelected:[]}),this.insertIntoLocalStore(t))}},{key:"insertIntoLocalStore",value:function(e){localStorage.setItem("messages",JSON.stringify(e))}},{key:"render",value:function(){var e,t=this,a=this.props.match.params.msg?" This is  params of route: "+this.props.match.params.msg:" We have no params of route Or params not match ",n=null,r=null;this.state.emailError&&(n=s.a.createElement("div",{className:"alert alert-danger"},this.state.emailError)),this.state.messageError&&(r=s.a.createElement("div",{className:"alert alert-danger"},this.state.messageError));var l=[],c=!0,i=!0;return i=!(this.state.removeSelected.length>0),(l=(l=Object(j.a)(this.state.messages)).reverse()).length>0?(c=!1,e=l.map(function(e,a){var n="alert-message alert-message-notice ",r=!1;return t.state.removeSelected.map(function(t){e.id==t&&(n+=" alert-message-border border-info  ",r=!0)}),s.a.createElement("div",{key:e.id,className:"col-md-12  "},s.a.createElement("div",{className:n},s.a.createElement("div",{className:"float-right"},s.a.createElement("p",{className:"checkbox"},s.a.createElement("label",null,s.a.createElement("input",{type:"checkbox",className:" form-check-input mr-2 ",onChange:t.checkedBox,value:e.id,checked:r}),s.a.createElement("span",{className:"cr"},s.a.createElement("i",{className:" cr-icon  glyphicon glyphicon-ok"})),"Select")),s.a.createElement("button",{className:"btn btn-info mr-2  ",onClick:function(){return t.editMsg(e)}},"edit"),s.a.createElement("button",{className:"btn btn-danger mr-2   ",onClick:t.removeMsg.bind(t,a)},"remove")),s.a.createElement("h4",null," ",s.a.createElement("b",null,"#",e.id),"  ",s.a.createElement("span",null,e.email),"  "),s.a.createElement("div",{className:"ml-4"}," ",e.message,"   "),s.a.createElement("p",{className:"ml-2"},e.date)),"  ")})):(c=!0,e=s.a.createElement("div",{className:"col-md-12  border border-success "},s.a.createElement("div",{className:"alert-message alert-message-notice"},s.a.createElement("h5",null," We don't have any message yet ")))),s.a.createElement("div",null,s.a.createElement("h1",null,"This is page contact "),s.a.createElement("p",null," ",a," "),s.a.createElement("p",null," Type ",this.state.count," time "),s.a.createElement("p",null," ",this.state.newmsg.email," "),s.a.createElement("p",null," ",this.state.newmsg.message," "),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-8"},s.a.createElement("form",{id:"myform",ref:this.myRef},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"email"},"Email address"),n,s.a.createElement("input",{type:"email",className:"form-control",id:"email",name:"email",placeholder:"name@example.com",onChange:this.handlInputChange,value:this.state.newmsg.email})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"message"},"Example textarea"),r,s.a.createElement("textarea",{className:"form-control",id:"message",name:"message",rows:"8",placeholder:"message",value:this.state.newmsg.message,onChange:this.handlInputChange})),s.a.createElement("button",{className:"btn btn-success mr-2",onClick:this.handlSubmit},"Add"),s.a.createElement("button",{className:"btn btn-dark mr-2",onClick:this.clear},"Clear"),s.a.createElement("button",{className:"btn btn-secondary mr-2",onClick:this.editDone},"Edit")))),s.a.createElement("div",{className:"row ReactCSSTransitionGroup "},s.a.createElement(I.a,{transitionName:"fade",transitionAppear:!0,transitionAppearTimeout:500,transitionEnterTimeout:500,transitionLeaveTimeout:300,className:"sspp"},s.a.createElement("button",{className:"btn btn-danger mt-4 mb-4 mr-2  ",onClick:this.removeAll.bind(this),disabled:c},"removeAll"),s.a.createElement("button",{className:"btn btn-danger mt-4 mb-4   ",onClick:this.removeSelected.bind(this),disabled:i},"removeSelected "),s.a.createElement("p",null,"Message selected: ",this.state.removeSelected.length),e)))}}]),t}(s.a.Component),A=Object(C.b)(function(e){return{count:e.count,text:e.text}})(L),D=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,"this is about page")}}]),t}(r.Component),M=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={items:[{id:1,title:"Todo1"},{id:2,title:"Todo2"}]},a.addItem=a.addItem.bind(Object(v.a)(a)),a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"addItem",value:function(){var e=this.state.items[this.state.items.length-1].id+1,t=this.state.items.concat([{id:e,title:"Todo"+e}]);this.setState({items:t})}},{key:"removeItem",value:function(e){var t=this.state.items.slice();t.splice(e,1),this.setState({items:t})}},{key:"render",value:function(){var e=this,t=this.state.items.map(function(t,a){return s.a.createElement("li",{key:t.id,onClick:function(){return e.removeItem(a)}},t.title)});return s.a.createElement("div",{className:"App"},s.a.createElement("h2",null,"React CSS\u52a8\u753b\u793a\u4f8b"),s.a.createElement("button",{onClick:this.addItem},"\u589e\u52a0\u65b0\u9879"),s.a.createElement("ul",null,s.a.createElement(I.a,{transitionName:"fade",transitionAppear:!0,transitionAppearTimeout:500,transitionEnterTimeout:500,transitionLeaveTimeout:500},t)))}}]),t}(r.Component),R="increment",J="decrement",q=function(){return{type:R}},W=function(){return{type:J}},F=function(e){return{txt:e,type:""}},G=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).handleIncrement=function(e){},a.handleDecrement=function(){},a.st=function(e){var t=e.target.value;a.props.setText(t)},a.state={},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.increment,a=e.decrement;e.setText;return s.a.createElement("div",null,s.a.createElement("h1",null,"this is redux totu page "),s.a.createElement("h3",{className:"text-center mt-2"},this.props.count," "),s.a.createElement("h3",{className:"text-center mt-2"}," ",this.props.text),s.a.createElement("p",{className:"text-center"},s.a.createElement("button",{className:"btn btn-primary mr-2",onClick:function(){return t()}},"Increase"),s.a.createElement("button",{className:"btn btn-danger  mr-2 ",onClick:function(){return a()}},"Decrease"),s.a.createElement("input",{className:" mr-2",type:"text",onKeyUp:this.st})))}}]),t}(r.Component),H=Object(C.b)(function(e){return{count:e.count,text:e.text}},n)(G),K=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"This is 404 page "),s.a.createElement("p",null,"we do not have router named: ",window.location.pathname),s.a.createElement("p",null,"we do not have router named: ",this.props.location.pathname))}}]),t}(s.a.Component),Q=a(15),V=a(99),$=a(100),_=(a(95),a(23));var U=Object(_.b)({count:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;switch((arguments.length>1?arguments[1]:void 0).type){case R:return e+1;case J:return e-1;default:return e}},text:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,a=e;return void 0!=t.txt&&(a=t.txt),a}}),z=Object(_.c)(U);a(96);var P=function(e){return s.a.createElement(C.a,{store:z}," ",s.a.createElement(i.a,{basename:"/ReactJS-tuto/"},s.a.createElement(Q.a,{render:function(e){var t=e.location;return s.a.createElement("div",null,s.a.createElement(o,null),s.a.createElement("div",{className:"container  "},s.a.createElement(V.a,null,s.a.createElement($.a,{key:t.pathname,classNames:"slide",timeout:300},s.a.createElement(Q.c,{location:t},s.a.createElement(Q.a,{exact:!0,path:"/:page(\\d+)?",component:S}),s.a.createElement(Q.a,{path:"/contact/:msg(\\d+)?",component:A}),s.a.createElement(Q.a,{path:"/Messageb",component:M}),s.a.createElement(Q.a,{path:"/about",component:D}),s.a.createElement(Q.a,{path:"/rt",component:H}),s.a.createElement(Q.a,{component:K}),s.a.createElement(Q.a,{render:function(){return s.a.createElement("div",null,"Not Found")}}))))),s.a.createElement(m,null))}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[54,1,2]]]);
//# sourceMappingURL=main.c6cf4a5f.chunk.js.map