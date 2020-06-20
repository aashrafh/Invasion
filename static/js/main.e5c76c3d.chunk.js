(this.webpackJsonpinvasion=this.webpackJsonpinvasion||[]).push([[0],{21:function(t,e,n){t.exports=n(34)},32:function(t,e,n){},34:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(5),i=n.n(o),c=n(6),s=n(7),l=(n(32),n(14)),u=n(15),m=n(20),f=n(19),y=n(1),d=function(t){var e=t.startPoint,n=t.firstControlPoint,a=t.secondControlPoint,r=t.endPoint;return"M ".concat(e.x," ").concat(e.y," c ").concat(n.x," ").concat(n.y," ").concat(a.x," ").concat(a.y," ").concat(r.x," ").concat(r.y)},x=function(t){return 180*t/Math.PI},h=function(t){return t*Math.PI/180},p=function(t,e,n,a){if(n>=0&&a>=0)return 90;if(n<0&&a>=0)return-90;var r=(n-t)/(a-e);return-1*x(Math.atan(r))},g=function(t,e,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:300,r=-1*n+90,o=x(Math.cos(h(r)))/a,i=x(Math.sin(h(r)))/a;return{x:t+o,y:e-i}},v=function(){var t={fontFamily:'"Droid Sans", cursive',fontSize:80,fill:"#cbca62"},e={startPoint:{x:-190,y:-950},firstControlPoint:{x:95,y:-50},secondControlPoint:{x:285,y:-50},endPoint:{x:380,y:0}},n=Object(y.a)(Object(y.a)({},e),{},{startPoint:{x:-250,y:-780},firstControlPoint:{x:125,y:-90},secondControlPoint:{x:375,y:-90},endPoint:{x:500,y:0}});return r.a.createElement("g",{filter:"url(#shadow)"},r.a.createElement("defs",null,r.a.createElement("path",{id:"InvasionCurve",d:d(e)}),r.a.createElement("path",{id:"ProtectTheEarthCurve",d:d(n)})),r.a.createElement("text",{style:t},r.a.createElement("textPath",{xlinkHref:"#InvasionCurve"},"Invasion")),r.a.createElement("text",{style:t},r.a.createElement("textPath",{xlinkHref:"#ProtectTheEarthCurve"},"Protect Earth!")))},E=[-300,-150,150,300],b=function(){return r.a.createElement("rect",{x:-5e3,y:-1100,width:1e4,height:1200,style:{fill:"#87CEFA"}})},S=function(){return r.a.createElement("g",{id:"ground"},r.a.createElement("rect",{id:"ground-base","data-name":"ground",x:-5e3,y:0,width:1e4,height:100,style:{fill:"#59a941"}}),r.a.createElement("line",{x1:-5e3,y1:0,x2:5e3,y2:0,style:{stroke:"#458232",strokeWidth:"3px"}}))},O=function(t){var e={fill:"#999",stroke:"#666",strokeWidth:"2px"},n={startPoint:{x:-20,y:-70},firstControlPoint:{x:-40,y:170},secondControlPoint:{x:80,y:170},endPoint:{x:40,y:0}},a="rotate(".concat(t.angle,", 0, 0)");return r.a.createElement("g",{transform:a},r.a.createElement("path",{d:d(n),style:e}),r.a.createElement("line",{x1:-20,y1:-70,x2:20,y2:-70,style:e}))},P=function(){var t={fill:"#a16012",stroke:"#75450e",strokeWidth:"2px"},e={startPoint:{x:-40,y:60},firstControlPoint:{x:20,y:-60},secondControlPoint:{x:60,y:-60},endPoint:{x:80,y:0}};return r.a.createElement("g",null,r.a.createElement("path",{d:d(e),style:t}),r.a.createElement("line",{x1:-40,y1:60,x2:40,y2:60,style:t}))},w=function(t){return r.a.createElement("ellipse",{cx:t.position.x,cy:t.position.y,rx:16,ry:16,style:{fill:"#777",stroke:"#444",strokeWidth:"2px"}})},k=function(t){return r.a.createElement("g",{filter:"url(#shadow)"},r.a.createElement("text",{x:"300",y:"80",style:{fontFamily:'"Droid Sans", cursive',fontSize:80,fill:"#d6d33e"}},t.score))},j=n(9),C=function(t){return r.a.createElement("ellipse",{cx:t.position.x,cy:t.position.y,rx:40,ry:10,style:{fill:"#979797",stroke:"#5c5c5c"}})},T=function(t){var e={startPoint:{x:t.position.x-20,y:t.position.y},firstControlPoint:{x:10,y:-25},secondControlPoint:{x:30,y:-25},endPoint:{x:40,y:0}};return r.a.createElement("path",{d:d(e),style:{fill:"#b6b6b6",stroke:"#7d7d7d"}})},M=n(10);function D(){var t=Object(j.a)(["\n  animation: "," 4s linear;\n"]);return D=function(){return t},t}function _(){var t=Object(j.a)(["\n0% {\n  transform: translateY(0);\n \n}\n100% {\n  transform: translateY(","px);\n}\n"]);return _=function(){return t},t}var I=Object(M.b)(_(),1200),A=M.a.g(D(),I),W=function(t){return r.a.createElement(A,null,r.a.createElement(C,{position:t.position}),r.a.createElement(T,{position:t.position}))},z=function(t){var e={fill:"#da0d15",stroke:"#a51708",strokeWidth:"2px"},n={startPoint:{x:t.position.x,y:t.position.y},firstControlPoint:{x:-20,y:-20},secondControlPoint:{x:-40,y:10},endPoint:{x:0,y:40}},a={startPoint:{x:t.position.x,y:t.position.y},firstControlPoint:{x:20,y:-20},secondControlPoint:{x:40,y:10},endPoint:{x:0,y:40}};return r.a.createElement("g",{filter:"url(#shadow)"},r.a.createElement("path",{d:d(n),style:e}),r.a.createElement("path",{d:d(a),style:e}))},B=function(t){var e={x:-400,y:-280,width:800,height:200,rx:10,ry:10,style:{fill:"transparent",cursor:"pointer"},onClick:t.onClick},n={textAnchor:"middle",x:0,y:-150,style:{fontFamily:'"Droid Sans", cursive',fontSize:60,fill:"#e3e3e3",cursor:"pointer"},onClick:t.onClick};return r.a.createElement("g",{filter:"url(#shadow"},r.a.createElement("rect",e),r.a.createElement("text",n,"Tap To Protect The Earth!"))},G=function(t){for(var e=[window.innerWidth/-2,-1100,window.innerWidth,1200],n=[],a=0;a<t.gameState.lives;a++){var o={x:-180-70*a,y:35};n.push(r.a.createElement(z,{position:o,key:a}))}return(r.a.createElement("svg",{style:{border:"1px solid black"},preserveAspectRatio:"xMaxYMax none",viewBox:e,onMouseMove:t.trackMouse,onClick:t.shoot,id:"game-canvas"},r.a.createElement("defs",null,r.a.createElement("filter",{id:"shadow"},r.a.createElement("feDropShadow",{dx:"1",dy:"1",stdDeviation:"2"}))),r.a.createElement(b,null),r.a.createElement(S,null),t.gameState.bombs.map((function(t){return r.a.createElement(w,{key:t.id,position:t.position})})),r.a.createElement(O,{angle:t.angle}),r.a.createElement(P,null),!t.gameState.start&&r.a.createElement("g",null,r.a.createElement(B,{onClick:function(){return t.startGame()}}),r.a.createElement(v,null)),r.a.createElement(k,{score:t.gameState.kills}),t.gameState.currentSaucers.map((function(t){return r.a.createElement(W,{key:t.id,position:t.position})})),n))},H=function(t){Object(m.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).resizeTheWindow=function(){window.onresize=function(){var t=document.getElementById("game-canvas");t.style.width="".concat(window.innerWidth,"px"),t.style.height="".concat(window.innerHeight,"px")},window.onresize()},t.shoot=function(){t.props.shoot(t.canvasMousePosition)},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.resizeTheWindow();var t=this;setInterval((function(){t.props.moveObjects(t.canvasMousePosition)}),10)}},{key:"trackMouse",value:function(t){this.canvasMousePosition=function(t){var e=document.getElementById("game-canvas"),n=e.createSVGPoint();n.x=t.clientX,n.y=t.clientY;var a=n.matrixTransform(e.getScreenCTM().inverse());return{x:a.x,y:a.y}}(t)}},{key:"render",value:function(){var t=this;return(r.a.createElement("div",{className:"App"},r.a.createElement(G,{angle:this.props.angle,startGame:this.props.startGame,gameState:this.props.gameState,trackMouse:function(e){t.trackMouse(e)},shoot:this.shoot})))}}]),n}(a.Component),N=Object(s.b)((function(t){return{angle:t.angle,gameState:t.gameState}}),(function(t){return{moveObjects:function(e){return t(function(t){return{type:"MOVE_OBJECTS",mousePosition:t}}(e))},startGame:function(){t({type:"START_GAME"})},shoot:function(e){return t(function(t){return{type:"SHOOT",mousePosition:t}}(e))}}}))(H),R=n(2);var V=function(t){if(!t.gameState.start)return t;var e=t.gameState,n=e.lastSaucer,a=e.currentSaucers;if(!((new Date).getTime()-n.getTime()>1e3&&a.length<4))return t;var r=(new Date).getTime(),o=Math.floor(4*Math.random()),i={position:{x:E[o],y:-1e3},createdAt:(new Date).getTime(),id:r};return Object(y.a)(Object(y.a)({},t),{},{gameState:Object(y.a)(Object(y.a)({},t.gameState),{},{currentSaucers:[].concat(Object(R.a)(t.gameState.currentSaucers),[i]),lastSaucer:new Date})})},X=function(t){return t.filter((function(t){return t.position.y>-800&&t.position.x>-500&&t.position.x<500})).map((function(t){var e=t.position,n=e.x,a=e.y,r=t.angle;return Object(y.a)(Object(y.a)({},t),{},{position:g(n,a,r,5)})}))},F=function(t,e){var n=[];return e.forEach((function(e){var a=(new Date).getTime()-e.createdAt,r=e.position.x,o=e.position.y+a/4e3*1200,i={x1:r-40,y1:o-10,x2:r+40,y2:o+10};t.forEach((function(t){var a={x1:t.position.x-8,y1:t.position.y-8,x2:t.position.x+8,y2:t.position.y+8};(function(t,e){return t.x1<e.x2&&t.x2>e.x1&&t.y1<e.y2&&t.y2>e.y1})(i,a)&&n.push({bombId:t.id,saucerId:e.id})}))})),n};var J=function(t,e){if(!t.gameState.start)return t;var n=X(t.gameState.bombs),a=e.mousePosition||{x:0,y:0},r=V(t),o=(new Date).getTime(),i=r.gameState.currentSaucers.filter((function(t){return o-t.createdAt<4e3})),c=i.length<r.gameState.currentSaucers.length,s=t.gameState.lives;c&&s--;var l=s>0;l||(s=3,n=[],i=[]);var u=a.x,m=a.y,f=p(0,0,u,m),d=F(n,i),x=d.map((function(t){return t.bombId})),h=d.map((function(t){return t.saucerId}));i=i.filter((function(t){return h.indexOf(t.id)})),n=n.filter((function(t){return x.indexOf(t.id)}));var g=t.gameState.kills+h.length;return Object(y.a)(Object(y.a)({},r),{},{gameState:Object(y.a)(Object(y.a)({},r.gameState),{},{currentSaucers:Object(R.a)(i),bombs:Object(R.a)(n),start:l,lives:s,kills:g}),angle:f})};var Y=function(t,e){return Object(y.a)(Object(y.a)({},t),{},{gameState:Object(y.a)(Object(y.a)({},e),{},{start:!0})})};var L=function(t,e){if(!t.gameState.start)return t;var n=t.gameState.bombs;if(2===n.length)return t;var a=e.mousePosition,r=a.x,o=a.y,i={position:{x:0,y:0},angle:p(0,0,r,o),id:(new Date).getTime()};return Object(y.a)(Object(y.a)({},t),{},{gameState:Object(y.a)(Object(y.a)({},t.gameState),{},{bombs:[].concat(Object(R.a)(n),[i])})})},U={start:!1,lives:3,kills:0,currentSaucers:[],lastSaucer:new Date,bombs:[]},$={angle:45,gameState:U};var q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,e=arguments.length>1?arguments[1]:void 0;return"MOVE_OBJECTS"===e.type?J(t,e):"START_GAME"===e.type?Y(t,U):"SHOOT"===e.type?L(t,e):t};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=Object(c.b)(q,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(r.a.createElement(s.a,{store:K},r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.e5c76c3d.chunk.js.map