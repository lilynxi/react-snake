(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(25)},,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(2),r=n(4),i=n(3),o=n(5),l=n(0),p=n.n(l),s=n(7),f=n.n(s),u=n(8),d=(n(15),n(17),function(e){var t=e.cellSize,n=e.left,a=e.top;return p.a.createElement("div",{className:"snake",style:{width:"".concat(t,"px"),height:"".concat(t,"px"),left:"".concat(n,"px"),top:"".concat(a,"px")}})}),h=(n(19),function(e){var t=e.cellSize,n=e.left,a=e.top;return p.a.createElement("div",{className:"food",style:{width:"".concat(t,"px"),height:"".concat(t,"px"),left:"".concat(n,"px"),top:"".concat(a,"px")}})}),C=(n(21),function(e){function t(){var e,n;Object(a.a)(this,t);for(var c=arguments.length,o=new Array(c),l=0;l<c;l++)o[l]=arguments[l];return(n=Object(r.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).handleClick=function(e){n.props.handleClick(n.props.direction)},n}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return p.a.createElement("div",{className:"button-".concat(this.props.direction," button"),onClick:this.handleClick})}}]),t}(l.Component)),y=function(e){var t=e.speed,n=e.count;return p.a.createElement("div",null,"Speed: ",t,", Count: ",n)},S=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(i.a)(t).call(this,e))).speed=n.props.appConfig.INITIALSPEED,n.componentDidMount=function(){document.addEventListener("keydown",n.changeDirection),n.createInterval()},n.createInterval=function(){clearInterval(n.interval),n.interval=setInterval(n.snakeMove,n.speed)},n.snakeMove=function(){var e;switch(n.state.direction){case"right":e={x:1,y:0};break;case"down":e={x:0,y:1};break;case"left":e={x:-1,y:0};break;case"up":e={x:0,y:-1};break;default:return}var t=Object(u.a)(n.state.snake),a={x:t[0].x+e.x,y:t[0].y+e.y};if(a.x>=n.props.appConfig.CANVASWIDTH&&(a.x=0),a.y>=n.props.appConfig.CANVASHEIGHT&&(a.y=0),a.x<0&&(a.x=n.props.appConfig.CANVASWIDTH-1),a.y<0&&(a.y=n.props.appConfig.CANVASHEIGHT-1),n.isColliding(a))return n.speed=n.props.appConfig.INITIALSPEED,n.createInterval(),void n.setState({snake:[{x:2,y:3},{x:2,y:4},{x:2,y:5}],food:{x:5,y:2},direction:"up",count:0});if(t.unshift(a),a.x===n.state.food.x&&a.y===n.state.food.y){for(var c={x:Math.floor(Math.random()*n.props.appConfig.CANVASWIDTH),y:Math.floor(Math.random()*n.props.appConfig.CANVASHEIGHT)};n.isColliding(c);)c={x:Math.floor(Math.random()*n.props.appConfig.CANVASWIDTH),y:Math.floor(Math.random()*n.props.appConfig.CANVASHEIGHT)};n.setState({food:c,count:n.state.count+50}),n.speed=Math.floor(.95*n.speed),n.createInterval()}else t.splice(-1,1);n.setState({snake:t})},n.isColliding=function(e){return n.state.snake.filter(function(t){return JSON.stringify(t)===JSON.stringify(e)}).length},n.handleClick=function(e){n.setDirection(e)},n.changeDirection=function(e){n.setDirection(e.key)},n.setDirection=function(e){switch(e){case"ArrowRight":"left"!==n.state.direction&&n.setState({direction:"right"});break;case"ArrowDown":"up"!==n.state.direction&&n.setState({direction:"down"});break;case"ArrowLeft":"right"!==n.state.direction&&n.setState({direction:"left"});break;case"ArrowUp":"down"!==n.state.direction&&n.setState({direction:"up"});break;default:return}},n.state={snake:[{x:2,y:3},{x:2,y:4},{x:2,y:5}],food:{x:5,y:2},direction:"up",count:0},n.canvasWidth=e.appConfig.CANVASWIDTH*e.appConfig.CELLSIZE,n.canvasHeight=e.appConfig.CANVASHEIGHT*e.appConfig.CELLSIZE,n.cellSize=e.appConfig.CELLSIZE,n}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return p.a.createElement("div",null,p.a.createElement(y,{speed:this.speed,count:this.state.count}),p.a.createElement("div",{className:"canvas",style:{width:"".concat(this.canvasWidth,"px"),height:"".concat(this.canvasHeight,"px")}},this.state.snake.map(function(t,n){return p.a.createElement(d,{key:"snake-elem-".concat(n),cellSize:e.cellSize,left:e.cellSize*t.x,top:e.cellSize*t.y})}),p.a.createElement(h,{cellSize:this.cellSize,left:this.cellSize*this.state.food.x,top:this.cellSize*this.state.food.y}),p.a.createElement(C,{direction:"ArrowRight",handleClick:this.handleClick}),p.a.createElement(C,{direction:"ArrowDown",handleClick:this.handleClick}),p.a.createElement(C,{direction:"ArrowLeft",handleClick:this.handleClick}),p.a.createElement(C,{direction:"ArrowUp",handleClick:this.handleClick})))}}]),t}(l.Component),v=(n(23),function(e){function t(){var e,n;Object(a.a)(this,t);for(var c=arguments.length,o=new Array(c),l=0;l<c;l++)o[l]=arguments[l];return(n=Object(r.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).appConfig={CANVASWIDTH:18,CANVASHEIGHT:18,CELLSIZE:22,INITIALSPEED:300},n}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return p.a.createElement("div",{className:"app"},p.a.createElement(S,{appConfig:this.appConfig}))}}]),t}(l.Component));f.a.render(p.a.createElement(v,null),document.querySelector("#root"))}],[[9,2,1]]]);
//# sourceMappingURL=main.7c51ef23.chunk.js.map