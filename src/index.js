import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Canvas from './Canvas';

class App extends Component {

  appConfig = {
    CANVASWIDTH: 10,
    CANVASHEIGHT: 10,
    CELLSIZE: 20,
  };

  render(){
    return <div style={{marginLeft:"30px"}}><Canvas appConfig={this.appConfig} /></div>
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));


