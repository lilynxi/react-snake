import React, {Component} from 'react';
import './Canvas.css';
import Snake from './Snake';

class Canvas extends Component {

  KEYS = {left: 37, up: 38, right: 39, down: 40};

  constructor(props) {
    super(props);
    this.state = {
      snake : [
        {x:2, y:3, key:2 },
        {x:2, y:4, key:1 },
        {x:2, y:5, key:0 },
      ], 
    }
  }

  componentDidMount = () => {
    document.addEventListener('keydown', this.handleKeyEvent);
  }

  handleKeyEvent = (e) => {

    let direction;

    switch(e.keyCode){
      case this.KEYS.right: direction = { x:1, y:0, }; break;
      case this.KEYS.down: direction = { x:0, y:1, }; break;
      case this.KEYS.left: direction = { x:-1, y:0, }; break;
      case this.KEYS.up: direction = { x:0, y:-1, }; break;
      default: return; 
    }

    const newSnake = [...this.state.snake];
    const snakeElem = { x: newSnake[0].x+direction.x, y: newSnake[0].y+direction.y, key: newSnake[0].key+1, };
    newSnake.unshift(snakeElem);
    newSnake.splice(-1,1);

    this.setState({snake:newSnake});

  };



  render(){
    const {canvasWidth, canvasHeight, cellSize} = this.props.canvas;

    return (
      <div className="canvas" style={{ width: `${canvasWidth}px`, height: `${canvasHeight}px`}}>
        {this.state.snake.map(snake => (
          <Snake
            key={snake.key}
            cellSize={cellSize}
            left={cellSize * snake.x}
            top={cellSize * snake.y}
          />
        ))}
        
      </div>
    );


  }
}

export default Canvas;