(this.webpackJsonpboggle=this.webpackJsonpboggle||[]).push([[0],{133:function(e,t,a){e.exports=a(428)},360:function(e,t,a){},427:function(e,t,a){},428:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(3),o=a.n(s);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(80),c=a(42),l=a.n(c),d=a(109),u=a(110),m=a(126),p=a(111),h=a(128),v=a(430),g=a(432),f=a(434),E=a(435),W=a(50),w=a(431),y=a(433),b=a(112),k=a(113),L=a(114),S=a.n(L).a.create({baseURL:"https://sbimochan.pythonanywhere.com",headers:{"Content-Type":"application/json"}});function C(e){var t,a;return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return"/boggle",t={word:e},n.next=4,l.a.awrap(S.post("/boggle",t));case 4:return a=n.sent,n.abrupt("return",a);case 6:case"end":return n.stop()}}))}var N=8,O=13,x=(a(359),a(360),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).state={isLoading:!1,score:0,validWords:[],isCurrentWordValid:!1,currentWord:"",randomLetters:[],status:"",isTimeUp:!1,isModalOpen:!1,timerDuraion:180,isNewGame:!1},a.isLoading=function(e){a.setState({isLoading:e})},a.checkWord=function(){var e,t;return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!a.state.isTimeUp){n.next=2;break}return n.abrupt("return");case 2:return a.isLoading(!0),n.prev=3,n.next=6,l.a.awrap(C(a.state.currentWord));case 6:e=n.sent,t=e&&e.data||[],a.setState({isCurrentWordValid:t.isValidWord}),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(3),a.setState({status:"Something wrong with server."});case 14:a.state.isCurrentWordValid?a.collectWords():a.setState({status:"Invalid word"}),a.isLoading(!1),a.resetWord();case 17:case"end":return n.stop()}}),null,null,[[3,11]])},a.collectWords=function(){a.state.validWords.includes(a.state.currentWord)?a.setState({status:"You tried same twice. I got you!"}):a.setState({validWords:[].concat(Object(i.a)(a.state.validWords),[a.state.currentWord]),score:a.state.score+a.state.currentWord.length,status:""})},a.generateLetters=function(e){var t=new Set,n="abcdefghijklmnopqrstuvwxyz".length;for(a.isLoading(!0);t.size<e;)t.add("abcdefghijklmnopqrstuvwxyz".charAt(Math.floor(Math.random()*n)));a.setState({randomLetters:Object(i.a)(t)}),a.isLoading(!1)},a.saveCurrentLetter=function(e){a.state.isTimeUp||a.setState({currentWord:a.state.currentWord.concat(e)})},a.resetWord=function(){a.setState({currentWord:""})},a.doBackspace=function(e){switch(e.keyCode){case N:a.setState({currentWord:a.state.currentWord.slice(0,-1)});break;case O:a.checkWord()}a.handleShortcutKeys(e.key)},a.handleShortcutKeys=function(e){a.state.randomLetters.includes(e)&&a.saveCurrentLetter(e)},a.endGame=function(){a.setState({isTimeUp:!0,isModalOpen:!0}),a.componentWillUnmount()},a.closeModal=function(){a.setState({isModalOpen:!1})},a.renderTime=function(e){return 0===e?r.a.createElement("div",{className:"timer"},"Too late..."):r.a.createElement("div",{className:"timer"},r.a.createElement("div",{className:"text"},"Remaining"),r.a.createElement("div",{className:"value"},e),r.a.createElement("div",{className:"text"},"seconds"))},a.reset=function(){a.setState({isLoading:!1,score:0,validWords:[],isCurrentWordValid:!1,currentWord:"",randomLetters:[],status:"",isTimeUp:!1,isModalOpen:!1,timerDuraion:10,isNewGame:!0}),a.componentDidMount()},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.generateLetters(16),document.addEventListener("keydown",this.doBackspace,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.doBackspace,!1)}},{key:"render",value:function(){var e=this;return r.a.createElement(v.a,null,r.a.createElement(g.a,{title:"Boggle Game",ghost:!1,avatar:{src:"https://avatars1.githubusercontent.com/u/8186664?s=460&v=4"}}),r.a.createElement(v.a.Content,{style:{height:"100vh"}},r.a.createElement(f.a,{gutter:[36,36],className:"pd-20"},r.a.createElement(E.a,{span:8},r.a.createElement("h2",null,"Status"),r.a.createElement("div",{className:"message-block pd-20"},this.state.status),r.a.createElement("div",{className:"valid-word-list pd-20"},r.a.createElement("ul",null,this.state.validWords.map((function(e){return r.a.createElement("li",null,e)})))),r.a.createElement(k.CountdownCircleTimer,{isPlaying:!0,durationSeconds:this.state.timerDuraion,renderTime:this.renderTime,onComplete:function(){return e.endGame(),[e.state.isNewGame,0]},colors:[["#004777",.33],["#F7B801",.33],["#A30000"]]})),r.a.createElement(E.a,{span:6,align:"middle"},r.a.createElement("div",{className:"pd-20"},r.a.createElement("input",{type:"text",value:this.state.currentWord,disabled:!0}),r.a.createElement(W.a,{type:"primary",className:"md-20",onClick:this.resetWord},"Reset")),r.a.createElement("div",{className:"grid"},this.state.randomLetters.map((function(t,a){return r.a.createElement("div",{key:a,className:"cell",onClick:function(t){return e.saveCurrentLetter(t.target.innerText)}},t)}))),r.a.createElement(W.a,{type:"primary",onClick:this.checkWord,className:"word-submit"},"It is a word"),r.a.createElement("div",null,r.a.createElement(w.a,{size:"large",spinning:this.state.isLoading}))),r.a.createElement(E.a,{span:4},r.a.createElement("h2",null,"Scores"),r.a.createElement("div",{className:"score"},this.state.score),r.a.createElement("div",null,r.a.createElement(W.a,{type:"primary",onClick:function(){return e.generateLetters(16)}},"Shuffle boggle"))),r.a.createElement(E.a,{span:4},r.a.createElement(b.Github,{user:"sbimochan",repo:"boggle"}))),r.a.createElement(y.a,{title:"Game Over",visible:this.state.isModalOpen,onOk:this.reset,onCancel:this.closeModal},r.a.createElement("p",null,"Your score is ",r.a.createElement("strong",null,this.state.score)),r.a.createElement("p",null,"Do you wanna reset game?"))))}}]),t}(n.Component));a(427);o.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[133,1,2]]]);
//# sourceMappingURL=main.cf0ac89d.chunk.js.map