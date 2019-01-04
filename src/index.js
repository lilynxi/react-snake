import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Canvas from './Canvas';

class App extends Component {

  

  appConfig = {
    CANVASWIDTH: 10,
    CANVASHEIGHT: 10,
    CELLSIZE: 20,
  };

  createCanvas = (appConfig) => {
    return {
      "canvasWidth" : appConfig.CANVASWIDTH * appConfig.CELLSIZE,
      "canvasHeight" : appConfig.CANVASHEIGHT * appConfig.CELLSIZE,
      "cellSize" : appConfig.CELLSIZE,
    }
  };


  render(){
    return <div style={{marginLeft:"30px"}}><Canvas canvas={this.createCanvas(this.appConfig)} /></div>
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));


