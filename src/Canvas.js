import React, {Component} from 'react';
import './Canvas.css';
import Snake from './Snake';
import Food from './Food';

class Canvas extends Component {

  constructor(props) {
    super(props);
    this.state = {
      snake : [
        {x:2, y:3, key:2 },
        {x:2, y:4, key:1 },
        {x:2, y:5, key:0 },
      ], 
      food : {x:5, y:2,},
      direction: "up",
    };

    this.canvasWidth = props.appConfig.CANVASWIDTH * props.appConfig.CELLSIZE;
    this.canvasHeight= props.appConfig.CANVASHEIGHT * props.appConfig.CELLSIZE;
    this.cellSize = props.appConfig.CELLSIZE;
    this.keys = {left: 37, up: 38, right: 39, down: 40};

  }

  componentDidMount = () => {
    document.addEventListener('keydown', this.changeDirection);
    setInterval(this.snakeMove, 200);
  }

  changeDirection = (e) => {
    switch(e.keyCode){
      case this.keys.right: if(this.state.direction !== "left") { this.setState({ direction: "right" }); } break;
      case this.keys.down: if(this.state.direction !== "up") { this.setState({ direction: "down" }); } break;
      case this.keys.left: if(this.state.direction !== "right") { this.setState({ direction: "left" }); } break;
      case this.keys.up: if(this.state.direction !== "down") { this.setState({ direction: "up" }); } break;
      default: return; 
    }
  };

  snakeMove = () => {
    let dir;

    switch(this.state.direction){
      case "right": dir = { x:1, y:0, }; break;
      case "down": dir= { x:0, y:1, }; break;
      case "left": dir = { x:-1, y:0, }; break;
      case "up": dir = { x:0, y:-1, }; break;
      default: return; 
    }

    const newSnake = [...this.state.snake];
    const snakeElem = { x: newSnake[0].x+dir.x, y: newSnake[0].y+dir.y, key: newSnake[0].key+1, };

    // prevent crash
    if(snakeElem.x >= this.props.appConfig.CANVASWIDTH){
      snakeElem.x = 0;
    }
    if(snakeElem.y >= this.props.appConfig.CANVASHEIGHT){
      snakeElem.y = 0;
    }
    if(snakeElem.x < 0){
      snakeElem.x = this.props.appConfig.CANVASWIDTH-1;
    }
    if(snakeElem.y < 0){
      snakeElem.y = this.props.appConfig.CANVASHEIGHT-1;
    }

    newSnake.unshift(snakeElem);


    // find food
    if (snakeElem.x === this.state.food.x && snakeElem.y === this.state.food.y){
      const newFoodX = Math.floor(Math.random() * this.props.appConfig.CANVASWIDTH);
      const newFoodY = Math.floor(Math.random() * this.props.appConfig.CANVASHEIGHT);
      this.setState({food : { x: newFoodX, y:newFoodY, }});
    } else {
      newSnake.splice(-1,1);
    }

    this.setState({snake:newSnake});
  };
 

  render(){
    return (
      <div className="canvas" style={{ width: `${this.canvasWidth}px`, height: `${this.canvasHeight}px`}}>
        {this.state.snake.map(snake => (
          <Snake
            key={snake.key}
            cellSize={this.cellSize}
            left={this.cellSize * snake.x}
            top={this.cellSize * snake.y}
          />
        ))}
        <Food
          cellSize={this.cellSize}
          left={this.cellSize * this.state.food.x}
          top={this.cellSize * this.state.food.y}
        />
      </div>
    );


  }
}

export default Canvas;