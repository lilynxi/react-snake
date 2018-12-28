import React, {Component} from 'react';
import './Canvas.css';
import Snake from './Snake';

class Canvas extends Component {

  render(){
    return (
      <div className="canvas" style={{ width: `${this.props.appConfig.CANVASWIDTH}px`, height: `${this.props.appConfig.CANVASHEIGHT}px` }}>
        <Snake CELLSIZE={this.props.appConfig.CELLSIZE} />
      </div>
    ); // TODO: destructure
  }
}

export default Canvas;