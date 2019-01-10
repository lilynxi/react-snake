import React, {Component} from 'react';
import './Canvas.css';
import Snake from './Snake';
import Food from './Food';
import Button from './Button';

class Canvas extends Component {

  speed = this.props.appConfig.INITIALSPEED;

  constructor(props) {
    super(props);
    this.state = {
      snake : [
        {x:2, y:3 },
        {x:2, y:4 },
        {x:2, y:5 },
      ], 
      food : {x:5, y:2,},
      direction: "up"
    };

    this.canvasWidth = props.appConfig.CANVASWIDTH * props.appConfig.CELLSIZE;
    this.canvasHeight= props.appConfig.CANVASHEIGHT * props.appConfig.CELLSIZE;
    this.cellSize = props.appConfig.CELLSIZE;
  }

  componentDidMount = () => {
    document.addEventListener('keydown', this.changeDirection);
    this.createInterval()
  }

  createInterval = () => {
    clearInterval(this.interval)
    this.interval = setInterval(this.snakeMove, this.speed);
  }

  changeDirection = (e) => {
    //TODO clean up
    switch(e.key){
      case "ArrowRight": if(this.state.direction !== "left") { this.setState({ direction: "right" }); } break;
      case "ArrowDown": if(this.state.direction !== "up") { this.setState({ direction: "down" }); } break;
      case "ArrowLeft": if(this.state.direction !== "right") { this.setState({ direction: "left" }); } break;
      case "ArrowUp": if(this.state.direction !== "down") { this.setState({ direction: "up" }); } break;
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
    const snakeElem = { x: newSnake[0].x+dir.x, y: newSnake[0].y+dir.y };

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

    let isColliding = this.isColliding(snakeElem);


    if (isColliding){
      this.speed = this.props.appConfig.INITIALSPEED;
      this.createInterval();
      this.setState({
        snake : [
          {x:2, y:3 },
          {x:2, y:4 },
          {x:2, y:5 },
        ], 
        food : {x:5, y:2,},
        direction: "up", 
      });
      return;
    };

    newSnake.unshift(snakeElem);


    // find food
    if (snakeElem.x === this.state.food.x && snakeElem.y === this.state.food.y){
      let newFood = {
        x : Math.floor(Math.random() * this.props.appConfig.CANVASWIDTH),
        y : Math.floor(Math.random() * this.props.appConfig.CANVASHEIGHT),
      }

      while(this.isColliding(newFood)){
        newFood = {
          x : Math.floor(Math.random() * this.props.appConfig.CANVASWIDTH),
          y : Math.floor(Math.random() * this.props.appConfig.CANVASHEIGHT),
        }
      }


      this.setState({food : newFood });

      this.speed = this.speed * 0.9
      this.createInterval()

    } else {
      newSnake.splice(-1,1);
    }

    this.setState({snake:newSnake});
  };

  isColliding = (elem) => {
    const filtered = this.state.snake.filter((oldSnakeElement) => {
      if (JSON.stringify(oldSnakeElement) === JSON.stringify(elem)) {
        return true;
      }
      return false
    })

    return filtered.length
  };

  handleClick = (direction) => {
    //TODO clean up
    switch(direction){
      case "right": if(this.state.direction !== "left") { this.setState({ direction: "right" }); } break;
      case "down": if(this.state.direction !== "up") { this.setState({ direction: "down" }); } break;
      case "left": if(this.state.direction !== "right") { this.setState({ direction: "left" }); } break;
      case "up": if(this.state.direction !== "down") { this.setState({ direction: "up" }); } break;
      default: return; 
    }
  }
 

  render(){
    return (
      <div className="canvas" style={{ width: `${this.canvasWidth}px`, height: `${this.canvasHeight}px`}} >
        {this.state.snake.map((snake, index) => (
          <Snake
            key={`snake-limb-${index}`}
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
        <Button direction="right" handleClick={this.handleClick} />
        <Button direction="down" handleClick={this.handleClick} />
        <Button direction="left" handleClick={this.handleClick} />
        <Button direction="up" handleClick={this.handleClick} />
      </div>
    );


  }
}

export default Canvas;